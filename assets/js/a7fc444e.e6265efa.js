"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[4927],{4065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var r=n(6999),o=n(4848),a=n(8453);const i={title:"Exploring x32 psABI for Erlang/OTP",authors:["joaohf"],tags:["meta-erlang","x32"]},s=void 0,l={authorsImageUrls:[void 0]},p=[{value:"Intro",id:"intro",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsxs)(t.p,{children:["According to ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/X32_ABI",children:"Wikipedia X32 ABI"})," page:"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"The x32 ABI is an application binary interface (ABI) and one of the interfaces\nof the Linux kernel. The x32 ABI provides 32-bit integers, long and pointers\n(ILP32) on Intel and AMD 64-bit hardware. The ABI allows programs to take\nadvantage of the benefits of x86-64 instruction set (larger number of CPU\nregisters, better floating-point performance, faster position-independent\ncode, shared libraries, function parameters passed via registers, faster\nsyscall instruction) while using 32-bit pointers and thus avoiding the\noverhead of 64-bit pointers."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"So, I'm wondering if it would be possible to enable x32 support in Erlang/OTP\nbuild. That way, I could make a Yocto image for x32 that runs on x86-64\nmachines."})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(6540);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}},6999:e=>{e.exports=JSON.parse('{"permalink":"/blog/2023/09/02/index","editUrl":"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/blog/2023-09-02/index.md","source":"@site/blog/2023-09-02/index.md","title":"Exploring x32 psABI for Erlang/OTP","description":"Intro","date":"2023-09-02T00:00:00.000Z","tags":[{"inline":true,"label":"meta-erlang","permalink":"/blog/tags/meta-erlang"},{"inline":true,"label":"x32","permalink":"/blog/tags/x-32"}],"readingTime":3.88,"hasTruncateMarker":true,"authors":[{"name":"Jo\xe3o Henrique Ferreira de Freitas","title":"Maintainer of meta-erlang","url":"https://github.com/joaohf","imageURL":"https://github.com/joaohf.png","key":"joaohf","page":null}],"frontMatter":{"title":"Exploring x32 psABI for Erlang/OTP","authors":["joaohf"],"tags":["meta-erlang","x32"]},"unlisted":false,"prevItem":{"title":"meta-erlang meets atomvm","permalink":"/blog/2023/11/02/index"},"nextItem":{"title":"New Erlang releases 24.3.4.13, 25.3.2.3, 26.0.2","permalink":"/blog/2023/07/01/index"}}')}}]);