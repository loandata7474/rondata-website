import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "론데이터는 대출·금융 분야의 디지털 광고와 리드 제너레이션을 실행하는 B2B 마케팅 회사입니다.",
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return (
    <>
      <PageIntro
        eyebrow="COMPANY"
        title="광고 실행과 리드 제너레이션을 함께하는 론데이터"
        lead="론데이터는 대출·금융 분야를 중심으로 디지털 광고 캠페인을 직접 운영하고, 비즈니스 목적에 맞는 리드 제너레이션 전략을 함께 설계하는 B2B 마케팅 회사입니다."
      />

      <section className="border-t hairline">
        <div className="container-content grid gap-10 py-14 md:grid-cols-2 md:py-16">
          <div>
            <h2 className="text-lg font-semibold text-ink">하는 일</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Google Demand Gen을 중심으로 한 디지털 광고 캠페인의 기획과
              집행, 그리고 캠페인 목적에 맞는 리드 제너레이션 전략 설계를
              함께 진행합니다.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink">일하는 방식</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              광고 캠페인 운영과 리드 제너레이션을 분리하지 않고 하나의
              흐름으로 진행하며, 진행 상황과 방식은 상담을 통해
              투명하게 안내합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-bg">
        <div className="container-content py-14 md:py-16">
          <h2 className="text-lg font-semibold text-ink">회사 정보</h2>
          <dl className="mt-6 grid max-w-xl gap-4 text-sm">
            <div className="flex justify-between border-b hairline pb-3">
              <dt className="text-muted">회사명</dt>
              <dd className="text-ink">론데이터 (RON DATA)</dd>
            </div>
            <div className="flex justify-between border-b hairline pb-3">
              <dt className="text-muted">사업 분야</dt>
              <dd className="text-ink">
                디지털 광고 운영, 리드 제너레이션
              </dd>
            </div>
            <div className="flex justify-between border-b hairline pb-3">
              <dt className="text-muted">사업자등록번호</dt>
              <dd className="text-ink">확정 후 표기 예정</dd>
            </div>
            <div className="flex justify-between border-b hairline pb-3">
              <dt className="text-muted">주소</dt>
              <dd className="text-ink">확정 후 표기 예정</dd>
            </div>
            <div className="flex justify-between pb-3">
              <dt className="text-muted">문의</dt>
              <dd className="text-ink">Telegram / 문의 페이지</dd>
            </div>
          </dl>
        </div>
      </section>

      <CTASection
        title="함께 진행할 캠페인을 논의하고 싶으신가요?"
        description="회사와 서비스에 대해 더 궁금한 점이 있다면 편하게 문의해 주세요."
      />
    </>
  );
}
