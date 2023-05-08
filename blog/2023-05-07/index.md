---
title: New Erlang releases 24.3.4.11, 25.3.2 and recipe updates
authors: [joaohf]
tags: [meta-erlang, news]
---

We've added support for the following new Erlang/OTP releases:

| meta-erlang branch | Erlang/OTP version         |
| ------------------ | -------------------------- |
| dunfell            | 24.3.4.11                  |
| kirkstone          | 24.3.4.11, 25.3.2          |
| langdale           | 25.3.2                     |

Removed recipes:

 - For langdale the recipes ejabberd and emqx have been removed due the lack of
   supporting cross-compilation build in a stable way.

Updated recipes:

 - For langdale the following recipes have been updated: lux, vernemq, yaws, tsung, riak, couchdb.
   It is important to mention about langdale [EOL in May 2023](https://wiki.yoctoproject.org/wiki/Releases).
   So, this branch will not receive updates.

It has been decided:

- Dropped support to Erlang/OTP 24 in langdale. Due the lack of deterministic build flags in 24. Elixir
1.12 has also been dropped (because it dependes on Erlang/OTP 24).
