---
sidebar_position: 6
description: Building runtime.
---

# Building runtime

The [beamruntime user guide](/beamruntime/intro) has more details about how to setup
and usage modes.

This section is focused on how to build beamruntime using meta-erlang.

## beamruntime-tarball recipe

The first step is to define which Erlang and Elixir versions the beamruntime will
use. This is done configuring the following variables in the file
[conf/local.conf or in the distro configuration file](https://docs.yoctoproject.org/ref-manual/terms.html?highlight=local%20conf#term-Configuration-File):

```
PREFERRED_VERSION_erlang = "24.1.7"
PREFERRED_VERSION_erlang-native = "24.1.7"
PREFERRED_VERSION_nativesdk-erlang = "24.1.7"

PREFERRED_VERSION_elixir = "1.12.3"
PREFERRED_VERSION_elixir-native = "1.12.3"
PREFERRED_VERSION_nativesdk-elixir = "1.12.3"
```

Then, make sure opengl feature is *not* configured. By defaul beamruntime enables wx
Erlang application:

```
# disble opengl for beamruntime
DISTRO_FEATURES_FILTER_NATIVESDK:remove = "opengl"
```

After that, the next step is to call bitbake to build the beamruntime tarball:

```bash
bitbake beamruntime-tarball
```

Once the build has finished, the results can be found at _tmp/deploy/sdk_
folder. You can copy it to the development machine. The installation is done
executing the .sh script, like that:

```bash
sh x86_64-beamruntime-nativesdk-standalone-3.4.1-erlang-24.1.7-elixir-1.12.3.sh
```
