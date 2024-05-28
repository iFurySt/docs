"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[51751],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(k,l(l({ref:n},p),{},{components:t})):r.createElement(k,l({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69426:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>u});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Electron",hide_title:!0,sidebar_position:6},s=void 0,c={unversionedId:"quickstart/electron",id:"quickstart/electron",title:"Electron",description:"\ud83d\ude80\u4f7f\u7528 Demo",source:"@site/docs/sdks/quickstart/electron.mdx",sourceDirName:"quickstart",slug:"/quickstart/electron",permalink:"/zh-Hans/sdks/quickstart/electron",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/electron.mdx",tags:[],version:"current",lastUpdatedAt:1716870547,formattedLastUpdatedAt:"2024\u5e745\u670828\u65e5",sidebarPosition:6,frontMatter:{title:"Electron",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Browser",permalink:"/zh-Hans/sdks/quickstart/browser"},next:{title:"uni-app",permalink:"/zh-Hans/sdks/quickstart/uniapp"}},p={},u=[{value:"\ud83d\ude80\u4f7f\u7528 Demo",id:"\u4f7f\u7528-demo",level:2},{value:"\u5feb\u901f\u96c6\u6210",id:"\u5feb\u901f\u96c6\u6210",level:2},{value:"1. \u6dfb\u52a0\u4f9d\u8d56",id:"1-\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"2. \u83b7\u53d6 wasm \u6240\u9700\u9759\u6001\u8d44\u6e90",id:"2-\u83b7\u53d6-wasm-\u6240\u9700\u9759\u6001\u8d44\u6e90",level:3},{value:"3. \u5f15\u5165 SDK",id:"3-\u5f15\u5165-sdk",level:3},{value:"4. \u767b\u5f55\u3001\u8bbe\u7f6e\u76d1\u542c",id:"4-\u767b\u5f55\u8bbe\u7f6e\u76d1\u542c",level:3},{value:"5. \u6536\u53d1\u6d88\u606f",id:"5-\u6536\u53d1\u6d88\u606f",level:3}],m={toc:u},d="wrapper";function k(e){var{components:n}=e,t=l(e,["components"]);return(0,r.kt)(d,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528-demo"},"\ud83d\ude80\u4f7f\u7528 Demo"),(0,r.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u9996\u5148\u8fd0\u884c\u6211\u4eec\u4e3a\u60a8\u51c6\u5907\u7684\u6846\u67b6\u76f8\u5173\u7684\u793a\u4f8b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/openim-electron-demo"},"DEMO")," \u3002\u8fd9\u4e0d\u4ec5\u53ef\u4ee5\u8ba9\u60a8\u76f4\u89c2\u4f53\u9a8c OpenIMSDK \u7684\u529f\u80fd\uff0c\u8fd8\u5c06\u5e2e\u52a9\u60a8\u5728\u5b9e\u9645\u96c6\u6210\u8fc7\u7a0b\u4e2d\u8fc5\u901f\u5b9a\u4f4d\u548c\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\u5feb\u901f\u96c6\u6210"},"\u5feb\u901f\u96c6\u6210"),(0,r.kt)("h3",{id:"1-\u6dfb\u52a0\u4f9d\u8d56"},"1. \u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install open-im-sdk-wasm @openim/electron-client-sdk --save\n")),(0,r.kt)("h3",{id:"2-\u83b7\u53d6-wasm-\u6240\u9700\u9759\u6001\u8d44\u6e90"},"2. \u83b7\u53d6 wasm \u6240\u9700\u9759\u6001\u8d44\u6e90"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u76ee\u5f55\u4e0b\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"open-im-sdk-wasm"),"\u5b50\u76ee\u5f55\uff0c\u5c06\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"assets"),"\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u62f7\u8d1d\u5230\u9879\u76ee\u516c\u5171\u8d44\u6e90\u76ee\u5f55\u4e2d\uff08public\uff09\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6e05\u5355")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openIM.wasm\nsql-wasm.wasm\nwasm_exec.js\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u62f7\u8d1d\u5b8c\u6210\u540e\u5728\u60a8\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),"\u6587\u4ef6\u4e2d\u901a\u8fc7 script \u6807\u7b7e\u5f15\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"wasm_exec.js"),"\u6587\u4ef6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u80fd\u5b58\u5728\u7684\u95ee\u9898"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528webpack4\uff0c\u53ef\u80fd\u9700\u8981\u53c2\u8003\u8fd9\u4e2aissue\u6765\u8fdb\u884c\u914d\u7f6e",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-sdk-web-wasm/issues/73"},"How to import open-im-sdk-wasm in webpack4.x"))))),(0,r.kt)("h3",{id:"3-\u5f15\u5165-sdk"},"3. \u5f15\u5165 SDK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8fdb\u7a0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import OpenIMSDKMain from '@openim/electron-client-sdk';\n\n...\nnew OpenIMSDKMain(libPath, mainWindow.webContents);\n...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"preload\u811a\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import '@openim/electron-client-sdk/lib/preload';\n\n...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6e32\u67d3\u8fdb\u7a0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n\nconst { instance } = getWithRenderProcess();\n\nexport const IMSDK = instance;\n")),(0,r.kt)("h3",{id:"4-\u767b\u5f55\u8bbe\u7f6e\u76d1\u542c"},"4. \u767b\u5f55\u3001\u8bbe\u7f6e\u76d1\u542c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728electron\u548cweb\u73af\u5883\u4e0b\uff0c\u521d\u59cb\u5316SDK\u7684\u65b9\u5f0f\u6709\u6240\u4e0d\u540c\u3002\u5982\u679c\u9700\u8981\u540c\u65f6\u652f\u6301electron\u548cweb\uff0c\u9700\u8981\u6ce8\u610f\u5206\u522b\u5904\u7406\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CbEvents, LogLevel } from 'open-im-sdk-wasm';\nimport type { WSEvent } from 'open-im-sdk-wasm/lib/types/entity';\n\nIMSDK.on(CbEvents.OnConnecting, handleConnecting);\nIMSDK.on(CbEvents.OnConnectFailed, handleConnectFailed);\nIMSDK.on(CbEvents.OnConnectSuccess, handleConnectSuccess);\n\n// electron\nawait IMSDK.initSDK({\n  platformID: 'your-platform-id',\n  apiAddr: 'http://your-server-ip:10002',\n  wsAddr: 'ws://your-server-ip:10001',\n  dataDir: 'your-db-dir',\n  logFilePath: 'your-log-file-path',\n  logLevel: LogLevel.Debug,\n  isLogStandardOutput: true,\n});\n\nawait IMSDK.login({\n  userID: 'your-user-id',\n  token: 'your-token',\n});\n\n// web\nawait IMSDK.login({\n  userID: 'your-user-id',\n  token: 'your-token',\n  platformID: 5,\n  apiAddr: 'http://your-server-ip:10002',\n  wsAddr: 'ws://your-server-ip:10001',\n  logLevel: LogLevel.Debug,\n});\n\nfunction handleConnecting() {\n  // Connecting...\n}\n\nfunction handleConnectFailed({ errCode, errMsg }: WSEvent) {\n  // Connection failed \u274c\n  console.log(errCode, errMsg);\n}\n\nfunction handleConnectSuccess() {\n  // Connection successful \u2705\n}\n")),(0,r.kt)("h3",{id:"5-\u6536\u53d1\u6d88\u606f"},"5. \u6536\u53d1\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CbEvents } from 'open-im-sdk-wasm';\nimport type { WSEvent, MessageItem } from 'open-im-sdk-wasm/lib/types/entity';\n\n// Listenfor new messages \ud83d\udce9\nIMSDK.on(CbEvents.OnRecvNewMessages, handleNewMessages);\n\nconst message = (await IMSDK.createTextMessage('hello openim')).data;\n\nIMSDK.sendMessage({\n  recvID: 'recv user id',\n  groupID: '',\n  message,\n})\n  .then(() => {\n    // Message sent successfully \u2709\ufe0f\n  })\n  .catch(err => {\n    // Failed to send message \u274c\n    console.log(err);\n  });\n\nfunction handleNewMessages({ data }: WSEvent<MessageItem[]>) {\n  // New message list \ud83d\udce8\n  console.log(data);\n}\n")))}k.isMDXComponent=!0}}]);