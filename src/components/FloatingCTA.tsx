'use client'

import Link from 'next/link'
import { PieChart } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function FloatingCTA() {
  const pathname = usePathname()

  // Hide the floating CTA if the user is already on the risk-profiler page
  if (pathname === '/resources/risk-profiler') {
    return null;
  }

  return (
    <Link 
      href="/resources/risk-profiler" 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6 md:bottom-8 z-[100] group flex items-center"
      aria-label="Free Portfolio Analysis"
    >
      <div className="flex items-center bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full shadow-[0_4px_20px_rgba(225,29,72,0.3)] hover:shadow-[0_8px_25px_rgba(225,29,72,0.5)] hover:-translate-y-1 transition-all duration-300 ease-out h-12 w-auto pr-6">
        <div className="flex items-center justify-center w-12 h-12 shrink-0">
          <PieChart className="w-5 h-5 animate-pulse" />
        </div>
        <span className="text-sm font-bold whitespace-nowrap">
          Free Portfolio Analysis
        </span>
      </div>
    </Link>
  )
}
