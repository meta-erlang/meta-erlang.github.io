---
sidebar_position: 2
sidebar_label: Quickstart
sidebar_class_name: green
description: Getting start with meta-erlang.
---

# Quickstart

This quickstart guide uses the same steps stated at
[Yocto Project Quick Build](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
with additional steps to get an erlang runtime up and running on the target
device.

Clone _meta-erlang_ and checkout branch _nanbield_:

```bash
git clone --branch nanbield https://github.com/meta-erlang/meta-erlang.git
```

Clone _poky_ and checkout branch _nanbield_:

```bash
git clone --branch nanbield git://git.yoctoproject.org/poky
```

Clone _meta-openembedded_ and checkout branch _nanbield_:

```bash
git clone --branch nanbield https://github.com/openembedded/meta-openembedded.git
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

Add `erlang` package to `IMAGE_INSTALL` in _conf/local.conf_

```bash
echo 'IMAGE_INSTALL:append = " erlang"' >> conf/local.conf
```

Build the _core-image-minimal_:

```bash
bitbake core-image-minimal
```

Run the qemu:

```bash
runqemu qemux86-64
```

A new window will open. Login as _root_ and call _erl_:

```bash
# erl
Erlang/OTP 25 [erts-13.2.2.5] [source] [64-bit] [smp:4:4] [ds:4:4:10] [async-threads:1] [jit:ns]

Eshell V13.2.2.5  (abort with ^G)
1> erlang:system_info(cpu_topology).
[{processor,[{core,{logical,0}},
             {core,{logical,1}},
             {core,{logical,2}},
             {core,{logical,3}}]}]
```

The other sections of this guide shows additional steps to create your own
erlang application and run inside a custom image.
