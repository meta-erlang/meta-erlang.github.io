---
sidebar_position: 4.8
sidebar_label: wings3d
sidebar_class_name: green
description: Shows how to set up and install wings3d.
---

# wings3d

:::info

Recommended PREFERRED_VERSION for wings:

| wings    | Erlang/OTP | Elixir |
| ---------| ---------- | ------ |
| 2.2.7    | 25.3%      | -      |

:::

[Wings3d](http://www.wings3d.com/) is an modeller software written in Erlang.
And it's possible to run Wings3d on any embedded device using meta-erlang.

The recipe
[wings_git.bb](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-extended/wings/wings_git.bb)
is prepared to build wings. However, an additional configuration is necessary to
enable wx package from erlang recipes. This is necessary because the wx package
is disabled by default.

So, add the follow configuration in _conf/local.conf_ file:

```
PACKAGECONFIG:append:pn-erlang = " wx"
```

wings runs on X11 environment, because of that the target image have to have all
the graphic components in order to run it. There are multiple ways to achieve
the requirements and one of them is adding the following configuration in
_conf/local.conf_ file:

```
IMAGE_INSTALL:append:pn-core-image-x11 = " erlang erlang-modules elixir wings"
IMAGE_INSTALL:append:pn-core-image-sato = " erlang erlang-modules elixir wings"

IMAGE_ROOTFS_EXTRA_SPACE:pn-core-image-x11 = "1048576"
IMAGE_ROOTFS_EXTRA_SPACE:pn-core-image-sato = "1048576"
```

And, finally building a YP/OE image with X11 support enabled like
`core-image-x11` or `core-image-sato`:

```
bitbake core-image-sato
```

As usual, qemu can be used to run and test the results:

```bash
runqemu core-image-sato
```
