---
title: New Erlang releases 24.3.4.8, 25.1.2.1, 25.2.1
authors: [joaohf]
tags: [meta-erlang, news]
---

We've added support for the following new Erlang/OTP releases:

| meta-erlang branch | Erlang/OTP version |
|--------------------|--------------------|
| dunfell            | 24.3.4.8           |
| kirkstone          | 24.3.4.8, 25.1.2.1, 25.2.1 |
| langdale           | 24.3.4.8, 25.1.2.1, 25.2.1 |

Fixed bugs:

 * [QA Issue buildpaths (reproducible builds) when building with langdale](https://github.com/meta-erlang/meta-erlang/issues/205), a specific
 patch has been integrated in order to avoid building flags into the final beam.smp binary.

To be decided:

 * Yocto Langdale release has enabled reproducible build checks. Erlang/OTP from 25 and later implements special flags
 to fix reproducible issues. But Erlang/OTP 24 does not have these special flags as a consequence langdale Erlang/OTP 24 builds
 warns about: _packages contains reference to TMPDIR [buildpaths]_. There are two paths that we could get. One is to drop Erlang/OTP 24 support
 OR disable QA buildpaths checking.


