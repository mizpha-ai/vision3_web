// vision3_web/src/app/business/layout.tsx

// 이 파일은 /business 아래 모든 페이지에 공통으로 적용되는 레이아웃이다.
// 즉, /business, /business/packages, /business/contact 같은 페이지들이
// 모두 이 레이아웃을 공유한다.
// 일반 사이트의 Header/Footer 대신 business 전용 Header/Footer를 붙이는 역할이다.

import BusinessHeader from "@/components/business/BusinessHeader";
import BusinessFooter from "@/components/business/BusinessFooter";
// business 전용 공통 상단/하단 컴포넌트다.

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BusinessHeader />
      {/* business 전용 상단 헤더 */}

      {children}
      {/* 실제 각 business 페이지 내용이 들어오는 자리 */}

      <BusinessFooter />
      {/* business 전용 하단 푸터 */}
    </>
  );
}
// 정리하면 이 레이아웃은 business 영역 전체의 공통 껍데기다.
// 그래서 개별 business 페이지는 자기 본문만 신경 쓰고,
// 상하단 공통 구조는 여기서 일괄 관리하게 된다.