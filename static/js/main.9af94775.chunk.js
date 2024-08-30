(this.webpackJsonpnerai=this.webpackJsonpnerai||[]).push([[0],{11:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),c=r(3),i=r.n(c),o=(r(11),r(2)),a=r(18);const l=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)),u=e=>Math.random()<e,d=e=>Math.PI/180*e,h=(e,t)=>{const r=Object(n.useRef)({values:t,handler:function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return e(...n,r.current.values)}});return r.current.values=t,r.current.handler},j=["gray","green","blue","purple","gold"],p=e=>{const t=(e=>{const t=[90,9,1,0,0];for(let r=1;r<=e;r++){let e=2;r>9?e=4:r>4&&(e=3);let n=0;for(let r=e;r>0;r--)t[r]+=1,n+=t[r];const s=100-n;t[0]=s}return t})(e),r=l(0,101);let n=0,s=0;for(let c=0;c<t.length;c++)if(n+=t[c],r<n){s=c;break}return{tier:s,effects:[]}},b={baseTargets:{description:e=>`Increases base number of targets by ${e}`,maxLevel:5},extraSpawnOnHit:{description:e=>5*e+"% chance of extra target spawning on hit",maxLevel:5},multiNextHit:{description:e=>5*e+"% chance of spawning a target that will x2 points on next target",maxLevel:5},multiOnConsecutiveHit:{description:e=>"Not implemented yet. Do not choose",maxLevel:5}},g=Object.keys(b),x=g.reduce(((e,t)=>(e[t]=0,e)),{}),f=e=>{let{level:t,name:r}=e;return b[r].description(t+1)};var O=r(0);const m=o.a.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  color: white;
`,v=o.a.div`
  float: left;
`,y=o.a.div`
  float: right;
`,S=o.a.div`
  margin: 0 auto;
  width: 100px;
`;var w=e=>{let{timeRemaining:t}=e;const{state:r}=Object(n.useContext)(Q),s=Object.entries(r.upgrades).filter((e=>{let[t,r]=e;return r>0})).map((e=>{let[t,r]=e;return f({name:t,level:r})})).join(", ");return Object(O.jsxs)(m,{children:[Object(O.jsxs)(v,{children:[Object(O.jsxs)("h1",{children:["Level ",r.level]}),Object(O.jsxs)("h1",{children:["Score: ",r.currentScore," / ",r.goalScore]})]}),Object(O.jsxs)(y,{children:[Object(O.jsx)("p",{children:"Upgrades"}),Object(O.jsx)("p",{children:s})]}),Object(O.jsx)(S,{children:Object(O.jsx)("h1",{children:t})})]})};const k=o.a.div`
  height: 100%;
  width: 100%;
