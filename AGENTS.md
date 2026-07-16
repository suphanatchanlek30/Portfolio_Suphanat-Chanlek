# AGENTS.md — Suphanat Chanlek Portfolio

> คำแนะนำสำหรับ AI ทุกตัวที่ทำงานกับโปรเจกต์นี้ อ่านก่อนเขียนโค้ดทุกครั้ง

---

## 🏗️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.10 |
| UI Library | React | 19.2.4 |
| Language | TypeScript (strict) | ^5 |
| Styling | Tailwind CSS v4 | ^4 |
| 3D Graphics | Three.js + @react-three/fiber + drei | ^0.172 / ^9.1 / ^10.0 |
| Animation | Framer Motion | ^11.18 |
| Icons | react-icons | ^5.7 |
| Build Tool | Turbopack (via Next.js) | — |

---

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout — fonts (Geist Sans + Mono), SEO metadata, viewport
├── page.tsx            # Home page — composes Navbar + Sections
├── globals.css         # ALL CSS variables + Tailwind theme config + custom variants
└── favicon.ico

components/
├── layout/
│   ├── Navbar.tsx              # Main navbar (desktop + mobile drawer)
│   └── navbar/
│       ├── MenuToggleButton.tsx   # Hamburger/close icon button
│       ├── NavLinkList.tsx        # Reusable nav link list (handles internal/external)
│       └── SocialLinkButton.tsx   # Social icon button (GitHub, LinkedIn)
└── sections/
    └── hero/
        ├── HeroSection.tsx        # Full-screen hero — layout orchestration
        ├── HeroContent.tsx        # Text content with staggered animations
        ├── Hero3DScene.tsx        # Three.js chrome torus knot (lazy-loaded)
        ├── HeroBackground.tsx     # Decorative grid lines + dots
        └── DownloadCvButton.tsx   # CTA button for CV download

data/
├── navigation.ts       # Nav links + social URLs + SVG paths
└── hero.ts             # Hero section text content (roleLabel, title, subtitle, cta)

lib/
└── classNames.ts       # cn() utility — conditional class joining (like clsx)

types/
└── navigation.ts       # NavigationLink, SocialLink types

public/
└── cv_resume/          # PDF files for download
```

---

## 🎨 Color System (สำคัญมาก!)

### กฎเหล็ก: ห้าม Hardcode สี

ทุกสีต้องผ่าน 3 ชั้น:

```
1. CSS Variable (globals.css :root)     →  --hero-title: #ffffff
2. Tailwind Theme Token (@theme inline) →  --color-hero-title: var(--hero-title)
3. ใช้ใน Component ผ่าน Tailwind class  →  text-hero-title
```

### ตำแหน่งที่กำหนดสี: `app/globals.css`

```css
:root {
  /* Base */
  --background: #000000;
  --foreground: #ffffff;

  /* Navbar */
  --navbar-bg, --navbar-text, --navbar-border
  --navbar-link, --navbar-link-hover, --navbar-link-mobile

  /* Buttons */
  --btn-social-bg, --btn-social-text, --btn-social-hover-bg
  --btn-toggle-border, --btn-toggle-hover-bg

  /* Hero */
  --hero-title, --hero-subtitle, --hero-role-label
  --hero-grid-line, --hero-grid-dot
  --hero-btn-bg, --hero-btn-text, --hero-btn-hover-bg
  --hero-gradient-start, --hero-gradient-end
}
```

### วิธีเพิ่มสีใหม่

1. เพิ่ม CSS variable ใน `:root` — ตั้งชื่อตาม pattern: `--{section}-{element}`
2. เพิ่ม Tailwind token ใน `@theme inline` — ตั้งชื่อ: `--color-{section}-{element}: var(--{section}-{element})`
3. ใช้ใน component เป็น Tailwind class เช่น `text-{section}-{element}`, `bg-{section}-{element}`

### ตัวอย่างเพิ่ม section "About":
```css
/* ใน :root */
--about-title: #ffffff;
--about-text: rgba(255, 255, 255, 0.7);

/* ใน @theme inline */
--color-about-title: var(--about-title);
--color-about-text: var(--about-text);
```
```tsx
/* ใน component */
<h2 className="text-about-title">...</h2>
<p className="text-about-text">...</p>
```

---

## 📐 Responsive Design Strategy

### Breakpoints (Tailwind v4 defaults)

| Prefix | Width | Devices |
|--------|-------|---------|
| (default) | 0-639px | Mobile phones |
| `sm:` | 640px+ | Large phones |
| `md:` | 768px+ | iPad Mini/Air portrait |
| `lg:` | 1024px+ | iPad Pro portrait, small laptops |
| `xl:` | 1280px+ | Desktop, large laptops |
| `2xl:` | 1536px+ | Large desktop |

### Custom Variant: `landscape-lg`

```css
@custom-variant landscape-lg (@media (min-width: 1024px) and (orientation: landscape));
```

**ใช้สำหรับ:** แยก iPad แนวนอน (landscape) ออกจาก iPad Pro แนวตั้ง (portrait) ที่มี width เท่ากัน (1024px)

**กฎ:**
- iPad แนวตั้ง (ทุกรุ่น): ใช้ stacked/centered layout, ไม่มี 3D
- iPad แนวนอน + Desktop: ใช้ split layout (3D ซ้าย + content ขวา)
- ใช้ `landscape-lg:` แทน `lg:` หรือ `xl:` เมื่อต้องการ trigger เฉพาะ landscape

### Mobile-first approach:
- เขียน default styles สำหรับ mobile ก่อน
- เพิ่ม `sm:`, `md:`, `lg:`, `landscape-lg:`, `xl:` ตามลำดับ
- Typography ต้องมี hierarchy ชัดเจนทุก breakpoint (label เล็ก → title ใหญ่ → subtitle กลาง)

---

## 📝 Data Layer Conventions

### กฎ: Data ≠ Styling

ไฟล์ใน `data/` เก็บเฉพาะ **ข้อมูล** — ห้ามใส่ className, style, หรือ Tailwind classes

```typescript
// ✅ ถูก
export const heroContent = {
  roleLabel: "Software Engineer • AI • DevOps",
  title: "Suphanat Chanlek",
  subtitle: "...",
  cta: { label: "Download CV", href: "/cv_resume/..." },
};

