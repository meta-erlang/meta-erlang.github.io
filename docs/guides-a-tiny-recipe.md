The most important step is create recipes for bitbake. meta-erlang exports two classes [rebar3.bbclass](https://github.com/meta-erlang/meta-erlang/blob/master/classes/rebar3.bbclass) and [mix.bbclass](https://github.com/meta-erlang/meta-erlang/blob/master/classes/mix.bbclass) which encapsulates most of the work when building Erlang and Elixir applications.

In this guide we are going to cover how to use build tool plugins that help during the recipe creating phase.

The use of build plugins is optional and might help until you get used about how to create bitbake recipes efficiently.

## Build tool plugins

Two plugins has been implemented in order to help the user to create his first recipe.

!> Be aware that mix_bitbake and rebar3_bitbake are simple build tools plugins aimed to help the initial bootstrap. If you are looking for a development workflow, take a look at [Application Development](guides-development) guide.

### Erlang: rebar3_bitbake

[rebar3_bitbake](https://hex.pm/packages/rebar3_bitbake) is a [rebar3 plugin](http://rebar3.org/docs/tutorials/building_plugins/) which reads the Erlang application file definition and creates a recipe based on all the data found in that application file.

To start using the plugin, first we need to add rebar3*bitbake as a \_project_plugins*:

```
{project_plugins, [
    {rebar3_bitbake, {git, "https://github.com/meta-erlang/rebar3_bitbake.git", {tag, "0.1.0"}}}
]}.
```

After that, rebar3 exports the command _bitbake_. Then, to create a recipe based on the current application (suppose the application is called `demo`) run the bitbake command like this:

```
rebar3 bitbake
```

A new file called _demo-x.y.z.bb_, where x.y.z is the version of the `demo` application, should be created.

Now, it is time to copy _demo-x.y.z.bb_ to your YP/OE distro or application layer.

### Elixir: mix_bitbake

The [mix_bitbake](https://hex.pm/packages/mix_bitbake) mix task follows the same approach as rebar3_bitbake does. First we need to include it in mix.exs file as a development dependency, like this:

```elixir
def deps do
  [
    {:mix_bitbake, "~> 0.1.0", only: :dev, runtime: false}
  ]
end
```

Then, calling `mix bitbake` the mix_bitbake task will extract all data in order to create a bitbake recipe for the elixir application.

## Recipe examples

The following sections show recipes from [meta-axon layer](https://github.com/joaohf/meta-axon/tree/master/recipes-extended/axon)

### Erlang

The bellow recipe uses rebar3 to compile and release an erlang application:

```bitbake
SUMMARY = "Simple application for demonstrating release creation for embedded devices"
DESCRIPTION = "This application provides a web interface for controlling LEDs on the Beaglebone. In the process, it demonstrates using rebar and relx for building an Erlang release in a cross-compiled environment. It then constructs a firmware image that can be burned to an SDCard and run on the Beaglebone."
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://LICENSE;md5=64dcdcb7810c9caa926e75c6dfc82385"

S = "${WORKDIR}/git"
SRCREV = "3baebb418f6024aeb221b79fd65f820f8968dd8e"
PV = "0.1.0-git${SRCPV}"
PR = "r0"

SRC_URI = "\
    git://github.com/joaohf/axon;branch=master \
    "

inherit rebar3

REBAR3_PROFILE = "prod"
```

rebar3 builds the application using the `prod` profile that was previously set by `REBAR3_PROFILE` variable.

!> The REBAR_PROFILE is an important variable to configure the [rebar profile](https://www.rebar3.org/docs/profiles).

### Elixir

And the following recipe uses mix to compile and release an elixir application:

```bitbake
SUMMARY = "Simple example using scenic"
DESCRIPTION = "Simple elixir project created using scenic_new."
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://LICENSE;md5=ca0978e805a8fe57d17049c427422188"

S = "${WORKDIR}/git"
SRCREV = "3baebb418f6024aeb221b79fd65f820f8968dd8e"
PV = "0.1.0-git${SRCPV}"
PR = "r0"

DEPENDS = "glfw glew"
RDEPENDS:${PN} += " glfw glew"

CFLAGS:append = " -fPIC "

SRC_URI = "\
    git://github.com/joaohf/axon-scenic;branch=master \
    "

inherit mix
```
