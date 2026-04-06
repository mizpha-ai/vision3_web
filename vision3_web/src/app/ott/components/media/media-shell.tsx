// vision3_web/src/app/ott/components/media/media-shell.tsx
import {
  discoverFreeSlugByGenre,
  watchEntrySlugByMode,
} from "@/app/ott/data/watch-data";
import Image from "next/image";
import Link from "next/link";
import {
  discoverData,
  genreMenu,
  type GenreKey,
} from "@/app/ott/data/discover-data";

type Mode = "series" | "movies";

type Props = {
  activeGenre: GenreKey;
  mode: Mode;
};

const genreImages: Record<GenreKey, string[]> = {
  rofan: ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg"],
  romance: ["/images/img5.jpg", "/images/img6.jpg", "/images/img7.jpg", "/images/img8.jpg"],
  sf: ["/images/img9.jpg", "/images/img10.jpg", "/images/img11.jpg", "/images/img12.jpg"],
  murim: ["/images/img13.jpg", "/images/img14.jpg", "/images/img15.jpg", "/images/img16.jpg"],
  horror: ["/images/img17.jpg", "/images/img18.jpg", "/images/img19.jpg", "/images/img20.jpg"],
};

const progressValues = ["74%", "48%", "63%", "29%"];
const releaseDays = ["Coming Fri", "Next Week", "Coming Soon", "New Season"];

const copyByMode: Record<
  Mode,
  Record<
    GenreKey,
    {
      hallName: string;
      hallDesc: string;
      continueLabel: string;
      trendingLabel: string;
      shelfA: string;
      shelfB: string;
      editorLabel: string;
      upcomingLabel: string;
    }
  >
