(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{214:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){n(e,t,a[t])})}return e}a.d(t,"a",function(){return r})},58:function(e,t,a){"use strict";a.r(t);var n=a(214),r=a(0),i=a.n(r),l=a(42),c=a(53);t.default=function(e){var t=e.nlp2API.status,a=Object(r.useContext)(l.a),s=a.state,o=a.dispatch;return i.a.createElement("div",{className:"card",style:{height:"100%"}},i.a.createElement("div",{className:"card-image is-centered is-flex",style:{justifyContent:"center",padding:10}},i.a.createElement("figure",{className:"image is-128x128"},i.a.createElement("img",{alt:"verify",src:"/assets/verify.svg"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",{className:"title is-5"},"Verify tickets"),i.a.createElement("p",{className:"subtitle is-7"},"Total ",t.availableVerifications," tickets"),i.a.createElement("div",{className:"content is-small"},i.a.createElement("ul",null,i.a.createElement("li",null,"Earn 5% of each ticket price that you verify"),i.a.createElement("li",null,"New verification will be available right after new draws"),i.a.createElement("li",null,"First come first serve basis"))),i.a.createElement("button",{disabled:0===t.availableVerifications,onClick:function(){if(s.wallet){var e=c.a.getInvokeScript.verify([s.wallet.address]);o.openInvoker(Object(n.a)({},e))}else o.openInvoker()},className:"button is-primary"},"Verify")))}}}]);
//# sourceMappingURL=15.15c26be2.chunk.js.map