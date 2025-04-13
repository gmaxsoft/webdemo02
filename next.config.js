/** @type {import('next').NextConfig} */
//const withPlugins = require('next-compose-plugins');
//const optimizedImages = require('next-optimized-images');
const path = require('path')

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true
  },
  output: 'export'
}

module.exports = nextConfig
