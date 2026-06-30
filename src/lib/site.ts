/**
 * Single source of truth for site-wide identity, contact (NAP), and SEO
 * defaults. Used by metadata, structured data, the sitemap, robots, and the
 * footer/contact UI so every surface stays consistent (critical for local SEO).
 */

export const siteConfig = {
  /** Public-facing brand name. */
  name: "Moonlights.ca",
  /** Legal / trading name used in structured data. */
  legalName: "Moonlights Electrical",
  /** Canonical origin — every absolute URL is built from this. */
  url: "https://www.moonlights.ca",
  /** Default meta description (Canada-focused, keyword-rich). */
  description:
    "Moonlights is a Canadian electrical supplier of wires and cables, transformers, circuit breakers, conduit, industrial parts, tools, and LED lighting. Browse the catalogue and request a fast quote — shipping across Canada.",
  /** Short tagline used in Open Graph / hero contexts. */
  tagline: "Canadian Electrical Supplier — Wires, Cables, Transformers & More",

  // ── Contact (NAP — keep identical everywhere) ───────────────────────────
  telephone: "+1 (647) 786-4848",
  telephoneHref: "+16477864848",
  email: "sales@moonlights.ca",
  address: {
    street: "1214 Birchview Dr. Unit",
    region: "ON",
    postalCode: "L1T 4C5",
    country: "CA",
  },

  /** Primary market for SEO copy and structured data. */
  areaServed: "Canada",

  /** Default Open Graph / Twitter share image (1200×630 recommended). */
  ogImage: "/assets/hero_bg.webp",

  /** Broad keyword set surfaced in metadata. */
  keywords: [
    "electrical supplier Canada",
    "wire and cable supplier Canada",
    "industrial transformers Canada",
    "circuit breakers Canada",
    "conduit and fittings",
    "industrial electrical parts",
    "electrical connectors",
    "terminals and lugs",
    "LED lighting Canada",
    "electrical distributor Canada",
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
