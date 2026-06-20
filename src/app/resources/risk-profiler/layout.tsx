import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Financial Risk Profiler & Asset Allocator | Sarthi SIP",
  description: "Assess your investment risk tolerance with Sarthi SIP's 12-question Risk Profiler. Get a recommended asset allocation mix and download your custom risk assessment report.",
  alternates: {
    canonical: "https://sarthisip.com/resources/risk-profiler",
  },
  openGraph: {
    title: "Financial Risk Profiler & Asset Allocator | Sarthi SIP",
    description: "Determine your risk category, asset allocation mix, and download a custom profile report.",
    url: "https://sarthisip.com/resources/risk-profiler",
    siteName: "Sarthi SIP",
    type: "website",
  }
};

export default function RiskProfilerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
