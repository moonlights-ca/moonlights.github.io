export interface ToolsProduct {
  slug: string;
  name: string;
  img: string;
  spec: string;
  category: string;
}

export interface ToolsCategory {
  slug: string;
  name: string;
  img: string;
  desc: string;
  products: ToolsProduct[];
}

export const toolsCategories: ToolsCategory[] = [
  {
    slug: "cable-wire-tools",
    name: "Cable & Wire Tools",
    img: "/moonlights.github.io/assets/industrial_controls.jpg",
    desc: "Professional cable cutters, strippers, crimpers, and fish tapes for electrical installation, maintenance, and cable management. Sourced from Klein Tools, Knipex, and Greenlee.",
    products: [
      { slug: "klein-11061-wire-stripper", name: "Klein 11061 Wire Stripper/Cutter", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "Self-adjusting stripper, 10–20 AWG solid/stranded, spring-loaded", category: "Cable & Wire Tools" },
      { slug: "knipex-9512-cable-shears", name: "Knipex 95 12 200 Cable Shears", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "200mm, two-component handles, copper/aluminum up to 70mm²", category: "Cable & Wire Tools" },
      { slug: "greenlee-k05-1gl-crimper", name: "Greenlee K05-1GL Hydraulic Crimper", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "Dieless, 6 ton, 8 AWG–750 kcmil, 360° rotating head", category: "Cable & Wire Tools" },
      { slug: "ideal-45-120-t-stripper", name: "Ideal 45-120 T-Stripper", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "Wire stripper for 8–18 AWG solid/10–20 AWG stranded, precision ground", category: "Cable & Wire Tools" },
      { slug: "klein-56005-fish-tape-steel", name: "Klein 56005 Steel Fish Tape 100ft", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "1/8\" wide flat steel, 100ft, high-visibility orange case, laser-etched marks", category: "Cable & Wire Tools" },
      { slug: "burndy-y750hsxt-hydraulic-crimper", name: "Burndy Y750HSXT Hypress Crimper", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "12 ton, #8 AWG–750 kcmil, C-head crimp, quick-release piston", category: "Cable & Wire Tools" },
      { slug: "southwire-ccpr400-cable-cutter", name: "Southwire CCPR400 Ratcheting Cable Cutter", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "Ratchet action, up to 400 kcmil Cu/Al, hardened steel blade", category: "Cable & Wire Tools" },
    ],
  },
  {
    slug: "hand-tools",
    name: "General Purpose Hand Tools",
    img: "/moonlights.github.io/assets/industrial_accessories.jpg",
    desc: "Wrenches, pliers, screwdrivers, and specialty electrical hand tools from trusted brands including Klein, Channellock, Wera, and Wiha.",
    products: [
      { slug: "klein-d2000-9ne-linesman-pliers", name: "Klein D2000-9NE Linesman Pliers 9\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "High-leverage, induction-hardened knives, #6 hard wire cutting", category: "General Purpose Hand Tools" },
      { slug: "channellock-430-tongue-groove-pliers", name: "Channellock 430 Tongue & Groove Pliers 10\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "7 adjustable positions, 2\" jaw capacity, laser heat-treated teeth", category: "General Purpose Hand Tools" },
      { slug: "wera-kraftform-insulated-vde-set", name: "Wera Kraftform Kompakt VDE Insulated Set", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "17-piece, 1000V VDE rated, interchangeable blades, Rapidaptor holder", category: "General Purpose Hand Tools" },
      { slug: "wiha-insulated-pliers-cutters-set", name: "Wiha 32968 Insulated Industrial Plier/Cutter Set", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "3-piece, 1000V VDE, includes linesman/diagonal/long nose, ErgoStar grip", category: "General Purpose Hand Tools" },
      { slug: "klein-32500-multi-bit-driver", name: "Klein 32500 11-in-1 Multi-Bit Screwdriver", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "8 bits + 3 nut driver sizes, Phillips/slotted/square/Torx, cushion grip", category: "General Purpose Hand Tools" },
      { slug: "knipex-8701-cobra-pliers-250", name: "Knipex 87 01 250 Cobra Water Pump Pliers 10\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "25 positions, 46mm jaw, push-button adjustment, chrome vanadium steel", category: "General Purpose Hand Tools" },
    ],
  },
  {
    slug: "power-tools",
    name: "Power Tools & Drills",
    img: "/moonlights.github.io/assets/industrial_switches.jpg",
    desc: "Cordless and corded power tools for drilling, fastening, sawing, and cutting. Featuring Milwaukee, DeWalt, Makita, and Bosch professional lines.",
    products: [
      { slug: "milwaukee-2804-20-m18-hammer-drill", name: "Milwaukee 2804-20 M18 FUEL 1/2\" Hammer Drill", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "POWERSTATE brushless motor, 1400 in-lbs torque, REDLINK PLUS intelligence", category: "Power Tools & Drills" },
      { slug: "dewalt-dcf887b-impact-driver", name: "DeWalt DCF887B 20V MAX XR 3-Speed Impact Driver", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "Brushless motor, 1825 in-lbs torque, 3 speed settings, 1/4\" hex", category: "Power Tools & Drills" },
      { slug: "makita-xph14z-hammer-driver-drill", name: "Makita XPH14Z 18V LXT Hammer Driver-Drill", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "BL brushless, 1/2\" chuck, 1,250 in-lbs torque, 2-speed, LED light", category: "Power Tools & Drills" },
      { slug: "bosch-gbh2-28l-rotary-hammer", name: "Bosch GBH2-28L 1-1/8\" SDS-Plus Rotary Hammer", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "8.5A, 2.0 ft-lbs impact energy, Vibration Control, 3 modes, kickback control", category: "Power Tools & Drills" },
      { slug: "milwaukee-2720-20-m18-fuel-sawzall", name: "Milwaukee 2720-20 M18 FUEL SAWZALL", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "POWERSTATE brushless, 1-1/8\" stroke, 3000 SPM, REDLITHIUM compatible", category: "Power Tools & Drills" },
      { slug: "greenlee-ls50l11b-knockout-punch", name: "Greenlee LS50L11B Battery Hydraulic Knockout Punch", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "18V Li-Ion, 1/2\"–2\" conduit, 11 ton, 17-second cycle time", category: "Power Tools & Drills" },
    ],
  },
  {
    slug: "test-measurement",
    name: "Test & Measurement",
    img: "/moonlights.github.io/assets/industrial_terminals.jpg",
    desc: "Precision multimeters, clamp meters, voltage detectors, thermal imagers, and circuit analyzers for electrical testing and diagnostics. From Fluke, Klein, Megger, and Amprobe.",
    products: [
      { slug: "fluke-87v-industrial-multimeter", name: "Fluke 87V Industrial True-RMS Multimeter", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "True-RMS, 1000V CAT III/600V CAT IV, VFD low-pass filter, 10A current", category: "Test & Measurement" },
      { slug: "fluke-376fc-clamp-meter", name: "Fluke 376 FC True-RMS AC/DC Clamp Meter", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "1000A AC/DC, iFlex probe to 2500A, Fluke Connect wireless logging", category: "Test & Measurement" },
      { slug: "klein-ncvt-3p-voltage-tester", name: "Klein NCVT-3P Open Jaw Non-Contact Voltage Tester", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "12–1000V AC dual range, flashlight, open jaw for cable insertion", category: "Test & Measurement" },
      { slug: "megger-mit485-insulation-tester", name: "Megger MIT485/2 Insulation Resistance Tester", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "50/100/250/500/1000V test voltages, PI/DAR, Bluetooth, 200GΩ range", category: "Test & Measurement" },
      { slug: "flir-cm174-clamp-imaging-meter", name: "FLIR CM174 Imaging Clamp Meter with IGM", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "600A AC/DC, built-in IR camera, Infrared Guided Measurement, CAT IV", category: "Test & Measurement" },
      { slug: "ideal-61-557-sure-test-circuit-analyzer", name: "Ideal 61-557 SureTest Circuit Analyzer", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "120/240V, tests GFCI/AFCI, voltage drop, impedance, peak voltage", category: "Test & Measurement" },
      { slug: "amprobe-at-6030-wire-tracer", name: "Amprobe AT-6030 Advanced Wire Tracer", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "Tracing energized/de-energized wires, breaker finder, 8 frequencies", category: "Test & Measurement" },
    ],
  },
  {
    slug: "fasteners-hardware",
    name: "Fasteners & Hardware",
    img: "/moonlights.github.io/assets/industrial_connectors.jpg",
    desc: "Strut channel systems, beam clamps, threaded rod, concrete anchors, and specialty mounting hardware for electrical installations. From Unistrut, Cooper B-Line, and Hilti.",
    products: [
      { slug: "unistrut-p1000-channel", name: "Unistrut P1000 12-Gauge Strut Channel 10ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "1-5/8\" × 1-5/8\", 12 ga steel, pre-galvanized, 1450 lb uniform load", category: "Fasteners & Hardware" },
      { slug: "cooper-b-line-b2000-channel", name: "Cooper B-Line B22 Channel Nut w/ Spring", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "1/4\"-20 thread, spring nut, zinc plated, for 1-5/8\" channel", category: "Fasteners & Hardware" },
      { slug: "hilti-kwik-bolt-tz-anchor", name: "Hilti Kwik Bolt TZ Carbon Steel Anchor", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "1/2\" × 5-1/2\", carbon steel, ICC-ES approved, 8,290 lb tension", category: "Fasteners & Hardware" },
      { slug: "minerallac-8-beam-clamp", name: "Minerallac 8 Beam Clamp", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "1/2\" jaw opening, 3/8\"-16 tap, malleable iron, zinc plated, 400 lb load", category: "Fasteners & Hardware" },
      { slug: "powers-wedge-bolt-anchor", name: "Powers Wedge-Bolt+ Screw Anchor 3/8\" × 3\"", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Carbon steel, removable/reusable, 4,575 lb ultimate tension in 3000 PSI concrete", category: "Fasteners & Hardware" },
      { slug: "caddy-erico-cat-hp-j-hook", name: "Caddy Erico CAT HP J-Hook 2\"", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Supports Cat5e/Cat6, 2\" bundle capacity, press-on flange mount, UL Listed", category: "Fasteners & Hardware" },
    ],
  },
];

// Flat list of all products for dynamic routing
export const allToolsProducts = toolsCategories.flatMap((cat) =>
  cat.products.map((p) => ({ ...p, categorySlug: cat.slug, categoryName: cat.name }))
);
