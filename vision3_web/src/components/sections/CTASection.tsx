"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.06),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(139,92,246,0.06),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="gradient-border max-w-4xl mx-auto">
            <div className="p-12 md:p-16 text-center relative overflow-hidden">
              {/* Decorative orbs */}
              <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-[var(--color-accent-cyan)] opacity-[0.04] blur-[60px]" />
              <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-[var(--color-accent-purple)] opacity-[0.04] blur-[60px]" />

              <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-semibold text-[var(--color-accent-cyan)] uppercase tracking-widest mb-4">
                  Ready to Create?
                </p>
                <h2
                  className="text-3xl md:text-5xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Experience AI-Powered
                  <br />
                  <span className="neon-text">Production in Action</span>
                </h2>
                <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-10 text-lg">
                  See how characters, outfits, and backgrounds come together to create
                  stunning AI-generated video content. Try the interactive demo now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/experience" className="glow-button text-base px-10 py-4">
                    Launch Experience
                  </Link>
                  <Link
                    href="/contact"
                    className="px-10 py-4 rounded-xl border border-[var(--color-border-medium)] bg-transparent text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all duration-300 text-base font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Get in Touch
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
