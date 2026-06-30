import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Moonlights Electrical, our history, mission, and commitment to providing top-tier industrial and commercial electrical solutions.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <main className="flex-grow w-full overflow-hidden bg-background">
      {/* Top Section: Split Layout */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-xl pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h1 className="font-display-xl text-[64px] md:text-[80px] leading-tight text-on-surface">
              About Us
            </h1>
          </div>
          <div className="md:col-span-7 pt-4 md:pt-6">
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed lm-text-black max-w-2xl">
              Moonlights Electrical is a trusted Canadian supplier of industrial and commercial electrical components. We saw how often projects stall on fragmented supply chains and subpar materials, so we brought together a comprehensive catalogue of transformers, wires and cables, distribution equipment, and lighting from established brands. Today we work with contractors, municipalities, and facility managers across Canada to help keep their projects on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Massive Image Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 relative cursor-pointer">
        <div className="group w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden relative shadow-2xl">
          <Image
            alt="Industrial electrical infrastructure and equipment"
            className="hero-img absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            src="/assets/industrial_hero.webp"
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl mt-12 text-center">
        <h2 className="font-display-lg text-[40px] md:text-[48px] text-on-surface mb-16">
          Values
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Value 1 */}
          <div className="flex flex-col items-center gap-6 group/val cursor-default">
            <div className="w-32 h-32 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform group-hover/val:scale-105 group-hover/val:bg-primary/20 duration-500 shadow-lg">
              <span className="material-symbols-outlined text-primary text-[48px]" style={{ fontVariationSettings: "'FILL' 0" }}>verified</span>
            </div>
            <h3 className="font-headline-sm text-xl text-on-surface lm-text-black max-w-[150px]">Certified Quality</h3>
          </div>

          {/* Value 2 */}
          <div className="flex flex-col items-center gap-6 group/val cursor-default">
            <div className="w-32 h-32 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center transition-transform group-hover/val:scale-105 group-hover/val:bg-secondary/20 duration-500 shadow-lg">
              <span className="material-symbols-outlined text-secondary text-[48px]" style={{ fontVariationSettings: "'FILL' 0" }}>support_agent</span>
            </div>
            <h3 className="font-headline-sm text-xl text-on-surface lm-text-black max-w-[150px]">Expert Support</h3>
          </div>

          {/* Value 3 */}
          <div className="flex flex-col items-center gap-6 group/val cursor-default">
            <div className="w-32 h-32 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform group-hover/val:scale-105 group-hover/val:bg-primary/20 duration-500 shadow-lg">
              <span className="material-symbols-outlined text-primary text-[48px]" style={{ fontVariationSettings: "'FILL' 0" }}>local_shipping</span>
            </div>
            <h3 className="font-headline-sm text-xl text-on-surface lm-text-black max-w-[150px]">Canada-Wide Supply</h3>
          </div>

          {/* Value 4 */}
          <div className="flex flex-col items-center gap-6 group/val cursor-default">
            <div className="w-32 h-32 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center transition-transform group-hover/val:scale-105 group-hover/val:bg-secondary/20 duration-500 shadow-lg">
              <span className="material-symbols-outlined text-secondary text-[48px]" style={{ fontVariationSettings: "'FILL' 0" }}>eco</span>
            </div>
            <h3 className="font-headline-sm text-xl text-on-surface lm-text-black max-w-[150px]">Sustainable Impact</h3>
          </div>
        </div>
      </section>

    </main>
  );
}
