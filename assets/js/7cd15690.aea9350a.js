"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[75543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"k8s Deployment",sidebar_position:5},s=void 0,p={unversionedId:"gettingStarted/k8s-deployment",id:"gettingStarted/k8s-deployment",title:"k8s Deployment",description:"OpenIM Application Containerization Deployment Guide",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/k8s-deployment.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/k8s-deployment",permalink:"/guides/gettingStarted/k8s-deployment",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/k8s-deployment.mdx",tags:[],version:"current",lastUpdatedAt:1733218373,formattedLastUpdatedAt:"Dec 3, 2024",sidebarPosition:5,frontMatter:{title:"k8s Deployment",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Quick Verification",permalink:"/guides/gettingStarted/quickTestServer"},next:{title:"Monitoring and Alert System",permalink:"/guides/gettingStarted/admin"}},u={},c=[{value:"OpenIM Application Containerization Deployment Guide",id:"openim-application-containerization-deployment-guide",level:2},{value:"Dependency Check",id:"dependency-check",level:3},{value:"Minimum Configuration",id:"minimum-configuration",level:3},{value:"Configuration File Generation",id:"configuration-file-generation",level:2},{value:"Installing Helm",id:"installing-helm",level:3},{value:"OpenIM Image Strategy",id:"openim-image-strategy",level:3},{value:"Installation",id:"installation",level:2},{value:"Cluster Setup Reference",id:"cluster-setup-reference",level:2}],m={toc:c},d="wrapper";function g(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"openim-application-containerization-deployment-guide"},"OpenIM Application Containerization Deployment Guide"),(0,r.kt)("p",null,"OpenIM supports various cluster deployment methods, including but not limited to ",(0,r.kt)("inlineCode",{parentName:"p"},"helm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sealos"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"kustomize"),"."),(0,r.kt)("p",null,"Several contributors and previous official versions have provided some reference solutions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenIMSDK/k8s-jenkins"},"k8s-jenkins repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openimsdk/open-im-server-k8s-deploy"},"open-im-server-k8s-deploy repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenIMSDK/openim-charts"},"openim-charts repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/showurl/deploy-openim"},"deploy-openim repository"))),(0,r.kt)("h3",{id:"dependency-check"},"Dependency Check"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Kubernetes: >= 1.16.0-0\nHelm: >= 3.0\n")),(0,r.kt)("h3",{id:"minimum-configuration"},"Minimum Configuration"),(0,r.kt)("p",null,"The recommended minimum configuration for a production environment is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"CPU: 4\nMemory: 8G\nDisk: 100G\n")),(0,r.kt)("h2",{id:"configuration-file-generation"},"Configuration File Generation"),(0,r.kt)("p",null,"We have automated all the files, making generating configuration files for OpenIM optional. However, if you wish to customize the configuration, you can follow these steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash$",metastring:"make init",make:!0,init:!0},"# Or use the script:\n# ./scripts/init-config.sh\n")),(0,r.kt)("p",null,"At this point, the configuration file will be generated under ",(0,r.kt)("inlineCode",{parentName:"p"},"deployments/openim/config"),", and you can modify it as needed."),(0,r.kt)("h3",{id:"installing-helm"},"Installing Helm"),(0,r.kt)("p",null,"Helm simplifies the deployment and management of Kubernetes applications by offering version control and release management through packaging."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using script:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Adding repository:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm repo add brigade https://openimsdk.github.io/openim-charts\n")),(0,r.kt)("h3",{id:"openim-image-strategy"},"OpenIM Image Strategy"),(0,r.kt)("p",null,"The automated provision includes aliyun, ghcr, docker hub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-server/blob/main/docs/conversions/images.md"},"Image documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Local testing build method:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ make image\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This command helps to quickly build the required images locally. For detailed building strategies, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-server/blob/main/build/README.md"},"Build Documentation"),".")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Browse our Helm-Charts repository and read carefully: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/helm-charts"},"Helm-Charts Repository")),(0,r.kt)("p",null,"Using the helm charts repository, you can ignore the following configuration, but if you only want to use the server and expand on it, you can continue:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using Helmfile:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'GO111MODULE=on go get github.com/roboll/helmfile@latest\nexport MYSQL_ADDRESS=im-mysql\nexport MYSQL_PORT=3306\nexport MONGO_ADDRESS=im-mongo\nexport MONGO_PORT=27017\nexport REDIS_ADDRESS=im-redis-master\nexport REDIS_PORT=6379\nexport KAFKA_ADDRESS=im-kafka\nexport KAFKA_PORT=9092\nexport OBJECT_APIURL="https://openim.server.com/api"\nexport MINIO_ENDPOINT="http://im-minio:9000"\nexport MINIO_SIGN_ENDPOINT="https://openim.server.com/im-minio-api"\n\nmkdir ./charts/generated-configs\n../scripts/genconfig.sh ../scripts/install/environment.sh ./templates/openim.yaml > ./charts/generated-configs/config.yaml\ncp ../config/notification.yaml ./charts/generated-configs/notification.yaml\n../scripts/genconfig\n')),(0,r.kt)("h2",{id:"cluster-setup-reference"},"Cluster Setup Reference"),(0,r.kt)("p",null,"If you already have a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes")," cluster, or if you want to build a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes")," cluster from scratch, you can skip this step."),(0,r.kt)("p",null,"For a quick start, I use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/labring/sealos"},"sealos")," to quickly establish a cluster, with sealos also being a wrapper for kubeadm at its core:"),(0,r.kt)("p",null,"``",(0,r.kt)("inlineCode",{parentName:"p"},"bash$ SEALOS_VERSION="),"curl -s ",(0,r.kt)("a",{parentName:"p",href:"https://api.github.com/repos/labring/sealos/releases/latest"},"https://api.github.com/repos/labring/sealos/releases/latest"),' | grep -oE \'"tag_name": "',(0,r.kt)("sup",{parentName:"p",id:'fnref-"'},(0,r.kt)("a",{parentName:"sup",href:'#fn-"',className:"footnote-ref"},'"')),"+\"' | head -n1 | cut -d'\"' -f4` && \\\ncurl -sfL ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/labring/sealos/$%7BSEALOS_VERSION%7D/scripts/install.sh"},"https://raw.githubusercontent.com/labring/sealos/${SEALOS_VERSION}/scripts/install.sh")," |\nsh -s ${SEALOS_VERSION} labring/sealos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n**Supported versions:**\n\n+ docker: `labring/kubernetes-docker`:(v1.24.0~v1.27.0)\n+ containerd: `labring/kubernetes`:(v1.24.0~v1.27.0)\n\n#### Cluster Installation:\n\nThe details of the cluster are as follows:\n\n| Hostname  | IP Address | System Information                                           |\n| --------- | ---------- | ------------------------------------------------------------ |\n| master01  | 10.0.0.9   | `Linux VM-0-9-\n\nubuntu 5.15.0-76-generic #83-Ubuntu SMP Thu Jun 15 19:16:32 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux` |\n| node01    | 10.0.0.4   | Similar to master01                                          |\n| node02    | 10.0.0.10  | Similar to master01                                          |\n\n```bash$ export CLUSTER_USERNAME=ubuntu\n$ export CLUSTER_PASSWORD=123456\n$ sudo sealos run labring/kubernetes:v1.25.0 labring/helm:v3.8.2 labring/calico:v3.24.1 \\\n    --masters 10.0.0.9 \\\n    --nodes 10.0.0.4,10.0.0.10 \\\n    -u "$CLUSTER_USERNAME" \\\n    -p "$CLUSTER_PASSWORD"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")," Uninstall method: Uninstalling with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm")," does not delete ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cni")," related configurations. You need to manually clear them or use ",(0,r.kt)("inlineCode",{parentName:"p"},"sealos")," for uninstallation."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sealos reset\n"))),(0,r.kt)("p",null,"If you are local, you can also test with Kind and Minikube, for example using Kind:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash$",metastring:'GO111MODULE="on" go get sigs.k8s.io/kind@v0.11.1',GO111MODULE:'"on"',go:!0,get:!0,"sigs.k8s.io/kind@v0.11.1":!0},"$ kind create cluster\n")))}g.isMDXComponent=!0}}]);