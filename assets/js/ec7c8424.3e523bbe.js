"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[26318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},i="onRecvOfflineNewMessage",p={unversionedId:"callback/onRecvOfflineNewMessage",id:"callback/onRecvOfflineNewMessage",title:"onRecvOfflineNewMessage",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/callback/onRecvOfflineNewMessage.mdx",sourceDirName:"callback",slug:"/callback/onRecvOfflineNewMessage",permalink:"/sdks/callback/onRecvOfflineNewMessage",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/callback/onRecvOfflineNewMessage.mdx",tags:[],version:"current",lastUpdatedAt:1733218373,formattedLastUpdatedAt:"Dec 3, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"onRecvNewMessages",permalink:"/sdks/callback/onRecvNewMessages"},next:{title:"onRecvOfflineNewMessages",permalink:"/sdks/callback/onRecvOfflineNewMessages"}},u={},c=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Return Prototype",id:"return-prototype",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Return Prototype",id:"return-prototype-1",level:3},{value:"Return Result",id:"return-result-1",level:3},{value:"Return Prototype",id:"return-prototype-2",level:3},{value:"Return Result",id:"return-result-2",level:3},{value:"Example Call",id:"example-call",level:3},{value:"Return Prototype",id:"return-prototype-3",level:3},{value:"Return Result",id:"return-result-3",level:3},{value:"Example Call",id:"example-call-1",level:3},{value:"Prototype",id:"prototype",level:3},{value:"Parameter",id:"parameter",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=m("Tabs"),g=m("TabItem"),f={toc:c},k="wrapper";function b(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"onrecvofflinenewmessage"},"onRecvOfflineNewMessage"),(0,a.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When the application is running in the background and a new message is received, this callback is triggered. The callback will carry only one message.")),(0,a.kt)(d,{groupId:"sdks-language",values:[{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,a.kt)(g,{value:"Flutter",mdxType:"TabItem"},(0,a.kt)("h3",{id:"return-prototype"},"Return Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void recvOfflineNewMessage(Message msg)\n")),(0,a.kt)("h3",{id:"return-result"},"Return Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"msg"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"Message")),(0,a.kt)("td",{parentName:"tr",align:null},"New Offline Message"))))),(0,a.kt)(g,{value:"iOS",mdxType:"TabItem"},(0,a.kt)("h3",{id:"return-prototype-1"},"Return Prototype")),(0,a.kt)(g,{value:"Android",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"\nvoid onRecvOfflineNewMessage(List<Message> msg)\n\n")),(0,a.kt)("h3",{id:"return-result-1"},"Return Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"msg"),(0,a.kt)("td",{parentName:"tr",align:null},"List<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"Message"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"New Offline Messages"))))),(0,a.kt)(g,{value:"Web",mdxType:"TabItem"},(0,a.kt)("h3",{id:"return-prototype-2"},"Return Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonRecvOfflineNewMessage(data: WSEvent<MessageItem>): void;\n\n")),(0,a.kt)("h3",{id:"return-result-2"},"Return Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WSEvent"),"<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"New Offline Message")))),(0,a.kt)("h3",{id:"example-call"},"Example Call"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK, CbEvents } from '@openim/wasm-client-sdk';\n// or\n// import { getSDK, CbEvents } from '@openim/client-sdk';\n// const IMSDK = getSDK();\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnRecvOfflineNewMessage, ({ data }) => {\n  // data is the new offline message\n});\n"))),(0,a.kt)(g,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("h3",{id:"return-prototype-3"},"Return Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonRecvOfflineNewMessage(data: WSEvent<MessageItem>): void;\n\n")),(0,a.kt)("h3",{id:"return-result-3"},"Return Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WSEvent"),"<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"New Offline Message")))),(0,a.kt)("h3",{id:"example-call-1"},"Example Call"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.subscribe(IMSDK.IMEvents.OnRecvOfflineNewMessage, ({ data }) => {\n  // data is the new offline message\n});\n"))),(0,a.kt)(g,{value:"Unity",mdxType:"TabItem"},(0,a.kt)("h3",{id:"prototype"},"Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"},"void OnRecvOfflineNewMessage(Message msg);\n")),(0,a.kt)("h3",{id:"parameter"},"Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"msg"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"Message")),(0,a.kt)("td",{parentName:"tr",align:null},"New Offline Message")))))))}b.isMDXComponent=!0}}]);