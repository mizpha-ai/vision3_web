// vision3_web/src/app/contact/page.tsx

"use client";

// 이 파일은 /contact 페이지 엔트리다.
// 연락처 정보 카드와 문의 폼을 함께 보여주는 구조이며,
// 실제 폼 상태 관리/제출 애니메이션은 ContactForm 컴포넌트가 맡는다.
// 이전 버전과 비교하면, 지금은 페이지 헤더 문구와 정보 카드 문구를
// 직접 적지 않고 번역 함수 t(...)를 통해 가져오는 구조로 바뀌었다.
// 또 useLanguage 훅을 사용하므로 이 페이지는 클라이언트 컴포넌트가 되었다.

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { useLanguage } from "@/lib/i18n";
// useLanguage는 배지, 제목, 설명, 정보 카드 문구를
// 현재 언어에 맞게 가져오기 위해 추가된 훅이다.

export default function ContactPage() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이 페이지 상단 헤더와 정보 카드 문구는 전부 t("contact...") 키를 통해 출력된다.

  return (
    <>
      {/* 공통 헤더 */}
      <Header />

      {/* 헤더 높이만큼 상단 여백을 확보한 메인 영역 */}
      <main className="pt-28 pb-20 min-h-screen">
        {/* contact 페이지 전용 배경 */}
        <div className="fixed inset-0 -z-10">
          {/* 기본 바탕색 */}
          <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />

          {/* 퍼플 중심의 radial gradient로 분위기 부여 */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(139,92,246,0.06),transparent_60%)]" />

          {/* 공통 grid 패턴 */}
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            {/* 상단 배지 */}
            <div className="mb-4 flex justify-center">
              <span className="tech-badge">
                <span className="glow-dot" style={{ width: 6, height: 6 }} />
                {t("contact.badge")}
              </span>
            </div>
            {/* 이전에는 "Get in Touch"를 직접 적었지만,
                지금은 번역 키에서 가져오므로 현재 언어에 따라 바뀐다. */}

            {/* 메인 제목 */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("contact.title1")} <span className="neon-text">{t("contact.title2")}</span>
            </h1>
            {/* 이전에는 "Contact Us"를 직접 적었지만,
                지금은 title1 / title2를 따로 번역 키에서 가져온다.
                그래서 title2 부분만 neon-text로 강조할 수 있다. */}

            {/* 설명 문구 */}
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {t("contact.desc")}
            </p>
            {/* 설명 문단도 이제 번역 키 기반으로 바뀌었다. */}
          </div>

          {/* Contact Info + Form */}
          {/* 큰 화면에서는 3칸 그리드, 왼쪽은 정보 카드 / 오른쪽은 폼 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              {[
                { icon: "📧", title: t("contact.info.email"), value: t("contact.info.emailVal"), desc: t("contact.info.emailDesc") },
                { icon: "💬", title: t("contact.info.community"), value: t("contact.info.communityVal"), desc: t("contact.info.communityDesc") },
                { icon: "🌐", title: t("contact.info.location"), value: t("contact.info.locationVal"), desc: t("contact.info.locationDesc") },
              ].map((info) => (
                <div key={info.title} className="glass-card p-5">
                  {/* title을 key로 써서 각 카드 식별 */}

                  <div className="flex items-start gap-4">
                    {/* 이모지 아이콘 */}
                    <div className="text-xl">{info.icon}</div>

                    {/* 텍스트 정보 */}
                    <div>
                      <h3 className="text-sm font-bold mb-0.5">{info.title}</h3>
                      <p className="text-sm text-[var(--color-accent-cyan)]">{info.value}</p>
                      <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{info.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* 이전에는 Email, Community, Location 카드 문구를 직접 적었지만,
                지금은 제목 / 값 / 설명까지 전부 번역 키에서 가져온다.
                즉, 왼쪽 정보 카드 묶음 전체가 다국어 대응 구조로 바뀐 상태다. */}

            {/* Right: Form */}
            {/* 폼 영역은 2칸 차지하게 해서 더 넓게 보여준다 */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            {/* 실제 입력값 관리와 제출 상태는 ContactForm 컴포넌트가 담당한다. */}
          </div>
        </div>
      </main>

      {/* 공통 푸터 */}
      <Footer />
    </>
  );
}
// 정리하면 ContactPage의 레이아웃 구조 자체는 이전과 같지만,
// 배지 / 제목 / 설명 / 정보 카드 문구가 전부 번역 키 기반으로 바뀌면서
// 이 페이지도 다국어 대응 구조가 들어간 상태다.