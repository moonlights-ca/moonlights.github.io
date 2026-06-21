import Link from "next/link";
import Image from "next/image";

export default function Home() {
 return (
 <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex-grow">
 {/* Cinematic Hero Section */}
 <section className="relative min-h-[600px] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-start py-stack-xl mt-8 group">
 {/* Background Image with Fade Mask */}
 <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-low">
 <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10"></div>
 <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent z-10"></div>
          <Image
             alt="High-end smart LED lighting system"
             className="hero-img absolute inset-0 w-full h-full object-cover object-right opacity-60 transition-all duration-700"
             src="/moonlights.github.io/assets/hero_bg.webp"
             fill
             priority
             sizes="100vw"
           />
 </div>
 {/* Hero Content */}
 <div className="relative z-20 w-full max-w-2xl pl-8 md:pl-12">
 <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container border border-outline-variant/50 mb-6 lm-bg-black">
 <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider lm-text-white">
 Full-Scale North American Electrical Supplier
 </span>
 </div>
 <h1 className="font-display-lg text-display-xl md:text-display-2xl text-white mb-6 font-bold">
 Powering <br />
 <span className="text-white">Industry.</span>
 </h1>
 <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-xl">
 The premier distributor for wires, cables, and industrial electrical components across North America. Engineered for reliability and scale.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link
 className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-on-primary font-body-md text-body-md font-bold shadow-[0_0_20px_var(--glow-color-strong)] hover:shadow-[0_0_30px_var(--glow-color-strong-hover)] transition-all duration-300"
 href="/contact"
 >
 Request a Quote
 </Link>
 <Link
 className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-outline-variant text-white font-body-md text-body-md font-bold hover:border-primary hover:text-primary transition-colors duration-300 lm-no-hover-bg"
 href="/wires-and-cables"
 >
 View Catalog
 </Link>
 </div>
 </div>
 </section>

 {/* Product Categories Grid Section */}
 <section className="py-stack-xl relative z-10">
 <div className="flex flex-col md:flex-row justify-between items-end mb-12">
 <div>
 <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
 Product Categories
 </h2>
 <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg lm-text-black">
 Comprehensive electrical components engineered for industrial scale, reliability, and precision.
 </p>
 </div>
 <Link
 className="hidden md:inline-flex items-center text-primary font-label-caps text-label-caps uppercase hover:text-primary-fixed-dim transition-colors mt-6 md:mt-0"
 href="/wires-and-cables"
 >
 View Full Catalog{" "}
 <span className="material-symbols-outlined ml-2">arrow_forward</span>
 </Link>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 md:auto-rows-[220px] gap-gutter">
 {/* Lighting Solutions Card */}
 <Link
 className="group relative block aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 sm:col-span-2 md:col-span-4 md:row-span-2"
 href="/lighting"
 >
 <Image
 alt="Lighting Solutions"
 className="hero-img absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0"
 src="/moonlights.github.io/assets/cat_lighting.webp"
 fill
 sizes="(max-width: 768px) 100vw, 50vw"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
 <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
 <div>
 <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest opacity-80">
 01
 </span>
 <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white">
 Lighting Solutions
 </h3>
 <p className="font-body-md text-white/80 mt-2 max-w-sm hidden sm:block">
 Advanced commercial and residential lighting systems designed for precision and scale.
 </p>
 </div>
 <div className="w-10 h-10 shrink-0 rounded-full bg-surface border border-outline-variant flex items-center justify-center group-hover:border-primary text-on-surface group-hover:text-primary transition-colors">
 <span className="material-symbols-outlined">north_east</span>
 </div>
 </div>
 </Link>
 {/* Auto Transformers Card */}
 <Link
 className="group relative block aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 md:col-span-2 md:row-span-2"
 href="/transformers"
 >
 <Image
 alt="Auto Transformers"
 className="hero-img absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0"
 src="/moonlights.github.io/assets/transformers_hero.webp"
 fill
 sizes="(max-width: 768px) 100vw, 50vw"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
 <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
 <div>
 <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest opacity-80">
 02
 </span>
 <h3 className="font-headline-md text-headline-md text-white">
 Auto Transformers
 </h3>
 <p className="font-body-md text-white/80 mt-2 max-w-sm hidden sm:block">
 Heavy-duty voltage regulation systems ensuring absolute stability under peak loads.
 </p>
 </div>
 <div className="w-10 h-10 shrink-0 rounded-full bg-surface border border-outline-variant flex items-center justify-center group-hover:border-primary text-on-surface group-hover:text-primary transition-colors">
 <span className="material-symbols-outlined">north_east</span>
 </div>
 </div>
 </Link>
 {/* Industrial Electrical Parts Card */}
 <Link
 className="group relative block aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 md:col-span-2"
 href="/industrial-parts"
 >
 <Image
 alt="Industrial Electrical Parts"
 className="hero-img absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0"
 src="/moonlights.github.io/assets/cat_industrial.webp"
 fill
 sizes="(max-width: 768px) 100vw, 50vw"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
 <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
 <div>
 <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest opacity-80">
 03
 </span>
 <h3 className="font-headline-md text-headline-md text-white">
 Industrial Electrical Parts
 </h3>
 <p className="font-body-md text-white/80 mt-2 max-w-sm hidden sm:block">
 Connectors, accessories, lugs, and switches engineered for unyielding reliability.
 </p>
 </div>
 <div className="w-10 h-10 shrink-0 rounded-full bg-surface border border-outline-variant flex items-center justify-center group-hover:border-primary text-on-surface group-hover:text-primary transition-colors">
 <span className="material-symbols-outlined">north_east</span>
 </div>
 </div>
 </Link>
 {/* Wires & Cables Card */}
 <Link
 className="group relative block aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 md:col-span-2"
 href="/wires-and-cables"
 >
 <Image
 alt="Wires and Cables"
 className="hero-img absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0"
 src="/moonlights.github.io/assets/cat_wires.webp"
 fill
 sizes="(max-width: 768px) 100vw, 50vw"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
 <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
 <div>
 <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest opacity-80">
 04
 </span>
 <h3 className="font-headline-md text-headline-md text-white">
 Wires &amp; Cables
 </h3>
 <p className="font-body-md text-white/80 mt-2 max-w-sm hidden sm:block">
 High-grade transmission lines and motor cables for extreme industrial environments.
 </p>
 </div>
 <div className="w-10 h-10 shrink-0 rounded-full bg-surface border border-outline-variant flex items-center justify-center group-hover:border-primary text-on-surface group-hover:text-primary transition-colors">
 <span className="material-symbols-outlined">north_east</span>
 </div>
 </div>
 </Link>
 {/* Tools & Equipment Card */}
 <Link
 className="group relative block aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 md:col-span-2"
 href="/tools-and-equipment"
 >
 <Image
 alt="Tools and Equipment"
 className="hero-img absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0"
 src="/moonlights.github.io/assets/industrial_hero.webp"
 fill
 sizes="(max-width: 768px) 100vw, 50vw"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
 <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
 <div>
 <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest opacity-80">
 05
 </span>
 <h3 className="font-headline-md text-headline-md text-white">
 Tools &amp; Equipment
 </h3>
 <p className="font-body-md text-white/80 mt-2 max-w-sm hidden sm:block">
 Professional-grade hand tools, power tools, test instruments, and safety gear for every job site.
 </p>
 </div>
 <div className="w-10 h-10 shrink-0 rounded-full bg-surface border border-outline-variant flex items-center justify-center group-hover:border-primary text-on-surface group-hover:text-primary transition-colors">
 <span className="material-symbols-outlined">north_east</span>
 </div>
 </div>
 </Link>
 {/* Distribution & Protection Card */}
 <Link
 className="group relative block aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 sm:col-span-2 md:col-span-3"
 href="/enclosures-and-power"
 >
 <Image
 alt="Distribution and Protection"
 className="hero-img absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0"
 src="/moonlights.github.io/assets/industrial_controls.webp"
 fill
 sizes="(max-width: 768px) 100vw, 50vw"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
 <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
 <div>
 <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest opacity-80">
 06
 </span>
 <h3 className="font-headline-md text-headline-md text-white">
 Distribution &amp; Protection
 </h3>
 <p className="font-body-md text-white/80 mt-2 max-w-sm hidden sm:block">
 Circuit breakers, panelboards, disconnects, surge protection, and transfer switches for safe power control.
 </p>
 </div>
 <div className="w-10 h-10 shrink-0 rounded-full bg-surface border border-outline-variant flex items-center justify-center group-hover:border-primary text-on-surface group-hover:text-primary transition-colors">
 <span className="material-symbols-outlined">north_east</span>
 </div>
 </div>
 </Link>
 {/* Conduit & Fittings Card */}
 <Link
 className="group relative block aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 sm:col-span-2 md:col-span-3"
 href="/datacom-and-security"
 >
 <Image
 alt="Conduit and Fittings"
 className="hero-img absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0"
 src="/moonlights.github.io/assets/industrial_connectors.webp"
 fill
 sizes="(max-width: 768px) 100vw, 50vw"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
 <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
 <div>
 <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest opacity-80">
 07
 </span>
 <h3 className="font-headline-md text-headline-md text-white">
 Conduit &amp; Fittings
 </h3>
 <p className="font-body-md text-white/80 mt-2 max-w-sm hidden sm:block">
 EMT, rigid, and flexible conduit, boxes, wireway, grounding, and wiring devices for complete raceway systems.
 </p>
 </div>
 <div className="w-10 h-10 shrink-0 rounded-full bg-surface border border-outline-variant flex items-center justify-center group-hover:border-primary text-on-surface group-hover:text-primary transition-colors">
 <span className="material-symbols-outlined">north_east</span>
 </div>
 </div>
 </Link>
 </div>
 </section>

 {/* Engineering the Light Section */}
 <section className="py-stack-xl border-t border-outline-variant/20 relative z-10">
 <div className="text-center mb-16 relative">
 <span className="inline-block px-2 py-1 rounded bg-surface-container border border-outline-variant/50 font-label-caps text-label-caps text-primary mb-4 tracking-widest uppercase lm-bg-black lm-text-white">
 Core Inventory
 </span>
 <h2 className="font-display-lg text-display-lg text-on-surface mb-6">
 Engineered for Reliability
 </h2>
 <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto lm-text-black">
 Beneath the surface lies military-grade infrastructure. Explore the core components that power our supply chains.
 </p>
 </div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 {/* Schema Image */}
 <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-low aspect-[16/9] lg:aspect-auto group">
 <div className="hero-img absolute inset-0 opacity-40 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0">
 <Image
   alt="Technical blueprint background"
   src="/moonlights.github.io/assets/schema_bg.webp"
   fill
   sizes="(max-width: 768px) 100vw, 66vw"
   loading="lazy"
   className="object-cover object-center"
 />
 </div>
 <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent"></div>
 {/* Technical Overlay Over Blueprint */}
 <div className="absolute top-6 left-6 flex space-x-2 lm-bg-black px-3 py-1 rounded-full items-center">
 <div className="w-2 h-2 rounded-full bg-primary animate-pulse lm-bg-white"></div>
 <span className="font-mono text-[10px] text-primary uppercase tracking-widest lm-text-white">
 Inventory Index v4.2
 </span>
 </div>
 </div>
 {/* Glassmorphism Spec Cards */}
 <div className="flex flex-col gap-6">
 <div className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors lm-text-black">
 <div className="flex items-start justify-between mb-4 relative z-10">
 <span className="material-symbols-outlined text-primary text-3xl">
 cable
 </span>
 <span className="font-mono text-xs text-outline tracking-wider">
 CAT-A1
 </span>
 </div>
 <h4 className="font-headline-md text-headline-md text-on-surface mb-2 relative z-10">
 High-Voltage Cables
 </h4>
 <p className="font-body-md text-body-md text-on-surface-variant relative z-10 lm-text-black">
 Industrial-grade transmission lines designed for extreme environments and maximum durability.
 </p>
 </div>
 <div className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors lm-text-black">
 <div className="flex items-start justify-between mb-4 relative z-10">
 <span className="material-symbols-outlined text-primary text-3xl">
 electric_bolt
 </span>
 <span className="font-mono text-xs text-outline tracking-wider">
 TRX-9
 </span>
 </div>
 <h4 className="font-headline-md text-headline-md text-on-surface mb-2 relative z-10">
 Industrial Transformers
 </h4>
 <p className="font-body-md text-body-md text-on-surface-variant relative z-10 lm-text-black">
 Heavy-duty power management systems ensuring absolute stability under peak electrical loads.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Innovation Spotlight Section */}
 <section className="py-stack-xl border-t border-outline-variant/20 relative z-10">
 <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
 <div className="md:col-span-5 mb-10 md:mb-0">
 <span className="inline-block px-2 py-1 rounded bg-surface-container border border-outline-variant/50 font-label-caps text-label-caps text-primary mb-6 tracking-widest uppercase lm-bg-black lm-text-white">
 Distribution Network
 </span>
 <h2 className="font-display-xl text-display-lg md:text-display-xl text-on-surface mb-6">
 The Supply <br />
 Engine.
 </h2>
 <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 lm-text-black">
 Our proprietary logistics network ensures next-day delivery across North America, keeping your operations running without interruption.
 </p>
 <ul className="space-y-4 mb-10">
 <li className="flex items-center text-on-surface-variant font-body-md text-body-md glass-card px-4 py-3 rounded-lg border-l-2 border-l-primary border-y-0 border-r-0 rounded-l-none">
 <span
 className="material-symbols-outlined text-primary mr-3 lm-text-black"
 style={{ fontVariationSettings: "'FILL' 1" }}
 >
 check_circle
 </span>
 Automated warehousing
 </li>
 <li className="flex items-center text-on-surface-variant font-body-md text-body-md glass-card px-4 py-3 rounded-lg border-l-2 border-l-primary border-y-0 border-r-0 rounded-l-none">
 <span
 className="material-symbols-outlined text-primary mr-3 lm-text-black"
 style={{ fontVariationSettings: "'FILL' 1" }}
 >
 check_circle
 </span>
 Real-time tracking
 </li>
 </ul>
 <Link
 className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-outline-variant text-on-surface font-label-caps text-label-caps uppercase transition-colors lm-bg-black lm-text-white lm-border-black hover:opacity-80"
 href="/contact"
 >
 Contact Our Team
 </Link>
 </div>
 <div className="md:col-span-7 relative">
 <div className="aspect-square md:aspect-video rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 flex items-center justify-center relative group">
 <Image
 alt="Abstract light engineering cutaway"
 className="hero-img w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-700"
 src="/moonlights.github.io/assets/innovation_bg.webp"
 fill
 sizes="(max-width: 768px) 100vw, 60vw"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10"></div>
 {/* Technical Overlays */}
 <div className="absolute top-1/4 left-1/4 w-32 h-px bg-primary/50 z-20 lm-bg-white opacity-50"></div>
 <div className="absolute top-1/4 left-1/4 w-px h-16 bg-primary/50 z-20 lm-bg-white opacity-50"></div>
 <div className="absolute top-[22%] left-[23%] text-[10px] font-mono text-primary z-20 lm-text-white">
 LOGISTICS_NODE_ALPHA
 </div>
 {/* Floating Glassmorphism Tag */}
 <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl glass-card z-20 border-l-2 border-l-primary">
 <span className="font-mono text-[10px] uppercase text-on-surface flex items-center tracking-widest">
 <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
 Network Online :: Nominal
 </span>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main>
 );
}
