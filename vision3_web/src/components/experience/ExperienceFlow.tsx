// vision3_web/src/components/experience/ExperienceFlow.tsx
"use client";

// 이 파일은 /experience 페이지의 핵심 로직 파일이다.
// 실제 데모 흐름이 여기서 만들어진다.
// 캐릭터 선택 → 의상 선택 → 배경 선택 → 비디오 재생 순으로 진행되며,
// 선택값 상태와 단계 이동을 전부 이 컴포넌트가 관리한다.
// 이전 버전과 비교하면, 지금은 다국어 대응이 들어가면서
// 화면에 보이는 문구와 라벨을 번역 키 기반으로 관리하는 구조가 추가되었다.

import { useState, useCallback } from "react";
// 현재 단계, 선택된 캐릭터/의상/배경 상태를 관리하기 위해 useState 사용
// reset, goBack 같은 핸들러를 불필요하게 재생성하지 않기 위해 useCallback 사용

import { motion, AnimatePresence } from "framer-motion";
// 단계 전환 애니메이션과 카드 hover 애니메이션을 위해 사용한다.

import Image from "next/image";
// 캐릭터/의상/배경 썸네일 이미지를 최적화해서 출력하기 위한 Next Image다.

import {
  characters as charData,
  CharacterKey,
  getOutfitsForCharacter,
  getBackgroundsForCharacter,
  getVideoPath,
} from "@/lib/experienceData";
// experienceData.ts와 직접 연결되는 부분이다.
// 실제 옵션 데이터와 헬퍼 함수들을 받아온다.
// 이전 버전에서는 characters라는 이름 그대로 가져왔지만,
// 지금은 charData로 별칭을 붙여서 가져오고 있다.
// 이유는 아래에서 선택 요약이나 라벨 처리와 구분해서 더 읽기 쉽게 하려는 의도로 볼 수 있다.

import { useLanguage } from "@/lib/i18n";
// 다국어 번역을 위한 훅이다.
// 이 파일 안의 단계 제목, 설명, 버튼 문구, 캐릭터/의상/배경 라벨을
// 현재 언어에 맞게 바꾸기 위해 사용한다.

type Step = "character" | "outfit" | "background" | "video";
// 단계명을 문자열 유니온으로 묶어서
// currentStep에 엉뚱한 문자열이 들어가지 않게 제한한다.

const stepNumbers: Step[] = ["character", "outfit", "background", "video"];
// 단계 순서를 배열로 명시해두고
// index 비교로 현재 진행 상태를 계산한다.

const charLabelKeys: Record<string, string> = {
  character_f1: "exp.char.f1",
  character_f2: "exp.char.f2",
  character_m1: "exp.char.m1",
  character_m2: "exp.char.m2",
  character_m1f1: "exp.char.couple",
};
// 캐릭터 id를 번역 키로 바꿔주는 매핑표다.
// 이전 버전에서는 char.label을 그대로 썼지만,
// 지금은 현재 언어에 맞는 이름을 보여주기 위해 id → 번역 키로 한 번 연결한 뒤 t(...)를 거친다.

const genderLabelKeys: Record<string, string> = {
  female: "exp.char.female",
  male: "exp.char.male",
  couple: "exp.char.coupleLabel",
};
// 성별/유형 표시도 직접 female, male, couple을 보여주지 않고
// 번역 키를 통해 현재 언어 문구로 바꾸기 위한 매핑표다.

const outfitLabelKeys: Record<string, string> = {
  outfit_cyberpunk_f: "exp.outfit.cyberpunk",
  outfit_fantasy_f: "exp.outfit.fantasy",
  outfit_modern_f: "exp.outfit.modern",
  outfit_cyberpunk_m: "exp.outfit.cyberpunk",
  outfit_fantasy_m: "exp.outfit.fantasy",
  outfit_modern_m: "exp.outfit.modern",
  outfit_cyberpunk_mf: "exp.outfit.cyberpunk",
};
// 의상 id를 번역 키로 매핑하는 객체다.
// 이전 버전에서는 outfit.label을 직접 썼지만,
// 지금은 현재 언어에 맞게 출력하기 위해 id 기준 매핑을 거친다.

const bgLabelKeys: Record<string, string> = {
  background_cyberpunk: "exp.bg.cyberpunk",
  background_fantasy: "exp.bg.fantasy",
  background_desert: "exp.bg.desert",
};
// 배경 id를 번역 키로 매핑하는 객체다.
// 최종 선택 요약 태그와 배경 카드 제목에서 모두 사용된다.

