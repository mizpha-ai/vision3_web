// vision3_web/src/components/ui/ParticleField.tsx

"use client";

// 이 컴포넌트는 캔버스(canvas)를 이용해서
// 배경에 떠다니는 파티클과 파티클 간 연결선을 그려주는 역할을 한다.
// 현재 프로젝트에서는 HeroSection에서 배경 장식 효과로 사용되고 있다.
// 즉, HeroSection이 이 컴포넌트를 불러와서 시네마틱한 테크 분위기를 만드는 구조다.

import { useEffect, useRef } from "react";

// 파티클 한 개가 가져야 하는 속성 타입
interface Particle {
  x: number;
  // 현재 x 좌표

  y: number;
  // 현재 y 좌표

  vx: number;
  // x축 이동 속도

  vy: number;
  // y축 이동 속도

  size: number;
  // 파티클 크기

  opacity: number;
  // 투명도

  color: string;
  // 색상
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 실제 canvas DOM을 잡기 위한 ref다.
  // 아래 return에서 ref={canvasRef}로 연결된다.

  const animationRef = useRef<number>(0);
  // requestAnimationFrame id를 저장해두었다가
  // 언마운트 시 cancelAnimationFrame 하기 위한 ref다.

  useEffect(() => {
    const canvas = canvasRef.current;
    // 현재 canvas DOM 가져오기

    if (!canvas) return;
    // canvas가 없으면 아무 작업도 하지 않고 종료

    const ctx = canvas.getContext("2d");
    // 2D 렌더링 컨텍스트를 가져온다.
    // 실제 원 그리기, 선 그리기, alpha 조절 같은 작업은 전부 ctx로 처리한다.

    if (!ctx) return;
    // 컨텍스트가 없으면 그릴 수 없으므로 종료

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    // 최초 마운트 시 화면 크기에 맞게 canvas 크기를 설정한다.
    // width, height를 let으로 둔 이유는 resize 때 다시 바꿔야 하기 때문이다.

    const colors = ["#00d4ff", "#8b5cf6", "#ec4899", "#0ea5e9"];
    // 사용할 파티클 색상 팔레트다.
    // 전반적으로 프로젝트 브랜드 컬러와 맞는 cyan / purple / pink / blue 계열을 쓰고 있다.

    const particleCount = Math.min(80, Math.floor((width * height) / 15000));
    // 화면이 클수록 파티클 개수를 늘리고,
    // 너무 많아지지 않도록 80개로 상한을 둔 계산식이다.
    // 즉, 큰 화면에서는 더 풍부하게 보이고, 작은 화면에서는 과하지 않게 줄어든다.

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    // 초기 파티클 배열 생성
    // 각 파티클은 화면 전체에 랜덤 위치로 배치되고,
    // 속도, 크기, 투명도, 색상도 랜덤하게 부여된다.
    // 이렇게 해야 배경이 너무 규칙적으로 보이지 않고 자연스럽게 보인다.

    const connectionDistance = 150;
    // 두 파티클 사이 거리가 이 값보다 가까우면 연결선을 그린다.

    function animate() {
      if (!ctx) return;
      // 안전 장치
      // 실제로는 위에서 이미 ctx를 확인했지만, 애니메이션 루프 안에서도 한 번 더 확인한다.

      ctx.clearRect(0, 0, width, height);
      // 이전 프레임 전체를 지운다.
      // 이걸 안 하면 이전 위치 그림이 남아서 잔상처럼 쌓이게 된다.

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        // 현재 위치에 속도를 더해서 파티클을 이동시킨다.

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        // 화면 밖으로 나가면 반대편으로 이어지듯 들어오게 처리한다.
        // 그래서 파티클이 경계에 막히지 않고 계속 흘러다니는 느낌을 준다.

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // 원형 파티클을 그리기 시작한다.

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        // 각 파티클마다 지정된 색상과 투명도를 적용한다.

        ctx.fill();
        // 실제 원을 그린다.
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          // 두 파티클 사이 거리 계산
          // 전체 파티클 쌍을 비교해서 가까운 것끼리만 선을 그릴 준비를 한다.

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // 두 파티클 좌표를 잇는 선을 그린다.

            ctx.strokeStyle = particles[i].color;
            // 선 색상은 첫 번째 파티클 색상을 기준으로 사용한다.

            ctx.globalAlpha = (1 - dist / connectionDistance) * 0.08;
            // 거리가 가까울수록 선이 더 잘 보이도록 투명도를 조절한다.
            // 즉, 완전히 가까운 점은 조금 더 선명하고,
            // 멀수록 거의 안 보이게 된다.

            ctx.lineWidth = 0.5;
            // 얇은 선 두께로 배경 장식 느낌을 유지한다.

            ctx.stroke();
            // 실제 연결선을 그린다.
          }
        }
      }

      ctx.globalAlpha = 1;
      // 이후 다른 캔버스 작업에 영향 안 가도록 alpha를 원복한다.

      animationRef.current = requestAnimationFrame(animate);
      // 다음 프레임을 예약해서 애니메이션을 계속 이어간다.
      // 이 id는 cleanup 시 cancelAnimationFrame에 사용된다.
    }

    animate();
    // 애니메이션 시작

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    // 브라우저 크기 변경 시 canvas 크기를 다시 맞춘다.
    // 반응형 화면에서 배경이 잘리지 않게 하기 위한 처리다.

    window.addEventListener("resize", handleResize);
    // 리사이즈 이벤트 등록

    return () => {
      cancelAnimationFrame(animationRef.current);
      // 컴포넌트가 사라질 때 애니메이션 중단

      window.removeEventListener("resize", handleResize);
      // 등록했던 resize 이벤트도 같이 해제
    };
  }, []);
  // 마운트 시 한 번 실행되고,
  // 언마운트 시 cleanup 되는 구조다.

  return (
    <canvas
      ref={canvasRef}
      // 실제 canvas DOM 연결

      className="absolute inset-0 w-full h-full"
      // 부모를 가득 덮는 절대 배치
      // 보통 HeroSection 같은 곳에서 배경 레이어처럼 깔리게 된다.

      style={{ pointerEvents: "none" }}
      // 클릭 막지 않도록 포인터 이벤트 제거
      // 즉, 이 canvas가 버튼이나 링크 클릭을 가로막지 않게 만든다.
    />
  );
}
// 정리하면 이 컴포넌트는 화면에 직접 보이는 콘텐츠가 아니라
// HeroSection 뒤에서 분위기를 만들어 주는 배경 연출용 컴포넌트다.
// 그래서 pointerEvents를 막고, absolute 배치로 깔고, 캔버스로 부드러운 움직임을 만드는 구조다.