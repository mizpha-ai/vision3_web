"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowCard from "@/components/ui/GlowCard";
import { useLanguage } from "@/lib/i18n";

export default function OverviewSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#cg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /><defs><linearGradient id="cg" x1="4" y1="3" x2="20" y2="21"><stop stopColor="#00d4ff"/><stop offset="1" stopColor="#8b5cf6"/></linearGradient></defs></svg>),
      title: t("overview.pillar1.title"), desc: t("overview.pillar1.desc"),
      features: [t("overview.pillar1.f1"), t("overview.pillar1.f2"), t("overview.pillar1.f3"), t("overview.pillar1.f4"), t("overview.pillar1.f5")],
      color: "var(--color-accent-cyan)",
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#sg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /><defs><linearGradient id="sg" x1="4" y1="2" x2="20" y2="22"><stop stopColor="#8b5cf6"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs></svg>),
      title: t("overview.pillar2.title"), desc: t("overview.pillar2.desc"),
      features: [t("overview.pillar2.f1"), t("overview.pillar2.f2"), t("overview.pillar2.f3"), t("overview.pillar2.f4"), t("overview.pillar2.f5")],
      color: "var(--color-accent-purple)",
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#vg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /><path d="m10 9 5 3-5 3V9z" /><defs><linearGradient id="vg" x1="2" y1="3" x2="22" y2="21"><stop stopColor="#ec4899"/><stop offset="1" stopColor="#00d4ff"/></linearGradient></defs></svg>),
      title: t("overview.pillar3.title"), desc: t("overview.pillar3.desc"),
      features: [t("overview.pillar3.f1"), t("overview.pillar3.f2"), t("overview.pillar3.f3"), t("overview.pillar3.f4"), t("overview.pillar3.f5")],
      color: "var(--color-accent-magenta)",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-accent-purple)] opacity-[0.02] blur-[150px]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("overview.badge")} title={t("overview.title")} subtitle={t("overview.subtitle")} />
        <ScrollReveal delay={0.1} className="mb-16">
          <div className="gradient-border max-w-4xl mx-auto">
            <div className="p-8 text-center">
              <p className="text-sm text-[var(--color-accent-cyan)] font-semibold uppercase tracking-widest mb-3">{t("overview.principle")}</p>
              <p className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{t("overview.principleQuote")}</p>
              <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto">{t("overview.principleDesc")}</p>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <GlowCard glowColor={`${pillar.color}20`} className="h-full">
                <div className="mb-5">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{pillar.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">{pillar.desc}</p>
                <ul className="space-y-2.5">
                  {pillar.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: pillar.color }} />
                      <span className="text-[var(--color-text-secondary)]">{f}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
