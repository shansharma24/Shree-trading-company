export const COMPANY_INFO = {
  name: "Shree Trading Company",
  tagline: "Commercial Equipment & Precision Printing Solutions",
  shortAddress: "4658/21, Ansari Road, Daryaganj, near Fire Station, Delhi - 110002",
  fullAddress: "Shree Trading Company, 4658/21, Ansari Road, Daryaganj, Near Fire Station, Central Delhi - 110002, India",
  phone: "+91 98995 47205",
  phoneRaw: "+919899547205",
  whatsapp: "+91 98995 47205",
  whatsappRaw: "919899547205",
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
    description: "High-speed A3/A4 commercial copiers with duplex printing and scanning for high-volume offices.",
    tags: ["A3 & A4 Duplex", "High-Volume", "Multi-Brand"],
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
    description: "Reliable monochrome & color laser printers with network duplexing for corporate desks.",
    tags: ["Up to 45 PPM", "LAN & Wi-Fi", "Heavy Duty"],
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
    description: "High-density toner cartridges ensuring sharp dark prints with certified page yields.",
    tags: ["High Page Yield", "Leak Tested", "OEM Quality"],
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
    description: "High-yield toner bottles and cartridges engineered for commercial photocopiers.",
    tags: ["10K-45K+ Pages", "Canon / Ricoh", "Bulk Stock"],
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
    description: "Calibrated micro-powder refilling with complete residue chamber vacuum cleaning.",
    tags: ["30-45 Min Turnaround", "70% Cost Savings", "Tested"],
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
    description: "Tested OPC drums, blades, PCR rollers, gears, and fuser assemblies in stock.",
    tags: ["500+ Spares Ready", "Pre-Tested", "Fast Dispatch"],
    inquiryTopic: "Spare Parts Inquiry"
  }
];

export const SERVICES_LIST = [
  {
    id: "refill",
    icon: "water_drop",
    title: "Precision Toner Refilling",
    description: "Calibrated laser toner refilling with chamber vacuum cleaning and microchip resets.",
    points: [
      "Zero-leak guarantee & deep black density",
      "Express 30-45 mins turnaround in Daryaganj"
    ],
    badge: "Most Popular",
    inquiry: "Toner Refilling"
  },
  {
    id: "printer-repair",
    icon: "hardware",
    title: "Printer Repair & Diagnosis",
    description: "Prompt troubleshooting and component repair for paper jams, logic boards, and fusers.",
    points: [
      "Pickup roller & separation pad replacements",
      "Laser scanner unit optical cleaning"
    ],
    badge: "Fast Turnaround",
    inquiry: "Printer Repair"
  },
  {
    id: "copier-repair",
    icon: "settings_suggest",
    title: "Photocopier Repair & AMC",
    description: "Dedicated diagnostics, ADF alignment, and annual maintenance contracts for copier fleets.",
    points: [
      "Error code clearance & developer calibration",
      "Flexible annual AMC maintenance plans"
    ],
    badge: "Enterprise Grade",
    inquiry: "Photocopier Repair"
  },
  {
    id: "preventative-service",
    icon: "cleaning_services",
    title: "Preventative Servicing & Overhaul",
    description: "Internal dust extraction, gear lubrication, and paper path decalcification to prevent downtime.",
    points: [
      "Comprehensive paper path & sensor cleaning",
      "High-grade silicone gear lubrication"
    ],
    badge: "Proactive Care",
    inquiry: "Preventative Servicing"
  },
  {
    id: "bulk-supply",
    icon: "inventory_2",
    title: "Cartridge & Bulk Toner Supply",
    description: "Wholesale supplies of toner bottles, cartridges, and spare parts with GST billing.",
    points: [
      "Special institutional rates for bulk orders",
      "Doorstep delivery across Delhi NCR"
    ],
    badge: "Wholesale Ready",
    inquiry: "Cartridge Supplies"
  },
  {
    id: "machine-sales-lease",
    icon: "storefront",
    title: "Machine Sales & Corporate Lease",
    description: "Brand-new and refurbished heavy-duty copiers and printers with flexible lease plans.",
    points: [
      "Flexible monthly rental / leasing schemes",
      "Complete installation & priority technical support"
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
