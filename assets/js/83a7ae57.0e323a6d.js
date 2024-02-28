"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=i,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(35742);function o(e){let{title:t}=e;return r.createElement(i.Z,null,r.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(15569);function o(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[o,a]=(0,r.useState)(!0);return r.createElement("div",{style:{textAlign:"center"}},r.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},r.createElement("p",null,n),r.createElement("div",{style:{transform:"scale(0.7)"}},r.createElement(i.Toggle,{isOn:o,handleChange:()=>a(!o)}))),o&&r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},r.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},51587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),o=n(88828),a=n(20630);const s={title:"Integrate your own backend",sidebar_position:2,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",keywords:["OpenBB cookie-cutter","widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},l=void 0,d={unversionedId:"pro/main-menu/data-connectors/integrate-your-own-backend",id:"pro/main-menu/data-connectors/integrate-your-own-backend",title:"Integrate your own backend",description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",source:"@site/content/pro/main-menu/data-connectors/integrate-your-own-backend.md",sourceDirName:"pro/main-menu/data-connectors",slug:"/pro/main-menu/data-connectors/integrate-your-own-backend",permalink:"/pro/main-menu/data-connectors/integrate-your-own-backend",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/main-menu/data-connectors/integrate-your-own-backend.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709158151,formattedLastUpdatedAt:"Feb 28, 2024",sidebarPosition:2,frontMatter:{title:"Integrate your own backend",sidebar_position:2,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",keywords:["OpenBB cookie-cutter","widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},sidebar:"tutorialSidebar",previous:{title:"Single widget",permalink:"/pro/main-menu/data-connectors/single-widget"},next:{title:"Widgets",permalink:"/pro/widgets/"}},c={},p=[{value:"Using OpenBB Cookie-Cutter",id:"using-openbb-cookie-cutter",level:2},{value:"Using Language-Agnostic API",id:"using-language-agnostic-api",level:2},{value:"Quick Start with Python and FastAPI",id:"quick-start-with-python-and-fastapi",level:3}],u={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{title:"Integrate your own backend | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,i.kt)(a.Z,{youtubeLink:"https://www.youtube.com/embed/bkhtgp48MZc?si=kvrq1HgtUIFmhgyX",videoLegend:"Short introduction to integrating your own backend",mdxType:"TutorialVideo"}),(0,i.kt)("h2",{id:"using-openbb-cookie-cutter"},"Using OpenBB Cookie-Cutter"),(0,i.kt)("p",null,"The OpenBB cookie-cutter approach provides a standardized way to host your data and integrate it into widgets. This method is versatile and can be used whether your data is hosted internally or externally. Here's how to get started:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Prepare the ",(0,i.kt)("inlineCode",{parentName:"strong"},"widgets.json")," file"),": This file defines widget properties such as name, description, category, type, endpoint, and more. Make sure it's well-structured. See an example below.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Set up the OpenBB API"),": Follow the OpenBB API documentation to set up your API. Implement the necessary endpoints that align with the widget definitions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"widgets.json")," file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Integrate endpoints"),": Define the appropriate endpoint for each custom widget in the ",(0,i.kt)("inlineCode",{parentName:"p"},"widgets.json")," file. This endpoint connects your API to the widget.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Configure widgets"),": Users can add the custom widgets using the Terminal Pro interface by providing the relevant endpoint details."))),(0,i.kt)("h2",{id:"using-language-agnostic-api"},"Using Language-Agnostic API"),(0,i.kt)("p",null,"The language-agnostic API approach offers flexibility by allowing you to use the programming language and tools that best suit your needs. You can host this API internally or externally, making it accessible to the Terminal Pro widgets. Here's how:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Design and implement your API"),": Choose your preferred programming language and framework. Ensure that the API can return data in JSON format, which is required for widget integration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create widget definitions"),": As with the OpenBB API approach, create corresponding definitions for your custom widgets in the ",(0,i.kt)("inlineCode",{parentName:"p"},"widgets.json")," file. Specify the API endpoint, name, description, category, type, etc.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Connect widgets to your API"),": Once your API is up and running, users can add the custom widgets using the Terminal Pro interface. They just need to input the endpoint details, and the widget will fetch and display the data from your API."))),(0,i.kt)("h3",{id:"quick-start-with-python-and-fastapi"},"Quick Start with Python and FastAPI"),(0,i.kt)("p",null,"Our team has created several examples that you can use to quickly get started with Python and FastAPI. For more information, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main"},"this open source repository")," for examples."))}m.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var r,i=(r=n(67294))&&"object"==typeof r&&"default"in r?r.default:r;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return i.createElement("label",{"data-testid":"Toggle-label",className:"switch"},i.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),i.createElement("span",{className:"slider round"}))}}}]);