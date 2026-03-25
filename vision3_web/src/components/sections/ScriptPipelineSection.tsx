"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowCard from "@/components/ui/GlowCard";
import { useLanguage } from "@/lib/i18n";

export default function ScriptPipelineSection() {
  const { t } = useLanguage();
  const scriptStages = [
    { id: "S1", name: t("script.s1.name"), input: t("script.s1.input"), output: t("script.s1.output"), approval: t("script.s1.approval"), color: "#8b5cf6" },
    { id: "S2", name: t("script.s2.name"), input: t("script.s2.input"), output: t("script.s2.output"), approval: t("script.s2.approval"), color: "#ec4899" },
    { id: "S3", name: t("script.s3.name"), input: t("script.s3.input"), output: t("script.s3.output"), approval: t("script.s3.approval"), color: "#00d4ff" },
  ];
  const splitStrategies = [
    { name: t("script.split1.name"), desc: t("script.split1.desc"), use: t("script.split1.use"), icon: "🎬" },
    { name: t("script.split2.name"), desc: t("script.split2.desc"), use: t("script.split2.use"), icon: "👁️" },
    { name: t("script.split3.name"), desc: t("script.split3.desc"), use: t("script.split3.use"), icon: "🏞️" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-magenta)] opacity-[0.02] blur-[150px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("script.badge")} title={t("script.title")} subtitle={t("script.subtitle")} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {scriptStages.map((stage, i) => (
            <ScrollReveal key={stage.id} delay={i * 0.15}>
              <div className="relative h-full">
                {i < scriptStages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H11M11 7L7 3M11 7L7 11" stroke={stage.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/></svg>
                  </div>
                )}
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border" style={{ color: stage.color, borderColor: `${stage.color}30`, background: `${stage.color}10` }}>{stage.id}</span>
                    <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{stage.name}</h3>
                  </div>
                  <div className="space-y-3">
                    <div><span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">{t("script.input")}</span><p className="text-sm text-[var(--color-text-secondary)]">{stage.input}</p></div>
                    <div><span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">{t("script.output")}</span><p className="text-sm text-[var(--color-text-secondary)]">{stage.output}</p></div>
                    <div><span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">{t("script.approvalLabel")}</span><p className="text-sm" style={{ color: stage.color }}>{stage.approval}</p></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mb-10 text-center">
            <span className="tech-badge mb-4 inline-flex"><span className="glow-dot" style={{ width: 5, height: 5 }} />{t("script.splitBadge")}</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3" style={{ fontFamily: "var(--font-display)" }}>{t("script.splitTitle")}</h3>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">{t("script.splitDesc")}</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {splitStrategies.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <GlowCard>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h4 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.name}</h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{s.desc}</p>
                <div className="px-3 py-1.5 rounded-lg bg-[var(--color-accent-purple)]/5 border border-[var(--color-accent-purple)]/15 inline-block">
                  <p className="text-xs text-[var(--color-accent-purple)]">{s.use}</p>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {["Auto Split 8s", "Same Speaker Continue", "Partner Face Only", "Landscape Cut"].map((btn) => (
              <span key={btn} className="px-4 py-2 rounded-lg border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] text-sm text-[var(--color-text-secondary)] font-medium">[{btn}]</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
