export const COMPANY_INFO = {
  name: "Shree Trading Company",
  tagline: "Commercial Equipment & Precision Printing Solutions",
  shortAddress: "4658/21, Ansari Road, Daryaganj, near Fire Station, Delhi - 110002",
  fullAddress: "Shree Trading Company, 4658/21, Ansari Road, Daryaganj, Near Fire Station, Central Delhi - 110002, India",
  phone: "+91 98111 23456",
  phoneRaw: "+919811123456",
  whatsapp: "+91 98111 23456",
  whatsappRaw: "919811123456",
  email: "contact@shreetrading.delhi",
  hours: "Mon - Sat: 10:00 AM – 7:30 PM",
  sundayStatus: "Closed",
  googleMapsUrl: "https://maps.google.com/?q=4658%2F21+Ansari+Road+Daryaganj+Delhi+Fire+Station+110002"
};

export const QUICK_METRICS = [
  {
    icon: "print",
    title: "Machine Sales & Lease",
    subtitle: "Heavy-Duty Copiers & Printers",
    badge: "Verified Units"
  },
  {
    icon: "water_drop",
    title: "Toner Refilling",
    subtitle: "High-Yield Micro-Fill Carbon",
    badge: "Zero-Leak"
  },
  {
    icon: "home_repair_service",
    title: "Fast Diagnostics",
    subtitle: "Component-Level Repair",
    badge: "Same-Day"
  },
  {
    icon: "inventory",
    title: "Corporate Supplies",
    subtitle: "Bulk Cartridges & Spares",
    badge: "Ready Stock"
  }
];

export const PRODUCTS_CATALOG = [
  {
    id: "copier-heavy",
    category: "copiers",
    name: "Enterprise Photocopier Machines",
    badge: "Heavy Duty",
    badgeColor: "primary",
    image: "/images/copier_hero.jpg",
    alt: "Photocopier Machines Commercial Equipment",
    description: "High-efficiency commercial photocopying equipment for offices, institutions, and document centers requiring high-speed dual-sided throughput.",
    specs: [
      { label: "Throughput", value: "A4 & A3 Multi-Tray" },
      { label: "Duty Cycle", value: "High-Volume Office (Up to 80K/mo)" },
      { label: "Features", value: "Auto Duplex, Network Scanning, Touch Panel" },
      { label: "Brands", value: "Canon / Ricoh / Sharp / Konica" }
    ],
    inquiryTopic: "Photocopier Sales & Lease"
  },
  {
    id: "laser-printer",
    category: "printers",
    name: "Commercial Laser Printers",
    badge: "Office Workhorse",
    badgeColor: "secondary",
    image: "/images/printer.jpg",
    alt: "Commercial Laser Printers",
    description: "Heavy-duty laser and office printing equipment for varied corporate requirements with networked Ethernet, wireless print, and duplex capabilities.",
    specs: [
      { label: "Technology", value: "Monochrome & Laser Color" },
      { label: "Speed", value: "Up to 38-45 PPM" },
      { label: "Connectivity", value: "High-speed USB / Gigabit LAN / Wi-Fi" },
      { label: "Usage", value: "Legal Firms, Accounts, Admin Desks" }
    ],
    inquiryTopic: "Printer Sales"
  },
  {
    id: "laser-toner",
    category: "cartridges",
    name: "Laser Printer Toner Cartridges",
    badge: "Consumables",
    badgeColor: "amber",
    image: "/images/toner.jpg",
    alt: "Laser Printer Toner Cartridges",
    description: "Laser printer toner cartridges and reliable compatible supplies ensuring deep black reproduction, razor-sharp lines, and certified high page yields.",
    specs: [
      { label: "Compatibility", value: "HP, Canon, Brother, Ricoh, Samsung" },
      { label: "Standard Yield", value: "1,500 – 6,500 Pages" },
      { label: "Quality Check", value: "100% Leak & Drum Checked" },
      { label: "Availability", value: "Ready in Stock / Bulk Volume" }
    ],
    inquiryTopic: "Cartridge Supplies"
  },
  {
    id: "copier-cartridge",
    category: "cartridges",
    name: "Photocopier Cartridges & Toners",
    badge: "Commercial Bulk",
    badgeColor: "primary",
    image: "/images/cartridges_supplies.jpg",
    alt: "Photocopier High Yield Cartridges",
    description: "High-yield cartridges and micro-ground toner bottles engineered specifically for large-format photocopiers and multi-user administrative reproduction.",
    specs: [
      { label: "Yield", value: "10,000 to 45,000+ Pages" },
      { label: "Form Factor", value: "High-Density Bottle / Cartridge" },
      { label: "Compatibility", value: "Canon iR Series, Ricoh MP, Sharp AR" },
      { label: "Warranty", value: "Replacement Guarantee Against Defects" }
    ],
    inquiryTopic: "Photocopier Cartridge Supplies"
  },
  {
    id: "toner-refilling",
    category: "services",
    name: "Precision Toner Refilling Station",
    badge: "Eco & Budget",
    badgeColor: "amber",
    image: "/images/workshop_tech.jpg",
    alt: "Precision Toner Refilling Station",
    description: "Professional refill service using calibrated micro-carbon toner powders, complete vacuum cleaning of waste toner chambers, and roller checks.",
    specs: [
      { label: "Turnaround", value: "Express 30-45 Mins / Same Day" },
      { label: "Service Mode", value: "Daryaganj Walk-in / Drop-off" },
      { label: "Yield Guarantee", value: "Identical to Original OEM Yield" },
      { label: "Eco Impact", value: "Up to 70% Cost Savings vs New" }
    ],
    inquiryTopic: "Toner Refilling"
  },
  {
    id: "spares-maintenance",
    category: "spares",
    name: "Genuine Spares, Drums & Rollers",
    badge: "Technical Spares",
    badgeColor: "secondary",
    image: "/images/technician.jpg",
    alt: "Printer and Photocopier Spare Parts",
    description: "Comprehensive inventory of OPC drums, doctor blades, primary charge rollers (PCR), pickup rollers, fuser film sleeves, and gears.",
    specs: [
      { label: "Inventory", value: "Over 500+ Spares In Stock" },
      { label: "Compatibility", value: "All Major Laser & Copier Engines" },
      { label: "Testing", value: "Pre-tested in Workshop" },
      { label: "Support", value: "Installation Assistance Available" }
    ],
    inquiryTopic: "Spare Parts Inquiry"
  }
];

