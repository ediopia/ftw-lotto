(window.webpackJsonp=window.webpackJsonp||[]).push([[6,12,55],{186:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return a})},194:function(e,t,n){"use strict";var a=n(13),l=n(14),r=n(22),c=n(21),i=n(23),u=n(0),o=n.n(u),s=n(201),m=n.n(s),p=n(17);t.a=function(e,t){return function(n){function u(){var e,t;Object(a.a)(this,u);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(c.a)(u)).call.apply(e,[this].concat(l)))).state={data:void 0},t.onOpen=function(e){t.setState({data:e})},t.onClose=function(){t.setState({data:void 0})},t}return Object(i.a)(u,n),Object(l.a)(u,[{key:"render",value:function(){var n=this.state.data;return o.a.createElement("div",{className:"is-relative"},o.a.createElement("div",{className:m()(n?"is-hidden":"")},o.a.createElement(e,Object.assign({},this.props,{onClick:this.onOpen}))),n?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("button",{onClick:this.onClose,type:"button",className:"button is-small is-light"},o.a.createElement(p.b,null)," Back to list"),o.a.createElement("div",{style:{padding:"15px"}},o.a.createElement(t,Object.assign({},this.props,{data:n}))))):null)}}]),u}(o.a.PureComponent)}},43:function(e,t,n){"use strict";n.r(t);var a=n(186),l=n(0),r=n.n(l),c=n(188),i=n.n(c),u=n(42),o=n(34);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}t.default=function(e){var t=e.data,n=e.nlp2API,c=t.ticketNo,m=t.ticketCurrency,p=t.gameNo,d=t.numbers,E=t.player,b=t.isVerified,f=t.isClaimed,h=t.matched,y=t.prize,O=t.createdAt,v=n.status,g=v.availableVerifications,j=v.indexes.currentLotteryNo,k=Object(l.useContext)(o.a).dispatch,w=function(e){var t=u.a.getInvokeScript.claim([e]);k.openInvoker(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t))};return r.a.createElement("div",{className:"content"},r.a.createElement("h6",null,"Game no"),r.a.createElement("p",null,p),r.a.createElement("h6",null,"Ticket no"),r.a.createElement("p",null,c),r.a.createElement("h6",null,"Player"),r.a.createElement("p",null,E),r.a.createElement("h6",null,"Numbers"),r.a.createElement("p",null,d.join(",")),r.a.createElement("h6",null,"Created at"),r.a.createElement("p",null," ",i.a.unix(O).format("YYYY-MM-DD hh:mm:ss A")),r.a.createElement("h6",null,"Result"),r.a.createElement("p",null,b?"Matched ".concat(h," numbers"):j===p?"Playing":"Verifying"),r.a.createElement("h6",null,"Claim"),r.a.createElement("p",null,h>1?f?r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,"Prize"),r.a.createElement("p",null,"".concat(y," ").concat(function(e){switch(e){case 1:return"FTX";case 2:return"CNEO";case 3:return"CGAS"}}(m)))):r.a.createElement(r.a.Fragment,null,g?r.a.createElement("button",{onClick:function(){return w(c)},type:"button",className:"button is-success"},"Claim winning prize"):r.a.createElement("p",null,"Verifying other tickets (")):null))}},45:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(216),c=n(194),i=n(97),u=n(43),o=n(71),s=Object(c.a)(i.default,u.default);t.default=Object(o.a)(function(e){return console.log("Display: Winners"),l.a.createElement(r.a,{pageSize:25,load:e.nlp2API.getWinners},l.a.createElement(s,e))})},97:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a);t.default=function(e){var t=e.items,n=e.onClick;return l.a.createElement("table",{className:"table is-fullwidth has-mobile-cards is-hoverable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Draw"),l.a.createElement("th",null,"Ticket"),l.a.createElement("th",null,"Numbers"),l.a.createElement("th",null,"Player"),l.a.createElement("th",null,"Matched"))),l.a.createElement("tbody",null,t&&t.length>0?t.map(function(e){return l.a.createElement("tr",{onClick:function(){return n(e)},key:e.ticketNo},l.a.createElement("td",{"data-label":"Draw"},"#",e.gameNo),l.a.createElement("td",{"data-label":"Ticket"},"#",e.ticketNo),l.a.createElement("td",null,e.numbers.join(",")),l.a.createElement("td",null,e.player),l.a.createElement("td",null,e.matched," numbers"))}):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:4},"No winners"))))}}}]);
//# sourceMappingURL=6.39bf67bb.chunk.js.map