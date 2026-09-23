import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import InfoNote from "@/components/InfoNote";

export const metadata: Metadata = {
  title: "B2B 리드 제너레이션",
  description:
    "론데이터의 B2B 리드 제너레이션 서비스: 광고 캠페인 설계부터 잠재고객 확보, 캠페인 분석까지.",
  alternates: { canonical: "/lead-generation" },
};

const STEPS = [
  {
    title: "캠페인 설계",
    description: "업종과 목표에 맞춰 광고 캠페인의 방향과 구조를 설계합니다.",
  },
  {
    title: "광고 집행",
    description: "설계한 캠페인을 Google Demand Gen 등을 통해 실제로 운영합니다.",
  },
  {
    title: "잠재고객 유입",
    description: "광고를 통해 서비스에 관심 있는 잠재고객이 유입됩니다.",
  },
  {
    title: "리드 제너레이션",
    description:
      "캠페인 목적에 따라 잠재고객 확보와 후속 운영 방식을 상담합니다.",
  },
  {
    title: "캠페인 분석 및 개선",
    description: "캠페인 운영 데이터를 바탕으로 구조와 방향을 점검하고 개선합니다.",
  },
];

export default function LeadGenerationPage() {
  return (
    <>
      <PageIntro
        eyebrow="LEAD GENERATION"
        title={
          <>
            광고에서 실제 문의까지
            <br />
            B2B 리드 제너레이션
          </>
        }
        lead="광고 캠페인을 통해 잠재고객을 확보하고, 비즈니스 목적에 맞는 리드 제너레이션 전략을 설계합니다."
      />

      <section className="border-t hairline">
        <div className="container-content py-14 md:py-16">
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      <section className="border-t hairline bg-bg">
        <div className="container-content py-14 md:py-16">
          <h2 className="text-lg font-semibold text-ink">
            비즈니스 목적에 맞춘 리드 제너레이션
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            업종과 광고 목적에 따라 캠페인 구조와 운영 방식을 상담합니다.
          </p>
          <div className="mt-6 max-w-2xl">
            <InfoNote>
              리드 데이터의 구체적인 수집·이용·제공 방식과 법률적 적법성에
              관한 내용은 이 페이지에서 임의로 설명하지 않습니다. 실제
              개인정보 처리 방식은 서비스 운영 방식에 따라 별도로
              안내됩니다.
            </InfoNote>
          </div>
        </div>
      </section>

      <CTASection
        title="리드 제너레이션 운영 방식이 궁금하신가요?"
        description="업종과 캠페인 목적을 알려주시면 적합한 운영 방식을 상담해 드립니다."
      />
    </>
  );
}
