(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{186:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r})},42:function(e,t,n){"use strict";n.r(t);var r=n(186),a=n(0),l=n.n(a),c=n(188),i=n.n(c),u=n(41),o=n(20);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}t.default=function(e){var t=e.data,n=e.nlp2API,c=t.ticketNo,s=t.ticketCurrency,p=t.gameNo,b=t.numbers,f=t.player,E=t.isVerified,y=t.isClaimed,h=t.matched,O=t.prize,d=t.createdAt,g=n.status,w=g.availableVerifications,j=g.indexes.currentLotteryNo,v=Object(a.useContext)(o.a).dispatch,P=function(e){var t=u.a.getInvokeScript.claim([e]);v.openInvoker(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t))};return l.a.createElement("div",{className:"content"},l.a.createElement("h6",null,"Game no"),l.a.createElement("p",null,p),l.a.createElement("h6",null,"Ticket no"),l.a.createElement("p",null,c),l.a.createElement("h6",null,"Player"),l.a.createElement("p",null,f),l.a.createElement("h6",null,"Numbers"),l.a.createElement("p",null,b.join(",")),l.a.createElement("h6",null,"Created at"),l.a.createElement("p",null," ",i.a.unix(d).format("YYYY-MM-DD hh:mm:ss A")),l.a.createElement("h6",null,"Result"),l.a.createElement("p",null,E?"Matched ".concat(h," numbers"):j===p?"Playing":"Verifying"),h>1?y?l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",null,"Prize"),l.a.createElement("p",null,"".concat(O," ").concat(s))):l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",null,"Claim"),w?l.a.createElement("button",{onClick:function(){return P(c)},type:"button",className:"button is-success"},"Claim winning prize"):l.a.createElement("p",null,"Smart contract is verifying other tickets")):null)}}}]);
//# sourceMappingURL=12.3c1f459b.chunk.js.map