"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[6018],{6582:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(4848),s=a(8453);const i={sidebar_position:4.5,sidebar_label:"ejabberd",sidebar_class_name:"green",description:"Shows how to set up and install ejabberd."},t="ejabberd",o={id:"applications/guides-ejabberd",title:"ejabberd",description:"Shows how to set up and install ejabberd.",source:"@site/versioned_docs/version-kirkstone/applications/guides-ejabberd.md",sourceDirName:"applications",slug:"/applications/guides-ejabberd",permalink:"/docs/kirkstone0/applications/guides-ejabberd",draft:!1,unlisted:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-kirkstone/applications/guides-ejabberd.md",tags:[],version:"kirkstone",sidebarPosition:4.5,frontMatter:{sidebar_position:4.5,sidebar_label:"ejabberd",sidebar_class_name:"green",description:"Shows how to set up and install ejabberd."},sidebar:"tutorialSidebar",previous:{title:"riak",permalink:"/docs/kirkstone0/applications/guides-riak"},next:{title:"tsung",permalink:"/docs/kirkstone0/applications/guides-tsung"}},d={},l=[];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ejabberd",children:"ejabberd"})}),"\n",(0,r.jsxs)(n.p,{children:["In this guide we are using the plain meta-erlang layer to build a XMPP server\ncalled ",(0,r.jsx)(n.a,{href:"https://www.ejabberd.im/",children:"ejabberd"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The recipe\n",(0,r.jsx)(n.a,{href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-connectivity/ejabberd/ejabberd_20.03.bb",children:"ejabberd_20.03.bb"}),"\nbuilds the ejabberd using a crosscompile approach both to erlang and for the\nvarious Erlang NIFs. ejabberd uses a custom mix between autotools and rebar2.\nBasically rebar needs to know how to use the correct environment variables in\norder to compile all the C code."]}),"\n",(0,r.jsx)(n.p,{children:"As a final result, we are able to run an embedded ejabberd using qemu."}),"\n",(0,r.jsx)(n.p,{children:"Follow the quickstart guide to get a basic working environment and then:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"ejabberd"})," package to ",(0,r.jsx)(n.code,{children:"IMAGE_INSTAL"})," in ",(0,r.jsx)(n.em,{children:"conf/local.conf"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo 'IMAGE_INSTALL:append = \" ejabberd\"' >> conf/local.conf\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Now its time to build the image:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bitbake core-image-minimal\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"And check the results with qemu:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"runqemu core-image-minimal\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Connect to the qemu instance and call the main ejabberd admin tool:\n",(0,r.jsx)(n.code,{children:"ejabberdctl"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The default recipe creates a system user called ",(0,r.jsx)(n.em,{children:"ejabberd"})," by default."]})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>o});var r=a(6540);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);