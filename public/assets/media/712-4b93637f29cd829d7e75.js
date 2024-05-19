"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[712,6544,2364],{44523:function(n,r,o){o.d(r,{d:function(){return v},f:function(){return M}});var l=o(2265),a=o(75606),u=o(11931),c=o(32600),s=o(46618),d=o(12950);let p=(0,l.createContext)(null);function M(){let[n,r]=(0,l.useState)([]);return[n.length>0?n.join(" "):void 0,(0,l.useMemo)(()=>function(n){let o=(0,d.z)(n=>(r(r=>[...r,n]),()=>r(r=>{let o=r.slice(),l=o.indexOf(n);return -1!==l&&o.splice(l,1),o}))),a=(0,l.useMemo)(()=>({register:o,slot:n.slot,name:n.name,props:n.props}),[o,n.slot,n.name,n.props]);return l.createElement(p.Provider,{value:a},n.children)},[r])]}let v=Object.assign((0,u.yV)(function(n,r){let o=(0,a.M)(),{id:d=`headlessui-description-${o}`,...v}=n,g=function f(){let n=(0,l.useContext)(p);if(null===n){let n=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,f),n}return n}(),h=(0,s.T)(r);(0,c.e)(()=>g.register(d),[d,g.register]);let w={ref:h,...g.props,id:d};return(0,u.sY)({ourProps:w,theirProps:v,slot:g.slot||{},defaultTag:"p",name:g.name||"Description"})}),{})},82796:function(n,r,o){let l,a;o.d(r,{V:function(){return es}});var u,c,s,d,p,v=o(2265),g=o.t(v,2),h=o(60597),w=o(11931),E=o(46618),T=o(93850),y=o(35863),L=o(75606),C=o(48957),k=o(58227),R=o(65410),O=o(12950),D=o(49376),A=o(80634),x=o(57728),F=o(6890),_=o(55195);function m(n,r){let o=(0,v.useRef)([]),l=(0,O.z)(n);(0,v.useEffect)(()=>{let n=[...o.current];for(let[a,u]of r.entries())if(o.current[a]!==u){let a=l(r,n);return o.current=r,a}},[l,...r])}var N=o(82769),Y=o(33051);function P(n){if(!n)return new Set;if("function"==typeof n)return new Set(n());let r=new Set;for(let o of n.current)o.current instanceof HTMLElement&&r.add(o.current);return r}var j=((u=j||{})[u.None=1]="None",u[u.InitialFocus=2]="InitialFocus",u[u.TabLock=4]="TabLock",u[u.FocusLock=8]="FocusLock",u[u.RestoreFocus=16]="RestoreFocus",u[u.All=30]="All",u);let B=Object.assign((0,w.yV)(function(n,r){let o=(0,v.useRef)(null),l=(0,E.T)(o,r),{initialFocus:a,containers:u,features:c=30,...s}=n;(0,C.H)()||(c=1);let d=(0,x.i)(o);!function({ownerDocument:n},r){let o=function(n=!0){let r=(0,v.useRef)(H.slice());return m(([n],[o])=>{!0===o&&!1===n&&(0,_.Y)(()=>{r.current.splice(0)}),!1===o&&!0===n&&(r.current=H.slice())},[n,H,r]),(0,O.z)(()=>{var n;return null!=(n=r.current.find(n=>null!=n&&n.isConnected))?n:null})}(r);m(()=>{r||(null==n?void 0:n.activeElement)===(null==n?void 0:n.body)&&(0,R.C5)(o())},[r]),(0,Y.L)(()=>{r&&(0,R.C5)(o())})}({ownerDocument:d},!!(16&c));let p=function({ownerDocument:n,container:r,initialFocus:o},l){let a=(0,v.useRef)(null),u=(0,A.t)();return m(()=>{if(!l)return;let c=r.current;c&&(0,_.Y)(()=>{if(!u.current)return;let r=null==n?void 0:n.activeElement;if(null!=o&&o.current){if((null==o?void 0:o.current)===r){a.current=r;return}}else if(c.contains(r)){a.current=r;return}null!=o&&o.current?(0,R.C5)(o.current):(0,R.jA)(c,R.TO.First)===R.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=null==n?void 0:n.activeElement})},[l]),a}({ownerDocument:d,container:o,initialFocus:a},!!(2&c));!function({ownerDocument:n,container:r,containers:o,previousActiveElement:l},a){let u=(0,A.t)();(0,F.O)(null==n?void 0:n.defaultView,"focus",n=>{if(!a||!u.current)return;let c=P(o);r.current instanceof HTMLElement&&c.add(r.current);let s=l.current;if(!s)return;let d=n.target;d&&d instanceof HTMLElement?S(c,d)?(l.current=d,(0,R.C5)(d)):(n.preventDefault(),n.stopPropagation(),(0,R.C5)(s)):(0,R.C5)(l.current)},!0)}({ownerDocument:d,container:o,containers:u,previousActiveElement:p},!!(8&c));let g=(0,D.l)(),T=(0,O.z)(n=>{let r=o.current;r&&(0,h.E)(g.current,{[D.N.Forwards]:()=>{(0,R.jA)(r,R.TO.First,{skipElements:[n.relatedTarget]})},[D.N.Backwards]:()=>{(0,R.jA)(r,R.TO.Last,{skipElements:[n.relatedTarget]})}})}),y=(0,N.G)(),L=(0,v.useRef)(!1);return v.createElement(v.Fragment,null,!!(4&c)&&v.createElement(k._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:T,features:k.A.Focusable}),(0,w.sY)({ourProps:{ref:l,onKeyDown(n){"Tab"==n.key&&(L.current=!0,y.requestAnimationFrame(()=>{L.current=!1}))},onBlur(n){let r=P(u);o.current instanceof HTMLElement&&r.add(o.current);let l=n.relatedTarget;l instanceof HTMLElement&&"true"!==l.dataset.headlessuiFocusGuard&&(S(r,l)||(L.current?(0,R.jA)(o.current,(0,h.E)(g.current,{[D.N.Forwards]:()=>R.TO.Next,[D.N.Backwards]:()=>R.TO.Previous})|R.TO.WrapAround,{relativeTo:n.target}):n.target instanceof HTMLElement&&(0,R.C5)(n.target)))}},theirProps:s,defaultTag:"div",name:"FocusTrap"}),!!(4&c)&&v.createElement(k._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:T,features:k.A.Focusable}))}),{features:j}),H=[];function S(n,r){for(let o of n)if(o.contains(r))return!0;return!1}!function(n){function e(){"loading"!==document.readyState&&(n(),document.removeEventListener("DOMContentLoaded",e))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",e),e())}(()=>{function t(n){n.target instanceof HTMLElement&&n.target!==document.body&&H[0]!==n.target&&(H.unshift(n.target),(H=H.filter(n=>null!=n&&n.isConnected)).splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});var V=o(87250),z=o(64705),I=o(44523),W=o(25306),$=o(32600);let Z=(0,v.createContext)(()=>{});Z.displayName="StackContext";var U=((c=U||{})[c.Add=0]="Add",c[c.Remove=1]="Remove",c);function stack_context_M({children:n,onUpdate:r,type:o,element:l,enabled:a}){let u=(0,v.useContext)(Z),c=(0,O.z)((...n)=>{null==r||r(...n),u(...n)});return(0,$.e)(()=>{let n=void 0===a||!0===a;return n&&c(0,o,l),()=>{n&&c(1,o,l)}},[c,o,l,a]),v.createElement(Z.Provider,{value:c},n)}var q=o(90583);let{useState:G,useEffect:J,useLayoutEffect:K,useDebugValue:Q}=g;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let X=g.useSyncExternalStore;var ee=o(85390);let et=(s={PUSH(n,r){var o;let l=null!=(o=this.get(n))?o:{doc:n,count:0,d:(0,ee.k)(),meta:new Set};return l.count++,l.meta.add(r),this.set(n,l),this},POP(n,r){let o=this.get(n);return o&&(o.count--,o.meta.delete(r)),this},SCROLL_PREVENT({doc:n,d:r,meta:o}){let l,a;let u={doc:n,d:r,meta:function(n){let r={};for(let o of n)Object.assign(r,o(r));return r}(o)},c=[/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0?{before(){l=window.pageYOffset},after({doc:n,d:r,meta:o}){function i(n){return o.containers.flatMap(n=>n()).some(r=>r.contains(n))}r.microTask(()=>{if("auto"!==window.getComputedStyle(n.documentElement).scrollBehavior){let o=(0,ee.k)();o.style(n.documentElement,"scroll-behavior","auto"),r.add(()=>r.microTask(()=>o.dispose()))}r.style(n.body,"marginTop",`-${l}px`),window.scrollTo(0,0);let o=null;r.addEventListener(n,"click",r=>{if(r.target instanceof HTMLElement)try{let l=r.target.closest("a");if(!l)return;let{hash:a}=new URL(l.href),u=n.querySelector(a);u&&!i(u)&&(o=u)}catch{}},!0),r.addEventListener(n,"touchmove",n=>{n.target instanceof HTMLElement&&!i(n.target)&&n.preventDefault()},{passive:!1}),r.add(()=>{window.scrollTo(0,window.pageYOffset+l),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{},{before({doc:n}){var r;let o=n.documentElement;a=(null!=(r=n.defaultView)?r:window).innerWidth-o.clientWidth},after({doc:n,d:r}){let o=n.documentElement,l=o.clientWidth-o.offsetWidth,u=a-l;r.style(o,"paddingRight",`${u}px`)}},{before({doc:n,d:r}){r.style(n.documentElement,"overflow","hidden")}}];c.forEach(({before:n})=>null==n?void 0:n(u)),c.forEach(({after:n})=>null==n?void 0:n(u))},SCROLL_ALLOW({d:n}){n.dispose()},TEARDOWN({doc:n}){this.delete(n)}},l=new Map,a=new Set,{getSnapshot:()=>l,subscribe:n=>(a.add(n),()=>a.delete(n)),dispatch(n,...r){let o=s[n].call(l,...r);o&&(l=o,a.forEach(n=>n()))}});et.subscribe(()=>{let n=et.getSnapshot(),r=new Map;for(let[o]of n)r.set(o,o.documentElement.style.overflow);for(let o of n.values()){let n="hidden"===r.get(o.doc),l=0!==o.count;(l&&!n||!l&&n)&&et.dispatch(o.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",o),0===o.count&&et.dispatch("TEARDOWN",o)}});let en=new Map,er=new Map;function use_inert_h(n,r=!0){(0,$.e)(()=>{var o;if(!r)return;let l="function"==typeof n?n():n.current;if(!l)return;let a=null!=(o=er.get(l))?o:0;return er.set(l,a+1),0!==a||(en.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0),function(){var n;if(!l)return;let r=null!=(n=er.get(l))?n:1;if(1===r?er.delete(l):er.set(l,r-1),1!==r)return;let o=en.get(l);o&&(null===o["aria-hidden"]?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",o["aria-hidden"]),l.inert=o.inert,en.delete(l))}},[n,r])}var eo=o(59985),el=((d=el||{})[d.Open=0]="Open",d[d.Closed=1]="Closed",d),ea=((p=ea||{})[p.SetTitleId=0]="SetTitleId",p);let ei={0:(n,r)=>n.titleId===r.id?n:{...n,titleId:r.id}},eu=(0,v.createContext)(null);function b(n){let r=(0,v.useContext)(eu);if(null===r){let r=Error(`<${n} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,b),r}return r}function Be(n,r){return(0,h.E)(r.type,ei,n,r)}eu.displayName="DialogContext";let ec=w.AN.RenderStrategy|w.AN.Static,es=Object.assign((0,w.yV)(function(n,r){var o;let l=(0,L.M)(),{id:a=`headlessui-dialog-${l}`,open:u,onClose:c,initialFocus:s,__demoMode:d=!1,...p}=n,[g,y]=(0,v.useState)(0),k=(0,W.oJ)();void 0===u&&null!==k&&(u=(k&W.ZM.Open)===W.ZM.Open);let R=(0,v.useRef)(null),D=(0,E.T)(R,r),A=(0,x.i)(R),_=n.hasOwnProperty("open")||null!==k,N=n.hasOwnProperty("onClose");if(!_&&!N)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!_)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!N)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof u)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u}`);if("function"!=typeof c)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${c}`);let Y=u?0:1,[j,H]=(0,v.useReducer)(Be,{titleId:null,descriptionId:null,panelRef:(0,v.createRef)()}),Z=(0,O.z)(()=>c(!1)),G=(0,O.z)(n=>H({type:0,id:n})),J=!!(0,C.H)()&&!d&&0===Y,K=g>1,Q=null!==(0,v.useContext)(eu),[ee,en]=(0,V.k)(),{resolveContainers:er,mainTreeNodeRef:el,MainTreeNode:ea}=(0,eo.v)({portals:ee,defaultContainers:[null!=(o=j.panelRef.current)?o:R.current]}),ei=K?"parent":"leaf",es=null!==k&&(k&W.ZM.Closing)===W.ZM.Closing,ed=!Q&&!es&&J;use_inert_h((0,v.useCallback)(()=>{var n,r;return null!=(r=Array.from(null!=(n=null==A?void 0:A.querySelectorAll("body > *"))?n:[]).find(n=>"headlessui-portal-root"!==n.id&&n.contains(el.current)&&n instanceof HTMLElement))?r:null},[el]),ed);let ef=!!K||J;use_inert_h((0,v.useCallback)(()=>{var n,r;return null!=(r=Array.from(null!=(n=null==A?void 0:A.querySelectorAll("[data-headlessui-portal]"))?n:[]).find(n=>n.contains(el.current)&&n instanceof HTMLElement))?r:null},[el]),ef);let ep=!(!J||K);(0,q.O)(er,Z,ep);let em=!(K||0!==Y);(0,F.O)(null==A?void 0:A.defaultView,"keydown",n=>{em&&(n.defaultPrevented||n.key===T.R.Escape&&(n.preventDefault(),n.stopPropagation(),Z()))}),function(n,r,o=()=>[document.body]){var l;let a,u;l=n=>{var r;return{containers:[...null!=(r=n.containers)?r:[],o]}},a=X(et.subscribe,et.getSnapshot,et.getSnapshot),(u=n?a.get(n):void 0)&&u.count,(0,$.e)(()=>{if(!(!n||!r))return et.dispatch("PUSH",n,l),()=>et.dispatch("POP",n,l)},[r,n])}(A,!(es||0!==Y||Q),er),(0,v.useEffect)(()=>{if(0!==Y||!R.current)return;let n=new ResizeObserver(n=>{for(let r of n){let n=r.target.getBoundingClientRect();0===n.x&&0===n.y&&0===n.width&&0===n.height&&Z()}});return n.observe(R.current),()=>n.disconnect()},[Y,R,Z]);let[ev,eg]=(0,I.f)(),eh=(0,v.useMemo)(()=>[{dialogState:Y,close:Z,setTitleId:G},j],[Y,j,Z,G]),ew=(0,v.useMemo)(()=>({open:0===Y}),[Y]),eE={ref:D,id:a,role:"dialog","aria-modal":0===Y||void 0,"aria-labelledby":j.titleId,"aria-describedby":ev};return v.createElement(stack_context_M,{type:"Dialog",enabled:0===Y,element:R,onUpdate:(0,O.z)((n,r)=>{"Dialog"===r&&(0,h.E)(n,{[U.Add]:()=>y(n=>n+1),[U.Remove]:()=>y(n=>n-1)})})},v.createElement(z.O,{force:!0},v.createElement(V.h,null,v.createElement(eu.Provider,{value:eh},v.createElement(V.h.Group,{target:R},v.createElement(z.O,{force:!1},v.createElement(eg,{slot:ew,name:"Dialog.Description"},v.createElement(B,{initialFocus:s,containers:er,features:J?(0,h.E)(ei,{parent:B.features.RestoreFocus,leaf:B.features.All&~B.features.FocusLock}):B.features.None},v.createElement(en,null,(0,w.sY)({ourProps:eE,theirProps:p,slot:ew,defaultTag:"div",features:ec,visible:0===Y,name:"Dialog"}))))))))),v.createElement(ea,null))}),{Backdrop:(0,w.yV)(function(n,r){let o=(0,L.M)(),{id:l=`headlessui-dialog-backdrop-${o}`,...a}=n,[{dialogState:u},c]=b("Dialog.Backdrop"),s=(0,E.T)(r);(0,v.useEffect)(()=>{if(null===c.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[c.panelRef]);let d=(0,v.useMemo)(()=>({open:0===u}),[u]);return v.createElement(z.O,{force:!0},v.createElement(V.h,null,(0,w.sY)({ourProps:{ref:s,id:l,"aria-hidden":!0},theirProps:a,slot:d,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,w.yV)(function(n,r){let o=(0,L.M)(),{id:l=`headlessui-dialog-panel-${o}`,...a}=n,[{dialogState:u},c]=b("Dialog.Panel"),s=(0,E.T)(r,c.panelRef),d=(0,v.useMemo)(()=>({open:0===u}),[u]),p=(0,O.z)(n=>{n.stopPropagation()});return(0,w.sY)({ourProps:{ref:s,id:l,onClick:p},theirProps:a,slot:d,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:(0,w.yV)(function(n,r){let o=(0,L.M)(),{id:l=`headlessui-dialog-overlay-${o}`,...a}=n,[{dialogState:u,close:c}]=b("Dialog.Overlay"),s=(0,E.T)(r),d=(0,O.z)(n=>{if(n.target===n.currentTarget){if((0,y.P)(n.currentTarget))return n.preventDefault();n.preventDefault(),n.stopPropagation(),c()}}),p=(0,v.useMemo)(()=>({open:0===u}),[u]);return(0,w.sY)({ourProps:{ref:s,id:l,"aria-hidden":!0,onClick:d},theirProps:a,slot:p,defaultTag:"div",name:"Dialog.Overlay"})}),Title:(0,w.yV)(function(n,r){let o=(0,L.M)(),{id:l=`headlessui-dialog-title-${o}`,...a}=n,[{dialogState:u,setTitleId:c}]=b("Dialog.Title"),s=(0,E.T)(r);(0,v.useEffect)(()=>(c(l),()=>c(null)),[l,c]);let d=(0,v.useMemo)(()=>({open:0===u}),[u]);return(0,w.sY)({ourProps:{ref:s,id:l},theirProps:a,slot:d,defaultTag:"h2",name:"Dialog.Title"})}),Description:I.d})},40013:function(n,r,o){var l=o(2265);let a=l.forwardRef(function({title:n,titleId:r,...o},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))});r.Z=a},3217:function(n,r,o){var l=o(2265);let a=l.forwardRef(function({title:n,titleId:r,...o},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))});r.Z=a},55817:function(n,r,o){var l=o(2265);let a=l.forwardRef(function({title:n,titleId:r,...o},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,l.createElement("path",{fillRule:"evenodd",d:"M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))});r.Z=a},12066:function(n,r,o){var l=o(2265);let a=l.forwardRef(function({title:n,titleId:r,...o},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,l.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",clipRule:"evenodd"}))});r.Z=a},14027:function(n,r,o){var l=o(2265);let a=l.forwardRef(function({title:n,titleId:r,...o},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,l.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}))});r.Z=a}}]);