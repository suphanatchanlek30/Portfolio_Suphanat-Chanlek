// data/competitions.ts

/**
 * Competition & Hackathon Experience — data only, no styling.
 *
 * Fields marked with a placeholder string ("Coming soon" / "-") are not confirmed yet.
 * Replace them with real details (organizer, description, role, tech stack, result)
 * whenever they become available — the UI already hides optional fields that are
 * left undefined, so remove a field entirely instead of leaving it empty if unsure.
 */

export type CompetitionCategory =
  | "hackathon"
  | "competition"
  | "workshop"
  | "training";

export type CompetitionItem = {
  id: string;
  title: string;
  organizer: string;
  year: string;
  category: CompetitionCategory;
  /** Path under /public */
  image: string;
  /** Bento grid sizing — "large" spans 2x2, "normal" spans 1x1 */
  size: "large" | "normal";
  /** Short one-liner shown under the title in the modal header */
  summary: string;
  /** Full write-up shown in the detail modal */
  description: string;
  role?: string;
  techStack?: string[];
  achievement?: string;
  link?: { label: string; href: string };
};

export const competitionsContent = {
  sectionTitle: "Competition & Hackathon Experience",
  sectionSubtitle:
    "A collection of hackathons, competitions, and innovation programs I've taken part in - click any card to see the full story.",
} as const;

export const competitionItems: CompetitionItem[] = [
  {
    id: "super-ai-engineer-ss6",
    title: "Super AI Engineer Season 6",
    organizer: "Artificial Intelligence Association of Thailand (AIAT)",
    year: "2026",
    category: "training",
    image: "/competition_experience/Super Ai Engineer SS6.jpg",
    size: "large",
    summary: "Top 1.5% nationwide — 150 selected from 10,457 applicants.",
    description:
      "Selected as one of 150 participants from over 10,457 candidates nationwide (top 1.5%). Completed Level 1: AI Fundamentals (ML, CV, NLP, LLMs, RAG). Passed Level 2: Intensive AI Camp with real-world industry problems. Currently in Level 3: AI Internship gaining hands-on experience.",
    techStack: ["Machine Learning", "Computer Vision", "NLP", "LLMs", "RAG"],
    achievement: "Top 1.5% nationwide (150 / 10,457 applicants)",
  },
    {
    id: "sci-soft-power-hackathon",
    title: "Sci Soft Power Hackathon",
    organizer: "Coming soon",
    year: "2024",
    category: "hackathon",
    image: "/competition_experience/sci soft power hackathon 2024.webp",
    size: "normal",
    summary: "Coming soon.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
  {
    id: "ghb-open-innovation",
    title: "GHB Open Innovation Hackathon",
    organizer: "Coming soon",
    year: "2025",
    category: "hackathon",
    image: "/competition_experience/GHB Open Innovation hackathon 2025.webp",
    size: "large",
    summary: "Open innovation challenge for the financial sector.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
  {
    id: "seven-eleven-young-geniversity",
    title: "7-Eleven Young Geniversity Hackathon",
    organizer: "Coming soon",
    year: "2025",
    category: "hackathon",
    image: "/competition_experience/7-eleven young geniversity hackathon 2025.webp",
    size: "normal",
    summary: "Innovation hackathon for university students.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
  {
    id: "coffee-chain-expresso-nb",
    title: "Coffee Chain Hackathon",
    organizer: "ExpresSo NB",
    year: "Coming soon",
    category: "hackathon",
    image: "/competition_experience/Coffee Chain Hackathon by ExpresSo NB.jpg",
    size: "normal",
    summary: "Digital solutions for the coffee chain business.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
  {
    id: "edge-ai-intelligent-transport-nt",
    title: "Edge-AI for Intelligent Transport System",
    organizer: "NT (National Telecom)",
    year: "Coming soon",
    category: "competition",
    image: "/competition_experience/Edge-AI for Intelligence Transport System by NT.jpg",
    size: "normal",
    summary: "Edge AI applied to intelligent transport systems.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
  {
    id: "mega-trend-meta-learning",
    title: "Mega Trend Meta Learning Hackathon",
    organizer: "Coming soon",
    year: "2024",
    category: "hackathon",
    image: "/competition_experience/Mega Trend Meta Learning Hackathon 2024.webp",
    size: "normal",
    summary: "Exploring meta-learning approaches to emerging tech trends.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
  {
    id: "sony-smart-factory",
    title: "Sony Smart Factory Hackathon",
    organizer: "Sony",
    year: "2025",
    category: "hackathon",
    image: "/competition_experience/Sony Smart Factory Hackathon 2025.jpg",
    size: "normal",
    summary: "Smart manufacturing solutions for the factory floor.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
  {
    id: "axtra-mile-hackathon",
    title: "AXTRA Mile Hackathon",
    organizer: "CP AXTRA PUBLIC COMPANY LIMITED",
    year: "2025",
    category: "hackathon",
    image: "/competition_experience/axtra mile hackathon 2025.webp",
    size: "normal",
    summary: "Coming soon.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
  {
    id: "digital-innovation-workshop",
    title: "Digital Innovation Workshop",
    organizer: "TATA CONSULTANCY SERVICES (THAILAND) LIMITED",
    year: "2023",
    category: "workshop",
    image: "/competition_experience/digital innovation workshop 2023.webp",
    size: "normal",
    summary: "Coming soon.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
  {
    id: "young-webmaster-camp",
    title: "Young Webmaster Camp 20",
    organizer: "Coming soon",
    year: "2025",
    category: "training",
    image: "/competition_experience/young web master camp 20.webp",
    size: "normal",
    summary: "Coming soon.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
  {
    id: "scglwd-next-gen-logistics",
    title: "SCGLWD Next Gen Logistics Hackathon",
    organizer: "Coming soon",
    year: "2025",
    category: "hackathon",
    image: "/competition_experience/SCGLWD Next Gen Logistics Hackathon 2025.webp",
    size: "normal",
    summary: "Building next-generation logistics solutions.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
  {
    id: "icpc-thailand-central-region-2026",
    title: "ICPC Thailand Central Region 2026",
    organizer: "ICPC Foundation",
    year: "2026",
    category: "competition",
    image: "/competition_experience/ICPC Thailand National Contest 2026.png",
    size: "normal",
    summary: "Competitive programming contest, Chulalongkorn Business School.",
    description:
      "Coming soon — full write-up of the challenge, our solution, and the tech behind it will be added here.",
  },
];
