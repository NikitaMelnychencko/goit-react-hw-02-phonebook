(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={Contact:"Contacts_Contact__1W9R5"}},13:function(e,t,n){e.exports={Filter:"Filter_Filter__3h1Os"}},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),s=n(2),o=n(11),l=n(15),u=n(4),d=n(5),m=n(7),h=n(6),b=n(8),j=n.n(b),f=n(0),p=function(e){var t=e.children,n=e.title;return Object(f.jsx)("section",{className:j.a.Section,children:Object(f.jsxs)("div",{className:j.a.Container,children:[Object(f.jsx)("h2",{className:j.a.Title,children:n}),t]})})},O=n(3),C=n.n(O),x=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(s.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:C.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:C.a.Form,children:["Name",Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(f.jsxs)("label",{className:C.a.Form,children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(f.jsx)("button",{className:C.a.Button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=x,S=n(10),g=n.n(S),_=function(e){var t=e.name,n=e.number,a=e.id,c=e.deleteContact;return Object(f.jsxs)("li",{className:g.a.Contact,children:[Object(f.jsxs)("p",{children:[t,":",n]}),Object(f.jsx)("button",{onClick:function(){return c(a)},children:"Delete"})]})},y=function(e){var t=e.contacts,n=e.deleteContact;return Object(f.jsx)("ul",{children:t.length>0&&t.map((function(e){return Object(f.jsx)(_,{name:e.name,number:e.number,id:e.id,deleteContact:n},e.id)}))})},F=n(13),A=n.n(F),N=function(e){var t=e.value,n=e.onChange;return Object(f.jsxs)("label",{className:A.a.Filter,children:["Find contacts by name",Object(f.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:n,value:t})]})},w=n(14),k=(n(23),n(24),n(16)),z=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(t){var n=e.state.contacts.filter((function(e){return e.name.includes(t.name)}));if(n.length>0)Object(w.alert)({title:"Alert",text:"".concat(n[0].name," is already in contacts")});else{var a={id:Object(k.a)()};e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[Object(o.a)(Object(o.a)({},a),t)])}}))}},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(s.a)({},a,c))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.filterContacts=function(){var t=e.state.filter.toLowerCase();return e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.filterContacts();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p,{title:"Phonebook",children:Object(f.jsx)(v,{onSubmit:this.formSubmitHandler})}),Object(f.jsxs)(p,{title:"Contacts",children:[Object(f.jsx)(N,{value:this.state.filter,onChange:this.handleChange}),Object(f.jsx)(y,{contacts:e,deleteContact:this.deleteContact})]})]})}}]),n}(a.Component),Z=z;n(25);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Z,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={SearchForm:"Search_SearchForm__Wiv6-",Button:"Search_Button__3ja2e",Form:"Search_Form__b3qFz"}},8:function(e,t,n){e.exports={Section:"Section_Section__3cE7g",Container:"Section_Container__2Jawv",Title:"Section_Title__1Rg-m"}}},[[26,1,2]]]);
//# sourceMappingURL=main.cffda198.chunk.js.map