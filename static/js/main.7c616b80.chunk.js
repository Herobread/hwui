(this["webpackJsonphw-react"]=this["webpackJsonphw-react"]||[]).push([[0],{16:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(6),s=n.n(i),a=(n(16),n.p,n(24),n(10)),d=(n(25),n(0)),o=function(){return Object(d.jsxs)("div",{id:"navbar",children:[Object(d.jsx)("div",{className:"item",children:Object(d.jsx)(a.b,{to:"/schedule",children:Object(d.jsx)("div",{className:"nav-item",children:"Schedule"})})}),Object(d.jsx)("div",{className:"item",children:Object(d.jsx)(a.b,{to:"/daily/:id",children:Object(d.jsx)("div",{className:"nav-item",children:"Daily"})})}),Object(d.jsx)("div",{className:"item",children:Object(d.jsx)(a.b,{to:"/something",children:Object(d.jsx)("div",{className:"nav-item",children:"Something"})})})]})},l=(n(32),function(e){new Date;return 1==e.isButtons?Object(d.jsxs)("div",{id:"header-wrapper",children:[Object(d.jsx)("h1",{id:"header",style:{float:"left"},children:e.text+"asda"}),Object(d.jsx)("button",{className:"buttons",children:"right"}),Object(d.jsx)("button",{className:"buttons",children:"left"})]}):Object(d.jsx)("div",{children:Object(d.jsx)("h1",{id:"header",children:e.text})})}),j=(n(33),n(34),function(e){return"del"==e.text?Object(d.jsx)("div",{}):Object(d.jsx)("div",{class:"banner-panel",children:Object(d.jsx)("span",{className:"banner-text",id:"banner",children:e.text})})});function h(e){var t=new Date;t.setDate(e.date);var n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return Object(d.jsxs)("td",{className:"dayNum",children:[Object(d.jsx)("p",{className:e.isRed?"num red":"num",children:t.getDate()}),Object(d.jsx)("p",{className:"day",children:n[t.getDay()]}),Object(d.jsx)("p",{className:"dayMobile",children:n[t.getDay()].substring(0,3)})]})}function u(e){return Object(d.jsx)("td",{children:Object(d.jsx)("p",{className:"content",children:e.description})})}var b=function(e){return Object(d.jsxs)("div",{id:"tableFlex",children:[Object(d.jsx)("table",{id:"dayTable",children:Object(d.jsxs)("tr",{id:"dayPanel",children:[Object(d.jsx)(h,{date:(new Date).getDate()-1}),Object(d.jsx)(h,{date:(new Date).getDate(),isRed:"true "}),Object(d.jsx)(h,{date:(new Date).getDate()+1}),Object(d.jsx)(h,{date:(new Date).getDate()+2}),Object(d.jsx)(h,{date:(new Date).getDate()+3}),Object(d.jsx)(h,{date:(new Date).getDate()+4}),Object(d.jsx)(h,{date:(new Date).getDate()+5})]})}),Object(d.jsx)("table",{id:"contentTable",children:Object(d.jsxs)("tr",{id:"contentPanel",children:[Object(d.jsx)(u,{description:e.description[0]}),Object(d.jsx)(u,{description:e.description[1]}),Object(d.jsx)(u,{description:e.description[2]}),Object(d.jsx)(u,{description:e.description[3]}),Object(d.jsx)(u,{description:e.description[4]}),Object(d.jsx)(u,{description:e.description[5]}),Object(d.jsx)(u,{description:e.description[6]})]})})]})},m=(n(35),function(e){return 1==e.isFirst?Object(d.jsx)("p",{className:"event-info",id:"Clock",children:"00:00"}):Object(d.jsx)("p",{className:"event-info",children:e.info})});var x=function(e){return Object(d.jsxs)("div",{className:"event-item",children:[Object(d.jsx)("p",{className:"event-name",children:e.name}),Object(d.jsx)("p",{className:"event-time",children:e.time}),Object(d.jsx)(m,{isFirst:e.isFirst,info:e.info})]})},O=new Date;function y(){for(var e=[],t=new Date,n=t.getDay(),r=1,c="",i="",s=0;s<p[n].length;s+=1){c=p[n][s][3];var a=new Date;a.setHours(p[n][s][1].substring(0,2)),a.setMinutes(p[n][s][1].substring(3,5)),a.setSeconds(0);var o=new Date;o.setHours(p[n][s][2].substring(0,2)),o.setMinutes(p[n][s][2].substring(3,5)),o.setSeconds(0),"00:00"==p[n][s][2]&&o.setDate(o.getDate()+1),"",i="",1==r&&(i="Now: ",s,O=o),(a.getTime()-t.getTime()>0||o.getTime()-t.getTime()>0)&&(e.push(Object(d.jsx)(x,{name:i+p[n][s][0],time:p[n][s][1]+"-"+p[n][s][2],info:c,isFirst:r})),r=0)}return e}setInterval((function(){var e=new Date,t=parseInt((O.getTime()-e.getTime())/1e3),n=t%60<10?"0"+t%60:t%60;t/=60;var r=parseInt(t%60)<10?"0"+parseInt(t%60):parseInt(t%60),c=(parseInt(t/60)>0?parseInt(t/60)+":":"")+r+":"+n;"00:00"==c&&"/daily"==window.location.pathname&&(console.log(y()),window.location.reload(!1));try{document.getElementById("Clock").textContent=c}catch(i){}}),1e3);var g=function(){return Object(d.jsx)("div",{className:"event-wrapper",children:Object(d.jsx)("div",{id:"event-wrapper",children:y()})})},p=[[["Chill","00:00","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Astronomy/World liturature","08:35","09:20","121"],["Break","09:20","09:30"," "],["Ukrainian language","09:30","10:15","322/121"],["Break","10:15","10:25"," "],["Ukrainian language","10:25","11:10","322/121"],["Lunch","11:10","11:25"," "],["P.E.","11:25","12:10","-"],["Break","12:10","12:20"," "],["Algebra, lecture","12:20","13:05","121"],["Break","13:05","13:15"," "],["Algebra, lecture","13:15","14:00","121"],["Dinner","14:00","14:10"," "],['"Free" time',"14:10","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Informatics","08:35","09:20","105a/104"],["Break","09:20","09:30"," "],["Informatics","09:30","10:15","105a/104"],["Break","10:15","10:25"," "],["Geometry, lecture","10:25","11:10","121"],["Lunch","11:10","11:25"," "],["Geometry, lecture","11:25","12:10","121"],["Break","12:10","12:20"," "],["English","12:20","13:05","121/317"],["Break","13:05","13:15"," "],["World history","13:15","14:00","121"],["Dinner","14:00","14:10"," "],['"Free" time',"14:10","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Biology","08:35","09:20","121"],["Break","09:20","09:30"," "],["Geometry/Physics","09:30","10:15","121/208"],["Break","10:15","10:25"," "],["Geometry/Physics","10:25","11:10","121/208"],["Lunch","11:10","11:25"," "],["Physics/Geometry","11:25","12:10","208/121"],["Break","12:10","12:20"," "],["Physics/Geometry","12:20","13:05","208/121"],["Break","13:05","13:15"," "],["P.E.","13:15","14:00","-"],["Dinner","14:00","14:10"," "],['"Free" time',"14:10","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Geography","08:35","09:20","121"],["Break","09:20","09:30"," "],["Algebra, lecture","09:30","10:15","121"],["Break","10:15","10:25"," "],["English","10:25","11:10","121/317"],["Lunch","11:10","11:25"," "],["Ukrainian literature","11:25","12:10","121"],["Break","12:10","12:20"," "],["Ukrainian literature","12:20","13:05","121"],["Break","13:05","13:15"," "],["Physics, lecture","13:15","14:00","121"],["Break","14:00","14:10"," "],["Physics, lecture","14:10","14:55","121"],["Dinner","14:55","15:05"," "],['"Free" time',"15:05","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["IT","08:35","09:20","103/105a"],["Break","09:20","09:30"," "],["Ukrainian protection","09:30","10:15","121"],["Break","10:15","10:25"," "],["Ukrainian history","10:25","11:10","121"],["Lunch","11:10","11:25"," "],["Algebra/Physics","11:25","12:10","121/lab10"],["Break","12:10","12:20"," "],["Algebra/Physics","12:20","13:05","121/lab10"],["Break","13:05","13:15"," "],["Physics/Algebra","13:15","14:00","lab10/121"],["Break","14:00","14:10"," "],["Physics/Algebra","14:10","14:55","lab10/121"],["Dinner","14:55","15:05"," "],['"Free" time',"15:05","00:00"," "]],[['"Free" time',"00:00","08:35"," "],["Physics, lecture","08:35","09:20","121"],["Break","09:20","09:30"," "],["Physics, lecture","09:30","10:15","121"],["Break","10:15","10:25"," "],["Chemistry","10:25","11:10","303"],["Lunch","11:10","11:25"," "],["P.E.","11:25","12:10","-"],["Break","12:10","12:20"," "],["English","12:20","13:05","121/317"],["Dinner","13:05","13:15"," "],['"Free" time',"13:15","00:00"," "]]],f=n(3),v=(n(36),n(40)),D=n(39),B=function(e){var t=new Date,n=Object(f.f)();return Object(d.jsx)(v.a,{children:Object(d.jsx)(D.a,{timeout:150,classNames:"fade",children:Object(d.jsxs)(f.c,{location:n,children:[Object(d.jsx)(f.a,{path:"/daily/:id",component:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{isButtons:0,text:w(t)+", "+t.getDate()}),Object(d.jsx)(g,{})]})}}),Object(d.jsx)(f.a,{path:"/something",component:function(){return Object(d.jsx)(l,{text:"Something"})}}),Object(d.jsx)(f.a,{component:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{text:t.toLocaleDateString("en-US",{month:"long",year:"numeric"})}),Object(d.jsx)(b,{description:e.descArray})]})}})]})},n.pathname)})};function w(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]}setInterval((function(){try{if(window.innerWidth<=700)for(var e=0;e<6;e+=1)document.getElementById("dayPanel").children[e].style.height=document.getElementById("contentPanel").children[e].clientHeight+0+"px",document.getElementById("contentPanel").children[e].style.height=document.getElementById("dayPanel").children[e].clientHeight+"px";else document.getElementById("dayPanel").children[e].style.height="228px"}catch(t){}}),100);var k=function(e){return new Date,Object(d.jsx)(a.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(d.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins",rel:"stylesheet"}),Object(d.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/typed.js@2.0.12"}),Object(d.jsx)(o,{}),Object(d.jsx)(B,{descArray:e.descArray})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};function E(){try{if(window.innerWidth<=700){for(var e=0;e<6;e+=1)document.getElementById("dayPanel").children[e].style.height=document.getElementById("contentPanel").children[e].clientHeight-0+"px";console.log(document.getElementById("dayPanel").children[0].clientHeight)}}catch(t){}}s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(k,{descArray:[]})}),document.getElementById("root"));!function(e){var t=["","","","","",""];s.a.render(Object(d.jsxs)(c.a.StrictMode,{children:[Object(d.jsx)(k,{descArray:[]}),Object(d.jsx)(j,{text:"Loading data..."})]}),document.getElementById("root"));var n=new XMLHttpRequest;n.onload=function(e){if(200===n.status){var r=[];try{"PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"==(r=JSON.parse(n.responseText)).code&&s.a.render(Object(d.jsxs)(c.a.StrictMode,{children:[Object(d.jsx)(k,{descArray:[]}),Object(d.jsx)(j,{text:"Error raised: failed to get data from API (Some fatal hosting error)"})]}),document.getElementById("root"))}catch(e){console.error("JSON parse error")}console.dir(n.responseText),console.dir(r);for(var i=(new Date).getDate(),a=0;a<r.length;a++)t[new Date(r[a].date).getDate()-i+1]+=r[a].subject+": "+r[a].description+"\n\n",console.dir(t),s.a.render(Object(d.jsxs)(c.a.StrictMode,{children:[Object(d.jsx)(j,{text:"del"}),Object(d.jsx)(k,{descArray:t})]}),document.getElementById("root")),E()}else console.warn("XHR Code not 200",n.status)},n.ontimeout=function(e){console.error("XHR Timeout"),s.a.render(Object(d.jsxs)(c.a.StrictMode,{children:[Object(d.jsx)(k,{descArray:[]}),Object(d.jsx)(j,{text:"Error raised: failed to get data from API (timeout)"})]}),document.getElementById("root"))},n.onerror=function(e){console.error("XHR Error"),s.a.render(Object(d.jsxs)(c.a.StrictMode,{children:[Object(d.jsx)(k,{descArray:[]}),Object(d.jsx)(j,{text:"Error raised: failed to get data from API ("+n.status+")"})]}),document.getElementById("root"))},n.open("GET",e),n.send()}("https://herobread-hw-api.herokuapp.com/week"),P()}},[[37,1,2]]]);
//# sourceMappingURL=main.7c616b80.chunk.js.map