---
sidebar_position: 4
description: Hello world examples like.
---

# Hello World examples for meta-erlang

The meta-erlang layer has many recipes for real world applications. On the other
hand there is a repository called
[meta-erlang/hello-world](https://github.com/meta-erlang/hello-world) which has
a few examples showing how application written in Erlang and Elixir could be
implemented and integrated with YP/OE recipes.

For each example there is a correspondent recipe. The following table sumarize
the current recipe examples:

| Example Name                                                                                                          | Language | Description                                                                    | Recipe                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [hello-http-server](https://github.com/meta-erlang/hello-world/tree/master/hello-http-server)                         | Erlang   | A minimal http server written in Nitrogen                                      | [hello-http-server_0.1.0.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/hello-http-server/hello-http-server_0.1.0.bb)                                     |
| [hello-rabbitmq](https://github.com/meta-erlang/hello-world/tree/master/hello-rabbitmq)                               | Erlang   | A minimal client that sends heart beats to a rabbitmq server                   | [hello-rabbitmq_0.1.0.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/hello-rabbitmq/hello-rabbitmq_0.1.0.bb)                                              |
| [hello-erlang-interoperability](https://github.com/meta-erlang/hello-world/tree/master/hello-erlang-interoperability) | Erlang   | A minimal Erlang application with Erlang port driver written in C              | [hello-erlang-interoperability_0.1.0.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/hello-erlang-interoperability/hello-erlang-interoperability_0.1.0.bb) |
| [hello-erlang-c-node](https://github.com/meta-erlang/hello-world/tree/master/hello-erlang-c-node)                     | Erlang   | A minimal Erlang C Node                                                        | [hello-erlang-c-node_0.1.0.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/hello-erlang-interoperability/hello-erlang-c-node_0.1.0.bb)                     |
| [hello-erlang-autoconf](https://github.com/meta-erlang/hello-world/tree/master/hello-erlang-autoconf)                 | Erlang   | A minimal Erlang build with autoconf                                           | [hello-erlang-autoconf_0.1.0.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/hello-erlang-autoconf/hello-erlang-autoconf_0.1.0.bb)                         |
| [hello-phoenix](https://github.com/meta-erlang/hello-world/tree/master/hello-phoenix)                                 | Elixir   | A minimal phoenix server                                                       | [hello-phoenix_0.1.0.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/hello-phoenix/hello-phoenix_0.1.0.bb)                                                 |
| [hello-elixir-interoperability](https://github.com/meta-erlang/hello-world/tree/master/hello-elixir-interoperability) | Elixir   | A minimal Elixir application with Erlang NIF written in C                      | [hello-elixir-interoperability_0.1.0.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/hello-elixir-interoperability/hello-elixir-interoperability_0.1.0.bb) |
| [hello-elixir-rustler](https://github.com/meta-erlang/hello-world/tree/master/hello-elixir-rustler)                   | Elixir   | A [rustler](https://github.com/rusterlium/rustler) getting started application | [hello-elixir-rustler_0.1.0.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/hello-elixir-rustler/hello-elixir-rustler_0.1.0.bb)                            |
| [example-gleam-server](https://github.com/gleam-lang/example-echo-server)                                             | Gleam    | An example Gleam web application                                               | [hello-gleam-echo-server_0.1.0.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/hello-gleam-echo-server/hello-gleam-echo-server_0.1.0.bb)                   |

Those examples are great to check how the build tool (rebar3, mix, Makefiles)
were implemented in order to build successfully in a cross-compile environment.
However, bear in mind that the examples are very simple and does not do anything
really useful. When trying the examples, make sure to use a recent YP/OE version
as there is no guarantee that they will work with all Erlang, Elixir and YP/OE
version combinations.

Not only examples for recipes are available but also some extra image recipes
which install common Erlang and Elixir applications:

| Image Name       | Description | Recipe                                                                                                                    |
| ---------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| erlang-red-image |             | [erlang-red-image.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/images/erlang-red-image.bb) |
| livebook-image   |             | [livebook-image.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/images/livebook-image.bb)     |
| yaws-image       |             | [yaws-image.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/images/yaws-image.bb)             |
| rabbitmq-image   |             | [rabbitmq-image.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/images/rabbitmq-image.bb)     |
| couchdb-image    |             | [couchdb-image.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/images/couchdb-image.bb)       |
| openriak-image   |             | [openriak-image.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/images/openriak-image.bb)     |
| beam-image       |             | [beam-image.bb](https://github.com/meta-erlang/meta-erlang/tree/master/recipes-examples/images/beam-image.bb)             |
