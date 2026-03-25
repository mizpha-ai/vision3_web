// vision3_web/src/components/contact/ContactForm.tsx
"use client";

// 이 파일은 /contact 페이지 오른쪽에 들어가는 실제 문의 폼이다.
// contact/page.tsx는 페이지 레이아웃만 담당하고,
// 입력값 관리, 제출 상태, 성공 화면 전환은 이 컴포넌트가 맡는다.
// 이전 버전과 비교하면, 지금은 문구를 직접 적지 않고
// 번역 함수 t(...)를 통해 가져오는 구조로 바뀌었다.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
// useLanguage는 폼의 라벨, placeholder, 버튼 문구, 성공 메시지를
// 현재 언어에 맞게 가져오기 위해 추가된 훅이다.

export default function ContactForm() {
  const { t } = useLanguage();
  // 번역 함수 t를 꺼낸다.
  // 이 폼의 텍스트는 대부분 t("contact.form...") 키를 통해 출력된다.

  const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  // 폼 입력값 전체를 하나의 객체 상태로 관리한다.
  // name 속성을 기준으로 공통 핸들러에서 값을 업데이트하는 구조다.

  const [submitted, setSubmitted] = useState(false);
  // 제출 완료 상태
  // true가 되면 입력 폼 대신 성공 화면이 보인다.

  const [sending, setSending] = useState(false);
  // 전송 중 로딩 상태
  // true일 때는 버튼이 비활성화되고 스피너가 보인다.

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // input / textarea / select를 모두 하나의 핸들러로 처리한다.
  // 각 요소의 name 속성을 키로 사용해서 해당 값만 업데이트하는 방식이다.

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 기본 폼 submit 새로고침 방지

    setSending(true);
    // 전송 중 상태 on

    await new Promise((r) => setTimeout(r, 1500));
    // 실제 API 호출 대신 데모용 대기
    // 이전 버전은 1400ms였는데 최신 코드는 1500ms로 바뀌었다.

    setSending(false);
    setSubmitted(true);
    // 전송 완료 후 로딩 종료 + 성공 화면 전환
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* 폼 전체 최대 폭을 제한해서 너무 넓게 퍼지지 않게 한다. */}

      <AnimatePresence mode="wait">
        {/* submitted 상태에 따라 폼과 성공 화면을 애니메이션으로 교체한다. */}

        {submitted ? (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="gradient-border">
            {/* 성공 화면 카드다.
                이전 버전은 y축 이동 중심이었는데,
                지금은 scale을 이용해서 살짝 커지며 나타나는 방식으로 바뀌었다. */}

            <div className="p-12 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }} className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-emerald)] flex items-center justify-center mx-auto mb-6">
                {/* 성공 체크 아이콘이 들어가는 원형 박스다.
                    scale 애니메이션으로 튀어나오듯 등장한다. */}

                <motion.svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <motion.path d="M8 18L15 25L28 11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.4 }} />
                </motion.svg>
                {/* 체크 마크를 pathLength 애니메이션으로 그려지는 느낌으로 보여준다.
                    최신 코드에서는 pathLength 애니메이션이 path 쪽에만 들어가 있다. */}
              </motion.div>

              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{t("contact.form.successTitle")}</h3>
              {/* 성공 제목도 이제 번역 키 기반으로 바뀌었다. */}

              <p className="text-[var(--color-text-secondary)] mb-8">{t("contact.form.successDesc")}</p>
              {/* 성공 설명 문구 역시 번역 키 기반으로 바뀌었다. */}

              <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", subject: "", message: "" }); }} className="text-sm text-[var(--color-accent-cyan)] hover:underline underline-offset-4">{t("contact.form.another")}</button>
              {/* 성공 후 다시 폼을 초기 상태로 돌리는 버튼이다.
                  submitted를 false로 돌리고 formData도 전부 빈 값으로 초기화한다.
                  버튼 문구도 번역 키를 사용한다. */}
            </div>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} onSubmit={handleSubmit} className="glass-card p-8 md:p-10">
            {/* 실제 문의 폼 본체다.
                glass-card는 globals.css의 공통 카드 스타일과 연결된다. */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {/* 첫 번째 줄: 이름 / 이메일 */}

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">{t("contact.form.name")} *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={t("contact.form.namePh")} className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all text-sm" />
              </div>
              {/* Full Name 입력
                  이전에는 영어 라벨과 placeholder를 직접 적었지만,
                  지금은 번역 키에서 가져온다. */}

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">{t("contact.form.email")} *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder={t("contact.form.emailPh")} className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all text-sm" />
              </div>
              {/* Email 입력 */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {/* 두 번째 줄: 회사 / 문의 주제 */}

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">{t("contact.form.company")}</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder={t("contact.form.companyPh")} className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all text-sm" />
              </div>
              {/* Company 입력
                  필수값은 아니기 때문에 required가 없다. */}

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
              {/* Subject 선택 드롭다운
                  옵션 문구도 전부 번역 키 기반으로 바뀌었다. */}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">{t("contact.form.message")} *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder={t("contact.form.messagePh")} className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all text-sm resize-none" />
            </div>
            {/* Message 입력
                rows={5}로 기본 높이를 주고,
                resize-none으로 사용자가 크기를 임의로 바꾸지 못하게 한다. */}

            <button type="submit" disabled={sending} className="glow-button w-full py-4 text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                  {t("contact.form.sending")}
                </>
              ) : (
                <>
                  {t("contact.form.send")}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 8H14M14 8L9 3M14 8L9 13" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
            {/* Submit 버튼
                sending이 true면 스피너와 전송 중 문구를 보여주고,
                false면 기본 제출 버튼 문구와 화살표 아이콘을 보여준다.
                이 버튼 문구도 전부 번역 키 기반으로 바뀌었다. */}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
// 정리하면 ContactForm의 전체 구조는 이전과 같지만,
// 라벨 / placeholder / 버튼 / 성공 메시지가 전부 번역 키 기반으로 바뀌었고,
// 성공 애니메이션과 대기 시간도 일부 조정된 상태다.