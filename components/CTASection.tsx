import Link from "next/link";
import TelegramButton from "./TelegramButton";

type Props = {
  title: string;
  description: string;
};

export default function CTASection({ title, description }: Props) {
  return (
    <section className="border-t hairline bg-navy text-white">
      <div className="container-content flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold leading-snug">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            서비스 문의 <span aria-hidden="true">→</span>
          </Link>
          <TelegramButton variant="outline" className="!border-white/40 !text-white hover:!bg-white hover:!text-navy" />
        </div>
      </div>
    </section>
  );
}
