// vision3_web/src/app/ott/components/discover/discover-shell.tsx
import Image from "next/image";
import Link from "next/link";
import {
    discoverData,
    genreMenu,
    type GenreKey,
} from "@/app/ott/data/discover-data";
import {
    discoverFreeSlugByGenre,
    getWatchTitleBySlug,
    watchEntrySlugByMode,
    type WatchTitle,
} from "@/app/ott/data/watch-data";

type Props = {
    activeGenre: GenreKey;
};

const genreImages: Record<GenreKey, string[]> = {
    rofan: ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg"],
    romance: ["/images/img5.jpg", "/images/img6.jpg", "/images/img7.jpg", "/images/img8.jpg"],
    sf: ["/images/img9.jpg", "/images/img10.jpg", "/images/img11.jpg", "/images/img12.jpg"],
    murim: ["/images/img13.jpg", "/images/img14.jpg", "/images/img15.jpg", "/images/img16.jpg"],
    horror: ["/images/img17.jpg", "/images/img18.jpg", "/images/img19.jpg", "/images/img20.jpg"],
};

const freeCtas = [
    "1화 무료 보기",
    "무료 시작",
    "1화 무료 공개",
    "지금 무료 보기",
    "무료 입문하기",
    "1화 보러 가기",
];

function repeatToLength<T>(items: T[], length: number) {
    if (items.length === 0) return [];
    return Array.from({ length }, (_, index) => items[index % items.length]);
}

function getDiscoverSeriesTitles(activeGenre: GenreKey) {
    const seriesTitles = (discoverFreeSlugByGenre[activeGenre] ?? [])
        .map((slug) => getWatchTitleBySlug(slug))
        .filter((item): item is WatchTitle => Boolean(item))
        .filter((item) => item.mode === "series");

    if (seriesTitles.length > 0) {
        return seriesTitles;
    }

    const fallback = getWatchTitleBySlug(watchEntrySlugByMode.series[activeGenre]);
    return fallback ? [fallback] : [];
}

