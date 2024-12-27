"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[8385],{9801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"contributing/contributing-meta-erlang","title":"Contributing with meta-erlang","description":"How to contribute with meta-erlang project.","source":"@site/versioned_docs/version-nanbield/contributing/contributing-meta-erlang.md","sourceDirName":"contributing","slug":"/contributing/contributing-meta-erlang","permalink":"/docs/nanbield/contributing/contributing-meta-erlang","draft":false,"unlisted":false,"editUrl":"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-nanbield/contributing/contributing-meta-erlang.md","tags":[],"version":"nanbield","frontMatter":{"description":"How to contribute with meta-erlang project."},"sidebar":"tutorialSidebar","previous":{"title":"Documentation","permalink":"/docs/nanbield/contributing/contributing-doc-site"},"next":{"title":"Thanks","permalink":"/docs/nanbield/thanks"}}');var r=t(4848),a=t(8453);const o={description:"How to contribute with meta-erlang project."},s="Contributing with meta-erlang",l={},c=[{value:"Add a new erlang version",id:"add-a-new-erlang-version",level:2},{value:"Add a new elixir version",id:"add-a-new-elixir-version",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"contributing-with-meta-erlang",children:"Contributing with meta-erlang"})}),"\n",(0,r.jsx)(n.p,{children:"To develop the meta-erlang layer, you need to setup the Yocto project\nenvironment and starting to make changes in meta-erlang code."}),"\n",(0,r.jsx)(n.h2,{id:"add-a-new-erlang-version",children:"Add a new erlang version"}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.a,{href:"https://github.com/erlang/otp",children:"Erlang OTP"})," team releases a new version,\nand you wish to try that version with meta-erlang then you can do the follow\nsteps:"]}),"\n",(0,r.jsx)(n.p,{children:"Run the manifest script to create the bitbake files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"scripts/contrib/erlang/generate-manifest --erlang-version 21.3.2 > recipes-devtools/erlang/erlang-21.3.2-manifest.inc\n"})}),"\n",(0,r.jsx)(n.p,{children:"Copy the erlang recipe to the new version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cp recipes-devtools/erlang/erlang_21.1.0.bb recipes-devtools/erlang/erlang_21.3.2.bb\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create include file to hold the ",(0,r.jsx)(n.code,{children:"SRCREV"})," and point to the git sha1 commit that\nrepresents the Erlang OTP version:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo 'SRCREV = \"7e6fff1e849998a3dd747b4d3cf35f39cb896aa0\"' >> recipes-devtools/erlang/erlang-21.3.2.inc\n"})}),"\n",(0,r.jsx)(n.h2,{id:"add-a-new-elixir-version",children:"Add a new elixir version"}),"\n",(0,r.jsx)(n.p,{children:"Copy the elixir recipe to the new version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cp recipes-devtools/elixir/elixir_1.8.2.bb recipes-devtools/elixir/elixir_1.9.0.bb\n"})}),"\n",(0,r.jsx)(n.p,{children:"Open the elixir_1.9.0.bb and change the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SRCREV"}),": must point to the sha1 commit that represents the new elixir version"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SRC_URL"}),": change the version ('branch=') to the base elixir version branch.\nExample: 'v1.8'"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(6540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);