"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[5328],{5788:(e,t,r)=>{r.d(t,{Iu:()=>b,yg:()=>c});var n=r(1504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),m=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=m(r),u=a,c=p["".concat(o,".").concat(u)]||p[u]||g[u]||i;return r?n.createElement(c,l(l({ref:t},b),{},{components:r})):n.createElement(c,l({ref:t},b))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=r(5072),a=(r(1504),r(5788));const i={sidebar_position:4.1,sidebar_label:"rabbitmq",sidebar_class_name:"green",description:"Shows how to set up and install rabbitmq."},l="rabbitmq",s={unversionedId:"applications/guides-rabbitmq",id:"version-kirkstone/applications/guides-rabbitmq",title:"rabbitmq",description:"Shows how to set up and install rabbitmq.",source:"@site/versioned_docs/version-kirkstone/applications/guides-rabbitmq.md",sourceDirName:"applications",slug:"/applications/guides-rabbitmq",permalink:"/docs/kirkstone/applications/guides-rabbitmq",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-kirkstone/applications/guides-rabbitmq.md",tags:[],version:"kirkstone",sidebarPosition:4.1,frontMatter:{sidebar_position:4.1,sidebar_label:"rabbitmq",sidebar_class_name:"green",description:"Shows how to set up and install rabbitmq."},sidebar:"tutorialSidebar",previous:{title:"livebook",permalink:"/docs/kirkstone/applications/guides-livebook"},next:{title:"riak",permalink:"/docs/kirkstone/applications/guides-riak"}},o={},m=[],b={toc:m},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.c)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"rabbitmq"},"rabbitmq"),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Recommended PREFERRED_VERSION for rabbitmq:"),(0,a.yg)("table",{parentName:"admonition"},(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"rabbitmq"),(0,a.yg)("th",{parentName:"tr",align:null},"Erlang/OTP"),(0,a.yg)("th",{parentName:"tr",align:null},"Elixir"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"3.9.8"),(0,a.yg)("td",{parentName:"tr",align:null},"24.2%"),(0,a.yg)("td",{parentName:"tr",align:null},"1.13%")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"3.10.25"),(0,a.yg)("td",{parentName:"tr",align:null},"25.3%"),(0,a.yg)("td",{parentName:"tr",align:null},"1.13%"))))),(0,a.yg)("p",null,"In this guide we are using the plain meta-erlang layer to build the\n",(0,a.yg)("a",{parentName:"p",href:"https://www.rabbitmq.com/"},"rabbitmq")," server."),(0,a.yg)("p",null,"The recipe\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-connectivity/rabbitmq/"},"rabbitmq"),"\nbuilds the rabbitmq server using the crosscompile approach. Each rabbitmq\nrelease has a specific combination of supported Erlang and Elixir. You can check\nwhich version is supported here:\n",(0,a.yg)("a",{parentName:"p",href:"https://www.rabbitmq.com/which-erlang.html"}," RabbitMQ Erlang Version Requirements "),"."),(0,a.yg)("p",null,"As a final result, we are able to run an embedded rabbitmq using qemu."),(0,a.yg)("p",null,"Follow the quickstart guide to get a basic working environment and then:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add erlang and elixir preferred version ",(0,a.yg)("em",{parentName:"li"},"conf/local.conf"),".")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'PREFERRED_VERSION_elixir = "1.14%"\nPREFERRED_VERSION_elixir-native = "1.14%"\nPREFERRED_VERSION_nativesdk-elixir = "1.14%"\nPREFERRED_VERSION_erlang = "25.2.3"\nPREFERRED_VERSION_erlang-native = "25.2.3"\nPREFERRED_VERSION_nativesdk-erlang = "25.2.3"\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"rabbitmq-server")," package to ",(0,a.yg)("inlineCode",{parentName:"li"},"IMAGE_INSTAL")," in ",(0,a.yg)("em",{parentName:"li"},"conf/local.conf"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'IMAGE_INSTALL:append = " rabbitmq-server"\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Now its time to build the image:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bitbake core-image-minimal\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"And check the results with qemu:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'runqemu core-image-minimal kvm nographic qemuparams="-m 1024"\n')),(0,a.yg)("p",null,"After qemu boot, we can check if rabbitmq-server is up and running:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"systemctl status rabbitmq-server\n* rabbitmq-server.service - RabbitMQ broker\n     Loaded: loaded (/lib/systemd/system/rabbitmq-server.service; enabled; preset: enabled)\n     Active: active (running) since Sat 2023-04-08 00:19:05 UTC; 3min 1s ago\n   Main PID: 199 (beam.smp)\n      Tasks: 28 (limit: 1169)\n     Memory: 153.5M\n     CGroup: /system.slice/rabbitmq-server.service\n             |-199 /usr/lib/erlang/erts-13.1.5/bin/beam.smp -W w -MBas ageffcbf -MHas ageffcbf -MBlmbcs 512 -MHlmbcs 512 -MMmcs 30 -P 1048576 -t 5000000 -stbt db -zdbbl 128000 -sbwt none -sbwtdcpu none -sb...\n             |-215 erl_child_setup 32768\n             |-249 /usr/lib/erlang/erts-13.1.5/bin/epmd -daemon\n             |-276 /usr/lib/erlang/erts-13.1.5/bin/inet_gethost 4\n             `-277 /usr/lib/erlang/erts-13.1.5/bin/inet_gethost 4\n\nApr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Doc guides:  https://rabbitmq.com/documentation.html\nApr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Support:     https://rabbitmq.com/contact.html\nApr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Tutorials:   https://rabbitmq.com/getstarted.html\nApr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Monitoring:  https://rabbitmq.com/monitoring.html\nApr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Logs: /var/log/rabbitmq/rabbit@qemux86-64.log\nApr 08 00:19:02 qemux86-64 rabbitmq-server[199]:         /var/log/rabbitmq/rabbit@qemux86-64_upgrade.log\nApr 08 00:19:02 qemux86-64 rabbitmq-server[199]:         <stdout>\nApr 08 00:19:02 qemux86-64 rabbitmq-server[199]:   Config file(s): /etc/rabbitmq/rabbitmq.conf\nApr 08 00:19:05 qemux86-64 rabbitmq-server[199]:   Starting broker... completed with 0 plugins.\nApr 08 00:19:05 qemux86-64 systemd[1]: Started RabbitMQ broker.\n")),(0,a.yg)("p",null,"The rabbitmq recipe creates a system user called ",(0,a.yg)("inlineCode",{parentName:"p"},"rabbitmq"),". All administrative\nrabbitmq commands should be done using that user."),(0,a.yg)("p",null,"For example, to enable the\n",(0,a.yg)("a",{parentName:"p",href:"https://rabbitmq.com/management.html"},"Management Plugin")," do like following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'su - rabbitmq\nroot@qemux86-64:~# rabbitmq-plugins enable rabbitmq_management\nwarning: the VM is running with native name encoding of latin1 which may cause Elixir to malfunction as it expects utf8. Please ensure your locale is set to UTF-8 (which can be verified by running "locale" i)\nEnabling plugins on node rabbit@qemux86-64:\nrabbitmq_management\nThe following plugins have been configured:\n  rabbitmq_management\n  rabbitmq_management_agent\n  rabbitmq_web_dispatch\nApplying plugin configuration to rabbit@qemux86-64...\nThe following plugins have been enabled:\n  rabbitmq_management\n  rabbitmq_management_agent\n  rabbitmq_web_dispatch\n\nset 3 plugins.\nOffline change; changes will take effect at broker restart.\n')),(0,a.yg)("p",null,"So, restarting the server as:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"systemctl restart rabbitmq-server\n")),(0,a.yg)("p",null,"Now, rabbitmq is ready for further explorations. The dashboard can be accessed\nvia ",(0,a.yg)("a",{parentName:"p",href:"http://192.168.7.2:15672"},"http://192.168.7.2:15672")))}g.isMDXComponent=!0}}]);