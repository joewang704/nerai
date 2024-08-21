(this.webpackJsonpnerai=this.webpackJsonpnerai||[]).push([[0],{11:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),i=r(3),s=r.n(i),o=(r(11),r(2)),a=r(18),l=r(0);const u=o.a.div`
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
`;var d=e=>{let{timeRemaining:t}=e;const{state:r}=Object(n.useContext)(A);return Object(l.jsxs)(u,{children:[Object(l.jsxs)("h1",{children:["Level ",r.level]}),Object(l.jsxs)("h1",{children:["Time Left: ",t]}),Object(l.jsxs)("h1",{children:["Current Score: ",r.currentScore," / ",r.goalScore]})]})};const h=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)),j=e=>Math.PI/180*e,b=(e,t)=>{const r=Object(n.useRef)({values:t,handler:function(){for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return e(...n,r.current.values)}});return r.current.values=t,r.current.handler},g=["gray","green","blue","purple","gold"],x=e=>({tier:e,effects:[]}),p=e=>{const t=(e=>{const t=[50,49,1,0,0];for(let r=1;r<=e;r++){let n=2;r>9?n=4:r>4&&(n=3);let c=0;for(let r=n;r>0;r--)t[r]=e++,c+=t[r];const i=100-c;t[0]=i}return t})(e),r=h(0,101);let n=0,c=0;for(let i=0;i<t.length;i++)if(n+=t[i],r<n){c=i;break}return{tier:c,effects:[]}},O=[x(0),x(0),x(0)],y=o.a.div`
  height: 100%;
  width: 100%;
`;var v=()=>{const{state:e,dispatch:t}=Object(n.useContext)(A),r=Object(n.useRef)(null),[c,i]=Object(n.useState)(),[s,o]=Object(n.useState)(),[u,x]=Object(n.useState)(),p=Object(n.useRef)({x:500,y:500}),O=Object(n.useRef)([]),v=Object(n.useRef)(e);Object(n.useEffect)((()=>{v.current=e}),[e]),Object(n.useEffect)((()=>{const e=r.current;i(e);const t=r.current.getContext("2d");o(t),r.current.width=window.innerWidth,r.current.height=window.innerHeight,e.requestPointerLock();const n=()=>C(e);return document.addEventListener("pointerlockchange",n,!1),document.addEventListener("click",f),()=>{document.removeEventListener("pointerlockchange",n),document.removeEventListener("click",f),document.exitPointerLock()}}),[]),Object(n.useEffect)((()=>{let e;return c&&s&&(e=a.a(S)),()=>e&&e.stop()}),[c,s]);const f=()=>{const e=p.current.x,r=p.current.y,n=O.current,c=n.filter((t=>{let{x:n,y:c,radius:i}=t;return Math.sqrt(Math.pow(n-e,2),Math.pow(c-r,2))>=i+5}));c.length===n.length?t({type:"hitTarget",payload:{inc:-1}}):t({type:"hitTarget",payload:{inc:1}}),O.current=c},m=(e,t)=>{const{width:r,height:n}=e;t.fillStyle="white",t.fillRect(0,0,r,n),(e=>{O.current.forEach((t=>{let{x:r,y:n,radius:c,target:i}=t;e.fillStyle=g[i.tier],e.beginPath(),e.arc(r,n,c,0,j(360),!0),e.fill(),e.closePath()}))})(t),t.fillStyle="#f00",t.beginPath(),t.arc(p.current.x,p.current.y,5,0,j(360),!0),t.fill(),t.closePath()},S=b(((r,n)=>{let[c,i]=n;if(!c||!i)return;(t=>{if(!O.current.length&&t){const{targetSize:r,targets:n}=e,{width:c,height:i}=t,s=h(c/2-c/4,c-r-c/2),o=h(i/2-i/4,i-r-i/2),a=n[h(0,n.length)];O.current=[{x:s,y:o,radius:r,target:a}]}})(c),m(c,i);const s=(e.timer-r/1e3).toFixed(2);if(s<=0)return t({type:"endRound"});x(s)}),[c,s]),C=e=>{document.pointerLockElement!==e&&document.mozPointerLockElement!==e||e.addEventListener("mousemove",(e=>k(e)),!1)},k=b(((t,r)=>{let[n,c]=r;if(!c)return;const{x:i,y:s}=n.current;if(i>c.width)return void(n.current={x:c.width-1,y:s});if(s>c.height)return void(n.current={x:i,y:c.height-1});if(i<0)return void(n.current={x:1,y:s});if(s<0)return void(n.current={x:i,y:1});const o=t.movementX*(e.sensitivity||1),a=t.movementY*(e.sensitivity||1);n.current={x:i+o,y:s+a}}),[p,c]);return Object(l.jsxs)(y,{children:[Object(l.jsx)(d,{timeRemaining:u}),Object(l.jsx)("canvas",{ref:r})]})};const f=o.a.div`
  background-color: black;
  opacity: .4;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`,m=o.a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
  padding: 24px;
  border-radius: 4px;
  opacity: 1;
`,S=e=>{let{children:t,close:r}=e;return Object(l.jsx)(l.Fragment,{children:Object(i.createPortal)(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{children:t}),Object(l.jsx)(f,{onClick:r})]}),document.body)})},C=o.a.div`
  padding: 4px;
  border: 3px solid #eee;
  border-radius: 4px;
`,k=e=>{let{tier:t}=e;return Object(l.jsx)(C,{style:{borderColor:g[t]},children:"N/A"})},w=o.a.div`
  padding: 4px;
  border: 3px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  hover {
    opacity: .6;
  }
