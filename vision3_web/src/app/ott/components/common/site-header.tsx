// vision3_web/src/app/ott/components/common/site-header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getWatchTitleBySlug } from "@/app/ott/data/watch-data";

type HeaderTheme = {
  borderColor: string;
  headerBg: string;
  headerTail: string;
  logoColor: string;
  navMutedColor: string;
  navActiveColor: string;
  navIdleWrap: string;
  navActiveWrap: string;
  freeBadge: string;
  actionBtn: string;
  shadow: string;
};

const defaultTheme: HeaderTheme = {
  borderColor: "rgba(255,255,255,0.10)",
  headerBg:
    "linear-gradient(180deg, rgba(5,6,8,0.88) 0%, rgba(5,6,8,0.70) 100%)",
  headerTail:
    "linear-gradient(180deg, rgba(5,6,8,0.42) 0%, rgba(5,6,8,0.00) 100%)",
  logoColor: "#ffffff",
  navMutedColor: "rgba(255,255,255,0.72)",
  navActiveColor: "#ffffff",
  navIdleWrap: "rounded-full px-4 py-2 hover:bg-white/5",
  navActiveWrap: "rounded-full border border-white/12 bg-white/10 px-4 py-2",
  freeBadge: "border-cyan-400/30 bg-cyan-400/15 text-cyan-200",
  actionBtn:
    "border-cyan-400/25 bg-cyan-400/10 text-cyan-100 hover:bg-cyan-400/15",
  shadow: "0 10px 30px rgba(0,0,0,0.18)",
};

