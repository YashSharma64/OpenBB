"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"v2.3.0",version:"2.3.0",date:new Date("2023-01-31T00:00:00.000Z"),description:"v2.3.0",sidebar_position:106},o=void 0,l={unversionedId:"terminal/changelog/version2_3_0",id:"terminal/changelog/version2_3_0",title:"v2.3.0",description:"v2.3.0",source:"@site/content/terminal/changelog/version2_3_0.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version2_3_0",permalink:"/terminal/changelog/version2_3_0",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version2_3_0.mdx",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1713620851,formattedLastUpdatedAt:"Apr 20, 2024",sidebarPosition:106,frontMatter:{title:"v2.3.0",version:"2.3.0",date:"2023-01-31T00:00:00.000Z",description:"v2.3.0",sidebar_position:106},sidebar:"tutorialSidebar",previous:{title:"v2.3.1",permalink:"/terminal/changelog/version2_3_1"},next:{title:"v2.2.0",permalink:"/terminal/changelog/version2_2_0"}},s={},u=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"What&#39;s changed",id:"whats-changed",level:2}],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"whats-new"},"What's new"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New stocks filings function"),(0,r.kt)("li",{parentName:"ul"},"Quantile anomaly detection in forecasting menu"),(0,r.kt)("li",{parentName:"ul"},"Ability to save data to specific excel sheets"),(0,r.kt)("li",{parentName:"ul"},"File location for presets adjusted and examples added"),(0,r.kt)("li",{parentName:"ul"},"Updated yfinance and starting to chip away at the deprecated functions there"),(0,r.kt)("li",{parentName:"ul"},"General bug fixing and enhancements")),(0,r.kt)("h2",{id:"whats-changed"},"What's changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adds end date to ",(0,r.kt)("inlineCode",{parentName:"li"},"forex/load")," (#4077) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/Windows-CLI (#4087) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Adds auto completion to ",(0,r.kt)("inlineCode",{parentName:"li"},"news")," (#4089) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Update commands with --sheet-name that didn't work (#4088) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Improve the ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/search")," command (#4084) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Update the routine, portfolio and screener files and adjust the documentation (#4021) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Add keywords and descriptions to basics, intros and advanced guides (#4052) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Nightly Build Optimization (#4073) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"Fix UK Economy/Macro Y10YD bug (#4078) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Fix incorrect column label in nasdaq_model.py (#4063) @peter-oroszvari"),(0,r.kt)("li",{parentName:"ul"},"SDK Docs: Clarifies the ",(0,r.kt)("inlineCode",{parentName:"li"},"Stocks.CA.Balance")," example by including, ",(0,r.kt)("inlineCode",{parentName:"li"},"timeframe = '2021'")," (#4072) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Bumping yfinance to 0.2.9 and updating ruff (#4059) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Refactor requests throughout (#4033) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openbb.economy.fred_ids")," to always return dataframe (#4058) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Upgrade dependencies for bug and for security vulnerabilities. (#4031) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Copy paste all the sheet names (#4035) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Refactor ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/options/voi,vol,oi,chains")," (#4017) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Avoid running build on hotfix branches (#4048) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"Feature/release branch gitflow (#4034) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"Deprecate reddit commands taking too long to connect to PushshiftAPI (#3999) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/fix integration tests (#4025) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/fix equity reports (#4029) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Small typo in docs (#4036) @jose-donato"),(0,r.kt)("li",{parentName:"ul"},"Fix terminal exit after ",(0,r.kt)("inlineCode",{parentName:"li"},"--sort p/e")," (#4013) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Add back pull request to linting action (#4032) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Hotfix --\x3e develop (#4027) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"Quantile Anomaly Detection on Timeseries (#3980) @martinb-bb"),(0,r.kt)("li",{parentName:"ul"},"Feature/excel sheets (#4023) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Feature - Added Integration Test Automation (#4019) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"Adds filings function to the Stocks menu (#3910) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"merge the release changes into develop (#4016) @jmaslek")))}p.isMDXComponent=!0}}]);