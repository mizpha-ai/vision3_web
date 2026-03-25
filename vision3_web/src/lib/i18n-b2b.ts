// vision3_web/src/lib/i18n-b2b.ts

// 이 파일은 business 전용 다국어 번역 사전이다.
// 즉, /business 아래에서 쓰는 문구들을 언어별로 모아둔 파일이다.
// 일반 사이트 번역은 i18n.tsx 안의 translations 객체가 담당하고,
// 이 파일은 그중에서도 b2b.* 키들만 따로 분리해서 관리하는 구조다.
// 실제로는 i18n.tsx가 이 파일을 import 해서
// 메인 번역 사전과 함께 합쳐서 사용한다.

import { Language } from "./i18n";
// Language 타입(en | ko | ja)을 i18n.tsx에서 가져온다.
// 이 파일은 그 타입을 기준으로 언어별 번역 객체 구조를 맞춘다.

const b2bTranslations: Record<Language, Record<string, string>> = {
  // Record<Language, Record<string, string>> 구조이므로
  // en / ko / ja 각각이 하나의 큰 문자열 사전 역할을 한다.
  // 안쪽 키는 "b2b.nav.intro" 같은 번역 키이고,
  // 값은 실제 화면에 보여줄 문자열이다.

  en: {
    // 영어 번역 묶음
    // business 페이지들에서 현재 언어가 en일 때 이 값들이 사용된다.

    // Nav
    "b2b.nav.name": "Vision3 Business",
    "b2b.nav.intro": "About",
    "b2b.nav.packages": "Packages",
    "b2b.nav.inquiry": "Inquiry",
    "b2b.nav.backMain": "Vision3 Home",
    // business 헤더/푸터 메뉴에서 쓰는 네비게이션 문구들이다.

    // Hero
    "b2b.hero.badge": "B2B Solutions",
    "b2b.hero.title1": "AI-Native Content",
    "b2b.hero.title2": "Production Platform",
    "b2b.hero.subtitle": "From concept to final delivery — we produce high-impact video content at unprecedented speed with our AI production pipeline. Trusted by enterprise clients across industries.",
    "b2b.hero.cta1": "View Packages",
    "b2b.hero.cta2": "Contact Us",
    // /business 메인 hero 섹션에서 쓰는 문구들이다.
    // title1, title2를 나눈 이유는 페이지에서 두 번째 줄만 강조 스타일을 줄 수 있게 하기 위해서다.

    "b2b.partners.title": "Working with over 110 brands worldwide",
    // 파트너 로고 마키 위에 들어가는 신뢰 문구다.

    // Stats
    "b2b.stat1.val": "70%",
    "b2b.stat1.label": "Faster Delivery",
    "b2b.stat2.val": "60%",
    "b2b.stat2.label": "Cost Reduction",
    "b2b.stat3.val": "24h",
    "b2b.stat3.label": "First Draft",
    "b2b.stat4.val": "120+",
    "b2b.stat4.label": "Projects Delivered",
    // hero 오른쪽 통계 카드에서 쓰는 숫자/라벨 세트다.
    // val과 label을 따로 둬서 카드 UI에서 숫자와 설명을 분리 출력한다.

    // About section
    "b2b.about.badge": "Why Vision3",
    "b2b.about.title": "Enterprise-Grade AI Production",
    "b2b.about.subtitle": "We combine human creative direction with AI-native production pipelines to deliver content that meets the highest standards of quality, speed, and brand consistency.",
    "b2b.about.f1.title": "AI-Powered Pipeline",
    "b2b.about.f1.desc": "Our proprietary batch-generate-and-select workflow produces dozens of candidates per scene, ensuring quality through volume and intelligent ranking.",
    "b2b.about.f2.title": "Human Creative Direction",
    "b2b.about.f2.desc": "Every project is guided by experienced creative directors. AI handles repetitive production; humans make all quality and creative decisions.",
    "b2b.about.f3.title": "Brand Consistency",
    "b2b.about.f3.desc": "Character consistency profiles, style guides, and brand asset management ensure every output aligns perfectly with your brand identity.",
    "b2b.about.f4.title": "Rapid Iteration",
    "b2b.about.f4.desc": "Template-based production structures allow fast revision cycles. Go from concept to final delivery in days, not weeks.",
    "b2b.about.f5.title": "Multilingual Ready",
    "b2b.about.f5.desc": "Built-in translation pipeline and localized subtitle generation. Produce content for global markets from a single production run.",
    "b2b.about.f6.title": "Compliance-Aware",
    "b2b.about.f6.desc": "Structured review workflows designed for regulated industries. Built-in checkpoints for legal, medical, and financial compliance review.",
    // /business 메인 페이지의 About 섹션 카드 6개에 대응되는 키들이다.
    // f1~f6처럼 번호를 붙여 둔 이유는 페이지 코드에서 반복문으로 불러오기 쉽게 하기 위해서다.

    // Process
    "b2b.process.badge": "Our Process",
    "b2b.process.title": "From Brief to Delivery",
    "b2b.process.s1": "Consultation",
    "b2b.process.s1.desc": "We understand your brand, objectives, and target audience through a structured briefing process.",
    "b2b.process.s2": "Creative Planning",
    "b2b.process.s2.desc": "Our team designs the script, character profiles, and visual direction tailored to your package.",
    "b2b.process.s3": "AI Production",
    "b2b.process.s3.desc": "Content is generated through our AI pipeline with human quality gates at every stage.",
    "b2b.process.s4": "Review & Delivery",
    "b2b.process.s4.desc": "You review, we revise. Final assets are delivered in all required formats and resolutions.",
    // business 진행 과정 4단계 설명에 쓰는 키들이다.
    // s1~s4 구조라서 페이지 코드에서 배열처럼 순회하며 사용할 수 있다.

    // Industries
    "b2b.industries.badge": "Industries We Serve",
    "b2b.industries.title": "Tailored Solutions by Industry",
    "b2b.industries.subtitle": "Each industry has unique content needs. Our packages are designed with industry-specific considerations from the ground up.",
    // 산업군 소개 섹션 제목/설명이다.

    // Packages page
    "b2b.pkg.badge": "Package Lineup",
    "b2b.pkg.title": "Production Packages",
    "b2b.pkg.subtitle": "Choose the package that fits your business needs. Each package is designed for specific industry requirements and can be customized.",
    "b2b.pkg.videos": "Sample Videos",
    "b2b.pkg.comingSoon": "Videos Coming Soon",
    "b2b.pkg.details": "Key Deliverables",
    "b2b.pkg.inquire": "Inquire About This Package",
    // /business/packages 페이지 전반에서 쓰는 공통 문구다.

    // Game packages
    "b2b.pkg.game.title": "Gaming",
    "b2b.pkg.game.icon": "🎮",
    "b2b.pkg.game1.title": "Game IP Launch Teaser Package",
    "b2b.pkg.game1.desc": "The Game IP Launch Teaser Package provides essential teaser assets needed for new title reveals, pre-registration campaigns, and launch-window marketing. Combining Vision3's AI-native production pipeline with professional creative direction, it delivers both worldbuilding impact and execution speed.",
    "b2b.pkg.game2.title": "Game LiveOps / Update Package",
    "b2b.pkg.game2.desc": "The LiveOps Update Pack provides a monthly supply of update, event, and operational announcement video assets. Its template-based repeat production structure reduces content production burden and delivery risk for operations teams.",
    // 게임 산업군에 속한 패키지 문구들이다.
    // game.title은 탭/카테고리 제목,
    // game1, game2는 실제 패키지 카드 내용이다.

    // Beauty
    "b2b.pkg.beauty.title": "Beauty",
    "b2b.pkg.beauty.icon": "💄",
    "b2b.pkg.beauty1.title": "Beauty New Product Launch Shortform Package",
    "b2b.pkg.beauty1.desc": "The Beauty Launch Shortform Pack rapidly assembles essential shortform assets needed during the initial phase of a new product launch. It balances brand mood and product USP to reduce preparation time for SNS and ad campaigns.",
    // 뷰티 산업군 패키지 문구

    // Edu
    "b2b.pkg.edu.title": "Education",
    "b2b.pkg.edu.icon": "📚",
    "b2b.pkg.edu1.title": "E-Learning & Education Content Package",
    "b2b.pkg.edu1.desc": "The E-learning & Education Content Pack separates promotional and actual learning content by purpose. It can be configured in stages from promotional assets for student acquisition to micro-learning video modules. Type A (promotional) and Type B (learning) are recommended to be operated separately.",
    // 교육 산업군 패키지 문구

    // Fashion
    "b2b.pkg.fashion.title": "Fashion",
    "b2b.pkg.fashion.icon": "👗",
    "b2b.pkg.fashion1.title": "Fashion Seasonal Lookbook Film Package",
    "b2b.pkg.fashion1.desc": "The Fashion Seasonal Lookbook Film Pack delivers lookbook video packages that convey the mood, silhouette, texture, and brand story of seasonal collections. It can include derivative assets usable across lookbooks, campaigns, and social media.",
    // 패션 산업군 패키지 문구

    // Entertainment
    "b2b.pkg.ent.title": "Entertainment",
    "b2b.pkg.ent.icon": "🎬",
    "b2b.pkg.ent1.title": "Web Drama / Film Package",
    "b2b.pkg.ent1.desc": "The Entertainment Pack provides teaser, trailer, and promotional video assets for web dramas and films in a package format. It combines main trailer assets with derivative promotional assets aligned to release schedules for maximum initial exposure.",
    // 엔터테인먼트 산업군 패키지 문구

    // Finance
    "b2b.pkg.finance.title": "Finance / Insurance / Legal",
    "b2b.pkg.finance.icon": "🏦",
    "b2b.pkg.finance1.title": "Finance / Insurance Content Package",
    "b2b.pkg.finance1.desc": "The Finance / Insurance Content Pack is designed for branding, product information, and customer communication purposes in the financial, insurance, and legal sectors. Its structured workflow considers expression accuracy and regulatory review to reduce practical revision burden.",
    // 금융/보험/법무 산업군 패키지 문구

    // HR
    "b2b.pkg.hr.title": "HR Training",
    "b2b.pkg.hr.icon": "👥",
    "b2b.pkg.hr1.title": "HR Training Video Package",
    "b2b.pkg.hr1.desc": "The HR Training Video Pack is an internal training video package designed for the repetitive production needs of HR and training teams. It enables fast and consistent production by templatizing onboarding, mandatory training, job-specific training, and leadership training.",
    // HR/교육 산업군 패키지 문구

    // Healthcare
    "b2b.pkg.health.title": "Healthcare",
    "b2b.pkg.health.icon": "🏥",
    "b2b.pkg.health1.title": "Healthcare Content Package",
    "b2b.pkg.health1.desc": "The Healthcare Content Pack is a video package designed for introduction, guidance, and explanation purposes of healthcare services, institutions, and solutions. Designed with accuracy and reliability as priorities, it provides a stable production process even in environments requiring medical and professional review.",
    // 헬스케어 산업군 패키지 문구

    // Contact/Inquiry page
    "b2b.inquiry.badge": "Work With Us",
    "b2b.inquiry.title": "Project Inquiry",
    "b2b.inquiry.subtitle": "Tell us about your project and we'll prepare a tailored proposal. Our team typically responds within one business day.",
    "b2b.inquiry.form.company": "Company Name",
    "b2b.inquiry.form.companyPh": "Company Inc.",
    "b2b.inquiry.form.name": "Contact Person",
    "b2b.inquiry.form.namePh": "John Doe",
    "b2b.inquiry.form.email": "Business Email",
    "b2b.inquiry.form.emailPh": "john@company.com",
    "b2b.inquiry.form.phone": "Phone Number",
    "b2b.inquiry.form.phonePh": "+1 (555) 000-0000",
    "b2b.inquiry.form.package": "Package of Interest",
    "b2b.inquiry.form.packagePh": "Select a package",
    "b2b.inquiry.form.budget": "Budget Range",
    "b2b.inquiry.form.budgetPh": "Select budget range",
    "b2b.inquiry.form.budget1": "Under $5,000",
    "b2b.inquiry.form.budget2": "$5,000 – $15,000",
    "b2b.inquiry.form.budget3": "$15,000 – $50,000",
    "b2b.inquiry.form.budget4": "$50,000+",
    "b2b.inquiry.form.budgetOpen": "Open to Discussion",
    "b2b.inquiry.form.timeline": "Desired Timeline",
    "b2b.inquiry.form.timelinePh": "Select timeline",
    "b2b.inquiry.form.timeline1": "Within 2 Weeks",
    "b2b.inquiry.form.timeline2": "Within 1 Month",
    "b2b.inquiry.form.timeline3": "Within 3 Months",
    "b2b.inquiry.form.timeline4": "Flexible",
    "b2b.inquiry.form.details": "Project Details",
    "b2b.inquiry.form.detailsPh": "Describe your project goals, target audience, and any specific requirements...",
    "b2b.inquiry.form.send": "Submit Inquiry",
    "b2b.inquiry.form.sending": "Submitting...",
    "b2b.inquiry.form.successTitle": "Inquiry Submitted Successfully",
    "b2b.inquiry.form.successDesc": "Thank you for your interest. Our business team will review your inquiry and respond within one business day.",
    "b2b.inquiry.form.another": "Submit another inquiry",
    // business 문의 폼에서 쓰는 전체 문구 묶음이다.
    // 라벨, placeholder, 성공 메시지까지 전부 여기서 관리한다.

    // Footer CTA
    "b2b.cta.title": "Ready to Transform Your Content Production?",
    "b2b.cta.desc": "Let's discuss how Vision3's AI production platform can accelerate your content strategy.",
    // business 메인 마지막 CTA 섹션 문구다.
  },

  ko: {
    // 한국어 번역 묶음
    // 위 영어 키와 1:1로 대응되며,
    // 현재 언어가 ko일 때 이 값들이 사용된다.

    "b2b.nav.name": "Vision3 Business",
    "b2b.nav.intro": "사업소개",
    "b2b.nav.packages": "패키지 소개",
    "b2b.nav.inquiry": "작업문의",
    "b2b.nav.backMain": "Vision3 홈",

    "b2b.hero.badge": "B2B 솔루션",
    "b2b.hero.title1": "AI 네이티브 콘텐츠",
    "b2b.hero.title2": "제작 플랫폼",
    "b2b.hero.subtitle": "기획부터 최종 납품까지 — AI 제작 파이프라인으로 전례 없는 속도로 고효율 영상 콘텐츠를 제작합니다. 다양한 산업의 기업 고객이 신뢰하는 플랫폼.",
    "b2b.hero.cta1": "패키지 보기",
    "b2b.hero.cta2": "문의하기",

    "b2b.partners.title": "전 세계 110개 이상의 브랜드와 함께합니다",

    "b2b.stat1.val": "70%",
    "b2b.stat1.label": "납기 단축",
    "b2b.stat2.val": "60%",
    "b2b.stat2.label": "비용 절감",
    "b2b.stat3.val": "24h",
    "b2b.stat3.label": "초안 납품",
    "b2b.stat4.val": "120+",
    "b2b.stat4.label": "프로젝트 수행",

    "b2b.about.badge": "Why Vision3",
    "b2b.about.title": "엔터프라이즈급 AI 프로덕션",
    "b2b.about.subtitle": "숙련된 크리에이티브 디렉션과 AI 네이티브 제작 파이프라인을 결합하여 품질, 속도, 브랜드 일관성의 최고 기준을 충족하는 콘텐츠를 납품합니다.",
    "b2b.about.f1.title": "AI 기반 파이프라인",
    "b2b.about.f1.desc": "독자적인 일괄 생성-선택 워크플로우로 씬당 수십 개의 후보를 생성하여 볼륨과 지능형 랭킹을 통한 품질을 보장합니다.",
    "b2b.about.f2.title": "휴먼 크리에이티브 디렉션",
    "b2b.about.f2.desc": "모든 프로젝트는 경험 풍부한 크리에이티브 디렉터가 가이드합니다. AI는 반복 제작을 담당하고, 사람이 모든 품질과 창작 결정을 내립니다.",
    "b2b.about.f3.title": "브랜드 일관성",
    "b2b.about.f3.desc": "캐릭터 일관성 프로필, 스타일 가이드, 브랜드 에셋 관리로 모든 결과물이 브랜드 아이덴티티에 완벽히 부합합니다.",
    "b2b.about.f4.title": "빠른 이터레이션",
    "b2b.about.f4.desc": "템플릿 기반 제작 구조로 빠른 수정 사이클이 가능합니다. 기획부터 최종 납품까지 주 단위가 아닌 일 단위로 완성됩니다.",
    "b2b.about.f5.title": "다국어 지원",
    "b2b.about.f5.desc": "내장 번역 파이프라인과 현지화 자막 생성. 한 번의 제작으로 글로벌 시장용 콘텐츠를 생산합니다.",
    "b2b.about.f6.title": "컴플라이언스 대응",
    "b2b.about.f6.desc": "규제 산업을 위한 구조화된 리뷰 워크플로우. 법률, 의료, 금융 컴플라이언스 검토를 위한 체크포인트 내장.",

    "b2b.process.badge": "제작 프로세스",
    "b2b.process.title": "브리프에서 납품까지",
    "b2b.process.s1": "상담",
    "b2b.process.s1.desc": "구조화된 브리핑 프로세스를 통해 브랜드, 목표, 타겟 오디언스를 이해합니다.",
    "b2b.process.s2": "크리에이티브 기획",
    "b2b.process.s2.desc": "패키지에 맞춘 스크립트, 캐릭터 프로필, 비주얼 디렉션을 설계합니다.",
    "b2b.process.s3": "AI 프로덕션",
    "b2b.process.s3.desc": "모든 단계에서 휴먼 품질 게이트를 거치는 AI 파이프라인을 통해 콘텐츠를 생성합니다.",
    "b2b.process.s4": "검토 & 납품",
    "b2b.process.s4.desc": "고객이 검토하고, 저희가 수정합니다. 최종 에셋은 필요한 모든 포맷과 해상도로 납품됩니다.",

    "b2b.industries.badge": "산업별 솔루션",
    "b2b.industries.title": "산업 맞춤형 솔루션",
    "b2b.industries.subtitle": "각 산업은 고유한 콘텐츠 니즈가 있습니다. 우리의 패키지는 처음부터 산업별 특수성을 고려하여 설계됩니다.",

    "b2b.pkg.badge": "패키지 라인업",
    "b2b.pkg.title": "프로덕션 패키지",
    "b2b.pkg.subtitle": "비즈니스 니즈에 맞는 패키지를 선택하세요. 각 패키지는 산업별 요구사항에 맞게 설계되었으며 커스터마이징이 가능합니다.",
    "b2b.pkg.videos": "샘플 영상",
    "b2b.pkg.comingSoon": "영상 준비중",
    "b2b.pkg.details": "주요 산출물",
    "b2b.pkg.inquire": "이 패키지 문의하기",

    "b2b.pkg.game.title": "게임",
    "b2b.pkg.game.icon": "🎮",
    "b2b.pkg.game1.title": "게임 IP 런칭 티저 패키지",
    "b2b.pkg.game1.desc": "게임 IP 런칭 티저 패키지는 신작 공개/사전예약/출시 초반 캠페인에 필요한 핵심 티저 자산을 패키지 형태로 제공하는 상품입니다. Vision3의 AI-native 제작 파이프라인과 연출 디렉션을 결합하여, 세계관 전달력과 집행 속도를 동시에 확보합니다.",
    "b2b.pkg.game2.title": "게임 라이브옵스/업데이트 패키지",
    "b2b.pkg.game2.desc": "LiveOps Update Pack은 업데이트/이벤트/운영 공지성 영상 자산을 월 단위로 안정 공급하는 패키지입니다. 템플릿 기반 반복 제작 구조를 통해 운영팀의 콘텐츠 생산 부담과 납기 리스크를 줄입니다.",

    "b2b.pkg.beauty.title": "뷰티",
    "b2b.pkg.beauty.icon": "💄",
    "b2b.pkg.beauty1.title": "뷰티 신제품 런칭 숏폼 패키지",
    "b2b.pkg.beauty1.desc": "Beauty Launch Shortform Pack은 신제품 런칭 초기에 필요한 핵심 숏폼 자산을 빠르게 구성하는 패키지입니다. 브랜드 무드와 제품 USP를 균형 있게 반영하여 SNS/광고 집행 준비 시간을 줄입니다.",

    "b2b.pkg.edu.title": "에듀",
    "b2b.pkg.edu.icon": "📚",
    "b2b.pkg.edu1.title": "이러닝/에듀 콘텐츠 패키지",
    "b2b.pkg.edu1.desc": "E-learning & Education Content Pack은 교육 서비스 홍보와 실제 학습용 콘텐츠 제작을 목적별로 분리 설계한 패키지입니다. 수강자 유입용 홍보 자산부터 마이크로러닝 영상 모듈까지 단계적으로 구성할 수 있습니다. 홍보형(Type A)과 학습형(Type B)으로 구분 운영을 권장합니다.",

    "b2b.pkg.fashion.title": "패션",
    "b2b.pkg.fashion.icon": "👗",
    "b2b.pkg.fashion1.title": "패션 시즌 룩북 필름 패키지",
    "b2b.pkg.fashion1.desc": "Fashion Seasonal Lookbook Film Pack은 시즌 컬렉션의 무드, 실루엣, 질감, 브랜드 스토리를 전달하는 룩북 영상 패키지입니다. 룩북/캠페인/소셜에서 함께 활용 가능한 파생 자산까지 포함할 수 있습니다.",

    "b2b.pkg.ent.title": "엔터테인먼트",
    "b2b.pkg.ent.icon": "🎬",
    "b2b.pkg.ent1.title": "웹 드라마/영화 패키지",
    "b2b.pkg.ent1.desc": "Entertainment Pack은 웹드라마/영화의 티저·예고편·프로모션 영상 자산을 패키지형으로 제공하는 상품입니다. 공개 일정에 맞춰 메인 예고 자산과 파생 프로모션 자산을 함께 구성하여 초기 노출 효율을 높입니다.",

    "b2b.pkg.finance.title": "금융 / 보험 / 법",
    "b2b.pkg.finance.icon": "🏦",
    "b2b.pkg.finance1.title": "금융/보험 콘텐츠 패키지",
    "b2b.pkg.finance1.desc": "Finance / Insurance Content Pack은 금융·보험사·법무의 브랜딩/상품안내/고객 커뮤니케이션 목적에 맞춰 설계된 패키지입니다. 표현 정확성과 준법 검토를 고려한 진행 구조로 실무 수정 부담을 줄입니다.",

    "b2b.pkg.hr.title": "인사 교육",
    "b2b.pkg.hr.icon": "👥",
    "b2b.pkg.hr1.title": "인사 교육 영상 패키지",
    "b2b.pkg.hr1.desc": "HR Training Video Pack은 인사/교육팀의 반복 제작 수요에 맞춘 내부 교육 영상 패키지입니다. 온보딩/필수교육/직무교육/리더십 교육을 템플릿화하여 빠르고 일관성 있게 제작할 수 있습니다.",

    "b2b.pkg.health.title": "헬스케어",
    "b2b.pkg.health.icon": "🏥",
    "b2b.pkg.health1.title": "헬스케어 콘텐츠 패키지",
    "b2b.pkg.health1.desc": "Healthcare Content Pack은 헬스케어 서비스/기관/솔루션의 소개·안내·설명 목적에 맞춘 영상 패키지입니다. 정확성과 신뢰성을 우선으로 설계하여 의료/전문가 검토가 필요한 환경에서도 안정적인 제작 프로세스를 제공합니다.",

    "b2b.inquiry.badge": "작업 문의",
    "b2b.inquiry.title": "프로젝트 문의",
    "b2b.inquiry.subtitle": "프로젝트에 대해 알려주시면 맞춤 제안서를 준비하겠습니다. 영업일 기준 1일 이내에 답변드립니다.",
    "b2b.inquiry.form.company": "회사명",
    "b2b.inquiry.form.companyPh": "(주)회사명",
    "b2b.inquiry.form.name": "담당자명",
    "b2b.inquiry.form.namePh": "홍길동",
    "b2b.inquiry.form.email": "업무 이메일",
    "b2b.inquiry.form.emailPh": "hong@company.com",
    "b2b.inquiry.form.phone": "연락처",
    "b2b.inquiry.form.phonePh": "010-0000-0000",
    "b2b.inquiry.form.package": "관심 패키지",
    "b2b.inquiry.form.packagePh": "패키지를 선택하세요",
    "b2b.inquiry.form.budget": "예산 범위",
    "b2b.inquiry.form.budgetPh": "예산 범위를 선택하세요",
    "b2b.inquiry.form.budget1": "500만원 미만",
    "b2b.inquiry.form.budget2": "500만원 – 2,000만원",
    "b2b.inquiry.form.budget3": "2,000만원 – 5,000만원",
    "b2b.inquiry.form.budget4": "5,000만원 이상",
    "b2b.inquiry.form.budgetOpen": "협의 가능",
    "b2b.inquiry.form.timeline": "희망 일정",
    "b2b.inquiry.form.timelinePh": "일정을 선택하세요",
    "b2b.inquiry.form.timeline1": "2주 이내",
    "b2b.inquiry.form.timeline2": "1개월 이내",
    "b2b.inquiry.form.timeline3": "3개월 이내",
    "b2b.inquiry.form.timeline4": "유동적",
    "b2b.inquiry.form.details": "프로젝트 상세",
    "b2b.inquiry.form.detailsPh": "프로젝트 목표, 타겟 오디언스, 특별 요구사항을 설명해주세요...",
    "b2b.inquiry.form.send": "문의 제출",
    "b2b.inquiry.form.sending": "제출 중...",
    "b2b.inquiry.form.successTitle": "문의가 성공적으로 접수되었습니다",
    "b2b.inquiry.form.successDesc": "관심 가져주셔서 감사합니다. 비즈니스팀이 검토 후 영업일 1일 이내에 답변드리겠습니다.",
    "b2b.inquiry.form.another": "다른 문의 제출",

    "b2b.cta.title": "콘텐츠 제작의 혁신을 시작할 준비가 되셨나요?",
    "b2b.cta.desc": "Vision3의 AI 프로덕션 플랫폼이 콘텐츠 전략을 어떻게 가속화할 수 있는지 상담하세요.",
  },

  ja: {
    // 일본어 번역 묶음
    // 역시 동일한 키 구조를 유지하면서 일본어 값만 넣는다.
    // 언어별 키 구조가 동일해야 t("같은키") 호출이 화면별로 안정적으로 동작한다.

    "b2b.nav.name": "Vision3 Business",
    "b2b.nav.intro": "事業紹介",
    "b2b.nav.packages": "パッケージ紹介",
    "b2b.nav.inquiry": "お問い合わせ",
    "b2b.nav.backMain": "Vision3 ホーム",

    "b2b.hero.badge": "B2Bソリューション",
    "b2b.hero.title1": "AIネイティブコンテンツ",
    "b2b.hero.title2": "制作プラットフォーム",
    "b2b.hero.subtitle": "企画から最終納品まで — AI制作パイプラインにより前例のない速度で高インパクトな映像コンテンツを制作します。業界を超えた企業クライアントから信頼されるプラットフォーム。",
    "b2b.hero.cta1": "パッケージを見る",
    "b2b.hero.cta2": "お問い合わせ",

    "b2b.partners.title": "世界110以上のブランドとの実績",

    "b2b.stat1.val": "70%",
    "b2b.stat1.label": "納期短縮",
    "b2b.stat2.val": "60%",
    "b2b.stat2.label": "コスト削減",
    "b2b.stat3.val": "24h",
    "b2b.stat3.label": "初稿納品",
    "b2b.stat4.val": "120+",
    "b2b.stat4.label": "プロジェクト実績",

    "b2b.about.badge": "Why Vision3",
    "b2b.about.title": "エンタープライズグレードAIプロダクション",
    "b2b.about.subtitle": "熟練のクリエイティブディレクションとAIネイティブ制作パイプラインを組み合わせ、品質・速度・ブランド一貫性の最高基準を満たすコンテンツを納品します。",
    "b2b.about.f1.title": "AI駆動パイプライン",
    "b2b.about.f1.desc": "独自の一括生成・選択ワークフローでシーンごとに数十の候補を生成し、ボリュームとインテリジェントランキングによる品質を保証します。",
    "b2b.about.f2.title": "ヒューマンクリエイティブディレクション",
    "b2b.about.f2.desc": "すべてのプロジェクトは経験豊富なクリエイティブディレクターがガイドします。AIは反復制作を担当し、人がすべての品質とクリエイティブの決定を行います。",
    "b2b.about.f3.title": "ブランド一貫性",
    "b2b.about.f3.desc": "キャラクター一貫性プロファイル、スタイルガイド、ブランドアセット管理ですべてのアウトプットがブランドアイデンティティに完璧に合致します。",
    "b2b.about.f4.title": "迅速なイテレーション",
    "b2b.about.f4.desc": "テンプレートベースの制作構造により、迅速な修正サイクルが可能。企画から最終納品まで週単位ではなく日単位で完成します。",
    "b2b.about.f5.title": "多言語対応",
    "b2b.about.f5.desc": "内蔵翻訳パイプラインとローカライズ字幕生成。1回の制作でグローバル市場向けコンテンツを生産します。",
    "b2b.about.f6.title": "コンプライアンス対応",
    "b2b.about.f6.desc": "規制業界向けに構造化されたレビューワークフロー。法律・医療・金融コンプライアンスレビュー用チェックポイント内蔵。",

    "b2b.process.badge": "制作プロセス",
    "b2b.process.title": "ブリーフから納品まで",
    "b2b.process.s1": "ヒアリング",
    "b2b.process.s1.desc": "構造化されたブリーフィングプロセスを通じてブランド、目標、ターゲットオーディエンスを理解します。",
    "b2b.process.s2": "クリエイティブ企画",
    "b2b.process.s2.desc": "パッケージに合わせたスクリプト、キャラクタープロファイル、ビジュアルディレクションを設計します。",
    "b2b.process.s3": "AIプロダクション",
    "b2b.process.s3.desc": "すべての段階でヒューマン品質ゲートを経るAIパイプラインでコンテンツを生成します。",
    "b2b.process.s4": "レビュー＆納品",
    "b2b.process.s4.desc": "お客様がレビューし、私たちが修正します。最終アセットは必要なすべてのフォーマットと解像度で納品されます。",

    "b2b.industries.badge": "業界別ソリューション",
    "b2b.industries.title": "業界カスタマイズソリューション",
    "b2b.industries.subtitle": "各業界には固有のコンテンツニーズがあります。当社のパッケージは業界固有の特殊性を最初から考慮して設計されています。",

    "b2b.pkg.badge": "パッケージラインナップ",
    "b2b.pkg.title": "プロダクションパッケージ",
    "b2b.pkg.subtitle": "ビジネスニーズに合ったパッケージをお選びください。各パッケージは業界別要件に合わせて設計され、カスタマイズ可能です。",
    "b2b.pkg.videos": "サンプル映像",
    "b2b.pkg.comingSoon": "映像準備中",
    "b2b.pkg.details": "主要成果物",
    "b2b.pkg.inquire": "このパッケージについて問い合わせる",

    "b2b.pkg.game.title": "ゲーム",
    "b2b.pkg.game.icon": "🎮",
    "b2b.pkg.game1.title": "ゲームIPローンチティーザーパッケージ",
    "b2b.pkg.game1.desc": "ゲームIPローンチティーザーパッケージは、新作公開・事前登録・発売初期キャンペーンに必要な主要ティーザーアセットをパッケージ形式で提供する商品です。Vision3のAIネイティブ制作パイプラインと演出ディレクションを組み合わせ、世界観の伝達力と実行スピードを同時に確保します。",
    "b2b.pkg.game2.title": "ゲームライブオプス/アップデートパッケージ",
    "b2b.pkg.game2.desc": "LiveOps Update Packはアップデート・イベント・運営告知映像アセットを月単位で安定供給するパッケージです。テンプレートベースの反復制作構造で運営チームのコンテンツ制作負担と納期リスクを軽減します。",

    "b2b.pkg.beauty.title": "ビューティー",
    "b2b.pkg.beauty.icon": "💄",
    "b2b.pkg.beauty1.title": "ビューティー新製品ローンチショートフォームパッケージ",
    "b2b.pkg.beauty1.desc": "Beauty Launch Shortform Packは新製品ローンチ初期に必要な主要ショートフォームアセットを迅速に構成するパッケージです。ブランドムードと製品USPをバランスよく反映し、SNS・広告出稿の準備時間を短縮します。",

    "b2b.pkg.edu.title": "教育",
    "b2b.pkg.edu.icon": "📚",
    "b2b.pkg.edu1.title": "Eラーニング/教育コンテンツパッケージ",
    "b2b.pkg.edu1.desc": "E-learning & Education Content Packは教育サービスのプロモーションと実際の学習用コンテンツ制作を目的別に分離設計したパッケージです。受講者獲得用プロモーションアセットからマイクロラーニング映像モジュールまで段階的に構成できます。",

    "b2b.pkg.fashion.title": "ファッション",
    "b2b.pkg.fashion.icon": "👗",
    "b2b.pkg.fashion1.title": "ファッションシーズナルルックブックフィルムパッケージ",
    "b2b.pkg.fashion1.desc": "Fashion Seasonal Lookbook Film Packはシーズンコレクションのムード、シルエット、質感、ブランドストーリーを伝えるルックブック映像パッケージです。ルックブック・キャンペーン・ソーシャルで活用可能な派生アセットまで含めることができます。",

    "b2b.pkg.ent.title": "エンターテインメント",
    "b2b.pkg.ent.icon": "🎬",
    "b2b.pkg.ent1.title": "Webドラマ/映画パッケージ",
    "b2b.pkg.ent1.desc": "Entertainment Packはウェブドラマ・映画のティーザー・予告編・プロモーション映像アセットをパッケージ形式で提供する商品です。公開スケジュールに合わせてメイン予告アセットと派生プロモーションアセットを一緒に構成し、初期露出効率を高めます。",

    "b2b.pkg.finance.title": "金融/保険/法務",
    "b2b.pkg.finance.icon": "🏦",
    "b2b.pkg.finance1.title": "金融/保険コンテンツパッケージ",
    "b2b.pkg.finance1.desc": "Finance / Insurance Content Packは金融・保険・法務のブランディング/商品案内/顧客コミュニケーション目的に合わせて設計されたパッケージです。表現の正確性とコンプライアンスレビューを考慮した進行構造で実務修正負担を軽減します。",

    "b2b.pkg.hr.title": "人事研修",
    "b2b.pkg.hr.icon": "👥",
    "b2b.pkg.hr1.title": "人事研修映像パッケージ",
    "b2b.pkg.hr1.desc": "HR Training Video Packは人事・研修チームの反復制作需要に合わせた社内研修映像パッケージです。オンボーディング・必須研修・職務研修・リーダーシップ研修をテンプレート化し、迅速かつ一貫性のある制作が可能です。",

    "b2b.pkg.health.title": "ヘルスケア",
    "b2b.pkg.health.icon": "🏥",
    "b2b.pkg.health1.title": "ヘルスケアコンテンツパッケージ",
    "b2b.pkg.health1.desc": "Healthcare Content Packはヘルスケアサービス・機関・ソリューションの紹介・案内・説明目的に合わせた映像パッケージです。正確性と信頼性を優先に設計し、医療・専門家レビューが必要な環境でも安定した制作プロセスを提供します。",

    "b2b.inquiry.badge": "お問い合わせ",
    "b2b.inquiry.title": "プロジェクトお問い合わせ",
    "b2b.inquiry.subtitle": "プロジェクトについてお聞かせいただければ、カスタマイズされた提案書を準備いたします。通常1営業日以内にご返信いたします。",
    "b2b.inquiry.form.company": "会社名",
    "b2b.inquiry.form.companyPh": "株式会社〇〇",
    "b2b.inquiry.form.name": "ご担当者名",
    "b2b.inquiry.form.namePh": "山田太郎",
    "b2b.inquiry.form.email": "ビジネスメール",
    "b2b.inquiry.form.emailPh": "yamada@company.com",
    "b2b.inquiry.form.phone": "電話番号",
    "b2b.inquiry.form.phonePh": "03-0000-0000",
    "b2b.inquiry.form.package": "関心パッケージ",
    "b2b.inquiry.form.packagePh": "パッケージを選択",
    "b2b.inquiry.form.budget": "予算範囲",
    "b2b.inquiry.form.budgetPh": "予算範囲を選択",
    "b2b.inquiry.form.budget1": "50万円未満",
    "b2b.inquiry.form.budget2": "50万円〜200万円",
    "b2b.inquiry.form.budget3": "200万円〜500万円",
    "b2b.inquiry.form.budget4": "500万円以上",
    "b2b.inquiry.form.budgetOpen": "要相談",
    "b2b.inquiry.form.timeline": "希望スケジュール",
    "b2b.inquiry.form.timelinePh": "スケジュールを選択",
    "b2b.inquiry.form.timeline1": "2週間以内",
    "b2b.inquiry.form.timeline2": "1ヶ月以内",
    "b2b.inquiry.form.timeline3": "3ヶ月以内",
    "b2b.inquiry.form.timeline4": "フレキシブル",
    "b2b.inquiry.form.details": "プロジェクト詳細",
    "b2b.inquiry.form.detailsPh": "プロジェクトの目標、ターゲットオーディエンス、特別な要件をお聞かせください...",
    "b2b.inquiry.form.send": "お問い合わせ送信",
    "b2b.inquiry.form.sending": "送信中...",
    "b2b.inquiry.form.successTitle": "お問い合わせが正常に送信されました",
    "b2b.inquiry.form.successDesc": "ご関心をお寄せいただきありがとうございます。ビジネスチームが確認後、1営業日以内にご返信いたします。",
    "b2b.inquiry.form.another": "別のお問い合わせを送信",

    "b2b.cta.title": "コンテンツ制作の革新を始める準備はできましたか？",
    "b2b.cta.desc": "Vision3のAIプロダクションプラットフォームがコンテンツ戦略をどのように加速できるかご相談ください。",
  },
};

export default b2bTranslations;
// 이 객체를 default export 해서
// i18n.tsx에서 import 후 전체 번역 lookup에 합쳐서 사용한다.
// 즉, 이 파일은 business 번역 전용 데이터 소스라고 보면 된다.