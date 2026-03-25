// vision3_web/src/components/sections/HeroSection.tsx

"use client";

// 이 파일은 홈 화면에서 가장 먼저 보이는 히어로 섹션이다.
// 사이트 첫인상을 결정하는 영역이라서,
// 단순 텍스트 출력이 아니라 배경 효과, CTA 버튼, 통계, 스크롤 유도까지 한 번에 담당한다.
// page.tsx에서 가장 먼저 렌더링되는 HeroSection과 연결된다.
// 이전 버전과 비교하면, 지금은 주요 문구를 직접 적지 않고
// 번역 함수 t(...)로 가져오는 구조로 바뀌었다.

import { motion } from "framer-motion";
// framer-motion은 등장 애니메이션, 살짝 떠오르는 효과, 반복되는 움직임 같은
// 모션 연출을 위해 사용한다.

import Link from "next/link";
// Link는 Next.js 라우팅용 컴포넌트다.
// a 태그 대신 사용해서 페이지 이동을 더 자연스럽고 최적화되게 처리한다.

import ParticleField from "@/components/ui/ParticleField";
// ParticleField는 배경에 움직이는 파티클을 깔아주는 공통 UI다.
// 지금 히어로 섹션에서 테크 느낌을 강화하는 배경 레이어로 들어간다.

import { useLanguage } from "@/lib/i18n";
// 다국어 번역을 위한 훅이다.
// 히어로 안의 배지, 제목, 설명, 버튼, 통계 라벨을 현재 언어에 맞게 가져온다.

export default function HeroSection() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이 섹션의 주요 텍스트는 이제 하드코딩 문자열이 아니라 t("키")로 관리된다.

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* min-h-screen으로 화면 높이를 최소 한 화면 꽉 차게 잡는다.
          flex + items-center + justify-center로 내부 콘텐츠를 수직/수평 중앙 정렬한다.
          overflow-hidden은 배경 효과나 blur가 바깥으로 튀는 것을 잘라내기 위해 사용했다. */}

      <div className="absolute inset-0">
        {/* absolute inset-0으로 섹션 전체를 덮는 배경 레이어 묶음 */}

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,212,255,0.08),transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(139,92,246,0.08),transparent_60%),radial-gradient(ellipse_at_50%_80%,rgba(236,72,153,0.05),transparent_60%)]" />
        {/* 여러 개의 radial-gradient를 겹쳐서 단색 배경이 아니라
            공간감 있는 미래형 배경처럼 보이게 만든다. */}

        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* globals.css에 정의된 grid-bg 유틸리티를 사용해서
            기술 문서 / 대시보드 / 스튜디오 같은 분위기를 준다. */}

        <ParticleField />
        {/* canvas 기반 파티클 배경이다.
            HeroSection 단독으로 모든 시각 효과를 다 만들지 않고
            별도 UI 컴포넌트로 분리해 재사용성을 높였다. */}

        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-10 animate-scan-line" />
        {/* 위에서 아래로 움직이는 아주 얇은 라인이다.
            animate-scan-line은 globals.css에 정의된 keyframe과 연결된다. */}
      </div>

      <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-[var(--color-accent-cyan)] opacity-[0.03] blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-[var(--color-accent-purple)] opacity-[0.04] blur-[120px] animate-float-delay" />
      {/* 배경에 은은한 컬러 덩어리를 넣어서 화면이 너무 평면적으로 보이지 않게 한다.
          blur와 낮은 opacity를 같이 써서 직접적인 도형보다 조명처럼 느껴지게 만든다. */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* z-10을 줘서 배경 레이어보다 위에 오게 만든 실제 텍스트/버튼 영역 */}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8">
          {/* 첫 진입 시 아래에서 살짝 올라오며 나타나는 배지다. */}

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] text-sm text-[var(--color-text-secondary)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-cyan)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-cyan)]" />
            </span>
            {t("hero.badge")}
          </span>
          {/* 이전에는 영어 문구를 직접 적었지만,
              지금은 hero.badge 번역 키를 통해 현재 언어에 맞는 배지를 보여준다. */}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8" style={{ fontFamily: "var(--font-display)" }}>
          <span className="block">{t("hero.title1")}</span>
          <span className="block neon-text mt-2">{t("hero.title2")}</span>
        </motion.h1>
        {/* 메인 타이틀은 히어로에서 가장 중요한 텍스트다.
            한 줄 전체를 통째로 번역하지 않고 title1 / title2로 나눠서 관리해서
            두 번째 줄만 neon-text로 강조할 수 있게 만든 구조다. */}

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-lg sm:text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed mb-12 text-balance">
          {t("hero.subtitle")}
        </motion.p>
        {/* 서비스가 뭘 하는지 한 문장으로 정리하는 설명 문단이다.
            이 문장도 이제 번역 키 기반이라 현재 언어에 따라 자동으로 바뀐다. */}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* 실제 행동 유도 버튼 영역이다.
              Experience 데모로 보내는 버튼과 기술 소개 섹션으로 이동시키는 버튼으로 나뉜다. */}

          <Link href="/experience" className="glow-button text-base px-8 py-4">{t("hero.cta1")}</Link>
          {/* 핵심 CTA 버튼이다.
              /experience 페이지로 이동하며,
              버튼 문구도 hero.cta1 번역값을 사용한다. */}

          <Link href="/#technology" className="px-8 py-4 rounded-xl border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all duration-300 text-base font-semibold" style={{ fontFamily: "var(--font-display)" }}>{t("hero.cta2")}</Link>
          {/* 홈 내부 앵커 섹션인 /#technology로 이동하는 버튼이다.
              Header의 Technology 메뉴와 같은 섹션으로 연결된다.
              문구 역시 hero.cta2 번역 키를 사용한다. */}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {/* 사이트 핵심 구조를 짧은 숫자로 보여주는 요약 행이다.
              이전 버전에서는 배열 데이터가 JSX 밖에 더 명확히 분리돼 있었지만,
              지금은 아래처럼 인라인 배열로 바로 map을 돌리는 형태다. */}

          {[{ value: "5", label: t("hero.stat1") }, { value: "3", label: t("hero.stat2") }, { value: "7", label: t("hero.stat3") }, { value: "8s", label: t("hero.stat4") }].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 + i * 0.1 }} className="text-center">
              {/* 각각의 통계 카드가 살짝 순차적으로 나타나도록 delay를 i 값으로 분산한다.
                  key는 현재 index를 사용하고 있다. */}

              <div className="text-3xl md:text-4xl font-bold neon-text mb-1" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</div>
              <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        {/* 통계 라벨은 전부 번역 키를 사용하도록 바뀌었다.
            그리고 마지막 값도 이전 버전과 다르게 현재는 "8s"로 들어가 있다. */}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />
      {/* 히어로 하단이 다음 섹션으로 자연스럽게 이어지도록 어두운 그라디언트로 마감한다. */}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        {/* 사용자가 아래로 더 스크롤할 수 있다는 신호를 주는 장치다. */}

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"><div className="w-1 h-2 rounded-full bg-white/40" /></motion.div>
        {/* y값을 반복해서 바꿔 위아래로 부드럽게 움직인다.
            즉, 정적인 아이콘이 아니라 계속 움직이며 스크롤을 유도하는 표시다. */}
      </motion.div>
    </section>
  );
}
// 정리하면 HeroSection의 구조 자체는 이전과 거의 같지만,
// 배지, 제목, 설명, 버튼, 통계 라벨이 모두 번역 체계로 들어가면서
// 이 섹션 전체가 다국어 대응 가능하도록 바뀐 상태다.