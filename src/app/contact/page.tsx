import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Moonlights Electrical",
  description: "Connect with our engineering experts for bespoke technical support, product inquiries, and custom industrial solutions.",
};

export default function Contact() {
  return (
    <main className="flex-grow w-full">
      <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-xl pb-stack-md text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <h1 className="font-display-xl text-display-xl text-on-surface mb-6 relative z-10">Get in Touch</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto relative z-10">
          Connect with our engineering experts for bespoke technical support, product inquiries, and custom industrial solutions.
        </p>
      </header>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-stack-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <section className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 hover:border-primary/50 transition-colors duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-8">Contact Information</h2>

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary text-[20px]">apartment</span>
                  </div>
                  <div>
                    <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Company</div>
                    <div className="font-body-md text-body-md text-on-surface">Moonlights Electrical Supply</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                  </div>
                  <div>
                    <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Headquarters</div>
                    <div className="font-body-md text-body-md text-on-surface">123 Industrial Pkwy<br />Toronto, ON M1X 2Y3</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                  </div>
                  <div>
                    <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Direct Email</div>
                    <a className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors" href="mailto:sales@moonlights.ca">sales@moonlights.ca</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary text-[20px]">phone_in_talk</span>
                  </div>
                  <div>
                    <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Support Line</div>
                    <a className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors" href="tel:18005550199">1-800-555-0199</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-2 h-[300px] relative overflow-hidden group">
              <img
                alt="Map location"
                className="w-full h-full object-cover rounded-lg opacity-60 filter grayscale contrast-125 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                src="/assets/map_location.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent pointer-events-none rounded-xl"></div>
            </div>
          </section>

          <section className="lg:col-span-7">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 lg:p-12 relative h-full">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-8">Submit Inquiry</h2>
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Full Name *</label>
                    <input className="bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors outline-none" placeholder="Jane Doe" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Email Address *</label>
                    <input className="bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors outline-none" placeholder="jane@company.com" type="email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Phone Number (Optional)</label>
                    <input className="bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors outline-none" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Company (Optional)</label>
                    <input className="bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors outline-none" placeholder="Acme Corp" type="text" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Product Interest</label>
                  <select defaultValue="" className="bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface transition-colors appearance-none cursor-pointer outline-none">
                    <option className="bg-surface-dim text-on-surface" disabled value="">Select a category...</option>
                    <option className="bg-surface-dim text-on-surface" value="wires">Wires &amp; Cables</option>
                    <option className="bg-surface-dim text-on-surface" value="transformers">Power Transformers</option>
                    <option className="bg-surface-dim text-on-surface" value="industrial">Industrial Parts</option>
                    <option className="bg-surface-dim text-on-surface" value="lighting">Lighting Solutions</option>
                    <option className="bg-surface-dim text-on-surface" value="custom">Custom Assemblies</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Message *</label>
                  <textarea className="bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors resize-none outline-none" placeholder="Provide details about your technical requirements..." rows={4}></textarea>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-outline">* Required fields</span>
                  <button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-3 rounded-full shadow-[0_0_20px_rgba(207,188,255,0.2)] hover:shadow-[0_0_30px_rgba(207,188,255,0.4)] transition-all duration-300 flex items-center gap-2" type="button">
                    Send Inquiry
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
