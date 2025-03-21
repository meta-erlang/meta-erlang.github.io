"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[1784],{37257:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"guides-quickstart","title":"Quickstart","description":"Getting start with meta-erlang.","source":"@site/versioned_docs/version-scarthgap/guides-quickstart.md","sourceDirName":".","slug":"/guides-quickstart","permalink":"/docs/scarthgap/guides-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-scarthgap/guides-quickstart.md","tags":[],"version":"scarthgap","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Quickstart","sidebar_class_name":"green","description":"Getting start with meta-erlang."},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/scarthgap/"},"next":{"title":"Guides","permalink":"/docs/scarthgap/category/guides"}}');var t=a(74848),r=a(28453);const c={sidebar_position:2,sidebar_label:"Quickstart",sidebar_class_name:"green",description:"Getting start with meta-erlang."},i="Quickstart",o={},l=[];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,t.jsxs)(n.p,{children:["This quickstart guide uses the same steps stated at\n",(0,t.jsx)(n.a,{href:"https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html",children:"Yocto Project Quick Build"}),"\nwith additional steps to get an erlang runtime up and running on the target\ndevice."]}),"\n",(0,t.jsxs)(n.p,{children:["Clone ",(0,t.jsx)(n.em,{children:"meta-erlang"})," and checkout branch ",(0,t.jsx)(n.em,{children:"scarthgap"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone --branch scarthgap https://github.com/meta-erlang/meta-erlang.git\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Clone ",(0,t.jsx)(n.em,{children:"poky"})," and checkout branch ",(0,t.jsx)(n.em,{children:"scarthgap"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone --branch scarthgap git://git.yoctoproject.org/poky\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Clone ",(0,t.jsx)(n.em,{children:"meta-openembedded"})," and checkout branch ",(0,t.jsx)(n.em,{children:"scarthgap"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone --branch scarthgap https://github.com/openembedded/meta-openembedded.git\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Move to ",(0,t.jsx)(n.em,{children:"poky"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd poky\n"})}),"\n",(0,t.jsx)(n.p,{children:"Initialize the build environment:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source oe-init-build-env ../build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.em,{children:"meta-oe"})," and ",(0,t.jsx)(n.em,{children:"meta-erlang"})," to ",(0,t.jsx)(n.em,{children:"conf/layer.conf"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bitbake-layers add-layer ../meta-openembedded/meta-oe\nbitbake-layers add-layer ../meta-erlang\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"erlang"})," package to ",(0,t.jsx)(n.code,{children:"IMAGE_INSTALL"})," in ",(0,t.jsx)(n.em,{children:"conf/local.conf"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo 'IMAGE_INSTALL:append = \" erlang\"' >> conf/local.conf\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Build the ",(0,t.jsx)(n.em,{children:"core-image-minimal"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bitbake core-image-minimal\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run the qemu:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"runqemu qemux86-64\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A new window will open. Login as ",(0,t.jsx)(n.em,{children:"root"})," and call ",(0,t.jsx)(n.em,{children:"erl"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# erl\nErlang/OTP 25 [erts-13.2.2.5] [source] [64-bit] [smp:4:4] [ds:4:4:10] [async-threads:1] [jit:ns]\n\nEshell V13.2.2.5  (abort with ^G)\n1> erlang:system_info(cpu_topology).\n[{processor,[{core,{logical,0}},\n             {core,{logical,1}},\n             {core,{logical,2}},\n             {core,{logical,3}}]}]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The other sections of this guide shows additional steps to create your own\nerlang application and run inside a custom image."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>i});var s=a(96540);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);