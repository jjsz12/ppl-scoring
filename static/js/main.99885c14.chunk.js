(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{285:function(e,t,n){e.exports=n(563)},293:function(e,t,n){},294:function(e,t,n){},563:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(42),r=n.n(o),i=(n(293),n(10)),s=n(11),c=n(14),u=n(12),d=n(13),p=n(57),h=n(55),m=(n(294),n(249)),E=n.n(m),f=n(251),v=n.n(f),k=n(252),C=n.n(k),g=n(253),w=n.n(g),b=n(88),j=n.n(b),_=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"navigation"},l.a.createElement(E.a,{position:"static"},l.a.createElement(v.a,null,l.a.createElement(C.a,{className:"menuButton",color:"inherit","aria-label":"Menu"},l.a.createElement(w.a,null)),l.a.createElement(p.b,{to:"/"},l.a.createElement(j.a,{color:"inherit"},"Home")),l.a.createElement(p.b,{to:"/results"},l.a.createElement(j.a,{color:"inherit"},"Results")),l.a.createElement(p.b,{to:"/standings"},l.a.createElement(j.a,{color:"inherit"},"Standings")),l.a.createElement(p.b,{to:"/stats"},l.a.createElement(j.a,{color:"inherit"},"Stats")))))}}]),t}(a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("h1",null,"Home")}}]),t}(a.Component),y=n(75),S=n(87),F=n(165),H=n.n(F),x=n(256),W=n.n(x),D=n(258),P=n.n(D),A=n(27),B=n.n(A),T=n(257),R=n.n(T),N=n(123),G=n.n(N),M=n(85),L=n.n(M),U=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(L.a,null,l.a.createElement(W.a,{padding:"dense"},l.a.createElement(R.a,null,l.a.createElement(G.a,null,l.a.createElement(B.a,null,"Group ",this.props.data._id.group_id," (",this.props.data.location,")"),l.a.createElement(B.a,{colSpan:2},this.props.data.games[0]),l.a.createElement(B.a,{colSpan:2},this.props.data.games[1]),l.a.createElement(B.a,{colSpan:2},this.props.data.games[2]),l.a.createElement(B.a,null)),l.a.createElement(G.a,null,l.a.createElement(B.a,null,"Players"),l.a.createElement(B.a,null,"Game 1 Scores "),l.a.createElement(B.a,null,"Points"),l.a.createElement(B.a,null,"Game 2 Scores "),l.a.createElement(B.a,null,"Points"),l.a.createElement(B.a,null,"Game 3 Scores "),l.a.createElement(B.a,null,"Points"),l.a.createElement(B.a,null,"Total Points"))),l.a.createElement(P.a,null,this.props.data.results.map(function(e){var t=0;return l.a.createElement(G.a,null,l.a.createElement(B.a,null,e.player),e.scores.map(function(e){return t+=e.points,l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,null,e.score),l.a.createElement(B.a,null,e.points))}),l.a.createElement(B.a,null,t))}))))}}]),t}(a.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return 0!==this.props.results.length?l.a.createElement(H.a,{container:!0,spacing:24},this.props.results.map(function(e){return l.a.createElement(H.a,{item:!0,xs:12},l.a.createElement(U,{data:e}))})):l.a.createElement(L.a,null,"No results found.")}}]),t}(a.Component),J=n(86),X=n.n(J),Q=n(118),$=n.n(Q),q=n(117),z=n.n(q),K=n(119),V=n.n(K),Y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(z.a,null,l.a.createElement($.a,null,"Season"),l.a.createElement(V.a,{value:this.props.value,onChange:this.props.onChange,input:l.a.createElement(X.a,{name:"season",id:"season-native"})},l.a.createElement("option",{vaule:5},"5"),l.a.createElement("option",{vaule:6},"6"),l.a.createElement("option",{vaule:7},"7"),l.a.createElement("option",{vaule:8},"8"),l.a.createElement("option",{vaule:9},"9"),l.a.createElement("option",{vaule:10},"10"),l.a.createElement("option",{vaule:11},"11"),l.a.createElement("option",{vaule:12},"12"),l.a.createElement("option",{vaule:13},"13"),l.a.createElement("option",{vaule:14},"14"),l.a.createElement("option",{vaule:15},"15"),l.a.createElement("option",{vaule:16},"16")))}}]),t}(a.Component),Z=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(z.a,null,l.a.createElement($.a,null,"Week"),l.a.createElement(V.a,{value:this.props.value,onChange:this.props.onChange,input:l.a.createElement(X.a,{name:"week",id:"week-native"})},l.a.createElement("option",{vaule:1},"1"),l.a.createElement("option",{vaule:2},"2"),l.a.createElement("option",{vaule:3},"3"),l.a.createElement("option",{vaule:4},"4"),l.a.createElement("option",{vaule:5},"5"),l.a.createElement("option",{vaule:6},"6"),l.a.createElement("option",{vaule:7},"7"),l.a.createElement("option",{vaule:8},"8"),l.a.createElement("option",{vaule:9},"9")))}}]),t}(a.Component),ee=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Filter")}}]),t}(a.Component),te=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value),n.fetchData)},n.handleChange=n.handleChange.bind(Object(S.a)(Object(S.a)(n))),n.state={results:[],season:16,week:9},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"fetchData",value:function(){var e=this;console.log("Fetching: /ppl-scoring/results/"+this.state.season+"/"+this.state.week),fetch("/ppl-scoring/results/"+this.state.season+"/"+this.state.week).then(function(e){return e.json()}).then(function(t){return e.setState({results:t})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Results"),l.a.createElement(Y,{value:this.state.season,onChange:this.handleChange}),l.a.createElement(Z,{value:this.state.week,onChange:this.handleChange}),l.a.createElement(ee,null),l.a.createElement(I,{results:this.state.results}))}}]),t}(a.Component),ne=n(569),ae=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={options:[{key:"1",value:1,text:"one"},{key:"2",value:2,text:"two"},{key:"3",value:3,text:"three"},{key:"4",value:4,text:"four"},{key:"5",value:5,text:"five"},{key:"6",value:6,text:"six"},{key:"7",value:7,text:"seven"},{key:"8",value:8,text:"eight"}]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"dropdown",value:function(){return l.a.createElement(ne.a,{inline:!0,options:this.state.options,value:this.props.value,onChange:this.props.onChange})}},{key:"render",value:function(){return l.a.createElement("div",null,"Show players with at least ",this.dropdown()," week(s) played.")}}]),t}(a.Component),le=n(570),oe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSort=function(e,t){return function(){var a=n.state,l=a.column,o=a.direction;if(l!==e)return n.setState({column:e,direction:"descending"}),void n.props.sortFunction(t);n.setState({direction:"ascending"===o?"descending":"ascending"}),n.props.reverseFunction()}},n.state={column:"adjusted_points",direction:"descending"},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){e.season!==this.props.season&&this.setState({column:"adjusted_points",direction:"descending"})}},{key:"render",value:function(){var e=this.state,t=e.column,n=e.direction;return l.a.createElement(le.a,{sortable:!0,celled:!0,compact:!0},l.a.createElement(le.a.Header,null,l.a.createElement(le.a.Row,null,l.a.createElement(le.a.HeaderCell,{sorted:"seed"===t?n:null,onClick:this.handleSort("seed",function(e){return e.seed})},"Seed"),l.a.createElement(le.a.HeaderCell,{sorted:"player_name"===t?n:null,onClick:this.handleSort("player_name",function(e){return e._id.player})},"Player Name"),l.a.createElement(le.a.HeaderCell,{sorted:"total_points"===t?n:null,onClick:this.handleSort("total_points",function(e){return e.total_points})},"Total Points"),l.a.createElement(le.a.HeaderCell,{sorted:"adjusted_points"===t?n:null,onClick:this.handleSort("adjusted_points",function(e){return e.adjusted_points})},"Adjusted Points"),l.a.createElement(le.a.HeaderCell,{sorted:"average_points"===t?n:null,onClick:this.handleSort("average_points",function(e){return e.average_points})},"Average Points"),l.a.createElement(le.a.HeaderCell,{sorted:"division"===t?n:null,onClick:this.handleSort("division",function(e){return e.divison})},"Division"),l.a.createElement(le.a.HeaderCell,{sorted:"week_1"===t?n:null,onClick:this.handleSort("week_1",function(e){return e.points.week_1||""})},"Week 1"),l.a.createElement(le.a.HeaderCell,{sorted:"week_2"===t?n:null,onClick:this.handleSort("week_2",function(e){return e.points.week_2||""})},"Week 2"),l.a.createElement(le.a.HeaderCell,{sorted:"week_3"===t?n:null,onClick:this.handleSort("week_3",function(e){return e.points.week_3||""})},"Week 3"),l.a.createElement(le.a.HeaderCell,{sorted:"week_4"===t?n:null,onClick:this.handleSort("week_4",function(e){return e.points.week_4||""})},"Week 4"),l.a.createElement(le.a.HeaderCell,{sorted:"week_5"===t?n:null,onClick:this.handleSort("week_5",function(e){return e.points.week_5||""})},"Week 5"),l.a.createElement(le.a.HeaderCell,{sorted:"week_6"===t?n:null,onClick:this.handleSort("week_6",function(e){return e.points.week_6||""})},"Week 6"),l.a.createElement(le.a.HeaderCell,{sorted:"week_7"===t?n:null,onClick:this.handleSort("week_7",function(e){return e.points.week_7||""})},"Week 7"),l.a.createElement(le.a.HeaderCell,{sorted:"week_8"===t?n:null,onClick:this.handleSort("week_8",function(e){return e.points.week_8||""})},"Week 8"),l.a.createElement(le.a.HeaderCell,{sorted:"makeup_week"===t?n:null,onClick:this.handleSort("makeup_week",function(e){return e.points.week_9||""})},"Makeup Week"))),l.a.createElement(le.a.Body,null,this.props.standings.map(function(e){return l.a.createElement(le.a.Row,{hidden:e.hidden,key:e._id.player},l.a.createElement(le.a.Cell,null,e.seed),l.a.createElement(le.a.Cell,null,e._id.player),l.a.createElement(le.a.Cell,null,e.total_points),l.a.createElement(le.a.Cell,null,e.adjusted_points),l.a.createElement(le.a.Cell,null,e.average_points.toFixed(2)),l.a.createElement(le.a.Cell,{bgcolor:e.color},e.division),l.a.createElement(le.a.Cell,null,e.points.week_1),l.a.createElement(le.a.Cell,null,e.points.week_2),l.a.createElement(le.a.Cell,null,e.points.week_3),l.a.createElement(le.a.Cell,null,e.points.week_4),l.a.createElement(le.a.Cell,null,e.points.week_5),l.a.createElement(le.a.Cell,null,e.points.week_6),l.a.createElement(le.a.Cell,null,e.points.week_7),l.a.createElement(le.a.Cell,null,e.points.week_8),l.a.createElement(le.a.Cell,null,e.points.week_9))})))}}]),t}(a.Component),re=n(122),ie=n.n(re),se=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value),n.fetchData)},n.handleFilterChange=function(e,t){var a=t.value,l=n.state.standings.map(function(e){return e.weeks_played<a?e.hidden=!0:e.hidden=!1,e});console.log(l),n.setState({min_weeks:a,standings:l})},n.sortStandings=function(e){n.setState({standings:ie.a.orderBy(n.state.standings,[e],["desc"])})},n.reverseStandings=function(){n.setState({standings:n.state.standings.reverse()})},n.state={standings:[],season:16,min_weeks:1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"fetchData",value:function(){var e=this;console.log("Fetching: /ppl-scoring/standings/"+this.state.season),fetch("/ppl-scoring/standings/"+this.state.season).then(function(e){return e.json()}).then(function(e){return e.map(function(e,t){return e.seed=t+1,e})}).then(function(e){return function(e){var t=e.slice(0,32).map(function(e){return e.division="A",e.color="#EE82EE",e}),n=e.slice(32,64).map(function(e){return e.division="B",e.color="#FFA500",e}),a=e.slice(64,96).map(function(e){return e.division="C",e.color="#32CD32",e}),l=e.slice(96,e.length+1).map(function(e){return e.division="X",e.color="#FFFFFF",e});return t.concat(n).concat(a).concat(l)}(e)}).then(function(t){return t.map(function(t){return t.weeks_played<e.state.min_weeks?t.hidden=!0:t.hidden=!1,t})}).then(function(t){return e.setState({standings:t})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Standings"),l.a.createElement(Y,{value:this.state.season,onChange:this.handleChange}),l.a.createElement(ae,{value:this.state.min_weeks,onChange:this.handleFilterChange}),l.a.createElement(oe,{season:this.state.season,standings:this.state.standings,sortFunction:this.sortStandings,reverseFunction:this.reverseStandings}))}}]),t}(a.Component),ce=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSort=function(e,t){return function(){var a=n.state,l=a.column,o=a.direction;if(l!==e)return n.setState({column:e,direction:"descending"}),void n.props.sortFunction(t);n.setState({direction:"ascending"===o?"descending":"ascending"}),n.props.reverseFunction()}},n.state={column:"adjusted_points",direction:"descending"},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){e.season!==this.props.season&&this.setState({column:"adjusted_points",direction:"descending"})}},{key:"render",value:function(){var e=this.state,t=e.column,n=e.direction;return l.a.createElement(le.a,{sortable:!0,celled:!0,compact:!0},l.a.createElement(le.a.Header,null,l.a.createElement(le.a.Row,null,l.a.createElement(le.a.HeaderCell,{sorted:"seed"===t?n:null,onClick:this.handleSort("seed",function(e){return e.seed})},"Seed"),l.a.createElement(le.a.HeaderCell,{sorted:"player_name"===t?n:null,onClick:this.handleSort("player_name",function(e){return e.player})},"Player"),l.a.createElement(le.a.HeaderCell,{sorted:"total_points"===t?n:null,onClick:this.handleSort("total_points",function(e){return e.points[0].total_points})},"Total Points"),l.a.createElement(le.a.HeaderCell,{sorted:"adjusted_points"===t?n:null,onClick:this.handleSort("adjusted_points",function(e){return e.points[0].adjusted_points})},"Adjusted Points"),l.a.createElement(le.a.HeaderCell,{sorted:"division"===t?n:null,onClick:this.handleSort("division",function(e){return e.points[0].division})},"Division"),l.a.createElement(le.a.HeaderCell,{sorted:"weeks_played"===t?n:null,onClick:this.handleSort("weeks_played",function(e){return e.points[0].weeks_played})},"Weeks Played"),l.a.createElement(le.a.HeaderCell,{sorted:"wins"===t?n:null,onClick:this.handleSort("wins",function(e){return e.wins})},"Wins"),l.a.createElement(le.a.HeaderCell,{sorted:"losses"===t?n:null,onClick:this.handleSort("losses",function(e){return e.losses})},"Losses"),l.a.createElement(le.a.HeaderCell,{sorted:"wp"===t?n:null,onClick:this.handleSort("wp",function(e){return e.wp})},"WP"),l.a.createElement(le.a.HeaderCell,{sorted:"owp"===t?n:null,onClick:this.handleSort("owp",function(e){return e.owp})},"OWP"),l.a.createElement(le.a.HeaderCell,{sorted:"oowp"===t?n:null,onClick:this.handleSort("oowp",function(e){return e.oowp})},"OOWP"),l.a.createElement(le.a.HeaderCell,{sorted:"sos"===t?n:null,onClick:this.handleSort("sos",function(e){return e.sos})},"SOS"),l.a.createElement(le.a.HeaderCell,{sorted:"rpi"===t?n:null,onClick:this.handleSort("rpi",function(e){return e.rpi})},"RPI"))),l.a.createElement(le.a.Body,null,this.props.stats.map(function(e){return l.a.createElement(le.a.Row,{hidden:e.hidden,key:e.player},l.a.createElement(le.a.Cell,null,e.seed),l.a.createElement(le.a.Cell,null,e.player),l.a.createElement(le.a.Cell,null,e.points[0].total_points),l.a.createElement(le.a.Cell,null,e.points[0].adjusted_points),l.a.createElement(le.a.Cell,{bgcolor:e.points[0].color},e.points[0].division),l.a.createElement(le.a.Cell,null,e.points[0].weeks_played),l.a.createElement(le.a.Cell,null,e.wins),l.a.createElement(le.a.Cell,null,e.losses),l.a.createElement(le.a.Cell,null,e.wp.toFixed(3)),l.a.createElement(le.a.Cell,null,e.owp.toFixed(3)),l.a.createElement(le.a.Cell,null,e.oowp.toFixed(3)),l.a.createElement(le.a.Cell,null,e.sos.toFixed(3)),l.a.createElement(le.a.Cell,null,e.rpi.toFixed(3)))})))}}]),t}(a.Component),ue=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value),n.fetchData)},n.handleFilterChange=function(e,t){var a=t.value,l=n.state.stats.map(function(e){return e.points[0].weeks_played<a?e.hidden=!0:e.hidden=!1,e});n.setState({min_weeks:a,stats:l})},n.sortTable=function(e){n.setState({stats:ie.a.orderBy(n.state.stats,[e],["desc"])})},n.reverseTable=function(){n.setState({stats:n.state.stats.reverse()})},n.state={stats:[],season:16,min_weeks:3},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"fetchData",value:function(){var e=this;console.log("Fetching: /ppl-scoring/stats/"+this.state.season),fetch("/ppl-scoring/stats/"+this.state.season).then(function(e){return e.json()}).then(function(e){return e.map(function(e,t){return e.seed=t+1,e})}).then(function(e){return function(e){var t=e.slice(0,32).map(function(e){return e.points[0].division="A",e.points[0].color="#EE82EE",e}),n=e.slice(32,64).map(function(e){return e.points[0].division="B",e.points[0].color="#FFA500",e}),a=e.slice(64,96).map(function(e){return e.points[0].division="C",e.points[0].color="#32CD32",e}),l=e.slice(96,e.length+1).map(function(e){return e.points[0].division="X",e.points[0].color="#FFFFFF",e});return t.concat(n).concat(a).concat(l)}(e)}).then(function(t){return t.map(function(t){return t.points[0].weeks_played<e.state.min_weeks?t.hidden=!0:t.hidden=!1,t})}).then(function(t){return e.setState({stats:t})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Stats"),l.a.createElement(Y,{value:this.state.season,onChange:this.handleChange}),l.a.createElement(ae,{value:this.state.min_weeks,onChange:this.handleFilterChange}),l.a.createElement(ce,{season:this.state.season,stats:this.state.stats,sortFunction:this.sortTable,reverseFunction:this.reverseTable}))}}]),t}(a.Component),de=n(275),pe=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(_,null),l.a.createElement(h.a,{exact:!0,path:"/",component:O}),l.a.createElement(h.a,{exact:!0,path:"/results",component:te}),l.a.createElement(h.a,{exact:!0,path:"/standings",component:se}),l.a.createElement(h.a,{exact:!0,path:"/stats",component:ue})))}}]),t}(a.Component),he=Object(de.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(pe),me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(562);r.a.render(l.a.createElement(he,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ppl-scoring",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ppl-scoring","/service-worker.js");me?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ee(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Ee(e)})}}()}},[[285,1,2]]]);
//# sourceMappingURL=main.99885c14.chunk.js.map