// vision3_web/src/lib/i18n.tsx
"use client";

// 이 파일은 프로젝트 전체 다국어 시스템의 중심 파일이다.
// 현재 언어 상태를 저장하고,
// 번역 함수 t(key)를 제공하고,
// 모든 컴포넌트가 useLanguage()로 언어/번역에 접근할 수 있게 만든다.
// app/layout.tsx에서 LanguageProvider로 전체 앱을 감싸는 구조와 직접 연결된다.
// 또 business 전용 번역은 i18n-b2b.ts에서 가져와 여기서 함께 lookup 한다.

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import b2bTranslations from "./i18n-b2b";
// b2bTranslations는 business 전용 번역 사전이다.
// 일반 사이트 번역 translations와 함께 fallback 순서 안에서 같이 사용된다.

export type Language = "en" | "ko" | "ja";
// 현재 지원하는 언어 타입이다.
// 언어 상태나 setLang 인자에 아무 문자열이나 못 넣게 제한한다.

interface LanguageContextType {
  lang: Language;
  // 현재 선택된 언어 값

  setLang: (lang: Language) => void;
  // 언어를 변경하는 함수

  t: (key: string) => string;
  // 번역 키를 넣으면 현재 언어에 맞는 문자열을 돌려주는 함수
}

const LanguageContext = createContext<LanguageContextType | null>(null);
// 전역 언어 상태를 전달하기 위한 Context다.
// 초기값은 null이고,
// 실제 값은 LanguageProvider 안에서 공급된다.

// ──────────────────────────────────────────────
//  Translation dictionaries
// ──────────────────────────────────────────────
const translations: Record<Language, Record<string, string>> = {
  // 이 객체는 일반 사이트용 기본 번역 사전이다.
  // en / ko / ja 세 언어를 동일한 키 구조로 맞춰서 관리한다.
  // 예를 들어 hero.title1, overview.badge, contact.form.name 같은 키들이 들어간다.

  // ═══════════════════════════════════════════
  //  ENGLISH
  // ═══════════════════════════════════════════
  en: {
    // 영어 번역 묶음이다.
    // 헤더, 히어로, 개요, 파이프라인, experience, contact, footer 등
    // 일반 사이트 전체 문구가 여기 들어간다.

    // ── Meta ──
    "meta.title": "AI Production Studio | From Character to Video",
    "meta.description": "AI-powered end-to-end production platform. Character creation, scriptwriting, and video generation — unified into one seamless workflow.",
    // 문서 메타 제목/설명 키다.
    // layout이나 metadata 구성 시 이 값을 참조할 수 있다.

    // ── Nav ──
    "nav.home": "Home",
    "nav.technology": "Technology",
    "nav.studio": "Studio",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.b2b": "B2B Solutions",
    "nav.tryDemo": "Try Demo",
    // Header.tsx, Footer.tsx 같은 공통 네비게이션에서 쓰는 키다.

    // ── Hero ──
    "hero.badge": "Product Guide v1.0 — February 2026",
    "hero.title1": "AI Production",
    "hero.title2": "Studio",
    "hero.subtitle": "From character creation to video production — an AI-powered end-to-end production platform. One workspace. Infinite possibilities.",
    "hero.cta1": "Experience the Demo",
    "hero.cta2": "Explore Technology",
    "hero.stat1": "Character Stages",
    "hero.stat2": "Script Phases",
    "hero.stat3": "Shot Types",
    "hero.stat4": "Clip Segments",
    // HeroSection에서 쓰는 문구들이다.
    // title1/title2를 분리해 둔 이유는 두 번째 줄만 강조 스타일을 줄 수 있게 하기 위해서다.

    // 아래 overview, workflow, char, script, video, screens, qa, uc, cta, exp, contact, footer 등
    // 나머지 키들도 모두 같은 원리다.
    // 각 섹션 파일에서 t("섹션.키이름")으로 불러와 화면에 표시한다.

    // ── Overview ──
    "overview.badge": "Platform Overview",
    "overview.title": "Three Production Pillars",
    "overview.subtitle": "Everything that used to require jumping between multiple tools is now unified into one seamless workflow. Character design, scriptwriting, and video generation — all in one workspace.",
    "overview.principle": "Core Principle",
    "overview.principleQuote": '"Batch Generate → Human Selects → Auto-Advance"',
    "overview.principleDesc": "At every stage, AI produces multiple candidates and a human makes the final pick. Quality decisions stay with people; repetitive work is handled by AI.",

    // …중간 번역 키들은 실제로 매우 많다.
    // CharacterPipelineSection, ScriptPipelineSection, VideoPipelineSection,
    // StudioScreensSection, QualitySection, UseCasesSection,
    // ExperienceFlow, ContactPage, ContactForm, Footer 등과 전부 연결된다.

    // ── Footer ──
    "footer.desc": "From character creation to video production, an AI-powered end-to-end production platform. Batch generate, human selects, auto-advance.",
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.company": "Company",
    "footer.docs": "Documentation",
    "footer.api": "API Reference",
    "footer.changelog": "Changelog",
    "footer.about": "About",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.rights": "All rights reserved.",
  },

  // ═══════════════════════════════════════════
  //  KOREAN
  // ═══════════════════════════════════════════
  ko: {
    // 한국어 번역 묶음이다.
    // 영어와 완전히 같은 키 구조를 유지하고,
    // 값만 한국어로 바뀐다.
    // 이 구조가 같아야 같은 t("키") 호출이 언어만 바뀌어도 정상적으로 동작한다.

    "meta.title": "AI 프로덕션 스튜디오 | 캐릭터에서 영상까지",
    "meta.description": "AI 기반 올인원 제작 플랫폼. 캐릭터 생성, 스크립트 작성, 영상 생성을 하나의 워크플로우로 통합합니다.",

    "nav.home": "홈",
    "nav.technology": "기술",
    "nav.studio": "스튜디오",
    "nav.experience": "체험",
    "nav.contact": "문의",
    "nav.b2b": "B2B 솔루션",
    "nav.tryDemo": "데모 체험",

    "hero.badge": "제품 가이드 v1.0 — 2026년 2월",
    "hero.title1": "AI 프로덕션",
    "hero.title2": "스튜디오",
    "hero.subtitle": "캐릭터 생성부터 영상 제작까지 — AI 기반 엔드투엔드 제작 플랫폼. 하나의 워크스페이스, 무한한 가능성.",
    "hero.cta1": "데모 체험하기",
    "hero.cta2": "기술 살펴보기",

    // 나머지 키들도 영어와 동일한 구조를 그대로 유지하면서
    // 값만 한국어로 채워 넣는 방식이다.
  },

  // ═══════════════════════════════════════════
  //  JAPANESE
  // ═══════════════════════════════════════════
  ja: {
    // 일본어 번역 묶음이다.
    // 역시 동일한 키 구조를 유지하고 값만 일본어로 바뀐다.

    // 실제 파일에는 hero, overview, workflow, contact, footer 등
    // 전체 일반 사이트 번역 키가 일본어로 들어 있다.
  },
};