export const SERVICES_LIST = [
  {
    id: "refill",
    icon: "water_drop",
    title: "Precision Toner Refilling",
    description: "Calibrated laser toner filling with zero-leak guarantee, high page-yield black density, vacuum chamber residue cleaning, and microchip resetting.",
    points: [
      "Micro-refined carbon powder tailored by model",
      "Thorough magnetic roller and blade cleaning",
      "Waste hopper emptying and inspection",
      "Immediate test print verification before dispatch"
    ],
    badge: "Most Popular",
    inquiry: "Toner Refilling"
  },
  {
    id: "printer-repair",
    icon: "hardware",
    title: "Printer Repair & Diagnosis",
    description: "Troubleshooting and component-level repair for recurring paper feed jams, logic board issues, fuser errors (50.x), and mechanical grinding.",
    points: [
      "Pickup roller and separation pad replacement",
      "Laser scanner assembly cleaning and realignment",
      "Fuser film and heating element repairs",
      "Driver and firmware communication setup"
    ],
    badge: "Fast Turnaround",
    inquiry: "Printer Repair"
  },
  {
    id: "copier-repair",
    icon: "settings_suggest",
    title: "Photocopier Repair & AMC",
    description: "Dedicated maintenance for multi-function commercial photocopiers. Scanner glass realignment, transfer belt checks, and motherboard diagnosis.",
    points: [
      "Error code clearance and troubleshooting (E000, etc.)",
      "Developer unit maintenance and bead calibration",
      "High-speed feeder (ADF) alignment & roller servicing",
      "Routine annual maintenance contract (AMC) support"
    ],
    badge: "Enterprise Grade",
    inquiry: "Photocopier Repair"
  },
  {
    id: "preventative-service",
    icon: "cleaning_services",
    title: "Preventative Servicing & Overhaul",
    description: "Deep internal dust extraction, paper path decalcification, lubrication, and sensor calibration to prolong machine lifetime.",
    points: [
      "Comprehensive paper path cleaning",
      "Optical sensor and glass decontamination",
      "High-grade silicone gear lubrication",
      "Drastic reduction in random jam occurrences"
    ],
    badge: "Proactive Care",
    inquiry: "Preventative Servicing"
  },
  {
    id: "bulk-supply",
    icon: "inventory_2",
    title: "Cartridge & Bulk Toner Supply",
    description: "Bulk and institutional supplies of cartridges, toner bottles, developer units, and spares with volume discounts for offices and print centers.",
    points: [
      "Wholesale pricing for schools, lawyers & offices",
      "Consistent batch quality with deep black density",
      "GST billing and doorstep dispatch in Delhi NCR",
      "Guaranteed replacement against leaking or streaks"
    ],
    badge: "Wholesale Ready",
    inquiry: "Cartridge Supplies"
  },
  {
    id: "machine-sales-lease",
    icon: "storefront",
    title: "Machine Sales & Corporate Lease",
    description: "Commercial photocopiers and multi-function printers vetted for duty cycle resilience, low operating per-page cost, and accessible spares.",
    points: [
      "Flexible monthly rental / leasing schemes",
      "Refurbished & brand-new machine options",
      "Complete installation & staff training included",
      "Post-purchase servicing priority support"
    ],
    badge: "Flexible Terms",
    inquiry: "Machine Sales"
  }
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "All-in-One Printing Hub",
    description: "From purchasing equipment to sourcing toner cartridges and availing timely repairs, manage your entire printing infrastructure under one roof in Daryaganj."
  },
  {
    number: "02",
    title: "Micro-Calibrated Refilling",
    description: "We use calibrated toner powders matched specifically to equipment specifications, ensuring dark, crisp output and optimal page yield without smudges or streaks."
  },
  {
    number: "03",
    title: "Component-Level Repair Support",
    description: "Thorough fault isolation for both desktop laser models and commercial copiers, avoiding unnecessary and expensive whole-assembly replacements."
  },
  {
    number: "04",
    title: "Prompt Direct Assistance",
    description: "No lengthy automated IVRs. Reach us directly via phone, WhatsApp, or walk-in at our Daryaganj shop for immediate quotation and status updates."
  },
  {
    number: "05",
    title: "Central Daryaganj Location",
    description: "Centrally situated at 4658/21, Ansari Road, near Delhi Fire Station. Highly accessible for businesses across Central, North, and Old Delhi for walk-in drops and pickups."
  }
];

