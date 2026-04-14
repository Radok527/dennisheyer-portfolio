"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description?: string;
  impact?: string;
  bullets?: string[];
  techStack: string[];
  imageUrl?: string;
  link: string;
  highlight?: string;
  variant?: "featured" | "standard";
  previewUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  impact,
  bullets,
  techStack,
  imageUrl,
  link,
  highlight,
  variant = "standard",
  previewUrl,
  githubUrl,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  if (isFeatured) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group block rounded-2xl bg-zinc-900/50 border border-zinc-800 overflow-hidden hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
      >
        {/* Image area */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-green-900/40 via-zinc-800 to-zinc-900">
          {imageUrl ? (
            <>
              {/* Image as background layer with CSS filter */}
              <div
                className="absolute inset-0 bg-cover bg-buttom bg-no-repeat"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundPosition: 'bottom',
                  opacity: 0.25,
                  filter: 'blur(1px)',
                }}
              />
              {/* Dark overlay to ensure text readability */}
              <div className="absolute inset-0 bg-black/50" />
              {/* Existing gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/15 to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/15 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-3 opacity-40">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-lg bg-green-500/30 border border-green-500/50"
                    />
                  ))}
                </div>
              </div>
            </>
          )}
          {(highlight || githubUrl) && (
            <div className="absolute top-4 right-4 flex items-center gap-2">
              {highlight && (
                <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-green-500/20 border border-green-500/50 text-green-400">
                  {highlight}
                </span>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-900/80 border border-zinc-700 text-gray-300 hover:text-green-400 hover:border-green-500/50 transition-colors backdrop-blur-sm"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          )}
        </div>

        {/* Featured Content - Impact first */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-200">
            {title}
          </h3>

          {/* Impact statement */}
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {impact}
          </p>

          {/* Detailed bullets */}
          {bullets && bullets.length > 0 && (
            <ul className="space-y-3 mb-6">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/60 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-gray-400 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    );
  }

  // iframe variant - live, interactive preview fills the entire card
  if (previewUrl) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group relative rounded-xl border border-zinc-800 overflow-hidden hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
      >
        <iframe
          src={previewUrl}
          title={title}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups"
          className="w-full border-0 block"
          style={{ height: "600px" }}
        />
        {/* Persistent top-right overlay: badge + link */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
          {highlight && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-500/20 border border-green-500/50 text-green-400">
              {highlight}
            </span>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} öffnen`}
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-900/80 border border-zinc-700 text-gray-300 hover:text-green-400 hover:border-green-500/50 transition-colors backdrop-blur-sm"
          >
            ↗
          </a>
        </div>
      </motion.div>
    );
  }

  // Standard variant - smaller card
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
      className="group block rounded-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
    >
      {/* Image area */}
      <div className="relative h-36 overflow-hidden bg-gradient-to-br from-green-900/20 via-zinc-800 to-zinc-900">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <>
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
          </>
        )}
        {highlight && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-500/20 border border-green-500/50 text-green-400">
              {highlight}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
          {description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-gray-400 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
