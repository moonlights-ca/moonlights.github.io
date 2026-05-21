"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/wires-and-cables", label: "Wires & Cables" },
  { href: "/transformers", label: "Transformers" },
  { href: "/industrial-parts", label: "Industrial Parts" },
  { href: "/lighting", label: "Lighting" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path || pathname.startsWith(`${path}/`);
    return isActive
      ? "text-primary font-semibold border-b-2 border-primary pb-1 transition-all duration-200"
      : "text-on-surface-variant hover:text-primary transition-all duration-300";
  };

  const getMobileLinkClasses = (path: string) => {
    const isActive = pathname === path || pathname.startsWith(`${path}/`);
    return isActive
      ? "text-primary font-semibold"
      : "text-on-surface hover:text-primary";
  };

  return (
    <>
      <nav className="bg-surface/95 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 w-full">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full">
          <Link
            className="font-display-lg text-headline-md font-bold tracking-tighter text-on-surface transition-transform duration-200"
            href="/"
          >
            Moonlights.ca
          </Link>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} className={getLinkClasses(link.href)} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(207,188,255,0.2)] hover:shadow-[0_0_20px_rgba(207,188,255,0.4)]"
              href="/contact"
            >
              Request a Quote
            </Link>
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden flex items-center justify-center text-on-surface p-2 relative z-[60]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <span className="material-symbols-outlined text-2xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-surface-container-lowest border-l border-outline-variant/30 z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 px-6 h-full">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${getMobileLinkClasses(link.href)} text-lg py-3 px-4 rounded-xl transition-all duration-200 hover:bg-surface-container`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-outline-variant/20 mt-6 pt-6 space-y-3">
            <Link
              href="/residential-lights"
              className={`${getMobileLinkClasses("/residential-lights")} text-sm py-2 px-4 rounded-lg block transition-all hover:bg-surface-container`}
              onClick={() => setIsOpen(false)}
            >
              Residential LED
            </Link>
            <Link
              href="/commercial-lights"
              className={`${getMobileLinkClasses("/commercial-lights")} text-sm py-2 px-4 rounded-lg block transition-all hover:bg-surface-container`}
              onClick={() => setIsOpen(false)}
            >
              Commercial LED
            </Link>
          </div>

          <div className="mt-auto pb-8">
            <Link
              href="/contact"
              className="flex items-center justify-center w-full py-3 rounded-full bg-primary text-on-primary font-label-caps text-label-caps shadow-[0_0_15px_rgba(207,188,255,0.2)] hover:shadow-[0_0_25px_rgba(207,188,255,0.4)] transition-all"
              onClick={() => setIsOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
