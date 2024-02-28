"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69663],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),l=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=l(a),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(f,s(s({ref:e},p),{},{components:a})):r.createElement(f,s({ref:e},p))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(67294),n=a(35742);function o(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},48726:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(88828);const s={title:"contracts",description:"This documentation page provides information about contracts associated with a ticker as sourced from QuiverQuant. Details include usage, parameters like past transaction days and raw data. Also added is a snapshot of the contracts interface.",keywords:["contracts","past transaction days","raw data","quiverquant"]},i=void 0,c={unversionedId:"terminal/reference/stocks/gov/contracts",id:"terminal/reference/stocks/gov/contracts",title:"contracts",description:"This documentation page provides information about contracts associated with a ticker as sourced from QuiverQuant. Details include usage, parameters like past transaction days and raw data. Also added is a snapshot of the contracts interface.",source:"@site/content/terminal/reference/stocks/gov/contracts.md",sourceDirName:"terminal/reference/stocks/gov",slug:"/terminal/reference/stocks/gov/contracts",permalink:"/terminal/reference/stocks/gov/contracts",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/gov/contracts.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709158151,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{title:"contracts",description:"This documentation page provides information about contracts associated with a ticker as sourced from QuiverQuant. Details include usage, parameters like past transaction days and raw data. Also added is a snapshot of the contracts interface.",keywords:["contracts","past transaction days","raw data","quiverquant"]},sidebar:"tutorialSidebar",previous:{title:"Government",permalink:"/terminal/reference/stocks/gov/"},next:{title:"gtrades",permalink:"/terminal/reference/stocks/gov/gtrades"}},l={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p},d="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"stocks /gov/contracts - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Contracts associated with ticker. ","[Source: www.quiverquant.com]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"contracts [-p PAST_TRANSACTION_DAYS] [--raw]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"past_transaction_days"),(0,n.kt)("td",{parentName:"tr",align:null},"-p  --past_transaction_days"),(0,n.kt)("td",{parentName:"tr",align:null},"Past transaction days"),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"raw"),(0,n.kt)("td",{parentName:"tr",align:null},"--raw"),(0,n.kt)("td",{parentName:"tr",align:null},"Print raw data."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154263066-0ff61349-4fe5-4eac-9e60-23fa075a9e9f.png",alt:"contracts"})),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);