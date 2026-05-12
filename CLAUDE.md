# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start local dev server (Vite, hot reload)
npm run build      # Type-check then build to dist/
npm run preview    # Preview the production build locally
```

No test runner is configured.

## Architecture

This is a single-page marketing site for Garfias Mountain Glass Art — a React + TypeScript + Vite app styled with Tailwind CSS.

**Entry point:** `src/main.tsx` → `src/App.tsx` → `src/GarfiasRanchHomepage.tsx`

The entire site lives in one file, `GarfiasRanchHomepage.tsx`, which is the sole exported component. It is organized top-to-bottom:
1. Constants (`ETSY` URL, `NAV_LINKS`)
2. Static data arrays (`categories`, `galleryImages`)
3. Small local components (`Logo`, `SunRays`, `Diamond`, `CactusIcon`, `SunriseIcon`)
4. The main `GarfiasRanchHomepage` export, which contains all page sections inline

`src/SocialBrandIcons.tsx` exports three hand-rolled SVG icon components (`InstagramIcon`, `FacebookIcon`, `EtsyIcon`) because lucide-react dropped brand icons.

## Styling conventions

- **Color palette** — warm sand background `#eadbc5`, dark brown text `#2e1f14`, teal accent `#0b565c`, dark footer `#2b1b10`
- **Typography** — three Google Fonts loaded via `<style>` tag in the component: `Pinyon Script` (hero headline, `.pinyon`), `Playfair Display` (section headings, `.playfair`), `Dancing Script` (`.dancing`). Utility classes `.pinyon`, `.playfair`, `.dancing` are defined in `src/index.css`.
- All spacing, layout, and responsive breakpoints use Tailwind utility classes directly; no custom Tailwind components or plugins are used.
- Inline `style` props are used for backdrop-filter (cross-browser), radial gradients, and precise image positioning — things Tailwind can't express cleanly.

## Public assets

Static assets are served from `/public/`. Key files:
- `/logo.png` — full horizontal logo (header)
- `/circle-logo.png` — circular logo (footer)
- `/hero.jpg` — hero section background
- `/Art1.avif`, `/Art4.avif`, `/Art5.webp` — artwork displayed in the hero art showcase

Placeholder category and gallery images are Unsplash URLs; these should eventually be replaced with real product photos.

## Scroll behavior

Two `useEffect` hooks in `GarfiasRanchHomepage` handle scroll-driven UI:
- **Sticky header** — appears with a `slideDown` animation after scrolling past 75% of the hero height
- **Scroll-reveal** — sections with the `.reveal` CSS class fade/rise in when they enter the viewport (88% threshold). Add `className="reveal"` to any new section to get the animation automatically.