// ──────────────────────────────────────────────
//  Provider
// ──────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  // 현재 언어 상태다.
  // 기본값은 en으로 시작한다.
  // Header나 BusinessHeader에서 setLang을 호출하면 이 값이 바뀐다.

  const t = useCallback(
    (key: string): string => {
      return (
        translations[lang][key] ??
        b2bTranslations[lang]?.[key] ??
        translations.en[key] ??
        b2bTranslations.en?.[key] ??
        key
      );
    },
    [lang]
  );
  // 이 프로젝트의 핵심 번역 함수다.
  // lookup 순서는 다음과 같다.
  // 1) 현재 언어의 일반 사이트 번역
  // 2) 현재 언어의 business 번역
  // 3) 영어 일반 사이트 번역 fallback
  // 4) 영어 business 번역 fallback
  // 5) 마지막엔 key 자체를 그대로 반환
  // 즉, 번역이 빠진 키가 있어도 화면이 완전히 깨지지 않게 방어하는 구조다.

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
  // 이 Provider 아래에 있는 모든 컴포넌트는
  // useLanguage()로 lang, setLang, t에 접근할 수 있다.
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  // Context에서 현재 언어 상태를 꺼낸다.

  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  // Provider 밖에서 훅을 쓰면 에러를 던져서 잘못된 사용을 바로 알 수 있게 한다.

  return ctx;
}
// 정리하면 i18n.tsx는
// "언어 상태 저장 + 번역 사전 lookup + 전역 공급 + 훅 제공"까지 전부 담당하는
// 프로젝트 전체 다국어 시스템의 중심 파일이다.