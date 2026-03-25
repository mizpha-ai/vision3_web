// vision3_web/src/app/experience/page.tsx

"use client";

// 이 파일은 /experience 라우트 전용 페이지다.
// 홈에서 CTA 버튼이나 헤더 메뉴를 통해 들어오는
// 인터랙티브 데모 페이지의 엔트리 역할을 한다.
// 이전 버전과 비교하면, 지금은 페이지 헤더 문구를 직접 적지 않고
// 번역 함수 t(...)를 통해 가져오는 구조로 바뀌었다.
// 또 useLanguage 훅을 사용하므로 이 페이지는 클라이언트 컴포넌트가 되었다.

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ExperienceFlow from "@/components/experience/ExperienceFlow";
import { useLanguage } from "@/lib/i18n";
// useLanguage는 배지, 제목, 설명 문구를 현재 언어에 맞게 가져오기 위해 추가된 훅이다.

export default function ExperiencePage() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이 페이지 상단 헤더 문구는 전부 t("exp...") 키를 통해 출력된다.

  return (
    <>
      {/* 공통 상단 헤더 */}
      <Header />

      {/* 상단 고정 헤더와 겹치지 않도록 pt-28 여백을 준 메인 영역 */}
      <main className="pt-28 pb-20 min-h-screen">
        {/* 이 페이지 전용 배경 레이어 */}
        <div className="fixed inset-0 -z-10">
          {/* 가장 바탕이 되는 기본 배경색 */}
          <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />

          {/* 시안/테크 느낌을 주는 radial gradient 배경 */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,212,255,0.05),transparent_60%),radial-gradient(ellipse_at_70%_80%,rgba(139,92,246,0.05),transparent_60%)]" />

          {/* 공통 grid 배경 패턴 */}
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>

        {/* 페이지 본문 가로 폭 제한 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* 상단 배지 */}
            <div className="mb-4 flex justify-center">
              <span className="tech-badge">
                <span className="glow-dot" style={{ width: 6, height: 6 }} />
                {t("exp.badge")}
              </span>
            </div>
            {/* 이전에는 "Interactive Demo"를 직접 적었지만,
                지금은 번역 키에서 가져오므로 현재 언어에 따라 바뀐다. */}

            {/* 페이지 제목 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              {t("exp.title1")} <span className="neon-text">{t("exp.title2")}</span>
            </h1>
            {/* 이전에는 "Experience the Pipeline"을 직접 적었지만,
                지금은 title1 / title2로 나눠 번역 키에서 가져온다.
                그래서 title2 부분만 neon-text로 강조할 수 있다. */}

            {/* 소개 문구 */}
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">{t("exp.desc")}</p>
            {/* 설명 문단도 이제 번역 키 기반으로 바뀌었다. */}
          </div>

          {/* Interactive Flow */}
          {/* 실제 4단계 인터랙션 로직은 ExperienceFlow 컴포넌트가 담당한다. */}
          <ExperienceFlow />
        </div>
      </main>

      {/* 공통 하단 푸터 */}
      <Footer />
    </>
  );
}
// 정리하면 ExperiencePage의 구조와 역할은 이전과 거의 같지만,
// 배지 / 제목 / 설명 문구가 전부 번역 키 기반으로 바뀌면서
// 이 페이지도 다국어 대응 구조가 들어간 상태다.