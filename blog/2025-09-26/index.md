---
title: Testing meta-erlang with LuX
authors: [joaohf]
tags: [meta-erlang, test]
---

In this post we will get a overview about how testimage feature has been enabled
into recipe images examples in order to implement tests.

As meta-erlang layer provides many
[recipes for Erlang and Elixir application](https://layers.openembedded.org/layerindex/branch/master/layer/meta-erlang/),
testing and verifying if each supported application is still working between
Yocto releases is very important.

So, this post is mostly about Yocto oeqa framework and
[lux tool](https://github.com/hawk/lux).

<!-- truncate -->

## Yocto oeqa framework

The Yocto Project provides a framework called
[oeqa](https://git.yoctoproject.org/poky/tree/meta/lib/oeqa) and integrated with
Yocto ecosystem for testing. It is able to test many aspects like: image test,
SDK, build performance, bitbake. All those tests are implemented with python
unittest.

The documentation section called
[Yocto Project Test Environment Manual](https://docs.yoctoproject.org/test-manual/index.html)
explains how everything works.

For the meta-erlang context, we are interesting in two types of tests:

- [testimage](https://docs.yoctoproject.org/test-manual/intro.html#testimage),
  these tests run once an image is up and running. Let's suppose an image with
  riak installed is up and running, we want to check if riak is online, restart,
  start again and run health checks
- [ptest](https://docs.yoctoproject.org/test-manual/ptest.html#testing-packages-with-ptest),
  package level test; it is not the focus today

For a full oeqa view, the source code is
[here](https://github.com/meta-erlang/meta-erlang/tree/master/lib/oeqa/runtime).

oeqa framework has all the elements needed in order to write unit tests. But, I
was not willing to write unit tests in python way. Instead, I was looking into a
different way for _test image_ type of tests.

## Lux, LUcid eXpect scripting

Lux is an amazing application written in Erlang/OTP. It's aim is for test
automation. Its github [hawk/lux](https://github.com/hawk/lux) is full of
examples and
[lux documentation](https://github.com/hawk/lux/blob/master/doc/lux.md) is also
great. From its github's page:

```
With Lux it is possible to

    simplify automated testing
    control interactive programs by sending textual input to them and using [regular expression][]s to ensure that their output matches the expectations
    perform detailed post mortem analyzis of test suite results
```

There is a talk about Lux presented at the Erlang User Conference 2019:
[Cons T Ahs and Hakan Mattsson - LUX - an expect like test tool | Code BEAM STO 19](https://www.youtube.com/watch?v=Nu15YOpmCKQ)
and it explains all internal details that make lux an excellent tool for writing
automated tests.

Let's see a simple lux script example where I want to verify if riak service is
ok. The test case is named
[start_restart_stop.lux](https://github.com/meta-erlang/meta-erlang/blob/master/lib/oeqa/runtime/files/lux/riak/start_restart_stop.lux):

```
[doc Test if riak is able to start, restart and stop]

[include ../support/luxinc/utils.luxinc]

# riak is not so fast when starting
[config timeout=30000]

[shell cmd]

    # Right after a boot, riak needs some time
    # mainly because clutterfish processing
    [sleep 30]

    [doc2 Stop riak]
    !systemctl stop riak
    [invoke ok]

    [doc2 Start riak]
    !systemctl start riak
    [invoke ok]

    [doc2 Check if riak is up and running]
    !SYSTEMD_COLORS=0 systemctl status --line=0 --no-pager riak
    ?.*Active: active \(running\).*
    [invoke check-exitcode 0]

    # After a start, give some time to riak.
    [sleep 30]

    [doc2 Ping riak]
    !/usr/lib/riak/bin/riak ping
    ?pong
    [invoke check-exitcode 0]

    [doc2 Stop riak]
    !systemctl stop riak
    [invoke ok]

    [doc2 Check if riak has been stop without any issue]
    !SYSTEMD_COLORS=0 systemctl status --line=0 --no-pager riak
    ?.*Active: inactive \(dead\).*
    [invoke check-exitcode 3]

[cleanup]
    !systemctl stop riak
    [invoke ok]
```

The above test starts a shell, named 'cmd'. And tries to:

- stop
- start
- check riak service status
- ping riak
- stop
- check if riak was stopped

The key point to understand lux scripts is that whatever you do as a human, lux
will also do in order to test the above commands; lux script will work in the
same way but faster.

For instance, to check if systemd was able to start riak one could check the
result of the command `systemctl start riak` and after that the output of
`systemctl status riak` in order to conclude or not if riak has been started
properly.

There are some lux scripts implemented for each application that meta-erlang has
a recipe
[lib/oeqa/runtime/files/lux](https://github.com/meta-erlang/meta-erlang/tree/master/lib/oeqa/runtime/files/lux).

## Mixing lux and oeqa into meta-erlang for testing image

### Preparing testable images

Yocto documentation says that when testimage feature is enabled, the TEST_SUITES
image variable is used to setup and run image tests.

The following recipe called
[riak-image.bb](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-examples/images/riak-image.bb)
adds riak into TEST_SUITES variable only for qemu MACHINES:

```
SUMMARY = "A console-only image with more full-featured Linux system \
functionality installed with OpenRiak installed."

LICENSE = "MIT"

include common.inc
include testimage-common.inc

APPLICATION = "riak"
APPLICATION += "${@bb.utils.contains('IMAGE_CLASSES', 'testimage', 'curl', '', d)}"

inherit core-image

TEST_SUITES:qemuall += "riak"

QB_MEM ?= "-m 1024"
IMAGE_ROOTFS_EXTRA_SPACE = "256000"
```

The testimage-common.inc will install lux package when IMAGE_CLASSES variable
contains testimage feature.

So, we need to have an image that declares what are the test suites that will be
executable and the image is up and running. It's important to mention that these
tests will be executable inside a QEMU instance.

### Adding support for running lux scripts

Now, it's time to get an idea about how to implement an oeqa test which will
call a lux script.

As a test case example, let's dissect a test
[case for riak](https://github.com/meta-erlang/meta-erlang/blob/master/lib/oeqa/runtime/cases/riak.py):

```python
from oeqa.core.decorator.depends import OETestDepends
from oeqa.core.decorator.oetimeout import OETimeout
from oeqa.runtime.decorator.package import OEHasPackage
from oeqa.runtime.decorator.lux import LuxTestCase
from oeqa.runtime.meta_erlang import MetaErlangTestCase

class RiakTest(MetaErlangTestCase):

    @OETimeout(300)
    @OEHasPackage(["lux"])
    @OETestDepends(['ssh.SSHTest.test_ssh'])
    @LuxTestCase("start_restart_stop.lux", "riak")
    def test_start_restart_stop(self):
        self.run_lux_test_case()
```

The test case is written in python and uses some decorators available in oeqa
framework and some
[extra one to support lux](https://github.com/meta-erlang/meta-erlang/blob/master/lib/oeqa/runtime/decorator/lux.py).
The purpose of these decorators is mainly to check conditions and configure lux
scripts like what is the name of lux script which (e.g.:
_start_restart_stop.lux_) implements the test and what folder it is located
(e.g.: _riak_).

The
[MetaErlangTestCase](https://github.com/meta-erlang/meta-erlang/blob/master/lib/oeqa/runtime/meta_erlang.py)
class implements the function _run_lux_test_case_ and it is responsible for:

- copy test case to DUT (Device Under Test)
- copy lux support configuration files and macros
- execute lux test cases
- check the results
- copy logs from DUT into host

The python test case above is needed as a bridge to call lux inside DUT. As the
main purpose is to use lux running on target for testing.

## Conclusion

This sort of integration is like eating your own dog food. That means, using
components from Yocto Project and meta-erlang for testing all the work.

oeqa is pretty solid and each Yocto release there are more and more tests
covering many areas of the ecosystem. I think lux is the right tool to provide
test cases without the needed to implement python code as with lux we can write
exactly how one does test.
