// vision3_web/src/components/sections/StudioScreensSection.tsx
"use client";

// 이 섹션은 실제 제품 안에 어떤 화면들이 있는지를 보여주는 영역이다.
// 기능 설명보다는 "도구가 어떤 워크스페이스들로 구성되는가"를 시각적으로 전달한다.
// 홈 페이지에서는 Studio 관련 화면 구성을 보여주는 역할이고,
// Header의 /#studio 메뉴와 직접 연결되는 섹션이다.
// 이전 버전과 비교하면, 지금은 문구를 직접 적지 않고
// 번역 함수 t(...)를 통해 가져오는 구조로 바뀌었다.

import { motion } from "framer-motion";
// 카드 hover 시 아주 미세하게 확대되는 모션을 주기 위해 사용한다.

import SectionHeading from "@/components/ui/SectionHeading";
// 섹션 상단의 badge, title, subtitle를 공통 형식으로 보여주는 컴포넌트다.

import ScrollReveal from "@/components/ui/ScrollReveal";
// 카드들이 스크롤에 맞춰 순서대로 자연스럽게 나타나도록 감싸는 공통 애니메이션 래퍼다.

import { useLanguage } from "@/lib/i18n";
// 다국어 번역을 위한 훅이다.
// 이 섹션 안의 제목, 카드 이름, 보조 문구, 설명을 현재 언어에 맞게 가져온다.

