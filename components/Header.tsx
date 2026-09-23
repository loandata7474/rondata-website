import Link from "next/link";
import { siteConfig } from "@/lib/config";
import TelegramButton from "./TelegramButton";

const NAV_ITEMS = [
  { href: "/services", label: "서비스" },
  { href: "/google-demand-gen", label: "Google Demand Gen" },
  { href: "/lead-generation", label: "리드 제너레이션" },
  { href: "/company", label: "회사소개" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b hairline bg-surface/95 backdrop-blur">
      <div className="container-content flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-ink">
            {siteConfig.companyNameKo}
          </span>
          <span className="font-mono text-[11px] text-muted">
            {siteConfig.companyNameEn}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <TelegramButton label="Telegram 상담" variant="solid" className="!px-4 !py-2" />
        </div>

        {/* 모바일: 문의 페이지로 이동하는 축약 링크 */}
        <Link
          href="/contact"
          className="text-sm font-medium text-ink underline underline-offset-4 md:hidden"
        >
          문의
        </Link>
      </div>
    </header>
  );
}
