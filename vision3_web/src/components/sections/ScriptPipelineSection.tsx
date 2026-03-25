// vision3_web/src/components/sections/ScriptPipelineSection.tsx
"use client";

// 이 섹션은 Script Studio의 핵심 흐름을 설명하는 부분이다.
// 단순히 스크립트를 한 번 작성하는 것이 아니라,
// 초안 → 말투 변환 → 번역의 3단계로 정리되어 있다는 점을 강조한다.
// 앞의 OverviewSection에서 요약한 Script Studio를 여기서 더 구체적으로 풀어준다.
// 이전 버전과 비교하면, 지금은 문구를 직접 적지 않고
// 번역 함수 t(...)를 통해 가져오는 구조로 바뀌었다.

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowCard from "@/components/ui/GlowCard";
import { useLanguage } from "@/lib/i18n";
// GlowCard는 아래 분할 전략 카드들에 은은한 glow 효과를 줄 때 사용된다.
// useLanguage는 이 섹션 전체를 다국어 대응으로 바꾸기 위해 추가된 훅이다.

export default function ScriptPipelineSection() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이 섹션 안의 제목, 단계명, 입력/출력 라벨, 분할 전략 설명까지 모두 번역 키로 가져온다.

  const scriptStages = [
    { id: "S1", name: t("script.s1.name"), input: t("script.s1.input"), output: t("script.s1.output"), approval: t("script.s1.approval"), color: "#8b5cf6" },
    { id: "S2", name: t("script.s2.name"), input: t("script.s2.input"), output: t("script.s2.output"), approval: t("script.s2.approval"), color: "#ec4899" },
    { id: "S3", name: t("script.s3.name"), input: t("script.s3.input"), output: t("script.s3.output"), approval: t("script.s3.approval"), color: "#00d4ff" },
  ];
  // 스크립트 파이프라인의 3단계를 데이터로 정리한 배열이다.
  // 이전 버전에서는 컴포넌트 바깥에 영어 문자열로 들어 있었지만,
  // 지금은 번역 함수 t(...)를 써야 하므로 컴포넌트 내부에서 생성한다.
  // 단계명 S1, S2, S3은 뒤의 UseCasesSection에서도 그대로 참조된다.

  const splitStrategies = [
    { name: t("script.split1.name"), desc: t("script.split1.desc"), use: t("script.split1.use"), icon: "🎬" },
    { name: t("script.split2.name"), desc: t("script.split2.desc"), use: t("script.split2.use"), icon: "👁️" },
    { name: t("script.split3.name"), desc: t("script.split3.desc"), use: t("script.split3.use"), icon: "🏞️" },
  ];
  // 대사를 짧은 단위로 나눌 때 어떤 전략을 쓸 수 있는지 설명하는 데이터다.
  // 이전 버전에서는 description / useCase 키를 썼지만,
  // 지금은 번역 구조에 맞춰 desc / use라는 짧은 키로 바뀌었다.
  // 이 부분은 Script 단계이지만, 실제로는 VideoPipelineSection의 샷 구성과도 연결된다.

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-magenta)] opacity-[0.02] blur-[150px]" />
      {/* 배경색, grid 패턴, 흐린 마젠타 조명 레이어를 깔아 섹션 분위기를 만든다. */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("script.badge")} title={t("script.title")} subtitle={t("script.subtitle")} />
        {/* 이전에는 badge/title/subtitle을 영어 문자열로 직접 적었지만,
            지금은 전부 번역 키 기반으로 바뀌었다.
            즉, 섹션 제목 영역 전체가 현재 언어에 따라 자동으로 바뀐다. */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* 3단계 흐름 카드 */}

          {scriptStages.map((stage, i) => (
            <ScrollReveal key={stage.id} delay={i * 0.15}>
              <div className="relative h-full">
                {i < scriptStages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H11M11 7L7 3M11 7L7 11" stroke={stage.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/></svg>
                  </div>
                )}
                {/* md 이상 화면에서만 카드 사이 흐름을 화살표로 보여준다.
                    단계가 순서대로 이어진다는 점을 시각적으로 강조하는 장치다. */}

                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border" style={{ color: stage.color, borderColor: `${stage.color}30`, background: `${stage.color}10` }}>{stage.id}</span>
                    {/* S1, S2, S3를 색상 박스로 강조해서 단계 구분을 분명히 한다. */}

                    <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{stage.name}</h3>
                    {/* 단계 이름이다.
                        이전에는 영어 문자열이 직접 들어갔지만,
                        지금은 script.s?.name 번역 키를 통해 가져온다. */}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">{t("script.input")}</span>
                      <p className="text-sm text-[var(--color-text-secondary)]">{stage.input}</p>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">{t("script.output")}</span>
                      <p className="text-sm text-[var(--color-text-secondary)]">{stage.output}</p>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">{t("script.approvalLabel")}</span>
                      <p className="text-sm" style={{ color: stage.color }}>{stage.approval}</p>
                    </div>
                  </div>
                  {/* 이 구조는 "입력 → 생성 결과 → 사람 승인" 흐름을 카드 하나 안에서 보여준다.
                      이전에는 Input / Output / Approval 라벨을 직접 적었지만,
                      지금은 라벨까지 번역 키 기반으로 바뀌었다.
                      즉, WorkflowSection에서 설명한 공통 원칙을 Script에 맞게, 그리고 다국어로 구체화한 셈이다. */}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mb-10 text-center">
            <span className="tech-badge mb-4 inline-flex">
              <span className="glow-dot" style={{ width: 5, height: 5 }} />
              {t("script.splitBadge")}
            </span>

            <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3" style={{ fontFamily: "var(--font-display)" }}>{t("script.splitTitle")}</h3>

            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">{t("script.splitDesc")}</p>
          </div>
        </ScrollReveal>
        {/* 이 블록은 Script Studio가 단순 번역까지만 하는 게 아니라,
            긴 대사를 어떻게 장면 단위로 나눌지도 설계해 준다는 점을 보여준다.
            이전에는 배지/제목/설명 문구를 직접 적었지만,
            지금은 split 관련 문구도 전부 번역 키에서 가져온다. */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 분할 전략 카드 */}

          {splitStrategies.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <GlowCard>
                <div className="text-3xl mb-4">{s.icon}</div>

                <h4 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.name}</h4>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{s.desc}</p>

                <div className="px-3 py-1.5 rounded-lg bg-[var(--color-accent-purple)]/5 border border-[var(--color-accent-purple)]/15 inline-block">
                  <p className="text-xs text-[var(--color-accent-purple)]">{s.use}</p>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
        {/* GlowCard를 써서 일반 카드보다 조금 더 강조된 느낌으로 보여준다.
            각 전략은 대사 분할 시 어떤 상황에서 유용한지까지 함께 설명한다.
            이전 버전에서는 strategy.name / description / useCase를 썼지만,
            지금은 s.name / s.desc / s.use 구조로 바뀌었다. */}

        <ScrollReveal delay={0.2} className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {["Auto Split 8s", "Same Speaker Continue", "Partner Face Only", "Landscape Cut"].map((btn) => (
              <span key={btn} className="px-4 py-2 rounded-lg border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] text-sm text-[var(--color-text-secondary)] font-medium">[{btn}]</span>
            ))}
          </div>
        </ScrollReveal>
        {/* 마지막은 실제 제품 안에서 이런 기능이 버튼이나 프리셋 형태로 보일 수 있다는 예시다.
            이전 버전에서는 "Auto Split 10min"이었지만,
            최신 코드에서는 "Auto Split 8s"로 바뀌어 있다.
            즉, 개념 설명으로 끝나는 게 아니라 실제 UI에 가까운 감각을 보여주는 부분이다. */}
      </div>
    </section>
  );
}
// 정리하면 ScriptPipelineSection의 레이아웃과 역할은 이전과 거의 같지만,
// 제목 / 단계명 / 입력/출력/승인 라벨 / 분할 전략 문구가 전부
// 번역 키 기반으로 바뀌면서 다국어 대응 구조가 들어간 상태다.