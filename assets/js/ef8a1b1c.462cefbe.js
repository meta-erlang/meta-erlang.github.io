"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[4186],{6978:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(4848),r=t(8453);const a={title:"fwup for A/B image upgrades",authors:["joaohf"],tags:["meta-erlang","fwup"]},s=void 0,o={permalink:"/blog/2024/09/24/index",editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/blog/2024-09-24/index.md",source:"@site/blog/2024-09-24/index.md",title:"fwup for A/B image upgrades",description:"This blog post is a tutorial about how to make A/B software updates with fwup",date:"2024-09-24T00:00:00.000Z",tags:[{inline:!0,label:"meta-erlang",permalink:"/blog/tags/meta-erlang"},{inline:!0,label:"fwup",permalink:"/blog/tags/fwup"}],readingTime:8.975,hasTruncateMarker:!0,authors:[{name:"Jo\xe3o Henrique Ferreira de Freitas",title:"Maintainer of meta-erlang",url:"https://github.com/joaohf",imageURL:"https://github.com/joaohf.png",key:"joaohf",page:null}],frontMatter:{title:"fwup for A/B image upgrades",authors:["joaohf"],tags:["meta-erlang","fwup"]},unlisted:!1,prevItem:{title:"Anatomy of erlang and elixir packages for YP/OE",permalink:"/blog/2024/10/06/index"},nextItem:{title:"New Erlang releases 27.0",permalink:"/blog/2024/05/31/index"}},l={authorsImageUrls:[void 0]},c=[{value:"Objectives and Tools",id:"objectives-and-tools",level:2},{value:"What is fwup ?",id:"what-is-fwup-",level:2},{value:"YP/OE setup",id:"ypoe-setup",level:2},{value:"Configuring the build environment",id:"configuring-the-build-environment",level:2},{value:"Deploying .fw images",id:"deploying-fw-images",level:2},{value:"burn a complete image",id:"burn-a-complete-image",level:3},{value:"move to B partition",id:"move-to-b-partition",level:3},{value:"move from B to A partition",id:"move-from-b-to-a-partition",level:3},{value:"Conclusions",id:"conclusions",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This blog post is a tutorial about how to make A/B software updates with fwup\ntool and Yocto Project."}),"\n",(0,i.jsx)(n.h2,{id:"objectives-and-tools",children:"Objectives and Tools"}),"\n",(0,i.jsx)(n.p,{children:"A short sentence as requirement for this tutorial is:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"I wish to make an image using Yocto Project and be able to run software\nupdates using A/B approach."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"There are many references on the Internet for A/B software updates. It's a\nwell-known approach with many different implementations. In short it's strategy\nto minimize downtime when changing the firmware of embedded devices. While the\nnew software gets written to the unused slot and the current slot is still\nrunning. When everything are ready to swap, the system gets restarted. Booting\nusing the unused slot (now it becomes the current slot)."}),"\n",(0,i.jsx)(n.p,{children:"So, in this blog post we are going to play with A/B software updates using fwup\ntool."}),"\n",(0,i.jsx)(n.h2,{id:"what-is-fwup-",children:"What is fwup ?"}),"\n",(0,i.jsxs)(n.p,{children:["The best ",(0,i.jsx)(n.a,{href:"https://github.com/fwup-home/fwup",children:"fwup"})," definition is from its\nofficial project home:"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"fwup is a configurable image-based software update utility for embedded\nLinux-based systems. It primarily supports software upgrade strategies that\nupdate entire root filesystem images at once. This includes strategies like\nswapping back and forth between A and B partitions, recovery partitions, and\nvarious trial update/failback scenarios. All software update information is\ncombined into a ZIP archive that may optionally be cryptographically signed.\nfwup has minimal dependencies and runtime requirements. Scripts are\nintentionally limited to make failure scenarios easier to reason about.\nDistribution of software update archives is not a feature. Users can call out\nto fwup to run upgrades from external media, stream them from the network, or\nscript them using a tool like Ansible if so desired."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In practice, fwup is simple and easy to use."}),"\n",(0,i.jsx)(n.h2,{id:"ypoe-setup",children:"YP/OE setup"}),"\n",(0,i.jsx)(n.p,{children:"I'll try to simplify the YP/OE setup to just tree small steps:"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["The YP documentation is very good. I strong recommend its reading. For this\nsection the release version used is\n",(0,i.jsx)(n.a,{href:"https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html",children:"scarthgap"}),"."]}),(0,i.jsxs)(n.p,{children:["One important point is to double check the\n",(0,i.jsx)(n.a,{href:"https://docs.yoctoproject.org/ref-manual/system-requirements.html#required-packages-for-the-build-host.",children:"Required Packages for the Build Host"})]})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cloning all repositories for scarthgap release:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone --branch scarthgap git://git.yoctoproject.org/poky\ngit clone --branch scarthgap https://github.com/openembedded/meta-openembedded.git\ngit clone --branch scarthgap https://github.com/fwup-home/meta-fwup\ngit clone --branch scarthgap https://github.com/meta-erlang/meta-erlang\ngit clone --branch scarthgap https://github.com/meta-erlang/meta-axon\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Source the init build environment script:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd poky\nsource oe-init-build-env ../build\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the needed layers:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bitbake-layers add-layer ../meta-openembedded/meta-oe\nbitbake-layers add-layer ../meta-erlang\nbitbake-layers add-layer ../meta-axon\nbitbake-layers add-layer ../meta-fwup\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Why four layers are needed ? Because the YP/OE approach is to isolate components\ninto layer in order to maximize the software reusability."}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-build-environment",children:"Configuring the build environment"}),"\n",(0,i.jsxs)(n.p,{children:["For this tutorial, the quickest way is edit and add the ",(0,i.jsx)(n.em,{children:"conf/local.conf"}),"\nconfiguration file."]}),"\n",(0,i.jsx)(n.p,{children:"We start defining the MACHINE and DISTRO:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'MACHINE = "raspberrypi0-wifi"\nDISTRO = "poky"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The layer\n",(0,i.jsx)(n.a,{href:"https://meta-raspberrypi.readthedocs.io/en/latest/readme.html",children:"meta-raspberry"}),"\nprovides the machine ",(0,i.jsx)(n.em,{children:"raspberrypi0-wifi"})," which is what I'm using for this\ndemonstration as my current development board is a raspberry pi 0."]}),"\n",(0,i.jsx)(n.p,{children:"Next, we need to enable some raspberry features like UART and USB host support\n(it's important to get some network connectivity):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'tee -a <<EOF conf/local.conf\n# https://meta-raspberrypi.readthedocs.io/en/latest/extra-build-config.html#enable-uart\nENABLE_UART = "1"\n\n# https://meta-raspberrypi.readthedocs.io/en/latest/extra-build-config.html#enable-usb-host-support\nENABLE_DWC2_PERIPHERAL = "1"\n\n# add some package to allow networking\nIMAGE_INSTALL:append = " raspi2go kernel-module-libcomposite kernel-module-g-ether kernel-module-dwc2"\nEOF\n'})}),"\n",(0,i.jsxs)(n.p,{children:["As YP/OE supports many types of image outputs, we want to be specific here and\npick only the ",(0,i.jsx)(n.em,{children:"fwup"})," type."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'tee -a <<EOF conf/local.conf\n# enable support for making fwup images\nIMAGE_CLASSES += "image_types_fwup"\nIMAGE_FSTYPES = "fwup"\nEOF\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The fwup type is provided by the bbclass\n",(0,i.jsx)(n.a,{href:"https://github.com/fwup-home/meta-fwup/blob/master/classes/image_types_fwup.bbclass",children:"image_types_fwup.bbclass"}),".\nIt relies on wic image generator and uses their build artifacts for bootloader\nand rootfs."]}),"\n",(0,i.jsx)(n.p,{children:"Ok, now we also want to include Erlang/OTP and Elixir. As meta-erlang provides\nmany versions, I recommend to stick with a specific one. In our case the latest\n1.17.x and 27.0.x are good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'tee -a <<EOF conf/local.conf\n# select specific elixir and erlang versions\nPREFERRED_VERSION_elixir = "1.17%"\nPREFERRED_VERSION_elixir-native = "1.17%"\nPREFERRED_VERSION_nativesdk-elixir = "1.17%"\nPREFERRED_VERSION_erlang = "27.0%"\nPREFERRED_VERSION_erlang-native = "27.0%"\nPREFERRED_VERSION_nativesdk-erlang = "27.0%"\nEOF\n'})}),"\n",(0,i.jsx)(n.p,{children:"Finally, add erlang and elixir to the image:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'tee -a <<EOF conf/local.conf\n# add erlang and elixir into image\nIMAGE_INSTALL:append = " erlang elixir"\nEOF\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now that the configuration is over. Let's start a build:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bitbake core-image-full-cmdline\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"It might take some time for the first build. As YP/OE will build everything from\nscratch. The next builds should be faster."})}),"\n",(0,i.jsx)(n.p,{children:"Once the build has finished, let's inspect the build outputs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd tmp/deploy/images/raspberrypi0-wifi\nls -l core-image-full-cmdline*\n-rw-r--r-- 2 builder builder 68465478 Sep 24 21:19 core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw\nlrwxrwxrwx 2 builder builder       66 Sep 24 21:19 core-image-full-cmdline-raspberrypi0-wifi.rootfs.fw -> core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The folder ",(0,i.jsx)(n.em,{children:"tmp/deploy/images/raspberrypi0-wifi"})," has many files generated from\nthe build tasks. We are interested only the final .fw file. In this case we the\nfile ",(0,i.jsx)(n.em,{children:"core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw"})," is\nwhat we need."]}),"\n",(0,i.jsx)(n.h2,{id:"deploying-fw-images",children:"Deploying .fw images"}),"\n",(0,i.jsx)(n.p,{children:"Before deploying, let's understand a bit the image partition layout created by\nYP/OE and fwup tool:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# +----------------------------+\n# | MBR                        |\n# +----------------------------+\n# | Firmware configuration data|\n# | (formatted as uboot env)   |\n# +----------------------------+\n# | p0*: Boot A (FAT32)        |\n# | zImage, bootcode.bin,      |\n# | config.txt, etc.           |\n# +----------------------------+\n# | p0*: Boot B (FAT32)        |\n# +----------------------------+\n# | p1*: Rootfs A (ext4)       |\n# +----------------------------+\n# | p1*: Rootfs B (ext4)       |\n# +----------------------------+\n# | p2: Application (ext4)     |\n# +----------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There is a total of three partitions. Where partition p0 and p1 have been\ndivided by half each one. It's not clear to get this idea. So, I recommend you\nto take a look into fwup configuration file used by this tutorial,\n",(0,i.jsx)(n.a,{href:"https://github.com/meta-erlang/meta-axon/blob/master/fwup/core-image-full-cmdline.raspberrypi0-wifi.fwup",children:"core-image-full-cmdline.raspberrypi0-wifi.fwup"}),".\nThat file has been adapted from the original\n",(0,i.jsx)(n.a,{href:"https://github.com/nerves-project/nerves_system_rpi0/blob/main/fwup.conf",children:"nerves_system_rpi0 fwup configuration"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"burn-a-complete-image",children:"burn a complete image"}),"\n",(0,i.jsxs)(n.p,{children:["My target sdcard has 16GB there is enough space for the core-image-full-cmdline\nimage. To start using it we need write a ",(0,i.jsx)(n.em,{children:"complete"})," image to the sdcard. By\ncomplete image also means the the partition A will be used when the board gets\nbooted."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ sudo fwup -a -d /dev/sda -t complete -i core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw\n100% [====================================] 68.46 MB in / 382.20 MB out\nSuccess!\nElapsed time: 55.932 s\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When I inserted the sdcard into my workstation, my host Linux recognized it as\n",(0,i.jsx)(n.em,{children:"/dev/sda"})," device, using sudo when calling fwup took almost 56 seconds to write\n382 MB to the sdcard."]}),"\n",(0,i.jsx)(n.p,{children:"That is all we need to get the sdcard and boot it into raspberry board."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The next output is just the partition layout for a real board booted from the\nsdcard."})}),"\n",(0,i.jsx)(n.p,{children:"And in fact, it works as expected:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@raspberrypi0-wifi:~# sfdisk -l /dev/mmcblk0\nDisk /dev/mmcblk0: 14.84 GiB, 15931539456 bytes, 31116288 sectors\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\nDisklabel type: dos\nDisk identifier: 0x00000000\n\nDevice         Boot   Start      End  Sectors  Size Id Type\n/dev/mmcblk0p1 *         63   266302   266240  130M  c W95 FAT32 (LBA)\n/dev/mmcblk0p2       532543  1011774   479232  234M 83 Linux\n/dev/mmcblk0p3      1491007 31116287 29625281 14.1G 83 Linux\n"})}),"\n",(0,i.jsx)(n.p,{children:"Checking erl and iex versions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@raspberrypi0-wifi:~# erl\nErlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]\n\nEshell V15.0.1 (press Ctrl+G to abort, type help(). for help)\n1>\nUser switch command (type h for help)\n --\x3e q\n\nroot@raspberrypi0-wifi:~# iex\nErlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]\n\nwarning: the VM is running with native name encoding of latin1 which may cause Elixir to malfunction as it expects utf8. Please ensure your locale is set to UTF-8 (whiche\nInteractive Elixir (1.17.1) - press Ctrl+C to exit (type h() ENTER for help)\niex(1)>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"move-to-b-partition",children:"move to B partition"}),"\n",(0,i.jsxs)(n.p,{children:["Still using the image\ncore-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw, I want to\ntest the B upgrade path. For that, the easiest way is to call fwup (which has\nbeen installed into the image) passing some usual flags for this\n",(0,i.jsx)(n.a,{href:"https://github.com/fwup-home/fwup?tab=readme-ov-file#whats-something-cool-that-you-can-do-with-fwup",children:"kind of operation"}),":"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The instructions for setting board's network stack using USB is not part of the\nscope of this tutorial."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ cat core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240924200317.fw | ssh root@192.168.7.7 'fwup -v -a -U -d /dev/mmcblk0 -t upgrade.b'\nfwup: require-partition-offset(1, 532543) -> met\nfwup: require-uboot-variable(uboot-env, a.nerves_fw_platform) -> met\nfwup: require-uboot-variable(uboot-env, a.nerves_fw_architecture) -> met\nfwup: Upgrading partition B\n100% [====================================] 68.46 MB in / 381.82 MB out\nSuccess!\nElapsed time: 1 min 30 s\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The important argument is the ",(0,i.jsx)(n.code,{children:"-t upgrade.b"})," telling to fwup which partition\nwill be upgraded."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In my setup I called ",(0,i.jsx)(n.code,{children:"reboot"})," to get raspberry rebooted."]})}),"\n",(0,i.jsx)(n.p,{children:"Checking erl and iex versions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@raspberrypi0-wifi:~# erl\nErlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]\n\nEshell V15.0.1 (press Ctrl+G to abort, type help(). for help)\n1>\nUser switch command (type h for help)\n --\x3e q\n\nroot@raspberrypi0-wifi:~# iex\nErlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]\n\nwarning: the VM is running with native name encoding of latin1 which may cause Elixir to malfunction as it expects utf8. Please ensure your locale is set to UTF-8 (whiche\nInteractive Elixir (1.17.1) - press Ctrl+C to exit (type h() ENTER for help)\niex(1)>\n"})}),"\n",(0,i.jsx)(n.p,{children:"The versions are still 1.17.x and 27.0.x, as expected."}),"\n",(0,i.jsx)(n.h3,{id:"move-from-b-to-a-partition",children:"move from B to A partition"}),"\n",(0,i.jsxs)(n.p,{children:["For testing purposes, let's change the Elixir preferred version from 1.17.x to\n1.16.x. For that, edit the local.conf file and change the\n",(0,i.jsx)(n.code,{children:"PREFERRED_VERSION_elixir*"})," variables:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'tee -a <<EOF conf/local.conf\n# select specific elixir and erlang versions\nPREFERRED_VERSION_elixir = "1.16%"\nPREFERRED_VERSION_elixir-native = "1.16%"\nPREFERRED_VERSION_nativesdk-elixir = "1.16%"\nEOF\n'})}),"\n",(0,i.jsx)(n.p,{children:"Running the build again:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bitbake core-image-full-cmdline\n"})}),"\n",(0,i.jsx)(n.p,{children:"The result will be a new core-image-full-cmdline-raspberrypi0-wifi.rootfs-*.fw\nfilename which is ready to be used:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ cat core-image-full-cmdline-raspberrypi0-wifi.rootfs-20240920190231.fw | ssh root@192.168.7.7 'fwup -v -a -U -d /dev/mmcblk0 -t upgrade.a'\nfwup: require-partition-offset(1, 1011775) -> met\nfwup: require-uboot-variable(uboot-env, b.nerves_fw_platform) -> met\nfwup: require-uboot-variable(uboot-env, b.nerves_fw_architecture) -> met\nfwup: Upgrading partition A\n100% [====================================] 68.46 MB in / 381.82 MB out\nSuccess!\nElapsed time: 1 min 30 s\n"})}),"\n",(0,i.jsx)(n.p,{children:"Rebooting the board and checking the iex version, we get:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@raspberrypi0-wifi:~# erl\nErlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]\n\nEshell V15.0.1 (press Ctrl+G to abort, type help(). for help)\n1>\nUser switch command (type h for help)\n --\x3e q\nroot@raspberrypi0-wifi:~# iex\nwarning: the VM is running with native name encoding of latin1 which may cause Elixir to malfunction as it expects utf8. Please ensure your locale is set to UTF-8 (whiche\nErlang/OTP 27 [erts-15.0.1] [source] [32-bit] [smp:1:1] [ds:1:1:10] [async-threads:1]\n\nInteractive Elixir (1.16.3) - press Ctrl+C to exit (type h() ENTER for help)\n"})}),"\n",(0,i.jsx)(n.p,{children:"That works! Erlang/OTP 27 and Elixir 1.16.3."}),"\n",(0,i.jsx)(n.h2,{id:"conclusions",children:"Conclusions"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/fwup-home/fwup",children:"fwup"})," tool has shown as a feasibly\napproach for image A/B software upgrades. It is integrated into YP/OE ecosystem\nthrough ",(0,i.jsx)(n.a,{href:"https://github.com/fwup-home/meta-fwup",children:"meta-fwup"})," layer and ready to\ntry."]}),"\n",(0,i.jsxs)(n.p,{children:["fwup is also used by Nerves Project together with others Elixir components in\norder to provide a full\n",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Over-the-air_update",children:"OTA updates"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);