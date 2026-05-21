export interface IndustrialProduct {
  slug: string;
  name: string;
  img: string;
  spec: string;
  category: string;
}

export interface IndustrialCategory {
  slug: string;
  name: string;
  img: string;
  desc: string;
  products: IndustrialProduct[];
}

export const industrialCategories: IndustrialCategory[] = [
  {
    slug: "electrical-connectors",
    name: "Electrical Connectors",
    img: "/assets/industrial_connectors.jpg",
    desc: "Heavy-duty multipin and circular connectors designed for secure data and power transmission in harsh industrial settings. Features IP68 ratings and vibration resistance.",
    products: [
      { slug: "nylon-cable-gland", name: "Nylon Cable Gland", img: "/assets/industrial_connectors.jpg", spec: "IP68 rated, PG7–PG48 thread sizes, 3–32mm cable range", category: "Electrical Connectors" },
      { slug: "metallic-cable-gland", name: "Metallic Cable Gland", img: "/assets/industrial_connectors.jpg", spec: "Nickel-plated brass, EMC shielding, IP68, M12–M63 metric threads", category: "Electrical Connectors" },
      { slug: "circular-connector-m12", name: "M12 Circular Connector", img: "/assets/industrial_connectors.jpg", spec: "4/5/8-pin, A/B/D coded, IP67, 250V/4A rated", category: "Electrical Connectors" },
      { slug: "heavy-duty-rectangular-connector", name: "Heavy-Duty Rectangular Connector", img: "/assets/industrial_connectors.jpg", spec: "6–64 pin inserts, 500V/16A, IP65, modular frame system", category: "Electrical Connectors" },
      { slug: "pin-sleeve-connector-30a", name: "Pin & Sleeve Connector 30A", img: "/assets/industrial_connectors.jpg", spec: "IEC 60309, 30A/250V, watertight IP67, 3/4/5 wire configurations", category: "Electrical Connectors" },
      { slug: "insulation-displacement-connector", name: "Insulation Displacement Connector", img: "/assets/industrial_connectors.jpg", spec: "Inline tap splice, 12–10 AWG, 600V, moisture-sealed gel-filled", category: "Electrical Connectors" },
    ],
  },
  {
    slug: "cable-accessories",
    name: "Cable Accessories",
    img: "/assets/industrial_accessories.jpg",
    desc: "Strain relief glands, protective conduits, and heavy-duty mounting hardware to ensure cable integrity.",
    products: [
      { slug: "heat-shrink-tubing", name: "Heat Shrink Tubing", img: "/assets/industrial_accessories.jpg", spec: "2:1 and 3:1 shrink ratio, 600V, polyolefin, adhesive-lined options", category: "Cable Accessories" },
      { slug: "cable-tie-nylon-66", name: "Cable Tie Nylon 6/6", img: "/assets/industrial_accessories.jpg", spec: "UV-resistant, 18–175 lb tensile, 4\"–36\" lengths, UL Listed", category: "Cable Accessories" },
      { slug: "spiral-wrap-tubing", name: "Spiral Wrap Tubing", img: "/assets/industrial_accessories.jpg", spec: "Polyethylene, 1/4\"–2\" diameter, -60°C to 80°C, flame retardant", category: "Cable Accessories" },
      { slug: "cord-grip-strain-relief", name: "Cord Grip / Strain Relief", img: "/assets/industrial_accessories.jpg", spec: "Liquid-tight, 1/2\"–2\" NPT, nylon/aluminum, 0.12\"–1.85\" cable OD", category: "Cable Accessories" },
      { slug: "wire-duct-slotted", name: "Slotted Wire Duct", img: "/assets/industrial_accessories.jpg", spec: "PVC, 1\"×1\" to 4\"×4\", UL94 V-0 flame rating, snap-on cover", category: "Cable Accessories" },
      { slug: "split-loom-tubing", name: "Split Loom Tubing", img: "/assets/industrial_accessories.jpg", spec: "Corrugated polyethylene, 1/4\"–2\", -40°C to 105°C, easy retrofit", category: "Cable Accessories" },
    ],
  },
  {
    slug: "terminals-and-lugs",
    name: "Terminals & Lugs",
    img: "/assets/industrial_terminals.jpg",
    desc: "Compression and mechanical lugs engineered for optimal conductivity and secure termination of large-gauge wire.",
    products: [
      { slug: "copper-compression-lug", name: "Copper Compression Lug", img: "/assets/industrial_terminals.jpg", spec: "Tin-plated copper, 8 AWG–750 kcmil, 1-hole or 2-hole, UL Listed", category: "Terminals & Lugs" },
      { slug: "vinyl-insulated-ring-terminal", name: "Vinyl Insulated Ring Terminal", img: "/assets/industrial_terminals.jpg", spec: "22–10 AWG, #6–1/2\" stud, 600V, color-coded (red/blue/yellow)", category: "Terminals & Lugs" },
      { slug: "nylon-insulated-fork-terminal", name: "Nylon Insulated Fork Terminal", img: "/assets/industrial_terminals.jpg", spec: "22–10 AWG, #4–#10 stud, 600V, flanged for easy installation", category: "Terminals & Lugs" },
      { slug: "butt-splice-connector", name: "Butt Splice Connector", img: "/assets/industrial_terminals.jpg", spec: "Nylon insulated, 22–10 AWG, seamless barrel, 600V rated", category: "Terminals & Lugs" },
      { slug: "mechanical-set-screw-lug", name: "Mechanical Set-Screw Lug", img: "/assets/industrial_terminals.jpg", spec: "Aluminum/copper rated, 14 AWG–500 kcmil, dual rated AL/CU", category: "Terminals & Lugs" },
      { slug: "din-rail-terminal-block", name: "DIN Rail Terminal Block", img: "/assets/industrial_terminals.jpg", spec: "Screw-clamp, 24–6 AWG, 600V/50A, touch-safe design, UL 1059", category: "Terminals & Lugs" },
    ],
  },
  {
    slug: "switches",
    name: "Switches",
    img: "/assets/industrial_switches.jpg",
    desc: "Ruggedized disconnects, limit switches, and safety interlocks built to withstand high cycle rates and extreme conditions.",
    products: [
      { slug: "toggle-switch-heavy-duty", name: "Heavy-Duty Toggle Switch", img: "/assets/industrial_switches.jpg", spec: "SPDT/DPDT, 20A/125V or 15A/277V, screw terminal, UL Listed", category: "Switches" },
      { slug: "rotary-cam-switch", name: "Rotary Cam Switch", img: "/assets/industrial_switches.jpg", spec: "3-position, 16–125A, 600V, panel mount, IP65 available", category: "Switches" },
      { slug: "limit-switch-industrial", name: "Industrial Limit Switch", img: "/assets/industrial_switches.jpg", spec: "Roller lever, 10A/600V, NEMA 4/13, adjustable operating head", category: "Switches" },
      { slug: "safety-disconnect-switch", name: "Safety Disconnect Switch", img: "/assets/industrial_switches.jpg", spec: "Non-fusible, 30–600A, 600V, NEMA 1/3R, flange or hub mount", category: "Switches" },
      { slug: "emergency-stop-pushbutton", name: "Emergency Stop Pushbutton", img: "/assets/industrial_switches.jpg", spec: "40mm mushroom head, twist-release, 1NC contact, IP65, red/yellow", category: "Switches" },
      { slug: "rocker-switch-illuminated", name: "Illuminated Rocker Switch", img: "/assets/industrial_switches.jpg", spec: "SPST/DPST, 20A/125V, LED indicator, snap-in panel mount", category: "Switches" },
    ],
  },
  {
    slug: "control-components",
    name: "Control Components",
    img: "/assets/industrial_controls.jpg",
    desc: "Contactors, relays, and motor starters for precise automation and control in complex industrial machinery.",
    products: [
      { slug: "iec-contactor-3-pole", name: "IEC Contactor 3-Pole", img: "/assets/industrial_controls.jpg", spec: "9–95A, 24–600V coil, AC-3 rated, DIN rail mount, 1NO+1NC aux", category: "Control Components" },
      { slug: "thermal-overload-relay", name: "Thermal Overload Relay", img: "/assets/industrial_controls.jpg", spec: "Adjustable 0.1–95A, Class 10/20/30, manual/auto reset, trip indicator", category: "Control Components" },
      { slug: "miniature-relay-ice-cube", name: "Miniature Ice Cube Relay", img: "/assets/industrial_controls.jpg", spec: "DPDT/3PDT, 10A/240V, LED indicator, DIN socket mount, 24VDC/120VAC coil", category: "Control Components" },
      { slug: "22mm-pushbutton-operator", name: "22mm Pushbutton Operator", img: "/assets/industrial_controls.jpg", spec: "Flush/extended/illuminated, IP65, modular 1NO/1NC contacts, metal bezel", category: "Control Components" },
      { slug: "pilot-light-22mm", name: "22mm Pilot Light", img: "/assets/industrial_controls.jpg", spec: "LED, 24V/120V/240V, red/green/amber/blue/white, IP65, panel mount", category: "Control Components" },
      { slug: "timer-relay-multi-function", name: "Multi-Function Timer Relay", img: "/assets/industrial_controls.jpg", spec: "8 timing modes, 0.1s–100h range, DPDT 8A output, DIN rail mount", category: "Control Components" },
    ],
  },
];

// Flat list of all products for dynamic routing
export const allIndustrialProducts = industrialCategories.flatMap((cat) =>
  cat.products.map((p) => ({ ...p, categorySlug: cat.slug, categoryName: cat.name }))
);
