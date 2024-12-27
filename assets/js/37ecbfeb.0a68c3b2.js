"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[408],{2880:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guides/guides-development","title":"Building SDKs","description":"Building your own SDKs.","source":"@site/versioned_docs/version-kirkstone/guides/guides-development.md","sourceDirName":"guides","slug":"/guides/guides-development","permalink":"/docs/kirkstone0/guides/guides-development","draft":false,"unlisted":false,"editUrl":"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-kirkstone/guides/guides-development.md","tags":[],"version":"kirkstone","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"description":"Building your own SDKs."},"sidebar":"tutorialSidebar","previous":{"title":"Hello World examples for meta-erlang","permalink":"/docs/kirkstone0/guides/guides-hello-world"},"next":{"title":"BEAM Tools","permalink":"/docs/kirkstone0/guides/guides-beamtools"}}');var i=o(4848),s=o(8453);const a={sidebar_position:5,description:"Building your own SDKs."},r="Building SDKs",l={},c=[{value:"SDK for Erlang and Elixir",id:"sdk-for-erlang-and-elixir",level:2},{value:"Standard SDK",id:"standard-sdk",level:3},{value:"Extensible SDK",id:"extensible-sdk",level:3},{value:"Development session example",id:"development-session-example",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"building-sdks",children:"Building SDKs"})}),"\n",(0,i.jsx)(n.h2,{id:"sdk-for-erlang-and-elixir",children:"SDK for Erlang and Elixir"}),"\n",(0,i.jsx)(n.p,{children:"The meta-erlang layers includes the possibility to generate development\ntoolchains enabling better and smooth experience for the developer."}),"\n",(0,i.jsx)(n.p,{children:"One could easily generates a specific SDK with all tools and libraries needed.\nFor example: if your project needs Erlang 22.1.8 and Elixir 1.10, you can\ngenerate a SDK having these two dependencies. Then all the developers can share\nand use the same SDK during the development phase."}),"\n",(0,i.jsxs)(n.p,{children:["In order to use a specific Erlang and Elixir versions, configure the following\nvariables in the file\n",(0,i.jsx)(n.a,{href:"https://docs.yoctoproject.org/ref-manual/terms.html?highlight=local%20conf#term-Configuration-File",children:"conf/local.conf or in the distro configuration file"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'PREFERRED_VERSION_erlang = "23.0.4"\nPREFERRED_VERSION_erlang-native = "23.0.4"\nPREFERRED_VERSION_nativesdk-erlang = "23.0.4"\n\nPREFERRED_VERSION_elixir = "1.11.2"\nPREFERRED_VERSION_elixir-native = "1.11.2"\nPREFERRED_VERSION_nativesdk-elixir = "1.11.2"\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["The default PACKAGECONFIG for erlang when nativesdk is to enable ",(0,i.jsx)(n.em,{children:"wx"})," and ",(0,i.jsx)(n.em,{children:"observer"})," tools. And\nif your distribution configuration disables (or removes) the ",(0,i.jsx)(n.em,{children:"opengl"})," configuration, you will need\nto add opengl in DISTRO_FEATURES_NATIVESDK variable (in or local.conf for instance). Like this:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'DISTRO_FEATURES_NATIVESDK:append = " opengl"\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"Maybe your team have special version of Erlang or Elixir with some in-house\npatches, using a SDK created by YP is a good approach to follow. You will have\ntotal control from the build until development SDK installation."}),"\n",(0,i.jsx)(n.p,{children:"Also the SDK have all the dependencies to cross compile applications for target\nhardware. So the developer has just one installation to perform in order to\naccess all the tools."}),"\n",(0,i.jsxs)(n.p,{children:["The recipe\n",(0,i.jsx)(n.a,{href:"https://github.com/meta-erlang/meta-erlang/tree/master/recipes-core/meta/meta-erlang-toolchain.bb",children:"meta-erlang-toolchain"}),"\nis the main entry point when creating a generic toolchain with Erlang and\nElixir. And comes with Erlang, Elixir development modules as well rebar3 build\ntool."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The follow two sections are based on\n",(0,i.jsx)(n.a,{href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html",children:"Yocto Project Application Development and the Extensible Software Development Kit (eSDK)"}),'\nfor Yocto Project 3.1.3 LTS "Dunfell". To get an up-to-date documentation,\nplease, visit the\n',(0,i.jsx)(n.a,{href:"https://docs.yoctoproject.org/index.html",children:"Yocto Project Documentation"})]})}),"\n",(0,i.jsx)(n.h3,{id:"standard-sdk",children:"Standard SDK"}),"\n",(0,i.jsxs)(n.p,{children:["Using the\n",(0,i.jsx)(n.a,{href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-using-the-standard-sdk",children:"Standard SDK"}),"\nis simple as:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bitbake meta-erlang-toolchain\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After finishing the SDK generation command, check the YP\n",(0,i.jsx)(n.a,{href:"https://docs.yoctoproject.org/ref-manual/ref-variables.html#term-TMPDIR",children:"TMPDIR"}),".\nA new file has been created like this:\n",(0,i.jsx)(n.em,{children:"poky-glibc-x86_64-meta-erlang-toolchain-armv7vet2hf-neon-qemuarm-toolchain-3.1.3.sh"}),".\nThe file name depends on many factors like machine configuration and YP version."]}),"\n",(0,i.jsx)(n.p,{children:"The next step is run the toolchain installation script, like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'~/work/opensource/build/tmp/deploy/sdk/poky-glibc-x86_64-meta-erlang-toolchain-armv7vet2hf-neon-qemuarm-toolchain-3.1.3.sh\nPoky (Yocto Project Reference Distro) SDK installer version 3.1.3\n=================================================================\nEnter target directory for SDK (default: /opt/poky/3.1.3): /opt/poky/3.1.3\nYou are about to install the SDK to "/opt/poky/3.1.3". Proceed [Y/n]?\nExtracting SDK.............................................done\nSetting it up...done\nSDK has been successfully set up and is ready to be used.\nEach time you wish to use the SDK in a new shell session, you need to source the environment setup script e.g.\n $ . /opt/poky/3.1.3/environment-setup-armv7vet2hf-neon-poky-linux-gnueabi\n'})}),"\n",(0,i.jsxs)(n.p,{children:["As the last sentence says, just source the file\n",(0,i.jsx)(n.em,{children:"environment-setup-armv7vet2hf-neon-poky-linux-gnueabi"})," and we ready to use\nErlang and Elixir."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you need to customize the toolchain, i.e: add or remove tools, YP supports\n",(0,i.jsx)(n.a,{href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-appendix-customizing-standard",children:"customize the Standard SDK"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"extensible-sdk",children:"Extensible SDK"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-extensible",children:"Extensible SDK"}),"\nis the newly way in order to create SDK with YP. It includes the\n",(0,i.jsx)(n.a,{href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#using-devtool-in-your-sdk-workflow",children:"devtool"}),"\ntool to help the development workflow when working with new recipes or testing\nwith the target hardware."]}),"\n",(0,i.jsx)(n.p,{children:"The instructions for generating an eSDK is as follow:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bitbake core-image-minimal -c populate_sdk_ext\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"populate_sdk_ext"})," works only with image recipes. After finishing the\ncommand, it is time to install the SDK like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'joaohf@porco:~/tmp/poky$ ~/work/opensource/build/tmp/deploy/sdk/poky-glibc-x86_64-core-image-minimal-armv7vet2hf-neon-qemuarm-toolchain-ext-3.1.3.sh\nPoky (Yocto Project Reference Distro) Extensible SDK installer version 3.1.3\n============================================================================\nEnter target directory for SDK (default: ~/poky_sdk):\nYou are about to install the SDK to "/home/joaohf/poky_sdk". Proceed [Y/n]?\nExtracting SDK..................................................done\nSetting it up...\nExtracting buildtools...\nPreparing build system...\nWARNING: /home/joaohf/poky_sdk/layers/poky/meta-axon/recipes-support/glfw/glfw_3.2.1.bb: distro_features_check.bbclass is deprecated, please use features_check.bbclass instead\nParsing recipes: 100% |#########################################################################################################################################| Time: 0:02:14\nInitialising tasks: 100% |######################################################################################################################################| Time: 0:00:01\nLoading cache: 100% |###########################################################################################################################################| Time: 0:00:00\nInitialising tasks: 100% |######################################################################################################################################| Time: 0:00:00\ndone\nSDK has been successfully set up and is ready to be used.\nEach time you wish to use the SDK in a new shell session, you need to source the environment setup script e.g.\n $ . /home/joaohf/poky_sdk/environment-setup-armv7vet2hf-neon-poky-linux-gnueabi\n'})}),"\n",(0,i.jsx)(n.p,{children:"Source the environment setup script for each new shell session that you want to\nuse the SDK."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Additional tools can also be included if needed, checkout the\n",(0,i.jsx)(n.a,{href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-appendix-customizing",children:"Customizing the Extensible SDK"}),"\ndocumentation."]})}),"\n",(0,i.jsx)(n.h2,{id:"development-session-example",children:"Development session example"}),"\n",(0,i.jsxs)(n.p,{children:["This section shows an example about how to use the SDK during a development\nsession and exploring how we can use the command\n",(0,i.jsx)(n.a,{href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#using-devtool-in-your-sdk-workflow",children:"devtool"}),"\nto help fixing a bug in an Erlang application."]}),"\n",(0,i.jsx)(n.p,{children:"We are going to perform the following steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"created a new bitbake recipe for an Erlang application"}),"\n",(0,i.jsx)(n.li,{children:"build the recipe"}),"\n",(0,i.jsx)(n.li,{children:"create an image and run it using QEMU"}),"\n",(0,i.jsx)(n.li,{children:"execute the Erlang application on QEMU"}),"\n",(0,i.jsx)(n.li,{children:"make a change in the application and use hot code swapping to change the\napplication, that is, without stop the running application or restart the QEMU\nmachine"}),"\n",(0,i.jsx)(n.li,{children:"clean up the target QEMU"}),"\n",(0,i.jsx)(n.li,{children:"finish up the recipe"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"One can use the same approach when working with a real hardware."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This session is far from be generic steps in order to develop, build, test\nand deploy Erlang/Elixir projects using Yocto Project. The purpose here is just\nto demonstrate one of multiple workflows."})}),"\n",(0,i.jsx)(n.p,{children:"Let's start loading the SDK setup environment:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ cd ~/poky_sdk\n$ source environment-setup-armv7vet2hf-neon-poky-linux-gnueabi\nSDK environment now set up; additionally you may now run devtool to perform development tasks.\nRun devtool --help for further details.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For this experience we are going to use a small Erlang application called\n",(0,i.jsx)(n.code,{children:"elock"}),". Clone it and build using rebar3 build tool."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ git clone https://github.com/joaohf/elock\n$ cd elock\n$ rebar3 compile\n"})}),"\n",(0,i.jsx)(n.p,{children:"Alright, the SDK is working as expected. The rebar3 tool is included into the\nSDK as well all the Erlang development requirements. The next step is create an\nelock bitbake recipe."}),"\n",(0,i.jsxs)(n.p,{children:["Still in the elock folder, call the ",(0,i.jsx)(n.code,{children:"devtool add"})," in order to create a standard\nbitbake recipe:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ devtool add elock .\nNOTE: Starting bitbake server...\nNOTE: Starting bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nNOTE: Reconnecting to bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nNOTE: Retrying server connection (#1)...\nNOTE: Starting bitbake server...\nINFO: Using source tree as build directory since that would be the default for this recipe\nINFO: Recipe /home/joaohf/poky_sdk/workspace/recipes/elock/elock_git.bb has been automatically created; further editing may be required to make it fully functional\n"})}),"\n",(0,i.jsxs)(n.p,{children:["devtool created a new recipe call elock_git.bb. This recipe does not work\nbecause Yocto Project doesn't know how to read an Erlang/Elixir project and\ngenerate a proper bitbake recipe. So we need to use a rebar3 plugin called\n",(0,i.jsx)(n.a,{href:"https://hex.pm/packages/rebar3_bitbake",children:"rebar3_bitbake"})," which knows how to\ncreate a proper recipe:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ rebar3 bitbake\n$ cp elock_0.1.0.bb /home/joaohf/poky_sdk/workspace/recipes/elock/elock_git.bb\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now, elock recipe is ready. As the last step before the build, let's fix the\nrecipe version because we want to build and release the version 0.1.0. So, still\nusing devtool to change the recipe name do:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ devtool rename -V 0.1.0 elock\nNOTE: Starting bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:00\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:01\nParsing of 1943 .bb files complete (1937 cached, 6 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nINFO: Renaming /home/joaohf/poky_sdk/workspace/appends/elock_git.bbappend to /home/joaohf/poky_sdk/workspace/appends/elock_0.1.0.bbappend\nINFO: Renaming /home/joaohf/poky_sdk/workspace/recipes/elock/elock_git.bb to /home/joaohf/poky_sdk/workspace/recipes/elock/elock_0.1.0.bb\n"})}),"\n",(0,i.jsx)(n.p,{children:"Finally, call devtool to build the elock recipe like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ devtool build elock\nNOTE: Starting bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:00\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:00\nParsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:04\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:00\nParsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nNOTE: Resolving any missing task queue dependencies\nInitialising tasks: 100% |#############################################################################################################################################| Time: 0:00:00\nSstate summary: Wanted 13 Found 1 Missed 12 Current 137 (7% match, 92% complete)\nNOTE: Executing Tasks\nNOTE: elock: compiling from external source tree /home/joaohf/work/projetos/elock\nNOTE: Tasks Summary: Attempted 613 tasks of which 608 didn't need to be rerun and all succeeded.\n"})}),"\n",(0,i.jsx)(n.p,{children:"Awesome, everything works. Now we need to build an image which has a working\nLinux distro made with Yocto Project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ devtool build-image core-image-minimal\nNOTE: Starting bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:00\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:00\nParsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nINFO: Building image core-image-minimal with the following additional packages: elock\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:04\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:00\nParsing of 1943 .bb files complete (1941 cached, 2 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nNOTE: Resolving any missing task queue dependencies\nInitialising tasks: 100% |#############################################################################################################################################| Time: 0:00:05\nSstate summary: Wanted 98 Found 1 Missed 97 Current 877 (1% match, 90% complete)\nNOTE: Executing Tasks\nNOTE: Tasks Summary: Attempted 2649 tasks of which 2423 didn't need to be rerun and all succeeded.\nINFO: Successfully built core-image-minimal. You can find output files in /home/joaohf/poky_sdk/tmp/deploy/images/qemuarm\n"})}),"\n",(0,i.jsx)(n.p,{children:"So far we build elock application as well the core-image-minimal. Now, it is\ntime to running the image using qemu."}),"\n",(0,i.jsx)(n.p,{children:"Open a new shell session and source again the SDK environment variables. This is\nnecessary because QEMU will block the terminal."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ cd ~/poky_sdk\n$ source environment-setup-armv7vet2hf-neon-poky-linux-gnueabi\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then, start the QEMU:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ devtool runqemu core-image-minimal\n"})}),"\n",(0,i.jsxs)(n.p,{children:["QEMU will start its booting process and we can connect over ssh to the IP\naddress 192.168.7.2 using ",(0,i.jsx)(n.em,{children:"root"})," as ssh user."]}),"\n",(0,i.jsx)(n.p,{children:"But our main aim now is to install the elock application into the QEMU instance.\nThe core-image-minimal does not have the elock installed. So, let's install it\nright now calling devtool and the deploy-target subcommand, like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ devtool deploy-target elock root@192.168.7.2\nNOTE: Starting bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:00\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:00\nParsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nINFO: Successfully deployed /home/joaohf/poky_sdk/tmp/work/armv7vet2hf-neon-poky-linux-gnueabi/elock/0.1.0-r0/image\n"})}),"\n",(0,i.jsx)(n.p,{children:"elock has been installed, however it is not started yet. In order to start it\nfor the first time, open a new terminal, connect over ssh and start elock\napplication:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ssh root@192.168.7.2\nroot@qemuarm:~# cd /usr/lib/elock/bin\nroot@qemuarm:/usr/lib/elock/bin# ./elock\nErlang/OTP 23 [erts-11.1.3] [source] [smp:1:1] [ds:1:1:10] [async-threads:1]\n\n=WARNING REPORT==== 20-Nov-2020::20:14:43.909058 ===\nSetting Ranch options together with socket options is deprecated. Please use the new map syntax that allows specifying socket options separately from other options.\n\nEshell V11.1.3  (abort with ^G)\n1>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Ok, elock is up and running. Back to the development terminal and let's test if\nelock is working:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ ssh -p 4050 admin@192.168.7.2\nThe authenticity of host '[192.168.7.2]:4050 ([192.168.7.2]:4050)' can't be established.\nRSA key fingerprint is SHA256:VXMXRo0wQnsCC5rFxuOy4rT3NSc5NLjoxvtcLpa0OFI.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '[192.168.7.2]:4050' (RSA) to the list of known hosts.\nSSH server\nEnter password for \"admin\"\npassword:\nEnter command or `help`\nelock> get_code\n---\x3e {ok,<<\"12345\">>}\nelock> exit\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Nice, it works! But, we want to change the default code from ",(0,i.jsx)(n.em,{children:"12345"})," to ",(0,i.jsx)(n.em,{children:"7777"}),".\nWhat we are going to do is fix the default code, redeploy and verify if the hot\nswap code worked as expected:"]}),"\n",(0,i.jsx)(n.p,{children:"Change the elock application like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'diff --git a/src/elock_statem.erl b/src/elock_statem.erl\nindex fc0b10e..3f88dd4 100644\n--- a/src/elock_statem.erl\n+++ b/src/elock_statem.erl\n@@ -24,7 +24,7 @@ get_timeout() ->\n set_timeout(Tmo) -> ok.\n\n get_code() ->\n-    {ok, <<"12345">>}.\n+    {ok, <<"77777">>}.\n'})}),"\n",(0,i.jsx)(n.p,{children:"Build the recipe with the changes made."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ devtool build elock\n"})}),"\n",(0,i.jsx)(n.p,{children:"And deploy elock. The deploy-target subcommand will take care about copying the\nfiles to the target directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ devtool deploy-target elock root@192.168.7.2\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Switch to the ssh session and load the elock_statem code using\n",(0,i.jsx)(n.code,{children:"code:load_file/1"}),". This is the most basic way to perform hot code swapping."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"code:load_file(elock_statem).\n{module,elock_statem}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now, it is time to connect again over ssh 4050 port and check if the new pass\ncode takes effect:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ ssh -p 4050 admin@192.168.7.2\nThe authenticity of host '[192.168.7.2]:4050 ([192.168.7.2]:4050)' can't be established.\nRSA key fingerprint is SHA256:VXMXRo0wQnsCC5rFxuOy4rT3NSc5NLjoxvtcLpa0OFI.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '[192.168.7.2]:4050' (RSA) to the list of known hosts.\nSSH server\nEnter password for \"admin\"\npassword:\nEnter command or `help`\nelock> get_code\n---\x3e {ok,<<\"77777\">>}\n"})}),"\n",(0,i.jsx)(n.p,{children:"It works! We are very very happy with all these changes. Time to clean up the\ntarget hardware, that is, remove the elock files (this is not strict necessary,\nbut just to show that it is possible):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ devtool undeploy-target elock root@192.168.7.2\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now, the last step is to finish up all the recipe changes. The subcommand\n",(0,i.jsx)(n.em,{children:"finish"})," creates any patches corresponding to commits in the local repository,\nmoves the new recipe to a specific layer and resets the recipe moving it from\nthe workspace to the layer."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ devtool finish -f elock meta-axon\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, just check the final recipe results:\n",(0,i.jsx)(n.em,{children:"~/poky_sdk/layers/poky/meta-axon/recipes-elock/elock/elock_0.1.0.bb"})]}),"\n",(0,i.jsx)(n.p,{children:"All done. We've created a recipe, change the Erlang application, deployed it on\nthe target hardware, applied a fix using hot code swapping without stopping the\napplication, checked the fix and finished up the recipe changes."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);