/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const prod = process.env.NODE_ENV === 'production'
const isExport = process.env.NEXT_EXPORT === 'true' 

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  output: isExport ? "export" : undefined, // only set output when exporting
  pwa: {
    dest: "public",
    disable: !prod || isExport, // disable PWA for static export
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
  },
}

module.exports = withPWA(nextConfig)