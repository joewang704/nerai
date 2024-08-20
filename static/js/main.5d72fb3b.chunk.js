(this.webpackJsonpnerai=this.webpackJsonpnerai||[]).push([[0],{11:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(3),s=n.n(c),a=(n(11),n(2)),o=n(18);const u="#F0E0BE";var l=n(1);const d=a.a.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 116px;
  background-color: #333;
  color: white;
  padding: 12px 24px 24px;
  h1 {
    font-size: 16px;
  }
`;a.a.div`
  z-index: 2;
  position: relative;
`;var h=e=>{let{timeRemaining:t}=e;const{state:n}=Object(r.useContext)(I);return Object(l.jsxs)(d,{children:[Object(l.jsxs)("h1",{children:["Time Left: ",t]}),Object(l.jsxs)("h1",{children:["Current Score: ",n.currentScore," / ",n.goalScore]})]})};const j=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)),g=e=>Math.PI/180*e,b=(e,t)=>{const n=Object(r.useRef)({values:t,handler:function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e(...r,n.current.values)}});return n.current.values=t,n.current.handler},x=a.a.div`
  height: 100%;
  width: 100%;
`;var v=e=>{let{screenHandle:t}=e;const{state:n,dispatch:i}=Object(r.useContext)(I),c=Object(r.useRef)(null),[s,a]=Object(r.useState)(),[d,v]=Object(r.useState)(),[p,y]=Object(r.useState)(),O=Object(r.useRef)({x:500,y:500}),f=Object(r.useRef)([]),m=Object(r.useRef)(n);Object(r.useRef)(null);Object(r.useEffect)((()=>{m.current=n}),[n]),Object(r.useEffect)((()=>{const e=c.current;a(e);const t=c.current.getContext("2d");v(t),c.current.width=window.innerWidth,c.current.height=window.innerHeight,e.requestPointerLock();const n=()=>z(e);return document.addEventListener("pointerlockchange",n,!1),document.addEventListener("click",S),()=>{document.removeEventListener("pointerlockchange",n),document.removeEventListener("click",S),document.exitPointerLock()}}),[]),Object(r.useEffect)((()=>{let e;return s&&d&&(e=o.a(k)),()=>e&&e.stop()}),[s,d]);const S=()=>{const e=O.current.x,t=O.current.y,n=f.current,r=n.filter((n=>{let{x:r,y:i,radius:c}=n;return Math.sqrt(Math.pow(r-e,2),Math.pow(i-t,2))>=c+5}));r.length===n.length?i({type:"hitTarget",payload:{inc:-1}}):i({type:"hitTarget",payload:{inc:1}}),f.current=r},w=(e,t)=>{const{width:n,height:r}=e;t.fillStyle="grey",t.fillRect(0,0,n,r),(e=>{f.current.forEach((t=>{let{x:n,y:r,radius:i}=t;e.fillStyle=u,e.beginPath(),e.arc(n,r,i,0,g(360),!0),e.fill(),e.closePath()}))})(t),t.fillStyle="#f00",t.beginPath(),t.arc(O.current.x,O.current.y,5,0,g(360),!0),t.fill(),t.closePath()},k=b(((e,t)=>{let[r,c]=t;if(!r||!c)return;(e=>{if(!f.current.length&&e){const{targetSize:t}=n,{width:r,height:i}=e,c=j(r/2-r/4,r-t-r/2),s=j(i/2-i/4,i-t-i/2);f.current=[{x:c,y:s,radius:t}]}})(r),w(r,c);const s=(n.timer-e/1e3).toFixed(2);if(s<=0)return i({type:"endGame"});y(s)}),[s,d]),z=e=>{document.pointerLockElement!==e&&document.mozPointerLockElement!==e||e.addEventListener("mousemove",(e=>E(e)),!1)},E=b(((e,t)=>{let[r,i]=t;if(!i)return;const{x:c,y:s}=r.current;if(c>i.width)return void(r.current={x:i.width-1,y:s});if(s>i.height)return void(r.current={x:c,y:i.height-1});if(c<0)return void(r.current={x:1,y:s});if(s<0)return void(r.current={x:c,y:1});const a=e.movementX*(n.sensitivity||1),o=e.movementY*(n.sensitivity||1);r.current={x:c+a,y:s+o}}),[O,s]);return Object(l.jsxs)(x,{children:[Object(l.jsx)(h,{timeRemaining:p}),Object(l.jsx)("canvas",{ref:c})]})};const p=a.a.div`
  background-color: black;
  opacity: .4;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`,y=a.a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
  padding: 24px;
  border-radius: 4px;
  opacity: 1;
`,O=e=>{let{children:t,close:n}=e;return Object(l.jsx)(l.Fragment,{children:Object(c.createPortal)(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{children:t}),Object(l.jsx)(p,{onClick:n})]}),document.body)})},f={sensitivity:.4,targetSize:8},m=(e,t)=>localStorage.setItem(e,t),S=e=>localStorage.getItem(e)||f[e],w=e=>{let{isOpen:t,close:n}=e;const{state:i,dispatch:c}=Object(r.useContext)(I);return Object(r.useEffect)((()=>{const{sensitivity:e,targetSize:t}=i;e&&m("sensitivity",e),t&&m("targetSize",t)}),[i.sensitivity,i.targetSize]),t?Object(l.jsxs)(O,{close:n,children:[Object(l.jsx)("h1",{children:"Settings"}),Object(l.jsxs)("div",{children:["Sensitivity: \xa0",Object(l.jsx)("input",{type:"number",step:"0.01",value:i.sensitivity,onChange:e=>c({type:"changeSettings",payload:{sensitivity:e.target.value}})})]}),Object(l.jsxs)("div",{children:["Target Size (in px): \xa0",Object(l.jsx)("input",{type:"number",step:"1",value:i.targetSize,onChange:e=>c({type:"changeSettings",payload:{targetSize:e.target.value}})})]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:n,children:"Save"})]}):Object(l.jsx)(l.Fragment,{})},k={status:"INITIAL",sensitivity:S("sensitivity"),targetSize:S("targetSize")},z={timer:30,currentScore:0,goalScore:30,level:1},E=(e,t)=>{switch(t.type){case"changeSettings":return{...e,sensitivity:t.payload.sensitivity||e.sensitivity,targetSize:t.payload.targetSize||e.targetSize};case"returnToHomeScreen":return{status:"INITIAL"};case"startGame":return{...e,status:"RUNNING",...z};case"hitTarget":return{...e,currentScore:e.currentScore+t.payload.inc};default:return e}},C=a.a.div`
`,I=i.a.createContext();var L=()=>{const[e,t]=Object(r.useReducer)(E,k),[n,i]=Object(r.useState)(!1);return Object(l.jsx)(I.Provider,{value:{state:e,dispatch:t},children:Object(l.jsxs)(C,{children:["INITIAL"===e.status&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:()=>{t({type:"startGame",payload:{timer:60}})},children:"Start Game"}),Object(l.jsx)("button",{onClick:()=>i(!0),children:"Settings"}),Object(l.jsx)(w,{isOpen:n,close:()=>i(!1)})]}),"RUNNING"===e.status&&Object(l.jsx)(v,{}),"COMPLETED"===e.status&&Object(l.jsx)(l.Fragment,{children:"Game Over"})]})})};var P=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:c,getTTFB:s}=t;n(e),r(e),i(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),P()}},[[16,1,2]]]);
//# sourceMappingURL=main.5d72fb3b.chunk.js.map