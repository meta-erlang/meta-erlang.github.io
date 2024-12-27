"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[4668],{4656:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"applications/guides-wings","title":"wings3d","description":"Shows how to set up and install wings3d.","source":"@site/versioned_docs/version-scarthgap/applications/guides-wings.md","sourceDirName":"applications","slug":"/applications/guides-wings","permalink":"/docs/scarthgap/applications/guides-wings","draft":false,"unlisted":false,"editUrl":"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-scarthgap/applications/guides-wings.md","tags":[],"version":"scarthgap","sidebarPosition":4.8,"frontMatter":{"sidebar_position":4.8,"sidebar_label":"wings3d","sidebar_class_name":"green","description":"Shows how to set up and install wings3d."},"sidebar":"tutorialSidebar","previous":{"title":"yaws","permalink":"/docs/scarthgap/applications/guides-yaws"},"next":{"title":"epmd","permalink":"/docs/scarthgap/applications/guides-epmd"}}');var t=i(4848),a=i(8453);const r={sidebar_position:4.8,sidebar_label:"wings3d",sidebar_class_name:"green",description:"Shows how to set up and install wings3d."},o="wings3d",d={},c=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"wings3d",children:"wings3d"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"Recommended PREFERRED_VERSION for wings:"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"wings"}),(0,t.jsx)(n.th,{children:"Erlang/OTP"}),(0,t.jsx)(n.th,{children:"Elixir"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2.2.9"}),(0,t.jsx)(n.td,{children:"25.3%"}),(0,t.jsx)(n.td,{children:"-"})]})})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"http://www.wings3d.com/",children:"Wings3d"})," is an modeller software written in Erlang.\nAnd it's possible to run Wings3d on any embedded device using meta-erlang."]}),"\n",(0,t.jsxs)(n.p,{children:["The recipe\n",(0,t.jsx)(n.a,{href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-extended/wings/wings_git.bb",children:"wings_git.bb"}),"\nis prepared to build wings. However, an additional configuration is necessary to\nenable wx package from erlang recipes. This is necessary because the wx package\nis disabled by default."]}),"\n",(0,t.jsxs)(n.p,{children:["So, add the follow configuration in ",(0,t.jsx)(n.em,{children:"conf/local.conf"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'PACKAGECONFIG:append:pn-erlang = " wx"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["wings runs on X11 environment, because of that the target image have to have all\nthe graphic components in order to run it. There are multiple ways to achieve\nthe requirements and one of them is adding the following configuration in\n",(0,t.jsx)(n.em,{children:"conf/local.conf"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'IMAGE_INSTALL:append:pn-core-image-x11 = " erlang erlang-modules elixir wings"\nIMAGE_INSTALL:append:pn-core-image-sato = " erlang erlang-modules elixir wings"\n\nIMAGE_ROOTFS_EXTRA_SPACE:pn-core-image-x11 = "1048576"\nIMAGE_ROOTFS_EXTRA_SPACE:pn-core-image-sato = "1048576"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["And, finally building a YP/OE image with X11 support enabled like\n",(0,t.jsx)(n.code,{children:"core-image-x11"})," or ",(0,t.jsx)(n.code,{children:"core-image-sato"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"bitbake core-image-sato\n"})}),"\n",(0,t.jsx)(n.p,{children:"As usual, qemu can be used to run and test the results:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"runqemu core-image-sato\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);