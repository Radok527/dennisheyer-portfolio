"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface InfrastructureItem {
  name: string;
  description: string;
  icon: string;
}

const infrastructure: InfrastructureItem[] = [
  {
    name: "Hetzner VPS",
    description: "Self-hosted Server für Produktions-Workloads",
    icon: "🖥️"
  },
  {
    name: "Cloudflare",
    description: "DNS, Security und CDN",
    icon: "☁️"
  },
  {
    name: "Docker / Docker Compose",
    description: "Containerisierung und Orchestrierung",
    icon: "📦"
  },
  {
    name: "Resend",
    description: "E-Mail-Infrastruktur für Transaktions-E-Mails",
    icon: "📧"
  },
  {
    name: "GitHub Actions",
    description: "CI/CD Pipeline für automatisierte Deployments",
    icon: "🔄"
  }
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.58, 1] as const },
  },
};

export default function InfrastructureSection() {
  return (
    <SectionWrapper
      id="infrastructure"
      title="Infrastruktur & Deployment"
      subtitle="Eigenverantwortlicher Betrieb meiner Anwendungen"
      className="bg-zinc-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-12"
      >
        <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-2xl px-8 py-6 max-w-3xl">
          <p className="text-green-400 text-lg md:text-xl font-medium leading-relaxed">
            Ich betreibe meine Anwendungen eigenverantwortlich — von der Entwicklung bis zum Produktionsbetrieb.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {infrastructure.map((item, index) => (
          <motion.div
            key={item.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delay: index * 0.05 }
              }
            }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-green-500/30 hover:bg-zinc-900 transition-colors duration-300"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
