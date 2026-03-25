// vision3_web/src/components/sections/VideoPipelineSection.tsx
"use client";

// 이 섹션은 Video Production이 어떤 샷 타입으로 구성되는지 설명한다.
// 즉, 영상 생성이 그냥 "영상 한 번 생성"이 아니라,
// 용도별 샷 단위로 쪼개서 관리되는 구조라는 점을 보여준다.
// OverviewSection의 Video Production 카드 내용을 실제 제작 구조로 풀어주는 역할이다.
// 이전 버전과 비교하면, 지금은 문구를 직접 적지 않고
// 번역 함수 t(...)를 통해 가져오는 구조로 바뀌었다.

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/i18n";
// useLanguage는 이 섹션 전체를 다국어 대응으로 바꾸기 위해 추가된 훅이다.

export default function VideoPipelineSection() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이 섹션 안의 제목, 샷 타입 이름, 입출력 라벨, 워크플로우 문구를 전부 현재 언어에 맞게 가져온다.

  const shotTypes = [
    { id: "V1", name: t("video.v1.name"), input: t("video.v1.input"), output: t("video.v1.output"), color: "#00d4ff" },
    { id: "V2", name: t("video.v2.name"), input: t("video.v2.input"), output: t("video.v2.output"), color: "#0ea5e9" },
    { id: "V3", name: t("video.v3.name"), input: t("video.v3.input"), output: t("video.v3.output"), color: "#8b5cf6" },
    { id: "V4", name: t("video.v4.name"), input: t("video.v4.input"), output: t("video.v4.output"), color: "#a855f7" },
    { id: "V5", name: t("video.v5.name"), input: t("video.v5.input"), output: t("video.v5.output"), color: "#ec4899" },
    { id: "V6", name: t("video.v6.name"), input: t("video.v6.input"), output: t("video.v6.output"), color: "#f43f5e" },
    { id: "V7", name: t("video.v7.name"), input: t("video.v7.input"), output: t("video.v7.output"), color: "#10b981" },
  ];
  // 영상 생성에서 사용하는 샷 타입 데이터다.
  // 이전 버전에서는 컴포넌트 바깥에 영어 문자열로 정의되어 있었지만,
  // 지금은 번역 함수 t(...)를 써야 하므로 컴포넌트 내부에서 생성한다.
  // V1~V7 명칭은 UseCasesSection에서도 그대로 다시 참조된다.

  const wf = [
    { label: t("video.wf1"), desc: t("video.wf1.desc") },
    { label: t("video.wf2"), desc: t("video.wf2.desc") },
    { label: t("video.wf3"), desc: t("video.wf3.desc") },
    { label: t("video.wf4"), desc: t("video.wf4.desc") },
  ];
  // 전형적인 대화 씬이 어떤 순서로 생성되는지 보여주는 간단한 흐름 데이터다.
  // 이전 버전의 workflowSteps가 현재는 wf라는 짧은 이름으로 바뀌었다.
  // label / desc 역시 번역 키에서 가져온다.

  const promptFields = [
    { field: "Shot Type", example: "Wide / OTS / ECU / Landscape" },
    { field: "Camera", example: "Locked-off / Static" },
    { field: "Action", example: "Sit / Stand / Walk + continuity" },
    { field: "Emotion", example: "Emotion preset + narrative text" },
    { field: "Dialogue", example: "Dialogue mode / Silent mode" },
  ];
  // Shot Prompt Builder에서 보여줄 입력 필드 예시 데이터다.
  // 즉, 영상 생성이 단순 자연어 한 줄이 아니라 구조화된 필드 기반으로도 만들 수 있음을 보여준다.
  // 이 부분은 아직 번역 키가 아니라 고정 예시 문자열을 그대로 쓰고 있다.

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-magenta)] opacity-[0.02] blur-[150px]" />
      {/* 왼쪽에 흐린 마젠타 포인트를 넣어서
          이 섹션 전용 분위기를 만든다.
          Character / Script / Video 섹션마다 다른 컬러 기조를 주는 구조다. */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("video.badge")} title={t("video.title")} subtitle={t("video.subtitle")} />
        {/* 이전에는 영어 문자열을 직접 넣었지만,
            지금은 badge / title / subtitle 전부 번역 키 기반으로 바뀌었다.
            즉, 섹션 제목 영역 전체가 현재 언어에 따라 자동으로 바뀐다. */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {/* 샷 타입 전체 목록
              모바일에서는 1열,
              sm 이상에서는 2열,
              lg 이상에서는 4열로 보이도록 반응형 그리드를 잡아둔 구조다. */}

          {shotTypes.map((shot, i) => (
            <ScrollReveal key={shot.id} delay={i * 0.08}>
              <motion.div whileHover={{ y: -3 }} className="glass-card p-5 h-full cursor-default">
                {/* 샷 타입 카드를 하나씩 렌더링한다.
                    hover 시 아주 살짝 떠오르게 해서 카드 반응성을 준다. */}

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded" style={{ background: `${shot.color}15`, color: shot.color }}>{shot.id}</span>
                  {/* V1, V2 같은 샷 id를 컬러 태그처럼 보여준다. */}

                  <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${shot.color}30, transparent)` }} />
                  {/* 오른쪽 얇은 라인을 이어서 카드 헤더가 너무 끊겨 보이지 않게 만든다. */}
                </div>

                <h4 className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{shot.name}</h4>
                {/* 샷 이름이다.
                    이전에는 영어 문자열이 직접 들어갔지만,
                    지금은 video.v?.name 번역 키를 통해 가져온다. */}

                <div className="space-y-1.5">
                  <p className="text-xs text-[var(--color-text-muted)]"><span className="text-[var(--color-text-secondary)]">{t("video.in")}:</span> {shot.input}</p>

                  <p className="text-xs text-[var(--color-text-muted)]"><span className="text-[var(--color-text-secondary)]">{t("video.out")}:</span> {shot.output}</p>
                </div>
                {/* 각 샷이 어떤 입력을 받고 어떤 결과를 내는지 짧게 구조화해서 보여준다.
                    이전에는 "In:" / "Out:"을 직접 적었지만,
                    지금은 그 라벨도 번역 키 기반으로 바뀌었다.
                    즉, shotTypes는 단순 샷 이름 소개가 아니라 입출력 관계를 설명하는 카드다. */}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="gradient-border max-w-4xl mx-auto mb-16">
            <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-display)" }}>{t("video.workflowTitle")}</h3>

              <p className="text-sm text-[var(--color-text-muted)] text-center mb-8">{t("video.workflowDesc")}</p>
              {/* 전형적인 대화 씬 진행 순서
                  이 블록은 shotTypes 전체 목록 중에서도
                  실제 대화 씬에서는 어떤 순서로 많이 쓰이는지 예시 흐름을 보여준다.
                  제목과 설명도 이제 전부 번역 키에서 가져온다. */}

              <div className="flex flex-col md:flex-row items-stretch gap-4">
                {wf.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 flex-1">
                    <div className="flex-1">
                      <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-center">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] flex items-center justify-center text-xs font-bold mx-auto mb-2">{i + 1}</div>

                        <p className="text-sm font-semibold mb-0.5">{step.label}</p>
                        <p className="text-[11px] text-[var(--color-text-muted)]">{step.desc}</p>
                      </motion.div>
                    </div>

                    {i < wf.length - 1 && <div className="hidden md:block shrink-0 text-[var(--color-accent-cyan)] opacity-40">▸</div>}
                  </div>
                ))}
              </div>
              {/* 이전 버전의 workflowSteps가 지금은 wf로 바뀌었고,
                  key도 step.label 대신 index를 사용하고 있다.
                  각 단계는 순서 번호 + 설명 카드 형태로 보여준다. */}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{t("video.promptTitle")}</h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-2">{t("video.promptDesc")}</p>
            </div>
            {/* 프롬프트 빌더 설명
                이 제목과 설명도 이전에는 영어 문자열을 직접 넣었지만,
                지금은 번역 키 기반으로 바뀌었다. */}

            <div className="glass-card p-6 space-y-3">
              {promptFields.map((pf, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-center gap-4 p-3 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)]">
                  <span className="text-sm font-semibold text-white w-28 shrink-0">{pf.field}</span>
                  <span className="text-sm text-[var(--color-text-muted)] font-mono">{pf.example}</span>
                </motion.div>
              ))}
            </div>
            {/* promptFields를 순회하면서 실제 입력 UI처럼 보이게 만든다.
                사용자는 여기서 시스템이 어떤 정보 조합으로 영상을 생성하는지 감을 잡게 된다. */}

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["Pure Silent Scene", "Locked Camera", "Over-the-Shoulder", "Extreme Close-Up"].map((p) => (
                <span key={p} className="px-3 py-1.5 rounded-lg border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 text-xs text-[var(--color-accent-cyan)] font-medium">{p}</span>
              ))}
            </div>
            {/* 마지막 프리셋 태그들은 실제 UI 안에서 바로 누를 수 있는 빠른 선택 옵션처럼 보이게 하는 예시다.
                이 부분은 현재도 번역 키가 아니라 고정 문자열을 그대로 쓰고 있다. */}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
// 정리하면 VideoPipelineSection의 레이아웃과 역할은 이전과 거의 같지만,
// 제목 / 샷 이름 / 입출력 라벨 / 워크플로우 문구가 전부
// 번역 키 기반으로 바뀌면서 다국어 대응 구조가 들어간 상태다.