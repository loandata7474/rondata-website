/**
 * 사이트 전역 설정
 * ------------------------------------------------------------------
 * 실제 정보가 확정되면 이 파일의 값만 교체하면 사이트 전체(Header,
 * Footer, 모든 CTA 버튼, SEO 메타데이터, sitemap, robots, Schema)에
 * 자동으로 반영됩니다.
 *
 * 아직 제공되지 않은 값(전화번호, 주소, 사업자등록번호, Telegram 주소 등)은
 * 절대 임의로 생성하지 않고 placeholder 문자열 또는 환경변수로 남겨둡니다.
 * ------------------------------------------------------------------
 */

export const siteConfig = {
  /** 회사명 (국문) */
  companyNameKo: "론데이터",
  /** 회사명 (영문 표기) */
  companyNameEn: "RON DATA",

  /**
   * 사이트 기본 URL.
   * 실제 도메인이 확정되면 NEXT_PUBLIC_SITE_URL 환경변수로 주입하세요.
   * canonical / sitemap / Open Graph / robots 에 자동 반영됩니다.
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://SITE_URL_PLACEHOLDER",

  /**
   * Telegram 상담 링크.
   * 실제 Telegram 주소가 정해지면 NEXT_PUBLIC_TELEGRAM_URL 환경변수로
   * 주입하거나 아래 fallback 값만 교체하세요. 이 한 곳만 바꾸면
   * 사이트 전체의 모든 Telegram 버튼에 반영됩니다.
   */
  telegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL || "TELEGRAM_URL_PLACEHOLDER",

  /**
   * 아래 값들은 실제 정보가 제공되기 전까지 비워둡니다(placeholder).
   * 화면에서는 값이 없을 경우 해당 항목을 노출하지 않거나
   * "추후 안내" 형태로 표시하도록 컴포넌트에서 처리합니다.
   */
  contact: {
    email: "", // 예: contact@example.com — 제공 시 입력
    phone: "", // 사업자등록 및 통신판매 정보 확정 후 입력
    address: "", // 확정 후 입력
    businessRegistrationNumber: "", // 확정 후 입력
  },

  defaultLocale: "ko_KR",
} as const;
