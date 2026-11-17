---
sidebar_position: 1
description: Explain how testing works with meta-erlang layer
---

# Testing meta-erlang

meta-erlang is tested at three levels during development:

- [Testing Packages With ptest](https://docs.yoctoproject.org/test-manual/ptest.html)
- [Performing Automated Runtime Testing](https://docs.yoctoproject.org/test-manual/runtime-testing.html)
- Automated test suites for the meta-erlang layer

Most test scripts are written using [Lux](https://github.com/hawk/lux) (LUcid eXpect scripting).
Lux is written in Erlang and is well suited for testing interactive programs such as
the Erlang shell, which makes it a natural fit for this layer.

## Testing Packages With ptest

Not all recipes in meta-erlang provides ptest packages yet. Where available, they follow the
[ptest](https://docs.yoctoproject.org/test-manual/ptest.html) conventions and can be run on the
target. Ptest support is a work in progress.

To include ptest packages in an image, add the following to `conf/local.conf`:

```conf
DISTRO_FEATURES:append = " ptest"
EXTRA_IMAGE_FEATURES += "ptest-pkgs"
```

Then, on the target, run:

```bash
ptest-runner
```

## Performing Automated Runtime Testing

Runtime tests are written using the
[oeqa framework](https://docs.yoctoproject.org/test-manual/runtime-testing.html#writing-new-tests).
They are Python scripts that inherit from oeqa test classes and run on the target system.

The layer organizes these tests as follows:

| Path | Description |
| --- | --- |
| `<meta-erlang>/lib/oeqa` | meta-erlang oeqa integration |
| `<meta-erlang>/lib/oeqa/runtime/cases` | oeqa test cases; wrappers that copy Lux scripts to the target and run them |
| `<meta-erlang>/lib/oeqa/runtime/files/lux` | Lux test scripts |

oeqa sets up the environment (booting the image, copying files, connecting to the target).
Lux then performs the actual test logic on the target.

### Running the runtime tests

Enable testimage in `conf/local.conf`:

```conf
IMAGE_CLASSES += "testimage"
TEST_SUITES = "ping ssh beam"
```

Build the image and run the tests with QEMU:

```bash
bitbake core-image-minimal
bitbake core-image-minimal -c testimage
```

Test results and logs are written to `tmp/log/oeqa/`

## Automated test suites for the meta-erlang layer

The third level provides end-to-end automation. The `<meta-erlang>/tests` folder
combines `bitbake-setup` and Lux scripts to exercise the full build and test process.

See `<meta-erlang>/tests/README.md` for details on how to run these tests.