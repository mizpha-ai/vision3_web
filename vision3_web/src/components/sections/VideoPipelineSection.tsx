"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/i18n";

export default function VideoPipelineSection() {
  const { t } = useLanguage();
  const shotTypes = [
    { id: "V1", name: t("video.v1.name"), input: t("video.v1.input"), output: t("video.v1.output"), color: "#00d4ff" },
    { id: "V2", name: t("video.v2.name"), input: t("video.v2.input"), output: t("video.v2.output"), color: "#0ea5e9" },
    { id: "V3", name: t("video.v3.name"), input: t("video.v3.input"), output: t("video.v3.output"), color: "#8b5cf6" },
    { id: "V4", name: t("video.v4.name"), input: t("video.v4.input"), output: t("video.v4.output"), color: "#a855f7" },
    { id: "V5", name: t("video.v5.name"), input: t("video.v5.input"), output: t("video.v5.output"), color: "#ec4899" },
    { id: "V6", name: t("video.v6.name"), input: t("video.v6.input"), output: t("video.v6.output"), color: "#f43f5e" },
    { id: "V7", name: t("video.v7.name"), input: t("video.v7.input"), output: t("video.v7.output"), color: "#10b981" },
  ];
  const wf = [
    { label: t("video.wf1"), desc: t("video.wf1.desc") },
    { label: t("video.wf2"), desc: t("video.wf2.desc") },
    { label: t("video.wf3"), desc: t("video.wf3.desc") },
    { label: t("video.wf4"), desc: t("video.wf4.desc") },
  ];
  const promptFields = [
    { field: "Shot Type", example: "Wide / OTS / ECU / Landscape" },
    { field: "Camera", example: "Locked-off / Static" },
    { field: "Action", example: "Sit / Stand / Walk + continuity" },
    { field: "Emotion", example: "Emotion preset + narrative text" },
    { field: "Dialogue", example: "Dialogue mode / Silent mode" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-magenta)] opacity-[0.02] blur-[150px]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("video.badge")} title={t("video.title")} subtitle={t("video.subtitle")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {shotTypes.map((shot, i) => (
            <ScrollReveal key={shot.id} delay={i * 0.08}>
              <motion.div whileHover={{ y: -3 }} className="glass-card p-5 h-full cursor-default">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded" style={{ background: `${shot.color}15`, color: shot.color }}>{shot.id}</span>
                  <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${shot.color}30, transparent)` }} />
                </div>
                <h4 className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{shot.name}</h4>
                <div className="space-y-1.5">
                  <p className="text-xs text-[var(--color-text-muted)]"><span className="text-[var(--color-text-secondary)]">{t("video.in")}:</span> {shot.input}</p>
                  <p className="text-xs text-[var(--color-text-muted)]"><span className="text-[var(--color-text-secondary)]">{t("video.out")}:</span> {shot.output}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="gradient-border max-w-4xl mx-auto mb-16">
            <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-display)" }}>{t("video.workflowTitle")}</h3>
              <p className="text-sm text-[var(--color-text-muted)] text-center mb-8">{t("video.workflowDesc")}</p>
              <div className="flex flex-col md:flex-row items-stretch gap-4">
                {wf.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 flex-1">
                    <div className="flex-1">
                      <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-center">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] flex items-center justify-center text-xs font-bold mx-auto mb-2">{i + 1}</div>
                        <p className="text-sm font-semibold mb-0.5">{step.label}</p>
                        <p className="text-[11px] text-[var(--color-text-muted)]">{step.desc}</p>
                      </motion.div>
                    </div>
                    {i < wf.length - 1 && <div className="hidden md:block shrink-0 text-[var(--color-accent-cyan)] opacity-40">▸</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{t("video.promptTitle")}</h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-2">{t("video.promptDesc")}</p>
            </div>
            <div className="glass-card p-6 space-y-3">
              {promptFields.map((pf, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-center gap-4 p-3 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)]">
                  <span className="text-sm font-semibold text-white w-28 shrink-0">{pf.field}</span>
                  <span className="text-sm text-[var(--color-text-muted)] font-mono">{pf.example}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["Pure Silent Scene", "Locked Camera", "Over-the-Shoulder", "Extreme Close-Up"].map((p) => (
                <span key={p} className="px-3 py-1.5 rounded-lg border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 text-xs text-[var(--color-accent-cyan)] font-medium">{p}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
