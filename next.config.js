/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const prodPath = '/Xcelerator/CDLPRP'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? prodPath : '/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'akamai',
    path: isProd ? prodPath : '/',
  },
  env: {
    linksPath: isProd ? prodPath : '',
  }
}

module.exports = nextConfig
