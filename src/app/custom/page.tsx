import type { Metadata } from "next";
import CustomConfigurator from "@/components/CustomConfigurator";

export const metadata: Metadata = {
  title: "Custom LED Configurator",
  description: "Select your preferred specifications to create a custom Moonlights LED solution tailored perfectly to your project needs.",
  alternates: { canonical: "/custom/" },
};

export default function CustomPage() {
  return (
    <main className="flex-grow w-full">
      <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-xl pb-stack-md text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <h1 className="font-display-xl text-display-xl text-on-surface mb-6 relative z-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Custom
          </span>{" "}
          moonlights
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto relative z-10 mb-8">
          Design your perfect LED lighting solution with our custom specification builder.
        </p>

        <div className="flex justify-center gap-12 font-label-caps text-label-caps text-on-surface-variant relative z-10">
          <div className="flex flex-col items-center">
            <span className="text-primary text-xl font-bold mb-1">∞</span>
            <span className="text-xs tracking-widest uppercase">Unlimited Options</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-secondary text-xl font-bold mb-1">24h</span>
            <span className="text-xs tracking-widest uppercase">Quote Response</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-primary text-xl font-bold mb-1">100%</span>
            <span className="text-xs tracking-widest uppercase">Custom Made</span>
          </div>
        </div>
      </header>
      
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-stack-xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Perfect</span> Solution
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto lm-text-black">
            Select your preferred specifications to create a custom moonlights LED solution tailored to your needs.
          </p>
        </div>
        <CustomConfigurator />
      </section>
    </main>
  );
}
