// vision3_web/src/components/ui/GlowCard.tsx

"use client";

// 이 컴포넌트는 카드 뒤에 은은한 글로우 효과를 깔아주는 공통 UI 래퍼다.
// 직접 내용물을 그리는 컴포넌트가 아니라,
// children을 감싸서 카드처럼 보이게 만드는 재사용형 컴포넌트다.
// 실제로 OverviewSection, ScriptPipelineSection 같은 곳에서
// 카드 분위기를 조금 더 강조할 때 사용하는 공통 부품이다.

import { motion } from "framer-motion";
import { ReactNode } from "react";
// motion은 hover 시 카드가 살짝 떠오르는 애니메이션을 줄 때 사용한다.
// ReactNode는 children 안에 어떤 JSX든 받아서 감쌀 수 있게 하기 위한 타입이다.

// GlowCard가 받을 props 타입
interface GlowCardProps {
  // 카드 내부에 들어갈 실제 내용
  children: ReactNode;
  // 바깥 래퍼에 추가할 클래스
  className?: string;
  // 뒤쪽 글로우 색상
  glowColor?: string;
  // hover 시 살짝 떠오르는 애니메이션을 켤지 여부
  hoverable?: boolean;
}

export default function GlowCard({
  children,
  // 기본 클래스는 빈 문자열
  className = "",
  // 기본 글로우 색상은 청록빛 반투명
  glowColor = "rgba(0, 212, 255, 0.15)",
  // hover 애니메이션은 기본적으로 활성화
  hoverable = true,
}: GlowCardProps) {
  return (
    <motion.div
      // relative를 주어서 내부 absolute 글로우 레이어 기준점으로 사용
      // group은 내부 hover 연동용 Tailwind 클래스
      className={`relative group ${className}`}
      // hoverable이 true일 때만 위로 4px 떠오르는 효과 적용
      // false이면 빈 객체라서 hover 애니메이션이 꺼진다.
      whileHover={hoverable ? { y: -4, transition: { duration: 0.3 } } : {}}
    >
      {/* Glow effect behind card */}
      <div
        // 카드 바깥쪽 1px 정도 더 크게 깔리는 글로우 레이어
        // opacity-0 상태에서 group-hover 시 보이도록 구성
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        // glowColor를 인라인 스타일로 주입해서 재사용성을 높였다.
        // 즉, 사용하는 쪽에서 색상만 바꿔도 같은 구조로 다른 분위기의 카드가 가능하다.
        style={{ background: glowColor }}
      />

      {/* Card */}
      <div className="relative glass-card p-6 h-full">
        {/* 실제 카드 본체다.
            glass-card는 globals.css에 정의된 공통 카드 스타일과 연결된다.
            그래서 이 컴포넌트는 카드 구조를 새로 만드는 게 아니라,
            기존 공통 카드 스타일 위에 glow 효과를 한 겹 더 얹는 역할이라고 보면 된다. */}

        {/* 실제 콘텐츠는 children으로 삽입 */}
        {children}
      </div>
    </motion.div>
  );
}
// 정리하면 이 컴포넌트는 "카드 내용"을 만드는 컴포넌트가 아니라
// 이미 있는 내용을 더 돋보이게 감싸주는 래퍼 컴포넌트다.
// 그래서 재사용성이 높고, glowColor나 hoverable 값만 바꿔서 여러 섹션에서 같은 패턴으로 활용할 수 있다.