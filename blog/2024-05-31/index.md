---
title: New Erlang releases 27.0
authors: [joaohf]
tags: [meta-erlang, news]
---

We've added support for the following new Erlang/OTP releases:

<!-- truncate -->

| meta-erlang branch | Erlang/OTP version      |
| ------------------ | ----------------------- |
| scarthgap          | 25.3.2.12, 26.2.5, 27.0 |
| master             | 25.3.2.12, 26.2.5, 27.0 |

And the following Elixir releases:

| meta-erlang branch | Elixir version                 |
| ------------------ | ------------------------------ |
| scarthgap          | 1.13.4, 1.14.4, 1.15.7, 1.16.3 |
| master             | 1.13.4, 1.14.4, 1.15.7, 1.16.3 |

I was planing to also add Erlang/OTP 27.0 to LTS kirkstone release. However it
is not feasible as Erlang/OTP 27 uses autoconf 2.72 and kirkstone uses 2.71.
Thus, there is an incompatible related to build system.
