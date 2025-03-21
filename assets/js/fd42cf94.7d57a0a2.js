"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[5367],{94183:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"guides-quickstart","title":"Quickstart","description":"Getting start with meta-erlang.","source":"@site/versioned_docs/version-kirkstone/guides-quickstart.md","sourceDirName":".","slug":"/guides-quickstart","permalink":"/docs/kirkstone0/guides-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-kirkstone/guides-quickstart.md","tags":[],"version":"kirkstone","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Quickstart","sidebar_class_name":"green","description":"Getting start with meta-erlang."},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/kirkstone0/"},"next":{"title":"Guides","permalink":"/docs/kirkstone0/category/guides"}}');var r=s(74848),i=s(28453);const a={sidebar_position:2,sidebar_label:"Quickstart",sidebar_class_name:"green",description:"Getting start with meta-erlang."},c="Quickstart",o={},d=[];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,r.jsxs)(n.p,{children:["This quickstart guide uses the same steps stated at\n",(0,r.jsx)(n.a,{href:"https://docs.yoctoproject.org/brief-yoctoprojectqs/brief-yoctoprojectqs.html",children:"Yocto Project Quick Build"}),"\nwith additional steps to get an erlang runtime up and running on the target\ndevice."]}),"\n",(0,r.jsxs)(n.p,{children:["Clone ",(0,r.jsx)(n.em,{children:"meta-erlang"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/meta-erlang/meta-erlang.git\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Clone ",(0,r.jsx)(n.em,{children:"poky"})," and checkout branch ",(0,r.jsx)(n.em,{children:"kirkstone"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone --branch kirkstone git://git.yoctoproject.org/poky\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Clone ",(0,r.jsx)(n.em,{children:"meta-openembedded"})," and checkout branch ",(0,r.jsx)(n.em,{children:"kirkstone"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone --branch kirkstone https://github.com/openembedded/meta-openembedded.git\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Move to ",(0,r.jsx)(n.em,{children:"poky"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd poky\n"})}),"\n",(0,r.jsx)(n.p,{children:"Initialize the build environment:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source oe-init-build-env ../build\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add ",(0,r.jsx)(n.em,{children:"meta-oe"})," and ",(0,r.jsx)(n.em,{children:"meta-erlang"})," to ",(0,r.jsx)(n.em,{children:"conf/layer.conf"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bitbake-layers add-layer ../meta-openembedded/meta-oe\nbitbake-layers add-layer ../meta-erlang\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add ",(0,r.jsx)(n.code,{children:"erlang"})," package to ",(0,r.jsx)(n.code,{children:"IMAGE_INSTAL"})," in ",(0,r.jsx)(n.em,{children:"conf/local.conf"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo 'IMAGE_INSTALL:append = \" erlang\"' >> conf/local.conf\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Build the ",(0,r.jsx)(n.em,{children:"core-image-minimal"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bitbake core-image-minimal\n"})}),"\n",(0,r.jsx)(n.p,{children:"Run the qemu:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"runqemu qemux86\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A new window will open. Login as ",(0,r.jsx)(n.em,{children:"root"})," and call ",(0,r.jsx)(n.em,{children:"erl"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# erl\nErlang/OTP 21 [erts-10.1] [source] [smp:1:1] [ds:1:1:10] [async-threads:1]\n\nEshell V10.1 (abort with ^G)\n1> erlang:system_info(cpu_topology).\n[{processor,{logical,0}}]\n"})}),"\n",(0,r.jsx)(n.p,{children:"The other sections of this guide shows additional steps to create your own\nerlang application and run inside a custom image."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);