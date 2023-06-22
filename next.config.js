/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'default', // Set the default image loader
  },
}

module.exports = nextConfig
