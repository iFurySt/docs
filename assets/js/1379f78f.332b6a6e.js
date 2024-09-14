"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[50256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"iOS",hide_title:!0,sidebar_position:1},c=void 0,s={unversionedId:"quickstart/ios",id:"quickstart/ios",title:"iOS",description:"\ud83d\ude80 Using the Demo",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/quickstart/ios.mdx",sourceDirName:"quickstart",slug:"/quickstart/ios",permalink:"/sdks/quickstart/ios",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/ios.mdx",tags:[],version:"current",lastUpdatedAt:1726294257,formattedLastUpdatedAt:"Sep 14, 2024",sidebarPosition:1,frontMatter:{title:"iOS",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick Integration",permalink:"/sdks/quickstart/"},next:{title:"Android",permalink:"/sdks/quickstart/android"}},u={},p=[{value:"\ud83d\ude80 Using the Demo",id:"-using-the-demo",level:2},{value:"Integration Steps",id:"integration-steps",level:2},{value:"1. Currently, the SDK is obtained through cocoapods. Add the dependency to Podfile:",id:"1-currently-the-sdk-is-obtained-through-cocoapods-add-the-dependency-to-podfile",level:3},{value:"2. Import the module",id:"2-import-the-module",level:3},{value:"3. Initialization",id:"3-initialization",level:3},{value:"4. Login",id:"4-login",level:3},{value:"Notes",id:"notes",level:3}],d={toc:p},f="wrapper";function g(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-using-the-demo"},"\ud83d\ude80 Using the Demo"),(0,r.kt)("p",null,"We strongly recommend you start by running the framework-specific example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenIMSDK/Open-IM-iOS-Demo"},"DEMO")," we have prepared for you. This will not only allow you to experience the features of OpenIMSDK firsthand but will also assist you in quickly identifying and addressing issues during the actual integration process."),(0,r.kt)("h2",{id:"integration-steps"},"Integration Steps"),(0,r.kt)("h3",{id:"1-currently-the-sdk-is-obtained-through-cocoapods-add-the-dependency-to-podfile"},"1. Currently, the SDK is obtained through cocoapods. Add the dependency to Podfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'OpenIMSDK', '~>3.0.0'\n")),(0,r.kt)("p",null,"For SDK version reference: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenIMSDK/Open-IM-SDK-iOS.git"},"https://github.com/OpenIMSDK/Open-IM-SDK-iOS.git")),(0,r.kt)("h3",{id:"2-import-the-module"},"2. Import the module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"@import OpenIMSDK;\n")),(0,r.kt)("h3",{id:"3-initialization"},"3. Initialization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'OIMInitConfig *config = [OIMInitConfig new];\nconfig.apiAddr = @"";\nconfig.wsAddr = @"";\nconfig.objectStorage = @"";\n\nBOOL success = [OIMManager.manager initSDKWithConfig:config\n                                        onConnecting:^{\n\n} onConnectFailure:^(NSInteger code, NSString * _Nullable msg) {\n    // Callback function for connection failure\n    // code error code\n    // error error message\n} onConnectSuccess:^{\n    // SDK has successfully connected to the IM server\n} onKickedOffline:^{\n    // SDK is connecting to the IM server\n} onUserTokenExpired:^{\n    // Token has expired while online: at this point, you need to generate a new token and call the login() function again to log in.\n}];\n\n')),(0,r.kt)("h3",{id:"4-login"},"4. Login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'[OIMManager.manager login:@""\n                    token:@""\n                    onSuccess:^(NSString * _Nullable data) {\n\n} onFailure:^(NSInteger code, NSString * _Nullable msg) {\n\n}];\n')),(0,r.kt)("h3",{id:"notes"},"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The SDK can only be initialized once.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Other API calls must ensure that operations are performed after a successful login callback."))))}g.isMDXComponent=!0}}]);