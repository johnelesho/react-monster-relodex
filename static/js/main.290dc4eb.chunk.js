(this.webpackJsonprolodex=this.webpackJsonprolodex||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),o=n.n(s),a=(n(12),n(4)),i=n(5),h=n(7),u=n(6),l=(n(13),n(14),n(0)),d=function(e){var t=e.monster;return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(l.jsxs)("h1",{children:[" ",t.name," "]}),Object(l.jsx)("p",{children:t.email})]})},j=(n(16),function(e){var t=e.monsters;return Object(l.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})}),f=(n(17),function(e){var t=e.placeholder,n=e.onSearchChange;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})})}),b=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:" Monster Rolodex"}),Object(l.jsx)(f,{placeholder:"Search Monster",onSearchChange:this.onSearchChange}),Object(l.jsx)(j,{monsters:c})]})}}]),n}(c.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.290dc4eb.chunk.js.map