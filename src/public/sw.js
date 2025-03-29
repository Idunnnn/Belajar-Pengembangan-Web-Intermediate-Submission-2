self.addEventListener('install', (event) => {
    console.log('Service Worker Installed');
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker Activated');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
    console.log('Service worker pushing...');

    const { title, options } = event.data.json();

    console.log(title, options);

    async function chainPromise() {
        await self.registration.showNotification(title, {
            body: options.body,
        });
    }

    event.waitUntil(chainPromise());
});
