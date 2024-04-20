"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15018],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),u=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=u(r),c=a,g=s["".concat(d,".").concat(c)]||s[c]||m[c]||l;return r?n.createElement(g,i(i({ref:e},p),{},{components:r})):n.createElement(g,i({ref:e},p))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85162:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(67294),a=r(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:r,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:r},e)}},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(67294),a=r(35742);function l(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},31792:(t,e,r)=>{r.d(e,{Z:()=>v});var n=r(87462),a=r(67294),l=r(86010),i=r(12466),o=r(16550),d=r(91980),u=r(67392),p=r(50012);function s(t){return function(t){return a.Children.map(t,(t=>{if(!t||(0,a.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:r,attributes:n,default:a}}=t;return{value:e,label:r,attributes:n,default:a}}))}function m(t){const{values:e,children:r}=t;return(0,a.useMemo)((()=>{const t=e??s(r);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function c(t){let{value:e,tabValues:r}=t;return r.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:r}=t;const n=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:r}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,d._X)(l),(0,a.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function k(t){const{defaultValue:e,queryString:r=!1,groupId:n}=t,l=m(t),[i,o]=(0,a.useState)((()=>function(t){let{defaultValue:e,tabValues:r}=t;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=r.find((t=>t.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[d,u]=g({queryString:r,groupId:n}),[s,k]=function(t){let{groupId:e}=t;const r=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,p.Nk)(r);return[n,(0,a.useCallback)((t=>{r&&l.set(t)}),[r,l])]}({groupId:n}),N=(()=>{const t=d??s;return c({value:t,tabValues:l})?t:null})();(0,a.useLayoutEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:i,selectValue:(0,a.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),u(t),k(t)}),[u,k,l]),tabValues:l}}var N=r(72389);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(t){let{className:e,block:r,selectedValue:d,selectValue:u,tabValues:p}=t;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),{pathname:c}=(0,o.TH)(),g=t=>{const e=t.currentTarget,r=s.indexOf(e),n=p[r].value;n!==d&&(m(e),u(n))},k=t=>{let e=null;switch(t.key){case"Enter":g(t);break;case"ArrowRight":{const r=s.indexOf(t.currentTarget)+1;e=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(t.currentTarget)-1;e=s[r]??s[s.length-1];break}}e?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},p.map((t=>{let{value:e,label:r,attributes:i}=t;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:d===e?0:-1,"aria-selected":d===e,key:e,ref:t=>s.push(t),onKeyDown:k,onClick:g},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":d===e,"border-b-2 text-[#669dcb] border-[#669dcb]":d===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==e&&c.startsWith("/terminal")})}),r??e)})))}function f(t){let{lazy:e,children:r,selectedValue:n}=t;if(r=Array.isArray(r)?r:[r],e){const t=r.find((t=>t.props.value===n));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function h(t){const e=k(t);return a.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},a.createElement(y,(0,n.Z)({},t,e)),a.createElement(f,(0,n.Z)({},t,e)))}function v(t){const e=(0,N.Z)();return a.createElement(h,(0,n.Z)({key:String(e)},t))}},89009:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),l=r(88828),i=r(31792),o=r(85162);const d={title:"INSIDER_TRADING",description:"Learn how to use the stock insider trading Python function to get information about insider trading, including parameter details, return types, and data descriptions.",keywords:["stock insider trading","equity ownership","Python function","parameter details","data description","symbol","transaction type","limit","provider","returns","results","chart","metadata","data","filing date","transaction date","reporting CIK","securities owned","company CIK","reporting name","type of owner","acquisition or disposition","form type","securities transacted","price","security name","link"]},u=void 0,p={unversionedId:"excel/reference/equity/ownership/insider_trading",id:"excel/reference/equity/ownership/insider_trading",title:"INSIDER_TRADING",description:"Learn how to use the stock insider trading Python function to get information about insider trading, including parameter details, return types, and data descriptions.",source:"@site/content/excel/reference/equity/ownership/insider_trading.md",sourceDirName:"excel/reference/equity/ownership",slug:"/excel/reference/equity/ownership/insider_trading",permalink:"/excel/reference/equity/ownership/insider_trading",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/ownership/insider_trading.md",tags:[],version:"current",frontMatter:{title:"INSIDER_TRADING",description:"Learn how to use the stock insider trading Python function to get information about insider trading, including parameter details, return types, and data descriptions.",keywords:["stock insider trading","equity ownership","Python function","parameter details","data description","symbol","transaction type","limit","provider","returns","results","chart","metadata","data","filing date","transaction date","reporting CIK","securities owned","company CIK","reporting name","type of owner","acquisition or disposition","form type","securities transacted","price","security name","link"]},sidebar:"tutorialSidebar",previous:{title:"FORM_13F",permalink:"/excel/reference/equity/ownership/form_13f"},next:{title:"INSTITUTIONAL",permalink:"/excel/reference/equity/ownership/institutional"}},s={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],c={toc:m},g="wrapper";function k(t){let{components:e,...r}=t;return(0,a.kt)(g,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"EQUITY.OWNERSHIP.INSIDER_TRADING | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get data about trading by a company's management team and board of directors."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel"},"=OBB.EQUITY.OWNERSHIP.INSIDER_TRADING(symbol,[limit],[provider],[transactionType],[start_date],[end_date],[ownership_type],[sort_by])\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.EQUITY.OWNERSHIP.INSIDER_TRADING("AAPL")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"symbol")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Text")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"True"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Number"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, defaults to fmp."),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transactionType"),(0,a.kt)("td",{parentName:"tr",align:null},"Any"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the transaction. (provider: fmp)"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"end_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ownership_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of ownership. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sort_by"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Field to sort by. (provider: intrinio)"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"data"},"Data"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"fmp",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"company_cik"),(0,a.kt)("td",{parentName:"tr",align:null},"CIK number of the company.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Filing date of the trade.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transaction_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Date of the transaction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner_cik"),(0,a.kt)("td",{parentName:"tr",align:null},"Reporting individual's CIK.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner_name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the reporting individual.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner_title"),(0,a.kt)("td",{parentName:"tr",align:null},"The title held by the reporting individual.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transaction_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of transaction being reported.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"acquisition_or_disposition"),(0,a.kt)("td",{parentName:"tr",align:null},"Acquisition or disposition of the shares.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"security_type"),(0,a.kt)("td",{parentName:"tr",align:null},"The type of security transacted.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"securities_owned"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of securities owned by the reporting individual.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"securities_transacted"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of securities transacted by the reporting individual.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transaction_price"),(0,a.kt)("td",{parentName:"tr",align:null},"The price of the transaction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_url"),(0,a.kt)("td",{parentName:"tr",align:null},"Link to the filing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"form_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Form type of the insider trading."))))),(0,a.kt)(o.Z,{value:"intrinio",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"company_cik"),(0,a.kt)("td",{parentName:"tr",align:null},"CIK number of the company.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Filing date of the trade.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transaction_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Date of the transaction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner_cik"),(0,a.kt)("td",{parentName:"tr",align:null},"Reporting individual's CIK.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner_name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the reporting individual.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner_title"),(0,a.kt)("td",{parentName:"tr",align:null},"The title held by the reporting individual.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transaction_type"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of transaction being reported.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"acquisition_or_disposition"),(0,a.kt)("td",{parentName:"tr",align:null},"Acquisition or disposition of the shares.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"security_type"),(0,a.kt)("td",{parentName:"tr",align:null},"The type of security transacted.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"securities_owned"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of securities owned by the reporting individual.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"securities_transacted"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of securities transacted by the reporting individual.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transaction_price"),(0,a.kt)("td",{parentName:"tr",align:null},"The price of the transaction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filing_url"),(0,a.kt)("td",{parentName:"tr",align:null},"URL of the filing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"company_name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the company.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"conversion_exercise_price"),(0,a.kt)("td",{parentName:"tr",align:null},"Conversion/Exercise price of the shares.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deemed_execution_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Deemed execution date of the trade.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exercise_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Exercise date of the trade.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiration_date"),(0,a.kt)("td",{parentName:"tr",align:null},"Expiration date of the derivative.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"underlying_security_title"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the underlying non-derivative security related to this derivative transaction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"underlying_shares"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of underlying shares related to this derivative transaction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nature_of_ownership"),(0,a.kt)("td",{parentName:"tr",align:null},"Nature of ownership of the insider trading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"director"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the owner is a director.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"officer"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the owner is an officer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ten_percent_owner"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the owner is a 10% owner.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"other_relation"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the owner is having another relation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"derivative_transaction"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the owner is having a derivative transaction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"report_line_number"),(0,a.kt)("td",{parentName:"tr",align:null},"Report line number of the insider trading.")))))))}k.isMDXComponent=!0}}]);