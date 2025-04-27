---
sidebar_position: 6
description: Building BEAM Tools.
---

# Building BEAM Tools

The [beamtools user guide](/beamtools/intro) has more details about how to setup and usage modes.

This section is focused on how to build beamtools using meta-erlang.

## beamtools-tarball recipe

The first step is to define which Erlang and Elixir versions the beamtools will
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

After that, the next step is to call bitbake to build the beamtools tarball:

```bash
bitbake beamtools-tarball
```

Once the build has finished, the results can be found in the _tmp/deploy/sdk_
folder. You can copy it to the development machine and install running the .sh
script, like that:

```bash
sh x86_64-beamtools-nativesdk-standalone-3.4.1-erlang-24.1.7-elixir-1.12.3.sh
```