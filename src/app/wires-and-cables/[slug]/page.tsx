import Link from "next/link";
import type { Metadata } from "next";
import { wireProducts } from "../wireProducts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return wireProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = wireProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Wires & Cables | Moonlights Electrical`,
    description: product.desc,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = wireProducts.find((p) => p.slug === slug);

  if (!product) {
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
          <Link href="/wires-and-cables" className="hover:text-primary transition-colors">
            WIRES &amp; CABLES
          </Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary">{product.name.toUpperCase()}</span>
        </nav>
      </div>

      {/* Product Hero — Image + Title/Tags/CTA */}
      <section className="py-stack-md pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          {/* Product Image */}
          <div className="col-span-1 md:col-span-7 relative group">
            <div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/30 relative">
              <img
                alt={product.name}
                className="object-cover w-full h-full mix-blend-luminosity group-hover:mix-blend-normal opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src={product.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/60 via-transparent to-transparent"></div>
              {/* Technical Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="font-mono text-[10px] text-primary/80 uppercase tracking-widest">
                  Product Specification
                </span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-5">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 border border-primary/30 rounded-lg px-3 py-1.5 font-label-caps text-label-caps text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-display-xl text-display-lg-mobile md:text-display-lg text-on-surface">
              {product.name}
            </h1>

            {/* Short Description */}
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {product.desc}
            </p>

            {/* Quick Specs Card */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  fact_check
                </span>
                <h3 className="font-label-caps text-label-caps text-on-surface tracking-wider">
                  QUICK SPECIFICATIONS
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[10px] text-outline uppercase tracking-wider">Voltage</span>
                  <span className="text-on-surface font-medium">{product.tags[0]}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[10px] text-outline uppercase tracking-wider">Rating</span>
                  <span className="text-on-surface font-medium">{product.tags[1]}</span>
                </div>
              </div>
            </div>

            {/* Single CTA */}
            <Link
              href="/contact"
              className="rounded-xl bg-primary text-on-primary font-label-caps text-label-caps px-6 py-4 transition-all flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(207,188,255,0.2)] hover:shadow-[0_0_25px_rgba(207,188,255,0.4)]"
            >
              Request a Quote
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details — Full-width stacked sections */}
      <section className="py-stack-md pb-stack-xl space-y-8">
        {/* Description */}
        <div className="border-t border-outline-variant/20 pt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-2xl">
              description
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Product Description
            </h2>
          </div>
          <div className="space-y-4 max-w-4xl">
            {product.description.map((paragraph, i) => (
              <p
                key={i}
                className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Features + Applications — side-by-side cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Key Features */}
          <div className="glass-card rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">
                verified
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Key Features
              </h2>
            </div>
            <ul className="space-y-4">
              {product.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 pb-4 border-b border-outline-variant/20 last:border-b-0 last:pb-0"
                >
                  <span className="text-primary font-mono text-xs mt-1 shrink-0 w-6 text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Typical Applications */}
          <div className="glass-card rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">
                precision_manufacturing
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Typical Applications
              </h2>
            </div>
            <ul className="space-y-4">
              {product.usage.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Back to Catalog */}
      <section className="pb-stack-xl">
        <div className="border-t border-outline-variant/20 pt-8 flex items-center">
          <Link
            href="/wires-and-cables"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-caps text-label-caps transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to All Wires &amp; Cables
          </Link>
        </div>
      </section>
    </main>
  );
}
