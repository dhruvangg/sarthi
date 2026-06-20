import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Mutual Fund Screener & NAV Tracker | Sarthi SIP",
  description: "Track latest Net Asset Value (NAV) details of mutual funds directly from AMFI. Filter, search, and screen funds by asset type, category, or fund house with Sarthi SIP.",
  alternates: {
    canonical: "https://sarthisip.com/resources/fund-screener",
  },
  openGraph: {
    title: "Live Mutual Fund Screener & NAV Tracker | Sarthi SIP",
    description: "Search and filter mutual funds, checking latest daily NAV rates directly from AMFI with Sarthi SIP.",
    url: "https://sarthisip.com/resources/fund-screener",
    siteName: "Sarthi SIP",
    type: "website",
  }
};

export default function FundScreenerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
