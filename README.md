# Charmi Kanazariya — Portfolio

Ultra-premium interactive portfolio site built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + GSAP + Lenis** smooth scroll.

## Features

- Cinematic dark UI with film grain, custom cursor, and ambient gradients
- Smooth Lenis scroll + GSAP/Framer Motion scroll-triggered reveals
- Animated loader and staggered character-by-character hero
- Parallax About, animated stat counters, glass surfaces
- Interactive project cards with image-scale reveals
- Branding grid, UI/UX case studies with device mockups
- Motion-graphics tile grid with continuous SVG animations
- Video showcase with reel cards and play overlays
- Scroll-driven experience timeline with animated track
- Marquee skills + grouped capability matrix
- Contact section with kinetic CTA + glass cards
- Fully responsive across mobile / tablet / desktop

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Visit http://localhost:3000.

## Tech

| Layer | Choice |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + custom design tokens |
| Motion | Framer Motion |
| Scroll | Lenis (smooth) + GSAP-style scroll progress via Framer |
| Type | Fraunces (display) + Inter (sans) + JetBrains Mono |

## Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + fonts + shell
│   ├── page.tsx            # Section composition
│   └── globals.css         # Design tokens + grain + cursor
├── components/
│   ├── Cursor.tsx          # Custom mouse cursor
│   ├── Loader.tsx          # Cinematic intro
│   ├── Navigation.tsx      # Sticky nav + mobile drawer
│   ├── SmoothScroll.tsx    # Lenis provider
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── FeaturedProjects.tsx
│       ├── Branding.tsx
│       ├── UIUX.tsx
│       ├── Motion.tsx
│       ├── VideoShowcase.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
└── package.json
```

## Preview without building

Open `preview.html` in the parent folder to see the design system + all sections rendered as a single self-contained page (no npm install required).
