(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{331:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var r=a(0),n=a.n(r),o=a(314),l=a(7),i=a(61),c=a(101),u=(a(47),a(381)),s=a(382),d=a(37),m=a(355),f=a(383),p=a(64),b=a(66),g=Object(c.a)((function(e){return{card:{display:"grid",gridTemplateColumns:"70px 1fr 1fr",gridTemplateAreas:'\n            "image subtitle subtitle"\n            "icons icons icons"\n            "rewards rewards rewards"\n            "estimate estimate estimate"\n        ',gridGap:10,alignItems:"center",wordBreak:"break-word"},image:{gridArea:"image",width:80}}}));function v(e){var t,a=g(),r=e.contract,o=e.metaContract,c=o.coopIdentifier,v=Object(l.d)((function(e){return e.contract.playerCoops[r.name]})),y=Object(l.d)((function(e){return e.playerData.farmsList.find((function(e){return e.contractId===r.name}))})),h=Object(l.d)((function(e){return e.playerData.game})),E=0===o.league?"elite":"standard",O=r.goals[E];v&&(t=v.fetching);var j="/contract/view";r&&(j+="/"+r.name),c&&(j+="/"+c);var w,C,S=[n.a.createElement(p.a,{style:{gridArea:"rewards / estimate / rewards / estimate"},key:"loading"})];if(v)w={eggsLaid:v.eggs,layingRate:v.totalRate,timeLeft:v.timeLeft},C=v.coop;else{var x=Object(b.a)(y,h);w={eggsLaid:y.eggsLaid,layingRate:x.layingRate/60,timeLeft:o.timeAccepted+o.contract.lengthSeconds-new Date/1e3},C="No Co-op"}var k=[n.a.createElement(u.a,{key:"rewards",style:{gridArea:"rewards"},eggsLaid:v&&v.eggs||y.eggsLaid,rewards:O}),n.a.createElement(s.a,{key:"estimate",style:{gridArea:"estimate"},rewards:O,data:w})];return C||(C=n.a.createElement(p.a,null)),n.a.createElement(m.a,{hoverable:!0,collapsable:!0,title:"".concat(r.title),className:a.root},n.a.createElement(d.b,{className:a.card,to:j},n.a.createElement("img",{key:"image",className:a.image,src:"/images/egg".concat(r.egg,".png")}),n.a.createElement(i.a,{key:"coop",style:{gridArea:"subtitle"},align:"center",variant:"h4"},C),n.a.createElement(f.a,{style:{gridArea:"icons"},contract:r,coop:v}),t?S:k))}var y=a(32),h=a(375);var E=a(103),O=a(370);Object(c.a)((function(e){return{root:{"&>img":{height:100}}}}));function j(e){var t=e.imageSrc,a=e.label,r=e.height;return n.a.createElement("div",null,n.a.createElement("img",{height:r,src:t}),n.a.createElement(i.a,{align:"center"},a))}var w=Object(c.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid",borderColor:e.palette.success.main,borderRadius:8},collected:{},img:{position:"relative"},gift:{width:80},check:{position:"absolute",left:5,top:5,width:36}}}));function C(e){var t=w(),a=e.collected,r=Object(y.a)(),o=new Date;o.setUTCDate((new Date).getUTCDate()+1),o.setUTCHours(0),o.setUTCMinutes(0),o.setUTCSeconds(0),o.setUTCMilliseconds(0);var l=a?function(){return n.a.createElement(i.a,null,"Next Gift: ",Object(E.g)(o/1e3,!0))}:function(){return n.a.createElement(i.a,null,"Collect your daily gift!")},c=a?{borderColor:r.palette.grey[400]}:null;return n.a.createElement("div",{className:t.root,style:c},n.a.createElement("div",{className:t.img},n.a.createElement("img",{className:t.gift,src:"images/icon_gift.png"}),a&&n.a.createElement("img",{className:t.check,src:"images/check_filled.png"})),n.a.createElement(l,null))}var S=Object(c.a)((function(e){return{meEggs:{paddingTop:8,paddingBottom:8}}}));var x=function(e){var t=Object(l.d)((function(e){return e.playerData})),a=S(),r=t.fetched,o=t.fetching,c=t.userId,u=r?t.game.lastDailyGiftCollectedDay>=Object(E.f)(new Date):void 0,s=function(){return n.a.createElement("div",null,n.a.createElement(i.a,{variant:"h5"},"Welcome to mioi.io's Egg, Inc. companion app"),n.a.createElement("br",null),n.a.createElement(i.a,{variant:"body1"},"The dashboard shows you all of the information you need at a glance. To get you the tailored information you're after, enter your PlayerID below."),n.a.createElement("br",null),n.a.createElement(i.a,{variant:"body2"},"The PlayerID will be saved on the device you're viewing this on."),n.a.createElement(h.a,null))},d=function(){return n.a.createElement("div",null,n.a.createElement(C,{collected:u}),n.a.createElement(O.a,{className:a.meEggs},n.a.createElement(j,{imageSrc:"/images/SOUL_EGGS.png",label:Object(E.c)(t.game.soulEggsD),height:80}),n.a.createElement(j,{imageSrc:"/images/PROPHECY_EGGS.png",label:Object(E.c)(t.game.eggsOfProphecy),height:80})),n.a.createElement(i.a,{variant:"caption"},"Latest game data: ",new Date(1e3*t.approxTime).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short",hour12:!0})))},f=t.userName?"Hello, ".concat(t.userName):"Welcome";return n.a.createElement(m.a,{collapsable:!0,title:f},!r&&n.a.createElement(s,null),o&&r&&n.a.createElement(p.a,null),!o&&c&&n.a.createElement(d,null))};function k(e){return n.a.createElement(d.b,{to:e.link,style:{height:"fit-content"}},n.a.createElement(m.a,{hoverable:!0,title:"Link"},n.a.createElement(i.a,{variant:"h3",align:"center"},e.title),n.a.createElement("br",null),n.a.createElement(i.a,{variant:"body1"},e.body),e.imgSrc&&n.a.createElement("img",{src:e.imgSrc})))}var P=a(385);function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};I(this,e),this.content=t.content||[],this.orderedContent=null,this.columnClass=t.columnClass||null,this.rootClass=t.rootClass||null}var t,a,r;return t=e,(a=[{key:"addItem",value:function(e){e instanceof Array?this.content=this.content.concat(e):this.content.push(e)}},{key:"orderContent",value:function(){this.orderedContent=this.content.slice(0),this.orderedContent.sort((function(e,t){return e.props.priority-t.props.priority}))}},{key:"render",value:function(e){var t=this;this.orderContent();for(var a=[],r=function(r){a.push(n.a.createElement("div",{key:"column".concat(r+1),className:t.columnClass},t.orderedContent.filter((function(t,a){return a%e===r}))))},o=0;o<e;o++)r(o);return n.a.createElement("div",{className:this.rootClass,style:{display:"grid",gridTemplateColumns:"1fr ".repeat(e)}},a)}}])&&N(t.prototype,a),r&&N(t,r),e}();function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var L=Object(c.a)((function(e){return{root:{gridGap:20,padding:"10px 0px"},column:{display:"flex",flexDirection:"column","& >*":{margin:"10px 0px"}}}}));var M=function(e){var t=L(),a=Object(l.c)(),i=Object(l.d)((function(e){return e.playerData})),c=Object(l.d)((function(e){return e.contract.activeContracts})),u=Object(l.d)((function(e){return e.contract.playerCoops})),s=(Object(l.d)((function(e){return e.settings.playerId})),Object(l.d)((function(e){return e.app.news}))),d=Object(y.a)(),m=A(Object(r.useState)(null),2),f=m[0],p=m[1],b=i.fetched?i.contracts.contractsList:null;Object(r.useEffect)((function(){i.fetched&&0===Object.keys(u).length&&u.constructor===Object&&Object(E.e)(b,a)}),[i.userId]);var g=new T({rootClass:t.root,columnClass:t.column});return s.fetched&&s.posts&&g.addItem(n.a.createElement(P.a,{post:s.posts[0],priority:2,key:"post"})),g.addItem(n.a.createElement(k,{key:"contractLink",priority:3,link:"/contract",title:"Contracts",body:"Click to see all of the current contracts!"})),c.fetched&&i.fetched&&b.forEach((function(e,t){var a=c.contracts[e.contract.identifier];void 0!==a&&g.addItem(n.a.createElement(v,{key:t,priority:1,metaContract:e,contract:a}))})),g.addItem(n.a.createElement(x,{key:"playerCard",priority:0})),Object(r.useEffect)((function(){window.innerWidth>d.breakpoints.values.lg?p(3):window.innerWidth>d.breakpoints.values.md?p(2):p(1)}),[window.innerWidth]),n.a.createElement(o.a,null,g.render(f))},R=a(107);function z(e){return n.a.createElement(R.a,{shortTitle:"Dashboard"},n.a.createElement(M,null))}},355:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(315),n=a(317),o=a(61),l=a(0),i=a.n(l),c=a(101),u=a(366),s=a.n(u),d=a(21);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var p=Object(c.a)((function(e){return{card:{},header:{backgroundColor:e.palette.primary.main,height:32,display:"grid",gridTemplateColumns:"32px 1fr 32px",gridTemplateAreas:'\n\t\t\t"left center right"\n\t\t'},title:{gridArea:"center",userSelect:"none"},collapseButton:{gridArea:"right",padding:"unset",transition:"all 200ms ease"},iconCollapsed:{transform:"rotate(180deg)"},cardBody:{padding:10,transition:"all 500ms ease"},bodyHidden:{height:0,paddingTop:"0px !important",paddingBottom:"0px !important"}}}));function b(e){var t=p(),a=e.hoverable||!1,c=e.collapsable||!1,u=m(Object(l.useState)(!1),2),f=u[0],b=u[1],g=m(Object(l.useState)(!1),2),v=g[0],y=g[1],h=a?function(){b(!f)}:null,E=c?function(){y(!v),d.a.event({category:"Interaction",action:v?"Card Expanded":"Card Collapsed",label:e.title})}:null;return i.a.createElement(r.a,{style:e.style,raised:a&&f,onMouseOver:h,onMouseOut:h,className:"".concat(t.card)},i.a.createElement("div",{className:t.header,onClick:E,style:{cursor:c?"pointer":null}},i.a.createElement(o.a,{className:t.title,variant:"h5",align:"center",style:{color:"white"}},e.title),c&&i.a.createElement(n.a,{className:"".concat(t.collapseButton," ").concat(v?t.iconCollapsed:""),style:{color:"white"},"aria-label":v?"Expand Card":"Collapse Card"},i.a.createElement(s.a,null))),i.a.createElement("div",{className:"".concat(v?t.bodyHidden:""," ").concat(e.className," ").concat(t.cardBody)},e.children))}},359:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(447),n=a(0),o=a.n(n),l=a(324),i=a.n(l),c=a(7);function u(e){var t=Object(c.d)((function(e){return e.settings.hideTooltips})),a=e.small?"small":"default";return t?null:o.a.createElement(r.a,{title:e.helpText},o.a.createElement(i.a,{fontSize:a,style:{verticalAlign:"text-bottom"},color:"primary"}))}},366:function(e,t,a){"use strict";var r=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(36)).default)(n.default.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=o},370:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(0),n=a.n(r);function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.style,{display:"flex",justifyContent:"space-around",flexDirection:e.column?"column":"row"});return n.a.createElement("div",{style:t,className:e.className},e.children)}},371:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(61),n=a(138),o=a(0),l=a.n(o),i=a(32);function c(e){Object(i.a)();return l.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",flex:"1 1 0px",alignItems:"center",gap:10,justifyContent:"space-between"}},l.a.createElement(n.a,{style:{width:"36px",height:"36px"},fontSize:"large",color:"secondary",component:e.icon}),l.a.createElement(r.a,{variant:"subtitle1"},e.label))}},372:function(e,t,a){"use strict";var r=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(36)).default)(n.default.createElement("path",{d:"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}),"Timer");t.default=o},373:function(e,t,a){"use strict";var r=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(36)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"}),n.default.createElement("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"}),n.default.createElement("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"})),"PeopleAlt");t.default=o},374:function(e,t,a){"use strict";var r=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(36)).default)(n.default.createElement("path",{d:"M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z"}),"OfflineBolt");t.default=o},375:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var r=a(317),n=a(395),o=a(0),l=a.n(o),i=a(48),c=a(101),u=a(7),s=a(384),d=a.n(s),m=a(64),f=a(21);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var g=Object(c.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"1fr auto",gridGap:10,alignItems:"center",justifyItems:"center"}}}));function v(e){var t=g(),a=Object(u.c)(),c=Object(u.d)((function(e){return e.settings.playerId})),s=(Object(u.d)((function(e){return e.playerData.userId})),Object(u.d)((function(e){return e.playerData.fetching}))),b=Object(u.d)((function(e){return e.playerData.error})),v=p(Object(o.useState)(!!c&&(b&&!s)),2),y=v[0],h=v[1],E=p(Object(o.useState)(c||""),2),O=E[0],j=E[1];Object(o.useEffect)((function(){j(c||"")}),[c]);var w=function(e){""!==O&&O!==c&&(a(Object(i.e)(O)),a(Object(i.d)(O)),f.a.event({category:"Player",action:"PlayerID Submitted"}))};return l.a.createElement("div",{className:t.root},l.a.createElement(n.a,{value:O,fullWidth:!0,error:y,helperText:"Found at the bottom of the 'Privacy & Data' in-game menu",label:"Player ID",onChange:function(e){j(e.target.value),h(!1)},onKeyUp:function(e){"Enter"===e.key&&w()},inputProps:{"aria-label":"Player ID"}}),s&&l.a.createElement(m.a,null),!s&&l.a.createElement(r.a,{onClick:w,color:"primary",size:"medium",disabled:O===c,"aria-label":"Submit"},l.a.createElement(d.a,null)))}},381:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(316),n=a(447),o=a(0),l=a.n(o),i=a(32),c=(a(364),a(365)),u=a(62);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e){var t=Object(i.a)(),a=e.rewards,o=e.eggsLaid||0,m=a[a.length-1].goal,f=Math.min(Math.max(0,o/m*100),100),p=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.style,{margin:"10px 20px",borderRadius:10}),b="linear-gradient(to right, ".concat(t.palette.primary.light,", ").concat(t.palette.secondary.light,")"),g=a.map((function(e,t){return l.a.createElement(c.Step,{key:t,transition:"scale"},(function(t){var a=t.accomplished,r=(t.index,{filter:["drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))",a?null:"grayscale(0.7)"].join(" "),transform:a?"scale(1.2)":null,pointerEvents:"none"});return l.a.createElement(n.a,{arrow:!0,title:"".concat(Object(u.j)(o/e.goal,0,!0)," completed"),placement:"top",enterTouchDelay:400},l.a.createElement("div",null,l.a.createElement("img",{width:40,src:Object(u.h)(e).path,style:r})))}))}));return l.a.createElement(n.a,{arrow:!0,title:"".concat(Object(u.e)(o),"/").concat(Object(u.e)(m))},l.a.createElement(r.a,{elevation:4,style:p},l.a.createElement(c.ProgressBar,{height:20,percent:f,unfilledBackground:t.palette.background.off,filledBackground:b,stepPositions:a.map((function(e){return e.goal/m*100}))},g)))}},382:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(316),n=a(351),o=a(61),l=a(0),i=a.n(l),c=a(62),u=a(365),s=(a(364),a(101)),d=a(32),m=a(359),f=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,border:1,borderStyle:"none",borderColor:e.palette.grey[300],borderRadius:10,margin:"10px 0px",display:"block"},main:{position:"relative",borderRadius:"inherit"},divider:{position:"absolute",width:2,height:"100%",left:"calc(50% - 1px)",zIndex:10,backgroundColor:e.palette.secondary.main,boxShadow:e.shadows[4]},progress:{clear:"both",height:30,"& div":{borderRadius:"unset !important","& div":{borderRadius:"unset !important"}}},estimate:{textAlign:"left",float:"left",maxWidth:"45%",marginLeft:10},expiry:{textAlign:"right",float:"right",maxWidth:"45%",marginRight:10},title:{},value:{},overlay:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",borderRadius:"inherit",backgroundColor:e.palette.background.offOverlay,zIndex:99},tip:{clear:"both"}}}));function p(e){var t=f(),a=Object(d.a)();return void 0===e.completed?null:i.a.createElement("div",{className:t.overlay},i.a.createElement(o.a,{variant:"h5",align:"center",style:{color:e.completed?a.palette.success.main:a.palette.error.main}},e.completed?"Contract Completed!":"Contract Failed!"))}function b(e){var t,a,l,s=f(),b=Object(d.a)(),g=e.rewards;if(e.coop)t=e.coop.members.reduce((function(e,t){return e+t.rate}),0),a=g[g.length-1].goal-e.coop.eggs,l=e.coop.timeLeft;else{if(!e.data)return null;t=e.data.layingRate,a=g[g.length-1].goal-e.data.eggsLaid,l=e.data.timeLeft}var v=a/t;v===1/0&&(v=Number.MAX_SAFE_INTEGER);var y,h=v/(v+l)*100,E=b.palette.warning.main;h>65?E=b.palette.error.main:h<=50&&(E=b.palette.success.main),a<=0?(y=!0,h=0):l<=0&&(y=!1,h=0);return i.a.createElement(r.a,{style:e.style,className:s.root},i.a.createElement("div",{className:s.main},i.a.createElement(p,{completed:y}),i.a.createElement(o.a,{variant:"body2",className:"".concat(s.estimate," ").concat(s.title)},"Completion Estimate ",i.a.createElement(m.a,{small:!0,helpText:"Time to complete final goal at current rate"})),i.a.createElement(o.a,{variant:"body2",className:"".concat(s.expiry," ").concat(s.title)},"Contract Time Left ",i.a.createElement(m.a,{small:!0,helpText:"Time remaining on contract"})),i.a.createElement("div",{className:s.divider}),i.a.createElement("div",{className:s.progress},i.a.createElement(u.ProgressBar,{height:"100%",percent:h,unfilledBackground:b.palette.background.off,filledBackground:E})),i.a.createElement(o.a,{variant:"body2",className:"".concat(s.estimate," ").concat(s.value)},v==1/0?"A very long time":Object(c.d)(v)),i.a.createElement(o.a,{variant:"body2",className:"".concat(s.expiry," ").concat(s.value)},Object(c.d)(l)),i.a.createElement("div",{style:{clear:"both"}})),h>50&&i.a.createElement(n.a,{style:{clear:"both"}}),i.a.createElement(o.a,{align:"center",variant:"body2",className:s.tip},h>50?"Tip: ".concat(Object(c.e)(a/l),"/s required to reach success threshold."):null))}},383:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(374),n=a.n(r),o=a(373),l=a.n(o),i=a(372),c=a.n(i),u=a(0),s=a.n(u),d=a(370),m=a(371),f=a(62);function p(e){var t=e.contract,a=e.coop,r=function(){if(t.coopSize){var e=t.coopSize;if(a&&a.members)return a.members.length+"/"+e}return"0"}();return s.a.createElement(d.a,{style:{gridArea:"icons"}},s.a.createElement(m.a,{icon:c.a,label:f.d(t.duration,!0)}),s.a.createElement(m.a,{icon:l.a,label:r}),s.a.createElement(m.a,{icon:n.a,label:t.boostTokenInterval?"".concat(t.boostTokenInterval," min"):"No Boosts"}))}},384:function(e,t,a){"use strict";var r=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(36)).default)(n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.default=o},385:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(61),n=a(0),o=a.n(n),l=a(355),i=a(101),c=(a(70),a(7),a(118)),u=a.n(c),s=Object(i.a)((function(e){return{markdown:{whiteSpace:"pre-line","& a":{color:e.palette.info.dark,"&:hover":{color:e.palette.info.main}}}}}));function d(e){var t=e.post,a=s();return o.a.createElement(l.a,{collapsable:!0,title:"News"},o.a.createElement(r.a,{variant:"overline",align:"right"},new Date(1e3*t.timePosted).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short",hour12:!1})),o.a.createElement(r.a,{variant:"h5"},t.title),o.a.createElement(r.a,{variant:"subtitle2"},"by ",t.author),o.a.createElement(u.a,{className:a.markdown,source:t.body}))}},395:function(e,t,a){"use strict";var r=a(1),n=a(2),o=a(0),l=(a(3),a(4)),i=a(432),c=a(433),u=a(449),s=a(448),d=a(367),m=a(5),f=a(6),p=a(113),b=a(109),g=o.forwardRef((function(e,t){var a=e.children,i=e.classes,c=e.className,u=e.color,s=void 0===u?"primary":u,m=e.component,g=void 0===m?"div":m,v=e.disabled,y=void 0!==v&&v,h=e.error,E=void 0!==h&&h,O=e.fullWidth,j=void 0!==O&&O,w=e.focused,C=e.hiddenLabel,S=void 0!==C&&C,x=e.margin,k=void 0===x?"none":x,P=e.required,I=void 0!==P&&P,N=e.size,T=e.variant,A=void 0===T?"standard":T,D=Object(n.a)(e,["children","classes","className","color","component","disabled","error","fullWidth","focused","hiddenLabel","margin","required","size","variant"]),L=o.useState((function(){var e=!1;return a&&o.Children.forEach(a,(function(t){if(Object(p.a)(t,["Input","Select"])){var a=Object(p.a)(t,["Select"])?t.props.input:t;a&&Object(d.a)(a.props)&&(e=!0)}})),e})),M=L[0],R=L[1],z=o.useState((function(){var e=!1;return a&&o.Children.forEach(a,(function(t){Object(p.a)(t,["Input","Select"])&&Object(d.b)(t.props,!0)&&(e=!0)})),e})),B=z[0],F=z[1],W=o.useState(!1),_=W[0],U=W[1],G=void 0!==w?w:_;y&&G&&U(!1);var H=o.useCallback((function(){F(!0)}),[]),q={adornedStart:M,setAdornedStart:R,color:s,disabled:y,error:E,filled:B,focused:G,fullWidth:j,hiddenLabel:S,margin:("small"===N?"dense":void 0)||k,onBlur:function(){U(!1)},onEmpty:o.useCallback((function(){F(!1)}),[]),onFilled:H,onFocus:function(){U(!0)},registerEffect:void 0,required:I,variant:A};return o.createElement(b.a.Provider,{value:q},o.createElement(g,Object(r.a)({className:Object(l.a)(i.root,c,"none"!==k&&i["margin".concat(Object(f.a)(k))],j&&i.fullWidth),ref:t},D),a))})),v=Object(m.a)({root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}},{name:"MuiFormControl"})(g),y=a(434),h=a(444),E={standard:i.a,filled:c.a,outlined:u.a},O=o.forwardRef((function(e,t){var a=e.autoComplete,i=e.autoFocus,c=void 0!==i&&i,u=e.children,d=e.classes,m=e.className,f=e.color,p=void 0===f?"primary":f,b=e.defaultValue,g=e.disabled,O=void 0!==g&&g,j=e.error,w=void 0!==j&&j,C=e.FormHelperTextProps,S=e.fullWidth,x=void 0!==S&&S,k=e.helperText,P=e.hiddenLabel,I=e.id,N=e.InputLabelProps,T=e.inputProps,A=e.InputProps,D=e.inputRef,L=e.label,M=e.multiline,R=void 0!==M&&M,z=e.name,B=e.onBlur,F=e.onChange,W=e.onFocus,_=e.placeholder,U=e.required,G=void 0!==U&&U,H=e.rows,q=e.rowsMax,V=e.select,$=void 0!==V&&V,J=e.SelectProps,K=e.type,X=e.value,Y=e.variant,Q=void 0===Y?"standard":Y,Z=Object(n.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};"outlined"===Q&&(N&&void 0!==N.shrink&&(ee.notched=N.shrink),L&&(ee.label=o.createElement(o.Fragment,null,L,G&&" *"))),$&&(J&&J.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var te=k&&I?"".concat(I,"-helper-text"):void 0,ae=L&&I?"".concat(I,"-label"):void 0,re=E[Q],ne=o.createElement(re,Object(r.a)({"aria-describedby":te,autoComplete:a,autoFocus:c,defaultValue:b,fullWidth:x,multiline:R,name:z,rows:H,rowsMax:q,type:K,value:X,id:I,inputRef:D,onBlur:B,onChange:F,onFocus:W,placeholder:_,inputProps:T},ee,A));return o.createElement(v,Object(r.a)({className:Object(l.a)(d.root,m),disabled:O,error:w,fullWidth:x,hiddenLabel:P,ref:t,required:G,color:p,variant:Q},Z),L&&o.createElement(s.a,Object(r.a)({htmlFor:I,id:ae},N),L),$?o.createElement(h.a,Object(r.a)({"aria-describedby":te,id:I,labelId:ae,value:X,input:ne},J),u):ne,k&&o.createElement(y.a,Object(r.a)({id:te},C),k))}));t.a=Object(m.a)({root:{}},{name:"MuiTextField"})(O)}}]);