export default function StudioScreensSection() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이전에는 영어 문자열을 직접 썼지만,
  // 지금은 화면 카드 전체가 번역 키 기반으로 바뀌어 있다.

  const screens = [
    { name: t("screens.dashboard.name"), tag: t("screens.dashboard.tag"), desc: t("screens.dashboard.desc"), icon: "📊", color: "#00d4ff", size: "large" },
    { name: t("screens.project.name"), tag: t("screens.project.tag"), desc: t("screens.project.desc"), icon: "🏠", color: "#8b5cf6", size: "medium" },
    { name: t("screens.character.name"), tag: t("screens.character.tag"), desc: t("screens.character.desc"), icon: "👤", color: "#ec4899", size: "medium" },
    { name: t("screens.script.name"), tag: t("screens.script.tag"), desc: t("screens.script.desc"), icon: "📝", color: "#a855f7", size: "small" },
    { name: t("screens.scene.name"), tag: t("screens.scene.tag"), desc: t("screens.scene.desc"), icon: "🎬", color: "#f43f5e", size: "small" },
    { name: t("screens.render.name"), tag: t("screens.render.tag"), desc: t("screens.render.desc"), icon: "⚙️", color: "#10b981", size: "small" },
    { name: t("screens.asset.name"), tag: t("screens.asset.tag"), desc: t("screens.asset.desc"), icon: "🗂️", color: "#0ea5e9", size: "medium" },
    { name: t("screens.export.name"), tag: t("screens.export.tag"), desc: t("screens.export.desc"), icon: "📦", color: "#f59e0b", size: "medium" },
  ];
  // screens 배열은 이 섹션의 카드 데이터를 모아둔 구조다.
  // 이전 버전에서는 컴포넌트 바깥에 5개 카드가 영어 문자열로 정의되어 있었지만,
  // 지금은 번역 함수 t(...)를 써야 하므로 컴포넌트 내부에서 생성한다.
  // 또 기존의 tagline / description 키가 tag / desc로 바뀌었고,
  // Script / Scene / Render 화면이 추가되면서 카드 수가 더 많아졌다.

  return (
    <section id="studio" className="relative py-32 overflow-hidden">
      {/* 헤더 메뉴 /#studio 앵커와 연결 */}
      {/* id="studio" 덕분에 Header의 Studio 메뉴를 누르면 이 섹션으로 스크롤 이동한다. */}

      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      {/* 배경색과 grid-bg 패턴은 globals.css에 정의된 전역 디자인 시스템과 연결된다. */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("screens.badge")} title={t("screens.title")} subtitle={t("screens.subtitle")} />
        {/* 이 섹션의 제목 영역이다.
            앞쪽 OverviewSection이나 WorkflowSection처럼 같은 제목 컴포넌트를 재사용해서
            홈 전체의 제목 톤을 통일하고 있다.
            이전에는 영어 문자열을 직접 넣었지만,
            지금은 badge / title / subtitle 전부 번역 키에서 가져온다. */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* 벤토형 그리드 레이아웃 */}
          {/* auto-rows-[180px]를 줘서 카드 기본 높이를 맞추고,
              size에 따라 col-span / row-span을 달리해서 벤토 레이아웃처럼 보이게 만든다. */}

          {screens.map((screen, i) => {
            const spanClass = screen.size === "large" ? "md:col-span-2 md:row-span-2" : screen.size === "medium" ? "md:col-span-2 lg:col-span-2" : "md:col-span-1";
            // 카드 크기별 span 규칙
            // large는 큰 메인 카드처럼 2칸 x 2칸을 차지하고,
            // medium은 가로로 더 넓게 차지하도록 설계했다.
            // small은 기본 한 칸짜리 카드처럼 들어간다.
            // 이전 버전에는 large / medium만 있었지만,
            // 지금은 small이 추가되면서 더 다양한 벤토 배치가 가능해졌다.

            return (
              <ScrollReveal key={i} delay={i * 0.06} className={spanClass}>
                {/* 카드가 한꺼번에 뜨지 않고 순서대로 살짝 늦게 등장하도록 delay를 나눠 준다.
                    지금은 이름도 번역값이기 때문에 key는 index를 사용하고 있다. */}

                <motion.div whileHover={{ scale: 1.01 }} className="glass-card p-6 h-full flex flex-col justify-between group cursor-default relative overflow-hidden">
                  {/* glass-card는 globals.css의 공통 카드 스타일과 연결된다.
                      group을 줘서 내부 hover 효과를 함께 묶고,
                      overflow-hidden으로 안쪽 glow가 카드 바깥으로 튀지 않게 한다. */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(ellipse at 30% 30%, ${screen.color}08, transparent 70%)` }} />
                  {/* hover 시 카드 안쪽에 은은한 glow가 들어온다.
                      각 카드마다 screen.color를 이용해 다른 glow 색을 넣는다.
                      그래서 카드 종류를 색감만으로도 구분하기 쉽다. */}

                  <div className="relative z-10">
                    {/* 실제 텍스트와 아이콘 내용은 glow 레이어보다 위에 올라오게 z-10을 준다. */}

                    <div className="flex items-start justify-between mb-3">
                      <div className="text-2xl">{screen.icon}</div>
                      {/* 왼쪽에는 이모지 아이콘을 두어 화면 성격을 직관적으로 보여준다. */}

                      <div className="w-2 h-2 rounded-full opacity-60" style={{ background: screen.color }} />
                      {/* 오른쪽 작은 점은 장식이면서도 카드의 대표 컬러를 한번 더 강조하는 역할이다. */}
                    </div>

                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>{screen.name}</h3>
                    {/* 화면 이름이다.
                        제목용 전역 폰트를 써서 다른 본문보다 더 또렷하게 보이게 한다.
                        이제 이 값도 번역 키에서 가져오기 때문에 현재 언어에 맞게 바뀐다. */}

                    <p className="text-xs font-medium mb-2" style={{ color: screen.color }}>{screen.tag}</p>
                    {/* 이전 버전의 tagline에 해당하는 한 줄 요약이다.
                        지금은 tag라는 키를 사용하고,
                        번역 키 기반으로 가져온다.
                        색을 카드별 대표 색으로 맞춰서 제목 바로 아래 보조 강조 역할을 한다. */}

                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{screen.desc}</p>
                    {/* 이전 버전의 description에 해당하는 설명 문단이다.
                        지금은 desc 키를 사용하고,
                        카드별 실제 역할을 현재 언어에 맞게 출력한다.
                        예를 들어 Character / Script / Scene / Render / Export 같은 워크스페이스가
                        전체 제작 흐름 안에서 어떻게 나뉘는지를 보여주는 역할을 한다. */}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// 정리하면 StudioScreensSection의 레이아웃과 역할은 이전과 비슷하지만,
// 제목 / 카드 이름 / 보조 문구 / 설명이 전부 번역 키 기반으로 바뀌었고,
// 카드 수도 늘어나면서 스튜디오 구조를 더 세분화해서 보여주게 된 상태다.