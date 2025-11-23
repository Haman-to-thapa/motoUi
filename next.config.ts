/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true
  }
}
export default nextConfig;