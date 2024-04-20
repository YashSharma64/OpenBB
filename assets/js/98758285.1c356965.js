"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12826],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},e)}},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},31792:(t,e,a)=>{a.d(e,{Z:()=>y});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),d=a(91980),p=a(67392),s=a(50012);function m(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function u(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??m(a);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:a}=t;const n=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,d._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function N(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=u(t),[i,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[d,p]=g({queryString:a,groupId:n}),[m,N]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),k=(()=>{const t=d??m;return c({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),p(t),N(t)}),[p,N,l]),tabValues:l}}var k=a(72389);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function _(t){let{className:e,block:a,selectedValue:d,selectValue:p,tabValues:s}=t;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),{pathname:c}=(0,o.TH)(),g=t=>{const e=t.currentTarget,a=m.indexOf(e),n=s[a].value;n!==d&&(u(e),p(n))},N=t=>{let e=null;switch(t.key){case"Enter":g(t);break;case"ArrowRight":{const a=m.indexOf(t.currentTarget)+1;e=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(t.currentTarget)-1;e=m[a]??m[m.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},s.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:d===e?0:-1,"aria-selected":d===e,key:e,ref:t=>m.push(t),onKeyDown:N,onClick:g},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,i?.className,{"border-b-2 pointer-events-none":d===e,"border-b-2 text-[#669dcb] border-[#669dcb]":d===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==e&&c.startsWith("/terminal")})}),a??e)})))}function h(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function b(t){const e=N(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(_,(0,n.Z)({},t,e)),r.createElement(h,(0,n.Z)({},t,e)))}function y(t){const e=(0,k.Z)();return r.createElement(b,(0,n.Z)({key:String(e)},t))}},6690:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>N,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(88828),i=a(31792),o=a(85162);const d={title:"CASH",description:"Learn how to use the Cash Flow Statement API endpoint to retrieve information about cash flow statements. Understand the parameters and return values of the API, and explore the available data fields for cash flow statements.",keywords:["Cash Flow Statement","cash flow statement parameters","cash flow statement returns","cash flow statement data","python obb.equity.fundamental.cash","symbol","period","limit","provider","cik","filing date","period of report date","include sources","order","sort","net income","depreciation and amortization","stock based compensation","deferred income tax","other non-cash items","changes in operating assets and liabilities","accounts receivables","inventory","vendor non-trade receivables","other current and non-current assets","accounts payables","deferred revenue","other current and non-current liabilities","net cash flow from operating activities","purchases of marketable securities","sales from maturities of investments","investments in property plant and equipment","payments from acquisitions","other investing activities","net cash flow from investing activities","taxes paid on net share settlement","dividends paid","common stock repurchased","debt proceeds","debt repayment","other financing activities","net cash flow from financing activities","net change in cash"]},p=void 0,s={unversionedId:"excel/reference/equity/fundamental/cash",id:"excel/reference/equity/fundamental/cash",title:"CASH",description:"Learn how to use the Cash Flow Statement API endpoint to retrieve information about cash flow statements. Understand the parameters and return values of the API, and explore the available data fields for cash flow statements.",source:"@site/content/excel/reference/equity/fundamental/cash.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/cash",permalink:"/excel/reference/equity/fundamental/cash",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/cash.md",tags:[],version:"current",frontMatter:{title:"CASH",description:"Learn how to use the Cash Flow Statement API endpoint to retrieve information about cash flow statements. Understand the parameters and return values of the API, and explore the available data fields for cash flow statements.",keywords:["Cash Flow Statement","cash flow statement parameters","cash flow statement returns","cash flow statement data","python obb.equity.fundamental.cash","symbol","period","limit","provider","cik","filing date","period of report date","include sources","order","sort","net income","depreciation and amortization","stock based compensation","deferred income tax","other non-cash items","changes in operating assets and liabilities","accounts receivables","inventory","vendor non-trade receivables","other current and non-current assets","accounts payables","deferred revenue","other current and non-current liabilities","net cash flow from operating activities","purchases of marketable securities","sales from maturities of investments","investments in property plant and equipment","payments from acquisitions","other investing activities","net cash flow from investing activities","taxes paid on net share settlement","dividends paid","common stock repurchased","debt proceeds","debt repayment","other financing activities","net cash flow from financing activities","net change in cash"]},sidebar:"tutorialSidebar",previous:{title:"BALANCE_GROWTH",permalink:"/excel/reference/equity/fundamental/balance_growth"},next:{title:"CASH_GROWTH",permalink:"/excel/reference/equity/fundamental/cash_growth"}},m={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],c={toc:u},g="wrapper";function N(t){let{components:e,...a}=t;return(0,r.kt)(g,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"EQUITY.FUNDAMENTAL.CASH | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Get the cash flow statement for a given company."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},"=OBB.EQUITY.FUNDAMENTAL.CASH(symbol,[period],[limit],[provider],[fiscal_year],[filing_date],[filing_date_lt],[filing_date_lte],[filing_date_gt],[filing_date_gte],[period_of_report_date],[period_of_report_date_lt],[period_of_report_date_lte],[period_of_report_date_gt],[period_of_report_date_gte],[include_sources],[order],[sort])\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.EQUITY.FUNDAMENTAL.CASH("AAPL")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"True"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, polygon, defaults to fmp."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The specific fiscal year.  Reports do not go beyond 2008. (provider: intrinio)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_lt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date less than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_lte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date less than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_gt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date greater than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_gte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date greater than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_lt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date less than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_lte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date less than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_gt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date greater than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_gte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date greater than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_sources"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to include the sources of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"order"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Order of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"fmp",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_ending"),(0,r.kt)("td",{parentName:"tr",align:null},"The end date of the reporting period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fiscal_period"),(0,r.kt)("td",{parentName:"tr",align:null},"The fiscal period of the report.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,r.kt)("td",{parentName:"tr",align:null},"The fiscal year of the fiscal period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the filing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accepted_date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date the filing was accepted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reported_currency"),(0,r.kt)("td",{parentName:"tr",align:null},"The currency in which the cash flow statement was reported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income"),(0,r.kt)("td",{parentName:"tr",align:null},"Net income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"depreciation_and_amortization"),(0,r.kt)("td",{parentName:"tr",align:null},"Depreciation and amortization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deferred_income_tax"),(0,r.kt)("td",{parentName:"tr",align:null},"Deferred income tax.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stock_based_compensation"),(0,r.kt)("td",{parentName:"tr",align:null},"Stock-based compensation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_working_capital"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in working capital.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_account_receivables"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in account receivables.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_inventory"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in inventory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_account_payable"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in account payable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_other_working_capital"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in other working capital.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_other_non_cash_items"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in other non-cash items.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_operating_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash from operating activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"purchase_of_property_plant_and_equipment"),(0,r.kt)("td",{parentName:"tr",align:null},"Purchase of property, plant and equipment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acquisitions"),(0,r.kt)("td",{parentName:"tr",align:null},"Acquisitions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"purchase_of_investment_securities"),(0,r.kt)("td",{parentName:"tr",align:null},"Purchase of investment securities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sale_and_maturity_of_investments"),(0,r.kt)("td",{parentName:"tr",align:null},"Sale and maturity of investments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Other investing activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash from investing activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repayment_of_debt"),(0,r.kt)("td",{parentName:"tr",align:null},"Repayment of debt.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issuance_of_common_equity"),(0,r.kt)("td",{parentName:"tr",align:null},"Issuance of common equity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repurchase_of_common_equity"),(0,r.kt)("td",{parentName:"tr",align:null},"Repurchase of common equity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment_of_dividends"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment of dividends.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Other financing activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash from financing activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"effect_of_exchange_rate_changes_on_cash"),(0,r.kt)("td",{parentName:"tr",align:null},"Effect of exchange rate changes on cash.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_change_in_cash_and_equivalents"),(0,r.kt)("td",{parentName:"tr",align:null},"Net change in cash and equivalents.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_at_beginning_of_period"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash at beginning of period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_at_end_of_period"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash at end of period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operating_cash_flow"),(0,r.kt)("td",{parentName:"tr",align:null},"Operating cash flow.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"capital_expenditure"),(0,r.kt)("td",{parentName:"tr",align:null},"Capital expenditure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"free_cash_flow"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link"),(0,r.kt)("td",{parentName:"tr",align:null},"Link to the filing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"final_link"),(0,r.kt)("td",{parentName:"tr",align:null},"Link to the filing document."))))),(0,r.kt)(o.Z,{value:"intrinio",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_ending"),(0,r.kt)("td",{parentName:"tr",align:null},"The end date of the reporting period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fiscal_period"),(0,r.kt)("td",{parentName:"tr",align:null},"The fiscal period of the report.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,r.kt)("td",{parentName:"tr",align:null},"The fiscal year of the fiscal period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reported_currency"),(0,r.kt)("td",{parentName:"tr",align:null},"The currency in which the balance sheet is reported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income_continuing_operations"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Income (Continuing Operations)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income_discontinued_operations"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Income (Discontinued Operations)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income"),(0,r.kt)("td",{parentName:"tr",align:null},"Consolidated Net Income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provision_for_loan_losses"),(0,r.kt)("td",{parentName:"tr",align:null},"Provision for Loan Losses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provision_for_credit_losses"),(0,r.kt)("td",{parentName:"tr",align:null},"Provision for credit losses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"depreciation_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"Depreciation Expense.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amortization_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"Amortization Expense.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"share_based_compensation"),(0,r.kt)("td",{parentName:"tr",align:null},"Share-based compensation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"non_cash_adjustments_to_reconcile_net_income"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-Cash Adjustments to Reconcile Net Income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changes_in_operating_assets_and_liabilities"),(0,r.kt)("td",{parentName:"tr",align:null},"Changes in Operating Assets and Liabilities (Net)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_continuing_operating_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Continuing Operating Activities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_discontinued_operating_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Discontinued Operating Activities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_operating_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Operating Activities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"divestitures"),(0,r.kt)("td",{parentName:"tr",align:null},"Divestitures")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sale_of_property_plant_and_equipment"),(0,r.kt)("td",{parentName:"tr",align:null},"Sale of Property, Plant, and Equipment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acquisitions"),(0,r.kt)("td",{parentName:"tr",align:null},"Acquisitions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"purchase_of_investments"),(0,r.kt)("td",{parentName:"tr",align:null},"Purchase of Investments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"purchase_of_investment_securities"),(0,r.kt)("td",{parentName:"tr",align:null},"Purchase of Investment Securities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sale_and_maturity_of_investments"),(0,r.kt)("td",{parentName:"tr",align:null},"Sale and Maturity of Investments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loans_held_for_sale"),(0,r.kt)("td",{parentName:"tr",align:null},"Loans Held for Sale (Net)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"purchase_of_property_plant_and_equipment"),(0,r.kt)("td",{parentName:"tr",align:null},"Purchase of Property, Plant, and Equipment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Other Investing Activities (Net)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_continuing_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Continuing Investing Activities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_discontinued_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Discontinued Investing Activities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Investing Activities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment_of_dividends"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment of Dividends")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repurchase_of_common_equity"),(0,r.kt)("td",{parentName:"tr",align:null},"Repurchase of Common Equity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repurchase_of_preferred_equity"),(0,r.kt)("td",{parentName:"tr",align:null},"Repurchase of Preferred Equity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issuance_of_common_equity"),(0,r.kt)("td",{parentName:"tr",align:null},"Issuance of Common Equity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issuance_of_preferred_equity"),(0,r.kt)("td",{parentName:"tr",align:null},"Issuance of Preferred Equity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issuance_of_debt"),(0,r.kt)("td",{parentName:"tr",align:null},"Issuance of Debt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repayment_of_debt"),(0,r.kt)("td",{parentName:"tr",align:null},"Repayment of Debt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Other Financing Activities (Net)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_interest_received"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash Interest Received")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_change_in_deposits"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Change in Deposits")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_increase_in_fed_funds_sold"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Increase in Fed Funds Sold")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_continuing_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Continuing Financing Activities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_discontinued_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Discontinued Financing Activities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Financing Activities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"effect_of_exchange_rate_changes"),(0,r.kt)("td",{parentName:"tr",align:null},"Effect of Exchange Rate Changes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_net_changes_in_cash"),(0,r.kt)("td",{parentName:"tr",align:null},"Other Net Changes in Cash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_change_in_cash_and_equivalents"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Change in Cash and Equivalents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_income_taxes_paid"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash Income Taxes Paid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_interest_paid"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash Interest Paid"))))),(0,r.kt)(o.Z,{value:"polygon",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_ending"),(0,r.kt)("td",{parentName:"tr",align:null},"The end date of the reporting period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fiscal_period"),(0,r.kt)("td",{parentName:"tr",align:null},"The fiscal period of the report.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,r.kt)("td",{parentName:"tr",align:null},"The fiscal year of the fiscal period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_operating_activities_continuing"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from operating activities continuing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_operating_activities_discontinued"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from operating activities discontinued.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_operating_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from operating activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_investing_activities_continuing"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from investing activities continuing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_investing_activities_discontinued"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from investing activities discontinued.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from investing activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_financing_activities_continuing"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from financing activities continuing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_financing_activities_discontinued"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from financing activities discontinued.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from financing activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_continuing"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow continuing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_discontinued"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow discontinued.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exchange_gains_losses"),(0,r.kt)("td",{parentName:"tr",align:null},"Exchange gains losses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow.")))))))}N.isMDXComponent=!0}}]);