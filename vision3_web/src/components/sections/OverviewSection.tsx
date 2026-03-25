// vision3_web/src/components/sections/OverviewSection.tsx

"use client";

// 이 섹션은 홈에서 Hero 다음에 나오는 "플랫폼 전체 개요" 영역이다.
// 사이트가 제공하는 기능을 세 갈래로 요약해서 보여주기 때문에,
// 처음 보는 사람이 서비스 구조를 빠르게 이해하는 데 중요한 역할을 한다.
// page.tsx에서 HeroSection 바로 다음에 배치되어 있어서,
// 사용자가 처음 서비스의 큰 구조를 이해하는 첫 본문 섹션이라고 보면 된다.
// 이전 버전과 비교하면, 지금은 문구를 직접 적지 않고
// 번역 함수 t(...)를 통해 가져오는 구조로 바뀌었다.

import SectionHeading from "@/components/ui/SectionHeading";
// 공통 섹션 제목 컴포넌트다.
// badge, title, subtitle 조합을 통일해서 보여준다.
// OverviewSection, WorkflowSection, QualitySection 같은 다른 본문 섹션들과도 연결되는 공통 UI다.

import ScrollReveal from "@/components/ui/ScrollReveal";
// 스크롤 진입 시 부드럽게 나타나는 공통 애니메이션 래퍼다.
// 이 섹션 안에서는 핵심 원칙 배너와 카드들이 자연스럽게 등장하도록 감싸는 역할을 한다.

import GlowCard from "@/components/ui/GlowCard";
// 카드 뒤에 glow 효과를 넣는 공통 카드 래퍼다.
// 여기서는 3개의 핵심 pillar 카드에 공통 카드 스타일을 주면서,
// 각 카드별 색상 차이도 줄 수 있게 연결된다.

import { useLanguage } from "@/lib/i18n";
// 다국어 번역을 위한 훅이다.
// 이 섹션 안의 제목, 원칙 문구, 카드 제목, 설명, 기능 목록을
// 현재 언어에 맞게 가져오는 데 사용한다.

