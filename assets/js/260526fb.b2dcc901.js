"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(35742);function i(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},9621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),i=n(88828);const o={title:"quantile",description:"This documentation page provides detailed information on the concept of quantile, a statistical term which refers to the values that divide a set of observations into specified proportions. The page also includes parameters for customizing the quantile function.",keywords:["Quantile","Distribution","Median","n_window","f_quantile","Parameters"]},l=void 0,u={unversionedId:"terminal/reference/economy/qa/quantile",id:"terminal/reference/economy/qa/quantile",title:"quantile",description:"This documentation page provides detailed information on the concept of quantile, a statistical term which refers to the values that divide a set of observations into specified proportions. The page also includes parameters for customizing the quantile function.",source:"@site/content/terminal/reference/economy/qa/quantile.md",sourceDirName:"terminal/reference/economy/qa",slug:"/terminal/reference/economy/qa/quantile",permalink:"/terminal/reference/economy/qa/quantile",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/qa/quantile.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1713620851,formattedLastUpdatedAt:"Apr 20, 2024",frontMatter:{title:"quantile",description:"This documentation page provides detailed information on the concept of quantile, a statistical term which refers to the values that divide a set of observations into specified proportions. The page also includes parameters for customizing the quantile function.",keywords:["Quantile","Distribution","Median","n_window","f_quantile","Parameters"]},sidebar:"tutorialSidebar",previous:{title:"qqplot",permalink:"/terminal/reference/economy/qa/qqplot"},next:{title:"raw",permalink:"/terminal/reference/economy/qa/raw"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"economy/qa/quantile - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The quantiles are values which divide the distribution such that there is a given proportion of observations below the quantile. For example, the median is a quantile. The median is the central value of the distribution, such that half the points are less than or equal to it and half are greater than or equal to it. By default, q is set at 0.5, which effectively is median. Change q to get the desired quantile (0q1)."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"quantile [-w N_WINDOW] [-q F_QUANTILE]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n_window"),(0,r.kt)("td",{parentName:"tr",align:null},"window length"),(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"f_quantile"),(0,r.kt)("td",{parentName:"tr",align:null},"quantile"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154307976-868e98e1-5a30-43c7-92fc-f221d09c5bd2.png",alt:"quantile"})),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);