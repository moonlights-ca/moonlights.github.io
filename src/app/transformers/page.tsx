import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import TransformerCatalogGrid from "./TransformerCatalogGrid";

export const metadata: Metadata = {
 title: "Transformers | Moonlights Electrical",
 description: "Browse our comprehensive catalog of industrial and commercial transformers. Dry-type, control, isolation, autotransformers and more for every application.",
};

export default function Transformers() {
 return (
 <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
 {/* Breadcrumb */}
 <div className="pt-8 pb-4">
 <nav className="flex text-on-surface-variant font-label-caps text-label-caps gap-2 items-center">
 <Link href="/" className="hover:text-primary transition-colors">
 HOME
 </Link>
 <span className="material-symbols-outlined text-[14px]">chevron_right</span>
 <span className="text-primary">TRANSFORMERS</span>
 </nav>
 </div>

 {/* Hero Section */}
 <section className="py-stack-md relative overflow-hidden rounded-xl group mb-8">
 <div className="absolute inset-0 z-0">
 <div className="w-full h-full bg-gradient-to-r from-background via-background/80 to-transparent absolute inset-0 z-10"></div>
 <Image
 alt="Industrial Transformers"
 className="hero-img w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
 src="/moonlights.github.io/assets/transformers_hero.webp"
 fill
 sizes="100vw"
 priority
 />
 </div>
 <div className="relative z-20 max-w-3xl pointer-events-none p-8 md:p-16">
 <h1 className="font-display-xl text-display-lg-mobile md:text-display-xl text-white mb-6">
 Industrial Grade<br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
 Transformers.
 </span>
 </h1>
 <p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-xl">
 Precision-engineered voltage regulation for high-demand industrial ecosystems. Distribution, control, isolation, and specialty transformers built for uncompromising reliability.
 </p>
 </div>
 </section>

 {/* Interactive Catalog Grid */}
 <TransformerCatalogGrid />
 </main>
 );
}
