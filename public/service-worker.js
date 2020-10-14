const CACHE_NAME = 'version-1';

const urlToCache = [
    './index.html'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlToCache);
        })
        .catch(e => console.error(e))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
           return fetch(event.request);
        })
        .catch(e => {
            console.error(e);
        })
    )
});

self.addEventListener('activate', (event) => {
    const existingCache = [CACHE_NAME];
    console.log('activating')
    event.waitUntil(
        caches.keys()
        .then(cacheNames => {
            Promise.all(cacheNames.map(name => {
                if(!existingCache.includes(name)) {
                    caches.delete(name);
                }
            }))
        })
    )
});
