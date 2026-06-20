import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { toolsCategories } from "../toolsProducts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return toolsCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = toolsCategories.find((c) => c.slug === category);
  if (!cat) return { title: "Category Not Found" };

  return {
    title: `${cat.name} | Tools & Equipment | Moonlights Electrical`,
    description: cat.desc,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = toolsCategories.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
      {/* Breadcrumb */}
      <div className="pt-8 pb-4">
        <nav className="flex text-on-surface-variant font-label-caps text-label-caps gap-2 items-center flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">
            HOME
          </Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link href="/tools-and-equipment" className="hover:text-primary transition-colors">
            TOOLS & EQUIPMENT
          </Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary">{cat.name.toUpperCase()}</span>
        </nav>
      </div>

      {/* Category Header */}
      <section className="py-stack-md pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/20 pb-6">
          <div>
            <h1 className="font-display-xl text-display-lg-mobile md:text-display-lg text-on-surface mb-3">
              {cat.name}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              {cat.desc}
            </p>
          </div>
          <span className="font-body-md text-body-md text-on-surface-variant shrink-0">
            <span className="text-on-surface font-semibold">{cat.products.length}</span> products
          </span>
        </div>
      </section>

      {/* Product Grid — Simple cards with image, name, spec */}
      <section className="pb-stack-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {cat.products.map((product) => (
            <Link
              key={product.slug}
              href={`/tools-and-equipment/${category}/${product.slug}`}
              className="bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 rounded-xl overflow-hidden flex flex-col group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              {/* Product Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container-low relative">
                <Image width={800} height={800}
                  alt={product.name}
                  className="hero-img object-cover w-full h-full mix-blend-luminosity group-hover:mix-blend-normal opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
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
            href="/tools-and-equipment"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-caps text-label-caps transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to All Tools & Equipment
          </Link>
        </div>
      </section>
    </main>
  );
}
