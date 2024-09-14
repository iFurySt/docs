"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[91571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>m});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Source Code Deployment",sidebar_position:1},p="\ud83d\udee0 Source Code Deployment",s={unversionedId:"gettingStarted/imSourceCodeDeployment",id:"gettingStarted/imSourceCodeDeployment",title:"Source Code Deployment",description:"1. Environment and Component Requirements",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/imSourceCodeDeployment.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/imSourceCodeDeployment",permalink:"/guides/gettingStarted/imSourceCodeDeployment",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/imSourceCodeDeployment.mdx",tags:[],version:"current",lastUpdatedAt:1726294257,formattedLastUpdatedAt:"Sep 14, 2024",sidebarPosition:1,frontMatter:{title:"Source Code Deployment",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Product Introduction",permalink:"/guides/introduction/product"},next:{title:"Quick Verification",permalink:"/guides/gettingStarted/quickTestServer"}},c={},m=[{value:"1. Environment and Component Requirements",id:"1-environment-and-component-requirements",level:2},{value:"2. Deploying OpenIM Server (IM)",id:"2-deploying-openim-server-im",level:2},{value:"2.1 Clone the repository using the main branch or switch to the release-v3.7 or later release branches",id:"21-clone-the-repository-using-the-main-branch-or-switch-to-the-release-v37-or-later-release-branches",level:3},{value:"2.2 Deploy Components (mongodb/redis/zookeeper/kafka/MinIO, etc.)",id:"22-deploy-components-mongodbrediszookeeperkafkaminio-etc",level:3},{value:"2.3 Set External IP. If using a domain name, Nginx  configuration is required.",id:"23-set-external-ip-if-using-a-domain-name-nginx--configuration-is-required",level:3},{value:"2.4 \ud83d\udee0\ufe0f Initialization",id:"24-\ufe0f-initialization",level:3},{value:"2.5 \ud83d\udee0\ufe0f Compilation (available on Linux/Windows/Mac platforms)",id:"25-\ufe0f-compilation-available-on-linuxwindowsmac-platforms",level:3},{value:"2.6 \ud83d\ude80 Start/Stop/Check (available on Linux/Windows/Mac platforms)",id:"26--startstopcheck-available-on-linuxwindowsmac-platforms",level:3},{value:"2.7 Modify Other Configuration Items",id:"27-modify-other-configuration-items",level:3},{value:"3. Deploying App Server (Chat)",id:"3-deploying-app-server-chat",level:2},{value:"3.1 Clone the repository using the main branch or switch to release-v1.7 or later release branches",id:"31-clone-the-repository-using-the-main-branch-or-switch-to-release-v17-or-later-release-branches",level:3},{value:"3.2 \ud83d\udee0\ufe0f Initialization",id:"32-\ufe0f-initialization",level:3},{value:"3.3 \ud83d\udee0\ufe0f Compilation (available on Linux/Windows/Mac platforms)",id:"33-\ufe0f-compilation-available-on-linuxwindowsmac-platforms",level:3},{value:"3.4 \ud83d\ude80 Start/Stop/Check (available on Linux/Windows/Mac platforms)",id:"34--startstopcheck-available-on-linuxwindowsmac-platforms",level:3},{value:"3.5 Modify Other Configuration Items",id:"35-modify-other-configuration-items",level:3},{value:"For deployment of release-v3.6 and earlier versions",id:"for-deployment-of-release-v36-and-earlier-versions",level:2},{value:"2. Deploy OpenIM Server (IM)",id:"2-deploy-openim-server-im",level:2},{value:"2.1 \ud83d\udce1 Set OPENIM_IP",id:"21--set-openim_ip",level:3},{value:"2.2 \ud83c\udfd7\ufe0f Deploy Components (mongodb/redis/zookeeper/kafka/MinIO, etc.)",id:"22-\ufe0f-deploy-components-mongodbrediszookeeperkafkaminio-etc",level:3},{value:"2.3 \ud83d\udee0\ufe0f Compilation",id:"23-\ufe0f-compilation",level:3},{value:"2.4 \ud83d\ude80 Start/Stop/Check",id:"24--startstopcheck",level:3},{value:"3. Deploying App Server (Chat)",id:"3-deploying-app-server-chat-1",level:2},{value:"3.1 \ud83c\udfd7\ufe0f Clone chat repository",id:"31-\ufe0f-clone-chat-repository",level:3},{value:"3.2 \ud83d\udee0\ufe0f Compilation",id:"32-\ufe0f-compilation",level:3},{value:"3.3 \ud83d\ude80 Start/Stop/Check",id:"33--startstopcheck",level:3},{value:"4. Quick Verification",id:"4-quick-verification",level:2},{value:"5. Admin Panel and Monitoring System",id:"5-admin-panel-and-monitoring-system",level:2},{value:"6. About Configuring Items",id:"6-about-configuring-items",level:2},{value:"6.1 \ud83d\udee0\ufe0f Modifying Common Configuration Items",id:"61-\ufe0f-modifying-common-configuration-items",level:3},{value:"6.2 \ud83d\udd04 Special Items in Common Configuration",id:"62--special-items-in-common-configuration",level:3},{value:"6.3 \ud83d\udee0\ufe0f Modifying Other Configuration Items",id:"63-\ufe0f-modifying-other-configuration-items",level:3},{value:"6.4 Modifying Ports",id:"64-modifying-ports",level:3},{value:"7. Common Issues",id:"7-common-issues",level:2},{value:"7.1 \ud83d\udcdc Viewing Logs",id:"71--viewing-logs",level:3},{value:"7.2 \ud83d\ude80 Startup Sequence",id:"72--startup-sequence",level:3},{value:"7.3 \ud83d\udc33 Docker Version",id:"73--docker-version",level:3}],d={toc:m},u="wrapper";function g(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)(u,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-source-code-deployment"},"\ud83d\udee0 Source Code Deployment"),(0,o.kt)("h2",{id:"1-environment-and-component-requirements"},"1. Environment and Component Requirements"),(0,o.kt)("p",null,"For server environment, system, and dependent component details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"./env-comp"},"this document"),"."),(0,o.kt)("h2",{id:"2-deploying-openim-server-im"},"2. Deploying OpenIM Server (IM)"),(0,o.kt)("h3",{id:"21-clone-the-repository-using-the-main-branch-or-switch-to-the-release-v37-or-later-release-branches"},"2.1 Clone the repository using the main branch or switch to the release-v3.7 or later release branches"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/openimsdk/open-im-server && cd open-im-server\n")),(0,o.kt)("h3",{id:"22-deploy-components-mongodbrediszookeeperkafkaminio-etc"},"2.2 Deploy Components (mongodb/redis/zookeeper/kafka/MinIO, etc.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker compose up -d\n")),(0,o.kt)("h3",{id:"23-set-external-ip-if-using-a-domain-name-nginx--configuration-is-required"},"2.3 Set External IP. If using a domain name, ",(0,o.kt)("a",{parentName:"h3",href:"/guides/gettingStarted/nginxDomainConfig"},"Nginx"),"  configuration is required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Modify the `externalAddress` in `config/minio.yml` to `http://external_IP:port` or a domain name.\nModify the `grafanaURL` in `config/openim-api.yml` to `http://ExternalIP:port` or a domain name.\n")),(0,o.kt)("h3",{id:"24-\ufe0f-initialization"},"2.4 \ud83d\udee0\ufe0f Initialization"),(0,o.kt)("p",null,"Before the first compilation, execute on Linux/Mac platforms:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bash bootstrap.sh\n")),(0,o.kt)("p",null,"On Windows execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bootstrap.bat\n")),(0,o.kt)("h3",{id:"25-\ufe0f-compilation-available-on-linuxwindowsmac-platforms"},"2.5 \ud83d\udee0\ufe0f Compilation (available on Linux/Windows/Mac platforms)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mage\n")),(0,o.kt)("h3",{id:"26--startstopcheck-available-on-linuxwindowsmac-platforms"},"2.6 \ud83d\ude80 Start/Stop/Check (available on Linux/Windows/Mac platforms)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Start\nmage start\n# Start in background and collect logs\nnohup mage start >> _output/logs/openim.log 2>&1 &\n# Stop\nmage stop\n# Check\nmage check\n")),(0,o.kt)("h3",{id:"27-modify-other-configuration-items"},"2.7 Modify Other Configuration Items"),(0,o.kt)("p",null,"See linked documentation"),(0,o.kt)("h2",{id:"3-deploying-app-server-chat"},"3. Deploying App Server (Chat)"),(0,o.kt)("h3",{id:"31-clone-the-repository-using-the-main-branch-or-switch-to-release-v17-or-later-release-branches"},"3.1 Clone the repository using the main branch or switch to release-v1.7 or later release branches"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/openimsdk/chat && cd chat\n")),(0,o.kt)("h3",{id:"32-\ufe0f-initialization"},"3.2 \ud83d\udee0\ufe0f Initialization"),(0,o.kt)("p",null,"Before the first compilation, execute on Linux/Mac platforms:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bash bootstrap.sh\n")),(0,o.kt)("p",null,"On Windows execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bootstrap.bat\n")),(0,o.kt)("h3",{id:"33-\ufe0f-compilation-available-on-linuxwindowsmac-platforms"},"3.3 \ud83d\udee0\ufe0f Compilation (available on Linux/Windows/Mac platforms)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mage\n")),(0,o.kt)("h3",{id:"34--startstopcheck-available-on-linuxwindowsmac-platforms"},"3.4 \ud83d\ude80 Start/Stop/Check (available on Linux/Windows/Mac platforms)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Start\nmage start\n# Start in background and collect logs\nnohup mage start >> _output/logs/chat.log 2>&1 &\n# Stop\nmage stop\n# Check\nmage check\n\n")),(0,o.kt)("h3",{id:"35-modify-other-configuration-items"},"3.5 Modify Other Configuration Items"),(0,o.kt)("p",null,"See linked documentation"),(0,o.kt)("hr",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"for-deployment-of-release-v36-and-earlier-versions"},"For deployment of release-v3.6 and earlier versions"),(0,o.kt)("h2",{id:"2-deploy-openim-server-im"},"2. Deploy OpenIM Server (IM)"),(0,o.kt)("h3",{id:"21--set-openim_ip"},"2.1 \ud83d\udce1 Set OPENIM_IP"),(0,o.kt)("p",null,"\ud83d\udd14 ",(0,o.kt)("strong",{parentName:"p"},"It is mandatory to set OPENIM_IP, and it cannot be 127.0.0.1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# If the server has an external IP\nexport OPENIM_IP="external IP"\n\n# If providing only internal network services\nexport OPENIM_IP="internal IP"\n')),(0,o.kt)("h3",{id:"22-\ufe0f-deploy-components-mongodbrediszookeeperkafkaminio-etc"},"2.2 \ud83c\udfd7\ufe0f Deploy Components (mongodb/redis/zookeeper/kafka/MinIO, etc.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/OpenIMSDK/open-im-server && cd open-im-server \n# It is recommended to switch to the release-v3.6 or later release branches\nmake init && docker compose up -d\n\n")),(0,o.kt)("h3",{id:"23-\ufe0f-compilation"},"2.3 \ud83d\udee0\ufe0f Compilation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make build\n\n")),(0,o.kt)("h3",{id:"24--startstopcheck"},"2.4 \ud83d\ude80 Start/Stop/Check"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"# Start\nmake start\n# Stop\nmake stop\n# Check\nmake check\n\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"3-deploying-app-server-chat-1"},"3. Deploying App Server (Chat)"),(0,o.kt)("h3",{id:"31-\ufe0f-clone-chat-repository"},"3.1 \ud83c\udfd7\ufe0f Clone chat repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Return to the previous directory\ncd ..\n# Clone repository, it is recommended to switch to release-v1.6 or later release branches\ngit clone https://github.com/OpenIMSDK/chat chat && cd chat\n")),(0,o.kt)("h3",{id:"32-\ufe0f-compilation"},"3.2 \ud83d\udee0\ufe0f Compilation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make init\nmake build\n")),(0,o.kt)("h3",{id:"33--startstopcheck"},"3.3 \ud83d\ude80 Start/Stop/Check"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"# Start\nmake start\n# Stop\nmake stop\n# Check\nmake check\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"4-quick-verification"},"4. Quick Verification"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./quickTestServer"},"Quick Verification")," document"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"5-admin-panel-and-monitoring-system"},"5. Admin Panel and Monitoring System"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./admin"},"Admin Panel and Monitoring System")," document."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"6-about-configuring-items"},"6. About Configuring Items"),(0,o.kt)("h3",{id:"61-\ufe0f-modifying-common-configuration-items"},"6.1 \ud83d\udee0\ufe0f Modifying Common Configuration Items"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration Item"),(0,o.kt)("th",{parentName:"tr",align:null},"File to be Modified"),(0,o.kt)("th",{parentName:"tr",align:null},"Action"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mongo/kafka/minio related"),(0,o.kt)("td",{parentName:"tr",align:null},".env, openim-server/config/config.yaml"),(0,o.kt)("td",{parentName:"tr",align:null},"Need to restart components and IM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"redis/zookeeper related"),(0,o.kt)("td",{parentName:"tr",align:null},".env, openim-server/config/config"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,".yaml, chat/config/config.yaml | Need to restart components, IM, and Chat |\n| SECRET | openim-server/config/config.yaml, chat/config/config.yaml | Need to restart IM and Chat |"),(0,o.kt)("h3",{id:"62--special-items-in-common-configuration"},"6.2 \ud83d\udd04 Special Items in Common Configuration"),(0,o.kt)("p",null,"Special configuration items: API_OPENIM_PORT/MINIO_PORT/OPENIM_IP/GRAFANA_PORT"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modify the special configuration items in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file"),(0,o.kt)("li",{parentName:"ol"},"Modify the configuration in ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," according to the rules")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'object:\n  apiURL: "http://$OPENIM_IP:$API_OPENIM_PORT"\n  minio:\n    endpoint: "http://$DOCKER_BRIDGE_GATEWAY:$MINIO_PORT"\n    signEndpoint: "http://$OPENIM_IP:$MINIO_PORT"\n\ngrafanaUrl: http://$OPENIM_IP:$GRAFANA_PORT\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Modify the configuration in ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"chat/config/config.yaml"))," according to the rules")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'If IM is not on the same machine as Chat, replace 127.0.0.1 with the IP of the machine where IM is located\nopenIMUrl: "http://127.0.0.1:$API_OPENIM_PORT"\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Restart IM and Chat")),(0,o.kt)("h3",{id:"63-\ufe0f-modifying-other-configuration-items"},"6.3 \ud83d\udee0\ufe0f Modifying Other Configuration Items"),(0,o.kt)("p",null,"For other configuration items in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},".env")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"chat/config/config.yaml")),", and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml")),", you can modify these items individually in the respective files."),(0,o.kt)("h3",{id:"64-modifying-ports"},"6.4 Modifying Ports"),(0,o.kt)("p",null,"Especially note that any port modification related to IM also needs to be synchronized with the ports in open-im-server/scripts/install/environment.sh"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"7-common-issues"},"7. Common Issues"),(0,o.kt)("h3",{id:"71--viewing-logs"},"7.1 \ud83d\udcdc Viewing Logs"),(0,o.kt)("p",null,"Log locations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Runtime logs, to be viewed for problem resolution after successful startup: ",(0,o.kt)("inlineCode",{parentName:"li"},"_output/logs/openim-all*")),(0,o.kt)("li",{parentName:"ul"},"Startup logs, to be checked if there are errors during startup: ",(0,o.kt)("inlineCode",{parentName:"li"},"_output/logs/openim-*.log"))),(0,o.kt)("h3",{id:"72--startup-sequence"},"7.2 \ud83d\ude80 Startup Sequence"),(0,o.kt)("p",null,"The startup sequence is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Components dependent on IM: mongo/redis/kafka/zookeeper/minio, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Chat"))),(0,o.kt)("h3",{id:"73--docker-version"},"7.3 \ud83d\udc33 Docker Version"),(0,o.kt)("p",null,"The new version of Docker has integrated docker-compose. Older versions of Docker may not support the gateway feature\u274c. We recommend upgrading to a newer version, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"23.0.1"),"\ud83d\udd1d"))}g.isMDXComponent=!0}}]);