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
        
        {/* Chip Types */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[24px]">memory</span>
            Chip Types
          </h2>
          <div className="flex flex-wrap gap-3">
            {SPEC_OPTIONS.chipTypes.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect("chipTypes", opt)}
                className={`px-6 py-2 rounded-full font-body-sm text-body-sm transition-all duration-300 border flex-grow text-center ${
                  specs.chipTypes === opt
                    ? "bg-primary border-primary text-on-primary shadow-[0_0_15px_var(--glow-color)] lm-bg-black lm-text-white lm-border-black"
                    : "bg-surface-container border-outline-variant/20 text-on-surface hover:border-primary/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Color Temperature */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-[24px]">thermometer</span>
            Color Temperature
          </h2>
          <div className="flex flex-wrap gap-3">
            {SPEC_OPTIONS.cct.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect("cct", opt)}
                className={`px-6 py-2 rounded-full font-body-sm text-body-sm transition-all duration-300 border flex-grow text-center ${
                  specs.cct === opt
                    ? "bg-secondary border-secondary text-on-primary shadow-[0_0_15px_var(--glow-color-secondary)] lm-bg-black lm-text-white lm-border-black"
                    : "bg-surface-container border-outline-variant/20 text-on-surface hover:border-secondary/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* LED Density */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[24px]">flare</span>
            LED Density
          </h2>
          <div className="flex flex-wrap gap-3">
            {SPEC_OPTIONS.density.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect("density", opt)}
                className={`px-6 py-2 rounded-full font-body-sm text-body-sm transition-all duration-300 border flex-grow text-center ${
                  specs.density === opt
                    ? "bg-primary border-primary text-on-primary shadow-[0_0_15px_var(--glow-color)] lm-bg-black lm-text-white lm-border-black"
                    : "bg-surface-container border-outline-variant/20 text-on-surface hover:border-primary/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Protection Rating */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-[24px]">shield</span>
            Protection Rating
          </h2>
          <div className="flex flex-wrap gap-3">
            {SPEC_OPTIONS.protection.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect("protection", opt)}
                className={`px-6 py-2 rounded-full font-body-sm text-body-sm transition-all duration-300 border flex-grow text-center ${
                  specs.protection === opt
                    ? "bg-secondary border-secondary text-on-primary shadow-[0_0_15px_var(--glow-color-secondary)] lm-bg-black lm-text-white lm-border-black"
                    : "bg-surface-container border-outline-variant/20 text-on-surface hover:border-secondary/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* PCB Width */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[24px]">straighten</span>
            PCB Width
          </h2>
          <div className="flex flex-wrap gap-3">
            {SPEC_OPTIONS.pcb.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect("pcb", opt)}
                className={`px-6 py-2 rounded-full font-body-sm text-body-sm transition-all duration-300 border flex-grow text-center ${
                  specs.pcb === opt
                    ? "bg-primary border-primary text-on-primary shadow-[0_0_15px_var(--glow-color)] lm-bg-black lm-text-white lm-border-black"
                    : "bg-surface-container border-outline-variant/20 text-on-surface hover:border-primary/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Brightness */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-[24px]">lightbulb</span>
            Brightness
          </h2>
          <div className="flex flex-wrap gap-3">
            {SPEC_OPTIONS.brightness.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect("brightness", opt)}
                className={`px-6 py-2 rounded-full font-body-sm text-body-sm transition-all duration-300 border flex-grow text-center ${
                  specs.brightness === opt
                    ? "bg-secondary border-secondary text-on-primary shadow-[0_0_15px_var(--glow-color-secondary)] lm-bg-black lm-text-white lm-border-black"
                    : "bg-surface-container border-outline-variant/20 text-on-surface hover:border-secondary/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

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
                    <label htmlFor="projectType" className="font-label-md text-label-md text-on-surface-variant lm-text-black">Project Type *</label>
                    <select
                      id="projectType"
                      required
                      className="bg-surface-container rounded-xl px-4 py-3 text-on-surface border border-outline-variant/20 focus:border-primary focus:outline-none transition-colors appearance-none lm-bg-white lm-border-black/20"
                    >
                      <option value="" disabled selected>Select project type</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="residential">Residential</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

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

              <div className="flex justify-center mt-6">
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
