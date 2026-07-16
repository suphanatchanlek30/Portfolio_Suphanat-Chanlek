// components/sections/hero/HeroSection.tsx

"use client";

import dynamic from "next/dynamic";

import HeroBackground from "@/components/sections/hero/HeroBackground";
import HeroContent from "@/components/sections/hero/HeroContent";

// Lazy-load 3D scene to avoid SSR issues with Three.js
const Hero3DScene = dynamic(
  () => import("@/components/sections/hero/Hero3DScene"),
  { ssr: false },
);

/**
 * Full-screen hero section.
 * Portrait (all iPads & mobile): no 3D, centered text filling the screen
 * Landscape tablet & desktop (≥1024px + landscape): 3D left, text right
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-60px)] w-full overflow-hidden bg-hero-gradient-start"
    >
      {/* Background grid decoration */}
      <HeroBackground />

      {/* 3D scene — only visible in landscape ≥1024px */}
      <div className="pointer-events-none absolute inset-y-0 left-[5%] hidden w-[42%] items-center justify-center landscape-lg:flex">
        <Hero3DScene />
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-60px)] w-full max-w-7xl items-start justify-center px-6 pt-28 pb-16 sm:px-8 sm:pt-32 md:items-center md:px-16 md:pt-20 lg:px-20 landscape-lg:justify-end landscape-lg:px-12 landscape-lg:py-24">
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl landscape-lg:max-w-none landscape-lg:w-[50%]">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
