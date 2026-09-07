import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";var n=t({showToast:()=>b}),r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r={containerId:`rs-toast-layer`,position:`bottom`,maxToasts:5,zIndex:2147483647},i=3e3,a=200,o=400,s=``,c=0,l=e=>`${e.kind||`info`}\0${e.position||r.position}\0${e.message}`,u=/%[0-9A-Fa-f]{2}/,d=/(?:%[0-9A-Fa-f]{2})+/g,f=e=>{try{return decodeURIComponent(e)}catch{try{return decodeURI(e)}catch{return e}}},p=e=>{let t=String(e??``);if(!t||!u.test(t))return t;for(let e=0;e<3;e++){let e;try{e=decodeURIComponent(t)}catch{try{e=decodeURI(t)}catch{e=t.replace(d,f)}}if(e===t||(t=e,!u.test(t)))break}return t},m=(e,t,n)=>{for(let r of Array.from(e?.children??[]))if(r instanceof HTMLElement&&r.classList.contains(`rs-toast`)&&r.getAttribute(`data-kind`)===n&&r.textContent===t)return!0;return!1},h=`
:host {
    all: initial !important;
    position: fixed !important;
    inset: 0 !important;
    display: block !important;
    pointer-events: none !important;
    z-index: var(--shell-toast-z, 2147483647) !important;
    overflow: visible !important;
}

.rs-toast-layer {
    position: fixed;
    z-index: 1;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 20px;
    gap: 8px;
    max-block-size: 80dvh;
    max-block-size: 80dvb;
    overflow: hidden;
    box-sizing: border-box;
    margin: 0;
    border: none;
    background: transparent;
}

.rs-toast-layer[data-position="bottom"],
.rs-toast-layer:not([data-position]) {
    inset-block-end: 24px;
    inset-block-start: auto;
    inset-inline: 0;
    justify-content: flex-end;
}

.rs-toast-layer[data-position="top"] {
    inset-block-start: 24px;
    inset-block-end: auto;
    inset-inline: 0;
    justify-content: flex-start;
}

.rs-toast-layer[data-position="top-left"] {
    inset-block-start: 24px;
    inset-inline-start: 16px;
    inset-inline-end: auto;
    align-items: flex-start;
}

.rs-toast-layer[data-position="top-right"] {
    inset-block-start: 24px;
    inset-inline-end: 16px;
    inset-inline-start: auto;
    align-items: flex-end;
}

.rs-toast-layer[data-position="bottom-left"] {
    inset-block-end: 24px;
    inset-inline-start: 16px;
    inset-inline-end: auto;
    align-items: flex-start;
}

.rs-toast-layer[data-position="bottom-right"] {
    inset-block-end: 24px;
    inset-inline-end: 16px;
    inset-inline-start: auto;
    align-items: flex-end;
}

.rs-toast {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 14px;
    max-inline-size: min(90vw, 28rem);
    inline-size: fit-content;
    min-block-size: 2.25rem;
    box-sizing: border-box;

    border-radius: 10px;
    border: 1px solid rgba(248, 250, 252, 0.14);
    background-color: #0f172a;
    color: #f8fafc;
    box-shadow: 0 10px 28px rgba(2, 6, 23, 0.45);

    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.01em;
    line-height: 1.4;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    word-break: break-word;
    text-align: center;

    pointer-events: auto;
    user-select: none;
    -webkit-user-select: none;
    cursor: default;

    opacity: 0;
    transform: translateY(12px) scale(0.96);
    transition:
        opacity 180ms ease-out,
        transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
}

