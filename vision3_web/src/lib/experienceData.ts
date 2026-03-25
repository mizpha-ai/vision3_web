// vision3_web/src/lib/experienceData.ts

// ============================================================
// Experience Demo Data: Characters, Outfits, Backgrounds, Videos
// ============================================================

// 이 파일은 Experience 데모 페이지에서 사용하는
// "선택 가능한 캐릭터 / 의상 / 배경 / 결과 비디오 경로"를 한곳에 모아둔 데이터 파일이다.
// 즉, 실제 화면 컴포넌트에서 옵션 목록을 직접 하드코딩하지 않고,
// 여기서 정의한 데이터를 불러와서 단계별 선택 UI를 구성하는 구조다.
// 실제로는 ExperienceFlow.tsx가 이 파일을 import 해서
// 캐릭터 목록, 의상 목록, 배경 목록, 최종 비디오 경로를 가져다 쓴다.

export type CharacterKey = "character_f1" | "character_f2" | "character_m1" | "character_m2" | "character_m1f1";
// CharacterKey는 캐릭터의 고유 id 타입을 문자열 유니온으로 제한한 것이다.
// 이렇게 해두면 아무 문자열이나 들어가는 것이 아니라,
// 미리 정해둔 캐릭터 id만 사용할 수 있어서 오타를 줄이고 타입 안정성을 높일 수 있다.

export type GenderType = "female" | "male" | "couple";
// GenderType은 캐릭터 분류용 타입이다.
// 여기서는 단순히 남/여만 있는 것이 아니라 커플 타입도 따로 두고 있다.
// 이 값은 뒤에서 "어떤 의상 배열을 보여줄지", "어떤 배경을 보여줄지" 결정할 때 사용된다.

export interface CharacterOption {
  id: CharacterKey;
  // id: 캐릭터 고유값이다.
  // ExperienceFlow에서 선택 상태를 저장할 때 이 값을 기준으로 관리한다.

  label: string;
  // label: 화면에 보여줄 이름이다.
  // 내부적으로는 id를 쓰고, 사용자에게는 label을 보여주는 구조다.

  gender: GenderType;
  // gender: 성별/유형 분기용 값이다.
  // 이 값을 보고 여성/남성/커플 전용 의상, 배경을 나눠서 가져온다.

  imageSrc: string;
  // imageSrc: 대표 이미지 경로다.
  // 캐릭터 카드에서 기본 썸네일로 사용된다.

  secondImageSrc?: string; // For couple
  // secondImageSrc: 커플처럼 두 장의 이미지가 필요한 경우 사용하는 추가 이미지다.
  // ExperienceFlow에서는 이 값이 있으면 한 장 카드가 아니라 두 장짜리 카드처럼 분기해서 렌더링한다.
}

export interface OutfitOption {
  id: string;
  // 의상 고유값이다.
  // 최종 video 경로를 만들 때도 이 값이 조합에 들어간다.

  label: string;
  // 화면에 표시할 의상 이름이다.

  imageSrc: string;
  // 의상 썸네일 이미지 경로다.
}
// OutfitOption은 의상 옵션 한 개의 구조다.
// ExperienceFlow에서 outfit 선택 단계 카드 목록을 뿌릴 때 이 타입을 사용한다.

export interface BackgroundOption {
  id: string;
  // 배경 고유값이다.
  // 역시 최종 비디오 경로를 만들 때 조합에 들어간다.

  label: string;
  // 화면에 표시할 배경 이름이다.

  imageSrc: string;
  // 배경 썸네일 이미지 경로다.
}
// BackgroundOption은 배경 옵션 한 개의 구조다.
// 마찬가지로 배경 선택 단계에서 목록 렌더링할 때 사용한다.

// ─── Characters ──────────────────────────────────────────────
export const characters: CharacterOption[] = [
  {
    id: "character_f1",
    label: "Female Character 1",
    gender: "female",
    imageSrc: "/asset/background/character_f1.jpg",
  },
  {
    id: "character_f2",
    label: "Female Character 2",
    gender: "female",
    imageSrc: "/asset/background/character_f2.jpg",
  },
  {
    id: "character_m1",
    label: "Male Character 1",
    gender: "male",
    imageSrc: "/asset/background/character_m1.jpg",
  },
  {
    id: "character_m2",
    label: "Male Character 2",
    gender: "male",
    imageSrc: "/asset/background/character_m2.jpg",
  },
  {
    id: "character_m1f1",
    label: "Couple",
    gender: "couple",
    imageSrc: "/asset/background/character_f1.jpg",
    secondImageSrc: "/asset/background/character_m1.jpg",
  },
];
// characters는 첫 번째 단계인 "캐릭터 선택" 화면에서 보여주는 전체 캐릭터 목록이다.
// ExperienceFlow.tsx에서 import 해서 map으로 카드 UI를 만든다.
// 마지막 커플 캐릭터만 secondImageSrc를 가지고 있어서
// 일반 캐릭터와 다르게 두 장짜리 카드로 처리된다.

