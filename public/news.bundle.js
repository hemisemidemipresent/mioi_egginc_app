(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{331:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var n=r(0),a=r.n(n),o=r(316),l=r(390),i=r(7),c=r(101);function u(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"column",padding:"10px 15px","&>*":{margin:"10px 0px"}}}}));var f=function(e){var t=d(),r=Object(i.d)((function(e){return e.app.news})),n=[];if(r.fetched){var c,s=u(r.posts);try{for(s.s();!(c=s.n()).done;){var f=c.value;n.push(a.a.createElement(l.a,{key:f.timePosted,post:f}))}}catch(e){s.e(e)}finally{s.f()}}return a.a.createElement(o.a,{className:t.root},n)},p=r(107);function m(e){return a.a.createElement(p.a,{title:"Developer News",shortTitle:"News"},a.a.createElement(f,null))}},357:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(317),a=r(319),o=r(61),l=r(0),i=r.n(l),c=r(101),u=r(369),s=r.n(u),d=r(21);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=Object(c.a)((function(e){return{card:{},header:{backgroundColor:e.palette.primary.main,height:32,display:"grid",gridTemplateColumns:"32px 1fr 32px",gridTemplateAreas:'\n\t\t\t"left center right"\n\t\t'},title:{gridArea:"center",userSelect:"none"},collapseButton:{gridArea:"right",padding:"unset",transition:"all 200ms ease"},iconCollapsed:{transform:"rotate(180deg)"},cardBody:{padding:10,transition:"all 500ms ease"},bodyHidden:{height:0,paddingTop:"0px !important",paddingBottom:"0px !important"}}}));function y(e){var t=m(),r=e.hoverable||!1,c=e.collapsable||!1,u=f(Object(l.useState)(!1),2),p=u[0],y=u[1],v=f(Object(l.useState)(!1),2),h=v[0],b=v[1],g=r?function(){y(!p)}:null,w=c?function(){b(!h),d.a.event({category:"Interaction",action:h?"Card Expanded":"Card Collapsed",label:e.title})}:null;return i.a.createElement(n.a,{style:e.style,raised:r&&p,onMouseOver:g,onMouseOut:g,className:"".concat(t.card)},i.a.createElement("div",{className:t.header,onClick:w,style:{cursor:c?"pointer":null}},i.a.createElement(o.a,{className:t.title,variant:"h5",align:"center",style:{color:"white"}},e.title),c&&i.a.createElement(a.a,{className:"".concat(t.collapseButton," ").concat(h?t.iconCollapsed:""),style:{color:"white"},"aria-label":h?"Expand Card":"Collapse Card"},i.a.createElement(s.a,null))),i.a.createElement("div",{className:"".concat(h?t.bodyHidden:""," ").concat(e.className," ").concat(t.cardBody)},e.children))}},369:function(e,t,r){"use strict";var n=r(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(37)).default)(a.default.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=o},390:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(61),a=r(0),o=r.n(a),l=r(357),i=r(101),c=(r(70),r(7),r(120)),u=r.n(c),s=Object(i.a)((function(e){return{markdown:{whiteSpace:"pre-line","& a":{color:e.palette.info.dark,"&:hover":{color:e.palette.info.main}}}}}));function d(e){var t=e.post,r=s();return o.a.createElement(l.a,{collapsable:!0,title:"News"},o.a.createElement(n.a,{variant:"overline",align:"right"},new Date(1e3*t.timePosted).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short",hour12:!1})),o.a.createElement(n.a,{variant:"h5"},t.title),o.a.createElement(n.a,{variant:"subtitle2"},"by ",t.author),o.a.createElement(u.a,{className:r.markdown,source:t.body}))}}}]);