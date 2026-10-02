// data/projects.ts

/**
 * Projects - data only, no styling.
 * Sourced from the resume's Projects section and the previous portfolio's
 * project write-ups. Only projects with an available screenshot are listed
 * here (public/projects/); add more by dropping an image in and following
 * the same shape.
 */

export type ProjectItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  /** Path under /public */
  image: string;
  techStack: string[];
  role?: string;
  link?: { label: string; href: string };
};

export const projectsContent = {
  sectionTitle: "Projects",
  sectionSubtitle: "A selection of things I've designed, built, and shipped.",
} as const;

export const projectItems: ProjectItem[] = [
  {
    id: "cubic",
    title: "CUBIC - Building Information Catalog",
    tagline: "Centralizing Chulalongkorn University's building data.",
    description:
      "CUBIC centralizes Chulalongkorn University's building information, which was previously scattered across departments in inconsistent, duplicate, and outdated files with no version control. The platform provides a centralized BIM data catalog - building type, year built, floor area, and more - with secure, easy access. Admins can register buildings, review and approve BIM file requests with audit-ready documentation, and manage users; general users can browse buildings, request BIM file access, and track request status. Built as a foundation for a future Smart Campus connecting energy, safety, and facility-management systems.",
    image: "/projects/Chulalongkorn University Building Information Catalog CUBIC.png",
    techStack: ["Next.js", "Go", "PostgreSQL", "AWS EC2", "AWS Cognito", "AWS S3", "Cloudflare"],
    role: "Built and deployed the end-to-end BIM/IFC workflow - access, processing, tracking, and 3D visualization - with authentication, authorization, and RBAC for secure BIM access and approval workflows.",
  },
  {
    id: "sos-backoffice",
    title: "SOS Backoffice Dashboard",
    tagline: "Production backoffice for a food-surplus platform.",
    description:
      "Contributed to the SOS Backoffice by implementing additional frontend features in Next.js/TypeScript, integrating with a NestJS backend to extend end-to-end management across the system. Worked closely with UI/UX to translate Figma specs into responsive, accessible views using Tailwind CSS and reusable components. Focused on production-grade flows - data tables, forms, filters, and pagination - while strengthening state management and error handling, and collaborated with backend to clarify API contracts and fix live-environment issues.",
    image: "/projects/SOS Backoffice Dashboard.webp",
    techStack: ["Next.js", "Nest.js", "Tailwind CSS", "TypeScript", "PostgreSQL"],
  },
  {
    id: "wasty-website",
    title: "Wasty - SOS Spark Project",
    tagline: "Landing page turning surplus food into support.",
    description:
      "A fully responsive landing page for SOS Spark Project (Spark.Everloaf), an innovation program that leverages AI, gamified experiences, and community action to turn surplus food into meaningful support for people in need. Showcases the project story and goals, the statistical impact of donations, detailed partner profiles, a feature tour of the in-game system, and reviews from contributors. Built to real client requirements, focused on clarity, accessibility, and conversion.",
    image: "/projects/SparkWorld Wasty-website.png",
    techStack: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "doh-bim-dashboard",
    title: "DOH BIM Dashboard",
    tagline: "Track construction progress in 3D, floor by floor.",
    description:
      "A web platform for viewing 3D building models (BIM/IFC) and tracking construction progress floor by floor. The 3D viewer and responsive UI offer floor isolation, measurement, section cuts, element search, and clash reporting, with model elements color-coded by work status. The NestJS backend converts uploaded IFC files, stores them on MinIO (S3), and imports/exports CSV, Excel, and MS Project files. Organized as a monorepo with shared types between frontend and backend, deployed with Docker Compose, and backed by automated tests plus improvements to page load speed and accessibility.",
    image: "/projects/DOH Dashboard.png",
    techStack: ["React", "NestJS", "TypeScript", "Tailwind CSS", "PostgreSQL", "MinIO"],
    role: "Built the 3D viewer and responsive UI, plus the backend API for IFC conversion, file storage, and data import/export.",
  },
  {
    id: "federated-learning-dashboard",
    title: "Federated Learning Dashboard",
    tagline: "Research visualization for the PADIN Project.",
    description:
      "A visualization dashboard for the PADIN Project's federated learning research - model performance and experiment metadata derived from FL logs, presented in a minimal, documentation-first style for clear research communication. Tracks a global research network across Thailand and Japan (2 countries, 2 universities, 10+ researchers) while fully preserving local data ownership. Live convergence analysis shows global and per-site F1 scores across training rounds, alongside data-processed and session-duration metrics on an interactive participation map.",
    image: "/projects/Federated Learning Dashboard/Home Page.png",
    techStack: ["Next.js", "Go (Fiber)", "PostgreSQL", "GORM", "Leaflet.js", "AWS EC2", "AWS S3"],
    role: "Built the dashboard for annotation management, model visualization, and the federated research network map.",
  },
  {
    id: "scam-mai",
    title: "Scam Mai",
    tagline: "Check the risk before you transfer, over LINE.",
    description:
      "Scam Mai is a scam-prevention and preventive cyber-insurance platform that lets users check the risk of a transfer before sending money over LINE, while managing coverage and claims in one place. It uses AI and \"ScamGraph\" - a relationship-graph analysis of transfer data - to reduce the chance of falling victim to fraud and to lighten the claims process when an incident does happen.",
    image: "/projects/Scam mai.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "LINE Messaging API"],
    role: "Full-stack developer - built the platform end-to-end.",
  },
  {
    id: "inscence",
    title: "INSCENCE",
    tagline: "Winner, SSPI Hackathon 2024 - travel meets film locations.",
    description:
      "INSCENCE is a responsive, API-driven platform that guides users to real Thai locations featured in films and TV series. Led the frontend, delivering a clean, mobile-first UI with seamless API integration. Built for the SSPI Hackathon 2024 Prototype Competition (Science Thammasat), the project won First Place and earned strong praise from the judging panel.",
    image: "/projects/INSCENCE.png",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Cloudinary"],
    role: "Frontend lead - UI/UX implementation and API integration.",
  },
];