`;var C=()=>{const{state:e,dispatch:t}=Object(n.useContext)(Q),r=Object(n.useRef)(null),[s,c]=Object(n.useState)(),[i,o]=Object(n.useState)(),b=Object(n.useRef)(),[g,x]=Object(n.useState)(),f=Object(n.useRef)({x:500,y:500}),m=Object(n.useRef)([]),v=Object(n.useRef)([]),y=Object(n.useRef)(e);Object(n.useEffect)((()=>{y.current=e}),[e]),Object(n.useEffect)((()=>{const e=r.current;c(e);const t=r.current.getContext("2d");o(t),r.current.width=window.innerWidth,r.current.height=window.innerHeight,e.requestPointerLock({unadjustedMovement:!0});const n=()=>R(e),s=()=>S();return document.addEventListener("pointerlockchange",n,!1),document.addEventListener("click",s),()=>{document.removeEventListener("pointerlockchange",n),document.removeEventListener("click",s),document.exitPointerLock()}}),[]),Object(n.useEffect)((()=>{let e;return s&&i&&(e=a.a(E)),()=>e&&e.stop()}),[s,i]);const S=()=>{if(document.pointerLockElement){const r=f.current.x,n=f.current.y;let s;const c=m.current.filter((e=>{let{x:t,y:c,radius:i,target:o}=e;const a=Math.sqrt(Math.pow(t-r,2)+Math.pow(c-n,2))>=i+5;return a||(s=o),a}));if(s){const{extraSpawnOnHit:r,multiNextClick:n}=e.upgrades;r>0&&u(.05*r)?(c.push(C()),c.push(C())):n>0&&u(.05*n),t({type:"hitTarget",payload:{inc:s.tier+1}}),m.current=c}else t({type:"hitTarget",payload:{inc:-1}}),v.current.push({x:r,y:n,text:"-1",style:"red",timeRemaining:b.current-.3})}else setTimeout((()=>{r.current.requestPointerLock({unadjustedMovement:!0})}),100)},C=()=>{if(!r.current)return{x:0,y:0,radius:0,target:p(0)};const{targetSize:t,level:n}=e,{width:s,height:c}=r.current;return{x:l(s/2-s/4,s-t-s/2),y:l(c/2-c/4,c-t-c/2),radius:t,target:p(n)}},L=(e,t,r)=>{const{width:n,height:s}=e;t.fillStyle="black",t.fillRect(0,0,n,s),(e=>{m.current.forEach((t=>{let{x:r,y:n,radius:s,target:c}=t;e.fillStyle=j[c.tier],e.beginPath(),e.arc(r,n,s,0,d(360),!0),e.fill(),e.closePath()}))})(t),(e=>{e.font="24px Arial";const t=v.current.filter((e=>{let{timeRemaining:t}=e;return t<b.current}));v.current=t,v.current.forEach((t=>{let{x:r,y:n,text:s,style:c}=t;e.fillStyle=c,e.fillText(s,r,n)}))})(t),t.fillStyle="#f00",t.beginPath(),t.arc(f.current.x,f.current.y,5,0,d(360),!0),t.fill(),t.closePath()},E=h(((r,n)=>{let[s,c]=n;if(!s||!c)return;(t=>{const{baseTargets:r}=e.upgrades,n=m.current.length;if(n<=r&&t){for(let e=n;e<r;e++)m.current.push(C());m.current.push(C())}})(s);const i=e.timer-r/1e3;if(i<=0)return t({type:"endRound"});b.current=i,x(i.toFixed(2)),L(s,c)}),[s,i]),R=e=>{document.pointerLockElement===e||document.mozPointerLockElement===e?e.addEventListener("mousemove",P,!1):e.removeEventListener("mousemove",P,!1)},P=h(((t,r)=>{let[n,s]=r;if(!s)return;const{x:c,y:i}=n.current;if(c>s.width)return void(n.current={x:s.width-1,y:i});if(i>s.height)return void(n.current={x:c,y:s.height-1});if(c<0)return void(n.current={x:1,y:i});if(i<0)return void(n.current={x:c,y:1});const o=t.movementX*(e.sensitivity||1),a=t.movementY*(e.sensitivity||1);n.current={x:c+o,y:i+a}}),[f,s]);return Object(O.jsxs)(k,{children:[Object(O.jsx)(w,{timeRemaining:g}),Object(O.jsx)("canvas",{ref:r})]})};const L=o.a.div`
  background-color: black;
  opacity: .4;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`,E=o.a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
  padding: 24px;
  border-radius: 16px;
  opacity: 1;
`,R=e=>{let{children:t,close:r}=e;return Object(O.jsx)(O.Fragment,{children:Object(c.createPortal)(Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(E,{children:t}),Object(O.jsx)(L,{onClick:r})]}),document.body)})},P={red:["hsl(340deg 100% 32%)","hsl(345deg 100% 47%)"],green:["hsl(107deg 100% 25%)","hsl(107deg 100% 35%)"],pink:["hsl(333deg 100% 70%)","hsl(333deg 100% 78%)"]},I="pink",z=o.a.button`
  background: hsl(340deg 100% 32%);
  ${e=>{let{btnColor:t}=e;return{background:P[null!==t&&void 0!==t?t:I][0]}}}
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;

  .front {
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    ${e=>{let{btnColor:t}=e;return{background:P[null!==t&&void 0!==t?t:I][1]}}}
    color: white;
    transform: translateY(-6px);
  }

  &:disabled {
    opacity: .4;
    cursor: default;
  }

  &:hover {
  &:hover:not(:disabled) {
    filter: brightness(110%);
  }
  &:hover:not(:disabled) .front {
    transform: translateY(-6px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  &:active:not(:disabled) .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`,N=e=>{let{children:t,...r}=e;return Object(O.jsx)(z,{...r,children:Object(O.jsx)("span",{class:"front",children:t})})},M=o.a.div`
  font-weight: 600;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`,T=(o.a.div`
  padding: 4px;
  border: 3px solid #eee;
  border-radius: 4px;
`,o.a.div`
  padding: 4px;
  border: 3px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  hover {
    opacity: .6;
  }
`),H=e=>{let{title:t,description:r,onClick:n,selected:s}=e;return Object(O.jsxs)(T,{style:{borderColor:"#eee",borderWidth:s?"5px":"3px",fontWeight:s?"bold":"normal"},onClick:n,children:[t,Object(O.jsx)("br",{}),r]})},F=Object(o.a)(M)`
  display: flex;
  flex-direction: column;
  color: white;
`,G=()=>{const[e,t]=Object(n.useState)(),{state:r,dispatch:s}=Object(n.useContext)(Q);return Object(O.jsxs)(F,{children:[Object(O.jsx)("h1",{children:"Shop"}),"Current Gold: ",r.money,Object(O.jsx)("br",{}),"Current Upgrades:",Object(O.jsx)("div",{style:{display:"flex"},children:JSON.stringify(r.upgrades)}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(N,{onClick:()=>{t((e=>{let{count:t}=e;const r=[];for(;r.length<t;){const e=g[l(0,g.length)];r.includes(e)||r.push(e)}return r})({count:3}))},disabled:r.money<30,children:["Purchase Upgrade (",30," gold)"]}),Object(O.jsx)("br",{}),Object(O.jsx)(N,{onClick:()=>s({type:"startNextRound"}),children:"Next Level"}),Object(O.jsx)(A,{options:e,close:()=>t()})]})},A=e=>{let{options:t,close:r}=e;const{state:s,dispatch:c}=Object(n.useContext)(Q),[i,o]=Object(n.useState)(0);return t?Object(O.jsxs)(R,{close:()=>{},children:[Object(O.jsx)("h1",{children:"Choose Your Card"}),t.map(((e,t)=>{const r=s.upgrades[e];return Object(O.jsx)(H,{title:"Level "+r,description:f({level:r,name:e}),onClick:()=>o(t),selected:i===t},t)})),Object(O.jsx)("button",{onClick:()=>{c({type:"upgrade",payload:{upgrades:[t[i]],price:30}}),r()},children:"Collect"})]}):Object(O.jsx)(O.Fragment,{})},U={sensitivity:.4,targetSize:8},Y=(e,t)=>localStorage.setItem(e,t),D=e=>{let{isOpen:t,close:r}=e;const{state:s,dispatch:c}=Object(n.useContext)(Q);return Object(n.useEffect)((()=>{const{sensitivity:e,targetSize:t}=s;e&&Y("sensitivity",e),t&&Y("targetSize",t)}),[s.sensitivity,s.targetSize]),t?Object(O.jsxs)(R,{close:r,children:[Object(O.jsx)("h1",{children:"Settings"}),Object(O.jsxs)("div",{children:["Sensitivity: \xa0",Object(O.jsx)("input",{type:"number",step:"0.01",value:s.sensitivity,onChange:e=>c({type:"changeSettings",payload:{sensitivity:e.target.value}})})]}),Object(O.jsxs)("div",{children:["Target Size (in px): \xa0",Object(O.jsx)("input",{type:"number",step:"1",value:s.targetSize,onChange:e=>c({type:"changeSettings",payload:{targetSize:e.target.value}})})]}),Object(O.jsx)("br",{}),Object(O.jsx)(N,{onClick:r,children:"Save"})]}):Object(O.jsx)(O.Fragment,{})},q={status:"INITIAL",sensitivity:(J="sensitivity",localStorage.getItem(J)||U[J]),targetSize:(e=>parseInt(localStorage.getItem(e)||U[e]))("targetSize")};var J;const W={timer:20,currentScore:0,goalScore:10,level:1,money:0,upgrades:x},$=e=>({...e,money:e.money+e.currentScore,currentScore:0,level:e.level+1,goalScore:Math.ceil(1.2*e.goalScore),status:"SHOP"}),B=(e,t)=>{switch(t.type){case"changeSettings":return{...e,sensitivity:t.payload.sensitivity||e.sensitivity,targetSize:t.payload.targetSize||e.targetSize};case"returnToHomeScreen":return{status:"INITIAL"};case"startGame":return{...e,status:"RUNNING",...W};case"hitTarget":const r=e.currentScore+t.payload.inc,n={...e,currentScore:r};return e.goalScore,n;case"endRound":return e.currentScore>=e.goalScore?$(e):{...e,status:"COMPLETED"};case"upgrade":if("SHOP"===!e.status)throw new Error("Must be in shop to purchase");const s=Object.assign({},e.upgrades);return t.payload.upgrades.forEach((e=>s[e]++)),{...e,money:e.money-t.payload.price,upgrades:s};case"startNextRound":if("SHOP"===!e.status)throw new Error("Must be in shop to begin next round");return{...e,status:"RUNNING",timer:20};default:throw new Error("Action not recognized - "+t.type)}},X=o.a.div`
  color: white;
`,K=Object(o.a)(M)`
  font-weight: 600;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 8px;
  }
`,Q=s.a.createContext();var V=()=>{const[e,t]=Object(n.useReducer)(B,q),[r,s]=Object(n.useState)(!1),c=()=>{t({type:"startGame"})};return Object(O.jsx)(Q.Provider,{value:{state:e,dispatch:t},children:Object(O.jsxs)(X,{children:["INITIAL"===e.status&&Object(O.jsxs)(K,{children:[Object(O.jsx)(N,{onClick:c,children:"Start Game"}),Object(O.jsx)(N,{onClick:()=>s(!0),children:"Settings"}),Object(O.jsx)(D,{isOpen:r,close:()=>s(!1)})]}),"RUNNING"===e.status&&Object(O.jsx)(C,{}),"SHOP"===e.status&&Object(O.jsx)(G,{}),"COMPLETED"===e.status&&Object(O.jsxs)(K,{children:[Object(O.jsx)("h1",{children:"Game Over"}),Object(O.jsxs)("p",{children:["Level Reached: ",e.level]}),Object(O.jsxs)("p",{children:["Score Reached: ",e.currentScore]}),Object(O.jsxs)("p",{children:["Goal Score: ",e.goalScore]}),Object(O.jsx)(N,{onClick:c,children:"Play Again"}),Object(O.jsx)(N,{onClick:()=>{t({type:"returnToHomeScreen"})},children:"Return Home"})]})]})})};var Z=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((t=>{let{getCLS:r,getFID:n,getFCP:s,getLCP:c,getTTFB:i}=t;r(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(V,{})}),document.getElementById("root")),Z()}},[[16,1,2]]]);
//# sourceMappingURL=main.9af94775.chunk.js.map