"use client";

import { motion, type Variants } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  impact?: string;
  bullets?: string[];
  techStack: string[];
  imageUrl?: string;
  link: string;
  highlight?: string;
  variant?: "featured" | "standard";
}

const projects: Project[] = [
  {
    title: "Fitness Coaching Engine",
    variant: "featured",
    description: "",
    impact:
      "KI-gestütztes Trainingssystem mit semantischer Übungsanalyse — von Rohdaten bis zu aussagekräftigen Metriken.",
    bullets: [
      "Architektur: Schichtenarchitektur (API → Services → Analytics → Infrastructure) — bewusst ohne ORM",
      "Analytics: Deterministische Metriken (1RM, Volume, Plateau-Erkennung) mit NumPy",
      "Hybrid AI: Embedding-basiertes Ähnlichkeitsmatching + LLM-Fallback mit Confidence Scoring",
      "Fullstack: React 19 + FastAPI + PostgreSQL + Docker Compose + Workbox PWA",
      "Betrieb: Self-hosted Ollama für Embeddings, CI/CD mit GitHub Actions",
    ],
    techStack: ["React 19", "TypeScript", "FastAPI", "PostgreSQL", "Ollama", "Docker", "Workbox"],
    link: "https://fitness.dennisheyer.dev",
    highlight: "Aktives Projekt",
  },
  {
    title: "Portfolio Website",
    description: "Moderne Portfolio-Website mit Next.js 16, optimiert für Performance und SEO. Animierte UI-Elemente mit Framer Motion und automatisierte Quality Checks via GitHub Actions.",
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub Actions"],
    link: "https://github.com/Radok527/dennisheyer-portfolio",
    highlight: "Open Source",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.58, 1] as const },
  },
};

export default function ProjectsSection() {
  const featuredProject = projects.find((p) => p.variant === "featured");
  const standardProjects = projects.filter((p) => p.variant !== "featured");

  return (
    <SectionWrapper
      id="projects"
      title="Projekte"
      subtitle="Was ich so gebaut habe"
      className="bg-black"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-6 lg:gap-8"
      >
        {/* Featured project - larger, case study style */}
        {featuredProject && (
          <motion.div variants={itemVariants} className="w-full">
            <ProjectCard {...featuredProject} />
          </motion.div>
        )}

        {/* Standard projects - smaller cards in a grid */}
        {standardProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standardProjects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
