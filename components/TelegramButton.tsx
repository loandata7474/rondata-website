import { siteConfig } from "@/lib/config";

type Props = {
  label?: string;
  variant?: "solid" | "outline";
  className?: string;
};

/**
 * 모든 Telegram 상담 버튼은 이 컴포넌트를 사용합니다.
 * siteConfig.telegramUrl 값 하나만 바꾸면 사이트 전체에 반영됩니다.
 */
export default function TelegramButton({
  label = "Telegram 상담",
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-navy text-white hover:bg-ink"
      : "border border-ink text-ink hover:bg-ink hover:text-white";

  return (
    <a
      href={siteConfig.telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  );
}
