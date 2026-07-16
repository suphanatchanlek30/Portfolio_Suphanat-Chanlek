# CLAUDE.md — Project Context for AI Assistants

> ไฟล์นี้สำหรับ AI agents ทุกตัว (Claude, ChatGPT, Copilot, Cursor, etc.) อ่านแล้วเข้าใจโปรเจกต์ได้ทันที

---

## 📌 Project Overview

**Portfolio website** ของ Suphanat Chanlek (ศุภณัฐ จันทร์เลข / Arm)
- Single-page application แบบ scroll-based
- Dark theme เท่านั้น (พื้นดำ, ตัวอักษรขาว)
- มี 3D chrome object decoration (Three.js)
- Responsive ครบ: Mobile → Tablet → Desktop

---

## 🔧 Quick Start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # Production build (Turbopack)
npm run lint         # ESLint
```

---

## 📂 ไฟล์สำคัญที่ต้องรู้

| ไฟล์ | หน้าที่ | เมื่อไหร่ต้องแก้ |
|------|---------|-----------------|
| `app/globals.css` | กำหนดสีทั้งหมด + Tailwind theme | เพิ่ม/แก้สี |
| `app/layout.tsx` | Root layout, fonts, SEO metadata | แก้ title, description, fonts |
| `app/page.tsx` | หน้า Home ประกอบ sections | เพิ่ม section ใหม่ |
| `data/*.ts` | ข้อมูล text/links (ไม่มี styling) | แก้ text, links, ข้อมูล |
| `types/*.ts` | TypeScript types ที่ใช้ร่วมกัน | เพิ่ม type ใหม่ |
| `lib/classNames.ts` | `cn()` utility | ไม่ต้องแก้ |

---

## 🎨 Color System — วิธีใช้สี (สำคัญมาก!)

### ❌ ห้ามทำ:
```tsx
<h1 className="text-white">...</h1>           // ❌ hardcode
<h1 style={{ color: '#ffffff' }}>...</h1>      // ❌ inline style
```

### ✅ ต้องทำ:
```tsx
<h1 className="text-hero-title">...</h1>      // ✅ ใช้ Tailwind token
```

### วิธีเพิ่มสีใหม่ (3 ขั้นตอน):

**ขั้นที่ 1** — เพิ่ม CSS variable ใน `app/globals.css` > `:root`
```css
--about-title: #ffffff;
--about-text: rgba(255, 255, 255, 0.7);
--about-accent: #60a5fa;
```

**ขั้นที่ 2** — เพิ่ม Tailwind token ใน `app/globals.css` > `@theme inline`
```css
--color-about-title: var(--about-title);
--color-about-text: var(--about-text);
--color-about-accent: var(--about-accent);
```

**ขั้นที่ 3** — ใช้ใน component
```tsx
<h2 className="text-about-title">About Me</h2>
<p className="text-about-text">...</p>
<span className="border-about-accent">...</span>
```

### สีที่มีอยู่แล้ว:

| Token prefix | Section | ตัวอย่าง class |
|---|---|---|
| `background` / `foreground` | Base | `bg-background`, `text-foreground` |
| `navbar-*` | Navbar | `bg-navbar-bg`, `text-navbar-link` |
| `btn-social-*` / `btn-toggle-*` | Buttons | `bg-btn-social-bg` |
| `hero-*` | Hero section | `text-hero-title`, `bg-hero-btn-bg` |

---

## 📐 Responsive Design — กฎที่ต้องปฏิบัติ

### Breakpoints

| Prefix | Width | ใช้กับ |
|--------|-------|--------|
| default | 0-639px | มือถือ |
| `sm:` | 640px+ | มือถือใหญ่ |
| `md:` | 768px+ | iPad Mini/Air portrait |
| `lg:` | 1024px+ | iPad Pro portrait |
| `landscape-lg:` | 1024px+ AND landscape | iPad ทุกรุ่นแนวนอน + Desktop |
| `xl:` | 1280px+ | Desktop |
| `2xl:` | 1536px+ | Large desktop |

### กฎ Landscape vs Portrait:

```
iPad แนวตั้ง (portrait):
  - ไม่แสดง 3D scene
  - Layout: centered, stacked
  - Text ใหญ่ขึ้นตาม md: / lg: เพื่อเติมเต็มหน้าจอ

iPad แนวนอน (landscape) + Desktop:
  - แสดง 3D scene ด้านซ้าย
  - Layout: split (3D left + content right)
  - ใช้ `landscape-lg:` prefix
```

### Typography Hierarchy (ทุก breakpoint):
```
Role label    → เล็กสุด, uppercase, subtle color
Title         → ใหญ่ที่สุด, bold, สีขาวชัด
Subtitle      → กลาง, font-light, สีจาง
Button        → ขนาดเหมาะสมกับ context
```

### ตัวอย่าง responsive class pattern:
```tsx
// Mobile-first → ค่อยๆ scale ขึ้น → landscape reset สำหรับ desktop
className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl landscape-lg:text-5xl xl:text-6xl"
```

---

## 🧩 วิธีสร้าง Section ใหม่

### 1. สร้างโฟลเดอร์
```
components/sections/{section-name}/
├── {SectionName}Section.tsx    # Main wrapper (id="{section-name}")
├── {SectionName}Content.tsx    # Content area
└── ...                         # Sub-components
```

### 2. สร้าง data file (ถ้ามี)
```typescript
// data/{section-name}.ts
export const {sectionName}Content = {
  title: "...",
  description: "...",
  // ข้อมูลเท่านั้น — ห้ามใส่ className!
} as const;
```

### 3. เพิ่มสีใน `globals.css` (ตาม 3 ขั้นตอนข้างบน)

### 4. เพิ่มใน `app/page.tsx`
```tsx
import AboutSection from "@/components/sections/about/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />    {/* ← เพิ่มตรงนี้ */}
    </main>
  );
}
```

### 5. Template สำหรับ Section Component:
```tsx
// components/sections/about/AboutSection.tsx
import AboutContent from "@/components/sections/about/AboutContent";

