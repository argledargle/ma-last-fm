(this["webpackJsonpma-last-fm"]=this["webpackJsonpma-last-fm"]||[]).push([[0],{19:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var c,a,r,i,o,s,l,u,b=e(0),j=e.n(b),h=e(11),d=e.n(h),f=(e(19),e(5)),m=e(2),p=e(4),x=e.n(p),O=e(6),v=function(){var n=Object(O.a)(x.a.mark((function n(t,e){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=".concat(t,"&api_key=6850c857aa62a615c85ecc093e32c107&format=json")).then((function(n){return n.json()})).then((function(n){return e(n)}));case 2:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),g=e(3),k=e(1),w=g.a.button(c||(c=Object(m.a)(["\n  font-size: calc(10px + 2vmin);\n"]))),y=function(n){var t=n.className,e=n.id,c=n.type,a=n.onClick,r=n.name,i=n.disabled;return Object(k.jsxs)(w,{id:e,className:t,name:r,type:c,onClick:a,disabled:i,children:[" ",r]})},C=g.a.input(a||(a=Object(m.a)(["\n  font-size: calc(10px + 2vmin);\n"]))),S=function(n){var t=n.id,e=n.className,c=n.name,a=n.placeholder,r=n.value,i=n.onChange;return Object(k.jsx)(C,{id:t,className:e,name:c,placeholder:a,value:r,onChange:function(n){i(n.target.value)}})},N=function(n){var t=n.callback,e=b.useState(""),c=Object(f.a)(e,2),a=c[0],r=c[1];function i(n){n.preventDefault(),v(a,t)}return Object(k.jsxs)("form",{onSubmit:i,children:[Object(k.jsx)(S,{id:"last-fm-search-input",className:"search",placeholder:"Pitbull",value:a,onChange:r})," ",Object(k.jsx)(y,{id:"submit-button",type:"submit",name:"Click to search",onClick:i,disabled:""===a})]})},F=function(){var n=Object(O.a)(x.a.mark((function n(t,e){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=".concat(t,"&api_key=6850c857aa62a615c85ecc093e32c107&format=json")).then((function(n){return n.json()})).then((function(n){return e(n)}));case 2:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),I=g.a.div(r||(r=Object(m.a)(["\n  color: white;\n  text-decoration: none;\n  padding: 0 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),z=g.a.p(i||(i=Object(m.a)(["\n  text-align: center;;\n  min-width: 17rem;\n  white-space: nowrap;\n"]))),P=function(n){var t=n.cardContent,e=n.callback;return Object(k.jsxs)(I,{children:[Object(k.jsx)(z,{children:t.name}),Object(k.jsx)(y,{onClick:function(){F(t.name,e)},name:"Show more"})]})},T=g.a.div(o||(o=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  overflow: auto;\n  margin: 10px;\n"]))),_=function(n){var t=n.content,e=n.callback;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("p",{children:"Click on any of the artists below to learn more about them"}),Object(k.jsx)(T,{children:t.results.artistmatches.artist.map((function(n,t){return Object(k.jsx)(P,{callback:e,cardContent:n},t)}))})]})},A=g.a.div(s||(s=Object(m.a)(["\n  width: 100%;\n"]))),B=g.a.a(l||(l=Object(m.a)(["\n  text-decoration: none;\n  color: white;\n  text-align: center;\n  display: block;\n"]))),D=function(n){var t=n.substr(0,250);return t.substr(0,Math.min(t.length,t.lastIndexOf(" "))).concat("...")},J=function(n){var t=n.content.artist;return Object(k.jsxs)(A,{children:[Object(k.jsxs)("h3",{children:["Info for ",t.name]}),Object(k.jsx)("p",{children:D(t.bio.content)}),Object(k.jsxs)(B,{href:t.bio.links.link.href,target:"_blank",children:["Click here to learn more about ",t.name]})]})},L=g.a.div(u||(u=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"])));var M=function(){var n=b.useState(null),t=Object(f.a)(n,2),e=t[0],c=t[1],a=b.useState(null),r=Object(f.a)(a,2),i=r[0],o=r[1];return Object(k.jsxs)(L,{className:"App",children:[Object(k.jsx)("h1",{children:"ma-last-fm"}),Object(k.jsx)("h2",{children:"An app for searching last-fm"}),Object(k.jsx)("p",{children:"Type an artist name below to get started"}),Object(k.jsx)(N,{callback:c}),null!==e?Object(k.jsx)(_,{callback:o,content:e}):"",null!==i?Object(k.jsx)(J,{content:i}):""]})},E=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,27)).then((function(t){var e=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;e(n),c(n),a(n),r(n),i(n)}))};d.a.render(Object(k.jsx)(j.a.StrictMode,{children:Object(k.jsx)(M,{})}),document.getElementById("root")),E()}},[[26,1,2]]]);
//# sourceMappingURL=main.6e90bb34.chunk.js.map