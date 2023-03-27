"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},o="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),o=p(n),d=r,k=o["".concat(c,".").concat(d)]||o[d]||s[d]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[o]="string"==typeof e?e:r,l[1]=u;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"em-predictive-maintenance",title:"\u4e88\u77e5\u4fdd\u5168"},l="\u4e88\u77e5\u4fdd\u5168",u={unversionedId:"manufacturing/equipment-maintenance/em-predictive-maintenance",id:"manufacturing/equipment-maintenance/em-predictive-maintenance",title:"\u4e88\u77e5\u4fdd\u5168",description:"\u672c\u30da\u30fc\u30b8\u3067\u306f \u4e88\u77e5\u4fdd\u5168 \u306b\u304a\u3051\u308b AI\u30fb\u6a5f\u68b0\u5b66\u7fd2\u306e\u9069\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/manufacturing/equipment-maintenance/em-predictive-maintenance.md",sourceDirName:"manufacturing/equipment-maintenance",slug:"/manufacturing/equipment-maintenance/em-predictive-maintenance",permalink:"/fta-manufacturing/docs/manufacturing/equipment-maintenance/em-predictive-maintenance",draft:!1,editUrl:"https://github.com/konabuta/fta-manufacturing/tree/main/website/docs/manufacturing/equipment-maintenance/em-predictive-maintenance.md",tags:[],version:"current",frontMatter:{id:"em-predictive-maintenance",title:"\u4e88\u77e5\u4fdd\u5168"},sidebar:"manufacturingSidebar",previous:{title:"\u6982\u8981",permalink:"/fta-manufacturing/docs/manufacturing/equipment-maintenance/em-overview"},next:{title:"\u30c7\u30e2\u30f3\u30b9\u30c8\u30ec\u30fc\u30b7\u30e7\u30f3",permalink:"/fta-manufacturing/docs/manufacturing/equipment-maintenance/em-demonstration"}},c={},p=[{value:"\u305d\u3082\u305d\u3082\u4f55\u3092\u4e88\u6e2c\u3059\u308b\u306e\u304b\uff1f",id:"\u305d\u3082\u305d\u3082\u4f55\u3092\u4e88\u6e2c\u3059\u308b\u306e\u304b",level:2},{value:"1. \u65e2\u77e5\u306e\u6545\u969c\u3092\u4e88\u6e2c\u3059\u308b",id:"1-\u65e2\u77e5\u306e\u6545\u969c\u3092\u4e88\u6e2c\u3059\u308b",level:3},{value:"\ud83d\udd0d \u8a2d\u5099\u304c\u6545\u969c\u3059\u308b\u78ba\u7387\u3092\u4e88\u6e2c\u3059\u308b",id:"-\u8a2d\u5099\u304c\u6545\u969c\u3059\u308b\u78ba\u7387\u3092\u4e88\u6e2c\u3059\u308b",level:4},{value:"\ud83d\udd0d \u8a2d\u5099\u8010\u7528\u6642\u9593 (RUL) \u3092\u4e88\u6e2c\u3059\u308b",id:"-\u8a2d\u5099\u8010\u7528\u6642\u9593-rul-\u3092\u4e88\u6e2c\u3059\u308b",level:4},{value:"2. \u672a\u77e5\u306e\u7570\u5e38\u3092\u691c\u77e5\u3059\u308b",id:"2-\u672a\u77e5\u306e\u7570\u5e38\u3092\u691c\u77e5\u3059\u308b",level:3},{value:"\ud83d\udd0d \u6b63\u5e38\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3057\u305f\u5b66\u7fd2",id:"-\u6b63\u5e38\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3057\u305f\u5b66\u7fd2",level:4},{value:"\u53c2\u8003\u60c5\u5831",id:"\u53c2\u8003\u60c5\u5831",level:3},{value:"\u6545\u969c\u4e88\u6e2c\u5f8c\u306e\u30a2\u30af\u30b7\u30e7\u30f3",id:"\u6545\u969c\u4e88\u6e2c\u5f8c\u306e\u30a2\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306e\u900f\u660e\u6027",id:"\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306e\u900f\u660e\u6027",level:3},{value:"\u53c2\u8003\u60c5\u5831",id:"\u53c2\u8003\u60c5\u5831-1",level:3}],m={toc:p},o="wrapper";function s(e){let{components:t,...i}=e;return(0,r.kt)(o,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e88\u77e5\u4fdd\u5168"},"\u4e88\u77e5\u4fdd\u5168"),(0,r.kt)("p",null,"\u672c\u30da\u30fc\u30b8\u3067\u306f ",(0,r.kt)("strong",{parentName:"p"},"\u4e88\u77e5\u4fdd\u5168")," \u306b\u304a\u3051\u308b AI\u30fb\u6a5f\u68b0\u5b66\u7fd2\u306e\u9069\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E3%81%9D%E3%82%82%E3%81%9D%E3%82%82%E4%BD%95%E3%82%92%E4%BA%88%E6%B8%AC%E3%81%99%E3%82%8B%E3%81%AE%E3%81%8B"},"\u305d\u3082\u305d\u3082\u4f55\u3092\u4e88\u6e2c\u3059\u308b\u306e\u304b\uff1f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-%E6%95%85%E9%9A%9C%E3%82%92%E4%BA%88%E6%B8%AC%E3%81%99%E3%82%8B"},"1. \u6545\u969c\u3092\u4e88\u6e2c\u3059\u308b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-%E7%95%B0%E5%B8%B8%E3%82%92%E6%A4%9C%E7%9F%A5%E3%81%99%E3%82%8B"},"2. \u7570\u5e38\u3092\u691c\u77e5\u3059\u308b")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%95%85%E9%9A%9C%E4%BA%88%E6%B8%AC%E5%BE%8C%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3"},"\u6545\u969c\u4e88\u6e2c\u5f8c\u306e\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E9%80%8F%E6%98%8E%E6%80%A7"},"\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306e\u900f\u660e\u6027"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u305d\u3082\u305d\u3082\u4f55\u3092\u4e88\u6e2c\u3059\u308b\u306e\u304b"},"\u305d\u3082\u305d\u3082\u4f55\u3092\u4e88\u6e2c\u3059\u308b\u306e\u304b\uff1f"),(0,r.kt)("p",null,"\u4e88\u77e5\u4fdd\u5168\u3067\u306f\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u7528\u3044\u3066\u8a2d\u5099\u306e\u5c06\u6765\u3092\u4e88\u6e2c\u3057\u307e\u3059\u3002\u4ee3\u8868\u7684\u306a 2 \u3064\u306e\u4e88\u6e2c\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"1-\u65e2\u77e5\u306e\u6545\u969c\u3092\u4e88\u6e2c\u3059\u308b"},"1. \u65e2\u77e5\u306e\u6545\u969c\u3092\u4e88\u6e2c\u3059\u308b"),(0,r.kt)("p",null,"\u8a2d\u5099\u304c\u6545\u969c\u3059\u308b\u524d\u306b\u6545\u969c\u3092\u4e88\u6e2c\u3057\u307e\u3059\u3002\u696d\u52d9\u8981\u4ef6\u306b\u5fdc\u3058\u3066\u3001\u8a2d\u5099\u304c\u6545\u969c\u3059\u308b\u78ba\u7387\u3092\u4e88\u6e2c\u3059\u308b\u304b\u3001\u8a2d\u5099\u8010\u7528\u6642\u9593\u3092\u4e88\u6e2c\u3059\u308b\u304b\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"-\u8a2d\u5099\u304c\u6545\u969c\u3059\u308b\u78ba\u7387\u3092\u4e88\u6e2c\u3059\u308b"},"\ud83d\udd0d \u8a2d\u5099\u304c\u6545\u969c\u3059\u308b\u78ba\u7387\u3092\u4e88\u6e2c\u3059\u308b"),(0,r.kt)("p",null,"\u300c\u3053\u306e\u8a2d\u5099\u304c30\u65e5\u4ee5\u5185\u306b\u6545\u969c\u3059\u308b\u78ba\u7387\u306f\uff1f\u300d\u3068\u3044\u3063\u305f\u554f\u3044\u306b\u7b54\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u4e88\u6e2c\u65b9\u6cd5\u3067\u3059\u3002\u4e00\u822c\u7684\u306b\u306f\u6545\u969c\u3059\u308b\u304b\u3069\u3046\u304b\u306e\u30d5\u30e9\u30b0 (\u6b63\u5e38 or \u7570\u5e38) \u3092\u4e88\u6e2c\u3057\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"-\u8a2d\u5099\u8010\u7528\u6642\u9593-rul-\u3092\u4e88\u6e2c\u3059\u308b"},"\ud83d\udd0d \u8a2d\u5099\u8010\u7528\u6642\u9593 (RUL) \u3092\u4e88\u6e2c\u3059\u308b"),(0,r.kt)("p",null,"\u300c\u3053\u306e\u8a2d\u5099\u306f\u3042\u3068\u4f55\u65e5\u9593\u4f7f\u3048\u307e\u3059\u304b\uff1f\u300d\u3068\u3044\u3063\u305f\u554f\u3044\u306b\u7b54\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u4e88\u6e2c\u65b9\u6cd5\u3067\u3059\u3002\u4e00\u822c\u7684\u306b\u306f\u6642\u7cfb\u5217\u30e2\u30c7\u30eb\u3084\u56de\u5e30\u30e2\u30c7\u30eb\u3092\u7528\u3044\u3066\u3001\u9023\u7d9a\u7684\u306a\u6570\u5024\u3067\u3042\u308b\u8010\u7528\u6642\u9593\u3092\u4e88\u6e2c\u3057\u307e\u3059\u3002"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"2-\u672a\u77e5\u306e\u7570\u5e38\u3092\u691c\u77e5\u3059\u308b"},"2. \u672a\u77e5\u306e\u7570\u5e38\u3092\u691c\u77e5\u3059\u308b"),(0,r.kt)("p",null,"\u65e2\u77e5\u306e\u7570\u5e38\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3057\u305f\u6559\u5e2b\u3042\u308a\u5b66\u7fd2\u3068\u6b63\u5e38\u30c7\u30fc\u30bf\u306e\u307f\u3092\u7528\u3044\u305f\u6559\u5e2b\u3042\u308a\u5b66\u7fd2\u306e 2 \u7a2e\u985e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"-\u6b63\u5e38\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3057\u305f\u5b66\u7fd2"},"\ud83d\udd0d \u6b63\u5e38\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3057\u305f\u5b66\u7fd2"),(0,r.kt)("p",null,"\u8a2d\u5099\u306e\u6b63\u5e38\u6642\u306e\u30c7\u30fc\u30bf\u306e\u307f\u3092\u7528\u3044\u3066\u3001\u7570\u5e38\u3092\u691c\u77e5\u3059\u308b\u30e2\u30c7\u30eb\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002\u4e00\u822c\u7684\u306b\u306f\u3001\u6559\u5e2b\u306a\u3057\u5b66\u7fd2\u306e\u624b\u6cd5\u3092\u7528\u3044\u307e\u3059\u3002"),(0,r.kt)("img",{src:n(8274).Z,width:"600"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u53c2\u8003\u60c5\u5831"},"\u53c2\u8003\u60c5\u5831"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/azure/architecture/industries/manufacturing/predictive-maintenance-overview"},"\u88fd\u9020\u696d\u306b\u304a\u3051\u308b\u4e88\u6e2c\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u306e\u6982\u8981"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u6545\u969c\u4e88\u6e2c\u5f8c\u306e\u30a2\u30af\u30b7\u30e7\u30f3"},"\u6545\u969c\u4e88\u6e2c\u5f8c\u306e\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u9ad8\u3044\u7cbe\u5ea6\u3067\u6545\u969c\u3092\u4e88\u6e2c\u3059\u308b\u3053\u3068\u306b\u52a0\u3048\u3066\u3001\u305d\u306e\u5f8c\u306e\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3092\u52b9\u7387\u5316\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6545\u969c\u306e\u7a2e\u985e\u306e\u5206\u985e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6545\u969c\u306e\u30d1\u30bf\u30fc\u30f3\u306f\u591a\u5c90\u306b\u308f\u305f\u308a\u307e\u3059\u3002\u6545\u969c\u306e\u7a2e\u985e\u3092\u5206\u985e\u3057\u3001\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u306b\u5fc5\u8981\u306a\u30ea\u30bd\u30fc\u30b9\u3092\u8fc5\u901f\u306b\u78ba\u4fdd\u3057\u307e\u3059\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6545\u969c\u306e\u539f\u56e0\u5206\u6790\u3068\u5bfe\u7b56"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6545\u969c\u306b\u5bc4\u4e0e\u3057\u3066\u3044\u308b\u5909\u6570\u304b\u3089\u6545\u969c\u539f\u56e0\u3092\u63a2\u7d22\u3057\u5bfe\u7b56\u3092\u3059\u308b\u3053\u3068\u3067\u4eca\u5f8c\u306e\u6545\u969c\u3092\u9632\u6b62\u3057\u307e\u3059\u3002")))),(0,r.kt)("h3",{id:"\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306e\u900f\u660e\u6027"},"\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306e\u900f\u660e\u6027"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91c8\u53ef\u80fd\u6027\u30fb\u8aac\u660e\u53ef\u80fd\u6027")," \u3084 ",(0,r.kt)("strong",{parentName:"p"},"\u53cd\u5b9f\u4eee\u60f3\u8aac\u660e")," \u306a\u3069\u3068\u3044\u3063\u305f\u6a5f\u68b0\u5b66\u7fd2\u306e\u900f\u660e\u6027\u306e\u6280\u8853\u3092\u7528\u3044\u308b\u3053\u3068\u3067\u3001\u8a2d\u5099\u6545\u969c\u306e\u7a2e\u985e\u3092\u5206\u985e\u3057\u305f\u308a\u3001\u6545\u969c\u539f\u56e0\u306e\u30d2\u30f3\u30c8\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("img",{src:n(3904).Z,width:"600"}),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u53c2\u8003\u60c5\u5831-1"},"\u53c2\u8003\u60c5\u5831"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://konabuta.github.io/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-interpretability-explainability"},"\u89e3\u91c8\u53ef\u80fd\u6027 & \u8aac\u660e\u53ef\u80fd\u6027 - Azure ML Playbook")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://konabuta.github.io/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-counterfactual-explanation"},"\u53cd\u5b9f\u4eee\u60f3\u8aac\u660e - Azure ML Playbook"))),(0,r.kt)("hr",null))}s.isMDXComponent=!0},8274:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/em-anomaly-detection-898ee030981edb3a962289528ed04a02.png"},3904:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/em-predictive-maintenance-process-e9128728d1122557ccb3151b3130dc2c.png"}}]);