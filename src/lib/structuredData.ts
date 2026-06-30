import { siteConfig, absoluteUrl, canonicalUrl } from "./site";

/** A single breadcrumb / list entry: visible name + root-relative path. */
export interface SchemaCrumb {
  name: string;
  path: string;
}

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

/** Organization entity describing the business (NAP, contact, area served). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.ogImage),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: { "@type": "Country", name: siteConfig.areaServed },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.telephone,
      email: siteConfig.email,
      contactType: "sales",
      areaServed: "CA",
      availableLanguage: ["en"],
    },
  };
}

/** WebSite entity tying the domain to the organization. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-CA",
    publisher: { "@id": ORG_ID },
  };
}

/** BreadcrumbList for a page's navigational trail. */
export function breadcrumbSchema(items: SchemaCrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

/**
 * Product entity. Intentionally omits `offers` — pricing and availability are
 * provided per quote rather than published.
 */
export function productSchema(opts: {
  name: string;
  description: string;
  image: string;
  path: string;
  category?: string;
  sku?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    image: absoluteUrl(opts.image),
    ...(opts.sku ? { sku: opts.sku, mpn: opts.sku } : {}),
    ...(opts.category ? { category: opts.category } : {}),
    url: canonicalUrl(opts.path),
    seller: { "@id": ORG_ID },
  };
}

/** ItemList for catalogue / category listing pages. */
export function itemListSchema(items: SchemaCrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.path),
    })),
  };
}
