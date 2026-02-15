"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleField from "@/components/ui/ParticleField";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,212,255,0.08),transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(139,92,246,0.08),transparent_60%),radial-gradient(ellipse_at_50%_80%,rgba(236,72,153,0.05),transparent_60%)]" />
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* Particles */}
        <ParticleField />
        {/* Scan line */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-10 animate-scan-line" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-[var(--color-accent-cyan)] opacity-[0.03] blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-[var(--color-accent-purple)] opacity-[0.04] blur-[120px] animate-float-delay" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] text-sm text-[var(--color-text-secondary)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-cyan)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-cyan)]" />
            </span>
            Product Guide v1.0 &mdash; February 2026
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block">AI Production</span>
          <span className="block neon-text mt-2">Studio</span>
        </motion.h1>

        {/* Sub heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed mb-12 text-balance"
        >
          From character creation to video production — an AI-powered end-to-end
          production platform. One workspace. Infinite possibilities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/experience" className="glow-button text-base px-8 py-4">
            Experience the Demo
          </Link>
          <Link
            href="/#technology"
            className="px-8 py-4 rounded-xl border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all duration-300 text-base font-semibold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore Technology
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "5", label: "Character Stages" },
            { value: "3", label: "Script Phases" },
            { value: "7", label: "Shot Types" },
            { value: "10min", label: "Clip Segments" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-3xl md:text-4xl font-bold neon-text mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
