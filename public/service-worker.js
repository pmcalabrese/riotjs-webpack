"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["39016209abf40e5a51e2.0.chunk.js","2a827475a978cd9882a960066bda3144"],["46b53a75b4a7bfc62869.2.chunk.js","b4d0d7e4e1e26f6f08220c1e0d28f01d"],["app.bundle.js","ba5c2189f5c2e6269d881a53a4421e70"],["assets/WR.png","659d1142271deb9c250f763d50a0cf13"],["assets/WR192.png","659d1142271deb9c250f763d50a0cf13"],["assets/WR48.png","442df5507922d0ad974644340692fe66"],["assets/WR512.png","4ffdb01894366ccb436f1290c6005c3a"],["assets/WR96.png","d8a3a20efc4f19139bc1c40e33bc3927"],["e7e2b74f73655832b8b5.1.chunk.js","e1537d95b9dbf79294fd783eb4d4f428"],["f4328dca89781f844905.3.chunk.js","6d227818a04facec6c503ae834ae56e2"],["index.html","5f247b5f9f58b5be36c5cd55a2d3120f"],["manifest.json","377a83c84d45f73208c0fafff1f0b96b"],["styles.781f1c7d6f9e0869a3a7eedbacff5720.css","781f1c7d6f9e0869a3a7eedbacff5720"],["styles.bundle.js","6601ecf8d0b6671b164aa1ab7a9e1c91"]],cacheName="sw-precache-v3-riotjs-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));var r="https://pmcalabrese.github.io/riotjs-webpack/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});