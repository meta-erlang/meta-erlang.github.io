---
title: Exploring x32 psABI for Erlang/OTP
authors: [joaohf]
tags: [meta-erlang, x32]
---

## Intro

According to [Wikipedia X32 ABI](https://en.wikipedia.org/wiki/X32_ABI) page:

> The x32 ABI is an application binary interface (ABI) and one of the interfaces
> of the Linux kernel. The x32 ABI provides 32-bit integers, long and pointers
> (ILP32) on Intel and AMD 64-bit hardware. The ABI allows programs to take
> advantage of the benefits of x86-64 instruction set (larger number of CPU
> registers, better floating-point performance, faster position-independent
> code, shared libraries, function parameters passed via registers, faster
> syscall instruction) while using 32-bit pointers and thus avoiding the
> overhead of 64-bit pointers.

So, I'm wondering if it would be possible to enable x32 support in Erlang/OTP
build. That way, I could make a Yocto image for x32 that runs on x86-64
machines.

Here is some references about the subject:

- [Yocto, Using x32 psABI](https://docs.yoctoproject.org/dev-manual/x32-psabi.html)
- [x32-abi](https://sites.google.com/site/x32abi/home?authuser=0)
- [X32 – A Native 32bit ABI For X86-64](http://linuxplumbersconf.org/2011/ocw//system/presentations/531/original/x32-LPC-2011-0906.pptx)
- [Debian x32 port](https://wiki.debian.org/X32Port)
- [System V Application Binary Interface AMD64 Architecture Processor Supplement (With LP64 and ILP32 Programming Models](https://raw.githubusercontent.com/wiki/hjl-tools/x86-psABI/x86-64-psABI-1.0.pdf)

In fact, x32 seems to be around since 2011/2012 and has been integrated in many
platforms. Like Ubuntu, Debian, Gentoo.

## Building Erlang/OTP using x32 toolchain

:::note

A toolchain with x32 support is necessary. However, it's not easy to find one.
Instead projects like [crosstool-NG](https://crosstool-ng.github.io/) and
[Yocto Project](https://www.yoctoproject.org/) have tools to make a toolchain
with x32 support enabled.

:::

In order to follow this experiment, you can download a specific toolchain with
x32 enabled here:
[poky-glibc-x86_64-core-image-minimal-x86_64_x32-qemux86-64-toolchain-4.2.sh](https://github.com/meta-erlang/meta-erlang.github.io/releases/tag/x32-toolchain).

It will be necessary to install it in a temporary folder like the steps below:

```
chmod +x poky-glibc-x86_64-core-image-minimal-x86_64_x32-qemux86-64-toolchain-4.2.sh
poky-glibc-x86_64-core-image-minimal-x86_64_x32-qemux86-64-toolchain-4.2.sh -y -d /tmp/poky/4.2
```

Following the Erlang/OTP
[INSTALL-CROSS.md](https://github.com/erlang/otp/blob/master/HOWTO/INSTALL-CROSS.md)
document, we first need to build a Bootstrap System:

```
cd $ERL_TOP
./configure --enable-bootstrap-only
make
```

Next, we have to source the toolchain environment configurations:

```
. /tmp/poky/4.2/environment-setup-x86_64_x32-poky-linux-gnux32
```

After sourcering the environment variable, the shell gets configured with some
extra variables using during the build:

```
x86_64-poky-linux-gnux32-gcc -mx32 \
 -fstack-protector-strong \
 -O2 -D_FORTIFY_SOURCE=2 -Wformat -Wformat-security -Werror=format-security \
 --sysroot=/tmp/poky/4.2/sysroots/x86_64_x32-poky-linux-gnux32
```

It's important to not the GCC flag
[-mx32](https://gcc.gnu.org/onlinedocs/gcc/x86-Options.html#index-mx32):

> The -mx32 option sets int, long, and pointer types to 32 bits, and generates
> code for the x86-64 architecture.

Finally, start the second part of Erlang/OTP build, which is the Cross Build:

```
./configure  $CONFIGURE_FLAGS  --disable-silent-rules --disable-dependency-tracking \
	--with-ssl-rpath=no --disable-static  --without-javac --without-dynamic-trace --without-observer --without-odbc
```

Installing the build output and inspecting the `erlexec` binary to see what it
looks like:

```
make install DESTDIR=/tmp/e

file /tmp/e/usr/local/lib/erlang/erts-14.0.2/bin/erlexec
erlexec: ELF 32-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /libx32/ld-linux-x32.so.2, BuildID[sha1]=013e32ef8c57686a59a812ca452f09d677ff8e37, for GNU/Linux 5.15.0, with debug_info, not stripped
```

Well, the build is correct. But I couldn't test this build in my machine.

## Enabling Erlang for Yocto

In the previous section we just build Erlang/OTP using a toolchain with x32
support. Now, it's time to build Erlang/OTP inside the Yocto project and test
the results using qemu instance.

Enabling it for Yocto is simple, just adding the follow snippet in your
local.conf file:

```
MACHINE = "qemux86-64"
DEFAULTTUNE = "x86-64-x32"
baselib = "${@d.getVar('BASE_LIB:tune-' + (d.getVar('DEFAULTTUNE') or 'INVALID')) or 'lib'}"
```

Then, building erlang:

```
bitbake erlang
```

:::note

For those that want to check all configure and compiler flags, I'm including the
links to those logs:

- [Configure log output](pathname:///assets/log.do_configure)
- [Compile log output](pathname:///assets/log.do_compile)

:::

The build failed in one point related to ASM code in
[erts/lib_src/pthread/ethread.c](https://github.com/erlang/otp/blob/maint-26/erts/lib_src/pthread/ethread.c#L193).
Looks like an ASM incompatibility issue. In order to address it here is
[a patch](https://github.com/joaohf/otp/commit/6cd15d5888a536af97f5d8e26b2db2e379fa7eab)
that just adds one more compiler check to pick up the correct ifdef branch.

Afer that, the build runs as expected. And testing it using QEMU shows exactly
what I had in mind:

```
runqemu core-image-minimal-qemux86-64.ext4 slirp nographic serialstdio
```

- check the current kernel

```
root@qemux86-64:~# uname -a
Linux qemux86-64 6.1.32-yocto-standard #1 SMP PREEMPT_DYNAMIC Mon Jun  5 13:43:33 UTC 2023 x86_64 GNU/Linux
```

- check /proc/cpuinfo to see the 'lm' (long mode)

```
root@qemux86-64:~# grep -o -w 'lm' /proc/cpuinfo
lm
```

- check Erlang shell

```
Erlang/OTP 26 [erts-14.0.2] [source] [32-bit] [smp:4:4] [ds:4:4:10] [async-threads:1]

Eshell V14.0.2 (press Ctrl+G to abort, type help(). for help)
1> application:ensure_all_started(crypto).
{ok,[crypto]}
```

Well, looks like we are running Erlang/OTP 32-bits in a x86_64 machine. Also, it
was able to correct load the crypto (with ssl libraries compiled for x32 too).
By the way, there is a second
[patch need to proper compile the crypto application](https://github.com/joaohf/otp/commit/e63b5b703ffa0005bf6a8f4d3bcec18f786bda92).

Some raised questions for further investigations:

- What tests are necessary to prove that the x32 Erlang build is safe ?
- Are there any other code change in order to fit the x32 build ?
- Would [BeamAsm](https://www.erlang.org/doc/apps/erts/beamasm#faq) be available
  for x32 ?
