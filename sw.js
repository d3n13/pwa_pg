if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const a=e=>t(e,c),r={module:{uri:c},exports:o,require:a};s[c]=Promise.all(n.map((e=>r[e]||a(e)))).then((e=>(i(...e),o)))}}define(["./workbox-f60cae84"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BymNFHdA.js",revision:null},{url:"assets/index-CYz4t-uR.css",revision:null},{url:"index.html",revision:"b18054d1962a53fe6922c44086b516be"},{url:"registerSW.js",revision:"9397c5ecc1cb9586bdcc379a7e64af34"},{url:"assets/icons/logo.svg",revision:"9cfcdf628fc74caa6139b3eaf39a7a36"},{url:"manifest.webmanifest",revision:"d649701c83eec0499ffaaa1139afeb14"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{allowlist:[/./],denylist:[/\./,/^\/api/]})),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({request:e})=>"GET"===e.method.toUpperCase()),new e.StaleWhileRevalidate({cacheName:"GetRequests",plugins:[new e.ExpirationPlugin({maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
