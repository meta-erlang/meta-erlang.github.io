---
title: 'meta-erlang on cloud II: building your own application'
authors: [joaohf]
tags: [meta-erlang, cloud]
---

<!---

- The previous blog has showed how to use EWAOL and adds meta-erlang support to it
- Now it's time to create something more tiny with only the components that we need
- meta-xpto for cloud erlang/elixir services
- How to create an image
- Publish to AWS AMI
- Run a instance
- Conclusion

-->

## Intro

The
[meta-erlang on cloud II, build your own application](/blog/2023/02/04/index)
post has shown the basic idea for how would be possible (and in fact it is
possible) to build a custom Linux distribution and run it on Graviton AWS
instances.

Now, it's time to refactor out the previous result. Removing what are not
necessary in order to create a slim meta-erlang cloud ready image.

So, this post is more like a tutorial to reach two main targets:

- Explore a demo Yocto layer which shows the basic pieces to run a distro on
  Graviton
- Add [livebook](https://livebook.dev/) to that image and try it on cloud. Why
  not trying some GPU processing :)

## meta-axon cloud aware

[meta-axon](https://github.com/meta-erlang/meta-axon) is my playground layer
focused on demonstrate how Erlang and Elixir applications could be integrated
with Yocto ecosystem. Until now, meta-axon has been tailored to run on embedded
devices (like raspberry pi). But, I'm also added, along side with the former
[axon-slim](https://github.com/meta-erlang/meta-axon/conf/distro/axon.conf), a
new distro called
[axon](https://github.com/meta-erlang/meta-axon/conf/distro/axon.conf). The axon
distro is focused on cloud, for the purpose of this tutorial AWS cloud.

:::tip

If you are new to the Yocto Project; remember some basic
[concepts here](https://docs.yoctoproject.org/overview-manual/concepts.html#yocto-project-concepts).

:::

I also introduced a new image called
[axon-image-cloud](https://github.com/meta-erlang/meta-axon/recipes-extented/image/axon-image-cloud.bb)
with all the pieces needed to run it on Graviton instances. This image relies on
systemd plus [cloud-init](https://cloud-init.io/) scripts.

It is important to mention that to run images on Graviton it is necessary to add
two layer dependencies:

- [meta-arm](https://git.yoctoproject.org/git/meta-arm), implementing a generic
  ARM 64 bits machine
- [meta-virtualization](https://git.yoctoproject.org/git/meta-virtualization),
  bringing cloud-init recipe

The rest of the needed components are all provided by standard Yocto layers
(like: poky and meta-openembedded).

## Build instructions

We want fast feedback and test the build results quickly. So here is the
procedure that will build an distro linux image with Erlang, Elixir and
[livebook](https://livebook.dev/):

:::note

I'm assuming a working Linux environment in order to run the below commands.

:::

1. Clone the meta-axon layer:

   ```bash
   git clone https://github.com/meta-erlang/meta-axon.git
   cd meta-axon
   ```

1. Install the [kas](https://kas.readthedocs.io/en/latest/) tool to setup a
   bitbake based project.

   ```bash
   git clone https://github.com/siemens/kas
   cd kas
   pip3 install .
   ```

1. Call kas tool to build everything:

   ```bash
   kas build kas/machines/meta-erlang-graviton2-livebook.yaml
   ```

   :::note

   The final image has been created in the deploy folder:
   _tmp/deploy/images/generic-arm64_.

   :::

1. Run the script _create-ami.sh_ to convert and upload a image made with Yocto
   into AWS AMI. Use your s3 bucket and specific how much extra space you want:

   ```bash
   ../scripts/create-ami.sh <add your s3 bucket here> 8
   ```

:::info

The script _create_ami.sh_ may need a fix in order to find the correct place for
the _qemu-img_ tool. Would be nice to have some sort of Yocto bbclass to
automatically convert and push the AMI image to AWS. But it is not the case yet.

:::

## Launching EC2 instances

After uploading the image, it's time to lunch an EC2 instance like the
following:

:::tip

Remember to use a _Free Trial available_ instance type. When I wrote this post,
the eligible tier was the t4g.small.

:::

![alt Launching a new EC2 instance](ec2_instance.jpg 'Launching a new EC2 instance')

And, finally here is it running:

![alt Running a new EC2 instance](ec2_running.jpg 'Running a new EC2 instance')

Accessing the instance via ssh and login with the user _axon_ should work as
expected. After all it is a normal Linux distro.

## Results

The following two screenshots show the livebook instance up and running on
Graviton EC2 instance. It is pretty cool.

Just showing the `top` command to check all the running process:

![alt Livebook instance Graviton](livebook_instance.jpg 'Livebook instance on Graviton')

And here is the livebook system dashboard to inspect some usage statistics, and
system information:

![alt Livebook dashboard on Graviton](livebook_dashboard.jpg 'Livebook dashboard on Graviton')

As you can see, it is running on ARM64, with JIT enable.

## Conclusion

Now we are converging to create the basic building blocks for creating custom
Linux distribution based on Yocto Project that runs on Cloud.

That could be the perfect case for projects that need to take control on every
detail of the software stack. From linx kernel configuration, building flags,
software configuration flags, anything. It's really flexible.

And for projects that relies on Erlang and Elixir, it is also amazing bringing
it to Cloud ecosystem.

The first blog part
[meta-erlang on cloud I: EWAOL based](/blog/2023/01/29/index) has introduced
what is possible to build. This blog post is more related to explore the
introduced idea into something feasible and aligned with meta-erlang purposes.
