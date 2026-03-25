"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface VideoItem {
  file: string;
  label: string;
}

interface PackageItem {
  titleKey: string;
  descKey: string;
  videos: VideoItem[];
}

interface CategoryData {
  id: string;
  iconKey: string;
  titleKey: string;
  packages: PackageItem[];
}

const categories: CategoryData[] = [
  {
    id: "game", iconKey: "b2b.pkg.game.icon", titleKey: "b2b.pkg.game.title",
    packages: [
      { titleKey: "b2b.pkg.game1.title", descKey: "b2b.pkg.game1.desc", videos: [
        { file: "gameIndieTeaser", label: "Indie Teaser" },
        { file: "gameRPGteaser", label: "RPG Teaser" },
        { file: "gameVerticalshort", label: "Vertical Short" },
      ]},
      { titleKey: "b2b.pkg.game2.title", descKey: "b2b.pkg.game2.desc", videos: [
        { file: "gameUpdatenotice", label: "Update Notice" },
      ] },
    ],
  },
  {
    id: "beauty", iconKey: "b2b.pkg.beauty.icon", titleKey: "b2b.pkg.beauty.title",
    packages: [
      { titleKey: "b2b.pkg.beauty1.title", descKey: "b2b.pkg.beauty1.desc", videos: [
        { file: "beautyPerfume", label: "Perfume" },
        { file: "beautyTint", label: "Tint" },
        { file: "beautyDevice", label: "Beauty Device" },
      ]},
    ],
  },
  {
    id: "edu", iconKey: "b2b.pkg.edu.icon", titleKey: "b2b.pkg.edu.title",
    packages: [
      { titleKey: "b2b.pkg.edu1.title", descKey: "b2b.pkg.edu1.desc", videos: [
        { file: "eduTypeA", label: "Type A — Promotional" },
      ]},
    ],
  },
  {
    id: "fashion", iconKey: "b2b.pkg.fashion.icon", titleKey: "b2b.pkg.fashion.title",
    packages: [
      { titleKey: "b2b.pkg.fashion1.title", descKey: "b2b.pkg.fashion1.desc", videos: [
        { file: "fashionLookbook", label: "Lookbook Film" },
        { file: "fashionSunglasses", label: "Sunglasses" },
      ]},
    ],
  },
  {
    id: "ent", iconKey: "b2b.pkg.ent.icon", titleKey: "b2b.pkg.ent.title",
    packages: [
      { titleKey: "b2b.pkg.ent1.title", descKey: "b2b.pkg.ent1.desc", videos: [] },
    ],
  },
  {
    id: "finance", iconKey: "b2b.pkg.finance.icon", titleKey: "b2b.pkg.finance.title",
    packages: [
      { titleKey: "b2b.pkg.finance1.title", descKey: "b2b.pkg.finance1.desc", videos: [] },
    ],
  },
  {
    id: "hr", iconKey: "b2b.pkg.hr.icon", titleKey: "b2b.pkg.hr.title",
    packages: [
      { titleKey: "b2b.pkg.hr1.title", descKey: "b2b.pkg.hr1.desc", videos: [] },
    ],
  },
  {
    id: "health", iconKey: "b2b.pkg.health.icon", titleKey: "b2b.pkg.health.title",
    packages: [
      { titleKey: "b2b.pkg.health1.title", descKey: "b2b.pkg.health1.desc", videos: [] },
    ],
  },
];

export default function PackagesPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("game");

  const activeCat = categories.find((c) => c.id === activeCategory)!;

  return (
    <main className="pt-28 pb-20 min-h-screen">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(0,212,255,0.04),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="tech-badge mb-4 inline-flex"><span className="glow-dot" style={{ width: 6, height: 6 }} />{t("b2b.pkg.badge")}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5" style={{ fontFamily: "var(--font-display)" }}>{t("b2b.pkg.title")}</h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">{t("b2b.pkg.subtitle")}</p>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white shadow-lg shadow-[#00d4ff]/20"
                    : "glass-card text-[var(--color-text-secondary)] hover:text-white"
                }`}
              >
                <span>{t(cat.iconKey)}</span>
                <span>{t(cat.titleKey)}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {/* Category title */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{t(activeCat.iconKey)}</span>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{t(activeCat.titleKey)}</h2>
            </div>

            {/* Packages in this category */}
            <div className="space-y-10">
              {activeCat.packages.map((pkg, pi) => (
                <div key={pi} className="gradient-border">
                  <div className="p-8 md:p-10">
                    {/* Package Title & Description */}
                    <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                      {t(pkg.titleKey)}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-4xl">
                      {t(pkg.descKey)}
                    </p>

                    {/* Videos */}
                    {pkg.videos.length > 0 ? (
                      <div>
                        <h4 className="text-sm font-semibold text-[#00d4ff] uppercase tracking-widest mb-4 flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                          {t("b2b.pkg.videos")}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {pkg.videos.map((vid) => (
                            <div key={vid.file} className="rounded-xl overflow-hidden border border-[var(--color-border-subtle)] bg-black/30">
                              <div className="aspect-video relative">
                                <video
                                  src={`/asset/b2bvideos/${vid.file}.mp4`}
                                  controls
                                  preload="metadata"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="px-3 py-2">
                                <p className="text-xs text-[var(--color-text-muted)] font-medium">{vid.label}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)]">
                        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-cyan)]/5 border border-[var(--color-accent-cyan)]/15 flex items-center justify-center text-lg">🎬</div>
                        <div>
                          <p className="text-sm font-medium text-[var(--color-text-secondary)]">{t("b2b.pkg.comingSoon")}</p>
                          <p className="text-xs text-[var(--color-text-muted)]">Sample videos are being prepared and will be available soon.</p>
                        </div>
                      </div>
                    )}

                    {/* Inquire CTA */}
                    <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)]">
                      <Link
                        href="/business/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {t("b2b.pkg.inquire")}
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 8H14M14 8L9 3M14 8L9 13" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
