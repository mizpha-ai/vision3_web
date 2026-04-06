// vision3_web/src/app/ott/components/discover/discover-watch-shell.tsx
import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";
import {
  discoverFreeSlugByGenre,
  getWatchTitleBySlug,
  protagonistImageByName,
  type WatchTitle,
} from "@/app/ott/data/watch-data";
import WatchBackground from "@/app/ott/watch/_components/watch-background";
import {
  hallButtonStyleByGenre,
  protagonistDescByGenre,
  protagonistRoleByGenre,
  themeByGenre,
  writerDescByGenre,
  writerNameByGenre,
  writerTitleByGenre,
} from "@/app/ott/watch/_lib/watch-theme";

type Props = {
  title: WatchTitle;
  returnTo: string;
};

function getDiscoverSeriesTitles(currentTitle: WatchTitle) {
  const sameGenreSeries = (discoverFreeSlugByGenre[currentTitle.genre] ?? [])
    .map((slug) => getWatchTitleBySlug(slug))
    .filter((item): item is WatchTitle => Boolean(item))
    .filter((item) => item.mode === "series" && item.slug !== currentTitle.slug);

  if (sameGenreSeries.length >= 3) {
    return sameGenreSeries.slice(0, 3);
  }

  const fallbackSeries = Object.values(discoverFreeSlugByGenre)
    .flat()
    .map((slug) => getWatchTitleBySlug(slug))
    .filter((item): item is WatchTitle => Boolean(item))
    .filter(
      (item) =>
        item.mode === "series" &&
        item.slug !== currentTitle.slug &&
        !sameGenreSeries.some((same) => same.slug === item.slug)
    );

  return [...sameGenreSeries, ...fallbackSeries].slice(0, 3);
}

