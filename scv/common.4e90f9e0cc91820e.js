"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{3245:(M,f,d)=>{d.d(f,{c:()=>c});var u=d(1308),g=d(7683),a=d(3488);const c=(r,o)=>{let t,e;const s=(l,w,p)=>{if("undefined"==typeof document)return;const _=document.elementFromPoint(l,w);_&&o(_)?_!==t&&(h(),i(_,p)):h()},i=(l,w)=>{t=l,e||(e=t);const p=t;(0,u.c)(()=>p.classList.add("ion-activated")),w()},h=(l=!1)=>{if(!t)return;const w=t;(0,u.c)(()=>w.classList.remove("ion-activated")),l&&e!==t&&t.click(),t=void 0};return(0,a.createGesture)({el:r,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>s(l.currentX,l.currentY,g.a),onMove:l=>s(l.currentX,l.currentY,g.b),onEnd:()=>{h(!0),(0,g.h)(),e=void 0}})}},8685:(M,f,d)=>{d.d(f,{g:()=>u});const u=(o,t,e,s,i)=>a(o[1],t[1],e[1],s[1],i).map(h=>g(o[0],t[0],e[0],s[0],h)),g=(o,t,e,s,i)=>i*(3*t*Math.pow(i-1,2)+i*(-3*e*i+3*e+s*i))-o*Math.pow(i-1,3),a=(o,t,e,s,i)=>r((s-=i)-3*(e-=i)+3*(t-=i)-(o-=i),3*e-6*t+3*o,3*t-3*o,o).filter(l=>l>=0&&l<=1),r=(o,t,e,s)=>{if(0===o)return((o,t,e)=>{const s=t*t-4*o*e;return s<0?[]:[(-t+Math.sqrt(s))/(2*o),(-t-Math.sqrt(s))/(2*o)]})(t,e,s);const i=(3*(e/=o)-(t/=o)*t)/3,h=(2*t*t*t-9*t*e+27*(s/=o))/27;if(0===i)return[Math.pow(-h,1/3)];if(0===h)return[Math.sqrt(-i),-Math.sqrt(-i)];const l=Math.pow(h/2,2)+Math.pow(i/3,3);if(0===l)return[Math.pow(h/2,.5)-t/3];if(l>0)return[Math.pow(-h/2+Math.sqrt(l),1/3)-Math.pow(h/2+Math.sqrt(l),1/3)-t/3];const w=Math.sqrt(Math.pow(-i/3,3)),p=Math.acos(-h/(2*Math.sqrt(Math.pow(-i/3,3)))),_=2*Math.pow(w,1/3);return[_*Math.cos(p/3)-t/3,_*Math.cos((p+2*Math.PI)/3)-t/3,_*Math.cos((p+4*Math.PI)/3)-t/3]}},5062:(M,f,d)=>{d.d(f,{i:()=>u});const u=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5106:(M,f,d)=>{d.r(f),d.d(f,{startFocusVisible:()=>c});const u="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=r=>{let o=[],t=!0;const e=r?r.shadowRoot:document,s=r||document.body,i=E=>{o.forEach(m=>m.classList.remove(u)),E.forEach(m=>m.classList.add(u)),o=E},h=()=>{t=!1,i([])},l=E=>{t=a.includes(E.key),t||i([])},w=E=>{if(t&&void 0!==E.composedPath){const m=E.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));i(m)}},p=()=>{e.activeElement===s&&i([])};return e.addEventListener("keydown",l),e.addEventListener("focusin",w),e.addEventListener("focusout",p),e.addEventListener("touchstart",h),e.addEventListener("mousedown",h),{destroy:()=>{e.removeEventListener("keydown",l),e.removeEventListener("focusin",w),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",h),e.removeEventListener("mousedown",h)},setFocus:i}}},4127:(M,f,d)=>{d.d(f,{C:()=>r,a:()=>a,d:()=>c});var u=d(5861),g=d(5730);const a=function(){var o=(0,u.Z)(function*(t,e,s,i,h,l){var w;if(t)return t.attachViewToDom(e,s,h,i);if(!(l||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const p="string"==typeof s?null===(w=e.ownerDocument)||void 0===w?void 0:w.createElement(s):s;return i&&i.forEach(_=>p.classList.add(_)),h&&Object.assign(p,h),e.appendChild(p),yield new Promise(_=>(0,g.c)(p,_)),p});return function(e,s,i,h,l,w){return o.apply(this,arguments)}}(),c=(o,t)=>{if(t){if(o)return o.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},r=()=>{let o,t;return{attachViewToDom:function(){var i=(0,u.Z)(function*(h,l,w={},p=[]){var _,E;if(o=h,l){const v="string"==typeof l?null===(_=o.ownerDocument)||void 0===_?void 0:_.createElement(l):l;p.forEach(n=>v.classList.add(n)),Object.assign(v,w),o.appendChild(v),yield new Promise(n=>(0,g.c)(v,n))}else if(o.children.length>0){const v=null===(E=o.ownerDocument)||void 0===E?void 0:E.createElement("div");p.forEach(n=>v.classList.add(n)),v.append(...o.children),o.appendChild(v)}const m=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),o.parentNode.insertBefore(t,o),m.appendChild(o),o});return function(l,w){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(o&&t&&(t.parentNode.insertBefore(o,t),t.remove()),Promise.resolve())}}},7683:(M,f,d)=>{d.d(f,{a:()=>a,b:()=>c,c:()=>g,d:()=>o,h:()=>r});const u={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:s})},notification(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:s})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},g=()=>{u.selection()},a=()=>{u.selectionStart()},c=()=>{u.selectionChanged()},r=()=>{u.selectionEnd()},o=t=>{u.impact(t)}},3938:(M,f,d)=>{d.d(f,{a:()=>u,b:()=>l,c:()=>t,d:()=>w,e:()=>D,f:()=>o,g:()=>p,h:()=>a,i:()=>g,j:()=>n,k:()=>y,l:()=>e,m:()=>i,n:()=>_,o:()=>s,p:()=>r,q:()=>c,r:()=>v,s:()=>C,t:()=>h,u:()=>E,v:()=>m});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},6642:(M,f,d)=>{d.d(f,{I:()=>r,a:()=>i,b:()=>o,c:()=>w,d:()=>_,f:()=>h,g:()=>s,i:()=>e,p:()=>p,r:()=>E,s:()=>l});var u=d(5861),g=d(5730),a=d(4147);const r="ion-content",o=".ion-content-scroll-host",t=`${r}, ${o}`,e=m=>"ION-CONTENT"===m.tagName,s=function(){var m=(0,u.Z)(function*(v){return e(v)?(yield new Promise(n=>(0,g.c)(v,n)),v.getScrollElement()):v});return function(n){return m.apply(this,arguments)}}(),i=m=>m.querySelector(o)||m.querySelector(t),h=m=>m.closest(t),l=(m,v)=>e(m)?m.scrollToTop(v):Promise.resolve(m.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),w=(m,v,n,y)=>e(m)?m.scrollByPoint(v,n,y):Promise.resolve(m.scrollBy({top:n,left:v,behavior:y>0?"smooth":"auto"})),p=m=>(0,a.a)(m,r),_=m=>{if(e(m)){const n=m.scrollY;return m.scrollY=!1,n}return m.style.setProperty("overflow","hidden"),!0},E=(m,v)=>{e(m)?m.scrollY=v:m.style.removeProperty("overflow")}},8439:(M,f,d)=>{d.d(f,{s:()=>u});const u=e=>{try{if(e instanceof class t{constructor(s){this.value=s}})return e.value;if(!c()||"string"!=typeof e||""===e)return e;const s=document.createDocumentFragment(),i=document.createElement("div");s.appendChild(i),i.innerHTML=e,o.forEach(p=>{const _=s.querySelectorAll(p);for(let E=_.length-1;E>=0;E--){const m=_[E];m.parentNode?m.parentNode.removeChild(m):s.removeChild(m);const v=a(m);for(let n=0;n<v.length;n++)g(v[n])}});const h=a(s);for(let p=0;p<h.length;p++)g(h[p]);const l=document.createElement("div");l.appendChild(s);const w=l.querySelector("div");return null!==w?w.innerHTML:l.innerHTML}catch(s){return console.error(s),""}},g=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let i=e.attributes.length-1;i>=0;i--){const h=e.attributes.item(i),l=h.name;if(!r.includes(l.toLowerCase())){e.removeAttribute(l);continue}const w=h.value;null!=w&&w.toLowerCase().includes("javascript:")&&e.removeAttribute(l)}const s=a(e);for(let i=0;i<s.length;i++)g(s[i])},a=e=>null!=e.children?e.children:e.childNodes,c=()=>{var e;const s=window,i=null===(e=null==s?void 0:s.Ionic)||void 0===e?void 0:e.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},r=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},1316:(M,f,d)=>{d.r(f),d.d(f,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>u,copyVisualViewport:()=>v,keyboardDidClose:()=>p,keyboardDidOpen:()=>l,keyboardDidResize:()=>w,resetKeyboardAssist:()=>t,setKeyboardClose:()=>h,setKeyboardOpen:()=>i,startKeyboardAssist:()=>e,trackViewportChanges:()=>m});const u="ionKeyboardDidShow",g="ionKeyboardDidHide";let c={},r={},o=!1;const t=()=>{c={},r={},o=!1},e=n=>{s(n),n.visualViewport&&(r=v(n.visualViewport),n.visualViewport.onresize=()=>{m(n),l()||w(n)?i(n):p(n)&&h(n)})},s=n=>{n.addEventListener("keyboardDidShow",y=>i(n,y)),n.addEventListener("keyboardDidHide",()=>h(n))},i=(n,y)=>{_(n,y),o=!0},h=n=>{E(n),o=!1},l=()=>!o&&c.width===r.width&&(c.height-r.height)*r.scale>150,w=n=>o&&!p(n),p=n=>o&&r.height===n.innerHeight,_=(n,y)=>{const D=new CustomEvent(u,{detail:{keyboardHeight:y?y.keyboardHeight:n.innerHeight-r.height}});n.dispatchEvent(D)},E=n=>{const y=new CustomEvent(g);n.dispatchEvent(y)},m=n=>{c=Object.assign({},r),r=v(n.visualViewport)},v=n=>({width:Math.round(n.width),height:Math.round(n.height),offsetTop:n.offsetTop,offsetLeft:n.offsetLeft,pageTop:n.pageTop,pageLeft:n.pageLeft,scale:n.scale})},9852:(M,f,d)=>{d.d(f,{c:()=>g});var u=d(3457);const g=a=>{let c,r,o;const t=()=>{c=()=>{o=!0,a&&a(!0)},r=()=>{o=!1,a&&a(!1)},null==u.w||u.w.addEventListener("keyboardWillShow",c),null==u.w||u.w.addEventListener("keyboardWillHide",r)};return t(),{init:t,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",c),null==u.w||u.w.removeEventListener("keyboardWillHide",r),c=r=void 0},isKeyboardVisible:()=>o}}},7741:(M,f,d)=>{d.d(f,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(a,c,r)=>{const o=a*c/r-a+"ms",t=2*Math.PI*c/r;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(a,c,r)=>{const o=c/r,t=a*o-a+"ms",e=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,c,r)=>({y1:14,y2:26,style:{transform:`rotate(${360/r*c+(c<r/2?180:-180)}deg)`,"animation-delay":a*c/r-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,c,r)=>({y1:12,y2:20,style:{transform:`rotate(${360/r*c+(c<r/2?180:-180)}deg)`,"animation-delay":a*c/r-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,c,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":a*c/r-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,c,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":a*c/r-a+"ms"}})}}},4464:(M,f,d)=>{d.r(f),d.d(f,{createSwipeBackGesture:()=>r});var u=d(5730),g=d(5062),a=d(3488);d(4349);const r=(o,t,e,s,i)=>{const h=o.ownerDocument.defaultView,l=(0,g.i)(o),p=n=>l?-n.deltaX:n.deltaX;return(0,a.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:n=>(n=>{const{startX:C}=n;return l?C>=h.innerWidth-50:C<=50})(n)&&t(),onStart:e,onMove:n=>{const C=p(n)/h.innerWidth;s(C)},onEnd:n=>{const y=p(n),C=h.innerWidth,D=y/C,x=(n=>l?-n.velocityX:n.velocityX)(n),L=x>=0&&(x>.2||y>C/2),b=(L?1-D:D)*C;let k=0;if(b>5){const B=b/Math.abs(x);k=Math.min(B,540)}i(L,D<=0?.01:(0,u.l)(0,D,.9999),k)}})}},4435:(M,f,d)=>{d.d(f,{H:()=>u});const u={name:"Sample Game",description:"This is a sample game",location:[39.25141,-76.831531],zoom:18,points:[{name:"start",title:"home",visible:!0,location:[39.25141,-76.831531],body:{type:"shortanswer",title:"Who?",text:"Who won the rabbit turtle race?",possibleAnswers:["turtle","a turtle"],messageIfIncorrect:"hint: look around. I am made out of concerete",afterExplored:"you found me!",enables:["point2"]}},{name:"point2",title:"corner",visible:!1,location:[39.252706,-76.831282],body:{type:"multiplechoice",title:"everyday",text:"do you like pumpkin?",choices:["yes","no"],possibleAnswers:["yes"],afterExplored:"awesome!",enables:["point3"]}},{name:"point3",title:"place",visible:!1,location:[39.251625,-76.831885],body:{type:"shortanswer",title:"last question",text:"what is my name?",possibleAnswers:["mehmet"],messageIfCorrect:"You completed the game",afterExplored:"You completed the game"}},{name:"point4-a",title:"place",visible:!1,location:[39.251625,-76.831885],body:{title:"last question",text:"what is my name?",afterExplored:"You completed the game",enables:["point3*"]}}]}},9258:(M,f,d)=>{d.d(f,{y:()=>g});var u=d(2096);let g=(()=>{class a{constructor(){}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},2780:(M,f,d)=>{d.d(f,{a:()=>c});var u=d(591),g=d(2198),a=d(2096);let c=(()=>{class r{constructor(){this.watchCoordinates$=new u.X(null),this.locationOptions={enableHighAccuracy:!0}}isSupported(){return!!navigator.geolocation}getLocation(){return new Promise((t,e)=>{this.isSupported()?navigator.geolocation.getCurrentPosition(s=>{this.cache=s,t(s)},s=>(console.log(s),e(s)),this.locationOptions):e("Not supported")})}watchLocation(){return!1===this.isSupported()&&setTimeout(()=>{this.watchCoordinates$.error("not supported")}),navigator.geolocation.watchPosition(t=>{this.watchCoordinates$.next(t)},t=>{this.watchCoordinates$.error(t)},this.locationOptions),this.cache&&this.watchCoordinates$.next(this.cache),this.watchCoordinates$.pipe((0,g.h)(t=>!!t))}calculateDistance(t,e){return this.distance(t.coords.latitude,e.coords.latitude,t.coords.longitude,e.coords.longitude)}distance(t,e,s,i){s=s*Math.PI/180,i=i*Math.PI/180,t=t*Math.PI/180,e=e*Math.PI/180;const h=i-s,w=Math.pow(Math.sin((e-t)/2),2)+Math.cos(t)*Math.cos(e)*Math.pow(Math.sin(h/2),2);return 2*Math.asin(Math.sqrt(w))*3956*5280}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);