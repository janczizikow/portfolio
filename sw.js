var CACHE_NAME = 'v08';
var urlsToCache = [
	'/',
	'/assets/css/main.css',
	'/assets/js/jquery-3.1.1.min.js',
	'/assets/js/plugins.js',
	'/assets/js/scripts.js',
	'manifest.json',
	'/assets/fonts/brown/brown-light-webfont.woff2',
	'/assets/fonts/brown/brown-regular-webfont.woff2'
];
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache){
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('activate',function(event) {
	var cacheWhitelist = ['v08'];

	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheNames) {
					if (cacheWhitelist.indexOf(cacheNames) === -1) {
						return caches.delete(cacheNames);
					}
				})
			);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			if (response) {
				return response;
			}
			var fetchRequest = event.request.clone();

			return fetch(fetchRequest).then(
				function(response) {
					if(!response || response.status !==200 || response.type !== 'basic') {
						return response;
					}

					var responseToCache = response.clone();

					caches.open(CACHE_NAME)
					.then(function(cache) {
						cache.put(event.request, responseToCache);
					});

					return response;
				}
			);
		})
	)
});
