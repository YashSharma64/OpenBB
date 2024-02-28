"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=i(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},82785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const l={title:"futures",description:"This page provides information on how to retrieve and manipulate futures data using the OpenBB economy function. It includes examples and descriptions for parameters such as data source and future type.",keywords:["economy","futures data","Finviz","WSJ","Indices","Energy","Metals","Meats","Grains","Softs","Bonds","Currencies"]},u=void 0,s={unversionedId:"sdk/reference/economy/futures",id:"sdk/reference/economy/futures",title:"futures",description:"This page provides information on how to retrieve and manipulate futures data using the OpenBB economy function. It includes examples and descriptions for parameters such as data source and future type.",source:"@site/content/sdk/reference/economy/futures.md",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/futures",permalink:"/sdk/reference/economy/futures",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/economy/futures.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709158151,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{title:"futures",description:"This page provides information on how to retrieve and manipulate futures data using the OpenBB economy function. It includes examples and descriptions for parameters such as data source and future type.",keywords:["economy","futures data","Finviz","WSJ","Indices","Energy","Metals","Meats","Grains","Softs","Bonds","Currencies"]},sidebar:"tutorialSidebar",previous:{title:"future",permalink:"/sdk/reference/economy/future"},next:{title:"gdp",permalink:"/sdk/reference/economy/gdp"}},i={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"economy.futures - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get futures data."),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/sdk_helpers.py#L10"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.economy.futures(source: Any = "WSJ", future_type: str = "Indices")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Data source for futures data.  From the following: WSJ, Finviz"),(0,a.kt)("td",{parentName:"tr",align:null},"WSJ"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"future_type"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"(Finviz only) Future type to get.  Can be: Indices, Energy, Metals, Meats, Grains, Softs, Bonds, Currencies."),(0,a.kt)("td",{parentName:"tr",align:null},"Indices"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Dataframe of futures data.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nwsj_futures = openbb.economy.futures()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"To sort by the largest percent change:\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'futures_sorted = openbb.economy.futures().sort_values(by="%Chg", ascending=False)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FinViz provides different options for future types.  We can get Meats with the following command:\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'meat_futures = openbb.economy.futures(source="Finviz", future_type="Meats")\n')),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);