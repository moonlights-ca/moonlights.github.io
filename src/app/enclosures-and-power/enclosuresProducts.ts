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
      { slug: "siemens-neg3b050l-mccb", name: "Siemens NEG3B050L Molded Case Circuit Breaker", img: "/moonlights.github.io/assets/siemens_neg3b050l_mccb.png", spec: "240 VAC, 50A, 85 kA interrupt, 3-pole, thermal-magnetic trip", category: "Circuit Breakers" },
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
  {
    slug: "transfer-switches",
    name: "Transfer Switches & Generators",
    img: "/moonlights.github.io/assets/industrial_terminals.jpg",
    desc: "Automatic and manual transfer switches, generator interlock kits, and standby power controls for seamless backup power transition. From Generac, ASCO, Eaton, and Reliance.",
    products: [
      { slug: "generac-rxsw200a3-automatic-transfer-switch", name: "Generac RXSW200A3 Automatic Transfer Switch 200A", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "200A, service-rated, NEMA 3R, single-phase, whole-home, 16-circuit", category: "Transfer Switches & Generators" },
      { slug: "asco-185-series-manual-transfer-switch", name: "ASCO 185 Series Manual Transfer Switch 100A", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "100A, 2-pole, 240V, NEMA 1, double-throw, non-automatic", category: "Transfer Switches & Generators" },
      { slug: "reliance-310crk-generator-interlock", name: "Reliance 310CRK Generator Interlock Kit", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "For listed panels, mechanical interlock, code-compliant, with hardware", category: "Transfer Switches & Generators" },
      { slug: "eaton-ch-power-inlet-box-50a", name: "Eaton CH Power Inlet Box 50A", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "50A, NEMA 3R, generator-ready, weatherproof flip lid, L14-50 inlet", category: "Transfer Switches & Generators" },
      { slug: "asco-7000-series-ats-400a", name: "ASCO 7000 Series Automatic Transfer Switch 400A", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "400A, 3-pole, 480V, microprocessor controller, NEMA 1, UL 1008", category: "Transfer Switches & Generators" },
      { slug: "generac-protector-rd03524-standby-generator", name: "Generac RD03524 Protector Series Standby Generator 35kW", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "35kW, liquid-cooled diesel, 3-phase, aluminum enclosure, Wi-Fi monitoring", category: "Transfer Switches & Generators" },
    ],
  },
  {
    slug: "meter-sockets-metering",
    name: "Meter Sockets & Metering",
    img: "/moonlights.github.io/assets/industrial_switches.jpg",
    desc: "Single and multi-position meter sockets, current transformer cabinets, and power monitoring meters for utility service entrance and submetering. From Milbank, Durham, and Schneider.",
    products: [
      { slug: "milbank-u3791-o-200a-meter-socket", name: "Milbank U3791-O Ringless Meter Socket 200A", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "200A, 4-jaw, single-phase, NEMA 3R, ringless cover, overhead/underground", category: "Meter Sockets & Metering" },
      { slug: "milbank-u4801-xl-meter-main-combo", name: "Milbank U4801-XL-5T9 Meter-Main Combo 200A", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "200A, ring-type, single-phase, NEMA 3R, main breaker, 8-space", category: "Meter Sockets & Metering" },
      { slug: "durham-mhc612-ct-cabinet", name: "Durham MHC612 Current Transformer Cabinet 12\"", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "12\" × 12\" × 6\", NEMA 3R, hinged cover, sealable, painted steel", category: "Meter Sockets & Metering" },
      { slug: "schneider-pm5560-power-meter", name: "Schneider PowerLogic PM5560 Power Meter", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "Class 0.2S, Modbus TCP/Ethernet, harmonics to 63rd, 2 logical I/O", category: "Meter Sockets & Metering" },
      { slug: "milbank-u5168-6-position-meter-stack", name: "Milbank U5168 6-Gang Meter Stack 600A", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "600A, 6-position, ringless, single-phase, NEMA 3R, lever bypass", category: "Meter Sockets & Metering" },
      { slug: "ekm-omnimeter-pulse-v4-submeter", name: "EKM Omnimeter Pulse v.4 Universal Submeter", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "120–480V, 1/3-phase, kWh/kW/V/A/PF, RS-485 Modbus, web-ready", category: "Meter Sockets & Metering" },
    ],
  },
  {
    slug: "busway-bus-plugs",
    name: "Busway & Bus Plugs",
    img: "/moonlights.github.io/assets/industrial_connectors.jpg",
    desc: "Plug-in and feeder busway, bus plugs, and end closures for flexible high-amperage power distribution in industrial plants and data centers. From Siemens, Eaton, and Square D.",
    products: [
      { slug: "siemens-sentron-busway-225a", name: "Siemens Sentron Plug-In Busway 225A × 10ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "225A, 3-phase, copper bus, indoor NEMA 1, 10ft straight section", category: "Busway & Bus Plugs" },
      { slug: "eaton-pow-r-way-busplug-100a", name: "Eaton Pow-R-Way III Fusible Bus Plug 100A", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "100A, 3-pole, fusible disconnect, Class J fuses, plug-in, NEMA 1", category: "Busway & Bus Plugs" },
      { slug: "square-d-i-line-busway-400a", name: "Square D I-Line II Busway 400A × 10ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "400A, 3-phase 4-wire, aluminum bus, plug-in openings every 2ft", category: "Busway & Bus Plugs" },
      { slug: "siemens-busway-breaker-plug-60a", name: "Siemens Circuit Breaker Bus Plug 60A", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "60A, 3-pole, molded case breaker, plug-in, interlocked handle", category: "Busway & Bus Plugs" },
      { slug: "eaton-busway-elbow-fitting", name: "Eaton Pow-R-Way Edgewise Elbow Fitting", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "90° edgewise elbow, matches feeder rating, copper/aluminum bus", category: "Busway & Bus Plugs" },
      { slug: "square-d-busway-end-closure", name: "Square D I-Line Busway End Closure", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "End cap closure, NEMA 1, fits I-Line II busway, includes hardware", category: "Busway & Bus Plugs" },
    ],
  },
  {
    slug: "lighting-control-timers",
    name: "Lighting Contactors & Timers",
    img: "/moonlights.github.io/assets/industrial_switches.jpg",
    desc: "Mechanically and electrically held lighting contactors, time switches, and photocontrols for automated control of lighting and electrical loads. From Intermatic, Tork, and ASCO.",
    products: [
      { slug: "intermatic-t104-time-switch", name: "Intermatic T104 Mechanical Time Switch 40A", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "208–277V, 40A, DPST, 24-hour dial, NEMA 1, mechanical, no battery", category: "Lighting Contactors & Timers" },
      { slug: "tork-1101-time-switch", name: "Tork 1101 7-Day Time Switch 40A", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "120V, 40A, SPST, 7-day, mechanical, NEMA 1 metal enclosure", category: "Lighting Contactors & Timers" },
      { slug: "asco-917-lighting-contactor-30a", name: "ASCO 917 Electrically Held Lighting Contactor 30A", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "30A, 4-pole, 277V coil, electrically held, NEMA 1, UL 508", category: "Lighting Contactors & Timers" },
      { slug: "eaton-c30cnm30a-lighting-contactor", name: "Eaton C30CNM30A Mechanically Held Lighting Contactor", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "30A, 3-pole, mechanically held, 120V coil, NEMA 1 enclosure", category: "Lighting Contactors & Timers" },
      { slug: "intermatic-k4121c-photocontrol", name: "Intermatic K4121C Photocontrol 105–285V", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "105–285V, 1800VA tungsten, thermal-type, locking mount, dusk-to-dawn", category: "Lighting Contactors & Timers" },
      { slug: "intermatic-et90115c-astronomic-timer", name: "Intermatic ET90115C 365-Day Astronomic Timer", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "120–277V, 30A, 1-circuit, astronomic, battery backup, NEMA 1", category: "Lighting Contactors & Timers" },
    ],
  },
];

// Flat list of all products for dynamic routing
export const allEnclosuresProducts = enclosuresCategories.flatMap((cat) =>
  cat.products.map((p) => ({ ...p, categorySlug: cat.slug, categoryName: cat.name }))
);
