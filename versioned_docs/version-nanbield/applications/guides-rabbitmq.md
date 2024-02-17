---
sidebar_position: 4.1
sidebar_label: rabbitmq
sidebar_class_name: green
description: Shows how to set up and install rabbitmq.
---

# rabbitmq

:::info

Recommended PREFERRED_VERSION for rabbitmq:

| rabbitmq | Erlang/OTP | Elixir |
| ---------| ---------- | ------ |
| 3.11.28  | 25.3%      | 1.15%  |

:::

In this guide we are using the plain meta-erlang layer to build the
[rabbitmq](https://www.rabbitmq.com/) server.

The recipe
[rabbitmq](https://github.com/meta-erlang/meta-erlang/blob/master/recipes-connectivity/rabbitmq/)
builds the rabbitmq server using the crosscompile approach. Each rabbitmq
release has a specific combination of supported Erlang and Elixir. You can check
which version is supported here:
[ RabbitMQ Erlang Version Requirements ](https://www.rabbitmq.com/which-erlang.html).

As a final result, we are able to run an embedded rabbitmq using qemu.

Follow the quickstart guide to get a basic working environment and then:

- Add erlang and elixir preferred version _conf/local.conf_.

```bash
PREFERRED_VERSION_elixir = "1.14%"
PREFERRED_VERSION_elixir-native = "1.14%"
PREFERRED_VERSION_nativesdk-elixir = "1.14%"
PREFERRED_VERSION_erlang = "25.2.3"
PREFERRED_VERSION_erlang-native = "25.2.3"
PREFERRED_VERSION_nativesdk-erlang = "25.2.3"
```

- Add `rabbitmq-server` package to `IMAGE_INSTAL` in _conf/local.conf_

```bash
IMAGE_INSTALL:append = " rabbitmq-server"
```

- Now its time to build the image:

```bash
bitbake core-image-minimal
```

- And check the results with qemu:

```bash
runqemu core-image-minimal kvm nographic qemuparams="-m 1024"
```

After qemu boot, we can check if rabbitmq-server is up and running:

```bash
systemctl status rabbitmq-server
* rabbitmq-server.service - RabbitMQ broker
     Loaded: loaded (/lib/systemd/system/rabbitmq-server.service; enabled; preset: enabled)
     Active: active (running) since Sat 2023-04-08 00:19:05 UTC; 3min 1s ago
   Main PID: 199 (beam.smp)
      Tasks: 28 (limit: 1169)
     Memory: 153.5M
     CGroup: /system.slice/rabbitmq-server.service
             |-199 /usr/lib/erlang/erts-13.1.5/bin/beam.smp -W w -MBas ageffcbf -MHas ageffcbf -MBlmbcs 512 -MHlmbcs 512 -MMmcs 30 -P 1048576 -t 5000000 -stbt db -zdbbl 128000 -sbwt none -sbwtdcpu none -sb...
             |-215 erl_child_setup 32768
             |-249 /usr/lib/erlang/erts-13.1.5/bin/epmd -daemon
             |-276 /usr/lib/erlang/erts-13.1.5/bin/inet_gethost 4
             `-277 /usr/lib/erlang/erts-13.1.5/bin/inet_gethost 4

Apr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Doc guides:  https://rabbitmq.com/documentation.html
Apr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Support:     https://rabbitmq.com/contact.html
Apr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Tutorials:   https://rabbitmq.com/getstarted.html
Apr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Monitoring:  https://rabbitmq.com/monitoring.html
Apr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Logs: /var/log/rabbitmq/rabbit@qemux86-64.log
Apr 08 00:19:02 qemux86-64 rabbitmq-server[199]:         /var/log/rabbitmq/rabbit@qemux86-64_upgrade.log
Apr 08 00:19:02 qemux86-64 rabbitmq-server[199]:         <stdout>
Apr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Config file(s): /etc/rabbitmq/rabbitmq.conf
Apr 08 00:19:05 qemux86-64 rabbitmq-server[199]:   Starting broker... completed with 0 plugins.
Apr 08 00:19:05 qemux86-64 systemd[1]: Started RabbitMQ broker.
```

The rabbitmq recipe creates a system user called `rabbitmq`. All administrative
rabbitmq commands should be done using that user.

For example, to enable the
[Management Plugin](https://rabbitmq.com/management.html) do like following:

```bash
su - rabbitmq
root@qemux86-64:~# rabbitmq-plugins enable rabbitmq_management
warning: the VM is running with native name encoding of latin1 which may cause Elixir to malfunction as it expects utf8. Please ensure your locale is set to UTF-8 (which can be verified by running "locale" i)
Enabling plugins on node rabbit@qemux86-64:
rabbitmq_management
The following plugins have been configured:
  rabbitmq_management
  rabbitmq_management_agent
  rabbitmq_web_dispatch
Applying plugin configuration to rabbit@qemux86-64...
The following plugins have been enabled:
  rabbitmq_management
  rabbitmq_management_agent
  rabbitmq_web_dispatch

set 3 plugins.
Offline change; changes will take effect at broker restart.
```

So, restarting the server as:

```bash
systemctl restart rabbitmq-server
```

Now, rabbitmq is ready for further explorations. The dashboard can be accessed
via http://192.168.7.2:15672
