(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{216:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(0),l=a.n(c),r=a(1),s=a.n(r),o=a(195),u=a(192);t.default=function(e){var t=e.privateKey,a=e.onEncrypt,r=Object(c.useState)(""),i=Object(n.a)(r,2),d=i[0],m=i[1],p=Object(c.useState)(!1),w=Object(n.a)(p,2),b=w[0],E=w[1],y=function(){E(!0),s.a.create.account(t).encrypt(d).then(function(e){E(!1),a({provider:"LOCAL",encryptedKey:e.encrypted,address:e.address,privateKey:t,password:d})}).catch(function(e){o.b.error(e.message),E(!1)})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"label"},"Password"),l.a.createElement(u.default,{value:d,onChange:function(e){return m(e)},onKeyDown:function(){d&&y()}})),l.a.createElement("div",{className:"is-size-7 content"},l.a.createElement("ul",null,l.a.createElement("li",null,"Password must be at least 6 characters long."),l.a.createElement("li",null,"You will need this password to unlock your wallet."))),l.a.createElement("hr",null),l.a.createElement("button",{onClick:y,type:"button",className:"button is-link ".concat(b?"is-loading":"")},"Encrypt!"))}}}]);
//# sourceMappingURL=22.6eac5efa.chunk.js.map