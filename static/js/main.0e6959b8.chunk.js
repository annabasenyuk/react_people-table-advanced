(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var c=r(26),n=r(9),a=(r(36),r(37),r(3)),s=r(4),i=r(6),l=r(5),o=r(0),j=r(8),u=r(10),d=r.n(u),b=r(24),h=r(27);function O(e,t){var r=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(l.a)(e,2),c=t[0],n=t[1];null===n?r.delete(c):Array.isArray(n)?(r.delete(c),n.forEach((function(e){r.append(c,e)}))):r.set(c,n)})),r.toString()}var x=r(1),m=["children","params"],p=function(e){var t=e.children,r=e.params,c=Object(h.a)(e,m),a=Object(n.d)(),s=Object(l.a)(a,1)[0];return Object(x.jsx)(n.b,Object(b.a)(Object(b.a)({to:{search:O(s,r)}},c),{},{children:t}))},f=function(e){return e.All="",e.Male="m",e.Female="f",e}({}),v=["16","17","18","19","20"],N=function(e){var t=e.searchParams,r=e.setSearchParams,c=e.filter,n=t.getAll("centuries")||[];return Object(x.jsxs)("nav",{className:"panel",children:[Object(x.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(x.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:Object.entries(f).map((function(e){var t=Object(l.a)(e,2),r=t[0],n=t[1];return Object(x.jsx)(p,{params:{sex:n||null},className:d()({"is-active":(null===c||void 0===c?void 0:c.sex)===n}),children:r},r)}))}),Object(x.jsx)("div",{className:"panel-block",children:Object(x.jsxs)("p",{className:"control has-icons-left",children:[Object(x.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:null===c||void 0===c?void 0:c.query,onChange:function(e){var c=O(t,{query:e.target.value||null});r(c)}}),Object(x.jsx)("span",{className:"icon is-left",children:Object(x.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(x.jsx)("div",{className:"panel-block",children:Object(x.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(x.jsx)("div",{className:"level-left",children:v.map((function(e){return Object(x.jsx)(p,{"data-cy":"century",className:d()("button mr-1",{"is-info":n.includes(e)}),params:{centuries:n.includes(e)?n.filter((function(t){return t!==e})):[].concat(Object(j.a)(n),[e])},children:e},e)}))}),Object(x.jsx)("div",{className:"level-right ml-4",children:Object(x.jsx)(p,{"data-cy":"centuryALL",className:d()("button is-success",{"is-outlined":n.length}),params:{centuries:null},children:"All"})})]})}),Object(x.jsx)("div",{className:"panel-block",children:Object(x.jsx)(p,{className:"button is-link is-outlined is-fullwidth",params:{centuries:null,sex:null,query:null},children:"Reset all filters"})})]})},g=(r(39),function(){return Object(x.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(x.jsx)("div",{className:"Loader__content"})})}),y=function(e){var t=e.person;return Object(x.jsx)(n.b,{to:"/people/".concat(t.slug),className:d()({"has-text-danger":"f"===t.sex}),children:"".concat(t.name)})},w=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({});function S(e,t,r){var c={sort:null,order:null};return e||(c.sort=r),e&&e!==r&&(c.sort=r),e!==r||t||(c.sort=r,c.order="desc"),c}var k=function(e){var t=e.people,r=e.searchParams,c=Object(a.q)().personSlug,n=r.get("order")||"",s=r.get("sort")||"";return Object(x.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object.entries(w).map((function(e){var t=Object(l.a)(e,2),r=t[0],c=t[1];return Object(x.jsx)("th",{children:Object(x.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[r,Object(x.jsx)(p,{params:S(s,n,c),children:Object(x.jsx)("span",{className:"icon",children:Object(x.jsx)("i",{className:d()("fas",{"fa-sort":s!==r,"fa-sort-up":s===r&&!n,"fa-sort-down":s===r&&n})})})})]})},r)})),Object(x.jsx)("th",{children:"Mother"}),Object(x.jsx)("th",{children:"Father"})]})}),Object(x.jsx)("tbody",{children:t.map((function(e){var r=t.find((function(t){return t.name===e.motherName})),n=t.find((function(t){return t.name===e.fatherName}));return Object(x.jsxs)("tr",{"data-cy":"person",className:d()({"has-background-warning":c===e.slug}),children:[Object(x.jsx)("td",{children:Object(x.jsx)(y,{person:e})}),Object(x.jsx)("td",{children:"".concat(e.sex)}),Object(x.jsx)("td",{children:"".concat(e.born)}),Object(x.jsx)("td",{children:"".concat(e.died)}),Object(x.jsx)("td",{children:r?Object(x.jsx)(y,{person:r}):e.motherName||"-"}),Object(x.jsx)("td",{children:n?Object(x.jsx)(y,{person:n}):e.fatherName||"-"})]},e.slug)}))})]})},P="https://mate-academy.github.io/react_people-table/api/people.json";function q(e){return new Promise((function(t){return setTimeout(t,e)}))}function L(){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(500).then((function(){return fetch(P)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),r=t[0],c=t[1],a=Object(o.useState)(!1),u=Object(l.a)(a,2),d=u[0],b=u[1],h=Object(o.useState)(""),O=Object(l.a)(h,2),m=O[0],p=O[1],f=Object(n.d)(),v=Object(l.a)(f,2),y=v[0],S=v[1],P=function(e,t){var r=Object(j.a)(e);return t.sex&&(r=r.filter((function(e){return e.sex===t.sex}))),t.centuries.length&&(r=r.filter((function(e){return t.centuries.includes(Math.ceil(e.born/100).toString())}))),t.query&&(r=r.filter((function(e){var r,c;return e.name.toLowerCase().includes(t.query)||(null===(r=e.motherName)||void 0===r?void 0:r.toLowerCase().includes(t.query))||(null===(c=e.fatherName)||void 0===c?void 0:c.toLowerCase().includes(t.query))}))),t.sort&&r.sort((function(e,r){switch(t.sort){case w.Name:case w.Sex:return e[t.sort].localeCompare(r[t.sort]);case w.Born:case w.Died:return e[t.sort]-r[t.sort];default:return 0}})),t.order&&r.reverse(),r}(r,{sort:y.get("sort")||"",order:y.get("order")||"",sex:y.get("sex")||"",query:y.get("query")||"",centuries:y.getAll("centuries")||[]}),q=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,L();case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),p("Something went wrong");case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){q()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{className:"title",children:"People Page"}),Object(x.jsx)("div",{className:"block",children:Object(x.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(x.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(x.jsx)(N,{searchParams:y,setSearchParams:S})}),Object(x.jsx)("div",{className:"column",children:Object(x.jsxs)("div",{className:"box table-container",children:[d&&Object(x.jsx)(g,{}),m&&Object(x.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:m}),!d&&!r.length&&Object(x.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!!r.length&&Object(x.jsx)(k,{people:P,searchParams:y})]})})]})})]})},C=function(){var e=function(e,t){return Object(x.jsx)(n.c,{"aria-current":"page",className:function(e){var t=e.isActive;return d()("navbar-item",{"has-background-grey-lighter":t})},to:e,children:t})};return Object(x.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"navbar-brand",children:[e("/","Home"),e("/people","People")]})})})},E=function(){return Object(x.jsx)("h1",{className:"title",children:"Home Page"})},_=function(){return Object(x.jsx)("h1",{className:"title",children:"Page not found"})},M=(r(40),function(){return Object(x.jsxs)("div",{"data-cy":"app",children:[Object(x.jsx)(C,{}),Object(x.jsx)("div",{className:"section",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)(a.d,{children:[Object(x.jsx)(a.b,{path:"/home",element:Object(x.jsx)(a.a,{to:"/"})}),Object(x.jsx)(a.b,{index:!0,element:Object(x.jsx)(E,{})}),Object(x.jsxs)(a.b,{path:"people",children:[Object(x.jsx)(a.b,{index:!0,element:Object(x.jsx)(F,{})}),Object(x.jsx)(a.b,{path:":personSlug?",element:Object(x.jsx)(F,{})})]}),Object(x.jsx)(a.b,{path:"*",element:Object(x.jsx)(_,{})})]})})})]})});Object(c.createRoot)(document.getElementById("root")).render(Object(x.jsx)(n.a,{children:Object(x.jsx)(M,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.0e6959b8.chunk.js.map