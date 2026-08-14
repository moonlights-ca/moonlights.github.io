/**
 * Single source of truth for site-wide identity, contact (NAP), and SEO
 * defaults. Used by metadata, structured data, the sitemap, robots, and the
 * footer/contact UI so every surface stays consistent (critical for local SEO).
 */

export const siteConfig = {
  /** Public-facing brand name. */
  name: "Moonlights",
  /** Legal / trading name used in structured data. */
  legalName: "Moonlights",
  /** Canonical origin — every absolute URL is built from this. */
  url: "https://www.moonlights.ca",
  /** Default meta description (North America-focused, keyword-rich). */
  description:
    "Moonlights is a North American electrical supplier of wires and cables, transformers, circuit breakers, conduit, industrial parts, tools, and LED lighting. Browse the catalogue and request a fast quote — shipping across North America.",
  /** Short tagline used in Open Graph / hero contexts. */
  tagline: "North American Electrical Supplier — Wires, Cables, Transformers & More",

  // ── Contact (NAP — keep identical everywhere) ───────────────────────────
  telephone: "+1 (548) 788-6606",
  telephoneHref: "+15487886606",
  email: "sales@moonlights.ca",
  address: {
    street: "16 Stevensgate Dr",
    city: "Ajax",
    region: "ON",
    postalCode: "L1T 4Z3",
    country: "CA",
  },

  /** Primary market for SEO copy and structured data. */
  areaServed: "North America",

  /** Default Open Graph / Twitter share image (1200×630 recommended). */
  ogImage: "/assets/hero_led_minimal.png",

  /** Broad keyword set surfaced in metadata. */
  keywords: [
    "electrical supplier North America",
    "wire and cable supplier",
    "industrial transformers",
    "circuit breakers",
    "conduit and fittings",
    "industrial electrical parts",
    "electrical connectors",
    "terminals and lugs",
    "LED lighting",
    "electrical distributor North America",
    "panelboards and load centers",
    "electrical tools and equipment",
    "moonlights.ca",
  ],
} as const;

/** Build an absolute URL from a root-relative path (e.g. `/about`). */
export function absoluteUrl(path = ""): string {
  if (!path) return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Build a canonical absolute URL with a trailing slash, matching the static
 * export's `trailingSlash: true` output (so canonicals never 301-redirect).
 */
export function canonicalUrl(path = "/"): string {
  let p = path.startsWith("/") ? path : `/${path}`;
  if (!p.endsWith("/")) p += "/";
  return `${siteConfig.url}${p}`;
}
