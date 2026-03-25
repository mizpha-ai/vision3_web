// vision3_web/src/app/layout.tsx

// 이 파일은 app router의 루트 레이아웃이다.
// 모든 페이지를 감싸는 최상위 공통 구조를 정의하며,
// 메타데이터, 전역 CSS, 폰트 링크, html/body 속성 등을 여기서 설정한다.

import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
// LanguageProvider는 앱 전체에 현재 언어 상태와 번역 기능을 공급하는 provider다.
// Header, HeroSection, OverviewSection처럼 여러 컴포넌트가 useLanguage를 쓰기 때문에
// 루트 레이아웃에서 한 번 감싸주는 구조가 필요하다.

// Next.js에서 SEO 및 문서 head 기본값으로 활용되는 metadata
export const metadata: Metadata = {
  // 브라우저 탭 제목
  title: "AI Production Studio",

  // 검색엔진/공유 미리보기용 설명
  description:
    "AI-powered end-to-end production platform. Character creation, scriptwriting, and video generation — unified into one seamless workflow.",

  // 키워드 목록
  keywords: [
    "AI",
    "production",
    "video generation",
    "character creation",
    "scriptwriting",
    "AI studio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  // 이 children 안으로 각 페이지가 삽입된다.
  children: React.ReactNode;
}>) {
  return (
    // 문서 루트. lang="en"은 현재 사이트 기본 언어 설정이다.
    // className="dark"를 넣어서 다크 테마 기준 스타일을 고정한 구조다.
    <html lang="en" className="dark">
      <head>
        {/* Google Fonts 연결 최적화를 위한 preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        {/* 폰트 static 리소스 서버에도 preconnect */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* 본문용 Plus Jakarta Sans + 제목용 Syne 폰트 로드 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased noise-overlay">
        <LanguageProvider>{children}</LanguageProvider>
        {/* LanguageProvider로 한 번 감싸고 있다.
            즉, 앱 전체 어디서든 useLanguage 훅을 통해 현재 언어와 번역 함수에 접근할 수 있게 된 구조다.
            다국어를 쓰는 Header, HeroSection, OverviewSection 같은 컴포넌트들이
            전부 이 provider에 의존하고 있다고 보면 된다. */}
      </body>
    </html>
  );
}