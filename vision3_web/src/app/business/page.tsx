"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import ScrollReveal from "@/components/ui/ScrollReveal";

const processIcons = ["💬", "🎯", "⚡", "📦"];
const featureIcons = ["🤖", "👤", "🎨", "🔄", "🌐", "🛡️"];
const industryList = [
  { icon: "🎮", key: "game" },
  { icon: "💄", key: "beauty" },
  { icon: "📚", key: "edu" },
  { icon: "👗", key: "fashion" },
  { icon: "🎬", key: "ent" },
  { icon: "🏦", key: "finance" },
  { icon: "👥", key: "hr" },
  { icon: "🏥", key: "health" },
];

const partnerLogos = [
  { file: "cjenm", name: "CJ ENM" },
  { file: "zipiel", name: "Zipiel" },
  { file: "temu", name: "Temu" },
  { file: "lovey", name: "Lovey" },
  { file: "Hurray", name: "Hurray" },
  { file: "Hwanlnternational", name: "Hwan International" },
  { file: "Arcanesai", name: "Arcanes AI" },
  { file: "BTmedi", name: "BT Medi" },
  { file: "Ternary", name: "Ternary" },
];

export default function BusinessPage() {
  const { t } = useLanguage();

  const stats = [
    { val: t("b2b.stat1.val"), label: t("b2b.stat1.label") },
    { val: t("b2b.stat2.val"), label: t("b2b.stat2.label") },
    { val: t("b2b.stat3.val"), label: t("b2b.stat3.label") },
    { val: t("b2b.stat4.val"), label: t("b2b.stat4.label") },
  ];

  const features = Array.from({ length: 6 }, (_, i) => ({
    icon: featureIcons[i],
    title: t(`b2b.about.f${i + 1}.title`),
    desc: t(`b2b.about.f${i + 1}.desc`),
  }));

  const process = Array.from({ length: 4 }, (_, i) => ({
    icon: processIcons[i],
    title: t(`b2b.process.s${i + 1}`),
    desc: t(`b2b.process.s${i + 1}.desc`),
  }));

  // Double the logos for seamless infinite scroll
  const scrollLogos = [...partnerLogos, ...partnerLogos];

  return (
    <main className="pt-20">
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,212,255,0.07),transparent_60%),radial-gradient(ellipse_at_70%_80%,rgba(14,165,233,0.06),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute top-1/3 left-[5%] w-80 h-80 rounded-full bg-[#00d4ff] opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-[#0ea5e9] opacity-[0.03] blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-sm text-[#00d4ff] font-semibold mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                  {t("b2b.hero.badge")}
                </span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6" style={{ fontFamily: "var(--font-display)" }}>
                {t("b2b.hero.title1")}
                <br />
                <span className="bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent">{t("b2b.hero.title2")}</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-lg">
                {t("b2b.hero.subtitle")}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-col sm:flex-row gap-3">
                <Link href="/business/packages" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white font-semibold text-sm hover:opacity-90 transition-opacity text-center" style={{ fontFamily: "var(--font-display)" }}>{t("b2b.hero.cta1")}</Link>
                <Link href="/business/contact" className="px-7 py-3.5 rounded-xl border border-[var(--color-border-medium)] text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all text-sm font-semibold text-center" style={{ fontFamily: "var(--font-display)" }}>{t("b2b.hero.cta2")}</Link>
              </motion.div>
            </div>

            {/* Stats panel */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }} className="glass-card p-6 text-center">
                    <div className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent mb-1" style={{ fontFamily: "var(--font-display)" }}>{s.val}</div>
                    <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />
      </section>

      {/* ── PARTNER LOGOS ── */}
      <section className="py-16 border-b border-[var(--color-border-subtle)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm text-[var(--color-text-muted)] mb-10 tracking-wide">
              {t("b2b.partners.title")}
            </p>
          </ScrollReveal>
        </div>

        {/* Infinite scroll marquee */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex"
          >
            <div
              className="flex items-center gap-12 md:gap-16 animate-marquee"
              style={{
                animation: "marquee 30s linear infinite",
              }}
            >
              {scrollLogos.map((logo, i) => (
                <div
                  key={`${logo.file}-${i}`}
                  className="shrink-0 flex items-center justify-center h-10 md:h-12 w-[120px] md:w-[150px] relative grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                  <Image
                    src={`/asset/b2bpartners/${logo.file}.png`}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    sizes="150px"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            will-change: transform;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ── ABOUT / WHY ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="tech-badge mb-4 inline-flex"><span className="glow-dot" style={{ width: 6, height: 6 }} />{t("b2b.about.badge")}</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5" style={{ fontFamily: "var(--font-display)" }}>{t("b2b.about.title")}</h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">{t("b2b.about.subtitle")}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="glass-card p-7 h-full">
                  <div className="text-2xl mb-4">{f.icon}</div>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{f.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="tech-badge mb-4 inline-flex"><span className="glow-dot" style={{ width: 6, height: 6 }} />{t("b2b.process.badge")}</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5" style={{ fontFamily: "var(--font-display)" }}>{t("b2b.process.title")}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#0ea5e9]/10 border border-[#00d4ff]/20 flex items-center justify-center text-2xl mx-auto mb-4">{p.icon}</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] flex items-center justify-center text-xs font-bold text-white mx-auto mb-3">{i + 1}</div>
                  <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{p.desc}</p>
                  {i < 3 && <div className="hidden md:block absolute top-8 -right-3 text-[#00d4ff]/30 text-lg">→</div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="tech-badge mb-4 inline-flex"><span className="glow-dot" style={{ width: 6, height: 6 }} />{t("b2b.industries.badge")}</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5" style={{ fontFamily: "var(--font-display)" }}>{t("b2b.industries.title")}</h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">{t("b2b.industries.subtitle")}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industryList.map((ind, i) => (
              <ScrollReveal key={ind.key} delay={i * 0.06}>
                <Link href="/business/packages" className="glass-card p-6 text-center group cursor-pointer block">
                  <div className="text-3xl mb-3">{ind.icon}</div>
                  <p className="text-sm font-semibold group-hover:text-[#00d4ff] transition-colors">{t(`b2b.pkg.${ind.key}.title`)}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="gradient-border max-w-3xl mx-auto">
              <div className="p-12 md:p-16 text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>{t("b2b.cta.title")}</h2>
                <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">{t("b2b.cta.desc")}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/business/packages" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>{t("b2b.hero.cta1")}</Link>
                  <Link href="/business/contact" className="px-8 py-3.5 rounded-xl border border-[var(--color-border-medium)] text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>{t("b2b.hero.cta2")}</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}