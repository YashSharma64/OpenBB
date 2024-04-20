"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94292],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},71685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const i={title:"shrs",description:"This page provides information on how to print Major, institutional and mutualfunds shareholders using the 'shrs' command in Python. The data source for this information is Yahoo Finance.",keywords:["shrs","major shareholders","institutional shareholders","mutualfunds shareholders","Yahoo Finance","shareholder table"]},s=void 0,l={unversionedId:"terminal/reference/stocks/fa/shrs",id:"terminal/reference/stocks/fa/shrs",title:"shrs",description:"This page provides information on how to print Major, institutional and mutualfunds shareholders using the 'shrs' command in Python. The data source for this information is Yahoo Finance.",source:"@site/content/terminal/reference/stocks/fa/shrs.md",sourceDirName:"terminal/reference/stocks/fa",slug:"/terminal/reference/stocks/fa/shrs",permalink:"/terminal/reference/stocks/fa/shrs",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fa/shrs.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1713620851,formattedLastUpdatedAt:"Apr 20, 2024",frontMatter:{title:"shrs",description:"This page provides information on how to print Major, institutional and mutualfunds shareholders using the 'shrs' command in Python. The data source for this information is Yahoo Finance.",keywords:["shrs","major shareholders","institutional shareholders","mutualfunds shareholders","Yahoo Finance","shareholder table"]},sidebar:"tutorialSidebar",previous:{title:"score",permalink:"/terminal/reference/stocks/fa/score"},next:{title:"splits",permalink:"/terminal/reference/stocks/fa/splits"}},u={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks/fa/shrs - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Print Major, institutional and mutualfunds shareholders. ","[Source: Yahoo Finance]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"shrs [--holder {major,institutional,mutualfund}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"holder"),(0,a.kt)("td",{parentName:"tr",align:null},"Table of holders to get"),(0,a.kt)("td",{parentName:"tr",align:null},"institutional"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"major, institutional, mutualfund")))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);