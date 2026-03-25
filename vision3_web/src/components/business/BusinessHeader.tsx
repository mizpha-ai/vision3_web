"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, Language } from "@/lib/i18n";

const langOptions: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ko", label: "KR" },
  { code: "ja", label: "JP" },
];

const MAIN_SITE_URL = "https://vision3.ai";

export default function BusinessHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t("b2b.nav.intro"), href: "/business" },
    { label: t("b2b.nav.packages"), href: "/business/packages" },
    { label: t("b2b.nav.inquiry"), href: "/business/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/business" className="flex items-center gap-3 group">
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
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
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
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
              {/* Divider */}
              <div className="w-px h-5 bg-[var(--color-border-subtle)] mx-2" />
              <Link
                href={MAIN_SITE_URL}
                className="px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)] hover:text-white transition-colors rounded-lg border border-[var(--color-border-subtle)] hover:border-[var(--color-border-medium)]"
              >
                {t("b2b.nav.backMain")}
              </Link>
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
              <Link href="/business/contact" className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white text-sm font-semibold hover:opacity-90 transition-opacity" style={{ fontFamily: "var(--font-display)" }}>
                {t("b2b.nav.inquiry")}
              </Link>
            </div>

            {/* Mobile Burger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden relative w-10 h-10 flex items-center justify-center" aria-label="Toggle menu">
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
              </div>
            </button>
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
                  <button key={opt.code} onClick={() => setLang(opt.code)} className={`px-5 py-2 text-sm font-bold transition-all duration-300 ${lang === opt.code ? "bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white" : "text-[var(--color-text-muted)] hover:text-white"}`}>{opt.label}</button>
                ))}
              </div>
              {navItems.map((item, i) => (
                <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)} className="text-2xl font-semibold text-[var(--color-text-secondary)] hover:text-white transition-colors" style={{ fontFamily: "var(--font-display)" }}>{item.label}</Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }} className="mt-2">
                <Link href={MAIN_SITE_URL} onClick={() => setMobileOpen(false)} className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors border-b border-[var(--color-border-subtle)] pb-1">{t("b2b.nav.backMain")}</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
