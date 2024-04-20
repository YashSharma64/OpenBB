"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23501],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},80147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"stoch",description:"Learn about the Stochastic Oscillator, a measurement tool in trading ranges. Discover the meaning of overbought and oversold conditions and how to interpret the signals from Fast %D and Slow %D. Understand how to use parameters like n_fastkperiod, n_slowdperiod, and n_slowkperiod for moving averages.",keywords:["Stochastic Oscillator","overbought condition","oversold condition","Fast %D","Slow %D","buy signal","sell signal","Raw %K","moving average","n_fastkperiod","n_slowdperiod","n_slowkperiod"]},i=void 0,s={unversionedId:"terminal/reference/crypto/ta/stoch",id:"terminal/reference/crypto/ta/stoch",title:"stoch",description:"Learn about the Stochastic Oscillator, a measurement tool in trading ranges. Discover the meaning of overbought and oversold conditions and how to interpret the signals from Fast %D and Slow %D. Understand how to use parameters like n_fastkperiod, n_slowdperiod, and n_slowkperiod for moving averages.",source:"@site/content/terminal/reference/crypto/ta/stoch.md",sourceDirName:"terminal/reference/crypto/ta",slug:"/terminal/reference/crypto/ta/stoch",permalink:"/terminal/reference/crypto/ta/stoch",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ta/stoch.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1713620851,formattedLastUpdatedAt:"Apr 20, 2024",frontMatter:{title:"stoch",description:"Learn about the Stochastic Oscillator, a measurement tool in trading ranges. Discover the meaning of overbought and oversold conditions and how to interpret the signals from Fast %D and Slow %D. Understand how to use parameters like n_fastkperiod, n_slowdperiod, and n_slowkperiod for moving averages.",keywords:["Stochastic Oscillator","overbought condition","oversold condition","Fast %D","Slow %D","buy signal","sell signal","Raw %K","moving average","n_fastkperiod","n_slowdperiod","n_slowkperiod"]},sidebar:"tutorialSidebar",previous:{title:"sma",permalink:"/terminal/reference/crypto/ta/sma"},next:{title:"tv",permalink:"/terminal/reference/crypto/ta/tv"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"crypto/ta/stoch - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"The Stochastic Oscillator measures where the close is in relation to the recent trading range. The values range from zero to 100. %D values over 75 indicate an overbought condition; values under 25 indicate an oversold condition. When the Fast %D crosses above the Slow %D, it is a buy signal; when it crosses below, it is a sell signal. The Raw %K is generally considered too erratic to use for crossover signals."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"stoch [-k N_FASTKPERIOD] [-d N_SLOWDPERIOD] [--slowkperiod N_SLOWKPERIOD]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_fastkperiod"),(0,a.kt)("td",{parentName:"tr",align:null},"The time period of the fastk moving average"),(0,a.kt)("td",{parentName:"tr",align:null},"14"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"range(1, 100)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_slowdperiod"),(0,a.kt)("td",{parentName:"tr",align:null},"The time period of the slowd moving average"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"range(1, 100)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_slowkperiod"),(0,a.kt)("td",{parentName:"tr",align:null},"The time period of the slowk moving average"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"range(1, 100)")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154311913-d58e58bb-d116-44dd-ae4b-44e59c25f22a.png",alt:"stoch"})),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);