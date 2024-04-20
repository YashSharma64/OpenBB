"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=i(r),p=o,u=m["".concat(s,".").concat(p)]||m[p]||f[p]||a;return r?n.createElement(u,c(c({ref:t},d),{},{components:r})):n.createElement(u,c({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(39960),o=r(86010),a=r(67294),c=r(16550),l=r(48334);function s(e){let{title:t,url:r,description:s,command:i}=e;const{pathname:d}=(0,c.TH)(),m=d.replace(/\/v\d+/,""),f=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),f&&a.createElement(l.Z,{className:"ml-auto mr-4"})),s?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},48861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(26515);const c={},l="Cftc",s={unversionedId:"platform/reference/regulators/cftc/index",id:"platform/reference/regulators/cftc/index",title:"Cftc",description:"Commands",source:"@site/content/platform/reference/regulators/cftc/index.mdx",sourceDirName:"platform/reference/regulators/cftc",slug:"/platform/reference/regulators/cftc/",permalink:"/platform/reference/regulators/cftc/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/regulators/cftc/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"symbol_map",permalink:"/platform/reference/regulators/sec/symbol_map"},next:{title:"cot",permalink:"/platform/reference/regulators/cftc/cot"}},i={},d=[{value:"Commands",id:"commands",level:3}],m={toc:d},f="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cftc"},"Cftc"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"cot",description:"Get Commitment of Traders Reports",url:"/platform/reference/regulators/cftc/cot",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"cot search",description:"Curated Commitment of Traders Reports",url:"/platform/reference/regulators/cftc/cot_search",mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);