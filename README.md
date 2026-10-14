# Shree Trading Company — React Web Application

A modern, high-converting React application built for **Shree Trading Company** (Daryaganj, Delhi) based on the official Stitch project designs and specifications.

---

## 🚀 Key Features

1. **Top Utilities & Announcement Bar**:
   - Location: *4658/21, Ansari Road, Daryaganj, near Fire Station, Delhi - 110002*
   - Working hours: *Mon - Sat: 10:00 AM – 7:30 PM (Sunday Closed)*
   - One-click phone hotline (`tel:+919811123456`) and direct WhatsApp link.

2. **Hero Showcase**:
   - Primary value proposition: *Sales • Supplies • Repair • Service*
   - Central Delhi commercial hardware imagery & certified technician floating badges.
   - Dual action CTAs with trust checkmarks (100% Quality Checked, Precision Toner Fill, Daryaganj Ansari Rd, Same-Day Turnaround).

3. **Service Quick Bar**:
   - Machine Sales & Lease (Printers & Copiers)
   - Toner Refilling (Clean, High-Yield Micro Fill)
   - Fast Diagnostics (Component-Level Repair)
   - Corporate Supplies (Bulk Toner & Spares)

4. **Interactive Hardware & Supplies Catalog**:
   - Category filtering: *All*, *Photocopier Machines*, *Office Printers*, *Toner & Cartridges*, *Refilling & Maintenance*.
   - Detailed specification cards with high-definition assets.
   - *"Send Inquiry"* triggers automatic smooth-scroll & form prefilling.

5. **Instant Cost & Refill Estimator Calculator**:
   - Interactive estimation tool allowing customers to select machine type, service type, and cartridge quantity.
   - Real-time calculation of estimated cost, turnaround time, and savings compared to OEM replacements.
   - One-click transfer to inquiry form.

6. **Specialized Technical Services**:
   - Precision Toner Refilling (vacuum chamber cleaning, micro-refined high density carbon)
   - Photocopier & Printer Diagnostics & Repairs (fusers, logic boards, feed rollers)
   - Photocopier AMC Servicing & Fleet Maintenance
   - Direct Daryaganj workshop assistance hotline banner.

7. **Store Location, Workshop & Contact Desk**:
   - Central Daryaganj address with one-click Google Maps navigation.
   - Responsive quote inquiry form with urgency toggle ("Same-Day Turnaround").
   - Direct *"Instant WhatsApp Send"* button formatting inquiry into a ready-to-send WhatsApp chat.

8. **Quick Quote Modal & Floating WhatsApp**:
   - Accessible from any section or card.
   - Floating WhatsApp button with pulse indicator and hover tooltip.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS Design System with Material Design 3 tokens, CSS variables, and modern glassmorphism
- **Typography & Icons**: Google Fonts ([Inter](https://fonts.google.com/specimen/Inter)), Google Material Symbols Outlined, and Lucide React
- **Assets**: Downloaded and locally hosted in `/public/images/`

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── images/              # High-resolution commercial equipment & workshop photos
│   └── stitch-reference/    # Original downloaded Stitch project reference HTML screens
├── src/
│   ├── components/
│   │   ├── TopBar.jsx            # Utility contact strip
│   │   ├── Navbar.jsx            # Responsive navigation & mobile drawer
│   │   ├── Hero.jsx              # Hero section with equipment showcase
│   │   ├── PillarsStrip.jsx      # 4 quick service metrics
│   │   ├── Catalog.jsx           # Filterable products & supplies grid
│   │   ├── CostEstimator.jsx     # Interactive cost & savings calculator
│   │   ├── Services.jsx          # Specialized repair & maintenance cards
│   │   ├── About.jsx             # Workshop credentials & local narrative
│   │   ├── WhyUs.jsx             # 5 core value proposition pillars
│   │   ├── Faq.jsx               # Expandable accordion FAQs
│   │   ├── ContactForm.jsx       # Inquiry form with WhatsApp integration
│   │   ├── Footer.jsx            # Corporate footer with direct links
│   │   ├── FloatingWhatsApp.jsx  # Floating WhatsApp button
│   │   └── QuoteModal.jsx        # Quick quote dialog modal
│   ├── data/
│   │   └── companyData.js        # Centralized business data, specs & catalog
│   ├── App.jsx                   # Main application layout & state handlers
│   ├── index.css                 # Custom CSS design tokens & styling
│   └── main.jsx                  # React application entrypoint
├── index.html                    # SEO meta tags, title & fonts
├── package.json
└── vite.config.js
```
