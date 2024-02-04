---
sidebar_position: 5
description: Building your own SDKs.
---

# Building SDKs

## SDK for Erlang and Elixir

The meta-erlang layers includes the possibility to generate development
toolchains enabling better and smooth experience for the developer.

One could easily generates a specific SDK with all tools and libraries needed.
For example: if your project needs Erlang 22.1.8 and Elixir 1.10, you can
generate a SDK having these two dependencies. Then all the developers can share
and use the same SDK during the development phase.

In order to use a specific Erlang and Elixir versions, configure the following
variables in the file
[conf/local.conf or in the distro configuration file](https://docs.yoctoproject.org/ref-manual/terms.html?highlight=local%20conf#term-Configuration-File):

```
PREFERRED_VERSION_erlang = "23.0.4"
PREFERRED_VERSION_erlang-native = "23.0.4"
PREFERRED_VERSION_nativesdk-erlang = "23.0.4"

PREFERRED_VERSION_elixir = "1.11.2"
PREFERRED_VERSION_elixir-native = "1.11.2"
PREFERRED_VERSION_nativesdk-elixir = "1.11.2"
```

:::info

The default PACKAGECONFIG for erlang when nativesdk is to enable _wx_ and _observer_ tools. And
if your distribution configuration disables (or removes) the _opengl_ configuration, you will need
to add opengl in DISTRO_FEATURES_NATIVESDK variable (in or local.conf for instance). Like this:

```
DISTRO_FEATURES_NATIVESDK:append = " opengl"
```

:::

Maybe your team have special version of Erlang or Elixir with some in-house
patches, using a SDK created by YP is a good approach to follow. You will have
total control from the build until development SDK installation.

Also the SDK have all the dependencies to cross compile applications for target
hardware. So the developer has just one installation to perform in order to
access all the tools.

The recipe
[meta-erlang-toolchain](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-core/meta/meta-erlang-toolchain.bb)
is the main entry point when creating a generic toolchain with Erlang and
Elixir. And comes with Erlang, Elixir development modules as well rebar3 build
tool.

:::note

The follow two sections are based on
[Yocto Project Application Development and the Extensible Software Development Kit (eSDK)](https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html)
for Yocto Project 3.1.3 LTS "Dunfell". To get an up-to-date documentation,
please, visit the
[Yocto Project Documentation](https://docs.yoctoproject.org/index.html)

:::

### Standard SDK

Using the
[Standard SDK](https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-using-the-standard-sdk)
is simple as:

```bash
bitbake meta-erlang-toolchain
```

After finishing the SDK generation command, check the YP
[TMPDIR](https://docs.yoctoproject.org/ref-manual/ref-variables.html#term-TMPDIR).
A new file has been created like this:
_poky-glibc-x86_64-meta-erlang-toolchain-armv7vet2hf-neon-qemuarm-toolchain-3.1.3.sh_.
The file name depends on many factors like machine configuration and YP version.

The next step is run the toolchain installation script, like this:

```bash
~/work/opensource/build/tmp/deploy/sdk/poky-glibc-x86_64-meta-erlang-toolchain-armv7vet2hf-neon-qemuarm-toolchain-3.1.3.sh
Poky (Yocto Project Reference Distro) SDK installer version 3.1.3
=================================================================
Enter target directory for SDK (default: /opt/poky/3.1.3): /opt/poky/3.1.3
You are about to install the SDK to "/opt/poky/3.1.3". Proceed [Y/n]?
Extracting SDK.............................................done
Setting it up...done
SDK has been successfully set up and is ready to be used.
Each time you wish to use the SDK in a new shell session, you need to source the environment setup script e.g.
 $ . /opt/poky/3.1.3/environment-setup-armv7vet2hf-neon-poky-linux-gnueabi
```

As the last sentence says, just source the file
_environment-setup-armv7vet2hf-neon-poky-linux-gnueabi_ and we ready to use
Erlang and Elixir.

:::tip

If you need to customize the toolchain, i.e: add or remove tools, YP supports
[customize the Standard SDK](https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-appendix-customizing-standard).

:::

### Extensible SDK

[Extensible SDK](https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-extensible)
is the newly way in order to create SDK with YP. It includes the
[devtool](https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#using-devtool-in-your-sdk-workflow)
tool to help the development workflow when working with new recipes or testing
with the target hardware.

The instructions for generating an eSDK is as follow:

```bash
bitbake core-image-minimal -c populate_sdk_ext
```

The _populate_sdk_ext_ works only with image recipes. After finishing the
command, it is time to install the SDK like this:

```
joaohf@porco:~/tmp/poky$ ~/work/opensource/build/tmp/deploy/sdk/poky-glibc-x86_64-core-image-minimal-armv7vet2hf-neon-qemuarm-toolchain-ext-3.1.3.sh
Poky (Yocto Project Reference Distro) Extensible SDK installer version 3.1.3
============================================================================
Enter target directory for SDK (default: ~/poky_sdk):
You are about to install the SDK to "/home/joaohf/poky_sdk". Proceed [Y/n]?
Extracting SDK..................................................done
Setting it up...
Extracting buildtools...
Preparing build system...
WARNING: /home/joaohf/poky_sdk/layers/poky/meta-axon/recipes-support/glfw/glfw_3.2.1.bb: distro_features_check.bbclass is deprecated, please use features_check.bbclass instead
Parsing recipes: 100% |#########################################################################################################################################| Time: 0:02:14
Initialising tasks: 100% |######################################################################################################################################| Time: 0:00:01
Loading cache: 100% |###########################################################################################################################################| Time: 0:00:00
Initialising tasks: 100% |######################################################################################################################################| Time: 0:00:00
done
SDK has been successfully set up and is ready to be used.
Each time you wish to use the SDK in a new shell session, you need to source the environment setup script e.g.
 $ . /home/joaohf/poky_sdk/environment-setup-armv7vet2hf-neon-poky-linux-gnueabi
```

Source the environment setup script for each new shell session that you want to
use the SDK.

:::tip

Additional tools can also be included if needed, checkout the
[Customizing the Extensible SDK](https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-appendix-customizing)
documentation.

:::

## Development session example

This section shows an example about how to use the SDK during a development
session and exploring how we can use the command
[devtool](https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#using-devtool-in-your-sdk-workflow)
to help fixing a bug in an Erlang application.

We are going to perform the following steps:

- created a new bitbake recipe for an Erlang application
- build the recipe
- create an image and run it using QEMU
- execute the Erlang application on QEMU
- make a change in the application and use hot code swapping to change the
  application, that is, without stop the running application or restart the QEMU
  machine
- clean up the target QEMU
- finish up the recipe

One can use the same approach when working with a real hardware.

:::note

This session is far from be generic steps in order to develop, build, test
and deploy Erlang/Elixir projects using Yocto Project. The purpose here is just
to demonstrate one of multiple workflows.

:::

Let's start loading the SDK setup environment:

```bash
$ cd ~/poky_sdk
$ source environment-setup-armv7vet2hf-neon-poky-linux-gnueabi
SDK environment now set up; additionally you may now run devtool to perform development tasks.
Run devtool --help for further details.
```

For this experience we are going to use a small Erlang application called
`elock`. Clone it and build using rebar3 build tool.

```bash
$ git clone https://github.com/joaohf/elock
$ cd elock
$ rebar3 compile
```

Alright, the SDK is working as expected. The rebar3 tool is included into the
SDK as well all the Erlang development requirements. The next step is create an
elock bitbake recipe.

Still in the elock folder, call the `devtool add` in order to create a standard
bitbake recipe:

```bash
$ devtool add elock .
NOTE: Starting bitbake server...
NOTE: Starting bitbake server...
NOTE: Reconnecting to bitbake server...
NOTE: Retrying server connection (#1)...
NOTE: Reconnecting to bitbake server...
NOTE: Reconnecting to bitbake server...
NOTE: Retrying server connection (#1)...
NOTE: Retrying server connection (#1)...
NOTE: Starting bitbake server...
INFO: Using source tree as build directory since that would be the default for this recipe
INFO: Recipe /home/joaohf/poky_sdk/workspace/recipes/elock/elock_git.bb has been automatically created; further editing may be required to make it fully functional
```

devtool created a new recipe call elock_git.bb. This recipe does not work
because Yocto Project doesn't know how to read an Erlang/Elixir project and
generate a proper bitbake recipe. So we need to use a rebar3 plugin called
[rebar3_bitbake](https://hex.pm/packages/rebar3_bitbake) which knows how to
create a proper recipe:

```bash
$ rebar3 bitbake
$ cp elock_0.1.0.bb /home/joaohf/poky_sdk/workspace/recipes/elock/elock_git.bb
```

Now, elock recipe is ready. As the last step before the build, let's fix the
recipe version because we want to build and release the version 0.1.0. So, still
using devtool to change the recipe name do:

```bash
$ devtool rename -V 0.1.0 elock
NOTE: Starting bitbake server...
NOTE: Reconnecting to bitbake server...
NOTE: Retrying server connection (#1)...
Loading cache: 100% |##################################################################################################################################################| Time: 0:00:00
Loaded 3037 entries from dependency cache.
Parsing recipes: 100% |################################################################################################################################################| Time: 0:00:01
Parsing of 1943 .bb files complete (1937 cached, 6 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.
INFO: Renaming /home/joaohf/poky_sdk/workspace/appends/elock_git.bbappend to /home/joaohf/poky_sdk/workspace/appends/elock_0.1.0.bbappend
INFO: Renaming /home/joaohf/poky_sdk/workspace/recipes/elock/elock_git.bb to /home/joaohf/poky_sdk/workspace/recipes/elock/elock_0.1.0.bb
```

Finally, call devtool to build the elock recipe like this:

```bash
$ devtool build elock
NOTE: Starting bitbake server...
NOTE: Reconnecting to bitbake server...
NOTE: Retrying server connection (#1)...
Loading cache: 100% |##################################################################################################################################################| Time: 0:00:00
Loaded 3037 entries from dependency cache.
Parsing recipes: 100% |################################################################################################################################################| Time: 0:00:00
Parsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.
Loading cache: 100% |##################################################################################################################################################| Time: 0:00:04
Loaded 3037 entries from dependency cache.
Parsing recipes: 100% |################################################################################################################################################| Time: 0:00:00
Parsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.
NOTE: Resolving any missing task queue dependencies
Initialising tasks: 100% |#############################################################################################################################################| Time: 0:00:00
Sstate summary: Wanted 13 Found 1 Missed 12 Current 137 (7% match, 92% complete)
NOTE: Executing Tasks
NOTE: elock: compiling from external source tree /home/joaohf/work/projetos/elock
NOTE: Tasks Summary: Attempted 613 tasks of which 608 didn't need to be rerun and all succeeded.
```

Awesome, everything works. Now we need to build an image which has a working
Linux distro made with Yocto Project:

```bash
$ devtool build-image core-image-minimal
NOTE: Starting bitbake server...
NOTE: Reconnecting to bitbake server...
NOTE: Retrying server connection (#1)...
Loading cache: 100% |##################################################################################################################################################| Time: 0:00:00
Loaded 3037 entries from dependency cache.
Parsing recipes: 100% |################################################################################################################################################| Time: 0:00:00
Parsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.
INFO: Building image core-image-minimal with the following additional packages: elock
Loading cache: 100% |##################################################################################################################################################| Time: 0:00:04
Loaded 3037 entries from dependency cache.
Parsing recipes: 100% |################################################################################################################################################| Time: 0:00:00
Parsing of 1943 .bb files complete (1941 cached, 2 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.
NOTE: Resolving any missing task queue dependencies
Initialising tasks: 100% |#############################################################################################################################################| Time: 0:00:05
Sstate summary: Wanted 98 Found 1 Missed 97 Current 877 (1% match, 90% complete)
NOTE: Executing Tasks
NOTE: Tasks Summary: Attempted 2649 tasks of which 2423 didn't need to be rerun and all succeeded.
INFO: Successfully built core-image-minimal. You can find output files in /home/joaohf/poky_sdk/tmp/deploy/images/qemuarm
```

So far we build elock application as well the core-image-minimal. Now, it is
time to running the image using qemu.

Open a new shell session and source again the SDK environment variables. This is
necessary because QEMU will block the terminal.

```bash
$ cd ~/poky_sdk
$ source environment-setup-armv7vet2hf-neon-poky-linux-gnueabi
```

And then, start the QEMU:

```bash
$ devtool runqemu core-image-minimal
```

QEMU will start its booting process and we can connect over ssh to the IP
address 192.168.7.2 using _root_ as ssh user.

But our main aim now is to install the elock application into the QEMU instance.
The core-image-minimal does not have the elock installed. So, let's install it
right now calling devtool and the deploy-target subcommand, like this:

```bash
$ devtool deploy-target elock root@192.168.7.2
NOTE: Starting bitbake server...
NOTE: Reconnecting to bitbake server...
NOTE: Retrying server connection (#1)...
Loading cache: 100% |##################################################################################################################################################| Time: 0:00:00
Loaded 3037 entries from dependency cache.
Parsing recipes: 100% |################################################################################################################################################| Time: 0:00:00
Parsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.
INFO: Successfully deployed /home/joaohf/poky_sdk/tmp/work/armv7vet2hf-neon-poky-linux-gnueabi/elock/0.1.0-r0/image
```

elock has been installed, however it is not started yet. In order to start it
for the first time, open a new terminal, connect over ssh and start elock
application:

```bash
ssh root@192.168.7.2
root@qemuarm:~# cd /usr/lib/elock/bin
root@qemuarm:/usr/lib/elock/bin# ./elock
Erlang/OTP 23 [erts-11.1.3] [source] [smp:1:1] [ds:1:1:10] [async-threads:1]

=WARNING REPORT==== 20-Nov-2020::20:14:43.909058 ===
Setting Ranch options together with socket options is deprecated. Please use the new map syntax that allows specifying socket options separately from other options.

Eshell V11.1.3  (abort with ^G)
1>
```

Ok, elock is up and running. Back to the development terminal and let's test if
elock is working:

```bash
$ ssh -p 4050 admin@192.168.7.2
The authenticity of host '[192.168.7.2]:4050 ([192.168.7.2]:4050)' can't be established.
RSA key fingerprint is SHA256:VXMXRo0wQnsCC5rFxuOy4rT3NSc5NLjoxvtcLpa0OFI.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[192.168.7.2]:4050' (RSA) to the list of known hosts.
SSH server
Enter password for "admin"
password:
Enter command or `help`
elock> get_code
---> {ok,<<"12345">>}
elock> exit
```

Nice, it works! But, we want to change the default code from _12345_ to _7777_.
What we are going to do is fix the default code, redeploy and verify if the hot
swap code worked as expected:

Change the elock application like this:

```bash
diff --git a/src/elock_statem.erl b/src/elock_statem.erl
index fc0b10e..3f88dd4 100644
--- a/src/elock_statem.erl
+++ b/src/elock_statem.erl
@@ -24,7 +24,7 @@ get_timeout() ->
 set_timeout(Tmo) -> ok.

 get_code() ->
-    {ok, <<"12345">>}.
+    {ok, <<"77777">>}.
```

Build the recipe with the changes made.

```bash
$ devtool build elock
```

And deploy elock. The deploy-target subcommand will take care about copying the
files to the target directory.

```bash
$ devtool deploy-target elock root@192.168.7.2
```

Switch to the ssh session and load the elock_statem code using
`code:load_file/1`. This is the most basic way to perform hot code swapping.

```bash
code:load_file(elock_statem).
{module,elock_statem}
```

Now, it is time to connect again over ssh 4050 port and check if the new pass
code takes effect:

```bash
$ ssh -p 4050 admin@192.168.7.2
The authenticity of host '[192.168.7.2]:4050 ([192.168.7.2]:4050)' can't be established.
RSA key fingerprint is SHA256:VXMXRo0wQnsCC5rFxuOy4rT3NSc5NLjoxvtcLpa0OFI.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[192.168.7.2]:4050' (RSA) to the list of known hosts.
SSH server
Enter password for "admin"
password:
Enter command or `help`
elock> get_code
---> {ok,<<"77777">>}
```

It works! We are very very happy with all these changes. Time to clean up the
target hardware, that is, remove the elock files (this is not strict necessary,
but just to show that it is possible):

```bash
$ devtool undeploy-target elock root@192.168.7.2
```

Now, the last step is to finish up all the recipe changes. The subcommand
_finish_ creates any patches corresponding to commits in the local repository,
moves the new recipe to a specific layer and resets the recipe moving it from
the workspace to the layer.

```bash
$ devtool finish -f elock meta-axon
```

Finally, just check the final recipe results:
_~/poky_sdk/layers/poky/meta-axon/recipes-elock/elock/elock_0.1.0.bb_

All done. We've created a recipe, change the Erlang application, deployed it on
the target hardware, applied a fix using hot code swapping without stopping the
application, checked the fix and finished up the recipe changes.
