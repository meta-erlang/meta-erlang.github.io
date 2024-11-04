---
title: Introducing Gleam to meta-erlang layer
authors: [joaohf]
tags: [meta-erlang]
---

[Gleam](https://gleam.run) is a new language that runs on Erlang VM. As one the
aims of meta-erlang layer is to offer support to BEAM ecosystem in YP/OE
ecosystem
[gleam support has been added](https://github.com/meta-erlang/meta-erlang/pull/340)
to meta-erlang.

I'm not a gleam programming. Actually, I recently discovered gleam (and its
purposes). And I'm still learning it. After watching the talk
[Keynote: Gleam's Journey on the BEAM - Hayleigh Thompson & Louis Pilfold](https://www.youtube.com/watch?v=6I0IbJtUC3U)
at Code BEAM Europe 2024, I give a try and add it to meta-erlang layer.

<!-- truncate -->

In this post I'll describe a simple experiment using the gleam example code
called [example-echo-server](https://github.com/gleam-lang/example-echo-server)
as it is simple and easy to understand.

At the end of this post we will be ready to create more recipes for programs
written in glean that runs on Yocto based images.

Also, as gleam is the third language supported by meta-erlang the
[beamtools](https://github.com/meta-erlang/meta-erlang/releases) will be updated
to also provide a gleam toolchain.

## gleam is written in rust

[Gleam](https://github.com/gleam-lang/gleam) language is written in rust
programming language. It could be a challenge to get it working on Yocto.
However, the support for building rust programs by Yocto has been added many
releases ago (check it out here
[Yocto rust support](https://git.yoctoproject.org/poky/tree/meta/recipes-devtools/rust)).
That means all the pieces and rust toolchain support to build gleam inside Yocto
were already there.

The
[gleam.bb recipe](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-devtools/gleam/gleam_1.5.1.bb)
is responsible for compiling gleam as native program (that is, a program that
runs on the build machine). The final gleam package will not be installed in the
target because gleam compiles to .beam modules (erlang modules). At the end a
software written in gleam will be just BEAM modules that runs on Erlang VM.

There is also a new bitbake class called
[gleam.bbclass](https://github.com/meta-erlang/meta-erlang/tree/master/classes/gleam.bbclass).
It is a class that every gleam recipe will use in order to fetch dependencies,
compile and packing.

## Running gleam on Yocto based images

Alright, the following is a step by step listing a fresh build session and run
the hello-gleam-echo-server using QEMU.

1. Cloning all repositories for master:

   ```bash
   git clone --branch master git://git.yoctoproject.org/poky
   git clone --branch master https://github.com/openembedded/meta-openembedded.git
   git clone --branch master https://github.com/meta-erlang/meta-erlang
   ```

1. Source the init build environment script:

   ```bash
   cd poky
   source oe-init-build-env ../build
   ```

1. Add the needed layers:

   ```bash
   bitbake-layers add-layer ../meta-openembedded/meta-oe
   bitbake-layers add-layer ../meta-erlang
   ```

1. Open the configuration file _build/local.conf_ and change the 'MACHINE'
   variable to 'qemux86-64'

1. Add what we want to install, hello-gleam-echo-server:

   ```
   tee -a <<EOF conf/local.conf
   IMAGE_INSTALL:append = " hello-gleam-echo-server curl"
   EOF
   ```

   Let's install curl too. Because we want to check if echo-server is working as
   expected.

1. Build a minimal image for testing purposes:

   ```bash
   bitbake core-image-minimal
   ```

   Depending your build machine it could take some time. It's ok. Remember that
   YP/OE builds everything from source code.

1. Let's test running the QEMU:

   ```bash
   runqemu core-image-minimal serialstdio nographic slirp
   ```

1. You should see the login prompt after running the runqemu command:

   ```
   Poky (Yocto Project Reference Distro) 5.1 qemux86-64 ttyS0

   qemux86-64 login:
   ```

   The login name is root

1. The command `systemctl status hello-gleam-echo-server` shows that echo-server
   is disabled and not running

   ```
   root@qemux86-64:~# systemctl status hello-gleam-echo-server
   * hello-gleam-echo-server.service - gleam echo server example
     Loaded: loaded (/usr/lib/systemd/system/hello-gleam-echo-server.service; disabled; preset: disabled)
     Active: inactive (dead)
   ```

   Let's start it with `systemctl start hello-gleam-echo-server`

   ```
   root@qemux86-64:~# systemctl start hello-gleam-echo-server
   ```

   And check again with `systemctl status`

   ```
   root@qemux86-64:~# systemctl status hello-gleam-echo-server
   * hello-gleam-echo-server.service - gleam echo server example
     Loaded: loaded (/usr/lib/systemd/system/hello-gleam-echo-server.service; disabled; preset: disabled)
     Active: active (running) since Mon 2024-11-04 00:26:37 UTC; 1s ago
     Invocation: 721b391508544a27bdacd484d3f35be3
     Main PID: 239 (entrypoint.sh)
      Tasks: 26 (limit: 255)
     Memory: 51.1M (peak: 51.5M)
        CPU: 3.043s
     CGroup: /system.slice/hello-gleam-echo-server.service
             |-239 /bin/sh /usr/lib/hello-gleam-echo-server/entrypoint.sh run
             |-241 /usr/lib/erlang/erts-15.1.2/bin/beam.smp -- -root /usr/lib/erlang -bindir /usr/lib/erlang/erts-15.1.2/bin -progname erl -- -- -pa /usr/lib/hello-gleam-echo-server/elli/ebin /usr/lib/hello-gleam-echo-server/gleam_e...
             `-247 erl_child_setup 1024

   Nov 04 00:26:37 qemux86-64 systemd[1]: Started gleam echo server example.
   ```

   That looks really good. We can see that systemd is happy and tracking the
   beam.smp process.

1. Calling curl to check if echo-server is working. We want to reach the
   function hello from
   [web.gleam](https://github.com/gleam-lang/example-echo-server/blob/main/src/reply/web.gleam#L32)
   source code:

   ```bash
   root@qemux86-64:~# curl -X POST -d 'Hello, Gleam!' http://localhost:3000/echo
   Hello, Gleam!
   ```

That's amazing and it's working as expected.

## hello-gleam-echo-server explained

A bit more about bitbake, recipes and how gleam recipes works.

The snippet below shows the recipe
[hello-gleam-echo-server](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/hello-gleam-echo-server/hello-gleam-echo-server_0.1.0.bb).
Thanks to gleam.bbclass the recipe is short and declarative.

```
SUMMARY = "An example Gleam web application "
SECTION = "examples"
LICENSE = "Apache-2.0"
LIC_FILES_CHKSUM = "file://LICENCE;md5=bd052113ed5b73a32ff7cf9f42c3265c"

S = "${WORKDIR}/git"

SRCREV = "94f29a84dc82ed4e7878d4027fd27acacdb8be84"
PV = "0.1.0+git${SRCPV}"
SRC_URI = "git://github.com/gleam-lang/example-echo-server;branch=main;protocol=https \
           file://hello-gleam-echo-server.service"

inherit gleam systemd

do_install:append() {
    if ${@bb.utils.contains('DISTRO_FEATURES','systemd','true','false',d)}; then
        install -d ${D}${systemd_unitdir}/system
        install -m 0644 ${UNPACKDIR}/hello-gleam-echo-server.service ${D}${systemd_unitdir}/system
    fi
}

SYSTEMD_SERVICE:${PN} = "hello-gleam-echo-server.service"

SYSTEMD_AUTO_ENABLE = "disable"
```

This recipe instructs bitbake to fetch the example-echo-server source code,
build it and install some systemd scripts in order to start the
example-echo-server on target machine.

The systemd script is very simple:

```
[Unit]
Description=gleam echo server example

[Service]
WorkingDirectory=/usr/lib/hello-gleam-echo-server
ExecStart=/usr/lib/hello-gleam-echo-server/entrypoint.sh run

[Install]
WantedBy=multi-user.target
```

It just "runs" the entrypoint.sh script. The entrypoint.sh was created by gleam
tooling. The recipe takes care of installing the echo-server artifacts at
_/usr/lib/hello-gleam-echo-server_.

For more details, I recommend checking out the bitbake class
[gleam.bbclass](https://github.com/meta-erlang/meta-erlang/tree/master/classes/gleam.bbclass).
