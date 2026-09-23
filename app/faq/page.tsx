import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description: "론데이터의 서비스, Google Demand Gen 광고, 리드 제너레이션에 대해 자주 묻는 질문을 안내합니다.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    question: "론데이터는 어떤 서비스를 제공하나요?",
    answer:
      "대출·금융 분야를 중심으로 Google Demand Gen 광고 운영과 리드 제너레이션을 진행합니다. 자세한 서비스 범위는 서비스 페이지에서 확인하실 수 있습니다.",
  },
  {
    question: "Google Demand Gen 광고를 직접 운영하나요?",
    answer:
      "네, 캠페인 기획, 크리에이티브 구성, 타겟팅, 집행과 최적화까지 직접 운영합니다.",
  },
  {
    question: "리드는 어떻게 확보되나요?",
    answer:
      "광고 캠페인의 목적과 운영 구조에 따라 잠재고객 확보 방식을 설계합니다. 구체적인 운영 범위와 방식은 상담을 통해 안내드립니다.",
  },
  {
    question: "B2B 리드 제너레이션 서비스도 상담할 수 있나요?",
    answer:
      "네. 광고 운영 목적과 필요한 리드 제너레이션 범위를 확인한 후 진행 가능 여부와 운영 방식을 상담해 드립니다.",
  },
  {
    question: "캠페인 성과나 전환율을 보장하나요?",
    answer:
      "업종, 예산, 시기 등에 따라 성과가 달라질 수 있어 특정 순위 상승이나 전환율을 보장하지 않습니다. 캠페인별 구체적인 조건은 상담을 통해 확인해 드립니다.",
  },
  {
    question: "Telegram으로 상담할 수 있나요?",
    answer:
      "네, 페이지 상단 및 하단의 Telegram 버튼을 통해 상담을 시작할 수 있습니다.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageIntro
        eyebrow="FAQ"
        title="자주 묻는 질문"
        lead="서비스 이용 전 자주 문의되는 내용을 정리했습니다. 목록에 없는 내용은 문의 페이지를 통해 확인해 주세요."
      />

      <section className="border-t hairline">
        <div className="container-content divide-y hairline border-y hairline py-2">
          {FAQS.map((faq) => (
            <div key={faq.question} className="py-6">
              <p className="text-sm font-semibold text-ink">Q. {faq.question}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A. {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="원하는 답을 찾지 못하셨나요?"
        description="문의 페이지 또는 Telegram을 통해 직접 문의해 주시면 자세히 안내해 드립니다."
      />
    </>
  );
}
