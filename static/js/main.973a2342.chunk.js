(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,a,t){e.exports=t(53)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){e.exports=t.p+"static/media/me.beb014e6.jpg"},44:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){e.exports=t.p+"static/media/cands.6e798f86.png"},51:function(e,a,t){e.exports=t.p+"static/media/izi.0143bb3c.png"},52:function(e,a,t){e.exports=t.p+"static/media/spotify.f16ccabe.png"},53:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(23),r=t.n(c),o=(t(33),t(34),t(35),t(12)),i=function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"nav-link"},l.a.createElement(o.b,{to:"/portfolio/hello"}," ",l.a.createElement("i",{className:"fas fa-home"})," Hello")),l.a.createElement("div",{className:"nav-link"},l.a.createElement(o.b,{to:"/portfolio/projects"}," ",l.a.createElement("i",{className:"fas fa-project-diagram"}),"Projects")),l.a.createElement("div",{className:"nav-link"},l.a.createElement(o.b,{to:"/portfolio/contact"}," ",l.a.createElement("i",{className:"far fa-id-card"})," Contact me")))},m=t(3),s=t(8),u=(t(41),t(15));function f(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var d=function(){var e=Object(n.useState)(f()),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){function e(){l(f())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t},p=function(){var e=d(),a=e.height,c=e.width;console.log(a,c);var r=Object(n.useState)(!0),o=Object(s.a)(r,2),i=o[0],m=o[1];Object(n.useEffect)((function(){setTimeout((function(){m(!1)}),2500)}),[]);var f=Object(u.b)({to:{opacity:1,marginLeft:0},from:{opacity:0,marginLeft:c>700?500:0},config:{duration:1e3},delay:2500}),p=Object(u.b)({opacity:1,from:{opacity:0},config:{duration:2e3}});return i?l.a.createElement(u.a.div,{style:p},l.a.createElement("div",{className:"centered-div"},l.a.createElement("h1",{className:"welcome-message"},"Welcome to my Portfolio ",l.a.createElement("i",{class:"fas fa-book-reader"})))):l.a.createElement(u.a.div,{style:f},l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"main-block"},l.a.createElement("div",{className:"upper-block"},l.a.createElement("div",{className:"home-info"},l.a.createElement("p",null,"Hello, I am"),l.a.createElement("h1",null,"Mohammed Saad"),l.a.createElement("p",null,"A Software Engineer | Web and app developer")),l.a.createElement("img",{src:t(42),alt:"hello"})),l.a.createElement("div",{className:"lower-block"},l.a.createElement("div",{className:"left-block"}),l.a.createElement("div",{className:"right-block"},l.a.createElement("div",{className:"recent-frameworks"},l.a.createElement("p",{className:"up-left"},"Here are some of the"),l.a.createElement("h1",null,"Recent Frameworks"),l.a.createElement("p",{className:"down-right"},"I've worked with")),l.a.createElement("div",null,l.a.createElement("div",{className:"technology"},l.a.createElement("p",null,"ReactJS"),l.a.createElement("i",{className:"fab fa-react"})),l.a.createElement("div",{className:"technology"},l.a.createElement("p",null,"NodeJS"),l.a.createElement("i",{className:"fab fa-node-js"})),l.a.createElement("div",{className:"technology"},l.a.createElement("p",null,"Flutter"),l.a.createElement("i",{className:"fas fa-mobile-alt"}))))))))},E=t(19),b=t.n(E),h=t(24),v=t(11),g=t(20),y=(t(44),t(25)),j=(t(47),function(e){return l.a.createElement("div",{style:{display:e.visible?"block":"none"},className:"center-alert animate__animated animate__fadeInDown"},l.a.createElement("p",null,e.message))}),w=t(65),N=t(26),k=t.n(N),O=function(){var e=Object(n.useRef)({}),a=d(),t=Object(n.useState)(!1),c=Object(s.a)(t,2),r=c[0],o=c[1],i=Object(n.useState)(!1),m=Object(s.a)(i,2),u=m[0],f=m[1],p=Object(n.useState)({name:"",email:"",subject:"",message:""}),E=Object(s.a)(p,2),N=E[0],O=E[1],x=Object(n.useState)(!1),C=Object(s.a)(x,2),A=C[0],F=C[1],_=Object(n.useState)(!1),z=Object(s.a)(_,2),H=z[0],W=z[1],I=function(e){var a=e.target.name;O(Object(g.a)(Object(g.a)({},N),{},Object(v.a)({},a,e.target.value)))},T=function(){var a=Object(h.a)(b.a.mark((function a(t){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,o(!0),a.next=5,y.sendForm("yahoo","template_gl6yq68","sendmeanemail","user_vkV3ckigggvh4bH9yQ1Nh");case 5:o(!1),O({name:"",email:"",subject:"",message:""}),W(!0),setTimeout((function(){W(!1)}),1500),f(!1),e.current&&e.current.reset(),a.next=20;break;case 13:a.prev=13,a.t0=a.catch(1),o(!1),F(!0),setTimeout((function(){F(!1)}),1500),f(!1),e.current&&e.current.reset();case 20:case"end":return a.stop()}}),a,null,[[1,13]])})));return function(e){return a.apply(this,arguments)}}();return l.a.createElement("div",{className:"Contact"},l.a.createElement("h1",null,l.a.createElement("i",{class:"far fa-envelope"}),"Contact me through email"),l.a.createElement("form",{id:"sendmeanemail",onSubmit:T},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{name:"name",type:"text",onChange:I,value:N.name,placeholder:"yourName"}),l.a.createElement("label",{htmlFor:"email"},"Email Address"," ",!S(N.email)&&l.a.createElement("span",{style:{color:"red",fontWeight:100,fontFamily:"Georgia"}},"*")),l.a.createElement("input",{name:"email",type:"email",onChange:I,value:N.email,placeholder:"yourEmail@example.com"}),l.a.createElement("label",{htmlFor:"subject"},"Email Subject"),l.a.createElement("input",{name:"subject",type:"text",onChange:I,value:N.subject,placeholder:"subject"}),l.a.createElement("label",{htmlFor:"message"},"Email Body"," ",""===N.message&&l.a.createElement("span",{style:{color:"red",fontWeight:100,fontFamily:"Georgia"}},"*")),l.a.createElement("textarea",{name:"message",type:"textarea",onChange:I,value:N.message}),l.a.createElement("div",{style:{margin:"auto auto"}},l.a.createElement(k.a,{ref:e,sitekey:"6LclIsoZAAAAAFyAR0s_bfmAgDQhbAUYG_wJVIVZ",render:"explicit",onloadCallback:function(){console.log("reCAPTCHA loaded")},expiredCallback:function(e){e||f(!1)},size:a.width>700?"normal":"compact",theme:"dark",verifyCallback:function(e){e&&f(!0)}})),r?l.a.createElement("div",{style:{margin:"auto auto"}},l.a.createElement(w.a,null)):l.a.createElement("input",{type:"submit",value:"Send",id:S(N.email)&&""!==N.message&&u?"email-submit":"disabled",disabled:!S(N.email)||""===N.message||!u})),l.a.createElement(j,{visible:H,message:l.a.createElement("div",null,l.a.createElement("i",{style:{color:"#1bd167"},class:"far fa-check-square"}),l.a.createElement("span",null,"Email Sent"))}),l.a.createElement(j,{visible:A,message:l.a.createElement("div",null,l.a.createElement("i",{style:{color:"#ab0000"},class:"far fa-times-circle"}),l.a.createElement("span",null,"Try again!"))}))};function S(e){return!!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)}t(48),t(49);var x=function(e){return l.a.createElement("div",{className:"Project",onClick:function(){window.open(e.link),console.log(e.history)}},l.a.createElement("img",{src:e.image,alt:"broken"}),l.a.createElement("p",null,e.title))},C=function(e){return l.a.createElement("div",{className:"Projects"},l.a.createElement("div",{className:"main-block"},l.a.createElement(x,Object.assign({},e,{link:"https://createandshare.netlify.app/",title:"CreateANDShare",image:t(50)})),l.a.createElement(x,Object.assign({},e,{link:"https://izihandmade.netlify.app/",title:"izihandmade",image:t(51)})),l.a.createElement(x,Object.assign({},e,{title:"Spotify Clone",link:"https://github.com/FatemaFawzy/Frontend-Team",image:t(52)}))))};var A=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/portfolio/hello",component:p}),l.a.createElement(m.b,{path:"/portfolio/projects",component:C}),l.a.createElement(m.b,{path:"/portfolio/contact",component:O}),l.a.createElement(m.a,{to:"/portfolio/hello"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.973a2342.chunk.js.map