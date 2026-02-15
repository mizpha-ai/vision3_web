"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hoverable?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "rgba(0, 212, 255, 0.15)",
  hoverable = true,
}: GlowCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={hoverable ? { y: -4, transition: { duration: 0.3 } } : {}}
    >
      {/* Glow effect behind card */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: glowColor }}
      />
      {/* Card */}
      <div className="relative glass-card p-6 h-full">
        {children}
      </div>
    </motion.div>
  );
}
