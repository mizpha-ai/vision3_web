"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/i18n";

export default function StudioScreensSection() {
  const { t } = useLanguage();
  const screens = [
    { name: t("screens.dashboard.name"), tag: t("screens.dashboard.tag"), desc: t("screens.dashboard.desc"), icon: "📊", color: "#00d4ff", size: "large" },
    { name: t("screens.project.name"), tag: t("screens.project.tag"), desc: t("screens.project.desc"), icon: "🏠", color: "#8b5cf6", size: "medium" },
    { name: t("screens.character.name"), tag: t("screens.character.tag"), desc: t("screens.character.desc"), icon: "👤", color: "#ec4899", size: "medium" },
    { name: t("screens.script.name"), tag: t("screens.script.tag"), desc: t("screens.script.desc"), icon: "📝", color: "#a855f7", size: "small" },
    { name: t("screens.scene.name"), tag: t("screens.scene.tag"), desc: t("screens.scene.desc"), icon: "🎬", color: "#f43f5e", size: "small" },
    { name: t("screens.render.name"), tag: t("screens.render.tag"), desc: t("screens.render.desc"), icon: "⚙️", color: "#10b981", size: "small" },
    { name: t("screens.asset.name"), tag: t("screens.asset.tag"), desc: t("screens.asset.desc"), icon: "🗂️", color: "#0ea5e9", size: "medium" },
    { name: t("screens.export.name"), tag: t("screens.export.tag"), desc: t("screens.export.desc"), icon: "📦", color: "#f59e0b", size: "medium" },
  ];

  return (
    <section id="studio" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading badge={t("screens.badge")} title={t("screens.title")} subtitle={t("screens.subtitle")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {screens.map((screen, i) => {
            const spanClass = screen.size === "large" ? "md:col-span-2 md:row-span-2" : screen.size === "medium" ? "md:col-span-2 lg:col-span-2" : "md:col-span-1";
            return (
              <ScrollReveal key={i} delay={i * 0.06} className={spanClass}>
                <motion.div whileHover={{ scale: 1.01 }} className="glass-card p-6 h-full flex flex-col justify-between group cursor-default relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(ellipse at 30% 30%, ${screen.color}08, transparent 70%)` }} />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-2xl">{screen.icon}</div>
                      <div className="w-2 h-2 rounded-full opacity-60" style={{ background: screen.color }} />
                    </div>
                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>{screen.name}</h3>
                    <p className="text-xs font-medium mb-2" style={{ color: screen.color }}>{screen.tag}</p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{screen.desc}</p>
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
