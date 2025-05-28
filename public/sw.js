
const CACHE_NAME = 'dqaa-v1';
const STATIC_CACHE = 'dqaa-static-v1';
const DYNAMIC_CACHE = 'dqaa-dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/about',
  '/admissions',
  '/contact',
  '/manifest.json',
  '/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (!request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached version
          return cachedResponse;
        }

        // Fetch from network
        return fetch(request)
          .then((networkResponse) => {
            // Check if we received a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // Clone the response
            const responseClone = networkResponse.clone();

            // Cache the response
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseClone);
              });

            return networkResponse;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.destination === 'document') {
              return caches.match('/');
            }
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Background sync triggered');
    event.waitUntil(
      // Handle any pending form submissions
      handleBackgroundSync()
    );
  }
});

async function handleBackgroundSync() {
  // Implementation for handling offline form submissions
  console.log('Handling background sync...');
}

// Push notification handler
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update from DQAA',
    icon: '/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png',
    badge: '/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('DQAA Update', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
