(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,a){e.exports=a(46)},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),o=a.n(r),l=a(6),u=(a(42),a(11)),i=a(12),s=a(14),p=a(13),d=a(15),m=a(16),h=a(8),f=a(29),E=a.n(f),b=(a(43),a(44),a(21)),v=a(10),g="https://5d479f42992ea9001444c91f.mockapi.io/products",y=function(e){return{type:"MESSAGE_SHOW",payload:e}},O={products:[]},j="PRODUCT_ADD",C="PRODUCT_LOAD",N="PRODUCT_REPLACE",P="PRODUCT_REMOVE",A=function(e,t){switch(t){case"active":return e.filter(function(e){return!e.isActive});case"completed":return e.filter(function(e){return e.isActive});default:return e}},w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).handleSubmit=function(e){e.preventDefault(),a.props.saveProduct(e.target.productName.value,e.target.price.value,e.target.uom.value,e.target.dateCreated.value)},a.handleInputChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"col-sm-6 sm-3"},c.a.createElement("label",null,"Product Name"),c.a.createElement("input",{type:"text",name:"productName",className:"form-control",onChange:this.props.handleInputChange,value:this.props.productName})),c.a.createElement("div",{className:"col-sm-2 sm-2"},c.a.createElement("label",null,"Price"),c.a.createElement("input",{type:"text",name:"price",className:"form-control",value:this.props.price,onChange:this.props.handleInputChange})),c.a.createElement("div",{className:"col-sm-2 sm-2"},c.a.createElement("label",null,"UOM"),c.a.createElement("input",{type:"text",name:"uom",className:"form-control",onChange:this.props.handleInputChange,value:this.props.uom})),c.a.createElement("div",{className:"col-sm-2 sm-2"},c.a.createElement("label",null,"Date"),c.a.createElement("input",{type:"date",name:"dateCreated",className:"form-control",onChange:this.props.handleInputChange,value:this.props.dateCreated}))),c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit form"))}}]),t}(n.Component),D=Object(l.b)(function(e){return{products:e.product.handleInputChange}},{saveProduct:function(e,t,a,n){return function(c){c(y("Saving Product")),function(e,t,a,n){return fetch(g,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({productName:e,price:t,uom:a,dateCreated:n,isActive:!1})}).then(function(e){return e.json()})}(e,t,a,n).then(function(e){return c({type:j,payload:e})})}}})(w),S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).updateProductDetails=function(e){console.log(e)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"table-responsive-sm"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"thead-dark"},c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"ID"),c.a.createElement("th",{scope:"col"},"Product Name"),c.a.createElement("th",{scope:"col"},"Price"),c.a.createElement("th",{scope:"col"},"UoM"),c.a.createElement("th",{scope:"col"},"Created Date"),c.a.createElement("th",{scope:"col"},"Item Status"),c.a.createElement("th",{scope:"col"},"Delete"),c.a.createElement("th",{scope:"col"},"Update"))),c.a.createElement("tbody",null,this.props.products.map(function(t){return c.a.createElement("tr",{key:t.id},c.a.createElement("th",{scope:"row"},t.id),c.a.createElement("td",null,t.productName),c.a.createElement("td",null,t.price),c.a.createElement("td",null,t.uom),c.a.createElement("td",null,t.dateCreated),c.a.createElement("td",null,c.a.createElement("input",{type:"checkbox",onChange:function(){return e.props.toggleProduct(t.id)},checked:t.isActive})),c.a.createElement("td",null,c.a.createElement("span",{className:"delete-item"},c.a.createElement("button",{onClick:function(){return e.props.deleteProduct(t.id)}},"X"))),c.a.createElement("td",null,c.a.createElement("span",{className:"delete-item"},c.a.createElement("button",{onClick:function(){return e.updateProductDetails(t.id)}},"Update"))))}))))}}]),t}(n.Component),k=Object(l.b)(function(e,t){return{products:A(e.product.products,t.filter)}},{fetchProducts:function(){return function(e){e(y("Loading Products...")),fetch(g).then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:C,payload:e}}(t))})}},toggleProduct:function(e){return function(t,a){t(y("Saving product update"));var n=a().product.products.find(function(t){return t.id===e});(function(e){return fetch("".concat(g,"/").concat(e.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})})(Object(v.a)({},n,{isActive:!n.isActive})).then(function(e){return t({type:N,payload:e})})}},deleteProduct:function(e){return function(t){t(y("Product Deleting")),function(e){return fetch("".concat(g,"/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}})}(e).then(function(){return t(function(e){return{type:P,payload:e}}(e))})}}})(S),T=Object(l.b)(function(e){return{message:e.message}})(function(e){var t=e.message;return t?c.a.createElement("span",{className:"message"},t):null}),U=function(e){return c.a.createElement("div",null,c.a.createElement(m.b,{to:"/"},"All"),c.a.createElement(m.b,{to:"/active"},"Active"),c.a.createElement(m.b,{to:"/completed"},"Completed"))},I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={products:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"})),c.a.createElement(m.a,null,c.a.createElement(T,null),c.a.createElement(D,null),c.a.createElement(U,null),c.a.createElement(h.a,{path:"/:filter?",render:function(e){var t=e.match;return c.a.createElement(k,{filter:t.params.filter})}})))}}]),t}(n.Component),R=Object(l.b)(function(e){return e})(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(9),_=a(31),x=a(32),W=Object(M.combineReducers)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(v.a)({},e,{products:e.products.concat(t.payload)});case"CURRENT_UPDATE":return Object(v.a)({},e,{productName:t.payload});case C:return Object(v.a)({},e,{products:t.payload});case N:return Object(v.a)({},e,{products:e.products.map(function(e){return e.id===t.payload.id?t.payload:e})});case P:return Object(v.a)({},e,{products:e.products.filter(function(e){return e.id!==t.payload})});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGE_SHOW":return t.payload;case j:case C:case N:case P:return"";default:return e}}}),J=Object(M.createStore)(W,Object(_.composeWithDevTools)(Object(M.applyMiddleware)(x.a)));o.a.render(c.a.createElement(l.a,{store:J},c.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.3d3ef123.chunk.js.map