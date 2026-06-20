import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { toolsCategories } from "../../toolsProducts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
 return toolsCategories.flatMap((cat) =>
 cat.products.map((p) => ({
 category: cat.slug,
 slug: p.slug,
 }))
 );
}

export async function generateMetadata({
 params,
}: {
 params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
 const { category, slug } = await params;
 const cat = toolsCategories.find((c) => c.slug === category);
 const product = cat?.products.find((p) => p.slug === slug);
 if (!product) return { title: "Product Not Found" };

 return {
 title: `${product.name} | ${cat!.name} | Moonlights Electrical`,
 description: product.spec,
 };
}

export default async function ProductDetailPage({
 params,
}: {
 params: Promise<{ category: string; slug: string }>;
}) {
 const { category, slug } = await params;
 const cat = toolsCategories.find((c) => c.slug === category);
 const product = cat?.products.find((p) => p.slug === slug);

 if (!cat || !product) {
 notFound();
 }

 // Find adjacent products for navigation
 const idx = cat.products.findIndex((p) => p.slug === slug);
 const prev = idx > 0 ? cat.products[idx - 1] : null;
 const next = idx < cat.products.length - 1 ? cat.products[idx + 1] : null;

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
 <Link href={`/tools-and-equipment/${category}`} className="hover:text-primary transition-colors">
 {cat.name.toUpperCase()}
 </Link>
 <span className="material-symbols-outlined text-[14px]">chevron_right</span>
 <span className="text-primary">{product.name.toUpperCase()}</span>
 </nav>
 </div>

 {/* Product Detail */}
 <section className="py-stack-md pb-stack-xl">
 <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
 {/* Product Image */}
 <div className="col-span-1 md:col-span-7 relative group">
 <div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/30 relative">
 <Image width={800} height={800}
 alt={product.name}
 className="hero-img object-cover w-full h-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
 src={product.img}
 />
 <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/60 via-transparent to-transparent"></div>
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
 {/* Category Tag */}
 <span className="bg-primary/10 border border-primary/30 rounded-lg px-3 py-1.5 font-label-caps text-label-caps text-primary self-start">
 {cat.name}
 </span>

 {/* Title */}
 <h1 className="font-display-xl text-display-lg-mobile md:text-display-lg text-on-surface">
 {product.name}
 </h1>

 {/* Specification */}
 <div className="glass-card rounded-xl p-5">
 <div className="flex items-center gap-2 mb-3">
 <span className="material-symbols-outlined text-primary text-lg">
 fact_check
 </span>
 <h3 className="font-label-caps text-label-caps text-on-surface tracking-wider">
 SPECIFICATIONS
 </h3>
 </div>
 <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
 {product.spec}
 </p>
 </div>

 {/* CTA */}
 <Link
 href="/contact"
 className="rounded-xl bg-primary text-on-primary font-label-caps text-label-caps px-6 py-4 transition-all flex justify-center items-center gap-2 shadow-[0_0_15px_var(--glow-color)] hover:shadow-[0_0_25px_var(--glow-color-hover)]"
 >
 Request a Quote
 <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
 </Link>
 </div>
 </div>
 </section>

 {/* Navigation */}
 <section className="pb-stack-xl">
 <div className="border-t border-outline-variant/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
 <Link
 href={`/tools-and-equipment/${category}`}
 className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-caps text-label-caps transition-colors"
 >
 <span className="material-symbols-outlined text-[16px]">arrow_back</span>
 Back to {cat.name}
 </Link>
 <div className="flex gap-3">
 {prev && (
 <Link
 href={`/tools-and-equipment/${category}/${prev.slug}`}
 className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-outline-variant/30 hover:border-primary text-on-surface-variant hover:text-primary font-label-caps text-label-caps transition-colors"
 >
 <span className="material-symbols-outlined text-[14px]">chevron_left</span>
 Previous
 </Link>
 )}
 {next && (
 <Link
 href={`/tools-and-equipment/${category}/${next.slug}`}
 className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-outline-variant/30 hover:border-primary text-on-surface-variant hover:text-primary font-label-caps text-label-caps transition-colors"
 >
 Next
 <span className="material-symbols-outlined text-[14px]">chevron_right</span>
 </Link>
 )}
 </div>
 </div>
 </section>
 </main>
 );
}