export const FAQS = [
  {
    q: "How does toner refilling compare to buying an original OEM cartridge?",
    a: "Our precision refilling utilizes model-calibrated high-density micro-toner powder along with vacuum cleaning of the waste toner chamber and roller inspection. This achieves print sharpness and page yields practically identical to original OEM cartridges, while saving your business 60% to 75% in printing costs."
  },
  {
    q: "How long does a cartridge refill or printer diagnostic take?",
    a: "Standard laser cartridges dropped off at our Daryaganj workshop are typically refilled within 30 to 45 minutes. For printer or photocopier repairs, we provide an initial diagnosis within a few hours or the same business day."
  },
  {
    q: "Do you offer on-site service visits for heavy photocopiers in Delhi NCR?",
    a: "Yes! For large commercial photocopiers and corporate office printers that cannot be easily transported, our certified technicians offer scheduled on-site inspection and servicing across Delhi NCR."
  },
  {
    q: "Which printer and photocopier brands do you service and supply?",
    a: "We actively support Canon, HP LaserJet, Brother, Ricoh, Sharp, Konica Minolta, Samsung, Epson, and Xerox for both machines, cartridges, and spare parts."
  },
  {
    q: "Where exactly are you located in Daryaganj?",
    a: "We are at 4658/21, Ansari Road, Daryaganj, Delhi - 110002, just steps from the landmark Delhi Fire Station. You can easily find us on Google Maps or call us for directions."
  }
];
