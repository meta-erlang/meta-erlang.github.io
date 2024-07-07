---
title: BEAM Tools
description: BEAM Tools releases
hide_table_of_contents: true
---

# BEAM Tools

[Beam Tools](/docs/guides/guides-beamtools/) is a tarball having Erlang/OTP and Elixir plus
rebar3, erlfmt, elvis, erlang_ls and wrangler; ready to run on any Linux host without 
needed other software requirements (wxWidgets or ssl libraries).

It allows you to compile and run any Erlang and Elixir source code. The main purpose is to
make meta-erlang generating useful toolchains to be run on linux hosts (beamtools does not provide any
package for cross compilation to any target).

## Releases

Each relase represents a specific combination of Erlang/OTP and Elixir for each meta-erlang branches. Usually
the latest Erlang/OTP and Elixir are used.

| meta-erlang branch | BEAM Tools version         |
| ------------------ | -------------------------- |
| honister           | [3.4.1 Erlang/OTP 24.1.7 Elixir 1.12.3](https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.1.0)     |
| honister           | [3.4.1 Erlang/OTP 24.2 Elixir 1.12.3](https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.2.0)       |
| honister           | [3.4.2 Erlang/OTP 24.3.3 Elixir 1.12.3](https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.3.0)     |
| kirkstone          | [4.0.1 Erlang/OTP 25.0 Elixir 1.13.3](https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.4.0)       |
| langdale           | [4.1.1 Erlang/OTP 25.1.2 Elixir 1.14.2](https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.5.0)     |
| langdale           | [4.1.3 Erlang/OTP 25.2.3 Elixir 1.14.4-dev](https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.6.0) |
| mickledore         | [4.2.1 Erlang/OTP 26.0.2 Elixir 1.15.2](https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.7.1)     |
| nanbield           | [4.3.2 Erlang/OTP 26.2.1 Elixir 1.16.0](https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.8.1)     |
| scarthgap          | [5.0.1 Erlang/OTP 27.0 Elixir 1.16.3](https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.9.0)       |
| scarthgap          | [5.0.2 Erlang/OTP 27.0 Elixir 1.17.1](https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.9.1)       |

## How to use

1. Locate and download the \*.sh at
   https://github.com/meta-erlang/meta-erlang/releases
1. Execute the installation script. Here is an example for the traditional
   installer:

   ```bash
   sh ~/Downloads/x86_64-beamtools-nativesdk-standalone-3.4.1-erlang-24.1.7-elixir-1.12.3.sh -y -d <local installation folder>
   ```

   The *local installation folder* could be any folder that you want. The recommendation is to create
   inside your $HOME folder, for example:
   
   ```bash
   $HOME/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3
   ```

1. Source the tools environment setup script by using a command like the
   following:

    ```bash
    source /home/your_username/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3/environment-setup-x86_64-pokysdk-linux
    ```

After you have sourced the setup script, the tools are added to PATH and any
other environment variables required to run the tools are initialized. The
results are working versions versions of rebar3, Erlang/OTP and Elixir.
