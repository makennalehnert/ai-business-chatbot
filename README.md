# Roofing Pro Site (React + Vite + Tailwind)

A polished, performance-focused roofing website starter with service-area pages, gallery, and lead-gen CTAs.

## Quick start
```bash
npm install
npm run dev
# build:
npm run build && npm run preview
```

## Swap in your brand
- Replace `/public/placeholder-*.jpg` and the gradient logo square in `Header.jsx` with your real logo/images/videos.
- Update phone/email in `Header.jsx` and `CTAStrip.jsx`.
- Edit service areas in `src/data/serviceAreas.js`.
- SEO: Update `<title>` and meta tags in `index.html`.

## Tech
- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion (subtle animations)
- React Router 6

## Pages
- `/` Home (hero, features, services, projects, reviews, FAQ, contact)
- `/services`
- `/service-areas` and `/service-areas/:slug`
- `/projects`
- `/about`
- `/contact`
