importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ce248ed651cdc7a98ea.js",
    "revision": "57ba7606f6a47281339ca733cca3a4c3"
  },
  {
    "url": "/_nuxt/124d54e86f4063a9388a.js",
    "revision": "bbe1e2cb4e3675aff08e095413e3c3d6"
  },
  {
    "url": "/_nuxt/27ca79bbeb96f22fff82.css",
    "revision": "ca46a14c807598d1b6e3f17232978a81"
  },
  {
    "url": "/_nuxt/9050a4e605850e87ab8a.css",
    "revision": "6c1fb0ffa13a9690e3f558b6a5ef2454"
  },
  {
    "url": "/_nuxt/9a770d41e40f8592830e.js",
    "revision": "8505a3693d33bad8559acdcaacaf4f58"
  },
  {
    "url": "/_nuxt/bbca70b9fa917c4b2bea.js",
    "revision": "43d867d03e445045975715511275e47f"
  },
  {
    "url": "/_nuxt/c8057fdda9957ed725e9.js",
    "revision": "f9f6b08044209531caddc15d736cdec9"
  },
  {
    "url": "/_nuxt/cc1ba5ca07864d1eb182.js",
    "revision": "a8f7e5886b79707b7d92d17aa6c068e1"
  },
  {
    "url": "/_nuxt/d5da9db9be74f57463c5.js",
    "revision": "1e30ecb76ae1afefb6da0769b1cc7da5"
  },
  {
    "url": "/_nuxt/e4eddec5ee2d6871e239.css",
    "revision": "ef746172d1b4bf52f06481199bfe7501"
  },
  {
    "url": "/_nuxt/e5e9786b6a89fb820bfd.css",
    "revision": "685c3905e259ea3ea48f20bab6d1efc4"
  }
], {
  "cacheId": "fred-jacobs.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
