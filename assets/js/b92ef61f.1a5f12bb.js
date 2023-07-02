"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[7828],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:4.8,sidebar_label:"wings3d",sidebar_class_name:"green",description:"Shows how to set up and install wings3d."},o="wings3d",s={unversionedId:"applications/guides-wings",id:"applications/guides-wings",title:"wings3d",description:"Shows how to set up and install wings3d.",source:"@site/docs/applications/guides-wings.md",sourceDirName:"applications",slug:"/applications/guides-wings",permalink:"/docs/applications/guides-wings",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/docs/applications/guides-wings.md",tags:[],version:"current",sidebarPosition:4.8,frontMatter:{sidebar_position:4.8,sidebar_label:"wings3d",sidebar_class_name:"green",description:"Shows how to set up and install wings3d."},sidebar:"tutorialSidebar",previous:{title:"yaws",permalink:"/docs/applications/guides-yaws"},next:{title:"epmd",permalink:"/docs/applications/guides-epmd"}},l={},p=[],c={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wings3d"},"wings3d"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.wings3d.com/"},"Wings3d")," is an modeller software written in Erlang.\nAnd it's possible to run Wings3d on any embedded device using meta-erlang."),(0,a.kt)("p",null,"The recipe\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-extended/wings/wings_git.bb"},"wings_git.bb"),"\nis prepared to build wings. However, an additional configuration is necessary to\nenable wx package from erlang recipes. This is necessary because the wx package\nis disabled by default."),(0,a.kt)("p",null,"So, add the follow configuration in ",(0,a.kt)("em",{parentName:"p"},"conf/local.conf")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'PACKAGECONFIG:append:pn-erlang = " wx"\n')),(0,a.kt)("p",null,"wings runs on X11 environment, because of that the target image have to have all\nthe graphic components in order to run it. There are multiple ways to achieve\nthe requirements and one of them is adding the following configuration in\n",(0,a.kt)("em",{parentName:"p"},"conf/local.conf")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'IMAGE_INSTALL:append:pn-core-image-x11 = " erlang erlang-modules elixir wings"\nIMAGE_INSTALL:append:pn-core-image-sato = " erlang erlang-modules elixir wings"\n\nIMAGE_ROOTFS_EXTRA_SPACE:pn-core-image-x11 = "1048576"\nIMAGE_ROOTFS_EXTRA_SPACE:pn-core-image-sato = "1048576"\n')),(0,a.kt)("p",null,"And, finally building a YP/OE image with X11 support enabled like\n",(0,a.kt)("inlineCode",{parentName:"p"},"core-image-x11")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"core-image-sato"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bitbake core-image-sato\n")),(0,a.kt)("p",null,"As usual, qemu can be used to run and test the results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"runqemu core-image-minimal\n")))}d.isMDXComponent=!0}}]);