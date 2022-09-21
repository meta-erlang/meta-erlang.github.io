## Introduction

Building and running your own Erlang and/or Elixir version could be an
alternative when the host does not provide those packages or when additional
tools are necessary and you want to provide a single installation source.

The meta-erlang layer is able to make a specific tarball having the following:

- Erlang
- Elixir
- rebar3
- erlfmt
- elvis

This tarball builds all the listed tools natively, wrapping them into a tarball
self-installed script and ready to be shared. The _beamtools_ does not provides
any way to cross-compile code. The aim is to provide a custom set of BEAM tools
able to be run on any Linux machine.

## Building beamtools

The first step is to define which Erlang and Elixir versions the beamtools will
build. This is done configuring the following variables in the file
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

The installation script is going to ask the install destination path. You are
free to use whatever path you like.

When the installation has over, it is necessary to source the environment script
which has all the definitions about where to find the tools:

```bash
source /opt/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3/environment-setup-x86_64-pokysdk-linux
```

The current shell has the environment variable setted to the correct Erlang and
Elixir installation. And running: _erl_ or _iex_ gives you an Erlang and Elixir
prompts.

!> For each new shell, it will be necessary to source the
environment-setup-x86_64-pokysdk-linux file.

The follow lines show the full output for beamtools installation process:

```bash
joaohf@porco:~/work/opensource/kas-meta-erlang$ honister/tmp/deploy/sdk/x86_64-beamtools-nativesdk-standalone-3.4.1-erlang-24.1.7-elixir-1.12.3.sh
BEAM tools installer version 3.4.1-erlang-24.1.7-elixir-1.12.3
==============================================================
Enter target directory for SDK (default: /opt/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3): /home/joaohf/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3
You are about to install the SDK to "/home/joaohf/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3". Proceed [Y/n]?
Extracting SDK.....................................done
Setting it up...done
SDK has been successfully set up and is ready to be used.
Each time you wish to use the SDK in a new shell session, you need to source the environment setup script e.g.
 $ . /home/joaohf/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3/environment-setup-x86_64-pokysdk-linux
```

## Downloading a pre-built beamtools tarball

It is also possible to download and run a pre-built beamtools installer yourself
with the following steps:

1. Locate and download the \*.sh at
   https://github.com/meta-erlang/meta-erlang/releases
2. Execute the installation script. Here is an example for the traditional
   installer:

```bash
    sh ~/Downloads/x86_64-beamtools-nativesdk-standalone-3.4.1-erlang-24.1.7-elixir-1.12.3.sh
```

    During execution, a prompt appears that allows you to choose the installation directory. For example, you could choose the following: /home/your-username/beamtools

3. Source the tools environment setup script by using a command like the
   following:

```bash
    source /home/your_username/beamtools/environment-setup-x86_64-pokysdk-linux
```

After you have sourced the setup script, the tools are added to PATH and any
other environment variables required to run the tools are initialized. The
results are working versions versions of rebar3, Erlang/OTP and Elixir.
