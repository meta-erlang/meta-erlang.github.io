---
title: meta-erlang Yocto Project Compatible v3 Layers Accepted
authors: [joaohf]
tags: [meta-erlang]
---

This post is to inform that meta-erlang has been accepted as Yocto Project
Compatible v3 Layer.

<!-- truncate -->

The
[Yocto Project Compatible Layers](https://www.yoctoproject.org/development/yocto-project-compatible-layers/)
is a program to evaluate and list all layers that follows
[The Yocto Project Layer Model](https://docs.yoctoproject.org/current/overview-manual/yp-intro.html#the-yocto-project-layer-model).

On last December/2025, I received an email from Yocto Project managers saying as
follows:

```
Dear Yocto Layer Maintainer,

Congratulations! Your layer has been successfully reviewed and is now recognized as Yocto Project Compatible v3.

As part of this recognition, you are granted the right to display the Yocto Project Compatible badge in association with your layer and related materials.
What’s Included in This Email:

    ✅ Your Rights: You may now publicly use the “Yocto Project Compatible” badge to promote your layer.

    🔗 Links to Entry: Your layer listing can be found on the Yocto Project Layer Index: https://layers.openembedded.org/layerindex/branch/master/layers/

    🧪 Layer Compatibility Check: Your layer has passed compatibility validation with the current Yocto Project release v3.

    📎 Attached:

        The official Yocto Project Compatible badge

        Branding Guidelines to help you use the badge properly
```

In fact, I have applied meta-erlang through
[Yocto Project Compatible Layer Registration](https://www.yoctoproject.org/compatible-registration/).
And there was the final result.

## What does it mean ?

The rights to officially promote meta-erlang as “Yocto Project Compatible” and
publicly use a badge which informs the end user that meta-erlang has passed to
all
[compatibility checks](https://docs.yoctoproject.org/current/dev-manual/layers.html#making-sure-your-layer-is-compatible-with-yocto-project).
This is the real value of the compatible layer program.

![alt Yocto Project Compatible badge](YoctoCompatibleBadge.png 'Yocto Project Compatible badge')

Also, meta-erlang is listed as compatible with a small badge on the Yocto
Project Layer Index:
https://layers.openembedded.org/layerindex/branch/master/layers/

In practical terms, I also
[added a new lux test](https://github.com/meta-erlang/kas-meta-erlang/blob/main/lux/test/yocto_layer_compatible_check.lux)
which executes the yocto-check-layer check script in order to verify if
meta-erlang is compatible and keeps compatible,
[Making Sure Your Layer is Compatible With Yocto Project](https://docs.yoctoproject.org/current/dev-manual/layers.html#making-sure-your-layer-is-compatible-with-yocto-project).
