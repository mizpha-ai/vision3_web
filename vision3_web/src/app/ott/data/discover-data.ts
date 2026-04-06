// vision3_web/src/app/ott/data/discover-data.ts
export type GenreKey = "rofan" | "romance" | "sf" | "murim" | "horror";

export const genreMenu: Array<{ key: GenreKey; label: string }> = [
  { key: "rofan", label: "로판" },
  { key: "romance", label: "로맨스" },
  { key: "sf", label: "SF" },
  { key: "murim", label: "무협" },
  { key: "horror", label: "공포" },
];

export type DiscoverGenreData = {
  label: string;
  english: string;
  theme: {
    page: string;
    text: string;
    glowA: string;
    glowB: string;
    border: string;
    surface: string;
    surfaceStrong: string;
    accentText: string;
    accentBg: string;
    accentTextDark: string;
    accentSoft: string;
    heroGradient: string;
    cardGradient1: string;
    cardGradient2: string;
    cardGradient3: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    desc: string;
    note: string;
  };
  protagonist: {
    name: string;
    role: string;
    desc: string;
    tags: string[];
  };
  story: {
    title: string;
    desc: string;
    beats: string[];
  };
  stats: Array<{
    label: string;
    value: string;
    desc: string;
  }>;
  project: {
    eyebrow: string;
    title: string;
    desc: string;
    episode: string;
    status: string;
    point: string;
    visual: string;
  };
  notes: Array<{
    label: string;
    title: string;
    desc: string;
  }>;
  actions: string[];
  panels: Array<{
    tag: string;
    title: string;
    desc: string;
    visual: string;
  }>;
};

