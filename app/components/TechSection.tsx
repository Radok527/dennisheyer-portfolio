"use client";

import SectionWrapper from "./SectionWrapper";

const techGroups = [
  {
    category: "Backend",
    color: "text-blue-400",
    items: ["Java 11–21", "Spring Boot", "Python 3.11+", "FastAPI", "REST APIs", "OpenAPI/Swagger"],
  },
  {
    category: "Frontend",
    color: "text-green-400",
    items: ["React 18", "TypeScript 5", "TailwindCSS v4", "Workbox (PWA)", "Vite", "Recharts", "i18n"],
  },
  {
    category: "DevOps / Infrastruktur",
    color: "text-orange-400",
    items: ["Docker", "Docker Compose", "Nginx", "Kubernetes", "Helm", "Jenkins", "PostgreSQL", "Flyway"],
  },
  {
    category: "AI",
    color: "text-purple-400",
    items: ["Ollama", "Embeddings", "Semantic Search", "Confidence Scoring"],
  },
];

export default function TechSection() {
  return (
    <SectionWrapper
      id="tech"
      title="Tech Stack"
      subtitle="Technologien mit Produktionserfahrung"
      className="bg-zinc-950"
    >
      {/* Compact 4-column grid of inline tag lists */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
        {techGroups.map((group) => (
          <div key={group.category}>
            <p className={`text-xs font-medium uppercase tracking-wider mb-2 ${group.color}`}>
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
