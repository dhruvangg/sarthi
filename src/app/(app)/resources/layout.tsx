import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Financial Resources & Calculators | Sarthi SIP",
  description: "Plan your wealth goals with Sarthi SIP's comprehensive suite of free financial resources. Use our interactive SIP calculators, goal planners, risk profilers, and mutual fund screeners.",
  alternates: {
    canonical: "https://sarthisip.com/resources",
  },
  openGraph: {
    title: "Financial Resources & Calculators | Sarthi SIP",
    description: "Plan your investments and calculate compound interest with Sarthi SIP's interactive planners.",
    url: "https://sarthisip.com/resources",
    siteName: "Sarthi SIP",
    type: "website",
  }
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
