"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55292],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(a),s=n,N=k["".concat(p,".").concat(s)]||k[s]||g[s]||i;return a?r.createElement(N,l(l({ref:e},m),{},{components:a})):r.createElement(N,l({ref:e},m))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(35742);function i(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},64871:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const l={title:"Behavioral Analysis",description:"This page provides insightful information on how to use the BA module within the OpenBB Terminal. It gives detailed examples of utilizing various functions in Python for stock sentiment analysis, region-based popularity, trending queries, and more.",keywords:["BA module","Stock sentiment analysis","Region-based popularity","Trending queries","Stocktwit's messages","stock due diligence","function and modules","stock market","sentiment prediction","programming","code completion"]},o=void 0,p={unversionedId:"sdk/data-available/stocks/behavioral-analysis",id:"sdk/data-available/stocks/behavioral-analysis",title:"Behavioral Analysis",description:"This page provides insightful information on how to use the BA module within the OpenBB Terminal. It gives detailed examples of utilizing various functions in Python for stock sentiment analysis, region-based popularity, trending queries, and more.",source:"@site/content/sdk/data-available/stocks/behavioral-analysis.md",sourceDirName:"sdk/data-available/stocks",slug:"/sdk/data-available/stocks/behavioral-analysis",permalink:"/sdk/data-available/stocks/behavioral-analysis",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/stocks/behavioral-analysis.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1713620851,formattedLastUpdatedAt:"Apr 20, 2024",frontMatter:{title:"Behavioral Analysis",description:"This page provides insightful information on how to use the BA module within the OpenBB Terminal. It gives detailed examples of utilizing various functions in Python for stock sentiment analysis, region-based popularity, trending queries, and more.",keywords:["BA module","Stock sentiment analysis","Region-based popularity","Trending queries","Stocktwit's messages","stock due diligence","function and modules","stock market","sentiment prediction","programming","code completion"]},sidebar:"tutorialSidebar",previous:{title:"Stocks",permalink:"/sdk/data-available/stocks/"},next:{title:"Comparison Analysis",permalink:"/sdk/data-available/stocks/comparison-analysis"}},d={},m=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"headlines",id:"headlines",level:3},{value:"regions",id:"regions",level:3},{value:"rise",id:"rise",level:3}],k={toc:m},g="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(g,(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"Behavioral Analysis - Stocks - Intros - Usage | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The BA module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ",(0,n.kt)("inlineCode",{parentName:"p"},"."),", after, ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb.ba"),"\n\u200b"),(0,n.kt)("h2",{id:"how-to-use"},"How to Use"),(0,n.kt)("p",null,"\u200b\nThe examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\n")),(0,n.kt)("p",null,"\u200b\nA brief description below highlights the main Functions and Modules available in the BA SDK"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.bullbear"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Estimate Quick Sentiment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.headlines"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Sentiment from 15+ News Headlines")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.spacc"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Shows SPAC announcements from SPAC subreddit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.watchlist"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Show Other User's Watchlists")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.messages"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Output last 30 messages on the board")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.mentions"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Interest Over Time Based on Mentions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.hist"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Plot Historical RHI and AHI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.snews"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Stock Price Plotted Over Sentiment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.redditsent"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Search for Tickers and Find Sentiment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.popular"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Show Popular Tickers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.spac"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Shows Other User's SPAC Announcements")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.getdd"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Get Due Diligence")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.regions"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Regions Showing the Highest Interest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.trending"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Trending Stocks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.wsb"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Highlights from WSB Subreddit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.queries"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Top Related Queries")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.sentiment"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Stock Sentiment Prediction from Last Tweets")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.infer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Stock Sentiment from Last Tweets")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.stalker"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Stocktwit's last messages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ba.rise"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Top Rising Related Queries")))),(0,n.kt)("p",null,"Alternatively you can print the contents of the BA SDK with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.stocks.ba)\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"headlines"},"headlines"),(0,n.kt)("p",null,"Sentiment from over 15 news headlines for each day. This data can be used for further analysis of the stock"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.ba.headlines("TSLA")\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Sentiment Analysis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-09 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.209")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-10 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.025")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-11 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.027")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-14 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.402")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.122")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-16 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.35")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-17 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.156")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-18 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.216")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-21 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.071")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-22 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.003")))),(0,n.kt)("h3",{id:"regions"},"regions"),(0,n.kt)("p",null,"See the top regions where a stock is searched"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.ba.regions("TSLA")\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"geoName"),(0,n.kt)("th",{parentName:"tr",align:"right"},"TSLA"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Canada"),(0,n.kt)("td",{parentName:"tr",align:"right"},"100")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"United States"),(0,n.kt)("td",{parentName:"tr",align:"right"},"95")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Singapore"),(0,n.kt)("td",{parentName:"tr",align:"right"},"94")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Estonia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Taiwan"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Slovenia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"40")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Switzerland"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Denmark"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"New Zealand"),(0,n.kt)("td",{parentName:"tr",align:"right"},"33")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sweden"),(0,n.kt)("td",{parentName:"tr",align:"right"},"31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Finland"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Australia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Belgium"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Czechia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Bulgaria"),(0,n.kt)("td",{parentName:"tr",align:"right"},"18")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"United Arab Emirates"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"United Kingdom"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Portugal"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Austria"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Romania"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"South Africa"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Saudi Arabia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Germany"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Argentina"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Spain"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"France"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Colombia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Philippines"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Brazil"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Thailand"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Poland"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Vietnam"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Russia"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Turkey"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Pakistan"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,n.kt)("h3",{id:"rise"},"rise"),(0,n.kt)("p",null,"See which search queries are popular right now"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.ba.rise("AAPL")\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"query"),(0,n.kt)("th",{parentName:"tr",align:"right"},"value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"nio"),(0,n.kt)("td",{parentName:"tr",align:"right"},"220300")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"nio stock"),(0,n.kt)("td",{parentName:"tr",align:"right"},"106650")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"pltr stock"),(0,n.kt)("td",{parentName:"tr",align:"right"},"64750")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"mrna stock"),(0,n.kt)("td",{parentName:"tr",align:"right"},"59750")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"nio stock price"),(0,n.kt)("td",{parentName:"tr",align:"right"},"53450")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"zm stock"),(0,n.kt)("td",{parentName:"tr",align:"right"},"49500")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bynd"),(0,n.kt)("td",{parentName:"tr",align:"right"},"44850")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"pltr"),(0,n.kt)("td",{parentName:"tr",align:"right"},"41000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"spce"),(0,n.kt)("td",{parentName:"tr",align:"right"},"37350")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"zm"),(0,n.kt)("td",{parentName:"tr",align:"right"},"31650")))))}s.isMDXComponent=!0}}]);