import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Goal Planner & Calculator | Sarthi SIP",
  description: "Plan your long-term goals like retirement, child education, or a dream home. Calculate the future value of your savings adjusted for inflation and determine the monthly investment required.",
  alternates: {
    canonical: "https://sarthisip.com/resources/goal-planner",
  },
  openGraph: {
    title: "Goal Planner & Calculator | Sarthi SIP",
    description: "Determine inflation-adjusted financial targets and monthly SIP investment plans with Sarthi SIP's Goal Planner.",
    url: "https://sarthisip.com/resources/goal-planner",
    siteName: "Sarthi SIP",
    type: "website",
  }
};

export default function GoalPlannerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