/**
 * About section — introduces who I am.
 * Mobile: stacked centered
 * Desktop: [layout description]
 */
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-16 lg:px-20">
        <AboutContent />
      </div>
    </section>
  );
}
```

---

## 🎬 Animation — วิธีใช้ Framer Motion

```typescript
"use client"; // ← จำเป็นสำหรับ Framer Motion

import { motion } from "framer-motion";

// Standard animation pattern ของโปรเจกต์:
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
```

---

## 🌐 3D — วิธีเพิ่ม 3D scene

```typescript
// ใน Section component:
import dynamic from "next/dynamic";

const My3DScene = dynamic(() => import("./My3DScene"), { ssr: false });

// ซ่อนบน portrait, แสดงบน landscape:
<div className="hidden landscape-lg:flex">
  <My3DScene />
</div>
```

```typescript
// ใน 3D component:
"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";

export default function My3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 25 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Environment preset="studio" background={false} />
      </Suspense>
      {/* mesh ตรงนี้ */}
    </Canvas>
  );
}
```

---

## 📋 Current Sections Status

| Section | Status | Navigation anchor |
|---------|--------|------------------|
| Hero | ✅ Done | `#home` |
| What I do | ❌ Not built | `#what-i-do` |
| About | ❌ Not built | `#about` |
| Portfolio | ❌ Not built | `#portfolio` |

---

## 🔗 Navigation System

ไฟล์: `data/navigation.ts`

- `primaryNavigationLinks` — แสดงใน desktop navbar
- `drawerNavigationLinks` — แสดงใน mobile drawer
- `socialLinks` — GitHub + LinkedIn (มี SVG path data)

Type: `types/navigation.ts` → `NavigationLink`, `SocialLink`

---

## 🛠️ Utilities

### `cn()` — Class Name Joiner
```typescript
import { cn } from "@/lib/classNames";

// ใช้แทน clsx/classnames
cn("base", isActive && "active", className)
// → "base active custom-class"
```

---

## ⚠️ ข้อควรระวังสำหรับ AI

1. **Next.js 16** — ใหม่มาก API อาจต่างจาก training data
   - ใช้ App Router เท่านั้น (ไม่มี pages/)
   - `metadata` export แทน `<Head>`
   - `viewport` export แยกจาก metadata

2. **Tailwind CSS v4** — ไม่มี `tailwind.config.js`
   - Config ทั้งหมดอยู่ใน `app/globals.css`
   - ใช้ `@import "tailwindcss"` (ไม่ใช่ `@tailwind base`)
   - Custom colors ใช้ `@theme inline { --color-xxx: ... }`
   - Custom variants ใช้ `@custom-variant`

