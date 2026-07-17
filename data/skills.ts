/**
 * Skills section content — data only, no styling.
 * Each row contains skills that scroll in a specific direction.
 * Icons use react-icons identifiers.
 */

export type Skill = {
  name: string;
  icon: string; // react-icons identifier: "library/IconName"
};

export type SkillRow = {
  direction: "left" | "right";
  duration: number; // seconds for one full scroll cycle
  skills: Skill[];
};

export const skillsSectionContent = {
  title: "Programming Skills & Tools",
  subtitle: "Languages, frameworks, and tools I use to bring ideas to life.",
} as const;

export const skillRows: SkillRow[] = [
  // Row 1: Frontend + Backend — scroll right
  {
    direction: "right",
    duration: 50,
    skills: [
      { name: "React.js", icon: "fa/FaReact" },
      { name: "Next.js", icon: "si/SiNextdotjs" },
      { name: "Vue.js", icon: "si/SiVuedotjs" },
      { name: "Angular", icon: "si/SiAngular" },
      { name: "TypeScript", icon: "si/SiTypescript" },
      { name: "JavaScript", icon: "si/SiJavascript" },
      { name: "Tailwind CSS", icon: "si/SiTailwindcss" },
      { name: "Node.js", icon: "fa/FaNodeJs" },
      { name: "Express.js", icon: "si/SiExpress" },
      { name: "Go", icon: "si/SiGo" },
      { name: "Java", icon: "fa/FaJava" },
      { name: "Spring Boot", icon: "si/SiSpringboot" },
      { name: "FastAPI", icon: "si/SiFastapi" },
      { name: "Python", icon: "fa/FaPython" },
    ],
  },
  // Row 2: DevOps, Cloud & Databases — scroll left
  {
    direction: "left",
    duration: 55,
    skills: [
      { name: "Docker", icon: "si/SiDocker" },
      { name: "Kubernetes", icon: "si/SiKubernetes" },
      { name: "GitHub Actions", icon: "si/SiGithubactions" },
      { name: "Jenkins", icon: "si/SiJenkins" },
      { name: "Terraform", icon: "si/SiTerraform" },
      { name: "Ansible", icon: "si/SiAnsible" },
      { name: "Helm", icon: "si/SiHelm" },
      { name: "AWS", icon: "fa/FaAws" },
      { name: "GCP", icon: "si/SiGooglecloud" },
      { name: "Azure", icon: "fa/FaMicrosoft" },
      { name: "Linux", icon: "si/SiLinux" },
      { name: "Nginx", icon: "si/SiNginx" },
      { name: "Prometheus", icon: "si/SiPrometheus" },
      { name: "Grafana", icon: "si/SiGrafana" },
      { name: "PostgreSQL", icon: "si/SiPostgresql" },
      { name: "MySQL", icon: "si/SiMysql" },
      { name: "MongoDB", icon: "si/SiMongodb" },
      { name: "MSSQL Server", icon: "fa/FaDatabase" },
    ],
  },
  // Row 3: ML/AI + Tools — scroll right
  {
    direction: "right",
    duration: 50,
    skills: [
      { name: "NumPy", icon: "si/SiNumpy" },
      { name: "Pandas", icon: "si/SiPandas" },
      { name: "OpenCV", icon: "si/SiOpencv" },
      { name: "Scikit-learn", icon: "si/SiScikitlearn" },
      { name: "TensorFlow", icon: "si/SiTensorflow" },
      { name: "PyTorch", icon: "si/SiPytorch" },
      { name: "XGBoost", icon: "si/SiPython" },
      { name: "Matplotlib", icon: "si/SiPlotly" },
      { name: "Git", icon: "fa/FaGitAlt" },
      { name: "GitHub", icon: "fa/FaGithub" },
      { name: "Postman", icon: "si/SiPostman" },
      { name: "Figma", icon: "si/SiFigma" },
      { name: "Firebase", icon: "si/SiFirebase" },
      { name: "Prisma", icon: "si/SiPrisma" },
      { name: "Label Studio", icon: "fa/FaTag" },
    ],
  },
];
