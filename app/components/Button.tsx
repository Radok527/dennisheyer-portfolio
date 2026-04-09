"use client";

import { motion } from "framer-motion";
import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-green-500 text-black hover:bg-green-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25",
    secondary:
      "border-2 border-green-500 text-green-400 hover:bg-green-500/10 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/20",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const handleClick = (e: MouseEvent) => {
    if (href) {
      if (href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (onClick) {
      onClick();
    }
  };

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a href={href} className={combinedClasses} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={handleClick} className={combinedClasses} {...motionProps}>
      {children}
    </motion.button>
  );
}
