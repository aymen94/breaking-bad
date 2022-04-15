(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(63)},52:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(43),c=a.n(l),s=(a(52),a(25)),u=a(70),i=a(11),m=a(12),o=a(14),h=a(9),E=a(15),d=a(2),f=a(66),b=a(67),p=a(68),v="https://www.breakingbadapi.com/api",j=v.concat("/episodes"),O=v.concat("/characters"),y=v.concat("/quotes"),k=a(74),g=a(65),N=a(56),C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement(k.a,{border:"success",className:"m-1",style:{width:"20rem"}},r.a.createElement(k.a.Img,{width:500,height:500,alt:"500x500",variant:"top",loading:"lazy",src:e.img}),r.a.createElement(k.a.Header,null,r.a.createElement(k.a.Title,null,e.char_id," -"," ",r.a.createElement("span",{className:"firstLetter"},e.name.charAt(0)),e.name.substring(1))),r.a.createElement(g.a,{className:"list-group-flush"},r.a.createElement(N.a,null,"Nickname: ",e.nickname),r.a.createElement(N.a,null,"Birthday: ",e.birthday),r.a.createElement(N.a,null,"Actor: ",e.portrayed),r.a.createElement(N.a,null,"Occupation:"," ",e.occupation.map(function(e){return r.a.createElement("li",{key:e},e)}))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={loadData:!1,users:[]},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"fetchCharacters",value:function(){var e=this;fetch(O).then(function(e){return e.json()}).then(function(t){e.setState({users:t,loadData:!0})})}},{key:"componentDidMount",value:function(){this.state.loadData||this.fetchCharacters()}},{key:"render",value:function(){if(this.state.loadData){var e=this.state.users.map(function(e){return r.a.createElement(C,{user:e,key:e.char_id})});return r.a.createElement(f.a,{md:12,className:"justify-content-md-center"},e)}return r.a.createElement(f.a,{className:"mt-4 justify-content-md-center"},r.a.createElement(b.a,{md:"auto"},r.a.createElement(p.a,{animation:"grow",variant:"success"})))}}]),t}(n.Component),w=a(69),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={loadData:!1,episodes:[]},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"fetchCharacters",value:function(){var e=this;fetch(j).then(function(e){return e.json()}).then(function(t){e.setState({episodes:t,loadData:!0})})}},{key:"componentDidMount",value:function(){this.state.loadData||this.fetchCharacters()}},{key:"render",value:function(){if(this.state.loadData){var e=this.state.episodes;return r.a.createElement(b.a,{md:12},r.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Season"),r.a.createElement("th",null,"Episode"),r.a.createElement("th",null,"title"),r.a.createElement("th",null,"series"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,e.map(function(e){return r.a.createElement("tr",{key:e.episode_id},r.a.createElement("td",null,e.season),r.a.createElement("td",null,e.episode),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.series),r.a.createElement("td",null,e.air_date))}))))}return r.a.createElement(f.a,{className:"mt-4 justify-content-md-center"},r.a.createElement(b.a,{md:"auto"},r.a.createElement(p.a,{animation:"grow",variant:"success"})))}}]),t}(n.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{fluid:!0},r.a.createElement("div",{className:"BreakingBad"},r.a.createElement("div",{className:"logo"},r.a.createElement("p",null,r.a.createElement("span",{className:"element"},"Br",r.a.createElement("span",{className:"number"},"35")),"eaking"),r.a.createElement("p",null,r.a.createElement("span",{className:"element"},"Ba",r.a.createElement("span",{className:"number"},"56")),"d")),r.a.createElement("footer",null,r.a.createElement("p",null,"by Aymen"))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={loadData:!1,quotes:[]},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"fetchCharacters",value:function(){var e=this;fetch(y).then(function(e){return e.json()}).then(function(t){e.setState({quotes:t,loadData:!0})})}},{key:"componentDidMount",value:function(){this.state.loadData||this.fetchCharacters()}},{key:"render",value:function(){if(this.state.loadData){var e=this.state.quotes;return r.a.createElement(b.a,{md:12},r.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"author"),r.a.createElement("th",null,"quote"),r.a.createElement("th",null,"series"))),r.a.createElement("tbody",null,e.map(function(e){return r.a.createElement("tr",{key:e.quote_id},r.a.createElement("td",null,e.author),r.a.createElement("td",null,e.quote),r.a.createElement("td",null,e.series))}))))}return r.a.createElement(f.a,{className:"mt-4 justify-content-md-center"},r.a.createElement(b.a,{md:"auto"},r.a.createElement(p.a,{animation:"grow",variant:"success"})))}}]),t}(n.Component),_=function(){return r.a.createElement("h1",null,"404")},F=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",element:r.a.createElement(q,null)}),r.a.createElement(d.b,{path:"series",element:r.a.createElement(B,null)}),r.a.createElement(d.b,{path:"characters",element:r.a.createElement(D,null)}),r.a.createElement(d.b,{path:"quotes",element:r.a.createElement(S,null)}),r.a.createElement(d.b,{path:"*",element:r.a.createElement(_,null)}))}}]),t}(n.Component),M=a(72),T=a(73),A=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(M.a,{bg:"dark",variant:"dark",className:"mb-3"},r.a.createElement(u.a,null,r.a.createElement(M.a.Brand,{href:"#home"},"Breaking Bad"),r.a.createElement(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(M.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"me-auto"},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(s.b,{className:"nav-link",to:"/series"},"Series"),r.a.createElement(s.b,{className:"nav-link",to:"/characters"},"Characters"),r.a.createElement(s.b,{className:"nav-link",to:"/quotes"},"Quotes")),r.a.createElement(d.a,null))))}}]),t}(n.Component);var I=function(){return r.a.createElement(s.a,null,r.a.createElement(A,null),r.a.createElement(u.a,null,r.a.createElement(F,null)))},L=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,71)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null))),L()}},[[44,3,2]]]);
//# sourceMappingURL=main.feb06a20.chunk.js.map