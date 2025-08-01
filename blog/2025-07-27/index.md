---
title: Erlang-Red, recipe introduction
authors: [joaohf]
tags: [meta-erlang, erlang-red]
---

[Erlang-Red](https://github.com/gorenje/erlang-red) is an experimental Erlang
backend to replace [Node-RED](https://nodered.org/). This blog post introduces
the erlang-red recipe available in meta-erlang layer.

<!-- truncate -->

The purpose here is to get a virtual environment with Erlang-Red installed where
it is possible to start creating basic flow and explore possibilities using
Yocto and Erlang-Red.

## Erlang-Red

According to [Erlang-Red](https://github.com/gorenje/erlang-red), it is:

> Experimental Erlang backend to replace Node-REDs existing NodeJS backend,
> aiming for 100% compatible with existing flow code.
>
> The goal is bring the advantages of low-code visual flow-based programming to
> a programming language that is designed for message passing and concurrency
> from the ground up, hence Erlang. More details described in the corresponding
> blog post.

A few months ago I was reading [Erlang Forums](https://erlangforums.com) when I
saw a thread about
[Erlang-RED - Erlang interpreter for Node-RED flow code (visual flow based programming)](https://erlangforums.com/t/erlang-red-erlang-interpreter-for-node-red-flow-code-visual-flow-based-programming/4678).
It looked so fantastic that someone was trying to implement a new backend for
Node-RED, moreover it is written in Erlang/OTP.

In order to get a better view of Erlang-Red philosophy and internals I recommend
reading this blog post:
[The Erlang-Red Project](https://blog.openmindmap.org/erlang-red).

I thought that writing an
[Erlang-Red Yocto recipe](https://layers.openembedded.org/layerindex/recipe/464852/)
could be useful for anyone interested in applying flow based programming in the
context of linux embedded projects.

## The Erlang-Red recipe

As everything else in OpenEmbedded / Yocto land, it is necessary a recipe in
order to get any software installed in the final image built with Yocto. Some
recipes are easy, while others are more complicated. As Erlang-Red uses rebar3
as build tool, it was easy to build, release and package it using
[rebar3.bbclass](https://github.com/meta-erlang/meta-erlang/blob/master/classes/rebar3.bbclass).

A full working
[erlang-red bitbake recipe](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-extended/erlang-red/erlang-red_git.bb)
is now available on meta-erlang layer. And in the rest of this blog post I will
guide you to get a basic image working.

I have added erlang-red recipe to meta-erlang master branch. I did not test it
using others Yocto branches. But the recipe will work in other branches with
small fixes.

## Setup bitbake and Yocto

:::note

This is the point where reading the
[Yocto Project Quick Build](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
documentation can help to understand basic principles. In this section I
extracted the commands that I used to run this use case.

:::

### Fetching source code

Cloning all repositories for master branch:

```bash
git clone --branch master git://git.yoctoproject.org/poky
git clone --branch master https://github.com/meta-erlang/meta-erlang
```

### Sourcing build environment

Source the init build environment script:

```bash
cd poky
source oe-init-build-env ../build
```

### Adding meta-erlang layer

Add the needed layers:

```bash
bitbake-layers add-layer ../meta-erlang
```

### Configuring the build environment

For this use case, the quickest way is to edit and add some snippets in the
configuration file: _conf/local.conf_:

```bash
# select which machine we want to build
MACHINE = "qemuriscv32"

# systemd only
INIT_MANAGER = "systemd"

# install erlang-red when creating an image
IMAGE_INSTALL:append = " erlang-red"

# additional QEMU configuration for slirp mode, export 8080 tcp port
QB_SLIRP_OPT = "-netdev user,id=net0,hostfwd=tcp::8080-:8080,hostfwd=tcp::2222-:22"
```

### Build erlang-red recipe

Right, the environment is configured. Have sourced the `oe-init-build-env`, we
can build erlang-red recipe:

```bash
bitbake erlang-red
```

This bitbake command will build erlang-red and all its building dependencies.

But to get something useful, we need to also build an image.

## A basic image with erlang-red enabled

Next, we need to build the final image:

```bash
bitbake core-image-full-cmdline
```

Because we have added erlang-red to `IMAGE_INSTALL`, the build image process
will install erlang-red.

With image ready, it is time to run it.

## Running erlang-red with QEMU emulator

```bash
runqemu core-image-full-cmdline serialstdio nographic

....

Poky (Yocto Project Reference Distro) 5.2.99+snapshot-bd4625cd4db0f02162092d85aeab3023914f768a qemuriscv32 ttyS0

qemuriscv32 login: root

WARNING: Poky is a reference Yocto Project distribution that should be used for
testing and development purposes only. It is recommended that you create your
own distribution for production use.

root@qemuriscv32:~#
```

I used the arguments `serialstdio`, to enable a serial console input attached to
stdio; and `nographic` to avoid starting QEMU GUI frontend.

In a new terminal, let's open a ssh session and start erlang-red using systemctl
command:

```bash
ssh root@192.168.7.2

Last login: Fri Aug  1 18:50:29 2025 from 172.17.0.1

WARNING: Poky is a reference Yocto Project distribution that should be used for
testing and development purposes only. It is recommended that you create your
own distribution for production use.

root@qemuriscv32:~# systemctl status erlang-red
● erlang-red.service - Breadboard Programming for Erlang inspired by Node-RED
     Loaded: loaded (/usr/lib/systemd/system/erlang-red.service; enabled; preset: enabled)
     Active: active (running) since Fri 2025-08-01 18:49:45 UTC; 55s ago
```

Great, erlang-red is up and running.

In the host, open a browser at http://192.168.7.2:8080/erlang-red to see the
erlang-red web interface.

Well, now it is the right time to learn about flow based programming and start
playing with erlang-red.

## Erlang-Red runtime analysis

The Erlang-Red performance is relative as there is no much to say when emulating
using QEMU without KVM to improve performance. Some rough analises below:

### What about the disk footprint ?

The total erlang-red footprint is about 35Mb of disk space. It includes the ERTS
(Erlang Runtime System) and all Erlang/Elixir dependencies. All files installed
on `/usr/lib/erlang-red` folder. The erlang-red package also provides systemV
and systemd start/stop scripts.

### And about memory footprint ?

In this use case I used systemd because I want to get the memory footprint that
systemd was reporting:

```bash
root@qemuriscv32:~# systemctl status erlang-red
● erlang-red.service - Breadboard Programming for Erlang inspired by Node-RED
     Loaded: loaded (/usr/lib/systemd/system/erlang-red.service; enabled; preset: enabled)
     Active: active (running) since Fri 2025-08-01 18:49:45 UTC; 55s ago
 Invocation: 704b9bef5b384451932e15cadb7291fa
   Main PID: 322 (beam.smp)
      Tasks: 27 (limit: 4915)
     Memory: 69.7M (peak: 75.4M)
        CPU: 9.751s
     CGroup: /system.slice/erlang-red.service
             ├─322 /usr/lib/erlang-red/bin/erlang_red -Bd -C multi_time_warp -- -root /usr/lib/erlang-red -bindir /usr/lib/erlang-red/erts-16.0.1/bin -progname usr/lib/erlang-red/bin/erlang_red -- -home /var/lib/erlang>
             ├─380 /usr/lib/erlang-red/erts-16.0.1/bin/epmd -daemon
             ├─435 erl_child_setup 1024
             └─458 /usr/lib/erlang-red/lib/erlexec-2.2.0/priv/x86_64-pc-linux-gnu/exec-port

Aug 01 18:49:45 qemuriscv32 systemd[1]: Started Breadboard Programming for Erlang inspired by Node-RED.
Aug 01 18:49:47 qemuriscv32 erlang_red[322]: Exec: /usr/lib/erlang-red/erts-16.0.1/bin/erlexec -noinput +Bd -boot /usr/lib/erlang-red/releases/0.2.2/start -mode embedded -boot_var SYSTEM_LIB_DIR /usr/lib/erlang-red/lib>
Aug 01 18:49:47 qemuriscv32 erlang_red[322]: Root: /usr/lib/erlang-red
Aug 01 18:49:47 qemuriscv32 erlang_red[322]: /usr/lib/erlang-red
Aug 01 18:49:50 qemuriscv32 erlang_red[322]: warning: the VM is running with native name encoding of latin1 which may cause Elixir to malfunction as it expects utf8. Please ensure your locale is set to UTF-8 (which can>
lines 1-19/19 (END)

```

So, 69.7M is the memory consumption.

As Erlang-Red is in it's early development stages, I believe that are open space
for code optimization for reducing memory usage and also for tuning ERTS for the
Erlang-Red use case.

## What has next ?

As a next project, I wish to install erlang-red into a Raspberry Pi platform and
control some external hardware. This is a pretty common scenario and let's see
how feasible it is with Erlang-Red.
