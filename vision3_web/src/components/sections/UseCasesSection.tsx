"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const useCases = [
  {
    id: "scenario1",
    title: "Web Drama Episode Production",
    subtitle: "End-to-end workflow for episodic content",
    icon: "🎭",
    color: "#00d4ff",
    steps: [
      {
        step: "Character Creation",
        detail: "Run the full C1 through C5 pipeline for both leads. Set up consistency profiles so characters look visually harmonious.",
      },
      {
        step: "Scriptwriting",
        detail: "Draft the base script in S1, apply a \"drama\" style transform in S2. Use the 10-min auto-split to verify pacing.",
      },
      {
        step: "Scene Design",
        detail: "In the Scene Builder, map out shots. Assign V1 (wide), V3 (OTS), V4 (dialogue) for conversations, and V7 (landscape) for transitions.",
      },
      {
        step: "Video Generation",
        detail: "Batch-generate videos following the shot plan. Pick the best candidate for each shot, manually retry any that need improvement.",
      },
      {
        step: "Export",
        detail: "Package finished shots as a CapCut-ready bundle — complete with SRT subtitles, CSV shot list, and organized folders.",
      },
    ],
  },
  {
    id: "scenario2",
    title: "High-Volume Short-Form Content",
    subtitle: "Rapidly produce a library of short-form clips",
    icon: "📱",
    color: "#8b5cf6",
    steps: [
      {
        step: "Reusable Characters",
        detail: "Once a character is finalized (C1–C5), it lives in the Asset Library and can be reused indefinitely.",
      },
      {
        step: "Fresh Scripts",
        detail: "For each new piece of content, simply write a fresh script in the Script Studio.",
      },
      {
        step: "Direct Shot Production",
        detail: "Jump straight to V4 (dialogue) or V5 (silent) shots in the Scene Builder.",
      },
      {
        step: "Parallel Generation",
        detail: "Batch generation lets you create multiple clips in parallel, building a content pipeline at scale.",
      },
    ],
  },
  {
    id: "scenario3",
    title: "Multilingual Content",
    subtitle: "Localize content across languages effortlessly",
    icon: "🌍",
    color: "#ec4899",
    steps: [
      {
        step: "Complete Base",
        detail: "After completing S1 (base script) and S2 (style transform), your content is ready for translation.",
      },
      {
        step: "Translate",
        detail: "Run S3 to generate a translated version with 10-min split data generated alongside.",
      },
      {
        step: "Export Localized",
        detail: "Export localized SRT subtitles directly from the Export Center — no additional timing work required.",
      },
    ],
  },
];

export default function UseCasesSection() {
  const [activeId, setActiveId] = useState<string | null>("scenario1");

  return (
    <section id="usecases" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Use Cases"
          title="Real-World Production Scenarios"
          subtitle="From full episodic workflows to high-volume short-form content and multilingual localization."
        />

        <div className="max-w-4xl mx-auto">
          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.id} delay={i * 0.1}>
              <div className="mb-4">
                <motion.button
                  onClick={() => setActiveId(activeId === uc.id ? null : uc.id)}
                  className={`w-full text-left glass-card p-6 transition-all duration-300 ${
                    activeId === uc.id ? "border-[var(--color-border-accent)]" : ""
                  }`}
                  whileHover={{ scale: 1.005 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: `${uc.color}10`, border: `1px solid ${uc.color}25` }}
                    >
                      {uc.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {uc.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)]">{uc.subtitle}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: activeId === uc.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[var(--color-text-muted)]"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {activeId === uc.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pl-4">
                        <div className="border-l-2 border-[var(--color-border-medium)] pl-6 py-2 space-y-4">
                          {uc.steps.map((step, si) => (
                            <motion.div
                              key={step.step}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: si * 0.08 }}
                              className="relative"
                            >
                              {/* Dot on the line */}
                              <div
                                className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 bg-[var(--color-bg-primary)]"
                                style={{ borderColor: uc.color }}
                              />
                              <h4 className="text-sm font-semibold mb-1">
                                Step {si + 1}: {step.step}
                              </h4>
                              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                                {step.detail}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