> = {
  series: {
    rofan: {
      hallName: "Royal Fantasy Drama Hall",
      hallDesc:
        "황궁의 긴장감과 감정선을 더 화려하게 보여주는 프리미엄 드라마 상영관.",
      continueLabel: "궁정 드라마 이어보기",
      trendingLabel: "지금 가장 주목받는 궁정 드라마",
      shelfA: "오늘의 황궁 드라마",
      shelfB: "관계선이 강한 드라마",
      editorLabel: "황궁 드라마 하이라이트",
      upcomingLabel: "곧 공개될 궁정 드라마",
    },
    romance: {
      hallName: "Romance Drama Hall",
      hallDesc:
        "조용한 감정선과 여운이 오래 남는 작품을 모은 프리미엄 로맨스 드라마 관.",
      continueLabel: "감정선 드라마 이어보기",
      trendingLabel: "오늘의 로맨스 드라마 인기작",
      shelfA: "여운이 남는 드라마",
      shelfB: "지금 많이 보는 관계 서사",
      editorLabel: "로맨스 드라마 하이라이트",
      upcomingLabel: "곧 공개될 로맨스 드라마",
    },
    sf: {
      hallName: "Science Fiction Drama Hall",
      hallDesc:
        "미래 도시와 시스템 서사를 더 강하게 몰입해서 보는 프리미엄 SF 드라마 관.",
      continueLabel: "시스템 드라마 이어보기",
      trendingLabel: "지금 가장 반응이 큰 SF 드라마",
      shelfA: "System Drama Picks",
      shelfB: "Archive Drama Selection",
      editorLabel: "Signal Drama Highlight",
      upcomingLabel: "곧 공개될 미래 드라마",
    },
    murim: {
      hallName: "Murim Drama Hall",
      hallDesc:
        "문파와 검객의 흐름을 더 묵직하게 보여주는 프리미엄 무협 드라마 상영관.",
      continueLabel: "강호 드라마 이어보기",
      trendingLabel: "지금 가장 강한 무협 드라마",
      shelfA: "문파 드라마 추천",
      shelfB: "검객 서사 모음",
      editorLabel: "강호 드라마 하이라이트",
      upcomingLabel: "곧 공개될 무협 드라마",
    },
    horror: {
      hallName: "Horror Drama Hall",
      hallDesc:
        "불길한 정적과 심리적 긴장을 더 진하게 체감하게 하는 프리미엄 공포 드라마 관.",
      continueLabel: "이상 징후 드라마 이어보기",
      trendingLabel: "Tonight’s Horror Drama Picks",
      shelfA: "가장 반응이 큰 공포 드라마",
      shelfB: "불길한 드라마 큐레이션",
      editorLabel: "심야 드라마 하이라이트",
      upcomingLabel: "곧 공개될 공포 드라마",
    },
  },
  movies: {
    rofan: {
      hallName: "Royal Fantasy Movie Hall",
      hallDesc:
        "황궁의 긴장감과 감정선을 더 화려하게 보여주는 프리미엄 영화 상영관.",
      continueLabel: "황궁 영화 이어보기",
      trendingLabel: "지금 가장 주목받는 궁정 영화",
      shelfA: "오늘의 황궁 영화",
      shelfB: "관계선이 강한 영화",
      editorLabel: "황궁 영화 하이라이트",
      upcomingLabel: "곧 공개될 궁정 영화",
    },
    romance: {
      hallName: "Romance Movie Hall",
      hallDesc:
        "조용한 감정선과 여운이 오래 남는 작품을 모은 프리미엄 로맨스 영화 관.",
      continueLabel: "감정선 영화 이어보기",
      trendingLabel: "오늘의 로맨스 영화 인기작",
      shelfA: "여운이 남는 영화",
      shelfB: "지금 많이 보는 감정 영화",
      editorLabel: "로맨스 영화 하이라이트",
      upcomingLabel: "곧 공개될 로맨스 영화",
    },
    sf: {
      hallName: "Science Fiction Movie Hall",
      hallDesc:
        "미래 도시와 시스템 서사를 더 강하게 몰입해서 보는 프리미엄 SF 영화 관.",
      continueLabel: "시스템 영화 이어보기",
      trendingLabel: "지금 가장 반응이 큰 SF 영화",
      shelfA: "System Movie Picks",
      shelfB: "Archive Movie Selection",
      editorLabel: "Signal Movie Highlight",
      upcomingLabel: "곧 공개될 미래 영화",
    },
    murim: {
      hallName: "Murim Movie Hall",
      hallDesc:
        "문파와 검객의 흐름을 더 묵직하게 보여주는 프리미엄 무협 영화 상영관.",
      continueLabel: "강호 영화 이어보기",
      trendingLabel: "지금 가장 강한 무협 영화",
      shelfA: "문파 영화 추천",
      shelfB: "검객 서사 모음",
      editorLabel: "강호 영화 하이라이트",
      upcomingLabel: "곧 공개될 무협 영화",
    },
    horror: {
      hallName: "Horror Movie Hall",
      hallDesc:
        "불길한 정적과 심리적 긴장을 더 진하게 체감하게 하는 프리미엄 공포 영화 관.",
      continueLabel: "이상 징후 영화 이어보기",
      trendingLabel: "Tonight’s Horror Movie Picks",
      shelfA: "가장 반응이 큰 공포 영화",
      shelfB: "불길한 영화 큐레이션",
      editorLabel: "심야 영화 하이라이트",
      upcomingLabel: "곧 공개될 공포 영화",
    },
  },
};

