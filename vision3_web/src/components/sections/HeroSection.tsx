"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleField from "@/components/ui/ParticleField";
import { useLanguage } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,212,255,0.08),transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(139,92,246,0.08),transparent_60%),radial-gradient(ellipse_at_50%_80%,rgba(236,72,153,0.05),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <ParticleField />
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-10 animate-scan-line" />
      </div>
      <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-[var(--color-accent-cyan)] opacity-[0.03] blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-[var(--color-accent-purple)] opacity-[0.04] blur-[120px] animate-float-delay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] text-sm text-[var(--color-text-secondary)]">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-cyan)] opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-cyan)]" /></span>
            {t("hero.badge")}
          </span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8" style={{ fontFamily: "var(--font-display)" }}>
          <span className="block">{t("hero.title1")}</span>
          <span className="block neon-text mt-2">{t("hero.title2")}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-lg sm:text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed mb-12 text-balance">
          {t("hero.subtitle")}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/experience" className="glow-button text-base px-8 py-4">{t("hero.cta1")}</Link>
          <Link href="/#technology" className="px-8 py-4 rounded-xl border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all duration-300 text-base font-semibold" style={{ fontFamily: "var(--font-display)" }}>{t("hero.cta2")}</Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[{ value: "5", label: t("hero.stat1") }, { value: "3", label: t("hero.stat2") }, { value: "7", label: t("hero.stat3") }, { value: "8s", label: t("hero.stat4") }].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 + i * 0.1 }} className="text-center">
              <div className="text-3xl md:text-4xl font-bold neon-text mb-1" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</div>
              <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"><div className="w-1 h-2 rounded-full bg-white/40" /></motion.div>
      </motion.div>
    </section>
  );
}
