"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const detectionFlags = [
  { flag: "Bad Hands", description: "Detects abnormal hand generation: wrong finger count, unnatural joints", type: "Image", color: "#f43f5e" },
  { flag: "Bad Legs", description: "Detects leg proportion or joint placement anomalies", type: "Image", color: "#f59e0b" },
  { flag: "Face Drift", description: "Flags when the generated face diverges from the original reference", type: "Image / Video", color: "#8b5cf6" },
  { flag: "Audio Music Detected", description: "Identifies unintended background music in generated video clips", type: "Video", color: "#ec4899" },
];

const retryPolicies = [
  { title: "On Generation Failure", description: "Automatically retries up to the configured limit on network or API errors." },
  { title: "On Low Quality Score", description: "Generates new candidates to replace results below your quality threshold." },
  { title: "Manual Retry", description: "Select individual tasks in the Render Queue and trigger re-generation anytime." },
];

function QualityGauge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          {/* Background arc */}
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="8"
            strokeDasharray={`${Math.PI * 104}`}
            strokeDashoffset={`${Math.PI * 104 * 0.25}`}
            strokeLinecap="round"
          />
          {/* Score arc */}
          <motion.circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="url(#gauge-grad)"
            strokeWidth="8"
            strokeDasharray={`${Math.PI * 104}`}
            strokeLinecap="round"
            initial={{ strokeDashoffset: Math.PI * 104 }}
            animate={isInView ? { strokeDashoffset: Math.PI * 104 * 0.28 } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
          <defs>
            <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatedCounter
            target={92}
            className="text-4xl font-bold neon-text"
            duration={1.5}
          />
          <span className="text-xs text-[var(--color-text-muted)] mt-1">/100</span>
        </div>
      </div>
      <p className="text-sm text-[var(--color-text-secondary)] mt-3">
        Quality Score Example
      </p>
    </div>
  );
}

export default function QualitySection() {
  return (
    <section id="quality" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-emerald)] opacity-[0.02] blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Quality Assurance"
          title="Built-In Quality Management"
          subtitle="The AI pre-analyzes quality to speed up the selection process. While the final call always rests with a human reviewer, automated scoring guides your decisions."
        />

        {/* Quality Score + Detection Flags */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Quality Gauge */}
          <ScrollReveal direction="left">
            <div className="gradient-border">
              <div className="p-8 flex flex-col items-center">
                <h3
                  className="text-lg font-bold mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Automatic Quality Scoring
                </h3>
                <QualityGauge />
                <p className="text-sm text-[var(--color-text-muted)] text-center mt-6 max-w-sm">
                  Every generated asset receives a quality score from 0 to 100. The result grid sorts
                  highest-first to minimize selection time.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Detection Flags */}
          <ScrollReveal direction="right">
            <div className="space-y-4">
              <h3
                className="text-lg font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Automated Detection Flags
              </h3>
              {detectionFlags.map((flag, i) => (
                <motion.div
                  key={flag.flag}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-4 flex items-start gap-4"
                >
                  <div
                    className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ background: flag.color }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold">{flag.flag}</h4>
                      <span className="text-[10px] font-mono text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] px-2 py-0.5 rounded">
                        {flag.type}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-muted)]">{flag.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Retry Policies */}
        <ScrollReveal>
          <div className="gradient-border max-w-4xl mx-auto">
            <div className="p-8">
              <h3
                className="text-lg font-bold mb-6 text-center"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Retry Policies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {retryPolicies.map((rp, i) => (
                  <motion.div
                    key={rp.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent-cyan)]/20 to-[var(--color-accent-purple)]/20 flex items-center justify-center mx-auto mb-3 text-sm font-bold neon-text">
                      {i + 1}
                    </div>
                    <h4 className="text-sm font-bold mb-1">{rp.title}</h4>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{rp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Asset Lineage note */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
              <span className="text-lg">🔗</span>
              <p className="text-sm text-[var(--color-text-secondary)]">
                <strong className="text-white">Asset Lineage Tracking:</strong> Every asset records its full creation history — prompt, seed value, AI model, and parent assets.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
