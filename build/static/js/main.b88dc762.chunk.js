(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(58)},33:function(e,t,a){},35:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(15),c=a.n(i);a(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(8),l=a(9),s=a(11),m=a(10),u=a(12),d=a(63),h=a(62),p=a(61),f=(a(35),a(13)),b=a(4),v=a(60),E=a(25),g=a.n(E).a.initializeApp({apiKey:"AIzaSyDxDbHDqkstYbrNIGJnVnKTI8vbUICbj7Y",authDomain:"carrito-de-compras-9ccd6.firebaseapp.com",databaseURL:"https://carrito-de-compras-9ccd6.firebaseio.com",projectId:"carrito-de-compras-9ccd6",storageBucket:"carrito-de-compras-9ccd6.appspot.com",messagingSenderId:"787501379181"}),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(f.a)(Object(f.a)(a))),a.state={isOpen:!1,items:[]},a.itemsRef=g.database().ref("addCarrito"),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"componentDidMount",value:function(){var e=this,t=this.state.items;this.itemsRef.on("child_added",function(a){t.push({key:a.key,id:a.val().id,title:a.val().title,price:a.val().price}),e.setState({items:t})}),this.itemsRef.on("child_removed",function(a){for(var n=0;n<t.length;n++)t[n].key===a.key&&t.splice(n,1);e.setState({items:t})})}},{key:"render",value:function(){var e=this.state.items.length;return r.a.createElement("div",null,r.a.createElement(b.l,{color:"light",light:!0,expand:"md"},r.a.createElement(v.a,{to:"/home"},r.a.createElement("p",null,"Productos")),r.a.createElement(b.m,{onClick:this.toggle}),r.a.createElement(b.g,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(b.i,{className:"ml-auto",navbar:!0},r.a.createElement(b.j,null,r.a.createElement("div",null,r.a.createElement(v.a,{to:"/addCart"},r.a.createElement("p",null,"Carrito: ",r.a.createElement(b.a,{pill:!0},e))))),r.a.createElement(b.j,null,r.a.createElement(b.k,null))))))}}]),t}(r.a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),this.props.children)}}]),t}(n.Component),O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={items:[]},e.datosCarrito=e.datosCarrito.bind(Object(f.a)(Object(f.a)(e))),e.itemsRef=g.database().ref("items"),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"datosCarrito",value:function(e){var t=g.database().ref().child("addCarrito").push().key;g.database().ref("addCarrito/".concat(t)).set({id:e.id,title:e.title,price:e.price})}},{key:"componentDidMount",value:function(){var e=this,t=this.state.items;this.itemsRef.on("child_added",function(a){t.push({id:a.val().id,title:a.val().title,price:a.val().price}),e.setState({items:t})})}},{key:"render",value:function(){var e=this,t=this.state.items.map(function(t,a){return r.a.createElement(b.f,{sm:"6",key:a,style:{padding:"2em"}},r.a.createElement(b.c,{body:!0},r.a.createElement(b.e,null,r.a.createElement("strong",null,"Nombre: ")," ",t.title),r.a.createElement(b.d,null,r.a.createElement("strong",null,"Precio: ")," ",t.price),r.a.createElement(b.b,{style:{backgroundColor:"turquoise"},onClick:function(){return e.datosCarrito(t)}},"Agregar al carrito")))});return r.a.createElement("div",null,r.a.createElement("h1",null,"Productos"),r.a.createElement(b.n,{style:{marginRight:"0px"}},t))}}]),t}(n.Component),j=(a(53),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={items:[]},e.itemsRef=g.database().ref("addCarrito"),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"sumaTotal",value:function(){for(var e=this.state.items,t=0,a=0;a<e.length;a++)t+=e[a].price;return Math.round(t)}},{key:"componentDidMount",value:function(){var e=this,t=this.state.items;this.itemsRef.on("child_added",function(a){t.push({key:a.key,id:a.val().id,title:a.val().title,price:a.val().price}),e.setState({items:t})}),this.itemsRef.on("child_removed",function(a){for(var n=0;n<t.length;n++)t[n].key===a.key&&t.splice(n,1);e.setState({items:t})})}},{key:"borrar",value:function(e){this.itemsRef.child(e.key).remove()}},{key:"render",value:function(){var e=this;return r.a.createElement(b.h,null,r.a.createElement("h2",{style:{marginBottom:"2em",marginTop:"1em"}},"Tu Carrito de Compras"),r.a.createElement(b.n,null,this.state.items.map(function(t,a){return r.a.createElement(b.f,{xs:"12",className:"contenedor",key:a},r.a.createElement("p",{style:{marginLeft:"2em"}},r.a.createElement("strong",null,"Nombre: "),t.title),r.a.createElement("p",{style:{marginLeft:"2em"}},r.a.createElement("strong",null,"Precio: "),t.price),r.a.createElement(b.b,{style:{marginLeft:"2em"},onClick:function(){return e.borrar(t)}},"borrar"))})),r.a.createElement("p",null,r.a.createElement("strong",null,"Total: ")," $",this.sumaTotal()))}}]),t}(n.Component)),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(k,null,r.a.createElement(h.a,{path:"/",component:function(){return r.a.createElement(p.a,{to:"home"})}}),r.a.createElement(h.a,{path:"/home",component:O}),r.a.createElement(h.a,{path:"/addCart",component:j})))}}]),t}(n.Component);a(56);c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.b88dc762.chunk.js.map