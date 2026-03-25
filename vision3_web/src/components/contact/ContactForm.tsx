"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="gradient-border">
            <div className="p-12 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }} className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-emerald)] flex items-center justify-center mx-auto mb-6">
                <motion.svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <motion.path d="M8 18L15 25L28 11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.4 }} />
                </motion.svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{t("contact.form.successTitle")}</h3>
              <p className="text-[var(--color-text-secondary)] mb-8">{t("contact.form.successDesc")}</p>
              <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", subject: "", message: "" }); }} className="text-sm text-[var(--color-accent-cyan)] hover:underline underline-offset-4">{t("contact.form.another")}</button>
            </div>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} onSubmit={handleSubmit} className="glass-card p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">{t("contact.form.name")} *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={t("contact.form.namePh")} className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">{t("contact.form.email")} *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder={t("contact.form.emailPh")} className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all text-sm" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">{t("contact.form.company")}</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder={t("contact.form.companyPh")} className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">{t("contact.form.subject")} *</label>
                <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-white focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all text-sm appearance-none">
                  <option value="" className="bg-[var(--color-bg-primary)]">{t("contact.form.subjectPh")}</option>
                  <option value="general" className="bg-[var(--color-bg-primary)]">{t("contact.form.subjectGeneral")}</option>
                  <option value="partnership" className="bg-[var(--color-bg-primary)]">{t("contact.form.subjectPartner")}</option>
                  <option value="demo" className="bg-[var(--color-bg-primary)]">{t("contact.form.subjectDemo")}</option>
                  <option value="technical" className="bg-[var(--color-bg-primary)]">{t("contact.form.subjectTech")}</option>
                  <option value="other" className="bg-[var(--color-bg-primary)]">{t("contact.form.subjectOther")}</option>
                </select>
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">{t("contact.form.message")} *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder={t("contact.form.messagePh")} className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all text-sm resize-none" />
            </div>
            <button type="submit" disabled={sending} className="glow-button w-full py-4 text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? (<><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />{t("contact.form.sending")}</>) : (<>{t("contact.form.send")}<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 8H14M14 8L9 3M14 8L9 13" strokeLinecap="round" strokeLinejoin="round" /></svg></>)}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
