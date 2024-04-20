"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61260],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},g="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),g=d(a),k=r,c=g["".concat(o,".").concat(k)]||g[k]||s[k]||i;return a?n.createElement(c,l(l({ref:e},m),{},{components:a})):n.createElement(c,l({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[g]="string"==typeof t?t:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(35742);function i(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},50771:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),i=a(88828);const l={title:"Technical Analysis",description:"This documentation page provides a comprehensive guide on using the Technical Analysis Module in Openbb, which is used for analyzing time-series data. It provides detailed usage of functions within the ta module, demonstrating features such as Momentum, Overlap, Trend, Volatility and Volume analysis plus many more techniques. It also showcases how to display the chart, instead of raw data, and best practices on using the module.",keywords:["Technical Analysis","time-series data","pandas_ta library","datascience","Momentum","Overlap","Trend","Volatility","Volume","Fibonacci","charting","ta module","SMA","EMA","HMA","WMA","ZLMA","Moving Average","ATR","Donchian"]},p=void 0,o={unversionedId:"sdk/data-available/ta",id:"sdk/data-available/ta",title:"Technical Analysis",description:"This documentation page provides a comprehensive guide on using the Technical Analysis Module in Openbb, which is used for analyzing time-series data. It provides detailed usage of functions within the ta module, demonstrating features such as Momentum, Overlap, Trend, Volatility and Volume analysis plus many more techniques. It also showcases how to display the chart, instead of raw data, and best practices on using the module.",source:"@site/content/sdk/data-available/ta.md",sourceDirName:"sdk/data-available",slug:"/sdk/data-available/ta",permalink:"/sdk/data-available/ta",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/ta.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1713620851,formattedLastUpdatedAt:"Apr 20, 2024",frontMatter:{title:"Technical Analysis",description:"This documentation page provides a comprehensive guide on using the Technical Analysis Module in Openbb, which is used for analyzing time-series data. It provides detailed usage of functions within the ta module, demonstrating features such as Momentum, Overlap, Trend, Volatility and Volume analysis plus many more techniques. It also showcases how to display the chart, instead of raw data, and best practices on using the module.",keywords:["Technical Analysis","time-series data","pandas_ta library","datascience","Momentum","Overlap","Trend","Volatility","Volume","Fibonacci","charting","ta module","SMA","EMA","HMA","WMA","ZLMA","Moving Average","ATR","Donchian"]},sidebar:"tutorialSidebar",previous:{title:"Quantitative Analysis",permalink:"/sdk/data-available/quantitative-analysis"},next:{title:"reference",permalink:"/sdk/reference/"}},d={},m=[{value:"How to Use",id:"how-to-use",level:2},{value:"_chart",id:"_chart",level:3},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"MA (Moving Averages)",id:"ma-moving-averages",level:3},{value:"ATR (Average True Range)",id:"atr-average-true-range",level:3},{value:"Donchian",id:"donchian",level:3}],g={toc:m},s="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Technical Analysis - Intros - Usage | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The Technical Analysis module is a toolkit for analyzing time-series data, at any resolution. The functions are a collection of formulas that fit into broad categories, and they are mostly derived from the pandas_ta library:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Momentum"),(0,r.kt)("li",{parentName:"ul"},"Overlap (Moving Averages)"),(0,r.kt)("li",{parentName:"ul"},"Trend"),(0,r.kt)("li",{parentName:"ul"},"Volatility"),(0,r.kt)("li",{parentName:"ul"},"Volume"),(0,r.kt)("li",{parentName:"ul"},"Other (Fibonacci)")),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("p",null,"Every SDK function also has a secondary ",(0,r.kt)("inlineCode",{parentName:"p"},"_chart")," command. The table below is a brief description of each SDK function within the ",(0,r.kt)("inlineCode",{parentName:"p"},"ta")," module; for simplicity, ",(0,r.kt)("inlineCode",{parentName:"p"},"_chart")," has been omitted. Technical Analysis functions specific to stocks are included as a sub-module, ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb.stocks.ta"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Category"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.ad"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Volume"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Accumulation/Distribution Line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.adosc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Volume"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Chaikin Oscillator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.adx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Trend"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Average Directional Movement Index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.aroon"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Trend"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Aroon Indicator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.atr"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Volatility"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Average True Range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.bbands"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Voaltility"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Bollinger Bands")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.cci"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Momentum"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Commodity Channel Index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.cg"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Momentum"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Center of Gravity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.clenow"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Momentum"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Clenow Volatility Adjusted Momentum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.demark"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Momentum"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Tom Demark's Sequential Indicator (Unofficial)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.donchian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Volatility"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Donchian Channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.ema"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Overlap"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Exponential Moving Average")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.fib"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Other"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Fibonacci Retracement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.fisher"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Momentum"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Fisher Transform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.hma"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Overlap"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Hull Moving Average")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.kc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Volatility"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Keltner Channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.ma"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Overlap"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Moving Averages (For Charting)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.macd"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Momentum"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Moving Average Convergence/Divergence")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.obv"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Volume"),(0,r.kt)("td",{parentName:"tr",align:"right"},"On-Balance Volume")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.rsi"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Momentum"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Relative Strength Index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.sma"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Overlap"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Simple Moving Average")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.stoch"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Momentum"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Stochastic Oscillator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.vwap"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Overlap"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Volume-Weighted Average Price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.wma"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Overlap"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Weighted Moving Average")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.ta.zlma"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Overlap"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Zero-Lag Moving Average")))),(0,r.kt)("p",null,"The syntax for the data argument can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data = ohlcv_df")),(0,r.kt)("p",{parentName:"li"},"Where functions only require a single column, ",(0,r.kt)("inlineCode",{parentName:"p"},"data = ohlcv_df['Adj Close']"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'data = openbb.stocks.load("ticker")')),(0,r.kt)("p",{parentName:"li"},"Target intraday by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"interval")," argument to the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," syntax."))),(0,r.kt)("p",null,"Best practice is to deploy the first method because the latter will work only with the commands requiring OHLC+V data as inputs. An error message will be returned if this is the case."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.ta.obv(data = openbb.stocks.load('QQQ'))\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"date"),(0,r.kt)("th",{parentName:"tr",align:"right"},"OBV"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2019-11-15 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.84279e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2019-11-18 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.67938e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2019-11-19 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5.37171e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2019-11-20 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.70881e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-11-15 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.09017e+08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-11-16 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.57876e+08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-11-17 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-2.13339e+08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-11-18 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.59987e+08")))),(0,r.kt)("p",null,"The error message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.ta.rsi(data = openbb.stocks.load('QQQ'))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Please send a series and not a DataFrame.\n")),(0,r.kt)("h3",{id:"_chart"},"_chart"),(0,r.kt)("p",null,"To display the chart, instead of raw data, add ",(0,r.kt)("inlineCode",{parentName:"p"},"_chart")," to the syntax before the (",(0,r.kt)("inlineCode",{parentName:"p"},"arguments"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.ta.obv_chart(data= openbb.stocks.load('QQQ', start_date = '2022-11-18', interval = 5, prepost = True))\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/202889106-4caa882b-5e29-41a8-8cd2-b2a2a01d1fca.png",alt:"openbb.ta.obv_chart",title:"openbb.ta.obv_chart"})),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"import-statements"},"Import Statements"),(0,r.kt)("p",null,"The examples here assume that this code block is at the top of the Python script of Notebook file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nfrom openbb_terminal.sdk import openbb\n# %matplotlib inline (uncomment for Jupyter environments)\n")),(0,r.kt)("h3",{id:"ma-moving-averages"},"MA (Moving Averages)"),(0,r.kt)("p",null,"The different types of moving averages, which also are individual functions (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb.ta.ema"),"), are available as an argument (",(0,r.kt)("inlineCode",{parentName:"p"},"ma_type"),") to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ma")," command. There are five accepted arguments, they are listed below in brackets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Simple (SMA)"),(0,r.kt)("li",{parentName:"ul"},"Exponential (EMA)"),(0,r.kt)("li",{parentName:"ul"},"Hull (HMA)"),(0,r.kt)("li",{parentName:"ul"},"Weighted (WMA)"),(0,r.kt)("li",{parentName:"ul"},"Zero-Lag (ZLMA)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," argument anticipates a list of integers representing the interval (minutes, days, weeks, months, etc.) to measure against the timestamp of the DataFrame's index. The example below is a daily timeseries of S&P E-Mini Futures:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"es = openbb.stocks.load(\"ES=F\")\n\nopenbb.ta.ma_chart(\n    data = es['Adj Close'],\n    symbol = 'E-Mini S&P Futures',\n    ma_type = 'SMA',\n    window = [21, 150])\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/202889200-c6a3e895-f49d-4348-8635-68dd1456340d.png",alt:"openbb.ta.ma_chart",title:"openbb.ta.ma_chart"})),(0,r.kt)("p",null,"Changing, ",(0,r.kt)("inlineCode",{parentName:"p"},"ma_type"),", to, ",(0,r.kt)("inlineCode",{parentName:"p"},"ZLMA"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/202889214-359d5d37-f8c0-49e0-9dd9-70afe970ae5f.png",alt:"openbb.ta.ma_chart",title:"openbb.ta.ma_chart"})),(0,r.kt)("h3",{id:"atr-average-true-range"},"ATR (Average True Range)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"atr")," command requires OHLC data, the data argument can be the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"ticker = 'ES=F'\nstart = '2000-01-01'\n\ndf_atr = openbb.ta.atr(data = openbb.stocks.load(f\"{ticker}\", start_date = f\"{start}\", monthly = True), window = 6)\n\ndf_atr.tail(5)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"date"),(0,r.kt)("th",{parentName:"tr",align:"right"},"ATRe_6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-01 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"454.457")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-08-01 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"431.612")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-01 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"469.08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-01 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"455.7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-11-01 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"424.5")))),(0,r.kt)("h3",{id:"donchian"},"Donchian"),(0,r.kt)("p",null,"To use the same data for multiple functions, it is more efficient to first load to a Pandas DataFrame:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"ticker = 'ES=F'\nstart = '2000-01-01'\ndata_df: pd.DataFrame = openbb.stocks.load(f\"{ticker}\", start_date = f\"{start}\", monthly = True)\n\nopenbb.ta.donchian_chart(data_df)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/202889227-a985d788-a320-4193-af96-0357afe9a11d.png",alt:"openbb.ta.donchian_chart",title:"openbb.ta.donchian_chart"})),(0,r.kt)("p",null,"The output from a function can be joined to the OHLC data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"ticker = 'ES=F'\nstart = '2000-01-01'\ndata_df: pd.DataFrame = openbb.stocks.load(f\"{ticker}\", start_date = f\"{start}\", monthly = True)\n\ndonchian = openbb.ta.donchian(data_df)\n\ndata_df = data_df.join(donchian)\n\ndata_df.tail(5)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"date"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Open"),(0,r.kt)("th",{parentName:"tr",align:"right"},"High"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Low"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Close"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Adj Close"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Volume"),(0,r.kt)("th",{parentName:"tr",align:"right"},"DCL_20_20"),(0,r.kt)("th",{parentName:"tr",align:"right"},"DCM_20_20"),(0,r.kt)("th",{parentName:"tr",align:"right"},"DCU_20_20"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-01 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3782"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4144"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3723.75"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4133.5"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4133.5"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.40941e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3198"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4003.12"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4808.25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-08-01 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4137.5"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4327.5"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3953"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3956.5"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3956.5"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.84732e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3225"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4016.62"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4808.25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-01 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3958"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4158"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3595.25"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3601.5"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3601.5"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.68698e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3595.25"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4201.75"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4808.25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-01 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3593.25"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3924.25"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3502"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3883"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3883"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.80686e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3502"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4155.12"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4808.25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-11-01 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3884"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4050.75"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3704.25"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3974"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3974"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2.65215e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3502"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4155.12"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4808.25")))))}k.isMDXComponent=!0}}]);