"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(15569);function o(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[o,i]=(0,a.useState)(!0);return a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},a.createElement("p",null,n),a.createElement("div",{style:{transform:"scale(0.7)"}},a.createElement(r.Toggle,{isOn:o,handleChange:()=>i(!o)}))),o&&a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},a.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},34909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(88828),i=n(20630);const s={title:"Introduction",sidebar_position:0,description:"Learn about the Data Connectors feature of OpenBB Terminal Pro which allows integration of private datasets via different methods such as No code, Advanced and Third-party. For any further assistance, contact us at support@openbb.finance.",keywords:["Data Connectors","private datasets","no code","advanced","third-party","integrate","API","data warehouse","database","support"]},c=void 0,d={unversionedId:"pro/main-menu/data-connectors/index",id:"pro/main-menu/data-connectors/index",title:"Introduction",description:"Learn about the Data Connectors feature of OpenBB Terminal Pro which allows integration of private datasets via different methods such as No code, Advanced and Third-party. For any further assistance, contact us at support@openbb.finance.",source:"@site/content/pro/main-menu/data-connectors/index.md",sourceDirName:"pro/main-menu/data-connectors",slug:"/pro/main-menu/data-connectors/",permalink:"/pro/main-menu/data-connectors/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/main-menu/data-connectors/index.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709158151,formattedLastUpdatedAt:"Feb 28, 2024",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0,description:"Learn about the Data Connectors feature of OpenBB Terminal Pro which allows integration of private datasets via different methods such as No code, Advanced and Third-party. For any further assistance, contact us at support@openbb.finance.",keywords:["Data Connectors","private datasets","no code","advanced","third-party","integrate","API","data warehouse","database","support"]},sidebar:"tutorialSidebar",previous:{title:"Charting",permalink:"/pro/main-menu/charting"},next:{title:"Single widget",permalink:"/pro/main-menu/data-connectors/single-widget"}},l={},p=[{value:"Single Widget",id:"single-widget",level:2},{value:"Integrate your own backend",id:"integrate-your-own-backend",level:2},{value:"Native Integrations",id:"native-integrations",level:2}],u={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Data Connectors | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,r.kt)(i.Z,{youtubeLink:"https://www.youtube.com/embed/os5U2elFj10?si=tp4E_jyD13FTDN3B",videoLegend:"Short introduction to Data Connectors",mdxType:"TutorialVideo"}),(0,r.kt)("p",null,"OpenBB Terminal Pro's Data Connectors are designed to empower teams by allowing them to integrate their own private datasets. This feature enhances the platform's capabilities by providing a seamless experience alongside the data that matters most to you."),(0,r.kt)("img",{className:"pro-border-gradient",width:"800",alt:"data connectors",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/5df818ce-e4a1-4241-b8d5-be60ec25c7d4"}),(0,r.kt)("img",{className:"pro-border-gradient",width:"800",alt:"data connectors - my widgets",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/e3d74bb6-ce1e-4cdf-8f5e-d9053403ce9a"}),(0,r.kt)("p",null,"We offer three distinct methods for importing your data into the platform."),(0,r.kt)("h2",{id:"single-widget"},"Single Widget"),(0,r.kt)("p",null,"This method allows users to import an API endpoint that is directly rendered into a table format. While customization is limited, it provides a quick and easy way to visualize your data. More information can be found ",(0,r.kt)("a",{parentName:"p",href:"/pro/main-menu/data-connectors/single-widget"},"here"),"."),(0,r.kt)("h2",{id:"integrate-your-own-backend"},"Integrate your own backend"),(0,r.kt)("p",null,"For those who prefer a more hands-on approach, you can create your own backend. You can either leverage OpenBB's cookie-cutter or build a language-agnostic API. More information can be found ",(0,r.kt)("a",{parentName:"p",href:"/pro/main-menu/data-connectors/integrate-your-own-backend"},"here"),"."),(0,r.kt)("h2",{id:"native-integrations"},"Native Integrations"),(0,r.kt)("p",null,"OpenBB has established partnerships with several companies to streamline the process of importing external data. This includes data providers that require an API key, or integration with a data warehouse or database. This is work in progress."),(0,r.kt)("p",null,"For further assistance in creating your Backend API or adding a single widget endpoint, please contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@openbb.finance"},"support@openbb.finance")))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var a,r=(a=n(67294))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return r.createElement("label",{"data-testid":"Toggle-label",className:"switch"},r.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),r.createElement("span",{className:"slider round"}))}}}]);