const hallThemes: Record<string, HeaderTheme> = {
  "series-rofan": {
    borderColor: "rgba(240,219,229,0.95)",
    headerBg:
      "linear-gradient(90deg, #ffd8ec 0%, #fff6fb 17%, #fff6fb 50%, #fff6fb 65%, #eef9ff 100%)",
    headerTail:
      "linear-gradient(180deg, rgba(255,248,252,0.68) 0%, rgba(255,248,252,0.30) 48%, rgba(255,248,252,0.00) 100%)",
    logoColor: "#6f4b67",
    navMutedColor: "#6f4b67",
    navActiveColor: "#6f4b67",
    navIdleWrap: "rounded-full px-4 py-2 hover:bg-[#fff0f7]/75",
    navActiveWrap:
      "rounded-full border border-[#f6bfd8] bg-[#fff0f7]/90 px-4 py-2",
    freeBadge: "border-[#f7bfd6] bg-white/80 text-[#c76790]",
    actionBtn:
      "border-[#f6bfd8] bg-[#fff0f7] text-[#c76790] hover:bg-[#ffe8f3]",
    shadow: "0 10px 30px rgba(186,150,214,0.10)",
  },
  "series-romance": {
    borderColor: "rgba(232,221,218,0.95)",
    headerBg:
      "linear-gradient(180deg, rgba(250,246,242,0.98) 0%, rgba(247,240,235,0.96) 50%, rgba(243,234,229,0.94) 100%)",
    headerTail:
      "linear-gradient(180deg, rgba(247,240,235,0.72) 0%, rgba(243,234,229,0.00) 100%)",
    logoColor: "#4f3a3f",
    navMutedColor: "#4f3a3f",
    navActiveColor: "#4f3a3f",
    navIdleWrap: "rounded-full px-4 py-2 hover:bg-[#f8f1f2]/85",
    navActiveWrap:
      "rounded-full border border-[#e6d2d6] bg-[#f8f1f2]/92 px-4 py-2",
    freeBadge: "border-[#e6d2d6] bg-[#f8f1f2] text-[#a86f74]",
    actionBtn:
      "border-[#e6d2d6] bg-[#f8f1f2] text-[#a86f74] hover:bg-[#f3ebec]",
    shadow: "0 10px 28px rgba(176,122,128,0.08)",
  },
  "series-sf": {
    borderColor: "rgba(23,56,74,0.95)",
    headerBg:
      "linear-gradient(180deg, rgba(6,16,25,0.96) 0%, rgba(8,23,34,0.94) 52%, rgba(10,27,41,0.92) 100%)",
    headerTail:
      "linear-gradient(180deg, rgba(8,23,34,0.68) 0%, rgba(10,27,41,0.00) 100%)",
    logoColor: "#e8f7ff",
    navMutedColor: "#8fb4c3",
    navActiveColor: "#8aefff",
    navIdleWrap: "rounded-full px-4 py-2 hover:bg-white/5",
    navActiveWrap:
      "rounded-full border border-[#2aa8cf]/40 bg-[#0a1b29]/78 px-4 py-2",
    freeBadge: "border-[#2aa8cf] bg-transparent text-[#8aefff]",
    actionBtn:
      "border-[#2aa8cf] bg-transparent text-[#8aefff] hover:border-[#46cfff] hover:text-[#b6f6ff]",
    shadow: "0 10px 28px rgba(42,168,207,0.10)",
  },
  "series-murim": {
    borderColor: "rgba(216,208,186,0.95)",
    headerBg:
      "linear-gradient(180deg, rgba(244,240,228,0.98) 0%, rgba(236,231,215,0.96) 50%, rgba(230,225,210,0.94) 100%)",
    headerTail:
      "linear-gradient(180deg, rgba(236,231,215,0.72) 0%, rgba(230,225,210,0.00) 100%)",
    logoColor: "#4a4330",
    navMutedColor: "#4a4330",
    navActiveColor: "#4a4330",
    navIdleWrap: "rounded-full px-4 py-2 hover:bg-[#f2ecdc]/82",
    navActiveWrap:
      "rounded-full border border-[#c6ba92] bg-[#f2ecdc]/92 px-4 py-2",
    freeBadge: "border-[#c7b78b] bg-[#f5efde]/90 text-[#7d6a3d]",
    actionBtn:
      "border-[#c6ba92] bg-[#f2ecdc] text-[#695c37] hover:bg-[#ece4d0]",
    shadow: "0 10px 28px rgba(140,143,95,0.08)",
  },
  "series-horror": {
    borderColor: "rgba(42,26,29,0.95)",
    headerBg:
      "linear-gradient(180deg, rgba(6,6,6,0.96) 0%, rgba(11,9,10,0.94) 50%, rgba(17,9,11,0.92) 100%)",
    headerTail:
      "linear-gradient(180deg, rgba(11,9,10,0.68) 0%, rgba(17,9,11,0.00) 100%)",
    logoColor: "#f1ebeb",
    navMutedColor: "#968a8c",
    navActiveColor: "#e7c3c8",
    navIdleWrap: "rounded-full px-4 py-2 hover:bg-white/5",
    navActiveWrap:
      "rounded-full border border-[#6f2a34] bg-[#140d0f]/92 px-4 py-2",
    freeBadge: "border-[#6f2a34] bg-[#140d0f] text-[#e7c3c8]",
    actionBtn:
      "border-[#6f2a34] bg-[#140d0f] text-[#e7c3c8] hover:bg-[#1a0f12]",
    shadow: "0 10px 28px rgba(0,0,0,0.22)",
  },

  "movies-rofan": {
    borderColor: "rgba(240,219,229,0.95)",
    headerBg:
      "linear-gradient(90deg, #ffd8ec 0%, #fff6fb 17%, #fff6fb 50%, #fff6fb 65%, #eef9ff 100%)",
    headerTail:
      "linear-gradient(180deg, rgba(255,248,252,0.68) 0%, rgba(255,248,252,0.30) 48%, rgba(255,248,252,0.00) 100%)",
    logoColor: "#6f4b67",
    navMutedColor: "#6f4b67",
    navActiveColor: "#6f4b67",
    navIdleWrap: "rounded-full px-4 py-2 hover:bg-[#fff0f7]/75",
    navActiveWrap:
      "rounded-full border border-[#f6bfd8] bg-[#fff0f7]/90 px-4 py-2",
    freeBadge: "border-[#f7bfd6] bg-white/80 text-[#c76790]",
    actionBtn:
      "border-[#f6bfd8] bg-[#fff0f7] text-[#c76790] hover:bg-[#ffe8f3]",
    shadow: "0 10px 30px rgba(186,150,214,0.10)",
  },
  "movies-romance": {
    borderColor: "rgba(232,221,218,0.95)",
    headerBg:
      "linear-gradient(180deg, rgba(250,246,242,0.98) 0%, rgba(247,240,235,0.96) 50%, rgba(243,234,229,0.94) 100%)",
    headerTail:
      "linear-gradient(180deg, rgba(247,240,235,0.72) 0%, rgba(243,234,229,0.00) 100%)",
    logoColor: "#4f3a3f",
    navMutedColor: "#4f3a3f",
    navActiveColor: "#4f3a3f",
    navIdleWrap: "rounded-full px-4 py-2 hover:bg-[#f8f1f2]/85",
    navActiveWrap:
      "rounded-full border border-[#e6d2d6] bg-[#f8f1f2]/92 px-4 py-2",
    freeBadge: "border-[#e6d2d6] bg-[#f8f1f2] text-[#a86f74]",
    actionBtn:
      "border-[#e6d2d6] bg-[#f8f1f2] text-[#a86f74] hover:bg-[#f3ebec]",
    shadow: "0 10px 28px rgba(176,122,128,0.08)",
  },
  "movies-sf": {
    borderColor: "rgba(23,56,74,0.95)",
    headerBg:
      "linear-gradient(180deg, rgba(6,16,25,0.96) 0%, rgba(8,23,34,0.94) 52%, rgba(10,27,41,0.92) 100%)",
    headerTail:
      "linear-gradient(180deg, rgba(8,23,34,0.68) 0%, rgba(10,27,41,0.00) 100%)",
    logoColor: "#e8f7ff",
    navMutedColor: "#8fb4c3",
    navActiveColor: "#8aefff",
    navIdleWrap: "rounded-full px-4 py-2 hover:bg-white/5",
    navActiveWrap:
      "rounded-full border border-[#2aa8cf]/40 bg-[#0a1b29]/78 px-4 py-2",
    freeBadge: "border-[#2aa8cf] bg-transparent text-[#8aefff]",
    actionBtn:
      "border-[#2aa8cf] bg-transparent text-[#8aefff] hover:border-[#46cfff] hover:text-[#b6f6ff]",
    shadow: "0 10px 28px rgba(42,168,207,0.10)",
  },
  "movies-murim": {
    borderColor: "rgba(216,208,186,0.95)",
    headerBg:
      "linear-gradient(180deg, rgba(244,240,228,0.98) 0%, rgba(236,231,215,0.96) 50%, rgba(230,225,210,0.94) 100%)",
    headerTail:
      "linear-gradient(180deg, rgba(236,231,215,0.72) 0%, rgba(230,225,210,0.00) 100%)",
    logoColor: "#4a4330",
    navMutedColor: "#4a4330",
    navActiveColor: "#4a4330",
    navIdleWrap: "rounded-full px-4 py-2 hover:bg-[#f2ecdc]/82",
    navActiveWrap:
      "rounded-full border border-[#c6ba92] bg-[#f2ecdc]/92 px-4 py-2",
    freeBadge: "border-[#c7b78b] bg-[#f5efde]/90 text-[#7d6a3d]",
    actionBtn:
      "border-[#c6ba92] bg-[#f2ecdc] text-[#695c37] hover:bg-[#ece4d0]",
    shadow: "0 10px 28px rgba(140,143,95,0.08)",
  },
  "movies-horror": {
    borderColor: "rgba(42,26,29,0.95)",
    headerBg:
      "linear-gradient(180deg, rgba(6,6,6,0.96) 0%, rgba(11,9,10,0.94) 50%, rgba(17,9,11,0.92) 100%)",
    headerTail:
      "linear-gradient(180deg, rgba(11,9,10,0.68) 0%, rgba(17,9,11,0.00) 100%)",
    logoColor: "#f1ebeb",
    navMutedColor: "#968a8c",
    navActiveColor: "#e7c3c8",
    navIdleWrap: "rounded-full px-4 py-2 hover:bg-white/5",
    navActiveWrap:
      "rounded-full border border-[#6f2a34] bg-[#140d0f]/92 px-4 py-2",
    freeBadge: "border-[#6f2a34] bg-[#140d0f] text-[#e7c3c8]",
    actionBtn:
      "border-[#6f2a34] bg-[#140d0f] text-[#e7c3c8] hover:bg-[#1a0f12]",
    shadow: "0 10px 28px rgba(0,0,0,0.22)",
  },
};

