/* AIIMS Patna Sarthi - service worker (offline support) */
const CACHE = "sarthi-v17";
const CORE = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(CORE.map(function (u) {
        return fetch(new Request(u, { cache: 'reload' })).then(function (r) { return c.put(u, r); }).catch(function(){});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isHTML(req) {
  try {
    if (req.mode === 'navigate') return true;
    const acc = req.headers.get('accept') || '';
    if (acc.indexOf('text/html') >= 0) return true;
    const u = req.url.split('?')[0];
    return u.endsWith('/') || u.endsWith('index.html');
  } catch (e) { return false; }
}

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET') return;

  /* HTML: network first — so the newest app always loads when there is internet.
     Falls back to the cached copy when offline. */
  if (isHTML(req)) {
    e.respondWith(
      fetch(new Request(req.url, { cache: 'reload' })).then(function (res) {
        const copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put('./index.html', copy); }).catch(function(){});
        return res;
      }).catch(function () {
        return caches.match('./index.html').then(function (h) { return h || caches.match('./'); });
      })
    );
    return;
  }

  /* everything else: cache first, fill the cache as we go */
  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); }).catch(function(){});
        }
        return res;
      }).catch(function () { return caches.match('./index.html'); });
    })
  );
});
