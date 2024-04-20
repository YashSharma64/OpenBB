"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},15157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const i={title:"Native integrations",sidebar_position:3,description:"Get in-depth documentation on Native Integrations provided by OpenBB Terminal Pro including API key connections to data providers and database/warehouse connections for an enhanced data analysis experience.",keywords:["Native Integrations","API key","Data Providers","Data Warehouse","Database Connections","SQL queries","Snowflake queries","Data Analysis"]},s=void 0,c={unversionedId:"pro/data-connectors/native-integrations",id:"pro/data-connectors/native-integrations",title:"Native integrations",description:"Get in-depth documentation on Native Integrations provided by OpenBB Terminal Pro including API key connections to data providers and database/warehouse connections for an enhanced data analysis experience.",source:"@site/content/pro/data-connectors/native-integrations.md",sourceDirName:"pro/data-connectors",slug:"/pro/data-connectors/native-integrations",permalink:"/pro/data-connectors/native-integrations",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/data-connectors/native-integrations.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1713620851,formattedLastUpdatedAt:"Apr 20, 2024",sidebarPosition:3,frontMatter:{title:"Native integrations",sidebar_position:3,description:"Get in-depth documentation on Native Integrations provided by OpenBB Terminal Pro including API key connections to data providers and database/warehouse connections for an enhanced data analysis experience.",keywords:["Native Integrations","API key","Data Providers","Data Warehouse","Database Connections","SQL queries","Snowflake queries","Data Analysis"]},sidebar:"tutorialSidebar",previous:{title:"Integrate your own backend",permalink:"/pro/data-connectors/integrate-your-own-backend"},next:{title:"Widgets",permalink:"/pro/widgets/"}},p={},l=[{value:"Using OpenBB Native Integrations",id:"using-openbb-native-integrations",level:2}],d={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Native Integrations | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,r.kt)("h2",{id:"using-openbb-native-integrations"},"Using OpenBB Native Integrations"),(0,r.kt)("p",null,"The OpenBB native integrations allows you to connect to Snowflake, MySQL, or SQLite databases directly. You can run any query against your database directly from our Pro Terminal."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install our Client"),": Download our free client for ",(0,r.kt)("a",{parentName:"p",href:"https://openbb-installers.s3.amazonaws.com/data_connector_0.0.2.dmg"},"Mac")," or ",(0,r.kt)("a",{parentName:"p",href:"https://openbb-installers.s3.amazonaws.com/OpenBB+Data+Connector_0.0.2_x64_en-US.msi"},"Windows")," to get started.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Run the Client"),": Once installed, Simply open our app and type in the port you would like to use. If you are unsure of a good port, feel free to select ",(0,r.kt)("inlineCode",{parentName:"p"},"Recommend Port"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Connect inside the Terminal Pro"),": Once your client is up and running, click ",(0,r.kt)("a",{parentName:"p",href:"https://pro.openbb.co/app/data-connectors"},"here")," to enable the connectors - it will ask you for the URL the port is running on - you can find that on the Data Connector Application at the top. Now feel free to enter login credentials for any Snowflake, MySQL, or SQLite database and begin to analyze your data inside of our terminal."))))}m.isMDXComponent=!0}}]);