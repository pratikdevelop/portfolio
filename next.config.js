/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir:'out',
  output:"export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['pics.craiyon.com'],
  },
}

module.exports = nextConfig