export default function DiscoverWatchShell({ title, returnTo }: Props) {
  const theme = themeByGenre[title.genre];
  const hallButtonStyle = hallButtonStyleByGenre[title.genre];

  const protagonistName = title.cast[0] ?? `${title.title} Lead`;
  const protagonistImage =
    protagonistImageByName[protagonistName] ?? "/images/main5.png";

  const freeEpisode = title.episodes[0];
  const lockedEpisodes = title.episodes.slice(1);
  const discoverRecommendations = getDiscoverSeriesTitles(title);

  const discoverHallHref = `/ott/discover/${title.genre}`;
  const backHref = returnTo || discoverHallHref;

  const currentDiscoverPath = `/ott/discover/watch/${title.slug}?returnTo=${encodeURIComponent(
    backHref
  )}`;

  const castPageHref = `/ott/watch/${title.slug}/cast?episode=1&returnTo=${encodeURIComponent(
    currentDiscoverPath
  )}`;

  const premiumWatchHref = `/ott/watch/${title.slug}?episode=1&returnTo=${encodeURIComponent(
    currentDiscoverPath
  )}`;

  const writerName = writerNameByGenre[title.genre];

  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <WatchBackground genre={title.genre} />

      <div className="relative z-10 mx-auto max-w-[1560px] px-4 pb-10 pt-[50px] md:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={backHref}
              className="rounded-full border px-4 py-2 text-sm font-semibold transition"
              style={hallButtonStyle}
            >
              <span style={{ color: hallButtonStyle.color }}>← 이전으로</span>
            </Link>

            <Link
              href={discoverHallHref}
              className="rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{
                borderColor: hallButtonStyle.borderColor,
                background: hallButtonStyle.background,
                color: hallButtonStyle.color,
                boxShadow: hallButtonStyle.boxShadow,
              }}
            >
              Discover Hall
            </Link>

            <span
              className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${theme.chip}`}
            >
              Episode 01 Free
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <span
              className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${theme.chip}`}
            >
              Discover Only
            </span>
          </div>
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
                key={`${title.slug}-discover-episode-1`}
                className="block h-auto w-full bg-black"
                src={title.video}
                poster={freeEpisode?.image || title.coverImage}
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </article>

            <article
              className={`rounded-[22px] border p-4 ${theme.shellBorder} ${theme.shell}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className={`text-[11px] font-bold uppercase tracking-[0.22em] ${theme.accent}`}
                  >
                    Locked Episodes
                  </p>
                  <h2 className={`mt-2 text-[26px] font-extrabold ${theme.title}`}>
                    2화부터 잠겨 있어요
                  </h2>
                  <p className={`mt-2 text-sm leading-6 ${theme.body}`}>
                    디스커벌에서는 1화만 무료로 공개되고, 이후 화는 정식 시청에서 이어볼 수 있어.
                  </p>
                </div>

                <Link
                  href={premiumWatchHref}
                  className="rounded-full border px-3 py-1 text-[11px] font-semibold transition"
                  style={hallButtonStyle}
                >
                  <span style={{ color: hallButtonStyle.color }}>
                    정식으로 이어보기
                  </span>
                </Link>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {lockedEpisodes.length > 0 ? (
                  lockedEpisodes.map((episode) => (
                    <Link
                      key={episode.number}
                      href={`/ott/watch/${title.slug}?episode=${episode.number}&returnTo=${encodeURIComponent(
                        currentDiscoverPath
                      )}`}
                      className={`overflow-hidden rounded-[18px] border transition ${theme.shellBorder} ${theme.surface}`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={episode.image}
                          alt={episode.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1280px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/50" />

                        <div className="absolute left-3 top-3 rounded-full border border-white/12 bg-black/35 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                          EP {String(episode.number).padStart(2, "0")}
                        </div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
                          <div className="rounded-full border border-white/20 bg-black/35 p-3 text-white">
                            <Lock className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-semibold text-white">
                            정식 시청 필요
                          </p>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <p className="text-base font-semibold text-white">
                            {episode.title}
                          </p>
                          <p className="mt-1 text-sm text-white/72">
                            {episode.duration}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <Link
                    href={premiumWatchHref}
                    className={`overflow-hidden rounded-[18px] border transition ${theme.shellBorder} ${theme.surface}`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={title.coverImage}
                        alt={title.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/50" />

                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
                        <div className="rounded-full border border-white/20 bg-black/35 p-3 text-white">
                          <Lock className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-semibold text-white">
                          정식 시청에서 전체 열기
                        </p>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </article>

            <article
              className={`rounded-[22px] border p-4 ${theme.shellBorder} ${theme.shell}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className={`text-[11px] font-bold uppercase tracking-[0.22em] ${theme.accent}`}
                  >
                    Free Recommendations
                  </p>
                  <h2 className={`mt-2 text-[26px] font-extrabold ${theme.title}`}>
                    같은 장르 무료 공개작
                  </h2>
                </div>

                <Link
                  href={discoverHallHref}
                  className="rounded-full border px-3 py-1 text-[11px] font-semibold transition"
                  style={hallButtonStyle}
                >
                  <span style={{ color: hallButtonStyle.color }}>더 보기</span>
                </Link>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {discoverRecommendations.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/ott/discover/watch/${item.slug}?returnTo=${encodeURIComponent(
                      currentDiscoverPath
                    )}`}
                    className={`overflow-hidden rounded-[18px] border transition ${theme.shellBorder} ${theme.shell}`}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={item.coverImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.88)_100%)]" />

                      <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                        FREE
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-lg font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-sm text-white/72">{item.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </article>
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
              <p
                className={`text-xs font-bold uppercase tracking-[0.24em] ${theme.accent}`}
              >
                Writer
              </p>
              <h2 className={`mt-3 text-3xl font-extrabold ${theme.title}`}>
                작가 소개
              </h2>
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
                <p className={`font-semibold ${theme.accent}`}>
                  지금은 1화만 무료 공개 중
                </p>
                <p className={`mt-2 leading-6 ${theme.body}`}>
                  2화부터는 잠겨 있고, 정식 시청 페이지에서 이어서 볼 수 있어.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={premiumWatchHref}
                  className="rounded-full border px-4 py-2 text-sm font-semibold transition"
                  style={hallButtonStyle}
                >
                  <span style={{ color: hallButtonStyle.color }}>
                    정식으로 이어보기
                  </span>
                </Link>

                <Link
                  href={discoverHallHref}
                  className="rounded-full border px-4 py-2 text-sm font-semibold transition"
                  style={hallButtonStyle}
                >
                  <span style={{ color: hallButtonStyle.color }}>
                    다른 무료작 보기
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
