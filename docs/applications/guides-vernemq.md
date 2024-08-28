---
sidebar_position: 4.4
sidebar_label: vernemq
sidebar_class_name: green
description: Shows how to set up and install vernemq.
---

# vernemq

:::info

Recommended PREFERRED_VERSION for vernemq:

| vernemq | Erlang/OTP | Elixir |
| ------- | ---------- | ------ |
| 1.13.0  | 25.3%      | -      |

:::

In this guide we are using the plain meta-erlang layer to build a
[VerneMQ](hhttps://vernemq.com/) MQTT broker.

The recipe
[vernemq_1.12.5.bb](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-connectivity/vernemq/vernemq_1.12.5.bb)
builds the vernemq using a crosscompile approach both to erlang and C. A couple
of patches exist in order to fix cross compilation issues in vernemq project.

As a final result, we are able to run an embedded vernemq using qemu.

Follow the quickstart guide to get a basic working environment and then:

- Add erlang preferred version 24.x in _conf/local.conf_

```bash
echo 'PREFERRED_VERSION_erlang = "24.3.3"' >> conf/local.conf
echo 'PREFERRED_VERSION_erlang-native = "24.3.3"' >> conf/local.conf
echo 'PREFERRED_VERSION_nativesdk-erlang = "24.3.3"' >> conf/local.conf
```

- Add `vernemq` package to `IMAGE_INSTAL` in _conf/local.conf_

```bash
echo 'IMAGE_INSTALL:append = " vernemq"' >> conf/local.conf
```

- Now it's time to build the image:

```bash
bitbake core-image-minimal
```

- And check the results with qemu:

```bash
runqemu core-image-minimal
```

By default vernemq starts automatically and can be control using systemctl, like
that:

```bash
systemctl start vernemq
```

As vernemq provides its own command line control scripts, it is possible to
interact with the vmq-adm and vernemq scripts. But it is necessary to switch to
the correct user, like the following:

```bash
su -s /bin/sh -l vernemq
```

That is necessary because vernemq runs using a system user called `vernemq`.
