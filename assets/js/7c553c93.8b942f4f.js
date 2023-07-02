"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[1841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=s(n),u=i,m=b["".concat(p,".").concat(u)]||b[u]||d[u]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[b]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1,description:"Start writing recipes with Erlang and Elixir support."},l="A tiny recipe",o={unversionedId:"guides/guides-a-tiny-recipe",id:"guides/guides-a-tiny-recipe",title:"A tiny recipe",description:"Start writing recipes with Erlang and Elixir support.",source:"@site/docs/guides/guides-a-tiny-recipe.md",sourceDirName:"guides",slug:"/guides/guides-a-tiny-recipe",permalink:"/docs/guides/guides-a-tiny-recipe",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/docs/guides/guides-a-tiny-recipe.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Start writing recipes with Erlang and Elixir support."},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"Bitbake classes",permalink:"/docs/guides/guides-bitbake-classes"}},p={},s=[{value:"Build tool plugins",id:"build-tool-plugins",level:2},{value:"Erlang: rebar3_bitbake",id:"erlang-rebar3_bitbake",level:3},{value:"Elixir: mix_bitbake",id:"elixir-mix_bitbake",level:3},{value:"Recipe examples",id:"recipe-examples",level:2},{value:"Erlang",id:"erlang",level:3},{value:"Elixir",id:"elixir",level:3}],c={toc:s};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a-tiny-recipe"},"A tiny recipe"),(0,i.kt)("p",null,"The most important step is create recipes for bitbake. meta-erlang exports two\nclasses\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang/blob/master/classes/rebar3.bbclass"},"rebar3.bbclass"),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang/blob/master/classes/mix.bbclass"},"mix.bbclass"),"\nwhich encapsulates most of the work when building Erlang and Elixir\napplications."),(0,i.kt)("p",null,"In this guide we are going to cover how to use build tool plugins that help\nduring the recipe creating phase."),(0,i.kt)("p",null,"The use of build plugins is optional and might help until you get used about how\nto create bitbake recipes efficiently."),(0,i.kt)("h2",{id:"build-tool-plugins"},"Build tool plugins"),(0,i.kt)("p",null,"Two plugins has been implemented in order to help the user to create his first\nrecipe."),(0,i.kt)("p",null,"!> Be aware that mix_bitbake and rebar3_bitbake are simple build tools plugins\naimed to help the initial bootstrap. If you are looking for a development\nworkflow, take a look at ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/guides-development"},"Application Development"),"\nguide."),(0,i.kt)("h3",{id:"erlang-rebar3_bitbake"},"Erlang: rebar3_bitbake"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hex.pm/packages/rebar3_bitbake"},"rebar3_bitbake")," is a\n",(0,i.kt)("a",{parentName:"p",href:"http://rebar3.org/docs/tutorials/building_plugins/"},"rebar3 plugin")," which reads\nthe Erlang application file definition and creates a recipe based on all the\ndata found in that application file."),(0,i.kt)("p",null,"To start using the plugin, first we need to add rebar3",(0,i.kt)("em",{parentName:"p"},"bitbake as a\n","_","project_plugins"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{project_plugins, [\n    {rebar3_bitbake, {git, "https://github.com/meta-erlang/rebar3_bitbake.git", {tag, "0.1.0"}}}\n]}.\n')),(0,i.kt)("p",null,"After that, rebar3 exports the command ",(0,i.kt)("em",{parentName:"p"},"bitbake"),". Then, to create a recipe based\non the current application (suppose the application is called ",(0,i.kt)("inlineCode",{parentName:"p"},"demo"),") run the\nbitbake command like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rebar3 bitbake\n")),(0,i.kt)("p",null,"A new file called ",(0,i.kt)("em",{parentName:"p"},"demo-x.y.z.bb"),", where x.y.z is the version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"demo"),"\napplication, should be created."),(0,i.kt)("p",null,"Now, it is time to copy ",(0,i.kt)("em",{parentName:"p"},"demo-x.y.z.bb")," to your YP/OE distro or application\nlayer."),(0,i.kt)("h3",{id:"elixir-mix_bitbake"},"Elixir: mix_bitbake"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://hex.pm/packages/mix_bitbake"},"mix_bitbake")," mix task follows the same\napproach as rebar3_bitbake does. First we need to include it in mix.exs file as\na development dependency, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'def deps do\n  [\n    {:mix_bitbake, "~> 0.1.0", only: :dev, runtime: false}\n  ]\nend\n')),(0,i.kt)("p",null,"Then, calling ",(0,i.kt)("inlineCode",{parentName:"p"},"mix bitbake")," the mix_bitbake task will extract all data in order\nto create a bitbake recipe for the elixir application."),(0,i.kt)("h2",{id:"recipe-examples"},"Recipe examples"),(0,i.kt)("p",null,"The following sections show recipes from\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/joaohf/meta-axon/tree/master/recipes-extended/axon"},"meta-axon layer")),(0,i.kt)("h3",{id:"erlang"},"Erlang"),(0,i.kt)("p",null,"The bellow recipe uses rebar3 to compile and release an erlang application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bitbake"},'SUMMARY = "Simple application for demonstrating release creation for embedded devices"\nDESCRIPTION = "This application provides a web interface for controlling LEDs on the Beaglebone. In the process, it demonstrates using rebar and relx for building an Erlang release in a cross-compiled environment. It then constructs a firmware image that can be burned to an SDCard and run on the Beaglebone."\nLICENSE = "MIT"\nLIC_FILES_CHKSUM = "file://LICENSE;md5=64dcdcb7810c9caa926e75c6dfc82385"\n\nS = "${WORKDIR}/git"\nSRCREV = "3baebb418f6024aeb221b79fd65f820f8968dd8e"\nPV = "0.1.0-git${SRCPV}"\nPR = "r0"\n\nSRC_URI = "\\\n    git://github.com/joaohf/axon;branch=master \\\n    "\n\ninherit rebar3\n\nREBAR3_PROFILE = "prod"\n')),(0,i.kt)("p",null,"rebar3 builds the application using the ",(0,i.kt)("inlineCode",{parentName:"p"},"prod")," profile that was previously set\nby ",(0,i.kt)("inlineCode",{parentName:"p"},"REBAR3_PROFILE")," variable."),(0,i.kt)("p",null,"!> The REBAR_PROFILE is an important variable to configure the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.rebar3.org/docs/profiles"},"rebar profile"),"."),(0,i.kt)("h3",{id:"elixir"},"Elixir"),(0,i.kt)("p",null,"And the following recipe uses mix to compile and release an elixir application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bitbake"},'SUMMARY = "Simple example using scenic"\nDESCRIPTION = "Simple elixir project created using scenic_new."\nLICENSE = "MIT"\nLIC_FILES_CHKSUM = "file://LICENSE;md5=ca0978e805a8fe57d17049c427422188"\n\nS = "${WORKDIR}/git"\nSRCREV = "3baebb418f6024aeb221b79fd65f820f8968dd8e"\nPV = "0.1.0-git${SRCPV}"\nPR = "r0"\n\nDEPENDS = "glfw glew"\nRDEPENDS:${PN} += " glfw glew"\n\nCFLAGS:append = " -fPIC "\n\nSRC_URI = "\\\n    git://github.com/joaohf/axon-scenic;branch=master \\\n    "\n\ninherit mix\n')))}b.isMDXComponent=!0}}]);