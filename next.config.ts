import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages
  output: 'export',
  
  // Base path for GitHub Pages Project deployment
  basePath: '/moonlights.github.io',
  
  // Disable server-based image optimization since GitHub Pages is static
  images: {
    unoptimized: true,
  },

  // Compress responses
  compress: true,

  // Optimize production builds
  reactStrictMode: true,

  // Remove X-Powered-By header for smaller response
  poweredByHeader: false,
};

export default nextConfig;
