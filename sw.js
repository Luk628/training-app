// Cache only static assets; always prefer the latest online version.
// User workout data lives in localStorage and is never touched here.
const CACHE = 'training-app-static-v20261012-1';
const STATIC = ['./index.html', './data.js', './manifest.webmanifest', './icon.png'];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(STATIC.map(async path => {
      try {
        const request = new Request(path, {cache: 'reload'});
        const response = await fetch(request);
        if (response.ok) await cache.put(path, response);
      } catch (_) { /* Offline installation can still proceed. */ }
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key =>
      key !== CACHE && (key.startsWith('training-') || key.startsWith('training-app-'))
    ).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    try {
      const response = await fetch(request, {cache: 'no-store'});
      if (response.ok) {
        const cache = await caches.open(CACHE);
        await cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      const cached = await caches.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        const fallback = await caches.match('./index.html');
        if (fallback) return fallback;
      }
      throw error;
    }
  })());
});
