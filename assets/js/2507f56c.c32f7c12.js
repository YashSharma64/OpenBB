"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92443],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(35742);function l(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},54875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const o={title:"bw",description:"The documentation page depicts the usage and configuration options for the 'bw' function in OpenBB Terminal. The function plots box and whisker graphs for quantitative data analysis based on provided DataFrame and target. An example using stock data for 'AAPL' is provided for a clearer understanding.",keywords:["Box and Whisker Plots","Quantitative Analysis","Yearly Accumulation","External Axes","AAPL","Adjusted Close"]},i=void 0,p={unversionedId:"sdk/reference/qa/bw",id:"sdk/reference/qa/bw",title:"bw",description:"The documentation page depicts the usage and configuration options for the 'bw' function in OpenBB Terminal. The function plots box and whisker graphs for quantitative data analysis based on provided DataFrame and target. An example using stock data for 'AAPL' is provided for a clearer understanding.",source:"@site/content/sdk/reference/qa/bw.md",sourceDirName:"sdk/reference/qa",slug:"/sdk/reference/qa/bw",permalink:"/sdk/reference/qa/bw",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/qa/bw.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709158151,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{title:"bw",description:"The documentation page depicts the usage and configuration options for the 'bw' function in OpenBB Terminal. The function plots box and whisker graphs for quantitative data analysis based on provided DataFrame and target. An example using stock data for 'AAPL' is provided for a clearer understanding.",keywords:["Box and Whisker Plots","Quantitative Analysis","Yearly Accumulation","External Axes","AAPL","Adjusted Close"]},sidebar:"tutorialSidebar",previous:{title:"acf",permalink:"/sdk/reference/qa/acf"},next:{title:"calculate_adjusted_var",permalink:"/sdk/reference/qa/calculate_adjusted_var"}},d={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"qa.bw - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Plots box and whisker plots"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L242"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.qa.bw(data: pd.DataFrame, target: str, symbol: str = "", yearly: bool = True, external_axes: bool = False)\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of dataset"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataframe to look at"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Data column to look at"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yearly"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to indicate yearly accumulation"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to return the figure object or not, by default False"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"This function does not return anything"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\ndf = openbb.stocks.load("AAPL")\nopenbb.qa.bw(data=df, target="Adj Close")\n')),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);