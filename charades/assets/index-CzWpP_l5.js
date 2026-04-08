(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){if(typeof e==`string`)return e.trim();if(e&&typeof e==`object`&&`text`in e){let t=e.text;if(typeof t==`string`)return t.trim()}throw Error(`Invalid word entry: ${JSON.stringify(e)}`)}function t(){let e=`/charades/`;return`${e.endsWith(`/`)?e:`${e}/`}assets/words/`}function n(e){return e.replace(/\.json$/i,``)||`deck`}async function r(){let r=t(),i=`${r}manifest.json`,a=await fetch(i);if(!a.ok)throw Error(`Failed to load manifest (${a.status}): ${i}`);let o=(await a.json()).decks?.[0];if(!o?.file||!o?.name)throw Error(`Manifest must include at least one deck with "name" and "file"`);let s=`${r}${o.file}`,c=await fetch(s);if(!c.ok)throw Error(`Failed to load deck (${c.status}): ${s}`);let l=(await c.json()).words;if(!Array.isArray(l)||l.length===0)throw Error(`Deck must include a non-empty "words" array: ${s}`);let u=l.map(e).filter(e=>e.length>0);if(u.length===0)throw Error(`No valid words after normalization: ${s}`);return{displayName:o.name,id:n(o.file),words:u}}function i(e,t,n){return{deckDisplayName:e,deckId:t,durationSec:n,events:[]}}function a(e){let t=0,n=0;for(let r of e.events)r.outcome===`correct`?t+=1:n+=1;return{correct:t,passed:n}}var o=.88,s=128,c=120,l=52,u=62,d=100;function f(e,t,n){let r=0,i=null,a=!0,f=!0,p=null,m=null,h=h=>{if(!n.isActive())return;let g=h.beta;if(g==null||Number.isNaN(g))return;let _=performance.now();if(i=i===null?g:i*o+g*(1-o),i<c&&(a=!0),i>u&&(f=!0),_-r<n.cooldownMs){p=null,m=null;return}let v=n=>{r=_,p=null,m=null,n===`correct`?(a=!1,e()):(f=!1,t())};if(!(i>s&&a))p=null;else if(p===null)p=_;else if(_-p>=d){v(`correct`);return}i<l&&f?m===null?m=_:_-m>=d&&v(`pass`):m=null};return window.addEventListener(`deviceorientation`,h,!0),()=>window.removeEventListener(`deviceorientation`,h,!0)}async function p(){let e=DeviceOrientationEvent;if(typeof e.requestPermission==`function`)try{return await e.requestPermission()===`granted`}catch{return!1}return!0}var m=null;function h(){return m||=new AudioContext,m}async function g(){let e=h();e.state===`suspended`&&await e.resume()}function _(){let e=h(),t=e.currentTime,n=e.createGain();n.gain.setValueAtTime(.12,t),n.connect(e.destination);let r=[523.25,659.25,783.99];for(let i=0;i<r.length;i++){let a=e.createOscillator(),o=e.createGain();a.type=`sine`,a.frequency.setValueAtTime(r[i],t),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.35,t+.02+i*.04),o.gain.exponentialRampToValueAtTime(1e-4,t+.35+i*.05),a.connect(o),o.connect(n),a.start(t+i*.04),a.stop(t+.45)}}function v(){let e=h(),t=e.currentTime,n=e.createGain();n.gain.setValueAtTime(.085,t),n.connect(e.destination);let r=e.createOscillator(),i=e.createGain();r.type=`triangle`,r.frequency.setValueAtTime(380,t),r.frequency.exponentialRampToValueAtTime(220,t+.1),i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.45,t+.015),i.gain.exponentialRampToValueAtTime(1e-4,t+.14),r.connect(i),i.connect(n),r.start(t),r.stop(t+.16)}function y(){let e=h(),t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`sine`,n.frequency.setValueAtTime(880,t),r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.06,t+.01),r.gain.exponentialRampToValueAtTime(1e-4,t+.12),n.connect(r),r.connect(e.destination),n.start(t),n.stop(t+.15)}var b=`charades-duration-sec`,x=550,S=30,C=300;function w(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}function T(){let e=sessionStorage.getItem(b),t=e?Number(e):NaN;return Number.isFinite(t)&&t>=S&&t<=C?Math.round(t):90}function E(e){let t=Math.max(0,Math.ceil(e));return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,`0`)}`}var D=class{root;phase=`loading`;errorMessage=``;deck=null;durationSec=T();session=null;playWords=[];playIndex=0;playDurationMs=0;playStartedAt=0;lastTimerCeilSec=null;tiltCleanup=null;raf=0;tiltDenied=!1;reducedMotion=!1;wordEl=null;timeEl=null;lastAdvanceAt=0;lastSubmittedPlayIndex=null;constructor(e){this.root=e,this.reducedMotion=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches}async boot(){try{this.deck=await r(),this.phase=`setup`}catch(e){this.phase=`error`,this.errorMessage=e instanceof Error?e.message:String(e)}this.render()}persistDuration(){sessionStorage.setItem(b,String(this.durationSec))}render(){switch(this.phase){case`loading`:this.renderLoading();break;case`error`:this.renderError();break;case`setup`:this.renderSetup();break;case`play`:this.mountPlay();break;case`ended`:this.renderEnded();break}}renderLoading(){this.root.innerHTML=`
      <main class="shell">
        <h1 class="title">Charades</h1>
        <p class="status">Loading word deck…</p>
      </main>`}renderError(){this.root.innerHTML=`
      <main class="shell">
        <h1 class="title">Charades</h1>
        <p class="status proof--error" role="alert">${O(this.errorMessage)}</p>
      </main>`}renderSetup(){let e=this.deck;if(!e){this.renderError();return}let t=[60,90,120].map(e=>`<button type="button" class="chip${this.durationSec===e?` chip--on`:``}" data-duration="${e}">${e}s</button>`).join(``);this.root.innerHTML=`
      <main class="shell setup">
        <h1 class="title">Charades</h1>
        <p class="deck-label"><span class="muted">Deck</span> ${O(e.displayName)}</p>
        <p class="muted small">${e.words.length} words</p>
        <fieldset class="duration-field">
          <legend class="duration-legend">Round length</legend>
          <div class="chip-row" role="group" aria-label="Presets">${t}</div>
          <label class="duration-custom">
            <span class="sr-only">Seconds</span>
            <input type="number" min="${S}" max="${C}" step="5" value="${this.durationSec}" class="duration-input" aria-label="Round length in seconds" />
            <span class="muted">seconds</span>
          </label>
        </fieldset>
        <button type="button" class="btn btn-primary" id="btn-start">Start round</button>
      </main>`;let n=this.root.querySelector(`.chip-row`);n?.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-duration]`);if(!t)return;let r=Number(t.getAttribute(`data-duration`));if(!Number.isFinite(r))return;this.durationSec=r,this.persistDuration();let i=this.root.querySelector(`.duration-input`);i&&(i.value=String(r)),n.querySelectorAll(`.chip`).forEach(e=>{e.classList.toggle(`chip--on`,e===t)})});let r=this.root.querySelector(`.duration-input`);r?.addEventListener(`change`,()=>{let e=Math.round(Number(r.value));Number.isFinite(e)||(e=90),e=Math.min(C,Math.max(S,e)),this.durationSec=e,r.value=String(e),this.persistDuration(),n?.querySelectorAll(`.chip`).forEach(e=>{let t=Number(e.dataset.duration);e.classList.toggle(`chip--on`,t===this.durationSec)})}),this.root.querySelector(`#btn-start`)?.addEventListener(`click`,()=>{this.startRound()})}async startRound(){let e=this.deck;e&&(await g(),this.tiltDenied=!await p(),this.session=i(e.displayName,e.id,this.durationSec),this.playWords=w([...e.words]),this.playIndex=0,this.playDurationMs=this.durationSec*1e3,this.playStartedAt=performance.now(),this.lastTimerCeilSec=null,this.lastAdvanceAt=0,this.lastSubmittedPlayIndex=null,this.phase=`play`,this.stopPlayLoop(),this.tiltCleanup?.(),this.tiltCleanup=null,this.render())}mountPlay(){let e=this.deck,t=this.session;if(!e||!t)return;let n=this.tiltDenied?`<p class="play-banner" role="status">Motion permission not granted — use the buttons below.</p>`:`<p class="play-hint muted small">Tilt forward = correct · back = pass · or use buttons</p>`;this.root.innerHTML=`
      <div class="play">
        <header class="play-head">
          ${n}
          <div class="play-meta">
            <span class="muted small">${O(e.displayName)}</span>
            <span class="timer" id="play-timer" aria-live="polite">${E(this.durationSec)}</span>
          </div>
        </header>
        <div class="play-word" id="play-word" aria-live="assertive"></div>
        <div class="play-actions">
          <button type="button" class="btn btn-correct" id="btn-correct">Correct</button>
          <button type="button" class="btn btn-pass" id="btn-pass">Pass</button>
        </div>
      </div>`,this.wordEl=this.root.querySelector(`#play-word`),this.timeEl=this.root.querySelector(`#play-timer`),this.updateWordDisplay();let r=()=>this.advanceWord(`correct`),i=()=>this.advanceWord(`pass`);this.root.querySelector(`#btn-correct`)?.addEventListener(`click`,r),this.root.querySelector(`#btn-pass`)?.addEventListener(`click`,i),this.tiltCleanup=f(r,i,{cooldownMs:x,isActive:()=>this.phase===`play`});let a=()=>{if(this.phase!==`play`)return;let e=performance.now()-this.playStartedAt,t=this.playDurationMs-e;if(t<=0){this.endRound();return}this.timeEl&&(this.timeEl.textContent=E(t/1e3));let n=Math.max(0,Math.ceil(t/1e3));if(this.lastTimerCeilSec!==n){let e=this.lastTimerCeilSec;this.lastTimerCeilSec=n,e!==null&&n>=1&&n<=10&&t>0&&(this.reducedMotion?n===10&&y():y())}this.raf=requestAnimationFrame(a)};this.raf=requestAnimationFrame(a)}updateWordDisplay(){if(!this.wordEl)return;let e=this.playWords[this.playIndex];this.wordEl.textContent=e??``}advanceWord(e){if(this.phase!==`play`||!this.session)return;let t=performance.now();if(t-this.lastAdvanceAt<x)return;let n=this.playWords[this.playIndex];n&&(this.lastAdvanceAt=t,this.session.events.push({word:n,outcome:e}),this.lastSubmittedPlayIndex=this.playIndex,e===`correct`?_():v(),this.playIndex+=1,this.playIndex>=this.playWords.length&&this.deck&&(this.playWords=w([...this.deck.words]),this.playIndex=0,this.lastSubmittedPlayIndex=null),this.updateWordDisplay())}stopPlayLoop(){this.raf&&=(cancelAnimationFrame(this.raf),0)}endRound(){if(this.phase!==`play`)return;this.stopPlayLoop(),this.tiltCleanup?.(),this.tiltCleanup=null;let e=this.session,t=this.playWords[this.playIndex];e&&t!==void 0&&this.playIndex!==this.lastSubmittedPlayIndex&&e.events.push({word:t,outcome:`pass`}),this.phase=`ended`,this.wordEl=null,this.timeEl=null,this.render()}renderEnded(){let e=this.session;if(!e){this.root.innerHTML=`
        <main class="shell ended">
          <h1 class="title">Round over</h1>
          <p class="status">No round data.</p>
          <button type="button" class="btn btn-primary" id="btn-again">Back</button>
        </main>`,this.root.querySelector(`#btn-again`)?.addEventListener(`click`,()=>{this.phase=`setup`,this.render()});return}let{correct:t,passed:n}=a(e),r=`${O(e.deckDisplayName)} · ${e.durationSec}s round`,i=e.events.map(e=>{let t=e.outcome===`correct`,n=t?`✓`:`✗`,r=t?`correct`:`passed`;return`<li class="result-row" aria-label="${O(`${e.word}, ${r}`)}">
          <span class="result-mark result-mark--${t?`ok`:`no`}" aria-hidden="true">${n}</span>
          <span class="result-word">${O(e.word)}</span>
          <span class="result-fallback-label">${r}</span>
        </li>`}).join(``),o=e.events.length===0?`<p class="results-empty muted">No words recorded this round.</p>`:`<ol class="results-list" start="1">${i}</ol>`;this.root.innerHTML=`
      <div class="results">
        <header class="results-head">
          <h1 class="title results-title">Results</h1>
          <p class="results-meta muted small">${r}</p>
          <div class="results-summary" role="group" aria-label="Round totals">
            <div class="results-stat results-stat--correct">
              <span class="results-stat-value" aria-label="${t} correct">${t}</span>
              <span class="results-stat-label">Correct</span>
            </div>
            <div class="results-stat results-stat--pass">
              <span class="results-stat-value" aria-label="${n} passed">${n}</span>
              <span class="results-stat-label">Passed</span>
            </div>
          </div>
        </header>
        <section class="results-list-wrap" aria-labelledby="results-words-heading">
          <h2 class="results-list-heading" id="results-words-heading">Words</h2>
          ${o}
        </section>
        <footer class="results-foot">
          <button type="button" class="btn btn-primary" id="btn-again">Play again</button>
        </footer>
      </div>`,this.root.querySelector(`#btn-again`)?.addEventListener(`click`,()=>{this.session=null,this.phase=`setup`,this.render()})}};function O(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var k=document.querySelector(`#app`);if(!k)throw Error(`#app missing`);new D(k).boot();