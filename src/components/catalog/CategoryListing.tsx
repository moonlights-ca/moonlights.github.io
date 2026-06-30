import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/structuredData";
import type { CategorySystem, ProductCategory } from "@/lib/products";

export interface CategoryListingProps {
  system: CategorySystem;
  category: ProductCategory;
}

/**
 * Lists every product within a single category as a grid of image/name/spec
 * cards. Shared by all category-based sections.
 */
export default function CategoryListing({ system, category }: CategoryListingProps) {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: system.rootLabel, path: system.basePath },
            { name: category.name, path: `${system.basePath}/${category.slug}` },
          ]),
          itemListSchema(
            category.products.map((product) => ({
              name: product.name,
              path: `${system.basePath}/${category.slug}/${product.slug}`,
            })),
          ),
        ]}
      />
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "HOME", href: "/" },
          { label: system.rootLabel, href: system.basePath },
          { label: category.name.toUpperCase() },
        ]}
      />

      {/* Category Header */}
      <section className="py-stack-md pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/20 pb-6">
          <div>
            <h1 className="font-display-xl text-display-lg-mobile md:text-display-lg text-on-surface mb-3">
              {category.name}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              {category.desc}
            </p>
          </div>
          <span className="font-body-md text-body-md text-on-surface-variant shrink-0">
            <span className="text-on-surface font-semibold">{category.products.length}</span> products
          </span>
        </div>
      </section>

      {/* Product Grid — Simple cards with image, name, spec */}
      <section className="pb-stack-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter" data-stagger>
          {category.products.map((product) => (
            <Link
              key={product.slug}
              href={`${system.basePath}/${category.slug}/${product.slug}`}
              className="bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 rounded-xl overflow-hidden flex flex-col group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              {/* Product Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container-low relative">
                <Image width={800} height={800}
                  alt={product.name}
                  className="hero-img object-cover w-full h-full opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={product.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              </div>
              {/* Product Info */}
              <div className="p-5 flex flex-col gap-2">
                <h2 className="font-headline-md text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">
                  {product.name}
                </h2>
                <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
                  {product.spec}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-stack-xl">
        <div className="border-t border-outline-variant/20 pt-8 flex items-center">
          <Link
            href={system.basePath}
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-caps text-label-caps transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            {system.backToAllLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
