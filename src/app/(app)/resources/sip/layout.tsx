import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SIP Calculator - Calculate Mutual Fund Returns',
  description: 'Calculate the future value of your Systematic Investment Plan (SIP) investments and estimate your mutual fund returns.',
  keywords: ['SIP Calculator', 'Mutual Fund Calculator', 'Investment Return Calculator', 'Systematic Investment Plan'],
};

export default function SIPCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
