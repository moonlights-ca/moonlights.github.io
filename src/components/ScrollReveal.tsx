"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive-enhancement scroll reveal. On each route it finds below-the-fold
 * sections (and any `[data-stagger]` container) and fades them in as they enter
 * the viewport. Elements already in view, no-JS visitors, and users who prefer
 * reduced motion are never hidden, so there is no flash of missing content.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fold = window.innerHeight * 0.9;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    // Section-level reveals (only below the fold, so above-the-fold content is untouched).
    // Sections that contain a staggered grid are skipped — the stagger animates them instead.
    document.querySelectorAll<HTMLElement>("main section").forEach((el) => {
      if (el.querySelector("[data-stagger]")) return;
      if (el.getBoundingClientRect().top > fold) {
        el.classList.add("reveal");
        observer.observe(el);
      }
    });

    // Opt-in staggered grids/lists.
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((el) => {
      if (el.getBoundingClientRect().top <= fold) return;
      el.classList.add("reveal-stagger");
      Array.from(el.children).forEach((child, i) => {
        (child as HTMLElement).style.setProperty("--reveal-i", String(i));
      });
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
