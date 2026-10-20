<div align="center">

# Suphanat Chanlek — Portfolio

**Software Engineer • AI • DevOps**

A single-page, dark-themed portfolio with a 3D chrome hero, built with Next.js 16, React 19, and Three.js.

[**🌐 Live site**](https://portfolio-suphanat-chanlek.vercel.app) · [**📄 Download CV**](<https://portfolio-suphanat-chanlek.vercel.app/cv_resume/CV_SuphanatChanlek_For_Software Engineer.pdf>) · [**🏷️ Releases**](https://github.com/suphanatchanlek30/Portfolio_Suphanat-Chanlek/releases)

<br />

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## Contents

- [About](#about)
- [Sections](#sections)
- [Featured projects](#featured-projects)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Editing content](#editing-content)
- [Design principles](#design-principles)
- [Contact](#contact)

---

## About

I'm **Suphanat Chanlek (Arm)**, a third-year Computer Science student who builds scalable systems and intelligent applications. I work across full-stack development, AI/MLOps, and DevOps.

This site brings together my projects, hackathon experience, and skills in one place. It works on phones, tablets, and desktops, and lays out differently for iPad portrait and landscape.

---

## Sections

| # | Section | Anchor | What's inside |
| :-: | --- | --- | --- |
| 1 | **Hero** | `#home` | Animated intro, 3D chrome object (Three.js), dashed grid that draws in on load, CV download |
| 2 | **What I Do** | `#what-i-do` | Three interactive service cards |
| 3 | **About** | `#about` | Sticky photo stack beside a scrollable experience timeline |
| 4 | **Skills** | `#skills` | Programming skills and tools in an infinite marquee |
| 5 | **Projects** | `#projects` | Horizontal-scroll carousel with a detail modal for each project |
| 6 | **Competitions** | `#portfolio` | Hackathon and competition experience in a grid with photo modals |
| — | **Footer** | — | Social links and contact |

---

## Featured projects

| Project | Summary | Stack |
| --- | --- | --- |
| **CUBIC** | Central building and BIM data catalog for Chulalongkorn University | Next.js · Go · PostgreSQL · AWS |
| **SOS Backoffice Dashboard** | Production backoffice for a food-surplus platform | Next.js · NestJS · PostgreSQL |
| **Wasty** | Landing page for the SOS Spark Project | Next.js · Tailwind CSS |
| **K Sure** | Rental-deposit escrow prototype, KBTG Kampus Hackathon 2026 | Next.js · Go (Fiber) · PostgreSQL · Terraform |
| **DOH BIM Dashboard** | 3D BIM/IFC viewer that tracks construction progress floor by floor | React · NestJS · MinIO |
| **Federated Learning Dashboard** | Research visualization for the PADIN Project | Next.js · Go (Fiber) · Leaflet.js |
| **Scam Mai** | Checks the risk of a transfer before sending money, over LINE | Next.js · Supabase · LINE API |
| **INSCENCE** | 🏆 1st place, SSPI Hackathon 2024: travel to film locations | React · Node.js · MongoDB |

Full write-ups are on the [live site](https://portfolio-suphanat-chanlek.vercel.app/#projects).

---

## Tech stack

| Area | Tools |
| --- | --- |
| **Framework** | Next.js 16 (App Router, Turbopack), React 19 |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS v4: design tokens in `globals.css`, no config file |
| **3D** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Animation** | Framer Motion |
| **Icons** | react-icons |
| **Hosting** | Vercel |

---

## Getting started

**Requirements:** Node.js 20+ and npm

```bash
git clone https://github.com/suphanatchanlek30/Portfolio_Suphanat-Chanlek.git
cd Portfolio_Suphanat-Chanlek
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Build for production |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## Project structure

```text
.
├── app/
│   ├── layout.tsx            # Root layout: fonts, SEO metadata, viewport
│   ├── page.tsx              # Home page: puts the sections together
│   └── globals.css           # Color tokens, Tailwind theme, custom variants
├── components/
│   ├── layout/               # Navbar (+ mobile drawer) and Footer
│   └── sections/
│       ├── hero/             # Hero content, 3D scene, animated grid
│       ├── services/         # "What I Do" cards
│       ├── about/            # Photo stack + timeline
│       ├── skills/           # Skill marquee
│       ├── projects/         # Carousel, cards, modal
│       └── competition-experience/  # Grid, cards, modal
├── data/                     # All site content (text, links, image paths)
├── lib/classNames.ts         # cn() helper for joining class names
├── types/                    # Shared TypeScript types
└── public/                   # Images, project screenshots, CV
```

---

## Editing content

All text lives in `data/`, separate from the components, so you can update content without touching layout code.

| To change… | Edit |
| --- | --- |
| Hero title, subtitle, or CV link | `data/hero.ts` |
| Service cards | `data/services.ts` |
| About text and timeline | `data/about.ts` |
| Skills | `data/skills.ts` |
| Projects | `data/projects.ts` + image in `public/projects/` |
| Competitions | `data/competitions.ts` + image in `public/competition_experience/` |
| Nav links and socials | `data/navigation.ts` |
| Footer | `data/footer.ts` |

**To add a project:** put a screenshot in `public/projects/`, then add an entry to `projectItems` in `data/projects.ts`. Items appear in the carousel in array order.

---

## Design principles

- **No hardcoded colors.** Every color is a CSS variable in `app/globals.css`, exposed as a Tailwind token (for example `text-hero-title`).
- **Content and styling stay separate.** Files in `data/` hold only content and never class names.
- **Mobile first.** A custom `landscape-lg` variant tells iPad landscape and desktop apart from iPad portrait. The 3D scene shows only on landscape and desktop.
- **Fast 3D.** The Three.js scene is lazy-loaded with `dynamic(..., { ssr: false })`.
- **Consistent motion.** Framer Motion reveal animations use a shared stagger pattern.
- **Accessible.** Semantic HTML, `aria-*` attributes on interactive elements, and decorative elements hidden from screen readers.

See [`CLAUDE.md`](CLAUDE.md) for the full conventions.

---

## Contact

**Suphanat Chanlek** (ศุภณัฐ จันทร์เลข / Arm)

[![GitHub](https://img.shields.io/badge/GitHub-suphanatchanlek30-181717?style=flat-square&logo=github)](https://github.com/suphanatchanlek30)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-suphanat--chanlek-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/suphanat-chanlek)
[![Email](https://img.shields.io/badge/Email-suphanatchanlek%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:suphanatchanlek@gmail.com)

<div align="center">
<br />
<sub>Built and designed by Suphanat Chanlek · © 2026</sub>
</div>
