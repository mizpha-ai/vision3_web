// vision3_web/src/app/ott/watch/[slug]/episodes/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWatchTitleBySlug } from "@/app/ott/data/watch-data";
import WatchBackground from "@/app/ott/watch/_components/watch-background";
import {
  genreLabelMap,
  getSelectedEpisode,
  hallButtonStyleByGenre,
  themeByGenre,
} from "@/app/ott/watch/_lib/watch-theme";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    episode?: string;
    returnTo?: string;
  }>;
};

export default async function EpisodesPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const title = getWatchTitleBySlug(slug);

  if (!title || title.mode !== "series") {
    notFound();
  }

  const theme = themeByGenre[title.genre];
  const hallButtonStyle = hallButtonStyleByGenre[title.genre];
  const selectedEpisode = getSelectedEpisode(
    title.episodes,
    resolvedSearchParams.episode
  );

  const originReturnTo = resolvedSearchParams.returnTo;
  const backHref =
    originReturnTo || `/ott/watch/${title.slug}?episode=${selectedEpisode.number}`;

  const currentEpisodesPath = `/ott/watch/${title.slug}/ott/episodes?episode=${
    selectedEpisode.number
  }${
    originReturnTo ? `&returnTo=${encodeURIComponent(originReturnTo)}` : ""
  }`;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <WatchBackground genre={title.genre} />

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-[84px] md:px-8 lg:px-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={backHref}
              className="rounded-full border px-4 py-2 text-sm font-semibold transition"
              style={hallButtonStyle}
            >
              <span style={{ color: hallButtonStyle.color }}>← 이전으로</span>
            </Link>

            <span
              className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${theme.chip}`}
            >
              {genreLabelMap[title.genre]} Hall
            </span>
          </div>
        </div>

        <div className="mb-6">
          <p className={`text-sm font-medium ${theme.accent}`}>All Episodes</p>
          <h1 className={`mt-2 text-4xl font-extrabold tracking-tight ${theme.title}`}>
            {title.title} 전체보기
          </h1>
        </div>

        <section className="grid gap-4">
          {title.episodes.map((episode) => {
            const isCurrent = episode.number === selectedEpisode.number;

            return (
              <article
                key={episode.number}
                className={`overflow-hidden rounded-[26px] border ${theme.shellBorder} ${theme.shell}`}
                style={
                  isCurrent
                    ? {
                        borderColor: hallButtonStyle.borderColor,
                        boxShadow: hallButtonStyle.boxShadow,
                      }
                    : undefined
                }
              >
                <div className="grid gap-0 md:grid-cols-[260px_1fr]">
                  <div className="relative h-[180px] overflow-hidden md:h-full">
                    <Image
                      src={episode.image}
                      alt={episode.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 260px"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.72)_100%)]" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                      EP {String(episode.number).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-5">
                    <div>
                      <h2 className={`text-2xl font-extrabold ${theme.title}`}>
                        {episode.title}
                      </h2>
                      <p className={`mt-3 text-sm leading-7 ${theme.body}`}>
                        {episode.summary}
                      </p>
                      <p className={`mt-4 text-sm font-medium ${theme.body}`}>
                        {episode.duration}
                      </p>
                    </div>

                    <div className="mt-5">
                      <Link
                        href={`/ott/watch/${title.slug}?episode=${episode.number}&returnTo=${encodeURIComponent(
                          currentEpisodesPath
                        )}`}
                        className="inline-flex rounded-full border px-4 py-2.5 text-sm font-semibold transition"
                        style={hallButtonStyle}
                      >
                        <span style={{ color: hallButtonStyle.color }}>
                          {episode.number}화 재생
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}