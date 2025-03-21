---
title:
  fwup for A/B image upgrades on raspberrypi machines with NervesCloud, part I
authors: [joaohf]
tags: [meta-erlang, fwup, rpi]
---

This blog post introduces nerves-hub-link running on raspberrypi machines in
order to upgrade firmware via [NervesCloud](https://nervescloud.com/).

<!-- truncate -->

On previous [blog posts about fwup](/blog/tags/fwup/), we have explored and
tested using QEMU based machines. Now it's time to change the target and use a
real machine.

Nowadays, raspberrypi is an accessible development platform for prototyping and
why not for real use cases too.

On Yocto side, there is a stable layer called
[meta-raspberrypi](https://github.com/agherzan/meta-raspberrypi) which
implements many of raspberrypi boards.

The end goal is to update the target board using NervesCloud, the
[same way that was done using QEMU based machines](/blog/2025/01/26/index/).

The focus of this post is about how to prepare a working Yocto setup for
raspberry context. I'll not show a demonstration this time, reserving it for the
next blog posts ;)

### YP/OE Setup

I'll try to simplify the YP/OE setup to just tree small steps:

:::note

This is the same steps taken for the previous blog post called
[fwup for A/B image upgrades on QEMU machines with NervesCloud, part III](/blog/2025/01/26/index/).
But now, with one additional layer called
[meta-raspberrypi](https://github.com/agherzan/meta-raspberrypi).

Also, removing the meta-qemu-bsp.

:::

1. Cloning all repositories for master release:

   ```bash
   git clone --branch master git://git.yoctoproject.org/poky
   git clone --branch master https://github.com/openembedded/meta-openembedded.git
   git clone --branch master https://github.com/fwup-home/meta-fwup
   git clone --branch master https://github.com/joaohf/meta-fwup-examples
   git clone --branch master https://github.com/meta-erlang/meta-erlang
   git clone --branch master https://github.com/meta-erlang/meta-axon
   git clone --branch master https://github.com/joaohf/meta-nerves-hub
   git clone --branch master https://github.com/agherzan/meta-raspberrypi
   ```

1. Source the init build environment script:

   ```bash
   cd poky
   source oe-init-build-env ../build
   ```

1. Add the needed layers:

   ```bash
   bitbake-layers add-layer ../meta-openembedded/meta-oe
   bitbake-layers add-layer ../meta-fwup
   bitbake-layers add-layer ../meta-fwup-examples
   bitbake-layers add-layer ../meta-nerves-hub
   bitbake-layers add-layer ../meta-raspberrypi
   bitbake-layers add-layer ../meta-axon
   bitbake-layers add-layer ../meta-erlang
   ```

### Configuring the build environment

For this use case, the quickest way is edit and add the _conf/local.conf_
configuration file.

We start enabling some
[multiconfig configurations](https://docs.yoctoproject.org/5.0.7/dev-manual/building.html#building-images-for-multiple-targets-using-multiple-configurations):

```bash
BBMULTICONFIG ?= "\
    raspberrypi0-wifi-nerves-hub-link \
    raspberrypi4-64-nerves-hub-link \
    raspberrypi5-nerves-hub-link \
   "
```

The layer meta-axon provides some samples for
[raspberry configurations with nerves-hub enabled](https://github.com/meta-erlang/meta-axon/tree/master/conf/multiconfig).

multiconfig is useful because it simplify bitbake configurations when we have
many target boards. On my test setup I'm building for raspberrypi 0, 4 and 5.

### Building images

Next, we need to build images:

```bash
bitbake multiconfig:raspberrypi4-64-nerves-hub-link:core-image-base

bitbake multiconfig:raspberrypi5-nerves-hub-link:core-image-base

bitbake multiconfig:raspberrypi0-wifi-nerves-hub-link:core-image-base
```

:::note

core-image-base is being used here. It's suitable for raspberrypi.

:::

After the above commands, the result are the following files:

```
tmp-raspberrypi0-wifi-glibc-nerves-hub-link/deploy/images/raspberrypi0-wifi/core-image-base-raspberrypi0-wifi.rootfs.fwup
tmp-raspberrypi4-64-glibc-nerves-hub-link/deploy/images/raspberrypi4-64/core-image-base-raspberrypi4-64.rootfs.fwup
tmp-raspberrypi5-glibc-nerves-hub-link/deploy/images/raspberrypi5/core-image-base-raspberrypi5.rootfs.fwup
```

And are ready to flash into a bootable device.

### Flashing image

Before running fwup commands:

```
bitbake fwup-native -caddto_recipe_sysroot
```

For each fwup image, and using `fwup` for flashing (one sdcard for each image):

rpi0:

```
oe-run-native fwup-native \
  fwup -a -d /dev/sdc \
  -t complete \
  -i tmp-raspberrypi0-wifi-glibc-nerves-hub-link/deploy/images/raspberrypi0-wifi/core-image-base-raspberrypi0-wifi.rootfs.fwup
```

rpi4:

```
oe-run-native fwup-native \
  fwup -a -d /dev/sdc \
  -t complete \
  -i tmp-raspberrypi4-64-glibc-nerves-hub-link/deploy/images/raspberrypi4-64/core-image-base-raspberrypi4-64.rootfs.fwup
```

rpi5:

```
oe-run-native fwup-native \
  fwup -a -d /dev/sdc \
  -t complete \
  -i tmp-raspberrypi5-glibc-nerves-hub-link/deploy/images/raspberrypi5/core-image-base-raspberrypi5.rootfs.fwup
```

### And booting

Just put the sdcard into raspiberrypi and boot. It should work as expected.

:::note

I promised, for the next blog post I'll share a full demonstration

:::

## Some important details not discussed before

### meta-nerves-hub

The [meta-nerves-hub](https://github.com/joaohf/meta-nerves-hub) layer has a
recipe for
[nerves-hub-link_2.5.2.bb](https://github.com/joaohf/meta-nerves-hub/tree/master/recipes-extended/nerves-hub-link_2.5.2.bb).
This recipe installs a standalone nerves-hub-link. I've tested the version 2.5.2
and it works for my initial goals.

However, the later nerves-hub-link versions are not prepared to run as
standalone application anymore. It needs to be part of a BEAM application in
order to be properly configured.

I've tested recent versions and ended up with nerves-hub-link fighting with
linux network stack; for instance trying to configure it where it should not or
using others ways to detect configurations.

:::note

It's up to you when design Yocto based linux distributions select what network
manager best fits to your needs. Yocto gives to you many options as well a
default one.

:::

So, the next organic step will be to implement a BEAM application that uses
nerves-hub-link. That would be a kind of nerves-hub-link-agent. I just want to
start it and play nice with linux network configuration stack.

## Conclusions

So, this blog post was more to make a milestone for this trip. And we are
getting closer to get Yocto based linux distro full integrated with NervesCloud
without thinking too much.
