(this.webpackJsonpnerai=this.webpackJsonpnerai||[]).push([[0],{11:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),c=r(3),i=r.n(c),o=(r(11),r(2)),a=r(18);const l=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)),u=e=>Math.PI/180*e,d=(e,t)=>{const r=Object(n.useRef)({values:t,handler:function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return e(...n,r.current.values)}});return r.current.values=t,r.current.handler},h=["gray","green","blue","purple","gold"],b=e=>({tier:e,effects:[]}),j=e=>{const t=(e=>{const t=[90,9,1,0,0];for(let r=1;r<=e;r++){let e=2;r>9?e=4:r>4&&(e=3);let n=0;for(let r=e;r>0;r--)t[r]+=1,n+=t[r];const s=100-n;t[0]=s}return t})(e),r=l(0,101);let n=0,s=0;for(let c=0;c<t.length;c++)if(n+=t[c],r<n){s=c;break}return{tier:s,effects:[]}},p=["baseTargets","extraSpawnOnHit","multiOnHit","multiOnConsecutiveHit"],g={baseTargets:{descriptions:["Increases base number of targets by 1","Increases base number of targets by 2","Increases base number of targets by 3","Increases base number of targets by 4"]},extraSpawnOnHit:{descriptions:["5% chance of extra target spawning on hit","10% chance of extra target spawning on hit","15% chance of extra target spawning on hit","20% chance of extra target spawning on hit"]},multiOnHit:{descriptions:["Not implemented yet. Do not choose"]},multiOnConsecutiveHit:{descriptions:["Not implemented yet. Do not choose"]}},x=p.reduce(((e,t)=>(e[t]=0,e)),{}),O=e=>{let{level:t,name:r}=e;return g[r].descriptions[t]},f=[b(0),b(0),b(0)];var m=r(0);const v=o.a.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  color: white;
`,y=o.a.div`
  float: left;
`,S=o.a.div`
  float: right;
`,w=o.a.div`
  margin: 0 auto;
  width: 100px;
`;var C=e=>{let{timeRemaining:t}=e;const{state:r}=Object(n.useContext)(V),s=Object.entries(r.upgrades).filter((e=>{let[t,r]=e;return r>0})).map((e=>{let[t,r]=e;return O({name:t,level:r})})).join(", ");return Object(m.jsxs)(v,{children:[Object(m.jsxs)(y,{children:[Object(m.jsxs)("h1",{children:["Level ",r.level]}),Object(m.jsxs)("h1",{children:["Score: ",r.currentScore," / ",r.goalScore]})]}),Object(m.jsxs)(S,{children:[Object(m.jsx)("p",{children:"Upgrades"}),Object(m.jsx)("p",{children:s})]}),Object(m.jsx)(w,{children:Object(m.jsx)("h1",{children:t})})]})};const k=o.a.div`
  height: 100%;
  width: 100%;
