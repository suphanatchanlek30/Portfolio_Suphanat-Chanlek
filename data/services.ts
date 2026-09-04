// data/services.ts

/** Service card content - data only, no styling. */
export type ServiceData = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

export const servicesContent = {
  sectionTitle: "What I Do",
  sectionSubtitle:
    "Building scalable systems from code to cloud - engineering solutions that bridge development, infrastructure, and intelligence.",
} as const;

export const services: ServiceData[] = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    subtitle: "Full-Stack Development",
    description:
      "Architect and build production-grade web applications with modern frameworks. From type-safe APIs with Go and Node.js to reactive frontends with Next.js and React - delivering end-to-end solutions with clean architecture, testing, and performance at scale.",
    tags: ["Next.js", "React", "Go", "Node.js", "TypeScript", "PostgreSQL","MongoDB","MySQL", "REST / gRPC"],
  },
  {
    id: "devops-engineering",
    title: "DevOps Engineering",
    subtitle: "Cloud & Infrastructure",
    description:
      "Design and automate cloud-native infrastructure with CI/CD pipelines, containerization, and Infrastructure as Code. Ship faster with zero-downtime deployments, observability, and auto-scaling across multi-cloud environments.",
    tags: ["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions", "Grafana", "Helm", "CI/CD", "Jenkins", "Linux"],
  },
  {
    id: "ai-ml-engineering",
    title: "AI/ML Engineering",
    subtitle: "Intelligent Systems",
    description:
      "Develop and deploy machine learning models from research to production. Build end-to-end MLOps pipelines with experiment tracking, model serving, and monitoring - turning data into actionable intelligence at enterprise scale.",
    tags: ["Python", "PyTorch", "MLflow", "FastAPI", "Hugging Face", "RAG", "TensorFlow", "OpenCV", "Computer Vision", "NLP", "Data Engineering"],
  },
] as const;
