// vision3_web/src/components/layout/Header.tsx

"use client";
// 스크롤 반응, 모바일 메뉴 열고 닫기, 언어 변경처럼
// 브라우저에서 바로 일어나는 동작이 있어서 이 파일은 클라이언트 컴포넌트여야 한다.

import { useState, useEffect } from "react";
// useState는 헤더 상태값(scrolled, mobileOpen)을 저장할 때 쓰고,
// useEffect는 스크롤 이벤트를 등록/해제할 때 사용한다.

import { motion, AnimatePresence } from "framer-motion";
// motion은 헤더 등장 애니메이션, 메뉴 active 배경, 모바일 메뉴 애니메이션에 쓰인다.
// AnimatePresence는 모바일 메뉴가 닫힐 때도 exit 애니메이션이 보이게 해준다.

import Link from "next/link";
// 페이지 이동용 Link 컴포넌트다.
// 홈, 문의 페이지, experience 페이지 이동과 연결된다.

import { usePathname } from "next/navigation";
// 현재 경로를 읽어서 어떤 메뉴가 활성 상태인지 판단할 때 사용한다.

import { useLanguage, Language } from "@/lib/i18n";
// useLanguage는 현재 언어, 언어 변경 함수, 번역 함수 t를 가져오는 훅이다.
// Language 타입은 사용할 수 있는 언어 코드(en, ko, ja)를 타입으로 제한하는 역할을 한다.

const langOptions: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ko", label: "KR" },
  { code: "ja", label: "JP" },
];
// 언어 토글 버튼에서 사용할 옵션 목록이다.
// code는 실제 내부 언어값이고, label은 버튼에 짧게 표시할 텍스트다.

