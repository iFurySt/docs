"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[80775],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),d=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},s="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(r),k=n,f=s["".concat(o,".").concat(k)]||s[k]||g[k]||l;return r?a.createElement(f,i(i({ref:e},m),{},{components:r})):a.createElement(f,i({ref:e},m))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},13585:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>s});r(67294);var a=r(3905);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const p={sidebar_position:15,title:"\u66f4\u65b0\u4f1a\u8bdd",hide_title:!0},o=void 0,d={unversionedId:"apis/conversationManagement/updateConversation",id:"apis/conversationManagement/updateConversation",title:"\u66f4\u65b0\u4f1a\u8bdd",description:"\u66f4\u65b0\u4f1a\u8bdd",source:"@site/docs/restapi/apis/conversationManagement/updateConversation.mdx",sourceDirName:"apis/conversationManagement",slug:"/apis/conversationManagement/updateConversation",permalink:"/zh-Hans/restapi/apis/conversationManagement/updateConversation",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/conversationManagement/updateConversation.mdx",tags:[],version:"current",lastUpdatedAt:1726294257,formattedLastUpdatedAt:"2024\u5e749\u670814\u65e5",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"\u66f4\u65b0\u4f1a\u8bdd",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u6392\u5e8f\u540e\u7684\u4f1a\u8bdd\u5217\u8868",permalink:"/zh-Hans/restapi/apis/conversationManagement/getSortedConversationList"},next:{title:"\u53d1\u9001\u6d88\u606f",permalink:"/zh-Hans/restapi/apis/messageManagement/sendMessage"}},m={},s=[{value:"\u66f4\u65b0\u4f1a\u8bdd",id:"\u66f4\u65b0\u4f1a\u8bdd",level:2},{value:"\u7b80\u8981\u63cf\u8ff0",id:"\u7b80\u8981\u63cf\u8ff0",level:3},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",level:3},{value:"\u8bf7\u6c42 URL",id:"\u8bf7\u6c42-url",level:3},{value:"Header",id:"header",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3}],g={toc:s},k="wrapper";function f(t){var{components:e}=t,r=i(t,["components"]);return(0,a.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){n(t,e,r[e])}))}return t}({},g,r),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("h2",{id:"\u66f4\u65b0\u4f1a\u8bdd"},"\u66f4\u65b0\u4f1a\u8bdd")),(0,a.kt)("h3",{id:"\u7b80\u8981\u63cf\u8ff0"},"\u7b80\u8981\u63cf\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u7528\u6237\u5bf9\u540c\u4e00\u4f1a\u8bdd\u53ef\u9009\u62e9\u6027\u7684\u8bbe\u7f6e\u5b57\u6bb5\u3002")),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,a.kt)("h3",{id:"\u8bf7\u6c42-url"},"\u8bf7\u6c42 URL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http://x.x.x.x:10002/conversation/set_conversations")," ")),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"header\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b\u503c"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"operationID\u7528\u4e8e\u5168\u5c40\u94fe\u8def\u8ffd\u8e2a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"token"),(0,a.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5458token")))),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"},"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userIDs": [\n    "1"\n  ],\n  "conversation": {\n    "conversationID": "sg_xadxwr24",\n    "conversationType": 1,\n    "userID": "1",\n    "groupID": "xadxwr24",\n    "recvMsgOpt": 0,\n    "isPinned": false,\n    "isPrivateChat": true,\n    "ex": "",\n    "burnDuration": 30\n  }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"userIDs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8981\u8bbe\u7f6e\u4f1a\u8bdd\u5b57\u6bb5\u7684\u7528\u6237ID\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversationID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bddID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversationType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u7c7b\u578b\uff0c\u5355\u804a\u4e3a1\uff0c\u7fa4\u804a\u4e3a3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u7c7b\u578b\u4e3a\u5355\u804a\u65f6\u5fc5\u586b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"groupID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u7c7b\u578b\u4e3a\u7fa4\u804a\u65f6\u5fc5\u586b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"recvMsgOpt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u514d\u6253\u6270\u72b6\u6001")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"isPinned"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u662f\u5426\u7f6e\u9876")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"isPrivateChat"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f00\u542f\u9605\u540e\u5373\u711a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ex"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u6269\u5c55\u5b57\u6bb5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"burnDuration"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4f1a\u8bdd\u9605\u540e\u5373\u711a\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2")))),(0,a.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": ""\n}\n')),(0,a.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,0\u8868\u793a\u6210\u529f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")))),(0,a.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1001,\n  "errMsg": "ArgsError",\n  "errDlt": "userID is empty: 1001 ArgsError"\n}\n')),(0,a.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,0\u8868\u793a\u6210\u529f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")))))}f.isMDXComponent=!0}}]);