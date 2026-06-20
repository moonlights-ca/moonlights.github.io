import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { toolsCategories } from "./toolsProducts";

export const metadata: Metadata = {
 title: "Tools & Test Equipment | Moonlights Electrical",
 description: "Professional hand tools, power tools, test equipment, and fasteners from Klein, Fluke, Milwaukee, DeWalt, and more — for electrical contractors and industrial applications.",
};

export default function ToolsEquipment() {
 return (
 <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
 {/* Breadcrumb */}
 <div className="pt-8 pb-4">
 <nav className="flex text-on-surface-variant font-label-caps text-label-caps gap-2 items-center">
 <Link href="/" className="hover:text-primary transition-colors">
 HOME
 </Link>
 <span className="material-symbols-outlined text-[14px]">chevron_right</span>
 <span className="text-primary">TOOLS & EQUIPMENT</span>
 </nav>
 </div>

 {/* Hero Section */}
 <section className="py-stack-md relative overflow-hidden rounded-xl group mb-8">
 <div className="absolute inset-0 z-0">
 <div className="w-full h-full bg-gradient-to-r from-background via-background/80 to-transparent absolute inset-0 z-10"></div>
 <Image
 alt="Tools and Test Equipment"
 className="hero-img w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
 src="/moonlights.github.io/assets/industrial_hero.webp"
 fill
 sizes="100vw"
 priority
 />
 </div>
 <div className="relative z-20 max-w-3xl pointer-events-none p-8 md:p-16">
 <h1 className="font-display-xl text-display-lg-mobile md:text-display-xl text-white mb-6">
 Professional<br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
 Tools & Equipment.
 </span>
 </h1>
 <p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-xl">
 Industry-leading hand tools, power tools, and precision test instruments from Klein, Fluke, Milwaukee, and more. Built for electrical professionals.
 </p>
 </div>
 </section>

 {/* Category Grid */}
 <section className="pb-stack-xl grid grid-cols-1 md:grid-cols-12 gap-gutter">
 {/* First category (Large Feature) */}
 {toolsCategories.length > 0 && (
 <Link
 href={`/tools-and-equipment/${toolsCategories[0].slug}`}
 className="col-span-1 md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant/30 hover:border-primary hover:shadow-[0_0_20px_var(--glow-color-hover)] transition-all duration-300 overflow-hidden flex flex-col md:flex-row group"
 >
 <div className="md:w-1/2 relative h-64 md:h-auto bg-surface-container-low overflow-hidden">
 <Image
 alt={toolsCategories[0].name}
 className="hero-img w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 [mask-image:linear-gradient(to_top,transparent,black_30%)] md:[mask-image:linear-gradient(to_right,transparent,black_30%)] lm-no-mask"
 src={toolsCategories[0].img}
 fill
 sizes="(max-width: 768px) 100vw, 33vw"
 loading="lazy"
 />
 <div className="absolute top-4 left-4">
 <span className="chip backdrop-blur-md px-3 py-1 rounded text-on-surface font-label-caps text-label-caps lm-bg-black lm-text-white">Professional</span>
 </div>
 </div>
 <div className="p-8 md:w-1/2 flex flex-col justify-center gap-4">
 <h2 className="font-headline-md text-headline-md bg-gradient-to-r from-primary to-secondary-fixed bg-clip-text text-transparent lm-text-black">{toolsCategories[0].name}</h2>
 <p className="font-body-md text-body-md text-on-surface-variant lm-text-black">
 {toolsCategories[0].desc}
 </p>
 <div className="mt-4">
 <span className="bg-transparent border border-outline-variant/30 px-6 py-2.5 rounded-xl font-label-caps text-label-caps text-on-surface group-hover:border-primary group-hover:text-primary transition-colors uppercase tracking-wider inline-flex items-center gap-2 lm-text-black lm-border-black">
 View Products
 <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
 </span>
 </div>
 </div>
 </Link>
 )}

 {/* Remaining categories */}
 {toolsCategories.slice(1).map((cat) => (
 <Link
 key={cat.slug}
 href={`/tools-and-equipment/${cat.slug}`}
 className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 hover:border-primary hover:shadow-[0_0_20px_var(--glow-color-hover)] transition-all duration-300 overflow-hidden flex flex-col group"
 >
 <div className="h-48 relative bg-surface-container-low overflow-hidden">
 <Image
 alt={cat.name}
 className="hero-img w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 [mask-image:linear-gradient(to_top,transparent,black_30%)] lm-no-mask"
 src={cat.img}
 fill
 sizes="(max-width: 768px) 100vw, 33vw"
 loading="lazy"
 />
 </div>
 <div className="p-8 flex flex-col flex-grow gap-4">
 <h2 className="font-headline-md text-headline-md text-on-surface">{cat.name}</h2>
 <p className="font-body-md text-body-md text-on-surface-variant flex-grow lm-text-black">
 {cat.desc}
 </p>
 <span className="bg-transparent border border-outline-variant/30 px-6 py-2.5 rounded-xl font-label-caps text-label-caps text-on-surface group-hover:border-primary group-hover:text-primary transition-colors uppercase tracking-wider w-full mt-auto flex justify-center items-center gap-2 lm-text-black lm-border-black">
 View Products
 <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
 </span>
 </div>
 </Link>
 ))}
 </section>
 </main>
 );
}
