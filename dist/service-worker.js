if(!self.define){let e,t={};const i=(i,s)=>(i=new URL(i+".js",s).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const c=e=>i(e,o),d={module:{uri:o},exports:r,require:c};t[o]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"fe7fd1dfcc81f116200a9f44bb72e9ed"},{url:"main.js",revision:"aa351353744a9ec4ed9da2e45fb7064e"}],{})}));