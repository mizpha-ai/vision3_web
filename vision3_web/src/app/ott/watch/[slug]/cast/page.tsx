// vision3_web/src/app/ott/watch/[slug]/cast/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getWatchTitleBySlug,
  protagonistImageByName,
  watchCatalog,
  type WatchTitle,
} from "@/app/ott/data/watch-data";
import WatchBackground from "@/app/ott/watch/_components/watch-background";
import {
  getSelectedEpisode,
  hallButtonStyleByGenre,
  protagonistDescByGenre,
  protagonistRoleByGenre,
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

const genreLabelInEnglish: Record<string, string> = {
  rofan: "Romance Fantasy",
  romance: "Romance",
  sf: "Sci-Fi",
  murim: "Murim",
  horror: "Horror",
};

function getActorWorksWithFallback(
  currentTitle: WatchTitle,
  protagonistName: string,
  minCount = 8
) {
  const matchedWorks = watchCatalog.filter(
    (item) => item.slug !== currentTitle.slug && item.cast.includes(protagonistName)
  );

  if (matchedWorks.length >= minCount) {
    return matchedWorks.slice(0, minCount);
  }

  const fallbackPool = watchCatalog
    .filter(
      (item) =>
        item.slug !== currentTitle.slug &&
        !matchedWorks.some((matched) => matched.slug === item.slug)
    )
    .sort((a, b) => {
      const aScore =
        (a.genre === currentTitle.genre ? 3 : 0) +
        (a.mode === currentTitle.mode ? 1 : 0) +
        a.cast.filter((name) => currentTitle.cast.includes(name)).length;

      const bScore =
        (b.genre === currentTitle.genre ? 3 : 0) +
        (b.mode === currentTitle.mode ? 1 : 0) +
        b.cast.filter((name) => currentTitle.cast.includes(name)).length;

      return bScore - aScore;
    });

  return [...matchedWorks, ...fallbackPool].slice(0, minCount);
}

export default async function CastPage({ params, searchParams }: PageProps) {
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

  const protagonistName = title.cast[0] ?? `${title.title} Lead`;
  const protagonistImage =
    protagonistImageByName[protagonistName] ?? "/images/main5.png";

  const originReturnTo = resolvedSearchParams.returnTo;
  const backHref =
    originReturnTo || `/ott/watch/${title.slug}?episode=${selectedEpisode.number}`;

  const currentCastPath = `/ott/watch/${title.slug}/cast?episode=${
    selectedEpisode.number
  }${
    originReturnTo ? `&returnTo=${encodeURIComponent(originReturnTo)}` : ""
  }`;

  const actorWorks = getActorWorksWithFallback(title, protagonistName, 8);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <WatchBackground genre={title.genre} />

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-[84px] md:px-8 lg:px-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Link
            href={backHref}
            className="rounded-full border px-4 py-2 text-sm font-semibold transition"
            style={hallButtonStyle}
          >
            <span style={{ color: hallButtonStyle.color }}>← 이전으로</span>
          </Link>
        </div>

        <section
          className={`rounded-[34px] border p-6 md:p-8 ${theme.shellBorder} ${theme.shell}`}
        >
          <div className="grid gap-6 md:grid-cols-[180px_1fr]">
            <div className="relative h-[220px] overflow-hidden rounded-[28px] md:h-full">
              <Image
                src={protagonistImage}
                alt={protagonistName}
                fill
                className="object-cover"
                sizes="180px"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.68)_100%)]" />
            </div>

            <div>
              <p className={`text-xs font-bold uppercase tracking-[0.24em] ${theme.accent}`}>
                Actor Works
              </p>
              <h1 className={`mt-3 text-4xl font-extrabold tracking-tight ${theme.title}`}>
                {protagonistName} 출연 작품
              </h1>
              <p className={`mt-3 text-sm font-medium ${theme.accent}`}>
                {protagonistRoleByGenre[title.genre]}
              </p>
              <p className={`mt-4 text-sm leading-7 ${theme.body}`}>
                {protagonistDescByGenre[title.genre]}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {actorWorks.map((work) => (
              <Link
                key={work.slug}
                href={`/ott/watch/${work.slug}?returnTo=${encodeURIComponent(currentCastPath)}`}
                className={`overflow-hidden rounded-[26px] border transition ${theme.shellBorder} ${theme.shell}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={work.coverImage}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0.86)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xl font-semibold text-white">{work.title}</p>
                    <p className="mt-1 text-sm font-medium text-white/72">
                      · {genreLabelInEnglish[work.genre] ?? "Genre"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}