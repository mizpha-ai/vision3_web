"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/i18n";

export default function CharacterPipelineSection() {
  const { t } = useLanguage();

  const stages = [
    { id: "C1", name: t("char.c1.name"), batch: "20 images", desc: t("char.c1.desc"), icon: "👤" },
    { id: "C2", name: t("char.c2.name"), batch: "10–20 images", desc: t("char.c2.desc"), icon: "🎨" },
    { id: "C3", name: t("char.c3.name"), batch: "10–20 images", desc: t("char.c3.desc"), icon: "👔" },
    { id: "C4", name: t("char.c4.name"), batch: "10 images", desc: t("char.c4.desc"), icon: "🧍" },
    { id: "C5", name: t("char.c5.name"), batch: "5–10 images", desc: t("char.c5.desc"), icon: "✨" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-cyan)] opacity-[0.02] blur-[150px]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("char.badge")} title={t("char.title")} subtitle={t("char.subtitle")} />
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"><div className="h-full step-line opacity-30" /></div>
          {stages.map((stage, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal key={stage.id} delay={i * 0.1} direction={isLeft ? "left" : "right"}>
                <div className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }} className="w-12 h-12 rounded-full border-2 border-[var(--color-accent-cyan)] bg-[var(--color-bg-primary)] flex items-center justify-center text-lg">{stage.icon}</motion.div>
                  </div>
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? "md:pr-4 md:text-right" : "md:pl-4"}`}>
                    <div className="glass-card p-6">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="text-xs font-mono font-bold neon-text">{stage.id}</span>
                        <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{stage.name}</h3>
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{stage.desc}</p>
                      <div className={`flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="tech-badge"><span className="glow-dot" style={{ width: 5, height: 5 }} />{t("char.batch")}: {stage.batch}</span>
                        <span className="tech-badge">{t("char.approval")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="gradient-border max-w-3xl mx-auto">
            <div className="p-6 md:p-8 flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent-purple)]/10 border border-[var(--color-accent-purple)]/20 flex items-center justify-center text-lg">🎯</div>
              <div>
                <h4 className="font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>{t("char.consistency.title")}</h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{t("char.consistency.desc")}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
