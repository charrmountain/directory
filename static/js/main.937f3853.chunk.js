(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l);a(22);var o=function(){return r.a.createElement("h1",{className:"title"},"Employee Directory")},s=a(12),i=a(13),m=a(16),u=a(15),p=a(14),h=a.n(p),E=function(){return h.a.get("https://randomuser.me/api/?results=10")},f=(a(40),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={employees:[],search:"",sortDirection:"",col:""},e.employeeSearch=function(t){e.setState({search:t.target.value})},e.renderEmployees=function(){return e.filteredUsers().sort(e.sortEmployees).map((function(e,t){return r.a.createElement("tr",{className:"employeeRow",key:t},r.a.createElement("td",null,r.a.createElement("img",{src:e.image,alt:"employee"})),r.a.createElement("td",null,e.first),r.a.createElement("td",null,e.last),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone))}))},e.employeeSort=function(t){e.state.col===t&&"ascending"===e.state.sortDirection?e.setState({sortDirection:"descending",col:t}):e.setState({sortDirection:"ascending",col:t})},e.sortEmployees=function(t,a){return t[e.state.col]<a[e.state.col]?"ascending"===e.state.sortDirection?-1:1:t[e.state.col]>a[e.state.col]?"ascending"===e.state.sortDirection?1:-1:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){var a=t.data.results.map((function(e){return{first:e.name.first,last:e.name.last,email:e.email,phone:e.phone,image:e.picture.medium}}));e.setState({employees:a})})).catch((function(e){return console.log(e)}))}},{key:"filteredUsers",value:function(){var e=this.state.search.toLowerCase();return this.state.employees.filter((function(t){return t.first.toLowerCase().includes(e)||t.last.toLowerCase().includes(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"employees"},r.a.createElement("div",{className:"table"},r.a.createElement("input",{onChange:this.employeeSearch,type:"search",className:"searchbar",placeholder:"Search By Name"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"image",scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},r.a.createElement("span",{className:"column",onClick:function(){e.employeeSort("first")}},"First")),r.a.createElement("th",{scope:"col"},r.a.createElement("span",{className:"column",onClick:function(){return e.employeeSort("last")}},"Last")),r.a.createElement("th",{scope:"col"},r.a.createElement("span",{className:"column",onClick:function(){return e.employeeSort("email")}},"Email")),r.a.createElement("th",{scope:"col"},r.a.createElement("span",{className:"column",onClick:function(){return e.employeeSort("phone")}},"Phone")))),r.a.createElement("tbody",null,this.renderEmployees())))))}}]),a}(r.a.Component));var d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement(f,null))};a(41);c.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.937f3853.chunk.js.map