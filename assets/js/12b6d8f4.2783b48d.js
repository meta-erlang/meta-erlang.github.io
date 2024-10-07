"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[4420],{9745:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(4848),t=n(8453);const i={sidebar_position:4.7,sidebar_label:"yaws",sidebar_class_name:"green",description:"Shows how to set up and install yaws."},r="yaws",l={id:"applications/guides-yaws",title:"yaws",description:"Shows how to set up and install yaws.",source:"@site/versioned_docs/version-kirkstone/applications/guides-yaws.md",sourceDirName:"applications",slug:"/applications/guides-yaws",permalink:"/docs/kirkstone0/applications/guides-yaws",draft:!1,unlisted:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-kirkstone/applications/guides-yaws.md",tags:[],version:"kirkstone",sidebarPosition:4.7,frontMatter:{sidebar_position:4.7,sidebar_label:"yaws",sidebar_class_name:"green",description:"Shows how to set up and install yaws."},sidebar:"tutorialSidebar",previous:{title:"tsung",permalink:"/docs/kirkstone0/applications/guides-tsung"},next:{title:"wings3d",permalink:"/docs/kirkstone0/applications/guides-wings"}},o={},c=[];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"yaws",children:"yaws"})}),"\n",(0,a.jsxs)(s.admonition,{type:"info",children:[(0,a.jsx)(s.p,{children:"Recommended PREFERRED_VERSION for yaws:"}),(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"yaws"}),(0,a.jsx)(s.th,{children:"Erlang/OTP"}),(0,a.jsx)(s.th,{children:"Elixir"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"2.1.1"}),(0,a.jsx)(s.td,{children:"25.3%"}),(0,a.jsx)(s.td,{children:"-"})]})})]})]}),"\n",(0,a.jsxs)(s.p,{children:["In this guide we are using the plain meta-erlang layer to build an httpd\nwebserver called ",(0,a.jsx)(s.a,{href:"http://yaws.hyber.org/",children:"Yaws"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["The recipe\n",(0,a.jsx)(s.a,{href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-httpd/yaws/yaws_2.0.7.bb",children:"yaws_2.0.7.bb"}),"\nbuilds the Yaws using a crosscompile approach both to erlang and C. Yaws uses\nthe autoconf build environment making the whole process straightforward when\ncreating the recipe."]}),"\n",(0,a.jsx)(s.p,{children:"As a final result, we are able to run a standalone Yams using qemu. In fact,\nYaws recipe is only useful when working with standalone mode (see Yaws website).\nYaws also supports an embedded mode but usually that should be integrate with an\nhigh order application."}),"\n",(0,a.jsx)(s.p,{children:"Follow the quickstart guide to get a basic working environment and then:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Add ",(0,a.jsx)(s.code,{children:"yaws"})," package to ",(0,a.jsx)(s.code,{children:"IMAGE_INSTAL"})," in ",(0,a.jsx)(s.em,{children:"conf/local.conf"})]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"echo 'IMAGE_INSTALL:append = \" yaws\"' >> conf/local.conf\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["There is a package called ",(0,a.jsx)(s.code,{children:"yaws-examples"})," that adds code and examples. This is\nan optional step"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"echo 'IMAGE_INSTALL:append = \" yaws yaws-examples\"' >> conf/local.conf\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Now it's time to build the image:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"bitbake core-image-minimal\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"And check the results with qemu:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"runqemu core-image-minimal\n"})}),"\n",(0,a.jsxs)(s.p,{children:["To start ",(0,a.jsx)(s.code,{children:"yaws"}),", there are two options:"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Using systemv or systemd script"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"# systemv\n/etc/init.d/yaws\n# systemd\nsystemctl start yaws\n"})}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsx)(s.li,{children:"Call the yaws help scripts to start the webserver:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"/usr/bin/yaws\n"})}),"\n",(0,a.jsx)(s.p,{children:"After that, from your host environment, you can access the webserver reaching\none of the two endpoints available:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"http://192.168.7.2:8000",children:"http://192.168.7.2:8000"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://192.168.7.2:8443",children:"https://192.168.7.2:8443"})}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Yaws, is a webserver totally functional and ready to create great applications.\nThe ",(0,a.jsx)(s.a,{href:"http://yaws.hyber.org/",children:"Yaws website"})," has a lot of high quality\ninformation."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var a=n(6540);const t={},i=a.createContext(t);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);