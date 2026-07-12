# Suphanat Chanlek Portfolio

โปรเจกต์ Portfolio ส่วนตัวสำหรับแนะนำตัว แสดงผลงาน ทักษะ และช่องทางติดต่อ

## Project Structure

```text
app/
	layout.tsx
	page.tsx
	globals.css
components/
	layout/
		Navbar.tsx
		navbar/
			MenuToggleButton.tsx
			NavLinkList.tsx
data/
	navigation.ts
lib/
	cn.ts
types/
	navigation.ts
public/
```

## Navbar Structure

- `components/layout/Navbar.tsx` คือไฟล์หลักของ navbar
- `components/layout/navbar/MenuToggleButton.tsx` สำหรับปุ่มเปิด/ปิดบน mobile
- `components/layout/navbar/NavLinkList.tsx` สำหรับ render รายการลิงก์
- `data/navigation.ts` เก็บข้อมูลลิงก์และ social icons
- `types/navigation.ts` เก็บ type ที่ใช้ร่วมกัน

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
