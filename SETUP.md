# LP-Template Setup Guide

## Quick Start

1. **Clone this repo** and install dependencies:

   ```bash
   git clone https://github.com/webhostingdoo/lp-template.git my-new-lander
   cd my-new-lander
   npm install
   ```

2. **Edit `src/data/site-config.json`** — this is the single source of truth for all brand-specific values:

   | Section            | What to change                                                  |
   | ------------------ | --------------------------------------------------------------- |
   | `brand`            | Name, phone, email, address, Google Maps URL                    |
   | `colors`           | Primary, primary-light, accent hex values                       |
   | `fonts`            | Heading and body font families                                  |
   | `logos`             | Filenames for nav and footer logos (place files in `public/images/logos/`) |
   | `social`           | Facebook and YouTube URLs                                       |
   | `tracking`         | Google Ads ID, CTM script URL, GA4 ID                           |
   | `salesforce`       | OID, action URL, return URL, lead source, GCLID field ID        |
   | `meta`             | Default page title and description                              |
   | `nav`              | Navigation link labels and hrefs                                |
   | `trustBadges`      | Hero trust badge labels (array of 4)                            |
   | `featureTags`      | Feature tag labels                                              |
   | `featureChecklist` | Insurance coverage checklist items                              |
   | `insuranceBullets` | Accommodations section bullet points                            |
   | `amenityTags`      | Amenity icon labels                                             |
   | `process`          | Quote, author, and title for the process section                |
   | `testimonial`      | Quote, author, and role for the testimonial section             |
   | `insuranceLogos`   | Heading, body text, and provider name list                      |
   | `accommodations`   | Headings, body copy, CTA text, and image filenames              |
   | `facilities`       | Array of facility cards (name, location, description, image)    |
   | `footer`           | Certification labels, legal link text and URL                   |

3. **Update colors** — if you change hex values in `site-config.json`, also update:
   - `tailwind.config.ts` → `theme.extend.colors` (primary, primary-light, accent)
   - `src/app/globals.css` → CSS custom properties (`--primary`, `--primary-light`, `--accent`)

4. **Replace images** in `public/images/`:
   - `logos/` — nav logo, footer logo, certification seals
   - `hero/` — desktop and mobile hero images
   - `gallery/` — facility slides, therapy photos
   - `insurance/` — provider logos (filename must match provider name in lowercase-kebab-case, e.g. `aetna.png`, `bcbs-texas.png`)

5. **Update page-level content** in `src/data/treatments.json` for treatment and geo pages.

6. **Update legal content** in `src/components/sections/PrivacyContent.tsx` and `PrivacyHero.tsx` — these contain hardcoded legal text specific to each client.

7. **Run the dev server**:

   ```bash
   npm run dev
   ```

8. **Build for production**:

   ```bash
   npm run build
   ```

## Color Token Reference

The template uses three semantic color tokens:

| Token           | CSS Variable       | Tailwind Class  | Default     |
| --------------- | ------------------ | --------------- | ----------- |
| Primary         | `--primary`        | `bg-primary`, `text-primary` | `#0e2a47` |
| Primary Light   | `--primary-light`  | `bg-primary-light`           | `#2a5298` |
| Accent          | `--accent`         | `bg-accent`, `text-accent`, `border-accent` | `#D4AF37` |

## Font Configuration

Fonts are loaded via Google Fonts in `src/app/layout.tsx`. To change fonts:

1. Update the import and variable in `layout.tsx`
2. Update `tailwind.config.ts` → `theme.extend.fontFamily`
3. Update `site-config.json` → `fonts` (for documentation purposes)

## Deployment

This is a Next.js 14 project optimized for Vercel deployment. Push to your repo and connect to Vercel, or run `npm run build` for static export.
