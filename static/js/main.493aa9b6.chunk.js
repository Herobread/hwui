(this["webpackJsonphw-react"]=this["webpackJsonphw-react"]||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(7),a=n.n(s),i=(n(16),n.p,n(25),n(10)),d=(n(26),n(0)),j=function(){return Object(d.jsxs)("div",{id:"navbar",children:[Object(d.jsx)("div",{className:"item",children:Object(d.jsx)(i.b,{to:"/schedule",children:Object(d.jsx)("div",{className:"nav-item",children:"Schedule"})})}),Object(d.jsx)("div",{className:"item",children:Object(d.jsx)(i.b,{to:"/daily",children:Object(d.jsx)("div",{className:"nav-item",children:"Daily"})})}),Object(d.jsx)("div",{className:"item",children:Object(d.jsx)(i.b,{to:"/something",children:Object(d.jsx)("div",{className:"nav-item",children:"Something"})})})]})},o=(n(33),function(e){new Date;return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{id:"header",children:e.text})})});n(18),n(34);function l(e){var t=new Date;t.setDate(e.date);var n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return Object(d.jsxs)("td",{className:"dayNum",children:[Object(d.jsx)("p",{className:e.isRed?"num red":"num",children:t.getDate()}),Object(d.jsx)("p",{className:"day",children:n[t.getDay()]}),Object(d.jsx)("p",{className:"dayMobile",children:n[t.getDay()].substring(0,3)})]})}function u(e){return Object(d.jsx)("td",{children:Object(d.jsx)("p",{className:"content",children:e.description})})}var b=function(e){return Object(d.jsxs)("div",{id:"tableFlex",children:[Object(d.jsx)("table",{id:"dayTable",children:Object(d.jsxs)("tr",{id:"dayPanel",children:[Object(d.jsx)(l,{date:(new Date).getDate()-1}),Object(d.jsx)(l,{date:(new Date).getDate(),isRed:"true "}),Object(d.jsx)(l,{date:(new Date).getDate()+1}),Object(d.jsx)(l,{date:(new Date).getDate()+2}),Object(d.jsx)(l,{date:(new Date).getDate()+3}),Object(d.jsx)(l,{date:(new Date).getDate()+4}),Object(d.jsx)(l,{date:(new Date).getDate()+5})]})}),Object(d.jsx)("table",{id:"contentTable",children:Object(d.jsxs)("tr",{id:"contentPanel",children:[Object(d.jsx)(u,{description:e.description[0]}),Object(d.jsx)(u,{description:e.description[1]}),Object(d.jsx)(u,{description:e.description[2]}),Object(d.jsx)(u,{description:e.description[3]}),Object(d.jsx)(u,{description:e.description[4]}),Object(d.jsx)(u,{description:e.description[5]}),Object(d.jsx)(u,{description:e.description[6]})]})})]})},h=(n(35),function(e){return Object(d.jsx)("div",{class:"banner-panel",children:Object(d.jsx)("span",{class:"banner-text",children:e.text})})}),m=(n(36),function(e){return 1==e.isFirst?Object(d.jsx)("p",{className:"event-info",id:"Clock",children:"00:00"}):Object(d.jsx)("p",{className:"event-info",children:e.info})});var x=function(e){return Object(d.jsxs)("div",{className:"event-item",children:[Object(d.jsx)("p",{className:"event-name",children:e.name}),Object(d.jsx)("p",{className:"event-time",children:e.time}),Object(d.jsx)(m,{isFirst:e.isFirst,info:e.info})]})},O=new Date;function p(){for(var e=[],t=new Date,n=t.getDay(),c=1,r="",s="",a=0;a<f[n].length;a+=1){r=f[n][a][3];var i=new Date;i.setHours(f[n][a][1].substring(0,2)),i.setMinutes(f[n][a][1].substring(3,5)),i.setSeconds(0);var j=new Date;j.setHours(f[n][a][2].substring(0,2)),j.setMinutes(f[n][a][2].substring(3,5)),j.setSeconds(0),"00:00"==f[n][a][2]&&j.setDate(j.getDate()+1),"",s="",1==c&&(s="Now: ",a,O=j),(i.getTime()-t.getTime()>0||j.getTime()-t.getTime()>0)&&(e.push(Object(d.jsx)(x,{name:s+f[n][a][0],time:f[n][a][1]+"-"+f[n][a][2],info:r,isFirst:c})),c=0)}return e}setInterval((function(){var e=new Date,t=parseInt((O.getTime()-e.getTime())/1e3),n=t%60<10?"0"+t%60:t%60;t/=60;var c=parseInt(t%60)<10?"0"+parseInt(t%60):parseInt(t%60),r=(parseInt(t/60)>0?parseInt(t/60)+":":"")+c+":"+n;"00:00"==r&&"/daily"==window.location.pathname&&(console.log(p()),window.location.reload(!1));try{document.getElementById("Clock").textContent=r}catch(s){}}),1e3);var g=function(){return Object(d.jsx)("div",{className:"event-wrapper",children:Object(d.jsx)("div",{id:"event-wrapper",children:p()})})},f=[[["Chill","00:00","00:00"," "]],[['"Free" time1',"00:00","08:25"," "],["Subject1","08:25","09:10","121"],["Break","09:10","09:20"," "],["Subject2","09:20","10:05","121"],["Lunch","10:05","10:20"," "],["Subject3","10:20","11:05","121/317"],["Break","11:05","11:20"," "],["Subject4","11:20","12:05","-"],["Break","12:05","12:15"," "],["Subject5","12:15","13:00","121"],["Break","13:00","13:15"," "],["Subject6","13:15","14:00","121"],["Break","14:00","14:15"," "],["Subject7","14:15","15:00","121"],["Dinner","15:00","15:15"," "],['"Free" time1',"15:15","00:00"," "]],[['"Free" time2',"00:00","08:25"," "],["Subject1 long name","08:25","09:10","121"],["Break","09:10","09:20"," "],["Subject2","09:20","10:05","121"],["Lunch","10:05","10:20"," "],["Subject3","10:20","11:05","121/317"],["Break","11:05","11:20"," "],["Subject4","11:20","12:05","-"],["Break","12:05","12:15"," "],["Subject5","12:15","13:00","121"],["Break","13:00","13:15"," "],["Subject6","13:15","14:00","121"],["Break","14:00","14:15"," "],["Subject7","14:15","15:00","121"],["Dinner","15:00","15:15"," "],['"Free" time2',"15:15","00:00"," "]],[['"Free" time3',"00:00","08:25"," "],["Ukrainian history","08:25","09:10","121"],["Break","09:10","09:20"," "],["Eglish/Informatics","09:20","10:05","121"],["Lunch","10:05","10:20"," "],["Subject3","10:20","11:05","121/317"],["Break","11:05","11:20"," "],["Subject4","11:20","12:05","-"],["Break","12:05","12:15"," "],["Subject5","12:15","13:00","121"],["Break","13:00","13:15"," "],["Subject6","13:15","14:00","121"],["Break","14:00","14:15"," "],["Subject7","14:15","15:00","121"],["Dinner","15:00","15:15"," "],['"Free" time3 fds fds afd afdsdfsd f ds',"15:15","00:00"," "]],[['"Free" time4',"00:00","08:25"," "],["Subject1","08:25","09:10","121"],["Break","09:10","09:20"," "],["Subject2","09:20","09:30","121"],["Lunch","9:30","10:20"," "],["Subject3","10:20","11:05","121/317"],["Break","11:05","11:20"," "],["Subject4","11:20","12:05","-"],["Break","12:05","12:15"," "],["Subject5","12:15","13:00","121"],["Break","13:00","13:15"," "],["Subject6","13:15","14:00","121"],["Break","14:00","14:15"," "],["Subject7","14:15","20:59","121"],["Dinner","20:59","22:30"," "],['"Free" time4',"15:15","00:00"," "]],[['"Free" time5',"00:00","08:25"," "],["Subject1","08:25","09:10","121"],["Break","09:10","09:20"," "],["Subject2","09:20","10:05","121"],["Lunch","10:05","10:20"," "],["Subject3","10:20","11:05","121/317"],["Break","11:05","11:20"," "],["Subject4","11:20","12:05","-"],["Break","12:05","12:15"," "],["Subject5","12:15","13:00","121"],["Break","13:00","13:15"," "],["Subject6","13:15","14:00","121"],["Break","14:00","14:15"," "],["Subject7","14:15","15:00","121"],["Dinner","15:00","15:15"," "],['"Free" time5',"15:15","00:00"," "]],[['"Free" time6',"00:00","08:25"," "],["Subject1","08:25","09:10","121"],["Break","09:10","09:20"," "],["Subject2","09:20","10:05","121"],["Lunch","10:05","10:20"," "],["Subject3","10:20","11:05","121/317"],["Break","11:05","11:20"," "],["Subject4","11:20","12:05","-"],["Break","12:05","12:15"," "],["Subject5","12:15","13:00","121"],["Break","13:00","13:15"," "],["Subject6","13:15","14:00","121"],["Break","14:00","14:15"," "],["Subject7","14:15","15:00","121"],["Dinner","15:00","15:15"," "],['"Free" time6',"15:15","00:00"," "]]],y=n(3),S=n(40),v=n(39),D=function(e){var t=new Date,n=Object(y.f)();return Object(d.jsx)(S.a,{children:Object(d.jsx)(v.a,{timeout:150,classNames:"fade",children:Object(d.jsxs)(y.c,{location:n,children:[Object(d.jsx)(y.a,{path:"/schedule",component:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(o,{text:t.toLocaleDateString("en-US",{month:"long",year:"numeric"})}),Object(d.jsx)(b,{description:e.descArray})]})}}),Object(d.jsx)(y.a,{path:"/daily",component:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(o,{text:B(t)+", "+t.getDate()}),Object(d.jsx)(g,{})]})}})]})},n.key)})};function B(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]}setInterval((function(){try{if(window.innerWidth<=700)for(var e=0;e<6;e+=1)document.getElementById("dayPanel").children[e].style.height=document.getElementById("contentPanel").children[e].clientHeight-0+"px";else document.getElementById("dayPanel").children[e].style.height="228px"}catch(t){}}),100);var w=function(e){return new Date,Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(d.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins",rel:"stylesheet"}),Object(d.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/typed.js@2.0.12"}),Object(d.jsx)(j,{}),Object(d.jsx)(D,{descArray:e.descArray})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};function F(){try{if(window.innerWidth<=700){for(var e=0;e<6;e+=1)document.getElementById("dayPanel").children[e].style.height=document.getElementById("contentPanel").children[e].clientHeight-0+"px";console.log(document.getElementById("dayPanel").children[0].clientHeight)}}catch(t){}}a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(w,{descArray:[]})}),document.getElementById("root"));!function(e){var t=new XMLHttpRequest;t.onload=function(e){if(200===t.status){var n=[];try{"PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"==(n=JSON.parse(t.responseText)).code&&a.a.render(Object(d.jsxs)(r.a.StrictMode,{children:[Object(d.jsx)(w,{descArray:[]}),Object(d.jsx)(h,{text:"Error raised: failed to get data from API (Some fatal hosting error)"})]}),document.getElementById("root"))}catch(e){console.error("JSON parse error")}console.dir(t.responseText),console.dir(n);for(var c=(new Date).getDate(),s=["","","","","",""],i=0;i<n.length;i++)s[new Date(n[i].date).getDate()-c+1]+=n[i].subject+": "+n[i].description+"\n\n",console.dir(s),a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(w,{descArray:s})}),document.getElementById("root")),F()}else console.warn("XHR Code not 200",t.status)},t.ontimeout=function(e){console.error("XHR Timeout"),a.a.render(Object(d.jsxs)(r.a.StrictMode,{children:[Object(d.jsx)(w,{descArray:[]}),Object(d.jsx)(h,{text:"Error raised: failed to get data from API (timeout)"})]}),document.getElementById("root"))},t.onerror=function(e){console.error("XHR Error"),a.a.render(Object(d.jsxs)(r.a.StrictMode,{children:[Object(d.jsx)(w,{descArray:[]}),Object(d.jsx)(h,{text:"Error raised: failed to get data from API ("+t.status+")"})]}),document.getElementById("root"))},t.open("GET",e),t.send()}("https://nodejsclusters-44722-0.cloudclusters.net/homework/week"),k()}},[[37,1,2]]]);
//# sourceMappingURL=main.493aa9b6.chunk.js.map