import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential & Commercial Lighting | Moonlights Electrical",
  description: "Next-generation illumination systems for smart homes and high-performance commercial architectures.",
};

export default function Lighting() {
  return (
    <main className="flex-grow w-full relative z-10">
      {/* Split Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col md:flex-row border-b border-outline-variant/20">
        {/* Residential Half */}
        <div className="relative flex-1 group overflow-hidden bg-surface-container-lowest min-h-[400px]">
          <div className="absolute inset-0">
            <img
              alt="Residential Architectural Lighting"
              src="/assets/residential_hero.jpg"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal grayscale group-hover:grayscale-0"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent md:bg-gradient-to-r md:from-background md:via-background/50 md:to-transparent"></div>
          <div className="relative h-full flex flex-col justify-end p-margin-mobile md:p-margin-desktop z-10">
            <span className="inline-block bg-white/10 backdrop-blur-md rounded px-3 py-1 font-label-caps text-label-caps text-on-surface w-max mb-6">Residential</span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-6">Architectural<br />Brilliance</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-8">Elevate luxury homes with precision-engineered lighting systems designed for sophisticated atmospheres.</p>
            <Link href="/residential-lights" className="w-max px-8 py-4 border border-outline-variant/30 rounded-xl text-on-surface font-label-caps text-label-caps hover:bg-surface-container hover:border-primary hover:text-primary transition-all">
              Explore Residential
            </Link>
          </div>
        </div>
        {/* Commercial Half */}
        <div className="relative flex-1 group overflow-hidden bg-surface-container-lowest min-h-[400px]">
          <div className="absolute inset-0">
            <img
              alt="Commercial Industrial Lighting"
              src="/assets/commercial_hero.jpg"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal grayscale group-hover:grayscale-0"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent md:bg-gradient-to-l md:from-background md:via-background/50 md:to-transparent"></div>
          <div className="relative h-full flex flex-col justify-end p-margin-mobile md:p-margin-desktop z-10">
            <span className="inline-block bg-white/10 backdrop-blur-md rounded px-3 py-1 font-label-caps text-label-caps text-on-surface w-max mb-6">Commercial</span>
            <h2 className="font-display-xl text-display-xl text-on-surface mb-6">Industrial<br />Precision</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-8">Robust, scalable lighting infrastructure built for demanding commercial and industrial environments.</p>
            <Link href="/commercial-lights" className="w-max px-8 py-4 border border-outline-variant/30 rounded-xl text-on-surface font-label-caps text-label-caps hover:bg-surface-container hover:border-primary hover:text-primary transition-all">
              Explore Commercial
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Specifications Bento Grid */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-stack-md flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="font-display-lg text-display-lg text-on-surface mb-4">Engineering Specs</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Advanced technical details for contractors and architects integrating Moonlights into broad electrical plans.</p>
          </div>
          <Link href="/contact" className="mt-6 md:mt-0 shadow-[0_0_20px_0_rgba(207,188,255,0.2)] bg-gradient-to-r from-primary to-secondary text-on-primary rounded-full px-8 py-3 font-label-caps text-label-caps hover:shadow-[0_0_30px_0_rgba(207,188,255,0.4)] transition-all">
            Request a Quote
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Glassmorphic Card 1 */}
          <div className="bg-surface-container-lowest/60 backdrop-blur-[20px] border border-outline-variant/30 hover:border-primary/50 hover:shadow-[0_0_20px_0_rgba(207,188,255,0.2)] p-8 rounded-xl transition-all duration-300 col-span-1 md:col-span-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-primary/20"></div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Integrated Power Systems</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 relative z-10">
              Seamless integration with existing commercial electrical grids. Our unified driver technology reduces installation time by 40% while maintaining absolute thermal stability.
            </p>
            <div className="flex flex-wrap gap-2 relative z-10">
              <span className="bg-white/10 rounded px-3 py-1 font-label-caps text-label-caps text-on-surface border border-white/5">120-277V AC</span>
              <span className="bg-white/10 rounded px-3 py-1 font-label-caps text-label-caps text-on-surface border border-white/5">DALI Compatible</span>
              <span className="bg-white/10 rounded px-3 py-1 font-label-caps text-label-caps text-on-surface border border-white/5">0-10V Dimming</span>
            </div>
          </div>

          {/* Glassmorphic Card 2 */}
          <div className="bg-surface-container-lowest/60 backdrop-blur-[20px] border border-outline-variant/30 hover:border-primary/50 hover:shadow-[0_0_20px_0_rgba(207,188,255,0.2)] p-8 rounded-xl transition-all duration-300 col-span-1 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 blur-[60px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-secondary/20"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">BIM Resources</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Complete Revit families and CAD blocks available for all fixtures.
              </p>
            </div>
            <Link className="text-primary font-label-caps text-label-caps flex items-center hover:text-secondary transition-colors relative z-10" href="/contact">
              Download Library <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Glassmorphic Card 3 */}
          <div className="bg-surface-container-lowest/60 backdrop-blur-[20px] border border-outline-variant/30 hover:border-primary/50 hover:shadow-[0_0_20px_0_rgba(207,188,255,0.2)] p-8 rounded-xl transition-all duration-300 col-span-1 relative overflow-hidden group">
            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>thermostat</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Thermal Management</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant relative z-10">
              Proprietary aerospace-grade heat sinks ensure L90 lifespan exceeding 100,000 hours even in enclosed commercial plenums.
            </p>
          </div>

          {/* Glassmorphic Card 4 */}
          <div className="bg-surface-container-lowest/60 backdrop-blur-[20px] border border-outline-variant/30 hover:border-primary/50 hover:shadow-[0_0_20px_0_rgba(207,188,255,0.2)] p-8 rounded-xl transition-all duration-300 col-span-1 md:col-span-2 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img
                alt="Smart Controls Ecosystem"
                src="/assets/smart_controls.jpg"
                className="w-full h-full object-cover mix-blend-luminosity grayscale opacity-30 group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 transition-all duration-700 group-hover:bg-background/60"></div>
            <div className="relative z-20 flex flex-col justify-center h-full">
              <div className="flex items-center space-x-4 mb-6">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Smart Controls Ecosystem</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Native integration with leading building management systems (BMS). Wireless mesh networking capabilities for rapid deployment in retrofit scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
