(this["webpackJsonptest-comono"]=this["webpackJsonptest-comono"]||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},19:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(13),c=n.n(a),l=(n(19),n(0)),r=n.n(l),o=function(e){var t=e.object;return r.a.createElement(l.Fragment,null,r.a.createElement("div",{className:"container mt-5"},r.a.createElement("table",{className:"table table-striped table-dark table-bordered "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Last Name"),r.a.createElement("td",null,"Age"),r.a.createElement("td",null,"Sport"))),t.map((function(e){return r.a.createElement("tbody",{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.age),r.a.createElement("td",null,e.sport)))})))))},s=n(3),u=n.n(s),m=n(2),b=function(){var e=Object(l.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)([]),s=Object(m.a)(c,2),b=s[0],i=s[1],E=Object(l.useState)([]),d=Object(m.a)(E,2),f=d[0],j=d[1],p=Object(l.useState)([]),g=Object(m.a)(p,2),O=g[0],N=g[1],h=Object(l.useState)(!0),S=Object(m.a)(h,2),k=S[0],v=S[1];return Object(l.useEffect)((function(){u.a.get("https://json-server-now-nine.now.sh/db.json/").then((function(e){v(!1),N(e.data.subscritors),console.log("datos de la peticion"),console.log(e.data.subscritors)})).catch((function(e){console.log(e)}))}),[]),!0===k?r.a.createElement("h1",null,"Loading...."):r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{object:O}),r.a.createElement("div",{className:"container mx-auto  pl-4 pr-4"},r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:" col btn btn-info mx-1",onClick:function(){return a(O.sort((function(e,t){return e.name>t.name?1:-1}))),r.a.createElement(o,{object:n})}},"Sort by name "),r.a.createElement("button",{className:"col btn btn-secondary mx-1",onClick:function(){return i(O.sort((function(e,t){return e.age>t.age?1:-1}))),r.a.createElement(o,{object:b})}},"Sort by age "),r.a.createElement("button",{className:"col btn btn-success mx-1",onClick:function(){return j(O.sort((function(e,t){return e.sport>t.sport?1:-1}))),r.a.createElement(o,{object:f})}},"Sort by sport "))))};c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.de77777f.chunk.js.map