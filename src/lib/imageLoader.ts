/**
 * Custom image loader for static export with basePath.
 *
 * When `images.unoptimized: true` is used, Next.js's built-in loader
 * does not prepend the basePath to the rendered `<img src>`. This
 * loader ensures all images resolve correctly under the subpath.
 *
 * The basePath is read from NEXT_PUBLIC_BASE_PATH (set in CI).
 * Locally the variable is empty, so images resolve at the root.
 */

import type { ImageLoaderProps } from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function imageLoader({ src, width: _width }: ImageLoaderProps): string {
  // No basePath configured (local dev) — return as-is
  if (!basePath) return src;

  // Already absolute URL — leave as-is
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }

  // Prepend basePath for root-relative paths
  if (src.startsWith("/") && !src.startsWith(`${basePath}/`)) {
    return `${basePath}${src}`;
  }

  return src;
}
