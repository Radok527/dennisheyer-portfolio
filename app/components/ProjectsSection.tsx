"use client";

import { motion, type Variants } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fitness Coaching Engine",
    description:
      "Full-Stack PWA für Kraftathleten. KI-gestützte Übungs-Normalisierung (Hybrid: Embeddings + LLM), deterministische Analytics (1RM, Volume, Plateau-Erkennung), Offline-First mit Workbox. JWT/Argon2 Auth, PostgreSQL mit Flyway, Docker Compose, GitHub Actions CI/CD.",
    techStack: ["React 19", "TypeScript", "FastAPI", "PostgreSQL", "Ollama", "Docker", "Workbox", "TanStack Query"],
    imageUrl: "/assets/fitness.png",
    link: "https://fitness.dennisheyer.dev",
    highlight: "Active Project"
  }
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
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Things I&apos;ve built"
      className="bg-black"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
