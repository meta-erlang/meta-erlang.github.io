[Erlang Port Mapper Daemon](https://erlang.org/doc/man/epmd.html) is a
standalone daemon that keeps track of all hosts involved in distributed Erlang
computations. It is a fundamental piece when talking with other Erlang nodes.
Usually the daemon is started automatically when run `erl` and there is no epmd
instance present.

The recipe
[epmd](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-core/epmd/epmd.inc)
is target to run epmd started by systemd or systemv where additional control and
configuration can be passed to epmd daemon (see the epmd manual pages for
additional options). The purpose of the recipe is address some edge cases where
you don't want to ship a full ERTS or you have additional patches for the epmd
daemon.

Follow the quickstart guide to get a basic working environment and then:

- Add `epmd` package to `IMAGE_INSTAL` in _conf/local.conf_

```bash
echo 'IMAGE_INSTALL:append = " epmd"' >> conf/local.conf
```

- Now its time to build the image:

```bash
bitbake core-image-minimal
```

- And check the results with qemu:

```bash
runqemu core-image-minimal
```

Check if `epmd` is up and running:

```bash
ps | grep epmd
```

Then, start erl with distributed enabled like this:

```bash
erl -sname test
```

Check again using `ps` and there is still only one epmd daemon running. As the
final check, lets ask epmd if its know any erlang node:

```bash
/usr/sbin/epmd -names
epmd: up and running on port 4369 with data:
name test at port 46019
```
