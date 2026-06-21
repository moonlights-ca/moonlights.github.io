import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Commercial LED Systems | Moonlights Electrical",
 description: "Professional-grade LED solutions for versatility, durability, and RGB/RGBW brilliance in commercial spaces.",
};

const products = [
 {
 name: "Professional RGB+White Strip",
 desc: "Premium RGB+White LED strips designed for professional installations requiring both color and clean white illumination.",
 img: "/moonlights.github.io/assets/com_rgbw_strip.webp",
 features: [
 "RGB + White Channels",
 "High CRI (>90)",
 "DMX Compatible",
 "Waterproof Coating",
 "Segment Control",
 "Constant Current Driver",
 ],
 specs: [
 { label: "Chip Type", value: "5050 RGBW" },
 { label: "Color Temperature", value: "RGB + 4000K" },
 { label: "LED Density", value: "60LEDs/m" },
 { label: "Wattage", value: "14.4W/m" },
 { label: "Brightness", value: "1200 Lm/m" },
 { label: "Protection", value: "IP66" },
 ],
 perfectFor: "Restaurants, Hotels, Retail Displays, Architectural Facades",
 reverse: false,
 },
 {
 name: "High-Density RGB Strip",
 desc: "Commercial-grade high-density RGB LED strips with seamless color blending for continuous lighting runs.",
 img: "/moonlights.github.io/assets/com_high_density_strip.webp",
 features: [
 "120 LEDs/m Density",
 "Seamless Color Blend",
 "Flexible PCB",
 "Cuttable Every 25mm",
 "3M Adhesive Backing",
 "Long Run Capable",
 ],
 specs: [
 { label: "Chip Type", value: "2835 RGB" },
 { label: "Color Temperature", value: "Full RGB Spectrum" },
 { label: "LED Density", value: "120LEDs/m" },
 { label: "Wattage", value: "19.2W/m" },
 { label: "Brightness", value: "1500 Lm/m" },
 { label: "Protection", value: "IP65" },
 ],
 perfectFor: "Cove Lighting, Entertainment Venues, Architectural Accents, Bars/Clubs",
 reverse: true,
 },
 {
 name: "Ultra-Bright RGB Strip",
 desc: "High-lumen RGB LED strip for outdoor commercial installations and large-scale architectural lighting.",
 img: "/moonlights.github.io/assets/com_ultra_bright_strip.webp",
 features: [
 "Ultra-High Output",
 "Aluminum Channel Compatible",
 "Signal Amplifier Ready",
 "Outdoor Rated",
 "Anti-UV Coating",
 "Thermal Protected",
 ],
 specs: [
 { label: "Chip Type", value: "5050 RGB" },
 { label: "Color Temperature", value: "Full RGB" },
 { label: "LED Density", value: "60LEDs/m" },
 { label: "Wattage", value: "24W/m" },
 { label: "Brightness", value: "2000 Lm/m" },
 { label: "Protection", value: "IP67" },
 ],
 perfectFor: "Building Facades, Stadiums, Exhibition Halls, Outdoor Signage",
 reverse: false,
 },
 {
 name: "Commercial White Strip",
 desc: "High-efficiency commercial-grade white LED strip for professional ambient and task lighting applications.",
 img: "/moonlights.github.io/assets/com_white_strip.webp",
 features: [
 "Tunable White",
 "High Efficiency",
 "Flicker-Free Driver",
 "Long Lifespan",
 "Dimmable (0-10V)",
 "UL/CSA Listed",
 ],
 specs: [
 { label: "Chip Type", value: "2835 SMD" },
 { label: "Color Temperature", value: "2700K-6500K" },
 { label: "LED Density", value: "120LEDs/m" },
 { label: "Wattage", value: "15W/m" },
 { label: "Brightness", value: "1800 Lm/m" },
 { label: "Protection", value: "IP20/IP65" },
 ],
 perfectFor: "Offices, Healthcare Facilities, Retail Stores, Hospitality",
 reverse: true,
 },

 {
 name: "High-Bay LED Warehouse Light",
 desc: "Powerful and efficient high-bay lighting designed for warehouses and large commercial facilities.",
 img: "/moonlights.github.io/assets/com_high_bay_light.webp",
 features: [
 "UFO Style Design",
 "150W-240W Options",
 "0-10V Dimmable",
 "50,000 Hour Lifespan",
 "Surge Protection",
 "Motion Sensor Compatible",
 ],
 specs: [
 { label: "Chip Type", value: "Lumileds SMD3030" },
 { label: "Color Temperature", value: "5000K" },
 { label: "LED Density", value: "High Bay" },
 { label: "Wattage", value: "150W" },
 { label: "Brightness", value: "21,000 Lm" },
 { label: "Protection", value: "IP65" },
 ],
 perfectFor: "Warehouses, Gymnasiums, Manufacturing Facilities, Hangars",
 reverse: false,
 },
 {
 name: "Commercial Troffer Panel",
 desc: "Ultra-slim LED panel lights offering glare-free and uniform illumination for office ceilings.",
 img: "/moonlights.github.io/assets/com_troffer_panel.webp",
 features: [
 "Edge-Lit Technology",
 "Flicker-Free",
 "Selectable CCT (3500K-5000K)",
 "DLC Premium",
 "Ultra-Slim Profile",
 "Grid Ceiling Mount",
 ],
 specs: [
 { label: "Chip Type", value: "2835 SMD" },
 { label: "Color Temperature", value: "Tunable (35K-50K)" },
 { label: "LED Density", value: "Panel Grid" },
 { label: "Wattage", value: "40W" },
 { label: "Brightness", value: "4500 Lm" },
 { label: "Protection", value: "IP20" },
 ],
 perfectFor: "Corporate Offices, Classrooms, Hospitals, Retail Stores",
 reverse: true,
 },
 {
 name: "Architectural Wall Pack",
 desc: "Heavy-duty LED wall packs for exterior building security and perimeter lighting.",
 img: "/moonlights.github.io/assets/com_wall_pack.webp",
 features: [
 "Die-Cast Aluminum Housing",
 "Shatter-Resistant Glass",
 "Photocell Included",
 "Type III Distribution",
 "Dark Sky Compliant",
 "Corrosion Resistant",
 ],
 specs: [
 { label: "Chip Type", value: "Philips SMD" },
 { label: "Color Temperature", value: "4000K" },
 { label: "LED Density", value: "Flood Type" },
 { label: "Wattage", value: "80W" },
 { label: "Brightness", value: "10,500 Lm" },
 { label: "Protection", value: "IP65" },
 ],
 perfectFor: "Building Perimeters, Parking Garages, Loading Docks, Walkways",
 reverse: false,
 },
 {
 name: "LED Parking Lot Shoebox",
 desc: "High-performance area lights for massive outdoor spaces requiring immense illumination.",
 img: "/moonlights.github.io/assets/com_shoebox_light.webp",
 features: [
 "Slipfitter Mount",
 "High Efficacy (140 lm/w)",
 "Type III/IV/V Optics",
 "10kV Surge Protection",
 "Photocell Receptacle",
 "Heavy Duty Bracket",
 ],
 specs: [
 { label: "Chip Type", value: "CREE 3030" },
 { label: "Color Temperature", value: "5000K" },
 { label: "LED Density", value: "Area Light" },
 { label: "Wattage", value: "300W" },
 { label: "Brightness", value: "42,000 Lm" },
 { label: "Protection", value: "IP65" },
 ],
 perfectFor: "Parking Lots, Auto Dealerships, Outdoor Sports, Plazas",
 reverse: true,
 },
];

