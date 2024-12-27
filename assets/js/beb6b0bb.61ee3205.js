"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[8834],{6579:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"distro/guides-axon-layer","title":"Axon distro","description":"Using meta-erlang to build a distro made with YP/OE.","source":"@site/docs/distro/guides-axon-layer.md","sourceDirName":"distro","slug":"/distro/guides-axon-layer","permalink":"/docs/master/distro/guides-axon-layer","draft":false,"unlisted":false,"editUrl":"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/docs/distro/guides-axon-layer.md","tags":[],"version":"current","sidebarPosition":5.1,"frontMatter":{"sidebar_position":5.1,"sidebar_label":"Axon","sidebar_class_name":"green","description":"Using meta-erlang to build a distro made with YP/OE."},"sidebar":"tutorialSidebar","previous":{"title":"Distro","permalink":"/docs/master/category/distro"},"next":{"title":"Contributing","permalink":"/docs/master/category/contributing"}}');var t=i(4848),s=i(8453);const o={sidebar_position:5.1,sidebar_label:"Axon",sidebar_class_name:"green",description:"Using meta-erlang to build a distro made with YP/OE."},r="Axon distro",c={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"axon-distro",children:"Axon distro"})}),"\n",(0,t.jsxs)(n.p,{children:["In this guide we are going to use a layer called\n",(0,t.jsx)(n.a,{href:"https://github.com/joaohf/meta-axon",children:"meta-axon"})," to hold:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the\n",(0,t.jsx)(n.a,{href:"https://github.com/joaohf/meta-axon/blob/master/recipes-extended/axon/axon_git.bb",children:"axon"}),"\nrecipe application"]}),"\n",(0,t.jsxs)(n.li,{children:["the\n",(0,t.jsx)(n.a,{href:"https://github.com/joaohf/meta-axon/blob/master/recipes-extended/axon/axon-scenic_git.bb",children:"axon scenic"}),"\nrecipe application"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/joaohf/meta-axon/blob/master/recipes-extended/image/axon-image-minimal.bb",children:"axon-image-minimal"}),",\na basic image to run axon application"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/joaohf/meta-axon/blob/master/recipes-graphics/images/axon-image-x11.bb",children:"axon-image-x11"}),",\na basic image with x11 to run axon scenic demo application"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/joaohf/meta-axon/blob/master/recipes-extended/image/axon-embedded-image-minimal.bb",children:"axon-embedded-image-minimal"}),",\na very basic image with axon application and erlang embedded init script\npackage group, with ",(0,t.jsx)(n.a,{href:"https://github.com/nerves-project/erlinit",children:"erlinit"})," as\nreplacement for '/sbin/init'"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The idea is to show two examples about how to run erlang and elixir\napplications. However this layer is just to demonstration purposes."}),"\n",(0,t.jsx)(n.p,{children:"In order to test the axon layer and build images, the first step is clone the\nlayer repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd $HOME\ngit clone https://github.com/joaohf/meta-axon.git\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, go to the previous build environment directory and add meta-axon to\n'conf/bblayers.conf':"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bitbake-layers add-layer $HOME/meta-axon\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now its time to build the images and runqemu to check the results:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Emebedded erlang application:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bitbake axon-image-minimal\nrunqemu axon-image-minimal\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Embedded elixir application with scenic:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bitbake axon-image-x11\nrunqemu axon-image-x11\n"})}),"\n",(0,t.jsx)(n.p,{children:"The follow screenshot shows a qemu session running axon scenic application:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"scenic inside qemu",src:i(8798).A+"",width:"960",height:"723"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8798:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/axon_scenic_qemu-d9fd59901f8c28b8a5e325fe68a6934c.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var a=i(6540);const t={},s=a.createContext(t);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);