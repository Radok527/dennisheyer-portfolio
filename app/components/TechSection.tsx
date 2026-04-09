"use client";

import { motion, type Variants } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import TechBadge from "./TechBadge";

const technologies = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "TypeScript", icon: "📘" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Docker", icon: "🐳" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "📚" },
  { name: "REST APIs", icon: "🔌" },
  { name: "Python", icon: "🐍" },
  { name: "FastAPI", icon: "⚡" },
  { name: "AWS", icon: "☁️" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.58, 1] as const },
  },
};

export default function TechSection() {
  return (
    <SectionWrapper
      id="tech"
      title="Tech Stack"
      subtitle="Technologies I work with"
      className="bg-zinc-950"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {technologies.map((tech) => (
          <motion.div key={tech.name} variants={itemVariants}>
            <TechBadge name={tech.name} icon={tech.icon} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
