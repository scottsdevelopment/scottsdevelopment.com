/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://scottsdevelopment.com' : '',
  basePath: '',
  distDir: 'out'
}

module.exports = nextConfig
