import Link from "next/link";
import TelegramButton from "./TelegramButton";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t hairline bg-surface/95 backdrop-blur md:hidden">
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center border-r hairline py-4 text-sm font-medium text-ink"
      >
        서비스 문의
      </Link>
      <TelegramButton
        label="Telegram 상담"
        variant="solid"
        className="flex-1 !px-0 !py-4 border-0"
      />
    </div>
  );
}
