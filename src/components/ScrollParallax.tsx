"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollParallaxProps {
  children: React.ReactNode;
  speed?: number; // e.g., 0.5 moves at half scroll speed
  className?: string;
  zIndex?: number;
}

export default function ScrollParallax({ 
  children, 
  speed = 0.5, 
  className = "",
  zIndex = 0 
}: ScrollParallaxProps) {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (rafRef.current) return;
      
      rafRef.current = requestAnimationFrame(() => {
        // Only apply parallax if we're near the top of the page (optimization)
        if (window.scrollY < window.innerHeight) {
          setOffset(window.scrollY * speed);
        }
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return (
    <div 
      className={`absolute inset-0 will-change-transform ${className}`}
      style={{ 
        transform: `translate3d(0, ${offset}px, 0)`,
        zIndex
      }}
    >
      {children}
    </div>
  );
}
