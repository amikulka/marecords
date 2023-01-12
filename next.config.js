/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'coverartarchive.org',
        port: '',
        pathname: '/release/**',
      },
    ],
  },
}

module.exports = nextConfig
