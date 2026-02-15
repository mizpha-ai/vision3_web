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
      <Header />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <OverviewSection />
        <div className="section-divider" />
        <WorkflowSection />
        <div className="section-divider" />
        <CharacterPipelineSection />
        <div className="section-divider" />
        <ScriptPipelineSection />
        <div className="section-divider" />
        <VideoPipelineSection />
        <div className="section-divider" />
        <StudioScreensSection />
        <div className="section-divider" />
        <QualitySection />
        <div className="section-divider" />
        <UseCasesSection />
        <div className="section-divider" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
