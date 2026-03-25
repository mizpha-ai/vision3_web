// middleware.ts (프로젝트 루트, src/ 밖)

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // business.vision3.ai 서브도메인 감지
  if (hostname.startsWith("business.")) {
    // 이미 /business 경로면 그대로 통과
    if (pathname.startsWith("/business")) {
      return NextResponse.next();
    }

    // /business 하위가 아닌 경로를 /business 로 리라이트
    // 예: business.vision3.ai/ → /business
    // 예: business.vision3.ai/packages → /business/packages
    // 예: business.vision3.ai/contact → /business/contact
    const url = request.nextUrl.clone();
    url.pathname = `/business${pathname}`;
    return NextResponse.rewrite(url);
  }

  // 메인 도메인(vision3.ai)에서 /business 접근 시 서브도메인으로 리다이렉트
  if (pathname.startsWith("/business") && !hostname.startsWith("business.")) {
    const subPath = pathname.replace("/business", "") || "/";
    return NextResponse.redirect(`https://business.vision3.ai${subPath}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|asset/).*)"],
};