---
title: meta-erlang meets atomvm
authors: [joaohf]
tags: [meta-erlang, atomvm]
---

## Intro

From [atomvm.net](https://www.atomvm.net/) website, atomvm is:

> AtomVM is a lightweight implementation of the the Bogdan Erlang Abstract
> Machine (aka, the BEAM), a virtual machine that can execute byte-code
> instructions compiled from Erlang or Elixir source code. AtomVM supports a
> limited but functional subset of the BEAM opcodes, and also includes a small
> subset of the Erlang/OTP standard libraries, all optimized to run on tiny
> micro-controllers. With AtomVM, you can write your IoT applications in a
> functional programming language, using a modern actor-based concurrency model,
> making them vastly easier to write and understand!

One of the atomvm goals is the possibility to run BEAM code on really small
systems like MCUs.

For a while, I was wondering what could be the benefits of integrating atomvm
into meta-erlang recipes. It didn't look to make any sense for me. Then, I
started playing with that just to see if I was able to run an atomvm program in
Qemu emulation.

Suddenly, I ended up with all pieces to run atomvm programs integrated with
meta-erlang. So this post is about how it is possible to use atomvm in Linux
images based on YP/OE.

### atomvm recipe

The
[atomvm.bb](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-devtools/atomvm/atomvm_0.6.0-alpha1.bb)
recipe is very simple because the atomvm project is based on CMake and YP has
support to it.

However, I had to make a specific recipe to isolate the tool packbeam. The
packbeam tool lives inside atomvm source code I've created a recipe called
[packbeam.bb](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-devtools/atomvm/packbeam_0.6.0-alpha1.bb)
which compiles packbeam as native (that is runs on build host machine). That was
necessary because the atomvm recipe crosscompile the atomvm and packbeam is used
by CMake to pack all .beam files to create .avm files.

To make atomvm recipe works, I applied a patch
([0001-Remove-PackBEAM-dependency-rules.patch](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-devtools/atomvm/files/0001-Remove-PackBEAM-dependency-rules.patch))
to disable the packbeam dependency internally. That allows me to use my packbeam
tool from sysroot-native instead.

:::note

The mentioned patch works for my needs but is not target for sending a PR to
atomvm project.

:::

### atomvm examples

There is the [atomvm_examples](https://github.com/atomvm/atomvm_examples)
project that provides great source of ideas and examples. I wish to create some
recipes to build and pack each example. So I started with the
[system_info](https://github.com/atomvm/atomvm_examples/tree/master/erlang/system_info).

The following code is the
[atomvm-examples-system-info_0.1.0.bb](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-examples/atomvm-examples/atomvm-examples-system-info_0.1.0.bb)
recipe. And should be enough for any Erlang project build which uses
[atomvm_rebar3_plugin](https://github.com/atomvm/atomvm_rebar3_plugin).

```
SUMMARY = "Collects and displays various information about AtomVM and the environment in which it is running."
SECTION = "examples"
LICENSE = "Apache-2.0"
LIC_FILES_CHKSUM = "file://LICENSE;md5=745e8b23501916820b8a509f8e3ba3d4"

ATOMVM_EXAMPLE = "erlang/system_info"

S = "${WORKDIR}/system_info"

SRCREV = "8e54aaf475a74b59a20f914e575202b1810a7954"
PV = "0.1.0+git${SRCPV}"
SRC_URI = "git://github.com/atomvm/atomvm_examples;branch=master;subpath=${ATOMVM_EXAMPLE};protocol=https"

inherit atomvm
```

The `inherit atomvm` inherits the
[atomvm.bbclass](https://github.com/meta-erlang/meta-erlang/blob/master/classes/atomvm.bbclass)
which implements rebar3 commands to compile and create avm files.

### Build and run session

To build the atomvm-examples-system-info recipe, we call bitbake like that:

```
bitbake atomvm-examples-system-info
```

Now, we want to run system_info application inside Qemu. The first step is to
install the atomvm-examples-system-info in the final image.

In _conf/local.conf_ file add the recipe name to the IMAGE_INSTALL variable:

```
IMAGE_INSTALL:append:pn-core-image-minimal = " atomvm-examples-system-info"
```

When building the core-image-minimal image and running it with Qemu:

```
runqemu core-image-minimal slirp nographic serialstdio
```

Inside the Qemu, let's run our first atomvm program:

```
root@qemux86-64:~# uname -a
Linux qemux86-64 6.5.7-yocto-standard #1 SMP PREEMPT_DYNAMIC Thu Oct 19 14:51:09 UTC 2023 x86_64 GNU/Linux
root@qemux86-64:~# atomvm /usr/share/atomvm-examples-system-info/system_info.avm
Unsupported line_ref tag: 0
SystemInfo:
===========
atom_count: 162
port_count: 0
process_count: 1
system_architecture: <<"Linux--x86_64">>
word_size: 8

PlatformInfo:
=============

ProcessInfo:
============
Pid: <0.1.0>
heap_size: 51
memory: 848
message_queue_len: 0
stack_size: 9

Return value: ok
```

That works as expected.

### Integration outcomes and questions

The recipes created so far covers running atomvm for generic unix (Linux in my
case). Well, if you can afford running Erlang/Elixir on Linux, then there is no
selling point to use atomvm. That is true if we look at the current state of
atomvm project for generic unix platform.

Maybe in the future we can see extensions to generic unix allowing it to talk
with i2c, gpio, spi on Linux for example, then atomvm and meta-erlang starts to
cover a lot of possibilities. Projects like
[Eclipse Mraa](https://github.com/eclipse/mraa) could be integrated with atomvm
providing all the low level access for low speed IO.

There is another idea for meta-erlang and atomvm which is the heterogeneous
system with a combination of:

- Linux based images running on the "application processing unit" (CPU)
- and "real-time processing unit" (MCU) running an atomvm program.

meta-erlang could build atomvm images for MCU as well for CPU. The seeds for
this integration was described in this talk
[One Build to Rule Them All: Building FreeRTOS & Linux Using Yocto - Alejandro Hernandez](https://www.youtube.com/watch?v=mFgiIXv7b5U)
(the pdf is
[here](https://elinux.org/images/9/9f/ELC_Europe_2019_Presentation_AlejandroHernandez_FreeRTOS_ToUpload.pdf)).
In that talk Alejandro shows how YP/OE projects can build MCU target images.
Using the same principles also works for meta-erlang.
