"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[5457],{7240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"guides/guides-beamtools","title":"BEAM Tools","description":"BEAM Tools.","source":"@site/docs/guides/guides-beamtools.md","sourceDirName":"guides","slug":"/guides/guides-beamtools","permalink":"/docs/master/guides/guides-beamtools","draft":false,"unlisted":false,"editUrl":"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/docs/guides/guides-beamtools.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"description":"BEAM Tools."},"sidebar":"tutorialSidebar","previous":{"title":"Building SDKs","permalink":"/docs/master/guides/guides-development"},"next":{"title":"Applications","permalink":"/docs/master/category/applications"}}');var s=t(4848),i=t(8453);const l={sidebar_position:6,description:"BEAM Tools."},a="BEAM Tools",r={},d=[{value:"Building beamtools",id:"building-beamtools",level:2},{value:"Downloading a pre-built beamtools tarball",id:"downloading-a-pre-built-beamtools-tarball",level:2},{value:"Start livebook from beamtools",id:"start-livebook-from-beamtools",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"beam-tools",children:"BEAM Tools"})}),"\n",(0,s.jsx)(n.p,{children:"Building and running your own Erlang and/or Elixir version could be an\nalternative when the host does not provide those packages or when additional\ntools are necessary and you want to provide a single installation source."}),"\n",(0,s.jsx)(n.p,{children:"The meta-erlang layer is able to make a specific tarball having the following\ntools:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Erlang"}),"\n",(0,s.jsx)(n.li,{children:"Elixir"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://rebar3.org/",children:"rebar3"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/WhatsApp/erlfmt",children:"erlfmt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/inaka/elvis",children:"elvis"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://livebook.dev/",children:"livebook"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This tarball builds all the listed tools natively, wrapping them into a tarball\nself-installed script and ready to be shared. The ",(0,s.jsx)(n.em,{children:"beamtools"})," does not provides\nany way to cross-compile code. The aim is to provide a custom set of BEAM tools\nable to be run on any Linux machine."]}),"\n",(0,s.jsx)(n.h2,{id:"building-beamtools",children:"Building beamtools"}),"\n",(0,s.jsxs)(n.p,{children:["The first step is to define which Erlang and Elixir versions the beamtools will\nbuild. This is done configuring the following variables in the file\n",(0,s.jsx)(n.a,{href:"https://docs.yoctoproject.org/ref-manual/terms.html?highlight=local%20conf#term-Configuration-File",children:"conf/local.conf or in the distro configuration file"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'PREFERRED_VERSION_erlang = "24.1.7"\nPREFERRED_VERSION_erlang-native = "24.1.7"\nPREFERRED_VERSION_nativesdk-erlang = "24.1.7"\n\nPREFERRED_VERSION_elixir = "1.12.3"\nPREFERRED_VERSION_elixir-native = "1.12.3"\nPREFERRED_VERSION_nativesdk-elixir = "1.12.3"\n'})}),"\n",(0,s.jsx)(n.p,{children:"After that, the next step is to call bitbake to build the beamtools tarball:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bitbake beamtools-tarball\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once the build has finished, the results can be found in the ",(0,s.jsx)(n.em,{children:"tmp/deploy/sdk"}),"\nfolder. You can copy it to the development machine and install running the .sh\nscript, like that:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sh x86_64-beamtools-nativesdk-standalone-3.4.1-erlang-24.1.7-elixir-1.12.3.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"The installation script is going to ask the destination path. You are free to\nuse whatever path you need."}),"\n",(0,s.jsx)(n.p,{children:"When the installation has over, it is necessary to source the environment script\nwhich has all the definitions about where to find the tools:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source /opt/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3/environment-setup-x86_64-pokysdk-linux\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The current shell has the environment variable setted to the correct Erlang and\nElixir installation. And running: ",(0,s.jsx)(n.em,{children:"erl"})," or ",(0,s.jsx)(n.em,{children:"iex"})," gives you an Erlang and Elixir\nprompts."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"For each new shell, it will be necessary to source the\nenvironment-setup-x86_64-pokysdk-linux file."})}),"\n",(0,s.jsx)(n.p,{children:"The follow lines show the full output for beamtools installation process:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'joaohf@porco:~/work/opensource/kas-meta-erlang$ honister/tmp/deploy/sdk/x86_64-beamtools-nativesdk-standalone-3.4.1-erlang-24.1.7-elixir-1.12.3.sh\nBEAM tools installer version 3.4.1-erlang-24.1.7-elixir-1.12.3\n==============================================================\nEnter target directory for SDK (default: /opt/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3): /home/joaohf/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3\nYou are about to install the SDK to "/home/joaohf/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3". Proceed [Y/n]?\nExtracting SDK.....................................done\nSetting it up...done\nSDK has been successfully set up and is ready to be used.\nEach time you wish to use the SDK in a new shell session, you need to source the environment setup script e.g.\n $ . /home/joaohf/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3/environment-setup-x86_64-pokysdk-linux\n'})}),"\n",(0,s.jsx)(n.h2,{id:"downloading-a-pre-built-beamtools-tarball",children:"Downloading a pre-built beamtools tarball"}),"\n",(0,s.jsx)(n.p,{children:"It is also possible to download and run a pre-built beamtools installer yourself\nwith the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Locate and download the *.sh at\n",(0,s.jsx)(n.a,{href:"https://github.com/meta-erlang/meta-erlang/releases",children:"https://github.com/meta-erlang/meta-erlang/releases"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Execute the installation script. Here is an example for the traditional\ninstaller:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sh ~/Downloads/x86_64-beamtools-nativesdk-standalone-3.4.1-erlang-24.1.7-elixir-1.12.3.sh\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"During execution, a prompt appears that allows you to choose the installation\ndirectory. For example, you could choose the following:\n/home/your-username/beamtools"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Source the tools environment setup script by using a command like the\nfollowing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source /home/your_username/beamtools/environment-setup-x86_64-pokysdk-linux\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"After you have sourced the setup script, the tools are added to PATH and any\nother environment variables required to run the tools are initialized. The\nresults are working versions versions of rebar3, Erlang/OTP and Elixir."}),"\n",(0,s.jsx)(n.h2,{id:"start-livebook-from-beamtools",children:"Start livebook from beamtools"}),"\n",(0,s.jsx)(n.p,{children:"As livebook is included into standard beamtools SDK, it's possible to start a\nlivebook session easily following the steps below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Source the beamtools SDK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source /home/your_username/beamtools/nvironment-setup-x86_64-pokysdk-linux\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check if the livebook scripts exists in your environment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ livebook\nUsage: livebook COMMAND [ARGS]\n\nThe known commands are:\n\nstart          Starts the system\nstart_iex      Starts the system with IEx attached\ndaemon         Starts the system as a daemon\ndaemon_iex     Starts the system as a daemon with IEx attached\neval "EXPR"    Executes the given expression on a new, non-booted system\nrpc "EXPR"     Executes the given expression remotely on the running system\nremote         Connects to the running system via a remote shell\nrestart        Restarts the running system via a remote command\nstop           Stops the running system via a remote command\npid            Prints the operating system PID of the running system via a remote command\nversion        Prints the release name and version to be booted\n\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start livebook system:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ livebook start\n[Livebook] Application running at http://localhost:8080/?token=z4nrl62iqojkttdq3fuha7vm7ynkhwis\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It's done, you can play with livebook locally without need to install\nanything else."}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var o=t(6540);const s={},i=o.createContext(s);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);