`,E=e=>{let{tier:t,onClick:r,selected:n}=e;const c=g[t];return Object(l.jsx)(w,{style:{borderColor:c,borderWidth:n?"5px":"3px",fontWeight:n?"bold":"normal"},onClick:r,children:"Effect: None"})},P=o.a.div`
`,L=()=>{const[e,t]=Object(n.useState)(),{state:r,dispatch:c}=Object(n.useContext)(A);return Object(l.jsxs)(P,{children:[Object(l.jsx)("h1",{children:"Shop"}),"Current Gold: ",r.money,Object(l.jsx)("br",{}),"Current Deck:",Object(l.jsx)("div",{style:{display:"flex"},children:r.targets.map((e=>{let{tier:t}=e;return Object(l.jsx)(k,{tier:t})}))}),Object(l.jsxs)("button",{onClick:()=>{t([p(),p(),p()])},disabled:r.money<30,children:["Purchase Card (",30," gold)"]}),Object(l.jsx)("button",{disabled:r.money<30,children:"Remove Card (200 gold)"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:()=>c({type:"startNextRound"}),children:"Next Level"}),Object(l.jsx)(z,{options:e,close:()=>t()})]})},z=e=>{let{options:t,close:r}=e;const{dispatch:c}=Object(n.useContext)(A),[i,s]=Object(n.useState)(0);return t?Object(l.jsxs)(S,{close:()=>{},children:[Object(l.jsx)("h1",{children:"Choose Your Card"}),t.map(((e,t)=>{let{tier:r}=e;return Object(l.jsx)(E,{tier:r,onClick:()=>s(t),selected:i===t})})),Object(l.jsx)("button",{onClick:()=>{c({type:"addTargets",payload:{targets:[t[i]],spent:30}}),r()},children:"Collect"})]}):Object(l.jsx)(l.Fragment,{})},R={sensitivity:.4,targetSize:8},I=(e,t)=>localStorage.setItem(e,t),N=e=>localStorage.getItem(e)||R[e],T=e=>{let{isOpen:t,close:r}=e;const{state:c,dispatch:i}=Object(n.useContext)(A);return Object(n.useEffect)((()=>{const{sensitivity:e,targetSize:t}=c;e&&I("sensitivity",e),t&&I("targetSize",t)}),[c.sensitivity,c.targetSize]),t?Object(l.jsxs)(S,{close:r,children:[Object(l.jsx)("h1",{children:"Settings"}),Object(l.jsxs)("div",{children:["Sensitivity: \xa0",Object(l.jsx)("input",{type:"number",step:"0.01",value:c.sensitivity,onChange:e=>i({type:"changeSettings",payload:{sensitivity:e.target.value}})})]}),Object(l.jsxs)("div",{children:["Target Size (in px): \xa0",Object(l.jsx)("input",{type:"number",step:"1",value:c.targetSize,onChange:e=>i({type:"changeSettings",payload:{targetSize:e.target.value}})})]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:r,children:"Save"})]}):Object(l.jsx)(l.Fragment,{})},M={status:"INITIAL",sensitivity:N("sensitivity"),targetSize:N("targetSize")},F={timer:30,currentScore:0,goalScore:30,level:1,money:0,targets:O},G=(e,t)=>{switch(t.type){case"changeSettings":return{...e,sensitivity:t.payload.sensitivity||e.sensitivity,targetSize:t.payload.targetSize||e.targetSize};case"returnToHomeScreen":return{status:"INITIAL"};case"startGame":return{...e,status:"RUNNING",...F};case"hitTarget":return{...e,currentScore:e.currentScore+t.payload.inc};case"endRound":return e.currentScore>=e.goalScore?(e=>({...e,money:e.money+e.currentScore,currentScore:0,level:e.level+1,goalScore:Math.ceil(1.5*e.goalScore),status:"SHOP"}))(e):{...e,status:"COMPLETED"};case"addTargets":if("SHOP"===!e.status)throw new Error("Must be in shop to purchase");return{...e,money:e.money-t.payload.spent,targets:[...e.targets,...t.payload.targets]};case"startNextRound":if("SHOP"===!e.status)throw new Error("Must be in shop to begin next round");return{...e,status:"RUNNING",timer:30};default:throw new Error("Action not recognized - "+t.type)}},H=o.a.div`
`,A=c.a.createContext();var D=()=>{const[e,t]=Object(n.useReducer)(G,M),[r,c]=Object(n.useState)(!1),i=()=>{t({type:"startGame"})};return Object(l.jsx)(A.Provider,{value:{state:e,dispatch:t},children:Object(l.jsxs)(H,{children:["INITIAL"===e.status&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:i,children:"Start Game"}),Object(l.jsx)("button",{onClick:()=>c(!0),children:"Settings"}),Object(l.jsx)(T,{isOpen:r,close:()=>c(!1)})]}),"RUNNING"===e.status&&Object(l.jsx)(v,{}),"SHOP"===e.status&&Object(l.jsx)(L,{}),"COMPLETED"===e.status&&Object(l.jsxs)(l.Fragment,{children:["Game Over",Object(l.jsx)("button",{onClick:i,children:"Play Again"}),Object(l.jsx)("button",{onClick:()=>{t({type:"returnToHomeScreen"})},children:"Return Home"})]})]})})};var U=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((t=>{let{getCLS:r,getFID:n,getFCP:c,getLCP:i,getTTFB:s}=t;r(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root")),U()}},[[16,1,2]]]);
//# sourceMappingURL=main.2a2e0a4c.chunk.js.map