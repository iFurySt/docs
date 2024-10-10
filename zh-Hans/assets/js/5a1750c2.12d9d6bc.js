"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[91911],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>s});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=u(r),k=a,s=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return r?n.createElement(s,o(o({ref:e},d),{},{components:r})):n.createElement(s,o({ref:e},d))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},55728:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>m});r(67294);var n=r(3905);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const i={title:"\u9519\u8bef\u7801",sidebar_position:11},p=void 0,u={unversionedId:"errcode",id:"errcode",title:"\u9519\u8bef\u7801",description:"\ud83d\udeab \u5168\u5c40\u9519\u8bef\u7801",source:"@site/docs/sdks/errcode.mdx",sourceDirName:".",slug:"/errcode",permalink:"/zh-Hans/sdks/errcode",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/errcode.mdx",tags:[],version:"current",lastUpdatedAt:1728553238,formattedLastUpdatedAt:"2024\u5e7410\u670810\u65e5",sidebarPosition:11,frontMatter:{title:"\u9519\u8bef\u7801",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh-Hans/sdks/faq"}},d={},m=[{value:"\ud83d\udeab \u5168\u5c40\u9519\u8bef\u7801",id:"-\u5168\u5c40\u9519\u8bef\u7801",level:2},{value:"\ud83d\udda5 \u5ba2\u6237\u7aef\u9519\u8bef\u7801",id:"-\u5ba2\u6237\u7aef\u9519\u8bef\u7801",level:2}],c={toc:m},k="wrapper";function s(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){a(t,e,r[e])}))}return t}({},c,r),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-\u5168\u5c40\u9519\u8bef\u7801"},"\ud83d\udeab \u5168\u5c40\u9519\u8bef\u7801"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": \u9519\u8bef\u7801\u5206\u4e3a\u4e24\u7c7b\uff1a"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5ba2\u6237\u7aef\u9519\u8bef\u7801"),": \u8303\u56f4 ",(0,n.kt)("inlineCode",{parentName:"li"},"10000~20000")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u670d\u52a1\u5668\u9519\u8bef\u7801"),": \u8303\u56f4 ",(0,n.kt)("inlineCode",{parentName:"li"},"0~9999")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"App\u670d\u52a1\u7aef\u81ea\u5b9a\u4e49Webhooks\u9519\u8bef\u7801"),"\uff1a\u8303\u56f4 ",(0,n.kt)("inlineCode",{parentName:"li"},"20001-29999")))),(0,n.kt)("h2",{id:"-\u5ba2\u6237\u7aef\u9519\u8bef\u7801"},"\ud83d\udda5 \u5ba2\u6237\u7aef\u9519\u8bef\u7801"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u9519\u8bef\u7801")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u9519\u8bef\u89e3\u91ca")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10000"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83c\udf10 \u7f51\u7edc\u8bf7\u6c42\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10001"),(0,n.kt)("td",{parentName:"tr",align:null},"\u23f1 \u7f51\u7edc\u7b49\u5f85\u8d85\u65f6\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10002"),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c \u53c2\u6570\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10003"),(0,n.kt)("td",{parentName:"tr",align:null},"\u231b \u4e0a\u4e0b\u6587\u8d85\u65f6\u9519\u8bef\uff0c\u901a\u5e38\u4e3a\u7528\u6237\u5df2\u7ecf\u9000\u51fa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10004"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 \u8d44\u6e90\u672a\u52a0\u8f7d\u5b8c\u6bd5\uff0c\u901a\u5e38\u4e3a\u672a\u521d\u59cb\u5316\uff0c\u6216\u8005\u767b\u5f55\u63a5\u53e3\u8fd8\u672a\u6210\u529f\u8fd4\u56de")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10005"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2753 \u672a\u77e5\u9519\u8bef\uff0c\u9700\u6839\u636e ",(0,n.kt)("inlineCode",{parentName:"td"},"errmsg")," \u786e\u8ba4\u539f\u56e0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10006"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udea8 SDK \u5185\u90e8\u9519\u8bef\uff0c\u9700\u6839\u636e ",(0,n.kt)("inlineCode",{parentName:"td"},"errmsg")," \u786e\u8ba4\u539f\u56e0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10100"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab \u7528\u6237\u4e0d\u5b58\u5728\u6216\u672a\u6ce8\u518c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10101"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeaa \u7528\u6237\u5df2\u9000\u51fa\u767b\u5f55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10102"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udd04 \u7528\u6237\u91cd\u590d\u767b\u5f55\uff0c\u53ef\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"td"},"getloginstatus")," \u786e\u8ba4\u767b\u5f55\u72b6\u6001\uff0c\u907f\u514d\u91cd\u590d\u767b\u5f55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10200"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab \u9700\u4e0a\u4f20\u7684\u6587\u4ef6\u4e0d\u5b58\u5728")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10201"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab \u6d88\u606f\u89e3\u538b\u5931\u8d25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10202"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab \u6d88\u606f\u89e3\u7801\u5931\u8d25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10203"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab \u4e0d\u652f\u6301\u7684\u957f\u8fde\u63a5\u4e8c\u8fdb\u5236\u534f\u8bae")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10204"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab \u6d88\u606f\u91cd\u590d\u53d1\u9001")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10205"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab \u6d88\u606f\u5185\u5bb9\u7c7b\u578b\u4e0d\u652f\u6301")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10301"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab \u4e0d\u652f\u6301\u7684\u4f1a\u8bdd\u64cd\u4f5c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10400"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab \u7fa4ID \u4e0d\u5b58\u5728")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10401"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab \u7fa4\u7ec4\u7c7b\u578b\u9519\u8bef")))))}s.isMDXComponent=!0}}]);