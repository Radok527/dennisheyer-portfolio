"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20 },
  visible: {
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
            <motion.p variants={itemVariants} className="text-green-400 font-medium text-lg">
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

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-lg">
              Backend Engineer
            </motion.p>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg">
              Ich entwickle Backend-Systeme, APIs und bringe eigene Projekte von der Idee bis zum Deployment.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-500 text-lg">
              Hannover, Deutschland
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button href="#projects" variant="primary" size="lg">Projekte</Button>
              <Button href="#contact" variant="secondary" size="lg">Kontakt</Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Terminal */}
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-lg">

              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">

                {/* Terminal header */}
                <div className="flex items-center px-4 py-2.5 bg-zinc-800/50 border-b border-zinc-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-gray-400 text-sm font-mono">dennis@portfolio</span>
                  </div>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm space-y-3">

                  {/* Profil-Zeile */}
                  <div className="flex items-center gap-4 pb-3 border-b border-zinc-800">
                    <div className="flex-1">
                      <p className="text-gray-500 text-xs mb-1">$ whoami</p>
                      <p className="text-green-400 font-semibold text-base">Dennis Heyer</p>
                      <p className="text-gray-400 text-xs mt-1">Backend Engineer · Hannover</p>
                    </div>
                    <Image
                      src="/assets/Profil_Bild.png"
                      alt="Dennis Heyer"
                      width={80}
                      height={80}
                      priority
                      className="w-20 h-20 rounded-xl object-cover border border-zinc-700 ring-1 ring-green-500/20 flex-shrink-0"
                    />
                  </div>

                  {/* Skills */}
                  <p className="text-gray-500">$ ls skills/</p>
                  <div className="space-y-1.5">
                    {[
                      "Java / Spring Boot",
                      "React / TypeScript",
                      "Python / FastAPI",
                      "Docker / Kubernetes",
                      "Ollama / Embeddings",
                    ].map((skill) => (
                      <p key={skill} className="text-white">
                        <span className="text-green-400 mr-2">▸</span>
                        {skill}
                      </p>
                    ))}
                  </div>

                  {/* Prompt */}
                  <div className="flex items-center gap-1 pt-1">
                    <span className="text-gray-500">$</span>
                    <span className="w-2 h-4 bg-green-500 animate-pulse ml-1" />
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
        aria-hidden="true"
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