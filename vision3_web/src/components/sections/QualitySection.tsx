// vision3_web/src/components/sections/QualitySection.tsx
"use client";

// 이 섹션은 생성 결과물의 품질 관리 구조를 설명한다.
// 단순히 많이 생성하는 것에서 끝나지 않고,
// 점수화 / 오류 감지 / 재시도 정책까지 있다는 점을 보여주는 역할이다.
// 앞의 WorkflowSection에서 말한 "Auto Rank + Auto Retry"를
// 실제 품질 관리 UI처럼 풀어서 보여주는 섹션이라고 보면 된다.
// 이전 버전과 비교하면, 지금은 문구를 직접 적지 않고
// 번역 함수 t(...)를 통해 가져오는 구조로 바뀌었다.

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/lib/i18n";
// AnimatedCounter는 중앙 점수 숫자가 0부터 올라가는 효과를 담당한다.
// useLanguage는 이 섹션 전체를 다국어 대응으로 바꾸기 위해 추가된 훅이다.

// 섹션 안에서만 쓰는 내부 보조 컴포넌트
// 원형 게이지를 그리고 가운데 점수를 카운터로 보여준다.
function QualityGauge({ label }: { label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // ref가 화면에 들어왔을 때만 원형 게이지와 숫자 애니메이션이 실행되게 한다.

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        {/* 원형 게이지 전체 크기를 정하는 래퍼다.
            relative를 기준으로 SVG와 중앙 숫자 레이어를 겹쳐 놓는다. */}

        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          {/* -rotate-90을 줘서 기본 시작점을 위쪽처럼 보이게 만든다.
              원형 progress UI에서 자주 쓰는 방식이다. */}

          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" strokeDasharray={`${Math.PI * 104}`} strokeDashoffset={`${Math.PI * 104 * 0.25}`} strokeLinecap="round" />
          {/* 뒤에 깔리는 연한 배경 원호다.
              실제 점수 원호가 얼마나 찼는지 비교할 수 있는 기준 역할을 한다. */}

          <motion.circle cx="60" cy="60" r="52" fill="none" stroke="url(#gauge-grad)" strokeWidth="8" strokeDasharray={`${Math.PI * 104}`} strokeLinecap="round" initial={{ strokeDashoffset: Math.PI * 104 }} animate={isInView ? { strokeDashoffset: Math.PI * 104 * 0.28 } : {}} transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} />
          {/* 실제 점수에 해당하는 원호다.
              strokeDashoffset 값을 줄여 가면서 원이 차오르는 것처럼 보이게 한다.
              isInView가 true일 때만 실행되므로 화면에 들어와야 애니메이션이 시작된다. */}

          <defs><linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00d4ff" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient></defs>
          {/* 점수 원호에 쓰이는 gradient 정의다.
              브랜드 컬러 계열인 cyan -> purple 흐름으로 맞췄다. */}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatedCounter target={92} className="text-4xl font-bold neon-text" duration={1.5} />
          <span className="text-xs text-[var(--color-text-muted)] mt-1">/100</span>
        </div>
        {/* 가운데 숫자는 AnimatedCounter를 써서 0부터 92까지 올라간다.
            즉, 이 섹션은 원형 progress 애니메이션과 숫자 카운팅 애니메이션이 함께 움직이는 구조다. */}
      </div>

      <p className="text-sm text-[var(--color-text-secondary)] mt-3">{label}</p>
      {/* 이전 버전에서는 "Quality Score Example" 문구를 직접 적었지만,
          지금은 바깥에서 label을 props로 받아서 출력한다.
          그래서 이 보조 컴포넌트도 다국어 문구를 자연스럽게 받을 수 있게 바뀌었다. */}
    </div>
  );
}

