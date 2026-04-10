"use client";

import { motion, type Variants } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    company: "adesso SE / BITMARCK",
    role: "Software Engineer",
    project: "Angebotsbestandsführungssystem (ABfs)",
    period: "10/2025 – 02/2026",
    highlights: [
      "Webbasiertes Angebotsbestandsführungssystem für Enterprise-Projektsteuerung",
      "Fullstack-Entwicklung mit Spring Boot, JPA, Hibernate",
      "Aufbau der Testumgebung inkl. Integrationstests",
      "Abstimmung mit Product Ownern bei fachlichen Anforderungen"
    ]
  },
  {
    company: "fruuts GmbH",
    role: "Software Engineer",
    project: "Vendor Management System (VMS)",
    period: "08/2021 – 05/2025",
    highlights: [
      "Modulares VMS zur Ablösung monolithischer Legacy-Systeme via Microservices",
      "RESTful APIs für Backend-Service-Kommunikation",
      "Migration zu Docker, Kubernetes, Helm",
      "CI/CD mit Jenkins, automatisierte Tests (Unit, Integration, E2E)",
      "Monitoring mit Prometheus, Grafana"
    ]
  },
  {
    company: "fruuts GmbH",
    role: "Software Engineer",
    project: "Streaming-Plattform (tshakka)",
    period: "08/2021 – 05/2025",
    highlights: [
      "Hochverfügbare Streaming-Plattform auf AWS-Basis",
      "Java/Spring Boot Backend für Echtzeit-Medienverarbeitung",
      "Performance-Optimierung für ~500 gleichzeitige Nutzer",
      "Integration externer Dienste (z.B. Zahlungsabwicklung)"
    ]
  },
  {
    company: "umlaut energy GmbH",
    role: "Software Engineer / Tester",
    project: "DA/RE Plattform (Redispatch 2.0)",
    period: "08/2021 – 09/2022",
    highlights: [
      "Cloudbasierte IT-Plattform für Netzstabilisierung im Energiesektor",
      "XML-basierte Schnittstellen für Redispatch 2.0-Prozesse",
      "Automatisierte Tests (Schnittstellen-, BlackBox-, Integrationstests)",
      "Datenkonsistenz-Validierung für 46+ Nutzer deutschlandweit"
    ]
  },
  {
    company: "Since Idea Games",
    role: "Software Engineer",
    project: 'Mobile Game "Cyber Hero"',
    period: "01/2019 – 01/2021",
    highlights: [
      "Co-Entwicklung mit Fokus auf Performance und ressourcenschonende Implementierung",
      "Entwicklung und Optimierung der zentralen Spiellogik",
      "Benchmark-Datenbank für Laufzeit- und Performance-Metriken",
      "RAM-Optimierung für stabile Spielerfahrung"
    ]
  }
];

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.58, 1] },
  },
};

export default function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="Erfahrung"
      subtitle="Wo ich gearbeitet habe"
      className="bg-zinc-950"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.project}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delayChildren: index * 0.1, staggerChildren: 0.1 }
                }
              }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-green-500 border-4 border-zinc-950 transform md:-translate-x-1/2 z-10" />

              <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                {/* Period - left side on desktop */}
                <motion.div
                  variants={itemVariants}
                  className="md:text-right md:pr-8"
                >
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 border border-green-500/50 text-green-400 mb-2">
                    {exp.period}
                  </span>
                </motion.div>

                {/* Details card - right side on desktop */}
                <motion.div
                  variants={itemVariants}
                  className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6 mb-8 md:mb-0"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-green-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="hidden md:inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 border border-green-500/50 text-green-400">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm font-medium mb-4">
                    {exp.project}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-green-500 mt-1.5">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}