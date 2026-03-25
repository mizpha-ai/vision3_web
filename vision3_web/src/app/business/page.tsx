// vision3_web/src/app/business/page.tsx
"use client";

// 이 파일은 /business 메인 페이지 엔트리다.
// B2B 소개 랜딩 역할을 하며,
// hero, 파트너 로고, 소개, 프로세스, 산업군, CTA까지 한 페이지로 구성한다.
// business 영역의 첫 화면이기 때문에 Vision3 Business가 무엇을 제공하는지
// 빠르게 이해시키는 데 초점이 맞춰져 있다.

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import ScrollReveal from "@/components/ui/ScrollReveal";
// ScrollReveal은 섹션 등장 애니메이션을 통일하기 위한 공통 UI다.

const processIcons = ["💬", "🎯", "⚡", "📦"];
// process 단계 카드에 들어갈 아이콘 목록

const featureIcons = ["🤖", "👤", "🎨", "🔄", "🌐", "🛡️"];
// about/why 카드에 들어갈 아이콘 목록

const industryList = [
  { icon: "🎮", key: "game" },
  { icon: "💄", key: "beauty" },
  { icon: "📚", key: "edu" },
  { icon: "👗", key: "fashion" },
  { icon: "🎬", key: "ent" },
  { icon: "🏦", key: "finance" },
  { icon: "👥", key: "hr" },
  { icon: "🏥", key: "health" },
];
// 산업군 카드 목록이다.
// key는 번역 키와 packages 페이지 연결에 같이 사용된다.

const partnerLogos = [
  { file: "cjenm", name: "CJ ENM" },
  { file: "zipiel", name: "Zipiel" },
  { file: "temu", name: "Temu" },
  { file: "lovey", name: "Lovey" },
  { file: "Hurray", name: "Hurray" },
  { file: "Hwanlnternational", name: "Hwan International" },
  { file: "Arcanesai", name: "Arcanes AI" },
  { file: "BTmedi", name: "BT Medi" },
  { file: "Ternary", name: "Ternary" },
];
// 파트너 로고 마키에 사용할 데이터다.
// file 값은 실제 이미지 파일명, name은 alt 텍스트로 쓰인다.

