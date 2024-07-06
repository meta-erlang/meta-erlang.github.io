"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[112],{5788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>d});var r=t(1504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,d=m["".concat(s,".").concat(u)]||m[u]||g[u]||l;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(5072),a=(t(1504),t(5788));const l={sidebar_position:4.4,sidebar_label:"vernemq",sidebar_class_name:"green",description:"Shows how to set up and install vernemq."},i="vernemq",o={unversionedId:"applications/guides-vernemq",id:"version-scarthgap/applications/guides-vernemq",title:"vernemq",description:"Shows how to set up and install vernemq.",source:"@site/versioned_docs/version-scarthgap/applications/guides-vernemq.md",sourceDirName:"applications",slug:"/applications/guides-vernemq",permalink:"/docs/scarthgap/applications/guides-vernemq",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-scarthgap/applications/guides-vernemq.md",tags:[],version:"scarthgap",sidebarPosition:4.4,frontMatter:{sidebar_position:4.4,sidebar_label:"vernemq",sidebar_class_name:"green",description:"Shows how to set up and install vernemq."},sidebar:"tutorialSidebar",previous:{title:"riak",permalink:"/docs/scarthgap/applications/guides-riak"},next:{title:"tsung",permalink:"/docs/scarthgap/applications/guides-tsung"}},s={},c=[],p={toc:c},m="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"vernemq"},"vernemq"),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Recommended PREFERRED_VERSION for vernemq:"),(0,a.yg)("table",{parentName:"admonition"},(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"vernemq"),(0,a.yg)("th",{parentName:"tr",align:null},"Erlang/OTP"),(0,a.yg)("th",{parentName:"tr",align:null},"Elixir"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.13.0"),(0,a.yg)("td",{parentName:"tr",align:null},"25.3%"),(0,a.yg)("td",{parentName:"tr",align:null},"-"))))),(0,a.yg)("p",null,"In this guide we are using the plain meta-erlang layer to build a\n",(0,a.yg)("a",{parentName:"p",href:"hhttps://vernemq.com/"},"VerneMQ")," MQTT broker."),(0,a.yg)("p",null,"The recipe\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-connectivity/vernemq/vernemq_1.12.5.bb"},"vernemq_1.12.5.bb"),"\nbuilds the vernemq using a crosscompile approach both to erlang and C. A couple\nof patches exist in order to fix cross compilation issues in vernemq project."),(0,a.yg)("p",null,"As a final result, we are able to run an embedded vernemq using qemu."),(0,a.yg)("p",null,"Follow the quickstart guide to get a basic working environment and then:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add erlang preferred version 24.x in ",(0,a.yg)("em",{parentName:"li"},"conf/local.conf"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"echo 'PREFERRED_VERSION_erlang = \"24.3.3\"' >> conf/local.conf\necho 'PREFERRED_VERSION_erlang-native = \"24.3.3\"' >> conf/local.conf\necho 'PREFERRED_VERSION_nativesdk-erlang = \"24.3.3\"' >> conf/local.conf\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"vernemq")," package to ",(0,a.yg)("inlineCode",{parentName:"li"},"IMAGE_INSTAL")," in ",(0,a.yg)("em",{parentName:"li"},"conf/local.conf"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"echo 'IMAGE_INSTALL:append = \" vernemq\"' >> conf/local.conf\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Now it's time to build the image:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bitbake core-image-minimal\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"And check the results with qemu:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"runqemu core-image-minimal\n")),(0,a.yg)("p",null,"By default vernemq starts automatically and can be control using systemctl, like\nthat:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"systemctl start vernemq\n")),(0,a.yg)("p",null,"As vernemq provides its own command line control scripts, it is possible to\ninteract with the vmq-adm and vernemq scripts. But it is necessary to switch to\nthe correct user, like the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"su -s /bin/sh -l vernemq\n")),(0,a.yg)("p",null,"That is necessary because vernemq runs using a system user called ",(0,a.yg)("inlineCode",{parentName:"p"},"vernemq"),"."))}g.isMDXComponent=!0}}]);