// vision3_web/src/app/ott/page.tsx
import Image from "next/image";
import Link from "next/link";

const imagePool = Array.from({ length: 20 }, (_, i) => `/images/img${i + 1}.jpg`);
const pickImage = (index: number) => imagePool[index % imagePool.length];

const heroMain = {
  title: "The Last Scene of Summer",
  subtitle: "Vision3 Original",
  meta: "Drama · Mystery · 2026 · 16+",
  desc: "한 장면의 감도, 긴장감 있는 서사, 그리고 시네마틱한 몰입. Vision3 메인에서 지금 가장 강하게 보여야 하는 대표작.",
  image: pickImage(0),
};

const continueWatching = [
  { title: "Glass Midnight", subtitle: "EP 07 · 74% 시청", progress: "74%", image: pickImage(1) },
  { title: "Ash Protocol", subtitle: "EP 03 · 48% 시청", progress: "48%", image: pickImage(2) },
  { title: "Silent Harbor", subtitle: "EP 05 · 63% 시청", progress: "63%", image: pickImage(3) },
  { title: "Velvet Burn", subtitle: "EP 02 · 29% 시청", progress: "29%", image: pickImage(4) },
];

const topTen = [
  { rank: 1, title: "Glass Midnight", subtitle: "Neo-noir Series", image: pickImage(5) },
  { rank: 2, title: "Ash Protocol", subtitle: "Sci-Fi Thriller", image: pickImage(6) },
  { rank: 3, title: "Silent Harbor", subtitle: "Mystery Film", image: pickImage(7) },
  { rank: 4, title: "Velvet Burn", subtitle: "Original Drama", image: pickImage(8) },
  { rank: 5, title: "Moon Archive", subtitle: "SF Drama", image: pickImage(9) },
];

const trendingNow = [
  { badge: "NEW", title: "Night Bloom", subtitle: "Original Series", image: pickImage(10) },
  { badge: "HOT", title: "Crimson Shore", subtitle: "Thriller Film", image: pickImage(11) },
  { badge: "EDITOR'S PICK", title: "After Silence", subtitle: "Mystery Drama", image: pickImage(12) },
  { badge: "TRENDING", title: "Blue Corridor", subtitle: "Sci-Fi Series", image: pickImage(13) },
  { badge: "TOP 10", title: "Last Passenger", subtitle: "Drama Film", image: pickImage(14) },
  { badge: "NEW", title: "Neon Chamber", subtitle: "Action Series", image: pickImage(15) },
];

const discoverFree = [
  { title: "무료 1화 공개작", subtitle: "지금 가볍게 시작하기 좋은 작품", image: pickImage(16) },
  { title: "웹툰 · 소설 기반 추천", subtitle: "다음 메인 시청으로 이어지는 진입 카드", image: pickImage(17) },
  { title: "입문용 Discovery Picks", subtitle: "짧게 둘러보다가 바로 유입되는 흐름", image: pickImage(18) },
  { title: "Creator Spotlight", subtitle: "가볍게 발견하고 저장하는 무료 탐색", image: pickImage(19) },
];

const marketFeatureVideo = {
  title: "Market",
  cta: "마켓 보러 가기",
  video: "/videos/market/market4.mp4",
};

function SectionHeader({
  title,
  action,
  actionHref,
}: {
  title: string;
  action?: string;
  actionHref?: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between">
      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>

      {action &&
        (actionHref ? (
          <Link
            href={actionHref}
            className="text-sm font-medium text-white/55 transition hover:text-white"
          >
            {action}
          </Link>
        ) : (
          <button
            type="button"
            className="text-sm font-medium text-white/55 transition hover:text-white"
          >
            {action}
          </button>
        ))}
    </div>
  );
}

