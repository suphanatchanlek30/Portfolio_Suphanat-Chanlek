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
 * Layout: 3D object absolute-positioned on left, text content on the right.
 * Overflow hidden prevents anything from spilling out.
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-60px)] w-full overflow-hidden bg-hero-gradient-start"
    >
      {/* Background grid decoration */}
      <HeroBackground />

      {/* 3D floating object — large container so object never clips edges */}
      <div className="pointer-events-none absolute inset-y-0 left-[2%] hidden w-[45%] items-center justify-center md:flex lg:left-[5%]">
        <Hero3DScene />
      </div>

      {/* Main content — pushed to the right side */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-60px)] w-full max-w-7xl items-center px-6 py-20 sm:px-8 md:justify-end md:py-24 lg:px-12">
        <div className="w-full md:w-[55%] lg:w-[50%]">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
