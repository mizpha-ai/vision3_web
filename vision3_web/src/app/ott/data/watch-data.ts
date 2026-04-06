// vision3_web/src/app/ott/data/watch-data.ts
import type { GenreKey } from "@/app/ott/data/discover-data";

export type WatchMode = "series" | "movies";
export type WatchGenreKey = GenreKey;

export type WatchEpisode = {
  number: number;
  title: string;
  summary: string;
  duration: string;
  image: string;
  isFree?: boolean;
};

export type WatchTitle = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  meta: string;
  description: string;
  mode: WatchMode;
  genre: WatchGenreKey;
  coverImage: string;
  video: string;
  rating: string;
  year: string;
  runtime: string;
  status: string;
  point: string;
  badges: string[];
  episodes: WatchEpisode[];
  cast: string[];
  relatedSlugs: string[];
};

const videoPool = Array.from(
  { length: 10 },
  (_, index) => `/videos/market/market${index + 1}.mp4`
);

const pickVideo = (index: number) => videoPool[index % videoPool.length];

export const protagonistImageByName: Record<string, string> = {
  "Min Rowan": "/images/main1.png",
  "Jae Hyun": "/images/main2.png",
  "Ian Rho": "/images/main3.png",
  "Seo Mujin": "/images/main4.png",
  "Yuna Seo": "/images/main5.png",
  "Cha Yerin": "/images/main6.jpg",
  "Mira Han": "/images/main7.jpg",
  "Elin Hart": "/images/main8.jpg",
};

export const watchEntrySlugByMode: Record<
  WatchMode,
  Record<WatchGenreKey, string>
> = {
  series: {
    rofan: "crown-of-starlight",
    romance: "summer-promise",
    sf: "ash-protocol",
    murim: "blade-of-mist",
    horror: "red-moon-ritual",
  },
  movies: {
    rofan: "moonlit-throne",
    romance: "late-summer-letter",
    sf: "orbit-zero",
    murim: "sword-of-dusk",
    horror: "black-veil-archive",
  },
};

export const discoverFreeSlugByGenre: Record<GenreKey, string[]> = {
  rofan: ["crown-of-starlight"],
  romance: ["summer-promise"],
  sf: ["ash-protocol"],
  murim: ["blade-of-mist"],
  horror: ["red-moon-ritual"],
};

