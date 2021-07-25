(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(49),o=a.n(r),i=a(139),s=a(135),l=a(34),j=a(37),p=a(11),d=a(42),b=a(83),u=a(8),m="SET_DATA",h="SET_SPRITES",O="SET_SKILLS",f="CLEAR_POKEDATA",x="ADD_TO_TEAM",y="REMOVE_FROM_TEAM",g="CLEAR_TEAM",k={data:null,sprites:null,skills:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case m:return Object(u.a)(Object(u.a)({},e),{},{data:n});case h:return Object(u.a)(Object(u.a)({},e),{},{sprites:n});case O:return Object(u.a)(Object(u.a)({},e),{},{skills:n});case f:return{data:null,sprites:null,skills:null};default:return e}},v=a(15),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case x:return[].concat(Object(v.a)(e),[n]);case y:return e.filter((function(e){return e.data.name!==n}));case g:return[];default:return e}},T=Object(d.b)({pokeData:S,myTeam:w}),D=[b.a],C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,E=Object(d.d)(T,C(d.a.apply(void 0,D))),A=a(3),_=a(115),I=a(125),M=a(126),P=a(140),R=a(127),W=a(128),F=a(129),z=a(130),N=a(74),J=a.p+"static/media/logo.399cde57.png",L=a(2),H=function(){var e=Object(_.b)(),t=e.colorMode,a=e.toggleColorMode,n=Object(I.a)("(min-width: 500px"),c=Object(A.a)(n,1)[0],r="dark"===t;return Object(L.jsxs)(M.a,{w:"100%",px:"3em",alignItems:"center",children:[Object(L.jsx)(P.a,{src:J,alt:"logo",boxSize:"2em",mr:"0.7em"}),Object(L.jsx)(R.a,{my:"2",fontSize:"1.8em",color:"cyan.500",display:c?"block":"none",children:"Pok\xe9 App"}),Object(L.jsx)(W.a,{}),Object(L.jsx)(F.a,{as:j.b,to:"/",px:"0.7em",py:"1em",fontWeight:"semibold",fontSize:"1.2rem",color:"cyan.500",children:"Home"}),Object(L.jsx)(F.a,{as:j.b,to:"/myteam",px:"0.7em",py:"1em",fontWeight:"semibold",fontSize:"1.2rem",color:"cyan.500",children:"Team"}),Object(L.jsx)(z.a,{icon:r?Object(L.jsx)(N.b,{}):Object(L.jsx)(N.a,{}),isRound:"true",ml:"2em",onClick:a})]})},V=a(24),B=a.n(V),K=a(38),X=a(6),q=a(133),U=a(138),Y=a(137),G=a(89),Q=a(132),Z=function(){return function(e){e({type:f})}},$=function(e){return function(t){t({type:m,payload:e})}},ee=Object(l.b)((function(e){return{pokeData:e.pokeData,myTeam:e.myTeam}}),{disSetSprites:function(e){return function(t){t({type:h,payload:e})}},disAddToTeam:function(e,t){return function(a){a({type:x,payload:{data:e,sprite:t}})}},disRemoveFromTeam:function(e){return function(t){t({type:y,payload:e})}}})((function(e){var t=e.pokeData,a=t.data,c=a.name,r=a.forms,o=a.types,i=a.height,s=a.weight,l=a.abilities,j=t.sprites,p=e.myTeam,d=e.disSetSprites,b=e.disAddToTeam,u=e.disRemoveFromTeam;Object(n.useEffect)((function(){(function(){var e=Object(K.a)(B.a.mark((function e(){var t,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r[0].url);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,d(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var m=Object(I.a)("(min-width: 500px"),h=Object(A.a)(m,1)[0],O=Object(_.b)().colorMode;return Object(L.jsxs)(U.b,{py:"2em",px:"4em",borderRadius:"3em",spacing:"1.5em",backgroundColor:"light"===O?"teal.200":"teal.800",w:h?"":"90vw",m:"auto",children:[Object(L.jsx)(Q.a,{fontSize:"2em",fontWeight:"bold",children:c}),Object(L.jsxs)(M.a,{flexDirection:h?"row":"column",children:[j&&Object(L.jsx)(P.a,{src:j.sprites.front_default,boxSize:"15em"}),Object(L.jsxs)(U.b,{spacing:"2em",align:"left",children:[Object(L.jsxs)(q.a,{children:[Object(L.jsx)(Q.a,{fontWeight:"bold",children:"Type:"}),Object(L.jsx)(U.a,{children:o.map((function(e){return Object(L.jsx)(Q.a,{children:e.type.name},e.slot)}))})]}),Object(L.jsxs)(q.a,{children:[Object(L.jsxs)(U.a,{children:[Object(L.jsx)(Q.a,{fontWeight:"bold",children:"Height:"}),Object(L.jsxs)(Q.a,{children:[100*i," cm"]})]}),Object(L.jsxs)(U.a,{children:[Object(L.jsx)(Q.a,{fontWeight:"bold",children:"Weight:"}),Object(L.jsxs)(Q.a,{children:[s/10," kg"]})]})]}),Object(L.jsxs)(q.a,{children:[Object(L.jsx)(Q.a,{fontWeight:"bold",children:"Ability:"}),l.map((function(e){return Object(L.jsx)(Q.a,{children:e.ability.name},e.ability.name)}))]})]})]}),1===p.filter((function(e){return e.data.name===c})).length?Object(L.jsxs)(G.a,{onClick:function(){u(c);var e=[];localStorage.pokeApp&&(e=JSON.parse(localStorage.getItem("pokeApp"))),e=e.filter((function(e){return e.data.name!==c})),localStorage.setItem("pokeApp",JSON.stringify(e))},color:"black",backgroundColor:"yellow.200",children:["Remove From Team ","(".concat(p.length,")")]}):Object(L.jsxs)(G.a,{onClick:function(){if(p.length<6){var e={name:c,forms:r,types:o,height:i,weight:s,abilities:l};b(e,j.sprites.front_default);var t=[];localStorage.pokeApp&&(t=JSON.parse(localStorage.getItem("pokeApp"))),t.push({data:e,sprite:j.sprites.front_default}),localStorage.setItem("pokeApp",JSON.stringify(t))}},color:"black",backgroundColor:"purple.200",children:["Add to Team ","(".concat(p.length,")")]}),6===p.length&&Object(L.jsx)(Q.a,{px:"1em",py:"0.5em",fontWeight:"bold",color:"red.400",fontSize:"1.1em",children:"Note: Max of 6 pokemon reached"})]})})),te=a.p+"static/media/header.9dc16171.png",ae=Object(l.b)(null,{disClearData:Z,disSetData:$})((function(e){var t=e.disClearData,a=e.disSetData,c=Object(n.useState)({pokeInput:"",displayFetchError:!1,displayPokeDetail:!1}),r=Object(A.a)(c,2),o=r[0],i=r[1],s=o.pokeInput,l=o.displayFetchError,j=o.displayPokeDetail;Object(n.useEffect)((function(){return function(){return t()}}),[]);var p=function(){var e=Object(K.a)(B.a.mark((function e(n){var c,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(s.toLowerCase()));case 3:if(404===(c=e.sent).status&&(i(Object(u.a)(Object(u.a)({},o),{},{displayFetchError:!0,displayPokeDetail:!1})),t()),200!==c.status){e.next=11;break}return e.next=8,c.json();case 8:r=e.sent,a(r),i(Object(u.a)(Object(u.a)({},o),{},{pokeInput:"",displayFetchError:!1,displayPokeDetail:!0}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(K.a)(B.a.mark((function e(){var n,c,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.floor(898*Math.random())+1,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(n));case 3:if(404===(c=e.sent).status&&(i(Object(u.a)(Object(u.a)({},o),{},{displayFetchError:!0,displayPokeDetail:!1})),t()),200!==c.status){e.next=11;break}return e.next=8,c.json();case 8:r=e.sent,a(r),i(Object(u.a)(Object(u.a)({},o),{},{pokeInput:"",displayFetchError:!1,displayPokeDetail:!0}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(L.jsxs)(U.b,{spacing:"50",children:[Object(L.jsxs)(q.a,{pt:"10",children:[Object(L.jsx)(P.a,{src:te,alt:"logo",width:"20em",height:"7em",mb:"3em"}),Object(L.jsx)("form",{onSubmit:p,children:Object(L.jsxs)(U.b,{spacing:"5",children:[Object(L.jsx)(Y.a,{size:"lg",variant:"filled",focusBorderColor:"pink.400",placeholder:"Search for pokemon",name:"pokeInput",value:o.pokeInput,onChange:function(e){i(Object(u.a)(Object(u.a)({},o),{},Object(X.a)({},e.target.name,e.target.value)))},isRequired:!0}),Object(L.jsxs)(U.a,{spacing:"1.5em",children:[Object(L.jsx)(G.a,{colorScheme:"teal",type:"submit",children:"Search"}),Object(L.jsx)(G.a,{colorScheme:"teal",type:"button",onClick:d,children:"Surprise Me!"})]})]})}),l&&Object(L.jsx)(Q.a,{fontSize:"lg",mt:"5",py:"1",align:"center",backgroundColor:"red.300",color:"black",children:"Pokemon Not Found"})]}),j&&Object(L.jsx)(q.a,{children:Object(L.jsx)(ee,{})})]})})),ne=a(136),ce=Object(l.b)((function(e){return{myTeam:e.myTeam}}),{disSetData:$,disClearData:Z,disClearTeam:function(){return function(e){e({type:g})}}})((function(e){var t=e.myTeam,a=e.disSetData,c=e.disClearData,r=e.disClearTeam,o=Object(n.useState)({displayPokeDetail:!1}),i=Object(A.a)(o,2),s=i[0],l=i[1],p=Object(_.b)().colorMode,d=Object(I.a)("(min-width: 500px"),b=Object(A.a)(d,1)[0],m=s.displayPokeDetail;Object(n.useEffect)((function(){return l(Object(u.a)(Object(u.a)({},s),{},{displayPokeDetail:!1})),function(){c()}}),[t]);var h=function(){var e=Object(K.a)(B.a.mark((function e(t){var n,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.name,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(n.toLowerCase())).then((function(e){return e.json()}));case 3:c=e.sent,a(c),l(Object(u.a)(Object(u.a)({},s),{},{displayPokeDetail:!0}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsxs)(U.b,{mt:"3em",children:[Object(L.jsx)(ne.a,{allowToggle:"true",children:0!==t.length?Object(L.jsx)(U.b,{spacing:"1.5em",mb:"3em",children:t.map((function(e){return Object(L.jsxs)(ne.c,{border:"none",children:[Object(L.jsxs)(M.a,{align:"center",backgroundColor:"light"===p?"teal.200":"teal.800",borderRadius:"2.5em",px:"2em",w:b?"30em":"90vw",children:[Object(L.jsx)(P.a,{src:e.sprite}),Object(L.jsx)(Q.a,{fontWeight:"bold",display:b?"block":"none",children:e.data.name}),Object(L.jsx)(W.a,{}),Object(L.jsx)(ne.b,{w:"8em",backgroundColor:"yellow.200",borderRadius:"1em",color:"black",name:e.data.name,fontWeight:"bold",onClick:h,children:"View Details"})]}),Object(L.jsx)(ne.d,{children:m&&Object(L.jsx)(q.a,{children:Object(L.jsx)(ee,{})})})]},e.data.name)}))}):Object(L.jsxs)(q.a,{my:"2em",children:[Object(L.jsx)(Q.a,{fontWeight:"bold",fontSize:"2em",color:"cyan.500",children:"Your team is empty..."}),Object(L.jsxs)(U.a,{py:"1em",justify:"center",children:[Object(L.jsx)(F.a,{as:j.b,to:"/",fontWeight:"bold",color:"cyan.500",textDecoration:"underline",children:"Click Here"}),Object(L.jsx)(Q.a,{px:"0",my:"0.5em",color:"cyan.500",children:"to search for pokemon"})]})]})}),Object(L.jsx)(G.a,{colorScheme:"red",onClick:function(){localStorage.removeItem("pokeApp"),r()},children:"Clear My Team"})]})})),re=function(){return Object(L.jsx)(R.a,{color:"cyan.500",textAlign:"center",my:"2em",fontSize:"3em",children:"Page Not Found"})};localStorage.pokeApp&&JSON.parse(localStorage.getItem("pokeApp")).forEach((function(e){E.dispatch({type:x,payload:e})}));var oe=function(){return Object(L.jsx)(l.a,{store:E,children:Object(L.jsxs)(j.a,{children:[Object(L.jsx)(H,{}),Object(L.jsxs)(p.c,{children:[Object(L.jsx)(p.a,{exact:!0,path:"/",component:ae}),Object(L.jsx)(p.a,{exact:!0,path:"/myteam",component:ce}),Object(L.jsx)(re,{})]})]})})};o.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsxs)(i.a,{children:[Object(L.jsx)(s.a,{initialColorMode:"light"}),Object(L.jsx)(oe,{})]})}),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.0ac39fac.chunk.js.map