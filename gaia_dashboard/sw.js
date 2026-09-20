const CACHE_NAME = 'agrisense-v3';
const ASSETS_TO_CACHE = [
    './',
    'index.html',
    'fournisseurs.html',
    'analyse_financiere.html',
    'plan_parfait_arganier.html',
    'styles/moroccan-theme.css',
    'scripts/crop_manager.js',
    'data/crop_config.js',
    'data/zoning_simulation.js',
    'data/plan_arganier_data.js',
    'data/today_planning_data.js',
    '../lang-data.js',
    '../lang-system.js',
    '../images/imagefav.png',
    '../images/moroccan_zellige.png'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS_TO_CACHE))
            .catch(err => console.error('Cache addAll failed:', err))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).then(response => {
            if (response && response.status === 200 && response.type === 'basic') {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });
            }
            return response;
        }).catch(() => caches.match(event.request))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => cacheName !== CACHE_NAME)
                    .map(cacheName => caches.delete(cacheName))
            );
        }).then(() => self.clients.claim())
    );
});
