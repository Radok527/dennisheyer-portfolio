"use client";

import { motion, type Variants } from "framer-motion";
import Button from "./Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.58, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-black">
      {/* Background gradient decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.p
              variants={itemVariants}
              className="text-green-400 font-medium text-lg"
            >
              Hallo, ich bin
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Dennis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Heyer
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-lg"
            >
              Backend Engineer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg"
            >
              Ich entwickle skalierbare Backend-Systeme, APIs und betreibe produktionsreife Anwendungen.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-lg"
            >
              Hannover, Deutschland
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button href="#projects" variant="primary" size="lg">
                Projekte
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Kontakt
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Code/Terminal Aesthetic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Terminal window */}
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/50 border-b border-zinc-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-gray-400 text-sm font-mono">
                    terminal
                  </span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm space-y-3">
                  <p className="text-gray-500">$ wer bin ich</p>
                  <p className="text-green-400">Dennis Heyer</p>
                  <p className="text-gray-500">$ cat skills.txt</p>
                  <div className="space-y-1">
                    <p className="text-white">
                      <span className="text-green-400">→</span> Java / Spring
                      Boot (Backend)
                    </p>
                    <p className="text-white">
                      <span className="text-green-400">→</span> React / TypeScript (Frontend)
                    </p>
                    <p className="text-white">
                      <span className="text-green-400">→</span> Python / FastAPI (KI)
                    </p>
                    <p className="text-white">
                      <span className="text-green-400">→</span> Docker / Kubernetes (DevOps)
                    </p>
                    <p className="text-white">
                      <span className="text-green-400">→</span> Ollama / Embeddings (KI)
                    </p>
                  </div>
                  <p className="text-gray-500">$ _</p>
                  <div className="flex gap-1">
                    <span className="w-2 h-4 bg-green-500 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-green-500/20 rounded-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-green-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
