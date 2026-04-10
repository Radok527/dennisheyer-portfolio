"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface AIExperience {
  title: string;
  description: string;
  tags: string[];
  tagColor: "blue" | "green" | "purple" | "orange" | "teal";
}

const aiExperience: AIExperience[] = [
  {
    title: "Multi-Agent System",
    description: "Architect-Agent für strategische Planung, CoderAgent für Implementierung, TestEngineer, CodeReviewer und BuildAgent. Klare Rollentrennung mit Genehmigungs-Gates.",
    tags: ["Orchestrierung", "Sub-Agent-Verwaltung", "MCP-Tool-Integration", "BatchExecutor"],
    tagColor: "blue"
  },
  {
    title: "Models & APIs",
    description: "Erfahrung mit GPT-4o, Claude, MiniMax (Orbit), OpenAI Codex, Ollama (self-hosted) und embeddinggemma für verschiedene Use-Cases.",
    tags: ["GPT-4o", "Claude", "MiniMax Orbit", "OpenAI Codex", "Ollama", "Embeddinggemma"],
    tagColor: "blue"
  },
  {
    title: "Prompt Engineering",
    description: "System-Prompts mit Rollen und Genehmigungs-Gates. Chain-of-Thought für strukturierte Reasoning-Patterns. Wiederverwendbare Prompt-Templates.",
    tags: ["System-Prompts", "Chain-of-Thought", "Prompt-Templating", "Few-shot Prompting"],
    tagColor: "green"
  },
  {
    title: "RAG & Suche",
    description: "Hybrid-Suche mit Embedding Similarity und Cosine-Similarity für automatische Kontext-Zuordnung. Vorberechnete Embeddings mit Caching.",
    tags: ["Hybride Suche", "Embedding Similarity", "Cosine-Similarity", "Vektor-Datenbank", "Embedding-Caching"],
    tagColor: "green"
  },
  {
    title: "Agentic Patterns",
    description: "Multi-Agent-Workflows mit definierter Reihenfolge. Agent-Turn-Pattern für Cron-getriggerte Automatisierung. Timeout-Handling und Graceful Degradation.",
    tags: ["Multi-Agent Workflows", "Agent-Turn Pattern", "Tool-Use", "Timeout-Handling"],
    tagColor: "purple"
  },
  {
    title: "Produktive KI",
    description: "CI/CD-Integration mit KI-Validierung. Modell-Evaluation und Benchmarking zwischen OpenAI, Claude, MiniMax und Ollama.",
    tags: ["CI/CD-Integration", "Modell-Evaluation", "Benchmarking", "JSON-Output-Parsing", "Retry-Logik"],
    tagColor: "orange"
  },
  {
    title: "Eigenes KI-System",
    description: "Täglicher KI-gestützter Job-Scan, Deal-Alerts und Tankpreis-Check via Cron-Jobs. MCP-Server für externe Tool-Integration. Telegram-Bot für Push-Benachrichtigungen.",
    tags: ["Tägliche Automatisierung", "Telegram-Bot", "Tool-Building", "Cron-Job-Orchestrierung"],
    tagColor: "teal"
  }
];

const tagColorClasses: Record<AIExperience["tagColor"], string> = {
  blue: "bg-blue-500/20 border-blue-500/40 text-blue-300",
  green: "bg-green-500/20 border-green-500/40 text-green-300",
  purple: "bg-purple-500/20 border-purple-500/40 text-purple-300",
  orange: "bg-orange-500/20 border-orange-500/40 text-orange-300",
  teal: "bg-teal-500/20 border-teal-500/40 text-teal-300"
};

const cardBorderColors: Record<AIExperience["tagColor"], string> = {
  blue: "border-blue-500/30",
  green: "border-green-500/30",
  purple: "border-purple-500/30",
  orange: "border-orange-500/30",
  teal: "border-teal-500/30"
};

const cardBgColors: Record<AIExperience["tagColor"], string> = {
  blue: "bg-blue-500/5",
  green: "bg-green-500/5",
  purple: "bg-purple-500/5",
  orange: "bg-orange-500/5",
  teal: "bg-teal-500/5"
};

const titleColors: Record<AIExperience["tagColor"], string> = {
  blue: "text-blue-400",
  green: "text-green-400",
  purple: "text-purple-400",
  orange: "text-orange-400",
  teal: "text-teal-400"
};

const bulletColors: Record<AIExperience["tagColor"], string> = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  teal: "bg-teal-500"
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.58, 1] as const },
  },
};

export default function AIExperienceSection() {
  return (
    <SectionWrapper
      id="ai-experience"
      title="KI-Erfahrung"
      subtitle="Praktische KI-Kenntnisse aus eigenen Projekten"
      className="bg-black"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-400 text-center text-lg mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        Erfahrung mit LLMs, Embeddings und KI-gestützter Automatisierung — von der Integration bis zum produktiven Betrieb.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aiExperience.map((experience) => (
          <motion.div
            key={experience.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
            className={`rounded-2xl border ${cardBorderColors[experience.tagColor]} ${cardBgColors[experience.tagColor]} p-6`}
          >
            <motion.h3
              variants={itemVariants}
              className={`text-lg font-semibold ${titleColors[experience.tagColor]} mb-3`}
            >
              <span className={`inline-block w-2 h-2 rounded-full ${bulletColors[experience.tagColor]} mr-2 mb-0.5`} />
              {experience.title}
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm leading-relaxed mb-4"
            >
              {experience.description}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2"
            >
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium border ${tagColorClasses[experience.tagColor]}`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
