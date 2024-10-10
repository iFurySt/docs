"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[4039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||c[d]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[f]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>f});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},u="FullUserInfo",s={unversionedId:"class/user/fullUserInfo",id:"class/user/fullUserInfo",title:"FullUserInfo",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/class/user/fullUserInfo.mdx",sourceDirName:"class/user",slug:"/class/user/fullUserInfo",permalink:"/zh-Hans/sdks/class/user/fullUserInfo",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/class/user/fullUserInfo.mdx",tags:[],version:"current",lastUpdatedAt:1728553238,formattedLastUpdatedAt:"2024\u5e7410\u670810\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"UserStatusInfo",permalink:"/zh-Hans/sdks/class/user/userStatusInfo"},next:{title:"PublicInfo",permalink:"/zh-Hans/sdks/class/user/publicInfo"}},p={},f=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"FullUserInfo",id:"fulluserinfo-1",level:3},{value:"OIMFullUserInfo",id:"oimfulluserinfo",level:3},{value:"\u53c2\u6570\u8be6\u89e3",id:"\u53c2\u6570\u8be6\u89e3",level:3},{value:"FullUserInfo",id:"fulluserinfo-2",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("Tabs"),m=c("TabItem"),k={toc:f},b="wrapper";function y(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(b,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fulluserinfo"},"FullUserInfo"),(0,r.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6574\u5408\u4e86 PublicInfo\uff0c FriendInfo \u548c BlackInfo"),(0,r.kt)("p",{parentName:"admonition"},"getuserinfo \u65f6\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u662f\u597d\u53cb\uff0cpublicInfo \u548c friendInfo \u4f1a\u8bbe\u7f6e\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u662f\u9ed1\u540d\u5355\uff0cpublicinfo \u548c blackInfo \u4f1a\u8bbe\u7f6e",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u65e2\u662f\u597d\u53cb\uff0c\u4e5f\u662f\u9ed1\u540d\u5355\uff0c\u5219 publicInfo\uff0c friendInfo\uff0cblackInfo \u90fd\u4f1a\u8bbe\u7f6e"),(0,r.kt)("p",{parentName:"admonition"},"getfriend \u65f6",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u662f\u9ed1\u540d\u5355\uff0c\u5219 friendInfo \u548c blackInfo \u4f1a\u8bbe\u7f6e\uff0c \u4f46 publicInfo \u4e0d\u8bbe\u7f6e")),(0,r.kt)(d,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Flutter",value:"Flutter"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,r.kt)(m,{value:"Flutter",mdxType:"TabItem"},(0,r.kt)("h3",{id:"fulluserinfo-1"},"FullUserInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publicInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/user/publicInfo"},"PublicInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u57fa\u672c\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"friendInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/relation/friendInfo"},"FriendInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blackInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/relation/blackInfo"},"BlacklistInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u4fe1\u606f"))))),(0,r.kt)(m,{value:"iOS",mdxType:"TabItem"},(0,r.kt)("h3",{id:"oimfulluserinfo"},"OIMFullUserInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publicInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/user/publicInfo"},"OIMPublicInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u57fa\u672c\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"friendInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/relation/friendInfo"},"OIMFriendInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blackInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/relation/blackInfo"},"OIMBlackInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u4fe1\u606f"))))),(0,r.kt)(m,{value:"Android",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u53c2\u6570\u8be6\u89e3"},"\u53c2\u6570\u8be6\u89e3")),(0,r.kt)(m,{value:"Unity",mdxType:"TabItem"},(0,r.kt)("h3",{id:"fulluserinfo-2"},"FullUserInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PublicInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/user/publicInfo"},"PublicInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u57fa\u672c\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FriendInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/relation/friendInfo"},"FriendInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BlackInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/relation/blackInfo"},"BlackInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u4fe1\u606f")))))))}y.isMDXComponent=!0}}]);