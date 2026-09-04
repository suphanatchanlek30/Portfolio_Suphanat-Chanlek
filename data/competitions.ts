// data/competitions.ts

/**
 * Competition & Hackathon Experience — data only, no styling.
 *
 * Sourced from resume (Honors & Awards / Training), the previous portfolio's
 * "Competition Experience" write-ups, and LinkedIn certification entries.
 * Fields left undefined (role/techStack/achievement/link) simply weren't
 * confirmed by any of those sources — the UI hides them automatically.
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
    "Hackathons, competitions, and national training programs I've taken part in - click any card for the full story.",
} as const;

export const competitionItems: CompetitionItem[] = [
  {
    id: "super-ai-engineer-ss6",
    title: "Super AI Engineer Season 6",
    organizer: "Artificial Intelligence Association of Thailand (AIAT)",
    year: "2026",
    category: "training",
    image: "/competition_experience/Super Ai Engineer Silver medal.jpg",
    size: "large",
    summary: "Silver Medal — Levels 1–3 completed, top 1.5% nationwide.",
    description:
      "Completed all three levels of Super AI Engineer Season 6 — selected from 10,457+ applicants nationwide (top 1.5%) — and was awarded a Silver Medal. Level 1 covered AI Fundamentals through AIAT's 16-course MOOC (ML, CV, NLP, RAG) plus Kaggle mini-hackathons. Level 2's Intensive AI Camp brought hands-on work across Machine Learning, Data Science, Time-Series Forecasting, Computer Vision, NLP, LLMs, RAG, Agentic AI, IoT, and Cybersecurity through real-world industry challenges and team hackathons. Level 3 was an AI-focused internship at Connected Tech Co., Ltd., building and deploying AEGIS, a real-time PPE-compliance detection system for industrial safety at the edge — covering pose-guided ROI extraction, multi-region PPE classification, model training, calibration, and edge deployment.",
    role: "Level 3 AI internship at Connected Tech Co., Ltd. — designed and deployed AEGIS end-to-end, from pose-guided ROI extraction to edge deployment.",
    techStack: ["Machine Learning", "Computer Vision", "NLP", "LLMs & RAG", "Edge AI"],
    achievement: "Silver Medal — Super AI Engineer Season 6 (150 / 10,457+ applicants, Levels 1–3)",
  },
  {
    id: "sci-soft-power-hackathon",
    title: "Sci-Soft Power Innovation Hackathon 2024 (SSPI)",
    organizer: "Faculty of Science and Technology, Thammasat University",
    year: "2024",
    category: "hackathon",
    image: "/competition_experience/sci soft power hackathon 2024.webp",
    size: "normal",
    summary: "Winner — Prototype Competition.",
    description:
      "Won the prototype category with IN SCENE, a travel recommendation platform connecting real Thai locations featured in films and TV series with real-world destinations. Delivered a clean, mobile-first, API-driven UI.",
    role: "Frontend development — led the UI/UX implementation and API integration.",
    techStack: ["React.js", "Express.js", "MongoDB"],
    achievement: "Winner — Prototype Competition",
  },
  {
    id: "ghb-open-innovation",
    title: "GHB Open Innovation Hackathon 2025",
    organizer: "Government Housing Bank (GHB)",
    year: "2025",
    category: "hackathon",
    image: "/competition_experience/GHB Open Innovation hackathon 2025.webp",
    size: "large",
    summary: "Finalist — Top 15 Team.",
    description:
      "Developed a prototype for a banking money-management platform focused on ease of use and seamless operations, including a secure loan-management module built in strict compliance with the hackathon's requirements.",
    techStack: ["Next.js"],
    achievement: "Finalist — Top 15 Team",
  },
  {
    id: "seven-eleven-young-geniversity",
    title: "7-Eleven Young Geniversity 2025 Hackathon",
    organizer: "CP ALL Public Company Limited",
    year: "2025",
    category: "hackathon",
    image: "/competition_experience/7-eleven young geniversity hackathon 2025.webp",
    size: "normal",
    summary: "Finalist — presented to 7-Eleven's executive team.",
    description:
      "Selected for the final round and joined a multi-disciplinary bootcamp covering the full product development lifecycle. Our team designed a solution to boost Gen Z employee retention and motivation, presented to 7-Eleven's executive team and praised for its practicality and impact potential.",
    achievement: "Finalist",
  },
  {
    id: "coffee-chain-expresso-nb",
    title: "Coffee Chain Hackathon 2026 — Demand Forecasting at Scale",
    organizer: "Super AI Engineer Season 6 × ExpresSo NB",
    year: "2026",
    category: "hackathon",
    image: "/competition_experience/Coffee Chain Hackathon by ExpresSo NB.jpg",
    size: "normal",
    summary: "Winner.",
    description:
      "Built a hybrid demand forecasting system for inventory planning and proposed AI-driven inventory optimization to reduce waste, prevent stockouts, and improve ordering decisions.",
    techStack: ["CatBoost", "Chronos-Bolt"],
    achievement: "Winner",
  },
  {
    id: "edge-ai-intelligent-transport-nt",
    title: "Edge-AI for Intelligent Transport System Hackathon 2026",
    organizer: "Super AI Engineer Season 6 × NT",
    year: "2026",
    category: "competition",
    image: "/competition_experience/Edge-AI for Intelligence Transport System by NT.jpg",
    size: "normal",
    summary: "2nd Runner-up.",
    description:
      "Built a real-time Edge AI pipeline for multi-camera vehicle detection and classification, reducing vehicle search time from 1 hour to under 1 minute — an estimated ฿451K/year in savings.",
    techStack: ["Edge AI", "Multi-Camera Tracking", "Computer Vision"],
    achievement: "2nd Runner-up",
  },
  {
    id: "mega-trend-meta-learning",
    title: "Learn Lab 2024: Mega Trend Meta Learning Hackathon",
    organizer: "alpha+ sandbox",
    year: "2024",
    category: "hackathon",
    image: "/competition_experience/Mega Trend Meta Learning Hackathon 2024.webp",
    size: "normal",
    summary: "Finalist — advanced to the Final Pitch round.",
    description:
      "Reached the final pitching round with Bupakaree, a chatbot designed to guide and support first-time parents.",
    achievement: "Finalist — Final Pitch round",
  },
  {
    id: "sony-smart-factory",
    title: "Sony Smart Factory Hackathon 2025",
    organizer: "Sony Device Technology (Thailand)",
    year: "2025",
    category: "hackathon",
    image: "/competition_experience/Sony Smart Factory Hackathon 2025.jpg",
    size: "normal",
    summary: "1st Runner-up.",
    description:
      "Built an AI-powered supply chain and production planning platform for factory operations, including smart procurement, anomaly detection, and risk analysis to support production planning.",
    achievement: "1st Runner-up",
  },
  {
    id: "axtra-mile-hackathon",
    title: "Axtra Mile Hackathon 2025",
    organizer: "CP AXTRA Public Company Limited",
    year: "2025",
    category: "hackathon",
    image: "/competition_experience/axtra mile hackathon 2025.webp",
    size: "normal",
    summary: "Rookie Star Award.",
    description:
      "Tackled real-world challenges faced by Makro and Lotus with AmaMove, a mobility platform bridging customers in rural and suburban areas so they can access and spend with Makro and Lotus more conveniently. Focused on secure, high-performance technology and end-to-end delivery orchestration to improve reach, trust, and the overall shopping experience.",
    achievement: "Rookie Star Award — Top 10 Finalist",
  },
  {
    id: "digital-innovation-workshop",
    title: "Digital Innovation Workshop & Hackathon 2023",
    organizer: "TCS (Tata Consultancy Services) × CIS KMUTNB",
    year: "2023",
    category: "workshop",
    image: "/competition_experience/digital innovation workshop 2023.webp",
    size: "normal",
    summary: "1st Runner-up.",
    description:
      "Built Growth Work, a job-matching platform connecting job seekers and employers across professions, designed as an SDG-aligned digital recruitment solution to improve employment accessibility.",
    achievement: "1st Runner-up",
  },
  {
    id: "young-webmaster-camp",
    title: "Young Webmaster Camp 20 — Web Programming Track",
    organizer: "Young Webmaster Camp",
    year: "2025",
    category: "training",
    image: "/competition_experience/young web master camp 20.webp",
    size: "normal",
    summary: "Top 20 of 273 applicants.",
    description:
      "Advanced through an interview-round coding challenge — consuming a provided API to verify pass/fail results — to the Top 20 finalists out of 273 applicants, then joined a 5-day, 4-night bootcamp building a project to support artists across the art domain in a cross-functional team.",
    techStack: ["Next.js", "Tailwind CSS"],
    achievement: "Top 20 of 273 applicants — Web Programming Track",
  },
  {
    id: "scglwd-next-gen-logistics",
    title: "SCGJWD Next Gen Logistics Hackathon 2025",
    organizer: "SCGJWD Logistics",
    year: "2025",
    category: "hackathon",
    image: "/competition_experience/SCGLWD Next Gen Logistics Hackathon 2025.webp",
    size: "normal",
    summary: "Finalist — 1 of 45 nationwide.",
    description:
      "Selected from a nationwide bootcamp into a 24-hour hackathon, developing a solution to maximize efficiency in warehouse storage and delivery-fleet operations by improving slotting, allocation, and routing decisions.",
    achievement: "Finalist — 1 of 45 nationwide",
  },
  {
    id: "icpc-thailand-central-region-2026",
    title: "ICPC Thailand Central Region 2026",
    organizer: "ICPC Foundation",
    year: "2026",
    category: "competition",
    image: "/competition_experience/ICPC Thailand National Contest 2026.png",
    size: "normal",
    summary: "Selected participant — advanced to the National Contest.",
    description:
      "Advanced from the Sub-Regional/Central Region round through algorithmic problem-solving under competition conditions, qualifying for the ICPC Thailand National Contest 2026 hosted by Kasetsart University.",
    achievement: "Selected participant — ICPC Thailand National Contest 2026",
  },
];
