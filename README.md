# Suphanat Chanlek Portfolio

โปรเจกต์ Portfolio ส่วนตัวสำหรับแนะนำตัว แสดงผลงาน ทักษะ และช่องทางติดต่อ

## Project Structure

```text
app/
	layout.tsx          # Root layout (fonts, metadata)
	page.tsx            # Home page
	globals.css         # CSS variables & Tailwind theme config
components/
	layout/
		Navbar.tsx          # Main navbar (orchestrates sub-components)
		navbar/
			MenuToggleButton.tsx   # Mobile hamburger/close button
			NavLinkList.tsx        # Reusable navigation link list
			SocialLinkButton.tsx   # Reusable social icon button
data/
	navigation.ts       # Navigation data (links, social URLs, SVG paths)
lib/
	classNames.ts       # className utility (conditional class joining)
types/
	navigation.ts       # Shared TypeScript types
public/
```

## Architecture Conventions

- **Colors** — ทุกสีกำหนดไว้ใน `app/globals.css` เป็น CSS variables แล้วใช้ผ่าน Tailwind (`bg-navbar-bg`, `text-navbar-link` ฯลฯ)
- **Data ≠ Styling** — ไฟล์ใน `data/` เก็บแค่ข้อมูล (label, href, svgPath) ไม่มี className
- **Types** — เก็บ type ที่ใช้ร่วมกันใน `types/` ไม่มี styling properties
- **Components** — ใช้ `cn()` utility สำหรับ conditional classes, รับ `className` prop เพื่อ flexibility
- **Accessibility** — ใช้ semantic HTML (`<nav>`, `<header>`), aria-label, aria-expanded

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Run Project

```bash
npm install
npm run dev
```

เปิดใช้งานที่ `http://localhost:3000`
