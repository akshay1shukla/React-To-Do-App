(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),o=c.n(s),l=(c(25),c(11)),r=c(20),i=(c(26),c(8)),b=c(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}d.defaultProps={title:"Your Title Here"};var j=function(e){var t=e.todo,c=e.onDelete;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){c(t)},children:"Delete"})]})},h=function(e){return Object(b.jsxs)("div",{className:"container",style:{minHeight:"40vh",margin:"40px auto"},children:[Object(b.jsx)("h3",{className:"my-3",children:"Todos List"}),0===e.todos.length?"No Todos to display!!":e.todos.map((function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{todo:t,onDelete:e.onDelete},t.snoo)," ",Object(b.jsx)("hr",{})]})}))]})},m=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-3",style:{position:"relative",top:"50vh",width:"100%"},children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodosList.com"})})},u=function(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)(""),r=Object(l.a)(o,2),i=r[0],d=r[1];return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{children:"Add a Todo"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a&&i?(e.addTodo(a,i),s(""),d("")):alert("Title or Description cannot be blank")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(b.jsx)("input",{type:"text",value:a,onChange:function(e){s(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(b.jsx)("input",{type:"text",value:i,onChange:function(e){d(e.target.value)},className:"form-control",id:"desc"})]}),Object(b.jsxs)("div",{className:"mb-3 form-check",children:[Object(b.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"Check me out"})]}),Object(b.jsx)("button",{type:"submit",className:"btn-sm btn-success",children:"Add Todo"})]})]})},x=function(){return Object(b.jsxs)("div",{children:["This is an about MyComponents",Object(b.jsx)("p",{children:"lorem"})]})},O=c(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am ondelete todo",e),j(o.filter((function(t){return t!==e}))),localStorage.getItem("todos",JSON.stringify(o))},c=function(e,t){console.log("I am adding this todo",e,t);var c={sno:0===o.length?0:o[o.length-1].sno+1,title:e,desc:t};j([].concat(Object(r.a)(o),[c])),console.log(c)},a=Object(n.useState)(e),s=Object(l.a)(a,2),o=s[0],j=s[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{title:"My Todos List",searchBar:!0}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{addTodo:c}),Object(b.jsx)(h,{todos:o,onDelete:t})]})}}),Object(b.jsx)(O.a,{exact:!0,path:"/about",children:Object(b.jsx)(x,{})})]}),Object(b.jsx)(m,{})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.f1292e12.chunk.js.map