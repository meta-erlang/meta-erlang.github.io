When making Erlang or Elixir releases, usually the application run inside an embedded [Erlang Run Time System](https://erlang.org/doc/apps/erts/users_guide.html) (ERTS). The ERTS will be copied from Yocto build environment to the target application.

The layer meta-erlang provides additional bitbake classes to handle this process when using rebar3 or mix tool. However the rebar.config and mix.exs configuration files need to be prepared in advanced to detected when special environment configuration are available in order to make the proper release.

## Erlang

### rebar config script

The follow example shows the _rebar.config.script_ that checks the presence of `system_libs` and `include_erts` arguments from `relx` and replace them with the value of REBAR3_TARGET_INCLUDE_ERTS and REBAR3_TARGET_SYSTEM_LIBS environment variable:

```erlang
ReplaceRelx =
fun(Key, Path, Config) ->
    case lists:keyfind(relx, 1, Config) of
        false ->
            Config;
        {relx, Relx} ->
            case lists:keyfind(Key, 1, Relx) of
                false ->
                    Config;                
                {Key, true} ->
                    NewPath = {Key, Path},
                    NewRelx = lists:keyreplace(Key, 1, Relx, NewPath),                                   
                    lists:keystore(relx, 1, Config, {relx, NewRelx});
                {Key, _} ->
                    Config
            end
    end
end,

ReplaceIncludeErts =
fun(Path, Config) ->
    ReplaceRelx(include_erts, Path, Config)
end,

ReplaceSystemLibs =
fun(Path, Config) ->
    ReplaceRelx(system_libs, Path, Config)
end,

EnvTargetIncludeErts = os:getenv("REBAR3_TARGET_INCLUDE_ERTS"),
EnvTargetSystemLibs = os:getenv("REBAR3_TARGET_SYSTEM_LIBS"),

Check = {EnvTargetIncludeErts, EnvTargetSystemLibs},
case Check of
    {false, false} ->
        CONFIG;
    {IncludeErts, false} ->
        ReplaceIncludeErts(IncludeErts, CONFIG);
    {false, SystemLibs} ->
        ReplaceSystemLibs(SystemLibs, CONFIG);
    {IncludeErts, SystemLibs} ->
        CONFIG1 = ReplaceIncludeErts(IncludeErts, CONFIG),
        ReplaceSystemLibs(SystemLibs, CONFIG1)
end.
```

That way the `rebar3.bbclass` exports all needed variables and the `rebar.config.script` uses them. rebar can read these environment variables in order to find all the information and release the application together with a copy of an ERTS that works on the target hardware.

### rebar config

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

In the above config, the `relx` must have the `include_erts` and `system_libs` setted to `true`, like this:

```erlang
{relx, ...
        {include_erts, true},
        {system_libs, true},
...
}.
```

So, the rebar.config.script, defined in the above session, will check and use the correct `include_erts` and `system_libs` values for relx.

## Elixir

### release with distillery

This approach uses [distillery](https://github.com/bitwalker/distillery) to handle the release generation. The usual config is documented [here]( https://hexdocs.pm/distillery/introduction/installation.html). An extra step is necessary to copy the crosscompile elixir and erlang libraries to the release package. The following code show the additional configuration:

```erlang
environment :prod do
  # MIX_TARGET_INCLUDE_ERTS is set by meta-erlang/classes/mix.bbclass
  set include_erts: System.get_env("MIX_TARGET_INCLUDE_ERTS")
  set include_src: false
  set cookie: :"d.K@rG|YpY`|?i&]Fsdljji)JMhk)%j)}f|Y6cquU!He<]u=sHp`.o2p[I3ee]gD"
  set vm_args: "rel/vm.args"
end
```

The `include_erts` distillery config will use the value from MIX_TARGET_INCLUDE_ERTS variable.

### release with Elixir

The mix.bbclass is prepare to handle Elixir releases by default. So, following the procedures about how to configure an Elixir application with [mix release](https://hexdocs.pm/mix/Mix.Tasks.Release.html) should be enough for most of the cases.

Be aware that you need to configure the Elixir release parameter `:include_erts` to get the value of `MIX_TARGET_INCLUDE_ERTS` environment variable. Like this:

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
