// app/page.tsx

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/hero/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
    </main>
  );
}
