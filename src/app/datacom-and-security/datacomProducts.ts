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
      { slug: "red-dot-s310e-r-wp-box-cover", name: "Red Dot S310E-R Weatherproof Duplex Box Cover", img: "/moonlights.github.io/assets/industrial_terminals.jpg", spec: "Die-cast aluminum, duplex receptacle, NEMA 3R, in-use, paintable", category: "Boxes & Enclosures" },
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
    ],
  },
];

// Flat list of all products for dynamic routing
export const allDatacomProducts = datacomCategories.flatMap((cat) =>
  cat.products.map((p) => ({ ...p, categorySlug: cat.slug, categoryName: cat.name }))
);
