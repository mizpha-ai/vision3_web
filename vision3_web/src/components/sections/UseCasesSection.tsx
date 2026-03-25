"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/i18n";

export default function UseCasesSection() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>("s1");

  const useCases = [
    {
      id: "s1", title: t("uc.s1.title"), sub: t("uc.s1.sub"), icon: "🎭", color: "#00d4ff",
      steps: [
        { step: t("uc.s1.step1"), d: t("uc.s1.step1.d") },
        { step: t("uc.s1.step2"), d: t("uc.s1.step2.d") },
        { step: t("uc.s1.step3"), d: t("uc.s1.step3.d") },
        { step: t("uc.s1.step4"), d: t("uc.s1.step4.d") },
        { step: t("uc.s1.step5"), d: t("uc.s1.step5.d") },
      ],
    },
    {
      id: "s2", title: t("uc.s2.title"), sub: t("uc.s2.sub"), icon: "📱", color: "#8b5cf6",
      steps: [
        { step: t("uc.s2.step1"), d: t("uc.s2.step1.d") },
        { step: t("uc.s2.step2"), d: t("uc.s2.step2.d") },
        { step: t("uc.s2.step3"), d: t("uc.s2.step3.d") },
        { step: t("uc.s2.step4"), d: t("uc.s2.step4.d") },
      ],
    },
    {
      id: "s3", title: t("uc.s3.title"), sub: t("uc.s3.sub"), icon: "🌍", color: "#ec4899",
      steps: [
        { step: t("uc.s3.step1"), d: t("uc.s3.step1.d") },
        { step: t("uc.s3.step2"), d: t("uc.s3.step2.d") },
        { step: t("uc.s3.step3"), d: t("uc.s3.step3.d") },
      ],
    },
  ];

  return (
    <section id="usecases" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("uc.badge")} title={t("uc.title")} subtitle={t("uc.subtitle")} />
        <div className="max-w-4xl mx-auto">
          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.id} delay={i * 0.1}>
              <div className="mb-4">
                <motion.button onClick={() => setActiveId(activeId === uc.id ? null : uc.id)} className={`w-full text-left glass-card p-6 transition-all duration-300 ${activeId === uc.id ? "border-[var(--color-border-accent)]" : ""}`} whileHover={{ scale: 1.005 }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: `${uc.color}10`, border: `1px solid ${uc.color}25` }}>{uc.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{uc.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)]">{uc.sub}</p>
                    </div>
                    <motion.div animate={{ rotate: activeId === uc.id ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-[var(--color-text-muted)]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </motion.div>
                  </div>
                </motion.button>
                <AnimatePresence>
                  {activeId === uc.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="pt-2 pl-4">
                        <div className="border-l-2 border-[var(--color-border-medium)] pl-6 py-2 space-y-4">
                          {uc.steps.map((step, si) => (
                            <motion.div key={si} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: si * 0.08 }} className="relative">
                              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 bg-[var(--color-bg-primary)]" style={{ borderColor: uc.color }} />
                              <h4 className="text-sm font-semibold mb-1">Step {si + 1}: {step.step}</h4>
                              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.d}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
