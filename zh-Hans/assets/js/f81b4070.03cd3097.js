"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[66544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,b=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},p="setGroupListener",u={unversionedId:"api/group/setGroupListener",id:"api/group/setGroupListener",title:"setGroupListener",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/api/group/setGroupListener.mdx",sourceDirName:"api/group",slug:"/api/group/setGroupListener",permalink:"/zh-Hans/sdks/api/group/setGroupListener",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/group/setGroupListener.mdx",tags:[],version:"current",lastUpdatedAt:1728553238,formattedLastUpdatedAt:"2024\u5e7410\u670810\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"\u7fa4\u7ec4\u76f8\u5173",permalink:"/zh-Hans/sdks/api/group/"},next:{title:"createGroup",permalink:"/zh-Hans/sdks/api/group/createGroup"}},s={},d=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-2",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-3",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-3",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-3",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=m("Tabs"),b=m("TabItem"),k={toc:d},f="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(f,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setgrouplistener"},"setGroupListener"),(0,r.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,r.kt)("admonition",{title:"\u8bf4\u660e",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8bbe\u7f6e\u7fa4\u7ec4\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u5bf9\u4e8e\u7fa4\u7ec4\u53d8\u5316\u7684\u76f8\u5173\u4e8b\u4ef6\uff0c\u8fdb\u884c\u5f02\u6b65\u56de\u8c03\u901a\u77e5\uff0c\u4ee5\u4fbf UI \u80fd\u53ca\u65f6\u611f\u77e5\u5e76\u5904\u7406\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\uff081\uff09\u5728 initSDK \u4e4b\u540e\u7acb\u523b\u8c03\u7528\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\uff082\uff09\u53ea\u80fd\u8c03\u7528\u4e00\u6b21\u3002")),(0,r.kt)(c,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,r.kt)(b,{value:"Flutter",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u51fd\u6570\u539f\u578b"},"\u51fd\u6570\u539f\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0}," Future setGroupListener(OnGroupListener listener)\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/listener/groupListener"},"OnGroupListener")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  OpenIM.iMManager.groupManager.setGroupListener(OnGroupListener(\n      onGroupApplicationAccepted: (GroupApplicationInfo info){},\n      onGroupApplicationAdded: (GroupApplicationInfo info){},\n      onGroupApplicationDeleted: (GroupApplicationInfo info){},\n      onGroupApplicationRejected: (GroupApplicationInfo info){},\n      onGroupInfoChanged: (GroupInfo info){},\n      onGroupMemberAdded: (GroupMembersInfo info){},\n      onGroupMemberDeleted: (GroupMembersInfo info){},\n      onGroupMemberInfoChanged: (GroupMembersInfo info){},\n      onJoinedGroupAdded: (GroupInfo info){},\n      onJoinedGroupDeleted: (GroupInfo info){},\n    ));\n"))),(0,r.kt)(b,{value:"iOS",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-1"},"\u51fd\u6570\u539f\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"\n- (void)addGroupListener:(id<OIMGroupListener>)listener NS_SWIFT_NAME(addGroupListener(listener:));\n\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},"id < ",(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/listener/groupListener"},"GroupListener")," >"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-1"},"\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n[OIMManager.callbacker addGroupListener:self];\n\n"))),(0,r.kt)(b,{value:"Android",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-2"},"\u51fd\u6570\u539f\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"    public void setOnGroupListener(OnGroupListener listener)\n")),(0,r.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570"},"\u8f93\u5165\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/listener/groupListener"},"OnGroupListener")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56de\u8c03\u63a5\u53e3")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-2"},"\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMClient.getInstance().groupManager.setOnGroupListener(new OnGroupListener() {\n            @Override\n            public void onGroupApplicationAccepted(GroupApplicationInfo info) {\n\n            }\n\n            @Override\n            public void onGroupApplicationAdded(GroupApplicationInfo info) {\n\n            }\n\n            @Override\n            public void onGroupApplicationDeleted(GroupApplicationInfo info) {\n\n            }\n\n            @Override\n            public void onGroupApplicationRejected(GroupApplicationInfo info) {\n\n            }\n\n            @Override\n            public void onGroupInfoChanged(GroupInfo info) {\n\n            }\n\n            @Override\n            public void onGroupMemberAdded(GroupMembersInfo info) {\n\n            }\n\n            @Override\n            public void onGroupMemberDeleted(GroupMembersInfo info) {\n\n            }\n\n            @Override\n            public void onGroupMemberInfoChanged(GroupMembersInfo info) {\n\n            }\n\n            @Override\n            public void onJoinedGroupAdded(GroupInfo info) {\n\n            }\n\n            @Override\n            public void onJoinedGroupDeleted(GroupInfo info) {\n\n            }\n        });\n"))),(0,r.kt)(b,{value:"Web",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u767b\u5f55\u6210\u529f\u540e\u81ea\u52a8\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u76d1\u542c\uff0c",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/listener/groupListener"},"\u7fa4\u7ec4\u4e8b\u4ef6\u8be6\u60c5\u53c2\u89c1")))),(0,r.kt)(b,{value:"uni-app",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u521d\u59cb\u5316\u6210\u529f\u540e\u81ea\u52a8\u8bbe\u7f6e \u56de\u8c03\u4f1a\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"globalEvent"),"\u4f20\u9012\u5230\u5ba2\u6237\u7aef\uff0c",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/listener/groupListener"},"\u7fa4\u7ec4\u4e8b\u4ef6\u8be6\u60c5\u53c2\u89c1")))),(0,r.kt)(b,{value:"React-Native",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u767b\u5f55\u6210\u529f\u540e\u81ea\u52a8\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u76d1\u542c\uff0c",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/listener/groupListener"},"\u7fa4\u7ec4\u4e8b\u4ef6\u8be6\u60c5\u53c2\u89c1")))),(0,r.kt)(b,{value:"Unity",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-3"},"\u51fd\u6570\u539f\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"public static void SetGroupListener(IGroupListener l)\n")),(0,r.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-1"},"\u8f93\u5165\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/listener/groupListener"},"IGroupListener")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56de\u8c03\u63a5\u53e3")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-3"},"\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-3"},"\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.SetGroupListener(IGroupListener l);\n\n")))))}g.isMDXComponent=!0}}]);