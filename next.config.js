const { join } = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = withBundleAnalyzer(nextConfig);