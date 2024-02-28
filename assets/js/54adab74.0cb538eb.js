"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,u=d["".concat(i,".").concat(h)]||d[h]||m[h]||o;return n?r.createElement(u,s(s({ref:t},c),{},{components:n})):r.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},93601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const s={title:"Dark Pools & Short Data",description:"This documentation page introduces the dark pool and short data menu, which provides the user with tools for gauging the level of short interest, FTD rate, and off-exchange volume in NMS securities.",keywords:["dark pool","short data","ftd","off-exchange volume","short interest","nms","short","sidtc","cover","fail"]},l=void 0,i={unversionedId:"terminal/menus/stocks/dark-pool-shorts",id:"terminal/menus/stocks/dark-pool-shorts",title:"Dark Pools & Short Data",description:"This documentation page introduces the dark pool and short data menu, which provides the user with tools for gauging the level of short interest, FTD rate, and off-exchange volume in NMS securities.",source:"@site/content/terminal/menus/stocks/dark-pool-shorts.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/dark-pool-shorts",permalink:"/terminal/menus/stocks/dark-pool-shorts",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/dark-pool-shorts.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709158151,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{title:"Dark Pools & Short Data",description:"This documentation page introduces the dark pool and short data menu, which provides the user with tools for gauging the level of short interest, FTD rate, and off-exchange volume in NMS securities.",keywords:["dark pool","short data","ftd","off-exchange volume","short interest","nms","short","sidtc","cover","fail"]},sidebar:"tutorialSidebar",previous:{title:"Comparison Analysis",permalink:"/terminal/menus/stocks/comparison"},next:{title:"Discovery",permalink:"/terminal/menus/stocks/disc"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Shorted",id:"shorted",level:3},{value:"HSI",id:"hsi",level:3},{value:"PROM",id:"prom",level:3},{value:"CTB",id:"ctb",level:3},{value:"FTD",id:"ftd",level:3}],d={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"Dark Pool & Short Data - Stocks - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"The purpose of this menu is to provide the user with tools for gauging the level of short interest, FTD rate, and off-exchange volume in a ",(0,a.kt)("a",{href:"https://www.law.cornell.edu/cfr/text/17/242.600",target:"_blank",rel:"noreferrer noopener"},"NMS security"),". There are also commands for looking at market as a whole. "),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Enter the ",(0,a.kt)("inlineCode",{parentName:"p"},"dps")," menu from the ",(0,a.kt)("inlineCode",{parentName:"p"},"/stocks")," menu, or through the absolute path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/dps\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/64775307-b79e-4ff6-95dd-ec676e1ab677",alt:"Screenshot 2023-11-01 at 8 33 58\u202fAM"})),(0,a.kt)("p",null,"The commands which are not ticker-specific are grouped at the top of the menu, and they provide screener-like utility. "),(0,a.kt)("h3",{id:"shorted"},"Shorted"),(0,a.kt)("p",null,"A list of the most-shorted stocks, according to Yahoo Finance, is displayed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"shorted")," command. It should be noted that this menu is only able to provide data for SEC-regulated equities."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/dps/shorted\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/d1361b8f-0795-439f-b9f6-ace9cbde068a",alt:"Screenshot 2023-11-01 at 8 38 12\u202fAM"})),(0,a.kt)("h3",{id:"hsi"},"HSI"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hsi")," command includes the percent of short interest relative to the float size."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/dps/hsi\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/1287e58b-dbed-44a0-821a-769daebb3f29",alt:"Screenshot 2023-11-01 at 8 40 39\u202fAM"})),(0,a.kt)("h3",{id:"prom"},"PROM"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"prom")," performs a linear regression to scan for tickers with growing trade activity on ATS tapes, reported to ",(0,a.kt)("a",{href:"https://otctransparency.finra.org/otctransparency/AtsIssueData",target:"_blank",rel:"noreferrer noopener"},"FINRA"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/dps/prom -n 50 -l 5 -t T1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Processing Tier T1 ...\nProcessing regression on 50 promising tickers ...\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/13b67056-9d94-45f0-b483-41c1da773f0e",alt:"Screenshot 2023-11-01 at 8 45 21\u202fAM"})),(0,a.kt)("p",null,"Tier 2 NMS Tickers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/dps/prom -n 50 -l 5 -t T2\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Processing Tier T2 ...\nProcessing regression on 50 promising tickers ...\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/fab9bb45-fec9-4d51-8b77-0bb9697d8888",alt:"Screenshot 2023-11-01 at 8 48 32\u202fAM"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pos")," provides a summary for the last reported trading day (information is updated in the early evening). Position represents a rolling twenty-day total and directional trends can be identified by watching the changes over time. Adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"-a")," flag will sort the list from the bottom up - the most negative - and creates a fuller picture when watching in tandom with the positive side of the ledger. Monitor the rate of change in position sizes, or a reversal in directional flow. This ",(0,a.kt)("a",{href:"https://squeezemetrics.com/monitor/download/pdf/short_is_long.pdf?",target:"_blank",rel:"noreferrer noopener"},"white paper"),", written by SqueezeMetrics, sheds some light on the trading activity reported here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/dps pos\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/8075ab29-cbac-448c-bfc4-a2ca250f6288",alt:"Screenshot 2023-11-01 at 8 55 25\u202fAM"})),(0,a.kt)("p",null,"The other end of the spectrum:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/dps/pos -a\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/9bd6d148-ae36-4b7b-9faa-79db4dcb93ad",alt:"Screenshot 2023-11-01 at 8 58 27\u202fAM"})),(0,a.kt)("h3",{id:"ctb"},"CTB"),(0,a.kt)("p",null,"The cost-to-borrow is used as a proxy-measurement for an equity's specialness. ",(0,a.kt)("inlineCode",{parentName:"p"},"ctb")," shows the  most expensive equities to short, and the number shares available to short, on Interactive Brokers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/dps/ctb -n 5\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Symbol"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Fees"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Available"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ALPSQ"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1187.0287%"),(0,a.kt)("td",{parentName:"tr",align:"right"},"500000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"LEO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1034.2946%"),(0,a.kt)("td",{parentName:"tr",align:"right"},"300000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"NIM"),(0,a.kt)("td",{parentName:"tr",align:"left"},"872.2794%"),(0,a.kt)("td",{parentName:"tr",align:"right"},"2000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SVRE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"801.5519%"),(0,a.kt)("td",{parentName:"tr",align:"right"},"15000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"APLM"),(0,a.kt)("td",{parentName:"tr",align:"left"},"753.8133%"),(0,a.kt)("td",{parentName:"tr",align:"right"},"65000")))),(0,a.kt)("h3",{id:"ftd"},"FTD"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ftd")," command will lookup the SEC-reported fails-to-deliver data for a single company.  Use ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," to set the symbol."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/dps/load cvna/ftd --start 2022-01-01\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/43409271-e306-4f13-9153-8cc322dde851",alt:"Screenshot 2023-11-01 at 9 28 34\u202fAM"})))}h.isMDXComponent=!0}}]);