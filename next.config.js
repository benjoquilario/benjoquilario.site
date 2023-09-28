const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
}

module.exports = withContentlayer(nextConfig)
