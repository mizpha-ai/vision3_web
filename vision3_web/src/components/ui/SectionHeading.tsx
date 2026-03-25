// vision3_web/src/components/ui/SectionHeading.tsx

"use client";

// 이 컴포넌트는 각 섹션 상단에 공통으로 들어가는
// 배지 + 제목 + 설명 문단 구조를 통일하기 위한 공통 헤더 컴포넌트다.
// HeroSection처럼 완전히 다른 헤더가 아닌,
// 본문 섹션의 타이틀 영역에 재사용된다.
// 실제로 OverviewSection, WorkflowSection, QualitySection 같은 여러 섹션이
// 이 컴포넌트를 공통으로 import 해서 같은 톤의 제목 구조를 사용한다.

import ScrollReveal from "./ScrollReveal";
// 제목 영역도 스크롤에 맞춰 자연스럽게 나타나게 하기 위해
// ScrollReveal 공통 컴포넌트를 바로 연결해서 사용한다.

// props 타입 정의
interface SectionHeadingProps {
  // 작은 상단 배지 텍스트
  badge?: string;
  // 메인 타이틀
  title: string;
  // 설명 문단
  subtitle?: string;
  // 가운데 정렬 여부
  centered?: boolean;
}
// badge, title, subtitle를 분리해 둬서
// 어떤 섹션은 배지만 쓰고, 어떤 섹션은 설명 문단까지 같이 쓰는 식으로 유연하게 재사용할 수 있다.

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {/* 전체 제목 블록 래퍼다.
          mb-16으로 아래 본문과 충분한 간격을 만들고,
          centered가 true면 제목/문단을 가운데 정렬한다. */}

      {/* badge가 있을 때만 배지 렌더링 */}
      {badge && (
        <ScrollReveal delay={0}>
          <div className={`mb-4 ${centered ? "flex justify-center" : ""}`}>
            <span className="tech-badge">
              {/* 배지 왼쪽 작은 점 장식 */}
              <span className="glow-dot" style={{ width: 6, height: 6 }} />
              {badge}
            </span>
          </div>
        </ScrollReveal>
      )}
      {/* badge는 선택값이라서 없는 섹션이면 아예 렌더링하지 않는다.
          tech-badge와 glow-dot 스타일은 globals.css의 공통 스타일과 연결된다.
          즉, 이 컴포넌트는 구조만 담당하고 실제 배지 룩앤필은 전역 스타일을 재사용한다. */}

      {/* 메인 제목 */}
      <ScrollReveal delay={0.1}>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5"
          // 프로젝트 전체 디스플레이 폰트 변수 사용
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
      </ScrollReveal>
      {/* 제목은 badge보다 약간 늦게 나타나게 delay를 0.1로 주었다.
          화면이 커질수록 글자 크기도 커지게 반응형 텍스트 클래스를 사용하고,
          제목용 전역 폰트를 써서 본문보다 더 강조되게 만든다. */}

      {/* subtitle이 있을 때만 설명 문단 표시 */}
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
      {/* subtitle도 선택값이기 때문에 없는 경우에는 아예 출력하지 않는다.
          centered가 true면 mx-auto를 줘서 문단 폭을 가운데에 정렬하고,
          false면 왼쪽 정렬 레이아웃에도 그대로 쓸 수 있게 만든 구조다.
          즉, 이 컴포넌트는 "가운데 정렬 섹션 전용"이 아니라
          좌측 정렬 섹션까지 고려해서 만든 공통 제목 컴포넌트다. */}
    </div>
  );
}