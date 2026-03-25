// vision3_web/src/components/sections/UseCasesSection.tsx
"use client";

// 이 섹션은 지금까지 설명한 기능들이 실제로 어떤 제작 시나리오에 쓰이는지 보여준다.
// 단순 기능 소개가 아니라, 실제 제작 흐름으로 묶어서 이해시키는 역할이다.
// 앞에서 본 Character / Script / Video / Export 개념들이
// 실제 작업 시 어떻게 연결되는지 마지막에 정리해 주는 섹션이다.
// 이전 버전과 비교하면, 지금은 문구를 직접 적지 않고
// 번역 함수 t(...)를 통해 가져오는 구조로 바뀌었다.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/i18n";
// useLanguage는 이 섹션 전체를 다국어 대응으로 바꾸기 위해 추가된 훅이다.

export default function UseCasesSection() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이 섹션 안의 제목, 시나리오 이름, 부제, 단계 설명까지 전부 번역 키로 가져온다.

  const [activeId, setActiveId] = useState<string | null>("s1");
  // 기본으로 첫 번째 시나리오를 열어둔다.
  // 이전 버전에서는 "scenario1"을 썼지만,
  // 지금은 id 체계가 간단한 "s1", "s2", "s3"로 바뀌었다.
  // activeId는 현재 펼쳐져 있는 아코디언 시나리오를 뜻한다.

  const useCases = [
    {
      id: "s1", title: t("uc.s1.title"), sub: t("uc.s1.sub"), icon: "🎭", color: "#00d4ff",
      steps: [
        { step: t("uc.s1.step1"), d: t("uc.s1.step1.d") },
        { step: t("uc.s1.step2"), d: t("uc.s1.step2.d") },
        { step: t("uc.s1.step3"), d: t("uc.s1.step3.d") },
        { step: t("uc.s1.step4"), d: t("uc.s1.step4.d") },
        { step: t("uc.s1.step5"), d: t("uc.s1.step5.d") },
      ],
    },
    {
      id: "s2", title: t("uc.s2.title"), sub: t("uc.s2.sub"), icon: "📱", color: "#8b5cf6",
      steps: [
        { step: t("uc.s2.step1"), d: t("uc.s2.step1.d") },
        { step: t("uc.s2.step2"), d: t("uc.s2.step2.d") },
        { step: t("uc.s2.step3"), d: t("uc.s2.step3.d") },
        { step: t("uc.s2.step4"), d: t("uc.s2.step4.d") },
      ],
    },
    {
      id: "s3", title: t("uc.s3.title"), sub: t("uc.s3.sub"), icon: "🌍", color: "#ec4899",
      steps: [
        { step: t("uc.s3.step1"), d: t("uc.s3.step1.d") },
        { step: t("uc.s3.step2"), d: t("uc.s3.step2.d") },
        { step: t("uc.s3.step3"), d: t("uc.s3.step3.d") },
      ],
    },
  ];
  // useCases 배열은 실제 활용 시나리오 데이터다.
  // 이전 버전에서는 컴포넌트 바깥에 영어 문자열로 정의되어 있었지만,
  // 지금은 번역 함수 t(...)를 써야 하므로 컴포넌트 내부에서 생성한다.
  // 또 subtitle → sub, detail → d처럼 키 이름도 더 짧게 바뀌었다.
  // 흥미로운 점은 여기서 C1~C5, S1~S3, V1~V7 같은 용어를 다시 사용한다는 것이다.
  // 즉, 앞의 섹션들에서 설명한 파이프라인 개념을 여기서 실제 제작 흐름으로 재조합한다.

  return (
    <section id="usecases" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      {/* 배경은 다른 정보성 섹션들과 같은 톤으로 맞춘다.
          Footer의 Use Cases 링크도 이 id="usecases"와 연결될 수 있다. */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("uc.badge")} title={t("uc.title")} subtitle={t("uc.subtitle")} />
        {/* 이전에는 영어 문자열을 직접 넣었지만,
            지금은 배지 / 제목 / 설명 전부 번역 키 기반으로 바뀌었다.
            즉, 섹션 제목 영역 전체가 현재 언어에 따라 자동으로 바뀐다. */}

        <div className="max-w-4xl mx-auto">
          {/* 콘텐츠 폭을 너무 넓히지 않고 아코디언 읽기에 적당한 폭으로 제한한다. */}

          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.id} delay={i * 0.1}>
              <div className="mb-4">
                <motion.button onClick={() => setActiveId(activeId === uc.id ? null : uc.id)} className={`w-full text-left glass-card p-6 transition-all duration-300 ${activeId === uc.id ? "border-[var(--color-border-accent)]" : ""}`} whileHover={{ scale: 1.005 }}>
                  {/* 접히고 펼쳐지는 아코디언 버튼이다.
                      버튼 전체가 시나리오 카드 역할을 한다.
                      이미 열려 있는 카드를 다시 누르면 닫히고,
                      다른 카드를 누르면 그 카드가 열리는 구조다. */}

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: `${uc.color}10`, border: `1px solid ${uc.color}25` }}>{uc.icon}</div>
                    {/* 왼쪽 이모지 아이콘과 카드별 색상 박스로 시나리오 분위기를 구분한다. */}

                    <div className="flex-1">
                      <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{uc.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)]">{uc.sub}</p>
                    </div>
                    {/* 이전 버전에서는 subtitle 키를 썼지만,
                        지금은 sub 키를 사용한다.
                        둘 다 같은 역할로, 시나리오 제목 아래 짧은 보조 설명을 보여준다. */}

                    <motion.div animate={{ rotate: activeId === uc.id ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-[var(--color-text-muted)]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </motion.div>
                    {/* activeId에 따라 화살표가 뒤집히면서 열림/닫힘 상태를 직관적으로 보여준다. */}
                  </div>
                </motion.button>

                <AnimatePresence>
                  {activeId === uc.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      {/* 펼쳐진 상세 단계
                          높이를 0 ↔ auto로 바꿔서 아코디언이 부드럽게 열리고 닫히게 만든다. */}

                      <div className="pt-2 pl-4">
                        <div className="border-l-2 border-[var(--color-border-medium)] pl-6 py-2 space-y-4">
                          {uc.steps.map((step, si) => (
                            <motion.div key={si} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: si * 0.08 }} className="relative">
                              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 bg-[var(--color-bg-primary)]" style={{ borderColor: uc.color }} />
                              {/* 왼쪽 세로 라인 위 점
                                  왼쪽 세로 라인과 작은 점을 써서
                                  단계들이 하나의 진행 흐름처럼 보이게 만든다. */}

                              <h4 className="text-sm font-semibold mb-1">Step {si + 1}: {step.step}</h4>

                              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.d}</p>
                              {/* 이전 버전에서는 detail 키를 썼지만,
                                  지금은 d라는 짧은 키를 사용한다.
                                  이 문단에는 앞 섹션에서 설명한 파이프라인 용어들이 실제로 들어간다.
                                  그래서 이 섹션은 "정리된 요약 예시" 역할을 한다고 볼 수 있다. */}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
// 정리하면 UseCasesSection의 구조와 역할은 이전과 거의 같지만,
// 제목 / 시나리오 이름 / 부제 / 단계 설명이 전부 번역 키 기반으로 바뀌었고,
// 데이터 키 이름도 subtitle → sub, detail → d처럼 더 간단하게 바뀐 상태다.