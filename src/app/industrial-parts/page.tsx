import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { industrialCategories } from "./industrialProducts";

export const metadata: Metadata = {
  title: "Industrial Parts | Moonlights Electrical",
  description: "Browse our comprehensive inventory of industrial electrical parts — connectors, cable accessories, terminals, switches, and control components.",
};

export default function IndustrialParts() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
      {/* Breadcrumb */}
      <div className="pt-8 pb-4">
        <nav className="flex text-on-surface-variant font-label-caps text-label-caps gap-2 items-center">
          <Link href="/" className="hover:text-primary transition-colors">
            HOME
          </Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary">INDUSTRIAL PARTS</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-stack-md relative overflow-hidden rounded-xl group mb-8">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-background via-background/80 to-transparent absolute inset-0 z-10"></div>
          <Image
            alt="Industrial Electrical Parts"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:mix-blend-normal grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
            src="/moonlights.github.io/assets/industrial_hero.png"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-20 max-w-3xl pointer-events-none p-8 md:p-16">
          <h1 className="font-display-xl text-display-lg-mobile md:text-display-xl text-on-surface mb-6">
            Industrial Grade<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Electrical Parts.
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
            Precision-engineered components for high-voltage and critical infrastructure applications. Built for uncompromising reliability in extreme environments.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="pb-stack-xl grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Electrical Connectors (Large Feature) */}
        <Link
          href="/industrial-parts/electrical-connectors"
          className="col-span-1 md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant/30 hover:border-primary hover:shadow-[0_0_20px_rgba(207,188,255,0.4)] transition-all duration-300 overflow-hidden flex flex-col md:flex-row group"
        >
          <div className="md:w-1/2 relative h-64 md:h-auto bg-surface-container-low overflow-hidden">
            <Image
              alt="Electrical Connectors"
              className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500 [mask-image:linear-gradient(to_top,transparent,black_30%)] md:[mask-image:linear-gradient(to_right,transparent,black_30%)]"
              src="/moonlights.github.io/assets/industrial_connectors.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-on-surface font-label-caps text-label-caps border border-white/20">High-Voltage</span>
            </div>
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-center gap-4">
            <h2 className="font-headline-md text-headline-md bg-gradient-to-r from-primary to-secondary-fixed bg-clip-text text-transparent">Electrical Connectors</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Heavy-duty multipin and circular connectors designed for secure data and power transmission in harsh industrial settings. Features IP68 ratings and vibration resistance.
            </p>
            <div className="mt-4">
              <span className="bg-transparent border border-outline-variant/30 px-6 py-2.5 rounded-xl font-label-caps text-label-caps text-on-surface group-hover:border-primary group-hover:text-primary transition-colors uppercase tracking-wider inline-flex items-center gap-2">
                View Products
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>
        </Link>

        {/* Remaining 4 categories */}
        {industrialCategories.slice(1).map((cat) => (
          <Link
            key={cat.slug}
            href={`/industrial-parts/${cat.slug}`}
            className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 hover:border-primary hover:shadow-[0_0_20px_rgba(207,188,255,0.4)] transition-all duration-300 overflow-hidden flex flex-col group"
          >
            <div className="h-48 relative bg-surface-container-low overflow-hidden">
              <Image
                alt={cat.name}
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500 [mask-image:linear-gradient(to_top,transparent,black_30%)]"
                src={cat.img}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow gap-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">{cat.name}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                {cat.desc}
              </p>
              <span className="bg-transparent border border-outline-variant/30 px-6 py-2.5 rounded-xl font-label-caps text-label-caps text-on-surface group-hover:border-primary group-hover:text-primary transition-colors uppercase tracking-wider w-full mt-auto flex justify-center items-center gap-2">
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