export default function DiscoverShell({ activeGenre }: Props) {
    const content = discoverData[activeGenre];
    const theme = content.theme;
    const currentImages = genreImages[activeGenre];
    const discoverBasePath = `/ott/discover/${activeGenre}`;
    const discoverSeriesTitles = getDiscoverSeriesTitles(activeGenre);

    const repeatedTitles = repeatToLength(discoverSeriesTitles, 12);
    const heroTitle = repeatedTitles[0];
    const sideCards = repeatedTitles.slice(1, 4);
    const startCards = repeatedTitles.slice(0, 4);
    const expandedCards = repeatedTitles.slice(0, 8);

    const getGenreImage = (index: number) => currentImages[index % currentImages.length];

    const heroImage = getGenreImage(0);
    const heroWatchHref = heroTitle
        ? `/ott/discover/watch/${heroTitle.slug}?returnTo=${encodeURIComponent(
            discoverBasePath
        )}`
        : discoverBasePath;

    const isRofan = activeGenre === "rofan";
    const isRomance = activeGenre === "romance";
    const isSf = activeGenre === "sf";
    const isMurim = activeGenre === "murim";
    const isHorror = activeGenre === "horror";

    const heroPrimaryChipClass = isRofan
        ? "border-[#f7bfd6] bg-white/75 text-[#c76790] shadow-sm"
        : isRomance
            ? "border-[#e5d4d6] bg-white/78 text-[#b07a80] shadow-sm"
            : isSf
                ? "border-[#2aa8cf] bg-transparent text-[#8aefff] shadow-[0_0_20px_rgba(42,168,207,0.12)]"
                : isMurim
                    ? "border-[#c7b78b] bg-[#f5efde]/85 text-[#7d6a3d] shadow-sm"
                    : "border-[#6c3139] bg-[#120d0f]/90 text-[#d7b2b8] shadow-[0_0_18px_rgba(108,49,57,0.16)]";

    const heroSecondaryChipClass = isRofan
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

    const cardButtonClass = isRofan
        ? "border-[#f6c8da] bg-[#fff8fb] text-[#bb7391] hover:bg-white"
        : isRomance
            ? "border-[#e4d2d3] bg-[#faf6f6] text-[#8d6b70] hover:bg-white"
            : isSf
                ? "border-[#214f63] bg-transparent text-[#8aefff] hover:border-[#2f6f8b] hover:text-[#b6f6ff]"
                : isMurim
                    ? "border-[#d0c4a1] bg-[#f8f3e7] text-[#7a6840] hover:bg-white"
                    : "border-[#4d2d33] bg-[#120e0f] text-[#d0b0b5] hover:border-[#744149] hover:text-[#ebc9cf]";

    return (
        <main
            className={`relative isolate min-h-screen overflow-hidden ${isRofan
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
                        <div className="absolute left-[-185px] top-[-250px] h-[700px] w-[700px] rounded-full bg-[#ffd8ec] blur-[165px]" />
                        <div className="absolute left-[15%] top-[-185px] h-[470px] w-[470px] rounded-full bg-[#fff8fc] blur-[130px]" />
                        <div className="absolute right-[-185px] top-[-230px] h-[680px] w-[680px] rounded-full bg-[#eef9ff] blur-[165px]" />
                        <div className="absolute bottom-[-120px] left-[14%] h-[340px] w-[340px] rounded-full bg-[#e7dcff] blur-[110px]" />
                        <div className="absolute bottom-[-100px] right-[10%] h-[320px] w-[320px] rounded-full bg-[#dff4ff] blur-[110px]" />
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

            <div className="relative z-10 mx-auto max-w-7xl px-5 pb-8 pt-14 md:px-8 lg:px-10">
                <div
                    className={`mb-8 flex flex-col gap-5 border-b pb-6 xl:flex-row xl:items-end xl:justify-between ${isRofan
                            ? "border-[#f0dbe5]"
                            : isRomance
                                ? "border-[#e8ddda]"
                                : isSf
                                    ? "border-[#17384a]"
                                    : isMurim
                                        ? "border-[#d8d0ba]"
                                        : "border-[#2a1a1d]"
                        }`}
                >
                    <div>
                        <p
                            className={`text-xs font-bold uppercase tracking-[0.30em] ${isRofan
                                    ? "text-[#d17fa2]"
                                    : isRomance
                                        ? "text-[#b07a80]"
                                        : isSf
                                            ? "text-[#8aefff]"
                                            : isMurim
                                                ? "text-[#8c8f5f]"
                                                : "text-[#c97882]"
                                }`}
                        >
                            Vision3 Discover
                        </p>
                        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                            Discover
                        </h1>
                        <p
                            className={`mt-4 max-w-3xl text-sm leading-7 sm:text-base ${isRofan
                                    ? "text-[#8f7186]"
                                    : isRomance
                                        ? "text-[#7d666d]"
                                        : isSf
                                            ? "text-[#8fb4c3]"
                                            : isMurim
                                                ? "text-[#7a745f]"
                                                : "text-[#918585]"
                                }`}
                        >
                            누구나 가볍게 들어와서 무료 1화부터 시작할 수 있는 발견형 콘텐츠 공간.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {genreMenu.map((item) => {
                            const isActive = item.key === activeGenre;

                            return (
                                <Link
                                    key={item.key}
                                    href={`/ott/discover/${item.key}`}
                                    className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${isRofan
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

                <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
                    <div
                        className={`h-full overflow-hidden rounded-[34px] border backdrop-blur-xl ${isRofan
                                ? "border-[#ffe0eb] bg-white/80 shadow-[0_24px_60px_rgba(255,192,218,0.18)]"
                                : isRomance
                                    ? "border-[#e8dcda] bg-white/82 shadow-[0_24px_60px_rgba(183,155,156,0.12)]"
                                    : isSf
                                        ? "border-[#1b4d63] bg-transparent shadow-[0_0_42px_rgba(41,175,214,0.10)]"
                                        : isMurim
                                            ? "border-[#ddd4bf] bg-[#f7f3e8]/84 shadow-[0_24px_60px_rgba(154,141,98,0.14)]"
                                            : "border-[#24181b] bg-[#0b0a0a]/92 shadow-[0_24px_60px_rgba(0,0,0,0.38)]"
                            }`}
                    >
                        <div
                            className={`relative h-full min-h-[560px] overflow-hidden ${isRofan
                                    ? "rounded-[28px] border border-[#ffe2ef]"
                                    : isRomance
                                        ? "rounded-[28px] border border-[#e9dfdc]"
                                        : isSf
                                            ? "rounded-[28px] border border-[#1d5168]"
                                            : isMurim
                                                ? "rounded-[28px] border border-[#d6ccb5]"
                                                : "rounded-[28px] border border-[#2d1d21]"
                                }`}
                        >
                            <Image
                                src={heroImage}
                                alt={`${activeGenre} free hero`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1280px) 100vw, 55vw"
                                priority
                            />
                            <div
                                className={`absolute inset-0 ${isRofan
                                        ? "bg-[linear-gradient(to_top,rgba(255,250,252,0.95)_10%,rgba(255,250,252,0.35)_48%,rgba(255,250,252,0.08)_100%)]"
                                        : isRomance
                                            ? "bg-[linear-gradient(to_top,rgba(255,250,251,0.92)_10%,rgba(255,250,251,0.28)_48%,rgba(255,250,251,0.08)_100%)]"
                                            : isSf
                                                ? "bg-[linear-gradient(to_top,rgba(3,10,18,0.88)_10%,rgba(3,10,18,0.28)_48%,rgba(3,10,18,0.04)_100%)]"
                                                : isMurim
                                                    ? "bg-[linear-gradient(to_top,rgba(244,240,228,0.88)_8%,rgba(244,240,228,0.22)_45%,rgba(244,240,228,0.06)_100%)]"
                                                    : "bg-[linear-gradient(to_top,rgba(7,7,7,0.92)_8%,rgba(7,7,7,0.34)_45%,rgba(7,7,7,0.10)_100%)]"
                                    }`}
                            />

                            <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                                <span
                                    className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] ${heroPrimaryChipClass}`}
                                >
                                    대표 무료 카드
                                </span>
                                <span
                                    className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] ${heroSecondaryChipClass}`}
                                >
                                    1화 무료 공개
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-7">
                                <p
                                    className={`text-xs font-bold uppercase tracking-[0.28em] ${isRofan
                                            ? "text-[#d17fa2]"
                                            : isRomance
                                                ? "text-[#b07a80]"
                                                : isSf
                                                    ? "text-[#8aefff]"
                                                    : isMurim
                                                        ? "text-[#8c8f5f]"
                                                        : "text-[#c97882]"
                                        }`}
                                >
                                    {heroTitle?.subtitle ?? content.hero.eyebrow}
                                </p>

                                <h2
                                    className={`mt-3 text-4xl font-extrabold leading-tight ${isRofan
                                            ? "text-[#6f4b67]"
                                            : isRomance
                                                ? "text-[#4f3a3f]"
                                                : isSf
                                                    ? "text-[#e8f7ff]"
                                                    : isMurim
                                                        ? "text-[#413a2c]"
                                                        : "text-[#f1ebeb]"
                                        }`}
                                >
                                    {heroTitle?.title ?? content.hero.title}
                                </h2>

                                <p
                                    className={`mt-4 max-w-2xl text-sm leading-7 ${isRofan
                                            ? "text-[#8f7186]"
                                            : isRomance
                                                ? "text-[#746166]"
                                                : isSf
                                                    ? "text-[#8fb4c3]"
                                                    : isMurim
                                                        ? "text-[#716958]"
                                                        : "text-[#9d8f91]"
                                        }`}
                                >
                                    {heroTitle?.description ?? content.hero.desc}
                                </p>

                                <div
                                    className={`mt-5 rounded-[20px] border px-4 py-4 text-sm ${isRofan
                                            ? "border-[#f6d7e4] bg-[#fff9fc] text-[#a56f86]"
                                            : isRomance
                                                ? "border-[#e8d7d8] bg-[#fcf8f8] text-[#8e6d72]"
                                                : isSf
                                                    ? "border-[#214f63] bg-transparent text-[#9ceeff]"
                                                    : isMurim
                                                        ? "border-[#d5c7a4] bg-[#fbf7ec] text-[#7a6840]"
                                                        : "border-[#382126] bg-[#100c0d] text-[#ccb2b6]"
                                        }`}
                                >
                                    디스커벌에서는 시리즈 1화만 무료로 공개돼. 다음 화는 락 처리되고 정식 시청으로 이어지게 돼.
                                </div>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link
                                        href={heroWatchHref}
                                        className={`rounded-full px-5 py-3 text-sm font-semibold transition ${primaryButtonClass}`}
                                    >
                                        1화 무료 보기
                                    </Link>

                                    <a
                                        href="#discover-free-grid"
                                        className={`rounded-full border px-5 py-3 text-sm font-medium transition ${secondaryButtonClass}`}
                                    >
                                        무료 공개작 둘러보기
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        {sideCards.map((card, index) => {
                            const href = `/ott/discover/watch/${card.slug}?returnTo=${encodeURIComponent(
                                discoverBasePath
                            )}`;

                            return (
                                <article
                                    key={`${card.slug}-${index}`}
                                    className={`overflow-hidden rounded-[30px] border backdrop-blur-xl ${isRofan
                                            ? "border-[#ffe0eb] bg-white/82 shadow-[0_18px_40px_rgba(255,186,211,0.18)]"
                                            : isRomance
                                                ? "border-[#e7d9d7] bg-white/84 shadow-[0_18px_40px_rgba(170,140,140,0.08)]"
                                                : isSf
                                                    ? "border-[#1b4d63] bg-transparent shadow-[0_0_30px_rgba(41,175,214,0.08)]"
                                                    : isMurim
                                                        ? "border-[#ddd4bf] bg-[#f7f3e8]/86 shadow-[0_18px_40px_rgba(154,141,98,0.10)]"
                                                        : "border-[#24181b] bg-[#0d0b0c]/92 shadow-[0_18px_40px_rgba(0,0,0,0.30)]"
                                        }`}
                                >
                                    <div className="grid min-h-[172px] gap-0 md:grid-cols-[0.95fr_1.05fr]">
                                        <div className="relative min-h-[172px]">
                                            <Image
                                                src={getGenreImage(index + 1)}
                                                alt={card.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0.06))]" />
                                            <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                                                무료 공개
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <p
                                                className={`text-xs font-bold uppercase tracking-[0.22em] ${isRofan
                                                        ? "text-[#cf89a7]"
                                                        : isRomance
                                                            ? "text-[#b07a80]"
                                                            : isSf
                                                                ? "text-[#8aefff]"
                                                                : isMurim
                                                                    ? "text-[#8c8f5f]"
                                                                    : "text-[#c97882]"
                                                    }`}
                                            >
                                                1화 무료 보기
                                            </p>

                                            <h3
                                                className={`mt-3 text-xl font-extrabold ${isRofan
                                                        ? "text-[#6f4b67]"
                                                        : isRomance
                                                            ? "text-[#4f3a3f]"
                                                            : isSf
                                                                ? "text-[#e8f7ff]"
                                                                : isMurim
                                                                    ? "text-[#413a2c]"
                                                                    : "text-[#f1ebeb]"
                                                    }`}
                                            >
                                                {card.title}
                                            </h3>

                                            <p
                                                className={`mt-3 text-sm leading-6 ${isRofan
                                                        ? "text-[#8f7186]"
                                                        : isRomance
                                                            ? "text-[#746166]"
                                                            : isSf
                                                                ? "text-[#8fb4c3]"
                                                                : isMurim
                                                                    ? "text-[#716958]"
                                                                    : "text-[#998c8f]"
                                                    }`}
                                            >
                                                {card.tagline}
                                            </p>

                                            <div className="mt-5">
                                                <Link
                                                    href={href}
                                                    className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${cardButtonClass}`}
                                                >
                                                    1화 무료 보기
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="pt-10">
                    <div className="mb-5 flex items-end justify-between">
                        <h2
                            className={`text-3xl font-extrabold ${isRofan
                                    ? "text-[#7b5770]"
                                    : isRomance
                                        ? "text-[#4f3a3f]"
                                        : isSf
                                            ? "text-[#e8f7ff]"
                                            : isMurim
                                                ? "text-[#413a2c]"
                                                : "text-[#f1ebeb]"
                                }`}
                        >
                            무료로 시작하기 좋은 카드
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {startCards.map((item, index) => {
                            const href = `/ott/discover/watch/${item.slug}?returnTo=${encodeURIComponent(
                                discoverBasePath
                            )}`;

                            return (
                                <article
                                    key={`${item.slug}-${index}`}
                                    className={`overflow-hidden rounded-[28px] border ${isRofan
                                            ? "border-[#f1d6de] bg-white/82 shadow-[0_18px_40px_rgba(192,116,142,0.08)]"
                                            : isRomance
                                                ? "border-[#e7d9d7] bg-white/84 shadow-[0_18px_40px_rgba(170,140,140,0.08)]"
                                                : isSf
                                                    ? "border-[#1b4d63] bg-transparent shadow-[0_0_28px_rgba(41,175,214,0.07)]"
                                                    : isMurim
                                                        ? "border-[#ddd4bf] bg-[#f7f3e8]/86 shadow-[0_18px_40px_rgba(154,141,98,0.10)]"
                                                        : "border-[#24181b] bg-[#0d0b0c]/92 shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                                        }`}
                                >
                                    <div className="relative h-[240px]">
                                        <Image
                                            src={getGenreImage(index)}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.58),rgba(0,0,0,0.08))]" />
                                        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                                            무료 시작
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <p
                                            className={`text-sm font-semibold ${isRofan
                                                    ? "text-[#c07a92]"
                                                    : isRomance
                                                        ? "text-[#b07a80]"
                                                        : isSf
                                                            ? "text-[#8aefff]"
                                                            : isMurim
                                                                ? "text-[#8c8f5f]"
                                                                : "text-[#c97882]"
                                                }`}
                                        >
                                            {item.subtitle}
                                        </p>
                                        <h3
                                            className={`mt-2 text-xl font-extrabold ${isRofan
                                                    ? "text-[#563b41]"
                                                    : isRomance
                                                        ? "text-[#4f3a3f]"
                                                        : isSf
                                                            ? "text-[#e8f7ff]"
                                                            : isMurim
                                                                ? "text-[#413a2c]"
                                                                : "text-[#f1ebeb]"
                                                }`}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className={`mt-3 text-sm leading-6 ${isRofan
                                                    ? "text-[#79666b]"
                                                    : isRomance
                                                        ? "text-[#746166]"
                                                        : isSf
                                                            ? "text-[#8fb4c3]"
                                                            : isMurim
                                                                ? "text-[#716958]"
                                                                : "text-[#968a8c]"
                                                }`}
                                        >
                                            {item.tagline}
                                        </p>

                                        <div className="mt-5">
                                            <Link
                                                href={href}
                                                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${cardButtonClass}`}
                                            >
                                                {freeCtas[index % freeCtas.length]}
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section id="discover-free-grid" className="pb-10 pt-10">
                    <div className="mb-5 flex items-end justify-between">
                        <h2
                            className={`text-3xl font-extrabold ${isRofan
                                    ? "text-[#7b5770]"
                                    : isRomance
                                        ? "text-[#4f3a3f]"
                                        : isSf
                                            ? "text-[#e8f7ff]"
                                            : isMurim
                                                ? "text-[#413a2c]"
                                                : "text-[#f1ebeb]"
                                }`}
                        >
                            지금 인기 있는 무료 1화
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {expandedCards.map((item, index) => {
                            const href = `/ott/discover/watch/${item.slug}?returnTo=${encodeURIComponent(
                                discoverBasePath
                            )}`;

                            return (
                                <article
                                    key={`${item.slug}-${index}`}
                                    className={`overflow-hidden rounded-[28px] border ${isRofan
                                            ? "border-[#f1d6de] bg-white/82 shadow-[0_18px_40px_rgba(192,116,142,0.08)]"
                                            : isRomance
                                                ? "border-[#e7d9d7] bg-white/84 shadow-[0_18px_40px_rgba(170,140,140,0.08)]"
                                                : isSf
                                                    ? "border-[#1b4d63] bg-transparent shadow-[0_0_28px_rgba(41,175,214,0.07)]"
                                                    : isMurim
                                                        ? "border-[#ddd4bf] bg-[#f7f3e8]/86 shadow-[0_18px_40px_rgba(154,141,98,0.10)]"
                                                        : "border-[#24181b] bg-[#0d0b0c]/92 shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                                        }`}
                                >
                                    <div className="relative h-[280px]">
                                        <Image
                                            src={getGenreImage(index)}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.60),rgba(0,0,0,0.08))]" />

                                        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                                            1화 무료 공개
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <p
                                            className={`text-sm font-semibold ${isRofan
                                                    ? "text-[#c07a92]"
                                                    : isRomance
                                                        ? "text-[#b07a80]"
                                                        : isSf
                                                            ? "text-[#8aefff]"
                                                            : isMurim
                                                                ? "text-[#8c8f5f]"
                                                                : "text-[#c97882]"
                                                }`}
                                        >
                                            {item.subtitle}
                                        </p>

                                        <h3
                                            className={`mt-2 text-2xl font-extrabold ${isRofan
                                                    ? "text-[#563b41]"
                                                    : isRomance
                                                        ? "text-[#4f3a3f]"
                                                        : isSf
                                                            ? "text-[#e8f7ff]"
                                                            : isMurim
                                                                ? "text-[#413a2c]"
                                                                : "text-[#f1ebeb]"
                                                }`}
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className={`mt-3 text-sm leading-7 ${isRofan
                                                    ? "text-[#79666b]"
                                                    : isRomance
                                                        ? "text-[#746166]"
                                                        : isSf
                                                            ? "text-[#8fb4c3]"
                                                            : isMurim
                                                                ? "text-[#716958]"
                                                                : "text-[#968a8c]"
                                                }`}
                                        >
                                            {item.description}
                                        </p>

                                        <div className="mt-5">
                                            <Link
                                                href={href}
                                                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${cardButtonClass}`}
                                            >
                                                {freeCtas[index % freeCtas.length]}
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>
            </div>
        </main>
    );
}