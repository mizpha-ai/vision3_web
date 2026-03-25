// vision3_web/src/components/sections/WorkflowSection.tsx
"use client";

// 이 섹션은 플랫폼의 공통 작업 방식이 어떻게 돌아가는지 설명하는 영역이다.
// Character / Script / Video 어느 파이프라인을 들어가더라도
// 결국 "대량 생성 → 사람 검수 → 다음 단계 진행" 구조를 공유한다는 점을 보여준다.
// Header의 Technology 메뉴와도 연결되는 핵심 설명 섹션이다.
// 이전 버전과 비교하면, 지금은 문구를 직접 적지 않고
// 번역 함수 t(...)를 통해 가져오는 구조로 바뀌었다.

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/i18n";
// useLanguage는 이 섹션 전체를 다국어 대응으로 바꾸기 위해 추가된 훅이다.

export default function WorkflowSection() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이 섹션 안의 제목, 단계명, 설명, 상태 머신 라벨을 전부 현재 언어에 맞게 가져온다.

  const steps = [
    { num: "01", title: t("workflow.step1.title"), desc: t("workflow.step1.desc"), detail: t("workflow.step1.detail"), icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>), color: "#00d4ff" },
    { num: "02", title: t("workflow.step2.title"), desc: t("workflow.step2.desc"), detail: t("workflow.step2.detail"), icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>), color: "#8b5cf6" },
    { num: "03", title: t("workflow.step3.title"), desc: t("workflow.step3.desc"), detail: t("workflow.step3.detail"), icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>), color: "#ec4899" },
  ];
  // steps 배열은 플랫폼 공통 워크플로우를 3단계로 설명하기 위한 데이터다.
  // 이전 버전에서는 컴포넌트 바깥에 영어 문자열로 정의되어 있었지만,
  // 지금은 번역 함수 t(...)를 써야 하므로 컴포넌트 내부에서 생성한다.
  // 또 기존의 description 키가 desc로 바뀌어 더 짧은 형태를 사용한다.
  // 여기서 설명하는 3단계 원칙은 Character / Script / Video / Quality 섹션 전부의 공통 기반이다.

  const sm = [
    { label: t("workflow.sm.draft"), status: "DRAFT" },
    { label: t("workflow.sm.running"), status: "RUNNING" },
    { label: t("workflow.sm.review"), status: "NEEDS REVIEW" },
    { label: t("workflow.sm.approved"), status: "APPROVED" },
    { label: t("workflow.sm.next"), status: "NEXT" },
  ];
  // 이전 버전의 stateMachine에 해당하는 데이터다.
  // 지금은 이름이 sm으로 더 짧아졌고,
  // 사람이 읽는 label 값만 번역 키를 통해 현재 언어에 맞게 바뀐다.
  // status 값은 시스템 상태처럼 보이도록 그대로 영문 고정값을 유지한다.

  return (
    <section id="technology" className="relative py-32 overflow-hidden">
      {/* 이 섹션은 헤더 메뉴의 /#technology 앵커와 연결된다. */}
      {/* 즉, Header의 Technology 메뉴를 누르면 이 섹션으로 스크롤 이동한다. */}

      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-cyan)] opacity-[0.02] blur-[150px]" />
      {/* 배경 레이어
          배경색 + grid 패턴 + 오른쪽 cyan 계열 빛 번짐으로
          정보성 섹션다운 분위기를 만든다. */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("workflow.badge")} title={t("workflow.title")} subtitle={t("workflow.subtitle")} />
        {/* 이 제목은 뒤에 이어질 Character / Script / Video 섹션을 이해하는 공통 전제 역할을 한다.
            이전에는 영어 문자열을 직접 넣었지만,
            지금은 badge / title / subtitle 전부 번역 키 기반으로 바뀌었다. */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* 핵심 3단계 카드 */}

          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.15}>
              <div className="relative glass-card p-8 h-full group">
                <div className="text-6xl font-extrabold opacity-[0.06] absolute top-4 right-6" style={{ fontFamily: "var(--font-display)", color: step.color }}>{step.num}</div>
                {/* 카드 오른쪽 위의 큰 숫자는 장식이면서도 단계 순서를 강조해 준다. */}

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border" style={{ borderColor: `${step.color}30`, background: `${step.color}10`, color: step.color }}>{step.icon}</div>
                {/* 각 카드마다 다른 색상과 아이콘을 써서 단계 성격을 구분한다. */}

                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                {/* 단계 제목이다.
                    이전에는 영어 문자열이 직접 들어갔지만,
                    지금은 workflow.step?.title 번역 키를 통해 가져온다. */}

                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">{step.desc}</p>
                {/* 이전 버전의 step.description에 해당하는 설명 문단이다.
                    지금은 step.desc 키를 사용한다. */}

                <p className="text-xs font-mono px-3 py-1.5 rounded-lg inline-block" style={{ background: `${step.color}10`, color: step.color, border: `1px solid ${step.color}25` }}>{step.detail}</p>
                {/* detail은 카드 설명의 핵심만 짧게 정리해 주는 보조 태그다.
                    예를 들어 01은 배치 크기,
                    02는 사람 검수 액션,
                    03은 감지 플래그 내용을 요약한다.
                    이 값도 이제 번역 키에서 가져오므로 현재 언어에 맞게 바뀐다. */}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="gradient-border max-w-5xl mx-auto">
            <div className="p-8 md:p-10">
              <h3 className="text-lg font-bold mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>{t("workflow.stateMachine")}</h3>
              {/* 상태 머신 시각화 제목이다.
                  이전에는 "Workflow State Machine"을 직접 적었지만,
                  지금은 번역 키에서 가져온다. */}

              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {sm.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-3 md:gap-4">
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className="flex flex-col items-center gap-1.5">
                      <div className="px-4 py-2 rounded-lg border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] text-sm font-semibold text-white whitespace-nowrap">{s.label}</div>

                      <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">{s.status}</span>
                    </motion.div>
                    {/* label은 사람이 읽는 용도,
                        status는 시스템 상태값처럼 보이게 따로 분리해서 보여준다.
                        label만 번역되고 status는 영문 상태값 그대로 유지된다. */}

                    {i < sm.length - 1 && (
                      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.15, duration: 0.3 }} className="hidden sm:block">
                        <svg width="32" height="12" viewBox="0 0 32 12" fill="none"><path d="M0 6H28M28 6L22 1M28 6L22 11" stroke="var(--color-accent-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/></svg>
                      </motion.div>
                    )}
                    {/* 상태 사이 연결 화살표
                        i가 마지막이 아닐 때만 화살표를 보여줘서
                        단계가 순서대로 이어진다는 점을 시각적으로 표현한다. */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        {/* 이 상태 머신은 위 3단계 원칙을 좀 더 시스템적인 흐름으로 다시 보여주는 블록이다.
            즉, 개념 설명을 실제 UI/작업 상태처럼 보이게 바꿔 이해를 돕는 역할을 한다.
            이전 버전의 stateMachine 배열이 현재는 sm으로 바뀌었지만 역할은 같다. */}
      </div>
    </section>
  );
}
// 정리하면 WorkflowSection의 레이아웃과 역할은 이전과 거의 같지만,
// 제목 / 단계명 / 설명 / 상태 머신 라벨이 전부
// 번역 키 기반으로 바뀌었고, 데이터 키 이름도 description → desc처럼 조금 단순해진 상태다.