export default function BusinessPage() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이 페이지의 제목, 설명, 카드 문구 대부분은 전부 번역 키 기반이다.

  const stats = [
    { val: t("b2b.stat1.val"), label: t("b2b.stat1.label") },
    { val: t("b2b.stat2.val"), label: t("b2b.stat2.label") },
    { val: t("b2b.stat3.val"), label: t("b2b.stat3.label") },
    { val: t("b2b.stat4.val"), label: t("b2b.stat4.label") },
  ];
  // hero 오른쪽 통계 패널 데이터다.
  // 숫자와 라벨 모두 번역 키에서 가져온다.

  const features = Array.from({ length: 6 }, (_, i) => ({
    icon: featureIcons[i],
    title: t(`b2b.about.f${i + 1}.title`),
    desc: t(`b2b.about.f${i + 1}.desc`),
  }));
  // about/why 섹션 카드 6개를 만드는 데이터다.
  // 아이콘은 고정 배열에서 가져오고,
  // 제목/설명은 번역 키를 규칙적으로 생성해서 불러온다.

  const process = Array.from({ length: 4 }, (_, i) => ({
    icon: processIcons[i],
    title: t(`b2b.process.s${i + 1}`),
    desc: t(`b2b.process.s${i + 1}.desc`),
  }));
  // business 진행 과정 4단계를 설명하는 카드 데이터다.

  const scrollLogos = [...partnerLogos, ...partnerLogos];
  // Double the logos for seamless infinite scroll
  // 무한 마키처럼 보이게 하려고 로고 목록을 두 번 이어붙인 배열이다.

  return (
    <main className="pt-20">
      {/* business 공통 헤더가 fixed이므로 본문을 아래로 밀어주는 상단 여백 */}

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* business 메인 첫 화면이다.
            min-h-[90vh]로 거의 한 화면 가득 차게 만들고,
            overflow-hidden으로 배경 blur가 바깥으로 튀지 않게 한다. */}

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,212,255,0.07),transparent_60%),radial-gradient(ellipse_at_70%_80%,rgba(14,165,233,0.06),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute top-1/3 left-[5%] w-80 h-80 rounded-full bg-[#00d4ff] opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-[#0ea5e9] opacity-[0.03] blur-[140px]" />
        {/* business 페이지 전용 배경 레이어들이다.
            일반 메인 사이트보다 cyan/blue 쪽 톤을 더 강하게 사용한다. */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 좌측은 메인 메시지, 우측은 통계 카드 구조 */}

            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-sm text-[#00d4ff] font-semibold mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                  {t("b2b.hero.badge")}
                </span>
              </motion.div>
              {/* 상단 작은 배지 */}

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6" style={{ fontFamily: "var(--font-display)" }}>
                {t("b2b.hero.title1")}
                <br />
                <span className="bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent">
                  {t("b2b.hero.title2")}
                </span>
              </motion.h1>
              {/* 메인 타이틀은 두 줄 구조고,
                  두 번째 줄만 gradient 텍스트로 강조한다. */}

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-lg">
                {t("b2b.hero.subtitle")}
              </motion.p>
              {/* hero 설명 문단 */}

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-col sm:flex-row gap-3">
                <Link href="/business/packages" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white font-semibold text-sm hover:opacity-90 transition-opacity text-center" style={{ fontFamily: "var(--font-display)" }}>
                  {t("b2b.hero.cta1")}
                </Link>

                <Link href="/business/contact" className="px-7 py-3.5 rounded-xl border border-[var(--color-border-medium)] text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all text-sm font-semibold text-center" style={{ fontFamily: "var(--font-display)" }}>
                  {t("b2b.hero.cta2")}
                </Link>
              </motion.div>
              {/* packages / contact로 보내는 핵심 CTA 버튼 두 개 */}
            </div>

            {/* Stats panel */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }} className="glass-card p-6 text-center">
                    <div className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      {s.val}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* 오른쪽 통계 패널은 2x2 카드 형태로 구성된다. */}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />
        {/* hero 하단을 다음 섹션과 자연스럽게 이어주는 그라디언트 */}
      </section>

      {/* ── PARTNER LOGOS ── */}
      <section className="py-16 border-b border-[var(--color-border-subtle)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm text-[var(--color-text-muted)] mb-10 tracking-wide">
              {t("b2b.partners.title")}
            </p>
          </ScrollReveal>
        </div>

        {/* Infinite scroll marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none" />
          {/* 좌우 fade 레이어를 깔아서 로고가 자연스럽게 사라지는 것처럼 보이게 한다. */}

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex">
            <div
              className="flex items-center gap-12 md:gap-16 animate-marquee"
              style={{ animation: "marquee 30s linear infinite" }}
            >
              {scrollLogos.map((logo, i) => (
                <div
                  key={`${logo.file}-${i}`}
                  className="shrink-0 flex items-center justify-center h-10 md:h-12 w-[120px] md:w-[150px] relative grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                  <Image
                    src={`/asset/b2bpartners/${logo.file}.png`}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    sizes="150px"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            will-change: transform;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        {/* 페이지 안에서만 쓰는 marquee 애니메이션 스타일이다.
            hover 시 일시정지되도록 만든 것이 포인트다. */}
      </section>

      {/* ── ABOUT / WHY ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="tech-badge mb-4 inline-flex">
                <span className="glow-dot" style={{ width: 6, height: 6 }} />
                {t("b2b.about.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5" style={{ fontFamily: "var(--font-display)" }}>
                {t("b2b.about.title")}
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
                {t("b2b.about.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="glass-card p-7 h-full">
                  <div className="text-2xl mb-4">{f.icon}</div>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* Vision3 Business의 특징을 6개 카드로 정리하는 섹션 */}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="tech-badge mb-4 inline-flex">
                <span className="glow-dot" style={{ width: 6, height: 6 }} />
                {t("b2b.process.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5" style={{ fontFamily: "var(--font-display)" }}>
                {t("b2b.process.title")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#0ea5e9]/10 border border-[#00d4ff]/20 flex items-center justify-center text-2xl mx-auto mb-4">
                    {p.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] flex items-center justify-center text-xs font-bold text-white mx-auto mb-3">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {p.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{p.desc}</p>
                  {i < 3 && <div className="hidden md:block absolute top-8 -right-3 text-[#00d4ff]/30 text-lg">→</div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* business 진행 과정을 4단계로 보여주는 프로세스 섹션 */}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="tech-badge mb-4 inline-flex">
                <span className="glow-dot" style={{ width: 6, height: 6 }} />
                {t("b2b.industries.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5" style={{ fontFamily: "var(--font-display)" }}>
                {t("b2b.industries.title")}
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
                {t("b2b.industries.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industryList.map((ind, i) => (
              <ScrollReveal key={ind.key} delay={i * 0.06}>
                <Link href="/business/packages" className="glass-card p-6 text-center group cursor-pointer block">
                  <div className="text-3xl mb-3">{ind.icon}</div>
                  <p className="text-sm font-semibold group-hover:text-[#00d4ff] transition-colors">
                    {t(`b2b.pkg.${ind.key}.title`)}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          {/* 산업군 카드 클릭 시 packages 페이지로 이동시켜
              더 자세한 패키지 탐색으로 연결하는 역할을 한다. */}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="gradient-border max-w-3xl mx-auto">
              <div className="p-12 md:p-16 text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  {t("b2b.cta.title")}
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
                  {t("b2b.cta.desc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/business/packages" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                    {t("b2b.hero.cta1")}
                  </Link>
                  <Link href="/business/contact" className="px-8 py-3.5 rounded-xl border border-[var(--color-border-medium)] text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                    {t("b2b.hero.cta2")}
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
// 정리하면 BusinessPage는 B2B 소개 랜딩의 중심 페이지이고,
// hero → 신뢰 로고 → 소개 → 프로세스 → 산업군 → CTA 흐름으로
// 기업 사용자가 서비스 구조를 빠르게 이해하고 문의/패키지 탐색으로 넘어가게 설계된 페이지다.