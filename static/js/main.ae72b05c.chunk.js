(this.webpackJsonppassword_generator=this.webpackJsonppassword_generator||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),r=c.n(a),o=(c(9),c(2)),i=(c(10),c(11),c(0));function l(e){var t=e.textMessage;return t?Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("p",{children:t})}):null}var d=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(10),r=Object(o.a)(a,2),d=r[0],b=r[1],j=Object(s.useState)(!1),u=Object(o.a)(j,2),h=u[0],p=u[1],m=Object(s.useState)(!1),x=Object(o.a)(m,2),O=x[0],g=x[1],f=Object(s.useState)(!1),N=Object(o.a)(f,2),v=N[0],k=N[1],w=Object(s.useState)(!1),y=Object(o.a)(w,2),C=y[0],S=y[1],F=Object(s.useState)(!1),L=Object(o.a)(F,2),P=L[0],M=L[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("section",{className:"section",children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"Password Generator"}),Object(i.jsxs)("div",{className:"output-password",children:[Object(i.jsx)("h3",{id:"password",children:c}),Object(i.jsx)("button",{onClick:function(){""===c?M("Nothing to copy"):(!function(e){var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}(c),M("Password successfully copied to clipboard")),setTimeout((function(){return M(!1)}),1500)},className:"copy-btn",children:"Copy"})]}),Object(i.jsxs)("div",{className:"specification",children:[Object(i.jsx)("label",{htmlFor:"password-length ",className:"passLength",children:"Password Length"}),Object(i.jsxs)("div",{className:"displayFlex",children:[Object(i.jsx)("p",{className:"passwordLengthValue",children:d}),Object(i.jsx)("input",{defaultValue:d,className:"range",onChange:function(e){return b(e.target.value)},type:"range",id:"password-length",max:"15",min:"5"})]})]}),Object(i.jsxs)("div",{className:"specification",children:[Object(i.jsx)("label",{htmlFor:"uppercase-letters",children:"Uppercase"}),Object(i.jsx)("input",{checked:h,onChange:function(e){return p(e.target.checked)},type:"checkbox",className:"checkbox",id:"uppercase-letters"})]}),Object(i.jsxs)("div",{className:"specification",children:[Object(i.jsx)("label",{htmlFor:"lowercase-letters",children:"Lowercase"}),Object(i.jsx)("input",{checked:O,onChange:function(e){return g(e.target.checked)},type:"checkbox",className:"checkbox",id:"lowercase-letters"})]}),Object(i.jsxs)("div",{className:"specification",children:[Object(i.jsx)("label",{htmlFor:"include-numbers",children:"Numbers"}),Object(i.jsx)("input",{checked:v,onChange:function(e){return k(e.target.checked)},type:"checkbox",className:"checkbox",id:"include-numbers"})]}),Object(i.jsxs)("div",{className:"specification",children:[Object(i.jsx)("label",{htmlFor:"include-symbols",children:"Symbols"}),Object(i.jsx)("input",{checked:C,onChange:function(e){return S(e.target.checked)},type:"checkbox",className:"checkbox",id:"include-symbols"})]}),Object(i.jsx)("button",{onClick:function(){var e=function(e){var t="";return e.UpperCase&&(t+="ABCDEFJHIJKLMNOPQRSTUVWXYZ"),e.LowerCase&&(t+="abcdefjhijklmnopqrstuvwxyz"),e.Numbers&&(t+="0123456789"),e.Symbols&&(t+="!'^+%&/()=?_#${}[]|;:><.*-~`@,"),t}({UpperCase:h,LowerCase:O,Numbers:v,Symbols:C});M(""===e&&"You must select atleast one option"),n(function(e,t){for(var c="",s=e.length,n=0;n<t;n++){var a=Math.round(Math.random()*s);c+=e.charAt(a)}return c}(e,d))},className:"generate-btn",children:"Generate Password"})]}),Object(i.jsx)(l,{textMessage:P})]})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.ae72b05c.chunk.js.map