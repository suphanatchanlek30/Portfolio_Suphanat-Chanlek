// components/sections/competition-experience/CompetitionExperienceSection.tsx

"use client";

import { useState } from "react";

import { cn } from "@/lib/classNames";
import type { CompetitionItem } from "@/data/competitions";
import CompetitionHeader from "@/components/sections/competition-experience/CompetitionHeader";
import CompetitionGrid from "@/components/sections/competition-experience/CompetitionGrid";
import CompetitionModal from "@/components/sections/competition-experience/CompetitionModal";

type CompetitionExperienceSectionProps = {
  className?: string;
};

/**
 * Competition & Hackathon Experience — fulfills the "Portfolio" nav anchor.
 * Bento grid of preview cards; clicking a card opens a detail modal
 * instead of navigating away, since this is a static single-page site.
 */
export default function CompetitionExperienceSection({
  className,
}: CompetitionExperienceSectionProps) {
  const [selected, setSelected] = useState<CompetitionItem | null>(null);

  return (
    <section
      id="portfolio"
      className={cn(
        "relative w-full bg-background px-6 py-12 sm:px-8 sm:py-16 md:px-16 md:py-32 lg:px-20",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        <CompetitionHeader className="mb-12 md:mb-14" />
        <CompetitionGrid onOpen={setSelected} />
      </div>

      <CompetitionModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
