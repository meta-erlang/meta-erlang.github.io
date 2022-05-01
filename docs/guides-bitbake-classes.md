The meta-erlang layer provides additional bitbake classes to handle and help making releases for Erlang and Elixir applications.

## rebar3.bbclass

The [rebar3.class](https://github.com/meta-erlang/meta-erlang/blob/master/classes/rebar3.bbclass) exports the following environment variables:

- `REBAR3_TARGET_INCLUDE_ERTS`, target include ERTS path
- `REBAR3_TARGET_SYSTEM_LIBS`, target system ERTS path
- `ERLANG_ERTS`, the version of ERTS

When configuring rebar3 to use the above variables, rebar3 can find the correct ERTS to make a proper release.

## mix.bbclass

The [mix.class](https://github.com/meta-erlang/meta-erlang/blob/master/classes/mix.bbclass) exports the following environment variables:

- `MIX_TARGET_INCLUDE_ERTS`, target include ERTS path
- `MIX_ENV`, the default value is `prod`
