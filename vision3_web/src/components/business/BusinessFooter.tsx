"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function BusinessFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-[var(--color-border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0ea5e9] opacity-80" />
              <div className="absolute inset-[2px] rounded-[5px] bg-[var(--color-bg-primary)] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00d4ff" strokeWidth="2" strokeLinejoin="round" /><path d="M2 17L12 22L22 17" stroke="#00d4ff" strokeWidth="2" strokeLinejoin="round" /><path d="M2 12L12 17L22 12" stroke="#00d4ff" strokeWidth="2" strokeLinejoin="round" /></svg>
              </div>
            </div>
            <span className="text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>Vision3 <span className="text-[#00d4ff]">Business</span></span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
            <Link href="/business" className="hover:text-white transition-colors">{t("b2b.nav.intro")}</Link>
            <Link href="/business/packages" className="hover:text-white transition-colors">{t("b2b.nav.packages")}</Link>
            <Link href="/business/contact" className="hover:text-white transition-colors">{t("b2b.nav.inquiry")}</Link>
            <Link href="/" className="hover:text-white transition-colors">{t("b2b.nav.backMain")}</Link>
          </div>
          <p className="text-xs text-[var(--color-text-muted)]">&copy; {new Date().getFullYear()} Vision3. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
