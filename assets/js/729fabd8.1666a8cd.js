"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),m=s(r),f=i,u=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?a.createElement(u,d(d({ref:t},c),{},{components:r})):a.createElement(u,d({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,d=new Array(o);d[0]=f;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[m]="string"==typeof e?e:i,d[1]=n;for(var s=2;s<o;s++)d[s]=r[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(39960),i=r(86010),o=r(67294),d=r(16550),n=r(48334);function l(e){let{title:t,url:r,description:l,command:s}=e;const{pathname:c}=(0,d.TH)(),m=c.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(a.Z,{className:(0,i.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&o.createElement(n.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},33260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var a=r(87462),i=(r(67294),r(3905)),o=r(26515);const d={},n="Data Models",l={unversionedId:"platform/data_models/index",id:"platform/data_models/index",title:"Data Models",description:"<ReferenceCard",source:"@site/content/platform/data_models/index.mdx",sourceDirName:"platform/data_models",slug:"/platform/data_models/",permalink:"/platform/data_models/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709158151,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lbma_fixing",permalink:"/platform/reference/commodity/lbma_fixing"},next:{title:"Ameribor",permalink:"/platform/data_models/AMERIBOR"}},s={},c=[],m={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-models"},"Data Models"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(o.Z,{title:"Ameribor",description:"Ameribor",url:"/platform/data_models/AMERIBOR",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Analyst Estimates",description:"Get historical analyst estimates for earnings and revenue",url:"/platform/data_models/AnalystEstimates",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Analyst Search",description:"Search for specific analysts and get their forecast track record",url:"/platform/data_models/AnalystSearch",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Available Indices",description:"All indices available from a given provider",url:"/platform/data_models/AvailableIndices",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Balance Of Payments",description:"Balance of Payments Reports",url:"/platform/data_models/BalanceOfPayments",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Balance Sheet Growth",description:"Get the growth of a company's balance sheet items over time",url:"/platform/data_models/BalanceSheetGrowth",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Balance Sheet",description:"Get the balance sheet for a given company",url:"/platform/data_models/BalanceSheet",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Bond Prices",description:"Corporate Bond Prices",url:"/platform/data_models/BondPrices",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"CLI",description:"The composite leading indicator (CLI) is designed to provide early signals of turning points\nin business cycles showing fluctuation of the economic activity around its long term potential level",url:"/platform/data_models/CLI",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"COT Search",description:"Curated Commitment of Traders Reports",url:"/platform/data_models/COTSearch",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"COT",description:"Commitment of Traders Reports",url:"/platform/data_models/COT",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Calendar Dividend",description:"Get historical and upcoming dividend payments",url:"/platform/data_models/CalendarDividend",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Calendar Earnings",description:"Get historical and upcoming company earnings releases",url:"/platform/data_models/CalendarEarnings",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Calendar Ipo",description:"Get historical and upcoming initial public offerings (IPOs)",url:"/platform/data_models/CalendarIpo",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Calendar Splits",description:"Get historical and upcoming stock split operations",url:"/platform/data_models/CalendarSplits",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Cash Flow Statement Growth",description:"Get the growth of a company's cash flow statement items over time",url:"/platform/data_models/CashFlowStatementGrowth",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Cash Flow Statement",description:"Get the cash flow statement for a given company",url:"/platform/data_models/CashFlowStatement",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Cik Map",description:"Map a ticker symbol to a CIK number",url:"/platform/data_models/CikMap",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Commercial Paper",description:"Commercial Paper",url:"/platform/data_models/CommercialPaper",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Company Filings",description:"Get the URLs to SEC filings reported to EDGAR database, such as 10-K, 10-Q, 8-K, and more",url:"/platform/data_models/CompanyFilings",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Company News",description:"Company News",url:"/platform/data_models/CompanyNews",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Company Overview",description:"Get company general business and stock data for a given company",url:"/platform/data_models/CompanyOverview",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Compare Groups",description:"Get company data grouped by sector, industry or country and display either performance or valuation metrics",url:"/platform/data_models/CompareGroups",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Consumer Price Index",description:"Consumer Price Index (CPI)",url:"/platform/data_models/ConsumerPriceIndex",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Crypto Historical",description:"Get historical price data for cryptocurrency pair(s) within a provider",url:"/platform/data_models/CryptoHistorical",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Crypto Search",description:"Search available cryptocurrency pairs within a provider",url:"/platform/data_models/CryptoSearch",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Currency Historical",description:"Currency Historical Price",url:"/platform/data_models/CurrencyHistorical",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Currency Pairs",description:"Currency Search",url:"/platform/data_models/CurrencyPairs",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Currency Reference Rates",description:"Current, official, currency reference rates",url:"/platform/data_models/CurrencyReferenceRates",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Discount Window Primary Credit Rate",description:"Discount Window Primary Credit Rate",url:"/platform/data_models/DiscountWindowPrimaryCreditRate",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Discovery Filings",description:"Get the URLs to SEC filings reported to EDGAR database, such as 10-K, 10-Q, 8-K, and more",url:"/platform/data_models/DiscoveryFilings",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"ESTR",description:"Euro Short-Term Rate",url:"/platform/data_models/ESTR",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"ETF Active",description:"Get the most active ETFs",url:"/platform/data_models/ETFActive",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"ETF Gainers",description:"Get the top ETF gainers",url:"/platform/data_models/ETFGainers",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"ETF Losers",description:"Get the top ETF losers",url:"/platform/data_models/ETFLosers",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"EU Yield Curve",description:"Euro Area Yield Curve",url:"/platform/data_models/EUYieldCurve",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Earnings Call Transcript",description:"Get earnings call transcripts for a given company",url:"/platform/data_models/EarningsCallTranscript",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Economic Calendar",description:"Get the upcoming, or historical, economic calendar of global events",url:"/platform/data_models/EconomicCalendar",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Active",description:"Get the most actively traded stocks based on volume",url:"/platform/data_models/EquityActive",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Aggressive Small Caps",description:"Get top small cap stocks based on earnings growth",url:"/platform/data_models/EquityAggressiveSmallCaps",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity FTD",description:"Get reported Fail-to-deliver (FTD) data",url:"/platform/data_models/EquityFTD",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Gainers",description:"Get the top price gainers in the stock market",url:"/platform/data_models/EquityGainers",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Historical",description:"Get historical price data for a given stock",url:"/platform/data_models/EquityHistorical",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Info",description:"Get general information about a company",url:"/platform/data_models/EquityInfo",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Losers",description:"Get the top price losers in the stock market",url:"/platform/data_models/EquityLosers",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity NBBO",description:"Get the National Best Bid and Offer for a given stock",url:"/platform/data_models/EquityNBBO",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Ownership",description:"Get data about major holders for a given company over time",url:"/platform/data_models/EquityOwnership",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Peers",description:"Get the closest peers for a given company",url:"/platform/data_models/EquityPeers",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Quote",description:"Get the latest quote for a given stock",url:"/platform/data_models/EquityQuote",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Screener",description:"Screen for companies meeting various criteria",url:"/platform/data_models/EquityScreener",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Search",description:"Search for stock symbol, CIK, LEI, or company name",url:"/platform/data_models/EquitySearch",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Short Interest",description:"Get reported short volume and days to cover data",url:"/platform/data_models/EquityShortInterest",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Undervalued Growth",description:"Get potentially undervalued growth stocks",url:"/platform/data_models/EquityUndervaluedGrowth",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Undervalued Large Caps",description:"Get potentially undervalued large cap stocks",url:"/platform/data_models/EquityUndervaluedLargeCaps",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Equity Valuation Multiples",description:"Get equity valuation multiples for a given company",url:"/platform/data_models/EquityValuationMultiples",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Etf Countries",description:"ETF Country weighting",url:"/platform/data_models/EtfCountries",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Etf Equity Exposure",description:"Get the exposure to ETFs for a specific stock",url:"/platform/data_models/EtfEquityExposure",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Etf Historical",description:"ETF Historical Market Price",url:"/platform/data_models/EtfHistorical",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Etf Holdings Date",description:"Use this function to get the holdings dates, if available",url:"/platform/data_models/EtfHoldingsDate",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Etf Holdings Performance",description:"Get the recent price performance of each ticker held in the ETF",url:"/platform/data_models/EtfHoldingsPerformance",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Etf Holdings",description:"Get the holdings for an individual ETF",url:"/platform/data_models/EtfHoldings",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Etf Info",description:"ETF Information Overview",url:"/platform/data_models/EtfInfo",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Etf Search",description:"Search for ETFs",url:"/platform/data_models/EtfSearch",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Etf Sectors",description:"ETF Sector weighting",url:"/platform/data_models/EtfSectors",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"European Central Bank Interest Rates",description:"European Central Bank Interest Rates",url:"/platform/data_models/EuropeanCentralBankInterestRates",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Executive Compensation",description:"Get executive management team compensation for a given company over time",url:"/platform/data_models/ExecutiveCompensation",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Fedfunds",description:"Fed Funds Rate",url:"/platform/data_models/FEDFUNDS",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Financial Ratios",description:"Get an extensive set of financial and accounting ratios for a given company over time",url:"/platform/data_models/FinancialRatios",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Fred Regional",description:"Query the Geo Fred API for regional economic data by series group",url:"/platform/data_models/FredRegional",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Fred Search",description:"Search for FRED series or economic releases by ID or string",url:"/platform/data_models/FredSearch",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Fred Series",description:"Get data by series ID from FRED",url:"/platform/data_models/FredSeries",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Futures Curve",description:"Futures Term Structure, current or historical",url:"/platform/data_models/FuturesCurve",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Futures Historical",description:"Historical futures prices",url:"/platform/data_models/FuturesHistorical",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Gdp Forecast",description:"Forecasted GDP Data",url:"/platform/data_models/GdpForecast",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Gdp Nominal",description:"Nominal GDP Data",url:"/platform/data_models/GdpNominal",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Gdp Real",description:"Real GDP Data",url:"/platform/data_models/GdpReal",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Growth Tech Equities",description:"Get top tech stocks based on revenue and earnings growth",url:"/platform/data_models/GrowthTechEquities",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"High Quality Market Corporate Bond",description:"High Quality Market Corporate Bond",url:"/platform/data_models/HighQualityMarketCorporateBond",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Historical Attributes",description:"Get the historical values of a data tag from Intrinio",url:"/platform/data_models/HistoricalAttributes",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Historical Dividends",description:"Get historical dividend data for a given company",url:"/platform/data_models/HistoricalDividends",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Historical Employees",description:"Get historical employee count data for a given company",url:"/platform/data_models/HistoricalEmployees",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Historical Eps",description:"Get historical earnings per share data for a given company",url:"/platform/data_models/HistoricalEps",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Historical Splits",description:"Get historical stock splits for a given company",url:"/platform/data_models/HistoricalSplits",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"ICE Bof A",description:"ICE BofA US Corporate Bond Indices",url:"/platform/data_models/ICEBofA",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"IORB",description:"Interest on Reserve Balances",url:"/platform/data_models/IORB",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Income Statement Growth",description:"Get the growth of a company's income statement items over time",url:"/platform/data_models/IncomeStatementGrowth",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Income Statement",description:"Get the income statement for a given company",url:"/platform/data_models/IncomeStatement",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Index Constituents",description:"Index Constituents",url:"/platform/data_models/IndexConstituents",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Index Historical",description:"Historical Index Levels",url:"/platform/data_models/IndexHistorical",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Index Search",description:"Filters indices for rows containing the query",url:"/platform/data_models/IndexSearch",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Index Sectors",description:"Index Sectors",url:"/platform/data_models/IndexSectors",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Index Snapshots",description:"Index Snapshots",url:"/platform/data_models/IndexSnapshots",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Insider Trading",description:"Get data about trading by a company's management team and board of directors",url:"/platform/data_models/InsiderTrading",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Institutional Ownership",description:"Get data about institutional ownership for a given company over time",url:"/platform/data_models/InstitutionalOwnership",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Institutions Search",description:"Search SEC-regulated institutions by name and return a list of results with CIK numbers",url:"/platform/data_models/InstitutionsSearch",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Key Executives",description:"Get executive management team data for a given company",url:"/platform/data_models/KeyExecutives",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Key Metrics",description:"Get fundamental metrics for a given company",url:"/platform/data_models/KeyMetrics",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"LTIR",description:"Long-term interest rates refer to government bonds maturing in ten years",url:"/platform/data_models/LTIR",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Latest Attributes",description:"Get the latest value of a data tag from Intrinio",url:"/platform/data_models/LatestAttributes",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Lbma Fixing",description:"Daily LBMA Fixing Prices in USD/EUR/GBP",url:"/platform/data_models/LbmaFixing",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Market Indices",description:"Historical Market Indices",url:"/platform/data_models/MarketIndices",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Market Snapshots",description:"Get an updated equity market snapshot",url:"/platform/data_models/MarketSnapshots",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Money Measures",description:"Money Measures (M1/M2 and components)",url:"/platform/data_models/MoneyMeasures",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Moody Corporate Bond Index",description:"Moody Corporate Bond Index",url:"/platform/data_models/MoodyCorporateBondIndex",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"OTC Aggregate",description:"Get the weekly aggregate trade data for Over The Counter deals",url:"/platform/data_models/OTCAggregate",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Options Chains",description:"Get the complete options chain for a ticker",url:"/platform/data_models/OptionsChains",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Options Unusual",description:"Get the complete options chain for a ticker",url:"/platform/data_models/OptionsUnusual",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Price Performance",description:"Get price performance data for a given stock",url:"/platform/data_models/PricePerformance",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Price Performance",description:"Price performance as a return, over different periods",url:"/platform/data_models/PricePerformance",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Price Target Consensus",description:"Get consensus price target and recommendation",url:"/platform/data_models/PriceTargetConsensus",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Price Target",description:"Get analyst price targets by company",url:"/platform/data_models/PriceTarget",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Projections",description:"Fed Funds Rate Projections",url:"/platform/data_models/PROJECTIONS",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Reported Financials",description:"Get financial statements as reported by the company",url:"/platform/data_models/ReportedFinancials",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Revenue Business Line",description:"Get the revenue breakdown by business segment for a given company over time",url:"/platform/data_models/RevenueBusinessLine",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Revenue Geographic",description:"Get the revenue geographic breakdown for a given company over time",url:"/platform/data_models/RevenueGeographic",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Risk Premium",description:"Market Risk Premium by country",url:"/platform/data_models/RiskPremium",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Rss Litigation",description:"The RSS feed provides links to litigation releases concerning civil lawsuits brought by the Commission in federal court",url:"/platform/data_models/RssLitigation",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"SOFR",description:"Secured Overnight Financing Rate",url:"/platform/data_models/SOFR",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"SP500 Multiples",description:"Historical S&P 500 multiples and Shiller PE ratios",url:"/platform/data_models/SP500Multiples",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"STIR",description:"Short-term interest rates are the rates at which short-term borrowings are effected between\nfinancial institutions or the rate at which short-term government paper is issued or traded in the market",url:"/platform/data_models/STIR",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Schema Files",description:"A tool for navigating the directory of SEC XML schema files by year",url:"/platform/data_models/SchemaFiles",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Search Attributes",description:"Search Intrinio data tags to search in latest or historical attributes",url:"/platform/data_models/SearchAttributes",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Selected Treasury Bill",description:"Select Treasury Bill",url:"/platform/data_models/SelectedTreasuryBill",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Selected Treasury Constant Maturity",description:"Select Treasury Constant Maturity",url:"/platform/data_models/SelectedTreasuryConstantMaturity",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Share Statistics",description:"Get data about share float for a given company",url:"/platform/data_models/ShareStatistics",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Short Volume",description:"Get reported Fail-to-deliver (FTD) data",url:"/platform/data_models/ShortVolume",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Sic Search",description:"Search for Industry Titles, Reporting Office, and SIC Codes",url:"/platform/data_models/SicSearch",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Sonia",description:"Sterling Overnight Index Average",url:"/platform/data_models/SONIA",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Spot Rate",description:"Spot Rates",url:"/platform/data_models/SpotRate",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Symbol Map",description:"Map a CIK number to a ticker symbol, leading 0s can be omitted or included",url:"/platform/data_models/SymbolMap",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Top Retail",description:"Tracks over $30B USD/day of individual investors trades",url:"/platform/data_models/TopRetail",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Trailing Dividend Yield",description:"Get the 1 year trailing dividend yield for a given company over time",url:"/platform/data_models/TrailingDividendYield",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Treasury Auctions",description:"Government Treasury Auctions",url:"/platform/data_models/TreasuryAuctions",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Treasury Constant Maturity",description:"Treasury Constant Maturity",url:"/platform/data_models/TreasuryConstantMaturity",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Treasury Prices",description:"Government Treasury Prices by date",url:"/platform/data_models/TreasuryPrices",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Treasury Rates",description:"Government Treasury Rates",url:"/platform/data_models/TreasuryRates",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"US Yield Curve",description:"US Yield Curve",url:"/platform/data_models/USYieldCurve",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Unemployment",description:"Global unemployment data",url:"/platform/data_models/Unemployment",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"Upcoming Release Days",description:"Get upcoming earnings release dates",url:"/platform/data_models/UpcomingReleaseDays",mdxType:"ReferenceCard"}),(0,i.kt)(o.Z,{title:"World News",description:"World News",url:"/platform/data_models/WorldNews",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);