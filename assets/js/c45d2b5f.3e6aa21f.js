"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[53406],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});a(67294);var r=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={},p="Callback for Adding a User to the Blacklist",s={unversionedId:"webhooks/relationship/addBlack",id:"webhooks/relationship/addBlack",title:"Callback for Adding a User to the Blacklist",description:"Function Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/relationship/addBlack.mdx",sourceDirName:"webhooks/relationship",slug:"/webhooks/relationship/addBlack",permalink:"/restapi/webhooks/relationship/addBlack",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/relationship/addBlack.mdx",tags:[],version:"current",lastUpdatedAt:1733218373,formattedLastUpdatedAt:"Dec 3, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Callback Before Message Push in Online Status",permalink:"/restapi/webhooks/push/onlinePushBefore"},next:{title:"Callback After Agreeing to Add a Friend",permalink:"/restapi/webhooks/relationship/addFriendAfter"}},c={},u=[{value:"Function Description",id:"function-description",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Scenarios That May Trigger This Callback",id:"scenarios-that-may-trigger-this-callback",level:2},{value:"Timing of the Callback",id:"timing-of-the-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Request URL Example",id:"request-url-example",level:3},{value:"Request Parameter Description",id:"request-parameter-description",level:3},{value:"Header",id:"header",level:3},{value:"Request Packet Example",id:"request-packet-example",level:3},{value:"Request Packet Field Explanation",id:"request-packet-field-explanation",level:3},{value:"Response Packet Example",id:"response-packet-example",level:2},{value:"Allow Adding",id:"allow-adding",level:3},{value:"Response Packet Field Explanation",id:"response-packet-field-explanation",level:2}],d={toc:u},m="wrapper";function k(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"callback-for-adding-a-user-to-the-blacklist"},"Callback for Adding a User to the Blacklist"),(0,r.kt)("h2",{id:"function-description"},"Function Description"),(0,r.kt)("p",null,"The App business server can use this callback to receive requests from users who are attempting to add other users to their blacklist. The business server can review or modify these requests as needed."),(0,r.kt)("h2",{id:"precautions"},"Precautions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To enable the callback, it is necessary to configure the callback URL and activate the corresponding switch for this callback protocol. Configuration methods can be found in the ",(0,r.kt)("a",{parentName:"li",href:"../introduction"},"Callback Explanation")," document."),(0,r.kt)("li",{parentName:"ul"},"The direction of the callback is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend."),(0,r.kt)("li",{parentName:"ul"},"After receiving the callback request, the App business server must verify whether the command parameter in the request URL is its SDKNAME parameter."),(0,r.kt)("li",{parentName:"ul"},"The APP business server must respond to this request within the timeout period.")),(0,r.kt)("h2",{id:"scenarios-that-may-trigger-this-callback"},"Scenarios That May Trigger This Callback"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App users try to add other users to the blacklist through the client.")),(0,r.kt)("h2",{id:"timing-of-the-callback"},"Timing of the Callback"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After OpenIM Server receives a request to add a user to the blacklist, but before processing the request.")),(0,r.kt)("h2",{id:"interface-description"},"Interface Description"),(0,r.kt)("h3",{id:"request-url-example"},"Request URL Example"),(0,r.kt)("p",null,"In the following example, the callback URL configured by the App is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://callbackurl"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://callbackurl?command=$CallbackCommand&contenttype=json\n")),(0,r.kt)("h3",{id:"request-parameter-description"},"Request Parameter Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"https"),(0,r.kt)("td",{parentName:"tr",align:null},"Request protocol is HTTPS, method is POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"https://callbackurl"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CallbackCommand"),(0,r.kt)("td",{parentName:"tr",align:null},"Fixed value: addBlackCommand")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contenttype"),(0,r.kt)("td",{parentName:"tr",align:null},"Fixed value: JSON")))),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Header Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operationID"),(0,r.kt)("td",{parentName:"tr",align:null},"1646445464564"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"operationID for global link tracing")))),(0,r.kt)("h3",{id:"request-packet-example"},"Request Packet Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "addBlackCommand",\n  "ownerUserID": "user123",\n  "blackUserID": "user456"\n}\n')),(0,r.kt)("h3",{id:"request-packet-field-explanation"},"Request Packet Field Explanation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback command, here for adding a user to the blacklist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"User ID of the person initiating the blacklist addition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blackUserID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"User ID of the person being added to the blacklist")))),(0,r.kt)("h2",{id:"response-packet-example"},"Response Packet Example"),(0,r.kt)("h3",{id:"allow-adding"},"Allow Adding"),(0,r.kt)("p",null,"Allows the user to add the specified user to the blacklist."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "actionCode": 0,\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "nextCode": "nextCodeValue"\n}\n')),(0,r.kt)("h2",{id:"response-packet-field-explanation"},"Response Packet Field Explanation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the business system's callback was executed correctly. ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," means the operation was successful.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error code, here 0 means ignore the callback result.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,r.kt)("td",{parentName:"tr",align:null},"Simple error message corresponding to the custom error code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,r.kt)("td",{parentName:"tr",align:null},"Detailed error information corresponding to the custom error code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Next step instruction, ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," means to refuse to continue executing, set when actionCode is ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),".")))))}k.isMDXComponent=!0}}]);