"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="Über mich"
      subtitle="Kurz und knapp"
      className="bg-zinc-950 relative overflow-hidden"
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <div className="bg-zinc-900/50 rounded-3xl border border-zinc-800 p-8 md:p-12">
          <div className="text-xl text-gray-300 leading-relaxed">
            <p className="text-center max-w-2xl">
              Backend Engineer mit Fokus auf skalierbare Systeme. Ich baue und betreibe produktionsreife Anwendungen — von der Architektur bis zum Deployment. Analytisch, lösungsorientiert, mit Hands-on-Mentalität.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 mt-12 pt-8 border-t border-zinc-800">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-green-400">
                4+
              </p>
              <p className="text-gray-500 text-sm mt-1">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
