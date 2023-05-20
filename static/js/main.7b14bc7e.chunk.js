(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(4),l=c(2),r=c(3),i=c.n(r),d=c(1),o=(c(13),c(14),c(5)),j=c.n(o),u=c(0),b=function(e){var t=e.todos,c=e.openModal,s=e.reset,a=Object(d.useState)(0),n=Object(l.a)(a,2),r=n[0],i=n[1];return 0!==r&&null===s&&i(0),Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":r===e.id}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:e.id}),Object(u.jsx)("td",{className:"is-vcentered",children:Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:j()({"fas fa-check":e.completed})})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){i(e.id),c(e)}(e)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},h=function(e){var t=e.handleSelect,c=e.searchQuery,s=Object(d.useState)(""),a=Object(l.a)(s,2),n=a[0],r=a[1];return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(u.jsx)("option",{value:"all",selected:!0,children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){return t=e.target.value,c(t),void r(t);var t},value:n}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})};function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var O=function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})},x=function(e){var t=e.todoModal,c=e.resetTodoModal,s=Object(d.useState)(null),a=Object(l.a)(s,2),r=a[0],o=a[1];return Object(d.useEffect)((function(){var e=t.id,c=t.title,s=t.completed,a=function(){var a=Object(n.a)(i.a.mark((function a(){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l=t.userId,m("/users/".concat(l));case 2:n=a.sent,o({id:e,title:c,completed:s,user:n});case 4:case"end":return a.stop()}var l}),a)})));return function(){return a.apply(this,arguments)}}();a()}),[]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),null===r?Object(u.jsx)(O,{}):Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===r||void 0===r?void 0:r.id)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){o(null),c(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===r||void 0===r?void 0:r.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==r&&void 0!==r&&r.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:null!==r&&void 0!==r&&r.user?r.user.email:"",children:(null===r||void 0===r?void 0:r.user)&&r.user.name})]})]})]})]})},f=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(null),r=Object(l.a)(a,2),o=r[0],j=r[1],f=Object(d.useState)(""),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(d.useState)(""),g=Object(l.a)(y,2),k=g[0],S=g[1];Object(d.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/todos");case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c]);var w=Object(d.useMemo)((function(){var e=c;"active"===v&&(e=e.filter((function(e){return!e.completed}))),"completed"===v&&(e=e.filter((function(e){return Boolean(e.completed)})));var t=k.trim();return k&&(e=e.filter((function(e){return e.title.includes(t)}))),e}),[c,v,k]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{handleSelect:function(e){N(e)},searchQuery:function(e){S(e)}})}),Object(u.jsxs)("div",{className:"block",children:[!c.length&&Object(u.jsx)(O,{}),Object(u.jsx)(b,{todos:w,openModal:function(e){j(e)},reset:o})]})]})})}),null!==o&&Object(u.jsx)(x,{todoModal:o,resetTodoModal:function(e){j(e)}})]})};a.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7b14bc7e.chunk.js.map