3. **React 19** — latest version
   - มี `use()` hook ใหม่
   - ระวัง breaking changes จาก version เก่า

4. **"use client"** — ใส่เฉพาะ component ที่ใช้:
   - `useState`, `useEffect`, `useRef` (React hooks)
   - Event handlers (`onClick`, `onChange`)
   - Browser APIs (`window`, `document`)
   - Framer Motion animations
   - Three.js / @react-three

5. **ห้าม hardcode สี** — ทุกสีต้องผ่าน CSS variable → Tailwind token

6. **Data ≠ Styling** — ไฟล์ `data/` ไม่มี className

---

## 📊 globals.css Full Structure

```css
@import "tailwindcss";

/* Custom variants */
@custom-variant landscape-lg (@media (min-width: 1024px) and (orientation: landscape));

:root {
  /* Base colors */
  --background: #000000;
  --foreground: #ffffff;

  /* Navbar colors */
  --navbar-bg: #000000;
  --navbar-text: #ffffff;
  --navbar-border: rgba(255, 255, 255, 0.1);
  --navbar-link: rgba(255, 255, 255, 0.7);
  --navbar-link-hover: #ffffff;
  --navbar-link-mobile: rgba(255, 255, 255, 0.75);

  /* Button colors */
  --btn-social-bg: #ffffff;
  --btn-social-text: #000000;
  --btn-social-hover-bg: #e5e7eb;
  --btn-toggle-border: rgba(255, 255, 255, 0.1);
  --btn-toggle-hover-bg: rgba(255, 255, 255, 0.1);

  /* Hero section colors */
  --hero-title: #ffffff;
  --hero-subtitle: rgba(255, 255, 255, 0.55);
  --hero-role-label: rgba(255, 255, 255, 0.4);
  --hero-grid-line: rgba(255, 255, 255, 0.06);
  --hero-grid-dot: rgba(255, 255, 255, 0.15);
  --hero-btn-bg: #ffffff;
  --hero-btn-text: #000000;
  --hero-btn-hover-bg: rgba(255, 255, 255, 0.9);
  --hero-gradient-start: #0a0a0a;
  --hero-gradient-end: #000000;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-navbar-bg: var(--navbar-bg);
  --color-navbar-text: var(--navbar-text);
  --color-navbar-border: var(--navbar-border);
  --color-navbar-link: var(--navbar-link);
  --color-navbar-link-hover: var(--navbar-link-hover);
  --color-navbar-link-mobile: var(--navbar-link-mobile);
  --color-btn-social-bg: var(--btn-social-bg);
  --color-btn-social-text: var(--btn-social-text);
  --color-btn-social-hover-bg: var(--btn-social-hover-bg);
  --color-btn-toggle-border: var(--btn-toggle-border);
  --color-btn-toggle-hover-bg: var(--btn-toggle-hover-bg);
  --color-hero-title: var(--hero-title);
  --color-hero-subtitle: var(--hero-subtitle);
  --color-hero-role-label: var(--hero-role-label);
  --color-hero-grid-line: var(--hero-grid-line);
  --color-hero-grid-dot: var(--hero-grid-dot);
  --color-hero-btn-bg: var(--hero-btn-bg);
  --color-hero-btn-text: var(--hero-btn-text);
  --color-hero-btn-hover-bg: var(--hero-btn-hover-bg);
  --color-hero-gradient-start: var(--hero-gradient-start);
  --color-hero-gradient-end: var(--hero-gradient-end);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

---

## 🏷️ Naming Conventions

| สิ่งที่ตั้งชื่อ | Pattern | ตัวอย่าง |
|---|---|---|
| CSS variable | `--{section}-{element}` | `--hero-title` |
| Tailwind token | `--color-{section}-{element}` | `--color-hero-title` |
| Component file | `PascalCase.tsx` | `HeroSection.tsx` |
| Data file | `camelCase.ts` | `navigation.ts` |
| Type file | `camelCase.ts` | `navigation.ts` |
| Folder (section) | `kebab-case` | `sections/hero/` |
| Section id | `kebab-case` | `id="what-i-do"` |
| Nav anchor | `#kebab-case` | `#what-i-do` |
