import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";
import TelegramButton from "@/components/TelegramButton";

export const metadata: Metadata = {
  title: "서비스 문의",
  description: "론데이터의 광고 운영 및 리드 제너레이션 서비스에 대해 문의해 주세요.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="CONTACT"
        title="서비스 문의"
        lead="필요하신 서비스 범위와 진행 조건을 확인한 뒤 안내해 드립니다. 빠른 상담은 Telegram을 이용해 주세요."
      />

      <section className="border-t hairline">
        <div className="container-content grid gap-10 py-14 md:grid-cols-[1fr_1.3fr] md:py-16">
          <div>
            <h2 className="text-lg font-semibold text-ink">Telegram 상담</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              가장 빠르게 상담받는 방법입니다. 버튼을 누르면 론데이터의
              Telegram으로 연결됩니다.
            </p>
            <div className="mt-5">
              <TelegramButton />
            </div>

            <div className="mt-10 border-t hairline pt-6 text-sm text-muted">
              <p className="font-medium text-ink">이메일</p>
              <p className="mt-1">확정 후 안내 예정</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
