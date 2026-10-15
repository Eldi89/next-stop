// Next Stop service worker: the app and all lessons work offline (subway tunnels).
const VERSION = '1.2.2-202610150447';
const CACHE = 'fermata-' + VERSION;
const CORE = ['/', '/index.html', '/manifest.json', '/icon-180.png', '/icon-192.png', '/icon-512.png', '/fonts/archivo-latin-wdth-normal.woff2', '/fonts/literata-latin-opsz-normal.woff2', '/fonts/literata-latin-opsz-italic.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('fermata-') && k !== CACHE && k !== 'fermata-runtime').map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // live report: network first, last good copy when offline
  if (url.pathname.startsWith('/api/')) {
    e.respondWith(fetch(req).then(r => { if (r.ok) { const cp = r.clone(); caches.open('fermata-runtime').then(c => c.put('/api/news', cp)); } return r; }).catch(() => caches.match('/api/news')));
    return;
  }
  // the app page: network first so updates arrive, cache when offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put('/index.html', cp)); return r; }).catch(() => caches.match('/index.html')));
    return;
  }
  // fonts and static files: cache first, refresh in background
  if (url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => {
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') { const cp = r.clone(); caches.open('fermata-runtime').then(c => c.put(req, cp)); } return r; }).catch(() => hit);
      return hit || net;
    }));
  }
});