const techSpecs = [
 { icon: "bolt", title: "High Efficiency", desc: "Our commercial LED strips deliver maximum lumens per watt, reducing energy costs by up to 80%." },
 { icon: "thermostat", title: "Thermal Protection", desc: "Advanced thermal management ensures consistent performance even in high-temperature environments." },
 { icon: "verified_user", title: "Certified Quality", desc: "All products are UL/CSA listed and meet rigorous commercial building code requirements." },
];

export default function CommercialLights() {
 return (
 <main className="flex-grow w-full relative z-10">
 {/* Hero Section */}
 <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
 <div className="absolute inset-0 z-0">
 <Image width={800} height={800}
 alt="Commercial LED Systems"
 className="hero-img w-full h-full object-cover opacity-40 "
 src="/moonlights.github.io/assets/commercial_hero.webp"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
 </div>
 <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop py-20">
 <nav className="flex justify-center text-on-surface-variant font-label-caps text-label-caps gap-2 items-center mb-8 lm-text-white">
 <Link href="/" className="hover:text-primary transition-colors lm-text-white">HOME</Link>
 <span className="material-symbols-outlined text-[14px] lm-text-white">chevron_right</span>
 <Link href="/lighting" className="hover:text-primary transition-colors lm-text-white">LIGHTING</Link>
 <span className="material-symbols-outlined text-[14px] lm-text-white">chevron_right</span>
 <span className="text-primary lm-text-white">COMMERCIAL</span>
 </nav>
 <h1 className="font-display-xl text-display-lg-mobile md:text-display-xl text-white mb-4">
 Commercial{" "}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
 LED Systems
 </span>
 </h1>
 <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto mb-8">
 Professional-grade LED solutions for versatility, durability, and RGB/RGBW brilliance in commercial spaces.
 </p>
 <div className="flex justify-center gap-3 flex-wrap">
 <span className="bg-primary/15 border border-primary/40 rounded-lg px-4 py-1.5 font-label-caps text-label-caps text-primary lm-bg-black lm-text-white lm-border-black">24/7</span>
 <span className="bg-primary/15 border border-primary/40 rounded-lg px-4 py-1.5 font-label-caps text-label-caps text-primary lm-bg-black lm-text-white lm-border-black">IP66</span>
 <span className="bg-primary/15 border border-primary/40 rounded-lg px-4 py-1.5 font-label-caps text-label-caps text-primary lm-bg-black lm-text-white lm-border-black">50W</span>
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
 Explore our professional commercial LED offerings — purpose-designed for demanding commercial and architectural installations.
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
 <Image width={800} height={800}
 alt={product.name}
 className="hero-img w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
 src={product.img}
 />
 </div>
 </div>

 {/* Content */}
 <div className={`flex flex-col gap-6 ${product.reverse ? "md:order-1" : ""}`}>
 <div>
 <h3 className="font-display-lg text-headline-md text-on-surface mb-2">{product.name}</h3>
 <p className="font-body-md text-body-md text-on-surface-variant lm-text-black">{product.desc}</p>
 </div>

 {/* Key Features */}
 <div>
 <h4 className="font-label-caps text-label-caps text-primary tracking-wider mb-3 flex items-center gap-2">
 <span className="material-symbols-outlined text-[16px]">verified</span>
 KEY FEATURES
 </h4>
 <div className="grid grid-cols-2 gap-2">
 {product.features.map((f, i) => (
 <div key={i} className="flex items-center gap-2 text-sm text-on-surface-variant lm-text-black">
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
 <span className="text-on-surface-variant lm-text-black">{s.label}</span>
 <span className="text-on-surface font-mono font-medium lm-text-black">{s.value}</span>
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
 <p className="font-body-md text-body-md text-on-surface-variant lm-text-black">{product.perfectFor}</p>
 </div>
 </div>
 </article>
 ))}
 </div>
 </section>

 {/* Technical Specifications Section */}
 <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl border-t border-outline-variant/20">
 <div className="text-center mb-12">
 <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
 Technical{" "}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
 Specifications
 </span>
 </h2>
 <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
 Built to meet the most demanding commercial lighting standards.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
 {techSpecs.map((spec, i) => (
 <div
 key={i}
 className="glass-card rounded-xl p-8 border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
 >
 <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/20 transition-all"></div>
 <span className="material-symbols-outlined text-primary text-3xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
 {spec.icon}
 </span>
 <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{spec.title}</h3>
 <p className="font-body-md text-body-md text-on-surface-variant lm-text-black">{spec.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* CTA Section */}
 <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-stack-xl">
 <div className="text-center glass-card rounded-2xl p-12 border border-primary/20 relative overflow-hidden">
 <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
 <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
 <h2 className="font-display-lg text-headline-md text-on-surface mb-4 relative z-10">
 Ready to Illuminate Your Commercial Space?
 </h2>
 <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl mx-auto relative z-10 lm-text-black">
 Get a custom lighting plan from our commercial LED specialists.
 </p>
 <div className="flex justify-center gap-4 flex-wrap relative z-10">
 <Link
 href="/contact"
 className="px-8 py-3 rounded-full bg-primary text-on-primary font-label-caps text-label-caps shadow-[0_0_15px_var(--glow-color)] hover:shadow-[0_0_25px_var(--glow-color-hover)] transition-all"
 >
 Get Quote
 </Link>
 <Link
 href="/lighting"
 className="px-8 py-3 rounded-full border border-outline-variant/30 text-on-surface font-label-caps text-label-caps hover:border-primary hover:text-primary transition-all lm-text-black lm-border-black"
 >
 View All Products
 </Link>
 </div>
 </div>
 </section>
 </main>
 );
}