export default function QualitySection() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이 섹션 안의 제목, 설명, 플래그 이름, 재시도 정책까지 모두 번역 키를 사용한다.

  const flags = [
    { flag: t("qa.flag1.name"), desc: t("qa.flag1.desc"), type: "Image", color: "#f43f5e" },
    { flag: t("qa.flag2.name"), desc: t("qa.flag2.desc"), type: "Image", color: "#f59e0b" },
    { flag: t("qa.flag3.name"), desc: t("qa.flag3.desc"), type: "Image / Video", color: "#8b5cf6" },
    { flag: t("qa.flag4.name"), desc: t("qa.flag4.desc"), type: "Video", color: "#ec4899" },
  ];
  // 이전 버전의 detectionFlags에 해당하는 데이터다.
  // 지금은 컴포넌트 안에서 생성되며,
  // flag 이름과 설명을 번역 키로 가져오는 구조로 바뀌었다.
  // 또 description 키 대신 desc라는 짧은 키를 사용한다.

  const retries = [
    { title: t("qa.retry1.title"), desc: t("qa.retry1.desc") },
    { title: t("qa.retry2.title"), desc: t("qa.retry2.desc") },
    { title: t("qa.retry3.title"), desc: t("qa.retry3.desc") },
  ];
  // 이전 버전의 retryPolicies에 해당하는 데이터다.
  // 마찬가지로 title / description 문자열을 직접 적지 않고,
  // 번역 키 기반 title / desc 구조로 바뀌었다.

  return (
    <section id="quality" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-emerald)] opacity-[0.02] blur-[150px]" />
      {/* 오른쪽 위에 흐린 emerald 계열 배경 포인트를 넣어서 섹션 분위기를 만든다. */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("qa.badge")} title={t("qa.title")} subtitle={t("qa.subtitle")} />
        {/* 품질 관리도 별도 도구가 아니라 플랫폼 내부에 내장되어 있다는 점을 강조하는 제목이다.
            이전에는 영어 문자열을 직접 넣었지만,
            지금은 badge / title / subtitle 전부 번역 키 기반으로 바뀌었다. */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* 점수 게이지 + 오류 감지 목록
              좌우 2컬럼 구조다.
              왼쪽은 점수 시각화, 오른쪽은 오류 감지 목록으로 역할이 나뉜다. */}

          <ScrollReveal direction="left">
            <div className="gradient-border">
              <div className="p-8 flex flex-col items-center">
                <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>{t("qa.scoreTitle")}</h3>
                {/* 이전에는 "Automatic Quality Scoring"을 직접 적었지만,
                    지금은 qa.scoreTitle 번역 키를 쓴다. */}

                <QualityGauge label={t("qa.scoreLabel")} />
                {/* 내부 보조 컴포넌트를 여기서 실제로 사용한다.
                    이전 버전과 달리 label을 props로 넘겨서
                    게이지 하단 보조 문구도 번역값으로 출력한다. */}

                <p className="text-sm text-[var(--color-text-muted)] text-center mt-6 max-w-sm">{t("qa.scoreDesc")}</p>
                {/* 점수 설명 문단 역시 번역 키 기반으로 바뀌었다. */}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>{t("qa.flagsTitle")}</h3>
              {/* 오른쪽 컬럼 제목도 번역 키로 바뀌었다. */}

              {flags.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-4 flex items-start gap-4">
                  {/* 감지 항목들을 하나씩 카드처럼 출력한다.
                      delay를 다르게 줘서 순차적으로 등장하게 만든다.
                      이전에는 key로 flag 이름을 썼지만,
                      지금은 번역값을 쓰기 때문에 index를 key로 사용하고 있다. */}

                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: f.color }} />
                  {/* 왼쪽 작은 색 점은 항목 종류를 구분하는 시각 포인트다. */}

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold">{f.flag}</h4>
                      <span className="text-[10px] font-mono text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] px-2 py-0.5 rounded">{f.type}</span>
                    </div>

                    <p className="text-xs text-[var(--color-text-muted)]">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="gradient-border max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-lg font-bold mb-6 text-center" style={{ fontFamily: "var(--font-display)" }}>{t("qa.retryTitle")}</h3>
              {/* 재시도 정책 영역 제목도 번역 키 기반으로 바뀌었다. */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {retries.map((rp, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent-cyan)]/20 to-[var(--color-accent-purple)]/20 flex items-center justify-center mx-auto mb-3 text-sm font-bold neon-text">{i + 1}</div>

                    <h4 className="text-sm font-bold mb-1">{rp.title}</h4>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{rp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        {/* 이 부분은 "문제가 생겼을 때 플랫폼이 어떻게 다시 시도하는가"를 보여준다.
            앞의 flags가 문제 발견이라면,
            여기 retries는 문제 이후 처리 방식이라고 보면 된다.
            이전 버전의 retryPolicies가 번역 기반 retries로 바뀐 셈이다. */}

        <ScrollReveal delay={0.2} className="mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
              <span className="text-lg">🔗</span>
              <p className="text-sm text-[var(--color-text-secondary)]"><strong className="text-white">{t("qa.lineage")}</strong> {t("qa.lineageDesc")}</p>
            </div>
          </div>
        </ScrollReveal>
        {/* 마지막 보조 카드다.
            이전에는 "Asset Lineage Tracking:" 문구와 설명을 직접 적었지만,
            지금은 제목 부분과 설명 부분을 따로 번역 키에서 가져온다.
            즉, 운영 안정성과 관리 가능성을 강조하는 마무리 문장까지 다국어 대응이 된 상태다. */}
      </div>
    </section>
  );
}
// 정리하면 QualitySection의 레이아웃과 역할은 이전과 거의 같지만,
// 제목 / 점수 문구 / 플래그 / 재시도 정책 / 라인리지 문구가 전부
// 번역 키 기반으로 바뀌면서 다국어 대응 구조가 들어간 상태다.