// ❌ ผิด
export const heroContent = {
  title: "Suphanat Chanlek",
  titleClass: "text-4xl font-bold", // ห้าม!
};
```

---

## 🧩 Component Conventions

### โครงสร้าง Component

```typescript
// 1. "use client" (ถ้าต้องการ — ใส่เฉพาะที่ใช้ hooks, events, browser APIs)
"use client";

// 2. Imports
import { cn } from "@/lib/classNames";

// 3. Types (ถ้ามี props)
type MyComponentProps = {
  className?: string;  // ← ทุก component ควรรับ className prop
};

// 4. JSDoc comment อธิบาย component
/**
 * Brief description.
 * Responsive behavior notes.
 */
export default function MyComponent({ className }: MyComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      ...
    </div>
  );
}
```

### กฎสำคัญ:
- ใช้ `cn()` จาก `@/lib/classNames` สำหรับ conditional classes
- ทุก component รับ `className` prop เพื่อให้ parent override ได้
- ใช้ semantic HTML: `<nav>`, `<header>`, `<section>`, `<main>`
- เพิ่ม `aria-label`, `aria-expanded`, `aria-hidden` ตามเหมาะสม
- Decorative elements ต้องมี `aria-hidden="true"`

### Pattern: Section Component

แต่ละ section ของหน้าเว็บอยู่ใน `components/sections/{section-name}/`:

```
components/sections/about/
├── AboutSection.tsx       # Main section layout (id="about")
├── AboutContent.tsx       # Content/text area
└── AboutCard.tsx          # Sub-components ถ้ามี
```

---

## 🎬 Animation Pattern (Framer Motion)

```typescript
// Container with staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

// Individual items
const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Usage
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.h1 variants={itemVariants}>...</motion.h1>
  <motion.p variants={itemVariants}>...</motion.p>
</motion.div>
```

---

## 🌐 3D Scene Pattern (Three.js)

- ใช้ `dynamic()` + `{ ssr: false }` เพื่อ lazy-load (Three.js ไม่ support SSR)
- Canvas ต้อง `gl={{ alpha: true }}` + `style={{ background: "transparent" }}`
- ใช้ `<Environment preset="studio" />` สำหรับ chrome reflections
- Wrap ใน `<Suspense fallback={null}>` ป้องกัน white flash
- ซ่อนบน mobile/tablet portrait ด้วย `hidden landscape-lg:flex`

---

## 🔤 Font System

| Font | Variable | Usage |
|------|----------|-------|
| Geist Sans | `--font-geist-sans` | Body text, headings (default) |
| Geist Mono | `--font-geist-mono` | Code snippets, monospace text |

ใช้ผ่าน Tailwind: `font-sans` (default), `font-mono`

---

## ✅ Checklist ก่อน Commit

1. ไม่มี hardcoded colors — ใช้ CSS variables ผ่าน Tailwind tokens เท่านั้น
2. Responsive ทดสอบ: Mobile (375px), iPad Mini (768px), iPad Pro (1024px portrait), Desktop (1440px), iPad landscape (1024px+)
3. ทุกสีใหม่ต้องเพิ่มทั้ง 3 ที่: `:root`, `@theme inline`, component class
4. Data files ไม่มี styling
5. Semantic HTML + accessibility attributes
6. `"use client"` เฉพาะ component ที่จำเป็น

---

## ⚠️ สิ่งที่ต้องระวัง

- **Next.js 16** — APIs อาจแตกต่างจาก training data ของ AI อ่าน docs ใน `node_modules/next/dist/docs/` ก่อนเขียนโค้ดที่ไม่แน่ใจ
- **Tailwind v4** — ใช้ `@import "tailwindcss"` ไม่ใช่ `@tailwind base/components/utilities` แบบเก่า, config อยู่ใน CSS ไม่ใช่ `tailwind.config.js`
- **React 19** — ระวัง breaking changes, ใช้ `use()` hook ใหม่ได้
- **`@theme inline`** — ที่ register Tailwind colors ต้อง prefix `--color-` เสมอ
- **`@custom-variant`** — syntax ของ Tailwind v4 สำหรับ custom media queries
