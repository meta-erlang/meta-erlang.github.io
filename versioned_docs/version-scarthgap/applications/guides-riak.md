---
sidebar_position: 4.2
sidebar_label: riak
sidebar_class_name: green
description: Shows how to set up and install riak.
---

# riak

:::info

Recommended PREFERRED_VERSION for riak:

| riak     | Erlang/OTP | Elixir |
| ---------| ---------- | ------ |
| 3.2.1    | 25.3%      | 1.14% |

:::

In this guide we are using the plain meta-erlang layer to build the
[riak](http://www.riak.info). The recipe
[riak.inc](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-database/riak/riak.inc)
builds the riak using a crosscompile approach.

As the final result, we will be able to run an embedded riak using qemu.

Follow the quickstart guide to get a basic working environment and then:

- Add erlang preferred version 25.x in _conf/local.conf_ (check the full list of
  Erlang supported versions here
  [Riak KV 3.2.0 Release Notes](https://github.com/basho/riak/blob/riak-3.2.0/RELEASE-NOTES.md))

```bash
PREFERRED_VERSION_erlang = "25%"
PREFERRED_VERSION_erlang-native = "25%"
```

- Append `pam` to DISTRO*FEATURES in \_conf/local.conf* file:

```bash
DISTRO_FEATURES += " pam"
```

- Add `riak` package to `IMAGE_INSTAL` in _conf/local.conf_

```bash
IMAGE_INSTALL:append = " riak"
```

- Now its time to build the image:

```bash
bitbake core-image-minimal
```

- And check the results with qemu:

```bash
runqemu core-image-minimal nographic qemuparams="-m 2048"
```

The official [riak documentation](https://www.tiot.jp/riak-docs/riak/kv/3.0.11/)
has a specific session about how to perform the initial configuration:
[Basic Riak KV Configuration](https://www.tiot.jp/riak-docs/riak/kv/3.0.11/configuring/basic/)
-- I recommend to follow the instructions there.

After the first configuration it is time to start riak. As usual, use systemd or
systemv scripts (stop and restart as well) riak:

- `/etc/init.d/riak restart`, or
- `systemctl restart riak`

Remember that the main riak entry point is _/usr/lib/riak/bin/riak_.

To make sure that everything is working properly, follow the guide
[Verifying a Riak KV Installation](https://www.tiot.jp/riak-docs/riak/kv/3.0.11/setup/installing/verify/).

Soon or later you will end up configuring a cluster. Then following this guide:
[Running a Cluster](https://www.tiot.jp/riak-docs/riak/kv/3.0.11/using/running-a-cluster/).
