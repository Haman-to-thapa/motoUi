/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for better production performance
  output: 'standalone',
  
  // Add trailing slashes to URLs to prevent routing issues
  trailingSlash: true,
  
  // Enable React strict mode for better development practices
  reactStrictMode: true,
  
  // Optimize images if you're using next/image
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'development' ? false : true,
  },
  
  // Environment variables that should be available at build time
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Enable compression for better performance
  compress: true,
  
  // Improve bundle size by disabling source maps in production
  productionBrowserSourceMaps: false,
}

export default nextConfig