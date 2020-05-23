(this["webpackJsonpcovid19-app-tracker"]=this["webpackJsonpcovid19-app-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2a3v3",card:"Cards_card__2wTsk",infected:"Cards_infected__23IJA",recovered:"Cards_recovered__2OFyc",deaths:"Cards_deaths__2giGQ"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(73),d=a(74),m=a(83),p=a(84),f=a(224),v=a(229),h=a(225),g=a(226),b=a(13),E=a.n(b),y=a(32),C=a.n(y),x=a(33),_=a.n(x),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:E.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:_()(E.a.card,E.a.infected)},r.a.createElement(h.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(g.a,{varaint:"h5",gutterBottom:!0},r.a.createElement(C.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},new Date(o).toDateString()),r.a.createElement(g.a,{varaint:"body2",gutterBottom:!0},"Number of active cases of COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:_()(E.a.card,E.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(g.a,{varaint:"h5",gutterBottom:!0},r.a.createElement(C.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},new Date(o).toDateString()),r.a.createElement(g.a,{varaint:"body2",gutterBottom:!0},"Number recoveries from COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:_()(E.a.card,E.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(g.a,{varaint:"h5",gutterBottom:!0},r.a.createElement(C.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},new Date(o).toDateString()),r.a.createElement(g.a,{varaint:"body2",gutterBottom:!0},"Number of deaths caused by COVID-19"))))):"LOADING ..."},w=a(31),j=a(34),k=a.n(j),D="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(45),A=a(80),V=a.n(A),G=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(w.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(I.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(I.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5","rgba(0,255,0,0.5","rgba(255,0,0,0.5"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:V.a.container},u?v:f)},J=a(228),U=a(227),P=a(81),R=a.n(P),T=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(J.a,{className:R.a.formControl},r.a.createElement(U.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},F=a(46),H=a.n(F),L=a(82),M=a.n(L),Q=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},selectedCountry:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,selectedCountry:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.selectedCountry;return r.a.createElement("div",{className:H.a.container},r.a.createElement("img",{className:H.a.image,src:M.a,alt:"COVID-19"}),r.a.createElement(O,{data:t}),r.a.createElement(T,{handleCountryChange:this.handleCountryChange}),r.a.createElement(G,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Q,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__2rdST",image:"App_image__VewA5"}},80:function(e,t,a){e.exports={container:"Chart_container__1eENx"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__H27_X"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.1722b4d5.chunk.js.map