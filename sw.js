importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/137ee4d530ca6a59cc6c.js",
    "revision": "84a0b0f0f156f4887f0394fcd7049770"
  },
  {
    "url": "/_nuxt/487320d1215eaa123fae.js",
    "revision": "8217fb39e767f8e3ef501184b555de2b"
  },
  {
    "url": "/_nuxt/49e9ffeb3e2098b9bb86.js",
    "revision": "cbf92206920e880befeaba5a2c9688b7"
  },
  {
    "url": "/_nuxt/97fc374bd3bd6b7c8a74.js",
    "revision": "06971301780b48d32832df915418c74d"
  },
  {
    "url": "/_nuxt/bd607427522869f94cfa.js",
    "revision": "d9d4d88c9fb8b328fe28f06a87b50539"
  },
  {
    "url": "/_nuxt/bda32dd4c97abeacfc19.js",
    "revision": "4e44254f19f01c85dc584f2fefd10593"
  },
  {
    "url": "/_nuxt/bf2b20669ba411f89a4b.js",
    "revision": "423a4f8147e9c500f5e974df2f4737a7"
  },
  {
    "url": "/_nuxt/e58494a4664f2b719860.js",
    "revision": "fe3a3d53883149fcf432e66d12c5187a"
  },
  {
    "url": "/_nuxt/ec33b7da458e3a700047.js",
    "revision": "89fd831e0f0fc2ddf603c3eb498bca01"
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
