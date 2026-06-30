"use client";

import React, { useState } from "react";

const SPEC_OPTIONS = {
  chipTypes: ["2835", "3528", "5050", "ARGB", "COB"],
  cct: ["2700K", "3000K", "4000K", "6500K", "RGB", "RGB CCT", "RGBW"],
  density: ["30 LEDs", "60 LEDs", "120 LEDs", "140 LEDs", "168 LEDs", "200 LEDs"],
  protection: ["IP20", "IP65", "IP67", "IP68"],
  pcb: ["4mm", "5mm", "8mm", "10mm", "12mm", "14mm", "16mm"],
  brightness: ["500 LM/m", "750 LM/m", "1000 LM/m", "1500 LM/m", "2000 LM/m", "3000 LM/m"],
};

const ACCENT_STYLES = {
  primary: {
    icon: "text-primary",
    active:
      "bg-primary border-primary text-on-primary shadow-[0_0_15px_var(--glow-color)] lm-bg-black lm-text-white lm-border-black",
    inactiveHover: "hover:border-primary/50",
  },
  secondary: {
    icon: "text-secondary",
    active:
      "bg-secondary border-secondary text-on-primary shadow-[0_0_15px_var(--glow-color-secondary)] lm-bg-black lm-text-white lm-border-black",
    inactiveHover: "hover:border-secondary/50",
  },
} as const;

const SPEC_SECTIONS: ReadonlyArray<{
  key: keyof typeof SPEC_OPTIONS;
  title: string;
  icon: string;
  accent: keyof typeof ACCENT_STYLES;
}> = [
  { key: "chipTypes", title: "Chip Types", icon: "memory", accent: "primary" },
  { key: "cct", title: "Color Temperature", icon: "thermometer", accent: "secondary" },
  { key: "density", title: "LED Density", icon: "flare", accent: "primary" },
  { key: "protection", title: "Protection Rating", icon: "shield", accent: "secondary" },
  { key: "pcb", title: "PCB Width", icon: "straighten", accent: "primary" },
  { key: "brightness", title: "Brightness", icon: "lightbulb", accent: "secondary" },
];

