(this.webpackJsonpinterview=this.webpackJsonpinterview||[]).push([[0],{14:function(e,n,c){},16:function(e,n,c){},17:function(e,n,c){},18:function(e,n,c){},19:function(e,n,c){"use strict";c.r(n);var t=c(1),a=c.n(t),s=c(8),r=c.n(s),i=(c(14),c(3)),l=c(9),u=c(2),o=c(0);function j(e){return Object(o.jsx)("li",{className:"ccy-item",onClick:function(n){e.clickCCY(e.ccy)},children:e.ccy})}function b(e){var n=Object(t.useState)(""),c=Object(u.a)(n,2),a=c[0],s=c[1],r=Object(t.useState)(!1),i=Object(u.a)(r,2),l=i[0],b=i[1],p=Object(t.useRef)(null),d=Object(t.useRef)(null),f=Object(t.useRef)(null),O=Object(t.useState)({}),h=Object(u.a)(O,2),v=(h[0],h[1]);function x(e){return e.toPrecision(6)}return Object(o.jsxs)("div",{className:"Task-header",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)("input",{className:"task",type:"text",placeholder:"\u4efb\u52a1",ref:p}),Object(o.jsx)("input",{className:"price",type:"text",placeholder:"\u4ef7\u683c",ref:d})]}),Object(o.jsxs)("div",{className:"select-box",children:[Object(o.jsx)("input",{className:"currency",value:a,onChange:function(e){e.target.value=a},type:"text",placeholder:"\u8d27\u5e01\u7c7b\u578b",ref:f}),Object(o.jsx)("span",{className:"icon",onClick:function(e){e.preventDefault(),b(!l)},children:"\u25bd"}),l?Object(o.jsx)("ul",{className:"select-CCY",children:e.CCY.map((function(e,n){return Object(o.jsx)(j,{ccy:e,showCCY:b,clickCCY:function(e){var n;n=e,b(!1),s(n)}},n)}))}):""]}),Object(o.jsx)("button",{className:"add",onClick:function(){!function(){var n=1*d.current.value,c=e.rate,t={};if(console.log(n),"number"!==typeof n||isNaN(n)||0===n||""===p.current.value||""===f.current.value)return alert("\u8bf7\u786e\u8ba4\u8f93\u5165\u683c\u5f0f~");"RUB"===f.current.value?(v({id:Date.now(),finished:!1,plan:p.current.value,RUB:n,CNY:x(n/c.RUB.previous),USD:x(n/c.RUB.previous*c.USD.previous)}),t={id:Date.now(),finished:!1,plan:p.current.value,RUB:n,CNY:x(n/c.RUB.previous),USD:x(n/c.RUB.previous*c.USD.previous)}):"CNY"===f.current.value?(v({id:Date.now(),finished:!1,plan:p.current.value,RUB:x(n*c.RUB.previous),CNY:n,USD:x(n*c.USD.previous)}),t={id:Date.now(),finished:!1,plan:p.current.value,RUB:x(n*c.RUB.previous),CNY:n,USD:x(n*c.USD.previous)}):(v({id:Date.now(),finished:!1,plan:p.current.value,RUB:x(n/c.USD.previous*c.RUB.previous),CNY:x(n/c.USD.previous),USD:n}),t={id:Date.now(),finished:!1,plan:p.current.value,RUB:x(n/c.USD.previous*c.RUB.previous),CNY:x(n/c.USD.previous),USD:n}),e.addPlan(t),d.current.value="",p.current.value="",f.current.value=""}()},children:"\u6dfb\u52a0"})]})}function p(e){return Object(o.jsxs)("div",{className:"rate-box",children:[Object(o.jsxs)("span",{className:"currency-rate",children:[(n=e,n.rate.RUB.previous.toFixed(3)),"\u20bd/\uffe5"]}),Object(o.jsxs)("span",{className:"currency-rate",children:[function(e){return(1/e.rate.USD.previous*e.rate.RUB.previous).toFixed(3)}(e),"\u20bd/$"]}),Object(o.jsxs)("span",{className:"currency-rate",children:[function(e){return(1/e.rate.USD.previous).toFixed(3)}(e),"\uffe5/$"]})]});var n}var d=c(4);function f(e){var n;return Object(o.jsxs)("li",{children:[Object(o.jsx)("input",{className:"checkbox",type:"checkbox",checked:e.finished,onChange:function(){e.clickPlan(e.id)}}),Object(o.jsx)("span",(n={className:"Plan-text"},Object(d.a)(n,"className",e.finished?"is-finished":""),Object(d.a)(n,"children",e.plan),n)),Object(o.jsxs)("div",{className:"plan-money",children:[Object(o.jsxs)("span",{className:"plan-RUB",children:["\u20bd",e.RUB]}),Object(o.jsxs)("span",{className:"plan-CNY",children:["\uffe5",e.CNY]}),Object(o.jsxs)("span",{className:"plan-USD",children:["$",e.USD]})]})]})}function O(e){var n=Object(u.a)(e.CCY,3),c=n[0],t=n[1],a=n[2];function s(){return e.job.filter((function(e){return!e.finished}))}function r(e){if(0!==s().length){var n=0;for(var c in s())console.log(s()[c][e]),n+=Number(s()[c][e]);return n}}return console.log(e.job),Object(o.jsxs)("ul",{className:"plan-box",children:[Object(o.jsx)("p",{className:"title-plan",children:"\u8ba1\u5212:"}),s().map((function(n){return Object(o.jsx)(f,Object(i.a)(Object(i.a)({},n),{},{clickPlan:e.clickPlan,rate:e.rate}),n.id)})),Object(o.jsxs)("p",{className:"total",children:["\u5c06\u8981\u82b1\u8d39:",Object(o.jsxs)("span",{className:"plan-USD",children:["$",r(a)?r(a):0]}),Object(o.jsxs)("span",{className:"plan-CNY",children:["\uffe5",r(t)?r(t):0]}),Object(o.jsxs)("span",{className:"plan-RUB",children:["\u20bd",r(c)?r(c):0]})]})]})}function h(e){var n=Object(u.a)(e.CCY,3),c=n[0],t=n[1],a=n[2];function s(n){return e.job.filter((function(e){return e.finished}))}function r(e){if(0!==s().length){var n=0;for(var c in s())console.log(s()[c][e]),n+=Number(s()[c][e]);return function(e){return e.toPrecision(6)}(n)}}return Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"plan-box",children:[Object(o.jsx)("p",{className:"title-plan",children:"\u5df2\u5b8c\u6210:"}),s().map((function(n){return Object(o.jsx)(f,Object(i.a)(Object(i.a)({},n),{},{clickPlan:e.clickPlan,rate:e.rate}),n.id)})),Object(o.jsxs)("p",{className:"total",children:["\u4e00\u5171\u82b1\u4e86:",Object(o.jsxs)("span",{className:"plan-USD",children:["$",r(a)?r(a):0]}),Object(o.jsxs)("span",{className:"plan-CNY",children:["\uffe5",r(t)?r(t):0]}),Object(o.jsxs)("span",{className:"plan-RUB",children:["\u20bd",r(c)?r(c):0]})]})]})})}c(16),c(17),c(18);var v=function(){var e=["RUB","CNY","USD"],n=Object(t.useState)({}),c=Object(u.a)(n,2),a=c[0],s=c[1],r=Object(t.useState)([]),j=Object(u.a)(r,2),d=j[0],f=j[1];function v(e){f(d.map((function(n){return n.id===e?Object(i.a)(Object(i.a)({},n),{},{finished:!n.finished}):n})))}return Object(t.useEffect)((function(){fetch("https://api.globus.furniture/forex").then((function(e){return e.json()})).then((function(e){console.log(e),s(e)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{CCY:e,addPlan:function(e){return n=e,console.log(n),n?f([].concat(Object(l.a)(d),[n])):void 0;var n},rate:a}),a.USD&&Object(o.jsx)(p,{rate:a}),0!==d.length&&Object(o.jsx)(O,{job:d,clickPlan:v,rate:a,CCY:e}),a.USD&&0!==d.length&&Object(o.jsx)(h,{job:d,clickPlan:v,rate:a,CCY:e})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;c(e),t(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.5769147b.chunk.js.map