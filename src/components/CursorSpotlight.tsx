"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Easing for smooth follow (lerp)
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
        // Fade in when mouse starts moving
        if (targetX !== 0 && targetY !== 0 && spotlightRef.current.style.opacity === "0") {
           spotlightRef.current.style.opacity = "1";
        }
      }
      
      // Also expose exact mouse variables for other elements to use (like cards)
      document.documentElement.style.setProperty('--mouse-x', `${targetX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${targetY}px`);

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={spotlightRef}
      className="spotlight-effect pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full z-[-1] mix-blend-screen opacity-0 transition-opacity duration-1000 hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(162, 114, 255, 0.08) 0%, rgba(162, 114, 255, 0) 60%)',
        willChange: 'transform'
      }}
      aria-hidden="true"
    />
  );
}
