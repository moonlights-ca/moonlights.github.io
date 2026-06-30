"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import Link from "next/link";
import type { CatalogProduct } from "@/lib/products";

export interface CatalogGridProps {
  /** Products to display and filter. */
  products: CatalogProduct[];
  /** Category filter options. The first entry is treated as the "show all" option. */
  categories: readonly string[];
  /** Voltage filter options. The first entry is treated as the "show all" option. */
  voltages: readonly string[];
  /** Route prefix used to build each product link, e.g. `/wires-and-cables`. */
  basePath: string;
}

/**
 * Interactive, filterable product catalog grid shared by the wires & cables and
 * transformers sections. Filtering is performed client-side by category and voltage.
 */
export default function CatalogGrid({ products, categories, voltages, basePath }: CatalogGridProps) {
  const allCategories = categories[0];
  const allVoltages = voltages[0];

  const [activeCategory, setActiveCategory] = useState<string>(allCategories);
  const [activeVoltage, setActiveVoltage] = useState<string>(allVoltages);
  const [voltageOpen, setVoltageOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = activeCategory === allCategories || p.category === activeCategory;
      const voltMatch = activeVoltage === allVoltages || p.voltage === activeVoltage;
      return catMatch && voltMatch;
    });
  }, [products, activeCategory, activeVoltage, allCategories, allVoltages]);

  return (
    <>
      {/* Filter Bar */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-outline-variant/20">
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-label-caps text-label-caps transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary border-primary shadow-md"
                    : "bg-surface-container border-outline-variant/30 text-on-surface-variant hover:border-primary/30 hover:text-on-surface"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Voltage Dropdown */}
          <div className="relative">
            <button
              onClick={() => setVoltageOpen(!voltageOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-label-caps text-label-caps transition-all duration-200 border min-w-[160px] justify-between ${
                activeVoltage !== allVoltages
                  ? "bg-primary text-on-primary border-primary shadow-md"
                  : "bg-surface-container border-outline-variant/30 text-on-surface-variant hover:border-primary/30"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                {activeVoltage}
              </span>
              <span
                className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
                  voltageOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {voltageOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setVoltageOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 z-50 min-w-[160px] rounded-xl bg-surface-container border border-outline-variant/30 shadow-xl overflow-hidden">
                  {voltages.map((v) => (
                    <button
                      key={v}
                      onClick={() => {
                        setActiveVoltage(v);
                        setVoltageOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 font-label-caps text-label-caps transition-colors ${
                        activeVoltage === v
                          ? "bg-primary text-on-primary"
                          : "text-on-surface-variant hover:bg-surface-variant hover:text-on-surface"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Result count */}
        <div className="flex items-center gap-2 pt-3">
          <span className="material-symbols-outlined text-primary text-lg">inventory_2</span>
          <span className="font-body-md text-body-md text-on-surface-variant">
            Showing <span className="text-on-surface font-semibold">{filtered.length}</span> of {products.length} products
          </span>
          {(activeCategory !== allCategories || activeVoltage !== allVoltages) && (
            <button
              onClick={() => {
                setActiveCategory(allCategories);
                setActiveVoltage(allVoltages);
              }}
              className="ml-2 text-primary font-label-caps text-label-caps hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">close</span>
              Clear filters
            </button>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-stack-xl">
        {filtered.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-xl">
            <span className="material-symbols-outlined text-outline text-5xl mb-4 block">search_off</span>
            <p className="font-headline-md text-headline-md text-on-surface mb-2">No products found</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Try adjusting your filters to see more results.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter" data-stagger>
            {filtered.map((product) => (
              <Link
                key={product.slug}
                href={`${basePath}/${product.slug}`}
                className="bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 p-6 rounded-xl flex flex-col group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="aspect-video w-full mb-5 overflow-hidden rounded-lg bg-surface-container-low relative flex items-center justify-center">
                  <Image width={800} height={800}
                    alt={product.name}
                    className="hero-img object-cover w-full h-full opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src={product.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.tags.map((tag) => (
                    <span key={tag} className="chip rounded px-2 py-1 font-label-caps text-label-caps text-on-surface">{tag}</span>
                  ))}
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-2">{product.name}</h2>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6 lm-text-black">
                  {product.desc}
                </p>
                <div className="w-full rounded-xl bg-transparent border border-outline-variant/30 group-hover:border-primary group-hover:text-primary text-on-surface font-label-caps text-label-caps px-6 py-3 transition-colors flex justify-center items-center gap-2">
                  View Details
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
