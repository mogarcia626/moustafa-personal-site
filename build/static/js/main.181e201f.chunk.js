(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),s=(t(71),t(63)),o=t(5),i=!0,m={gradientColors:"#374453, #4a5d23, #6b1818, #db8a6c",firstName:"Moustafa",middleName:"",lastName:"Garcia",message:" Engineer and Problem Solver. ",icons:[{image:"fa-github",url:"https://github.com/mogarcia626"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/moustafagarcia/"},{image:"fa-angellist",url:"https://angel.co/u/moustafa-garcia-bengochea"}]},u={show:!0,heading:"About Me",imageLink:t(72),imageSize:375,message:"My name is Moustafa Garcia. I\u2019m a software engineer based in Orlando, FL. I'm passionate about finding new hobbies, learning new skills, and applying them to meaningful projects. Before getting into web development I was a mechanical engineer in the construction industry for nearly 10 years, collaborating on large multidisciplinary projects. In my free time I play soccer, take my kayak out for long-distance rides, and read.",resume:"https://docs.google.com/document/d/16jpxNcZjfYH1aFq3jV-gLtzgGKbb0s2JlIdkBXY-teQ/edit?usp=sharing"},d=!0,g="Recent Projects",f={show:!0,heading:"Skills",hardSkills:[{name:"React",value:0},{name:"Redux",value:0},{name:"Javascript",value:0},{name:"NodeJS",value:0},{name:"Ruby",value:0},{name:"Rails",value:0},{name:"HTML/SCSS",value:0},{name:"HTML/Canvas",value:0},{name:"PostgreSQL",value:0},{name:"JQuery",value:0},{name:"MongoDB",value:0},{name:"Express",value:0},{name:"Google Maps API",value:0},{name:"Amazon AWS",value:0}],softSkills:[{name:"Goal-Oriented",value:0},{name:"Collaboration",value:0},{name:"Positivity",value:0},{name:"Adaptability",value:0},{name:"Problem Solving",value:0},{name:"Empathy",value:0},{name:"Organization",value:0},{name:"Creativity",value:0}]},p=!0,h="Get In Touch",b="I'm currently looking for full-time Software Engineering role! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",v="mogarcia626@gmail.com",E={show:!1,heading:"Experiences",data:[{role:"Mechanical Engineer at exp",companylogo:null,date:"April 2016 \u2013 July 2021"},{role:"Energy Engineer at Alares",companylogo:null,date:"January 2013 \u2013 November 2016"}]},k=t(60),y=t.n(k),w=t(21),N=t(30),x=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,c=e.icons;return r.a.createElement(N.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(w.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(y.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},c.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me")))})),S=t(8),j=(t(73),function(e){var a=e.heading,t=e.message,n=e.link,l=e.imgSize,c=e.resume,s=r.a.useState(""),o=Object(S.a)(s,2),i=o[0],m=o[1],u=Boolean(n);return r.a.useEffect((function(){m(n)}),[n]),r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},u&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:i,alt:"profilepicture",width:l,height:l})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),c&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:c,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))}),_=t(23),O=t.n(_),L=t(31),R=t(27),M=t(26),C=t(29),P=t(25),T=t.n(P),z=t(24),I=t.n(z),A=function(e){var a=e.svn_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"))},B=function(e){var a=e.languages_url,t=e.repo_url,l=Object(n.useState)([]),c=Object(S.a)(l,2),s=c[0],o=c[1],i=Object(n.useCallback)(Object(L.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get(a);case 3:return t=e.sent,e.abrupt("return",o(t.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);Object(n.useEffect)((function(){i()}),[i]);var m=[],u=0;for(var d in s)m.push(d),u+=s[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",m.length?m.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light card-link",href:t+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(s[e]/u*1e3)/10," %")})):"code yet to be deployed.")},F=function(e){e.star_count;var a=e.repo_url,t=e.pushed_at,l=Object(n.useState)("0 mints"),c=Object(S.a)(l,2),s=c[0],o=c[1],i=Object(n.useCallback)((function(){var e=new Date(t),a=(new Date).getTime()-e.getTime(),n=Math.trunc(a/1e3/60/60);if(n<24){if(n<1)return o("just now");var r=1===n?"hour":"hours";return o("".concat(n.toString()," ").concat(r," ago"))}var l=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(e);return o("on ".concat(l))}),[t]);return Object(n.useEffect)((function(){i()}),[i]),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:a+"/stargazers",target:" _blank",className:"text-dark text-decoration-none"}),r.a.createElement("small",{className:"text-muted"},"Updated ",s))},G=function(e){var a=e.value,t=a.name,n=a.description,l=a.svn_url,c=a.stargazers_count,s=a.languages_url,o=a.pushed_at,i=a.liveLink,m=a.imageUrl;return r.a.createElement(M.a,{md:6},r.a.createElement(C.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,{as:"h5"},t||r.a.createElement(T.a,null)," "),r.a.createElement(C.a.Text,null,n?n||r.a.createElement(T.a,{count:3}):""," "),r.a.createElement("div",{className:"image-container",onClick:function(){window.open(i)}},r.a.createElement("img",{className:"feature-image",src:m,alt:t}),r.a.createElement("p",{className:"live-link"},"Live Link")),l?r.a.createElement(A,{svn_url:l}):r.a.createElement(T.a,{count:2}),r.a.createElement("hr",null),s?r.a.createElement(B,{languages_url:s,repo_url:l}):r.a.createElement(T.a,{count:3}),a?r.a.createElement(F,{star_count:c,repo_url:l,pushed_at:o}):r.a.createElement(T.a,null))))},J={name:null,description:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},W=function(e){var a=e.heading,t="".concat("https://api.github.com","/repos"),l=new Array(3).fill(J),c=Object(n.useState)([]),s=Object(S.a)(c,2),o=s[0],i=s[1],m=Object(n.useCallback)(Object(L.a)(O.a.mark((function e(){var a,n,r,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,I.a.get("".concat(t,"/mogarcia626/letseat"));case 4:(n=e.sent).data.liveLink="https://let-s-eat.herokuapp.com/#/",n.data.imageUrl="https://i.imgur.com/oqsGTlD.gif",a.push(n.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:return e.prev=13,e.next=16,I.a.get("".concat(t,"/mmbarness/home_court"));case 16:(r=e.sent).data.liveLink="https://www.homecourt.club/#/splash",r.data.imageUrl="https://i.imgur.com/nMvzDeO.gif",a.push(r.data),e.next=25;break;case 22:e.prev=22,e.t1=e.catch(13),console.error(e.t1.message);case 25:return e.prev=25,e.next=28,I.a.get("".concat(t,"/mogarcia626/light_show"));case 28:(l=e.sent).data.liveLink="https://mogarcia626.github.io/light_show/",l.data.imageUrl="https://i.imgur.com/eyvVg9l.gif",a.push(l.data),e.next=37;break;case 34:e.prev=34,e.t2=e.catch(25),console.error(e.t2.message);case 37:i(a);case 38:case"end":return e.stop()}}),e,null,[[1,10],[13,22],[25,34]])}))),[t]);return Object(n.useEffect)((function(){m()}),[m]),r.a.createElement(N.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(w.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement(R.a,null,o.length?o.map((function(e,a){return r.a.createElement(G,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})):l.map((function(e,a){return r.a.createElement(G,{key:"dummy-".concat(a),id:"dummy-".concat(a),value:e})})))))},D=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(w.a,null,e.children,r.a.createElement("i",{className:"fas fa-code"}),"by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/hashirshoaeb","aria-label":"My GitHub"},"Hashir Shoaib"),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"},"Project code is open source."))))},U="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,H="undefined"!==typeof window;function K(e){var a=e.element,t=e.useWindow;if(!H)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function q(e,a,t,r,l){var c=Object(n.useRef)(K({useWindow:r})),s=null,o=function(){var a=K({element:t,useWindow:r});e({prevPos:c.current,currPos:a}),c.current=a,s=null};U((function(){if(H){var e=function(){l?null===s&&(s=setTimeout(o,l)):o()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),s&&clearTimeout(s)}}}),a)}q.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var Q=function(e){var a=r.a.useState(null),t=Object(S.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},V=t(28),Y=t(17),X=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(S.a)(t,2),c=l[0],s=l[1],o=Object(n.useState)(0),i=Object(S.a)(o,2),g=i[0],p=i[1],h=r.a.useRef(),b=Q(h),v=b?b.bottom:0;return q((function(e){e.prevPos;var t=e.currPos;b&&(t.y+a.current.offsetTop-b.bottom>5?s(!0):s(!1),p(t.y))}),[v]),r.a.useEffect((function(){b&&(v-g>=a.current.offsetTop?s(!1):s(!0))}),[v,b,a,g]),r.a.createElement(V.a,{ref:h,className:" fixed-top  ".concat(c?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement(V.a.Brand,{className:"brand",href:"/#home"},"<".concat(m.firstName," />")),r.a.createElement(V.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement(V.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Y.a,{className:"mr-auto"},u.show&&r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/#aboutme"},"About"),d&&r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/#projects"},"Projects"),f.show&&r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/#skills"},"Skills"),r.a.createElement(Y.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"))))})),Z=t(44),$=t(65);var ee=function(e){var a=e.skill;return e.value,e.isScrolled,r.a.createElement("div",{style:{width:"95%"}},r.a.createElement("p",{className:"lead mb-1 mt-2"},a))};function ae(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(ee,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var te=function(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{xs:12,md:6},r.a.createElement(ae,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(M.a,{xs:12,md:6},r.a.createElement(ae,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))};var ne=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,l=r.a.useRef(),c=r.a.useState(!1),s=Object(S.a)(c,2),o=s[0],i=s[1];return q((function(e){e.prevPos;var a=e.currPos;!o&&a.y-400<0&&i(!0)}),[],l),r.a.createElement(N.a,{ref:l,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(w.a,{className:"p-5 "},r.a.createElement("h2",{ref:l,className:"display-4 pb-5 text-center"},a),r.a.createElement($.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},r.a.createElement(Z.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},r.a.createElement(R.a,{className:"pt-3 px-1"},r.a.createElement(te,{skills:t,isScrolled:o}))),r.a.createElement(Z.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},r.a.createElement(R.a,{className:"pt-3 px-1"},r.a.createElement(te,{skills:n,isScrolled:o}))))))},re=function(e){var a=e.heading,t=e.message,n=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,", ",r.a.createElement("a",{href:"mailto:".concat(n)},n),"."))},le=function(e){var a=e.data;return r.a.createElement(M.a,{lg:"6"},r.a.createElement("div",{className:"pb-5 text-center"},r.a.createElement("img",{className:" bg-white mb-3",src:a.companylogo,alt:""}),r.a.createElement("p",{className:"lead"},a.role,r.a.createElement("br",null),a.date)))},ce=function(e){var a=e.experiences;return r.a.createElement("section",{className:"section"},r.a.createElement(w.a,null,r.a.createElement(N.a,{fluid:!0,className:"bg-white"},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a.heading),r.a.createElement(R.a,null,a.data.map((function(e){return r.a.createElement(le,{key:e.company,data:e})}))))))},se=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(j,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),E.show&&r.a.createElement(ce,{experiences:E}),d&&r.a.createElement(W,{heading:g}),f.show&&r.a.createElement(ne,{heading:f.heading,hardSkills:f.hardSkills,softSkills:f.softSkills}))})),oe=function(){var e=r.a.useRef();return r.a.createElement(s.a,{basename:"/"},i&&r.a.createElement(X,{ref:e}),r.a.createElement(o.a,{path:"/",exact:!0,component:function(){return r.a.createElement(se,{ref:e})}}),r.a.createElement(D,null,p&&r.a.createElement(re,{heading:h,message:b,email:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,a,t){e.exports=t(105)},71:function(e,a,t){},72:function(e,a,t){e.exports=t.p+"static/media/moustafagarcia.6392d987.jpg"},73:function(e,a,t){e.exports=t.p+"static/media/moustafagarcia_resume.377e2810.pdf"}},[[66,1,2]]]);
//# sourceMappingURL=main.181e201f.chunk.js.map