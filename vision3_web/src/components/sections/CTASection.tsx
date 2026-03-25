// vision3_web/src/components/sections/CTASection.tsx

"use client";

// 이 섹션은 랜딩 페이지 맨 아래 근처에서
// 사용자가 실제 액션을 하도록 유도하는 CTA(Call To Action) 영역이다.
// 여기서는 Experience 페이지와 Contact 페이지로 이동시키는 역할을 한다.
// 이전 버전과 비교하면, 지금은 문구를 직접 적지 않고
// 번역 함수 t(...)를 통해 가져오는 구조로 바뀌었다.

import Link from "next/link";
// 버튼 클릭 시 /experience, /contact 페이지로 이동시키는 링크 컴포넌트다.

import { motion } from "framer-motion";
// 카드가 아주 살짝 확대되며 등장하는 모션 효과에 사용된다.

import ScrollReveal from "@/components/ui/ScrollReveal";
// CTA 블록 전체가 스크롤 진입 시 자연스럽게 나타나게 해주는 공통 애니메이션 래퍼다.

import { useLanguage } from "@/lib/i18n";
// 다국어 번역을 위한 훅이다.
// 이 파일 안의 배지, 제목, 설명, 버튼 텍스트를 현재 언어에 맞게 가져오는 데 사용한다.

export default function CTASection() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이제 이 섹션의 모든 주요 문구는 하드코딩 문자열이 아니라 t("키") 형태로 관리된다.

  return (
    <section className="relative py-32 overflow-hidden">
      {/* CTA 전체 영역이다.
          py-32로 위아래 여백을 크게 주고,
          overflow-hidden으로 blur 장식이 밖으로 튀지 않게 한다. */}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.06),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(139,92,246,0.06),transparent_60%)]" />
      {/* 배경에 은은한 radial gradient를 깔아서 CTA 영역을 시각적으로 구분한다.
          페이지 맨 아래에서 "마지막 행동 유도 섹션"처럼 보이게 만드는 장식 레이어다. */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 다른 홈 섹션들과 같은 폭 정렬을 맞추는 공통 컨테이너다. */}

        <ScrollReveal>
          {/* CTA 전체 카드가 스크롤 진입 시 자연스럽게 나타난다. */}

          <div className="gradient-border max-w-4xl mx-auto">
            {/* gradient-border는 globals.css의 공통 강조 카드 스타일이다.
                CTA를 일반 섹션보다 더 눈에 띄게 보이도록 만드는 역할을 한다. */}

            <div className="p-12 md:p-16 text-center relative overflow-hidden">
              {/* 카드 내부 본문 영역이다.
                  text-center로 전체를 중앙 정렬하고,
                  relative를 기준으로 안쪽 장식 레이어를 깔 수 있게 한다. */}

              <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-[var(--color-accent-cyan)] opacity-[0.04] blur-[60px]" />
              <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-[var(--color-accent-purple)] opacity-[0.04] blur-[60px]" />
              {/* 위쪽/아래쪽에 아주 흐린 원형 빛을 넣어서 카드가 너무 평면적으로 보이지 않게 만든다.
                  실제 콘텐츠와는 관계없는 시각적 장식 요소다. */}

              <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                {/* 카드 자체가 아주 미세하게 확대되며 들어오는 효과다.
                    CTA는 페이지 마지막 행동 유도 구간이라서
                    살짝 집중되게 보이도록 모션을 추가한 구조다. */}

                <p className="text-sm font-semibold text-[var(--color-accent-cyan)] uppercase tracking-widest mb-4">{t("cta.badge")}</p>
                {/* 작은 상단 배지 문구다.
                    이전에는 "Ready to Create?" 같은 영어 문자열이 직접 들어 있었지만,
                    지금은 t("cta.badge")를 통해 현재 언어에 맞는 값으로 바뀐다. */}

                <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  {t("cta.title1")}<br /><span className="neon-text">{t("cta.title2")}</span>
                </h2>
                {/* 메인 CTA 제목이다.
                    한 줄 전체를 한 번에 번역하는 대신 title1 / title2로 나눠서 관리하고 있다.
                    그래서 두 번째 줄만 neon-text를 적용해서 시각적으로 강조할 수 있다. */}

                <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-10 text-lg">{t("cta.desc")}</p>
                {/* 설명 문구다.
                    이전에는 직접 영어 문장을 적었지만,
                    지금은 번역 키를 통해 문단도 다국어 대응이 되도록 바뀌었다. */}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* 버튼 영역이다.
                      모바일에서는 세로, sm 이상에서는 가로로 정렬되도록 반응형으로 구성했다. */}

                  <Link href="/experience" className="glow-button text-base px-10 py-4">{t("cta.btn1")}</Link>
                  {/* 첫 번째 버튼은 Experience 데모 페이지로 이동한다.
                      HeroSection의 데모 버튼, Header의 Try Demo 버튼과 같은 목적의 진입점이다.
                      버튼 텍스트도 이제 t("cta.btn1")로 가져온다. */}

                  <Link href="/contact" className="px-10 py-4 rounded-xl border border-[var(--color-border-medium)] bg-transparent text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all duration-300 text-base font-semibold" style={{ fontFamily: "var(--font-display)" }}>{t("cta.btn2")}</Link>
                  {/* 두 번째 버튼은 문의 페이지로 이동한다.
                      CTASection은 결국 사용자를 /experience 또는 /contact 두 경로 중 하나로 보내는 역할을 한다.
                      이 버튼 문구도 t("cta.btn2")를 통해 다국어 대응이 되도록 바뀌었다. */}
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
// 정리하면 이 CTA 섹션은 구조 자체는 이전과 같지만,
// 텍스트를 직접 적는 방식에서 번역 키 기반 구조로 바뀌었다.
// 그래서 이제 배지, 제목, 설명, 버튼까지 전부 현재 언어 상태에 맞게 출력된다.