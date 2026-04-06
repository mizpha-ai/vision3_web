// vision3_web/src/app/ott/watch/[slug]/writer/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getWatchTitleBySlug,
  protagonistImageByName,
  watchCatalog,
  type WatchGenreKey,
} from "@/app/ott/data/watch-data";
import WatchBackground from "@/app/ott/watch/_components/watch-background";
import {
  genreLabelMap,
  getSelectedEpisode,
  hallButtonStyleByGenre,
  protagonistDescByGenre,
  protagonistRoleByGenre,
  themeByGenre,
  writerDescByGenre,
  writerNameByGenre,
  writerTitleByGenre,
} from "@/app/ott/watch/_lib/watch-theme";

const manualMainVideo = "/videos/vdo/play.mp4";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    episode?: string;
    returnTo?: string;
  }>;
};

export default async function WatchPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const title = getWatchTitleBySlug(slug);

  if (!title) {
    notFound();
  }

  const theme = themeByGenre[title.genre];
  const hallButtonStyle = hallButtonStyleByGenre[title.genre];
  const selectedEpisode = getSelectedEpisode(
    title.episodes,
    resolvedSearchParams.episode
  );

  const currentIndex = title.episodes.findIndex(
    (episode) => episode.number === selectedEpisode.number
  );

  const nextEpisodes =
    currentIndex >= 0
      ? title.episodes.slice(currentIndex + 1, currentIndex + 4)
      : title.episodes.slice(1, 4);

  const protagonistName = title.cast[0] ?? `${title.title} Lead`;
  const protagonistImage =
    protagonistImageByName[protagonistName] ?? "/images/main5.png";

  const writerName = writerNameByGenre[title.genre];
  const genreLabel = genreLabelMap[title.genre as WatchGenreKey];
  const hallHref = `/${title.mode}/${title.genre}`;
  const originReturnTo = resolvedSearchParams.returnTo;
  const backHref = originReturnTo || hallHref;

  const currentWatchPath = `/watch/${title.slug}?episode=${selectedEpisode.number}${
    originReturnTo ? `&returnTo=${encodeURIComponent(originReturnTo)}` : ""
  }`;

  const castPageHref = `/watch/${title.slug}/cast?episode=${
    selectedEpisode.number
  }&returnTo=${encodeURIComponent(currentWatchPath)}`;

  const episodesPageHref = `/watch/${title.slug}/episodes?episode=${
    selectedEpisode.number
  }&returnTo=${encodeURIComponent(currentWatchPath)}`;

  const writerPageHref = `/watch/${title.slug}/writer?episode=${
    selectedEpisode.number
  }&returnTo=${encodeURIComponent(currentWatchPath)}`;

  const recommendedMovieTitles =
    title.mode === "movies"
      ? title.relatedSlugs
          .map((relatedSlug) => getWatchTitleBySlug(relatedSlug))
          .filter((item): item is NonNullable<typeof item> => Boolean(item))
          .filter((item) => item.mode === "movies" && item.slug !== title.slug)
      : [];

  const fallbackMovieTitles =
    title.mode === "movies" && recommendedMovieTitles.length < 3
      ? watchCatalog
          .filter(
            (item) =>
              item.mode === "movies" &&
              item.slug !== title.slug &&
              !recommendedMovieTitles.some(
                (recommended) => recommended.slug === item.slug
              )
          )
          .sort((a, b) => {
            const aScore =
              (a.genre === title.genre ? 3 : 0) +
              a.cast.filter((name) => title.cast.includes(name)).length;
            const bScore =
              (b.genre === title.genre ? 3 : 0) +
              b.cast.filter((name) => title.cast.includes(name)).length;

            return bScore - aScore;
          })
          .slice(0, 3 - recommendedMovieTitles.length)
      : [];

  const movieRecommendations =
    title.mode === "movies"
      ? [...recommendedMovieTitles, ...fallbackMovieTitles].slice(0, 3)
      : [];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <WatchBackground genre={title.genre} />

      <div className="mx-auto max-w-[1560px] px-4 pb-10 pt-[50px] md:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Link
            href={backHref}
            className="rounded-full border px-4 py-2 text-sm font-semibold transition"
            style={hallButtonStyle}
          >
            <span style={{ color: hallButtonStyle.color }}>
              {originReturnTo
                ? "← 이전으로"
                : `← ${title.mode === "series" ? "시리즈관으로" : "영화관으로"}`}
            </span>
          </Link>

          <span
            className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${theme.chip}`}
          >
            {genreLabel} Hall
          </span>
        </div>

        <div className="mb-5">
          <p className={`text-sm font-medium ${theme.accent}`}>{title.meta}</p>
          <h1 className={`mt-2 text-4xl font-extrabold tracking-tight ${theme.title}`}>
            {title.title}
          </h1>
        </div>

        <section className="grid items-start gap-4 xl:grid-cols-[1.55fr_0.45fr]">
          <div className="grid gap-4 self-start">
            <article
              className={`overflow-hidden rounded-[28px] border ${theme.shellBorder}`}
            >
              <video
                key={`${title.slug}-${selectedEpisode.number}`}
                className="block w-full h-auto bg-black"
                src={manualMainVideo}
                poster={selectedEpisode.image || title.coverImage}
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </article>

            {title.mode === "series" ? (
              <article
                className={`rounded-[22px] border p-3.5 ${theme.shellBorder} ${theme.shell}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p
                      className={`text-[11px] font-bold uppercase tracking-[0.22em] ${theme.accent}`}
                    >
                      Next Episodes
                    </p>
                    <h2 className={`mt-2 text-[26px] font-extrabold ${theme.title}`}>
                      다음 화 이어보기
                    </h2>
                  </div>

                  <Link
                    href={episodesPageHref}
                    className="rounded-full border px-3 py-1 text-[11px] font-semibold transition"
                    style={hallButtonStyle}
                  >
                    <span style={{ color: hallButtonStyle.color }}>화 전체보기</span>
                  </Link>
                </div>

                {nextEpisodes.length > 0 ? (
                  <div className="mt-3.5 grid gap-2">
                    {nextEpisodes.map((episode) => (
                      <article
                        key={episode.number}
                        className={`overflow-hidden rounded-[16px] border ${theme.shellBorder} ${theme.surface}`}
                      >
                        <div className="grid gap-0 md:grid-cols-[148px_1fr]">
                          <div className="relative h-[84px] overflow-hidden md:h-full">
                            <Image
                              src={episode.image}
                              alt={episode.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 148px"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.72)_100%)]" />
                            <div className="absolute left-3 top-3 rounded-full border border-white/12 bg-black/35 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                              EP {String(episode.number).padStart(2, "0")}
                            </div>
                          </div>

                          <div className="flex flex-col justify-between p-2.5">
                            <div>
                              <h3 className={`text-lg font-extrabold ${theme.title}`}>
                                {episode.title}
                              </h3>
                              <p className={`mt-1 text-sm leading-5 ${theme.body}`}>
                                {episode.summary}
                              </p>
                            </div>

                            <div className="mt-2.5 flex items-center justify-between gap-3">
                              <p className={`text-sm font-medium ${theme.body}`}>
                                {episode.duration}
                              </p>

                              <Link
                                href={`/watch/${title.slug}?episode=${episode.number}&returnTo=${encodeURIComponent(
                                  currentWatchPath
                                )}`}
                                className="inline-flex rounded-full border px-3 py-1.5 text-[11px] font-semibold transition"
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
                    ))}
                  </div>
                ) : (
                  <div className="mt-3.5">
                    <p className={`text-sm leading-6 ${theme.body}`}>
                      이어서 볼 다음 화가 아직 없어.
                    </p>
                  </div>
                )}
              </article>
            ) : (
              <article
                className={`rounded-[24px] border p-5 ${theme.shellBorder} ${theme.shell}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p
                      className={`text-[11px] font-bold uppercase tracking-[0.22em] ${theme.accent}`}
                    >
                      Recommended Movies
                    </p>
                    <h2 className={`mt-2 text-[26px] font-extrabold ${theme.title}`}>
                      같이 보면 좋은 영화
                    </h2>
                  </div>

                  <Link
                    href={`/${title.mode}/${title.genre}`}
                    className="rounded-full border px-3 py-1 text-[11px] font-semibold transition"
                    style={hallButtonStyle}
                  >
                    <span style={{ color: hallButtonStyle.color }}>더 보기</span>
                  </Link>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-3">
                  {movieRecommendations.map((relatedTitle) => (
                    <Link
                      key={relatedTitle.slug}
                      href={`/watch/${relatedTitle.slug}?returnTo=${encodeURIComponent(
                        currentWatchPath
                      )}`}
                      className={`overflow-hidden rounded-[22px] border transition ${theme.shellBorder} ${theme.shell}`}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={relatedTitle.coverImage}
                          alt={relatedTitle.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1280px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.88)_100%)]" />

                        <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                          MOVIE
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <p className="text-xl font-semibold text-white">
                            {relatedTitle.title}
                          </p>
                          <p className="mt-1 text-sm text-white/72">
                            {relatedTitle.subtitle}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </article>
            )}
          </div>

          <div className="grid gap-4 self-start">
            <article
              className={`rounded-[28px] border p-5 ${theme.shellBorder} ${theme.shell}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.24em] ${theme.accent}`}
                  >
                    Main Character
                  </p>

                  <h2 className={`mt-3 text-3xl font-extrabold ${theme.title}`}>
                    주인공 소개
                  </h2>
                </div>

                <div className="shrink-0 self-start">
                  <Link
                    href={castPageHref}
                    className="rounded-full border px-3 py-1.5 text-xs font-semibold transition"
                    style={hallButtonStyle}
                  >
                    <span style={{ color: hallButtonStyle.color }}>
                      출연했던 영상 보기
                    </span>
                  </Link>
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-[128px_1fr]">
                <div className="relative h-[168px] overflow-hidden rounded-[24px]">
                  <Image
                    src={protagonistImage}
                    alt={protagonistName}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.68)_100%)]" />
                </div>

                <div>
                  <p className={`text-xl font-semibold ${theme.title}`}>
                    {protagonistName}
                  </p>
                  <p className={`mt-2 text-sm font-medium ${theme.accent}`}>
                    {protagonistRoleByGenre[title.genre]}
                  </p>
                  <p className={`mt-4 text-sm leading-7 ${theme.body}`}>
                    {protagonistDescByGenre[title.genre]}
                  </p>
                </div>
              </div>
            </article>

            <article
              className={`rounded-[28px] border p-5 ${theme.shellBorder} ${theme.shell}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.24em] ${theme.accent}`}
                  >
                    Writer
                  </p>
                  <h2 className={`mt-3 text-3xl font-extrabold ${theme.title}`}>
                    작가 소개
                  </h2>
                </div>

                <div className="shrink-0 self-start">
                  <Link
                    href={writerPageHref}
                    className="rounded-full border px-3 py-1.5 text-xs font-semibold transition"
                    style={hallButtonStyle}
                  >
                    <span style={{ color: hallButtonStyle.color }}>
                      작가 작품 보러가기
                    </span>
                  </Link>
                </div>
              </div>

              <p className={`mt-4 text-xl font-semibold ${theme.title}`}>
                {writerName}
              </p>
              <p className={`mt-2 text-sm font-medium ${theme.accent}`}>
                {writerTitleByGenre[title.genre]}
              </p>
              <p className={`mt-4 text-sm leading-7 ${theme.body}`}>
                {writerDescByGenre[title.genre]}
              </p>
            </article>

            <article
              className={`rounded-[28px] border p-5 ${theme.shellBorder} ${theme.shell}`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-[0.24em] ${theme.accent}`}
              >
                Synopsis
              </p>
              <h2 className={`mt-3 text-3xl font-extrabold ${theme.title}`}>
                줄거리
              </h2>
              <p className={`mt-4 text-sm leading-7 ${theme.body}`}>
                {title.description}
              </p>

              <div
                className={`mt-5 rounded-[20px] border px-4 py-4 text-sm ${theme.shellBorder} ${theme.surface}`}
              >
                <p className={`font-semibold ${theme.accent}`}>현재 재생 중</p>
                <p className={`mt-2 text-lg font-semibold ${theme.title}`}>
                  {selectedEpisode.title}
                </p>
                <p className={`mt-2 leading-6 ${theme.body}`}>
                  {selectedEpisode.summary}
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}