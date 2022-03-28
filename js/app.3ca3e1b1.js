(function(){"use strict";var o={9965:function(o,t,e){var n=e(9242),d=e(3396);function r(o,t){const e=(0,d.up)("router-view");return(0,d.wg)(),(0,d.j4)(e)}var s=e(89);const c={},l=(0,s.Z)(c,[["render",r]]);var i=l,a=e(678);const u=o=>((0,d.dD)("data-v-fbb7ff3e"),o=o(),(0,d.Cn)(),o),p={class:"home"},m={class:"home__top"},f=u((()=>(0,d._)("h1",{class:"home__title"},"Todo",-1)));function v(o,t,e,r,s,c){const l=(0,d.up)("todo-form"),i=(0,d.up)("todo-list");return(0,d.wg)(),(0,d.iD)("div",p,[(0,d._)("div",m,[f,(0,d._)("button",{class:"home__btn",onClick:t[0]||(t[0]=(...o)=>r.popupShow&&r.popupShow(...o))},"Create Reminder")]),r.isPopupShow?((0,d.wg)(),(0,d.iD)("div",{key:0,class:"popup",onClick:t[2]||(t[2]=(...o)=>r.popupShow&&r.popupShow(...o))},[(0,d.Wm)(l,{onClick:t[1]||(t[1]=(0,n.iM)((()=>{}),["stop"])),onCreate:r.createTodo},null,8,["onCreate"])])):(0,d.kq)("",!0),(0,d.Wm)(i,{todos:r.todos,todosCompleted:r.todosCompleted,todosUncompleted:r.todosUncompleted},null,8,["todos","todosCompleted","todosUncompleted"])])}var h=e(7139);const C={class:"todolist"},_=(0,d._)("h2",null,"Completed",-1),w={class:"todolist"};function b(o,t,e,n,r,s){const c=(0,d.up)("todo-item");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d._)("div",C,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.todosUncompleted,(o=>((0,d.wg)(),(0,d.j4)(c,{key:o.id,class:(0,h.C_)({completed:o.completed}),todo:o,onCompletedChange:n.setCompleted},null,8,["class","todo","onCompletedChange"])))),128))]),_,(0,d._)("div",w,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.todosCompleted,(o=>((0,d.wg)(),(0,d.j4)(c,{key:o.id,class:(0,h.C_)({completed:o.completed}),todo:o,onCompletedChange:n.setCompleted},null,8,["class","todo","onCompletedChange"])))),128))])])}const g={class:"todolist__item"},y=["checked","value","id"],k=["for"];function O(o,t,e,n,r,s){return(0,d.wg)(),(0,d.iD)("div",g,[(0,d._)("input",{class:"todolist__checkbox",type:"checkbox",checked:e.todo.completed,value:e.todo.id,onChange:t[0]||(t[0]=(...o)=>n.sendChange&&n.sendChange(...o)),id:"checkbox"+e.todo.id},null,40,y),(0,d._)("label",{for:"checkbox"+e.todo.id},(0,h.zw)(n.titleUpper),9,k)])}var T={props:{todo:Object},setup(o,{emit:t}){const e=()=>{t("completedChange",o.todo.id)},n=(0,d.Fl)((()=>o.todo.title.charAt(0).toUpperCase()+o.todo.title.slice(1)));return{titleUpper:n,sendChange:e}}};const j=(0,s.Z)(T,[["render",O],["__scopeId","data-v-785c5f2c"]]);var U=j,D={props:{todos:Array,todosCompleted:Array,todosUncompleted:Array},setup(o){const t=t=>{o.todos.find((o=>o.id===t)).completed=!o.todos.find((o=>o.id===t)).completed};return{setCompleted:t}},components:{TodoItem:U}};const x=(0,s.Z)(D,[["render",b]]);var S=x;const F=o=>((0,d.dD)("data-v-a954b16e"),o=o(),(0,d.Cn)(),o),H={class:"todoform"},P=F((()=>(0,d._)("h2",{class:"todoform__title"},"Create Reminder",-1)));function Z(o,t,e,r,s,c){const l=(0,d.Q2)("focus");return(0,d.wg)(),(0,d.iD)("form",H,[P,(0,d.wy)((0,d._)("input",{type:"text",placeholder:"Title",class:"todoform__input","onUpdate:modelValue":t[0]||(t[0]=o=>r.todo.title=o)},null,512),[[n.nr,r.todo.title],[l]]),(0,d._)("button",{class:"todoform__btn",onClick:t[1]||(t[1]=(0,n.iM)(((...o)=>r.setTodo&&r.setTodo(...o)),["prevent"]))},"Create")])}var A=e(4870),I={setup(o,{emit:t}){const e=(0,A.qj)({}),n=()=>{e.id=Date.now(),e.completed=!1,t("create",e)};return{todo:e,setTodo:n}},directives:{focus:{mounted:o=>o.focus()}}};const M=(0,s.Z)(I,[["render",Z],["__scopeId","data-v-a954b16e"]]);var q=M,K=e(6265),R=e.n(K);function V(){const o=(0,A.iH)([]),t=async()=>{try{const t=await R().get("https://jsonplaceholder.typicode.com/todos?_limit=10");o.value=t.data}catch(t){console.log(t)}},e=(0,d.Fl)((()=>o.value.filter((o=>!0===o.completed)))),n=(0,d.Fl)((()=>o.value.filter((o=>!1===o.completed))));return(0,d.bv)(t),{todos:o,todosCompleted:e,todosUncompleted:n}}var W={setup(){const{todosCompleted:o,todosUncompleted:t,todos:e}=V(),n=o=>{e.value.push(o),r()},d=(0,A.iH)(!1),r=()=>{d.value=!d.value};return{isPopupShow:d,popupShow:r,todosCompleted:o,todosUncompleted:t,todos:e,createTodo:n}},name:"HomeView",components:{TodoList:S,TodoForm:q}};const Y=(0,s.Z)(W,[["render",v],["__scopeId","data-v-fbb7ff3e"]]);var z=Y;const E=[{path:"/",name:"home",component:z}],L=(0,a.p7)({history:(0,a.PO)("/todo/"),routes:E});var Q=L,B=e(65),G=(0,B.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(i).use(G).use(Q).mount("#app")}},t={};function e(n){var d=t[n];if(void 0!==d)return d.exports;var r=t[n]={exports:{}};return o[n](r,r.exports,e),r.exports}e.m=o,function(){var o=[];e.O=function(t,n,d,r){if(!n){var s=1/0;for(a=0;a<o.length;a++){n=o[a][0],d=o[a][1],r=o[a][2];for(var c=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(e.O).every((function(o){return e.O[o](n[l])}))?n.splice(l--,1):(c=!1,r<s&&(s=r));if(c){o.splice(a--,1);var i=d();void 0!==i&&(t=i)}}return t}r=r||0;for(var a=o.length;a>0&&o[a-1][2]>r;a--)o[a]=o[a-1];o[a]=[n,d,r]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={143:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var d,r,s=n[0],c=n[1],l=n[2],i=0;if(s.some((function(t){return 0!==o[t]}))){for(d in c)e.o(c,d)&&(e.m[d]=c[d]);if(l)var a=l(e)}for(t&&t(n);i<s.length;i++)r=s[i],e.o(o,r)&&o[r]&&o[r][0](),o[r]=0;return e.O(a)},n=self["webpackChunktodo"]=self["webpackChunktodo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(9965)}));n=e.O(n)})();
//# sourceMappingURL=app.3ca3e1b1.js.map