const navItems = [
  { label: "Series", href: "/ott/series" },
  { label: "Movies", href: "/ott/movies" },
  { label: "Discover", href: "/ott/discover", isFree: true },
  { label: "Market", href: "/ott/market" },
];

function getThemeBySectionAndGenre(section: "series" | "movies", genre: string) {
  return hallThemes[`${section}-${genre}`] ?? defaultTheme;
}

function getThemeByWatchSlug(
  slug: string,
  sectionOverride?: "series" | "movies"
): HeaderTheme {
  const title = getWatchTitleBySlug(slug);

  if (!title) {
    return defaultTheme;
  }

  const section = sectionOverride ?? title.mode;
  return getThemeBySectionAndGenre(section, title.genre);
}

function getHeaderTheme(pathname: string): HeaderTheme {
  const rawSegments = pathname.split("/").filter(Boolean);
  const segments = rawSegments[0] === "ott" ? rawSegments.slice(1) : rawSegments;
  const [section, second, third] = segments;

  if ((section === "series" || section === "movies") && second) {
    return getThemeBySectionAndGenre(section, second);
  }

  if (section === "discover" && second && second !== "watch") {
    return getThemeBySectionAndGenre("series", second);
  }

  if (section === "watch" && second) {
    return getThemeByWatchSlug(second);
  }

  if (section === "discover" && second === "watch" && third) {
    return getThemeByWatchSlug(third, "series");
  }

  if (section === "series" && !second) return hallThemes["series-rofan"];
  if (section === "movies" && !second) return hallThemes["movies-rofan"];
  if (section === "discover" && !second) return hallThemes["series-rofan"];

  return defaultTheme;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const theme = getHeaderTheme(pathname);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div
        className="absolute inset-x-0 top-0 h-20 border-b backdrop-blur-xl md:h-20"
        style={{
          background: theme.headerBg,
          borderColor: theme.borderColor,
          boxShadow: theme.shadow,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-20 h-12"
        style={{
          background: theme.headerTail,
        }}
      />

      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
        <div className="min-w-[140px]">
          <Link
            href="/ott"
            className="text-[20px] font-semibold tracking-[0.24em]"
            style={{ color: theme.logoColor }}
          >
            Vision3
          </Link>
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 md:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`inline-flex items-center gap-2 text-[15px] font-medium transition ${
                  isActive ? theme.navActiveWrap : theme.navIdleWrap
                }`}
              >
                <span
                  style={{
                    color: isActive
                      ? theme.navActiveColor
                      : theme.navMutedColor,
                  }}
                >
                  {item.label}
                </span>

                {item.isFree && (
                  <span
                    className={`rounded-full border px-2 py-[2px] text-[10px] font-semibold uppercase tracking-[0.18em] ${theme.freeBadge}`}
                  >
                    Free
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex min-w-[140px] items-center justify-end gap-2">
          <button
            type="button"
            className={`hidden rounded-full border px-4 py-2 text-sm font-semibold transition md:inline-flex ${theme.actionBtn}`}
          >
            로그인/회원가입
          </button>
        </div>
      </div>
    </header>
  );
}
