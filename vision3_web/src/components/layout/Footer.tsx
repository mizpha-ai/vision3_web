"use client";

import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Character Studio", href: "/#technology" },
    { label: "Script Studio", href: "/#technology" },
    { label: "Video Production", href: "/#technology" },
    { label: "Quality Assurance", href: "/#quality" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Use Cases", href: "/#usecases" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border-subtle)]">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] opacity-80" />
                <div className="absolute inset-[2px] rounded-[6px] bg-[var(--color-bg-primary)] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="url(#flogo)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path d="M2 17L12 22L22 17" stroke="url(#flogo)" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="url(#flogo)" strokeWidth="2" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="flogo" x1="2" y1="2" x2="22" y2="22">
                        <stop stopColor="#00d4ff" />
                        <stop offset="1" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <span className="text-base font-bold" style={{ fontFamily: "var(--font-display)" }}>
                AI Production <span className="neon-text">Studio</span>
              </span>
            </div>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-sm mb-6">
              From character creation to video production, an AI-powered end-to-end production platform. 
              Batch generate, human selects, auto-advance.
            </p>
            <div className="flex gap-4">
              {/* Social icons */}
              {["X", "GH", "DC"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-muted)] text-xs font-bold hover:border-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)] transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-sm font-semibold text-white mb-4 tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} AI Production Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
