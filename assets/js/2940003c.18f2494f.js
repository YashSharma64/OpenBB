"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41904],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=a,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||n;return r?o.createElement(m,i(i({ref:t},l),{},{components:r})):o.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<n;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(39960),a=r(86010),n=r(67294),i=r(16550);function s(e){let{title:t,url:r,description:s,command:c}=e;const{pathname:d}=(0,i.TH)(),l=d.replace(/\/v\d+/,"");return n.createElement(o.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk")||l.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),s?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},s):null)}},57102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=r(87462),a=(r(67294),r(3905)),n=r(62872);const i={},s="forecast",c={unversionedId:"terminal/reference/forecast/index",id:"terminal/reference/forecast/index",title:"forecast",description:"<ReferenceCard",source:"@site/content/terminal/reference/forecast/index.mdx",sourceDirName:"terminal/reference/forecast",slug:"/terminal/reference/forecast/",permalink:"/terminal/reference/forecast/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forecast/index.mdx",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1713620851,formattedLastUpdatedAt:"Apr 20, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"weights",permalink:"/terminal/reference/etf/weights"},next:{title:"atr",permalink:"/terminal/reference/forecast/atr"}},d={},l=[],p={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forecast"},"forecast"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(n.Z,{title:"atr",description:"This page details how to add Average True Range to a stock ticker dataset",url:"forecast/atr",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"autoarima",description:"The AutoARIMA documentation page provides an extensive guide on how the",url:"forecast/autoarima",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"autoces",description:"This site explores Autoces, a tool for Automatic Complex Exponential",url:"forecast/autoces",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"autoets",description:"The page provides information on how to use the autoets function for",url:"forecast/autoets",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"autoselect",description:"The autoselect page provides information on how to utilize specific parameters",url:"forecast/autoselect",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"brnn",description:"This documentation page provides in-depth details on how to effectively",url:"forecast/brnn",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"clean",description:"This documentation page provides information about how to clean a dataset",url:"forecast/clean",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"combine",description:"The page provides detailed instruction on how to use the 'combine' function",url:"forecast/combine",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"corr",description:"The page provides information about the 'corr' function used to plot",url:"forecast/corr",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"delete",description:"Learn how to delete a column from your dataset with straightforward commands,",url:"forecast/delete",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"delta",description:"Documentation related to Delta, a function that adds percentage change",url:"forecast/delta",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"desc",description:"A page detailing how to use the 'desc' function to show descriptive statistics",url:"forecast/desc",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"ema",description:"Documentation for the 'ema' tool that allows the addition of an exponential",url:"forecast/ema",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"expo",description:"This page provides a comprehensive guide to the expo usage for executing",url:"forecast/expo",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"export",description:"Page providing a guide on how to use the 'export' feature of a data-focused",url:"forecast/export",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"linregr",description:"This documentation page details how to use and implement the 'linregr'",url:"forecast/linregr",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"load",description:"This page details how to use the 'load' command to bring custom datasets",url:"forecast/load",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"mom",description:"For the 'mom' function in a forecasting tool, this page discusses its",url:"forecast/mom",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"mstl",description:"A comprehensive guide for MSTL - Multiple Seasonalities and Trend using",url:"forecast/mstl",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"nbeats",description:"Explore how to use NBEATS, Neural Bayesian Estimation of Time Series,",url:"forecast/nbeats",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"nhits",description:"'The nhits page provide detailed parameters for forecasting using the",url:"forecast/nhits",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"plot",description:"This page provides an elaborative guide to users on how to plot data",url:"forecast/plot",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"regr",description:"This page provides a comprehensive guide on how to carry out a regression",url:"forecast/regr",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"rename",description:"The page provides detailed information on the 'rename' function from",url:"forecast/rename",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"rnn",description:"Explore the use of Recurrent Neural Networks (RNNs) for time series forecasting.",url:"forecast/rnn",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"roc",description:"The documentation shows how to use the ROC function which is used to",url:"forecast/roc",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"rsi",description:"This page provides a thorough explanation of how to add an RSI (Relative",url:"forecast/rsi",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"rwd",description:"This page details the procedure for performing a Random Walk with Drift",url:"forecast/rwd",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"season",description:"Meta description for the 'season' function in Docusaurus. This function",url:"forecast/season",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"seasonalnaive",description:"This page provides detailed usage of the SeasonalNaive forecasting model",url:"forecast/seasonalnaive",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"show",description:"This page provides detailed information and examples about how to show",url:"forecast/show",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"signal",description:"The documentation provides information about the 'Signal' function, which",url:"forecast/signal",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"sto",description:"Details on the usage, parameters, and examples of the 'sto' command in",url:"forecast/sto",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"tcn",description:"This page explains the usage, parameters, and examples of the TCN forecast",url:"forecast/tcn",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"tft",description:"This page provides detailed instructions on how to perform temporal forecasting",url:"forecast/tft",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"theta",description:"This page provides a detailed guide on how to perform a Theta forecast",url:"forecast/theta",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"trans",description:"This documentation page provides an in-depth guide on how to perform",url:"forecast/trans",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"which",description:"This page provides instructions on how to show library versions of required",url:"forecast/which",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);