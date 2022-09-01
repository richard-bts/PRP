/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/Xcelerator/prpclient',
                images: {
                    path: `Xcelerator/prpclient/_next/image`,
                  },
                async rewrites() {
                    return [
                      {
                        source: '/Xcelerator/prpclient/',
                        destination: '/Xcelerator/prpclient/index'           
                      },
                    ]
                  },
}

module.exports = nextConfig
