// vision3_web/src/components/sections/CharacterPipelineSection.tsx

"use client";

// 이 섹션은 Character Studio가 실제로 어떤 단계로 돌아가는지 설명하는 영역이다.
// 홈에서 캐릭터 생성이 단순 이미지 1장 생성이 아니라,
// 여러 단계를 거치면서 점점 완성도를 높여가는 파이프라인이라는 점을 보여준다.

import { motion } from "framer-motion";
// 중앙 아이콘 점이 등장할 때 scale 애니메이션을 주기 위해 사용한다.

import SectionHeading from "@/components/ui/SectionHeading";
// 섹션 상단의 badge, title, subtitle를 공통 형식으로 보여주는 컴포넌트다.
// 다른 섹션들과 제목 스타일을 통일하는 역할을 한다.

import ScrollReveal from "@/components/ui/ScrollReveal";
// 스크롤로 화면에 들어올 때 각 단계 카드가 자연스럽게 나타나게 해주는 공통 래퍼다.

import { useLanguage } from "@/lib/i18n";
// 다국어 번역을 위한 훅이다.
// 이 파일 안의 제목, 설명, 단계 이름 같은 문구들을
// 현재 선택된 언어에 맞게 가져오기 위해 사용한다.

export default function CharacterPipelineSection() {
  const { t } = useLanguage();
  // useLanguage 훅에서 번역 함수 t를 꺼낸다.
  // 이제 문자열을 직접 하드코딩하지 않고 t("키이름") 형태로 불러오는 구조다.

  const stages = [
    { id: "C1", name: t("char.c1.name"), batch: "20 images", desc: t("char.c1.desc"), icon: "👤" },
    { id: "C2", name: t("char.c2.name"), batch: "10–20 images", desc: t("char.c2.desc"), icon: "🎨" },
    { id: "C3", name: t("char.c3.name"), batch: "10–20 images", desc: t("char.c3.desc"), icon: "👔" },
    { id: "C4", name: t("char.c4.name"), batch: "10 images", desc: t("char.c4.desc"), icon: "🧍" },
    { id: "C5", name: t("char.c5.name"), batch: "5–10 images", desc: t("char.c5.desc"), icon: "✨" },
  ];
  // 이전 버전에서는 stages 배열이 컴포넌트 바깥에 있었고,
  // name / description이 영어 문자열로 직접 들어 있었다.
  // 지금은 t(...)를 써야 하므로 컴포넌트 안에서 stages를 만들고 있다.
  // 그래야 현재 언어 상태에 맞는 문구를 즉시 반영할 수 있다.
  // 또 description이라는 키 대신 desc라는 짧은 키를 쓰는 구조로 바뀌었다.

  return (
    <section className="relative py-32 overflow-hidden">
      {/* 섹션 전체 영역이다.
          py-32로 위아래 여백을 크게 주고,
          overflow-hidden으로 blur 배경이 바깥으로 튀지 않게 막는다. */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-cyan)] opacity-[0.02] blur-[150px]" />
      {/* 배경에 아주 흐린 cyan 빛을 깔아서 섹션 분위기를 만든다.
          실제 콘텐츠가 아니라 시각적인 깊이감을 주는 장식 레이어다. */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("char.badge")} title={t("char.title")} subtitle={t("char.subtitle")} />
        {/* 공통 제목 컴포넌트다.
            이전에는 badge/title/subtitle이 문자열로 직접 들어갔지만,
            지금은 전부 번역 키를 통해 가져오는 구조로 바뀌었다.
            즉, 이 섹션 제목도 현재 언어에 맞게 자동으로 바뀐다. */}

        <div className="relative max-w-5xl mx-auto">
          {/* 실제 5단계 카드를 타임라인 형태로 보여주는 본문 영역이다.
              max-w-5xl로 너무 넓어지지 않게 제한해서 읽기 쉽게 만든다. */}

          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"><div className="h-full step-line opacity-30" /></div>
          {/* 중앙 세로 라인이다.
              왼쪽/가운데 기준으로 흐름을 이어서
              전체 단계가 하나의 파이프라인처럼 보이게 만든다.
              step-line 스타일은 globals.css와 연결된다. */}

          {stages.map((stage, i) => {
            const isLeft = i % 2 === 0;
            // 짝수 index면 왼쪽, 홀수 index면 오른쪽처럼 번갈아 배치한다.
            // 그래서 타임라인이 단순 세로 목록이 아니라 좌우 교차 구조로 보인다.

            return (
              <ScrollReveal key={stage.id} delay={i * 0.1} direction={isLeft ? "left" : "right"}>
                {/* 각 단계 카드가 스크롤로 들어올 때 순차적으로 등장하도록 delay를 다르게 준다.
                    왼쪽 카드면 left 방향, 오른쪽 카드면 right 방향에서 들어오게 맞춘 구조다. */}

                <div className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* 단계 전체 한 줄 영역이다.
                      모바일에서는 세로 느낌에 가깝게 보이고,
                      md 이상에서는 좌우 교차 배치가 적용된다. */}

                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }} className="w-12 h-12 rounded-full border-2 border-[var(--color-accent-cyan)] bg-[var(--color-bg-primary)] flex items-center justify-center text-lg">{stage.icon}</motion.div>
                  </div>
                  {/* 타임라인 중앙의 원형 아이콘이다.
                      각 단계가 어디에 있는지 시각적으로 잡아주는 기준점 역할을 한다.
                      아이콘은 stages 배열 안의 icon 값을 그대로 사용한다. */}

                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? "md:pr-4 md:text-right" : "md:pl-4"}`}>
                    {/* 카드 본문 영역이다.
                        모바일에서는 중앙선 오른쪽으로 밀려서 보이고,
                        데스크톱에서는 왼쪽/오른쪽 절반 폭으로 나뉘어 배치된다. */}

                    <div className="glass-card p-6">
                      {/* 카드의 기본 스타일은 globals.css의 glass-card와 연결된다.
                          그래서 이 섹션만 따로 꾸미는 게 아니라
                          사이트 전체 카드 톤을 공통으로 가져간다. */}

                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                        {/* 카드 상단의 단계 id와 제목을 한 줄로 묶는 영역이다.
                            왼쪽 배치 카드일 때는 텍스트 정렬도 오른쪽으로 맞춘다. */}

                        <span className="text-xs font-mono font-bold neon-text">{stage.id}</span>
                        {/* C1, C2 같은 단계 id를 강조해서 보여준다.
                            neon-text 스타일은 globals.css와 연결된다. */}

                        <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{stage.name}</h3>
                        {/* 단계 이름이다.
                            이전에는 영어 문자열이 직접 들어갔지만,
                            지금은 t("char.c?.name")을 통해 가져온 번역값이 들어간다. */}
                      </div>

                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{stage.desc}</p>
                      {/* 각 단계가 실제로 어떤 작업인지 설명하는 문단이다.
                          이전에는 stage.description을 썼지만,
                          지금은 번역 구조에 맞춰 stage.desc를 쓰는 형태로 바뀌었다. */}

                      <div className={`flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                        {/* 카드 하단의 보조 태그 영역이다.
                            왼쪽 카드일 때는 이 부분도 오른쪽 정렬로 맞춘다. */}

                        <span className="tech-badge"><span className="glow-dot" style={{ width: 5, height: 5 }} />{t("char.batch")}: {stage.batch}</span>
                        {/* 배치 수를 보여주는 태그다.
                            이전에는 "Batch"라는 영어 문자열을 직접 썼지만,
                            지금은 t("char.batch")를 통해 번역된 라벨을 붙인다. */}

                        <span className="tech-badge">{t("char.approval")}</span>
                        {/* 승인 필요 태그도 마찬가지로 번역 키를 통해 가져온다.
                            즉, 이제 이 섹션 안의 작은 태그 문구까지 전부 다국어 대응이 된다. */}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                  {/* 카드가 없는 쪽에도 같은 폭의 빈 공간을 둬서
                      중앙 타임라인 기준 좌우 균형이 무너지지 않게 한다. */}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3} className="mt-16">
          {/* 메인 타임라인 아래에 추가 설명을 붙이는 보조 카드다.
              약간 늦게 등장하게 해서 메인 흐름을 먼저 보게 만든다. */}

          <div className="gradient-border max-w-3xl mx-auto">
            <div className="p-6 md:p-8 flex gap-4 items-start">
              {/* gradient-border는 강조용 카드 스타일이고,
                  max-w-3xl로 너무 넓지 않게 잡아서 읽기 쉬운 폭을 유지한다. */}

              <div className="shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent-purple)]/10 border border-[var(--color-accent-purple)]/20 flex items-center justify-center text-lg">🎯</div>
              {/* 왼쪽 아이콘 박스다.
                  이 카드는 타임라인 메인 단계가 아니라
                  캐릭터 일관성 유지라는 핵심 개념을 따로 강조하는 역할을 한다. */}

              <div>
                <h4 className="font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>{t("char.consistency.title")}</h4>
                {/* 보조 카드 제목도 이제 번역 키에서 가져온다. */}

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{t("char.consistency.desc")}</p>
                {/* 보조 카드 설명 역시 다국어 대응으로 바뀌었다.
                    이전에는 영어 문단이 직접 들어 있었지만,
                    지금은 consistency 관련 제목과 설명도 번역 리소스를 통해 관리한다.
                    즉, 이 섹션은 본문/태그/보조 설명까지 전부 번역 체계로 통일된 상태다. */}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}