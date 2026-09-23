import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "서비스 소개 | 대출·금융 광고 및 리드 제너레이션",
  description:
    "론데이터의 서비스: Google Demand Gen, 디지털 광고 운영, 리드 제너레이션, 캠페인 분석.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    index: "01",
    title: "Google Demand Gen",
    description: "Google Demand Gen을 활용한 디지털 광고 캠페인 운영.",
    points: [
      "캠페인 목표 및 예산 구조 설계",
      "크리에이티브·타겟팅 세팅",
      "집행 후 성과 모니터링 및 조정",
    ],
    href: "/google-demand-gen",
  },
  {
    index: "02",
    title: "디지털 광고 운영",
    description: "광고 목적과 타깃에 맞춰 캠페인 구조를 설계하고 운영.",
    points: [
      "업종과 목표에 맞춘 캠페인 구조 설계",
      "채널·예산 배분 검토",
      "운영 중 타겟팅·소재 조정",
    ],
    href: "/google-demand-gen",
  },
  {
    index: "03",
    title: "리드 제너레이션",
    description: "잠재고객 확보를 목표로 하는 B2B 리드 제너레이션 캠페인.",
    points: [
      "광고 유입 → 잠재고객 확보 흐름 설계",
      "비즈니스 목적에 맞춘 캠페인 구조 상담",
      "리드 확보 이후 운영 방향 논의",
    ],
    href: "/lead-generation",
  },
  {
    index: "04",
    title: "캠페인 분석",
    description: "광고 데이터를 기반으로 캠페인 운영 방향을 점검하고 개선.",
    points: [
      "캠페인 운영 데이터 리뷰",
      "구조 및 방향 개선 논의",
      "다음 캠페인 운영 방안 상담",
    ],
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="SERVICES"
        title="대출·금융 분야 광고 실행과 리드 제너레이션"
        lead="론데이터는 Google Demand Gen을 중심으로 한 디지털 광고 운영과, 광고를 통해 확보한 잠재고객의 리드 제너레이션을 함께 제공하는 B2B 마케팅 서비스입니다."
      />

      <section>
        <div className="container-content grid gap-px border-y hairline bg-line pb-16 md:grid-cols-2">
          {SERVICES.map((service) => (
            <div key={service.title} className="flex flex-col bg-surface p-7">
              <span className="font-mono text-xs text-accent">
                {service.index}
              </span>
              <h2 className="mt-2 text-base font-semibold text-ink">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-ink/80">
                    <span className="text-accent">—</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-6 text-sm text-accent underline underline-offset-4"
              >
                자세히 보기 →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="어떤 서비스가 필요한지 확인해 드립니다"
        description="현재 진행 중인 광고 운영 현황과 목표를 알려주시면 적합한 서비스 범위를 안내드립니다."
      />
    </>
  );
}
