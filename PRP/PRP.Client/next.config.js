/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const prodPath = '/Xcelerator/CDLPRPClient'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? prodPath : './',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'akamai',
    path: isProd ? prodPath : './',
  },
  basePath: isProd ? prodPath : '',
}

module.exports = nextConfig
