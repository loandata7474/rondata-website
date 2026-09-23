import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.companyNameKo} | 대출·금융 광고 및 리드 제너레이션`,
    template: `%s | ${siteConfig.companyNameKo}`,
  },
  description:
    "론데이터는 대출·금융 분야의 Google Demand Gen 광고 운영과 리드 제너레이션을 전문으로 하는 B2B 마케팅 회사입니다.",
  openGraph: {
    type: "website",
    locale: siteConfig.defaultLocale,
    siteName: siteConfig.companyNameKo,
    url: siteConfig.siteUrl,
    title: `${siteConfig.companyNameKo} | 대출·금융 광고 및 리드 제너레이션`,
    description:
      "Google Demand Gen 광고 운영과 리드 제너레이션을 전문으로 하는 B2B 마케팅 회사, 론데이터입니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.companyNameKo} | 대출·금융 광고 및 리드 제너레이션`,
    description:
      "Google Demand Gen 광고 운영과 리드 제너레이션을 전문으로 하는 B2B 마케팅 회사, 론데이터입니다.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyNameKo,
    alternateName: siteConfig.companyNameEn,
    url: siteConfig.siteUrl,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.companyNameKo,
    url: siteConfig.siteUrl,
  };

  return (
    <html lang="ko">
      <body className="has-mobile-cta font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
