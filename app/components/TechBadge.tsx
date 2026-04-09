"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  icon?: string;
}

export default function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
      }}
      transition={{ duration: 0.2 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-700 text-gray-200 text-sm font-medium"
    >
      {icon && <span className="text-base">{icon}</span>}
      {name}
    </motion.span>
  );
}
