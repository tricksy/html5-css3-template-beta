# Modern LP Template

A modern Landing Page template built with cutting-edge 2026 web technologies.

## Tech Stack

- **Build**: [Vite](https://vitejs.dev/) v6
- **CSS**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Animation**: CSS Scroll-driven Animations + View Transitions API
- **JS**: Vanilla ES2025+ (zero frameworks)
- **Layout**: CSS Grid + Container Queries
- **Fonts**: Inter Variable Font with `font-display: swap`

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Sections

1. **Hero** — Full-screen gradient with animated counters and CTA
2. **Features** — 6-card grid with container queries for responsive layout
3. **How it Works** — 3-step flow with scroll-driven slide animations
4. **Pricing** — 3-tier cards with popular plan highlight
5. **Testimonials** — Review cards with star ratings
6. **FAQ** — Native `<details>` accordion with smooth animations
7. **CTA + Footer** — Final call-to-action with 4-column footer

## Features

- **Dark/Light mode**: Automatic via `prefers-color-scheme`
- **Scroll animations**: Elements animate into view using CSS `animation-timeline: view()`
- **Glassmorphism**: Subtle frosted-glass effects on buttons and overlays
- **Micro-interactions**: Hover effects on cards and buttons
- **Mobile-first**: Responsive design with mobile hamburger menu
- **Performance**: Minimal JS, lazy animations, variable font with swap

## Customization

### Colors
Edit the `@theme` block in `src/style.css` to change the primary color palette.

### Content
All placeholder text is in `index.html`. Replace with your own copy.

### Fonts
The template uses Inter variable font. Replace the `@font-face` declaration in `src/style.css` to use a different font.

## Browser Support

- Chrome/Edge 115+ (scroll-driven animations)
- Safari 17.4+ (partial scroll animation support)
- Firefox 110+ (graceful degradation — animations show without scroll-driving)

## License

MIT
