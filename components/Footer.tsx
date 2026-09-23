import Link from "next/link";
import { siteConfig } from "@/lib/config";
import TelegramButton from "./TelegramButton";

const SITEMAP = [
  { href: "/services", label: "서비스" },
  { href: "/google-demand-gen", label: "Google Demand Gen" },
  { href: "/lead-generation", label: "금융전문 광고대행사 프로세스" },
  { href: "/company", label: "회사소개" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "문의" },
];

export default function Footer() {
  return (
    <footer className="border-t hairline bg-surface">
      <div className="container-content grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-base font-semibold text-ink">
            {siteConfig.companyNameKo}
            <span className="ml-2 font-mono text-xs text-muted">
              {siteConfig.companyNameEn}
            </span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            대출·금융 분야 광고와 리드 제너레이션을 실행하는
            B2B 마케팅 회사입니다.
          </p>
          <div className="mt-5">
            <TelegramButton variant="outline" />
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Sitemap
          </p>
          <ul className="mt-4 space-y-2">
            {SITEMAP.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink/80 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            회사 정보
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>사업자등록번호: 493-05-31524</li>
<li>
  주소: 대구광역시 달서구 두류공원로 242,
  7층 701-138호(두류동)
</li>
            <li>
              <Link href="/privacy" className="underline underline-offset-4 hover:text-ink">
                개인정보처리방침
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="container-content flex flex-col gap-2 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.companyNameKo} ({siteConfig.companyNameEn}). All rights reserved.
          </p>
          <p>본 페이지의 서비스 소개 내용은 상담을 통해 구체적으로 안내드립니다.</p>
        </div>
      </div>
    </footer>
  );
}
