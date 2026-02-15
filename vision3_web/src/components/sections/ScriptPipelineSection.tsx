"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowCard from "@/components/ui/GlowCard";

const scriptStages = [
  {
    id: "S1",
    name: "Base Script Drafting",
    input: "Plot summary, situation, character voice profiles",
    output: "Multiple draft versions (base language)",
    approval: "Select version",
    color: "#8b5cf6",
  },
  {
    id: "S2",
    name: "Speech-Style Transform",
    input: "Selected draft + style preset",
    output: "Style variants (romantic / drama / cinematic)",
    approval: "Select style",
    color: "#ec4899",
  },
  {
    id: "S3",
    name: "Translation",
    input: "Selected style version",
    output: "Translated script + 10-min split data",
    approval: "Final review",
    color: "#00d4ff",
  },
];

const splitStrategies = [
  {
    name: "Same-Speaker Continuation",
    description:
      "Switches to an extreme close-up (ECU) and continues filming the same speaker.",
    useCase: "When one character's dialogue runs long",
    icon: "🎬",
  },
  {
    name: "Partner Face Only",
    description:
      "Shows the listener's face while the speaker's voice plays as an overlay.",
    useCase: "When a reaction shot is needed",
    icon: "👁️",
  },
  {
    name: "Landscape Cut",
    description:
      "Inserts a landscape shot as an emotional transition between dialogue beats.",
    useCase: "When the scene mood needs to shift",
    icon: "🏞️",
  },
];

export default function ScriptPipelineSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-magenta)] opacity-[0.02] blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Script Pipeline"
          title="Draft, Transform, Translate"
          subtitle="The script pipeline has three stages: draft the base script, apply a speech-style transform, then translate. At each stage the AI produces multiple versions for comparison."
        />

        {/* Three stages as horizontal flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {scriptStages.map((stage, i) => (
            <ScrollReveal key={stage.id} delay={i * 0.15}>
              <div className="relative h-full">
                {/* Connector arrow */}
                {i < scriptStages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7H11M11 7L7 3M11 7L7 11" stroke={stage.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                    </svg>
                  </div>
                )}
                <div className="glass-card p-6 h-full">
                  {/* Stage ID */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border"
                      style={{
                        color: stage.color,
                        borderColor: `${stage.color}30`,
                        background: `${stage.color}10`,
                      }}
                    >
                      {stage.id}
                    </span>
                    <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                      {stage.name}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                        Input
                      </span>
                      <p className="text-sm text-[var(--color-text-secondary)]">{stage.input}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                        Output
                      </span>
                      <p className="text-sm text-[var(--color-text-secondary)]">{stage.output}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                        Approval
                      </span>
                      <p className="text-sm" style={{ color: stage.color }}>
                        {stage.approval}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 8-Second Clip Splitting */}
        <ScrollReveal>
          <div className="mb-10 text-center">
            <span className="tech-badge mb-4 inline-flex">
              <span className="glow-dot" style={{ width: 5, height: 5 }} />
              10-Min Clip Splitting
            </span>
            <h3
              className="text-2xl md:text-3xl font-bold mt-4 mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Intelligent Dialogue Segmentation
            </h3>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Dialogue is automatically split into 10-min clips. When three or more lines are present, these strategies are applied:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {splitStrategies.map((strategy, i) => (
            <ScrollReveal key={strategy.name} delay={i * 0.12}>
              <GlowCard>
                <div className="text-3xl mb-4">{strategy.icon}</div>
                <h4 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {strategy.name}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {strategy.description}
                </p>
                <div className="px-3 py-1.5 rounded-lg bg-[var(--color-accent-purple)]/5 border border-[var(--color-accent-purple)]/15 inline-block">
                  <p className="text-xs text-[var(--color-accent-purple)]">{strategy.useCase}</p>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Quick buttons showcase */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {["Auto Split 10min", "Same Speaker Continue", "Partner Face Only", "Landscape Cut"].map(
              (btn) => (
                <span
                  key={btn}
                  className="px-4 py-2 rounded-lg border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] text-sm text-[var(--color-text-secondary)] font-medium"
                >
                  [{btn}]
                </span>
              )
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
