"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const screens = [
  {
    name: "Dashboard",
    tagline: "Your daily production overview",
    description:
      "See in-progress tasks, failures, daily costs, and recent projects at a glance. Your starting point for prioritizing work each day.",
    icon: "📊",
    color: "#00d4ff",
    size: "large",
  },
  {
    name: "Project Home",
    tagline: "Per-project hub for all resources",
    description:
      "Manage characters, scripts, and scenes linked to a single project. Track progress and visualize asset relationships.",
    icon: "🏠",
    color: "#8b5cf6",
    size: "medium",
  },
  {
    name: "Character Studio",
    tagline: "Five-stage character workspace",
    description:
      "Batch generate, review the result grid, pick favorites, and advance through each pipeline stage.",
    icon: "👤",
    color: "#ec4899",
    size: "medium",
  },
  // {
  //   name: "Script Studio",
  //   tagline: "Write and transform scripts",
  //   description:
  //     "Version control, speech-style presets, and 8-second line splitting. Compare versions side by side.",
  //   icon: "📝",
  //   color: "#a855f7",
  //   size: "small",
  // },
  // {
  //   name: "Scene Builder",
  //   tagline: "Design scenes and shots",
  //   description:
  //     "Visually compose shot type, location, emotion, action, and dialogue lines with preset buttons.",
  //   icon: "🎬",
  //   color: "#f43f5e",
  //   size: "small",
  // },
  // {
  //   name: "Render Queue",
  //   tagline: "Monitor all generation jobs",
  //   description:
  //     "Real-time queue status, manage retries, cancel jobs, and see cost estimates.",
  //   icon: "⚙️",
  //   color: "#10b981",
  //   size: "small",
  // },
  {
    name: "Asset Library",
    tagline: "Search and reuse any asset",
    description:
      "Tag-based search, similarity search, and lineage viewer. Trace the full history of any asset.",
    icon: "🗂️",
    color: "#0ea5e9",
    size: "medium",
  },
  {
    name: "Export Center",
    tagline: "Package finished work",
    description:
      "Export CapCut-ready packages with organized file structures, SRT/CSV subtitles, and shot ordering.",
    icon: "📦",
    color: "#f59e0b",
    size: "medium",
  },
];

export default function StudioScreensSection() {
  return (
    <section id="studio" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Studio Screens(Beta - Will be Launched Soon!)"
          title="Purpose-Built Workspaces"
          subtitle="Dedicated screens optimized for each production stage. Every screen brings together the tools and information you need for that particular task."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {screens.map((screen, i) => {
            const spanClass =
              screen.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : screen.size === "medium"
                ? "md:col-span-2 lg:col-span-2"
                : "md:col-span-1";

            return (
              <ScrollReveal
                key={screen.name}
                delay={i * 0.06}
                className={spanClass}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass-card p-6 h-full flex flex-col justify-between group cursor-default relative overflow-hidden"
                >
                  {/* Background glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(ellipse at 30% 30%, ${screen.color}08, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-2xl">{screen.icon}</div>
                      <div
                        className="w-2 h-2 rounded-full opacity-60"
                        style={{ background: screen.color }}
                      />
                    </div>
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {screen.name}
                    </h3>
                    <p className="text-xs font-medium mb-2" style={{ color: screen.color }}>
                      {screen.tagline}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {screen.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
