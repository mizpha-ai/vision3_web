"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const shotTypes = [
  { id: "V1", name: "Wide Shot (2-Person)", input: "Female + male character images", output: "10-min wide video candidates", color: "#00d4ff" },
  { id: "V2", name: "Frame Extraction", input: "V1 video result", output: "Key frames (auto 12 or manual)", color: "#0ea5e9" },
  { id: "V3", name: "Over-the-Shoulder (OTS)", input: "Character images + wide frame", output: "OTS frame candidates", color: "#8b5cf6" },
  { id: "V4", name: "Dialogue Shot", input: "Speaker + OTS frame + lines", output: "10-min dialogue video", color: "#a855f7" },
  { id: "V5", name: "Silent Shot", input: "Same as V4 (no dialogue)", output: "10-min silent video (emotion)", color: "#ec4899" },
  { id: "V6", name: "Continuation (ECU)", input: "Previous ECU frame + images", output: "10-min continuation video", color: "#f43f5e" },
  { id: "V7", name: "Landscape Cut", input: "Character image → generate scene", output: "Clean landscape frame/video", color: "#10b981" },
];

const workflowSteps = [
  { label: "V1 — Wide Shot", desc: "Generate the establishing shot" },
  { label: "V2 — Frame Extraction", desc: "Extract key frames as reference" },
  { label: "V3 — OTS Framing", desc: "Generate over-the-shoulder compositions" },
  { label: "V4 — Dialogue Shots", desc: "Produce the conversation clips" },
];

const promptFields = [
  { field: "Shot Type", example: "Wide / OTS / ECU / Landscape" },
  { field: "Camera", example: "Locked-off / Static" },
  { field: "Action", example: "Sit / Stand / Walk + continuity" },
  { field: "Emotion", example: "Emotion preset + narrative text" },
  { field: "Dialogue", example: "Dialogue mode / Silent mode" },
];

export default function VideoPipelineSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-magenta)] opacity-[0.02] blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Video Pipeline"
          title="Seven Shot Types"
          subtitle="Video production supports seven distinct shot types. Each shot can be generated independently while maintaining visual consistency through shared assets."
        />

        {/* Shot types grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {shotTypes.map((shot, i) => (
            <ScrollReveal key={shot.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                className="glass-card p-5 h-full cursor-default"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                    style={{ background: `${shot.color}15`, color: shot.color }}
                  >
                    {shot.id}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ background: `linear-gradient(90deg, ${shot.color}30, transparent)` }}
                  />
                </div>
                <h4
                  className="text-sm font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {shot.name}
                </h4>
                <div className="space-y-1.5">
                  <p className="text-xs text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-text-secondary)]">In:</span> {shot.input}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-text-secondary)]">Out:</span> {shot.output}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Dialogue Scene Workflow */}
        <ScrollReveal>
          <div className="gradient-border max-w-4xl mx-auto mb-16">
            <div className="p-8 md:p-10">
              <h3
                className="text-xl font-bold mb-2 text-center"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Typical Dialogue Scene Workflow
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] text-center mb-8">
                Recommended order for a standard two-person dialogue scene
              </p>

              <div className="flex flex-col md:flex-row items-stretch gap-4">
                {workflowSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-4 flex-1">
                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 }}
                        className="p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-center"
                      >
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] flex items-center justify-center text-xs font-bold mx-auto mb-2">
                          {i + 1}
                        </div>
                        <p className="text-sm font-semibold mb-0.5">{step.label}</p>
                        <p className="text-[11px] text-[var(--color-text-muted)]">{step.desc}</p>
                      </motion.div>
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <div className="hidden md:block shrink-0 text-[var(--color-accent-cyan)] opacity-40">
                        ▸
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Shot Prompt Builder */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Shot Prompt Builder
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-2">
                Fill in structured fields — the system automatically composes optimized generation prompts.
              </p>
            </div>

            <div className="glass-card p-6 space-y-3">
              {promptFields.map((pf, i) => (
                <motion.div
                  key={pf.field}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)]"
                >
                  <span className="text-sm font-semibold text-white w-28 shrink-0">
                    {pf.field}
                  </span>
                  <span className="text-sm text-[var(--color-text-muted)] font-mono">
                    {pf.example}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quick presets */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["Pure Silent Scene", "Locked Camera", "Over-the-Shoulder", "Extreme Close-Up"].map(
                (p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 rounded-lg border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 text-xs text-[var(--color-accent-cyan)] font-medium"
                  >
                    {p}
                  </span>
                )
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
