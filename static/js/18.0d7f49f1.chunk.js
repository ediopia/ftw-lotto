(window.webpackJsonp=window.webpackJsonp||[]).push([[18,60],{234:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(189),l=t(187);a.default=function(e){var a=e.savedWallets,t=void 0===a?[]:a,n=(e.errors,e.isSubmitting),c=e.values,d=e.setFieldValue,i=e.submitForm;return s.a.createElement(r.a,null,s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"label"},"Saved wallets"),s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select is-fullwidth"},s.a.createElement("select",{onBlur:function(e){return d("encryptedKey",e.target.value)}},t.map(function(e){return!(!e||!e.address)&&s.a.createElement("option",{key:e.address,value:e.encryptedKey},e.address)}))))),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"label"},"Password"),s.a.createElement(l.default,{onKeyDown:i,value:c.password,onChange:function(e){return d("password",e)}})),s.a.createElement("button",{type:"submit",className:"button is-link ".concat(n?"is-loading":"")},"Open"))}},235:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),r=t(189),l=t(234),c=t(266),d=t(190),i=c.object().shape({password:c.string().required("Required")}),o=Object(r.b)({mapPropsToValues:function(e){return{encryptedKey:e.savedWallets&&e.savedWallets.length>0?e.savedWallets[0].encryptedKey:"",password:""}},validationSchema:i,handleSubmit:function(e,a){var t=a.props,n=a.setSubmitting;s.a.create.account(e.encryptedKey).decrypt(e.password).then(function(e){n(!1),t.onConnected({provider:"LOCAL",address:e.address,privateKey:e.privateKey,encryptedKey:e.encrypted})}).catch(function(e){n(!1),d.b.error(e.message)})}})(l.default);a.default=o}}]);
//# sourceMappingURL=18.0d7f49f1.chunk.js.map