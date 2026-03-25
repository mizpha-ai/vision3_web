// vision3_web/src/app/business/contact/page.tsx
"use client";

// 이 파일은 /business/contact 페이지다.
// 일반 contact 페이지와 달리,
// B2B 문의 전용 필드(관심 패키지, 예산, 일정 등)를 받는 business 전용 문의 페이지다.
// business 영역의 실제 리드 수집 페이지 역할을 한다.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import ScrollReveal from "@/components/ui/ScrollReveal";
// ScrollReveal은 상단 헤더 영역이 자연스럽게 나타나도록 감싸는 데 사용한다.

const packageOptions = [
  "b2b.pkg.game1.title",
  "b2b.pkg.game2.title",
  "b2b.pkg.beauty1.title",
  "b2b.pkg.edu1.title",
  "b2b.pkg.fashion1.title",
  "b2b.pkg.ent1.title",
  "b2b.pkg.finance1.title",
  "b2b.pkg.hr1.title",
  "b2b.pkg.health1.title",
];
// 문의 폼의 관심 패키지 select 옵션에 사용할 번역 키 목록이다.
// 실제 화면에는 t(pk)로 변환된 제목이 보인다.

export default function BusinessContactPage() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    packageInterest: "",
    budget: "",
    timeline: "",
    details: "",
  });
  // business 문의 폼 입력값 전체를 하나의 객체 상태로 관리한다.
  // 일반 contact 폼보다 더 많은 B2B 필드를 가진다.

  const [submitted, setSubmitted] = useState(false);
  // 제출 완료 상태

  const [sending, setSending] = useState(false);
  // 전송 중 로딩 상태

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // input / textarea / select를 모두 하나의 핸들러로 처리한다.
  // name 속성을 키로 사용해서 해당 값만 갱신하는 방식이다.

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 기본 submit 새로고침 방지

    setSending(true);
    // 로딩 시작

    await new Promise((r) => setTimeout(r, 1800));
    // 실제 API 호출 대신 데모용 대기

    setSending(false);
    setSubmitted(true);
    // 전송 완료 후 성공 화면으로 전환
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all text-sm";
  // input / select / textarea에 공통으로 쓰는 스타일 클래스다.

  const labelClass = "block text-sm font-medium text-[var(--color-text-secondary)] mb-2";
  // label 공통 스타일 클래스다.

  return (
    <main className="pt-28 pb-20 min-h-screen">
      {/* business 헤더가 fixed이므로 본문을 아래로 밀어주는 여백 */}

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(0,212,255,0.04),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-15" />
      </div>
      {/* business 문의 페이지 전용 배경 레이어 */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="tech-badge mb-4 inline-flex">
              <span className="glow-dot" style={{ width: 6, height: 6 }} />
              {t("b2b.inquiry.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5" style={{ fontFamily: "var(--font-display)" }}>
              {t("b2b.inquiry.title")}
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {t("b2b.inquiry.subtitle")}
            </p>
          </div>
        </ScrollReveal>
        {/* 페이지 상단 헤더 영역이다. */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Left: Info */}
          <ScrollReveal direction="left">
            <div className="space-y-5">
              {[
                { icon: "⚡", title: "Fast Response", desc: "1 business day turnaround" },
                { icon: "🎯", title: "Custom Proposal", desc: "Tailored to your project" },
                { icon: "🔒", title: "NDA Ready", desc: "Confidential discussions" },
                { icon: "🌏", title: "Global Service", desc: "EN / KR / JP supported" },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-xl">{item.icon}</div>
                    <div>
                      <h3 className="text-sm font-bold mb-0.5">{item.title}</h3>
                      <p className="text-xs text-[var(--color-text-muted)]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* 왼쪽 trust signal 카드들이다.
                  빠른 응답, 맞춤 제안, NDA 대응, 글로벌 서비스 같은 신뢰 요소를 강조한다. */}

              <div className="glass-card p-5 mt-6">
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
                  Direct Contact
                </p>
                <p className="text-sm text-[#00d4ff] font-medium">business@vision3.ai</p>
              </div>
              {/* 직접 문의용 이메일 카드 */}
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="gradient-border"
                >
                  <div className="p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0ea5e9] flex items-center justify-center mx-auto mb-6"
                    >
                      <motion.svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <motion.path
                          d="M8 18L15 25L28 11"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        />
                      </motion.svg>
                    </motion.div>
                    {/* 제출 완료 성공 화면 아이콘 */}

                    <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                      {t("b2b.inquiry.form.successTitle")}
                    </h3>

                    <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
                      {t("b2b.inquiry.form.successDesc")}
                    </p>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          company: "",
                          name: "",
                          email: "",
                          phone: "",
                          packageInterest: "",
                          budget: "",
                          timeline: "",
                          details: "",
                        });
                      }}
                      className="text-sm text-[#00d4ff] hover:underline underline-offset-4"
                    >
                      {t("b2b.inquiry.form.another")}
                    </button>
                    {/* 다시 문의하기 버튼
                        submitted와 formData를 초기화해서 폼으로 돌아간다. */}
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="glass-card p-8 md:p-10"
                >
                  {/* Row 1: Company + Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass}>{t("b2b.inquiry.form.company")} *</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder={t("b2b.inquiry.form.companyPh")} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t("b2b.inquiry.form.name")} *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={t("b2b.inquiry.form.namePh")} className={inputClass} />
                    </div>
                  </div>

                  {/* Row 2: Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass}>{t("b2b.inquiry.form.email")} *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder={t("b2b.inquiry.form.emailPh")} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t("b2b.inquiry.form.phone")}</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t("b2b.inquiry.form.phonePh")} className={inputClass} />
                    </div>
                  </div>

                  {/* Row 3: Package */}
                  <div className="mb-5">
                    <label className={labelClass}>{t("b2b.inquiry.form.package")} *</label>
                    <select name="packageInterest" value={formData.packageInterest} onChange={handleChange} required className={`${inputClass} appearance-none`}>
                      <option value="" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.packagePh")}</option>
                      {packageOptions.map((pk) => (
                        <option key={pk} value={pk} className="bg-[var(--color-bg-primary)]">
                          {t(pk)}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* 관심 패키지 선택
                      option 값 자체는 번역 키 문자열을 저장하고,
                      화면에는 t(pk)로 변환한 제목을 보여준다. */}

                  {/* Row 4: Budget + Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass}>{t("b2b.inquiry.form.budget")}</label>
                      <select name="budget" value={formData.budget} onChange={handleChange} className={`${inputClass} appearance-none`}>
                        <option value="" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.budgetPh")}</option>
                        <option value="1" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.budget1")}</option>
                        <option value="2" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.budget2")}</option>
                        <option value="3" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.budget3")}</option>
                        <option value="4" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.budget4")}</option>
                        <option value="open" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.budgetOpen")}</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>{t("b2b.inquiry.form.timeline")}</label>
                      <select name="timeline" value={formData.timeline} onChange={handleChange} className={`${inputClass} appearance-none`}>
                        <option value="" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.timelinePh")}</option>
                        <option value="2w" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.timeline1")}</option>
                        <option value="1m" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.timeline2")}</option>
                        <option value="3m" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.timeline3")}</option>
                        <option value="flex" className="bg-[var(--color-bg-primary)]">{t("b2b.inquiry.form.timeline4")}</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Details */}
                  <div className="mb-8">
                    <label className={labelClass}>{t("b2b.inquiry.form.details")} *</label>
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={t("b2b.inquiry.form.detailsPh")}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  {/* 상세 문의 내용 입력란 */}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white text-base font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        {t("b2b.inquiry.form.sending")}
                      </>
                    ) : (
                      <>
                        {t("b2b.inquiry.form.send")}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M2 8H14M14 8L9 3M14 8L9 13" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
// 정리하면 BusinessContactPage는 일반 contact보다 더 구체적인 B2B 상담용 필드를 받는 폼 페이지이고,
// 패키지 관심사, 예산, 일정 같은 실제 제안서/상담에 필요한 정보를 수집하도록 설계되어 있다.