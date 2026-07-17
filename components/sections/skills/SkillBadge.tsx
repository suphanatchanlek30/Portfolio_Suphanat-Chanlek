"use client";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCss3Alt,
  FaAws,
  FaMicrosoft,
  FaDatabase,
  FaTag,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
  SiLinux,
  SiNginx,
  SiTerraform,
  SiAnsible,
  SiHelm,
  SiGooglecloud,
  SiPrometheus,
  SiGrafana,
  SiGo,
  SiFastapi,
  SiVuedotjs,
  SiAngular,
  SiOpencv,
  SiScikitlearn,
  SiPostman,
  SiFigma,
  SiFirebase,
  SiPrisma,
  SiPython,
  SiPlotly,
} from "react-icons/si";

import { cn } from "@/lib/classNames";

/** Map icon identifiers to actual react-icons components */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // Frontend
  "fa/FaReact": FaReact,
  "si/SiNextdotjs": SiNextdotjs,
  "si/SiJavascript": SiJavascript,
  "si/SiTypescript": SiTypescript,
  "si/SiVuedotjs": SiVuedotjs,
  "si/SiAngular": SiAngular,
  "si/SiTailwindcss": SiTailwindcss,
  "fa/FaCss3Alt": FaCss3Alt,

  // Backend
  "si/SiGo": SiGo,
  "fa/FaJava": FaJava,
  "si/SiSpringboot": SiSpringboot,
  "fa/FaNodeJs": FaNodeJs,
  "si/SiExpress": SiExpress,
  "si/SiFastapi": SiFastapi,
  "si/SiPostgresql": SiPostgresql,
  "si/SiMysql": SiMysql,
  "si/SiMongodb": SiMongodb,
  "fa/FaDatabase": FaDatabase,

  // DevOps & Cloud
  "si/SiDocker": SiDocker,
  "si/SiKubernetes": SiKubernetes,
  "si/SiGithubactions": SiGithubactions,
  "si/SiJenkins": SiJenkins,
  "si/SiLinux": SiLinux,
  "si/SiNginx": SiNginx,
  "si/SiTerraform": SiTerraform,
  "si/SiAnsible": SiAnsible,
  "si/SiHelm": SiHelm,
  "fa/FaAws": FaAws,
  "si/SiGooglecloud": SiGooglecloud,
  "fa/FaMicrosoft": FaMicrosoft,
  "si/SiPrometheus": SiPrometheus,
  "si/SiGrafana": SiGrafana,

  // ML/AI
  "fa/FaPython": FaPython,
  "si/SiNumpy": SiNumpy,
  "si/SiPandas": SiPandas,
  "si/SiOpencv": SiOpencv,
  "si/SiScikitlearn": SiScikitlearn,
  "si/SiTensorflow": SiTensorflow,
  "si/SiPytorch": SiPytorch,
  "si/SiPlotly": SiPlotly,
  "si/SiPython": SiPython,

  // Tools
  "fa/FaGitAlt": FaGitAlt,
  "fa/FaGithub": FaGithub,
  "si/SiPostman": SiPostman,
  "si/SiFigma": SiFigma,
  "si/SiFirebase": SiFirebase,
  "si/SiPrisma": SiPrisma,
  "fa/FaTag": FaTag,
};

type SkillBadgeProps = {
  name: string;
  icon: string;
  className?: string;
};

/**
 * Individual skill badge with icon and label.
 * Compact, responsive sizing with gradient border.
 */
export default function SkillBadge({ name, icon, className }: SkillBadgeProps) {
  const IconComponent = iconMap[icon];

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        "px-3 py-1.5 sm:px-4 sm:py-2",
        "bg-skills-badge-bg",
        "rounded-lg",
        "text-skills-badge-text text-xs sm:text-sm md:text-base",
        "whitespace-nowrap",
        "border",
        "[border-image:linear-gradient(10deg,var(--skills-badge-border-start),var(--skills-badge-border-end))_1]",
        className,
      )}
    >
      {IconComponent && (
        <IconComponent className="text-base sm:text-lg md:text-xl text-skills-badge-text shrink-0" />
      )}
      <span>{name}</span>
    </div>
  );
}
