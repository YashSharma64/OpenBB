"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67774],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(a),c=n,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(35742);function l(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),l=a(86010),i=a(12466),o=a(16550),s=a(91980),u=a(67392),d=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:a,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=s??p;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var g=a(72389);const _={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),{pathname:c}=(0,o.TH)(),h=e=>{const t=e.currentTarget,a=p.indexOf(t),r=d[a].value;r!==s&&(m(t),u(r))},f=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},d.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:h},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",_.tabItem,i?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&c.startsWith("/terminal")})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",_.tabList)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},26523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(88828),i=a(31792),o=a(85162);const s={title:"sp500_multiples",description:"Learn about S&P 500 multiples and Shiller PE ratios. Use the `index.sp500_multiples`  query to retrieve historical data on various financial metrics such as PE Ratio,  Dividend, Earnings, Inflation Adjusted Price, Sales, Price to Sales Ratio, and Book  Value per Share. Specify query parameters such as start date, end date, and provider.  Collapse the frequency or transform the time series. Get results, charts, metadata,  and more.",keywords:["S&P 500 multiples","Shiller PE ratios","SP500Multiples","index.sp500_multiples","historical data","PE Ratio","Dividend","Earnings","Inflation Adjusted Price","Sales","Price to Sales Ratio","Book Value per Share","query parameters","start date","end date","provider","collapse","transform","results","chart","metadata","data","date"]},u=void 0,d={unversionedId:"platform/reference/index/sp500_multiples",id:"platform/reference/index/sp500_multiples",title:"sp500_multiples",description:"Learn about S&P 500 multiples and Shiller PE ratios. Use the `index.sp500_multiples`  query to retrieve historical data on various financial metrics such as PE Ratio,  Dividend, Earnings, Inflation Adjusted Price, Sales, Price to Sales Ratio, and Book  Value per Share. Specify query parameters such as start date, end date, and provider.  Collapse the frequency or transform the time series. Get results, charts, metadata,  and more.",source:"@site/content/platform/reference/index/sp500_multiples.md",sourceDirName:"platform/reference/index",slug:"/platform/reference/index/sp500_multiples",permalink:"/platform/reference/index/sp500_multiples",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/index/sp500_multiples.md",tags:[],version:"current",frontMatter:{title:"sp500_multiples",description:"Learn about S&P 500 multiples and Shiller PE ratios. Use the `index.sp500_multiples`  query to retrieve historical data on various financial metrics such as PE Ratio,  Dividend, Earnings, Inflation Adjusted Price, Sales, Price to Sales Ratio, and Book  Value per Share. Specify query parameters such as start date, end date, and provider.  Collapse the frequency or transform the time series. Get results, charts, metadata,  and more.",keywords:["S&P 500 multiples","Shiller PE ratios","SP500Multiples","index.sp500_multiples","historical data","PE Ratio","Dividend","Earnings","Inflation Adjusted Price","Sales","Price to Sales Ratio","Book Value per Share","query parameters","start date","end date","provider","collapse","transform","results","chart","metadata","data","date"]},sidebar:"tutorialSidebar",previous:{title:"snapshots",permalink:"/platform/reference/index/snapshots"},next:{title:"Data Models",permalink:"/platform/data_models/"}},p={},m=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],c={toc:m},h="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"index/sp500_multiples - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get historical S&P 500 multiples and Shiller PE ratios."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.index.sp500_multiples(provider='nasdaq')\nobb.index.sp500_multiples(series_name='shiller_pe_year', provider='nasdaq')\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"series_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter']"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the series. Defaults to 'pe_month'."),(0,n.kt)("td",{parentName:"tr",align:null},"pe_month"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Union","[date, str]"),(0,n.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Union","[date, str]"),(0,n.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"transform"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['diff', 'rdiff', 'cumul', 'normalize']"),(0,n.kt)("td",{parentName:"tr",align:null},"Transform the data as difference, percent change, cumulative, or normalize."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"collapse"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['daily', 'weekly', 'monthly', 'quarterly', 'annual']"),(0,n.kt)("td",{parentName:"tr",align:null},"Collapse the frequency of the time series."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['nasdaq']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'nasdaq' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},"nasdaq"),(0,n.kt)("td",{parentName:"tr",align:null},"True"))))),(0,n.kt)(o.Z,{value:"nasdaq",label:"nasdaq",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"series_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter']"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the series. Defaults to 'pe_month'."),(0,n.kt)("td",{parentName:"tr",align:null},"pe_month"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Union","[date, str]"),(0,n.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Union","[date, str]"),(0,n.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"transform"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['diff', 'rdiff', 'cumul', 'normalize']"),(0,n.kt)("td",{parentName:"tr",align:null},"Transform the data as difference, percent change, cumulative, or normalize."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"collapse"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['daily', 'weekly', 'monthly', 'quarterly', 'annual']"),(0,n.kt)("td",{parentName:"tr",align:null},"Collapse the frequency of the time series."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['nasdaq']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'nasdaq' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},"nasdaq"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : List[SP500Multiples]\n        Serializable results.\n\n    provider : Optional[Literal['nasdaq']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data."))))),(0,n.kt)(o.Z,{value:"nasdaq",label:"nasdaq",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")))))))}f.isMDXComponent=!0}}]);