# Suphanat Chanlek Portfolio

Personal portfolio website showcasing skills, projects, and experience in full-stack development, AI/MLOps, and DevOps.

## Tech Stack

| Technology | Version |
|-----------|---------|
| Next.js (App Router) | 16.2.10 |
| React | 19.2.4 |
| TypeScript (strict) | ^5 |
| Tailwind CSS v4 | ^4 |
| Three.js + @react-three/fiber + drei | ^0.172 / ^9.1 / ^10.0 |
| Framer Motion | ^11.18 |
| react-icons | ^5.7 |

## Project Structure

```text
app/
├── layout.tsx          # Root layout (fonts, SEO metadata, viewport)
├── page.tsx            # Home page (composes Navbar + Sections)
├── globals.css         # CSS variables, Tailwind theme, custom variants
└── favicon.ico

components/
├── layout/
│   ├── Navbar.tsx              # Main navbar (desktop + mobile drawer)
│   └── navbar/
│       ├── MenuToggleButton.tsx   # Mobile hamburger/close button
│       ├── NavLinkList.tsx        # Reusable navigation link list
│       └── SocialLinkButton.tsx   # Social icon button (GitHub, LinkedIn)
└── sections/
    └── hero/
        ├── HeroSection.tsx        # Full-screen hero layout
        ├── HeroContent.tsx        # Animated text content
        ├── Hero3DScene.tsx        # Chrome torus knot (Three.js)
        ├── HeroBackground.tsx     # Decorative grid + dots
        └── DownloadCvButton.tsx   # CV download CTA

data/
├── navigation.ts       # Nav links, social URLs, SVG icon paths
└── hero.ts             # Hero section text content

lib/
└── classNames.ts       # cn() utility (conditional class joining)

types/
└── navigation.ts       # NavigationLink, SocialLink types

public/
└── cv_resume/          # PDF files for download
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Architecture

- **Colors** — All colors defined as CSS variables in `app/globals.css`, used via Tailwind tokens (`bg-hero-btn-bg`, `text-navbar-link`, etc.). No hardcoded colors.
- **Responsive** — Mobile-first with custom `landscape-lg` variant (`@media (min-width: 1024px) and (orientation: landscape)`) to differentiate iPad portrait vs landscape.
- **Data ≠ Styling** — Files in `data/` contain only content (labels, hrefs, text). No classNames.
- **Components** — Use `cn()` utility for conditional classes. All accept `className` prop.
- **3D** — Lazy-loaded with `dynamic({ ssr: false })`. Hidden on portrait, visible on landscape/desktop.
- **Animations** — Framer Motion with staggered reveal pattern (container + item variants).
- **Accessibility** — Semantic HTML (`<nav>`, `<header>`, `<section>`), aria-label, aria-expanded, aria-hidden on decorative elements.

## Sections

| Section | Status | Anchor |
|---------|--------|--------|
| Hero | ✅ Done | `#home` |
| What I do | 🔲 Planned | `#what-i-do` |
| About | 🔲 Planned | `#about` |
| Portfolio | 🔲 Planned | `#portfolio` |

## Author

**Suphanat Chanlek** (ศุภณัฐ จันทร์เลข / Arm)

- GitHub: [suphanatchanlek30](https://github.com/suphanatchanlek30)
- LinkedIn: [suphanat-chanlek](https://www.linkedin.com/in/suphanat-chanlek)
- Email: suphanatchanlek@gmail.com
