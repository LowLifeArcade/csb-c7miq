(this["webpackJsonpacademind-clone"]=this["webpackJsonpacademind-clone"]||[]).push([[0],{29:function(t,e,c){},35:function(t,e,c){},36:function(t,e,c){},37:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c(16),i=c.n(n),a=c(17),d=c(18),j=c(23),o=c(21),u=c(8),s=c(2),l=c(5),b=c(13),O=c(22),p=Object(r.createContext)({products:[{id:"p1",title:"Gaming Mouse",price:29.99},{id:"p2",title:"Harry Potter 3",price:9.99},{id:"p3",title:"Used plastic bottle",price:.99},{id:"p4",title:"Half-dried plant",price:2.99}],cart:[],addProductToCart:function(t){},removeProductFromCart:function(t){}}),h=c(1),x={products:[{id:"p1",title:"Gaming Mouse",price:29.99},{id:"p2",title:"Harry Potter 3",price:9.99},{id:"p3",title:"Used plastic bottle",price:.99},{id:"p4",title:"Half-dried plant",price:2.99}],cart:[]},m=function(t){var e=t.children,c=Object(r.useState)(x),n=Object(O.a)(c,2),i=n[0],a=n[1],d=i.products,j=i.cart;return Object(h.jsx)(p.Provider,{value:{products:d,cart:j,addProductToCart:function(t){var e=Object(b.a)(j),c=e.findIndex((function(e){return e.id===t.id}));if(c<0)e.push(Object(l.a)(Object(l.a)({},t),{},{quantity:1}));else{var r=Object(l.a)({},e[c]);r.quantity++,e[c]=r}a((function(t){return Object(l.a)(Object(l.a)({},t),{},{cart:e})}))},removeProductFromCart:function(t){var e=Object(b.a)(j),c=e.findIndex((function(e){return e.id===t})),r=Object(l.a)({},e[c]);r.quantity--,r.quantity<=0?e.splice(c,1):e[c]=r,a(Object(l.a)(Object(l.a)({},i),{},{cart:e}))}},children:e})},f=(c(29),function(t){return Object(h.jsx)("header",{className:"main-navigation",children:Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/",children:"Products"})}),Object(h.jsx)("li",{children:Object(h.jsxs)(u.b,{to:"/cart",children:["Cart (",t.cartItemNumber,")"]})})]})})})});c(35);var v=function(){var t=Object(r.useContext)(p),e=t.cart,c=t.products,n=t.addProductToCart;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{cartItemNumber:e.reduce((function(t,e){return t+e.quantity}),0)}),Object(h.jsx)("main",{className:"products",children:Object(h.jsx)("ul",{children:c.map((function(t){return Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:t.title})," - $",t.price]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){return n(t)},children:"Add to Cart"})})]},t.id)}))})})]})};c(36);var C=function(){var t=Object(r.useContext)(p),e=t.cart,c=t.removeProductFromCart;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{cartItemNumber:e.reduce((function(t,e){return t+e.quantity}),0)}),Object(h.jsxs)("main",{className:"cart",children:[e.length<=0&&Object(h.jsx)("p",{children:"No Item in the Cart!"}),Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:t.title})," - $",t.price," (",t.quantity,")"]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){return c(t.id)},children:"Remove from Cart"})})]},t.id)}))})]})]})},y=function(t){Object(j.a)(c,t);var e=Object(o.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(h.jsx)(m,{children:Object(h.jsx)(u.a,{children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:"/",component:v,exact:!0}),Object(h.jsx)(s.a,{path:"/cart",component:C,exact:!0})]})})})}}]),c}(r.Component),P=y,g=document.getElementById("root");i.a.render(Object(h.jsx)(r.StrictMode,{children:Object(h.jsx)(P,{})}),g)}},[[37,1,2]]]);
//# sourceMappingURL=main.5d412206.chunk.js.map