export const watchCatalog: WatchTitle[] = [
  {
    slug: "the-last-scene-of-summer",
    title: "The Last Scene of Summer",
    subtitle: "Vision3 Original",
    tagline: "사라진 여름의 마지막 장면을 다시 꺼내는 미스터리 드라마",
    meta: "Drama · Mystery · 2026 · 16+",
    description:
      "한 장면의 감도, 긴장감 있는 서사, 그리고 시네마틱한 몰입. Vision3 메인에서 가장 강하게 밀어주는 대표작이야. 재생 진입 페이지에서는 작품의 공기감과 감정선을 먼저 보여주고, 바로 플레이어로 자연스럽게 이어지는 흐름으로 설계했어.",
    mode: "series",
    genre: "romance",
    coverImage: "/images/img1.jpg",
    video: pickVideo(0),
    rating: "16+",
    year: "2026",
    runtime: "EP 01 · 58min",
    status: "Now Streaming",
    point: "Cinematic Mystery",
    badges: ["Vision3 Original", "Main Hero", "Recommended"],
    episodes: [
      {
        number: 1,
        title: "The First Missing Frame",
        summary:
          "여름 축제의 마지막 밤, 사라진 한 장면이 모든 사건의 시작이 된다.",
        duration: "58min",
        image: "/images/img1.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "Echo in the Harbor",
        summary:
          "주인공은 사라진 기억의 조각을 항구 도시의 흔적 속에서 추적한다.",
        duration: "54min",
        image: "/images/img2.jpg",
      },
      {
        number: 3,
        title: "Blue Motel",
        summary:
          "오래된 모텔에서 마주한 단서는 잊고 있던 관계의 균열을 드러낸다.",
        duration: "56min",
        image: "/images/img3.jpg",
      },
      {
        number: 4,
        title: "When Summer Ends",
        summary:
          "가장 아름다운 순간이 사실은 가장 위험한 시작이었다는 것이 밝혀진다.",
        duration: "61min",
        image: "/images/img4.jpg",
      },
      {
        number: 5,
        title: "The Photo Without a Face",
        summary:
          "사진 속 지워진 얼굴 하나가 주인공이 숨겨 온 진실과 이어진다.",
        duration: "55min",
        image: "/images/img5.jpg",
      },
      {
        number: 6,
        title: "The Tide Returns at Dawn",
        summary:
          "새벽의 밀물과 함께 사라졌던 인물이 다시 나타나며 사건이 크게 뒤집힌다.",
        duration: "59min",
        image: "/images/img6.jpg",
      },
      {
        number: 7,
        title: "A Room Filled with Rain",
        summary:
          "빗소리만 남은 방 안에서 두 사람은 서로 다른 기억을 마주한다.",
        duration: "57min",
        image: "/images/img7.jpg",
      },
      {
        number: 8,
        title: "The Last Summer Witness",
        summary:
          "마지막 목격자의 입이 열리면서 여름의 끝에 감춰졌던 관계가 드러난다.",
        duration: "60min",
        image: "/images/img8.jpg",
      },
      {
        number: 9,
        title: "The Scene We Could Not Keep",
        summary:
          "결국 남겨진 장면 하나가 모두의 결말을 바꾸는 마지막 선택으로 이어진다.",
        duration: "64min",
        image: "/images/img9.jpg",
      },
    ],
    cast: ["Yuna Seo", "Min Rowan", "Ian Rho", "Elin Hart", "Jae Hyun"],
    relatedSlugs: ["summer-promise", "silent-harbor", "late-summer-letter"],
  },
  {
    slug: "crown-of-starlight",
    title: "Crown of Starlight",
    subtitle: "Royal Fantasy Series",
    tagline: "황궁의 빛과 비밀이 교차하는 로판 드라마",
    meta: "Series · Royal Fantasy · 2026 · 15+",
    description:
      "황궁의 시선, 관계선, 권력의 긴장감을 더 화려하고 우아하게 담아낸 Vision3 로판 대표 시리즈야.",
    mode: "series",
    genre: "rofan",
    coverImage: "/images/img1.jpg",
    video: pickVideo(1),
    rating: "15+",
    year: "2026",
    runtime: "EP 01 · 63min",
    status: "New Episode Weekly",
    point: "Royal Tension",
    badges: ["Royal Fantasy", "Premium Hall", "Romantic Tension"],
    episodes: [
      {
        number: 1,
        title: "The Night of Coronation",
        summary: "황태녀의 대관식 전야, 금지된 계약이 조용히 시작된다.",
        duration: "63min",
        image: "/images/img1.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "A Rose Behind the Curtain",
        summary:
          "가면무도회 뒤에서 서로를 경계하던 두 인물이 처음으로 손을 잡는다.",
        duration: "59min",
        image: "/images/img2.jpg",
      },
      {
        number: 3,
        title: "Whisper in the Palace",
        summary: "황궁 내부의 균열과 오래된 예언이 동시에 드러난다.",
        duration: "61min",
        image: "/images/img3.jpg",
      },
      {
        number: 4,
        title: "The Prince in Silver Gloves",
        summary:
          "은빛 장갑을 낀 황자가 등장하며 궁정의 권력 구도가 흔들리기 시작한다.",
        duration: "58min",
        image: "/images/img4.jpg",
      },
      {
        number: 5,
        title: "Velvet Oath",
        summary:
          "비밀 정원에서 나눈 맹세 하나가 두 사람의 관계를 위험하게 바꾼다.",
        duration: "60min",
        image: "/images/img5.jpg",
      },
      {
        number: 6,
        title: "The Queen's Empty Chamber",
        summary:
          "오래도록 닫혀 있던 왕비의 방이 열리고, 사라진 기록의 흔적이 드러난다.",
        duration: "62min",
        image: "/images/img6.jpg",
      },
      {
        number: 7,
        title: "A Crown Split in Two",
        summary:
          "왕좌의 상징이 둘로 갈라지며 충성의 방향을 묻는 선택이 시작된다.",
        duration: "57min",
        image: "/images/img7.jpg",
      },
      {
        number: 8,
        title: "Starlight and Betrayal",
        summary:
          "별빛 축제가 열리는 밤, 가장 믿었던 인물의 배신이 드러난다.",
        duration: "64min",
        image: "/images/img8.jpg",
      },
    ],
    cast: ["Elin Hart", "Jae Hyun", "Seo Mujin", "Cha Yerin", "Min Rowan"],
    relatedSlugs: [
      "moonlit-throne",
      "summer-promise",
      "the-last-scene-of-summer",
    ],
  },
  {
    slug: "summer-promise",
    title: "Summer Promise",
    subtitle: "Romance Series",
    tagline: "조용한 감정선과 긴 여운을 남기는 로맨스 드라마",
    meta: "Series · Romance · 2026 · 15+",
    description:
      "부드러운 감정선, 늦여름의 공기, 오래 남는 시선의 온도로 설계한 Vision3 로맨스 대표작이야.",
    mode: "series",
    genre: "romance",
    coverImage: "/images/img5.jpg",
    video: pickVideo(2),
    rating: "15+",
    year: "2026",
    runtime: "EP 01 · 52min",
    status: "Now Streaming",
    point: "Soft Emotion",
    badges: ["Romance", "Emotional", "Warm Tone"],
    episodes: [
      {
        number: 1,
        title: "A Quiet First Page",
        summary:
          "다시 만난 두 사람은 아무렇지 않은 척 같은 계절을 지나기 시작한다.",
        duration: "52min",
        image: "/images/img5.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "Late Sunset",
        summary:
          "서로에게 감추고 있던 시간을 마주하며 관계가 천천히 움직인다.",
        duration: "55min",
        image: "/images/img6.jpg",
      },
      {
        number: 3,
        title: "A Letter Never Sent",
        summary: "보내지 못한 편지가 결국 한 사람의 일상을 흔든다.",
        duration: "57min",
        image: "/images/img7.jpg",
      },
      {
        number: 4,
        title: "Between Two Stops",
        summary:
          "같은 버스 정류장에서 반복해서 마주치던 우연이 의미를 갖기 시작한다.",
        duration: "51min",
        image: "/images/img8.jpg",
      },
      {
        number: 5,
        title: "Rainy Day Promise",
        summary:
          "갑작스러운 비와 함께 오래 미뤄둔 약속이 다시 두 사람을 이어준다.",
        duration: "56min",
        image: "/images/img9.jpg",
      },
      {
        number: 6,
        title: "Soft Voice at Midnight",
        summary:
          "늦은 밤 전화 한 통이 서로의 감정을 더 이상 숨길 수 없게 만든다.",
        duration: "54min",
        image: "/images/img10.jpg",
      },
      {
        number: 7,
        title: "The Bench Near the River",
        summary:
          "강가 벤치에서 나눈 대화가 관계를 이전과 전혀 다르게 바꿔 놓는다.",
        duration: "58min",
        image: "/images/img11.jpg",
      },
      {
        number: 8,
        title: "When the Season Stays",
        summary:
          "끝날 줄 알았던 계절이 멈춘 듯 이어지며 두 사람은 마지막 마음을 확인한다.",
        duration: "60min",
        image: "/images/img12.jpg",
      },
    ],
    cast: ["Cha Yerin", "Min Rowan", "Mira Han", "Jae Hyun", "Ian Rho"],
    relatedSlugs: [
      "late-summer-letter",
      "the-last-scene-of-summer",
      "glass-midnight",
    ],
  },
  {
    slug: "ash-protocol",
    title: "Ash Protocol",
    subtitle: "Sci-Fi Series",
    tagline: "통제된 도시 시스템 안에서 시작되는 SF 스릴러",
    meta: "Series · SF Thriller · 2026 · 16+",
    description:
      "차가운 시스템, 미래 도시의 감시 구조, 얇은 네온 감도로 밀어붙이는 Vision3 SF 대표 시리즈야.",
    mode: "series",
    genre: "sf",
    coverImage: "/images/img9.jpg",
    video: pickVideo(3),
    rating: "16+",
    year: "2026",
    runtime: "EP 01 · 60min",
    status: "Now Streaming",
    point: "System Thriller",
    badges: ["Sci-Fi", "System Drama", "Neon Tone"],
    episodes: [
      {
        number: 1,
        title: "Wake Signal",
        summary:
          "도시의 통제 시스템에 균열이 발생하면서 프로토콜이 각성한다.",
        duration: "60min",
        image: "/images/img9.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "Ghost Network",
        summary: "삭제된 기록 뒤에서 움직이는 두 번째 시스템이 존재한다.",
        duration: "57min",
        image: "/images/img10.jpg",
      },
      {
        number: 3,
        title: "Zero District",
        summary:
          "아무도 접근하지 못하는 구역에서 첫 번째 반전이 시작된다.",
        duration: "62min",
        image: "/images/img11.jpg",
      },
      {
        number: 4,
        title: "The Burned Archive",
        summary:
          "폐쇄된 데이터 보관소에서 도시가 숨겨 온 최초의 프로토콜이 발견된다.",
        duration: "56min",
        image: "/images/img12.jpg",
      },
      {
        number: 5,
        title: "No Access Level",
        summary:
          "주인공은 자신조차 접근 권한이 없는 기억 구역이 있다는 걸 알게 된다.",
        duration: "58min",
        image: "/images/img13.jpg",
      },
      {
        number: 6,
        title: "Mirror Terminal",
        summary:
          "거울처럼 복제된 단말기들이 도시 시스템의 진짜 구조를 드러낸다.",
        duration: "61min",
        image: "/images/img14.jpg",
      },
      {
        number: 7,
        title: "Signal Under the Ash",
        summary:
          "재로 덮인 폐허 아래에서 살아 있는 신호 하나가 마지막 희망처럼 떠오른다.",
        duration: "59min",
        image: "/images/img15.jpg",
      },
      {
        number: 8,
        title: "Protocol Collapse",
        summary:
          "통제 구조가 무너지는 순간, 모든 인물의 선택이 도시의 운명을 가른다.",
        duration: "65min",
        image: "/images/img16.jpg",
      },
    ],
    cast: ["Ian Rho", "Seo Mujin", "Elin Hart", "Yuna Seo", "Cha Yerin"],
    relatedSlugs: ["orbit-zero", "glass-midnight", "blue-corridor"],
  },
  {
    slug: "blade-of-mist",
    title: "Blade of Mist",
    subtitle: "Murim Series",
    tagline: "안개 속 강호와 검객의 흐름을 담은 무협 드라마",
    meta: "Series · Murim · 2026 · 15+",
    description:
      "문파의 질서와 균열, 절제된 묵직함, 먹빛의 공기감으로 밀어가는 Vision3 무협 대표작이야.",
    mode: "series",
    genre: "murim",
    coverImage: "/images/img13.jpg",
    video: pickVideo(4),
    rating: "15+",
    year: "2026",
    runtime: "EP 01 · 64min",
    status: "New Episode Weekly",
    point: "Sword Narrative",
    badges: ["Murim", "Sword", "Epic"],
    episodes: [
      {
        number: 1,
        title: "Mist Over the Gate",
        summary:
          "닫혀 있던 검문이 다시 열리고, 강호의 오래된 원한이 깨어난다.",
        duration: "64min",
        image: "/images/img13.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "Broken Sect",
        summary:
          "사라진 문파의 진실을 찾기 위한 여정이 본격적으로 시작된다.",
        duration: "58min",
        image: "/images/img14.jpg",
      },
      {
        number: 3,
        title: "Name of the Sword",
        summary:
          "검의 이름을 되찾기 위해 주인공은 첫 번째 결투를 받아들인다.",
        duration: "61min",
        image: "/images/img15.jpg",
      },
      {
        number: 4,
        title: "River of Ashes",
        summary:
          "재처럼 흩어진 문파의 흔적을 따라가며 잃어버린 연합의 역사가 드러난다.",
        duration: "57min",
        image: "/images/img16.jpg",
      },
      {
        number: 5,
        title: "The Guest of White Peak",
        summary:
          "백봉에서 온 낯선 손님이 강호를 뒤흔들 비밀 한 가지를 품고 등장한다.",
        duration: "60min",
        image: "/images/img17.jpg",
      },
      {
        number: 6,
        title: "Sword Mark on the Wall",
        summary:
          "벽면에 남겨진 검흔 하나가 오래된 복수의 방향을 바꿔 놓는다.",
        duration: "59min",
        image: "/images/img18.jpg",
      },
      {
        number: 7,
        title: "Duel at Cloud Bridge",
        summary:
          "구름다리 위에서 벌어진 결투는 승패보다 더 큰 대가를 요구한다.",
        duration: "63min",
        image: "/images/img19.jpg",
      },
      {
        number: 8,
        title: "The Blade Beyond Mist",
        summary:
          "마침내 안개 너머의 적과 마주하며 주인공은 자신의 검을 완성한다.",
        duration: "66min",
        image: "/images/img20.jpg",
      },
    ],
    cast: ["Seo Mujin", "Min Rowan", "Mira Han", "Cha Yerin", "Yuna Seo"],
    relatedSlugs: ["sword-of-dusk", "crown-of-starlight", "red-moon-ritual"],
  },
  {
    slug: "red-moon-ritual",
    title: "Red Moon Ritual",
    subtitle: "Horror Series",
    tagline: "불길한 정적과 의식을 중심으로 전개되는 공포 드라마",
    meta: "Series · Horror · 2026 · 18+",
    description:
      "빛보다 어둠을, 설명보다 분위기를 앞세우는 Vision3 공포 대표작이야. 조용한 긴장감이 핵심이야.",
    mode: "series",
    genre: "horror",
    coverImage: "/images/img17.jpg",
    video: pickVideo(5),
    rating: "18+",
    year: "2026",
    runtime: "EP 01 · 53min",
    status: "Now Streaming",
    point: "Midnight Ritual",
    badges: ["Horror", "Midnight", "Psychological"],
    episodes: [
      {
        number: 1,
        title: "The Door Beneath the Chapel",
        summary:
          "작은 예배당 아래에서 오래전 봉인된 문이 다시 열리기 시작한다.",
        duration: "53min",
        image: "/images/img17.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "No Voice in the Hall",
        summary: "아무 소리도 들리지 않는 복도에서 한 사람씩 사라진다.",
        duration: "56min",
        image: "/images/img18.jpg",
      },
      {
        number: 3,
        title: "Ritual Night",
        summary:
          "붉은 달이 떠오르는 밤, 모든 인물의 관계가 뒤집힌다.",
        duration: "59min",
        image: "/images/img19.jpg",
      },
      {
        number: 4,
        title: "The Third Candle",
        summary:
          "세 번째 촛불이 켜진 순간부터 예배당 안의 시간은 정상적으로 흐르지 않는다.",
        duration: "54min",
        image: "/images/img20.jpg",
      },
      {
        number: 5,
        title: "A Name Written in Salt",
        summary:
          "소금 위에 새겨진 이름들이 하나씩 사라지며 의식의 희생자가 드러난다.",
        duration: "57min",
        image: "/images/img1.jpg",
      },
      {
        number: 6,
        title: "Chapel Without Dawn",
        summary:
          "날이 밝지 않는 예배당 안에서 인물들은 서로를 의심하기 시작한다.",
        duration: "58min",
        image: "/images/img2.jpg",
      },
      {
        number: 7,
        title: "The Red Water Below",
        summary:
          "지하 수로에서 올라온 붉은 물이 오래된 봉인의 진짜 목적을 보여준다.",
        duration: "60min",
        image: "/images/img3.jpg",
      },
      {
        number: 8,
        title: "Moon That Watches Back",
        summary:
          "의식의 밤이 다시 돌아오고, 붉은 달은 이번엔 인물들을 먼저 바라본다.",
        duration: "62min",
        image: "/images/img4.jpg",
      },
    ],
    cast: ["Mira Han", "Ian Rho", "Jae Hyun", "Elin Hart", "Seo Mujin"],
    relatedSlugs: ["black-veil-archive", "blade-of-mist", "ash-protocol"],
  },
  {
    slug: "moonlit-throne",
    title: "Moonlit Throne",
    subtitle: "Royal Fantasy Movie",
    tagline: "은빛 왕좌를 둘러싼 로판 영화",
    meta: "Movie · Royal Fantasy · 2026 · 15+",
    description:
      "궁정의 빛과 관계의 긴장감을 영화 문법으로 더 압축해서 보여주는 Vision3 로판 무비야.",
    mode: "movies",
    genre: "rofan",
    coverImage: "/images/img2.jpg",
    video: pickVideo(6),
    rating: "15+",
    year: "2026",
    runtime: "121min",
    status: "Now Showing",
    point: "Royal Cinema",
    badges: ["Movie", "Royal Fantasy", "Premium"],
    episodes: [
      {
        number: 1,
        title: "Main Feature",
        summary:
          "왕좌를 둘러싼 비밀 계약과 감정의 균열을 한 편의 영화로 압축했다.",
        duration: "121min",
        image: "/images/img2.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "Behind the Veil",
        summary:
          "의상, 세트, 황궁 연출의 디테일을 담은 비하인드 스페셜.",
        duration: "18min",
        image: "/images/img3.jpg",
      },
    ],
    cast: ["Elin Hart", "Yuna Seo", "Seo Mujin", "Min Rowan", "Mira Han"],
    relatedSlugs: ["crown-of-starlight", "late-summer-letter", "orbit-zero"],
  },
  {
    slug: "late-summer-letter",
    title: "Late Summer Letter",
    subtitle: "Romance Movie",
    tagline: "늦여름의 편지 한 장에서 시작되는 로맨스 영화",
    meta: "Movie · Romance · 2026 · 12+",
    description:
      "조용한 감정선과 잔잔한 여운을 큰 화면 감성으로 정리한 Vision3 로맨스 무비야.",
    mode: "movies",
    genre: "romance",
    coverImage: "/images/img6.jpg",
    video: pickVideo(7),
    rating: "12+",
    year: "2026",
    runtime: "112min",
    status: "Now Showing",
    point: "Soft Cinema",
    badges: ["Movie", "Romance", "Warm Tone"],
    episodes: [
      {
        number: 1,
        title: "Main Feature",
        summary: "끝나지 못한 감정이 한 장의 편지를 통해 다시 살아난다.",
        duration: "112min",
        image: "/images/img6.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "Director Note",
        summary: "감정선과 톤앤무드 설계에 관한 연출 노트 클립.",
        duration: "15min",
        image: "/images/img7.jpg",
      },
    ],
    cast: ["Cha Yerin", "Jae Hyun", "Mira Han", "Ian Rho", "Elin Hart"],
    relatedSlugs: [
      "summer-promise",
      "the-last-scene-of-summer",
      "moonlit-throne",
    ],
  },
  {
    slug: "orbit-zero",
    title: "Orbit Zero",
    subtitle: "Sci-Fi Movie",
    tagline: "궤도를 잃은 도시 시스템의 붕괴를 담은 SF 영화",
    meta: "Movie · SF · 2026 · 15+",
    description:
      "거대한 세계관보다는 한정된 공간과 밀도 높은 시스템 긴장감으로 승부하는 Vision3 SF 무비야.",
    mode: "movies",
    genre: "sf",
    coverImage: "/images/img10.jpg",
    video: pickVideo(8),
    rating: "15+",
    year: "2026",
    runtime: "118min",
    status: "Now Showing",
    point: "Neon Cinema",
    badges: ["Movie", "Sci-Fi", "Neon"],
    episodes: [
      {
        number: 1,
        title: "Main Feature",
        summary:
          "도시 전체가 하나의 오류처럼 흔들리기 시작한 밤의 기록.",
        duration: "118min",
        image: "/images/img10.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "Concept Clip",
        summary: "시스템 UI와 공간 연출 콘셉트를 담은 스페셜 영상.",
        duration: "12min",
        image: "/images/img11.jpg",
      },
    ],
    cast: ["Ian Rho", "Elin Hart", "Yuna Seo", "Seo Mujin", "Min Rowan"],
    relatedSlugs: ["ash-protocol", "black-veil-archive", "moonlit-throne"],
  },
  {
    slug: "sword-of-dusk",
    title: "Sword of Dusk",
    subtitle: "Murim Movie",
    tagline: "황혼의 결투와 강호의 균열을 다룬 무협 영화",
    meta: "Movie · Murim · 2026 · 15+",
    description:
      "절제된 감정과 묵직한 검극 연출을 중심으로 무협 장르의 질감을 단단하게 보여주는 작품이야.",
    mode: "movies",
    genre: "murim",
    coverImage: "/images/img14.jpg",
    video: pickVideo(9),
    rating: "15+",
    year: "2026",
    runtime: "124min",
    status: "Now Showing",
    point: "Blade Cinema",
    badges: ["Movie", "Murim", "Epic"],
    episodes: [
      {
        number: 1,
        title: "Main Feature",
        summary:
          "이름 없는 검객이 마지막 결투를 향해 나아가는 무협 시네마.",
        duration: "124min",
        image: "/images/img14.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "Stunt Featurette",
        summary: "검술 동선과 액션 설계를 담은 메이킹 특집.",
        duration: "14min",
        image: "/images/img15.jpg",
      },
    ],
    cast: ["Seo Mujin", "Min Rowan", "Jae Hyun", "Mira Han", "Yuna Seo"],
    relatedSlugs: ["blade-of-mist", "red-moon-ritual", "orbit-zero"],
  },
  {
    slug: "black-veil-archive",
    title: "Black Veil Archive",
    subtitle: "Horror Movie",
    tagline: "사라진 기록과 의식의 흔적을 추적하는 공포 영화",
    meta: "Movie · Horror · 2026 · 18+",
    description:
      "강한 자극보다 불길한 공기와 오래 남는 이미지로 밀어붙이는 Vision3 공포 무비야.",
    mode: "movies",
    genre: "horror",
    coverImage: "/images/img18.jpg",
    video: pickVideo(10),
    rating: "18+",
    year: "2026",
    runtime: "107min",
    status: "Now Showing",
    point: "Dark Cinema",
    badges: ["Movie", "Horror", "Midnight"],
    episodes: [
      {
        number: 1,
        title: "Main Feature",
        summary: "봉인된 기록 보관소에서 발견된 검은 장막의 진실.",
        duration: "107min",
        image: "/images/img18.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "Sound Design Clip",
        summary:
          "정적과 저주파 공포감을 설계한 사운드 제작 스페셜.",
        duration: "11min",
        image: "/images/img19.jpg",
      },
    ],
    cast: ["Mira Han", "Cha Yerin", "Ian Rho", "Yuna Seo", "Jae Hyun"],
    relatedSlugs: ["red-moon-ritual", "orbit-zero", "sword-of-dusk"],
  },
  {
    slug: "glass-midnight",
    title: "Glass Midnight",
    subtitle: "Neo-noir Series",
    tagline: "유리처럼 차가운 밤의 감각을 담은 느와르 시리즈",
    meta: "Series · Neo-noir · 2026 · 16+",
    description:
      "차갑고 세련된 긴장감으로 이어지는 Vision3 느와르 대표작이야.",
    mode: "series",
    genre: "sf",
    coverImage: "/images/img7.jpg",
    video: pickVideo(11),
    rating: "16+",
    year: "2026",
    runtime: "EP 01 · 57min",
    status: "Now Streaming",
    point: "Night Tension",
    badges: ["Neo-noir", "Night Mood"],
    episodes: [
      {
        number: 1,
        title: "Black Reflection",
        summary: "도시의 유리벽에 비친 첫 번째 균열.",
        duration: "57min",
        image: "/images/img7.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "Midnight Stairwell",
        summary:
          "비에 젖은 계단 아래에서 두 번째 사건의 흔적이 발견된다.",
        duration: "53min",
        image: "/images/img8.jpg",
      },
      {
        number: 3,
        title: "Cold Mirror",
        summary:
          "거울처럼 반사된 진실이 인물들 사이의 거리를 뒤틀기 시작한다.",
        duration: "55min",
        image: "/images/img9.jpg",
      },
      {
        number: 4,
        title: "Glass Room",
        summary:
          "사방이 유리로 둘러싸인 방 안에서 감춰진 거래가 드러난다.",
        duration: "58min",
        image: "/images/img10.jpg",
      },
      {
        number: 5,
        title: "The Man in Blue Light",
        summary:
          "푸른 조명 아래 등장한 인물이 도시 전체의 관계망을 뒤집는다.",
        duration: "56min",
        image: "/images/img11.jpg",
      },
      {
        number: 6,
        title: "Night Without Witness",
        summary:
          "누구도 목격하지 않았던 밤의 공백 속에서 결정적 단서가 떠오른다.",
        duration: "59min",
        image: "/images/img12.jpg",
      },
    ],
    cast: ["Jae Hyun", "Elin Hart", "Min Rowan", "Cha Yerin", "Ian Rho"],
    relatedSlugs: ["ash-protocol", "the-last-scene-of-summer"],
  },
  {
    slug: "silent-harbor",
    title: "Silent Harbor",
    subtitle: "Mystery Film",
    tagline: "정적이 가장 크게 울리는 항구 도시의 미스터리",
    meta: "Movie · Mystery · 2026 · 15+",
    description:
      "침묵과 정적을 이용해 긴장감을 밀어올리는 미스터리 작품이야.",
    mode: "movies",
    genre: "romance",
    coverImage: "/images/img8.jpg",
    video: pickVideo(12),
    rating: "15+",
    year: "2026",
    runtime: "109min",
    status: "Now Showing",
    point: "Quiet Mystery",
    badges: ["Mystery", "Harbor Mood"],
    episodes: [
      {
        number: 1,
        title: "Main Feature",
        summary: "침묵으로 남겨진 사건의 흔적을 따라간다.",
        duration: "109min",
        image: "/images/img8.jpg",
        isFree: true,
      },
    ],
    cast: ["Yuna Seo", "Mira Han", "Seo Mujin", "Jae Hyun", "Cha Yerin"],
    relatedSlugs: ["the-last-scene-of-summer", "late-summer-letter"],
  },
  {
    slug: "blue-corridor",
    title: "Blue Corridor",
    subtitle: "Sci-Fi Series",
    tagline: "푸른 회랑 끝에서만 열리는 미래 도시의 문",
    meta: "Series · SF · 2026 · 15+",
    description:
      "공간과 시스템의 긴장감을 미니멀하게 설계한 SF 시리즈야.",
    mode: "series",
    genre: "sf",
    coverImage: "/images/img12.jpg",
    video: pickVideo(13),
    rating: "15+",
    year: "2026",
    runtime: "EP 01 · 51min",
    status: "Now Streaming",
    point: "Space System",
    badges: ["Sci-Fi", "Future Corridor"],
    episodes: [
      {
        number: 1,
        title: "Entry Gate",
        summary:
          "닫혀 있던 회랑이 열리며 미지의 구역으로 진입한다.",
        duration: "51min",
        image: "/images/img12.jpg",
        isFree: true,
      },
      {
        number: 2,
        title: "Low Signal Floor",
        summary:
          "신호가 끊기는 층에서 인물들은 서로 다른 시간대를 경험한다.",
        duration: "52min",
        image: "/images/img13.jpg",
      },
      {
        number: 3,
        title: "North Wing Access",
        summary:
          "접근 금지 구역이 열리며 회랑의 본래 목적이 조금씩 드러난다.",
        duration: "54min",
        image: "/images/img14.jpg",
      },
      {
        number: 4,
        title: "Blue Static",
        summary:
          "정지된 듯 보이던 공간이 사실은 계속 재배열되고 있음이 밝혀진다.",
        duration: "50min",
        image: "/images/img15.jpg",
      },
      {
        number: 5,
        title: "A Corridor That Breathes",
        summary:
          "살아 움직이는 듯한 회랑의 구조가 주인공을 다른 구역으로 이끈다.",
        duration: "55min",
        image: "/images/img16.jpg",
      },
      {
        number: 6,
        title: "Exit Not Found",
        summary:
          "출구가 사라진 층에서 인물들은 시스템의 진짜 이름과 마주한다.",
        duration: "57min",
        image: "/images/img17.jpg",
      },
    ],
    cast: ["Min Rowan", "Ian Rho", "Yuna Seo", "Cha Yerin", "Seo Mujin"],
    relatedSlugs: ["ash-protocol", "orbit-zero"],
  },
];

export function getWatchTitleBySlug(slug: string) {
  return watchCatalog.find((item) => item.slug === slug);
}