"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85841],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},80451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const o={title:"spectrum",description:"Learn how to view group spectrum data in various sectors, industries or countries. Understand usage and parameters involved.",keywords:["Spectrum data","Sectors","Industries","Countries","Data analysis","Financial analysis","Consumer cyclical","Consumer defensive","Energy sector","Healthcare sector","Industrials sector","Real Estate sector","Technology sector","Utilities sector","Data groups","Capitalization","Finviz","Basic materials sector","Communication services sector","Programming"]},c=void 0,s={unversionedId:"terminal/reference/economy/spectrum",id:"terminal/reference/economy/spectrum",title:"spectrum",description:"Learn how to view group spectrum data in various sectors, industries or countries. Understand usage and parameters involved.",source:"@site/content/terminal/reference/economy/spectrum.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/spectrum",permalink:"/terminal/reference/economy/spectrum",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/spectrum.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1713620851,formattedLastUpdatedAt:"Apr 20, 2024",frontMatter:{title:"spectrum",description:"Learn how to view group spectrum data in various sectors, industries or countries. Understand usage and parameters involved.",keywords:["Spectrum data","Sectors","Industries","Countries","Data analysis","Financial analysis","Consumer cyclical","Consumer defensive","Energy sector","Healthcare sector","Industrials sector","Real Estate sector","Technology sector","Utilities sector","Data groups","Capitalization","Finviz","Basic materials sector","Communication services sector","Programming"]},sidebar:"tutorialSidebar",previous:{title:"unitroot",permalink:"/terminal/reference/economy/qa/unitroot"},next:{title:"spread",permalink:"/terminal/reference/economy/spread"}},l={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"economy /spectrum - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"View group (sectors, industry or country) spectrum data. ","[Source: Finviz]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"spectrum [-g {sector,industry,basic_materials,communication_services,consumer_cyclical,consumer_defensive,energy,financial,healthcare,industrials,real_Estate,technology,utilities,country,capitalization}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"group"),(0,a.kt)("td",{parentName:"tr",align:null},"Data group (sector, industry or country)"),(0,a.kt)("td",{parentName:"tr",align:null},"sector"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"sector, industry, basic_materials, communication_services, consumer_cyclical, consumer_defensive, energy, financial, healthcare, industrials, real_Estate, technology, utilities, country, capitalization")))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);