// ─── Outfits ─────────────────────────────────────────────────
export const outfitsFemale: OutfitOption[] = [
  { id: "outfit_cyberpunk_f", label: "Cyberpunk", imageSrc: "/asset/outfit/outfit_f/outfit_cyberpunk_f.jpg" },
  { id: "outfit_fantasy_f", label: "Fantasy", imageSrc: "/asset/outfit/outfit_f/outfit_fantasy_f.jpg" },
  { id: "outfit_modern_f", label: "Modern", imageSrc: "/asset/outfit/outfit_f/outfit_modern_f.jpg" },
];
// 여성 캐릭터가 선택되었을 때 보여줄 의상 목록이다.

export const outfitsMale: OutfitOption[] = [
  { id: "outfit_cyberpunk_m", label: "Cyberpunk", imageSrc: "/asset/outfit/outfit_m/outfit_cyberpunk_m.jpg" },
  { id: "outfit_fantasy_m", label: "Fantasy", imageSrc: "/asset/outfit/outfit_m/outfit_fantasy_m.jpg" },
  { id: "outfit_modern_m", label: "Modern", imageSrc: "/asset/outfit/outfit_m/outfit_modern_m.jpg" },
];
// 남성 캐릭터가 선택되었을 때 보여줄 의상 목록이다.

export const outfitsCouple: OutfitOption[] = [
  { id: "outfit_cyberpunk_mf", label: "Cyberpunk", imageSrc: "/asset/outfit/outfit_mf/outfit_cyberpunk_mf.jpg" },
];
// 커플 캐릭터용 의상 목록이다.
// 현재는 사이버펑크 한 종류만 연결되어 있다.
// 나중에 커플 의상을 더 늘릴 수 있도록 배열 구조로 만든 것이다.

// ─── Backgrounds ─────────────────────────────────────────────
export const backgroundsAll: BackgroundOption[] = [
  { id: "background_cyberpunk", label: "Cyberpunk", imageSrc: "/asset/background/background_cyberpunk.jpg" },
  { id: "background_fantasy", label: "Fantasy", imageSrc: "/asset/background/background_fantasy.jpg" },
  { id: "background_desert", label: "Desert", imageSrc: "/asset/background/background_desert.jpg" },
];
// 일반 캐릭터들이 사용할 수 있는 전체 배경 목록이다.

export const backgroundsCouple: BackgroundOption[] = [
  { id: "background_cyberpunk", label: "Cyberpunk", imageSrc: "/asset/background/background_cyberpunk.jpg" },
];
// 커플 캐릭터 전용 배경 목록이다.
// 현재는 커플 조합과 맞는 사이버펑크 배경만 허용하고 있다.
// 즉, 일반 캐릭터보다 선택지가 좁은 특수 규칙이다.

// ─── Helpers ─────────────────────────────────────────────────
export function getOutfitsForCharacter(charId: CharacterKey): OutfitOption[] {
  const char = characters.find((c) => c.id === charId);
  // characters 배열에서 id가 일치하는 캐릭터 객체를 찾는다.

  if (!char) return [];
  // 혹시 없는 id가 들어오면 안전하게 빈 배열 반환

  if (char.gender === "female") return outfitsFemale;
  if (char.gender === "male") return outfitsMale;
  if (char.gender === "couple") return outfitsCouple;
  // 캐릭터 성별/유형에 따라 의상 데이터 소스를 분기한다.

  return [];
  // 위 조건에 모두 안 걸리는 예외 상황 방어
}
// 선택한 캐릭터 id를 기준으로 어떤 의상 배열을 반환할지 결정하는 헬퍼 함수다.
// ExperienceFlow에서 selectedCharacter가 바뀔 때마다 이 함수로 의상 목록을 가져온다.

export function getBackgroundsForCharacter(charId: CharacterKey): BackgroundOption[] {
  const char = characters.find((c) => c.id === charId);
  // characters 배열에서 id가 일치하는 캐릭터 객체를 찾는다.

  if (!char) return [];
  // id가 잘못 들어온 경우 빈 배열 반환

  if (char.gender === "couple") return backgroundsCouple;
  // 커플은 전용 배경만 보여주도록 제한

  return backgroundsAll;
  // 일반 캐릭터는 전체 배경 사용
}
// 선택한 캐릭터에 따라 배경 목록을 반환하는 함수다.
// 커플이면 전용 배경만,
// 그 외에는 전체 배경 배열을 그대로 반환한다.

export function getVideoPath(
  charId: CharacterKey,
  outfitId: string,
  backgroundId: string
): string {
  // Couple: special naming
  if (charId === "character_m1f1") {
    return `/asset/video/character_m1f1_outfit_cyberpunk_m_background_cyberpunk.mp4`;
  }
  // 커플은 파일명이 일반 규칙과 다르게 저장되어 있어서 예외 처리한다.
  // 그래서 charId, outfitId, backgroundId를 그대로 이어붙이지 않고
  // 현재 연결된 실제 파일명을 직접 반환하는 방식이다.

  // Standard naming: {character}_{outfit}_{background}.mp4
  return `/asset/video/${charId}_${outfitId}_${backgroundId}.mp4`;
  // 일반 캐릭터는 캐릭터id + 의상id + 배경id를 이어붙여서
  // 비디오 파일명을 동적으로 만든다.
}
// 최종 선택값(캐릭터, 의상, 배경)을 바탕으로 결과 비디오 파일 경로를 만드는 함수다.
// ExperienceFlow의 마지막 단계에서 video src로 들어갈 경로를 여기서 조합한다.