(this["webpackJsonpassignment-10"]=this["webpackJsonpassignment-10"]||[]).push([[0],{108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(22),s=c.n(r),o=(c(77),c(11)),i=(c(78),c(79),c(132)),l=c(144),j=c(134),d=c(138),b=c(136),h=c(135),m=c(139),u=c(137),O=c(8),x=c(2),p=Object(i.a)({root:{maxWidth:345}}),f=function(e){var t=e.book,c=t.bookName,a=t.price,n=t.imageURL,r=t.authorName,s=t._id,o=p(),i=Object(O.g)();return Object(x.jsx)("div",{className:"col-md-4 col-sm-12 mt-5",children:Object(x.jsxs)(l.a,{className:o.root,id:"cardStyle",children:[Object(x.jsxs)(j.a,{children:[Object(x.jsx)(h.a,{id:"cardMedia",component:"img",alt:"Contemplative Reptile",height:"140",image:n,title:"Contemplative Reptile"}),Object(x.jsxs)(b.a,{children:[Object(x.jsx)(u.a,{gutterBottom:!0,variant:"h6",component:"h5",children:c}),Object(x.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",children:r})]})]}),Object(x.jsxs)(d.a,{children:[Object(x.jsxs)("h4",{children:[Object(x.jsx)("span",{children:"$"}),a]}),Object(x.jsx)(m.a,{onClick:function(){return function(e){i.push("/book/".concat(e))}(s)},style:{width:"100px",marginLeft:"40%"},variant:"contained",size:"small",color:"secondary",children:"Buy Now"})]})]})})},g=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("https://floating-wildwood-70864.herokuapp.com/books").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"row",children:c.map((function(e){return Object(x.jsx)(f,{book:e},e._id)}))})})},v=c(29),N=c(19),y=c(66),w=function(e){var t=e.children,c=Object(y.a)(e,["children"]),n=Object(a.useContext)(_),r=Object(o.a)(n,1)[0];return Object(x.jsx)(O.b,Object(N.a)(Object(N.a)({},c),{},{render:function(e){var c=e.location;return r.email?t:Object(x.jsx)(O.a,{to:{pathname:"/login",state:{from:c}}})}}))},k=(c(85),c(142)),C=c(140),S=c(26),B=(c(86),{apiKey:"AIzaSyDdY-zaHrzUXvQERj7FtOSdY0rfWFeDVg0",authDomain:"books-store-4c693.firebaseapp.com",projectId:"books-store-4c693",storageBucket:"books-store-4c693.appspot.com",messagingSenderId:"545879240046",appId:"1:545879240046:web:4314c4ff3c605eada2e57f"});S.a.apps.length?S.a.app():S.a.initializeApp(B);var P=function(){var e=Object(a.useContext)(_),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)({name:"",email:"",password:"",error:"",success:!1}),d=Object(o.a)(j,2),b=d[0],h=d[1];console.log(c);var m=new S.a.auth.GoogleAuthProvider,u=Object(O.g)(),p=(Object(O.h)().state||{from:{pathname:"/"}}).from,f=function(e){var t=!0;if("email"===e.target.name&&(t=/\S+@\S+\.\S+/.test(e.target.value)),"name"===e.target.name&&(t=e.target.value),"password"===e.target.name){var c=e.target.value.length>=6,a=/\d{1}/.test(e.target.value);t=c&&a}if("confirm_password"===e.target.name){var n=e.target.value.length>=6,r=/\d{1}/.test(e.target.value);t=n&&r}if(console.log(!1,"Passwords don't match."),t){var s=Object(N.a)({},b);s[e.target.name]=e.target.value,h(s)}},g=function(e){S.a.auth().currentUser.updateProfile({displayName:e}).then((function(){console.log("update successfully user name")})).catch((function(e){console.log(e)}))};return Object(x.jsxs)("div",{style:{border:"3px solid cyan",padding:"30px",width:"500px",background:"#e9ecef42",margin:"50px auto",borderRadius:"7px"},children:[Object(x.jsxs)(k.a,{onSubmit:function(e){e.preventDefault(),b.email&&b.password&&S.a.auth().createUserWithEmailAndPassword(b.email,b.password).then((function(e){var t=Object(N.a)({},b);t.error="",t.success=!0,h(t),g(b.name),u.replace(p)})).catch((function(e){var t=Object(N.a)({},b);t.error=e.message,t.success=!1,h(t),n(t)})),!i&&b.email&&b.password&&S.a.auth().signInWithEmailAndPassword(b.email,b.password).then((function(e){var t=Object(N.a)({},b);t.error="",t.success=!0,h(t),n(e.user),u.replace(p),console.log(e.user)})).catch((function(e){var t=Object(N.a)({},b);t.error=e.message,t.success=!1,h(t)}))},children:[Object(x.jsx)(k.a.Group,{controlId:"formBasicCheckbox",children:Object(x.jsx)(k.a.Check,{type:"checkbox",onChange:function(){return l(!i)},label:"New User Sign Up"})}),i&&Object(x.jsxs)(k.a.Group,{controlId:"formBasicName",children:[Object(x.jsx)(k.a.Label,{children:"User Name"}),Object(x.jsx)(k.a.Control,{name:"name",onBlur:f,type:"text",placeholder:"Enter Your Name",required:!0})]}),Object(x.jsxs)(k.a.Group,{controlId:"formBasicEmail",children:[Object(x.jsx)(k.a.Label,{children:"Email address"}),Object(x.jsx)(k.a.Control,{name:"email",onBlur:f,type:"email",placeholder:"Enter email",required:!0}),Object(x.jsx)(k.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(x.jsxs)(k.a.Group,{controlId:"formBasicPassword",children:[Object(x.jsx)(k.a.Label,{children:"Password"}),Object(x.jsx)(k.a.Control,{name:"password",onBlur:f,type:"password",placeholder:"Password",required:!0})]}),i&&Object(x.jsxs)(k.a.Group,{controlId:"formBasicConfirmPassword",children:[Object(x.jsx)(k.a.Label,{children:"Confirm Password"}),Object(x.jsx)(k.a.Control,{name:"confirm_password",onBlur:f,type:"password",placeholder:"Confirm Your Password",required:!0})]}),Object(x.jsx)(C.a,{variant:"primary",type:"submit",children:"Submit"}),Object(x.jsx)("hr",{}),Object(x.jsx)(C.a,{style:{marginTop:"20px"},onClick:function(){S.a.auth().signInWithPopup(m).then((function(e){var t=e.user,c=t.displayName,a=t.email;n({name:c,email:a}),u.replace(p)})).catch((function(e){var t=e.code,c=e.message,a=e.email,n=e.credential;console.log(t,c,a,n)}))},children:"Continue with Google "})]}),Object(x.jsx)("p",{style:{color:"red"},children:b.error}),b.success&&Object(x.jsxs)("p",{style:{color:"green"},children:["You are ",i?"creted account":"loged In"," successfull"]})]})},A=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h3",{children:"404! No Match"})})},I=c(141),L=c(143),E=function(){var e=Object(a.useContext)(_),t=Object(o.a)(e,1)[0],c=t.displayName,n={marginLeft:"20px",color:"#f1e5e5",marginTop:"10px"};return Object(x.jsx)(I.a,{bg:"primary",variant:"dark",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(I.a.Brand,{as:v.b,to:"/",children:"Book Store"}),Object(x.jsxs)(L.a,{className:"ml-auto",children:[Object(x.jsx)(L.a.Link,{as:v.b,to:"/home",children:"Home"}),Object(x.jsx)(L.a.Link,{as:v.b,to:"/order",children:"Order"}),Object(x.jsx)(L.a.Link,{as:v.b,to:"/admin",children:"Admin"})]}),Object(x.jsxs)(k.a,{inline:!0,children:[Object(x.jsx)(C.a,{as:v.b,to:"/login",variant:"outline-light",children:"Login"}),Object(x.jsx)("p",{style:n,children:t.name}),Object(x.jsx)("p",{style:n,children:c})]})]})})},F=c(64),T=c.n(F),U=c(65),D=(c(108),function(){var e=Object(U.a)(),t=e.register,c=e.handleSubmit,n=Object(a.useState)(null),r=Object(o.a)(n,2),s=r[0],i=r[1];return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{className:"container",onSubmit:c((function(e){var t={bookName:e.bookName,authorName:e.authorName,price:e.price,imageURL:s};console.log(t),fetch("https://floating-wildwood-70864.herokuapp.com/addBook",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("server side response",e)}))})),children:[Object(x.jsxs)("div",{className:"row formStyle",children:[Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsx)("h5",{children:"Book Name"}),Object(x.jsx)("input",Object(N.a)({defaultValue:"",placeholder:"Enter Book Name"},t("bookName")))]}),Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsx)("h5",{children:"Author Name"}),Object(x.jsx)("input",Object(N.a)({placeholder:"Enter Author Name"},t("authorName")))]}),Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsx)("h5",{children:"Add Price"}),Object(x.jsx)("input",Object(N.a)({placeholder:"Enter Price"},t("price")))]}),Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsx)("h5",{children:"Add Book Cover Photo"}),Object(x.jsx)("input",{type:"file",name:"exampleRequired",onChange:function(e){console.log(e.target.files[0]);var t=new FormData;t.set("key","8bdf5eaf2ced933b204dba05036a6893"),t.append("image",e.target.files[0]),T.a.post("https://api.imgbb.com/1/upload",t).then((function(e){i(e.data.data.display_url)})).catch((function(e){console.log(e)}))}})]})]}),Object(x.jsx)("input",{className:"s-btn",type:"submit"})]})})}),G=function(e){return Object(x.jsx)("div",{className:"mt-5 pt-5",children:Object(x.jsx)(D,{})})},R=(c(109),function(){var e=Object(O.i)()._id,t=Object(a.useState)({}),c=Object(o.a)(t,2),n=c[0],r=c[1],s=n.bookName,i=n.price;return Object(a.useEffect)((function(){fetch("https://floating-wildwood-70864.herokuapp.com/book/"+e).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[e]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h3",{children:"Check Out"}),Object(x.jsxs)("div",{className:"checkOut",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-7",children:Object(x.jsx)("h4",{children:"Description"})}),Object(x.jsx)("div",{className:"col-md-3",children:Object(x.jsx)("h4",{style:{textAlign:"center"},children:"Quantity"})}),Object(x.jsx)("div",{className:"col-md-2",children:Object(x.jsx)("h4",{style:{textAlign:"center"},children:"Price"})})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-7",children:Object(x.jsx)("h4",{children:s})}),Object(x.jsx)("div",{className:"col-md-3",children:Object(x.jsx)("h4",{style:{textAlign:"center"},children:"1"})}),Object(x.jsx)("div",{className:"col-md-2",children:Object(x.jsx)("h4",{style:{textAlign:"center"},children:i})})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-7",children:Object(x.jsx)("h4",{children:"Total"})}),Object(x.jsx)("div",{className:"col-md-3",children:Object(x.jsx)("h4",{style:{textAlign:"center"},children:"1"})}),Object(x.jsx)("div",{className:"col-md-2",children:Object(x.jsx)("h4",{style:{textAlign:"center"},children:i})})]})]})]})}),_=Object(a.createContext)();var W=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(_.Provider,{value:[c,n],children:Object(x.jsxs)(v.a,{children:[Object(x.jsx)(E,{}),Object(x.jsxs)(O.d,{children:[Object(x.jsx)(O.b,{path:"/home",children:Object(x.jsx)(g,{})}),Object(x.jsx)(w,{path:"/admin",children:Object(x.jsx)(G,{})}),Object(x.jsx)(O.b,{path:"/book/:_id",children:Object(x.jsx)(R,{})}),Object(x.jsx)(O.b,{path:"/login",children:Object(x.jsx)(P,{})}),Object(x.jsx)(O.b,{exact:!0,path:"/",children:Object(x.jsx)(g,{})}),Object(x.jsx)(O.b,{path:"*",children:Object(x.jsx)(A,{})})]})]})})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,146)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(W,{})}),document.getElementById("root")),q()},77:function(e,t,c){},79:function(e,t,c){},85:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.ad6b1091.chunk.js.map