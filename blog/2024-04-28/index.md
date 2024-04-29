---
title: livebook server
authors: [joaohf]
tags: [meta-erlang, livebook]
---

## Intro

From [livebook.dev](https://livebook.dev) website:

> Automate code & data workflows with interactive notebooks.

Livebook is getting famous for modern notebooks. It helps a lot for several tasks
and to solve issues where documentation and code have to walk together.

I added livebook to the standard beamtools SDK. That is very handy because I can
start livebook quickly and it will work with all SDK tools. That means, I don't need
to install anything else. It's all integrated.

If I need one more tool, it's just a matter of including it into SDK and it will be
ready to use.

The following section is a step by step in order to install livebook in any modern Linux server.

### livebook as a Linux systemd service

