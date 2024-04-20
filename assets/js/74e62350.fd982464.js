"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93842],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),m=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=m(r),d=n,k=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return r?a.createElement(k,l(l({ref:e},c),{},{components:r})):a.createElement(k,l({ref:e},c))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[p]="string"==typeof t?t:n,l[1]=s;for(var m=2;m<o;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>o});var a=r(67294),n=r(35742);function o(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},79093:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const l={title:"Trading Hours",description:"This introduces the Trading Hours sub-menu, within the Stocks menu of the OpenBB Terminal.  Use these commands to check the operating status of markets globally.",keywords:["trading hours","trading","market hours","open","close","bursa","pandasmarketcalendars","status","holidays"]},s=void 0,i={unversionedId:"terminal/menus/stocks/tradinghours",id:"terminal/menus/stocks/tradinghours",title:"Trading Hours",description:"This introduces the Trading Hours sub-menu, within the Stocks menu of the OpenBB Terminal.  Use these commands to check the operating status of markets globally.",source:"@site/content/terminal/menus/stocks/tradinghours.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/tradinghours",permalink:"/terminal/menus/stocks/tradinghours",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/tradinghours.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1713620851,formattedLastUpdatedAt:"Apr 20, 2024",frontMatter:{title:"Trading Hours",description:"This introduces the Trading Hours sub-menu, within the Stocks menu of the OpenBB Terminal.  Use these commands to check the operating status of markets globally.",keywords:["trading hours","trading","market hours","open","close","bursa","pandasmarketcalendars","status","holidays"]},sidebar:"tutorialSidebar",previous:{title:"Stock Screener",permalink:"/terminal/menus/stocks/screener"},next:{title:"Introduction",permalink:"/terminal/menus/crypto/"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Exchange",id:"exchange",level:3}],p={toc:c},u="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"Trading Hours - Stocks - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This set of features is for checking the operating status of markets globally."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Enter, ",(0,n.kt)("inlineCode",{parentName:"p"},"th"),", from the ",(0,n.kt)("a",{parentName:"p",href:"/terminal/menus/stocks"},(0,n.kt)("inlineCode",{parentName:"a"},"/stocks/"))," menu. Or, with the absolute path:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/th\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/66fe02c2-22d1-4ce3-a410-7df6f7f4defa",alt:"Screenshot 2023-11-01 at 2 21 56\u202fPM"})),(0,n.kt)("h3",{id:"exchange"},"Exchange"),(0,n.kt)("p",null,"Get the regular market hours and status of a particular exchange."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/th/exchange -n ASX\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"ASX"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Australian Securities Exchange")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"short_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"website"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www2.asx.com.au/markets/market-resources/trading-hours-calendar/cash-market-trading-hours"},"https://www2.asx.com.au/markets/market-resources/trading-hours-calendar/cash-market-trading-hours"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"market_open"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"market_close"),(0,n.kt)("td",{parentName:"tr",align:"left"},"16:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lunchbreak_start"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lunchbreak_end"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"opening_auction_start"),(0,n.kt)("td",{parentName:"tr",align:"left"},"07:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"opening_auction_end"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"closing_auction_start"),(0,n.kt)("td",{parentName:"tr",align:"left"},"16:10:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"closing_auction_end"),(0,n.kt)("td",{parentName:"tr",align:"left"},"16:12:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"timezone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Australia/Sydney")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"flag"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udde6\ud83c\uddfa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"open"),(0,n.kt)("td",{parentName:"tr",align:"left"},"False")))))}d.isMDXComponent=!0}}]);