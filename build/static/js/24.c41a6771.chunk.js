(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{240:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(0),l=a.n(c),r=a(4),s=a.n(r),o=a(216),u=a(215);t.default=function(e){var t=e.privateKey,a=e.onEncrypt,r=Object(c.useState)(""),i=Object(n.a)(r,2),d=i[0],m=i[1],p=Object(c.useState)(!1),b=Object(n.a)(p,2),w=b[0],E=b[1],f=Object(c.useState)(),y=Object(n.a)(f,2),v=y[0],h=y[1],O=function(){E(!0),s.a.create.account(t).encrypt(d).then(function(e){E(!1),a({provider:"LOCAL",encryptedKey:e.encrypted,address:e.address,privateKey:t,password:d})}).catch(function(e){h(e.message),E(!1)})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"label"},"Password"),l.a.createElement(o.default,{value:d,onChange:function(e){return m(e)},onKeyDown:function(){d&&O()}})),l.a.createElement("div",{className:"is-size-7 content"},l.a.createElement("ul",null,l.a.createElement("li",null,"Password must be at least 6 characters long."),l.a.createElement("li",null,"You will need this password to unlock your wallet."))),l.a.createElement("hr",null),!!v&&l.a.createElement(u.default,{message:v,onClose:function(){return h(void 0)}}),l.a.createElement("button",{disabled:!d,onClick:O,type:"button",className:"button is-link ".concat(w?"is-loading":"")},"Encrypt!"))}}}]);
//# sourceMappingURL=24.c41a6771.chunk.js.map