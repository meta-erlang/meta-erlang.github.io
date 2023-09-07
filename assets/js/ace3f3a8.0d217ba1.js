"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[2200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Exploring x32 psABI for Erlang/OTP",authors:["joaohf"],tags:["meta-erlang","x32"]},i=void 0,l={permalink:"/blog/2023/09/02/index",editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/blog/2023-09-02/index.md",source:"@site/blog/2023-09-02/index.md",title:"Exploring x32 psABI for Erlang/OTP",description:"Intro",date:"2023-09-02T00:00:00.000Z",formattedDate:"September 2, 2023",tags:[{label:"meta-erlang",permalink:"/blog/tags/meta-erlang"},{label:"x32",permalink:"/blog/tags/x-32"}],readingTime:3.865,hasTruncateMarker:!1,authors:[{name:"Jo\xe3o Henrique Ferreira de Freitas",title:"Maintainer of meta-erlang",url:"https://github.com/joaohf",imageURL:"https://github.com/joaohf.png",key:"joaohf"}],frontMatter:{title:"Exploring x32 psABI for Erlang/OTP",authors:["joaohf"],tags:["meta-erlang","x32"]},nextItem:{title:"New Erlang releases 24.3.4.13, 25.3.2.3, 26.0.2",permalink:"/blog/2023/07/01/index"}},p={authorsImageUrls:[void 0]},s=[{value:"Intro",id:"intro",level:2},{value:"Building Erlang/OTP using x32 toolchain",id:"building-erlangotp-using-x32-toolchain",level:2},{value:"Enabling Erlang for Yocto",id:"enabling-erlang-for-yocto",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"According to ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/X32_ABI"},"Wikipedia X32 ABI")," page:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The x32 ABI is an application binary interface (ABI) and one of the interfaces\nof the Linux kernel. The x32 ABI provides 32-bit integers, long and pointers\n(ILP32) on Intel and AMD 64-bit hardware. The ABI allows programs to take\nadvantage of the benefits of x86-64 instruction set (larger number of CPU\nregisters, better floating-point performance, faster position-independent\ncode, shared libraries, function parameters passed via registers, faster\nsyscall instruction) while using 32-bit pointers and thus avoiding the\noverhead of 64-bit pointers.")),(0,a.kt)("p",null,"So, I'm wondering if it would be possible to enable x32 support in Erlang/OTP\nbuild. That way, I could make a Yocto image for x32 that runs on x86-64\nmachines."),(0,a.kt)("p",null,"Here is some references about the subject:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.yoctoproject.org/dev-manual/x32-psabi.html"},"Yocto, Using x32 psABI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sites.google.com/site/x32abi/home?authuser=0"},"x32-abi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://linuxplumbersconf.org/2011/ocw//system/presentations/531/original/x32-LPC-2011-0906.pptx"},"X32 \u2013 A Native 32bit ABI For X86-64")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.debian.org/X32Port"},"Debian x32 port")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/wiki/hjl-tools/x86-psABI/x86-64-psABI-1.0.pdf"},"System V Application Binary Interface AMD64 Architecture Processor Supplement (With LP64 and ILP32 Programming Models"))),(0,a.kt)("p",null,"In fact, x32 seems to be around since 2011/2012 and has been integrated in many\nplatforms. Like Ubuntu, Debian, Gentoo."),(0,a.kt)("h2",{id:"building-erlangotp-using-x32-toolchain"},"Building Erlang/OTP using x32 toolchain"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A toolchain with x32 support is necessary. However, it's not easy to find one.\nInstead projects like ",(0,a.kt)("a",{parentName:"p",href:"https://crosstool-ng.github.io/"},"crosstool-NG")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://www.yoctoproject.org/"},"Yocto Project")," have tools to make a toolchain\nwith x32 support enabled.")),(0,a.kt)("p",null,"In order to follow this experiment, you can download a specific toolchain with\nx32 enabled here:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang.github.io/releases/tag/x32-toolchain"},"poky-glibc-x86_64-core-image-minimal-x86_64_x32-qemux86-64-toolchain-4.2.sh"),"."),(0,a.kt)("p",null,"It will be necessary to install it in a temporary folder like the steps below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"chmod +x poky-glibc-x86_64-core-image-minimal-x86_64_x32-qemux86-64-toolchain-4.2.sh\npoky-glibc-x86_64-core-image-minimal-x86_64_x32-qemux86-64-toolchain-4.2.sh -y -d /tmp/poky/4.2\n")),(0,a.kt)("p",null,"Following the Erlang/OTP\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/erlang/otp/blob/master/HOWTO/INSTALL-CROSS.md"},"INSTALL-CROSS.md"),"\ndocument, we first need to build a Bootstrap System:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd $ERL_TOP\n./configure --enable-bootstrap-only\nmake\n")),(0,a.kt)("p",null,"Next, we have to source the toolchain environment configurations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},". /tmp/poky/4.2/environment-setup-x86_64_x32-poky-linux-gnux32\n")),(0,a.kt)("p",null,"After sourcering the environment variable, the shell gets configured with some\nextra variables using during the build:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"x86_64-poky-linux-gnux32-gcc -mx32 \\\n -fstack-protector-strong \\\n -O2 -D_FORTIFY_SOURCE=2 -Wformat -Wformat-security -Werror=format-security \\\n --sysroot=/tmp/poky/4.2/sysroots/x86_64_x32-poky-linux-gnux32\n")),(0,a.kt)("p",null,"It's important to not the GCC flag\n",(0,a.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/gcc/x86-Options.html#index-mx32"},"-mx32"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The -mx32 option sets int, long, and pointer types to 32 bits, and generates\ncode for the x86-64 architecture.")),(0,a.kt)("p",null,"Finally, start the second part of Erlang/OTP build, which is the Cross Build:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./configure  $CONFIGURE_FLAGS  --disable-silent-rules --disable-dependency-tracking \\\n    --with-ssl-rpath=no --disable-static  --without-javac --without-dynamic-trace --without-observer --without-odbc\n")),(0,a.kt)("p",null,"Installing the build output and inspecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"erlexec")," binary to see what it\nlooks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make install DESTDIR=/tmp/e\n\nfile /tmp/e/usr/local/lib/erlang/erts-14.0.2/bin/erlexec\nerlexec: ELF 32-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /libx32/ld-linux-x32.so.2, BuildID[sha1]=013e32ef8c57686a59a812ca452f09d677ff8e37, for GNU/Linux 5.15.0, with debug_info, not stripped\n")),(0,a.kt)("p",null,"Well, the build is correct. But I couldn't test this build in my machine."),(0,a.kt)("h2",{id:"enabling-erlang-for-yocto"},"Enabling Erlang for Yocto"),(0,a.kt)("p",null,"In the previous section we just build Erlang/OTP using a toolchain with x32\nsupport. Now, it's time to build Erlang/OTP inside the Yocto project and test\nthe results using qemu instance."),(0,a.kt)("p",null,"Enabling it for Yocto is simple, just adding the follow snippet in your\nlocal.conf file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MACHINE = \"qemux86-64\"\nDEFAULTTUNE = \"x86-64-x32\"\nbaselib = \"${@d.getVar('BASE_LIB:tune-' + (d.getVar('DEFAULTTUNE') or 'INVALID')) or 'lib'}\"\n")),(0,a.kt)("p",null,"Then, building erlang:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bitbake erlang\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For those that want to check all configure and compiler flags, I'm including the\nlinks to those logs:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"pathname:///assets/log.do_configure"},"Configure log output")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"pathname:///assets/log.do_compile"},"Compile log output")))),(0,a.kt)("p",null,"The build failed in one point related to ASM code in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/erlang/otp/blob/maint-26/erts/lib_src/pthread/ethread.c#L193"},"erts/lib_src/pthread/ethread.c"),".\nLooks like an ASM incompatibility issue. In order to address it here is\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/joaohf/otp/commit/6cd15d5888a536af97f5d8e26b2db2e379fa7eab"},"a patch"),"\nthat just adds one more compiler check to pick up the correct ifdef branch."),(0,a.kt)("p",null,"Afer that, the build runs as expected. And testing it using QEMU shows exactly\nwhat I had in mind:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"runqemu core-image-minimal-qemux86-64.ext4 slirp nographic serialstdio\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"check the current kernel")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"root@qemux86-64:~# uname -a\nLinux qemux86-64 6.1.32-yocto-standard #1 SMP PREEMPT_DYNAMIC Mon Jun  5 13:43:33 UTC 2023 x86_64 GNU/Linux\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"check /proc/cpuinfo to see the 'lm' (long mode)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"root@qemux86-64:~# grep -o -w 'lm' /proc/cpuinfo\nlm\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"check Erlang shell")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Erlang/OTP 26 [erts-14.0.2] [source] [32-bit] [smp:4:4] [ds:4:4:10] [async-threads:1]\n\nEshell V14.0.2 (press Ctrl+G to abort, type help(). for help)\n1> application:ensure_all_started(crypto).\n{ok,[crypto]}\n")),(0,a.kt)("p",null,"Well, looks like we are running Erlang/OTP 32-bits in a x86_64 machine. Also, it\nwas able to correct load the crypto (with ssl libraries compiled for x32 too).\nBy the way, there is a second\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/joaohf/otp/commit/e63b5b703ffa0005bf6a8f4d3bcec18f786bda92"},"patch need to proper compile the crypto application"),"."),(0,a.kt)("p",null,"Some raised questions for further investigations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What tests are necessary to prove that the x32 Erlang build is safe ?"),(0,a.kt)("li",{parentName:"ul"},"Are there any other code change in order to fit the x32 build ?"),(0,a.kt)("li",{parentName:"ul"},"Would ",(0,a.kt)("a",{parentName:"li",href:"https://www.erlang.org/doc/apps/erts/beamasm#faq"},"BeamAsm")," be available\nfor x32 ?")))}m.isMDXComponent=!0}}]);