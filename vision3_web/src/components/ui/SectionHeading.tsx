"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <ScrollReveal delay={0}>
          <div className={`mb-4 ${centered ? "flex justify-center" : ""}`}>
            <span className="tech-badge">
              <span className="glow-dot" style={{ width: 6, height: 6 }} />
              {badge}
            </span>
          </div>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className={`text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed ${
              centered ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