export default function Header() {
  // 스크롤이 일정 이상 내려갔는지 여부
  // true가 되면 배경 블러 + 테두리를 추가해 헤더를 더 선명하게 만든다.
  const [scrolled, setScrolled] = useState(false);

  // 모바일 메뉴 열림 상태
  const [mobileOpen, setMobileOpen] = useState(false);

  // 현재 라우트 경로
  const pathname = usePathname();
  // pathname은 데스크톱 메뉴에서 active 상태를 계산할 때 사용된다.

  const { lang, setLang, t } = useLanguage();
  // lang: 현재 선택된 언어
  // setLang: 언어를 바꾸는 함수
  // t: 현재 언어에 맞는 번역 문자열을 가져오는 함수
  // 이전 버전과 가장 큰 차이점 중 하나가 바로 이 다국어 구조 추가다.

  const navItems = [
    { label: t("nav.home"), href: "/" },
    // { label: t("nav.technology"), href: "/#technology" },
    // { label: t("nav.studio"), href: "/#studio" },
    // { label: t("nav.experience"), href: "/experience" },
    { label: t("nav.b2b"), href: "https://business.vision3.ai" },
    { label: t("nav.contact"), href: "/contact" },
  ];
  // 헤더 메뉴 데이터다.
  // 이전 버전에서는 컴포넌트 바깥에 고정 영어 문자열로 정의되어 있었지만,
  // 지금은 t(...)를 사용해야 하므로 컴포넌트 내부에서 생성한다.
  // 또 기존의 Technology / Studio 메뉴는 주석 처리되었고,
  // 대신 외부 비즈니스 사이트로 가는 B2B 메뉴가 추가되었다.

  useEffect(() => {
    // 스크롤이 40px보다 크면 scrolled true
    const onScroll = () => setScrolled(window.scrollY > 40);

    // passive: true는 스크롤 성능 최적화 목적
    window.addEventListener("scroll", onScroll, { passive: true });

    // 언마운트 시 이벤트 제거
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // 이 effect는 헤더가 화면에 올라왔을 때 한 번 실행되고,
  // 페이지를 벗어나면 이벤트를 정리한다.

  const handleNavClick = (href: string) => {
    // 메뉴 클릭 시 모바일 메뉴는 닫는다.
    setMobileOpen(false);

    // 홈 페이지 내부 앵커(/#...)인데 현재도 홈이면
    // 페이지 이동 대신 해당 섹션으로 부드럽게 스크롤한다.
    if (href.startsWith("/#") && pathname === "/") {
      const el = document.getElementById(href.replace("/#", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };
  // 이 함수는 여전히 홈 내부 앵커 이동을 지원한다.
  // 다만 현재 navItems에서는 /#technology, /#studio가 주석 처리되어 있어서
  // 실제 동작은 홈 메뉴, B2B 링크, Contact 이동에 더 초점이 맞춰져 있다.

  return (
    <>
      <motion.header
        // 처음 렌더링될 때 위에서 내려오는 느낌
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(6,6,14,0.85)] backdrop-blur-xl border-b border-[var(--color-border-subtle)]"
            : "bg-transparent"
        }`}
      >
        {/* 헤더는 항상 화면 맨 위에 고정되고,
            스크롤 여부에 따라 투명 상태 / 블러 배경 상태가 바뀐다. */}

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            {/* 왼쪽 브랜드 로고. 클릭하면 홈으로 이동 */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                {/* 바깥 그라디언트 박스 */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* 안쪽 다크 박스 */}
                <div className="absolute inset-[2px] rounded-[6px] bg-[var(--color-bg-primary)] flex items-center justify-center">
                  {/* 브랜드 아이콘용 SVG */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#logo-grad)" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="url(#logo-grad)" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="url(#logo-grad)" strokeWidth="2" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="logo-grad" x1="2" y1="2" x2="22" y2="22">
                        <stop stopColor="#00d4ff" />
                        <stop offset="1" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Vision
                <span className="neon-text ml-1">3</span>
              </span>
            </Link>
            {/* 여기서 neon-text, 전역 폰트 변수는 globals.css와 직접 연결된다. */}

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]));
                // 현재 경로와 item.href를 비교해 active 여부를 계산한다.
                // 다만 B2B처럼 외부 링크는 pathname과 직접 매칭되지 않기 때문에
                // 사실상 내부 라우트 메뉴(Home, Contact) 중심으로 active가 동작한다고 보면 된다.

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive ? "text-white" : "text-[var(--color-text-secondary)] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {/* layoutId를 써서 active 배경이 메뉴 사이를 부드럽게 이동하는 느낌을 만든다. */}

                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right side: Lang Toggle + CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Toggle */}
              <div className="flex items-center rounded-lg border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] overflow-hidden">
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => setLang(opt.code)}
                    className={`px-3 py-1.5 text-xs font-bold transition-all duration-300 ${
                      lang === opt.code
                        ? "bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] text-white"
                        : "text-[var(--color-text-muted)] hover:text-white"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {/* 데스크톱용 언어 토글이다.
                  현재 선택된 언어는 gradient 배경으로 활성 표시를 하고,
                  누르면 setLang으로 바로 언어 상태를 변경한다. */}

              <Link href="/experience" className="glow-button text-sm">
                {t("nav.tryDemo")}
              </Link>
            </div>
            {/* 데스크톱 오른쪽에는 이전처럼 CTA 버튼이 있지만,
                버튼 문구도 이제 t("nav.tryDemo") 번역 키를 사용한다.
                즉, 버튼 텍스트까지 다국어 대응이 된 상태다. */}

            {/* Mobile Burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
              </div>
            </button>
            {/* mobileOpen 상태에 따라 3줄 햄버거 아이콘이 X 모양으로 바뀐다. */}
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-[rgba(6,6,14,0.97)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center gap-6 pt-12">
              {/* Mobile Language Toggle */}
              <div className="flex items-center rounded-lg border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] overflow-hidden mb-4">
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => setLang(opt.code)}
                    className={`px-5 py-2 text-sm font-bold transition-all duration-300 ${
                      lang === opt.code
                        ? "bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] text-white"
                        : "text-[var(--color-text-muted)] hover:text-white"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {/* 모바일 메뉴 안에도 별도 언어 토글이 들어갔다.
                  즉, 화면 크기에 상관없이 헤더에서 바로 언어를 바꿀 수 있도록 만든 구조다. */}

              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-2xl font-semibold text-[var(--color-text-secondary)] hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              {/* 데스크톱과 같은 navItems를 그대로 재사용해서
                  메뉴 데이터가 한 곳에서만 관리되도록 만든 구조다.
                  단, 지금은 그 메뉴 자체가 번역 기반이기 때문에
                  언어를 바꾸면 모바일 메뉴 문구도 바로 함께 바뀐다. */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
                className="mt-4"
              >
                <Link href="/experience" className="glow-button" onClick={() => setMobileOpen(false)}>
                  {t("nav.tryDemo")}
                </Link>
              </motion.div>
              {/* 모바일에서도 Experience 진입 버튼을 따로 두고,
                  클릭하면 메뉴를 닫은 뒤 데모 페이지로 이동한다.
                  이 버튼 문구 역시 번역 키를 사용한다. */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
// 정리하면 Header의 기본 구조는 이전과 비슷하지만,
// 메뉴 데이터가 번역 기반으로 바뀌었고,
// 언어 토글 UI가 데스크톱/모바일 모두 추가되었으며,
// Technology / Studio 대신 B2B 외부 링크가 들어간 것이 가장 큰 변화다.