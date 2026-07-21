import type { NextConfig } from "next";

/**
 * Set NEXT_PUBLIC_BASE_PATH=/moonlights.github.io in CI to deploy under
 * the org's custom domain (www.moonlights.ca/moonlights.github.io/).
 * Locally it is empty so the dev server works at http://localhost:3000/.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages
  output: 'export',

  // Subpath only in production (set by the GitHub Actions workflow).
  ...(basePath ? { basePath } : {}),

  // Custom loader prepends basePath so images resolve correctly under the subpath.
  // (A custom loaderFile replaces the need for `unoptimized: true` with `output: 'export'`.)
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
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
