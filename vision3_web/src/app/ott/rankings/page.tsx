// vision3_web/src/app/ott/rankings/page.tsx
import Link from "next/link";
import RankingPosterCard from "@/app/ott/_components/ranking-poster-card";

const imagePool = Array.from({ length: 20 }, (_, i) => `/images/img${i + 1}.jpg`);
const pickImage = (index: number) => imagePool[index % imagePool.length];

const rankingList = [
  { rank: 1, title: "Glass Midnight", subtitle: "Neo-noir Series", image: pickImage(5), href: "/ott/watch/glass-midnight" },
  { rank: 2, title: "Ash Protocol", subtitle: "Sci-Fi Thriller", image: pickImage(6), href: "/ott/watch/ash-protocol" },
  { rank: 3, title: "Silent Harbor", subtitle: "Mystery Film", image: pickImage(7), href: "/ott/watch/silent-harbor" },
  { rank: 4, title: "Velvet Burn", subtitle: "Original Drama", image: pickImage(8), href: "/ott/watch/velvet-burn" },
  { rank: 5, title: "Moon Archive", subtitle: "SF Drama", image: pickImage(9), href: "/ott/watch/moon-archive" },
  { rank: 6, title: "Night Bloom", subtitle: "Original Series", image: pickImage(10), href: "/ott/watch/night-bloom" },
  { rank: 7, title: "Crimson Shore", subtitle: "Thriller Film", image: pickImage(11), href: "/ott/watch/crimson-shore" },
  { rank: 8, title: "After Silence", subtitle: "Mystery Drama", image: pickImage(12), href: "/ott/watch/after-silence" },
  { rank: 9, title: "Blue Corridor", subtitle: "Sci-Fi Series", image: pickImage(13), href: "/ott/watch/blue-corridor" },
  { rank: 10, title: "Last Passenger", subtitle: "Drama Film", image: pickImage(14), href: "/ott/watch/last-passenger" },
  { rank: 11, title: "Neon Chamber", subtitle: "Action Series", image: pickImage(15), href: "/ott/watch/neon-chamber" },
  { rank: 12, title: "Crown of Mist", subtitle: "Fantasy Drama", image: pickImage(16), href: "/ott/watch/crown-of-mist" },
];

export default function RankingsPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,122,255,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(132,42,255,0.14),transparent_25%),linear-gradient(to_bottom,rgba(9,11,18,0.94),rgba(5,6,8,1))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(5,6,8,1),rgba(5,6,8,0))]" />

        <section className="relative mx-auto max-w-7xl px-5 pb-8 pt-[90px] md:px-8 md:pb-12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                Rankings
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                인기순위
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                지금 Vision3에서 가장 많이 보고 있는 작품들을 모은 랭킹 페이지야. 메인 Top 10보다 더 넓게 보고 바로 재생할 수 있게 확장했어.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex rounded-full border border-white/12 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              메인으로 돌아가기
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white"
            >
              전체
            </button>
            <button
              type="button"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white"
            >
              시리즈
            </button>
            <button
              type="button"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white"
            >
              영화
            </button>
            <button
              type="button"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white"
            >
              오늘 기준
            </button>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {rankingList.map((item) => (
            <RankingPosterCard
              key={item.rank}
              rank={item.rank}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              href={item.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}