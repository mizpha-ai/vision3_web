// ============================================================
// Experience Demo Data: Characters, Outfits, Backgrounds, Videos
// ============================================================

export type CharacterKey = "character_f1" | "character_f2" | "character_m1" | "character_m2" | "character_m1f1";

export type GenderType = "female" | "male" | "couple";

export interface CharacterOption {
  id: CharacterKey;
  label: string;
  gender: GenderType;
  imageSrc: string;
  secondImageSrc?: string; // For couple
}

export interface OutfitOption {
  id: string;
  label: string;
  imageSrc: string;
}

export interface BackgroundOption {
  id: string;
  label: string;
  imageSrc: string;
}

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

// ─── Outfits ─────────────────────────────────────────────────
export const outfitsFemale: OutfitOption[] = [
  { id: "outfit_cyberpunk_f", label: "Cyberpunk", imageSrc: "/asset/outfit/outfit_f/outfit_cyberpunk_f.jpg" },
  { id: "outfit_fantasy_f", label: "Fantasy", imageSrc: "/asset/outfit/outfit_f/outfit_fantasy_f.jpg" },
  { id: "outfit_modern_f", label: "Modern", imageSrc: "/asset/outfit/outfit_f/outfit_modern_f.jpg" },
];

export const outfitsMale: OutfitOption[] = [
  { id: "outfit_cyberpunk_m", label: "Cyberpunk", imageSrc: "/asset/outfit/outfit_m/outfit_cyberpunk_m.jpg" },
  { id: "outfit_fantasy_m", label: "Fantasy", imageSrc: "/asset/outfit/outfit_m/outfit_fantasy_m.jpg" },
  { id: "outfit_modern_m", label: "Modern", imageSrc: "/asset/outfit/outfit_m/outfit_modern_m.jpg" },
];

export const outfitsCouple: OutfitOption[] = [
  { id: "outfit_cyberpunk_mf", label: "Cyberpunk", imageSrc: "/asset/outfit/outfit_mf/outfit_cyberpunk_mf.jpg" },
];

// ─── Backgrounds ─────────────────────────────────────────────
export const backgroundsAll: BackgroundOption[] = [
  { id: "background_cyberpunk", label: "Cyberpunk", imageSrc: "/asset/background/background_cyberpunk.jpg" },
  { id: "background_fantasy", label: "Fantasy", imageSrc: "/asset/background/background_fantasy.jpg" },
  { id: "background_desert", label: "Desert", imageSrc: "/asset/background/background_desert.jpg" },
];

export const backgroundsCouple: BackgroundOption[] = [
  { id: "background_cyberpunk", label: "Cyberpunk", imageSrc: "/asset/background/background_cyberpunk.jpg" },
];

// ─── Helpers ─────────────────────────────────────────────────
export function getOutfitsForCharacter(charId: CharacterKey): OutfitOption[] {
  const char = characters.find((c) => c.id === charId);
  if (!char) return [];
  if (char.gender === "female") return outfitsFemale;
  if (char.gender === "male") return outfitsMale;
  if (char.gender === "couple") return outfitsCouple;
  return [];
}

export function getBackgroundsForCharacter(charId: CharacterKey): BackgroundOption[] {
  const char = characters.find((c) => c.id === charId);
  if (!char) return [];
  if (char.gender === "couple") return backgroundsCouple;
  return backgroundsAll;
}

export function getVideoPath(
  charId: CharacterKey,
  outfitId: string,
  backgroundId: string
): string {
  // Couple: special naming
  if (charId === "character_m1f1") {
    return `/asset/video/character_m1f1_outfit_cyberpunk_m_background_cyberpunk.mp4`;
  }

  // Standard naming: {character}_{outfit}_{background}.mp4
  return `/asset/video/${charId}_${outfitId}_${backgroundId}.mp4`;
}
