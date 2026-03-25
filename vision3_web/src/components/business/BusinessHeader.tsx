// vision3_web/src/components/business/BusinessHeader.tsx

"use client";

// 이 파일은 business 전용 상단 헤더 컴포넌트다.
// 일반 사이트 Header와 비슷한 구조를 가지지만,
// business 영역에 맞는 메뉴와 메인 사이트 복귀 링크를 따로 가진다.
// /business, /business/packages, /business/contact 페이지에서 공통으로 사용된다.

import { useState, useEffect } from "react";
// 스크롤 상태와 모바일 메뉴 열림 상태를 관리하기 위해 사용한다.

import { motion, AnimatePresence } from "framer-motion";
// 헤더 등장 애니메이션, active 메뉴 강조, 모바일 메뉴 열림/닫힘 애니메이션에 사용한다.

import Link from "next/link";
// 내부 라우팅 및 메인 사이트 링크 이동에 사용한다.

import { usePathname } from "next/navigation";
// 현재 business 내부 경로가 무엇인지 읽어서 active 메뉴를 판단할 때 사용한다.

import { useLanguage, Language } from "@/lib/i18n";
// 다국어 번역 훅과 언어 타입이다.
// business 메뉴와 언어 토글 UI를 현재 언어 상태와 연결한다.

const langOptions: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ko", label: "KR" },
  { code: "ja", label: "JP" },
];
// 헤더에서 사용할 언어 선택 버튼 옵션이다.

const MAIN_SITE_URL = "https://vision3.ai";
// 메인 사이트로 돌아갈 때 사용할 외부 URL이다.

export default function BusinessHeader() {
  const [scrolled, setScrolled] = useState(false);
  // 스크롤이 일정 이상 내려갔는지 여부
  // true가 되면 배경 블러와 테두리를 추가한다.

  const [mobileOpen, setMobileOpen] = useState(false);
  // 모바일 메뉴 열림 상태

  const pathname = usePathname();
  // 현재 경로를 읽어서 어떤 메뉴가 활성 상태인지 판단한다.

  const { lang, setLang, t } = useLanguage();
  // 현재 언어, 언어 변경 함수, 번역 함수 t를 가져온다.

  const navItems = [
    { label: t("b2b.nav.intro"), href: "/business" },
    { label: t("b2b.nav.packages"), href: "/business/packages" },
    { label: t("b2b.nav.inquiry"), href: "/business/contact" },
  ];
  // business 영역 전용 메뉴 데이터다.
  // 일반 사이트 헤더와 달리 business intro / packages / inquiry만 보여준다.

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    // 스크롤이 40px을 넘으면 scrolled를 true로 바꾼다.

    window.addEventListener("scroll", onScroll, { passive: true });
    // 스크롤 이벤트 등록

    return () => window.removeEventListener("scroll", onScroll);
    // 언마운트 시 이벤트 정리
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(6,6,14,0.9)] backdrop-blur-xl border-b border-[var(--color-border-subtle)]"
            : "bg-transparent"
        }`}
      >
        {/* 헤더는 화면 상단에 고정되고,
            스크롤 여부에 따라 투명 상태 / 블러 상태가 바뀐다. */}

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/business" className="flex items-center gap-3 group">
              {/* business 홈으로 이동하는 브랜드 로고 */}

              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0ea5e9] opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-[2px] rounded-[6px] bg-[var(--color-bg-primary)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#blogo)" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="url(#blogo)" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="url(#blogo)" strokeWidth="2" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="blogo" x1="2" y1="2" x2="22" y2="22">
                        <stop stopColor="#00d4ff" />
                        <stop offset="1" stopColor="#0ea5e9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Vision3 <span className="text-[#00d4ff]">Business</span>
                </span>
                <span className="text-[10px] text-[var(--color-text-muted)] tracking-widest uppercase leading-tight">
                  Enterprise Solutions
                </span>
              </div>
              {/* business 브랜드명과 보조 설명 */}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                // 현재 경로와 메뉴 href가 같으면 활성 상태로 본다.

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive ? "text-white" : "text-[var(--color-text-secondary)] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="bnav-active"
                        className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {/* 활성 메뉴 뒤에 강조 배경을 깔아준다. */}

                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}

              <div className="w-px h-5 bg-[var(--color-border-subtle)] mx-2" />
              {/* business 메뉴와 메인 사이트 복귀 링크를 시각적으로 분리하는 divider */}

              <Link
                href={MAIN_SITE_URL}
                className="px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)] hover:text-white transition-colors rounded-lg border border-[var(--color-border-subtle)] hover:border-[var(--color-border-medium)]"
              >
                {t("b2b.nav.backMain")}
              </Link>
              {/* 메인 사이트로 돌아가는 외부 링크 */}
            </div>

            {/* Right: Lang + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center rounded-lg border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] overflow-hidden">
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => setLang(opt.code)}
                    className={`px-3 py-1.5 text-xs font-bold transition-all duration-300 ${
                      lang === opt.code
                        ? "bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white"
                        : "text-[var(--color-text-muted)] hover:text-white"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {/* 데스크톱용 언어 토글이다.
                  현재 선택된 언어는 gradient 배경으로 강조된다. */}

              <Link
                href="/business/contact"
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("b2b.nav.inquiry")}
              </Link>
              {/* business 문의 페이지로 바로 이동하는 CTA 버튼 */}
            </div>

            {/* Mobile Burger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden relative w-10 h-10 flex items-center justify-center" aria-label="Toggle menu">
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
              </div>
            </button>
            {/* mobileOpen 상태에 따라 햄버거 아이콘이 X 모양으로 바뀐다. */}
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="fixed inset-0 top-20 z-40 bg-[rgba(6,6,14,0.97)] backdrop-blur-2xl md:hidden">
            <div className="flex flex-col items-center justify-center gap-6 pt-12">
              <div className="flex items-center rounded-lg border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] overflow-hidden mb-4">
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => setLang(opt.code)}
                    className={`px-5 py-2 text-sm font-bold transition-all duration-300 ${
                      lang === opt.code
                        ? "bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white"
                        : "text-[var(--color-text-muted)] hover:text-white"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {/* 모바일 메뉴 안에도 언어 토글이 들어간다. */}

              {navItems.map((item, i) => (
                <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)} className="text-2xl font-semibold text-[var(--color-text-secondary)] hover:text-white transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              {/* 데스크톱과 동일한 business 메뉴 데이터를 재사용한다. */}

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }} className="mt-2">
                <Link href={MAIN_SITE_URL} onClick={() => setMobileOpen(false)} className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors border-b border-[var(--color-border-subtle)] pb-1">
                  {t("b2b.nav.backMain")}
                </Link>
              </motion.div>
              {/* 모바일에서도 메인 사이트 복귀 링크를 따로 둔다. */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
// 정리하면 BusinessHeader는 일반 Header와 비슷한 틀을 가지지만,
// business 영역 전용 메뉴, 메인 사이트 복귀 링크, business 문의 CTA를 갖는다는 점이 핵심이다.