export const discoverData: Record<GenreKey, DiscoverGenreData> = {
  rofan: {
    label: "로판",
    english: "Royal Fantasy",
    theme: {
      page: "bg-[#0d0914]",
      text: "text-white",
      glowA: "bg-[#d66da3]/20",
      glowB: "bg-[#7f6bff]/15",
      border: "border-white/10",
      surface: "bg-white/[0.05]",
      surfaceStrong: "bg-white/[0.08]",
      accentText: "text-[#f2a8cb]",
      accentBg: "bg-[#f2a8cb]",
      accentTextDark: "text-[#1b0f1f]",
      accentSoft: "bg-[#f2a8cb]/15",
      heroGradient:
        "bg-[linear-gradient(135deg,#261432_0%,#5c2f70_52%,#d36f98_100%)]",
      cardGradient1:
        "bg-[linear-gradient(135deg,#2b1638_0%,#6b356f_55%,#e18fb0_100%)]",
      cardGradient2:
        "bg-[linear-gradient(135deg,#221430_0%,#543065_55%,#b86b99_100%)]",
      cardGradient3:
        "bg-[linear-gradient(135deg,#32152d_0%,#6f3758_55%,#e38c9d_100%)]",
    },
    hero: {
      eyebrow: "Royal Fantasy Selection",
      title: "가장 화려한 세계 안에서, 가장 위험한 감정이 시작된다",
      desc: "궁정의 권력, 정략으로 얽힌 관계, 비밀을 숨긴 인물들까지. 로판 카테고리에서는 눈길을 사로잡는 비주얼과 함께 오래 남는 감정선을 가진 작품들을 만나볼 수 있어. 사랑은 달콤하지만, 선택의 대가는 언제나 가볍지 않다.",
      note: "화려한 세계관 속에서 시작되는 가장 치명적인 관계",
    },
    protagonist: {
      name: "세라핀 벨루아",
      role: "몰락 직전 공작가의 장녀",
      desc: "가문을 지키기 위해 감정보다 판단을 먼저 배운 인물. 누구보다 냉정해 보이지만, 끝내 자기 사람을 버리지 못하는 약점이 그녀를 더 위험하게 만든다.",
      tags: ["궁정 서사", "정략 관계", "감정 절제"],
    },
    story: {
      title: "서사 설명",
      desc: "몰락 직전의 가문, 피할 수 없는 계약, 그리고 감추고 싶은 진심. 이 이야기는 정략적인 관계에서 시작되지만, 결국 서로의 가장 약한 지점을 먼저 알아보게 되는 두 사람의 이야기다. 화려한 장면보다 더 오래 남는 건, 끝내 말하지 못한 감정과 시선의 흔들림이다.",
      beats: ["EP 01 계약의 밤", "EP 04 균열이 생긴 연회", "EP 08 선택의 대가"],
    },
    stats: [
      { label: "Weekly Uploads", value: "124", desc: "이번 주 새롭게 공개된 로판 작품" },
      { label: "Shortlisted", value: "18", desc: "특별 추천으로 선정된 작품" },
      { label: "Mood Boards", value: "39", desc: "세계관 무드와 감정선이 돋보이는 큐레이션" },
    ],
    project: {
      eyebrow: "Featured Title",
      title: "The Contract of Winter Rose",
      desc: "서로를 믿을 수 없는 관계로 시작했지만, 가장 위태로운 순간마다 서로를 먼저 떠올리게 되는 이야기. 권력과 감정이 동시에 흔들리는 궁정 로맨스의 매력을 가장 잘 보여주는 대표 작품이다.",
      episode: "EP 06 · 가면무도회 직전",
      status: "지금 가장 많이 주목받는 회차",
      point: "계약으로 시작된 관계가 운명처럼 뒤틀리는 순간",
      visual:
        "bg-[linear-gradient(135deg,#271634_0%,#61356f_55%,#d7789d_100%)]",
    },
    notes: [
      {
        label: "Highlight",
        title: "차가운 계약이 진심으로 바뀌기 시작하는 순간",
        desc: "겉으로는 아무 일도 없지만, 단 한 번의 시선으로 관계의 공기가 달라지는 장면이 있다. 로판의 매력은 바로 그런 미묘한 변화에 있다.",
      },
      {
        label: "Must See",
        title: "드레스보다 더 강하게 남는 건 결국 감정이다",
        desc: "화려한 배경과 장식 속에서도, 가장 오래 기억에 남는 건 인물의 표정과 선택이다. 그래서 이 작품은 더 깊게 빠져들게 만든다.",
      },
    ],
    actions: [
      "신규 로판 작품 등록",
      "궁정 무드보드 열기",
      "대표 장면 큐레이션",
      "캐릭터 관계축 편집",
    ],
    panels: [
      {
        tag: "Tone Design",
        title: "궁정 텐션 보드",
        desc: "권력과 로맨스가 동시에 흐르는 장면들을 모은 큐레이션. 긴장감과 설렘이 한 화면 안에 공존한다.",
        visual:
          "bg-[linear-gradient(135deg,#34194a_0%,#744080_55%,#eba1bc_100%)]",
      },
      {
        tag: "Character Depth",
        title: "감정선 배치",
        desc: "설명보다 눈빛이 먼저 말해주는 관계들. 인물의 감정이 가장 섬세하게 드러나는 장면을 중심으로 소개한다.",
        visual:
          "bg-[linear-gradient(135deg,#241435_0%,#5e346c_55%,#c2759e_100%)]",
      },
      {
        tag: "Release Setup",
        title: "대표 컷 선별",
        desc: "첫 장면만으로도 로판 특유의 무드가 느껴지는 작품들을 모았다. 세계관과 감정을 동시에 보여주는 대표 비주얼 큐레이션.",
        visual:
          "bg-[linear-gradient(135deg,#2d1728_0%,#723d58_55%,#e58e9e_100%)]",
      },
    ],
  },

  romance: {
    label: "로맨스",
    english: "Romance",
    theme: {
      page: "bg-[#120f13]",
      text: "text-white",
      glowA: "bg-[#f0c2b8]/18",
      glowB: "bg-[#c78bb6]/15",
      border: "border-white/10",
      surface: "bg-white/[0.05]",
      surfaceStrong: "bg-white/[0.08]",
      accentText: "text-[#efc1b6]",
      accentBg: "bg-[#efc1b6]",
      accentTextDark: "text-[#221619]",
      accentSoft: "bg-[#efc1b6]/15",
      heroGradient:
        "bg-[linear-gradient(135deg,#2f2227_0%,#8f666b_52%,#edc1b5_100%)]",
      cardGradient1:
        "bg-[linear-gradient(135deg,#3c2a30_0%,#9a6d72_55%,#f0cfc3_100%)]",
      cardGradient2:
        "bg-[linear-gradient(135deg,#3a2c31_0%,#a17579_55%,#f3d8cd_100%)]",
      cardGradient3:
        "bg-[linear-gradient(135deg,#32252a_0%,#8c6168_55%,#e7b2af_100%)]",
    },
    hero: {
      eyebrow: "Romance Selection",
      title: "한 장면의 온도 차이가, 한 사람의 마음을 바꾼다",
      desc: "로맨스 카테고리에서는 화려한 사건보다 오래 남는 감정의 결을 만날 수 있어. 다시 마주친 사람, 끝나지 못한 관계, 말보다 시선이 먼저 흔들리는 순간들까지. 조용하지만 깊게 스며드는 이야기들이 모여 있다.",
      note: "가까워지기 전의 망설임까지 설레게 만드는 이야기들",
    },
    protagonist: {
      name: "서윤하",
      role: "출판사 편집자",
      desc: "감정을 쉽게 꺼내지 않는 사람. 하지만 잊었다고 믿었던 관계가 다시 눈앞에 나타난 순간부터, 그녀의 하루는 아주 조금씩 달라지기 시작한다.",
      tags: ["재회 로맨스", "감정선 중심", "시선의 온도"],
    },
    story: {
      title: "서사 설명",
      desc: "끝났다고 생각했던 감정이 다시 현재의 시간 속으로 스며드는 이야기. 익숙한 사람이라 더 낯설고, 가까웠던 사람이라 더 조심스러운 순간들이 이어진다. 이 서사는 빠르게 달리지 않고, 천천히 마음을 흔드는 방식으로 다가온다.",
      beats: ["EP 01 다시 마주친 오후", "EP 04 멀어진 이유", "EP 09 말하지 못한 밤"],
    },
    stats: [
      { label: "New Stories", value: "96", desc: "이번 주 새롭게 공개된 로맨스 작품" },
      { label: "Emotion Notes", value: "144", desc: "감정선이 돋보이는 장면 큐레이션" },
      { label: "Scene Picks", value: "22", desc: "가장 반응이 좋은 대표 장면" },
    ],
    project: {
      eyebrow: "Featured Title",
      title: "The Moment We Stayed",
      desc: "멀어진 뒤에야 더 선명해진 감정, 그리고 다시 마주한 지금에서야 시작되는 변화. 대사보다 침묵이, 고백보다 거리감이 더 설레는 작품이다.",
      episode: "EP 12 · 고백 직전",
      status: "지금 가장 많은 반응을 얻는 회차",
      point: "말하지 못한 감정이 가장 크게 들리는 순간",
      visual:
        "bg-[linear-gradient(135deg,#34252a_0%,#936a6f_55%,#ebc0b5_100%)]",
    },
    notes: [
      {
        label: "Highlight",
        title: "가까워지기 직전이 가장 아름다운 순간",
        desc: "서로의 마음을 아직 확신하지 못할 때, 가장 섬세하고 떨리는 장면이 만들어진다. 이 작품들은 그런 감정의 직전들을 가장 잘 포착한다.",
      },
      {
        label: "Must See",
        title: "다시 만났기 때문에 더 조심스러운 관계",
        desc: "한 번 지나간 관계는 처음보다 더 어렵다. 그래서 이 카테고리의 이야기들은 더 현실적으로, 더 깊게 마음에 남는다.",
      },
    ],
    actions: [
      "신규 로맨스 작품 등록",
      "인물 관계 편집",
      "감정 장면 정리",
      "대표 대사 검토",
    ],
    panels: [
      {
        tag: "Emotion Edit",
        title: "관계도 정리",
        desc: "인물 사이의 감정이 어떻게 변하는지 가장 선명하게 보여주는 장면들. 로맨스의 중심이 되는 관계 흐름을 따라가 볼 수 있다.",
        visual:
          "bg-[linear-gradient(135deg,#412f34_0%,#a17378_55%,#f0d1c5_100%)]",
      },
      {
        tag: "Scene Build",
        title: "시선과 거리감 설계",
        desc: "대사보다 먼저 분위기가 설레는 작품들. 눈빛, 망설임, 침묵 같은 요소가 큰 힘을 가지는 로맨스를 모았다.",
        visual:
          "bg-[linear-gradient(135deg,#433137_0%,#a9777c_55%,#f3d7cc_100%)]",
      },
      {
        tag: "Release Setup",
        title: "대표 컷 큐레이션",
        desc: "한 장면만으로도 로맨스의 온도가 느껴지는 대표 이미지들을 선별했다. 감정이 가장 잘 드러나는 순간부터 시작해 보자.",
        visual:
          "bg-[linear-gradient(135deg,#34262b_0%,#91656b_55%,#ebb6b0_100%)]",
      },
    ],
  },

  sf: {
    label: "SF",
    english: "Science Fiction",
    theme: {
      page: "bg-[#071019]",
      text: "text-white",
      glowA: "bg-[#42caff]/20",
      glowB: "bg-[#627bff]/14",
      border: "border-white/10",
      surface: "bg-white/[0.05]",
      surfaceStrong: "bg-white/[0.08]",
      accentText: "text-[#65dcff]",
      accentBg: "bg-[#65dcff]",
      accentTextDark: "text-[#07131a]",
      accentSoft: "bg-[#65dcff]/15",
      heroGradient:
        "bg-[linear-gradient(135deg,#081826_0%,#134263_52%,#43d2ff_100%)]",
      cardGradient1:
        "bg-[linear-gradient(135deg,#091521_0%,#155072_55%,#5ce7ff_100%)]",
      cardGradient2:
        "bg-[linear-gradient(135deg,#07131c_0%,#194260_55%,#75e6ff_100%)]",
      cardGradient3:
        "bg-[linear-gradient(135deg,#08141d_0%,#0f4763_55%,#60f3ff_100%)]",
    },
    hero: {
      eyebrow: "Science Fiction Selection",
      title: "완벽해 보이는 세계일수록, 가장 치명적인 결함을 숨기고 있다",
      desc: "SF 카테고리에서는 미래적인 비주얼만이 아니라, 그 안에서 흔들리는 인간의 선택까지 함께 만날 수 있어. 거대한 도시, 정교한 시스템, 기억과 기록의 조작까지. 이곳의 이야기는 늘 질문 하나로 시작된다. 정말 완벽한 세계는 가능한가?",
      note: "차가운 세계관 속에서 더 선명해지는 인간의 균열",
    },
    protagonist: {
      name: "윤 카이",
      role: "기억 복원 센터 분석가",
      desc: "도시의 기록을 복원하는 일을 하지만, 스스로의 기억에서 설명되지 않는 공백을 발견한 뒤 모든 것이 달라지기 시작한다. 정확한 사람이었기에, 단 하나의 오류가 더 위험하다.",
      tags: ["기억 복원", "도시형 느와르", "시스템 이탈"],
    },
    story: {
      title: "서사 설명",
      desc: "기억과 기록이 관리되는 도시에서, 주인공은 누구보다 시스템을 신뢰하며 살아왔다. 하지만 지워져야 할 이유가 없는 기억이 사라져 있다는 사실을 알게 된 순간부터, 그는 세계의 규칙이 아니라 세계의 거짓말을 추적하게 된다.",
      beats: ["EP 01 누락된 기록", "EP 03 비인가 구역", "EP 07 삭제된 진실"],
    },
    stats: [
      { label: "Future Worlds", value: "67", desc: "새롭게 주목받는 SF 세계관" },
      { label: "Tech Concepts", value: "142", desc: "도시와 시스템 설정 큐레이션" },
      { label: "Shortlisted", value: "11", desc: "특별 추천으로 선정된 작품" },
    ],
    project: {
      eyebrow: "Featured Title",
      title: "Memory District 07",
      desc: "완벽하게 통제된 도시에서 시작된 아주 작은 오류 하나. 그 틈으로 드러나는 건 시스템의 결함이 아니라, 감춰진 진실이다. 차갑고 정교한 세계관을 좋아한다면 가장 먼저 봐야 할 작품.",
      episode: "EP 04 · 접근 금지 구역",
      status: "지금 가장 주목받는 전개",
      point: "삭제된 기억 하나가 도시 전체를 흔드는 이야기",
      visual:
        "bg-[linear-gradient(135deg,#091722_0%,#145171_55%,#4cd7ff_100%)]",
    },
    notes: [
      {
        label: "Highlight",
        title: "기술보다 더 무서운 건 완벽한 통제다",
        desc: "이 작품들은 단순히 미래를 보여주는 데서 멈추지 않는다. 그 안에서 인간이 얼마나 쉽게 관리되고, 얼마나 조용히 지워질 수 있는지를 보여준다.",
      },
      {
        label: "Must See",
        title: "세계관이 클수록 인물의 고립은 더 선명해진다",
        desc: "거대한 도시와 복잡한 시스템 속에서, 한 사람의 선택이 얼마나 외롭고 결정적인지 느끼게 되는 순간들이 이 장르의 매력이다.",
      },
    ],
    actions: [
      "신규 SF 작품 등록",
      "도시 인터페이스 보드 열기",
      "기억 타임라인 편집",
      "대표 티저 카피 정리",
    ],
    panels: [
      {
        tag: "World Build",
        title: "도시 규칙 설계",
        desc: "질서정연한 미래 도시와 그 안에 숨겨진 불안까지. 세계관의 밀도가 뛰어난 작품들을 중심으로 소개한다.",
        visual:
          "bg-[linear-gradient(135deg,#08131e_0%,#18506f_55%,#54dfff_100%)]",
      },
      {
        tag: "Narrative Focus",
        title: "기억 결손 장면",
        desc: "사소한 오류 하나로 세계 전체가 흔들리기 시작하는 순간들. SF가 가장 강하게 몰입되는 지점을 모았다.",
        visual:
          "bg-[linear-gradient(135deg,#081018_0%,#173c55_55%,#6ce3ff_100%)]",
      },
      {
        tag: "Release Setup",
        title: "후킹 컷 구성",
        desc: "첫 장면만으로도 미래의 질감과 서늘한 분위기가 전해지는 작품들. 시선을 붙잡는 대표 컷을 중심으로 큐레이션했다.",
        visual:
          "bg-[linear-gradient(135deg,#09141c_0%,#124761_55%,#66f2ff_100%)]",
      },
    ],
  },

  murim: {
    label: "무협",
    english: "Murim",
    theme: {
      page: "bg-[#0b0d0a]",
      text: "text-white",
      glowA: "bg-[#8cbc68]/18",
      glowB: "bg-[#d5bf72]/12",
      border: "border-white/10",
      surface: "bg-white/[0.05]",
      surfaceStrong: "bg-white/[0.08]",
      accentText: "text-[#b4d486]",
      accentBg: "bg-[#b4d486]",
      accentTextDark: "text-[#11150f]",
      accentSoft: "bg-[#b4d486]/15",
      heroGradient:
        "bg-[linear-gradient(135deg,#121714_0%,#2d443a_52%,#95c173_100%)]",
      cardGradient1:
        "bg-[linear-gradient(135deg,#101614_0%,#30483e_55%,#9ec87b_100%)]",
      cardGradient2:
        "bg-[linear-gradient(135deg,#131513_0%,#314133_55%,#b5b76f_100%)]",
      cardGradient3:
        "bg-[linear-gradient(135deg,#121212_0%,#354a38_55%,#8bae61_100%)]",
    },
    hero: {
      eyebrow: "Murim Selection",
      title: "강한 자만 살아남는 세계에서, 끝내 남는 건 선택의 무게다",
      desc: "무협 카테고리에서는 단순히 화려한 액션만이 아니라, 인물의 기세와 질서, 그리고 끝까지 버티게 만드는 신념을 만날 수 있어. 검이 부딪히기 전의 정적, 문파 사이의 긴장, 돌아갈 수 없는 길 위에서의 결단까지. 무협의 진짜 매력을 보여주는 작품들이 모여 있다.",
      note: "빠른 기술보다 더 오래 남는 건, 한 사람의 기세와 결심",
    },
    protagonist: {
      name: "진무결",
      role: "파문당한 검객",
      desc: "문파에서 쫓겨난 뒤 이름 없는 검객으로 살아가지만, 결국 가장 피하고 싶던 무림의 중심으로 다시 끌려 들어간다. 말수는 적지만, 한 번 내린 선택은 절대 가볍지 않다.",
      tags: ["복귀 서사", "문파 정치", "검객"],
    },
    story: {
      title: "서사 설명",
      desc: "잃어버린 자리를 되찾기 위한 복수처럼 보이지만, 이 이야기가 향하는 곳은 단순한 승패가 아니다. 주인공은 결국 자신이 무엇을 지키고, 무엇을 포기해야 하는지를 선택해야 한다. 그래서 이 무협은 칼보다 더 묵직하다.",
      beats: ["EP 01 산문을 떠난 날", "EP 05 첫 재회", "EP 09 문파의 심장부"],
    },
    stats: [
      { label: "New Entries", value: "53", desc: "이번 주 새롭게 공개된 무협 작품" },
      { label: "Action Boards", value: "27", desc: "액션 동선과 장면 밀도가 뛰어난 작품" },
      { label: "Core Clans", value: "12", desc: "문파 세계관이 인상적인 대표작" },
    ],
    project: {
      eyebrow: "Featured Title",
      title: "Blade of the Silent Peak",
      desc: "복수와 귀환, 그리고 무림의 중심에서 마주하게 되는 선택. 칼을 드는 이유보다 칼을 들지 않을 수 없는 순간이 더 강하게 남는 작품이다.",
      episode: "EP 07 · 검을 다시 든 밤",
      status: "지금 가장 강한 반응을 얻는 회차",
      point: "액션보다 기세가 먼저 기억되는 무협 대표작",
      visual:
        "bg-[linear-gradient(135deg,#101714_0%,#31483d_55%,#9dc57c_100%)]",
    },
    notes: [
      {
        label: "Highlight",
        title: "정적이 길수록, 검이 나오는 순간은 더 강해진다",
        desc: "이 카테고리의 작품들은 빠르게 휘두르는 기술보다, 그 기술이 나오기까지의 기세와 긴장을 더 중요하게 다룬다.",
      },
      {
        label: "Must See",
        title: "무협은 결국 사람이 무엇을 지키는지에 대한 이야기다",
        desc: "승부의 결과보다 그 선택의 이유가 더 오래 남는다. 그래서 좋은 무협은 액션을 넘어서 서사로 기억된다.",
      },
    ],
    actions: [
      "신규 무협 작품 등록",
      "문파 관계도 편집",
      "액션 호흡 보드 열기",
      "대표 대사 톤 정리",
    ],
    panels: [
      {
        tag: "Action Rhythm",
        title: "검술 호흡 정리",
        desc: "속도만이 아닌 무게와 쉼까지 느껴지는 액션 장면들. 무협 특유의 기세를 잘 보여주는 작품들을 모았다.",
        visual:
          "bg-[linear-gradient(135deg,#101513_0%,#264137_55%,#95bf74_100%)]",
      },
      {
        tag: "World Order",
        title: "문파 질서 보드",
        desc: "서열과 예법, 충돌과 동맹이 살아 있는 무림 세계관 중심의 큐레이션. 문파 간의 긴장이 이야기를 더 깊게 만든다.",
        visual:
          "bg-[linear-gradient(135deg,#121413_0%,#314032_55%,#b0b46d_100%)]",
      },
      {
        tag: "Character Arc",
        title: "귀환 서사 편집",
        desc: "돌아갈 수 없는 길 위에서 다시 검을 드는 인물들. 상실과 선택이 강하게 느껴지는 대표 작품들을 소개한다.",
        visual:
          "bg-[linear-gradient(135deg,#121212_0%,#354b39_55%,#86ab5f_100%)]",
      },
    ],
  },

  horror: {
    label: "공포",
    english: "Horror",
    theme: {
      page: "bg-[#060607]",
      text: "text-white",
      glowA: "bg-[#7e1e2d]/22",
      glowB: "bg-[#1f3137]/12",
      border: "border-white/10",
      surface: "bg-white/[0.04]",
      surfaceStrong: "bg-white/[0.07]",
      accentText: "text-[#c76b76]",
      accentBg: "bg-[#c76b76]",
      accentTextDark: "text-[#140c0d]",
      accentSoft: "bg-[#c76b76]/15",
      heroGradient:
        "bg-[linear-gradient(135deg,#080808_0%,#261218_50%,#7d1d29_100%)]",
      cardGradient1:
        "bg-[linear-gradient(135deg,#090909_0%,#2d151b_55%,#8d2836_100%)]",
      cardGradient2:
        "bg-[linear-gradient(135deg,#070707_0%,#1d1d1d_45%,#6a2c36_100%)]",
      cardGradient3:
        "bg-[linear-gradient(135deg,#050505_0%,#241217_55%,#9a4653_100%)]",
    },
    hero: {
      eyebrow: "Horror Selection",
      title: "가장 조용한 순간에, 가장 불길한 일이 시작된다",
      desc: "공포 카테고리에서는 단순히 놀라는 순간보다 오래 남는 불안과 잔상을 만나게 된다. 텅 빈 복도, 설명되지 않는 소리, 반복되는 이상한 패턴까지. 이 장르의 작품들은 보고 끝나는 것이 아니라, 보고 난 뒤에도 계속 마음에 남는다.",
      note: "직접 보여주지 않아도 더 무서운 이야기들",
    },
    protagonist: {
      name: "한서우",
      role: "실종 사건 기록 아카이브 직원",
      desc: "사라진 사람들의 기록을 정리하는 일을 하지만, 어느 날부터 자신의 일상 역시 기록 속 패턴을 닮아가기 시작한다. 끝까지 확인해야만 안심하는 성격이, 오히려 더 깊은 공포를 부른다.",
      tags: ["기록물 구조", "폐쇄 공간", "심리 압박"],
    },
    story: {
      title: "서사 설명",
      desc: "실종 사건의 기록을 정리하던 주인공은, 오래된 문서 속 반복되는 단서가 자신의 현재와 맞물려 있다는 사실을 알게 된다. 이 이야기는 귀신을 보여주는 대신, 설명할 수 없는 이상함이 조금씩 일상을 잠식해 가는 과정을 보여준다.",
      beats: ["EP 01 불 꺼진 복도", "EP 03 두 번째 발소리", "EP 06 문 안쪽의 그림자"],
    },
    stats: [
      { label: "Dark Entries", value: "41", desc: "이번 주 새롭게 공개된 공포 작품" },
      { label: "Scene Notes", value: "89", desc: "긴장감이 뛰어난 장면 큐레이션" },
      { label: "Sound Flags", value: "14", desc: "사운드 연출이 인상적인 추천작" },
    ],
    project: {
      eyebrow: "Featured Title",
      title: "Night Log 07",
      desc: "아무것도 보이지 않는데, 분명히 무언가가 지나간 것 같은 순간들. 직접적인 자극 없이도 서늘한 긴장을 끝까지 유지하는 심리 공포의 대표작이다.",
      episode: "EP 08 · 지하 주차장 시퀀스",
      status: "지금 가장 강한 반응을 얻는 회차",
      point: "보고 난 뒤가 더 무서운 공포의 정석",
      visual:
        "bg-[linear-gradient(135deg,#080808_0%,#281218_55%,#7b1d29_100%)]",
    },
    notes: [
      {
        label: "Highlight",
        title: "보이지 않기 때문에 더 무서운 순간",
        desc: "이 작품들은 실체를 드러내기보다, 그 존재가 분명히 있다는 확신만 남긴다. 그래서 더 오래, 더 깊게 불안이 남는다.",
      },
      {
        label: "Must See",
        title: "생활의 균열이 공포가 되는 방식",
        desc: "특별한 장소가 아니라 익숙한 공간이 조금씩 이상해지는 순간. 이 장르의 좋은 공포는 바로 그 지점에서 시작된다.",
      },
    ],
    actions: [
      "신규 공포 작품 등록",
      "긴장 타이밍 조정",
      "사운드 메모 열기",
      "대표 컷 재선정",
    ],
    panels: [
      {
        tag: "Tension Design",
        title: "폐쇄 공간 연출",
        desc: "복도, 문, 멈춘 시선처럼 단순한 요소만으로 강한 불안을 만드는 작품들. 공간이 곧 공포가 되는 순간을 모았다.",
        visual:
          "bg-[linear-gradient(135deg,#090909_0%,#2a141a_55%,#832431_100%)]",
      },
      {
        tag: "Psychological Horror",
        title: "이상 징후 배치",
        desc: "작은 어긋남이 반복될수록 더 견딜 수 없는 긴장감이 생긴다. 심리적으로 조여오는 공포를 잘 보여주는 작품들이다.",
        visual:
          "bg-[linear-gradient(135deg,#070707_0%,#1f1f1f_45%,#6f2f38_100%)]",
      },
      {
        tag: "Release Setup",
        title: "기분 나쁜 대표 장면",
        desc: "한 장면만으로도 불길함이 전해지는 작품들. 보기 전보다 본 뒤가 더 불편해지는 공포의 매력을 담았다.",
        visual:
          "bg-[linear-gradient(135deg,#050505_0%,#251318_55%,#9b4a57_100%)]",
      },
    ],
  },
};

export const genreKeys = Object.keys(discoverData) as GenreKey[];

export function isGenreKey(value: string): value is GenreKey {
  return genreKeys.includes(value as GenreKey);
}