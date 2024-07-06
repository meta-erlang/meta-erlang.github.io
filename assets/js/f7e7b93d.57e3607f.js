"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[7180],{5788:(e,r,t)=>{t.d(r,{Iu:()=>d,yg:()=>y});var n=t(1504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),g=a,y=p["".concat(u,".").concat(g)]||p[g]||c[g]||i;return t?n.createElement(y,o(o({ref:r},d),{},{components:t})):n.createElement(y,o({ref:r},d))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9292:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(5072),a=(t(1504),t(5788));const i={sidebar_position:1,sidebar_label:"Introduction",sidebar_class_name:"green",slug:"/",description:"meta-erlang introduction and what it can do for you."},o="Introduction",l={unversionedId:"intro",id:"version-scarthgap/intro",title:"Introduction",description:"meta-erlang introduction and what it can do for you.",source:"@site/versioned_docs/version-scarthgap/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/scarthgap/",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-scarthgap/intro.md",tags:[],version:"scarthgap",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",sidebar_class_name:"green",slug:"/",description:"meta-erlang introduction and what it can do for you."},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/docs/scarthgap/guides-quickstart"}},u={},s=[{value:"What is aim for ?",id:"what-is-aim-for-",level:2},{value:"What can I do with meta-erlang ?",id:"what-can-i-do-with-meta-erlang-",level:2},{value:"Recipes included in this layer",id:"recipes-included-in-this-layer",level:2},{value:"Support",id:"support",level:2}],d={toc:s},p="wrapper";function c(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.c)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"introduction"},"Introduction"),(0,a.yg)("h2",{id:"what-is-aim-for-"},"What is aim for ?"),(0,a.yg)("p",null,"meta-erlang is a\n",(0,a.yg)("a",{parentName:"p",href:"https://www.yoctoproject.org/software-overview/layers/"},"Yocto Project/Openembedded layer"),"\nthat enables developing ",(0,a.yg)("a",{parentName:"p",href:"https://www.erlang.org"},"Erlang")," and\n",(0,a.yg)("a",{parentName:"p",href:"https://elixir-lang.org/"},"Elixir")," applications on embedded Linux development\ncontext."),(0,a.yg)("p",null,"The target users are those that already know or desire to use YP/OE in order to\nbuild their software and application using Erlang/Elixir for embedded Linux\nprojects."),(0,a.yg)("p",null,"You can build easily any Erlang and Elixir projects based on rebar2, rebar3,\nerlang.mk, mix and autotools."),(0,a.yg)("h2",{id:"what-can-i-do-with-meta-erlang-"},"What can I do with meta-erlang ?"),(0,a.yg)("p",null,"Some ideas:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Build your own Yocto Project based Linux distro with Erlang/Elixir inside"),(0,a.yg)("li",{parentName:"ul"},"Create a hardware appliance product with Erlang/Elixir embedded software where\nyou have the full control of all components"),(0,a.yg)("li",{parentName:"ul"},"Create a virtual appliance product with Erlang/Elixir embedded software on any\nCloud service provider"),(0,a.yg)("li",{parentName:"ul"},"Enables the possibility to install and run BEAM based application on embedded\nHardwares"),(0,a.yg)("li",{parentName:"ul"},"Fine tune configurations and options when building Linux distro for embedded\nor cloud usage"),(0,a.yg)("li",{parentName:"ul"},"Test and develop patches for Erlang and Elixir targeting Linux"),(0,a.yg)("li",{parentName:"ul"},"Create your own build dependency tarball with having Erlang and Elixir ready\nto use.")),(0,a.yg)("h2",{id:"recipes-included-in-this-layer"},"Recipes included in this layer"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"livebook"),(0,a.yg)("li",{parentName:"ul"},"VerneMQ"),(0,a.yg)("li",{parentName:"ul"},"Tsung"),(0,a.yg)("li",{parentName:"ul"},"Yaws"),(0,a.yg)("li",{parentName:"ul"},"EMQX"),(0,a.yg)("li",{parentName:"ul"},"Ejabberd"),(0,a.yg)("li",{parentName:"ul"},"Rabbitmq"),(0,a.yg)("li",{parentName:"ul"},"Riak"),(0,a.yg)("li",{parentName:"ul"},"Couchdb"),(0,a.yg)("li",{parentName:"ul"},"Wings3d"),(0,a.yg)("li",{parentName:"ul"},"epmd"),(0,a.yg)("li",{parentName:"ul"},"Erlang"),(0,a.yg)("li",{parentName:"ul"},"Elixir")),(0,a.yg)("p",null,"Checkout all recipes from this layer\n",(0,a.yg)("a",{parentName:"p",href:"https://layers.openembedded.org/layerindex/branch/master/layer/meta-erlang/"},"here"),"."),(0,a.yg)("h2",{id:"support"},"Support"),(0,a.yg)("p",null,"Feel free to open issues and feature requests. As well pull requests."))}c.isMDXComponent=!0}}]);