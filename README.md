# Monik's Salon & Academy — Official Website

A modern, mobile-first, and SEO-optimized website built for **Monik's Salon & Academy**, a premier women-owned beauty parlour and beauty academy situated in Bazar Peth, Navipeth, Mahad, Maharashtra 402301.

🔗 **Live GitHub Repository:** [https://github.com/piyusp188-byte/manik-s-salon](https://github.com/piyusp188-byte/manik-s-salon)

---

## 🌟 Key Features & Highlights

- **Cinematic Video Hero:** Full-viewport, seamless continuous looping background video encoded in multi-bitrate streams (`hero-desktop.mp4`, `hero-desktop.webm`, `hero-mobile.mp4`, `hero-mobile.webm`) with automatic muted autoplay.
- **Deep Plum & Blush Luxury Aesthetic:** Elegant feminine palette featuring Royal Deep Plum (`#6B2D5E`), Soft Warm Blush (`#FBEFF1`), Rose Border (`#E8D9DE`), and Warm Terracotta accents (`#C4845A`).
- **Interactive Artistry & Academy Gallery:**
  - 12 high-resolution, culturally authentic photography assets generated for bridal makeup, Arabic mehndi, hydra facials, hair spa, pedicures, and academy sessions.
  - Interactive Lightbox modal with full image view, detailed caption, and direct 1-click WhatsApp enquiry.
  - Instant client-side category filtering (All Work, Bridal & Makeup, Mehndi Art, Facial & Skin, Hair & Pedicure, Academy Classes, Salon Ambience).
  - All images compressed into next-gen WebP (`37 KB`–`127 KB`) for instant mobile loading.
- **Visual Service & Academy Cards:** Visual image headers integrated across all service cards (`/services/`) and academy courses (`/academy/`).
- **Zero-Friction Booking & Enquiries:**
  - Direct WhatsApp links pre-filled with specific service and course inquiries (`+91 84460 03385`).
  - Sticky mobile bottom bar with instant 1-tap Call, WhatsApp, and Booking triggers.
  - Interactive accessible modal popup for on-site inquiry submissions.
- **Local SEO & Schema.org Structured Data:**
  - Full `LocalBusiness` (`BeautySalon`) JSON-LD schema with exact NAP, geo coordinates (`18.0833, 73.4167`), and working hours (10:00 AM – 8:00 PM; opens 9:00 AM Sundays).
  - `Course` schemas for all 4 academy offerings.
  - `FAQPage` schema on homepage for rich search engine result snippets.
  - `BreadcrumbList` navigation schemas on all sub-pages.
  - Auto-generated `sitemap.xml` and `robots.txt`.
- **100% English Compliance:** Fully strictly English across headings, metadata, schema, alt text, and URLs.

---

## 📁 Project Architecture

```
d:\monik's salon\
├── public/
│   ├── favicon.svg             # Luxury monogram brand favicon
│   ├── logo.svg                # Full SVG brand mark
│   ├── robots.txt              # Search crawler directives
│   ├── _headers                # Cache-control & security headers
│   ├── site.webmanifest        # PWA & mobile web app manifest
│   ├── video/                  # Optimized streaming hero videos
│   │   ├── hero-desktop.mp4    # 1080p landscape H.264
│   │   ├── hero-desktop.webm   # 1080p VP9 webm
│   │   ├── hero-mobile.mp4     # 540x676 portrait H.264
│   │   └── hero-mobile.webm    # 540x676 portrait VP9
│   └── images/
│       └── gallery/            # 12 WebP & JPG gallery photos
├── src/
│   ├── components/
│   │   ├── Header.astro        # Sticky navigation with mobile menu
│   │   ├── Footer.astro        # NAP, hours, quick links, rating badge
│   │   ├── MobileBar.astro     # Sticky bottom bar (Call | WhatsApp | Book)
│   │   ├── VideoHero.astro     # Continuous looping hero video background
│   │   ├── TrustStrip.astro    # 4.7★ Google badge & core trust pillars
│   │   ├── ServiceCard.astro   # Service card with image header & pricing
│   │   ├── CourseCard.astro    # Academy training card with curriculum
│   │   ├── TestimonialCard.astro # Google review cards with 5 stars
│   │   ├── FAQ.astro           # Interactive FAQ accordion with schema
│   │   ├── EnquiryModal.astro  # Interactive booking popup form
│   │   └── Breadcrumb.astro    # Breadcrumb with BreadcrumbList schema
│   ├── data/
│   │   └── siteData.ts         # Central data source for hours, services, courses, reviews
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base HTML template, SEO meta, JSON-LD schemas
│   ├── pages/
│   │   ├── index.astro         # Home page with hero video & showcases
│   │   ├── services.astro      # Beauty menu with category anchors
│   │   ├── academy.astro       # Academy courses & hands-on curriculum
│   │   ├── about.astro         # Women-owned story & salon values
│   │   ├── gallery.astro       # 12-photo portfolio with lightbox & filter
│   │   ├── reviews.astro       # 4.7★ Google rating reputation page
│   │   ├── contact.astro       # Google Maps embed, hours & direct forms
│   │   └── 404.astro           # Friendly 404 page
│   └── styles/
│       ├── global.css          # Tailwind CSS v4 design tokens
│       └── video-hero.css      # Hero video positioning & overlay styles
├── scripts/
│   └── process-gallery.js      # Image processing script for gallery photos
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started Locally

```bash
# 1. Clone repository
git clone https://github.com/piyusp188-byte/manik-s-salon.git
cd manik-s-salon

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production (output in /dist)
npm run build

# 5. Preview production build
npm run preview
```

---

## 🚢 Deploying to Production (Free & Instant)

Since the website is built with Astro static output, it can be deployed on any modern static host in 60 seconds with automatic HTTPS and global CDN caching:

### Option A: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New Project"** and import `piyusp188-byte/manik-s-salon`.
3. Vercel automatically detects Astro (`Build Command: npm run build`, `Output Directory: dist`).
4. Click **Deploy**.

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Select `piyusp188-byte/manik-s-salon`.
3. Build command: `npm run build` | Publish directory: `dist`.
4. Click **Deploy**.

### Option C: Cloudflare Pages
1. In the Cloudflare dashboard, go to **Workers & Pages > Create application > Pages > Connect to Git**.
2. Select repository `piyusp188-byte/manik-s-salon`.
3. Framework preset: **Astro** (`npm run build`, `dist`).
4. Save and Deploy.

---

## ✍️ Content Customization Guide

All salon details, working hours, services, and contact info are managed in a single central file:
👉 **`src/data/siteData.ts`**

| What you want to edit | Location in `src/data/siteData.ts` |
|---|---|
| **Opening Hours** | `SITE_CONFIG.openingHours` (Default: 10:00 AM – 8:00 PM; Sun opens 9:00 AM) |
| **Phone / WhatsApp Number** | `SITE_CONFIG.phoneTel` & `SITE_CONFIG.whatsappNumber` |
| **Service Prices & Descriptions** | `SERVICES` array |
| **Academy Fees & Schedules** | `COURSES` array |
| **Customer Testimonials** | `TESTIMONIALS` array |
| **Google Maps Link** | `SITE_CONFIG.mapsUrl` |

---

## 📜 Business Identity & NAP
- **Business Name:** Monik's Salon & Academy
- **Address:** M.G Road, Bazar Peth, near Ratrani, Navipeth, Mahad, Maharashtra 402301 (inside Budget Food Store)
- **Plus Code:** 3CJH+HF Mahad, Maharashtra
- **Phone:** +91 84460 03385
- **Google Rating:** 4.7★ (218 reviews)
- **Identity:** Women-owned and operated
