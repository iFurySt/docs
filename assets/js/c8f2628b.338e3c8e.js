"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[83576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,u=m["".concat(s,".").concat(f)]||m[f]||c[f]||l;return r?a.createElement(u,i(i({ref:t},d),{},{components:r})):a.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={sidebar_position:3,title:"Set Fields for Multiple Users on the Same ConversationID",hide_title:!0},s=void 0,p={unversionedId:"apis/conversationManagement/setConversations",id:"apis/conversationManagement/setConversations",title:"Set Fields for Multiple Users on the Same ConversationID",description:"Set Fields for Multiple Users on the Same ConversationID",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/apis/conversationManagement/setConversations.mdx",sourceDirName:"apis/conversationManagement",slug:"/apis/conversationManagement/setConversations",permalink:"/restapi/apis/conversationManagement/setConversations",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/conversationManagement/setConversations.mdx",tags:[],version:"current",lastUpdatedAt:1733218373,formattedLastUpdatedAt:"Dec 3, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Set Fields for Multiple Users on the Same ConversationID",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Get Sorted Conversation List",permalink:"/restapi/apis/conversationManagement/getSortedConversationList"},next:{title:"Send Message",permalink:"/restapi/apis/messageManagement/sendMessage"}},d={},m=[{value:"Set Fields for Multiple Users on the Same ConversationID",id:"set-fields-for-multiple-users-on-the-same-conversationid",level:2},{value:"Brief Description",id:"brief-description",level:3},{value:"Request Method",id:"request-method",level:3},{value:"Request URL",id:"request-url",level:3},{value:"Header",id:"header",level:3},{value:"Request Parameters Example",id:"request-parameters-example",level:3},{value:"Success Response Example",id:"success-response-example",level:3},{value:"Success Response Parameters Description",id:"success-response-parameters-description",level:3},{value:"Failure Response Example",id:"failure-response-example",level:3},{value:"Failure Response Parameters Description",id:"failure-response-parameters-description",level:3}],c={toc:m},f="wrapper";function u(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)(f,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("h2",{id:"set-fields-for-multiple-users-on-the-same-conversationid"},"Set Fields for Multiple Users on the Same ConversationID")),(0,a.kt)("h3",{id:"brief-description"},"Brief Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allows multiple users to selectively set fields for the same conversation.")),(0,a.kt)("h3",{id:"request-method"},"Request Method"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,a.kt)("h3",{id:"request-url"},"Request URL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{API_ADDRESS}/conversation/set_conversations")," ")),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Header Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Example Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Used for global trace tracking. It is recommended to use a timestamp, unique for each request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"token"),(0,a.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/restapi/apis/authenticationManagement/getAdminToken"},"Admin token"))))),(0,a.kt)("h3",{id:"request-parameters-example"},"Request Parameters Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userIDs": [\n    "6965946400"\n  ],\n  "conversation": {\n    "conversationID": "si_4365007572_6965946400",\n    "conversationType": 1,\n    "userID": "4365007572",\n    "groupID": "",\n    "recvMsgOpt": 0,\n    "attachedInfo": "attached",\n    "isPinned": false,\n    "isPrivateChat": true,\n    "ex": "",\n    "burnDuration": 30\n  }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"userIDs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of user IDs for whom conversation fields are to be set")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversation"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Conversation object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversation.conversationID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ConversationID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversation.conversationType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Conversation type: 1 for single chat, 3 for group chat")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversation.userID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required for single chat")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversation.groupID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required for group chat")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversation.recvMsgOpt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Mute status for the conversation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversation.attachedInfo"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Attached information for the conversation, reserved field")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversation.isPinned"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether the conversation is pinned")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversation.isPrivateChat"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Enables self-destruct mode for messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversation.ex"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extended field for the conversation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"conversation.burnDuration"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Self-destruct time for messages in seconds")))),(0,a.kt)("h3",{id:"success-response-example"},"Success Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "data": null\n}\n')),(0,a.kt)("h3",{id:"success-response-parameters-description"},"Success Response Parameters Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Error code, 0 indicates success")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Brief error message, empty if none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Detailed error information, empty if none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"General data object, see structure below")))),(0,a.kt)("h3",{id:"failure-response-example"},"Failure Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,a.kt)("h3",{id:"failure-response-parameters-description"},"Failure Response Parameters Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Error code, refer to global error code documentation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Brief error message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Detailed error information")))))}u.isMDXComponent=!0}}]);