export default function OverviewSection() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이전에는 문자열을 직접 썼지만,
  // 지금은 대부분의 문구를 번역 키로 관리하는 구조다.

  const pillars = [
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#cg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /><defs><linearGradient id="cg" x1="4" y1="3" x2="20" y2="21"><stop stopColor="#00d4ff"/><stop offset="1" stopColor="#8b5cf6"/></linearGradient></defs></svg>),
      title: t("overview.pillar1.title"), desc: t("overview.pillar1.desc"),
      features: [t("overview.pillar1.f1"), t("overview.pillar1.f2"), t("overview.pillar1.f3"), t("overview.pillar1.f4"), t("overview.pillar1.f5")],
      color: "var(--color-accent-cyan)",
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#sg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /><defs><linearGradient id="sg" x1="4" y1="2" x2="20" y2="22"><stop stopColor="#8b5cf6"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs></svg>),
      title: t("overview.pillar2.title"), desc: t("overview.pillar2.desc"),
      features: [t("overview.pillar2.f1"), t("overview.pillar2.f2"), t("overview.pillar2.f3"), t("overview.pillar2.f4"), t("overview.pillar2.f5")],
      color: "var(--color-accent-purple)",
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#vg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /><path d="m10 9 5 3-5 3V9z" /><defs><linearGradient id="vg" x1="2" y1="3" x2="22" y2="21"><stop stopColor="#ec4899"/><stop offset="1" stopColor="#00d4ff"/></linearGradient></defs></svg>),
      title: t("overview.pillar3.title"), desc: t("overview.pillar3.desc"),
      features: [t("overview.pillar3.f1"), t("overview.pillar3.f2"), t("overview.pillar3.f3"), t("overview.pillar3.f4"), t("overview.pillar3.f5")],
      color: "var(--color-accent-magenta)",
    },
  ];
  // pillars 배열은 이 섹션의 핵심 데이터다.
  // 이전 버전에서는 컴포넌트 바깥에 영어 문자열로 들어 있었지만,
  // 지금은 번역 함수 t(...)를 써야 하므로 컴포넌트 내부에서 생성한다.
  // 또 description 키 대신 desc라는 짧은 키를 쓰는 구조로 바뀌었다.
  // features도 이제 직접 문자열 배열이 아니라 번역 키 배열로 구성된다.

  return (
    <section className="relative py-32 overflow-hidden">
      {/* 이 섹션 전체를 감싸는 루트 영역이다.
          relative는 내부 absolute 장식 배경의 기준점이 되고,
          py-32는 위아래 여백을 크게 주어 섹션을 넉넉하게 보이게 한다.
          overflow-hidden은 blur 배경이 바깥으로 넘치지 않게 자른다. */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-accent-purple)] opacity-[0.02] blur-[150px]" />
      {/* 위쪽 중앙에 아주 흐린 보라색 광원을 깔아서 배경이 너무 비어 보이지 않게 한다.
          이 레이어는 실제 콘텐츠가 아니라 배경 분위기용 장식이다. */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 섹션 내부 공통 컨테이너다.
            다른 홈 섹션들과 같은 폭 정렬을 맞추기 위해 max-w-7xl을 사용한다. */}

        <SectionHeading badge={t("overview.badge")} title={t("overview.title")} subtitle={t("overview.subtitle")} />
        {/* 이 섹션의 공통 제목 영역이다.
            이전에는 영어 문자열을 직접 넣었지만,
            지금은 badge / title / subtitle 전부 번역 키로 가져온다.
            즉, 제목 영역 전체가 다국어 대응 구조로 바뀐 상태다. */}

        <ScrollReveal delay={0.1} className="mb-16">
          {/* 핵심 원칙을 한 문장으로 보여주는 배너 영역이다.
              카드들보다 먼저, 혹은 거의 같이 눈에 들어오도록 배치되어 있다. */}

          <div className="gradient-border max-w-4xl mx-auto">
            <div className="p-8 text-center">
              {/* gradient-border는 globals.css에 정의된 공통 강조 카드 스타일이다.
                  max-w-4xl로 폭을 제한해서 한 문장 원칙 문구가 너무 길게 퍼지지 않게 잡았다. */}

              <p className="text-sm text-[var(--color-accent-cyan)] font-semibold uppercase tracking-widest mb-3">{t("overview.principle")}</p>
              {/* 작은 상단 레이블이다.
                  이전에는 "Core Principle" 같은 영어 문자열을 직접 썼지만,
                  지금은 번역 키에서 가져온다. */}

              <p className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{t("overview.principleQuote")}</p>
              {/* 이 문장이 OverviewSection에서 가장 중요한 요약 문장이다.
                  뒤에 나오는 WorkflowSection의 핵심 메시지와 바로 연결된다.
                  원칙 문구 자체도 이제 다국어 대응이 된다. */}

              <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto">{t("overview.principleDesc")}</p>
              {/* 위 핵심 문장을 조금 더 풀어서 설명하는 보조 문단이다.
                  이전에도 같은 역할이었지만,
                  지금은 principleDesc 번역 키에서 내용을 가져온다. */}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* pillars 3개를 카드로 보여주는 그리드 영역이다.
              모바일에서는 1열,
              md 이상에서는 3열로 나뉘어 보이게 설계했다. */}

          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              {/* 이전 버전에서는 key로 pillar.title을 썼지만,
                  지금은 title도 번역값이라 index를 key로 쓰고 있다.
                  각 카드가 한꺼번에 뜨지 않고 순서대로 약간씩 늦게 등장한다. */}

              <GlowCard glowColor={`${pillar.color}20`} className="h-full">
                {/* GlowCard는 카드 뒤쪽 발광 효과를 담당하는 공통 래퍼다.
                    pillar.color 값에 따라 카드마다 glow 분위기를 다르게 만든다.
                    즉, Character / Script / Video 카드가 색감만 봐도 구분되게 만든 구조다. */}

                <div className="mb-5">{pillar.icon}</div>
                {/* 아이콘은 pillars 배열 안에 미리 JSX 형태로 들어 있는 값을 그대로 출력한다.
                    실제 아이콘 모양은 데이터 쪽에서 관리하는 구조다. */}

                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{pillar.title}</h3>
                {/* 카드 제목이다.
                    이제 각 카드 제목도 번역 키에서 가져온 문자열을 사용한다. */}

                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">{pillar.desc}</p>
                {/* 이 문단은 각 pillar가 어떤 역할을 하는지 한 번에 이해시키는 요약 설명이다.
                    이전 버전의 pillar.description에 해당하는 내용이
                    지금은 pillar.desc로 바뀌어 들어간다. */}

                <ul className="space-y-2.5">
                  {pillar.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: pillar.color }} />
                      <span className="text-[var(--color-text-secondary)]">{f}</span>
                    </li>
                  ))}
                </ul>
                {/* features 배열을 순회해서 기능 목록을 만든다.
                    각 기능 문구도 전부 번역 키에서 가져오기 때문에
                    리스트 전체가 현재 언어에 따라 달라질 수 있다.
                    앞의 작은 점 색도 pillar.color를 그대로 써서 카드 전체 색감과 통일한다. */}
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
// 정리하면 OverviewSection의 레이아웃과 역할은 이전과 거의 같지만,
// 제목 / 원칙 문구 / 카드 제목 / 설명 / 기능 목록까지 전부
// 번역 키 기반으로 바뀌면서 다국어 대응 구조가 들어간 상태다.