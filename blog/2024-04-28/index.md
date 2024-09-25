---
title: livebook server
authors: [joaohf]
tags: [meta-erlang, livebook]
---

## Intro

From [livebook.dev](https://livebook.dev) website:

<!-- truncate -->

> Automate code & data workflows with interactive notebooks.

Livebook is getting famous for modern notebooks. It helps a lot for several
tasks and to solve issues where documentation and code have to walk together.

Live book has been added to the standard beamtools SDK. That is very handy
because one can start livebook quickly and it will work with all SDK tools. That
means, we don't need to install anything else. It's all integrated.

If one more tool is needed, it's just a matter of including it into SDK and it
will be ready to use.

The following section is a step by step in order to install livebook in any
modern Linux server.

### livebook as a Linux systemd service

All commands as sudo:

```
wget -O /tmp/x86_64-beamtools-nativesdk-standalone-5.0.2-erlang-27.0-elixir-1.17.1.sh https://github.com/meta-erlang/meta-erlang/releases/download/beamtools-0.9.1/x86_64-beamtools-nativesdk-standalone-5.0.2-erlang-27.0-elixir-1.17.1.sh

chmod +x /tmp/x86_64-beamtools-nativesdk-standalone-5.0.2-erlang-27.0-elixir-1.17.1.sh

adduser --group livebook livebook
mkdir /home/livebook/sdk

/tmp/x86_64-beamtools-nativesdk-standalone-5.0.2-erlang-27.0-elixir-1.17.1.sh -y -d /home/livebook/sdk/5.0.2

chown -R livebook:livebook /home/livebook/sdk/5.0.2
```

Create a file at /etc/livebook/livebook.conf with permission livebook:livebook
and the following configuration:

```
LIVEBOOK_DEFAULT_RUNTIME=standalone
LIVEBOOK_IP=0.0.0.0
LIVEBOOK_PORT=8080
LIVEBOOK_PASSWORD=livebook-instance
LIVEBOOK_HOME=/home/livebook
```

Create a systemd service file at /lib/systemd/system/livebook.service with the
following:

```
[Unit]
Description=Livebook

[Service]
Type=simple
User=livebook
Group=livebook
Environment=SHELL=/bin/sh
Environment=HOME=/home/livebook
EnvironmentFile=/etc/livebook/livebook.conf
WorkingDirectory=/home/livebook
ExecStart=/home/livebook/livebook.sh start
ExecStop=/home/livebook/livebook.sh stop
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Create a file /home/livebook/livebook.sh, change permission to
livebook:livebook.

With the following contents:

```
#!/bin/bash

# Load SDK environment
source /home/livebook/sdk/5.0.2/environment-setup-x86_64-pokysdk-linux

# Start/Stop livebook
livebook $@
```

In order to start and stop livebook, it's all about systemctl commands:

- start: `systemctl start livebook`
- stop: `systemctl stop livebook`
- check status: `systemctl status livebook`
