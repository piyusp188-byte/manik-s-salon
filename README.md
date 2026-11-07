# Monik's Salon & Academy — Website Codebase

A modern, fast, SEO-optimized, mobile-first website for **Monik's Salon & Academy**, located in Bazar Peth, Navipeth, Mahad, Maharashtra.

---

## 🌟 Key Highlights

- **Astro + Tailwind CSS v4 Engine:** Ultra-fast static generation with zero unnecessary JavaScript.
- **Cinematic Video Hero:** Full-viewport looping video background with high-contrast luxury dark aesthetic (inspired by modern high-end salon websites), including play/pause accessible controls and `prefers-reduced-motion` compliance.
- **Bespoke Logo & Branding:** Custom SVG luxury monogram and typography (`MONIK'S SALON & ACADEMY • MAHAD`) with rich warm gold and champagne accents.
- **Local SEO & Schema.org Ready:**
  - One H1 per page, keyword-targeted titles & meta descriptions
  - Full `LocalBusiness` (`BeautySalon`) JSON-LD schema with exact NAP, geo coordinates, and working hours
  - `BreadcrumbList` and `Course` structured data for Academy courses
  - Trailing slash canonicals, `sitemap.xml`, and `robots.txt`
- **Zero-Friction Booking:** Direct WhatsApp pre-filled booking flow and modal form that requires no expensive or complicated server backend.
- **Sticky Mobile Bottom Bar:** Instant one-tap Call (`+91 84460 03385`), WhatsApp chat, and Book Appointment actions for mobile users.
- **100% English & Compliance:** Zero invented prices or claims; neutral placeholders for real client photography.

---

## 📁 Project Structure

```
d:\monik's salon\
├── public/
│   ├── favicon.svg             # Luxury gold monogram favicon
│   ├── logo.svg                # Full SVG vector brand logo
│   ├── robots.txt              # Search engine directives
│   └── images/
│       └── hero-poster.svg     # Ambient SVG fallback for video
├── src/
│   ├── components/
│   │   ├── Header.astro        # Sticky navigation with mobile menu
│   │   ├── Footer.astro        # NAP, hours, quick links, Google rating badge
│   │   ├── MobileBar.astro     # Sticky bottom bar (Call | WhatsApp | Book)
│   │   ├── VideoHero.astro     # Video hero with controls & CTA
│   │   ├── Logo.astro          # Reusable SVG logo (full, monogram, compact)
│   │   ├── ServiceCard.astro   # Card for each salon service
│   │   ├── CourseCard.astro    # Card for academy training courses
│   │   ├── TestimonialCard.astro # Google review cards with 5 stars
│   │   ├── EnquiryModal.astro  # Interactive booking popup
│   │   └── Breadcrumb.astro    # Accessible breadcrumb with schema
│   ├── data/
│   │   └── siteData.ts         # Central business details, services, courses, hours
│   ├── layouts/
│   │   └── BaseLayout.astro    # Global HTML wrapper, SEO meta, JSON-LD schemas
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── services.astro      # Services overview & details
│   │   ├── academy.astro       # Academy courses & enrolment
│   │   ├── about.astro         # Salon story, values & women-owned identity
│   │   ├── gallery.astro       # Work showcase & photo placeholders
│   │   ├── reviews.astro       # Client testimonials & Google 4.7★ reputation
│   │   ├── contact.astro       # Google Map embed, address & enquiry form
│   │   └── 404.astro           # Custom 404 error page
│   └── styles/
│       └── global.css          # Tailwind CSS v4 setup & custom properties
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start local development server
npm run dev

# 3. Build production static bundle (generates in /dist)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🎨 Color Palette & Design Tokens

Designed specifically for luxury beauty and video hero contrast:
- **Obsidian Black / Deep Charcoal:** `#0c0a09` / `#171513`
- **Surface Cards:** `#1f1c19` with subtle border `#332d28`
- **Warm Champagne Gold:** `#D4AF37` / `#E5B972`
- **Rose Gold Accent:** `#C98A68` / `#E5B399`
- **Text:** `#FCFAF8` (crisp high contrast) & `#B8AEA5` (muted details)

---

## ✍️ How the Owner Can Edit Content (No Coding Needed)

All business details, text, prices, and courses are maintained in a single clean file:
👉 **`src/data/siteData.ts`**

| What you want to change | Where to edit in `src/data/siteData.ts` |
|---|---|
| **Opening Hours** | Update `openingHours` object |
| **Phone Number** | Update `phoneRaw` and `phoneInternational` |
| **Prices** | Update `pricePlaceholder` in the `SERVICES` array |
| **Course Fees & Schedule**| Update `feePlaceholder` and `durationPlaceholder` in `COURSES` |
| **Reviews & Quotes** | Add or update objects in the `TESTIMONIALS` array |
| **Hero Video** | Replace the video URL in `src/components/VideoHero.astro` or place your own video at `public/videos/salon-hero.mp4` |
| **Real Photos** | Save photos into `public/images/` and update references in `siteData.ts` |

---

## 🚢 Deployment to Cloudflare Pages / Netlify / Vercel

1. Push this folder to a GitHub repository.
2. In **Cloudflare Pages** (or Netlify/Vercel):
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Connect your custom domain (e.g. `monikssalon.com`) in the dashboard. SSL / HTTPS is automatic and free.
