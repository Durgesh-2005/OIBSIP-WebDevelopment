const CACHE_NAME = 'todo-list-app-cache';
const urlsToCache = [
  './idex.html',
  './idex.css',
  './idex.js',
  './todo-list.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
