"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[66945],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(a),k=r,c=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},27742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>s});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={sidebar_position:4,toc_min_heading_level:2,toc_max_heading_level:2},p="getFriendList",u={unversionedId:"api/relation/getFriendList",id:"api/relation/getFriendList",title:"getFriendList",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/relation/getFriendList.mdx",sourceDirName:"api/relation",slug:"/api/relation/getFriendList",permalink:"/sdks/api/relation/getFriendList",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/relation/getFriendList.mdx",tags:[],version:"current",lastUpdatedAt:1733218373,formattedLastUpdatedAt:"Dec 3, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"getFriendApplicationListAsRecipient",permalink:"/sdks/api/relation/getFriendApplicationListAsRecipient"},next:{title:"getFriendListPage",permalink:"/sdks/api/relation/getFriendListPage"}},m={},s=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Values",id:"return-values",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Function Prototype",id:"function-prototype-1",level:3},{value:"Input Parameters",id:"input-parameters-1",level:3},{value:"Return Values",id:"return-values-1",level:3},{value:"Code Example",id:"code-example-1",level:3},{value:"Function Prototype",id:"function-prototype-2",level:3},{value:"Input Parameters",id:"input-parameters-2",level:3},{value:"Return Values",id:"return-values-2",level:3},{value:"Code Example",id:"code-example-2",level:3},{value:"Function Prototype",id:"function-prototype-3",level:3},{value:"Input Parameters",id:"input-parameters-3",level:3},{value:"Return Values",id:"return-values-3",level:3},{value:"Code Example",id:"code-example-3",level:3},{value:"Function Prototype",id:"function-prototype-4",level:3},{value:"Input Parameters",id:"input-parameters-4",level:3},{value:"Return Values",id:"return-values-4",level:3},{value:"Code Example",id:"code-example-4",level:3},{value:"Function Prototype",id:"function-prototype-5",level:3},{value:"Input Parameters",id:"input-parameters-5",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Code Example",id:"code-example-5",level:3},{value:"Function Prototype",id:"function-prototype-6",level:3},{value:"Input Parameter",id:"input-parameter",level:3},{value:"Code Example",id:"code-example-6",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},k=d("Tabs"),c=d("TabItem"),N={toc:s},g="wrapper";function b(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},N,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getfriendlist"},"getFriendList"),(0,n.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,n.kt)("admonition",{title:"Description",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Retrieve all of one's friends in a single call.")),(0,n.kt)(k,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,n.kt)(c,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  Future<List<FriendInfo>> getFriendList({String? operationID, bool filterBlack = false})\n")),(0,n.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filterBlack"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to filter out the blacklist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation ID, used for problem location, unique, recommended to use current time and random number")))),(0,n.kt)("h3",{id:"return-values"},"Return Values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},"List< ",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/relation/friendInfo"},"FriendInfo")," ","*"," >"),(0,n.kt)("td",{parentName:"tr",align:null},"Successful Return")))),(0,n.kt)("h3",{id:"code-example"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    List<FriendInfo> list = await OpenIM.iMManager.friendshipManager.getFriendList();\n    // todo\n"))),(0,n.kt)(c,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-1"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)getFriendListWithFilterBlack:(BOOL)filterBlack\n                          onSuccess:(nullable OIMFriendInfoCallback)onSuccess\n                         onFailure:(nullable OIMFailureCallback)onFailure;\n\n")),(0,n.kt)("h3",{id:"input-parameters-1"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filterBlack"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to filter out the blacklist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation ID, used for problem location, unique, recommended to use current time and random number")))),(0,n.kt)("h3",{id:"return-values-1"},"Return Values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onSuccess"),(0,n.kt)("td",{parentName:"tr",align:null},"NSArray< ",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/relation/friendInfo"},"OIMFriendInfo")," ","*"," >"),(0,n.kt)("td",{parentName:"tr",align:null},"Successful Return")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onFailure"),(0,n.kt)("td",{parentName:"tr",align:null},"OIMFailureCallback"),(0,n.kt)("td",{parentName:"tr",align:null},"Failure Return")))),(0,n.kt)("h3",{id:"code-example-1"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n[OIMManager.manager getFriendListWithFilterBlack: NO,\nonSuccess:^(NSArray<OIMFriendInfo *> * _Nullable userInfos) {\n} onFailure:^(NSInteger code, NSString * _Nullable msg) {\n}];\n\n"))),(0,n.kt)(c,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-2"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"\n public void getFriendList(OnBase<List<UserInfo>> base, Boolean filterBlack)\n\n")),(0,n.kt)("h3",{id:"input-parameters-2"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filterBlack"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"if true, the return value will not be include blacklist users.")))),(0,n.kt)("h3",{id:"return-values-2"},"Return Values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"List<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/user/userInfo"},"UserInfo"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Success")))),(0,n.kt)("h3",{id:"code-example-2"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMClient.getInstance().friendshipManager.getFriendList(new OnBase<List<UserInfo>>() {\n    @Override\n    public void onError(int code, String error) {\n        // todo: request error\n    }\n    @Override\n    public void onSuccess(List<UserInfo> data) {\n        // todo: request success\n    }\n}, filterBlack);\n"))),(0,n.kt)(c,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-3"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.getFriendList(filterBlack?: boolean, operationID?: string): Promise<WsResponse<FriendUserItem[]>>\n")),(0,n.kt)("h3",{id:"input-parameters-3"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filterBlack"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to filter out the blacklist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation ID, used for problem location, unique, recommended to use current time and random number")))),(0,n.kt)("h3",{id:"return-values-3"},"Return Values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/relation/friendInfo"},"FriendUserItem"),"[]>",">"),(0,n.kt)("td",{parentName:"tr",align:null},"List of friend info")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WsResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Failure callback")))),(0,n.kt)("h3",{id:"code-example-3"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from '@openim/wasm-client-sdk';\nconst IMSDK = getSDK();\n\n// use in electron with ffi\n// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n// const { instance: IMSDK } = getWithRenderProcess();\n\n// use in mini program\n// import { getSDK } from '@openim/client-sdk';\n// const IMSDK = getSDK();\n\nIMSDK.getFriendList()\n  .then(({ data }) => {\n    // Success\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failure\n  });\n"))),(0,n.kt)(c,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-4"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.asyncApi('getFriendList', operationID: string, filterBlack: boolean): Promise<FriendUserItem[]>\n")),(0,n.kt)("h3",{id:"input-parameters-4"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filterBlack"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to filter out the blacklist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation ID for troubleshooting, recommended unique timestamp")))),(0,n.kt)("h3",{id:"return-values-4"},"Return Values"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Utilizing the ",(0,n.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill")," package to make the function Promise-based. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"catch")," to handle successful and failed callbacks.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/relation/friendInfo"},"FriendUserItem"),"[]",">"),(0,n.kt)("td",{parentName:"tr",align:null},"List of friend info")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Failure callback")))),(0,n.kt)("h3",{id:"code-example-4"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('getFriendList', IMSDK.uuid(), false)\n  .then((data) => {\n    // Success\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failure\n  });\n"))),(0,n.kt)(c,{value:"React-Native",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-5"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.getFriendList(filterBlack: boolean, operationID: string): Promise<FriendUserItem[]>\n")),(0,n.kt)("h3",{id:"input-parameters-5"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filterBlack"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to filter out the blacklist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation ID, used for problem location, keep unique, suggest using current time and random number")))),(0,n.kt)("h3",{id:"return-result"},"Return Result"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/relation/friendInfo"},"FriendUserItem"),"[]",">"),(0,n.kt)("td",{parentName:"tr",align:null},"List of friend info")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback on failed call")))),(0,n.kt)("h3",{id:"code-example-5"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from \"open-im-sdk-rn\";\n\nOpenIMSDKRN.getFriendList(false, 'operationID')\n  .then((data) => {\n    // Success\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failure\n  });\n"))),(0,n.kt)(c,{value:"Unity",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-6"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic static void GetFriendList(OnBase<FriendInfo> cb,bool filterBlack)\n\n")),(0,n.kt)("h3",{id:"input-parameter"},"Input Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cb"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/callback/onBase"},"OnBase"),"<List<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/relation/friendInfo"},"FriendInfo"),">>"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filterBlack"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to filter out the blacklist")))),(0,n.kt)("h3",{id:"code-example-6"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\nIMSDK.GetFriendList((list,errCode,errMsg)=>{\n\n},true);\n\n")))))}b.isMDXComponent=!0}}]);