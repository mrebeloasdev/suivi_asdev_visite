/* Service worker — Trajets ASDEV (PWA installable, hors-ligne) */
const CACHE = "trajets-v4";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./logo-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
  "./favicon-64.png",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(APP_SHELL.map(u => c.add(u)))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname.endsWith("tile.openstreetmap.org")) {
    e.respondWith(caches.open(CACHE).then(async c => {
      const cached = await c.match(req);
      const network = fetch(req).then(res => { if (res && (res.ok || res.type === "opaque")) c.put(req, res.clone()); return res; }).catch(() => cached);
      return cached || network;
    }));
    return;
  }
  if (url.hostname.includes("nominatim")) return;
  if (url.hostname.includes("project-osrm.org")) return;
  e.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => {
    if (res && res.ok && (url.origin === self.location.origin || APP_SHELL.includes(req.url))) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => cached)));
});
