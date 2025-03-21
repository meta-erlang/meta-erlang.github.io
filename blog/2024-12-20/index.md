---
title: fwup for A/B image upgrades on QEMU machines with fwup, part II
authors: [joaohf]
tags: [meta-erlang, fwup, qemu]
---

This blog post describes all parts involved in order to use QEMU machines with
Yocto images for testing and developing A/B image upgrades. Moreover, this blog
post could be considered an extension for the
[fwup for A/B image upgrades, part I](/blog/2024/09/24/index) blog post.

<!-- truncate -->

The [fwup](https://github.com/fwup-home/fwup) tool and
[meta-fwup](https://github.com/fwup-home/meta-fwup) have been introduced in the
previous blog post and serve as a base knowledge for this post.

## Objectives and Tools

When I was writing and testing the post
[fwup for A/B image upgrades, part I](/blog/2024/09/24/index), it was very
tedious have to wait the test cycle which basically was:

1. Make one change
2. Build a new image
3. Burn the image into sdcard
4. Plug the sdcard on the target real board
5. Power on
6. Test
7. Power off
8. Get the results
9. Go to step #1

I've spent too much time waiting for feedback. Since then, I've been thinking
how it would be possible to speed up my test cycle.

Maybe buying more target boards or reduce the final image footprint or buy a
faster build machine. None of them would help much the situation.

Then, I remember that one of the greatest feature from Yocto Project is the
integration with [QEMU](https://www.qemu.org/) emulator. Yocto brings some
ready-to-use
[qemu machines](https://git.yoctoproject.org/poky/tree/README.qemu.md) that one
could use in order to run an image made with Yocto Project and spending no
money.

However, some pieces were missing:

- The qemu default machines are not prepared for using u-boot as boot loader
- u-boot does not know how to load environment variables from virtio block
  devices
- lack of qemu device-tree files (.dtb) when booting qemu machines

It was clear that without some patches my idea of short test cycle would not be
feasible.

So, this blog post continues the story about
[fwup tool](https://github.com/fwup-home/fwup) in Yocto world. There are two
important sections:

- One showing a practical use case with all steps necessary to test the A/B
  upgrades with fwup on qemu u-boot.
- A second one describing the patches and layers that I've created for booting
  qemu machines with u-boot and Yocto images.

## Use case: A/B upgrades with QEMU u-boot machines

### YP/OE setup

I'll try to simplify the YP/OE setup to just tree small steps:

:::note

The YP documentation is very good. I strong recommend its reading. For this
section the release version used is
[master](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html).

One important point is to double check the
[Required Packages for the Build Host](https://docs.yoctoproject.org/ref-manual/system-requirements.html#required-packages-for-the-build-host.)

:::

1. Cloning all repositories for master release:

   ```bash
   git clone --branch master git://git.yoctoproject.org/poky
   git clone --branch master https://github.com/openembedded/meta-openembedded.git
   git clone --branch master https://github.com/fwup-home/meta-fwup
   git clone --branch master https://github.com/meta-erlang/meta-qemu-bsp
   git clone --branch master https://github.com/joaohf/meta-fwup-examples
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
   bitbake-layers add-layer ../meta-qemu-bsp
   bitbake-layers add-layer ../meta-fwup-examples
   ```

### Configuring the build environment

For this use case, the quickest way is edit and add the _conf/local.conf_
configuration file.

We start defining the MACHINE and DISTRO:

```bash
MACHINE = "qemuarm64-uboot"
DISTRO = "poky"
```

The machine _qemuarm64-uboot_ is provided by
[meta-qemu-bsp](https://github.com/meta-erlang/meta-qemu-bsp) layer. That
machine uses u-boot as bootloader.

As YP/OE supports many types of image outputs, we want to be specific here and
pick only the _fwup_ type.

```bash
tee -a <<EOF conf/local.conf
# enable support for making fwup images
IMAGE_CLASSES += "image_types_fwup"
IMAGE_FSTYPES = "fwup fwup.qcow2"
EOF
```

:::note

The fwup type is provided by the bbclass
[image_types_fwup.bbclass](https://github.com/fwup-home/meta-fwup/blob/master/classes/image_types_fwup.bbclass).
It relies on wic image generator and uses their build artifacts for bootloader
and rootfs.

:::

### Building an image

Now that the configuration is over. Let's start a build:

```bash
bitbake core-image-full-cmdline
```

:::note

For this example, and demonstration purposes, we'll use the image called
[core-image-full-cmdline](https://git.yoctoproject.org/poky/tree/meta/recipes-core/images/core-image-full-cmdline.bb).

:::

Once the build has finished, let's inspect the build outputs:

```bash
$ cd tmp/deploy/images/qemuarm64-uboot

$ ls -lh core-image-full-cmdline*.fw
-rw-r--r-- 2 joaohf joaohf 71M dez 27 16:20 core-image-full-cmdline-qemuarm64-uboot.rootfs-20241227191846.fw
lrwxrwxrwx 2 joaohf joaohf  64 dez 27 16:20 core-image-full-cmdline-qemuarm64-uboot.rootfs.fw -> core-image-full-cmdline-qemuarm64-uboot.rootfs-20241227191846.fw

$ ls -lh core-image-full-cmdline*fwup*
-rw-r--r-- 2 joaohf joaohf 1,1G dez 27 16:20 core-image-full-cmdline-qemuarm64-uboot.rootfs-20241227191846.fwup
-rw-r--r-- 2 joaohf joaohf 199M dez 27 17:36 core-image-full-cmdline-qemuarm64-uboot.rootfs-20241227191846.fwup.qcow2
lrwxrwxrwx 2 joaohf joaohf   66 dez 27 16:20 core-image-full-cmdline-qemuarm64-uboot.rootfs.fwup -> core-image-full-cmdline-qemuarm64-uboot.rootfs-20241227191846.fwup
lrwxrwxrwx 2 joaohf joaohf   72 dez 27 16:20 core-image-full-cmdline-qemuarm64-uboot.rootfs.fwup.qcow2 -> core-image-full-cmdline-qemuarm64-uboot.rootfs-20241227191846.fwup.qcow2
```

The folder _tmp/deploy/images/qemuarm64-uboot_ has many files generated from the
build tasks. We are interested on some files only:

- The first one with file extension .fw, is the firmware image made by fwup.
  We'll use this file for A/B upgrades.
- And the second file is the [qcow2](https://en.wikipedia.org/wiki/Qcow) Yocto
  image suitable for using it with QEMU when running the command `runqemu`.

### Running QEMU images with runqemu script

The [runqemu script](https://git.yoctoproject.org/poky/tree/scripts/runqemu) is
the official way for running QEMU with the image previously created. The scripts
accepts many QEMU parameters.

:::info

For more details about using QEMU with Yocto, check out the official
documentation:
[Using the Quick EMUlator (QEMU)](https://docs.yoctoproject.org/dev-manual/qemu.html)
:::

For this tutorial the follow command will be used:

```
runqemu core-image-full-cmdline nographic serialstdio wic.qcow2
```

It starts QEMU without graphic support and with serial console attached to
stdio. The _wic.qcow2_ says to runqemu that we want to boot using the
_core-image-full-cmdline-qemuarm64-uboot.rootfs.fwup.qcow2_ image.

After running the runqemu command, we got:

```
$ runqemu core-image-full-cmdline nographic serialstdio slirp wic.qcow2
runqemu - INFO - Running bitbake -e  core-image-full-cmdline...
runqemu - INFO - Continuing with the following parameters:
MACHINE: [qemuarm64-uboot]
FSTYPE: [wic.qcow2]
ROOTFS: [/data-work/yocto/work/fwup/build/tmp/deploy/images/qemuarm64-uboot/core-image-full-cmdline-qemuarm64-uboot.rootfs.wic.qcow2]
CONFFILE: [/data-work/yocto/work/fwup/build/tmp/deploy/images/qemuarm64-uboot/core-image-full-cmdline-qemuarm64-uboot.rootfs.qemuboot.conf]

runqemu - INFO - Setting up tap interface under sudo
runqemu - INFO - Network configuration: ip=192.168.7.2::192.168.7.1:255.255.255.0::eth0:off:8.8.8.8 net.ifnames=0
runqemu - INFO - Running /data-work/yocto/work/fwup/build/tmp/work/x86_64-linux/qemu-helper-native/1.0/recipe-sysroot-native/usr/bin/qemu-system-aarch64 -device virtio-net-pci,netdev=net0,mac=52:54:00:1
2:34:02 -netdev tap,id=net0,ifname=tap0,script=no,downscript=no -object rng-random,filename=/dev/urandom,id=rng0 -device virtio-rng-pci,rng=rng0 -drive id=disk0,file=/data-work/yocto/work/fwup/build/tmp
/deploy/images/qemuarm64-uboot/core-image-full-cmdline-qemuarm64-uboot.rootfs.wic.qcow2,if=none,format=qcow2 -device virtio-blk-device,drive=disk0 -device qemu-xhci -device usb-tablet -device usb-kbd  -
machine virt -cpu cortex-a57 -smp 4 -m 256 -serial mon:stdio -serial null -nographic -device virtio-gpu-pci -bios /data-work/yocto/work/fwup/build/tmp/deploy/images/qemuarm64-uboot/u-boot.bin

runqemu - INFO - Host uptime: 26648.54



U-Boot 2024.10-dirty (Oct 07 2024 - 14:54:35 +0000)

DRAM:  256 MiB
Core:  52 devices, 14 uclasses, devicetree: board
Flash: 64 MiB
Loading Environment from VIRTIO_BLK... OK
In:    serial,usbkbd
Out:   serial,vidconsole
Err:   serial,vidconsole
Bus xhci_pci: Register 8001040 NbrPorts 8
Starting the controller
USB XHCI 1.00
scanning bus xhci_pci for devices... 3 USB Device(s) found
Net:   eth0: virtio-net#32

Hit any key to stop autoboot:  0
Saving Environment to VIRTIO_BLK... OK
board_name=[qemu-arm] ...
21881344 bytes read in 8 ms (2.5 GiB/s)
loading qemu.dtb
1048576 bytes read in 0 ms
debug: [console=ttyAMA0 root=/dev/vda2] ...
debug: [bootz 0x40200000 - 0x49000000] ...
## Flattened Device Tree blob at 49000000
   Booting using the fdt blob at 0x49000000
Working FDT set to 49000000
   Loading Device Tree to 000000004d491000, end 000000004d593fff ... OK
Working FDT set to 4d491000

Starting kernel ...

[    0.000000] Booting Linux on physical CPU 0x0000000000 [0x411fd070]
[    0.000000] Linux version 6.12.3-yocto-standard (oe-user@oe-host) (aarch64-poky-linux-gcc (GCC) 14.2.0, GNU ld (GNU Binutils) 2.43.1.20241111) #1 SMP PREEMPT Thu Dec 12 17:25:00 UTC 2024

Poky (Yocto Project Reference Distro) 5.1 qemuarm64-uboot ttyAMA0

qemuarm64-uboot login:
```

That log above shows some very interesting points:

- QEMU was configure with _-bios_ parameter:
  ```
  -bios /build/tmp/deploy/images/qemuarm64-uboot/u-boot.bin
  ```
  Which means u-boot will be used as bootloader for linux kernel.
- we can check that u-boot support for virtio block device is working as
  expected:
  ```
  ...
  Loading Environment from VIRTIO_BLK... OK
  ...
  Saving Environment to VIRTIO_BLK... OK
  ```

:::note

When logged on qemu instance, it's necessary to run the command:
`ifconfig eth0 192.168.7.2 netmask 255.255.255.0` to setup a IP address to eth0
interface.

:::

### Inspecting A partition

- partition layout:

  ```
  root@qemuarm64-uboot:~# sfdisk -l /dev/vda
  Disk /dev/vda: 1.02 GiB, 1096941568 bytes, 2142464 sectors
  Units: sectors of 1 * 512 = 512 bytes
  Sector size (logical/physical): 512 bytes / 512 bytes
  I/O size (minimum/optimal): 512 bytes / 512 bytes
  Disklabel type: dos
  Disk identifier: 0x00000000

  Device     Boot   Start     End Sectors   Size Id Type
  /dev/vda1  *       8192   93035   84844  41.4M  c W95 FAT32 (LBA)
  /dev/vda2         93036 1117585 1024550 500.3M 83 Linux
  /dev/vda3       1117586 2142135 1024550 500.3M 83 Linux
  /dev/vda4       2142136 3190711 1048576   512M 83 Linux
  ```

- uname
  ```
  root@qemuarm64-uboot:~# uname -a
  Linux qemuarm64-uboot 6.12.3-yocto-standard #1 SMP PREEMPT Thu Dec 12 17:25:00 UTC 2024 aarch64 GNU/Linux
  ```
- uboot variables:
  ```
  root@qemuarm64-uboot:~# fw_printenv nerves_fw_active nerves_fw_validated nerves_fw_booted
  nerves_fw_active=a
  nerves_fw_validated=1
  nerves_fw_booted=1
  ```

### Moving to B partition

Alright, partition A looks fine. Now, we want to run an upgrade using the fwup
firmware image.

From the build machine:

```bash
$ cd build/tmp/deploy/images/qemuarm64-uboot
$ cat core-image-full-cmdline-qemuarm64-uboot.rootfs.fw | ssh root@192.168.7.2 'fwup -v -a -U -d /dev/vda -t upgrade.b'
fwup: require-uboot-variable(uboot-env, nerves_fw_active) -> met
fwup: require-uboot-variable(uboot-env, nerves_fw_validated) -> met
fwup: require-uboot-variable(uboot-env, a.nerves_fw_platform) -> met
fwup: require-uboot-variable(uboot-env, a.nerves_fw_architecture) -> met
fwup: Upgrading partition B
100% [====================================] 73.74 MB in / 570.79 MB out
Success!
Elapsed time: 9.758 s
```

The important argument is the `-t upgrade.b` telling to fwup which partition
will be upgraded.

Let's also inspect u-boot environment variables. Because the task upgrade.b
should changed something there:

```bash
root@qemuarm64-uboot:~# fw_printenv nerves_fw_active nerves_fw_validated nerves_fw_booted
nerves_fw_active=b
nerves_fw_validated=0
nerves_fw_booted=0
```

Indeed, the _nerves_fw_active_ variable has changed.

Inside qemu, reboot the system using the `reboot` command in order to change the
partition.

Once the system come back, let's inspect the u-boot environment variables to
check if those variables are pointing to the B partition now.

```bash
root@qemuarm64-uboot:~# fw_printenv nerves_fw_active nerves_fw_validated nerves_fw_booted
nerves_fw_active=b
nerves_fw_validated=1
nerves_fw_booted=1
```

And they are ok. Not only still pointing to B partition as well validated and
booted.

The lsblk output also proves that vda3 is mounted as root partition:

```bash
root@qemuarm64-uboot:~# lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
vda    253:0    0     1G  0 disk
|-vda1 253:1    0  41.4M  0 part /boot
|-vda2 253:2    0 500.5M  0 part
|-vda3 253:3    0 500.5M  0 part /
`-vda4 253:4    0   238K  0 part
```

### Moving from B to A partition

Ok, looks like partition B is up and running too.

Now, it's time to run a second upgrade and moving back to A partition.

```bash
$ cd build/tmp/deploy/images/qemuarm64-uboot
$ cat core-image-full-cmdline-qemuarm64-uboot.rootfs.fw | ssh root@192.168.7.2 'fwup -v -a -U -d /dev/vda -t upgrade.a'
fwup: require-uboot-variable(uboot-env, nerves_fw_active) -> met
fwup: require-uboot-variable(uboot-env, nerves_fw_validated) -> met
fwup: require-uboot-variable(uboot-env, b.nerves_fw_platform) -> met
fwup: require-uboot-variable(uboot-env, b.nerves_fw_architecture) -> met
fwup: Upgrading partition A
100% [====================================] 73.74 MB in / 570.79 MB out
Success!
Elapsed time: 8.515 s
```

Again, checking u-boot variables:

```bash
root@qemuarm64-uboot:~# fw_printenv nerves_fw_active nerves_fw_validated nerves_fw_booted
nerves_fw_active=a
nerves_fw_validated=0
nerves_fw_booted=0
```

And rebooting the system using `reboot` command in order to change the partition
to A. After the reboot, let's check what is the state of u-boot variables:

```bash
root@qemuarm64-uboot:~# fw_printenv nerves_fw_active nerves_fw_validated nerves_fw_booted
nerves_fw_active=a
nerves_fw_validated=1
nerves_fw_booted=1
```

The lsblk output should point vda2 mounted as root partition:

```bash
root@qemuarm64-uboot:~# lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
vda    253:0    0     1G  0 disk
|-vda1 253:1    0  41.4M  0 part /boot
|-vda2 253:2    0 500.5M  0 part /
|-vda3 253:3    0 500.5M  0 part
`-vda4 253:4    0   238K  0 part
```

It worked as expected. The system is using a rootfs from partition A.

## Low level details

:::note

A bit more Yocto vocabulary.

:::

### meta-qemu-bsp layer

The [meta-qemu-bsp layer](https://github.com/meta-erlang/meta-qemu-bsp) is a BSP
(board support package) type layer. The target is to bring some machines
extended from default Yocto QEMU machines.

By default, Yocto brings the following QEMU machines:

- ARM (qemuarm + qemuarm64)
- x86 (qemux86 + qemux86-64)
- PowerPC (qemuppc only)
- MIPS (qemumips + qemumips64)

These machines don't work with u-boot for instance. In order to enable u-boot,
some configuration are necessary. Thus, the following machine proveded by
meta-qemu-bsp layer were created:

- [qemuarm-uboot](https://github.com/meta-erlang/meta-qemu-bsp/blob/master/conf/machine/qemuarm-uboot.conf)
- [qemuarm64-uboot](https://github.com/meta-erlang/meta-qemu-bsp/blob/master/conf/machine/qemuarm64-uboot.conf)

A WIC file is also provided:
[qemuarm-uboot-directdisk.wks](https://github.com/meta-erlang/meta-qemu-bsp/blob/master/wic/qemuarm-uboot-directdisk.wks)
and it is used when creating wic images.

The meta-qemu-bsp layer was design to use with any other Yocto layer. It's not
specific for fwup use cases.

### Patching u-boot

The u-boot bootloader was not prepared to load environment variables from virtio
block device. So, a patch called
[Load and save environment from virtio block device](https://github.com/meta-erlang/meta-qemu-bsp/blob/master/recipes-bsp/u-boot/files/0001-Load-and-save-environment-from-virtio-block-device.patch)
was developed.

It allows u-boot to load environment variables from virtio block device reading
data from a specific offset and size. As u-boot already provides support for
[virtio](https://docs.u-boot.org/en/stable/develop/driver-model/virtio.html),
the bits needed to load variables from virtio was easy to implement.

So far, this patch was not submited to u-boot upstream project.

### fwup examples layer

A new layer called
[meta-fwup-examples](https://github.com/joaohf/meta-fwup-examples) was developed
to hold fwup examples for Yocto images.

The process of enabling Yocto images to use fwup is not so smooth and it depends
on details like:

- partition layout
- boot load paramenters
- boot load environment scripts
- fwup tasks
- custom logics

Then, each of these details is a combination that works for a specific target
board. Having a dedicated layer with working fwup examples helps for
demonstration and new implementations.

The meta-fwup-examples is also a repository of .fwup description files:

- [qemuarm-uboot.fwup](https://github.com/joaohf/meta-fwup-examples/blob/master/fwup/qemuarm-uboot.fwup)
- [qemuarm64-uboot.fwup](https://github.com/joaohf/meta-fwup-examples/blob/master/fwup/qemuarm64-uboot.fwup)

It's important to mention that I'm reusing and adapting .fwup files from
[Nerves Project](https://github.com/orgs/nerves-project).

The .fwup used for raspberrypi in
[fwup for A/B image upgrades, part I](/blog/2024/09/24/index) will be moved to
the layer meta-fwup-examples soon.

## Conclusions

Yes, QEMU machines with u-boot enabled is feasible. And it will help me to
reduce time when testing/developing.

While the [fwup for A/B image upgrades, part I](/blog/2024/09/24/index) blog
post discussed fwup and meta-fwup details, this post explored how QEMU could be
used instead a real hardware for testing.

Now it's possible to move fowarding and try some
[nerves_hub_link](https://github.com/nerves-hub/nerves_hub_link) high level
integration for A/B upgrades using [nerves-hub](https://www.nerves-hub.org/).

But that will be a topic for further blog posts.
