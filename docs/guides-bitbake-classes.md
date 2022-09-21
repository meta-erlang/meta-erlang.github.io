The meta-erlang layer provides additional bitbake classes to handle and help making releases for Erlang and Elixir applications.

## rebar3.bbclass

The [rebar3.bbclass](https://github.com/meta-erlang/meta-erlang/blob/master/classes/rebar3.bbclass) exports the following environment variables:

- `REBAR3_TARGET_INCLUDE_ERTS`, target include ERTS path
- `REBAR3_TARGET_SYSTEM_LIBS`, target system ERTS path
- `ERLANG_ERTS`, the version of ERTS

When configuring rebar3 to use the above variables, rebar3 can find the correct ERTS to make a proper release.

## rebar3-brokensep.bbclass

Supports brokensep projects, that is the project builds with [B](https://docs.yoctoproject.org/ref-manual/variables.html#term-B) == [S](https://docs.yoctoproject.org/ref-manual/variables.html#term-S). See additional details for brokensep context [here](https://docs.yoctoproject.org/ref-manual/classes.html?highlight=brokensep#autotools-bbclass).

## rebar.bbclass

Legacy and deprecated rebar2 support throught [rebar.bbclass](https://github.com/meta-erlang/meta-erlang/blob/master/classes/rebar.bbclass).

## mix.bbclass

The [mix.bbclass](https://github.com/meta-erlang/meta-erlang/blob/master/classes/mix.bbclass) exports the following environment variables:

- `MIX_TARGET_INCLUDE_ERTS`, target include ERTS path
- `MIX_ENV`, the default value is `prod`

## mix-phoenix.bbclass

The [mix-phoenix.bbclass](https://github.com/meta-erlang/meta-erlang/blob/master/classes/mix-phoenix.bbclass) appends addional steps in order to make [Phoenix releases](https://hexdocs.pm/phoenix/releases.html). Also adds `nodejs-native` as DEPENDS variable.

## mix-rebar3.bbclass

Instead of letting mix tool fetching rebar3 binary, the class [mix-rebar3.bbclass](https://github.com/meta-erlang/meta-erlang/blob/master/classes/mix-rebar3.bbclass) configures the variable MIX_REBAR3 pointing it to the rebar3 binary from `rebar3-native` recipe. 

## mix-rustler.bbclass

Supports building Elixir projects that uses Erlang NIFs written in Rust language. The class [mix-rustler.bbclass](https://github.com/meta-erlang/meta-erlang/blob/master/classes/mix-rustler.bbclass) exports the variable `RUST_TARGET` with the correct Rust target triple. An example getting the correct target triple from the environment is shown here: [rustler_nifi.ex](https://github.com/meta-erlang/hello-world/blob/master/hello-elixir-rustler/lib/hello_elixir_rustler/rustler_nif.ex).