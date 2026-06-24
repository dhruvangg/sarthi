'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Menu, X, PhoneCall, ChevronDown } from "lucide-react"

interface HeaderProps {
  showBackToHome?: boolean;
}

export function Header({ showBackToHome = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" }
  ]

  const resourceSubLinks = [
    { name: "SIP Calculator", href: "/resources/sip" },
    { name: "Goal Planner", href: "/resources/goal-planner" },
    { name: "Risk Profiler", href: "/resources/risk-profiler" },
    { name: "Fund Screener", href: "/resources/fund-screener" }
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const isResourcesActive = () => {
    return pathname.startsWith("/resources")
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm flex flex-col">

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png?v=2"
              alt="Sarthi SIP"
              width={160}
              height={160}
              className="h-16 w-auto md:h-20 object-contain"
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {showBackToHome ? (
              <Link href="/#tools">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Tools
                </Button>
              </Link>
            ) : (
              <>
                <nav className="flex items-center space-x-8">
                  {/* Home & About links */}
                  <Link
                    href="/"
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                      isActive("/")
                        ? "text-red-600 font-bold border-b-2 border-red-500 pb-1"
                        : "text-slate-600 hover:text-red-600"
                    }`}
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                      isActive("/about")
                        ? "text-red-600 font-bold border-b-2 border-red-500 pb-1"
                        : "text-slate-600 hover:text-red-600"
                    }`}
                  >
                    About Us
                  </Link>

                  {/* Resources Hover Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setResourcesDropdownOpen(true)}
                    onMouseLeave={() => setResourcesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className={`text-sm font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1 pb-1 outline-none ${
                        isResourcesActive()
                          ? "text-red-600 font-bold border-b-2 border-red-500"
                          : "text-slate-600 hover:text-red-600"
                      }`}
                    >
                      <span>Resources</span>
                      <ChevronDown className={`h-4.5 w-4.5 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {resourcesDropdownOpen && (
                      <div className="absolute left-0 mt-0 pt-2 w-56 rounded-xl bg-white border border-slate-100 shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        {resourceSubLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                              pathname === subLink.href
                                ? "bg-red-50 text-red-600 font-semibold"
                                : "text-slate-700 hover:bg-slate-50 hover:text-red-600"
                            }`}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                      isActive("/contact")
                        ? "text-red-600 font-bold border-b-2 border-red-500 pb-1"
                        : "text-slate-600 hover:text-red-600"
                    }`}
                  >
                    Contact Us
                  </Link>
                </nav>
                
                <Link href="/contact">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md shadow-red-600/10">
                    Let&apos;s Connect
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Action Trigger Button */}
          <div className="flex md:hidden items-center gap-4">
            {showBackToHome ? (
              <Link href="/#tools">
                <Button variant="outline" size="sm" className="border-red-600 text-red-600 text-xs py-1 px-2.5 h-8">
                  <ArrowLeft className="mr-1 h-3.5 w-3.5" />
                  Back
                </Button>
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 p-2 focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {!showBackToHome && mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg animate-in fade-in slide-in-from-top-4 duration-250 absolute w-full left-0 top-full max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold transition-colors duration-200 py-1.5 ${
                  isActive("/") && pathname === "/"
                    ? "text-red-600 pl-2 border-l-4 border-red-500"
                    : "text-slate-700 hover:text-red-600"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold transition-colors duration-200 py-1.5 ${
                  isActive("/about")
                    ? "text-red-600 pl-2 border-l-4 border-red-500"
                    : "text-slate-700 hover:text-red-600"
                }`}
              >
                About Us
              </Link>

              {/* Mobile Resources Sub-Menu Accordion */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className={`text-base font-semibold w-full text-left py-1.5 flex items-center justify-between transition-colors ${
                    isResourcesActive() ? "text-red-600" : "text-slate-700"
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileResourcesOpen && (
                  <div className="pl-4 border-l border-slate-150 space-y-2.5 py-1.5 animate-in slide-in-from-top-2 duration-150">
                    {resourceSubLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-sm font-medium transition-colors ${
                          pathname === subLink.href ? "text-red-600" : "text-slate-600 hover:text-red-600"
                        }`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold transition-colors duration-200 py-1.5 ${
                  isActive("/contact")
                    ? "text-red-600 pl-2 border-l-4 border-red-500"
                    : "text-slate-700 hover:text-red-600"
                }`}
              >
                Contact Us
              </Link>
            </nav>
            
            <div className="h-px bg-slate-100" />
            
            <div className="flex flex-col gap-3">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-11">
                  Let&apos;s Connect
                </Button>
              </Link>
              <a href="tel:+918000383222" className="flex items-center justify-center gap-2 text-slate-700 hover:text-red-600 font-semibold py-2.5 text-sm">
                <PhoneCall className="h-4 w-4" />
                <span>Call Advisor (Sheetal)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
