# Modern Templates

> 2026年のベストプラクティス テンプレート集

Vite 6 + Tailwind CSS v4 で構築された、プロダクションレディな日本語Webテンプレートコレクション。

## Templates

| Template | Description | Path |
|----------|-------------|------|
| **ランディングページ** | SaaS/サービス紹介LP。7セクション構成、スクロール連動アニメーション搭載 | `templates/lp/` |
| **ポートフォリオ** | デザイナー・エンジニア向け。フィルタリング可能な作品グリッド、タイムライン | `templates/portfolio/` |
| **コーポレートサイト** | 企業サイト。ミッション・サービス・実績数値・ニュース・チーム紹介の8セクション | `templates/corporate/` |
| **ブログ / メディア** | 記事一覧・詳細ページ付き。カテゴリ色分け、サイドバー、シェアボタン | `templates/blog/` |

## Tech Stack

- **Build**: [Vite](https://vitejs.dev/) 6
- **CSS**: [Tailwind CSS](https://tailwindcss.com/) v4
- **JS**: Vanilla ES2025+ (zero frameworks)
- **Animations**: CSS Scroll-driven Animations + View Transitions API
- **Layout**: CSS Grid + Container Queries
- **Fonts**: Noto Sans JP + Inter variable fonts

## Features

- Dark/light mode toggle with `prefers-color-scheme` support
- Lighthouse 100 target design
- Mobile-first responsive layout
- Japanese-first content and typography
- `prefers-reduced-motion` support
- All SVG inline (zero external image dependencies)

## Getting Started

Each template is a standalone Vite project:

```bash
cd templates/lp    # or portfolio, corporate, blog
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Showcase

Open `index.html` in the root to browse all templates in a gallery view.

## Browser Support

- Chrome/Edge 115+
- Safari 17.4+
- Firefox 110+ (graceful degradation for scroll-driven animations)

## License

MIT
