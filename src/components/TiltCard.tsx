"use client";

import React, { useRef, useState, MouseEvent } from "react";
import Link from "next/link";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function TiltCard({ children, className = "", href }: TiltCardProps) {
  const cardRef = useRef<HTMLAnchorElement | HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
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
    
    // Y-axis rotation depends on X position (moving right rotates right)
    // X-axis rotation depends on Y position (moving down rotates down/back)
    const rotateY = xPct * maxRotation;
    const rotateX = -yPct * maxRotation;

    setRotation({ x: rotateX, y: rotateY });
    
    // Glare follows mouse but inversely mapped to rotation
    setGlarePosition({ 
      x: (mouseX / width) * 100, 
      y: (mouseY / height) * 100,
      opacity: 0.15
    });
  };

  const handleMouseLeave = () => {
    // Reset to flat state
    setRotation({ x: 0, y: 0 });
    setGlarePosition({ ...glarePosition, opacity: 0 });
  };

  // The base transform applied to the card
  const transformStyle = {
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
    transition: "transform 0.1s ease-out",
  };

  // Return to idle state transition
  const idleTransition = {
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s ease-out",
  };

  const isHovered = glarePosition.opacity > 0;
  const currentStyle = isHovered ? transformStyle : idleTransition;

  const content = (
    <>
      {children}
      {/* Glare effect layer */}
      <div 
        className="pointer-events-none absolute inset-0 z-50 transition-opacity duration-300"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
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
        style={currentStyle}
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
      style={currentStyle}
    >
      {content}
    </div>
  );
}
