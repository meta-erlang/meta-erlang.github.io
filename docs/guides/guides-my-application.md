---
sidebar_position: 3
description: How to integrate an application with meta-erlang.
---

# My application example

When making Erlang, Elixir or Gleam releases, usually the application run inside
an embedded
[Erlang Run Time System](https://erlang.org/doc/apps/erts/users_guide.html)
(ERTS). The ERTS will be copied from Yocto build environment to the target
application.

The layer meta-erlang provides additional bitbake classes to handle this process
when using rebar3 or mix tool. However the rebar.config and mix.exs
configuration files need to be prepared in advanced to detected when special
environment configuration are available in order to make the proper release.

## Erlang

### preparing the rebar.config file

A basic rebar3 config looks like this:

```erlang
{erl_opts, [debug_info]}.
{deps, []}.

{relx, [{release, {'axon', "0.1.0"},
         [axon,
          sasl]},

        {sys_config, "./config/sys.config"},
        {vm_args, "./config/vm.args"},

        {dev_mode, true},
        {include_erts, true},
        {system_libs, true},

        {extended_start_script, true},
        {generate_start_script, true}]
}.

{profiles, [{prod, [{relx, [{dev_mode, false}
                            {include_erts, true},
                            {system_libs, true}
                           ]}]
            }]
}.
```

In the above config, the `relx` must have the `include_erts` and `system_libs`
setted to `true`, like this:

```erlang
{relx, ...
        {include_erts, true},
        {system_libs, true},
...
}.
```

### inheriting rebar3 class

The meta-erlang class _rebar3_ provides everything needed in order to generate a
cross compiled Erlang release. The rebar3 class uses the `rebar3 tar` command
passing the following arguments:

- `rebar as ${REBAR_PROFILE} tar`
- `--system_libs ${REBAR3_TARGET_SYSTEM_LIBS}`
- `--include-erts ${REBAR3_TARGET_INCLUDE_ERTS}`
- `-n ${REBAR3_RELEASE_NAME}`

While _REBAR3_TARGET_SYSTEM_LIBS_ and _REBAR3_TARGET_INCLUDE_ERTS_ are detected
automatically pointing to the correct target paths; the variables
_REBAR_PROFILE_ and _REBAR3_RELEASE_NAME_ must be defined in the application
recipe like this:

```bitbake
inherit rebar3

REBAR_PRODULE = "prod"
REBAR3_RELEASE_NAME = "my-application"
```

Calling `rebar3 tar` command is necessary to avoid less changes in the
application rebar.config file. So, rebar3 (which delegates to relx) will use the
correct target paths.

!> Remember: rebar3 supports independent release configurations.

## Elixir

### release with distillery

This approach uses [distillery](https://github.com/bitwalker/distillery) to
handle the release generation. The usual config is documented
[here](https://hexdocs.pm/distillery/introduction/installation.html). An extra
step is necessary to copy the crosscompile elixir and erlang libraries to the
release package. The following code show the additional configuration:

```erlang
environment :prod do
  # MIX_TARGET_INCLUDE_ERTS is set by meta-erlang/classes/mix.bbclass
  set include_erts: System.get_env("MIX_TARGET_INCLUDE_ERTS")
  set include_src: false
  set cookie: :"d.K@rG|YpY`|?i&]Fsdljji)JMhk)%j)}f|Y6cquU!He<]u=sHp`.o2p[I3ee]gD"
  set vm_args: "rel/vm.args"
end
```

The `include_erts` distillery config will use the value from
MIX_TARGET_INCLUDE_ERTS variable.

### release with Elixir

The mix.bbclass is prepare to handle Elixir releases by default. So, following
the procedures about how to configure an Elixir application with
[mix release](https://hexdocs.pm/mix/Mix.Tasks.Release.html) should be enough
for most of the cases.

Be aware that you need to configure the Elixir release parameter `:include_erts`
to get the value of `MIX_TARGET_INCLUDE_ERTS` environment variable. Like this:

```elixir
 releases: [
          epad: [
            applications: [
              epad: :permanent
            ],
            steps: [
              :assemble,
              :tar
            ],
            include_erts: System.get_env("MIX_TARGET_INCLUDE_ERTS")
          ]
        ]
```

## Gleam

The gleam.bbclass was design to help out package gleam programs. The class
fetches gleam dependencies, compile and installs a gleam release output. All
that is necessary is to prepare a recipe and `inherit gleam` bitbake class.

The recipe
[hello-gleam-echo-server_0.1.0.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/hello-gleam-echo-server/hello-gleam-echo-server_0.1.0.bb)
is a good start point as this recipe besides dealing with gleam installation,
also provides a systemd script to start gleam program.
