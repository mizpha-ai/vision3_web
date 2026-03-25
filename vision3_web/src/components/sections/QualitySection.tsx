"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/lib/i18n";

function QualityGauge({ label }: { label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" strokeDasharray={`${Math.PI * 104}`} strokeDashoffset={`${Math.PI * 104 * 0.25}`} strokeLinecap="round" />
          <motion.circle cx="60" cy="60" r="52" fill="none" stroke="url(#gauge-grad)" strokeWidth="8" strokeDasharray={`${Math.PI * 104}`} strokeLinecap="round" initial={{ strokeDashoffset: Math.PI * 104 }} animate={isInView ? { strokeDashoffset: Math.PI * 104 * 0.28 } : {}} transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} />
          <defs><linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00d4ff" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient></defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatedCounter target={92} className="text-4xl font-bold neon-text" duration={1.5} />
          <span className="text-xs text-[var(--color-text-muted)] mt-1">/100</span>
        </div>
      </div>
      <p className="text-sm text-[var(--color-text-secondary)] mt-3">{label}</p>
    </div>
  );
}

export default function QualitySection() {
  const { t } = useLanguage();
  const flags = [
    { flag: t("qa.flag1.name"), desc: t("qa.flag1.desc"), type: "Image", color: "#f43f5e" },
    { flag: t("qa.flag2.name"), desc: t("qa.flag2.desc"), type: "Image", color: "#f59e0b" },
    { flag: t("qa.flag3.name"), desc: t("qa.flag3.desc"), type: "Image / Video", color: "#8b5cf6" },
    { flag: t("qa.flag4.name"), desc: t("qa.flag4.desc"), type: "Video", color: "#ec4899" },
  ];
  const retries = [
    { title: t("qa.retry1.title"), desc: t("qa.retry1.desc") },
    { title: t("qa.retry2.title"), desc: t("qa.retry2.desc") },
    { title: t("qa.retry3.title"), desc: t("qa.retry3.desc") },
  ];

  return (
    <section id="quality" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-emerald)] opacity-[0.02] blur-[150px]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("qa.badge")} title={t("qa.title")} subtitle={t("qa.subtitle")} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <ScrollReveal direction="left">
            <div className="gradient-border">
              <div className="p-8 flex flex-col items-center">
                <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>{t("qa.scoreTitle")}</h3>
                <QualityGauge label={t("qa.scoreLabel")} />
                <p className="text-sm text-[var(--color-text-muted)] text-center mt-6 max-w-sm">{t("qa.scoreDesc")}</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>{t("qa.flagsTitle")}</h3>
              {flags.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-4 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: f.color }} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold">{f.flag}</h4>
                      <span className="text-[10px] font-mono text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] px-2 py-0.5 rounded">{f.type}</span>
                    </div>
                    <p className="text-xs text-[var(--color-text-muted)]">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="gradient-border max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-lg font-bold mb-6 text-center" style={{ fontFamily: "var(--font-display)" }}>{t("qa.retryTitle")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {retries.map((rp, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent-cyan)]/20 to-[var(--color-accent-purple)]/20 flex items-center justify-center mx-auto mb-3 text-sm font-bold neon-text">{i + 1}</div>
                    <h4 className="text-sm font-bold mb-1">{rp.title}</h4>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{rp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
              <span className="text-lg">🔗</span>
              <p className="text-sm text-[var(--color-text-secondary)]"><strong className="text-white">{t("qa.lineage")}</strong> {t("qa.lineageDesc")}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
