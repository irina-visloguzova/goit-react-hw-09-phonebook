(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[5],{86:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(37);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},92:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(86),r=a(0),c=a(9),s=a(21),o=a(1);function i(){var e=Object(c.c)(),t=Object(r.useState)(""),a=Object(n.a)(t,2),i=a[0],l=a[1],b=Object(r.useState)(""),u=Object(n.a)(b,2),j=u[0],m=u[1],d=Object(r.useState)(""),h=Object(n.a)(d,2),f=h[0],O=h[1],p=Object(r.useCallback)((function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":l(n);break;case"email":m(n);break;case"password":O(n);break;default:console.warn("error")}}),[]),v=Object(r.useCallback)((function(t){t.preventDefault(),e(Object(s.f)({name:i,email:j,password:f})),l(""),m(""),O("")}),[e,i,j,f]);return Object(o.jsx)("section",{className:"sectionForm",children:Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:v,className:"Form",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Registration"})}),Object(o.jsx)("label",{className:"Label",children:"Name"}),Object(o.jsx)("input",{type:"text",name:"name",value:i,onChange:p}),Object(o.jsx)("label",{className:"Label",children:"Email"}),Object(o.jsx)("input",{type:"email",name:"email",value:j,onChange:p}),Object(o.jsx)("label",{className:"Label",children:"Password"}),Object(o.jsx)("input",{type:"password",name:"password",value:f,onChange:p}),Object(o.jsx)("button",{type:"submit",className:"btn btnForm",children:"Submit"})]})})})}}}]);
//# sourceMappingURL=5.67da1467.chunk.js.map