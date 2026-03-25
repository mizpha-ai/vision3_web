// vision3_web/src/components/ui/AnimatedCounter.tsx

"use client";

// 이 컴포넌트는 숫자가 0부터 target 값까지 부드럽게 올라가는 카운터 UI다.
// 보통 통계 수치, 점수, KPI, 게이지 내부 숫자 등에 붙이기 좋다.
// 현재 프로젝트에서는 QualitySection 안의 점수 표시와 연결되어 있다.

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
// useInView를 사용해서 화면에 들어왔을 때만 숫자 애니메이션을 시작한다.
// 즉, 페이지가 열리자마자 무조건 움직이는 게 아니라 실제로 보일 때 실행되는 구조다.

// 외부에서 받을 props 타입 정의
interface AnimatedCounterProps {
  // 최종 도달할 숫자
  target: number;
  // 숫자 뒤에 붙일 문자열 (예: %, +, /100 앞뒤 등)
  suffix?: string;
  // 숫자 앞에 붙일 문자열 (예: $, + 등)
  prefix?: string;
  // 애니메이션 지속 시간(초)
  duration?: number;
  // 추가 Tailwind 클래스
  className?: string;
}

export default function AnimatedCounter({
  target,
  // suffix가 전달되지 않으면 빈 문자열 사용
  suffix = "",
  // prefix도 기본값은 빈 문자열
  prefix = "",
  // 기본 애니메이션 시간은 2초
  duration = 2,
  // 커스텀 클래스가 없으면 빈 문자열
  className = "",
}: AnimatedCounterProps) {
  // 실제 화면에 렌더링되는 현재 숫자 상태
  const [count, setCount] = useState(0);
  // 이 값이 0부터 시작해서 target까지 점점 올라가게 된다.

  // 이 span이 화면에 들어왔는지 감지하기 위한 ref
  const ref = useRef<HTMLSpanElement>(null);

  // framer-motion의 useInView를 사용해서
  // 요소가 뷰포트 안에 들어오면 애니메이션을 시작하도록 한다.
  // once: true 이므로 한 번만 실행된다.
  // margin: "-50px" 은 살짝 미리 감지하는 느낌으로 여유 범위를 준 것이다.
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    // 아직 화면 안에 안 들어왔으면 애니메이션을 시작하지 않는다.
    if (!isInView) return;

    // requestAnimationFrame 타이밍 기준으로 시작 시간을 저장할 변수
    let startTime: number | null = null;

    // 현재 구조는 항상 0부터 올라가므로 시작값은 0
    const startVal = 0;

    // 매 프레임마다 호출될 내부 함수
    function step(timestamp: number) {
      // 첫 프레임에서는 시작 시간을 현재 timestamp로 기록
      if (!startTime) startTime = timestamp;

      // 진행률 계산
      // (현재시간 - 시작시간) / 전체 duration(ms)
      // Math.min(..., 1)로 최대 1까지만 허용해서 끝에서 멈추게 한다.
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // easeOutCubic 비슷한 감쇠 이징
      // 초반엔 빠르게 올라가고 끝으로 갈수록 부드럽게 감속된다.
      const eased = 1 - Math.pow(1 - progress, 3);

      // 현재 프레임에서 보여줄 값을 계산해서 정수로 반내림 처리
      setCount(Math.floor(startVal + (target - startVal) * eased));

      // 아직 끝나지 않았으면 다음 프레임 예약
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    // 첫 애니메이션 프레임 시작
    requestAnimationFrame(step);
  }, [isInView, target, duration]);
  // isInView가 true가 되는 순간부터 카운트가 시작된다.
  // target이나 duration이 달라지면 같은 로직으로 다시 계산할 수 있게 의존성에 넣어둔 상태다.

  return (
    <motion.span
      // useInView 감지를 위한 ref 연결
      ref={ref}
      // 외부에서 받은 스타일 클래스 적용
      className={className}
      // 처음 렌더링 때는 약간 아래에 있고 투명하게 시작
      initial={{ opacity: 0, y: 10 }}
      // 화면에 들어오면 위로 올라오면서 보이게 한다.
      // 아직 안 보이는 상태면 빈 객체를 주어 애니메이션 없음
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      // 등장 애니메이션 시간
      transition={{ duration: 0.5 }}
    >
      {/* 앞쪽 접두어 */}
      {prefix}
      {/* 실제 카운트 값 */}
      {count}
      {/* 뒤쪽 접미어 */}
      {suffix}
    </motion.span>
  );
}
// 숫자 자체도 그냥 바뀌는 게 아니라
// span 전체가 살짝 올라오면서 나타나기 때문에 시각적으로 더 자연스럽게 보인다.
// 이 컴포넌트는 특히 QualitySection 안의 점수 표시처럼
// "숫자를 강조해서 보여줘야 하는 곳"에 잘 어울리는 공통 UI다.