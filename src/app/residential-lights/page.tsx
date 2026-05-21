import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential LED Solutions | Moonlights Electrical",
  description: "Transform your home with intelligent LED lighting systems designed for safety, security, and style.",
};

const products = [
  {
    name: "Home Lighting Strips",
    desc: "Motion-activated LED strips perfect for home perimeters, driveways, and walkways.",
    img: "/assets/residential_hero.jpg",
    features: [
      "Motion Detection",
      "Energy Efficient",
      "Easy Installation",
      "Weather Resistant",
      "Dusk-to-Dawn Sensor",
      "Low Maintenance",
      "Color Changeable",
      "App Controlled",
    ],
    specs: [
      { label: "Chip Type", value: "2835 SMD" },
      { label: "Color Temperature", value: "3000K-6500K" },
      { label: "LED Density", value: "60LEDs/m" },
      { label: "Brightness", value: "1000 Lm/m" },
      { label: "Protection", value: "IP65" },
    ],
    perfectFor: "Driveways, Garden Paths, Entrance Gates, Patio/Deck Zones",
    reverse: false,
  },
  {
    name: "Garden Lighting",
    desc: "Decorative LED solutions for landscaping and outdoor entertainment areas.",
    img: "/assets/residential_hero.jpg",
    features: [
      "Color Changing RGB",
      "Remote Controlled",
      "Solar Powered",
      "Weatherproof",
      "App Control",
      "Timer Function",
    ],
    specs: [
      { label: "Chip Type", value: "5050 RGB" },
      { label: "Color Temperature", value: "RGB + Warm White" },
      { label: "LED Density", value: "60LEDs/m" },
      { label: "Brightness", value: "700 Lm/m" },
      { label: "Protection", value: "IP65" },
    ],
    perfectFor: "Gardens, Bird Baths, Wall Lighting, Landscape Features",
    reverse: true,
  },
  {
    name: "Pathway Safety Lights",
    desc: "Low-profile LED strips for safe navigation along walkways and stairs.",
    img: "/assets/residential_hero.jpg",
    features: [
      "Non-Slip Design",
      "Dusk-to-Dawn Sensor",
      "Recessed Option",
      "Warm White Tone",
      "Anti-Glare Surface",
      "Long-Life LED",
    ],
    specs: [
      { label: "Chip Type", value: "3528 SMD" },
      { label: "Color Temperature", value: "4000K" },
      { label: "LED Density", value: "120LEDs/m" },
      { label: "Brightness", value: "900 Lm/m" },
      { label: "Protection", value: "IP66" },
    ],
    perfectFor: "Walkways, Stairs, Dockings, Entrance Strips",
    reverse: false,
  },
];

export default function ResidentialLights() {
  return (
    <main className="flex-grow w-full relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Residential LED Lighting"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            src="/assets/residential_hero.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop py-20">
          <nav className="flex justify-center text-on-surface-variant font-label-caps text-label-caps gap-2 items-center mb-8">
            <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link href="/lighting" className="hover:text-primary transition-colors">LIGHTING</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary">RESIDENTIAL</span>
          </nav>
          <h1 className="font-display-xl text-display-lg-mobile md:text-display-xl text-on-surface mb-4">
            Residential{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              LED Solutions
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            Transform your home with intelligent LED lighting systems designed for safety, security, and style.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="bg-primary/15 border border-primary/40 rounded-lg px-4 py-1.5 font-label-caps text-label-caps text-primary">Smart</span>
            <span className="bg-primary/15 border border-primary/40 rounded-lg px-4 py-1.5 font-label-caps text-label-caps text-primary">IP65</span>
            <span className="bg-primary/15 border border-primary/40 rounded-lg px-4 py-1.5 font-label-caps text-label-caps text-primary">Energy</span>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
            Product{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Showcase
            </span>
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Explore our comprehensive range of residential LED lighting solutions designed for home applications.
          </p>
        </div>

        <div className="space-y-20">
          {products.map((product, idx) => (
            <article
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center border-t border-outline-variant/20 pt-12"
            >
              {/* Image */}
              <div className={`relative group overflow-hidden rounded-xl ${product.reverse ? "md:order-2" : ""}`}>
                <div className="aspect-[4/3] bg-surface-container-low border border-outline-variant/30 rounded-xl overflow-hidden">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    src={product.img}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col gap-6 ${product.reverse ? "md:order-1" : ""}`}>
                <div>
                  <h3 className="font-display-lg text-headline-md text-on-surface mb-2">{product.name}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{product.desc}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-label-caps text-label-caps text-primary tracking-wider mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    KEY FEATURES
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="glass-card rounded-xl p-5">
                  <h4 className="font-label-caps text-label-caps text-on-surface tracking-wider mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">fact_check</span>
                    SPECIFICATIONS
                  </h4>
                  <div className="space-y-2">
                    {product.specs.map((s, i) => (
                      <div key={i} className="flex justify-between text-sm border-b border-outline-variant/10 pb-2 last:border-0 last:pb-0">
                        <span className="text-on-surface-variant">{s.label}</span>
                        <span className="text-on-surface font-mono font-medium">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Perfect For */}
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface tracking-wider mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                    PERFECT FOR
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{product.perfectFor}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-stack-xl">
        <div className="text-center glass-card rounded-2xl p-12 border border-primary/20 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="font-display-lg text-headline-md text-on-surface mb-4 relative z-10">
            Ready to brighten your home?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl mx-auto relative z-10">
            Contact our team for a personalized LED consultation and transform your home with smart LED lighting.
          </p>
          <div className="flex justify-center gap-4 flex-wrap relative z-10">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-primary text-on-primary font-label-caps text-label-caps shadow-[0_0_15px_rgba(207,188,255,0.2)] hover:shadow-[0_0_25px_rgba(207,188,255,0.4)] transition-all"
            >
              Get Quote
            </Link>
            <Link
              href="/lighting"
              className="px-8 py-3 rounded-full border border-outline-variant/30 text-on-surface font-label-caps text-label-caps hover:border-primary hover:text-primary transition-all"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
