import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import CTASection from "@/components/CTASection";
import InfoNote from "@/components/InfoNote";

export const metadata: Metadata = {
  title: "구글 디멘드젠 광고 실행 전문",
  description:
    "론데이터는 Google Demand Gen을 활용해 대출·금융 분야 광고 캠페인을 기획하고 운영합니다.",
  alternates: { canonical: "/google-demand-gen" },
};

const FLOW = ["Campaign", "Creative", "Targeting", "Traffic", "Lead", "Optimization"];

export default function DemandGenPage() {
  return (
    <>
      <PageIntro
        eyebrow="GOOGLE DEMAND GEN"
        title={
          <>
            Google Demand Gen으로 잠재고객에게 도달하고
            <br />
            비즈니스 목적에 맞는 광고 캠페인을 운영합니다
          </>
        }
        lead="Google의 다양한 광고 지면을 활용해 잠재고객에게 브랜드와 서비스를 노출하고, 캠페인 목적에 맞춰 광고를 운영합니다. 론데이터는 대출·금융 분야에 맞춰 캠페인을 기획하고 직접 운영합니다."
      />

      <section className="border-t hairline">
        <div className="container-content py-14 md:py-16">
          <h2 className="text-xl font-semibold text-ink">운영 흐름</h2>
          <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
            {FLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-3 md:gap-4">
                <span className="border border-line px-4 py-2 font-mono text-sm text-ink">
                  {step}
                </span>
                {i < FLOW.length - 1 && (
                  <span className="text-muted" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-bg">
        <div className="container-content grid gap-10 py-14 md:grid-cols-2 md:py-16">
          <div>
            <h2 className="text-lg font-semibold text-ink">
              캠페인 기획 및 세팅
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              광고 목표와 예산, 타겟 조건을 확인한 뒤 크리에이티브와
              타겟팅 구조를 설계합니다. 대출·금융 분야의 광고 소재
              심사 기준을 고려해 캠페인을 구성합니다.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink">
              집행 및 최적화
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              캠페인 집행 이후 유입 및 잠재고객 확보 흐름을 모니터링하며
              타겟팅과 소재를 조정합니다. 구체적인 운영 지표와 조정 방식은
              캠페인별 상담을 통해 안내드립니다.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="container-content py-14 md:py-16">
          <InfoNote>
            캠페인 성과는 업종, 예산, 시기에 따라 달라질 수 있으며 특정
            순위 상승이나 전환율을 보장하지 않습니다. 실제 운영 조건은
            상담을 통해 확인해 드립니다.
          </InfoNote>
        </div>
      </section>

      <CTASection
        title="구글 디멘드젠 캠페인 운영을 검토 중이신가요?"
        description="현재 광고 운영 현황과 목표 예산을 알려주시면 적합한 캠페인 구조를 상담해 드립니다."
      />
    </>
  );
}
