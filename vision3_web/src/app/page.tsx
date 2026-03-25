// vision3_web/src/app/page.tsx

// 이 파일은 Next.js app router 기준 메인 홈 페이지다.
// 실제 홈 화면은 이 파일 안에서 직접 UI를 전부 작성하지 않고,
// 여러 섹션 컴포넌트를 순서대로 조립해서 완성하는 구조다.
// 즉, 페이지 조립용 엔트리 파일 역할에 가깝다.

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import CharacterPipelineSection from "@/components/sections/CharacterPipelineSection";
import ScriptPipelineSection from "@/components/sections/ScriptPipelineSection";
import VideoPipelineSection from "@/components/sections/VideoPipelineSection";
import StudioScreensSection from "@/components/sections/StudioScreensSection";
import QualitySection from "@/components/sections/QualitySection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 공통 상단 헤더 */}
      <Header />

      {/* 페이지 본문 */}
      <main>
        {/* 첫 화면 히어로 섹션 */}
        <HeroSection />

        {/* 섹션 사이 구분선 */}
        <div className="section-divider" />

        {/* 플랫폼 전체 개요 */}
        <OverviewSection />

        <div className="section-divider" />

        {/* 핵심 워크플로우 설명 */}
        <WorkflowSection />

        <div className="section-divider" />

        {/* 캐릭터 생성 파이프라인 */}
        <CharacterPipelineSection />

        <div className="section-divider" />

        {/* 스크립트 생성/변환 파이프라인 */}
        <ScriptPipelineSection />

        <div className="section-divider" />

        {/* 비디오 생성 파이프라인 */}
        <VideoPipelineSection />

        <div className="section-divider" />

        {/* 스튜디오 주요 화면 소개 */}
        <StudioScreensSection />

        <div className="section-divider" />

        {/* 품질 관리 시스템 설명 */}
        <QualitySection />

        <div className="section-divider" />

        {/* 활용 사례 섹션 */}
        <UseCasesSection />

        <div className="section-divider" />

        {/* 마지막 CTA 섹션 */}
        <CTASection />
      </main>

      {/* 공통 하단 푸터 */}
      <Footer />
    </>
  );
}