.rs-toast[data-visible] {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.rs-toast:active {
    transform: scale(0.98);
}

.rs-toast[data-kind="info"] {
    background-color: #0f172a;
    color: #f8fafc;
    border-color: rgba(148, 163, 184, 0.35);
}

.rs-toast[data-kind="success"] {
    background-color: #166534;
    color: #f0fdf4;
    border-color: rgba(187, 247, 208, 0.35);
}

.rs-toast[data-kind="warning"] {
    background-color: #b45309;
    color: #fffbeb;
    border-color: rgba(253, 230, 138, 0.4);
}

.rs-toast[data-kind="error"] {
    background-color: #b91c1c;
    color: #fef2f2;
    border-color: rgba(254, 202, 202, 0.4);
}

@media (prefers-reduced-motion: reduce) {
    .rs-toast,
    .rs-toast[data-visible] {
        transition-duration: 0ms;
        transform: none;
    }
}

@media print {
    :host,
    .rs-toast-layer,
    .rs-toast {
        display: none !important;
    }
}
`,g=new Map,_=new Map,v=(e,t=document)=>{let n=`${e.containerId}-${e.position}`,r=g.get(n),i=_.get(n);if(r?.isConnected&&i?.isConnected)return r.setAttribute(`data-position`,e.position),i.style.setProperty(`--shell-toast-z`,String(e.zIndex)),{host:i,layer:r};g.delete(n),_.delete(n);let a=t.getElementById(e.containerId);a||(a=t.createElement(`div`),a.id=e.containerId,a.setAttribute(`data-cwsp-toast-host`,``),a.style.cssText=[`all: initial`,`position: fixed`,`inset: 0`,`display: block`,`pointer-events: none`,`z-index: ${e.zIndex}`,`overflow: visible`,`margin: 0`,`padding: 0`,`border: none`,`background: transparent`].join(`;`),(t.body||t.documentElement).appendChild(a)),a.style.setProperty(`--shell-toast-z`,String(e.zIndex));let o=a.shadowRoot;o||=a.attachShadow({mode:`open`});let s=o.querySelector(`style[data-rs-toast]`);s?s.textContent=h:(s=t.createElement(`style`),s.setAttribute(`data-rs-toast`,``),s.textContent=h,o.insertBefore(s,o.firstChild));let c=o.querySelector(`.rs-toast-layer`);return c||(c=t.createElement(`div`),c.className=`rs-toast-layer`,c.setAttribute(`aria-live`,`polite`),c.setAttribute(`aria-atomic`,`true`),o.appendChild(c)),c.setAttribute(`data-position`,e.position),g.set(n,c),_.set(n,a),{host:a,layer:c}},y=e=>{try{let t=new BroadcastChannel(`rs-toast`);t.postMessage({type:`show-toast`,options:e}),t.close()}catch(e){console.warn(`[Toast] Broadcast failed:`,e)}},b=e=>{let t=typeof e==`string`?{message:e}:e,n={...t,message:p(t.message)},{message:u,kind:d=`info`,duration:f=i,persistent:h=!1,position:_=r.position,onClick:b}=n;if(!u)return null;let x=l(n),S=Date.now();if(x===s&&S-c<o)return null;if(typeof document>`u`)return s=x,c=S,y(n),null;let C={...r,position:_},{layer:w}=v(C);if(m(w,u,d))return s=x,c=S,null;for(s=x,c=S;w.children.length>=C.maxToasts;)w.firstChild?.remove();let T=document.createElement(`div`);T.className=`rs-toast`,T.setAttribute(`data-kind`,d),T.setAttribute(`role`,d===`error`||d===`warning`?`alert`:`status`),T.setAttribute(`aria-live`,d===`error`?`assertive`:`polite`),T.textContent=u,w.appendChild(T),globalThis?.requestAnimationFrame?.(()=>{T.setAttribute(`data-visible`,``)});let E=null,D=()=>{E!==null&&(globalThis.clearTimeout(E),E=null),T.removeAttribute(`data-visible`),globalThis?.setTimeout?.(()=>{if(T.remove(),!w.childElementCount){let e=`${C.containerId}-${C.position}`;g.delete(e)}},a)};return h||(E=globalThis?.setTimeout?.(D,f)),T.addEventListener(`click`,()=>{b?.(),D()}),T.addEventListener(`pointerdown`,()=>{E!==null&&(globalThis.clearTimeout(E),E=null),D()},{once:!0}),T},x=()=>{if(typeof BroadcastChannel>`u`)return()=>{};let e=new BroadcastChannel(`rs-toast`),t=e=>{e.data?.type===`show-toast`&&e.data?.options&&b(e.data.options)};return e.addEventListener(`message`,t),()=>{e.removeEventListener(`message`,t),e.close()}},S=()=>x()})))()}export{n as a,b as i,S as n,C as r,p as t};