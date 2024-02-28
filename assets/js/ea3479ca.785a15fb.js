"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14912],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),m=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var m=2;m<o;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},34946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const l={title:"summary",description:"The page offers instructions on using a command that retrieves a summary of all the flow per stock in the last x days. The summary includes details like the ratio to total market capitalization, number of trades, etc. and the result can be sorted in various ways like MarketCap, Float, and more.",keywords:["Flow per stock","Total market capitalization","Number of trades","Sort by MarketCap","Sort by Float","Sort by Total","Sort by Short Percentage","Command usage"]},s=void 0,i={unversionedId:"bot/reference/discord/flow/summary",id:"bot/reference/discord/flow/summary",title:"summary",description:"The page offers instructions on using a command that retrieves a summary of all the flow per stock in the last x days. The summary includes details like the ratio to total market capitalization, number of trades, etc. and the result can be sorted in various ways like MarketCap, Float, and more.",source:"@site/content/bot/reference/discord/flow/summary.md",sourceDirName:"bot/reference/discord/flow",slug:"/bot/reference/discord/flow/summary",permalink:"/bot/reference/discord/flow/summary",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/flow/summary.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709158151,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{title:"summary",description:"The page offers instructions on using a command that retrieves a summary of all the flow per stock in the last x days. The summary includes details like the ratio to total market capitalization, number of trades, etc. and the result can be sorted in various ways like MarketCap, Float, and more.",keywords:["Flow per stock","Total market capitalization","Number of trades","Sort by MarketCap","Sort by Float","Sort by Total","Sort by Short Percentage","Command usage"]},sidebar:"tutorialSidebar",previous:{title:"sumexp",permalink:"/bot/reference/discord/flow/sumexp"},next:{title:"sumtop",permalink:"/bot/reference/discord/flow/sumtop"}},m={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"flow: summary - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command allows the user to retrieve a summary of all the flow per stock over the last x days, with the result sorted in various ways. This summary will include the ratio to total market capitalization, the number of trades, and other information."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/flow summary days sort\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of days to look back"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sort"),(0,n.kt)("td",{parentName:"tr",align:null},"Sort by MarketCap, Float, Total, or Short Percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"MarketCap (mc), Float (float), Total (sum), Short Percentage (short)")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/flow summary days:5 sort:Float\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/flow summary days:5 sort:Short Percentage\n")),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);