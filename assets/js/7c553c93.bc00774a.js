"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[7577],{5498:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=n(4848),a=n(8453);const t={sidebar_position:1,description:"Start writing recipes with Erlang and Elixir support."},s="A tiny recipe",l={id:"guides/guides-a-tiny-recipe",title:"A tiny recipe",description:"Start writing recipes with Erlang and Elixir support.",source:"@site/docs/guides/guides-a-tiny-recipe.md",sourceDirName:"guides",slug:"/guides/guides-a-tiny-recipe",permalink:"/docs/master/guides/guides-a-tiny-recipe",draft:!1,unlisted:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/docs/guides/guides-a-tiny-recipe.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Start writing recipes with Erlang and Elixir support."},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/master/category/guides"},next:{title:"Bitbake classes",permalink:"/docs/master/guides/guides-bitbake-classes"}},o={},c=[{value:"Build tool plugins",id:"build-tool-plugins",level:2},{value:"Erlang: rebar3_bitbake",id:"erlang-rebar3_bitbake",level:3},{value:"Elixir: mix_bitbake",id:"elixir-mix_bitbake",level:3},{value:"Recipe examples",id:"recipe-examples",level:2},{value:"Erlang",id:"erlang",level:3},{value:"Elixir",id:"elixir",level:3}];function d(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"a-tiny-recipe",children:"A tiny recipe"})}),"\n",(0,r.jsxs)(i.p,{children:["The most important step is create recipes for bitbake. meta-erlang exports two\nclasses\n",(0,r.jsx)(i.a,{href:"https://github.com/meta-erlang/meta-erlang/blob/master/classes/rebar3.bbclass",children:"rebar3.bbclass"}),"\nand\n",(0,r.jsx)(i.a,{href:"https://github.com/meta-erlang/meta-erlang/blob/master/classes/mix.bbclass",children:"mix.bbclass"}),"\nwhich encapsulates most of the work when building Erlang and Elixir\napplications."]}),"\n",(0,r.jsx)(i.p,{children:"In this guide we are going to cover how to use build tool plugins that help\nduring the recipe creating phase."}),"\n",(0,r.jsx)(i.p,{children:"The use of build plugins is optional and might help until you get used about how\nto create bitbake recipes efficiently."}),"\n",(0,r.jsx)(i.h2,{id:"build-tool-plugins",children:"Build tool plugins"}),"\n",(0,r.jsx)(i.p,{children:"Two plugins has been implemented in order to help the user to create his first\nrecipe."}),"\n",(0,r.jsxs)(i.p,{children:["!> Be aware that mix_bitbake and rebar3_bitbake are simple build tools plugins\naimed to help the initial bootstrap. If you are looking for a development\nworkflow, take a look at ",(0,r.jsx)(i.a,{href:"/docs/master/guides/guides-development",children:"Application Development"}),"\nguide."]}),"\n",(0,r.jsx)(i.h3,{id:"erlang-rebar3_bitbake",children:"Erlang: rebar3_bitbake"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://hex.pm/packages/rebar3_bitbake",children:"rebar3_bitbake"})," is a\n",(0,r.jsx)(i.a,{href:"http://rebar3.org/docs/tutorials/building_plugins/",children:"rebar3 plugin"})," which reads\nthe Erlang application file definition and creates a recipe based on all the\ndata found in that application file."]}),"\n",(0,r.jsxs)(i.p,{children:["To start using the plugin, first we need to add rebar3",(0,r.jsx)(i.em,{children:"bitbake as a\n_project_plugins"}),":"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'{project_plugins, [\n    {rebar3_bitbake, {git, "https://github.com/meta-erlang/rebar3_bitbake.git", {tag, "0.1.0"}}}\n]}.\n'})}),"\n",(0,r.jsxs)(i.p,{children:["After that, rebar3 exports the command ",(0,r.jsx)(i.em,{children:"bitbake"}),". Then, to create a recipe based\non the current application (suppose the application is called ",(0,r.jsx)(i.code,{children:"demo"}),") run the\nbitbake command like this:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"rebar3 bitbake\n"})}),"\n",(0,r.jsxs)(i.p,{children:["A new file called ",(0,r.jsx)(i.em,{children:"demo-x.y.z.bb"}),", where x.y.z is the version of the ",(0,r.jsx)(i.code,{children:"demo"}),"\napplication, should be created."]}),"\n",(0,r.jsxs)(i.p,{children:["Now, it is time to copy ",(0,r.jsx)(i.em,{children:"demo-x.y.z.bb"})," to your YP/OE distro or application\nlayer."]}),"\n",(0,r.jsx)(i.h3,{id:"elixir-mix_bitbake",children:"Elixir: mix_bitbake"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"https://hex.pm/packages/mix_bitbake",children:"mix_bitbake"})," mix task follows the same\napproach as rebar3_bitbake does. First we need to include it in mix.exs file as\na development dependency, like this:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-elixir",children:'def deps do\n  [\n    {:mix_bitbake, "~> 0.1.0", only: :dev, runtime: false}\n  ]\nend\n'})}),"\n",(0,r.jsxs)(i.p,{children:["Then, calling ",(0,r.jsx)(i.code,{children:"mix bitbake"})," the mix_bitbake task will extract all data in order\nto create a bitbake recipe for the elixir application."]}),"\n",(0,r.jsx)(i.h2,{id:"recipe-examples",children:"Recipe examples"}),"\n",(0,r.jsxs)(i.p,{children:["The following sections show recipes from\n",(0,r.jsx)(i.a,{href:"https://github.com/joaohf/meta-axon/tree/master/recipes-extended/axon",children:"meta-axon layer"})]}),"\n",(0,r.jsx)(i.h3,{id:"erlang",children:"Erlang"}),"\n",(0,r.jsx)(i.p,{children:"The bellow recipe uses rebar3 to compile and release an erlang application:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bitbake",children:'SUMMARY = "Simple application for demonstrating release creation for embedded devices"\nDESCRIPTION = "This application provides a web interface for controlling LEDs on the Beaglebone. In the process, it demonstrates using rebar and relx for building an Erlang release in a cross-compiled environment. It then constructs a firmware image that can be burned to an SDCard and run on the Beaglebone."\nLICENSE = "MIT"\nLIC_FILES_CHKSUM = "file://LICENSE;md5=64dcdcb7810c9caa926e75c6dfc82385"\n\nS = "${WORKDIR}/git"\nSRCREV = "3baebb418f6024aeb221b79fd65f820f8968dd8e"\nPV = "0.1.0-git${SRCPV}"\nPR = "r0"\n\nSRC_URI = "\\\n    git://github.com/joaohf/axon;branch=master \\\n    "\n\ninherit rebar3\n\nREBAR3_PROFILE = "prod"\n'})}),"\n",(0,r.jsxs)(i.p,{children:["rebar3 builds the application using the ",(0,r.jsx)(i.code,{children:"prod"})," profile that was previously set\nby ",(0,r.jsx)(i.code,{children:"REBAR3_PROFILE"})," variable."]}),"\n",(0,r.jsxs)(i.p,{children:["!> The REBAR_PROFILE is an important variable to configure the\n",(0,r.jsx)(i.a,{href:"https://www.rebar3.org/docs/profiles",children:"rebar profile"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"elixir",children:"Elixir"}),"\n",(0,r.jsx)(i.p,{children:"And the following recipe uses mix to compile and release an elixir application:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bitbake",children:'SUMMARY = "Simple example using scenic"\nDESCRIPTION = "Simple elixir project created using scenic_new."\nLICENSE = "MIT"\nLIC_FILES_CHKSUM = "file://LICENSE;md5=ca0978e805a8fe57d17049c427422188"\n\nS = "${WORKDIR}/git"\nSRCREV = "3baebb418f6024aeb221b79fd65f820f8968dd8e"\nPV = "0.1.0-git${SRCPV}"\nPR = "r0"\n\nDEPENDS = "glfw glew"\nRDEPENDS:${PN} += " glfw glew"\n\nCFLAGS:append = " -fPIC "\n\nSRC_URI = "\\\n    git://github.com/joaohf/axon-scenic;branch=master \\\n    "\n\ninherit mix\n'})})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>l});var r=n(6540);const a={},t=r.createContext(a);function s(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);