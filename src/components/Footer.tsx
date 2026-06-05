import Link from "next/link";

const productLinks = [
  { href: "/wires-and-cables", label: "Wires & Cables" },
  { href: "/transformers", label: "Transformers" },
  { href: "/industrial-parts", label: "Industrial Parts" },
  { href: "/lighting", label: "Lighting" },
  { href: "/residential-lights", label: "Residential LED" },
  { href: "/commercial-lights", label: "Commercial LED" },
];

const categoryLinks = [
  { href: "/industrial-parts/electrical-connectors", label: "Electrical Connectors" },
  { href: "/industrial-parts/cable-accessories", label: "Cable Accessories" },
  { href: "/industrial-parts/terminals-and-lugs", label: "Terminals & Lugs" },
  { href: "/industrial-parts/switches", label: "Switches" },
  { href: "/industrial-parts/control-components", label: "Control Components" },
];

const companyLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/contact", label: "Request a Quote" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full z-10 mt-auto" role="contentinfo">
      <div className="px-margin-mobile md:px-margin-desktop py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="Moonlights.ca Home">
              <span className="font-display-lg text-headline-md font-bold tracking-tighter text-on-surface">
                Moonlights.ca
              </span>
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-xs">
              Full-scale North American electrical supplier. Precision-engineered wires, cables, transformers, and industrial components.
            </p>
            <div className="space-y-2 text-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                <span>1214 Birchview Dr. Unit, ON L1T 4C5</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">call</span>
                <a href="tel:+16477864848" className="hover:text-primary transition-colors">+1 (647) 786-4848</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">mail</span>
                <a href="mailto:sales@moonlights.ca" className="hover:text-primary transition-colors">sales@moonlights.ca</a>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <nav aria-label="Products">
            <h3 className="font-label-caps text-label-caps text-on-surface tracking-wider mb-4 uppercase">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-on-surface-variant text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Categories Column */}
          <nav aria-label="Industrial Parts Categories">
            <h3 className="font-label-caps text-label-caps text-on-surface tracking-wider mb-4 uppercase">Categories</h3>
            <ul className="space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-on-surface-variant text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Column */}
          <div>
            <h3 className="font-label-caps text-label-caps text-on-surface tracking-wider mb-4 uppercase">Company</h3>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-on-surface-variant text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-caps text-label-caps text-sm shadow-[0_0_15px_var(--glow-color)] hover:shadow-[0_0_25px_var(--glow-color-hover)] transition-all"
            >
              Get a Quote
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-outline font-label-caps text-label-caps text-center md:text-left">
            © {new Date().getFullYear()} Moonlights.ca — All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-label-caps text-label-caps">
            <Link href="#" className="text-outline hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-outline hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="text-outline hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
