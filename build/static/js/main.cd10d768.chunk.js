(this["webpackJsonpsupabase-react"]=this["webpackJsonpsupabase-react"]||[]).push([[0],{79:function(e,t,a){},86:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),s=a.n(r),o=(a(79),a(12)),i=a(64),l=a(41),j=a(2),u=a.n(j),b=a(15),d=a(134),m=a(135),h=a(62),g=a.n(h),p=a.p+"static/media/HashChat_01.4593e6ee.png",x=a(61),O=a.n(x),f=a(4);var y=function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{class:"wrapper",style:{background:"#f2f2f2"},children:Object(f.jsx)("section",{className:"content",children:Object(f.jsxs)("div",{className:"columns",children:[Object(f.jsx)("main",{className:"main"}),Object(f.jsx)("aside",{className:"sidebar-first",children:Object(f.jsx)("img",{style:{width:"200px"},src:p,alt:"HashChat Logo"})}),Object(f.jsx)("aside",{className:"sidebar-second",children:Object(f.jsx)(m.a,{startIcon:Object(f.jsx)(O.a,{}),onClick:e.onLogOut,variant:"contained",style:{color:"white",background:"#f2844d"},children:"logout"})})]})})})})},v=a(93);var I=function(){return Object(f.jsxs)(v.a,{style:{fontSize:"12px",fontStyle:"italic",color:"#aaa"},variant:"body2",align:"center",children:["Copyright \xa9 ",(new Date).getFullYear(),"\xa0HashChat"," "]})};var N=function(e){Object(n.useEffect)((function(){localStorage.getItem("userName")}));var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(l.c)("messages"),i=Object(o.a)(s,2),j=i[0],h=(i[1],Object(l.b)("messages")),p=Object(o.a)(h,2),x=(p[0],p[1]),O=j.data,v=j.fetching,N=j.error;return v||!O?Object(f.jsx)("p",{children:"Loading..."}):N?Object(f.jsxs)("p",{children:["Oh no... ",N.message]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{onLogOut:e.onLogOut,bgcolor:"background.paper"}),Object(f.jsxs)("div",{style:{textAlign:"center"},children:[Object(f.jsxs)(d.a,{color:"#000",bgcolor:"background.paper",fontFamily:"h1.fontFamily",fontWeight:"bold",fontSize:{xs:"1.2rem",sm:"1.8rem",md:"1.8rem"},p:{xs:2,sm:3,md:4},children:["Hello, ",Object(f.jsxs)("span",{style:{color:"#ff671d",borderBottom:"#ff671d dotted 1px"},children:[e.userName,"!"]})," Welcome to HashChat",Object(f.jsx)("br",{})]}),Object(f.jsx)(d.a,{bgcolor:"background.paper",children:Object(f.jsxs)("form",{onSubmit:function(){var t=Object(b.a)(u.a.mark((function t(a){var n,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==c){t.next=4;break}return alert("Your HashChat message can't be empty!"),t.abrupt("return");case 4:return t.next=6,x({username:e.userName,text:c});case 6:n=t.sent,s=n.error,r(""),s&&console.log(s);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(f.jsx)("input",{type:"text",className:"chat-message",value:c,placeholder:"",onChange:function(e){r(e.target.value)}}),Object(f.jsx)(m.a,{startIcon:Object(f.jsx)(g.a,{}),type:"submit",value:"Send",variant:"contained",color:"white",style:{background:"#f2844d",color:"white",textTransform:"none",marginLeft:"6px"},children:"Send your HashChat"})]})}),Object(f.jsx)(d.a,{className:"outer-chat",children:Object(f.jsx)("div",{className:"chats",children:Object(f.jsx)("ul",{children:O.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsxs)("span",{className:"chat-render",children:[e.username," : ",e.text]})},e.id)}))})})}),Object(f.jsx)(d.a,{style:{borderTop:"10px"},children:Object(f.jsx)(I,{})})]})]})},C=a(131),k=a(133),w=(a(128),a(132)),S=a(130),F=a(129),L=a.p+"static/media/Photo03.40a58458.png",H=Object(F.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(".concat(L,")"),backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var T=function(e){var t=H(),a=Object(n.useState)(""),c=Object(o.a)(a,2),r=c[0],s=c[1];return Object(f.jsxs)(S.a,{container:!0,component:"main",className:t.root,children:[Object(f.jsx)(C.a,{}),Object(f.jsx)(S.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),Object(f.jsx)(S.a,{item:!0,xs:12,sm:8,md:5,component:w.a,elevation:6,square:!0,children:Object(f.jsxs)("div",{className:t.paper,children:[Object(f.jsx)(v.a,{component:"h1",variant:"h5",children:Object(f.jsx)("img",{src:p,style:{width:"333px"}})}),Object(f.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(f.jsx)(k.a,{InputProps:{value:r,onChange:function(e){s(e.target.value)}},variant:"outlined",margin:"normal",fullWidth:!0,id:"email",label:"Enter your HashChat Username",name:"email",autoComplete:"email",autoFocus:!0}),Object(f.jsx)(m.a,{onClick:function(){console.log(r),""!==r?(e.onLogIn(r),localStorage.setItem("userName",r)):alert("Username cant be empty")},type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,style:{textTransform:"none",background:"#ff671d"},children:"Enter HashChat"}),Object(f.jsx)(d.a,{mt:1,children:Object(f.jsx)(I,{})})]})]})})]})},D=(a(86),Object(i.a)("https://oegyhpowltbywwfgnccm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzI2NDIwNSwiZXhwIjoxOTQyODQwMjA1fQ.7P8dUGBYRF75FFBVuMSKrr2cKtLdS2FjCtO6dy2cRhU"));var J=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],r=a[1];return localStorage.setItem("userName",c),localStorage.getItem("userName"),Object(f.jsx)("div",{style:{background:"white"},children:Object(f.jsx)(l.a,{value:D,children:c?Object(f.jsx)(N,{userName:c,onLogOut:function(){return r(null)}}):Object(f.jsx)(T,{onLogIn:r})})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,138)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root")),P()}},[[90,1,2]]]);
//# sourceMappingURL=main.cd10d768.chunk.js.map