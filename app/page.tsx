// app/page.tsx

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/hero/HeroSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import AboutSection from "@/components/sections/about/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </main>
  );
}
