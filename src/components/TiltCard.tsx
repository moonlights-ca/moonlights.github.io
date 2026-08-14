"use client";

import React, { useRef, MouseEvent, useCallback } from "react";
import Link from "next/link";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function TiltCard({ children, className = "", href }: TiltCardProps) {
  const cardRef = useRef<HTMLAnchorElement & HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Convert to percentage (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // Max rotation in degrees
    const maxRotation = 10;
    
    const rotateY = xPct * maxRotation;
    const rotateX = -yPct * maxRotation;
    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;

    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }

    requestRef.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        // Only kill transform's transition for instant tracking; preserve box-shadow and border-color
        cardRef.current.style.transition = "transform 0s, box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease";
      }
      if (glareRef.current) {
        glareRef.current.style.opacity = "0.15";
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`;
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    // Set the return transition synchronously NOW so the browser applies it before the transform changes in the rAF
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.5s ease-out, box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease";
    }
    requestRef.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      }
      if (glareRef.current) {
        glareRef.current.style.opacity = "0";
      }
    });
  }, []);

  const content = (
    <>
      {children}
      {/* Glare effect layer */}
      <div 
        ref={glareRef}
        className="pointer-events-none absolute inset-0 z-50 transition-opacity duration-500"
        style={{
          opacity: 0,
          mixBlendMode: "overlay"
        }}
        aria-hidden="true"
      />
    </>
  );

  const baseClasses = `relative block transform-gpu will-change-transform [transform-style:preserve-3d] ${className}`;

  if (href) {
    return (
      <Link 
        href={href}
        ref={cardRef as React.RefObject<HTMLAnchorElement>}
        className={baseClasses}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: "transform 0.5s ease-out, box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease" }}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className={baseClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
        style={{ transition: "transform 0.5s ease-out, box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease" }}
    >
      {content}
    </div>
  );
}
