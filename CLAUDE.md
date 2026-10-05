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

The words, links and pictures of the site live in small files in `src/data/`, one for each kind of content. The page component, `GarfiasRanchHomepage.tsx`, only draws them, so most changes are made in a data file and the layout is left alone:

| File | What it holds |
|---|---|
| `site.ts` | The name, the Etsy, Instagram and Facebook addresses, the Instagram handle, and the top banner line |
| `nav.ts` | The menu (one list used by the large menu, the one that slides in on scroll, and the phone menu) |
| `collage.ts` | The art pieces pictured over the top banner, for large screens and for phones |
| `home.ts` | The hero headline and button, the "Made by Hand" strip, the "Meet the Artist" text, and the teal strip of four promises |
| `categories.ts` | The "Shop by Category" tiles |
| `gallery.ts` | The "Follow Along" heading and text, and the row of gallery pictures (`galleryImages`) |
| `footer.ts` | The footer's words and links |

`GarfiasRanchHomepage.tsx` is short. It keeps what the sections share (whether the menu is open, how far the visitor has scrolled, the scroll effects) and lists the sections top to bottom. Each section is its own small component in `src/components/`:

| File | What it draws |
|---|---|
| `StickyHeader.tsx` | The slim menu bar that slides down after the hero |
| `AnnouncementBar.tsx` | The teal line at the very top |
| `Hero.tsx` | The opening section, built from `HeroHeader.tsx` (logo, menu, phone dropdown) and `HeroCollage.tsx` (the art pieces) |
| `MadeByHand.tsx` | The three-column strip under the hero |
| `About.tsx` | "Meet the Artist" |
| `ShopByCategory.tsx` | The category tiles |
| `FeaturesStrip.tsx` | The teal strip of four promises (icons are in `FeatureIcons.tsx`) |
| `FollowAlong.tsx` | The gallery section |
| `Footer.tsx` | The footer |
| `ScrollToTopButton.tsx` | The back-to-top button |
| `Logo.tsx`, `Ornaments.tsx` | The logo image, and the small decorations (`SunRays`, `Diamond`) used by more than one section |

To add a section, make a component in `src/components/`, give it a data file in `src/data/`, and add one line to `GarfiasRanchHomepage.tsx`.

Keep wording, addresses and pictures in `src/data/`, not in the component. Tailwind reads `src/data/` too, so a class name written there works.

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
- `/Art1.jpg` to `/Art5.jpg` — artwork. `Art1.jpg` is shown in the hero art showcase (see `src/data/collage.ts`); the others are not used on the page yet

Every picture is a `.jpg` (logos and icons are `.png`). Keep photographs as `.jpg` so a new photo can replace one by keeping its file name, with no code change. The hero art pieces sit in frames of a fixed shape (`shapeClass` in `src/data/collage.ts`), so a photo of any shape is cropped to fit and the layout does not move.

Keep pictures light. Photos are saved with their longest side at about 1200 pixels (JPEG quality around 82), and the two logos at 640 and 400 pixels wide. A phone photo straight from the camera is 4000 pixels or more and several megabytes, so shrink it before it goes in `public/`, or visitors on a phone connection wait for it.

## Scroll behavior

Three `useEffect` hooks in `GarfiasRanchHomepage` handle scroll-driven UI:
- **Sticky header** — appears with a `slideDown` animation after scrolling past 75% of the hero height
- **Scroll-reveal** — sections with the `.reveal` CSS class fade/rise in when they enter the viewport (88% threshold). Add `className="reveal"` to any new section to get the animation automatically.
- **Hash links** (for example `#about`) are scrolled into view again after the page renders, so menu links land in the right place.
