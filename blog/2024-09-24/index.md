---
title: fwup for A/B image upgrades, part I
authors: [joaohf]
tags: [meta-erlang, fwup]
---

This blog post is a tutorial about how to make A/B software updates with fwup
tool and Yocto Project.

<!-- truncate -->

## Objectives and Tools

A short sentence as requirement for this tutorial is:

> I wish to make an image using Yocto Project and be able to run software
> updates using A/B approach.

There are many references on the Internet for A/B software updates. It's a
well-known approach with many different implementations. In short it's strategy
to minimize downtime when changing the firmware of embedded devices. While the
new software gets written to the unused slot and the current slot is still
running. When everything are ready to swap, the system gets restarted. Booting
using the unused slot (now it becomes the current slot).

So, in this blog post we are going to play with A/B software updates using fwup
tool.

## What is fwup ?

The best [fwup](https://github.com/fwup-home/fwup) definition is from its
official project home:

> fwup is a configurable image-based software update utility for embedded
> Linux-based systems. It primarily supports software upgrade strategies that
> update entire root filesystem images at once. This includes strategies like
> swapping back and forth between A and B partitions, recovery partitions, and
> various trial update/failback scenarios. All software update information is
> combined into a ZIP archive that may optionally be cryptographically signed.
> fwup has minimal dependencies and runtime requirements. Scripts are
> intentionally limited to make failure scenarios easier to reason about.
> Distribution of software update archives is not a feature. Users can call out
> to fwup to run upgrades from external media, stream them from the network, or
> script them using a tool like Ansible if so desired.

In practice, fwup is simple and easy to use.

## YP/OE setup

I'll try to simplify the YP/OE setup to just tree small steps:

:::note

The YP documentation is very good. I strong recommend its reading. For this
section the release version used is
[scarthgap](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html).

One important point is to double check the
[Required Packages for the Build Host](https://docs.yoctoproject.org/ref-manual/system-requirements.html#required-packages-for-the-build-host.)

:::

1. Cloning all repositories for scarthgap release:

   ```bash
   git clone --branch scarthgap git://git.yoctoproject.org/poky
   git clone --branch scarthgap https://github.com/openembedded/meta-openembedded.git
   git clone --branch scarthgap https://github.com/fwup-home/meta-fwup
   git clone --branch scarthgap https://github.com/meta-erlang/meta-erlang
   git clone --branch scarthgap https://github.com/meta-erlang/meta-axon
   git clone --branch scarthgap https://github.com/agherzan/meta-raspberrypi
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
   bitbake-layers add-layer ../meta-axon
   bitbake-layers add-layer ../meta-fwup
   bitbake-layers add-layer ../meta-raspberrypi
   ```

Why five layers are needed ? Because the YP/OE approach is to isolate components
into layer in order to maximize the software reusability.

## Configuring the build environment

For this tutorial, the quickest way is edit and add the _conf/local.conf_
configuration file.

We start defining the MACHINE and DISTRO:

```bash
MACHINE = "raspberrypi0-wifi"
DISTRO = "poky"
```

The layer
[meta-raspberry](https://meta-raspberrypi.readthedocs.io/en/latest/readme.html)
provides the machine _raspberrypi0-wifi_ which is what I'm using for this
demonstration as my current development board is a raspberry pi 0.

Next, we need to enable some raspberry features like UART and USB host support
(it's important to get some network connectivity):

```bash
tee -a <<EOF conf/local.conf
# https://meta-raspberrypi.readthedocs.io/en/latest/extra-build-config.html#enable-uart
ENABLE_UART = "1"

# https://meta-raspberrypi.readthedocs.io/en/latest/extra-build-config.html#enable-usb-host-support
ENABLE_DWC2_PERIPHERAL = "1"

# add some package to allow networking
IMAGE_INSTALL:append = " raspi2go kernel-module-libcomposite kernel-module-g-ether kernel-module-dwc2"
EOF
```

As YP/OE supports many types of image outputs, we want to be specific here and
pick only the _fwup_ type.

```bash
tee -a <<EOF conf/local.conf
# enable support for making fwup images
IMAGE_CLASSES += "image_types_fwup"
IMAGE_FSTYPES = "fwup"
EOF
```

The fwup type is provided by the bbclass
[image_types_fwup.bbclass](https://github.com/fwup-home/meta-fwup/blob/master/classes/image_types_fwup.bbclass).
It relies on wic image generator and uses their build artifacts for bootloader
and rootfs.

Ok, now we also want to include Erlang/OTP and Elixir. As meta-erlang provides
many versions, I recommend to stick with a specific one. In our case the latest
1.17.x and 27.0.x are good:

```bash
tee -a <<EOF conf/local.conf
# select specific elixir and erlang versions
PREFERRED_VERSION_elixir = "1.17%"
PREFERRED_VERSION_elixir-native = "1.17%"
PREFERRED_VERSION_nativesdk-elixir = "1.17%"
PREFERRED_VERSION_erlang = "27.0%"
PREFERRED_VERSION_erlang-native = "27.0%"
PREFERRED_VERSION_nativesdk-erlang = "27.0%"
EOF
```

Finally, add erlang and elixir to the image:

```bash
tee -a <<EOF conf/local.conf
# add erlang and elixir into image
IMAGE_INSTALL:append = " erlang elixir"
EOF
```

Now that the configuration is over. Let's start a build:

```bash
bitbake core-image-full-cmdline
```

:::note

It might take some time for the first build. As YP/OE will build everything from
scratch. The next builds should be faster.

:::

Once the build has finished, let's inspect the build outputs:

```bash
cd tmp/deploy/images/raspberrypi0-wifi
ls -l core-image-full-cmdline*
-rw-r--r-- 2 builder builder 68465478 Sep 24 21:19 core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw
lrwxrwxrwx 2 builder builder       66 Sep 24 21:19 core-image-full-cmdline-raspberrypi0-wifi.rootfs.fw -> core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw
```

The folder _tmp/deploy/images/raspberrypi0-wifi_ has many files generated from
the build tasks. We are interested only the final .fw file. In this case we the
file _core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw_ is
what we need.

## Deploying .fw images

Before deploying, let's understand a bit the image partition layout created by
YP/OE and fwup tool:

```
# +----------------------------+
# | MBR                        |
# +----------------------------+
# | Firmware configuration data|
# | (formatted as uboot env)   |
# +----------------------------+
# | p0*: Boot A (FAT32)        |
# | zImage, bootcode.bin,      |
# | config.txt, etc.           |
# +----------------------------+
# | p0*: Boot B (FAT32)        |
# +----------------------------+
# | p1*: Rootfs A (ext4)       |
# +----------------------------+
# | p1*: Rootfs B (ext4)       |
# +----------------------------+
# | p2: Application (ext4)     |
# +----------------------------+
```

There is a total of three partitions. Where partition p0 and p1 have been
divided by half each one. It's not clear to get this idea. So, I recommend you
to take a look into fwup configuration file used by this tutorial,
[core-image-full-cmdline.raspberrypi0-wifi.fwup](https://github.com/meta-erlang/meta-axon/blob/master/fwup/core-image-full-cmdline.raspberrypi0-wifi.fwup).
That file has been adapted from the original
[nerves_system_rpi0 fwup configuration](https://github.com/nerves-project/nerves_system_rpi0/blob/main/fwup.conf).

### burn a complete image

My target sdcard has 16GB there is enough space for the core-image-full-cmdline
image. To start using it we need write a _complete_ image to the sdcard. By
complete image also means the the partition A will be used when the board gets
booted.

```bash
$ sudo fwup -a -d /dev/sda -t complete -i core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw
100% [====================================] 68.46 MB in / 382.20 MB out
Success!
Elapsed time: 55.932 s
```

When I inserted the sdcard into my workstation, my host Linux recognized it as
_/dev/sda_ device, using sudo when calling fwup took almost 56 seconds to write
382 MB to the sdcard.

That is all we need to get the sdcard and boot it into raspberry board.

:::note

The next output is just the partition layout for a real board booted from the
sdcard.

:::

And in fact, it works as expected:

```bash
root@raspberrypi0-wifi:~# sfdisk -l /dev/mmcblk0
Disk /dev/mmcblk0: 14.84 GiB, 15931539456 bytes, 31116288 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x00000000

Device         Boot   Start      End  Sectors  Size Id Type
/dev/mmcblk0p1 *         63   266302   266240  130M  c W95 FAT32 (LBA)
/dev/mmcblk0p2       532543  1011774   479232  234M 83 Linux
/dev/mmcblk0p3      1491007 31116287 29625281 14.1G 83 Linux
```

Checking erl and iex versions:

```bash
root@raspberrypi0-wifi:~# erl
Erlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]

Eshell V15.0.1 (press Ctrl+G to abort, type help(). for help)
1>
User switch command (type h for help)
 --> q

root@raspberrypi0-wifi:~# iex
Erlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]

warning: the VM is running with native name encoding of latin1 which may cause Elixir to malfunction as it expects utf8. Please ensure your locale is set to UTF-8 (whiche
Interactive Elixir (1.17.1) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)>
```

### move to B partition

Still using the image
core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw, I want to
test the B upgrade path. For that, the easiest way is to call fwup (which has
been installed into the image) passing some usual flags for this
[kind of operation](https://github.com/fwup-home/fwup?tab=readme-ov-file#whats-something-cool-that-you-can-do-with-fwup):

:::note

The instructions for setting board's network stack using USB is not part of the
scope of this tutorial.

:::

```bash
$ cat core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw | ssh root@192.168.7.7 'fwup -v -a -U -d /dev/mmcblk0 -t upgrade.b'
fwup: require-partition-offset(1, 532543) -> met
fwup: require-uboot-variable(uboot-env, a.nerves_fw_platform) -> met
fwup: require-uboot-variable(uboot-env, a.nerves_fw_architecture) -> met
fwup: Upgrading partition B
100% [====================================] 68.46 MB in / 381.82 MB out
Success!
Elapsed time: 1 min 30 s
```

The important argument is the `-t upgrade.b` telling to fwup which partition
will be upgraded.

:::note

In my setup I called `reboot` to get raspberry rebooted.

:::

Checking erl and iex versions:

```bash
root@raspberrypi0-wifi:~# erl
Erlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]

Eshell V15.0.1 (press Ctrl+G to abort, type help(). for help)
1>
User switch command (type h for help)
 --> q

root@raspberrypi0-wifi:~# iex
Erlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]

warning: the VM is running with native name encoding of latin1 which may cause Elixir to malfunction as it expects utf8. Please ensure your locale is set to UTF-8 (whiche
Interactive Elixir (1.17.1) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)>
```

The versions are still 1.17.x and 27.0.x, as expected.

### move from B to A partition

For testing purposes, let's change the Elixir preferred version from 1.17.x to
1.16.x. For that, edit the local.conf file and change the
`PREFERRED_VERSION_elixir*` variables:

```bash
tee -a <<EOF conf/local.conf
# select specific elixir and erlang versions
PREFERRED_VERSION_elixir = "1.16%"
PREFERRED_VERSION_elixir-native = "1.16%"
PREFERRED_VERSION_nativesdk-elixir = "1.16%"
EOF
```

Running the build again:

```bash
bitbake core-image-full-cmdline
```

The result will be a new core-image-full-cmdline-raspberrypi0-wifi.rootfs-\*.fw
filename which is ready to be used:

```bash
$ cat core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240920190231.fw | ssh root@192.168.7.7 'fwup -v -a -U -d /dev/mmcblk0 -t upgrade.a'
fwup: require-partition-offset(1, 1011775) -> met
fwup: require-uboot-variable(uboot-env, b.nerves_fw_platform) -> met
fwup: require-uboot-variable(uboot-env, b.nerves_fw_architecture) -> met
fwup: Upgrading partition A
100% [====================================] 68.46 MB in / 381.82 MB out
Success!
Elapsed time: 1 min 30 s
```

Rebooting the board and checking the iex version, we get:

```bash
root@raspberrypi0-wifi:~# erl
Erlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]

Eshell V15.0.1 (press Ctrl+G to abort, type help(). for help)
1>
User switch command (type h for help)
 --> q
root@raspberrypi0-wifi:~# iex
warning: the VM is running with native name encoding of latin1 which may cause Elixir to malfunction as it expects utf8. Please ensure your locale is set to UTF-8 (whiche
Erlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]

Interactive Elixir (1.16.3) - press Ctrl+C to exit (type h() ENTER for help)
```

That works! Erlang/OTP 27 and Elixir 1.16.3.

## Conclusions

The [fwup](https://github.com/fwup-home/fwup) tool has shown as a feasibly
approach for image A/B software upgrades. It is integrated into YP/OE ecosystem
through [meta-fwup](https://github.com/fwup-home/meta-fwup) layer and ready to
try.

fwup is also used by Nerves Project together with others Elixir components in
order to provide a full
[OTA updates](https://en.wikipedia.org/wiki/Over-the-air_update).
