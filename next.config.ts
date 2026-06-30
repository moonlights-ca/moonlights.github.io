import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages
  output: 'export',

  // Served at the root of the custom domain (www.moonlights.ca) — no base path.
  // The CNAME file in /public points GitHub Pages at the custom domain.

  // Disable server-based image optimization since GitHub Pages is static
  images: {
    unoptimized: true,
  },

  // Emit /route/index.html so clean URLs resolve correctly on static hosts
  trailingSlash: true,

  // Compress responses
  compress: true,

  // Optimize production builds
  reactStrictMode: true,

  // Remove X-Powered-By header for smaller response
  poweredByHeader: false,
};

export default nextConfig;
