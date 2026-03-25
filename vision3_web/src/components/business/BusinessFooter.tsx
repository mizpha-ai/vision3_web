// vision3_web/src/components/business/BusinessFooter.tsx

"use client";

// 이 파일은 business 전용 하단 푸터 컴포넌트다.
// 일반 메인 사이트 Footer와는 별도로,
// /business 아래 페이지들에서 공통으로 쓰이는 하단 영역 역할을 한다.
// business 소개 / 패키지 / 문의 / 메인 사이트 복귀 링크를 한 번에 제공한다.

import Link from "next/link";
// 내부 라우팅용 Link 컴포넌트다.
// /business, /business/packages, /business/contact, / 로 이동할 때 사용한다.

import { useLanguage } from "@/lib/i18n";
// 다국어 번역 훅이다.
// 푸터 메뉴 문구를 현재 언어에 맞게 가져오는 데 사용한다.

export default function BusinessFooter() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 푸터 링크 문구는 전부 t("b2b.nav...") 키를 통해 출력된다.

  return (
    <footer className="border-t border-[var(--color-border-subtle)]">
      {/* business 페이지 하단 구분선 역할을 하는 footer 루트다.
          상단 border를 넣어서 본문과 푸터를 시각적으로 나눈다. */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* 다른 business 페이지들과 같은 폭을 유지하는 공통 컨테이너다. */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* 모바일에서는 세로,
              md 이상에서는 가로 정렬로 배치되는 푸터 내용 영역이다. */}

          <div className="flex items-center gap-3">
            {/* 왼쪽 브랜드 영역 */}

            <div className="relative w-8 h-8">
              {/* business 전용 작은 로고 박스 */}

              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0ea5e9] opacity-80" />
              {/* 바깥쪽 gradient 배경 */}

              <div className="absolute inset-[2px] rounded-[5px] bg-[var(--color-bg-primary)] flex items-center justify-center">
                {/* 안쪽 다크 박스 */}

                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00d4ff" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="#00d4ff" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="#00d4ff" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <span className="text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Vision3 <span className="text-[#00d4ff]">Business</span>
            </span>
            {/* business 전용 브랜드명 표시 */}
          </div>

          <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
            {/* 가운데 네비게이션 링크 묶음 */}

            <Link href="/business" className="hover:text-white transition-colors">
              {t("b2b.nav.intro")}
            </Link>

            <Link href="/business/packages" className="hover:text-white transition-colors">
              {t("b2b.nav.packages")}
            </Link>

            <Link href="/business/contact" className="hover:text-white transition-colors">
              {t("b2b.nav.inquiry")}
            </Link>

            <Link href="/" className="hover:text-white transition-colors">
              {t("b2b.nav.backMain")}
            </Link>
            {/* 푸터 링크들은 business 영역 내 이동 + 메인 사이트 복귀까지 맡는다. */}
          </div>

          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} Vision3. All rights reserved.
          </p>
          {/* 현재 연도를 자동으로 출력하는 저작권 문구다. */}
        </div>
      </div>
    </footer>
  );
}