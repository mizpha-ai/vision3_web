// vision3_web/src/app/ott/market/page.tsx
import Link from "next/link";

const sponsorVideos = [
  {
    id: 1,
    brand: "Atelier North",
    title: "Scene-driven Brand Story",
    desc: "작품 감도와 잘 어울리는 프리미엄 라이프스타일 파트너 영상.",
    video: "/videos/market/market1.mp4",
    href: "https://example.com/partner-1",
    tag: "Sponsored",
  },
  {
    id: 2,
    brand: "Lumière Lab",
    title: "Visual Mood Campaign",
    desc: "짧은 장면 안에서 무드와 브랜드 이미지를 함께 보여주는 파트너 필름.",
    video: "/videos/market/market2.mp4",
    href: "https://example.com/partner-2",
    tag: "Partner",
  },
  {
    id: 3,
    brand: "Noir Frame",
    title: "Cinematic Collection",
    desc: "OTT 메인 무드와 자연스럽게 이어지는 시네마틱 브랜드 영상.",
    video: "/videos/market/market3.mp4",
    href: "https://example.com/partner-3",
    tag: "Sponsored",
  },
  {
    id: 4,
    brand: "Silent Form",
    title: "Minimal Story Ad",
    desc: "과하게 광고 같지 않고 장면처럼 스며드는 미니멀 스폰서 콘텐츠.",
    video: "/videos/market/market4.mp4",
    href: "https://example.com/partner-4",
    tag: "Partner",
  },
  {
    id: 5,
    brand: "Blue Current",
    title: "Drop Highlight",
    desc: "새로운 드롭과 브랜드 톤을 세로 영상으로 빠르게 보여주는 피드형 콘텐츠.",
    video: "/videos/market/market5.mp4",
    href: "https://example.com/partner-5",
    tag: "Sponsored",
  },
  {
    id: 6,
    brand: "Velour Note",
    title: "Brand Mood Reel",
    desc: "작품 감상 후 자연스럽게 이어지는 브랜드 무드 릴스.",
    video: "/videos/market/market6.mp4",
    href: "https://example.com/partner-6",
    tag: "Partner",
  },
  {
    id: 7,
    brand: "Frame Archive",
    title: "Visual Sponsorship",
    desc: "포스터와 설정집 감도의 비주얼을 영상 중심으로 연결한 파트너 존.",
    video: "/videos/market/market7.mp4",
    href: "https://example.com/partner-7",
    tag: "Sponsored",
  },
  {
    id: 8,
    brand: "Gloss Edition",
    title: "Premium Story Feed",
    desc: "짧은 영상 안에 브랜드 무드와 세계관 소비를 같이 담은 피드.",
    video: "/videos/market/market8.mp4",
    href: "https://example.com/partner-8",
    tag: "Partner",
  },
  {
    id: 9,
    brand: "Night Vessel",
    title: "Curated Partner Film",
    desc: "마켓 안에서도 OTT 톤이 깨지지 않도록 정리한 큐레이션형 영상 카드.",
    video: "/videos/market/market9.mp4",
    href: "https://example.com/partner-9",
    tag: "Sponsored",
  },
  {
    id: 10,
    brand: "Mono Signal",
    title: "Featured Sponsor Story",
    desc: "브랜드 소개보다 영상 몰입을 먼저 주고, 관심이 생기면 외부 사이트로 이동시키는 구조.",
    video: "/videos/market/market10.mp4",
    href: "https://example.com/partner-10",
    tag: "Featured",
  },
];

export default function MarketPage() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory bg-[#050608] text-white">
      {sponsorVideos.map((item, index) => (
        <section
          key={item.id}
          className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden"
        >
          {/* 배경 영상 */}
          <div className="absolute inset-0">
            <video
              src={item.video}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          {/* 배경 어둡게 */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.22)_28%,rgba(0,0,0,0.62)_68%,rgba(0,0,0,0.90)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(92,132,255,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(158,86,255,0.10),transparent_22%)]" />

          {/* 상단 고정 안내 */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-32 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0)_100%)]" />

          {/* 메인 컨텐츠 */}
          <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end justify-center px-4 pb-8 pt-24 md:px-8 md:pb-10">
            <div className="grid w-full items-end gap-6 lg:grid-cols-[1fr_360px]">
              {/* 가운데 세로 릴스 영역 */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-[430px] overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <div className="relative aspect-[9/16]">
                    <video
                      src={item.video}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.14)_34%,rgba(0,0,0,0.82)_100%)]" />

                    {/* 좌상단 배지 */}
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                        {item.tag}
                      </span>
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                        Brand Story
                      </span>
                    </div>

                    {/* 우측 액션 */}
                    <div className="absolute bottom-6 right-4 flex flex-col items-center gap-4">
                      <button
                        type="button"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/90 backdrop-blur transition hover:bg-black/50"
                      >
                        ♥
                      </button>
                      <button
                        type="button"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/90 backdrop-blur transition hover:bg-black/50"
                      >
                        ☆
                      </button>
                      <button
                        type="button"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/90 backdrop-blur transition hover:bg-black/50"
                      >
                        ↗
                      </button>
                    </div>

                    {/* 하단 텍스트 */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-sm font-medium text-white/72">
                        {item.brand}
                      </p>

                      <h1 className="mt-2 text-2xl font-semibold leading-tight text-white md:text-3xl">
                        {item.title}
                      </h1>

                      <p className="mt-3 max-w-[90%] text-sm leading-6 text-white/70">
                        {item.desc}
                      </p>

                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full border border-white/12 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/15"
                        >
                          사이트 이동
                        </a>

                        <button
                          type="button"
                          className="inline-flex rounded-full border border-white/12 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/15"
                        >
                          더 알아보기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 아래 넘김 힌트 */}
          {index !== sponsorVideos.length - 1 && (
            <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-xs uppercase tracking-[0.28em] text-white/45">
              Scroll Down
            </div>
          )}
        </section>
      ))}
    </main>
  );
}