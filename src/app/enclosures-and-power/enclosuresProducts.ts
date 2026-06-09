export interface EnclosuresProduct {
  slug: string;
  name: string;
  img: string;
  spec: string;
  category: string;
}

export interface EnclosuresCategory {
  slug: string;
  name: string;
  img: string;
  desc: string;
  products: EnclosuresProduct[];
}

export const enclosuresCategories: EnclosuresCategory[] = [
  {
    slug: "circuit-breakers",
    name: "Circuit Breakers",
    img: "/moonlights.github.io/assets/industrial_controls.jpg",
    desc: "Molded case, miniature, and motor protection circuit breakers from Siemens, Eaton, Square D, and ABB. Rated for residential, commercial, and industrial power distribution.",
    products: [
      { slug: "siemens-neg3b050l-mccb", name: "Siemens NEG3B050L Molded Case Circuit Breaker", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "240 VAC, 50A, 85 kA interrupt, 3-pole, thermal-magnetic trip", category: "Circuit Breakers" },
      { slug: "siemens-qn2150r-miniature-breaker", name: "Siemens QN2150R Miniature Molded Case Breaker", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "120/240 VAC, 150A, 10 kA interrupt, 2-pole, thermal-magnetic trip", category: "Circuit Breakers" },
      { slug: "siemens-3rv20111fa15-motor-protection", name: "Siemens 3RV2011 Motor Protection Circuit Breaker", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "690 VAC, 3.5–5A adjustable, 4 kA interrupt, 3-pole, thermal-magnetic trip", category: "Circuit Breakers" },
      { slug: "siemens-3rv20324ea15-motor-breaker", name: "Siemens 3RV2032 Motor Protection Breaker w/ Aux", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "690 VAC, 22–32A, 6 kA interrupt, 3-pole, 1NO+1NC auxiliary switch", category: "Circuit Breakers" },
      { slug: "eaton-bab1020-breaker", name: "Eaton BAB1020 Quicklag Type BAB Breaker", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "120/240 VAC, 20A, 10 kA interrupt, 1-pole, bolt-on, UL Listed", category: "Circuit Breakers" },
      { slug: "square-d-qo120-plug-on-breaker", name: "Square D QO120 Plug-On Circuit Breaker", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "120/240 VAC, 20A, 10 kA interrupt, 1-pole, Visi-Trip indicator", category: "Circuit Breakers" },
      { slug: "abb-s203-c32-miniature-breaker", name: "ABB S203-C32 Miniature Circuit Breaker", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "400 VAC, 32A, 6 kA interrupt, 3-pole, C-curve, DIN rail mount", category: "Circuit Breakers" },
    ],
  },
  {
    slug: "panelboards-load-centers",
    name: "Panelboards & Load Centers",
    img: "/moonlights.github.io/assets/industrial_switches.jpg",
    desc: "Residential and commercial panelboards, load centers, and interiors for branch circuit distribution. From Siemens, Square D, and Eaton.",
    products: [
      { slug: "siemens-p1l54ml250at-panelboard", name: "Siemens P1L54ML250AT Panelboard Interior", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "600Y/347 VAC, 250A, 3-phase, 54-space, main lug only", category: "Panelboards & Load Centers" },
      { slug: "siemens-seq24100-load-center", name: "Siemens SEQ24100SMDW Instawire Load Center", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "240 VAC, 100A, single-phase, main breaker, with door, 10 kA AIC", category: "Panelboards & Load Centers" },
      { slug: "square-d-hom2040l200pgc-homeline", name: "Square D HOM2040L200PGC Homeline Load Center", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "120/240 VAC, 200A, 20-space/40-circuit, main lug, plug-on neutral", category: "Panelboards & Load Centers" },
      { slug: "eaton-br2040b200-br-panel", name: "Eaton BR2040B200 BR Type Main Breaker Panel", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "120/240 VAC, 200A, 20-space/40-circuit, NEMA 1, single-phase", category: "Panelboards & Load Centers" },
      { slug: "siemens-panelboard-trim-front", name: "Siemens S54L Panelboard Trim/Front Assembly", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "Surface mount, NEMA 1, for P1 panelboard, 54-space, steel enclosure", category: "Panelboards & Load Centers" },
      { slug: "square-d-nf430l1c-nf-panelboard", name: "Square D NF430L1C NF Type Panelboard Interior", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "240 VAC, 250A, 30-circuit, 3-phase, convertible main, copper bus", category: "Panelboards & Load Centers" },
    ],
  },
  {
    slug: "safety-disconnect-switches",
    name: "Safety & Disconnect Switches",
    img: "/moonlights.github.io/assets/industrial_terminals.jpg",
    desc: "Fusible and non-fusible safety switches, rotary disconnects, and enclosed switches for safe power isolation. From Siemens, Eaton, and Square D.",
    products: [
      { slug: "siemens-hnf363jchw-safety-switch", name: "Siemens HNF363JCHW Heavy Duty Safety Switch", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "600 VAC, 100A, TPST, 3-pole, non-fusible, NEMA 12, viewing window", category: "Safety & Disconnect Switches" },
      { slug: "square-d-h362-heavy-duty-switch", name: "Square D H362 Heavy Duty Safety Switch", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "600 VAC, 60A, 3-pole, fusible, NEMA 1, Class H/R fuses", category: "Safety & Disconnect Switches" },
      { slug: "eaton-dh362fgk-heavy-duty-switch", name: "Eaton DH362FGK Heavy Duty Safety Switch", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "600 VAC, 60A, 3-pole, fusible, NEMA 1, with neutral, UL Listed", category: "Safety & Disconnect Switches" },
      { slug: "siemens-gf322nr-general-duty", name: "Siemens GF322NR General Duty Safety Switch", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "240 VAC, 60A, 3-pole, fusible, NEMA 3R outdoor rated", category: "Safety & Disconnect Switches" },
      { slug: "square-d-d222nrb-general-duty", name: "Square D D222NRB General Duty Safety Switch", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "240 VAC, 60A, 2-pole, fusible, NEMA 3R, neutral provision", category: "Safety & Disconnect Switches" },
      { slug: "abb-eot16u3m4-rotary-disconnect", name: "ABB EOT16U3M4 Enclosed Rotary Disconnect", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "600 VAC, 16A, 3-pole, UL 508, NEMA 4X, door interlock", category: "Safety & Disconnect Switches" },
    ],
  },
  {
    slug: "fuses-and-holders",
    name: "Fuses, Blocks & Holders",
    img: "/moonlights.github.io/assets/industrial_accessories.jpg",
    desc: "UL class fuses, fuse blocks, holders, and reducers for overcurrent protection in industrial and commercial electrical systems.",
    products: [
      { slug: "bussmann-lpj-30sp-class-j-fuse", name: "Bussmann LPJ-30SP Low-Peak Class J Fuse", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "600 VAC, 30A, 300 kA interrupt, time-delay, dual-element", category: "Fuses, Blocks & Holders" },
      { slug: "bussmann-frn-r-40-class-rk5-fuse", name: "Bussmann FRN-R-40 Fusetron Class RK5 Fuse", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "250 VAC, 40A, 200 kA interrupt, time-delay, dual-element", category: "Fuses, Blocks & Holders" },
      { slug: "ferraz-shawmut-atdr30-class-cc-fuse", name: "Mersen ATDR30 Class CC Time-Delay Fuse", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "600 VAC, 30A, 200 kA interrupt, time-delay, compact", category: "Fuses, Blocks & Holders" },
      { slug: "bussmann-jtn60030-fuse-holder", name: "Bussmann JTN60030 Class J Fuse Holder", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "600 VAC, 30A, 3-pole, DIN rail mount, finger-safe, Class J only", category: "Fuses, Blocks & Holders" },
      { slug: "bussmann-bc6033pq-fuse-block", name: "Bussmann BC6033PQ Fuse Block", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "600 VAC, 30A, 3-pole, Box lug, Class H/R, panel mount", category: "Fuses, Blocks & Holders" },
      { slug: "littelfuse-flnr-60-class-rk5", name: "Littelfuse FLNR-60 Class RK5 Time-Delay Fuse", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "250 VAC, 60A, 200 kA interrupt, dual-element, indicator option", category: "Fuses, Blocks & Holders" },
    ],
  },
  {
    slug: "surge-protection",
    name: "Surge Protection & UPS",
    img: "/moonlights.github.io/assets/industrial_connectors.jpg",
    desc: "AC surge protective devices, UPS systems, power conditioners, and energy monitoring equipment for protecting sensitive electrical loads.",
    products: [
      { slug: "siemens-tps3l0305d0-spd", name: "Siemens TPS3L0305D0 Surge Protective Device", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "600Y/347 VAC, 50 kA per phase, Type 1 or 2, external mount", category: "Surge Protection & UPS" },
      { slug: "eaton-spd100480y2k-surge-protector", name: "Eaton SPD100480Y2K Complete SPD Panel", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "480Y/277 VAC, 100 kA, Type 2, NEMA 4X, LED status indicators", category: "Surge Protection & UPS" },
      { slug: "leviton-51120-1-surge-panel", name: "Leviton 51120-1 Whole Home Surge Protector", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "120/240 VAC, 50 kA, Type 2, NEMA 4X, audible alarm, LED indicator", category: "Surge Protection & UPS" },
      { slug: "apc-srt3000rmxla-smart-ups", name: "APC Smart-UPS SRT 3000VA 208V Rackmount", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "3000VA/2700W, online double-conversion, 208V, 2U rack, LCD, network card slot", category: "Surge Protection & UPS" },
      { slug: "eaton-9px-3000rt-ups", name: "Eaton 9PX 3000VA Rack/Tower UPS", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "3000VA/2700W, online double-conversion, 120/208V, 2U, ABM battery management", category: "Surge Protection & UPS" },
      { slug: "square-d-surgelogic-tvss", name: "Square D SurgeLogic TVSS", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "120/208 VAC, 80 kA per mode, Type 2, EMI/RFI filtering, TVSS status LEDs", category: "Surge Protection & UPS" },
    ],
  },
];

// Flat list of all products for dynamic routing
export const allEnclosuresProducts = enclosuresCategories.flatMap((cat) =>
  cat.products.map((p) => ({ ...p, categorySlug: cat.slug, categoryName: cat.name }))
);
