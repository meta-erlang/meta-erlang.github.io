"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[6767],{8179:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"applications/guides-vernemq","title":"vernemq","description":"Shows how to set up and install vernemq.","source":"@site/versioned_docs/version-scarthgap/applications/guides-vernemq.md","sourceDirName":"applications","slug":"/applications/guides-vernemq","permalink":"/docs/scarthgap/applications/guides-vernemq","draft":false,"unlisted":false,"editUrl":"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-scarthgap/applications/guides-vernemq.md","tags":[],"version":"scarthgap","sidebarPosition":4.4,"frontMatter":{"sidebar_position":4.4,"sidebar_label":"vernemq","sidebar_class_name":"green","description":"Shows how to set up and install vernemq."},"sidebar":"tutorialSidebar","previous":{"title":"riak","permalink":"/docs/scarthgap/applications/guides-riak"},"next":{"title":"tsung","permalink":"/docs/scarthgap/applications/guides-tsung"}}');var i=s(4848),t=s(8453);const a={sidebar_position:4.4,sidebar_label:"vernemq",sidebar_class_name:"green",description:"Shows how to set up and install vernemq."},c="vernemq",l={},o=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"vernemq",children:"vernemq"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"Recommended PREFERRED_VERSION for vernemq:"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"vernemq"}),(0,i.jsx)(n.th,{children:"Erlang/OTP"}),(0,i.jsx)(n.th,{children:"Elixir"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1.13.0"}),(0,i.jsx)(n.td,{children:"25.3%"}),(0,i.jsx)(n.td,{children:"-"})]})})]})]}),"\n",(0,i.jsxs)(n.p,{children:["In this guide we are using the plain meta-erlang layer to build a\n",(0,i.jsx)(n.a,{href:"hhttps://vernemq.com/",children:"VerneMQ"})," MQTT broker."]}),"\n",(0,i.jsxs)(n.p,{children:["The recipe\n",(0,i.jsx)(n.a,{href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-connectivity/vernemq/vernemq_1.12.5.bb",children:"vernemq_1.12.5.bb"}),"\nbuilds the vernemq using a crosscompile approach both to erlang and C. A couple\nof patches exist in order to fix cross compilation issues in vernemq project."]}),"\n",(0,i.jsx)(n.p,{children:"As a final result, we are able to run an embedded vernemq using qemu."}),"\n",(0,i.jsx)(n.p,{children:"Follow the quickstart guide to get a basic working environment and then:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add erlang preferred version 24.x in ",(0,i.jsx)(n.em,{children:"conf/local.conf"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo 'PREFERRED_VERSION_erlang = \"24.3.3\"' >> conf/local.conf\necho 'PREFERRED_VERSION_erlang-native = \"24.3.3\"' >> conf/local.conf\necho 'PREFERRED_VERSION_nativesdk-erlang = \"24.3.3\"' >> conf/local.conf\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"vernemq"})," package to ",(0,i.jsx)(n.code,{children:"IMAGE_INSTAL"})," in ",(0,i.jsx)(n.em,{children:"conf/local.conf"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo 'IMAGE_INSTALL:append = \" vernemq\"' >> conf/local.conf\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Now it's time to build the image:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bitbake core-image-minimal\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"And check the results with qemu:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"runqemu core-image-minimal\n"})}),"\n",(0,i.jsx)(n.p,{children:"By default vernemq starts automatically and can be control using systemctl, like\nthat:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"systemctl start vernemq\n"})}),"\n",(0,i.jsx)(n.p,{children:"As vernemq provides its own command line control scripts, it is possible to\ninteract with the vmq-adm and vernemq scripts. But it is necessary to switch to\nthe correct user, like the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"su -s /bin/sh -l vernemq\n"})}),"\n",(0,i.jsxs)(n.p,{children:["That is necessary because vernemq runs using a system user called ",(0,i.jsx)(n.code,{children:"vernemq"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var r=s(6540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);