export default function CustomConfigurator() {
  const [specs, setSpecs] = useState({
    chipTypes: "2835",
    cct: "2700K",
    density: "30 LEDs",
    protection: "IP20",
    pcb: "4mm",
    brightness: "500 LM/m",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (category: keyof typeof specs, value: string) => {
    setSpecs((prev) => ({ ...prev, [category]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const specSummaryString = `Chip Type: ${specs.chipTypes}\nColor Temperature: ${specs.cct}\nLED Density: ${specs.density}\nProtection: ${specs.protection}\nPCB Width: ${specs.pcb}\nBrightness: ${specs.brightness}`;

  return (
    <div className="flex flex-col gap-24 mt-8">
      {/* Configurator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {SPEC_SECTIONS.map((section) => {
          const accent = ACCENT_STYLES[section.accent];
          return (
            <div key={section.key} className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
                <span className={`material-symbols-outlined ${accent.icon} text-[24px]`}>{section.icon}</span>
                {section.title}
              </h2>
              <div className="flex flex-wrap gap-3">
                {SPEC_OPTIONS[section.key].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(section.key, opt)}
                    className={`px-6 py-2 rounded-full font-body-sm text-body-sm transition-all duration-300 border flex-grow text-center ${
                      specs[section.key] === opt
                        ? accent.active
                        : `bg-surface-container border-outline-variant/20 text-on-surface ${accent.inactiveHover}`
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          );
        })}

      </div>

      {/* Quote Form Section */}
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
            Request Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Custom</span> Quote
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto lm-text-black">
            Complete the form below with your specifications and project details to receive a personalized quote.
          </p>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 lg:p-12 shadow-xl lm-bg-white">
          {submitted ? (
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-10 text-center">
              <span className="material-symbols-outlined text-primary text-6xl mb-6">check_circle</span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Request Received!</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md mx-auto lm-text-black">
                Our engineering team will review your custom configuration and contact you shortly with a tailored quote.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 rounded-full bg-surface-container text-on-surface border border-outline-variant/30 hover:border-primary/50 transition-colors font-label-caps lm-border-black/20"
              >
                Configure Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <input type="hidden" name="specifications" value={specSummaryString} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="flex flex-col gap-5">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant/20 pb-3 mb-2">Contact Information</h3>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-label-md text-label-md text-on-surface-variant lm-text-black">Name *</label>
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder="Your full name"
                      className="bg-surface-container rounded-xl px-4 py-3 text-on-surface border border-outline-variant/20 focus:border-primary focus:outline-none transition-colors lm-bg-white lm-border-black/20"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-label-md text-label-md text-on-surface-variant lm-text-black">Email *</label>
                    <input
                      required
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="bg-surface-container rounded-xl px-4 py-3 text-on-surface border border-outline-variant/20 focus:border-primary focus:outline-none transition-colors lm-bg-white lm-border-black/20"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-label-md text-label-md text-on-surface-variant lm-text-black">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      className="bg-surface-container rounded-xl px-4 py-3 text-on-surface border border-outline-variant/20 focus:border-primary focus:outline-none transition-colors lm-bg-white lm-border-black/20"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="font-label-md text-label-md text-on-surface-variant lm-text-black">Company</label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Company name (optional)"
                      className="bg-surface-container rounded-xl px-4 py-3 text-on-surface border border-outline-variant/20 focus:border-primary focus:outline-none transition-colors lm-bg-white lm-border-black/20"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-5">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant/20 pb-3 mb-2">Project Details</h3>
                  


                  <div className="flex flex-col gap-2">
                    <label htmlFor="quantity" className="font-label-md text-label-md text-on-surface-variant lm-text-black">Estimated Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      placeholder="e.g. 100 meters, 50 units"
                      className="bg-surface-container rounded-xl px-4 py-3 text-on-surface border border-outline-variant/20 focus:border-primary focus:outline-none transition-colors lm-bg-white lm-border-black/20"
                    />
                  </div>

                  <div className="flex flex-col gap-2 flex-grow">
                    <label htmlFor="requirements" className="font-label-md text-label-md text-on-surface-variant lm-text-black">Additional Requirements</label>
                    <textarea
                      id="requirements"
                      placeholder="Please describe your project requirements, timeline, or any special considerations..."
                      className="bg-surface-container rounded-xl px-4 py-3 text-on-surface border border-outline-variant/20 focus:border-primary focus:outline-none transition-colors resize-none flex-grow lm-bg-white lm-border-black/20"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-surface-container/30 border border-primary/20 rounded-xl p-6 mt-2">
                <h3 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">list_alt</span>
                  Selected Specifications
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-on-surface-variant lm-text-black">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs opacity-70 uppercase tracking-wider">Chip Type</span>
                    <strong className="text-on-surface lm-text-black font-medium">{specs.chipTypes}</strong>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs opacity-70 uppercase tracking-wider">Color Temp</span>
                    <strong className="text-on-surface lm-text-black font-medium">{specs.cct}</strong>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs opacity-70 uppercase tracking-wider">Density</span>
                    <strong className="text-on-surface lm-text-black font-medium">{specs.density}</strong>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs opacity-70 uppercase tracking-wider">Protection</span>
                    <strong className="text-on-surface lm-text-black font-medium">{specs.protection}</strong>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs opacity-70 uppercase tracking-wider">PCB Width</span>
                    <strong className="text-on-surface lm-text-black font-medium">{specs.pcb}</strong>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs opacity-70 uppercase tracking-wider">Brightness</span>
                    <strong className="text-on-surface lm-text-black font-medium">{specs.brightness}</strong>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-4 rounded-full bg-primary text-on-primary font-label-caps text-label-caps shadow-[0_0_15px_var(--glow-color)] hover:shadow-[0_0_25px_var(--glow-color-hover)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed lm-bg-black lm-text-white w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                      Processing...
                    </>
                  ) : (
                    <>
                      Request Custom Quote
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
