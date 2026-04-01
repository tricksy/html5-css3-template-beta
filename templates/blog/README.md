# Blog / Media Template

A modern, Japanese blog/media template built with Vite 6 + Tailwind CSS v4.

## Features

- Responsive blog layout with featured article, article grid, and sidebar
- Simulated multi-page navigation (home + single article view)
- Dark/light mode toggle with localStorage persistence
- CSS Scroll-driven Animations for card reveal effects
- Card hover effects with image zoom
- Typography-focused article view with full showcase (headings, blockquote, code, lists)
- Category color coding (tech, design, business, lifestyle)
- Sidebar: categories, popular posts, tag cloud, newsletter signup
- Share buttons (X, Facebook, Hatena Bookmark, LINE)
- All SVG inline (zero external image dependencies)
- Japanese placeholder content ("TechNote")
- prefers-reduced-motion support

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

## Tech Stack

- Vite 6
- Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` + `@custom-variant dark`)
- Vanilla ES2025+ (no frameworks)
- Noto Sans JP + Inter variable fonts
