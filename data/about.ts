// data/about.ts

/** About section content - data only, no styling. */

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
    gpa: "3.31",
    period: "2024 – Present",
    university: "Thammasat University",
  },
} as const;

export const timelineItems: TimelineItem[] = [
  {
    id: "tcc-technology",
    type: "experience",
    title: "Application Developer (Internship & Part-Time)",
    organization: "T.C.C. Technology Co., Ltd.",
    period: "Jun 2026 – Present",
    description:
      "Building backend services for enterprise applications - designing APIs and business logic, and integrating services in Dockerized environments with solid Git workflows.",
    logo: "/about/experience/tcc_technology-logo.png",
  },
  {
    id: "lab-tonkit",
    type: "experience",
    title: "Undergraduate Researcher (AI & Software Engineering)",
    organization: "Thammasat University – Lab Tonkit",
    period: "May 2025 – Present",
    description:
      "Contributing to the PADIN Project, a joint AI research collaboration with Osaka University - building AI-powered dental X-ray diagnostic tools with SAM 2, processing around 2,000 images a month as part of ongoing federated learning research.",
    logo: "/about/experience/tonkit-logo.png",
  },
  {
    id: "connected-tech",
    type: "experience",
    title: "AI / MLOps Engineer (Internship)",
    organization: "Connected Tech Co., Ltd.",
    period: "Jul 2026 – Sep 2026",
    description:
      "Building AI engineering and MLOps workflows for AEGIS, a real-time PPE-compliance detection system - covering data processing, model development, inference pipeline design, and ML service integration with experiment tracking.",
    logo: "/about/experience/connected-logo.png",
  },
  {
    id: "ascend",
    type: "experience",
    title: "Frontend Developer (Internship)",
    organization: "ASCEND Co., Ltd.",
    period: "Aug 2025 – Nov 2025",
    description:
      "Built responsive web interfaces with Next.js and Tailwind CSS for production systems, translating Figma mockups into high-fidelity, production-ready code with backend integration.",
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
      "Selected as 1 of 150 participants from 10,457+ applicants nationwide (top 1.5%) for this 3-level national AI training program. Completed Level 1 (AI Fundamentals), Level 2 (Intensive AI Camp), and Level 3 - an AI internship at Connected Tech Co., Ltd. building AEGIS, a real-time PPE-compliance detection system - and was awarded a Silver Medal.",
    logo: "/about/experience/aiat-logo.png",
  },
] as const;
