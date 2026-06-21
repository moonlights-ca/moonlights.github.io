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
    img: "/moonlights.github.io/assets/nylon_cable_gland.webp",
    desc: "Heavy-duty multipin and circular connectors designed for secure data and power transmission in harsh industrial settings. Features IP68 ratings and vibration resistance.",
    products: [
      { slug: "nylon-cable-gland", name: "Nylon Cable Gland", img: "/moonlights.github.io/assets/nylon_cable_gland.webp", spec: "IP68 rated, PG7–PG48 thread sizes, 3–32mm cable range", category: "Electrical Connectors" },
      { slug: "metallic-cable-gland", name: "Metallic Cable Gland", img: "/moonlights.github.io/assets/metallic_cable_gland.webp", spec: "Nickel-plated brass, EMC shielding, IP68, M12–M63 metric threads", category: "Electrical Connectors" },
      { slug: "circular-connector-m12", name: "M12 Circular Connector", img: "/moonlights.github.io/assets/circular_connector_m12.webp", spec: "4/5/8-pin, A/B/D coded, IP67, 250V/4A rated", category: "Electrical Connectors" },
      { slug: "heavy-duty-rectangular-connector", name: "Heavy-Duty Rectangular Connector", img: "/moonlights.github.io/assets/heavy_duty_rectangular_connector.webp", spec: "6–64 pin inserts, 500V/16A, IP65, modular frame system", category: "Electrical Connectors" },
      { slug: "pin-sleeve-connector-30a", name: "Pin & Sleeve Connector 30A", img: "/moonlights.github.io/assets/pin_sleeve_connector_30a.webp", spec: "IEC 60309, 30A/250V, watertight IP67, 3/4/5 wire configurations", category: "Electrical Connectors" },
      { slug: "insulation-displacement-connector", name: "Insulation Displacement Connector", img: "/moonlights.github.io/assets/insulation_displacement_connector.webp", spec: "Inline tap splice, 12–10 AWG, 600V, moisture-sealed gel-filled", category: "Electrical Connectors" },
    ],
  },
  {
    slug: "cable-accessories",
    name: "Cable Accessories",
    img: "/moonlights.github.io/assets/heat_shrink_tubing.webp",
    desc: "Strain relief glands, protective conduits, and heavy-duty mounting hardware to ensure cable integrity.",
    products: [
      { slug: "heat-shrink-tubing", name: "Heat Shrink Tubing", img: "/moonlights.github.io/assets/heat_shrink_tubing.webp", spec: "2:1 and 3:1 shrink ratio, 600V, polyolefin, adhesive-lined options", category: "Cable Accessories" },
      { slug: "cable-tie-nylon-66", name: "Cable Tie Nylon 6/6", img: "/moonlights.github.io/assets/cable_tie_nylon_66.webp", spec: "UV-resistant, 18–175 lb tensile, 4\"–36\" lengths, UL Listed", category: "Cable Accessories" },
      { slug: "spiral-wrap-tubing", name: "Spiral Wrap Tubing", img: "/moonlights.github.io/assets/spiral_wrap_tubing.webp", spec: "Polyethylene, 1/4\"–2\" diameter, -60°C to 80°C, flame retardant", category: "Cable Accessories" },
      { slug: "cord-grip-strain-relief", name: "Cord Grip / Strain Relief", img: "/moonlights.github.io/assets/cord_grip_strain_relief.webp", spec: "Liquid-tight, 1/2\"–2\" NPT, nylon/aluminum, 0.12\"–1.85\" cable OD", category: "Cable Accessories" },
      { slug: "wire-duct-slotted", name: "Slotted Wire Duct", img: "/moonlights.github.io/assets/wire_duct_slotted.webp", spec: "PVC, 1\"×1\" to 4\"×4\", UL94 V-0 flame rating, snap-on cover", category: "Cable Accessories" },
      { slug: "split-loom-tubing", name: "Split Loom Tubing", img: "/moonlights.github.io/assets/split_loom_tubing.webp", spec: "Corrugated polyethylene, 1/4\"–2\", -40°C to 105°C, easy retrofit", category: "Cable Accessories" },
    ],
  },
  {
    slug: "terminals-and-lugs",
    name: "Terminals & Lugs",
    img: "/moonlights.github.io/assets/copper_compression_lug.webp",
    desc: "Compression and mechanical lugs engineered for optimal conductivity and secure termination of large-gauge wire.",
    products: [
      { slug: "copper-compression-lug", name: "Copper Compression Lug", img: "/moonlights.github.io/assets/copper_compression_lug.webp", spec: "Tin-plated copper, 8 AWG–750 kcmil, 1-hole or 2-hole, UL Listed", category: "Terminals & Lugs" },
      { slug: "vinyl-insulated-ring-terminal", name: "Vinyl Insulated Ring Terminal", img: "/moonlights.github.io/assets/vinyl_insulated_ring_terminal.webp", spec: "22–10 AWG, #6–1/2\" stud, 600V, color-coded (red/blue/yellow)", category: "Terminals & Lugs" },
      { slug: "nylon-insulated-fork-terminal", name: "Nylon Insulated Fork Terminal", img: "/moonlights.github.io/assets/nylon_insulated_fork_terminal.webp", spec: "22–10 AWG, #4–#10 stud, 600V, flanged for easy installation", category: "Terminals & Lugs" },
      { slug: "butt-splice-connector", name: "Butt Splice Connector", img: "/moonlights.github.io/assets/butt_splice_connector.webp", spec: "Nylon insulated, 22–10 AWG, seamless barrel, 600V rated", category: "Terminals & Lugs" },
      { slug: "mechanical-set-screw-lug", name: "Mechanical Set-Screw Lug", img: "/moonlights.github.io/assets/mechanical_set_screw_lug.webp", spec: "Aluminum/copper rated, 14 AWG–500 kcmil, dual rated AL/CU", category: "Terminals & Lugs" },
      { slug: "din-rail-terminal-block", name: "DIN Rail Terminal Block", img: "/moonlights.github.io/assets/din_rail_terminal_block.webp", spec: "Screw-clamp, 24–6 AWG, 600V/50A, touch-safe design, UL 1059", category: "Terminals & Lugs" },
    ],
  },
  {
    slug: "switches",
    name: "Switches",
    img: "/moonlights.github.io/assets/toggle_switch_heavy_duty.webp",
    desc: "Ruggedized disconnects, limit switches, and safety interlocks built to withstand high cycle rates and extreme conditions.",
    products: [
      { slug: "toggle-switch-heavy-duty", name: "Heavy-Duty Toggle Switch", img: "/moonlights.github.io/assets/toggle_switch_heavy_duty.webp", spec: "SPDT/DPDT, 20A/125V or 15A/277V, screw terminal, UL Listed", category: "Switches" },
      { slug: "rotary-cam-switch", name: "Rotary Cam Switch", img: "/moonlights.github.io/assets/rotary_cam_switch.webp", spec: "3-position, 16–125A, 600V, panel mount, IP65 available", category: "Switches" },
      { slug: "limit-switch-industrial", name: "Industrial Limit Switch", img: "/moonlights.github.io/assets/limit_switch_industrial.webp", spec: "Roller lever, 10A/600V, NEMA 4/13, adjustable operating head", category: "Switches" },
      { slug: "safety-disconnect-switch", name: "Safety Disconnect Switch", img: "/moonlights.github.io/assets/safety_disconnect_switch.webp", spec: "Non-fusible, 30–600A, 600V, NEMA 1/3R, flange or hub mount", category: "Switches" },
      { slug: "emergency-stop-pushbutton", name: "Emergency Stop Pushbutton", img: "/moonlights.github.io/assets/emergency_stop_pushbutton.webp", spec: "40mm mushroom head, twist-release, 1NC contact, IP65, red/yellow", category: "Switches" },
      { slug: "rocker-switch-illuminated", name: "Illuminated Rocker Switch", img: "/moonlights.github.io/assets/rocker_switch_illuminated.webp", spec: "SPST/DPST, 20A/125V, LED indicator, snap-in panel mount", category: "Switches" },
    ],
  },
  {
    slug: "control-components",
    name: "Control Components",
    img: "/moonlights.github.io/assets/iec_contactor_3_pole.webp",
    desc: "Contactors, relays, and motor starters for precise automation and control in complex industrial machinery.",
    products: [
      { slug: "iec-contactor-3-pole", name: "IEC Contactor 3-Pole", img: "/moonlights.github.io/assets/iec_contactor_3_pole.webp", spec: "9–95A, 24–600V coil, AC-3 rated, DIN rail mount, 1NO+1NC aux", category: "Control Components" },
      { slug: "thermal-overload-relay", name: "Thermal Overload Relay", img: "/moonlights.github.io/assets/thermal_overload_relay.webp", spec: "Adjustable 0.1–95A, Class 10/20/30, manual/auto reset, trip indicator", category: "Control Components" },
      { slug: "miniature-relay-ice-cube", name: "Miniature Ice Cube Relay", img: "/moonlights.github.io/assets/miniature_ice_cube_relay.webp", spec: "DPDT/3PDT, 10A/240V, LED indicator, DIN socket mount, 24VDC/120VAC coil", category: "Control Components" },
      { slug: "22mm-pushbutton-operator", name: "22mm Pushbutton Operator", img: "/moonlights.github.io/assets/pushbutton_operator_22mm.webp", spec: "Flush/extended/illuminated, IP65, modular 1NO/1NC contacts, metal bezel", category: "Control Components" },
      { slug: "pilot-light-22mm", name: "22mm Pilot Light", img: "/moonlights.github.io/assets/pilot_light_22mm.webp", spec: "LED, 24V/120V/240V, red/green/amber/blue/white, IP65, panel mount", category: "Control Components" },
      { slug: "timer-relay-multi-function", name: "Multi-Function Timer Relay", img: "/moonlights.github.io/assets/timer_relay_multi_function.webp", spec: "8 timing modes, 0.1s–100h range, DPDT 8A output, DIN rail mount", category: "Control Components" },
    ],
  },
  {
    slug: "crimp-wire-terminals",
    name: "Crimp Wire Terminals",
    img: "/moonlights.github.io/assets/ring_crimp_terminals.webp",
    desc: "Premium selection of crimp wire terminals sourced globally for high reliability and performance.",
    products: [
      { slug: "ring-crimp-terminals", name: "Ring Crimp Terminals", img: "/moonlights.github.io/assets/ring_crimp_terminals.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
      { slug: "spades-forks", name: "Spades Forks", img: "/moonlights.github.io/assets/spades_forks.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
      { slug: "butt-splice-terminals", name: "Butt Splice Terminals", img: "/moonlights.github.io/assets/butt_splice_terminals.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
      { slug: "closed-end-connectors", name: "Closed End Connectors", img: "/moonlights.github.io/assets/closed_end_connectors.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
      { slug: "pvc-ring-terminals", name: "Pvc Ring Terminals", img: "/moonlights.github.io/assets/pvc_ring_terminals.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
      { slug: "nylon-ring-terminals", name: "Nylon Ring Terminals", img: "/moonlights.github.io/assets/nylon_ring_terminals.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
      { slug: "non-insulated-ring-terminals", name: "Non Insulated Ring Terminals", img: "/moonlights.github.io/assets/non_insulated_ring_terminals.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
      { slug: "disconnect-terminals-fully-insulated", name: "Disconnect Terminals Fully Insulated", img: "/moonlights.github.io/assets/disconnect_terminals_fully_insulated.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
      { slug: "specialty-wire-terminals", name: "Specialty Wire Terminals", img: "/moonlights.github.io/assets/specialty_wire_terminals.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
      { slug: "discount-crimp-terminals", name: "Discount Crimp Terminals", img: "/moonlights.github.io/assets/discount_crimp_terminals.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
      { slug: "high-temperature-wire-terminals", name: "High Temperature Wire Terminals", img: "/moonlights.github.io/assets/high_temperature_wire_terminals.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
      { slug: "wire-ferrules", name: "Wire Ferrules", img: "/moonlights.github.io/assets/wire_ferrules.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Crimp Wire Terminals" },
    ],
  },
  {
    slug: "cable-ties",
    name: "Cable Ties",
    img: "/moonlights.github.io/assets/standard_cable_ties.webp",
    desc: "Premium selection of cable ties sourced globally for high reliability and performance.",
    products: [
      { slug: "standard-cable-ties-18-to-50lb", name: "Standard Cable Ties 18 To 50Lb", img: "/moonlights.github.io/assets/standard_cable_ties.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
      { slug: "heavy-duty-cable-ties", name: "Heavy Duty Cable Ties", img: "/moonlights.github.io/assets/heavy_duty_cable_ties.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
      { slug: "economy-cable-ties", name: "Economy Cable Ties", img: "/moonlights.github.io/assets/economy_cable_ties.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
      { slug: "metal-tooth-cable-ties", name: "Metal Tooth Cable Ties", img: "/moonlights.github.io/assets/metal_tooth_cable_ties.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
      { slug: "stainless-steel-cable-ties", name: "Stainless Steel Cable Ties", img: "/moonlights.github.io/assets/stainless_steel_cable_ties.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
      { slug: "colored-fluorescent-cable-ties", name: "Colored Fluorescent Cable Ties", img: "/moonlights.github.io/assets/colored_fluorescent_cable_ties.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
      { slug: "chrome-plated-cable-ties", name: "Chrome Plated Cable Ties", img: "/moonlights.github.io/assets/chrome_plated_cable_ties.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
      { slug: "arctic-cable-ties", name: "Arctic Cable Ties", img: "/moonlights.github.io/assets/arctic_cable_ties.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
      { slug: "cable-tie-mounts", name: "Cable Tie Mounts", img: "/moonlights.github.io/assets/cable_tie_mounts.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
      { slug: "specialty-cable-ties", name: "Specialty Cable Ties", img: "/moonlights.github.io/assets/specialty_cable_ties.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
      { slug: "mounting-head-cable-ties", name: "Mounting Head Cable Ties", img: "/moonlights.github.io/assets/mounting_head_cable_ties.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
      { slug: "metal-detectable-cable-ties", name: "Metal Detectable Cable Ties", img: "/moonlights.github.io/assets/metal_detectable_cable_ties.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Cable Ties" },
    ],
  },
  {
    slug: "terminal-blocks",
    name: "Terminal Blocks",
    img: "/moonlights.github.io/assets/feed_through_terminal_blocks.webp",
    desc: "Premium selection of terminal blocks sourced globally for high reliability and performance.",
    products: [
      { slug: "feed-through-terminal-blocks", name: "Feed Through Terminal Blocks", img: "/moonlights.github.io/assets/feed_through_terminal_blocks.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Terminal Blocks" },
      { slug: "distribution-ground-terminal-blocks", name: "Distribution Ground Terminal Blocks", img: "/moonlights.github.io/assets/distribution_ground_terminal_blocks.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Terminal Blocks" },
      { slug: "disconnect-fuse-blocks", name: "Disconnect Fuse Blocks", img: "/moonlights.github.io/assets/disconnect_fuse_blocks.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Terminal Blocks" },
      { slug: "indicator-diode-circuit-blocks", name: "Indicator Diode Circuit Blocks", img: "/moonlights.github.io/assets/indicator_diode_circuit_blocks.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Terminal Blocks" },
      { slug: "spring-clamp-blocks", name: "Spring Clamp Blocks", img: "/moonlights.github.io/assets/spring_clamp_blocks.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Terminal Blocks" },
      { slug: "mini-blocks", name: "Mini Blocks", img: "/moonlights.github.io/assets/mini_blocks.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Terminal Blocks" },
      { slug: "din-rail", name: "Din Rail", img: "/moonlights.github.io/assets/din_rail.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Terminal Blocks" },
      { slug: "thermocouple-blocks", name: "Thermocouple Blocks", img: "/moonlights.github.io/assets/thermocouple_blocks.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Terminal Blocks" },
      { slug: "terminal-block-accessories", name: "Terminal Block Accessories", img: "/moonlights.github.io/assets/terminal_block_accessories.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Terminal Blocks" },
      { slug: "terminal-block-marker-tags", name: "Terminal Block Marker Tags", img: "/moonlights.github.io/assets/terminal_block_marker_tags.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Terminal Blocks" },
    ],
  },
  {
    slug: "heat-shrink-tubing",
    name: "Heat Shrink Tubing",
    img: "/moonlights.github.io/assets/thin_wall_heat_shrink_2_to_1_colors.webp",
    desc: "Premium selection of heat shrink tubing sourced globally for high reliability and performance.",
    products: [
      { slug: "thin-wall-heat-shrink-2-to-1-colors", name: "Thin Wall Heat Shrink 2 To 1 Colors", img: "/moonlights.github.io/assets/thin_wall_heat_shrink_2_to_1_colors.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Heat Shrink Tubing" },
      { slug: "discount-heat-shrink-tubing", name: "Discount Heat Shrink Tubing", img: "/moonlights.github.io/assets/discount_heat_shrink_tubing.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Heat Shrink Tubing" },
      { slug: "adhesive-lined-heat-shrink-3-to-1", name: "Adhesive Lined Heat Shrink 3 To 1", img: "/moonlights.github.io/assets/adhesive_lined_heat_shrink_3_to_1.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Heat Shrink Tubing" },
      { slug: "adhesive-lined-heat-shrink-tubing-medium-wall", name: "Adhesive Lined Heat Shrink Tubing Medium Wall", img: "/moonlights.github.io/assets/adhesive_lined_heat_shrink_tubing_medium_wall.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Heat Shrink Tubing" },
      { slug: "thick-wall-adhesive-direct-burial", name: "Thick Wall Adhesive Direct Burial", img: "/moonlights.github.io/assets/thick_wall_adhesive_direct_burial.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Heat Shrink Tubing" },
      { slug: "adhesive-lined-spools", name: "Adhesive Lined Spools", img: "/moonlights.github.io/assets/adhesive_lined_spools.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Heat Shrink Tubing" },
      { slug: "heat-shrink-for-electric-vehicles", name: "Heat Shrink For Electric Vehicles", img: "/moonlights.github.io/assets/heat_shrink_for_electric_vehicles.webp", spec: "Industrial grade, RoHS compliant, UL Listed.", category: "Heat Shrink Tubing" },
    ],
  },
  {
    slug: "wire-markers-labels",
    name: "Wire Markers & Labels",
    img: "/moonlights.github.io/assets/wire_marker_books.webp",
    desc: "Wire marker books, heat-shrink labels, wrap-around labels, and printable identification systems for circuit identification and code-compliant labeling.",
    products: [
      { slug: "wire-marker-books", name: "Wire Marker Books", img: "/moonlights.github.io/assets/wire_marker_books.webp", spec: "Pre-printed 0–9 and A–Z, vinyl cloth, self-laminating, UL Listed.", category: "Wire Markers & Labels" },
      { slug: "heat-shrink-wire-labels", name: "Heat Shrink Wire Labels", img: "/moonlights.github.io/assets/heat_shrink_wire_labels.webp", spec: "Thermal-transfer printable, 3:1 shrink, oil/solvent resistant.", category: "Wire Markers & Labels" },
      { slug: "self-laminating-wrap-labels", name: "Self-Laminating Wrap Labels", img: "/moonlights.github.io/assets/self_laminating_wrap_labels.webp", spec: "Clear protective tail, smudge-proof, for wire and cable.", category: "Wire Markers & Labels" },
      { slug: "wraparound-cable-markers", name: "Wraparound Cable Markers", img: "/moonlights.github.io/assets/wraparound_cable_markers.webp", spec: "Write-on PVC, self-adhesive, weatherproof, color-coded.", category: "Wire Markers & Labels" },
      { slug: "clip-on-wire-markers", name: "Clip-On Wire Markers", img: "/moonlights.github.io/assets/clip_on_wire_markers.webp", spec: "PVC, snap-on, reusable, 18–10 AWG, numbered and lettered.", category: "Wire Markers & Labels" },
      { slug: "arc-flash-warning-labels", name: "Arc Flash Warning Labels", img: "/moonlights.github.io/assets/arc_flash_warning_labels.webp", spec: "NEC 110.16 compliant, UV-resistant, polyester, self-adhesive.", category: "Wire Markers & Labels" },
      { slug: "voltage-marker-labels", name: "Voltage Marker Labels", img: "/moonlights.github.io/assets/voltage_marker_labels.webp", spec: "Pressure-sensitive vinyl, 480V/277V/240V/120V, high-visibility.", category: "Wire Markers & Labels" },
    ],
  },
  {
    slug: "solder-splice-connectors",
    name: "Solder Seal & Splice Connectors",
    img: "/moonlights.github.io/assets/solder_seal_heat_shrink_connectors.webp",
    desc: "Heat-activated solder seal connectors, waterproof splices, push-in connectors, and twist-on wire nuts for fast, reliable conductor joining.",
    products: [
      { slug: "solder-seal-heat-shrink-connectors", name: "Solder Seal Heat Shrink Connectors", img: "/moonlights.github.io/assets/solder_seal_heat_shrink_connectors.webp", spec: "Low-temp solder ring, dual adhesive seal, 26–10 AWG, waterproof.", category: "Solder Seal & Splice Connectors" },
      { slug: "waterproof-butt-splice-connectors", name: "Waterproof Butt Splice Connectors", img: "/moonlights.github.io/assets/waterproof_butt_splice_connectors.webp", spec: "Adhesive-lined heat shrink barrel, tinned copper, IP67, 22–10 AWG.", category: "Solder Seal & Splice Connectors" },
      { slug: "push-in-wire-connectors", name: "Push-In Wire Connectors", img: "/moonlights.github.io/assets/push_in_wire_connectors.webp", spec: "Lever or push-in, 2–8 port, 24–10 AWG, 600V, transparent housing.", category: "Solder Seal & Splice Connectors" },
      { slug: "twist-on-wire-nuts", name: "Twist-On Wire Nuts", img: "/moonlights.github.io/assets/twist_on_wire_nuts.webp", spec: "Color-coded, 22–6 AWG range, live-action spring, UL 486C.", category: "Solder Seal & Splice Connectors" },
      { slug: "waterproof-wire-nuts", name: "Waterproof Wire Nuts", img: "/moonlights.github.io/assets/waterproof_wire_nuts.webp", spec: "Pre-filled silicone sealant, direct burial rated, 22–8 AWG.", category: "Solder Seal & Splice Connectors" },
      { slug: "in-line-splice-connectors", name: "In-Line Splice Connectors", img: "/moonlights.github.io/assets/in_line_splice_connectors.webp", spec: "Heat shrink, single-wire pass-through, tinned barrel, IP68.", category: "Solder Seal & Splice Connectors" },
    ],
  },
  {
    slug: "panel-enclosure-accessories",
    name: "Panel & Enclosure Accessories",
    img: "/moonlights.github.io/assets/din_rail_35mm_slotted.webp",
    desc: "DIN rail, slotted wire duct, panel cooling fans, filter fans, and mounting accessories for organizing and protecting control panel interiors.",
    products: [
      { slug: "din-rail-35mm-slotted", name: "DIN Rail 35mm Slotted", img: "/moonlights.github.io/assets/din_rail_35mm_slotted.webp", spec: "35mm × 7.5mm, slotted steel, zinc plated, 1m and 2m lengths.", category: "Panel & Enclosure Accessories" },
      { slug: "slotted-wire-duct-with-cover", name: "Slotted Wire Duct with Cover", img: "/moonlights.github.io/assets/slotted_wire_duct_with_cover.webp", spec: "PVC, 1\"–4\" widths, UL94 V-0, narrow/wide finger, gray.", category: "Panel & Enclosure Accessories" },
      { slug: "panel-cooling-filter-fan", name: "Panel Cooling Filter Fan", img: "/moonlights.github.io/assets/panel_cooling_filter_fan.webp", spec: "115/230V, 50–200 CFM, IP54, snap-in, replaceable filter mat.", category: "Panel & Enclosure Accessories" },
      { slug: "enclosure-thermostat", name: "Enclosure Thermostat", img: "/moonlights.github.io/assets/enclosure_thermostat.webp", spec: "NC/NO, 32–140°F adjustable, DIN-rail clip, 250V/10A contact.", category: "Panel & Enclosure Accessories" },
      { slug: "end-brackets-din-rail", name: "DIN Rail End Brackets", img: "/moonlights.github.io/assets/end_brackets_din_rail.webp", spec: "Screw-clamp, for terminal blocks, polyamide, gray, 6–10mm.", category: "Panel & Enclosure Accessories" },
      { slug: "panel-mount-led-indicators", name: "Panel-Mount LED Indicators", img: "/moonlights.github.io/assets/panel_mount_led_indicators.webp", spec: "22mm, 24V/120V/240V, red/green/amber, IP65, chrome bezel.", category: "Panel & Enclosure Accessories" },
    ],
  },
  {
    slug: "grommets-bushings",
    name: "Grommets, Bushings & Plugs",
    img: "/moonlights.github.io/assets/rubber_grommets_assortment.webp",
    desc: "Rubber grommets, snap bushings, plastic hole plugs, and edge protection for safely passing conductors through panel and enclosure openings.",
    products: [
      { slug: "rubber-grommets-assortment", name: "Rubber Grommets Assortment", img: "/moonlights.github.io/assets/rubber_grommets_assortment.webp", spec: "EPDM rubber, 1/8\"–2\" hole sizes, oil resistant, assorted kit.", category: "Grommets, Bushings & Plugs" },
      { slug: "snap-in-nylon-bushings", name: "Snap-In Nylon Bushings", img: "/moonlights.github.io/assets/snap_in_nylon_bushings.webp", spec: "Nylon 6/6, push-in, smooth bore, 3/8\"–2\", flame retardant.", category: "Grommets, Bushings & Plugs" },
      { slug: "plastic-hole-plugs", name: "Plastic Hole Plugs", img: "/moonlights.github.io/assets/plastic_hole_plugs.webp", spec: "LDPE, snap-in, 1/4\"–2-1/2\", black, seals unused knockouts.", category: "Grommets, Bushings & Plugs" },
      { slug: "liquid-tight-cord-grips", name: "Liquid-Tight Cord Grips", img: "/moonlights.github.io/assets/liquid_tight_cord_grips.webp", spec: "Nylon, 1/2\"–2\" NPT, IP68, with sealing ring and locknut.", category: "Grommets, Bushings & Plugs" },
      { slug: "edge-trim-grommet-strip", name: "Edge Trim Grommet Strip", img: "/moonlights.github.io/assets/edge_trim_grommet_strip.webp", spec: "PVC with steel clip core, 1/16\"–1/4\" edge, by-the-foot.", category: "Grommets, Bushings & Plugs" },
      { slug: "snap-bushing-oval", name: "Oval Snap Bushings", img: "/moonlights.github.io/assets/snap_bushing_oval.webp", spec: "Nylon, oval profile, for multi-conductor pass-through, black.", category: "Grommets, Bushings & Plugs" },
    ],
  },
];

// Flat list of all products for dynamic routing
export const allIndustrialProducts = industrialCategories.flatMap((cat) =>
  cat.products.map((p) => ({ ...p, categorySlug: cat.slug, categoryName: cat.name }))
);
