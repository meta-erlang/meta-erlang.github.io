---
title: Running Erlang/OTP test suite on target with ptest
authors: [joaohf]
tags: [meta-erlang]
---

ptest (package test) means packaging and installing runtime tests that are
included in many upstream packages. At the end of the day it runs Erlang/OTP
cross compiled test suite on the target hardware. The aim is to detect a range
of problems when running test suites on different combinations of architecture
processors and libc.

<!-- truncate -->

The Erlang/OTP howto about
[TESTING.md](https://github.com/erlang/otp/blob/master/HOWTO/TESTING.md)
explains most of the details when running tests. While the Yocto's documentation
about
[Testing Packages With ptest](https://docs.yoctoproject.org/dev-manual/packages.html#testing-packages-with-ptest)
explains the ptest configuration.

So, this post is about how to run those tests using ptest approach on Yocto
builds.

## How does ptest work ?

Recipes with ptest enabled includes a shell script called _run-ptest_ with the
steps necessary to start the test suite provided by the target software (e.g.:
Erlang/OTP).

The run-ptest script is responsible for starting the test suite and
consolidating the test results into a single format. The format is the
[automake simple test](https://www.gnu.org/software/automake/manual/automake.html#Simple-Tests)
format:

```
result: testName
```

Where: _result_ is one of PASS, FAIL or SKIP and _testName_ can be anything.

The erlang recipe from meta-erlang layer supports ptest. And, when activated,
the package erlang-ptest is installed into the final image. It has the erlang
test suite cross compiled and ready to be executed.

When ptest for erlang recipe gets executed, it finishes the erlang test suite
configuration and starts to run each test configured in run-ptest script.

The Erlang/OTP requires several hours to finish. Because of that, ptest for
erlang just executes a small set of all tests available (currently only
_emulator_ and _kernel_ tests are enabled).

:::note

To get a better idea about how to run Erlang/OTP test suites the documentation
[TESTING.md](https://github.com/erlang/otp/blob/master/HOWTO/TESTING.md),
specially the session Running the tests.

:::

The erlang-ptest package installs the test suite and also the run-ptest script
at _/usr/lib/erlang/ptest_ folder.

One point very important is that Erlang/OTP test suites need some tools
installed into the target image in order to execute some tests. For example, to
run emulator and kernel tests the target OS needs tmux and openssh packages.
However the erlang recipe takes care of these details.

Each test suite might require additional packages. As there is no documentation
describing all the requirements the best strategy is to inspect the test suite
for each Erlang/OTP application
([lib/\*/test](https://github.com/erlang/otp/tree/master/lib) and
[erts/test](https://github.com/erlang/otp/tree/master/erts/test) folders).

## Running Erlang/OTP ptest

Yocto provides some configuration when enabling ptest. As it is only relevant
for testing purposes.

A specific image feature exists that enables ptest. So, in the local.conf
configuration file:

```
# ptest image
EXTRA_IMAGE_FEATURES += "ptest-pkgs"
```

This is all that is necessary to do in order to enable ptest build.

As we want to install erlang in the final image, we also need to add it to the
final image. On build/local.conf configuration file:

```
# installing erlang and elixir
IMAGE_INSTALL:append:pn-core-image-minimal = " erlang erlang-modules-dev elixir elixir-modules-dev links"
```

:::note

The _links_ package here is necessary to open HTML common test reports from
console.

:::

It's ready to build the core-image-minimal image:

```
bitbake core-image-minimal
```

And, for testing purposes, run the generated image using qemu emulator:

```
runqemu slirp kvm nographic serialstdio core-image-minimal
```

Logging into the running system and execute ptest for erlang:

```
Poky (Yocto Project Reference Distro) 5.1 qemux86-64 ttyS0

qemux86-64 login: root

WARNING: Poky is a reference Yocto Project distribution that should be used for
testing and development purposes only. It is recommended that you create your
own distribution for production use.

root@qemux86-64:~# ptest-run erlang
```

The script /usr/lib/erlang/ptest/run-ptest starts execute controlled by the
application called [ptest runner](https://git.yoctoproject.org/ptest-runner2/).
After several hours we get the following results:

```
START: ptest-runner
2024-10-14T17:15
BEGIN: /usr/lib/erlang/ptest

FAIL: emulator
... lots of console messages ...
FAIL: kernel
... lots of console messages ...

=== common test Summary ===
Testing tests.emulator_test: TEST COMPLETE, 2112 ok, 4 failed, 82 skipped of 2198 test cases
Testing tests.kernel_test: TEST COMPLETE, 1338 ok, 20 failed, 293 skipped of 1651 test cases
=== Test Summary ===
TOTAL: 2
PASSED: 0
FAILED: 2
DURATION: 5822
END: /usr/lib/erlang/ptest
2024-10-14T01:39
STOP: ptest-runner
TOTAL: 1 FAIL: 0
```

Well, we got 4 fails for emulator tests and 20 fails for kernel tests. Not bad,
but I don't know if it is also good.

For further inspection, it's possible to also check output messages for each
test. The run-ptest scripts writes a specific log console for each test
executed:

```
root@qemux86-64:~# ls /usr/lib/erlang/ptest/ -l
total 14680
-rw-r--r--  1 root root   236964 Oct 14 00:40 erlang_ptest_emulator_20241014-000215.log
-rw-r--r--  1 root root 14770546 Oct 14 01:39 erlang_ptest_kernel_20241014-004016.log
-rwxr-xr-x  1 root root      807 Oct 14 00:01 run-ptest
drwxr-xr-x 39 root root     4096 Apr  5  2011 tests

```

As usual when running common tests (remember Erlang/OTP test suites are just
common tests), the HTML reports were written at
_/usr/lib/erlang/ptest/tests/test_server/index.html_. Opening it with links
command to check the results:

```
links /usr/lib/erlang/ptest/tests/test_server/index.html
```

ptest produces a lot of data to inspect.

## Why running ptest for Erlang/OTP on Yocto builds is important ?

Now that we know what is ptest. Given the following question:

> How do we know that a cross compiled Erlang/OTP build really works on the
> target hardware ?

The answer could be: testing it using tests provided by Erlang/OTP source code.

So, ptest is great for detecting problems.

As ptest has the ability of running Erlang/OTP test suites on the final image
and reporting the results, we can get a baseline when comparing tests executed
on different combinations of processor architectures and C standard libraries
(libc) or any other aspect like different linux kernel versions. It's possible
to detect regressions or find weak spots not covered by tests in a specific
platform.

Also, the mechanism of executing those tests is simple. The user does not need
to be an Erlang expert to check that something is not ok on some platform.
