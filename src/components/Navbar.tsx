"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/wires-and-cables", label: "Wires & Cables" },
  { href: "/transformers", label: "Transformers" },
  { href: "/industrial-parts", label: "Industrial Parts" },
  { href: "/lighting", label: "Lighting" },
  { href: "/tools-and-equipment", label: "Tools & Equipment" },
  { href: "/enclosures-and-power", label: "Distribution & Protection" },
  { href: "/datacom-and-security", label: "Conduit & Fittings" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    const isActive = pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));
    return isActive
      ? "text-primary font-semibold border-b-2 border-primary pb-1 transition-all duration-200"
      : "text-on-surface-variant hover:text-primary transition-all duration-300 font-medium pb-1";
  };

  const getMobileLinkClasses = (path: string) => {
    const isActive = pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));
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

          <div className="flex items-center gap-8">
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className={getLinkClasses("/")}>Home</Link>
              <Link href="/about" className={getLinkClasses("/about")}>About Us</Link>

              <div className="relative group/nav">
                <button className="text-on-surface-variant hover:text-primary transition-all duration-300 font-medium pb-1 flex items-center gap-1">
                  Products
                  <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover/nav:-rotate-180">expand_more</span>
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-surface-container-lowest/95 backdrop-blur-xl border border-outline-variant/30 rounded-2xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                  <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent"></div>
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="px-4 py-3 rounded-xl hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors flex items-center justify-between group/item"
                      >
                        <span className="font-medium">{link.label}</span>
                        <span className="material-symbols-outlined text-[16px] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all">arrow_forward</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/custom" className={getLinkClasses("/custom")}>Custom Moonlights</Link>
            </div>

            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant/30 hover:border-primary/50 text-on-surface-variant hover:text-primary transition-all duration-300"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <span
                  className="material-symbols-outlined text-xl transition-transform duration-500"
                  style={{
                    transform: theme === "dark" ? "rotate(0deg)" : "rotate(360deg)",
                  }}
                >
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
              </button>
              <Link
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps hover:bg-primary/90 transition-all shadow-[0_0_15px_var(--glow-color)] hover:shadow-[0_0_20px_var(--glow-color-hover)]"
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
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-surface-container-lowest border-l border-outline-variant/30 z-50 lg:hidden transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col pt-20 px-6 h-full">
          <div className="flex flex-col space-y-4">
            <Link href="/" className={`${getMobileLinkClasses("/")} text-lg py-2 px-4 rounded-xl transition-all duration-200 hover:bg-surface-container`} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            
            <Link href="/about" className={`${getMobileLinkClasses("/about")} text-lg py-2 px-4 rounded-xl transition-all duration-200 hover:bg-surface-container`} onClick={() => setIsOpen(false)}>
              About Us
            </Link>

            <div>
              <div className="font-label-caps text-label-caps text-on-surface-variant px-4 tracking-widest uppercase mb-1">Products</div>
              <div className="flex flex-col space-y-1 pl-4 border-l-2 border-outline-variant/10 mx-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${getMobileLinkClasses(link.href)} text-lg py-2 px-4 rounded-xl transition-all duration-200 hover:bg-surface-container`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/custom" className={`${getMobileLinkClasses("/custom")} text-lg py-2 px-4 rounded-xl transition-all duration-200 hover:bg-surface-container`} onClick={() => setIsOpen(false)}>
              Custom
            </Link>
          </div>

          <div className="mt-auto pb-8 pt-8">
            <Link
              href="/contact"
              className="flex items-center justify-center w-full py-3 rounded-full bg-primary text-on-primary font-label-caps text-label-caps shadow-[0_0_15px_var(--glow-color)] hover:shadow-[0_0_25px_var(--glow-color-hover)] transition-all"
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

