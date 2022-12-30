---
sidebar_position: 2
sidebar_label: Quickstart
sidebar_class_name: green
description: Getting start with meta-erlang.
---

# Quickstart

This quickstart guide uses the same steps stated at
[Yocto Project Quick Build](https://docs.yoctoproject.org/brief-yoctoprojectqs/brief-yoctoprojectqs.html)
with additional steps to get an erlang runtime up and running on the target
device.

Clone _meta-erlang_:

```bash
git clone https://github.com/meta-erlang/meta-erlang.git
```

Clone _poky_ and checkout branch _kirkstone_:

```bash
git clone --branch kirkstone git://git.yoctoproject.org/poky
```

Clone _meta-openembedded_ and checkout branch _kirkstone_:

```bash
git clone --branch kirkstone https://github.com/openembedded/meta-openembedded.git
```

Move to _poky_ directory:

```bash
cd poky
```

Initialize the build environment:

```bash
source oe-init-build-env ../build
```

Add _meta-oe_ and _meta-erlang_ to _conf/layer.conf_:

```bash
bitbake-layers add-layer ../meta-openembedded/meta-oe
bitbake-layers add-layer ../meta-erlang
```

Add `erlang` package to `IMAGE_INSTAL` in _conf/local.conf_

```bash
echo 'IMAGE_INSTALL:append = " erlang"' >> conf/local.conf
```

Build the _core-image-minimal_:

```bash
bitbake core-image-minimal
```

Run the qemu:

```bash
runqemu qemux86
```

A new window will open. Login as _root_ and call _erl_:

```bash
# erl
Erlang/OTP 21 [erts-10.1] [source] [smp:1:1] [ds:1:1:10] [async-threads:1]

Eshell V10.1 (abort with ^G)
1> erlang:system_info(cpu_topology).
[{processor,{logical,0}}]
```

The other sections of this guide shows additional steps to create your own
erlang application and run inside a custom image.
