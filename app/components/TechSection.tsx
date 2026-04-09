"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skills = [
  {
    category: "Backend",
    items: ["Java 11-21", "Spring Boot", "Python 3.11+", "FastAPI", "REST APIs", "PostgreSQL"],
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    category: "Frontend & PWA",
    items: ["React 18", "TypeScript 5", "TailwindCSS v4", "Workbox (PWA)", "Recharts", "i18n"],
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30"
  },
  {
    category: "DevOps",
    items: ["Docker", "Docker Compose", "Kubernetes", "Helm", "Nginx", "Jenkins", "Flyway"],
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30"
  },
  {
    category: "AI & Embeddings",
    items: ["Ollama (self-hosted LLM)", "Embeddings", "Semantic Search", "Confidence Scoring"],
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30"
  }
];

const itemVariants = {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className={`rounded-2xl border ${group.borderColor} ${group.bgColor} p-6`}
          >
            <motion.h3
              variants={itemVariants}
              className={`text-lg font-semibold ${group.color} mb-4`}
            >
              {group.category}
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2"
            >
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700 text-gray-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
