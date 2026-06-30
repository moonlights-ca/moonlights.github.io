/**
 * Shared product data models.
 *
 * Two catalog shapes power the entire site:
 *
 * 1. {@link CategoryProduct} / {@link ProductCategory} — used by the category-based
 *    sections (industrial parts, conduit & fittings, distribution & protection,
 *    tools & equipment). Products are grouped into categories and described by a
 *    single concise `spec` string.
 *
 * 2. {@link CatalogProduct} — used by the richly-documented, filterable catalogs
 *    (wires & cables, transformers) where each product has a full description,
 *    feature list, and typical applications.
 */

/** A single product inside a category-based section. */
export interface CategoryProduct {
  slug: string;
  name: string;
  img: string;
  spec: string;
  category: string;
}

/** A named group of {@link CategoryProduct}s. */
export interface ProductCategory {
  slug: string;
  name: string;
  img: string;
  desc: string;
  products: CategoryProduct[];
}

/**
 * Configuration describing one category-based section (industrial parts, conduit
 * & fittings, distribution & protection, tools & equipment). Shared listing and
 * detail components are driven entirely by this object.
 */
export interface CategorySystem {
  /** Route prefix for the section, e.g. `/industrial-parts`. */
  basePath: string;
  /** Title-case section name used in page metadata, e.g. `Industrial Parts`. */
  displayName: string;
  /** Uppercase label shown in breadcrumbs, e.g. `INDUSTRIAL PARTS`. */
  rootLabel: string;
  /** Text for the "back to section" link, e.g. `Back to All Industrial Parts`. */
  backToAllLabel: string;
  /** Every category belonging to the section. */
  categories: ProductCategory[];
}

/** A fully-documented product in a filterable catalog (wires, transformers). */
export interface CatalogProduct {
  slug: string;
  name: string;
  img: string;
  tags: string[];
  category: string;
  voltage: string;
  desc: string;
  description: string[];
  usage: string[];
  features: string[];
}
