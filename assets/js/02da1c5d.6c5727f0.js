"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>_});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,_=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return a?r.createElement(_,s(s({ref:t},l),{},{components:a})):r.createElement(_,s({ref:t},l))}));function _(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[d]="string"==typeof e?e:n,s[1]=m;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(35742);function i(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},61853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const s={title:"search",description:"The 'search' documentation provides a detailed guide to using various search commands on our platform. This includes usage, parameters, and term definitions for finding company tickers, filtering stocks based on country, sector, industry or specific exchange country.",keywords:["Search Documentation","Company Tickers","Stock Market Search","Search By Country","Search By Sector","Search By Industry","Search By Exchange Country"]},m=void 0,o={unversionedId:"terminal/reference/stocks/search",id:"terminal/reference/stocks/search",title:"search",description:"The 'search' documentation provides a detailed guide to using various search commands on our platform. This includes usage, parameters, and term definitions for finding company tickers, filtering stocks based on country, sector, industry or specific exchange country.",source:"@site/content/terminal/reference/stocks/search.md",sourceDirName:"terminal/reference/stocks",slug:"/terminal/reference/stocks/search",permalink:"/terminal/reference/stocks/search",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/search.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1713620851,formattedLastUpdatedAt:"Apr 20, 2024",frontMatter:{title:"search",description:"The 'search' documentation provides a detailed guide to using various search commands on our platform. This includes usage, parameters, and term definitions for finding company tickers, filtering stocks based on country, sector, industry or specific exchange country.",keywords:["Search Documentation","Company Tickers","Stock Market Search","Search By Country","Search By Sector","Search By Industry","Search By Exchange Country"]},sidebar:"tutorialSidebar",previous:{title:"view",permalink:"/terminal/reference/stocks/screener/view"},next:{title:"country",permalink:"/terminal/reference/stocks/sia/country"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"stocks /search - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Show companies matching the search query"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"search [-q QUERY [QUERY ...]] [-c country] [-s sector] [-i industry] [-e exchange]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"The search term used to find company tickers"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"country"),(0,n.kt)("td",{parentName:"tr",align:null},"Search by country to find stocks matching the criteria"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"afghanistan, anguilla, argentina, australia, austria, azerbaijan, bahamas, bangladesh, barbados, belgium, belize, bermuda, botswana, brazil, british_virgin_islands, cambodia, canada, cayman_islands, chile, china, colombia, costa_rica, cyprus, czech_republic, denmark, dominican_republic, egypt, estonia, falkland_islands, finland, france, french_guiana, gabon, georgia, germany, ghana, gibraltar, greece, greenland, guernsey, hong_kong, hungary, iceland, india, indonesia, ireland, isle_of_man, israel, italy, ivory_coast, japan, jersey, jordan, kazakhstan, kyrgyzstan, latvia, liechtenstein, lithuania, luxembourg, macau, macedonia, malaysia, malta, mauritius, mexico, monaco, mongolia, montenegro, morocco, mozambique, myanmar, namibia, netherlands, netherlands_antilles, new_zealand, nigeria, norway, panama, papua_new_guinea, peru, philippines, poland, portugal, qatar, reunion, romania, russia, saudi_arabia, senegal, singapore, slovakia, slovenia, south_africa, south_korea, spain, suriname, sweden, switzerland, taiwan, tanzania, thailand, turkey, ukraine, united_arab_emirates, united_kingdom, united_states, uruguay, vietnam, zambia")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sector"),(0,n.kt)("td",{parentName:"tr",align:null},"Search by sector to find stocks matching the criteria"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},", basic_materials, communication_services, conglomerates, consumer_cyclical, consumer_defensive, consumer_goods, energy, financial, financial_services, healthcare, industrial_goods, industrials, real_estate, services, technology, utilities")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"industry"),(0,n.kt)("td",{parentName:"tr",align:null},"Search by industry to find stocks matching the criteria"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},", advertising",(0,n.kt)("em",{parentName:"td"},"agencies, aerospace"),"&",(0,n.kt)("em",{parentName:"td"},"defense, aerospace_defense"),"-",(0,n.kt)("em",{parentName:"td"},"major_diversified, aerospace_defense_products"),"&",(0,n.kt)("em",{parentName:"td"},"services, agricultural_chemicals, agricultural_inputs, air_delivery"),"&",(0,n.kt)("em",{parentName:"td"},"freight_services, airlines, airports"),"&",(0,n.kt)("em",{parentName:"td"},"air_services, aluminum, apparel_manufacturing, apparel_retail, apparel_stores, asset_management, auto"),"&",(0,n.kt)("em",{parentName:"td"},"truck_dealerships, auto_dealerships, auto_manufacturers, auto_manufacturers"),"-",(0,n.kt)("em",{parentName:"td"},"major, auto_parts, banks"),"-",(0,n.kt)("em",{parentName:"td"},"diversified, banks"),"-",(0,n.kt)("em",{parentName:"td"},"regional, beverages"),"-",(0,n.kt)("em",{parentName:"td"},"brewers, beverages"),"-",(0,n.kt)("em",{parentName:"td"},"non-alcoholic, beverages"),"-",(0,n.kt)("em",{parentName:"td"},"soft_drinks, beverages"),"-",(0,n.kt)("em",{parentName:"td"},"wineries"),"&",(0,n.kt)("em",{parentName:"td"},"distilleries, beverages"),"-",(0,n.kt)("em",{parentName:"td"},"wineries"),"&",(0,n.kt)("em",{parentName:"td"},"distillers, biotechnology, broadcasting, broadcasting"),"-",(0,n.kt)("em",{parentName:"td"},"tv, building_materials, building_products"),"&",(0,n.kt)("em",{parentName:"td"},"equipment, business_equipment, business_equipment"),"&",(0,n.kt)("em",{parentName:"td"},"supplies, business_services, business_software"),"&",(0,n.kt)("em",{parentName:"td"},"services, capital_markets, chemicals, chemicals"),"-",(0,n.kt)("em",{parentName:"td"},"major_diversified, cigarettes, closed-end_fund"),"-",(0,n.kt)("em",{parentName:"td"},"equity, coking_coal, communication_equipment, computer_based_systems, computer_hardware, confectioners, conglomerates, consulting_services, consumer_electronics, copper, credit_services, department_stores, diagnostics"),"&",(0,n.kt)("em",{parentName:"td"},"research, discount_stores, discount,_variety_stores, diversified_computer_systems, diversified_electronics, diversified_investments, diversified_machinery, diversified_utilities, drug_manufacturers"),"-",(0,n.kt)("em",{parentName:"td"},"general, drug_manufacturers"),"-",(0,n.kt)("em",{parentName:"td"},"major, drug_manufacturers"),"-",(0,n.kt)("em",{parentName:"td"},"other, drug_manufacturers"),"-",(0,n.kt)("em",{parentName:"td"},"specialty"),"&",(0,n.kt)("em",{parentName:"td"},"generic, drugs"),"-",(0,n.kt)("em",{parentName:"td"},"generic, education"),"&",(0,n.kt)("em",{parentName:"td"},"training_services, electric_utilities, electrical_equipment"),"&",(0,n.kt)("em",{parentName:"td"},"parts, electronic_components, electronic_equipment, electronic_gaming"),"&",(0,n.kt)("em",{parentName:"td"},"multimedia, electronics"),"&",(0,n.kt)("em",{parentName:"td"},"computer_distribution, electronics_wholesale, engineering"),"&",(0,n.kt)("em",{parentName:"td"},"construction, entertainment, entertainment"),"-",(0,n.kt)("em",{parentName:"td"},"diversified, farm"),"&",(0,n.kt)("em",{parentName:"td"},"construction_machinery, farm"),"&",(0,n.kt)("em",{parentName:"td"},"heavy_construction_machinery, farm_products, financial_conglomerates, financial_data"),"&",(0,n.kt)("em",{parentName:"td"},"stock_exchanges, food"),"-",(0,n.kt)("em",{parentName:"td"},"major_diversified, food_distribution, food_wholesale, footwear"),"&",(0,n.kt)("em",{parentName:"td"},"accessories, furnishings,_fixtures"),"&",(0,n.kt)("em",{parentName:"td"},"appliances, gambling, gaming_activities, general_building_materials, general_contractors, gold, grocery_stores, health_care_plans, health_information_services, healthcare_information_services, healthcare_plans, heavy_construction, home_furnishings"),"&",(0,n.kt)("em",{parentName:"td"},"fixtures, home_improvement_retail, hospitals, household"),"&",(0,n.kt)("em",{parentName:"td"},"personal_products, independent_oil"),"&",(0,n.kt)("em",{parentName:"td"},"gas, industrial_distribution, industrial_equipment_wholesale, industrial_metals"),"&",(0,n.kt)("em",{parentName:"td"},"minerals, information_technology_services, infrastructure_operations, insurance"),"-",(0,n.kt)("em",{parentName:"td"},"diversified, insurance"),"-",(0,n.kt)("em",{parentName:"td"},"life, insurance"),"-",(0,n.kt)("em",{parentName:"td"},"property"),"&",(0,n.kt)("em",{parentName:"td"},"casualty, insurance"),"-",(0,n.kt)("em",{parentName:"td"},"reinsurance, insurance"),"-",(0,n.kt)("em",{parentName:"td"},"specialty, insurance_brokers, integrated_freight"),"&",(0,n.kt)("em",{parentName:"td"},"logistics, internet_content"),"&",(0,n.kt)("em",{parentName:"td"},"information, internet_information_providers, internet_retail, internet_service_providers, internet_software"),"&",(0,n.kt)("em",{parentName:"td"},"services, investment_brokerage"),"-",(0,n.kt)("em",{parentName:"td"},"national, jewelry_stores, leisure, life_insurance, lodging, long_distance_carriers, lumber"),"&",(0,n.kt)("em",{parentName:"td"},"wood_production, lumber,_wood_production, luxury_goods, machine_tools"),"&",(0,n.kt)("em",{parentName:"td"},"accessories, major_airlines, major_integrated_oil"),"&",(0,n.kt)("em",{parentName:"td"},"gas, marine_shipping, marketing_services, medical_appliances"),"&",(0,n.kt)("em",{parentName:"td"},"equipment, medical_care_facilities, medical_devices, medical_distribution, medical_instruments"),"&",(0,n.kt)("em",{parentName:"td"},"supplies, medical_laboratories"),"&",(0,n.kt)("em",{parentName:"td"},"research, metal_fabrication, money_center_banks, mortgage_finance, mortgage_investment, multimedia"),"&",(0,n.kt)("em",{parentName:"td"},"graphics_software, networking"),"&",(0,n.kt)("em",{parentName:"td"},"communication_devices, nonmetallic_mineral_mining, oil"),"&",(0,n.kt)("em",{parentName:"td"},"gas_drilling, oil"),"&",(0,n.kt)("em",{parentName:"td"},"gas_drilling"),"&",(0,n.kt)("em",{parentName:"td"},"exploration, oil"),"&",(0,n.kt)("em",{parentName:"td"},"gas_e&p, oil"),"&",(0,n.kt)("em",{parentName:"td"},"gas_equipment"),"&",(0,n.kt)("em",{parentName:"td"},"services, oil"),"&",(0,n.kt)("em",{parentName:"td"},"gas_integrated, oil"),"&",(0,n.kt)("em",{parentName:"td"},"gas_midstream, oil"),"&",(0,n.kt)("em",{parentName:"td"},"gas_pipelines, oil"),"&",(0,n.kt)("em",{parentName:"td"},"gas_refining"),"&",(0,n.kt)("em",{parentName:"td"},"marketing, other_industrial_metals"),"&",(0,n.kt)("em",{parentName:"td"},"mining, other_precious_metals"),"&",(0,n.kt)("em",{parentName:"td"},"mining, packaged_foods, packaging"),"&",(0,n.kt)("em",{parentName:"td"},"containers, paper"),"&",(0,n.kt)("em",{parentName:"td"},"paper_products, personal_products, personal_services, pharmaceutical_retailers, pollution"),"&",(0,n.kt)("em",{parentName:"td"},"treatment_controls, printed_circuit_boards, processed"),"&",(0,n.kt)("em",{parentName:"td"},"packaged_goods, property"),"&",(0,n.kt)("em",{parentName:"td"},"casualty_insurance, property_management, publishing, publishing"),"-",(0,n.kt)("em",{parentName:"td"},"newspapers, reit"),"-",(0,n.kt)("em",{parentName:"td"},"diversified, reit"),"-",(0,n.kt)("em",{parentName:"td"},"healthcare_facilities, reit"),"-",(0,n.kt)("em",{parentName:"td"},"hotel"),"&",(0,n.kt)("em",{parentName:"td"},"motel, reit"),"-",(0,n.kt)("em",{parentName:"td"},"industrial, reit"),"-",(0,n.kt)("em",{parentName:"td"},"mortgage, reit"),"-",(0,n.kt)("em",{parentName:"td"},"office, reit"),"-",(0,n.kt)("em",{parentName:"td"},"residential, reit"),"-",(0,n.kt)("em",{parentName:"td"},"retail, reit"),"-",(0,n.kt)("em",{parentName:"td"},"specialty, railroads, real_estate"),"-",(0,n.kt)("em",{parentName:"td"},"development, real_estate"),"-",(0,n.kt)("em",{parentName:"td"},"diversified, real_estate_development, real_estate_services, recreational_goods,_other, recreational_vehicles, regional"),"-",(0,n.kt)("em",{parentName:"td"},"mid-atlantic_banks, rental"),"&",(0,n.kt)("em",{parentName:"td"},"leasing_services, research_services, residential_construction, resorts"),"&",(0,n.kt)("em",{parentName:"td"},"casinos, restaurants, rubber"),"&",(0,n.kt)("em",{parentName:"td"},"plastics, scientific"),"&",(0,n.kt)("em",{parentName:"td"},"technical_instruments, security"),"&",(0,n.kt)("em",{parentName:"td"},"protection_services, security_software"),"&",(0,n.kt)("em",{parentName:"td"},"services, semiconductor"),"-",(0,n.kt)("em",{parentName:"td"},"broad_line, semiconductor_equipment"),"&",(0,n.kt)("em",{parentName:"td"},"materials, semiconductor-_memory_chips, semiconductors, shell_companies, shipping, silver, software"),"-",(0,n.kt)("em",{parentName:"td"},"application, software"),"-",(0,n.kt)("em",{parentName:"td"},"infrastructure, solar, specialized_health_services, specialty_business_services, specialty_chemicals, specialty_industrial_machinery, specialty_retail, specialty_retail,_other, staffing"),"&",(0,n.kt)("em",{parentName:"td"},"employment_services, staffing"),"&",(0,n.kt)("em",{parentName:"td"},"outsourcing_services, steel, steel"),"&",(0,n.kt)("em",{parentName:"td"},"iron, technical"),"&",(0,n.kt)("em",{parentName:"td"},"system_software, telecom_services, textile"),"-",(0,n.kt)("em",{parentName:"td"},"apparel_clothing, textile"),"-",(0,n.kt)("em",{parentName:"td"},"apparel_footwear"),"&",(0,n.kt)("em",{parentName:"td"},"accessories, textile_industrial, textile_manufacturing, thermal_coal, tobacco, tobacco_products,_other, tools"),"&",(0,n.kt)("em",{parentName:"td"},"accessories, travel_services, trucking, trucks"),"&",(0,n.kt)("em",{parentName:"td"},"other_vehicles, uranium, utilities"),"-",(0,n.kt)("em",{parentName:"td"},"diversified, utilities"),"-",(0,n.kt)("em",{parentName:"td"},"independent_power_producers, utilities"),"-",(0,n.kt)("em",{parentName:"td"},"regulated_electric, utilities"),"-",(0,n.kt)("em",{parentName:"td"},"regulated_gas, utilities"),"-",(0,n.kt)("em",{parentName:"td"},"regulated_water, utilities"),"-_renewable, waste_management, water_utilities, wireless_communications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange_country"),(0,n.kt)("td",{parentName:"tr",align:null},"Search by a specific exchange country to find stocks matching the criteria"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"united_states, argentina, austria, australia, belgium, brazil, canada, chile, china, czech_republic, denmark, egypt, estonia, europe, finland, france, germany, greece, hong_kong, hungary, iceland, india, indonesia, ireland, israel, italy, japan, latvia, lithuania, malaysia, mexico, netherlands, new_zealand, norway, portugal, qatar, russia, singapore, south_africa, south_korea, spain, saudi_arabia, sweden, switzerland, taiwan, thailand, turkey, united_kingdom, venezuela")))),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);