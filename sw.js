importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2d95baefe8bc4873a15b.js",
    "revision": "e8d9a02eb491d5f00e720b21caa88407"
  },
  {
    "url": "/_nuxt/2ece5624ae37e372fada.js",
    "revision": "6d290b64efdb73a00bb36182ee4767c0"
  },
  {
    "url": "/_nuxt/631da91f2d42642341fc.js",
    "revision": "013c770e0a13bb28d9ef76e1e4ce75fd"
  },
  {
    "url": "/_nuxt/884ea40d95eb85de4a95.js",
    "revision": "fdef5bf9a48d501d66760a343ae48790"
  },
  {
    "url": "/_nuxt/eb848af2537c949d7867.js",
    "revision": "5e35f7895543bf44aa756b7cb3daf802"
  },
  {
    "url": "/_nuxt/f91756150cf3920d9904.js",
    "revision": "e97a9852398a048d708a6881acba8b9b"
  },
  {
    "url": "/_nuxt/fb6f73ac812de0d3c6d0.js",
    "revision": "fbac7d7a9820137105d5dc90d5a92a5b"
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
