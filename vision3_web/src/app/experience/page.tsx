"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ExperienceFlow from "@/components/experience/ExperienceFlow";
import { useLanguage } from "@/lib/i18n";

export default function ExperiencePage() {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 min-h-screen">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,212,255,0.05),transparent_60%),radial-gradient(ellipse_at_70%_80%,rgba(139,92,246,0.05),transparent_60%)]" />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4 flex justify-center">
              <span className="tech-badge"><span className="glow-dot" style={{ width: 6, height: 6 }} />{t("exp.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              {t("exp.title1")} <span className="neon-text">{t("exp.title2")}</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">{t("exp.desc")}</p>
          </div>
          <ExperienceFlow />
        </div>
      </main>
      <Footer />
    </>
  );
}
