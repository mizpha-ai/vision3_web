// vision3_web/src/app/ott/watch/_lib/watch-theme.ts
import type { WatchGenreKey } from "@/app/ott/data/watch-data";

export const genreLabelMap: Record<WatchGenreKey, string> = {
  rofan: "로판",
  romance: "로맨스",
  sf: "SF",
  murim: "무협",
  horror: "공포",
};

export const themeByGenre: Record<
  WatchGenreKey,
  {
    shell: string;
    shellBorder: string;
    title: string;
    body: string;
    accent: string;
    chip: string;
    surface: string;
  }
> = {
  rofan: {
    shell: "bg-white/82 backdrop-blur-xl",
    shellBorder: "border-[#f1d6de]",
    title: "text-[#6f4b67]",
    body: "text-[#8f7186]",
    accent: "text-[#d17fa2]",
    chip: "border-[#f7bfd6] bg-white/75 text-[#c76790] shadow-sm",
    surface: "bg-[#fff9fc]",
  },
  romance: {
    shell: "bg-white/84 backdrop-blur-xl",
    shellBorder: "border-[#e7d9d7]",
    title: "text-[#4f3a3f]",
    body: "text-[#746166]",
    accent: "text-[#b07a80]",
    chip: "border-[#e5d4d6] bg-white/78 text-[#b07a80] shadow-sm",
    surface: "bg-[#fffafa]",
  },
  sf: {
    shell: "bg-transparent backdrop-blur-xl",
    shellBorder: "border-[#1b4d63]",
    title: "text-[#e8f7ff]",
    body: "text-[#8fb4c3]",
    accent: "text-[#8aefff]",
    chip: "border-[#2aa8cf] bg-transparent text-[#8aefff] shadow-[0_0_20px_rgba(42,168,207,0.12)]",
    surface: "bg-[#091520]",
  },
  murim: {
    shell: "bg-[#f7f3e8]/86 backdrop-blur-xl",
    shellBorder: "border-[#ddd4bf]",
    title: "text-[#413a2c]",
    body: "text-[#716958]",
    accent: "text-[#8c8f5f]",
    chip: "border-[#c7b78b] bg-[#f5efde]/85 text-[#7d6a3d] shadow-sm",
    surface: "bg-[#faf6ee]",
  },
  horror: {
    shell: "bg-[#0d0b0c]/92 backdrop-blur-xl",
    shellBorder: "border-[#24181b]",
    title: "text-[#f1ebeb]",
    body: "text-[#968a8c]",
    accent: "text-[#c97882]",
    chip: "border-[#6c3139] bg-[#120d0f]/90 text-[#d7b2b8] shadow-[0_0_18px_rgba(108,49,57,0.16)]",
    surface: "bg-[#0f0b0c]",
  },
};

export const hallButtonStyleByGenre: Record<
  WatchGenreKey,
  {
    borderColor: string;
    background: string;
    color: string;
    boxShadow?: string;
  }
> = {
  rofan: {
    borderColor: "#f6bfd8",
    background: "#fff0f7",
    color: "#c76790",
    boxShadow: "0 1px 2px rgba(199,103,144,0.10)",
  },
  romance: {
    borderColor: "#e6d2d6",
    background: "#f8f1f2",
    color: "#a86f74",
    boxShadow: "0 1px 2px rgba(168,111,116,0.08)",
  },
  sf: {
    borderColor: "#2aa8cf",
    background: "transparent",
    color: "#8aefff",
    boxShadow: "0 0 24px rgba(42,168,207,0.14)",
  },
  murim: {
    borderColor: "#c6ba92",
    background: "#f2ecdc",
    color: "#695c37",
    boxShadow: "0 1px 2px rgba(105,92,55,0.10)",
  },
  horror: {
    borderColor: "#6f2a34",
    background: "#140d0f",
    color: "#e7c3c8",
    boxShadow: "0 0 22px rgba(111,42,52,0.18)",
  },
};

export const protagonistRoleByGenre: Record<WatchGenreKey, string> = {
  rofan: "황궁의 균열 한가운데 선 핵심 인물",
  romance: "감정선의 중심을 이끄는 주인공",
  sf: "시스템의 균열을 추적하는 중심 인물",
  murim: "강호의 흐름을 바꾸는 검객",
  horror: "불길한 사건의 중심에 선 생존자",
};

export const protagonistDescByGenre: Record<WatchGenreKey, string> = {
  rofan:
    "권력과 감정 사이에서 흔들리면서도 끝내 자신의 선택으로 서사를 끌고 가는 인물이야.",
  romance:
    "조용한 표정과 작은 선택들로 관계의 온도를 바꾸는, 가장 중요한 감정 축이 되는 인물이야.",
  sf: "차가운 구조 안에서도 인간적인 판단을 놓지 않는 인물이라 작품의 긴장감을 가장 크게 만들어.",
  murim: "절제된 감정과 무게감 있는 행동으로 세계관의 중심을 세우는 주인공이야.",
  horror:
    "설명되지 않는 공포 속에서 끝까지 버티며 진실에 가까워지는 시선을 가진 인물이야.",
};

export const writerNameByGenre: Record<WatchGenreKey, string> = {
  rofan: "서윤하",
  romance: "한지우",
  sf: "윤시온",
  murim: "백도현",
  horror: "차유진",
};

export const writerTitleByGenre: Record<WatchGenreKey, string> = {
  rofan: "황궁 관계선과 감정의 밀도를 설계한 메인 작가",
  romance: "조용한 여운과 감정의 결을 쌓아가는 메인 작가",
  sf: "미래 시스템과 서사 구조를 설계한 메인 작가",
  murim: "검의 흐름과 강호 서사를 정리한 메인 작가",
  horror: "정적과 심리적 긴장감을 설계한 메인 작가",
};

export const writerDescByGenre: Record<WatchGenreKey, string> = {
  rofan:
    "관계의 시선, 권력의 균열, 로맨틱한 긴장을 한 화면 안에서 동시에 작동하게 만드는 스타일이 특징이야.",
  romance:
    "큰 사건보다 감정의 결, 타이밍, 말하지 못한 마음의 흐름을 밀도 있게 보여주는 스타일이야.",
  sf: "설정 설명에만 머무르지 않고 시스템과 인물의 선택을 연결해서 서사를 밀어가는 타입이야.",
  murim: "묵직한 대사와 절제된 장면 운영으로 세계관의 결을 단단하게 만드는 스타일이야.",
  horror:
    "강한 자극보다 여백, 정적, 불길한 암시로 공포를 오래 남게 만드는 연출 감각이 강해.",
};

export function getSelectedEpisode<T extends { number: number }>(
  items: T[],
  rawEpisode?: string
) {
  const parsed = Number(rawEpisode ?? "1");

  if (!Number.isFinite(parsed)) {
    return items[0];
  }

  return items.find((item) => item.number === parsed) ?? items[0];
}