"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[7486],{5788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>h});var a=t(1504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),g=r,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(5072),r=(t(1504),t(5788));const o={sidebar_position:4.1,sidebar_label:"couchdb",sidebar_class_name:"green",description:"Shows how to set up and install couchdb."},i="couchdb",c={unversionedId:"applications/guides-couchdb",id:"version-scarthgap/applications/guides-couchdb",title:"couchdb",description:"Shows how to set up and install couchdb.",source:"@site/versioned_docs/version-scarthgap/applications/guides-couchdb.md",sourceDirName:"applications",slug:"/applications/guides-couchdb",permalink:"/docs/scarthgap/applications/guides-couchdb",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-scarthgap/applications/guides-couchdb.md",tags:[],version:"scarthgap",sidebarPosition:4.1,frontMatter:{sidebar_position:4.1,sidebar_label:"couchdb",sidebar_class_name:"green",description:"Shows how to set up and install couchdb."},sidebar:"tutorialSidebar",previous:{title:"Applications",permalink:"/docs/scarthgap/category/applications"},next:{title:"livebook",permalink:"/docs/scarthgap/applications/guides-livebook"}},l={},s=[],p={toc:s},d="wrapper";function u(e){let{components:n,...o}=e;return(0,r.yg)(d,(0,a.c)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"couchdb"},"couchdb"),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"The couchdb recipe has been temporary removed from meta-erlang master branch.\nPlease, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang/pull/293"},"PR couchdb: move to main branch and remove mozjs"),"\nfor more details.")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Recommended PREFERRED_VERSION for couchdb:"),(0,r.yg)("table",{parentName:"admonition"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"couchdb"),(0,r.yg)("th",{parentName:"tr",align:null},"Erlang/OTP"),(0,r.yg)("th",{parentName:"tr",align:null},"Elixir"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3.3.3"),(0,r.yg)("td",{parentName:"tr",align:null},"25.3%"),(0,r.yg)("td",{parentName:"tr",align:null},"1.14%"))))),(0,r.yg)("p",null,"In this guide we are using the plain meta-erlang layer to build the\n",(0,r.yg)("a",{parentName:"p",href:"https://couchdb.apache.org/"},"couchdb"),"."),(0,r.yg)("p",null,"The recipe\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-database/couchdb/couchdb.inc"},"couchdb.inc"),"\nbuilds the couchdb using a crosscompile approach. couchdb prefers to work with a\nfull erlang release instead of use the Erlang packages installed on the final\nimage."),(0,r.yg)("p",null,"As a final result, we are able to run an embedded couchdb using qemu."),(0,r.yg)("p",null,"Follow the quickstart guide to get a basic working environment and then:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add erlang preferred version 22.x in ",(0,r.yg)("em",{parentName:"li"},"conf/local.conf")," (check the full list of\nErlang supported versions here\n",(0,r.yg)("a",{parentName:"li",href:"https://docs.couchdb.org/en/stable/install/unix.html#dependencies"},"Dependencies"),")")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'echo \'PREFERRED_VERSION_erlang = "22%"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add ",(0,r.yg)("inlineCode",{parentName:"li"},"couchdb")," package to ",(0,r.yg)("inlineCode",{parentName:"li"},"IMAGE_INSTAL")," in ",(0,r.yg)("em",{parentName:"li"},"conf/local.conf"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"echo 'IMAGE_INSTALL:append = \" couchdb\"' >> conf/local.conf\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Now its time to build the image:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bitbake core-image-minimal\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"And check the results with qemu:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"runqemu core-image-minimal\n")),(0,r.yg)("p",null,"couchdb needs two additional manual configurations in the config file\n(",(0,r.yg)("em",{parentName:"p"},"/opt/couchdb/etc/local.ini"),")."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The first one is to enable the dashboard remote access. Find the session\n",(0,r.yg)("inlineCode",{parentName:"li"},"chttpd")," and change the bind_address. Like this:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"[chttpd]\nport = 5984\nbind_address = 0.0.0.0\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The second one is necessary to add a administrator user to the couchdb\ninstance. Like this:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"[admins]\nadmin = mysecretpassword\n")),(0,r.yg)("p",null,"Restart or start the couchdb service using the init scripts\n(",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/init.d/couchdb restart")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"systemctl restart couchdb"),")."),(0,r.yg)("p",null,"couchdb has a nice dashboard where we can check the database and do all the\nmaintenance as well creating documents. Access the address\n",(0,r.yg)("a",{parentName:"p",href:"http://192.168.7.2:5984/_utils/index.html"},"http://192.168.7.2:5984/_utils/index.html")," to get into the dashboard:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"couchdb dashboard",src:t(512).c,width:"1363",height:"687"})))}u.isMDXComponent=!0},512:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/couchdb_dashboard-62c18ba4e3821deeceb951e315d1359f.png"}}]);