`;var E=()=>{const{state:e,dispatch:t}=Object(n.useContext)(V),r=Object(n.useRef)(null),[s,c]=Object(n.useState)(),[i,o]=Object(n.useState)(),[b,p]=Object(n.useState)(),g=Object(n.useRef)({x:500,y:500}),x=Object(n.useRef)([]),O=Object(n.useRef)(e);Object(n.useEffect)((()=>{O.current=e}),[e]),Object(n.useEffect)((()=>{const e=r.current;c(e);const t=r.current.getContext("2d");o(t),r.current.width=window.innerWidth,r.current.height=window.innerHeight,e.requestPointerLock({unadjustedMovement:!0});const n=()=>w(e),s=()=>f(e);return document.addEventListener("pointerlockchange",n,!1),document.addEventListener("click",s),()=>{document.removeEventListener("pointerlockchange",n),document.removeEventListener("click",s),document.exitPointerLock()}}),[]),Object(n.useEffect)((()=>{let e;return s&&i&&(e=a.a(S)),()=>e&&e.stop()}),[s,i]);const f=n=>{if(document.pointerLockElement){const r=g.current.x,n=g.current.y;let c;const i=x.current.filter((e=>{let{x:t,y:s,radius:i,target:o}=e;const a=Math.sqrt(Math.pow(t-r,2)+Math.pow(s-n,2))>=i+5;return a||(c=o),a}));if(c){const{extraSpawnOnHit:r}=e.upgrades;r>0&&(s=.05*r,Math.random()<s)&&(i.push(v()),i.push(v())),t({type:"hitTarget",payload:{inc:c.tier+1}}),x.current=i}else t({type:"hitTarget",payload:{inc:-1}})}else setTimeout((()=>{r.current.requestPointerLock({unadjustedMovement:!0})}),100);var s},v=()=>{if(!r.current)return{x:0,y:0,radius:0,target:j(0)};const{targetSize:t,level:n}=e,{width:s,height:c}=r.current;return{x:l(s/2-s/4,s-t-s/2),y:l(c/2-c/4,c-t-c/2),radius:t,target:j(n)}},y=(e,t)=>{const{width:r,height:n}=e;t.fillStyle="black",t.fillRect(0,0,r,n),(e=>{x.current.forEach((t=>{let{x:r,y:n,radius:s,target:c}=t;e.fillStyle=h[c.tier],e.beginPath(),e.arc(r,n,s,0,u(360),!0),e.fill(),e.closePath()}))})(t),t.fillStyle="#f00",t.beginPath(),t.arc(g.current.x,g.current.y,5,0,u(360),!0),t.fill(),t.closePath()},S=d(((r,n)=>{let[s,c]=n;if(!s||!c)return;(t=>{const{baseTargets:r}=e.upgrades,n=x.current.length;if(n<=r&&t){for(let e=n;e<r;e++)x.current.push(v());x.current.push(v())}})(s),y(s,c);const i=(e.timer-r/1e3).toFixed(2);if(i<=0)return t({type:"endRound"});p(i)}),[s,i]),w=e=>{document.pointerLockElement===e||document.mozPointerLockElement===e?e.addEventListener("mousemove",E,!1):e.removeEventListener("mousemove",E,!1)},E=d(((t,r)=>{let[n,s]=r;if(!s)return;const{x:c,y:i}=n.current;if(c>s.width)return void(n.current={x:s.width-1,y:i});if(i>s.height)return void(n.current={x:c,y:s.height-1});if(c<0)return void(n.current={x:1,y:i});if(i<0)return void(n.current={x:c,y:1});const o=t.movementX*(e.sensitivity||1),a=t.movementY*(e.sensitivity||1);n.current={x:c+o,y:i+a}}),[g,s]);return Object(m.jsxs)(k,{children:[Object(m.jsx)(C,{timeRemaining:b}),Object(m.jsx)("canvas",{ref:r})]})};const I=o.a.div`
  background-color: black;
  opacity: .4;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`,L=o.a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
  padding: 24px;
  border-radius: 16px;
  opacity: 1;
`,P=e=>{let{children:t,close:r}=e;return Object(m.jsx)(m.Fragment,{children:Object(c.createPortal)(Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(L,{children:t}),Object(m.jsx)(I,{onClick:r})]}),document.body)})},z={red:["hsl(340deg 100% 32%)","hsl(345deg 100% 47%)"],green:["hsl(107deg 100% 25%)","hsl(107deg 100% 35%)"],pink:["hsl(333deg 100% 70%)","hsl(333deg 100% 78%)"]},R="pink",N=o.a.button`
  background: hsl(340deg 100% 32%);
  ${e=>{let{btnColor:t}=e;return{background:z[null!==t&&void 0!==t?t:R][0]}}}
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
    ${e=>{let{btnColor:t}=e;return{background:z[null!==t&&void 0!==t?t:R][1]}}}
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
`,M=e=>{let{children:t,...r}=e;return Object(m.jsx)(N,{...r,children:Object(m.jsx)("span",{class:"front",children:t})})},T=o.a.div`
  font-weight: 600;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`,H=(o.a.div`
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
`),F=e=>{let{title:t,description:r,onClick:n,selected:s}=e;return Object(m.jsxs)(H,{style:{borderColor:"#eee",borderWidth:s?"5px":"3px",fontWeight:s?"bold":"normal"},onClick:n,children:[t,Object(m.jsx)("br",{}),r]})},G=Object(o.a)(T)`
  display: flex;
  flex-direction: column;
  color: white;
`,A=()=>{const[e,t]=Object(n.useState)(),{state:r,dispatch:s}=Object(n.useContext)(V);return Object(m.jsxs)(G,{children:[Object(m.jsx)("h1",{children:"Shop"}),"Current Gold: ",r.money,Object(m.jsx)("br",{}),"Current Upgrades:",Object(m.jsx)("div",{style:{display:"flex"},children:JSON.stringify(r.upgrades)}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)(M,{onClick:()=>{t((e=>{let{count:t}=e;const r=[];for(;r.length<t;){const e=p[l(0,p.length)];r.includes(e)||r.push(e)}return r})({count:3}))},disabled:r.money<30,children:["Purchase Upgrade (",30," gold)"]}),Object(m.jsx)("br",{}),Object(m.jsx)(M,{onClick:()=>s({type:"startNextRound"}),children:"Next Level"}),Object(m.jsx)(U,{options:e,close:()=>t()})]})},U=e=>{let{options:t,close:r}=e;const{state:s,dispatch:c}=Object(n.useContext)(V),[i,o]=Object(n.useState)(0);return t?Object(m.jsxs)(P,{close:()=>{},children:[Object(m.jsx)("h1",{children:"Choose Your Card"}),t.map(((e,t)=>{const r=s.upgrades[e];return Object(m.jsx)(F,{title:"Level "+r,description:O({level:r,name:e}),onClick:()=>o(t),selected:i===t},t)})),Object(m.jsx)("button",{onClick:()=>{c({type:"upgrade",payload:{upgrades:[t[i]]}}),r()},children:"Collect"})]}):Object(m.jsx)(m.Fragment,{})},D={sensitivity:.4,targetSize:8},Y=(e,t)=>localStorage.setItem(e,t),q=e=>{let{isOpen:t,close:r}=e;const{state:s,dispatch:c}=Object(n.useContext)(V);return Object(n.useEffect)((()=>{const{sensitivity:e,targetSize:t}=s;e&&Y("sensitivity",e),t&&Y("targetSize",t)}),[s.sensitivity,s.targetSize]),t?Object(m.jsxs)(P,{close:r,children:[Object(m.jsx)("h1",{children:"Settings"}),Object(m.jsxs)("div",{children:["Sensitivity: \xa0",Object(m.jsx)("input",{type:"number",step:"0.01",value:s.sensitivity,onChange:e=>c({type:"changeSettings",payload:{sensitivity:e.target.value}})})]}),Object(m.jsxs)("div",{children:["Target Size (in px): \xa0",Object(m.jsx)("input",{type:"number",step:"1",value:s.targetSize,onChange:e=>c({type:"changeSettings",payload:{targetSize:e.target.value}})})]}),Object(m.jsx)("br",{}),Object(m.jsx)(M,{onClick:r,children:"Save"})]}):Object(m.jsx)(m.Fragment,{})},J={status:"INITIAL",sensitivity:(W="sensitivity",localStorage.getItem(W)||D[W]),targetSize:(e=>parseInt(localStorage.getItem(e)||D[e]))("targetSize")};var W;const B={timer:20,currentScore:0,goalScore:10,level:1,money:0,targets:f,upgrades:x},$=e=>({...e,money:e.money+e.currentScore,currentScore:0,level:e.level+1,goalScore:Math.ceil(1.2*e.goalScore),status:"SHOP"}),X=(e,t)=>{switch(t.type){case"changeSettings":return{...e,sensitivity:t.payload.sensitivity||e.sensitivity,targetSize:t.payload.targetSize||e.targetSize};case"returnToHomeScreen":return{status:"INITIAL"};case"startGame":return{...e,status:"RUNNING",...B};case"hitTarget":const r=e.currentScore+t.payload.inc;return e.goalScore,{...e,currentScore:r};case"endRound":return e.currentScore>=e.goalScore?$(e):{...e,status:"COMPLETED"};case"upgrade":if("SHOP"===!e.status)throw new Error("Must be in shop to purchase");const n=Object.assign({},e.upgrades);return t.payload.upgrades.forEach((e=>n[e]++)),{...e,upgrades:n};case"startNextRound":if("SHOP"===!e.status)throw new Error("Must be in shop to begin next round");return{...e,status:"RUNNING",timer:20};default:throw new Error("Action not recognized - "+t.type)}},K=o.a.div`
  color: white;
`,Q=Object(o.a)(T)`
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
`,V=s.a.createContext();var Z=()=>{const[e,t]=Object(n.useReducer)(X,J),[r,s]=Object(n.useState)(!1),c=()=>{t({type:"startGame"})};return Object(m.jsx)(V.Provider,{value:{state:e,dispatch:t},children:Object(m.jsxs)(K,{children:["INITIAL"===e.status&&Object(m.jsxs)(Q,{children:[Object(m.jsx)(M,{onClick:c,children:"Start Game"}),Object(m.jsx)(M,{onClick:()=>s(!0),children:"Settings"}),Object(m.jsx)(q,{isOpen:r,close:()=>s(!1)})]}),"RUNNING"===e.status&&Object(m.jsx)(E,{}),"SHOP"===e.status&&Object(m.jsx)(A,{}),"COMPLETED"===e.status&&Object(m.jsxs)(Q,{children:[Object(m.jsx)("h1",{children:"Game Over"}),Object(m.jsxs)("p",{children:["Level Reached: ",e.level]}),Object(m.jsxs)("p",{children:["Score Reached: ",e.currentScore]}),Object(m.jsxs)("p",{children:["Goal Score: ",e.goalScore]}),Object(m.jsx)(M,{onClick:c,children:"Play Again"}),Object(m.jsx)(M,{onClick:()=>{t({type:"returnToHomeScreen"})},children:"Return Home"})]})]})})};var _=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((t=>{let{getCLS:r,getFID:n,getFCP:s,getLCP:c,getTTFB:i}=t;r(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(Z,{})}),document.getElementById("root")),_()}},[[16,1,2]]]);
//# sourceMappingURL=main.46c07449.chunk.js.map