function PosterCard({
  title,
  image,
  badge,
}: {
  title: string;
  image: string;
  badge?: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]">
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.18)_38%,rgba(0,0,0,0.82)_100%)]" />

        {badge && (
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
            {badge}
          </div>
        )}
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,122,255,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(132,42,255,0.18),transparent_25%),linear-gradient(to_bottom,rgba(9,11,18,0.92),rgba(5,6,8,1))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(5,6,8,1),rgba(5,6,8,0))]" />

        <section className="relative mx-auto max-w-7xl px-5 pb-10 pt-6 md:px-8 md:pb-14 md:pt-8">
          <div className="relative min-h-[78vh] overflow-hidden rounded-[36px] border border-white/10">
            <Image
              src={heroMain.image}
              alt={heroMain.title}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.42)_36%,rgba(0,0,0,0.18)_62%,rgba(0,0,0,0.34)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0.92)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(92,132,255,0.22),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(158,86,255,0.14),transparent_22%)]" />

            <div className="relative flex min-h-[78vh] flex-col justify-between p-6 md:p-10 xl:p-14">
              <div className="flex items-start">
                <div className="space-y-3">
                  <span className="inline-flex rounded-full border border-white/15 bg-black/30 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/85 backdrop-blur">
                    {heroMain.subtitle}
                  </span>

                  <p className="text-sm font-medium text-white/72">{heroMain.meta}</p>
                </div>
              </div>

              <div className="w-full">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/ott/watch/the-last-scene-of-summer"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 bg-white/12 px-7 text-[15px] font-semibold text-white backdrop-blur-md transition hover:bg-white/18"
                    >
                      ▶ 재생
                    </Link>

                    <Link
                      href="/ott/discover"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/15 px-7 text-[15px] font-semibold text-cyan-50 backdrop-blur-md transition hover:bg-cyan-400/22"
                    >
                      무료 둘러보기
                    </Link>
                  </div>

                  <div className="grid gap-5 pt-6 sm:grid-cols-3">
                    <div className="min-h-[190px] rounded-[28px] border border-white/10 bg-black/25 p-6 backdrop-blur-md md:min-h-[210px] md:p-7">
                      <p className="text-[12px] uppercase tracking-[0.2em] text-white/42">
                        Main Mode
                      </p>
                      <p className="mt-4 text-[26px] font-semibold leading-tight text-white md:text-[30px]">
                        OTT First
                      </p>
                      <p className="mt-3 text-base leading-7 text-white/65 md:text-[17px]">
                        프리미엄 스트리밍 중심
                      </p>
                    </div>

                    <div className="min-h-[190px] rounded-[28px] border border-white/10 bg-black/25 p-6 backdrop-blur-md md:min-h-[210px] md:p-7">
                      <p className="text-[12px] uppercase tracking-[0.2em] text-white/42">
                        Discovery
                      </p>
                      <p className="mt-4 text-[26px] font-semibold leading-tight text-white md:text-[30px]">
                        Free Entry
                      </p>
                      <p className="mt-3 text-base leading-7 text-white/65 md:text-[17px]">
                        무료 탐색 유입 구조
                      </p>
                    </div>

                    <div className="min-h-[190px] rounded-[28px] border border-white/10 bg-black/25 p-6 backdrop-blur-md md:min-h-[210px] md:p-7">
                      <p className="text-[12px] uppercase tracking-[0.2em] text-white/42">
                        Extension
                      </p>
                      <p className="mt-4 text-[26px] font-semibold leading-tight text-white md:text-[30px]">
                        Market
                      </p>
                      <p className="mt-3 text-base leading-7 text-white/65 md:text-[17px]">
                        세계관 소비 확장
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <SectionHeader
          title="계속 시청하기"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {continueWatching.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
            >
              <div className="relative h-[210px] overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.24)_48%,rgba(0,0,0,0.82)_100%)]" />
              </div>

              <div className="p-5">
                <p className="text-sm text-white/60">{item.subtitle}</p>

                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-white"
                      style={{ width: item.progress }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <SectionHeader
          title="Top 10 in Vision3"
          action="순위 보기"
          actionHref="/ott/rankings"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {topTen.map((item) => (
            <article
              key={item.rank}
              className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.82)_100%)]" />
                <div className="absolute left-4 top-3 text-6xl font-black text-white/90">
                  {item.rank}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <SectionHeader
          title="지금 인기 콘텐츠"
          action="더 보기"
          actionHref="/ott/rankings"
        />

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
          {trendingNow.map((item) => (
            <PosterCard
              key={item.title}
              badge={item.badge}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <SectionHeader
          title="Discover Free"
          action="Discover 이동"
          actionHref="/ott/discover"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {discoverFree.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,18,0.08)_0%,rgba(6,10,18,0.18)_38%,rgba(0,0,0,0.78)_100%)]" />
                <div className="absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  Free
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-white/62">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <SectionHeader title="Market" />

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
          <div className="relative h-[620px] md:h-[760px]">
            <video
              className="h-full w-full object-cover"
              src={marketFeatureVideo.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0.84)_100%)]" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <Link
                href="/ott/market"
                className="inline-flex items-center rounded-full border border-white/12 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                {marketFeatureVideo.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}