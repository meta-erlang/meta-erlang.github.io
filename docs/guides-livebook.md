[livebook](https://livebook.dev/) is an tool made with Elixir to write interactive and collaborative code notebooks in Elixir.
The meta-erlang layers provides the [recipe livebook](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-devtools/livebook)
which install livebook in any image. livebook is a good tool for system instrospect and exploration.

Follow the quickstart guide to get a basic working environment and then:

- Add erlang preferred version 23.x in _conf/local.conf_

```bash
echo 'PREFERRED_VERSION_erlang = "23.3.3"'
echo 'PREFERRED_VERSION_erlang-native = "23.3.3"'
echo 'PREFERRED_VERSION_nativesdk-erlang = "23.3.3"'
echo 'PREFERRED_VERSION_elixir = "1.13%"'
echo 'PREFERRED_VERSION_elixir-native = "1.13%"'
echo 'PREFERRED_VERSION_nativesdk-elixir = "1.13%"'
```

- Add `emqx` package to `IMAGE_INSTAL` in _conf/local.conf_

```bash
echo 'IMAGE_INSTALL:append = " livebook"' >> conf/local.conf
```

- Now its time to build the image:

```bash
bitbake core-image-minimal
```

- And check the results with qemu:

```bash
runqemu core-image-minimal
```

The default livebook recipe exposes the 8080/tcp port. Custom layers could adapt
the [livebook configuration file](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-devtools/livebook/files/livebook.config) to
add more configuration values.

As the livebook recipe does a livebook elixir release, it might be necessary to change the livebook.config according
to your environment.
