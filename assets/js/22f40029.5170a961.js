"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[5838],{6381:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=s(4848),t=s(8453);const a={sidebar_position:4.9,sidebar_label:"epmd",sidebar_class_name:"green",description:"Shows how to set up and install epmd."},r="epmd",d={id:"applications/guides-epmd",title:"epmd",description:"Shows how to set up and install epmd.",source:"@site/versioned_docs/version-kirkstone/applications/guides-epmd.md",sourceDirName:"applications",slug:"/applications/guides-epmd",permalink:"/docs/kirkstone0/applications/guides-epmd",draft:!1,unlisted:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-kirkstone/applications/guides-epmd.md",tags:[],version:"kirkstone",sidebarPosition:4.9,frontMatter:{sidebar_position:4.9,sidebar_label:"epmd",sidebar_class_name:"green",description:"Shows how to set up and install epmd."},sidebar:"tutorialSidebar",previous:{title:"wings3d",permalink:"/docs/kirkstone0/applications/guides-wings"},next:{title:"Distro",permalink:"/docs/kirkstone0/category/distro"}},o={},l=[];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"epmd",children:"epmd"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://erlang.org/doc/man/epmd.html",children:"Erlang Port Mapper Daemon"})," is a\nstandalone daemon that keeps track of all hosts involved in distributed Erlang\ncomputations. It is a fundamental piece when talking with other Erlang nodes.\nUsually the daemon is started automatically when run ",(0,i.jsx)(n.code,{children:"erl"})," and there is no epmd\ninstance present."]}),"\n",(0,i.jsxs)(n.p,{children:["The recipe\n",(0,i.jsx)(n.a,{href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-core/epmd/epmd.inc",children:"epmd"}),"\nis target to run epmd started by systemd or systemv where additional control and\nconfiguration can be passed to epmd daemon (see the epmd manual pages for\nadditional options). The purpose of the recipe is address some edge cases where\nyou don't want to ship a full ERTS or you have additional patches for the epmd\ndaemon."]}),"\n",(0,i.jsx)(n.p,{children:"Follow the quickstart guide to get a basic working environment and then:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"epmd"})," package to ",(0,i.jsx)(n.code,{children:"IMAGE_INSTAL"})," in ",(0,i.jsx)(n.em,{children:"conf/local.conf"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo 'IMAGE_INSTALL:append = \" epmd\"' >> conf/local.conf\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Now its time to build the image:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bitbake core-image-minimal\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"And check the results with qemu:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"runqemu core-image-minimal\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Check if ",(0,i.jsx)(n.code,{children:"epmd"})," is up and running:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ps | grep epmd\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, start erl with distributed enabled like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"erl -sname test\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Check again using ",(0,i.jsx)(n.code,{children:"ps"})," and there is still only one epmd daemon running. As the\nfinal check, lets ask epmd if its know any erlang node:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"/usr/sbin/epmd -names\nepmd: up and running on port 4369 with data:\nname test at port 46019\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(6540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);