import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/site";
import type { ProductCategory } from "@/lib/products";
import { wireProducts } from "@/app/wires-and-cables/wireProducts";
import { transformerProducts } from "@/app/transformers/transformerProducts";
import { industrialCategories } from "@/app/industrial-parts/industrialProducts";
import { datacomCategories } from "@/app/datacom-and-security/datacomProducts";
import { enclosuresCategories } from "@/app/enclosures-and-power/enclosuresProducts";
import { toolsCategories } from "@/app/tools-and-equipment/toolsProducts";

export const dynamic = "force-static";

const STATIC_PATHS = [
  "/",
  "/about",
  "/contact",
  "/custom",
  "/wires-and-cables",
  "/transformers",
  "/industrial-parts",
  "/lighting",
  "/residential-lights",
  "/commercial-lights",
  "/tools-and-equipment",
  "/enclosures-and-power",
  "/datacom-and-security",
];

const CATEGORY_SYSTEMS: { base: string; categories: ProductCategory[] }[] = [
  { base: "/industrial-parts", categories: industrialCategories },
  { base: "/datacom-and-security", categories: datacomCategories },
  { base: "/enclosures-and-power", categories: enclosuresCategories },
  { base: "/tools-and-equipment", categories: toolsCategories },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    entries.push({
      url: canonicalUrl(path),
      lastModified,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.8,
    });
  }

  for (const product of wireProducts) {
    entries.push({
      url: canonicalUrl(`/wires-and-cables/${product.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const product of transformerProducts) {
    entries.push({
      url: canonicalUrl(`/transformers/${product.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const { base, categories } of CATEGORY_SYSTEMS) {
    for (const category of categories) {
      entries.push({
        url: canonicalUrl(`${base}/${category.slug}`),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
      for (const product of category.products) {
        entries.push({
          url: canonicalUrl(`${base}/${category.slug}/${product.slug}`),
          lastModified,
          changeFrequency: "monthly",
          priority: 0.5,
        });
      }
    }
  }

  return entries;
}
