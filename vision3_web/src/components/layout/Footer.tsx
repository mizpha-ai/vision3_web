// vision3_web/src/components/layout/Footer.tsx
"use client";

// 이 파일은 사이트 공통 푸터다.
// Header와 짝을 이루는 레이아웃 컴포넌트로,
// 브랜드 소개, 링크 모음, 소셜 자리, 하단 법적 링크를 담는다.

import Link from "next/link";

const footerLinks = {
  // 푸터 링크를 카테고리별로 묶어둔 객체
  Product: [
    { label: "Character Studio", href: "/#technology" },
    { label: "Script Studio", href: "/#technology" },
    { label: "Video Production", href: "/#technology" },
    { label: "Quality Assurance", href: "/#quality" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Use Cases", href: "/#usecases" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border-subtle)]">
      {/* 맨 위 얇은 그라디언트 라인으로 푸터 시작을 시각적으로 구분 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          {/* 왼쪽 큰 영역은 브랜드 소개용 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                {/* 외곽 그라디언트 로고 프레임 */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] opacity-80" />
                {/* 안쪽 다크 박스 */}
                <div className="absolute inset-[2px] rounded-[6px] bg-[var(--color-bg-primary)] flex items-center justify-center">
                  {/* Header와 동일한 브랜드 아이콘 계열 */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="url(#flogo)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path d="M2 17L12 22L22 17" stroke="url(#flogo)" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="url(#flogo)" strokeWidth="2" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="flogo" x1="2" y1="2" x2="22" y2="22">
                        <stop stopColor="#00d4ff" />
                        <stop offset="1" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <span className="text-base font-bold" style={{ fontFamily: "var(--font-display)" }}>
                AI Production <span className="neon-text">Studio</span>
              </span>
            </div>

            {/* 브랜드 설명 문구 */}
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-sm mb-6">
              From character creation to video production, an AI-powered end-to-end production platform. 
              Batch generate, human selects, auto-advance.
            </p>

            {/* 소셜 아이콘 자리
                지금은 실제 아이콘 대신 X / GH / DC 텍스트 플레이스홀더다. */}
            <div className="flex gap-4">
              {["X", "GH", "DC"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-muted)] text-xs font-bold hover:border-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)] transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {/* footerLinks 객체를 순회해서 각 컬럼을 자동 생성 */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-sm font-semibold text-white mb-4 tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        {/* 가장 아래 얇은 법적/저작권 영역 */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            {/* 연도는 하드코딩이 아니라 현재 연도로 자동 표시 */}
            &copy; {new Date().getFullYear()} AI Production Studio. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}