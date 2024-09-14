"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[15356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,c=u["".concat(s,".").concat(g)]||u[g]||m[g]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},72723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={sidebar_position:11,toc_min_heading_level:2,toc_max_heading_level:2},s="createVideoMessageByFile",p={unversionedId:"api/message/createVideoMessageByFile",id:"api/message/createVideoMessageByFile",title:"createVideoMessageByFile",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/message/createVideoMessageByFile.mdx",sourceDirName:"api/message",slug:"/api/message/createVideoMessageByFile",permalink:"/sdks/api/message/createVideoMessageByFile",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/createVideoMessageByFile.mdx",tags:[],version:"current",lastUpdatedAt:1726294257,formattedLastUpdatedAt:"Sep 14, 2024",sidebarPosition:11,frontMatter:{sidebar_position:11,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"createVideoMessageByURL",permalink:"/sdks/api/message/createVideoMessageByURL"},next:{title:"createFileMessageFromFullPath",permalink:"/sdks/api/message/createFileMessageFromFullPath"}},d={},u=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Code Example",id:"code-example",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},g=m("Tabs"),c=m("TabItem"),k={toc:u},b="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(b,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"createvideomessagebyfile"},"createVideoMessageByFile"),(0,a.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Create video message")),(0,a.kt)("admonition",{title:"Attention",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Supported only on the web platform. It is recommended not to use for large file uploads. For files larger than 1GB, it's recommended to use the ",(0,a.kt)("a",{parentName:"p",href:"/sdks/api/message/createVideoMessageByURL"},"createVideoMessageByURL")," interface.")),(0,a.kt)(g,{groupId:"sdks-language",values:[{label:"Browser/Electron/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,a.kt)(c,{value:"Web",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.createVideoMessageByFile({\n  videoPath: string;\n  duration: number;\n  videoType: string;\n  snapshotPath: string;\n  videoUUID: string;\n  videoUrl: string;\n  videoSize: number;\n  snapshotUUID: string;\n  snapshotSize: number;\n  snapshotUrl: string;\n  snapshotWidth: number;\n  snapshotHeight: number;\n  snapShotType: string;\n  videoFile: File;\n  snapshotFile: File;\n}, operationID?: string): Promise<WsResponse<MessageItem>>\n")),(0,a.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"videoPath"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Absolute file path, pass an empty string if not available.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"duration"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Video duration.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"videoType"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"File type, generally the file extension.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"snapshotPath"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Video thumbnail path, pass an empty string if not available.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"videoUUID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique ID for the video file.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"videoUrl"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Video download URL. If uploading yourself and sending via ",(0,a.kt)("a",{parentName:"td",href:"/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss"),", input the remote URL. Otherwise, use an empty string.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"videoSize"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"File size.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"snapshotUUID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique ID for the video thumbnail.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"snapshotSize"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Size of the video thumbnail.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"snapshotUrl"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Download URL for the video thumbnail. If uploading yourself and sending via ",(0,a.kt)("a",{parentName:"td",href:"/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss"),", input the remote URL. Otherwise, use an empty string.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"snapshotWidth"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Width of the video thumbnail.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"snapshotHeight"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Height of the video thumbnail.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"snapShotType"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the video thumbnail, generally the file extension.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"videoFile"),(0,a.kt)("td",{parentName:"tr",align:null},"File"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Video file object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"snapshotFile"),(0,a.kt)("td",{parentName:"tr",align:null},"File"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Video thumbnail file object.")))),(0,a.kt)("h3",{id:"return-result"},"Return Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),">",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Successful callback")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WsResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Failure callback")))),(0,a.kt)("h3",{id:"code-example"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from 'open-im-sdk-wasm';\nconst IMSDK = getSDK();\n\n// use in electron with ffi\n// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n// const { instance: IMSDK } = getWithRenderProcess();\n\n// use in mini program\n// import { OpenIMSDK } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\n\nIMSDK.createVideoMessageByFile({\n  videoPath: videoFile.path,\n  duration: 6,\n  videoType: videoFile.type,\n  snapshotPath: snapshotFile.path,\n  videoUUID: '',\n  videoUrl: '',\n  videoSize: videoFile.size,\n  snapshotUUID: '',\n  snapshotSize: snapshotFile.size,\n  snapshotUrl: '',\n  snapshotWidth: 1024,\n  snapshotHeight: 1024,\n  snapShotType: snapshotFile.type,\n  videoFile,\n  snapshotFile,\n})\n  .then(({ data }) => {\n    // Successful call\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failed call\n  });\n")))))}h.isMDXComponent=!0}}]);