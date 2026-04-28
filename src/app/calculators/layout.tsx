import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Calculators & Tools',
  description: 'Make informed financial decisions with our comprehensive suite of calculators and planning tools including SIP, Goal Planner, and more.',
};

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
