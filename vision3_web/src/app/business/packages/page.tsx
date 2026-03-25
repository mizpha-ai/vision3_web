// vision3_web/src/app/business/packages/page.tsx
"use client";

// 이 파일은 /business/packages 페이지다.
// 산업군별 패키지와 샘플 비디오를 보여주는 business 전용 패키지 소개 페이지다.
// business 메인 페이지에서 산업군 카드를 눌렀을 때 이어지는 상세 탐색 페이지 역할을 한다.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface VideoItem {
  file: string;
  // 실제 mp4 파일명에 대응되는 키

  label: string;
  // 카드 아래에 표시할 짧은 비디오 이름
}

interface PackageItem {
  titleKey: string;
  // 번역 키 기반 패키지 제목

  descKey: string;
  // 번역 키 기반 패키지 설명

  videos: VideoItem[];
  // 이 패키지에 포함된 샘플 비디오 목록
}

interface CategoryData {
  id: string;
  // 카테고리 고유 id

  iconKey: string;
  // 번역 키 기반 아이콘 텍스트

  titleKey: string;
  // 번역 키 기반 카테고리 제목

  packages: PackageItem[];
  // 이 산업군에 속한 패키지 목록
}

const categories: CategoryData[] = [
  {
    id: "game",
    iconKey: "b2b.pkg.game.icon",
    titleKey: "b2b.pkg.game.title",
    packages: [
      {
        titleKey: "b2b.pkg.game1.title",
        descKey: "b2b.pkg.game1.desc",
        videos: [
          { file: "gameIndieTeaser", label: "Indie Teaser" },
          { file: "gameRPGteaser", label: "RPG Teaser" },
          { file: "gameVerticalshort", label: "Vertical Short" },
        ],
      },
      {
        titleKey: "b2b.pkg.game2.title",
        descKey: "b2b.pkg.game2.desc",
        videos: [{ file: "gameUpdatenotice", label: "Update Notice" }],
      },
    ],
  },
  {
    id: "beauty",
    iconKey: "b2b.pkg.beauty.icon",
    titleKey: "b2b.pkg.beauty.title",
    packages: [
      {
        titleKey: "b2b.pkg.beauty1.title",
        descKey: "b2b.pkg.beauty1.desc",
        videos: [
          { file: "beautyPerfume", label: "Perfume" },
          { file: "beautyTint", label: "Tint" },
          { file: "beautyDevice", label: "Beauty Device" },
        ],
      },
    ],
  },
  {
    id: "edu",
    iconKey: "b2b.pkg.edu.icon",
    titleKey: "b2b.pkg.edu.title",
    packages: [
      {
        titleKey: "b2b.pkg.edu1.title",
        descKey: "b2b.pkg.edu1.desc",
        videos: [{ file: "eduTypeA", label: "Type A — Promotional" }],
      },
    ],
  },
  {
    id: "fashion",
    iconKey: "b2b.pkg.fashion.icon",
    titleKey: "b2b.pkg.fashion.title",
    packages: [
      {
        titleKey: "b2b.pkg.fashion1.title",
        descKey: "b2b.pkg.fashion1.desc",
        videos: [
          { file: "fashionLookbook", label: "Lookbook Film" },
          { file: "fashionSunglasses", label: "Sunglasses" },
        ],
      },
    ],
  },
  {
    id: "ent",
    iconKey: "b2b.pkg.ent.icon",
    titleKey: "b2b.pkg.ent.title",
    packages: [{ titleKey: "b2b.pkg.ent1.title", descKey: "b2b.pkg.ent1.desc", videos: [] }],
  },
  {
    id: "finance",
    iconKey: "b2b.pkg.finance.icon",
    titleKey: "b2b.pkg.finance.title",
    packages: [{ titleKey: "b2b.pkg.finance1.title", descKey: "b2b.pkg.finance1.desc", videos: [] }],
  },
  {
    id: "hr",
    iconKey: "b2b.pkg.hr.icon",
    titleKey: "b2b.pkg.hr.title",
    packages: [{ titleKey: "b2b.pkg.hr1.title", descKey: "b2b.pkg.hr1.desc", videos: [] }],
  },
  {
    id: "health",
    iconKey: "b2b.pkg.health.icon",
    titleKey: "b2b.pkg.health.title",
    packages: [{ titleKey: "b2b.pkg.health1.title", descKey: "b2b.pkg.health1.desc", videos: [] }],
  },
];
// business 패키지 데이터 전체다.
// 산업군 단위로 묶고,
// 각 산업군 안에 여러 패키지와 샘플 비디오를 넣어두는 구조다.

export default function PackagesPage() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.

  const [activeCategory, setActiveCategory] = useState("game");
  // 현재 선택된 산업군 탭
  // 기본값은 game 카테고리다.

  const activeCat = categories.find((c) => c.id === activeCategory)!;
  // 현재 선택된 카테고리 데이터
  // categories 배열에서 activeCategory와 일치하는 항목을 찾는다.

  return (
    <main className="pt-28 pb-20 min-h-screen">
      {/* business 헤더 높이만큼 상단 여백 */}

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(0,212,255,0.04),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-15" />
      </div>
      {/* packages 페이지 전용 배경 */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="tech-badge mb-4 inline-flex">
              <span className="glow-dot" style={{ width: 6, height: 6 }} />
              {t("b2b.pkg.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5" style={{ fontFamily: "var(--font-display)" }}>
              {t("b2b.pkg.title")}
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              {t("b2b.pkg.subtitle")}
            </p>
          </div>
        </ScrollReveal>
        {/* 페이지 상단 소개 영역 */}

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
        {/* 산업군 탭 버튼들이다.
            선택된 카테고리에 따라 아래 패키지 내용이 바뀐다. */}

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{t(activeCat.iconKey)}</span>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                {t(activeCat.titleKey)}
              </h2>
            </div>
            {/* 현재 선택된 산업군 제목 */}

            <div className="space-y-10">
              {activeCat.packages.map((pkg, pi) => (
                <div key={pi} className="gradient-border">
                  <div className="p-8 md:p-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                      {t(pkg.titleKey)}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-4xl">
                      {t(pkg.descKey)}
                    </p>
                    {/* 패키지 제목과 설명 */}

                    {pkg.videos.length > 0 ? (
                      <div>
                        <h4 className="text-sm font-semibold text-[#00d4ff] uppercase tracking-widest mb-4 flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
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
                        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-cyan)]/5 border border-[var(--color-accent-cyan)]/15 flex items-center justify-center text-lg">
                          🎬
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                            {t("b2b.pkg.comingSoon")}
                          </p>
                          <p className="text-xs text-[var(--color-text-muted)]">
                            Sample videos are being prepared and will be available soon.
                          </p>
                        </div>
                      </div>
                    )}
                    {/* 샘플 비디오가 있으면 비디오 카드 그리드,
                        없으면 coming soon 안내 카드를 보여준다. */}

                    <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)]">
                      <Link
                        href="/business/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {t("b2b.pkg.inquire")}
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 8H14M14 8L9 3M14 8L9 13" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                    {/* 각 패키지 아래 문의 CTA */}
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
// 정리하면 PackagesPage는 산업군별 패키지와 샘플 비디오를 보여주는 상세 탐색 페이지이고,
// 탭 전환을 통해 여러 카테고리를 빠르게 비교하고 바로 문의로 이어지게 만드는 구조다.