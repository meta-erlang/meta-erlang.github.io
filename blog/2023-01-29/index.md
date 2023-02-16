---
title: 'meta-erlang on cloud I: EWAOL based'
authors: [joaohf]
tags: [meta-erlang, cloud]
---

<!---

- Describe what is the idea: create meta-erlang YP based images with Erlang/OTP and Elixir
- Be able to generate images and push them to AWS
- Instantiate https://aws.amazon.com/ec2/graviton/ instances
- Run Erlang/OTP and Elixir based services like couchdb, riak, livebook
- Points some future directions and what would be possible to create

-->

## Intro

The [Yocto Project](https://www.yoctoproject.org/) has been made to create
specific embedded Linux distributions. And still does a great job on this field
making it possible to run softwares in a range of target architectures.

But, the term _embedded Linux distribution_ should be expanded a bit more; it's
not only about creating tiny filesystem within cross-compiled software, scripts
and configurations targeting platforms with small footprint, CPU and memory
constraints.

We could do more, actually there are people using the not so newly but still new
ARM processors that runs on cloud environment. For sure the most famous one is
the
[Graviton EC2 instances, on AWS cloud](https://aws.amazon.com/ec2/graviton/).

Looking into these Graviton processors and Yocto Project, what would it be
possible ? Maybe running Yocto images on Graviton instances could be feasible
enough to run some workload. And what about adding Erlang/OTP and Elixir to that
mix ? Or running some advanced database or broker made with Erlang ?

That is exactly what we will try to experiment. In this first post about running
meta-erlang on cloud, we are going to look how it would be possible.

Actually there are folks whose made possible to run Yocto images on Graviton
instances. Technically is pretty simple and all bits and bytes have been
described in the blog post
[Building an Automotive Embedded Linux Image for Edge and Cloud Using Arm-based Graviton Instances, Yocto Project, and SOAFEE](https://aws.amazon.com/blogs/industries/building-an-automotive-embedded-linux-image-for-edge-using-arm-graviton-yocto-project-soafee/).
The companion repository also worth the reading
[The meta-aws-ewaol repository](https://github.com/aws4embeddedlinux/meta-aws-ewaol).

The idea that [1] brings is part of another idea related to Software-Defined
Vehicles through Cloud [2] which is very excited. These references also cites a
framework to build Edge Workloads [3] and in fact the EWAOL (Edge Workload
Abstraction and Orchestration Layer) was used as a base to produce the
[meta-aws-ewaol](https://github.com/aws4embeddedlinux/meta-aws-ewaol) layer.

## Putting everything together, first experiment

So, based on all what has been described so far and as a first experience, I've
tested meta-aws-ewaol setup and added meta-erlang into that. The aim was to run
`erl` and `iex` console on Graviton EC2 instances.

I had to make a few fixes on meta-aws-ewaol and pushed the results here:
[meta-aws-ewaol with meta-erlang](https://github.com/joaohf/meta-aws-ewaol/tree/main-add-meta-erlang).
The rest of this session is a small guide that I made in order to run our first
experiment.

With a ready Yocto environment, following the
[Building EWAOL](https://github.com/joaohf/meta-aws-ewaol/tree/main-add-meta-erlang#building-ewaol)
session is enough to get the system built. It's just Yocto, nothing more.

:::tip

- You can create a free AWS account. There are Graviton instances included in
  the AWS free tier. It's more than sufficient.
- Bear in mind that you don't need to be an AWS master but you will end up
  spending some time learning how to create AWS services.

:::

The next step is to create and setup all the AWS infrastructure needed in order
to push the Yocto image as AWS AMI and start the Graviton Instance. Lucky, there
is a Cloud Formation template which performs the initial setup. The session
[Pre-requisites](https://github.com/joaohf/meta-aws-ewaol/tree/main-add-meta-erlang#pre-requisites)
helps to clarify it.

Then, having the Yocto image and the basic AWS account in place. It's time to
use
[a special script](https://github.com/joaohf/meta-aws-ewaol/blob/main-add-meta-erlang/scripts/create-ami.sh)
to convert Yocto image to an AMI image. Most of the job is done by awscli
commands. There is nothing related to Yocto here. The session
[Creating AMI from image file](https://github.com/joaohf/meta-aws-ewaol/tree/main-add-meta-erlang#creating-ami-from-image-file)
tells what is necessary to do.

Finally, the last part. After pushing the AMI image to the S3 bucket. The fun
part is to instantiate a Graviton instance (please refer to the session
[Launch the EC2 Image as usual using your newly created AMI](https://github.com/joaohf/meta-aws-ewaol/tree/main-add-meta-erlang#launch-the-ec2-image-as-usual-using-your-newly-created-ami))
an run the EWAOL based image and test how Erlang and Elixir looks like.

I've added two screenshots below just to have a taste of the final results:

![alt Erlang console](meta-erlang-gravitron-erl.jpg 'Erlang console')

![alt Elixir console](meta-erlang-gravitron-iex.jpg 'Elixir console')

## Conclusion

This first experiment has finished and I can conclude two main bullets:

- It is possible to build a Yocto image and run it on Graviton instances
- meta-aws-ewaol is a great start point. And the EWAOL framework looks solid for
  what it has been planned for.

However, what I am looking for is to run a tiny image with just the necessary to
instantiate an ARM cloud instance running Erlang/Elixir. That is what the
next blog post will do:
[meta-erlang on cloud II, build your own application](/blog/2023/02/04/index)

## References

- [1]:
  [Building an Automotive Embedded Linux Image for Edge and Cloud Using Arm-based Graviton Instances, Yocto Project, and SOAFEE](https://aws.amazon.com/blogs/industries/building-an-automotive-embedded-linux-image-for-edge-using-arm-graviton-yocto-project-soafee/)
- [2]:
  [Accelerating Software-Defined Vehicles through Cloud-To-Vehicle Edge Environmental Parity](https://armkeil.blob.core.windows.net/developer/Files/pdf/white-paper/arm-aws-edge-environmental-parity-wp.pdf)
- [3]:
  [Edge Workload Abstraction and Orchestration Layer (EWAOL) Documentation](https://ewaol.docs.arm.com/en/kirkstone-dev/index.html)
