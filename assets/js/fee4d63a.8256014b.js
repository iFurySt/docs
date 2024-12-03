"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[14960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>s});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Callback After Setting Group Information",hide_title:!0},p="Callback After Setting Group Information",u={unversionedId:"webhooks/group/setGroupInfoAfter",id:"webhooks/group/setGroupInfoAfter",title:"Callback After Setting Group Information",description:"Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/group/setGroupInfoAfter.mdx",sourceDirName:"webhooks/group",slug:"/webhooks/group/setGroupInfoAfter",permalink:"/restapi/webhooks/group/setGroupInfoAfter",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/group/setGroupInfoAfter.mdx",tags:[],version:"current",lastUpdatedAt:1733218373,formattedLastUpdatedAt:"Dec 3, 2024",frontMatter:{title:"Callback After Setting Group Information",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Callback Before Sending Group Message",permalink:"/restapi/webhooks/group/sendGroupMsgBefore"},next:{title:"Callback Before Setting Group Information",permalink:"/restapi/webhooks/group/setGroupInfoBefore"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Scenarios that Trigger This Callback",id:"scenarios-that-trigger-this-callback",level:2},{value:"Timing of Callback",id:"timing-of-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Example Request URL",id:"example-request-url",level:3},{value:"Example Request Package",id:"example-request-package",level:3},{value:"Request Package Field Descriptions",id:"request-package-field-descriptions",level:3},{value:"Example Response Package",id:"example-response-package",level:2},{value:"Operation Complete",id:"operation-complete",level:3},{value:"Response Package Field Descriptions",id:"response-package-field-descriptions",level:2}],d={toc:s},m="wrapper";function g(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"callback-after-setting-group-information"},"Callback After Setting Group Information"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The App backend can use this callback to monitor changes in group information in real-time. This includes notifying the App backend of group information updates, allowing for logging or synchronization with other systems."),(0,r.kt)("h2",{id:"important-notes"},"Important Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To enable this callback, configure the callback URL and activate the corresponding protocol switch. For configuration details, see the ",(0,r.kt)("a",{parentName:"li",href:"../introduction"},"Callback Introduction")," document."),(0,r.kt)("li",{parentName:"ul"},"The callback direction is from OpenIMServer to the App backend as an HTTP/HTTPS POST request."),(0,r.kt)("li",{parentName:"ul"},"The App business server must respond within the specified timeout period.")),(0,r.kt)("h2",{id:"scenarios-that-trigger-this-callback"},"Scenarios that Trigger This Callback"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A user requests to modify group information through the App client."),(0,r.kt)("li",{parentName:"ul"},"An App administrator changes group information via the REST API.")),(0,r.kt)("h2",{id:"timing-of-callback"},"Timing of Callback"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After OpenIMServer has completed the modification of the group information.")),(0,r.kt)("h2",{id:"interface-description"},"Interface Description"),(0,r.kt)("h3",{id:"example-request-url"},"Example Request URL"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CallbackCommand")," here is: ",(0,r.kt)("inlineCode",{parentName:"p"},"callbackAfterSetGroupInfoExCommand")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"{WEBHOOK_ADDRESS}/callbackAfterSetGroupInfoExCommand?contenttype=json\n")),(0,r.kt)("h3",{id:"example-request-package"},"Example Request Package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "callbackAfterSetGroupInfoExCommand",\n  "operationID": "1646445464564",\n  "groupID": "G002",\n  "groupName": {\n    "value": "NewGroupName"\n  },\n  "notification": {\n    "value": "Updated group notification"\n  },\n  "introduction": {\n    "value": "Updated group introduction"\n  },\n  "faceURL": {\n    "value": "http://example.com/new/path/to/face/image.png"\n  },\n  "ex": {\n    "value": "Updated extra data"\n  },\n  "needVerification": {\n    "value": 0\n  },\n  "lookMemberInfo": {\n    "value": 1\n  },\n  "applyMemberFriend": {\n    "value": 0\n  }\n}\n')),(0,r.kt)("h3",{id:"request-package-field-descriptions"},"Request Package Field Descriptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback command; here, for post-group information setting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operationID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"For global traceability; suggested to use a timestamp, unique per request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groupID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groupName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notification"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Group notification information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"introduction"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Group introduction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the group's icon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ex"),(0,r.kt)("td",{parentName:"tr",align:null},"*string"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional data field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"needVerification"),(0,r.kt)("td",{parentName:"tr",align:null},"*int32"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether verification is required to join")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lookMemberInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"*int32"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether group members\u2019 info is visible")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"applyMemberFriend"),(0,r.kt)("td",{parentName:"tr",align:null},"*int32"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether members can request to add friends")))),(0,r.kt)("h2",{id:"example-response-package"},"Example Response Package"),(0,r.kt)("h3",{id:"operation-complete"},"Operation Complete"),(0,r.kt)("p",null,"Confirms that the modification of the group information is complete."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "actionCode": 0,\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "nextCode": 0\n}\n')),(0,r.kt)("h2",{id:"response-package-field-descriptions"},"Response Package Field Descriptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the callback was successful. ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," means success.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error code; fill as 0 to ignore the callback result.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,r.kt)("td",{parentName:"tr",align:null},"Simple error message for the custom error code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,r.kt)("td",{parentName:"tr",align:null},"Detailed error information for the custom error code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Next step directive; set to ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," to stop further action if ",(0,r.kt)("inlineCode",{parentName:"td"},"actionCode")," = ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),".")))))}g.isMDXComponent=!0}}]);