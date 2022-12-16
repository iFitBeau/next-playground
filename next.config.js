/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iconfitness-res.cloudinary.com',
      }
    ]
  }
}

module.exports = nextConfig
