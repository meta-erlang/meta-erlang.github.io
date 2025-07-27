---
sidebar_position: 7
description: Building Erlang/OTP for debugging
---

# Building SDKs


[Debug emulator](https://www.erlang.org/doc/system/debugging.html)

[How to Build a Debug Enabled Erlang RunTime System](https://www.erlang.org/doc/system/install#advanced-configuration-and-build-of-erlang-otp_building_how-to-build-a-debug-enabled-erlang-runtime-system)

The erlang recipe from meta-erlang layer provides, via PACKAGECONFIG, a special way in order to build Erlang emulator for debugging purposes. The official Erlang/OTP has all the details about why a special build is necessary, [Debug emulator](https://www.erlang.org/doc/system/debugging.html). 

Enable with:

```
PACKAGECONFIG:append:pn-erlang = " emu-type-debug"
```

Add the feature `dbg-pkgs` and `tools-debug` to EXTRA_IMAGE_FEATURES:

```
EXTRA_IMAGE_FEATURES:append = " dbg-pkgs tools-debug"
```

Build an image like core-image-minimal:

```
bitbake core-image-minimal
```

Run it using qemu:

```
runqemu core-image-minimal
```

Two shells:

One for running `erl`:

```
erl --emu-type debug
```

A second one for attaching gdb:

```
gdb --pid=19
```

According to Erlang/OTP documentation, the emu-type debug is a special emulator tailored for
debugging purposes.