"use client";

import { motion, type Variants } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fitness Tracker App",
    description:
      "Track workouts, nutrition, and progress with a comprehensive fitness tracking application. Features include workout logging, meal planning, and progress visualization.",
    techStack: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    link: "#",
  },
  {
    title: "API Backend Service",
    description:
      "RESTful APIs with authentication and authorization. Built with scalability and performance in mind, featuring comprehensive documentation and testing.",
    techStack: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
    link: "#",
  },
  {
    title: "AI Tool",
    description:
      "AI-powered productivity tool leveraging OpenAI APIs. Automates repetitive tasks and provides intelligent suggestions to improve workflow efficiency.",
    techStack: ["Python", "FastAPI", "OpenAI", "Docker"],
    link: "#",
  },
  {
    title: "Fullstack Web App",
    description:
      "Modern full-stack application with responsive design, real-time features, and cloud deployment. Built with best practices and clean architecture.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    link: "#",
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
