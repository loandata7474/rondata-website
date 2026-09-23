import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import InfoNote from "@/components/InfoNote";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "론데이터의 개인정보처리방침 페이지입니다.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const SECTIONS = [
  "수집하는 개인정보 항목",
  "개인정보의 수집 및 이용 목적",
  "개인정보의 보유 및 이용 기간",
  "개인정보의 제3자 제공에 관한 사항",
  "개인정보 처리 위탁에 관한 사항",
  "정보주체의 권리와 행사 방법",
  "개인정보 보호책임자 안내",
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="PRIVACY"
        title="개인정보처리방침"
        lead="이 페이지는 실제 개인정보 처리 방식과 법률 검토 결과가 확정된 이후 작성될 예정입니다. 현재는 목차 구조만 마련되어 있습니다."
      />

      <section className="border-t hairline">
        <div className="container-content py-14 md:py-16">
          <div className="max-w-2xl">
            <InfoNote>
              아래 항목은 개인정보처리방침에 일반적으로 포함되는 목차
              구조이며, 실제 내용은 회사의 실제 운영 방식과 법률 자문을
              바탕으로 별도로 작성되어야 합니다. 이 페이지의 내용을
              법률적 준수를 보장하는 것으로 해석하지 마세요.
            </InfoNote>
          </div>

          <ol className="mt-8 max-w-2xl divide-y hairline border-y hairline">
            {SECTIONS.map((section, i) => (
              <li key={section} className="flex gap-4 py-4">
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-ink">{section} — 작성 예정</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
