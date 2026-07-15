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
 * Mobile: no 3D, text starts from top
 * Desktop: 3D absolute left, text right
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-60px)] w-full overflow-hidden bg-hero-gradient-start"
    >
      {/* Background grid decoration */}
      <HeroBackground />

      {/* Desktop: 3D absolute positioned left */}
      <div className="pointer-events-none absolute inset-y-0 left-[2%] hidden w-[38%] items-center justify-center md:flex lg:left-[5%] lg:w-[42%]">
        <Hero3DScene />
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-60px)] w-full max-w-7xl items-start justify-center px-6 pt-28 pb-16 sm:px-8 md:items-center md:justify-end md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="w-full md:w-[55%] lg:w-[50%]">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
