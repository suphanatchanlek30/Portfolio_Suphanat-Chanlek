// data/about.ts

/** About section content — data only, no styling. */

export type TimelineItem = {
  id: string;
  type: "education" | "experience" | "training";
  title: string;
  organization: string;
  period: string;
  description: string;
  logo?: string;
};

export const aboutContent = {
  sectionTitle: "About Me",
  sectionSubtitle: "What About Me?",
  bio: "I'm a third-year Computer Science student passionate about full-stack development, AI, and DevOps. With experience from internships, hackathons, and research projects, I build real-world applications and am eager to grow as a Software Engineer.",
  email: "suphanatchanlek@gmail.com",
  education: {
    degree: "Computer Science",
    gpa: "3.42",
    period: "2024 – Present",
    university: "Thammasat University",
  },
} as const;

export const timelineItems: TimelineItem[] = [
  {
    id: "connected-tech",
    type: "experience",
    title: "AI / MLOps Engineer (Intern)",
    organization: "Connected Tech Co., Ltd.",
    period: "Jul 2026 – Sep 2026",
    description:
      "Supporting AI engineering and MLOps workflows. Assisting in data processing, model development, inference pipeline design, and ML service integration with experiment tracking.",
    logo: "/about/experience/connected-logo.png",
  },
  {
    id: "tcc-technology",
    type: "experience",
    title: "Application Developer (Intern & Part-Time)",
    organization: "T.C.C. Technology Co., Ltd.",
    period: "Jun 2026 – Present",
    description:
      "Contributing to backend development for enterprise applications. Implementing APIs, business logic, and service integrations with Docker-based environments and Git workflows.",
    logo: "/about/experience/tcc_technology-logo.png",
  },
  {
    id: "lab-tonkit",
    type: "experience",
    title: "Undergraduate Researcher (AI & Software Engineering)",
    organization: "Thammasat University – Lab Tonkit",
    period: "May 2025 – Present",
    description:
      "Contributing to the PADIN Project (Osaka University × Thammasat). Built AI-powered dental X-ray diagnostic tools using SAM 2, processing ~2,000 images/month with federated learning research.",
    logo: "/about/experience/tonkit-logo.png",
  },
  {
    id: "ascend",
    type: "experience",
    title: "Frontend Developer (Intern)",
    organization: "ASCEND Co., Ltd.",
    period: "Aug 2025 – Nov 2025",
    description:
      "Developed responsive web interfaces with Next.js and Tailwind CSS for production systems. Translated Figma mockups into high-fidelity, production-ready code with backend integration.",
    logo: "/about/experience/ascend-logo.png",
  },
] as const;

export const trainingItems: TimelineItem[] = [
  {
    id: "super-ai",
    type: "training",
    title: "Super AI Engineer Season 6",
    organization: "Artificial Intelligence Association of Thailand (AIAT)",
    period: "Mar 2026 – Present",
    description:
      "Selected as one of 150 participants from over 10,457 candidates nationwide (top 1.5%). Completed Level 1: AI Fundamentals (ML, CV, NLP, LLMs, RAG). Passed Level 2: Intensive AI Camp with real-world industry problems. Currently in Level 3: AI Internship gaining hands-on experience.",
    logo: "/about/experience/aiat-logo.png",
  },
] as const;
