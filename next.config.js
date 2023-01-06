/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iconfitness-res.cloudinary.com',
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
}

module.exports = nextConfig
