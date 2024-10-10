"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[68196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Callback After Sending Group Message",hide_title:!0},s="Callback After Sending Group Message",p={unversionedId:"webhooks/group/sendGroupMsgAfter",id:"webhooks/group/sendGroupMsgAfter",title:"Callback After Sending Group Message",description:"Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/group/sendGroupMsgAfter.mdx",sourceDirName:"webhooks/group",slug:"/webhooks/group/sendGroupMsgAfter",permalink:"/restapi/webhooks/group/sendGroupMsgAfter",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/group/sendGroupMsgAfter.mdx",tags:[],version:"current",lastUpdatedAt:1728553238,formattedLastUpdatedAt:"Oct 10, 2024",frontMatter:{title:"Callback After Sending Group Message",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Callback for User Exiting Group",permalink:"/restapi/webhooks/group/quitGroup"},next:{title:"Callback Before Sending Group Message",permalink:"/restapi/webhooks/group/sendGroupMsgBefore"}},u={},d=[{value:"Description",id:"description",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Scenarios that Trigger This Callback",id:"scenarios-that-trigger-this-callback",level:2},{value:"Timing of Callback",id:"timing-of-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Example Request URL",id:"example-request-url",level:3},{value:"Example Request Package",id:"example-request-package",level:3},{value:"Request Package Field Descriptions",id:"request-package-field-descriptions",level:3},{value:"Example Response Package",id:"example-response-package",level:2},{value:"Success Response",id:"success-response",level:3},{value:"Response Package Field Descriptions",id:"response-package-field-descriptions",level:2}],c={toc:d},m="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"callback-after-sending-group-message"},"Callback After Sending Group Message"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The App business server can use this callback to view group messages sent by users in real-time. This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Notifying the App backend of successfully sent group messages."),(0,r.kt)("li",{parentName:"ul"},"Allowing the App to synchronize necessary data.")),(0,r.kt)("h2",{id:"important-notes"},"Important Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To enable this callback, configure the callback URL and activate the corresponding protocol switch. For configuration details, see the ",(0,r.kt)("a",{parentName:"li",href:"../introduction"},"Callback Introduction")," document."),(0,r.kt)("li",{parentName:"ul"},"The callback direction is from OpenIMServer to the App backend as an HTTP/HTTPS POST request."),(0,r.kt)("li",{parentName:"ul"},"The App business server must respond within the specified timeout period.")),(0,r.kt)("h2",{id:"scenarios-that-trigger-this-callback"},"Scenarios that Trigger This Callback"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A user sends a group message via the App client."),(0,r.kt)("li",{parentName:"ul"},"An App administrator sends a group message through the REST API.")),(0,r.kt)("h2",{id:"timing-of-callback"},"Timing of Callback"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After the group message is successfully sent.")),(0,r.kt)("h2",{id:"interface-description"},"Interface Description"),(0,r.kt)("h3",{id:"example-request-url"},"Example Request URL"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CallbackCommand")," here is: ",(0,r.kt)("inlineCode",{parentName:"p"},"callbackAfterSendGroupMsgCommand")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"{WEBHOOK_ADDRESS}/callbackAfterSendGroupMsgCommand?contenttype=json\n")),(0,r.kt)("h3",{id:"example-request-package"},"Example Request Package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sendID": "sender123",\n  "callbackCommand": "callbackAfterSendGroupMsgCommand",\n  "serverMsgID": "serverMsg123",\n  "clientMsgID": "clientMsg123",\n  "operationID": "1646445464564",\n  "senderPlatformID": 1,\n  "senderNickname": "JohnDoe",\n  "sessionType": 2,\n  "msgFrom": 1,\n  "contentType": 1,\n  "status": 1,\n  "sendTime": 1673048592000,\n  "createTime": 1673048592000,\n  "content": "Hello, this is a group message!",\n  "seq": 1,\n  "atUserList": ["user456", "user789"],\n  "faceURL": "http://example.com/path/to/sender/face/image.png",\n  "ex": "Extra data",\n  "groupID": "group123"\n}\n')),(0,r.kt)("h3",{id:"request-package-field-descriptions"},"Request Package Field Descriptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the sender")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback command for post-group message send")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serverMsgID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Message ID generated by the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientMsgID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Message ID generated by the client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operationID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the operation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"senderPlatformID"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"Platform ID of the sender")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"senderNickname"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Nickname of the sender")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sessionType"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of session")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgFrom"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"Source of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contentType"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the message content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendTime"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp of when the message was sent (ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createTime"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp of when the message was created (ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Content of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seq"),(0,r.kt)("td",{parentName:"tr",align:null},"uint32"),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence number of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"atUserList"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"List of group member IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the sender's profile picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ex"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional data field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groupID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the group")))),(0,r.kt)("h2",{id:"example-response-package"},"Example Response Package"),(0,r.kt)("h3",{id:"success-response"},"Success Response"),(0,r.kt)("p",null,"After synchronizing data, the App business server sends a response package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "nextCode": ""\n}\n')),(0,r.kt)("h2",{id:"response-package-field-descriptions"},"Response Package Field Descriptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the callback executed successfully. ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," means success.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error code; ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," here indicates the callback result is ignored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,r.kt)("td",{parentName:"tr",align:null},"Simple error message corresponding to the custom error code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,r.kt)("td",{parentName:"tr",align:null},"Detailed error information corresponding to the custom error code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Next execution directive. Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," to stop further action when ",(0,r.kt)("inlineCode",{parentName:"td"},"actionCode")," = ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),".")))))}g.isMDXComponent=!0}}]);