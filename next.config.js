/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Production assets are served from the live domain. Set ASSET_PREFIX=""
  // to build a copy that works from a local static server (npm run preview).
  assetPrefix:
    process.env.ASSET_PREFIX !== undefined
      ? process.env.ASSET_PREFIX
      : process.env.NODE_ENV === 'production'
        ? 'https://scottsdevelopment.com'
        : '',
  basePath: '',
  distDir: 'out'
}

module.exports = nextConfig