export default function MediaShell({ activeGenre, mode }: Props) {
  const content = discoverData[activeGenre];
  const currentImages = genreImages[activeGenre];
  const copy = copyByMode[mode][activeGenre];

  const routeBase = mode === "series" ? "series" : "movies";
  const hallPath = `/ott/${routeBase}/${activeGenre}`;
  const watchHref = `/ott/watch/${watchEntrySlugByMode[mode][activeGenre]}?returnTo=${encodeURIComponent(
    hallPath
  )}`;

  const freeDiscoverSlug =
    discoverFreeSlugByGenre[activeGenre]?.[0] ??
    watchEntrySlugByMode.series[activeGenre];

  const freeEpisodeHref = `/ott/discover/watch/${freeDiscoverSlug}?returnTo=${encodeURIComponent(
    hallPath
  )}`;

  const brandLabel = mode === "series" ? "Vision3 Drama" : "Vision3 Movie";
  const pageTitle = mode === "series" ? "Drama" : "Movie";
  const pageDesc =
    mode === "series"
      ? "같은 레이아웃 안에서 장르마다 다른 상영관에 들어온 것처럼 보이게 설계한 프리미엄 드라마 홈이야."
      : "같은 레이아웃 안에서 장르마다 다른 상영관에 들어온 것처럼 보이게 설계한 프리미엄 영화 홈이야.";

  const heroImage = currentImages[0];

  const continueWatching = currentImages.map((image, index) => ({
    title: `${content.project.title} · ${String(index + 1).padStart(2, "0")}`,
    subtitle: content.story.beats[index % content.story.beats.length],
    image,
    progress: progressValues[index % progressValues.length],
  }));

  const trendingCards = Array.from({ length: 5 }, (_, index) => ({
    rank: index + 1,
    title: `${content.panels[index % content.panels.length].title}`,
    subtitle: content.protagonist.tags[index % content.protagonist.tags.length],
    image: currentImages[index % currentImages.length],
  }));

  const shelfA = Array.from({ length: 6 }, (_, index) => ({
    title: `${content.panels[index % content.panels.length].title}`,
    desc: content.panels[index % content.panels.length].desc,
    image: currentImages[index % currentImages.length],
    tag: content.panels[index % content.panels.length].tag,
  }));

  const shelfB = Array.from({ length: 6 }, (_, index) => ({
    title: `${content.story.beats[index % content.story.beats.length]}`,
    desc: content.notes[index % content.notes.length].desc,
    image: currentImages[(index + 1) % currentImages.length],
    tag: content.notes[index % content.notes.length].label,
  }));

  const upcoming = currentImages.map((image, index) => ({
    title: `${content.label} New Drop ${index + 1}`,
    desc: content.actions[index % content.actions.length],
    image,
    day: releaseDays[index % releaseDays.length],
  }));

  const isRofan = activeGenre === "rofan";
  const isRomance = activeGenre === "romance";
  const isSf = activeGenre === "sf";
  const isMurim = activeGenre === "murim";
  const isHorror = activeGenre === "horror";

  const titleColorClass = isRofan
    ? "text-[#6f4b67]"
    : isRomance
      ? "text-[#4f3a3f]"
      : isSf
        ? "text-[#e8f7ff]"
        : isMurim
          ? "text-[#413a2c]"
          : "text-[#f1ebeb]";

  const bodyColorClass = isRofan
    ? "text-[#8f7186]"
    : isRomance
      ? "text-[#746166]"
      : isSf
        ? "text-[#8fb4c3]"
        : isMurim
          ? "text-[#716958]"
          : "text-[#968a8c]";

  const accentColorClass = isRofan
    ? "text-[#d17fa2]"
    : isRomance
      ? "text-[#b07a80]"
      : isSf
        ? "text-[#8aefff]"
        : isMurim
          ? "text-[#8c8f5f]"
          : "text-[#c97882]";

  const shellClass = isRofan
    ? "border-[#f1d6de] bg-white/82 shadow-[0_18px_40px_rgba(192,116,142,0.08)]"
    : isRomance
      ? "border-[#e7d9d7] bg-white/84 shadow-[0_18px_40px_rgba(170,140,140,0.08)]"
      : isSf
        ? "border-[#1b4d63] bg-transparent shadow-[0_0_28px_rgba(41,175,214,0.07)]"
        : isMurim
          ? "border-[#ddd4bf] bg-[#f7f3e8]/86 shadow-[0_18px_40px_rgba(154,141,98,0.10)]"
          : "border-[#24181b] bg-[#0d0b0c]/92 shadow-[0_18px_40px_rgba(0,0,0,0.28)]";

  const chipClass = isRofan
    ? "border-[#f7bfd6] bg-white/75 text-[#c76790] shadow-sm"
    : isRomance
      ? "border-[#e5d4d6] bg-white/78 text-[#b07a80] shadow-sm"
      : isSf
        ? "border-[#2aa8cf] bg-transparent text-[#8aefff] shadow-[0_0_20px_rgba(42,168,207,0.12)]"
        : isMurim
          ? "border-[#c7b78b] bg-[#f5efde]/85 text-[#7d6a3d] shadow-sm"
          : "border-[#6c3139] bg-[#120d0f]/90 text-[#d7b2b8] shadow-[0_0_18px_rgba(108,49,57,0.16)]";

  const softChipClass = isRofan
    ? "border-[#f7cfe0] bg-[#fff7fb]/85 text-[#b96b8b]"
    : isRomance
      ? "border-[#ead8da] bg-[#fff8f8]/85 text-[#9f7378]"
      : isSf
        ? "border-[#24556d] bg-transparent text-[#9ceeff]"
        : isMurim
          ? "border-[#d4c7a5] bg-[#fbf7ec]/90 text-[#8c7340]"
          : "border-[#4f2b31] bg-[#0f0b0c]/90 text-[#d5b0b6]";

  const primaryButtonClass = isRofan
    ? "bg-[linear-gradient(135deg,#ff9cc3,#ffc7df)] text-white shadow-[0_12px_24px_rgba(255,160,200,0.35)] hover:brightness-105"
    : isRomance
      ? "bg-[linear-gradient(135deg,#b7797f,#d4a29a)] text-white shadow-[0_12px_24px_rgba(183,121,127,0.22)] hover:brightness-105"
      : isSf
        ? "border border-[#2aa8cf] bg-transparent text-[#8aefff] shadow-[0_0_24px_rgba(42,168,207,0.14)] hover:border-[#46cfff] hover:text-[#b6f6ff]"
        : isMurim
          ? "bg-[linear-gradient(135deg,#7c8b5d,#b79c64)] text-[#1c2015] shadow-[0_12px_24px_rgba(124,139,93,0.20)] hover:brightness-105"
          : "bg-[linear-gradient(135deg,#5a141f,#9b3040)] text-white shadow-[0_12px_24px_rgba(90,20,31,0.28)] hover:brightness-105";

  const secondaryButtonClass = isRofan
    ? "border-[#f6c8da] bg-white/80 text-[#bb7391] hover:bg-white"
    : isRomance
      ? "border-[#e4d2d3] bg-white/78 text-[#8d6b70] hover:bg-white"
      : isSf
        ? "border-[#214f63] bg-transparent text-[#7ea6b8] hover:border-[#2f6f8b] hover:text-[#a3d8ec]"
        : isMurim
          ? "border-[#cdbf98] bg-[#f6f1e3] text-[#7a6840] hover:bg-white"
          : "border-[#4f2b31] bg-[#0f0b0c]/90 text-[#b59b9f] hover:border-[#744149] hover:text-[#d7b9bd]";

  return (
    <main
      className={`relative isolate min-h-screen overflow-hidden ${
        isRofan
          ? "bg-[#fff8fc] text-[#6f4b67]"
          : isRomance
            ? "bg-[#faf6f2] text-[#4f3a3f]"
            : isSf
              ? "bg-[#061019] text-[#e8f7ff]"
              : isMurim
                ? "bg-[#f4f0e4] text-[#4a4330]"
                : "bg-[#060606] text-[#ede7e7]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {isRofan ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff8fc_0%,#fff6fb_18%,#fff8fc_48%,#f8fbff_100%)]" />
            <div className="absolute left-[-185px] top-[-350px] h-[700px] w-[700px] rounded-full bg-[#ffd8ec] blur-[165px]" />
            <div className="absolute left-[15%] top-[-185px] h-[470px] w-[470px] rounded-full bg-[#fff8fc] blur-[130px]" />
            <div className="absolute right-[-185px] top-[-230px] h-[680px] w-[680px] rounded-full bg-[#eef9ff] blur-[165px]" />
            <div className="absolute bottom-[-120px] left-[14%] h-[340px] w-[340px] rounded-full bg-[#e7dcff] blur-[110px]" />
            <div className="absolute bottom-[-100px] right-[10%] h-[320px] w-[320px] rounded-full bg-[#dff4ff] blur-[110px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,216,236,0.24),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(223,244,255,0.20),transparent_30%),radial-gradient(circle_at_18%_6%,rgba(231,220,255,0.18),transparent_28%)]" />
          </>
        ) : isRomance ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#faf6f2_0%,#f7f0eb_28%,#f8f3ef_62%,#fcfaf8_100%)]" />
            <div className="absolute left-[-80px] top-[-90px] h-[300px] w-[300px] rounded-full bg-[#ead5d8] blur-[85px]" />
            <div className="absolute right-[-70px] top-[100px] h-[260px] w-[260px] rounded-full bg-[#f1ddd4] blur-[85px]" />
            <div className="absolute bottom-[-90px] left-[16%] h-[280px] w-[280px] rounded-full bg-[#e9dede] blur-[95px]" />
            <div className="absolute bottom-[-80px] right-[14%] h-[300px] w-[300px] rounded-full bg-[#f3ebe4] blur-[95px]" />
          </>
        ) : isSf ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#061019_0%,#081722_26%,#0a1b29_58%,#07131d_100%)]" />
            <div className="absolute left-[-90px] top-[-90px] h-[340px] w-[340px] rounded-full bg-[#3ecfff]/18 blur-[110px]" />
            <div className="absolute right-[-80px] top-[80px] h-[300px] w-[300px] rounded-full bg-[#5ea9ff]/14 blur-[110px]" />
            <div className="absolute bottom-[-100px] left-[14%] h-[320px] w-[320px] rounded-full bg-[#89e8ff]/10 blur-[120px]" />
            <div className="absolute bottom-[-80px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#7cd7ff]/10 blur-[120px]" />
          </>
        ) : isMurim ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#f4f0e4_0%,#ece7d7_30%,#e6e1d2_62%,#eef0e5_100%)]" />
            <div className="absolute left-[-90px] top-[-90px] h-[320px] w-[320px] rounded-full bg-[#d9dfc3] blur-[100px]" />
            <div className="absolute right-[-80px] top-[90px] h-[280px] w-[280px] rounded-full bg-[#e7d8b4] blur-[100px]" />
            <div className="absolute bottom-[-90px] left-[14%] h-[300px] w-[300px] rounded-full bg-[#d7dfcf] blur-[110px]" />
            <div className="absolute bottom-[-80px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#efe7d3] blur-[110px]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#060606_0%,#0b090a_28%,#11090b_60%,#070707_100%)]" />
            <div className="absolute left-[-90px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#7d1f2a]/18 blur-[110px]" />
            <div className="absolute right-[-80px] top-[100px] h-[280px] w-[280px] rounded-full bg-[#2a3034]/14 blur-[110px]" />
            <div className="absolute bottom-[-100px] left-[14%] h-[320px] w-[320px] rounded-full bg-[#4b0f17]/12 blur-[120px]" />
            <div className="absolute bottom-[-80px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#1b2225]/10 blur-[120px]" />
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,white_0.6px,transparent_0.8px)] bg-[size:14px_14px]" />
          </>
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        <p className={`mt-6 text-xs font-bold uppercase tracking-[0.30em] ${accentColorClass}`}>
          {brandLabel}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{pageTitle}</h1>
        <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
          <p className={`max-w-3xl text-sm leading-7 sm:text-base ${bodyColorClass}`}>
            {pageDesc}
          </p>

          <div className="flex shrink-0 flex-wrap justify-end gap-2">
            {genreMenu.map((item) => {
              const isActive = item.key === activeGenre;

              return (
                <Link
                  key={item.key}
                  href={`/ott/${routeBase}/${item.key}`}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    isRofan
                      ? isActive
                        ? "border border-[#f6bfd8] bg-[#fff0f7] text-[#c76790] shadow-sm hover:bg-[#ffe8f3]"
                        : "bg-white/70 text-[#b46b89] hover:bg-white hover:text-[#c76790]"
                      : isRomance
                        ? isActive
                          ? "border border-[#e6d2d6] bg-[#f8f1f2] text-[#a86f74] shadow-sm hover:bg-[#f3ebec]"
                          : "bg-white/72 text-[#9a7278] hover:bg-white hover:text-[#a86f74]"
                        : isSf
                          ? isActive
                            ? "border border-[#2aa8cf] bg-transparent text-[#8aefff] shadow-[0_0_24px_rgba(42,168,207,0.14)] hover:border-[#46cfff] hover:text-[#b6f6ff]"
                            : "bg-transparent text-[#7ea6b8] hover:border-[#1f5168] hover:text-[#a3d8ec]"
                          : isMurim
                            ? isActive
                              ? "border border-[#c6ba92] bg-[#f2ecdc] text-[#695c37] shadow-sm hover:bg-[#ece4d0]"
                              : "bg-white/65 text-[#84785b] hover:bg-white hover:text-[#695c37]"
                            : isActive
                              ? "border border-[#6f2a34] bg-[#140d0f] text-[#e7c3c8] shadow-[0_0_22px_rgba(111,42,52,0.18)] hover:bg-[#1a0f12]"
                              : "bg-[#0c0a0b]/80 text-[#8f7f82] hover:bg-[#121011] hover:text-[#c3a2a8]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <section className={`mt-8 overflow-hidden rounded-[36px] border ${shellClass}`}>
          <div className="grid gap-0 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[560px] overflow-hidden">
              <Image
                src={heroImage}
                alt={`${content.label} hall hero`}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 55vw"
                priority
              />
              <div
                className={`absolute inset-0 ${
                  isRofan
                    ? "bg-[linear-gradient(to_top,rgba(255,250,252,0.94)_12%,rgba(255,250,252,0.34)_48%,rgba(255,250,252,0.08)_100%)]"
                    : isRomance
                      ? "bg-[linear-gradient(to_top,rgba(255,250,251,0.92)_12%,rgba(255,250,251,0.28)_48%,rgba(255,250,251,0.08)_100%)]"
                      : isSf
                        ? "bg-[linear-gradient(to_top,rgba(3,10,18,0.88)_10%,rgba(3,10,18,0.26)_48%,rgba(3,10,18,0.04)_100%)]"
                        : isMurim
                          ? "bg-[linear-gradient(to_top,rgba(244,240,228,0.88)_10%,rgba(244,240,228,0.22)_45%,rgba(244,240,228,0.06)_100%)]"
                          : "bg-[linear-gradient(to_top,rgba(7,7,7,0.92)_10%,rgba(7,7,7,0.34)_45%,rgba(7,7,7,0.10)_100%)]"
                }`}
              />

              <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                <span
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] ${chipClass}`}
                >
                  {copy.hallName}
                </span>
                <span
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] ${softChipClass}`}
                >
                  Genre Hall
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className={`text-xs font-bold uppercase tracking-[0.28em] ${accentColorClass}`}>
                  {content.hero.eyebrow}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={watchHref}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${primaryButtonClass}`}
                  >
                    지금 재생
                  </Link>

                  <Link
                    href={freeEpisodeHref}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${primaryButtonClass}`}
                  >
                    1화 무료 보기
                  </Link>

                  <button
                    type="button"
                    className={`rounded-full border px-5 py-3 text-sm font-medium transition ${secondaryButtonClass}`}
                  >
                    예고편 보기
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-1">
              <article className={`rounded-[28px] border p-6 ${shellClass}`}>
                <p className={`text-xs font-bold uppercase tracking-[0.24em] ${accentColorClass}`}>
                  Hall Identity
                </p>
                <h3 className={`mt-3 text-2xl font-extrabold ${titleColorClass}`}>
                  {copy.hallName}
                </h3>
                <p className={`mt-4 text-sm leading-7 ${bodyColorClass}`}>{copy.hallDesc}</p>
              </article>

              <article className={`rounded-[28px] border p-6 ${shellClass}`}>
                <p className={`text-xs font-bold uppercase tracking-[0.24em] ${accentColorClass}`}>
                  Featured Character
                </p>
                <h3 className={`mt-3 text-2xl font-extrabold ${titleColorClass}`}>
                  {content.protagonist.name}
                </h3>
                <p className={`mt-2 text-sm ${bodyColorClass}`}>{content.protagonist.role}</p>
                <p className={`mt-4 text-sm leading-7 ${bodyColorClass}`}>
                  {content.protagonist.desc}
                </p>
              </article>

              <article className={`rounded-[28px] border p-6 ${shellClass}`}>
                <p className={`text-xs font-bold uppercase tracking-[0.24em] ${accentColorClass}`}>
                  Story Note
                </p>
                <p className={`mt-4 text-sm leading-7 ${bodyColorClass}`}>{content.hero.note}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {content.protagonist.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-2 text-xs font-semibold ${chipClass}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="grid gap-5 md:grid-cols-3">
            {content.stats.map((stat) => (
              <article
                key={stat.label}
                className={`rounded-[28px] border p-6 backdrop-blur-xl ${shellClass}`}
              >
                <p className={`text-xs font-bold uppercase tracking-[0.24em] ${accentColorClass}`}>
                  {stat.label}
                </p>
                <h3 className={`mt-3 text-4xl font-extrabold ${titleColorClass}`}>
                  {stat.value}
                </h3>
                <p className={`mt-3 text-sm leading-7 ${bodyColorClass}`}>{stat.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pt-10">
          <div className="mb-5 flex items-end justify-between">
            <h2 className={`text-3xl font-extrabold ${titleColorClass}`}>{copy.continueLabel}</h2>
            <button type="button" className={`text-sm font-semibold ${accentColorClass}`}>
              전체 보기
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {continueWatching.map((item) => (
              <article
                key={item.title}
                className={`overflow-hidden rounded-[28px] border ${shellClass}`}
              >
                <div className="relative h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 25vw"
                  />
                </div>

                <div className="p-5">
                  <p className={`text-sm font-semibold ${accentColorClass}`}>{item.subtitle}</p>
                  <h3 className={`mt-2 text-xl font-extrabold ${titleColorClass}`}>{item.title}</h3>

                  <div className="mt-4">
                    <div className="h-2 w-full rounded-full bg-black/10">
                      <div
                        className={`h-2 rounded-full ${
                          isRofan
                            ? "bg-[#f2a8cb]"
                            : isRomance
                              ? "bg-[#efc1b6]"
                              : isSf
                                ? "bg-[#65dcff]"
                                : isMurim
                                  ? "bg-[#b4d486]"
                                  : "bg-[#c76b76]"
                        }`}
                        style={{ width: item.progress }}
                      />
                    </div>
                    <p className={`mt-2 text-xs font-semibold ${bodyColorClass}`}>
                      {item.progress} watched
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pt-10">
          <div className="mb-5 flex items-end justify-between">
            <h2 className={`text-3xl font-extrabold ${titleColorClass}`}>{copy.trendingLabel}</h2>
            <button type="button" className={`text-sm font-semibold ${accentColorClass}`}>
              순위 보기
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {trendingCards.map((item) => (
              <article
                key={`${item.rank}-${item.title}`}
                className={`overflow-hidden rounded-[28px] border ${shellClass}`}
              >
                <div className="relative h-[260px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 20vw"
                  />
                  <div className="absolute left-4 top-4 text-5xl font-black text-white/85">
                    {item.rank}
                  </div>
                </div>

                <div className="p-5">
                  <p className={`text-sm font-semibold ${accentColorClass}`}>{item.subtitle}</p>
                  <h3 className={`mt-2 text-xl font-extrabold ${titleColorClass}`}>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pt-10">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className={`overflow-hidden rounded-[34px] border ${shellClass}`}>
              <div className={`h-full min-h-[360px] ${content.project.visual} p-7`}>
                <p
                  className={`text-xs font-bold uppercase tracking-[0.28em] ${
                    isSf || isHorror ? "text-white/80" : accentColorClass
                  }`}
                >
                  {content.project.eyebrow}
                </p>

                <h2
                  className={`mt-4 text-4xl font-extrabold leading-tight ${
                    isSf || isHorror ? "text-white" : titleColorClass
                  }`}
                >
                  {content.project.title}
                </h2>

                <p
                  className={`mt-4 max-w-2xl text-sm leading-7 ${
                    isSf || isHorror ? "text-white/78" : bodyColorClass
                  }`}
                >
                  {content.project.desc}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Episode", value: content.project.episode },
                    { label: "Status", value: content.project.status },
                    { label: "Key Point", value: content.project.point },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className={`rounded-[20px] border p-4 ${
                        isSf || isHorror
                          ? "border-white/14 bg-black/20 text-white"
                          : "border-black/10 bg-white/50 text-black/75"
                      }`}
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] opacity-70">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-semibold">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={watchHref}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${primaryButtonClass}`}
                  >
                    지금 감상하기
                  </Link>
                  <button
                    type="button"
                    className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
                      isSf || isHorror
                        ? "border-white/16 bg-black/20 text-white/85 hover:bg-black/30"
                        : "border-black/10 bg-white/60 text-black/70 hover:bg-white"
                    }`}
                  >
                    상세 정보 보기
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {content.notes.map((note) => (
                <article
                  key={note.title}
                  className={`rounded-[30px] border p-6 backdrop-blur-xl ${shellClass}`}
                >
                  <p className={`text-xs font-bold uppercase tracking-[0.24em] ${accentColorClass}`}>
                    {copy.editorLabel}
                  </p>
                  <h3 className={`mt-3 text-2xl font-extrabold ${titleColorClass}`}>
                    {note.title}
                  </h3>
                  <p className={`mt-4 text-sm leading-7 ${bodyColorClass}`}>{note.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="mb-5 flex items-end justify-between">
            <h2 className={`text-3xl font-extrabold ${titleColorClass}`}>{copy.shelfA}</h2>
            <button type="button" className={`text-sm font-semibold ${accentColorClass}`}>
              더 보기
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {shelfA.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`overflow-hidden rounded-[28px] border ${shellClass}`}
              >
                <div className="relative h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 16vw"
                  />
                </div>

                <div className="p-5">
                  <p className={`text-xs font-bold uppercase tracking-[0.18em] ${accentColorClass}`}>
                    {item.tag}
                  </p>
                  <h3 className={`mt-2 text-lg font-extrabold ${titleColorClass}`}>{item.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${bodyColorClass}`}>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pt-10">
          <div className="mb-5 flex items-end justify-between">
            <h2 className={`text-3xl font-extrabold ${titleColorClass}`}>{copy.shelfB}</h2>
            <button type="button" className={`text-sm font-semibold ${accentColorClass}`}>
              전체 보기
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {shelfB.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`overflow-hidden rounded-[28px] border ${shellClass}`}
              >
                <div className="relative h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 16vw"
                  />
                </div>

                <div className="p-5">
                  <p className={`text-xs font-bold uppercase tracking-[0.18em] ${accentColorClass}`}>
                    {item.tag}
                  </p>
                  <h3 className={`mt-2 text-lg font-extrabold ${titleColorClass}`}>{item.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${bodyColorClass}`}>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-10 pt-10">
          <div className="mb-5 flex items-end justify-between">
            <h2 className={`text-3xl font-extrabold ${titleColorClass}`}>{copy.upcomingLabel}</h2>
            <button type="button" className={`text-sm font-semibold ${accentColorClass}`}>
              공개 일정
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {upcoming.map((item) => (
              <article
                key={`${item.title}-${item.day}`}
                className={`overflow-hidden rounded-[28px] border ${shellClass}`}
              >
                <div className="relative h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 25vw"
                  />
                </div>

                <div className="p-5">
                  <span
                    className={`rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] ${softChipClass}`}
                  >
                    {item.day}
                  </span>
                  <h3 className={`mt-3 text-xl font-extrabold ${titleColorClass}`}>{item.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${bodyColorClass}`}>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
