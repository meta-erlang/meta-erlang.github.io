"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[5279],{2760:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var a=i(5261),r=i(4848),l=i(8453);const t={title:"Anatomy of erlang and elixir packages for YP/OE",authors:["joaohf"],tags:["meta-erlang","x32"]},s=void 0,o={authorsImageUrls:[void 0]},c=[{value:"Environment setup",id:"environment-setup",level:2},{value:"multiconfig build",id:"multiconfig-build",level:2},{value:"Introspection with buildhistory",id:"introspection-with-buildhistory",level:2},{value:"YP/OE packaging for erlang and elixir recipes",id:"ypoe-packaging-for-erlang-and-elixir-recipes",level:2},{value:"Special metapackages",id:"special-metapackages",level:3},{value:"Where the files get installed ?",id:"where-the-files-get-installed-",level:3},{value:"erlang package sizes",id:"erlang-package-sizes",level:2},{value:"qemux86",id:"qemux86",level:3},{value:"qemux86-64",id:"qemux86-64",level:3},{value:"qemux86-64 with x32 psABI",id:"qemux86-64-with-x32-psabi",level:3},{value:"qemuarm64",id:"qemuarm64",level:3},{value:"qemuarm",id:"qemuarm",level:3},{value:"elixir package sizes",id:"elixir-package-sizes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Usually, when designing a linux distribution using YP/OE we want a slim image\nwith only what we need to run a specific application (or applications). In this\npost we'll discuss a bit about erlang and elixir packages that meta-erlang layer\nprovides."}),"\n",(0,r.jsx)(n.p,{children:"It's important to know how the packages are divided into smaller ones in order\nto offer a better composition when creating linux distributions with YP/OE."}),"\n",(0,r.jsx)(n.h2,{id:"environment-setup",children:"Environment setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Cloning all repositories for master branch:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone --branch master git://git.yoctoproject.org/poky\ngit clone --branch master https://github.com/openembedded/meta-openembedded.git\ngit clone --branch master https://github.com/meta-erlang/meta-erlang\ngit clone --branch master https://github.com/meta-erlang/meta-axon\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Source the init build environment script:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd poky\nsource oe-init-build-env ../build\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add the needed layers:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bitbake-layers add-layer ../meta-openembedded/meta-oe\nbitbake-layers add-layer ../meta-erlang\nbitbake-layers add-layer ../meta-axon\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Configure the ",(0,r.jsx)(n.code,{children:"conf/local.conf"})," and enable multiconfig builds:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'tee -a <<EOF\n# debug-tweaks\nEXTRA_IMAGE_FEATURES ?= "debug-tweaks"\nUSER_CLASSES ?= "buildhistory buildstats"\nBUILDHISTORY_COMMIT = "1"\nPACKAGE_CLASSES = "package_ipk"\nPATCHRESOLVE = "noop"\nINHERIT += "rm_work"\nRM_WORK_EXCLUDE = "erlang erlang-native nativesdk-erlang"\n\n# diskmon\nBB_DISKMON_DIRS = "\\\n    STOPTASKS,${TMPDIR},1G,100K \\\n    STOPTASKS,${DL_DIR},1G,100K \\\n    STOPTASKS,${SSTATE_DIR},1G,100K \\\n    STOPTASKS,/tmp,100M,100K \\\n    HALT,${TMPDIR},100M,1K \\\n    HALT,${DL_DIR},100M,1K \\\n    HALT,${SSTATE_DIR},100M,1K \\\n    HALT,/tmp,10M,1K"\n\n# general config\nSDKMACHINE = "x86_64"\n\n# local\nCONNECTIVITY_CHECK_URIS = "https://www.google.com/"\n\n# master\n\n# qemu configuration\nPACKAGECONFIG:append:pn-qemu-system-native = " sdl"\nPACKAGECONFIG:append:pn-qemu-system-native = " gtk+"\n\n# systemd only\nINIT_MANAGER = "systemd"\n\nMACHINE ??= "qemuarm"\nDISTRO ??= "poky"\nBBMULTICONFIG ?= "qemux86-64-erlang-elixir qemuarm64-erlang-elixir qemuarm-erlang-elixir qemux86-erlang-elixir qemux86-64-x32-erlang-elixir"\n\n# To disable QA checks for https://github.com/meta-erlang/meta-erlang/issues/328\nERROR_QA:remove = "buildpaths"\n\nEOF\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"multiconfig-build",children:"multiconfig build"}),"\n",(0,r.jsxs)(n.p,{children:["YP/OE provides a smart way to build the same image (or different images) for\nmultiple targets. It is called multiconfig build and it is fully described at\n",(0,r.jsx)(n.a,{href:"https://docs.yoctoproject.org/dev-manual/building.html?highlight=multiconfig#building-images-for-multiple-targets-using-multiple-configurations",children:"Building Images for Multiple Targets Using Multiple Configurations"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Four our context, don't forget to checkout the section\n",(0,r.jsx)(n.a,{href:"#environment-setup",children:"Environment setup"}),", we need to compare the erlang and\nelixir packages using different processor architectures (",(0,r.jsx)(n.em,{children:"MACHINES"})," in YP/OE\nlanguage)."]}),"\n",(0,r.jsx)(n.p,{children:"We can build five targets using the command below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bitbake -c build \\\n    multiconfig:qemux86-64-erlang-elixir:core-image-minimal \\\n    multiconfig:qemux86-erlang-elixir:core-image-minimal \\\n    multiconfig:qemuarm-erlang-elixir:core-image-minimal \\\n    multiconfig:qemuarm64-erlang-elixir:core-image-minimal \\\n    multiconfig:qemux86-64-x32-erlang-elixir:core-image-minimal\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"The multiconfig build was configured to create a specific TMPDIR for each\nprocessor architecture. Then, the final results at build folder will be one\nfolder for each architecture:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tmp-qemuarm64-glibc-erlang-elixir\ntmp-qemuarm-glibc-erlang-elixir\ntmp-qemux86-64-glibc-erlang-elixir\ntmp-qemux86-64-glibc-x32-erlang-elixir\ntmp-qemux86-glibc-erlang-elixir\n"})}),"\n",(0,r.jsx)(n.p,{children:"That way, it's easy to navigate into the final output files."}),"\n",(0,r.jsx)(n.h2,{id:"introspection-with-buildhistory",children:"Introspection with buildhistory"}),"\n",(0,r.jsx)(n.p,{children:"The buildhistory is a YP/OE feature that writes some meta data into a git\nrepository for further inspection. Then, it's possible check and interact with\nfiles using standard linux tools like find and grep to collect insights. Using\nbuildhistory is a shortcut because we can inspect how files would be installed\ninto the final image, without having to burn the image and boot it on a real (or\nvirtual) target."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Check out the\n",(0,r.jsx)(n.a,{href:"https://docs.yoctoproject.org/5.0.3/dev-manual/build-quality.html?highlight=buildhistory#enabling-and-disabling-build-history",children:"Enabling and Disabling Build History"}),"\ninstructions for how to enable buildhistory."]})}),"\n",(0,r.jsx)(n.p,{children:"In this post we are interested in check the size of erlang and elixir packages."}),"\n",(0,r.jsx)(n.p,{children:"After a success build and from the YP/OE build folder, it's possible to explore\nthe buildhistory git repository:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd buildhistory/packages/cortexa57-poky-linux/erlang\nfind -name latest -print0 | xargs -0 grep PKGSIZE | sort\n...\n\ncd -\ncd buildhistory/packages/cortexa57-poky-linux/elixir\nfind -name latest -print0 | xargs -0 grep PKGSIZE | sort\n...\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PKGSIZE"})," gives to us the size in bytes of the final packages generated by\nerlang and elixir recipes."]}),"\n",(0,r.jsx)(n.h2,{id:"ypoe-packaging-for-erlang-and-elixir-recipes",children:"YP/OE packaging for erlang and elixir recipes"}),"\n",(0,r.jsxs)(n.p,{children:["The nature of Erlang/OTP is to isolate erlang modules into applications. The\nErlang/OTP source code embraces this philosophy and it is natural to transform\neach application into an installed package (IPK, DEB, RPM). For that,\nmeta-erlang uses a simple script that creates a recipe manifest (see\n",(0,r.jsx)(n.a,{href:"https://github.com/meta-erlang/meta-erlang/blob/cb94887c108b63c6cba290cb019468f246df5ea4/scripts/contrib/erlang/generate-manifest#L76",children:"erlang recipe manifest"}),"\nfor details)."]}),"\n",(0,r.jsxs)(n.p,{children:["An erlang recipe manifest, for example\n",(0,r.jsx)(n.a,{href:"https://github.com/meta-erlang/meta-erlang/blob/cb94887c108b63c6cba290cb019468f246df5ea4/recipes-devtools/erlang/erlang-27.1-manifest.inc",children:"erlang-27.1-manifest.inc"}),",\ndeclares each Erlang/OTP application. For each application there are five\npackages:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"application_name-doc"}),": documentation, man pages and examples"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"application_name-dbg"}),": debug symbols, if any"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"application_name-dev"}),": development C headers, shared libraries (*.so)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"application_name-staticdev"}),": static libraries (*.a)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"application_name"}),": BEAM modules and files from ",(0,r.jsx)(n.code,{children:"priv"})," folder"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"application_name"})," is the name of the application like: kernel, stdlib,\nsasl, ..."]}),"\n",(0,r.jsx)(n.p,{children:"This separation is necessary because YP/OE splits the package of any recipe into\ndoc, dbg, dev and staticdev. Then, the user have more control about what will be\ninstalled into the final image."}),"\n",(0,r.jsxs)(n.p,{children:["The elixir recipe follows the same way, but simpler (check out the\n",(0,r.jsx)(n.a,{href:"https://github.com/meta-erlang/meta-erlang/blob/cb94887c108b63c6cba290cb019468f246df5ea4/recipes-devtools/elixir/elixir.inc",children:"elixir.inc"}),"\ninclude file)."]}),"\n",(0,r.jsx)(n.h3,{id:"special-metapackages",children:"Special metapackages"}),"\n",(0,r.jsx)(n.p,{children:"As there are many packages for erlang and elixir, sometimes we need to setup a\ndevelopment environment will all erlang and elixir packages installed. Or a\nminimum set of packages. There are a couple of metapackages created for that\npurpose:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["erlang-modules: install ",(0,r.jsx)(n.em,{children:"all"})," Erlang/OTP applications"]}),"\n",(0,r.jsxs)(n.li,{children:["erlang-modules-dev: install ",(0,r.jsx)(n.em,{children:"all"})," Erlang/OTP applications development packages"]}),"\n",(0,r.jsxs)(n.li,{children:["elixir-modules: install ",(0,r.jsx)(n.em,{children:"all"})," elixir applications"]}),"\n",(0,r.jsxs)(n.li,{children:["elixir-modules-dev: install ",(0,r.jsx)(n.em,{children:"all"})," elixir applications development packages"]}),"\n",(0,r.jsx)(n.li,{children:"erlang: install the minimal Erlang/OTP applications"}),"\n",(0,r.jsx)(n.li,{children:"elixir: install the minimal elixir applications"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"where-the-files-get-installed-",children:"Where the files get installed ?"}),"\n",(0,r.jsx)(n.p,{children:"The best way to awnser this is to take a look into buildhistory data."}),"\n",(0,r.jsx)(n.p,{children:"At the build folder there is a folder called buildhistory. That folder is split\nby images and packages. And for each architecture, there is a specific folder.\nSo, let's check the first 20 lines from file: files-in-packages.txt for\nerlang-erts package:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"head -n 20 buildhistory/packages/core2-32-poky-linux/erlang/erlang-erts/files-in-package.txt\ndrwxr-xr-x root       root             4096 ./usr\ndrwxr-xr-x root       root             4096 ./usr/bin\nlrwxrwxrwx root       root               22 ./usr/bin/epmd -> ../lib/erlang/bin/epmd\nlrwxrwxrwx root       root               21 ./usr/bin/erl -> ../lib/erlang/bin/erl\nlrwxrwxrwx root       root               25 ./usr/bin/escript -> ../lib/erlang/bin/escript\nlrwxrwxrwx root       root               25 ./usr/bin/run_erl -> ../lib/erlang/bin/run_erl\nlrwxrwxrwx root       root               24 ./usr/bin/to_erl -> ../lib/erlang/bin/to_erl\ndrwxr-xr-x root       root             4096 ./usr/lib\ndrwxr-xr-x root       root             4096 ./usr/lib/erlang\ndrwxr-xr-x root       root             4096 ./usr/lib/erlang/bin\nlrwxrwxrwx root       root               21 ./usr/lib/erlang/bin/epmd -> ../erts-15.1/bin/epmd\n-rwxr-xr-x root       root             1474 ./usr/lib/erlang/bin/erl\n-rwxr-xr-x root       root           140752 ./usr/lib/erlang/bin/erl_call\n-rwxr-xr-x root       root            38456 ./usr/lib/erlang/bin/escript\n-rw-r--r-- root       root             6860 ./usr/lib/erlang/bin/no_dot_erlang.boot\n-rwxr-xr-x root       root            25996 ./usr/lib/erlang/bin/run_erl\n-rwxr-xr-x root       root             1745 ./usr/lib/erlang/bin/start\n-rw-r--r-- root       root             6885 ./usr/lib/erlang/bin/start.boot\n-rw-r--r-- root       root             6885 ./usr/lib/erlang/bin/start_clean.boot\n-rwxr-xr-x root       root             1244 ./usr/lib/erlang/bin/start_erl\n"})}),"\n",(0,r.jsx)(n.h2,{id:"erlang-package-sizes",children:"erlang package sizes"}),"\n",(0,r.jsxs)(n.p,{children:["When installing the metapackage called ",(0,r.jsx)(n.code,{children:"erlang"})," the following packages will be\nautomatically installed:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"erlang-erts"}),"\n",(0,r.jsx)(n.li,{children:"erlang-kernel"}),"\n",(0,r.jsx)(n.li,{children:"erlang-stdlib"}),"\n",(0,r.jsx)(n.li,{children:"erlang-sasl"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These packages are the basic ones needed in order to run Erlang programs."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Actually, your application is in charge of making a proper Erlang/OTP\nrelease. Installing the package ",(0,r.jsx)(n.code,{children:"erlang"})," is an option if you need it installed\ninto standard locations. Otherwise, your application should produce a valide\nrelease with a builtin ERTS inside."]})}),"\n",(0,r.jsx)(n.p,{children:"The following charts are listed below to get a view about the size of those\nbasic erlang packages."}),"\n",(0,r.jsx)(n.p,{children:"The difference between each build, besides the processor architecture, is the\nsize in bytes of the package erlang-erts. That makes sense because that package\nis the ERTS (which is architecture dependent, like word size). On other hand,\nthe packages kernel, stdlib, sasl have the same size across all builds."}),"\n",(0,r.jsx)(n.h3,{id:"qemux86",children:"qemux86"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bitbake -c build multiconfig:qemux86-erlang-elixir:core-image-minimal\n"})}),"\n",(0,r.jsx)(n.mermaid,{value:'---\nconfig:\n    xyChart:\n        width: 900\n        height: 600\n    themeVariables:\n        xyChart:\n            titleColor: "#ff0000"\n---\nxychart-beta\n    title "core2-32-poky-linux (qemux86)"\n    x-axis "package name" [erts, kernel, stdlib, sasl]\n    y-axis "package size in bytes"\n    bar [5585259, 3421584, 7062547, 439445]'}),"\n",(0,r.jsx)(n.h3,{id:"qemux86-64",children:"qemux86-64"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bitbake -c build multiconfig:qemux86-64-erlang-elixir:core-image-minimal\n"})}),"\n",(0,r.jsx)(n.mermaid,{value:'---\nconfig:\n    xyChart:\n        width: 900\n        height: 600\n    themeVariables:\n        xyChart:\n            titleColor: "#ff0000"\n---\nxychart-beta\n    title "core2-64-poky-linux (qemux86-64)"\n    x-axis "package name" [erts, kernel, stdlib, sasl]\n    y-axis "package size in bytes"\n    bar [9472359, 3421584, 7062547, 439445]'}),"\n",(0,r.jsx)(n.h3,{id:"qemux86-64-with-x32-psabi",children:"qemux86-64 with x32 psABI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bitbake -c build multiconfig:x86_64_x32-poky-linux-gnux32:core-image-minimal\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["Enabling x32 psABI should be considered if your application needs to\nhandle 64-bit features, but you can't afford wasting space with addressing. See\nthe blog post ",(0,r.jsx)(n.a,{href:"/blog/2023/09/02/index",children:"Exploring x32 psABI for Erlang/OTP"}),"."]}),(0,r.jsx)(n.p,{children:"The package size difference in bytes between x32 build and a normal x86-64\nis 4615556."})]}),"\n",(0,r.jsx)(n.mermaid,{value:'---\nconfig:\n    xyChart:\n        width: 900\n        height: 600\n    themeVariables:\n        xyChart:\n            titleColor: "#ff0000"\n---\nxychart-beta\n    title "x86_64_x32-poky-linux-gnux32 (qemux86-64 x32 psABI)"\n    x-axis "package name" [erts, kernel, stdlib, sasl]\n    y-axis "package size in bytes"\n    bar [4856803, 3421584, 7062547, 439445]'}),"\n",(0,r.jsx)(n.h3,{id:"qemuarm64",children:"qemuarm64"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bitbake -c build multiconfig:qemuarm64-erlang-elixir:core-image-minimal\n"})}),"\n",(0,r.jsx)(n.mermaid,{value:'---\nconfig:\n    xyChart:\n        width: 900\n        height: 600\n    themeVariables:\n        xyChart:\n            titleColor: "#ff0000"\n---\nxychart-beta\n    title "cortexa57-poky-linux (qemuarm64)"\n    x-axis "package name" [erts, kernel, stdlib, sasl]\n    y-axis "package size in bytes"\n    bar [6400695, 3421584, 7062547, 439445]'}),"\n",(0,r.jsx)(n.h3,{id:"qemuarm",children:"qemuarm"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bitbake -c build multiconfig:qemuarm-erlang-elixir:core-image-minimal\n"})}),"\n",(0,r.jsx)(n.mermaid,{value:'---\nconfig:\n    xyChart:\n        width: 900\n        height: 600\n    themeVariables:\n        xyChart:\n            titleColor: "#ff0000"\n---\nxychart-beta\n    title "cortexa15t2hf-neon-poky-linux-gnueabi (qemuarm)"\n    x-axis "package name" [erts, kernel, stdlib, sasl]\n    y-axis "package size in bytes"\n    bar [3653615, 3421584, 7062547, 439445]'}),"\n",(0,r.jsx)(n.h2,{id:"elixir-package-sizes",children:"elixir package sizes"}),"\n",(0,r.jsxs)(n.p,{children:["When installing the metapackage called ",(0,r.jsx)(n.code,{children:"elixir"})," the following packages will be\nautomatically installed:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["erlang (see ",(0,r.jsx)(n.a,{href:"#erlang-package-sizes",children:"erlang package size for details"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"erlang-compiler"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"That is because elixir package needs erlang (erts, kernel, stdlib and sasl)\ninstalled. And, the erlang compiler is also a requirement."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Again, your application should manage a release for best results.\nInstalling the package ",(0,r.jsx)(n.code,{children:"elixir"})," only makes sense for testing purposes."]})}),"\n",(0,r.jsx)(n.p,{children:"The following table summarizes the packages sizes per processor architecture."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Processor architecture"}),(0,r.jsx)(n.th,{children:"Package size in bytes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"core2-32-poky-linux (qemux86)"}),(0,r.jsx)(n.td,{children:"5760108"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"core2-64-poky-linux (qemux86-64)"}),(0,r.jsx)(n.td,{children:"5760368"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qemux86-64-x32-erlang-elixir"}),(0,r.jsx)(n.td,{children:"5763392"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cortexa57-poky-linux (qemuarm64)"}),(0,r.jsx)(n.td,{children:"5760476"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cortexa15t2hf-neon-poky-linux-gnueabi"}),(0,r.jsx)(n.td,{children:"5764076"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"There are slight size differences. It should not as there is no architecture\ndependency on elixir beam files."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>s});var a=i(6540);const r={},l=a.createContext(r);function t(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(l.Provider,{value:n},e.children)}},5261:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/10/06/index","editUrl":"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/blog/2024-10-06/index.md","source":"@site/blog/2024-10-06/index.md","title":"Anatomy of erlang and elixir packages for YP/OE","description":"Usually, when designing a linux distribution using YP/OE we want a slim image","date":"2024-10-06T00:00:00.000Z","tags":[{"inline":true,"label":"meta-erlang","permalink":"/blog/tags/meta-erlang"},{"inline":true,"label":"x32","permalink":"/blog/tags/x-32"}],"readingTime":7.845,"hasTruncateMarker":true,"authors":[{"name":"Jo\xe3o Henrique Ferreira de Freitas","title":"Maintainer of meta-erlang","url":"https://github.com/joaohf","imageURL":"https://github.com/joaohf.png","key":"joaohf","page":null}],"frontMatter":{"title":"Anatomy of erlang and elixir packages for YP/OE","authors":["joaohf"],"tags":["meta-erlang","x32"]},"unlisted":false,"prevItem":{"title":"Running Erlang/OTP test suite on target with ptest","permalink":"/blog/2024/10/12/index"},"nextItem":{"title":"fwup for A/B image upgrades, part I","permalink":"/blog/2024/09/24/index"}}')}}]);