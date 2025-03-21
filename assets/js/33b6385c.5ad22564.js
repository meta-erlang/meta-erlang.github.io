"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[8592],{68636:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"applications/guides-riak","title":"riak","description":"Shows how to set up and install riak.","source":"@site/versioned_docs/version-kirkstone/applications/guides-riak.md","sourceDirName":"applications","slug":"/applications/guides-riak","permalink":"/docs/kirkstone0/applications/guides-riak","draft":false,"unlisted":false,"editUrl":"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-kirkstone/applications/guides-riak.md","tags":[],"version":"kirkstone","sidebarPosition":4.2,"frontMatter":{"sidebar_position":4.2,"sidebar_label":"riak","sidebar_class_name":"green","description":"Shows how to set up and install riak."},"sidebar":"tutorialSidebar","previous":{"title":"rabbitmq","permalink":"/docs/kirkstone0/applications/guides-rabbitmq"},"next":{"title":"ejabberd","permalink":"/docs/kirkstone0/applications/guides-ejabberd"}}');var s=n(74848),t=n(28453);const a={sidebar_position:4.2,sidebar_label:"riak",sidebar_class_name:"green",description:"Shows how to set up and install riak."},l="riak",o={},c=[];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"riak",children:"riak"})}),"\n",(0,s.jsxs)(i.admonition,{type:"info",children:[(0,s.jsx)(i.p,{children:"Recommended PREFERRED_VERSION for riak:"}),(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"riak"}),(0,s.jsx)(i.th,{children:"Erlang/OTP"}),(0,s.jsx)(i.th,{children:"Elixir"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"3.0.1"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]})})]})]}),"\n",(0,s.jsxs)(i.p,{children:["In this guide we are using the plain meta-erlang layer to build the\n",(0,s.jsx)(i.a,{href:"http://www.riak.info",children:"riak"}),". The recipe\n",(0,s.jsx)(i.a,{href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-database/riak/riak.inc",children:"riak.inc"}),"\nbuilds the riak using a crosscompile approach."]}),"\n",(0,s.jsx)(i.p,{children:"As the final result, we will be able to run an embedded riak using qemu."}),"\n",(0,s.jsx)(i.p,{children:"Follow the quickstart guide to get a basic working environment and then:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Add erlang preferred version 25.x in ",(0,s.jsx)(i.em,{children:"conf/local.conf"})," (check the full list of\nErlang supported versions here\n",(0,s.jsx)(i.a,{href:"https://github.com/basho/riak/blob/riak-3.2.0/RELEASE-NOTES.md",children:"Riak KV 3.2.0 Release Notes"}),")"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:'PREFERRED_VERSION_erlang = "25%"\nPREFERRED_VERSION_erlang-native = "25%"\n'})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Append ",(0,s.jsx)(i.code,{children:"pam"})," to DISTRO",(0,s.jsx)(i.em,{children:"FEATURES in _conf/local.conf"})," file:"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:'DISTRO_FEATURES += " pam"\n'})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Add ",(0,s.jsx)(i.code,{children:"riak"})," package to ",(0,s.jsx)(i.code,{children:"IMAGE_INSTAL"})," in ",(0,s.jsx)(i.em,{children:"conf/local.conf"})]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:'IMAGE_INSTALL:append = " riak"\n'})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Now its time to build the image:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"bitbake core-image-minimal\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"And check the results with qemu:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:'runqemu core-image-minimal nographic qemuparams="-m 2048"\n'})}),"\n",(0,s.jsxs)(i.p,{children:["The official ",(0,s.jsx)(i.a,{href:"https://www.tiot.jp/riak-docs/riak/kv/3.0.11/",children:"riak documentation"}),"\nhas a specific session about how to perform the initial configuration:\n",(0,s.jsx)(i.a,{href:"https://www.tiot.jp/riak-docs/riak/kv/3.0.11/configuring/basic/",children:"Basic Riak KV Configuration"}),"\n-- I recommend to follow the instructions there."]}),"\n",(0,s.jsx)(i.p,{children:"After the first configuration it is time to start riak. As usual, use systemd or\nsystemv scripts (stop and restart as well) riak:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"/etc/init.d/riak restart"}),", or"]}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"systemctl restart riak"})}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Remember that the main riak entry point is ",(0,s.jsx)(i.em,{children:"/usr/lib/riak/bin/riak"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["To make sure that everything is working properly, follow the guide\n",(0,s.jsx)(i.a,{href:"https://www.tiot.jp/riak-docs/riak/kv/3.0.11/setup/installing/verify/",children:"Verifying a Riak KV Installation"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Soon or later you will end up configuring a cluster. Then following this guide:\n",(0,s.jsx)(i.a,{href:"https://www.tiot.jp/riak-docs/riak/kv/3.0.11/using/running-a-cluster/",children:"Running a Cluster"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var r=n(96540);const s={},t=r.createContext(s);function a(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);