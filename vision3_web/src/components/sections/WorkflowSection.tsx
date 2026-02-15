"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Batch Generate",
    description:
      "Multiple candidates are generated simultaneously. Face images default to 20 at a time; video clips default to 6. Bulk generation is the norm — not single-item creation.",
    detail: "Configurable batch size: 5 / 10 / 20",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
    ),
    color: "#00d4ff",
  },
  {
    num: "02",
    title: "Human-in-the-Loop Gate",
    description:
      "Results at every stage must be reviewed and approved by a person. The system never advances to the next pipeline stage without explicit human sign-off.",
    detail: "Quick actions: Pick / Reject / Send to Next Step",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    color: "#8b5cf6",
  },
  {
    num: "03",
    title: "Auto Rank + Auto Retry",
    description:
      "Every generated asset receives an automatic quality score from 0 to 100. Results are sorted highest-first to minimize selection time.",
    detail: "Detection flags: bad hands/legs, face drift, unintended audio",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    ),
    color: "#ec4899",
  },
];

const stateMachine = [
  { label: "Draft", status: "DRAFT" },
  { label: "Running", status: "RUNNING" },
  { label: "Needs Review", status: "NEEDS REVIEW" },
  { label: "Approved", status: "APPROVED" },
  { label: "Next Stage", status: "NEXT" },
];

export default function WorkflowSection() {
  return (
    <section id="technology" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-cyan)] opacity-[0.02] blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Core Workflow"
          title="How Every Stage Works"
          subtitle="Every production stage follows the same three-step pattern. This consistent loop means you work the same way everywhere in the platform."
        />

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.15}>
              <div className="relative glass-card p-8 h-full group">
                {/* Step number */}
                <div
                  className="text-6xl font-extrabold opacity-[0.06] absolute top-4 right-6"
                  style={{ fontFamily: "var(--font-display)", color: step.color }}
                >
                  {step.num}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border"
                  style={{
                    borderColor: `${step.color}30`,
                    background: `${step.color}10`,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <p
                  className="text-xs font-mono px-3 py-1.5 rounded-lg inline-block"
                  style={{
                    background: `${step.color}10`,
                    color: step.color,
                    border: `1px solid ${step.color}25`,
                  }}
                >
                  {step.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* State Machine visualization */}
        <ScrollReveal>
          <div className="gradient-border max-w-5xl mx-auto">
            <div className="p-8 md:p-10">
              <h3
                className="text-lg font-bold mb-8 text-center"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Workflow State Machine
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {stateMachine.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-3 md:gap-4">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <div className="px-4 py-2 rounded-lg border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] text-sm font-semibold text-white whitespace-nowrap">
                        {s.label}
                      </div>
                      <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">
                        {s.status}
                      </span>
                    </motion.div>
                    {i < stateMachine.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.15, duration: 0.3 }}
                        className="hidden sm:block"
                      >
                        <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                          <path
                            d="M0 6H28M28 6L22 1M28 6L22 11"
                            stroke="var(--color-accent-cyan)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.5"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