export default function ExperienceFlow() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이제 이 파일 안의 사용자 표시 문구는 대부분 t("키")를 통해 출력된다.

  const [currentStep, setCurrentStep] = useState<Step>("character");
  // 현재 어느 단계에 있는지 저장
  // 처음 들어왔을 때는 항상 character 단계에서 시작한다.

  const [selectedCharacter, setSelectedCharacter] = useState<CharacterKey | null>(null);
  // 선택된 캐릭터 id

  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);
  // 선택된 의상 id

  const [selectedBackground, setSelectedBackground] = useState<string | null>(null);
  // 선택된 배경 id

  const currentStepIndex = stepNumbers.indexOf(currentStep);
  // 현재 단계가 stepNumbers 배열의 몇 번째인지 계산한다.
  // 상단 진행 바에서 어느 단계까지 완료되었는지 판단할 때 사용한다.

  const stepLabels: Record<Step, string> = {
    character: t("exp.step.character"),
    outfit: t("exp.step.outfit"),
    background: t("exp.step.background"),
    video: t("exp.step.video"),
  };
  // 진행 바 아래에 보여줄 사용자용 단계 라벨이다.
  // 이전 버전에서는 고정 영어 문자열을 썼지만,
  // 지금은 현재 언어에 맞게 번역된 단계명을 보여준다.

  const reset = useCallback(() => {
    // 처음 상태로 완전히 되돌리는 함수
    setCurrentStep("character");
    setSelectedCharacter(null);
    setSelectedOutfit(null);
    setSelectedBackground(null);
  }, []);

  const goBack = useCallback(() => {
    // 현재 단계에 따라 한 단계 이전으로 돌아가는 로직
    if (currentStep === "outfit") {
      // outfit 단계에서 뒤로 가면 캐릭터 선택부터 다시
      setSelectedCharacter(null);
      setSelectedOutfit(null);
      setCurrentStep("character");
    } else if (currentStep === "background") {
      // background 단계에서 뒤로 가면 outfit 선택으로
      setSelectedOutfit(null);
      setCurrentStep("outfit");
    } else if (currentStep === "video") {
      // video 단계에서 뒤로 가면 background 선택으로
      setSelectedBackground(null);
      setCurrentStep("background");
    }
  }, [currentStep]);

  const handleCharacterSelect = (id: CharacterKey) => {
    // 캐릭터를 선택하면 그 캐릭터를 저장하고
    setSelectedCharacter(id);

    // 이전에 골랐던 의상/배경은 초기화
    // 캐릭터가 바뀌면 뒤 옵션들이 달라질 수 있기 때문이다.
    setSelectedOutfit(null);
    setSelectedBackground(null);

    // 다음 단계로 이동
    setCurrentStep("outfit");
  };

  const handleOutfitSelect = (id: string) => {
    // 의상 저장
    setSelectedOutfit(id);

    // 배경은 다시 고르게 초기화
    setSelectedBackground(null);

    // 배경 단계로 이동
    setCurrentStep("background");
  };

  const handleBackgroundSelect = (id: string) => {
    // 배경 저장
    setSelectedBackground(id);

    // 마지막 비디오 단계로 이동
    setCurrentStep("video");
  };

  const outfits = selectedCharacter ? getOutfitsForCharacter(selectedCharacter) : [];
  // 선택된 캐릭터에 맞는 의상 목록 가져오기
  // experienceData.ts의 규칙을 그대로 따른다.

  const backgrounds = selectedCharacter ? getBackgroundsForCharacter(selectedCharacter) : [];
  // 선택된 캐릭터에 맞는 배경 목록 가져오기
  // 커플 여부에 따라 일반 배경/전용 배경이 갈린다.

  const videoPath = selectedCharacter && selectedOutfit && selectedBackground ? getVideoPath(selectedCharacter, selectedOutfit, selectedBackground) : null;
  // 캐릭터, 의상, 배경이 모두 선택되었을 때만 비디오 경로 생성
  // 최종 결과 비디오 src는 experienceData.ts의 getVideoPath가 만든다.

  const pageVariants = { enter: { opacity: 0, x: 40 }, center: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -40 } };
  // 단계 전환 시 좌우로 밀리며 바뀌는 페이지 애니메이션 정의다.
  // 새 화면은 오른쪽에서 들어오고, 이전 화면은 왼쪽으로 빠지는 느낌을 준다.

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress Bar */}
      {/* 현재 몇 단계인지 시각적으로 보여주는 상단 진행 바 */}

      <div className="mb-12">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {stepNumbers.map((step, i) => (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 ${i <= currentStepIndex ? "bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] border-transparent text-white" : "border-[var(--color-border-medium)] bg-transparent text-[var(--color-text-muted)]"}`}>
                  {i < currentStepIndex ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8L6.5 11.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                {/* 이미 끝난 단계는 숫자 대신 체크 아이콘 표시
                    현재 또는 미래 단계는 숫자를 그대로 보여준다. */}

                <span className="text-[11px] mt-2 text-[var(--color-text-muted)] whitespace-nowrap hidden sm:block">{stepLabels[step]}</span>
              </div>

              {i < stepNumbers.length - 1 && (
                <div className="flex-1 mx-3 h-px relative">
                  <div className="absolute inset-0 bg-[var(--color-border-subtle)]" />
                  {/* 연결선 바탕 */}

                  <motion.div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)]" initial={{ width: "0%" }} animate={{ width: i < currentStepIndex ? "100%" : "0%" }} transition={{ duration: 0.5 }} />
                  {/* 완료된 단계까지만 색이 채워지는 진행선 */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      {/* mode="wait"를 줘서 이전 화면 exit 후 다음 화면 enter가 자연스럽게 이어진다. */}
      <AnimatePresence mode="wait">
        {/* STEP 1: CHARACTER */}
        {currentStep === "character" && (
          <motion.div key="character" variants={pageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ fontFamily: "var(--font-display)" }}>{t("exp.char.title")}</h2>

            <p className="text-[var(--color-text-secondary)] text-center mb-10 max-w-xl mx-auto">{t("exp.char.desc")}</p>
            {/* 이전 버전에서는 영어 제목/설명을 직접 적었지만,
                지금은 캐릭터 단계 제목과 설명도 번역 키 기반으로 바뀌었다. */}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {charData.map((char) => (
                <motion.button key={char.id} whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => handleCharacterSelect(char.id)} className="glass-card p-3 cursor-pointer group text-center">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 border border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent-cyan)]/50 transition-all">
                    {char.secondImageSrc ? (
                      <div className="flex h-full">
                        <div className="w-1/2 h-full relative"><Image src={char.imageSrc} alt="F" fill className="object-cover" sizes="120px" /></div>
                        <div className="w-1/2 h-full relative"><Image src={char.secondImageSrc} alt="M" fill className="object-cover" sizes="120px" /></div>
                      </div>
                    ) : (
                      <Image src={char.imageSrc} alt={t(charLabelKeys[char.id])} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="200px" />
                    )}
                    {/* 커플 캐릭터는 이미지 두 장을 반반 나눠 보여준다.
                        일반 캐릭터는 이미지 한 장만 보여준다.
                        일반 캐릭터 alt도 이제 char.label이 아니라 번역된 이름을 사용한다. */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* hover 시 하단 그라디언트 오버레이 */}
                  </div>

                  <p className="text-sm font-semibold">{t(charLabelKeys[char.id])}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)]">{t(genderLabelKeys[char.gender])}</p>
                </motion.button>
              ))}
            </div>
            {/* 이전 버전에서는 char.label, char.gender를 직접 출력했지만,
                지금은 캐릭터 이름과 성별/유형을 모두 번역 키 매핑을 통해 출력한다. */}
          </motion.div>
        )}

        {/* STEP 2: OUTFIT */}
        {currentStep === "outfit" && (
          <motion.div key="outfit" variants={pageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ fontFamily: "var(--font-display)" }}>{t("exp.outfit.title")}</h2>
            <p className="text-[var(--color-text-secondary)] text-center mb-10">{t("exp.outfit.desc")}</p>
            {/* 의상 단계 제목과 설명도 번역 키 기반으로 바뀌었다. */}

            <div className="flex justify-center">
              <div className={`grid gap-8 ${outfits.length === 1 ? "grid-cols-1 max-w-sm" : "grid-cols-1 sm:grid-cols-3 max-w-5xl w-full"}`}>
                {outfits.map((outfit) => (
                  <motion.button key={outfit.id} whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => handleOutfitSelect(outfit.id)} className="glass-card p-4 cursor-pointer group text-center">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent-purple)]/50 transition-all">
                      <Image src={outfit.imageSrc} alt={t(outfitLabelKeys[outfit.id] || "")} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 90vw, 320px" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <p className="text-base font-semibold">{t(outfitLabelKeys[outfit.id] || "")}</p>
                  </motion.button>
                ))}
              </div>
            </div>
            {/* 이전 버전에서는 outfit.label을 직접 썼지만,
                지금은 outfit id를 번역 키로 매핑해서 현재 언어 이름을 보여준다. */}

            <div className="mt-8 text-center">
              <button onClick={goBack} className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors underline underline-offset-4">{t("exp.back.character")}</button>
            </div>
            {/* 이전 단계 버튼 문구도 번역 키 기반으로 바뀌었다. */}
          </motion.div>
        )}

        {/* STEP 3: BACKGROUND */}
        {currentStep === "background" && (
          <motion.div key="background" variants={pageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ fontFamily: "var(--font-display)" }}>{t("exp.bg.title")}</h2>
            <p className="text-[var(--color-text-secondary)] text-center mb-10">{t("exp.bg.desc")}</p>
            {/* 배경 단계 제목과 설명도 번역 키 기반으로 바뀌었다. */}

            <div className="flex justify-center">
              <div className={`grid gap-8 ${backgrounds.length === 1 ? "grid-cols-1 max-w-lg" : "grid-cols-1 sm:grid-cols-3 max-w-5xl w-full"}`}>
                {backgrounds.map((bg) => (
                  <motion.button key={bg.id} whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => handleBackgroundSelect(bg.id)} className="glass-card p-4 cursor-pointer group text-center">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent-emerald)]/50 transition-all">
                      <Image src={bg.imageSrc} alt={t(bgLabelKeys[bg.id] || "")} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 90vw, 380px" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <p className="text-base font-semibold">{t(bgLabelKeys[bg.id] || "")}</p>
                  </motion.button>
                ))}
              </div>
            </div>
            {/* 이전 버전에서는 bg.label을 직접 썼지만,
                지금은 배경 id를 번역 키로 매핑해서 현재 언어 이름을 보여준다. */}

            <div className="mt-8 text-center">
              <button onClick={goBack} className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors underline underline-offset-4">{t("exp.back.outfit")}</button>
            </div>
            {/* 이전 단계 버튼 문구도 번역 키 기반으로 바뀌었다. */}
          </motion.div>
        )}

        {/* STEP 4: VIDEO */}
        {currentStep === "video" && videoPath && (
          <motion.div key="video" variants={pageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ fontFamily: "var(--font-display)" }}>{t("exp.video.title")}</h2>
            <p className="text-[var(--color-text-secondary)] text-center mb-10">{t("exp.video.desc")}</p>
            {/* 비디오 단계 제목과 설명도 번역 키 기반으로 바뀌었다. */}

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {selectedCharacter && (
                <span className="tech-badge">
                  <span className="glow-dot" style={{ width: 5, height: 5 }} />
                  {t(charLabelKeys[selectedCharacter])}
                </span>
              )}

              {selectedOutfit && (
                <span className="tech-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-purple)]" />
                  {t(outfitLabelKeys[selectedOutfit] || "")}
                </span>
              )}

              {selectedBackground && (
                <span className="tech-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)]" />
                  {t(bgLabelKeys[selectedBackground] || "")}
                </span>
              )}
            </div>
            {/* Selection Summary
                사용자가 어떤 조합을 골랐는지 태그 형태로 요약한다.
                이전 버전에서는 id 문자열에서 prefix/suffix를 잘라서 이름처럼 보이게 했지만,
                지금은 번역 키 매핑을 통해 더 정확한 사용자 표시 이름을 출력한다. */}

            <div className="max-w-4xl mx-auto">
              <div className="gradient-border">
                <div className="p-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                    <video src={videoPath} controls className="w-full h-full object-contain">Your browser does not support the video tag.</video>
                  </div>
                </div>
              </div>
            </div>
            {/* Video Player
                실제 최종 결과 비디오 재생 영역이다. */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={goBack} className="px-6 py-3 rounded-xl border border-[var(--color-border-medium)] text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all text-sm font-semibold">{t("exp.back.background")}</button>

              <button onClick={reset} className="glow-button">{t("exp.startOver")}</button>
            </div>
            {/* Actions
                마지막 단계에서 배경만 다시 바꾸거나 처음부터 다시 시작할 수 있다.
                버튼 문구도 전부 번역 키 기반으로 바뀌었다. */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
// 정리하면 ExperienceFlow의 전체 흐름 구조는 이전과 같지만,
// 단계 라벨, 제목, 설명, 버튼, 캐릭터/의상/배경 표시 이름까지 전부
// 번역 키 기반으로 바뀌면서 다국어 대응이 크게 들어간 상태다.