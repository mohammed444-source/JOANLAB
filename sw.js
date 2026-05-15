const cacheName = "alnahda-pwa-v1";

const filesToCache = [
"/",
"/index.html",
"/style.css",
"/script.js"
];
self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open('app').then(cache=>{
      return cache.addAll(['/']);
    })
  );
});

self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request).then(res=>res||fetch(e.request))
  );
});

{
  "name": "كلية النهضة الجديدة",
  "short_name": "النهضة",
  "description": "تطبيق كلية النهضة الجديدة للعلوم الطبية والتقنية",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#0a3d62",
  "theme_color": "#0a3d62",
  "icons": [
    {
      "src": "https://i52.servimg.com/u/f52/20/64/69/74/artboa10.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "https://i52.servimg.com/u/f52/20/64/69/74/artboa10.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "lang": "ar",
  "dir": "rtl"
}