// vision3_web/src/components/ui/ScrollReveal.tsx

"use client";

// 이 컴포넌트는 스크롤로 화면에 들어왔을 때
// 요소가 방향성을 가지고 자연스럽게 나타나는 공통 애니메이션 래퍼다.
// 여러 섹션에서 반복되는 등장 애니메이션을 통일하기 위해 분리한 것이다.
// 실제로 OverviewSection, WorkflowSection, CTASection 같은 곳에서 공통으로 감싸서 사용된다.

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
// motion은 실제 등장 애니메이션을 적용하는 데 쓰이고,
// Variants는 hidden / visible 상태를 타입까지 포함해서 구조적으로 정의할 때 사용한다.
// ReactNode는 내부에 어떤 JSX든 children으로 받아서 감쌀 수 있게 하기 위한 타입이다.

// props 타입 정의
interface ScrollRevealProps {
  // 내부에 렌더링할 실제 콘텐츠
  children: ReactNode;
  // 바깥 wrapper에 줄 클래스
  className?: string;
  // 등장 지연 시간
  delay?: number;
  // 어느 방향에서 들어올지
  direction?: "up" | "down" | "left" | "right" | "none";
  // 애니메이션 총 시간
  duration?: number;
  // 한 번만 재생할지 여부
  once?: boolean;
}
// 이 컴포넌트는 단순히 "보이게만" 하는 게 아니라
// 방향, 속도, 지연 시간까지 외부에서 조절할 수 있게 설계되어 있다.
// 그래서 섹션마다 같은 컴포넌트를 써도 조금씩 다른 등장 연출을 만들 수 있다.

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  // direction 값에 따라 hidden 상태에서 어느 쪽으로 오프셋을 줄지 정의
  const offsets: Record<string, { x: number; y: number }> = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };
  // 예를 들어 direction이 "up"이면 처음에는 아래쪽(y: 40)에 있다가 위로 올라오며 나타난다.
  // "left"면 오른쪽(x: 40)에서 시작해서 제자리로 오는 구조다.
  // 즉, direction 이름은 "어디에서 들어오는 느낌인지" 기준으로 보면 이해가 쉽다.

  // framer-motion variants 정의
  const variants: Variants = {
    // 처음에는 안 보이고, 방향에 맞게 살짝 밀려난 상태
    hidden: {
      opacity: 0,
      x: offsets[direction].x,
      y: offsets[direction].y,
    },
    // 화면에 들어오면 제자리로 오면서 투명도 1
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        // 부드럽고 고급스럽게 느껴지는 커스텀 easing
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  // hidden / visible 상태를 한 객체로 묶어 두면
  // motion.div에서 initial, whileInView로 간단하게 연결할 수 있다.
  // 여기서 duration, delay도 props에서 받아오기 때문에
  // 사용하는 쪽에서 등장 타이밍을 세밀하게 조절할 수 있다.

  return (
    <motion.div
      // 시작 상태
      initial="hidden"
      // 뷰포트 안에 들어오면 visible 실행
      whileInView="visible"
      // once가 true면 한 번만 실행
      // margin은 살짝 미리 감지하는 용도
      viewport={{ once, margin: "-50px" }}
      // 위에서 정의한 variants 연결
      variants={variants}
      // 사용자 정의 클래스 적용
      className={className}
    >
      {children}
    </motion.div>
  );
}
// 정리하면 이 컴포넌트는 "내용을 보여주는 컴포넌트"가 아니라
// 이미 있는 콘텐츠를 스크롤 진입 시 자연스럽게 등장하게 감싸는 공통 래퍼다.
// 그래서 본문 섹션에서는 애니메이션 코드를 매번 직접 쓰지 않고,
// 필요한 블록만 ScrollReveal로 감싸서 같은 톤의 등장 효과를 재사용하는 구조다.