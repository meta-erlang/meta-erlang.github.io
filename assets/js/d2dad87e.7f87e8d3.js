"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[9140],{5788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>d});var a=t(1504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(t),m=r,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return t?a.createElement(d,i(i({ref:n},s),{},{components:t})):a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(5072),r=(t(1504),t(5788));const o={sidebar_position:2,sidebar_label:"Quickstart",sidebar_class_name:"green",description:"Getting start with meta-erlang."},i="Quickstart",l={unversionedId:"guides-quickstart",id:"version-nanbield/guides-quickstart",title:"Quickstart",description:"Getting start with meta-erlang.",source:"@site/versioned_docs/version-nanbield/guides-quickstart.md",sourceDirName:".",slug:"/guides-quickstart",permalink:"/docs/nanbield/guides-quickstart",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-nanbield/guides-quickstart.md",tags:[],version:"nanbield",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Quickstart",sidebar_class_name:"green",description:"Getting start with meta-erlang."},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/nanbield/"},next:{title:"Guides",permalink:"/docs/nanbield/category/guides"}},c={},p=[],s={toc:p},g="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"quickstart"},"Quickstart"),(0,r.yg)("p",null,"This quickstart guide uses the same steps stated at\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html"},"Yocto Project Quick Build"),"\nwith additional steps to get an erlang runtime up and running on the target\ndevice."),(0,r.yg)("p",null,"Clone ",(0,r.yg)("em",{parentName:"p"},"meta-erlang")," and checkout branch ",(0,r.yg)("em",{parentName:"p"},"nanbield"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone --branch nanbield https://github.com/meta-erlang/meta-erlang.git\n")),(0,r.yg)("p",null,"Clone ",(0,r.yg)("em",{parentName:"p"},"poky")," and checkout branch ",(0,r.yg)("em",{parentName:"p"},"nanbield"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone --branch nanbield git://git.yoctoproject.org/poky\n")),(0,r.yg)("p",null,"Clone ",(0,r.yg)("em",{parentName:"p"},"meta-openembedded")," and checkout branch ",(0,r.yg)("em",{parentName:"p"},"nanbield"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone --branch nanbield https://github.com/openembedded/meta-openembedded.git\n")),(0,r.yg)("p",null,"Move to ",(0,r.yg)("em",{parentName:"p"},"poky")," directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd poky\n")),(0,r.yg)("p",null,"Initialize the build environment:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"source oe-init-build-env ../build\n")),(0,r.yg)("p",null,"Add ",(0,r.yg)("em",{parentName:"p"},"meta-oe")," and ",(0,r.yg)("em",{parentName:"p"},"meta-erlang")," to ",(0,r.yg)("em",{parentName:"p"},"conf/layer.conf"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bitbake-layers add-layer ../meta-openembedded/meta-oe\nbitbake-layers add-layer ../meta-erlang\n")),(0,r.yg)("p",null,"Add ",(0,r.yg)("inlineCode",{parentName:"p"},"erlang")," package to ",(0,r.yg)("inlineCode",{parentName:"p"},"IMAGE_INSTALL")," in ",(0,r.yg)("em",{parentName:"p"},"conf/local.conf")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"echo 'IMAGE_INSTALL:append = \" erlang\"' >> conf/local.conf\n")),(0,r.yg)("p",null,"Build the ",(0,r.yg)("em",{parentName:"p"},"core-image-minimal"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bitbake core-image-minimal\n")),(0,r.yg)("p",null,"Run the qemu:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"runqemu qemux86-64\n")),(0,r.yg)("p",null,"A new window will open. Login as ",(0,r.yg)("em",{parentName:"p"},"root")," and call ",(0,r.yg)("em",{parentName:"p"},"erl"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# erl\nErlang/OTP 25 [erts-13.2.2.5] [source] [64-bit] [smp:4:4] [ds:4:4:10] [async-threads:1] [jit:ns]\n\nEshell V13.2.2.5  (abort with ^G)\n1> erlang:system_info(cpu_topology).\n[{processor,[{core,{logical,0}},\n             {core,{logical,1}},\n             {core,{logical,2}},\n             {core,{logical,3}}]}]\n")),(0,r.yg)("p",null,"The other sections of this guide shows additional steps to create your own\nerlang application and run inside a custom image."))}u.isMDXComponent=!0}}]);