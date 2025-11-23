/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,
  // Add this for better static generation
  images: {
    unoptimized: true
  }
}

export default nextConfig