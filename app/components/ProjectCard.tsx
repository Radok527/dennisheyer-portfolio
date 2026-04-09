"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  imageUrl,
  link,
}: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group block rounded-2xl bg-zinc-900/50 border border-zinc-800 overflow-hidden hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
    >
      {/* Image placeholder with gradient */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-900/30 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2 opacity-30">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded bg-green-500/30 border border-green-500/50"
              />
            ))}
          </div>
        </div>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </motion.a>
  );
}
