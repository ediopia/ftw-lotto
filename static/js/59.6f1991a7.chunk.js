(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{210:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(189),r=t(187);a.default=function(e){var a=e.touched,t=e.errors,n=e.isSubmitting,c=e.values,d=e.setFieldValue,i=e.submitForm,o=c.encryptedKey,u=c.password,p=o&&u;return s.a.createElement(l.a,null,s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"label"},"Encrypted key"),s.a.createElement("input",{className:"input",placeholder:"Encrypted key",value:o,onChange:function(e){return d("encryptedKey",e.target.value)}}),t.encryptedKey&&a.encryptedKey&&s.a.createElement("div",{className:"help is-danger"},t.encryptedKey)),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"label"},"Password"),s.a.createElement(r.default,{isLoading:n,onKeyDown:function(){return!!p&&i()},onChange:function(e){return d("password",e)},value:u}),t.password&&a.password&&s.a.createElement("div",{className:"help is-danger"},t.password)),s.a.createElement("button",{type:"submit",disabled:!p,className:"button is-link ".concat(n?"is-loading":"")},"Open wallet"))}}}]);
//# sourceMappingURL=59.6f1991a7.chunk.js.map