(this["webpackJsonpdovahkid.github.io"]=this["webpackJsonpdovahkid.github.io"]||[]).push([[0],{54:function(e,t,a){},55:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(0),c=a.n(s),r=a(21),i=a.n(r),o=(a(54),a(14)),l=a(15),d=a(19),j=a(17),m=(a(55),a(72)),h=a(70),b=a(71),p=a(22),u=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(m.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",bg:"primary",children:[Object(n.jsx)(m.a.Toggle,{}),Object(n.jsx)(p.b,{to:"/",className:"navbar-brand",children:"Michael Gain"}),Object(n.jsx)(m.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:Object(n.jsxs)(h.a,{className:"mr-left",children:[Object(n.jsx)(p.b,{to:"/",className:"nav-link",children:"Home"}),Object(n.jsx)(p.b,{to:"/projects",className:"nav-link",children:"Projects"}),Object(n.jsxs)(b.a,{title:"Contact",id:"collapsible-nav-dropdown",children:[Object(n.jsx)(b.a.Item,{target:"_blank",href:"https://www.linkedin.com/in/michael-gain-36212b184/",children:" LinkedIn "}),Object(n.jsx)(b.a.Item,{target:"_blank",href:"mailto:gainmikey@gmail.com",children:" E-mail "})]})]})})]})}}]),a}(s.Component),g=a.p+"static/media/education.22fbaec0.svg",O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Home",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"jumbotron",children:[Object(n.jsx)("h1",{className:"display-4 d-none d-md-block d-lg-block",children:"About Me"}),Object(n.jsx)("h3",{className:"d-sm-block d-md-none",children:"About Me"}),Object(n.jsx)("hr",{className:"my-4"}),Object(n.jsx)("p",{children:"My name is Michael Gain. I currently attend Cabarrus Early College of Technology and Rowan-Cabarrus Community College. I will receive my High School Diploma as well as an Applied Associates of Computer Programming."}),Object(n.jsx)("p",{children:"I love programming and everything computers. I have done a lot of programming in languages such as C++, C#, Python, JavaScript/TypeScript, and Visual Basic. I also do a little HTML and CSS. C# has quickly become my favorite language to use because of its flexibility and versatility. Programming is perfect for me because I love to come up with an idea and actually make it a reality."}),Object(n.jsx)("p",{children:"If I'm not programming I'm probably playing video games. My favorite game is Skyrim and it is my biggest inspiration for wanting to develop video games as a career. My interest in programming goes back a few years before with Minecraft. Seeing all the amazing mods that people could create inspired me to learn how to program."})]}),Object(n.jsxs)("div",{className:"jumbotron",children:[Object(n.jsx)("a",{className:"float-left d-none d-sm-none d-md-block",href:"https://www.flaticon.com/authors/linector",title:"Linector",rel:"noreferrer",target:"_blank",children:Object(n.jsx)("img",{src:g,alt:"globe with grad hat",className:"education-img"})}),Object(n.jsx)("h1",{className:"display-4 d-none d-md-block d-lg-block",children:"Education and Experience"}),Object(n.jsx)("h3",{className:"d-sm-block d-md-none",children:"Education and Experience"}),Object(n.jsx)("hr",{className:"my-4"}),Object(n.jsx)("p",{children:"I am currently enrolled in Cabarrus Early College of Technology and Rowan-Cabarrus Community College. I am working towards an Applied Associates of Computer Programming."}),Object(n.jsxs)("p",{children:["Most of my recent projects are listed on my ",Object(n.jsx)(p.b,{to:"/projects",children:"Projects page"}),". Other notable projects have been hosting a website using WAMP server, hosting game servers with various software, and processes associated with both such as port forwarding."]}),Object(n.jsx)("p",{children:"I also have 3 certificates:"}),Object(n.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(n.jsx)("li",{className:"list-group-item",children:"MTA for Software Development Fundamentals (C#)"}),Object(n.jsx)("li",{className:"list-group-item",children:"MTA for Introduction to Programming Using Javascript"}),Object(n.jsx)("li",{className:"list-group-item",children:"MTA for Introduction to Programming using Python"})]})]})]})})}}]),a}(s.Component),f=a(42),x=a.n(f),v=a(47),y=a(73),k=a(74),w=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4",children:Object(n.jsx)(y.a,{className:"mb-4 mr-1",children:Object(n.jsxs)(y.a.Body,{className:"d-flex flex-column",children:[Object(n.jsxs)(y.a.Title,{children:[" ",this.props.name," "]}),Object(n.jsxs)(y.a.Subtitle,{children:[" ",this.props.language," "]}),Object(n.jsxs)(y.a.Text,{children:[" ",this.props.description," "]}),Object(n.jsx)(k.a,{className:"mt-auto list-group-flush",children:Object(n.jsxs)(k.a.Item,{children:[Object(n.jsx)(y.a.Link,{target:"_blank",href:this.props.svn_url,children:"Repo here"}),this.props.homepage?Object(n.jsx)(y.a.Link,{target:"_blank",href:this.props.homepage,className:"mt-auto",children:"Site here"}):""]})})]})})})}}]),a}(s.Component),N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getRepos=Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/Dovahkid/repos");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),n.state={panels:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getRepos().then((function(t){e.setState({panels:t})}))}},{key:"render",value:function(){return this.state.panels.length?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"Projects row",children:this.state.panels.map((function(e,t){return Object(n.jsx)(w,{name:e.name,description:e.description,language:e.language,svn_url:e.svn_url,homepage:e.homepage},t)}))})}):Object(n.jsx)("span",{children:"Loading..."})}}]),a}(s.Component),C=a(7),I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(p.a,{basename:"",children:[Object(n.jsx)(u,{}),Object(n.jsxs)(C.c,{children:[Object(n.jsx)(C.a,{path:"/",exact:!0,component:O}),Object(n.jsx)(C.a,{path:"/Projects",exact:!0,component:N}),Object(n.jsx)(C.a,{path:"/",component:O})]})]})})}}]),a}(s.Component),M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),M()}},[[65,1,2]]]);
//# sourceMappingURL=main.5ee21076.chunk.js.map