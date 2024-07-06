"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[1920],{5788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>d});var n=a(1504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(a),m=r,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return a?n.createElement(d,l(l({ref:t},s),{},{components:a})):n.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8944:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(5072),r=(a(1504),a(5788));const o={sidebar_position:2,sidebar_label:"Quickstart",sidebar_class_name:"green",description:"Getting start with meta-erlang."},l="Quickstart",i={unversionedId:"guides-quickstart",id:"guides-quickstart",title:"Quickstart",description:"Getting start with meta-erlang.",source:"@site/docs/guides-quickstart.md",sourceDirName:".",slug:"/guides-quickstart",permalink:"/docs/guides-quickstart",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/docs/guides-quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Quickstart",sidebar_class_name:"green",description:"Getting start with meta-erlang."},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Guides",permalink:"/docs/category/guides"}},c={},p=[],s={toc:p},g="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"quickstart"},"Quickstart"),(0,r.yg)("p",null,"This quickstart guide uses the same steps stated at\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html"},"Yocto Project Quick Build"),"\nwith additional steps to get an erlang runtime up and running on the target\ndevice."),(0,r.yg)("p",null,"Clone ",(0,r.yg)("em",{parentName:"p"},"meta-erlang")," and checkout branch ",(0,r.yg)("em",{parentName:"p"},"master"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone --branch master https://github.com/meta-erlang/meta-erlang.git\n")),(0,r.yg)("p",null,"Clone ",(0,r.yg)("em",{parentName:"p"},"poky")," and checkout branch ",(0,r.yg)("em",{parentName:"p"},"master"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone --branch master git://git.yoctoproject.org/poky\n")),(0,r.yg)("p",null,"Clone ",(0,r.yg)("em",{parentName:"p"},"meta-openembedded")," and checkout branch ",(0,r.yg)("em",{parentName:"p"},"master"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone --branch master https://github.com/openembedded/meta-openembedded.git\n")),(0,r.yg)("p",null,"Move to ",(0,r.yg)("em",{parentName:"p"},"poky")," directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd poky\n")),(0,r.yg)("p",null,"Initialize the build environment:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"source oe-init-build-env ../build\n")),(0,r.yg)("p",null,"Add ",(0,r.yg)("em",{parentName:"p"},"meta-oe")," and ",(0,r.yg)("em",{parentName:"p"},"meta-erlang")," to ",(0,r.yg)("em",{parentName:"p"},"conf/layer.conf"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bitbake-layers add-layer ../meta-openembedded/meta-oe\nbitbake-layers add-layer ../meta-erlang\n")),(0,r.yg)("p",null,"Add ",(0,r.yg)("inlineCode",{parentName:"p"},"erlang")," package to ",(0,r.yg)("inlineCode",{parentName:"p"},"IMAGE_INSTALL")," in ",(0,r.yg)("em",{parentName:"p"},"conf/local.conf")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"echo 'IMAGE_INSTALL:append = \" erlang\"' >> conf/local.conf\n")),(0,r.yg)("p",null,"Build the ",(0,r.yg)("em",{parentName:"p"},"core-image-minimal"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bitbake core-image-minimal\n")),(0,r.yg)("p",null,"Run the qemu:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"runqemu qemux86-64\n")),(0,r.yg)("p",null,"A new window will open. Login as ",(0,r.yg)("em",{parentName:"p"},"root")," and call ",(0,r.yg)("em",{parentName:"p"},"erl"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# erl\nErlang/OTP 25 [erts-13.2.2.5] [source] [64-bit] [smp:4:4] [ds:4:4:10] [async-threads:1] [jit:ns]\n\nEshell V13.2.2.5  (abort with ^G)\n1> erlang:system_info(cpu_topology).\n[{processor,[{core,{logical,0}},\n             {core,{logical,1}},\n             {core,{logical,2}},\n             {core,{logical,3}}]}]\n")),(0,r.yg)("p",null,"The other sections of this guide shows additional steps to create your own\nerlang application and run inside a custom image."))}u.isMDXComponent=!0}}]);