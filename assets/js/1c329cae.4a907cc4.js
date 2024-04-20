"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,y=d["".concat(i,".").concat(p)]||d[p]||m[p]||l;return r?a.createElement(y,c(c({ref:t},s),{},{components:r})):a.createElement(y,c({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:n,c[1]=o;for(var u=2;u<l;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function c(e){let{children:t,hidden:r,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,c),hidden:r},t)}},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},31792:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(87462),n=r(67294),l=r(86010),c=r(12466),o=r(16550),i=r(91980),u=r(67392),s=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=m(e),[c,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=y({queryString:r,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),h=(()=>{const e=i??d;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var h=r(72389);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function k(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,c.o5)(),{pathname:p}=(0,o.TH)(),y=e=>{const t=e.currentTarget,r=d.indexOf(t),a=s[r].value;a!==i&&(m(t),u(a))},b=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},s.map((e=>{let{value:t,label:r,attributes:c}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:b,onClick:y},c,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,c?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&p.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&p.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&p.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&p.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&p.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&p.startsWith("/terminal")})}),r??t)})))}function f(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(f,(0,a.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return n.createElement(N,(0,a.Z)({key:String(t)},e))}},97576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(88828),c=r(31792),o=r(85162);const i={title:"SEARCH",description:"Learn how to search for available currency pairs using the `obb.currency.search` function, and retrieve a list of results, including provider name, warnings, chart, and metadata. Explore the various parameters such as provider, symbol, date, search terms, active tickers, order data, sort field, and limit. Dive into the details of the returned data, including name, symbol, currency, stock exchange, exchange short name, code, base currency, quote currency, market, locale, currency symbol, currency name, base currency symbol, base currency name, last updated timestamp in UTC, and delisted timestamp in UTC.",keywords:["currency search","available currency pairs","obb.currency.search","provider","symbol","date","search terms","active tickers","order data","sort field","limit","results","warnings","chart","metadata","name","symbol","currency","stock exchange","exchange short name","code","base currency","quote currency","market","locale","currency symbol","currency name","base currency symbol","base currency name","last updated utc","delisted utc"]},u=void 0,s={unversionedId:"excel/reference/currency/search",id:"excel/reference/currency/search",title:"SEARCH",description:"Learn how to search for available currency pairs using the `obb.currency.search` function, and retrieve a list of results, including provider name, warnings, chart, and metadata. Explore the various parameters such as provider, symbol, date, search terms, active tickers, order data, sort field, and limit. Dive into the details of the returned data, including name, symbol, currency, stock exchange, exchange short name, code, base currency, quote currency, market, locale, currency symbol, currency name, base currency symbol, base currency name, last updated timestamp in UTC, and delisted timestamp in UTC.",source:"@site/content/excel/reference/currency/search.md",sourceDirName:"excel/reference/currency",slug:"/excel/reference/currency/search",permalink:"/excel/reference/currency/search",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/currency/search.md",tags:[],version:"current",frontMatter:{title:"SEARCH",description:"Learn how to search for available currency pairs using the `obb.currency.search` function, and retrieve a list of results, including provider name, warnings, chart, and metadata. Explore the various parameters such as provider, symbol, date, search terms, active tickers, order data, sort field, and limit. Dive into the details of the returned data, including name, symbol, currency, stock exchange, exchange short name, code, base currency, quote currency, market, locale, currency symbol, currency name, base currency symbol, base currency name, last updated timestamp in UTC, and delisted timestamp in UTC.",keywords:["currency search","available currency pairs","obb.currency.search","provider","symbol","date","search terms","active tickers","order data","sort field","limit","results","warnings","chart","metadata","name","symbol","currency","stock exchange","exchange short name","code","base currency","quote currency","market","locale","currency symbol","currency name","base currency symbol","base currency name","last updated utc","delisted utc"]},sidebar:"tutorialSidebar",previous:{title:"REFERENCE_RATES",permalink:"/excel/reference/currency/reference_rates"},next:{title:"SNAPSHOTS",permalink:"/excel/reference/currency/snapshots"}},d={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],p={toc:m},y="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(y,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"CURRENCY.SEARCH | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Currency Search.  Search available currency pairs. Currency pairs are the national currencies from two countries coupled for trading on the foreign exchange (FX) marketplace. Both currencies will have exchange rates on which the trade will have its position basis. All trading within the forex market, whether selling, buying, or trading, will take place through currency pairs. (ref: Investopedia) Major currency pairs include pairs such as EUR/USD, USD/JPY, GBP/USD, etc."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel"},"=OBB.CURRENCY.SEARCH([provider],[symbol],[date],[search],[active],[order],[sort],[limit])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel"},"=OBB.CURRENCY.SEARCH()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, polygon, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol of the pair to search. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"A specific date to get data for. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"search"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Search for terms within the ticker and/or company name. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"active"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify if the tickers returned should be actively traded on the queried date. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Order data by ascending or descending. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sort"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Sort field used for ordering. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(c.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"fmp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the currency pair.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol of the currency pair.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency"),(0,n.kt)("td",{parentName:"tr",align:null},"Base currency of the currency pair.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stock_exchange"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock exchange of the currency pair.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange_short_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Short name of the stock exchange of the currency pair."))))),(0,n.kt)(o.Z,{value:"intrinio",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the currency pair.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"code"),(0,n.kt)("td",{parentName:"tr",align:null},"Code of the currency pair.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"base_currency"),(0,n.kt)("td",{parentName:"tr",align:null},"ISO 4217 currency code of the base currency.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quote_currency"),(0,n.kt)("td",{parentName:"tr",align:null},"ISO 4217 currency code of the quote currency."))))),(0,n.kt)(o.Z,{value:"polygon",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the currency pair.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the trading market. Always 'fx'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"locale"),(0,n.kt)("td",{parentName:"tr",align:null},"Locale of the currency pair.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency_symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"The symbol of the quote currency.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the quote currency.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"base_currency_symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"The symbol of the base currency.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"base_currency_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the base currency.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_updated_utc"),(0,n.kt)("td",{parentName:"tr",align:null},"The last updated timestamp in UTC.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"delisted_utc"),(0,n.kt)("td",{parentName:"tr",align:null},"The delisted timestamp in UTC.")))))))}b.isMDXComponent=!0}}]);