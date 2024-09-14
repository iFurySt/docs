"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[63165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(b,o(o({ref:t},l),{},{components:n})):r.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={sidebar_position:0,toc_min_heading_level:2,toc_max_heading_level:2},p="setBatchMsgListener",c={unversionedId:"api/message/setBatchMsgListener",id:"api/message/setBatchMsgListener",title:"setBatchMsgListener",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/api/message/setBatchMsgListener.mdx",sourceDirName:"api/message",slug:"/api/message/setBatchMsgListener",permalink:"/zh-Hans/sdks/api/message/setBatchMsgListener",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/setBatchMsgListener.mdx",tags:[],version:"current",lastUpdatedAt:1726294257,formattedLastUpdatedAt:"2024\u5e749\u670814\u65e5",sidebarPosition:0,frontMatter:{sidebar_position:0,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"setMessageListener",permalink:"/zh-Hans/sdks/api/message/setMessageListener"},next:{title:"createTextMessage",permalink:"/zh-Hans/sdks/api/message/createTextMessage"}},l={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-1",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-2",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=m("Tabs"),b=m("TabItem"),f={toc:u},g="wrapper";function y(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setbatchmsglistener"},"setBatchMsgListener"),(0,r.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,r.kt)("admonition",{title:"\u8bf4\u660e",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8bbe\u7f6e\u6279\u91cf\u89e6\u53d1\u6d88\u606f\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u5bf9\u4e8e\u65b0\u6d88\u606f\u8fdb\u884c\u6279\u91cf\u63a8\u9001\uff0c\u5efa\u8bae\u4f7f\u7528\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\uff081\uff09\u5728 initSDK \u4e4b\u540e\u7acb\u523b\u8c03\u7528\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\uff082\uff09\u53ea\u80fd\u8c03\u7528\u4e00\u6b21\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\uff083\uff09\u8bbe\u7f6e\u540e",(0,r.kt)("inlineCode",{parentName:"p"},"advancedMsgListener"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"onRecvNewMessage"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"onRecvOfflineNewMessage"),"\u56de\u8c03\u4e0d\u518d\u89e6\u53d1\u3002")),(0,r.kt)(d,{groupId:"sdks-language",values:[{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"}],mdxType:"Tabs"},(0,r.kt)(b,{value:"Flutter",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u51fd\u6570\u539f\u578b"},"\u51fd\u6570\u539f\u578b")),(0,r.kt)(b,{value:"iOS",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-1"},"\u51fd\u6570\u539f\u578b")),(0,r.kt)(b,{value:"Android",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-2"},"\u51fd\u6570\u539f\u578b")),(0,r.kt)(b,{value:"Web",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u767b\u5f55\u6210\u529f\u540e\u81ea\u52a8\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u76d1\u542c\uff0c",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/listener/batchMsgListener"},"\u6d88\u606f\u4e8b\u4ef6\u8be6\u60c5\u53c2\u89c1")))),(0,r.kt)(b,{value:"uni-app",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u521d\u59cb\u5316\u6210\u529f\u540e\u81ea\u52a8\u8bbe\u7f6e \u56de\u8c03\u4f1a\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"globalEvent"),"\u4f20\u9012\u5230\u5ba2\u6237\u7aef\uff0c",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/listener/batchMsgListener"},"\u6d88\u606f\u4e8b\u4ef6\u8be6\u60c5\u53c2\u89c1")))),(0,r.kt)(b,{value:"Unity",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u767b\u5f55\u6210\u529f\u540e\u81ea\u52a8\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u76d1\u542c\uff0c",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/listener/batchMsgListener"},"\u6d88\u606f\u4e8b\u4ef6\u8be6\u60c5\u53c2\u89c1"))))))}y.isMDXComponent=!0}}]);