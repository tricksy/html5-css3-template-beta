# Corporate Website Template

Modern Japanese corporate website template built with Vite 6, Tailwind CSS v4, and vanilla ES2025+.

## Features

- Dark/light mode toggle with `localStorage` persistence
- CSS Scroll-driven Animations
- Animated number counters
- Mobile-first responsive design
- Noto Sans JP + Inter variable fonts
- All SVG inline (zero external image dependencies)
- `prefers-reduced-motion` support

## Sections

1. Hero — Company name, tagline, CTA, subtle background animation
2. About/Mission — Mission, Vision, Values cards
3. Services — 6 service cards with icons
4. Company Numbers — Animated counters
5. News — Recent news list with date badges
6. Team — Executive member cards
7. Contact/Access — Company info + map placeholder
8. Footer — Sitemap, legal links, company info

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Customization

- Colors: Edit `@theme` block in `src/style.css`
- Content: Edit `index.html` directly
- Fonts: Update Google Fonts link in `index.html` and `--font-sans` in `src/style.css`
