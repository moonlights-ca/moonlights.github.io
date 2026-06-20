export interface DatacomProduct {
  slug: string;
  name: string;
  img: string;
  spec: string;
  category: string;
}

export interface DatacomCategory {
  slug: string;
  name: string;
  img: string;
  desc: string;
  products: DatacomProduct[];
}

export const datacomCategories: DatacomCategory[] = [
  {
    slug: "conduit-emt-rigid",
    name: "Conduit — EMT & Rigid",
    img: "/moonlights.github.io/assets/industrial_connectors.jpg",
    desc: "Electrical metallic tubing (EMT), rigid metal conduit (RMC), intermediate metal conduit (IMC), and PVC conduit for commercial and industrial wiring systems.",
    products: [
      { slug: "allied-emt-1-inch-10ft", name: "Allied Tube EMT Conduit 1\" × 10ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Galvanized steel, 1\" trade size, 10ft length, UL Listed, pre-galvanized", category: "Conduit — EMT & Rigid" },
      { slug: "allied-rmc-3-4-inch-10ft", name: "Allied Tube Rigid Metal Conduit 3/4\" × 10ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Hot-dip galvanized steel, 3/4\" trade size, threaded ends, UL 6", category: "Conduit — EMT & Rigid" },
      { slug: "wheatland-imc-1-inch-10ft", name: "Wheatland IMC Conduit 1\" × 10ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Intermediate metal conduit, 1\" trade size, lighter than rigid, UL 1242", category: "Conduit — EMT & Rigid" },
      { slug: "cantex-pvc-conduit-schedule-40", name: "Cantex Schedule 40 PVC Conduit 1\" × 10ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Schedule 40, 1\" trade size, UV resistant, sunlight-rated, UL 651", category: "Conduit — EMT & Rigid" },
      { slug: "cantex-pvc-conduit-schedule-80", name: "Cantex Schedule 80 PVC Conduit 3/4\" × 10ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Schedule 80, 3/4\" trade, heavy-wall, direct burial, UL 651", category: "Conduit — EMT & Rigid" },
      { slug: "electri-flex-liquatite-lfmc", name: "Electri-Flex Liquatite LFMC 3/4\" × 100ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Liquidtight flexible metal conduit, 3/4\", PVC jacket, steel core, UL 360", category: "Conduit — EMT & Rigid" },
      { slug: "carlon-flex-non-metallic-tubing", name: "Carlon Carflex ENT 3/4\" × 100ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Electrical non-metallic tubing, 3/4\", corrugated, smurf blue, UL 1653", category: "Conduit — EMT & Rigid" },
    ],
  },
  {
    slug: "conduit-fittings",
    name: "Conduit Fittings & Bodies",
    img: "/moonlights.github.io/assets/industrial_accessories.jpg",
    desc: "Connectors, couplings, conduit bodies, bushings, straps, and adapters for EMT, rigid, PVC, and liquidtight conduit systems. From Iberville, Thomas & Betts, and Bridgeport.",
    products: [
      { slug: "iberville-ci5054-emt-connector", name: "Iberville CI5054 Set Screw EMT Connector 1/2\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "Zinc alloy, 1/2\" trade size, set screw, offset, for EMT conduit", category: "Conduit Fittings & Bodies" },
      { slug: "iberville-ci1728-conduit-locknut", name: "Iberville CI1728 Conduit Locknut 3-1/2\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "Steel, 3-1/2\" trade, for rigid/IMC conduit, zinc plated", category: "Conduit Fittings & Bodies" },
      { slug: "tb-5363-compression-emt-connector", name: "Thomas & Betts 5363 Compression EMT Connector", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "1/2\" trade, steel, compression, raintight, concrete-tight, UL 514B", category: "Conduit Fittings & Bodies" },
      { slug: "bridgeport-250-dc-emt-connector", name: "Bridgeport 250-DC Die Cast EMT Connector 1/2\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "Zinc die-cast, 1/2\" set-screw, insulated throat, UL Listed", category: "Conduit Fittings & Bodies" },
      { slug: "appleton-lb-conduit-body-3-4", name: "Appleton Unilets LB Conduit Body 3/4\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "Form 35, 3/4\" hub, aluminum, Type LB, with cover and gasket", category: "Conduit Fittings & Bodies" },
      { slug: "superstrut-cpc125-cobra-clamp", name: "Superstrut Cobra CPC125 Conduit Clamp 1-1/4\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "1-piece, 1-1/4\" conduit, 200 lb load, 1.4–1.725\" OD, steel", category: "Conduit Fittings & Bodies" },
      { slug: "cantex-5133107-pvc-coupling", name: "Cantex 5133107 PVC Coupling 1\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "Schedule 40, 1\" trade, solvent weld, UL Listed, gray", category: "Conduit Fittings & Bodies" },
    ],
  },
  {
    slug: "boxes-enclosures",
    name: "Boxes & Enclosures",
    img: "/moonlights.github.io/assets/industrial_terminals.jpg",
    desc: "Junction boxes, device boxes, pull boxes, NEMA-rated enclosures, and cabinets for housing electrical connections and equipment. From Hoffman, Hubbell, Wiegmann, and Red Dot.",
    products: [
      { slug: "red-dot-s310e-r-wp-box-cover", name: "Red Dot S310E-R Weatherproof Duplex Box Cover", img: "/moonlights.github.io/assets/red_dot_s310e_r_wp_box_cover.png", spec: "Die-cast aluminum, duplex receptacle, NEMA 3R, in-use, paintable", category: "Boxes & Enclosures" },
      { slug: "hoffman-a8064ch-jic-box", name: "Hoffman A8064CH JIC Continuous Hinge Box", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "8\" × 6\" × 4\", carbon steel, NEMA 12/4, continuous hinge, clamps", category: "Boxes & Enclosures" },
      { slug: "hubbell-ba100-weatherproof-box", name: "Hubbell BA100 Bell Box 1-Gang", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "Die-cast aluminum, 1-gang, 3 × 1/2\" hubs, NEMA 3R, gray", category: "Boxes & Enclosures" },
      { slug: "wiegmann-b060403ch-enclosure", name: "Wiegmann B060403CH NEMA 4 Enclosure", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "6\" × 4\" × 3\", carbon steel, NEMA 4/12, continuous hinge, clamps", category: "Boxes & Enclosures" },
      { slug: "hoffman-a24n24alp-nema-4x-encl", name: "Hoffman A24N24ALP NEMA 4X Enclosure", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "24\" × 24\" × 8\", aluminum, NEMA 4X, padlocking handle, sub-panel", category: "Boxes & Enclosures" },
      { slug: "carlon-e989nnr-single-gang-box", name: "Carlon E989NNR PVC Single-Gang Old Work Box", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "18 cu in, non-metallic, swing clamp, adjustable ears, UL Listed", category: "Boxes & Enclosures" },
    ],
  },
  {
    slug: "cable-tray-raceway",
    name: "Cable Tray & Raceway",
    img: "/moonlights.github.io/assets/industrial_switches.jpg",
    desc: "Ladder, ventilated trough, and wire basket cable tray systems, plus surface raceway and wire mold for organized cable management in commercial and industrial facilities.",
    products: [
      { slug: "cable-tray-ah1418l09-h-beam", name: "Cable Tray AH1418L09 H-Beam Straight Section", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "Aluminum, 18\" wide × 3\" deep, 3m length, 91 ft-lb capacity", category: "Cable Tray & Raceway" },
      { slug: "superstrut-d120010pgc-channel", name: "Superstrut D120010PGC Metal Channel 10ft", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "12 gauge, 1-5/8\" × 1-5/8\", pre-galvanized, 10ft length", category: "Cable Tray & Raceway" },
      { slug: "superstrut-s256-8hdgc-bracket", name: "Superstrut S256-8HDGC Channel Bracket 8\"", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "8\" length, steel, hot-dip galvanized, for strut channel support", category: "Cable Tray & Raceway" },
      { slug: "expresstray-eth-wbc-hd-clamp", name: "ExpressTray ETH-WBC-HD Wire Basket Bracket Clamp", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "Steel, 1.338\" × 0.866\", for steel wire basket tray", category: "Cable Tray & Raceway" },
      { slug: "wiremold-v500-surface-raceway", name: "Wiremold V500 Metal Raceway Base & Cover 5ft", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "Steel, 3/4\" × 17/32\", 5ft length, ivory/white, snap-on cover, UL Listed", category: "Cable Tray & Raceway" },
      { slug: "panduit-t70bciw-surface-raceway", name: "Panduit T70 Surface Raceway Base & Cover 6ft", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "PVC, dual-channel, 2.75\" × 1.38\", 6ft, office white, adhesive back", category: "Cable Tray & Raceway" },
    ],
  },
  {
    slug: "contactors-motor-starters",
    name: "Contactors & Motor Starters",
    img: "/moonlights.github.io/assets/industrial_controls.jpg",
    desc: "IEC and NEMA contactors, motor starters, soft starters, and overload relays for motor control in industrial automation. From Siemens SIRIUS, Eaton, and Allen-Bradley.",
    products: [
      { slug: "siemens-3rt20463nb30-contactor", name: "Siemens SIRIUS 3RT2046 Power Contactor 95A", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "20–33V AC/DC coil, 95A, 3NO, 3-pole, integrated varistor, S3 frame", category: "Contactors & Motor Starters" },
      { slug: "siemens-3rt29265ak61-coil", name: "Siemens 3RT2926 Magnet Coil for 3RT202x", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "110/120 VAC, 50/60 Hz, S0 size, for 3RT202x motor contactors", category: "Contactors & Motor Starters" },
      { slug: "siemens-3rw30471bb14-soft-starter", name: "Siemens SIRIUS 3RW3047 Soft Starter w/ Bypass", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "110–230 VAC/VDC coil, 3-pole, IP00, basic performance, built-in bypass", category: "Contactors & Motor Starters" },
      { slug: "eaton-xtce032c10td-contactor", name: "Eaton XTCE032C10TD IEC Contactor 32A", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "24V DC coil, 32A, 3-pole, 1NO aux, DIN rail, frame C, AC-3 rated", category: "Contactors & Motor Starters" },
      { slug: "square-d-8536scg3v02s-starter", name: "Square D 8536SCG3V02S NEMA Size 1 Starter", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "120 VAC coil, 27A, 3-pole, NEMA 1 enclosure, melting alloy overload", category: "Contactors & Motor Starters" },
      { slug: "abb-af26-30-00-contactor", name: "ABB AF26-30-00 Contactor 26A", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "100–250V AC/DC coil, 26A, 3-pole, AF range, screw terminals", category: "Contactors & Motor Starters" },
      { slug: "schneider-lc1d09bd-tesys-contactor", name: "Schneider LC1D09BD TeSys D Contactor 9A", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "24V DC coil, 9A, 3-pole, 1NO aux, 4kW/400V, screw clamp terminals", category: "Contactors & Motor Starters" },
      { slug: "allen-bradley-100-c30-contactor", name: "Allen-Bradley 100-C30 IEC Contactor 30A", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "120V AC coil, 30A, 3-pole, 1NO aux, Bulletin 100-C, AC-3 rated", category: "Contactors & Motor Starters" },
      { slug: "eaton-c440-overload-relay", name: "Eaton C440 Electronic Overload Relay", img: "/moonlights.github.io/assets/industrial_controls.jpg", spec: "9–45A adjustable, Class 10/20/30, self-powered, DIN/panel mount", category: "Contactors & Motor Starters" },
    ],
  },
  {
    slug: "wiring-devices",
    name: "Wiring Devices & Receptacles",
    img: "/moonlights.github.io/assets/industrial_switches.jpg",
    desc: "Commercial and industrial-grade receptacles, switches, GFCI/AFCI devices, dimmers, and wall plates for power and control points. From Leviton, Hubbell, Pass & Seymour, and Lutron.",
    products: [
      { slug: "leviton-5362-duplex-receptacle", name: "Leviton 5362 Commercial Duplex Receptacle 20A", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "125V, 20A, NEMA 5-20R, spec grade, back & side wired, UL Listed", category: "Wiring Devices & Receptacles" },
      { slug: "hubbell-ig5362-isolated-ground", name: "Hubbell IG5362 Isolated Ground Receptacle 20A", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "125V, 20A, NEMA 5-20R, isolated ground, orange, hospital adjacent", category: "Wiring Devices & Receptacles" },
      { slug: "leviton-gfnt2-gfci-receptacle", name: "Leviton GFNT2 SmartlockPro GFCI Receptacle 20A", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "125V, 20A, self-test, weather-resistant, tamper-resistant, LED status", category: "Wiring Devices & Receptacles" },
      { slug: "hubbell-hbl2620-twist-lock", name: "Hubbell HBL2620 Twist-Lock Receptacle 30A", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "250V, 30A, NEMA L6-30R, locking, nylon face, industrial grade", category: "Wiring Devices & Receptacles" },
      { slug: "pass-seymour-tm870-toggle-switch", name: "Pass & Seymour TM870 Commercial Toggle Switch", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "120/277V, 20A, single-pole, spec grade, back & side wired", category: "Wiring Devices & Receptacles" },
      { slug: "lutron-maestro-macl-153m-dimmer", name: "Lutron Maestro MACL-153M LED+ Dimmer", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "150W LED/CFL, 600W incandescent, single-pole/3-way, with night light", category: "Wiring Devices & Receptacles" },
      { slug: "leviton-pj26-stainless-wall-plate", name: "Leviton 84001-40 Stainless Steel Wall Plate 1-Gang", img: "/moonlights.github.io/assets/industrial_switches.jpg", spec: "302 stainless steel, 1-gang toggle, standard size, smooth finish", category: "Wiring Devices & Receptacles" },
    ],
  },
  {
    slug: "grounding-bonding",
    name: "Grounding & Bonding",
    img: "/moonlights.github.io/assets/industrial_terminals.jpg",
    desc: "Ground rods, clamps, grounding bars, bonding jumpers, and exothermic connections for code-compliant electrical grounding systems. From nVent ERICO, Burndy, and Galvan.",
    products: [
      { slug: "galvan-5805-copper-ground-rod", name: "Galvan 5805 Copper-Bonded Ground Rod 5/8\" × 8ft", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "5/8\" diameter, 8ft, copper-bonded steel, UL 467, pointed end", category: "Grounding & Bonding" },
      { slug: "burndy-grc-acorn-ground-clamp", name: "Burndy GRC Acorn Ground Rod Clamp", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "Bronze, 5/8\"–3/4\" rod, #10–#2 AWG, direct burial, UL Listed", category: "Grounding & Bonding" },
      { slug: "nvent-erico-cadweld-mold", name: "nVent ERICO Cadweld Exothermic Weld Mold", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "Graphite mold, rod-to-cable, permanent molecular bond, reusable", category: "Grounding & Bonding" },
      { slug: "nvent-eriflex-ground-busbar", name: "nVent ERIFLEX Ground Bus Bar 12-Position", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "Copper, 12 terminals, with insulated standoffs and mounting bracket", category: "Grounding & Bonding" },
      { slug: "bare-copper-grounding-wire-6awg", name: "Bare Copper Grounding Wire 6 AWG Solid", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "6 AWG, solid soft-drawn copper, bare, UL/ASTM B3, 315 ft coil", category: "Grounding & Bonding" },
      { slug: "burndy-yga-grounding-lug", name: "Burndy YGA Hyground Grounding Lug", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "Compression, copper, 6 AWG–4/0, one-hole, irreversible crimp", category: "Grounding & Bonding" },
      { slug: "nvent-erico-grounding-pigtail", name: "nVent ERICO Receptacle Grounding Pigtail", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "12 AWG, green, 8\" with ground screw, box-mount bonding jumper", category: "Grounding & Bonding" },
    ],
  },
  {
    slug: "liquidtight-flexible-conduit",
    name: "Liquidtight & Flexible Conduit",
    img: "/moonlights.github.io/assets/industrial_connectors.jpg",
    desc: "Liquidtight flexible metal (LFMC), non-metallic (LFNC), and flexible metal conduit (FMC) with matched connectors for vibration isolation and wet-location equipment connections. From Southwire, Anamet, and Bridgeport.",
    products: [
      { slug: "southwire-ultratite-lfnc-1-2", name: "Southwire UltraTite LFNC 1/2\" × 100ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Liquidtight non-metallic, 1/2\", PVC, sunlight resistant, UL 1660", category: "Liquidtight & Flexible Conduit" },
      { slug: "anamet-sealtite-ua-lfmc-3-4", name: "Anamet Sealtite Type UA LFMC 3/4\" × 100ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Liquidtight flexible metal, 3/4\", galvanized steel core, PVC jacket", category: "Liquidtight & Flexible Conduit" },
      { slug: "southwire-fmc-greenfield-1-2", name: "Southwire Greenfield FMC 1/2\" × 100ft", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "Flexible metal conduit, 1/2\", reduced-wall galvanized steel, UL 1", category: "Liquidtight & Flexible Conduit" },
      { slug: "bridgeport-4qs50-lt-connector", name: "Bridgeport 4QS-50 Liquidtight Straight Connector 1/2\"", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "1/2\", steel, insulated throat, sealing ring, for LFMC, UL 514B", category: "Liquidtight & Flexible Conduit" },
      { slug: "bridgeport-450-dc2-90-lt-connector", name: "Bridgeport 450-DC2 90° Liquidtight Connector 1/2\"", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "1/2\", die-cast zinc, 90° angle, insulated throat, raintight", category: "Liquidtight & Flexible Conduit" },
      { slug: "thomas-betts-5331-fmc-connector", name: "Thomas & Betts 5331 Squeeze FMC Connector 3/8\"", img: "/moonlights.github.io/assets/industrial_connectors.jpg", spec: "3/8\", steel, squeeze type, for flexible metal conduit, UL Listed", category: "Liquidtight & Flexible Conduit" },
    ],
  },
  {
    slug: "wireway-lay-in-trough",
    name: "Wireway & Lay-In Trough",
    img: "/moonlights.github.io/assets/industrial_accessories.jpg",
    desc: "Hinged and screw-cover lay-in wireway, troughs, and gutter systems for routing and splicing conductors between panels and equipment. From Hoffman, Wiegmann, and Austin.",
    products: [
      { slug: "hoffman-f44l36-lay-in-wireway", name: "Hoffman F44L36 Lay-In Wireway 4\" × 4\" × 3ft", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "4\" × 4\" × 36\", screw cover, NEMA 1, gray, knockouts, steel", category: "Wireway & Lay-In Trough" },
      { slug: "hoffman-f66t-wireway-tee", name: "Hoffman F66T Wireway Tee Fitting 6\" × 6\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "6\" × 6\", tee fitting, NEMA 1, screw cover, gray polyester powder", category: "Wireway & Lay-In Trough" },
      { slug: "wiegmann-wnsc6624-wireway", name: "Wiegmann WNSC6624 Screw-Cover Wireway 6\" × 6\" × 2ft", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "6\" × 6\" × 24\", NEMA 3R, painted steel, weatherproof, hinged option", category: "Wireway & Lay-In Trough" },
      { slug: "hoffman-cct44-wireway-coupler", name: "Hoffman CCT44 Wireway Connector/Coupler 4\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "4\" × 4\", connects wireway sections, includes hardware, NEMA 1", category: "Wireway & Lay-In Trough" },
      { slug: "austin-ab884ge-pull-box", name: "Austin AB-884GE Screw-Cover Pull Box 8\" × 8\" × 4\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "8\" × 8\" × 4\", NEMA 1, galvanized, screw cover, ANSI 61 gray", category: "Wireway & Lay-In Trough" },
      { slug: "hoffman-f44end-wireway-endcap", name: "Hoffman F44END Wireway End Cap 4\" × 4\"", img: "/moonlights.github.io/assets/industrial_accessories.jpg", spec: "4\" × 4\", closure end plate, NEMA 1, with gasket and screws", category: "Wireway & Lay-In Trough" },
    ],
  },
];

// Flat list of all products for dynamic routing
export const allDatacomProducts = datacomCategories.flatMap((cat) =>
  cat.products.map((p) => ({ ...p, categorySlug: cat.slug, categoryName: cat.name }))
);
