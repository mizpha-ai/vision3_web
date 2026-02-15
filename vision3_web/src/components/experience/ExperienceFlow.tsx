"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  characters,
  CharacterKey,
  getOutfitsForCharacter,
  getBackgroundsForCharacter,
  getVideoPath,
} from "@/lib/experienceData";

type Step = "character" | "outfit" | "background" | "video";

const stepLabels: Record<Step, string> = {
  character: "Select Character",
  outfit: "Select Outfit",
  background: "Select Background",
  video: "Watch Result",
};

const stepNumbers: Step[] = ["character", "outfit", "background", "video"];

export default function ExperienceFlow() {
  const [currentStep, setCurrentStep] = useState<Step>("character");
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterKey | null>(null);
  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);
  const [selectedBackground, setSelectedBackground] = useState<string | null>(null);

  const currentStepIndex = stepNumbers.indexOf(currentStep);

  const reset = useCallback(() => {
    setCurrentStep("character");
    setSelectedCharacter(null);
    setSelectedOutfit(null);
    setSelectedBackground(null);
  }, []);

  const goBack = useCallback(() => {
    if (currentStep === "outfit") {
      setSelectedCharacter(null);
      setSelectedOutfit(null);
      setCurrentStep("character");
    } else if (currentStep === "background") {
      setSelectedOutfit(null);
      setCurrentStep("outfit");
    } else if (currentStep === "video") {
      setSelectedBackground(null);
      setCurrentStep("background");
    }
  }, [currentStep]);

  const handleCharacterSelect = (id: CharacterKey) => {
    setSelectedCharacter(id);
    setSelectedOutfit(null);
    setSelectedBackground(null);
    setCurrentStep("outfit");
  };

  const handleOutfitSelect = (id: string) => {
    setSelectedOutfit(id);
    setSelectedBackground(null);
    setCurrentStep("background");
  };

  const handleBackgroundSelect = (id: string) => {
    setSelectedBackground(id);
    setCurrentStep("video");
  };

  const outfits = selectedCharacter ? getOutfitsForCharacter(selectedCharacter) : [];
  const backgrounds = selectedCharacter ? getBackgroundsForCharacter(selectedCharacter) : [];
  const videoPath =
    selectedCharacter && selectedOutfit && selectedBackground
      ? getVideoPath(selectedCharacter, selectedOutfit, selectedBackground)
      : null;

  const pageVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Step Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {stepNumbers.map((step, i) => (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 ${
                    i <= currentStepIndex
                      ? "bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] border-transparent text-white"
                      : "border-[var(--color-border-medium)] bg-transparent text-[var(--color-text-muted)]"
                  }`}
                >
                  {i < currentStepIndex ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8L6.5 11.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className="text-[11px] mt-2 text-[var(--color-text-muted)] whitespace-nowrap hidden sm:block">
                  {stepLabels[step]}
                </span>
              </div>
              {i < stepNumbers.length - 1 && (
                <div className="flex-1 mx-3 h-px relative">
                  <div className="absolute inset-0 bg-[var(--color-border-subtle)]" />
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)]"
                    initial={{ width: "0%" }}
                    animate={{ width: i < currentStepIndex ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        {/* ─── STEP 1: CHARACTER ─── */}
        {currentStep === "character" && (
          <motion.div
            key="character"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Choose Your Character
            </h2>
            <p className="text-[var(--color-text-secondary)] text-center mb-10 max-w-xl mx-auto">
              Select a character to begin. Each character leads to different outfit and background options.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {characters.map((char) => (
                <motion.button
                  key={char.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCharacterSelect(char.id)}
                  className="glass-card p-3 cursor-pointer group text-center"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 border border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent-cyan)]/50 transition-all">
                    {char.secondImageSrc ? (
                      <div className="flex h-full">
                        <div className="w-1/2 h-full relative">
                          <Image
                            src={char.imageSrc}
                            alt="Female"
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        </div>
                        <div className="w-1/2 h-full relative">
                          <Image
                            src={char.secondImageSrc}
                            alt="Male"
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={char.imageSrc}
                        alt={char.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="200px"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-sm font-semibold">{char.label}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] capitalize">{char.gender}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ─── STEP 2: OUTFIT ─── */}
        {currentStep === "outfit" && (
          <motion.div
            key="outfit"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Choose an Outfit
            </h2>
            <p className="text-[var(--color-text-secondary)] text-center mb-10">
              Select an outfit style for your character.
            </p>

            <div className="flex justify-center">
              <div
                className={`grid gap-8 ${
                  outfits.length === 1
                    ? "grid-cols-1 max-w-sm"
                    : "grid-cols-1 sm:grid-cols-3 max-w-5xl w-full"
                }`}
              >
                {outfits.map((outfit) => (
                  <motion.button
                    key={outfit.id}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleOutfitSelect(outfit.id)}
                    className="glass-card p-4 cursor-pointer group text-center"
                  >
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent-purple)]/50 transition-all">
                      <Image
                        src={outfit.imageSrc}
                        alt={outfit.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 90vw, 320px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-base font-semibold">{outfit.label}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={goBack}
                className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors underline underline-offset-4"
              >
                &larr; Back to Characters
              </button>
            </div>
          </motion.div>
        )}

        {/* ─── STEP 3: BACKGROUND ─── */}
        {currentStep === "background" && (
          <motion.div
            key="background"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Choose a Background
            </h2>
            <p className="text-[var(--color-text-secondary)] text-center mb-10">
              Select the scene background for your video.
            </p>

            <div className="flex justify-center">
              <div
                className={`grid gap-8 ${
                  backgrounds.length === 1
                    ? "grid-cols-1 max-w-lg"
                    : "grid-cols-1 sm:grid-cols-3 max-w-5xl w-full"
                }`}
              >
                {backgrounds.map((bg) => (
                  <motion.button
                    key={bg.id}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleBackgroundSelect(bg.id)}
                    className="glass-card p-4 cursor-pointer group text-center"
                  >
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent-emerald)]/50 transition-all">
                      <Image
                        src={bg.imageSrc}
                        alt={bg.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 90vw, 380px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-base font-semibold">{bg.label}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={goBack}
                className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors underline underline-offset-4"
              >
                &larr; Back to Outfits
              </button>
            </div>
          </motion.div>
        )}

        {/* ─── STEP 4: VIDEO ─── */}
        {currentStep === "video" && videoPath && (
          <motion.div
            key="video"
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your AI-Generated Video
            </h2>
            <p className="text-[var(--color-text-secondary)] text-center mb-10">
              Here is your custom AI-generated video. Press play to watch.
            </p>

            {/* Selection Summary */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {selectedCharacter && (
                <span className="tech-badge">
                  <span className="glow-dot" style={{ width: 5, height: 5 }} />
                  {characters.find((c) => c.id === selectedCharacter)?.label}
                </span>
              )}
              {selectedOutfit && (
                <span className="tech-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-purple)]" />
                  {selectedOutfit.replace("outfit_", "").replace("_f", "").replace("_m", "").replace("_mf", "")}
                </span>
              )}
              {selectedBackground && (
                <span className="tech-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)]" />
                  {selectedBackground.replace("background_", "")}
                </span>
              )}
            </div>

            {/* Video Player */}
            <div className="max-w-4xl mx-auto">
              <div className="gradient-border">
                <div className="p-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                    <video
                      src={videoPath}
                      controls
                      className="w-full h-full object-contain"
                      poster=""
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={goBack}
                className="px-6 py-3 rounded-xl border border-[var(--color-border-medium)] text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all text-sm font-semibold"
              >
                &larr; Change Background
              </button>
              <button
                onClick={reset}
                className="glow-button"
              >
                Start Over
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}