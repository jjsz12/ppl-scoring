(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{285:function(e,t,n){e.exports=n(563)},293:function(e,t,n){},294:function(e,t,n){},563:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(42),o=n.n(r),s=(n(293),n(9)),i=n(10),c=n(12),u=n(11),d=n(13),h=n(49),p=n(56),m=(n(294),n(249)),f=n.n(m),E=n(251),v=n.n(E),k=n(252),g=n.n(k),C=n(253),w=n.n(C),b=n(78),j=n.n(b),y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"navigation"},l.a.createElement(f.a,{position:"static"},l.a.createElement(v.a,null,l.a.createElement(g.a,{className:"menuButton",color:"inherit","aria-label":"Menu"},l.a.createElement(w.a,null)),l.a.createElement(h.b,{to:"/"},l.a.createElement(j.a,{color:"inherit"},"Home")),l.a.createElement(h.b,{to:"/results"},l.a.createElement(j.a,{color:"inherit"},"Results")),l.a.createElement(h.b,{to:"/standings"},l.a.createElement(j.a,{color:"inherit"},"Standings")),l.a.createElement(h.b,{to:"/stats"},l.a.createElement(j.a,{color:"inherit"},"Stats")),l.a.createElement(h.b,{to:"/players"},l.a.createElement(j.a,{color:"inherit"},"Players")))))}}]),t}(a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("h1",null,"Home")}}]),t}(a.Component),_=n(75),S=n(88),F=n(166),H=n.n(F),x=n(256),D=n.n(x),P=n(258),W=n.n(P),A=n(27),B=n.n(A),T=n(257),R=n.n(T),M=n(123),N=n.n(M),G=n(86),L=n.n(G),U=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(L.a,null,l.a.createElement(D.a,{padding:"dense"},l.a.createElement(R.a,null,l.a.createElement(N.a,null,l.a.createElement(B.a,null,"Group ",this.props.data._id.group_id," (",this.props.data.location,")"),l.a.createElement(B.a,{colSpan:2},this.props.data.games[0]),l.a.createElement(B.a,{colSpan:2},this.props.data.games[1]),l.a.createElement(B.a,{colSpan:2},this.props.data.games[2]),l.a.createElement(B.a,null)),l.a.createElement(N.a,null,l.a.createElement(B.a,null,"Players"),l.a.createElement(B.a,null,"Game 1 Scores "),l.a.createElement(B.a,null,"Points"),l.a.createElement(B.a,null,"Game 2 Scores "),l.a.createElement(B.a,null,"Points"),l.a.createElement(B.a,null,"Game 3 Scores "),l.a.createElement(B.a,null,"Points"),l.a.createElement(B.a,null,"Total Points"))),l.a.createElement(W.a,null,this.props.data.results.map(function(e){var t=0;return l.a.createElement(N.a,null,l.a.createElement(B.a,null,e.player),e.scores.map(function(e){return t+=e.points,l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,null,e.score),l.a.createElement(B.a,null,e.points))}),l.a.createElement(B.a,null,t))}))))}}]),t}(a.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return 0!==this.props.results.length?l.a.createElement(H.a,{container:!0,spacing:24},this.props.results.map(function(e){return l.a.createElement(H.a,{item:!0,xs:12},l.a.createElement(U,{data:e}))})):l.a.createElement(L.a,null,"No results found.")}}]),t}(a.Component),J=n(87),X=n.n(J),Q=n(118),$=n.n(Q),q=n(117),z=n.n(q),K=n(119),V=n.n(K),Y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={dates:[]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"fetchData",value:function(){var e=this;console.log("Fetching: /ppl-scoring/dates/seasons"),fetch("/ppl-scoring/dates/seasons").then(function(e){return e.json()}).then(function(t){return e.setState({dates:t})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return l.a.createElement(z.a,null,l.a.createElement($.a,null,"Season"),l.a.createElement(V.a,{value:this.props.value,onChange:this.props.onChange,input:l.a.createElement(X.a,{name:"season",id:"season-native"})},this.state.dates.map(function(e){return l.a.createElement("option",{value:e._id,key:e._id},e._id," -- (",e.start," - ",e.end,")")})))}}]),t}(a.Component),Z=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(z.a,null,l.a.createElement($.a,null,"Week"),l.a.createElement(V.a,{value:this.props.value,onChange:this.props.onChange,input:l.a.createElement(X.a,{name:"week",id:"week-native"})},l.a.createElement("option",{vaule:1},"1"),l.a.createElement("option",{vaule:2},"2"),l.a.createElement("option",{vaule:3},"3"),l.a.createElement("option",{vaule:4},"4"),l.a.createElement("option",{vaule:5},"5"),l.a.createElement("option",{vaule:6},"6"),l.a.createElement("option",{vaule:7},"7"),l.a.createElement("option",{vaule:8},"8"),l.a.createElement("option",{vaule:9},"9")))}}]),t}(a.Component),ee=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Filter")}}]),t}(a.Component),te=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value),n.fetchData)},n.handleChange=n.handleChange.bind(Object(S.a)(Object(S.a)(n))),n.state={results:[],season:16,week:9},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"fetchData",value:function(){var e=this;console.log("Fetching: /ppl-scoring/results/"+this.state.season+"/"+this.state.week),fetch("/ppl-scoring/results/"+this.state.season+"/"+this.state.week).then(function(e){return e.json()}).then(function(t){return e.setState({results:t})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Results"),l.a.createElement(Y,{value:this.state.season,onChange:this.handleChange}),l.a.createElement(Z,{value:this.state.week,onChange:this.handleChange}),l.a.createElement(ee,null),l.a.createElement(I,{results:this.state.results}))}}]),t}(a.Component),ne=n(568),ae=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={options:[{key:"1",value:1,text:"one"},{key:"2",value:2,text:"two"},{key:"3",value:3,text:"three"},{key:"4",value:4,text:"four"},{key:"5",value:5,text:"five"},{key:"6",value:6,text:"six"},{key:"7",value:7,text:"seven"},{key:"8",value:8,text:"eight"}]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"dropdown",value:function(){return l.a.createElement(ne.a,{inline:!0,options:this.state.options,value:this.props.value,onChange:this.props.onChange})}},{key:"render",value:function(){return l.a.createElement("div",null,"Show players with at least ",this.dropdown()," week(s) played.")}}]),t}(a.Component),le=n(569),re=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSort=function(e,t){return function(){var a=n.state,l=a.column,r=a.direction;if(l!==e)return n.setState({column:e,direction:"descending"}),void n.props.sortFunction(t);n.setState({direction:"ascending"===r?"descending":"ascending"}),n.props.reverseFunction()}},n.state={column:"adjusted_points",direction:"descending"},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){e.season!==this.props.season&&this.setState({column:"adjusted_points",direction:"descending"})}},{key:"render",value:function(){var e=this.state,t=e.column,n=e.direction;return l.a.createElement(le.a,{sortable:!0,celled:!0,compact:!0},l.a.createElement(le.a.Header,null,l.a.createElement(le.a.Row,null,l.a.createElement(le.a.HeaderCell,{sorted:"seed"===t?n:null,onClick:this.handleSort("seed",function(e){return e.seed})},"Seed"),l.a.createElement(le.a.HeaderCell,{sorted:"player_name"===t?n:null,onClick:this.handleSort("player_name",function(e){return e._id.player})},"Player Name"),l.a.createElement(le.a.HeaderCell,{sorted:"total_points"===t?n:null,onClick:this.handleSort("total_points",function(e){return e.total_points})},"Total Points"),l.a.createElement(le.a.HeaderCell,{sorted:"adjusted_points"===t?n:null,onClick:this.handleSort("adjusted_points",function(e){return e.adjusted_points})},"Adjusted Points"),l.a.createElement(le.a.HeaderCell,{sorted:"average_points"===t?n:null,onClick:this.handleSort("average_points",function(e){return e.average_points})},"Average Points"),l.a.createElement(le.a.HeaderCell,{sorted:"division"===t?n:null,onClick:this.handleSort("division",function(e){return e.divison})},"Division"),l.a.createElement(le.a.HeaderCell,{sorted:"week_1"===t?n:null,onClick:this.handleSort("week_1",function(e){return e.points.week_1||""})},"Week 1"),l.a.createElement(le.a.HeaderCell,{sorted:"week_2"===t?n:null,onClick:this.handleSort("week_2",function(e){return e.points.week_2||""})},"Week 2"),l.a.createElement(le.a.HeaderCell,{sorted:"week_3"===t?n:null,onClick:this.handleSort("week_3",function(e){return e.points.week_3||""})},"Week 3"),l.a.createElement(le.a.HeaderCell,{sorted:"week_4"===t?n:null,onClick:this.handleSort("week_4",function(e){return e.points.week_4||""})},"Week 4"),l.a.createElement(le.a.HeaderCell,{sorted:"week_5"===t?n:null,onClick:this.handleSort("week_5",function(e){return e.points.week_5||""})},"Week 5"),l.a.createElement(le.a.HeaderCell,{sorted:"week_6"===t?n:null,onClick:this.handleSort("week_6",function(e){return e.points.week_6||""})},"Week 6"),l.a.createElement(le.a.HeaderCell,{sorted:"week_7"===t?n:null,onClick:this.handleSort("week_7",function(e){return e.points.week_7||""})},"Week 7"),l.a.createElement(le.a.HeaderCell,{sorted:"week_8"===t?n:null,onClick:this.handleSort("week_8",function(e){return e.points.week_8||""})},"Week 8"),l.a.createElement(le.a.HeaderCell,{sorted:"makeup_week"===t?n:null,onClick:this.handleSort("makeup_week",function(e){return e.points.week_9||""})},"Makeup Week"))),l.a.createElement(le.a.Body,null,this.props.standings.map(function(e){return l.a.createElement(le.a.Row,{hidden:e.hidden,key:e._id.player},l.a.createElement(le.a.Cell,null,e.seed),l.a.createElement(le.a.Cell,null,e._id.player),l.a.createElement(le.a.Cell,null,e.total_points),l.a.createElement(le.a.Cell,null,e.adjusted_points),l.a.createElement(le.a.Cell,null,e.average_points.toFixed(2)),l.a.createElement(le.a.Cell,{bgcolor:e.color},e.division),l.a.createElement(le.a.Cell,null,e.points.week_1),l.a.createElement(le.a.Cell,null,e.points.week_2),l.a.createElement(le.a.Cell,null,e.points.week_3),l.a.createElement(le.a.Cell,null,e.points.week_4),l.a.createElement(le.a.Cell,null,e.points.week_5),l.a.createElement(le.a.Cell,null,e.points.week_6),l.a.createElement(le.a.Cell,null,e.points.week_7),l.a.createElement(le.a.Cell,null,e.points.week_8),l.a.createElement(le.a.Cell,null,e.points.week_9))})))}}]),t}(a.Component),oe=n(122),se=n.n(oe),ie=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value),n.fetchData)},n.handleFilterChange=function(e,t){var a=t.value,l=n.state.standings.map(function(e){return e.weeks_played<a?e.hidden=!0:e.hidden=!1,e});console.log(l),n.setState({min_weeks:a,standings:l})},n.sortStandings=function(e){n.setState({standings:se.a.orderBy(n.state.standings,[e],["desc"])})},n.reverseStandings=function(){n.setState({standings:n.state.standings.reverse()})},n.state={standings:[],season:16,min_weeks:1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"fetchData",value:function(){var e=this;console.log("Fetching: /ppl-scoring/standings/"+this.state.season),fetch("/ppl-scoring/standings/"+this.state.season).then(function(e){return e.json()}).then(function(e){return e.map(function(e,t){return e.seed=t+1,e})}).then(function(e){return function(e){var t=e.slice(0,32).map(function(e){return e.division="A",e.color="#EE82EE",e}),n=e.slice(32,64).map(function(e){return e.division="B",e.color="#FFA500",e}),a=e.slice(64,96).map(function(e){return e.division="C",e.color="#32CD32",e}),l=e.slice(96,e.length+1).map(function(e){return e.division="X",e.color="#FFFFFF",e});return t.concat(n).concat(a).concat(l)}(e)}).then(function(t){return t.map(function(t){return t.weeks_played<e.state.min_weeks?t.hidden=!0:t.hidden=!1,t})}).then(function(t){return e.setState({standings:t})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Standings"),l.a.createElement(Y,{value:this.state.season,onChange:this.handleChange}),l.a.createElement(ae,{value:this.state.min_weeks,onChange:this.handleFilterChange}),l.a.createElement(re,{season:this.state.season,standings:this.state.standings,sortFunction:this.sortStandings,reverseFunction:this.reverseStandings}))}}]),t}(a.Component),ce=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSort=function(e,t){return function(){var a=n.state,l=a.column,r=a.direction;if(l!==e)return n.setState({column:e,direction:"descending"}),void n.props.sortFunction(t);n.setState({direction:"ascending"===r?"descending":"ascending"}),n.props.reverseFunction()}},n.state={column:"adjusted_points",direction:"descending"},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){e.season!==this.props.season&&this.setState({column:"adjusted_points",direction:"descending"})}},{key:"render",value:function(){var e=this.state,t=e.column,n=e.direction;return l.a.createElement(le.a,{sortable:!0,celled:!0,compact:!0},l.a.createElement(le.a.Header,null,l.a.createElement(le.a.Row,null,l.a.createElement(le.a.HeaderCell,{sorted:"seed"===t?n:null,onClick:this.handleSort("seed",function(e){return e.seed})},"Seed"),l.a.createElement(le.a.HeaderCell,{sorted:"player_name"===t?n:null,onClick:this.handleSort("player_name",function(e){return e.player})},"Player"),l.a.createElement(le.a.HeaderCell,{sorted:"total_points"===t?n:null,onClick:this.handleSort("total_points",function(e){return e.points[0].total_points})},"Total Points"),l.a.createElement(le.a.HeaderCell,{sorted:"adjusted_points"===t?n:null,onClick:this.handleSort("adjusted_points",function(e){return e.points[0].adjusted_points})},"Adjusted Points"),l.a.createElement(le.a.HeaderCell,{sorted:"division"===t?n:null,onClick:this.handleSort("division",function(e){return e.points[0].division})},"Division"),l.a.createElement(le.a.HeaderCell,{sorted:"weeks_played"===t?n:null,onClick:this.handleSort("weeks_played",function(e){return e.points[0].weeks_played})},"Weeks Played"),l.a.createElement(le.a.HeaderCell,{sorted:"wins"===t?n:null,onClick:this.handleSort("wins",function(e){return e.wins})},"Wins"),l.a.createElement(le.a.HeaderCell,{sorted:"losses"===t?n:null,onClick:this.handleSort("losses",function(e){return e.losses})},"Losses"),l.a.createElement(le.a.HeaderCell,{sorted:"wp"===t?n:null,onClick:this.handleSort("wp",function(e){return e.wp})},"WP"),l.a.createElement(le.a.HeaderCell,{sorted:"owp"===t?n:null,onClick:this.handleSort("owp",function(e){return e.owp})},"OWP"),l.a.createElement(le.a.HeaderCell,{sorted:"oowp"===t?n:null,onClick:this.handleSort("oowp",function(e){return e.oowp})},"OOWP"),l.a.createElement(le.a.HeaderCell,{sorted:"sos"===t?n:null,onClick:this.handleSort("sos",function(e){return e.sos})},"SOS"),l.a.createElement(le.a.HeaderCell,{sorted:"rpi"===t?n:null,onClick:this.handleSort("rpi",function(e){return e.rpi})},"RPI"))),l.a.createElement(le.a.Body,null,this.props.stats.map(function(e){return l.a.createElement(le.a.Row,{hidden:e.hidden,key:e.player},l.a.createElement(le.a.Cell,null,e.seed),l.a.createElement(le.a.Cell,null,e.player),l.a.createElement(le.a.Cell,null,e.points[0].total_points),l.a.createElement(le.a.Cell,null,e.points[0].adjusted_points),l.a.createElement(le.a.Cell,{bgcolor:e.points[0].color},e.points[0].division),l.a.createElement(le.a.Cell,null,e.points[0].weeks_played),l.a.createElement(le.a.Cell,null,e.wins),l.a.createElement(le.a.Cell,null,e.losses),l.a.createElement(le.a.Cell,null,e.wp.toFixed(3)),l.a.createElement(le.a.Cell,null,e.owp.toFixed(3)),l.a.createElement(le.a.Cell,null,e.oowp.toFixed(3)),l.a.createElement(le.a.Cell,null,e.sos.toFixed(3)),l.a.createElement(le.a.Cell,null,e.rpi.toFixed(3)))})))}}]),t}(a.Component),ue=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value),n.fetchData)},n.handleFilterChange=function(e,t){var a=t.value,l=n.state.stats.map(function(e){return e.points[0].weeks_played<a?e.hidden=!0:e.hidden=!1,e});n.setState({min_weeks:a,stats:l})},n.sortTable=function(e){n.setState({stats:se.a.orderBy(n.state.stats,[e],["desc"])})},n.reverseTable=function(){n.setState({stats:n.state.stats.reverse()})},n.state={stats:[],season:16,min_weeks:3},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"fetchData",value:function(){var e=this;console.log("Fetching: /ppl-scoring/stats/"+this.state.season),fetch("/ppl-scoring/stats/"+this.state.season).then(function(e){return e.json()}).then(function(e){return e.map(function(e,t){return e.seed=t+1,e})}).then(function(e){return function(e){var t=e.slice(0,32).map(function(e){return e.points[0].division="A",e.points[0].color="#EE82EE",e}),n=e.slice(32,64).map(function(e){return e.points[0].division="B",e.points[0].color="#FFA500",e}),a=e.slice(64,96).map(function(e){return e.points[0].division="C",e.points[0].color="#32CD32",e}),l=e.slice(96,e.length+1).map(function(e){return e.points[0].division="X",e.points[0].color="#FFFFFF",e});return t.concat(n).concat(a).concat(l)}(e)}).then(function(t){return t.map(function(t){return t.points[0].weeks_played<e.state.min_weeks?t.hidden=!0:t.hidden=!1,t})}).then(function(t){return e.setState({stats:t})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Stats"),l.a.createElement(Y,{value:this.state.season,onChange:this.handleChange}),l.a.createElement(ae,{value:this.state.min_weeks,onChange:this.handleFilterChange}),l.a.createElement(ce,{season:this.state.season,stats:this.state.stats,sortFunction:this.sortTable,reverseFunction:this.reverseTable}))}}]),t}(a.Component),de=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={players:[]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(ne.a,{placeholder:"Select a player...",search:!0,selection:!0,options:this.props.players,onChange:this.props.onChange})}}]),t}(a.Component),he=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handlePlayerSelect=function(e,t){var a=t.value;n.setState({selected:a})},n.state={players:[],selected:""},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"fetchData",value:function(){var e=this;console.log("Fetching: /ppl-scoring/players"),fetch("/ppl-scoring/players").then(function(e){return e.json()}).then(function(e){return e.map(function(e){return{key:e,value:e,text:e}})}).then(function(t){return e.setState({players:t})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Players"),l.a.createElement(de,{players:this.state.players,onChange:this.handlePlayerSelect}),l.a.createElement("h5",null,this.state.selected))}}]),t}(a.Component),pe=n(275),me=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(y,null),l.a.createElement(p.a,{exact:!0,path:"/",component:O}),l.a.createElement(p.a,{exact:!0,path:"/results",component:te}),l.a.createElement(p.a,{exact:!0,path:"/standings",component:ie}),l.a.createElement(p.a,{exact:!0,path:"/stats",component:ue}),l.a.createElement(p.a,{exact:!0,path:"/players",component:he})))}}]),t}(a.Component),fe=Object(pe.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(me),Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(562);o.a.render(l.a.createElement(fe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ppl-scoring",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ppl-scoring","/service-worker.js");Ee?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ve(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ve(e)})}}()}},[[285,1,2]]]);
//# sourceMappingURL=main.0db2c043.chunk.js.map