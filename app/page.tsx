import type { Metadata } from "next";
import Link from "next/link";
import TelegramButton from "@/components/TelegramButton";
import DataFlowGraphic from "@/components/DataFlowGraphic";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import InfoNote from "@/components/InfoNote";

export const metadata: Metadata = {
  title: "대출 광고 대행 · 리드 제너레이션 전문 B2B 마케팅 회사",
  description:
    "론데이터는 대출·금융 분야의 Google Demand Gen 광고 운영과 리드 제너레이션을 실행하는 B2B 마케팅 회사입니다.",
  alternates: { canonical: "/" },
};

const SERVICES = [
  {
    title: "Google Demand Gen 광고",
    description:
      "대출·금융 분야 광고 캠페인의 기획, 크리에이티브, 타겟팅, 집행을 지원합니다.",
    href: "/google-demand-gen",
  },
  {
    title: "리드 제너레이션",
    description:
      "광고를 통해 잠재고객을 확보하고, 비즈니스 목적에 맞는 리드 제너레이션 전략을 설계합니다.",
    href: "/lead-generation",
  },
  {
    title: "B2B 광고 운영 지원",
    description:
      "캠페인 성과와 리드 흐름을 함께 검토하며 지속적인 운영을 지원합니다.",
    href: "/services",
  },
];

const PROCESS = [
  { title: "상담", description: "필요한 광고 운영 범위와 목적을 확인합니다." },
  { title: "캠페인 기획", description: "타겟, 크리에이티브, 예산 구조를 함께 설계합니다." },
  { title: "Google Demand Gen 집행", description: "설계한 캠페인을 실제로 운영·최적화합니다." },
  { title: "잠재고객 유입", description: "광고를 통해 서비스에 관심 있는 이용자가 유입됩니다." },
  { title: "리드 제너레이션", description: "캠페인 목적에 따라 잠재고객 확보와 후속 운영 방식을 상담합니다." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b hairline bg-surface">
        <div className="container-content grid items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <p className="font-mono text-xs text-accent">RON DATA</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-5xl md:leading-[1.15]">
              금융·대출 분야의
              <br />
              디지털 광고와 리드 제너레이션
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Google Demand Gen을 중심으로 광고 캠페인을 운영하고 B2B
              비즈니스에 필요한 잠재고객 확보 전략을 설계합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-navy px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ink"
              >
                서비스 알아보기 <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-ink px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
              >
                상담 문의
              </Link>
              <TelegramButton variant="outline" />
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <DataFlowGraphic />
          </div>
        </div>
      </section>

      {/* 서비스 */}
      <section className="border-b hairline">
        <div className="container-content py-16 md:py-20">
          <div className="max-w-xl">
            <p className="font-mono text-xs text-accent">SERVICES</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink md:text-3xl">
              론데이터가 하는 일
            </h2>
          </div>
          <div className="mt-10 grid gap-px border hairline bg-line md:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col justify-between bg-surface p-7 transition-colors hover:bg-bg"
              >
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
                <span className="mt-6 text-sm text-accent">
                  자세히 보기 <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 차별점 / 프로세스 */}
      <section className="border-b hairline bg-bg">
        <div className="container-content py-16 md:py-20">
          <div className="max-w-xl">
            <p className="font-mono text-xs text-accent">PROCESS</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink md:text-3xl">
              광고 집행부터 리드 제너레이션까지, 직접 진행합니다
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              광고 캠페인을 통해 잠재고객을 확보하고, 비즈니스 목적에 맞는
              리드 제너레이션 전략을 설계합니다.
            </p>
          </div>
          <div className="mt-10">
            <ProcessSteps steps={PROCESS} />
          </div>
          <div className="mt-6">
            <InfoNote>
              이용자의 개인정보 수집·이용에 관한 구체적인 처리 방식과 법률
              검토 결과는 상담 및 개인정보처리방침을 통해 별도로 안내드립니다.
            </InfoNote>
          </div>
        </div>
      </section>

      {/* FAQ 미리보기 */}
      <section className="border-b hairline">
        <div className="container-content py-16 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-xs text-accent">FAQ</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink md:text-3xl">
                자주 묻는 질문
              </h2>
            </div>
            <Link
              href="/faq"
              className="text-sm text-ink underline underline-offset-4"
            >
              전체 FAQ 보기 →
            </Link>
          </div>
          <div className="mt-8 divide-y hairline border-y hairline">
            <div className="py-5">
              <p className="text-sm font-medium text-ink">
                Google Demand Gen 광고를 직접 운영하나요?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                네, 캠페인 기획부터 집행, 최적화까지 직접 운영합니다.
              </p>
            </div>
            <div className="py-5">
              <p className="text-sm font-medium text-ink">
                리드 제너레이션은 어떻게 진행되나요?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                광고 캠페인의 목적과 운영 구조에 따라 잠재고객 확보 방식을
                설계합니다. 구체적인 운영 범위와 방식은 상담을 통해
                안내드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="대출·금융 광고 운영이 필요하신가요?"
        description="캠페인 범위와 필요 사항을 확인한 뒤 진행 방식을 안내드립니다."
      />
    </>
  );
}
