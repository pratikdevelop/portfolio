/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['pics.craiyon.com'],
  },
}

module.exports = nextConfig
