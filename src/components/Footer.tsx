import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white border border-slate-100 rounded-lg p-2 max-w-[180px] shadow-sm">
              <Image
                src="/logo.png?v=2"
                alt="Sarthi SIP"
                width={150}
                height={150}
                className="h-14 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your trusted partner in building wealth and securing futures. Providing strategic insights and evidence-based advisory across India.
            </p>
            <div className="flex items-center space-x-2 text-xs text-red-700 bg-red-50 border border-red-100 rounded-md p-2 max-w-[240px]">
              <ShieldCheck className="h-4 w-4 shrink-0 text-red-600" />
              <span className="font-medium">AMFI Registered Mutual Fund Distributor</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold text-base mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-500 hover:text-red-600 transition-colors font-medium">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-500 hover:text-red-600 transition-colors font-medium">About Us</Link>
              </li>
              <li>
                <Link href="/resources/sip" className="text-slate-500 hover:text-red-600 transition-colors font-medium">SIP Calculator</Link>
              </li>
              <li>
                <Link href="/resources/goal-planner" className="text-slate-500 hover:text-red-600 transition-colors font-medium">Goal Planner</Link>
              </li>
              <li>
                <Link href="/resources/risk-profiler" className="text-slate-500 hover:text-red-600 transition-colors font-medium">Risk Profiler</Link>
              </li>
              <li>
                <Link href="/resources/fund-screener" className="text-slate-500 hover:text-red-600 transition-colors font-medium">Fund Screener</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-500 hover:text-red-600 transition-colors font-medium">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-slate-900 font-bold text-base mb-6 tracking-wide">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#services" className="text-slate-500 hover:text-red-600 transition-colors font-medium">Mutual Funds Advisory</Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-500 hover:text-red-600 transition-colors font-medium">LIC & Insurance Planning</Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-500 hover:text-red-600 transition-colors font-medium">Tax & ELSS Planning</Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-500 hover:text-red-600 transition-colors font-medium">Property Valuation</Link>
              </li>
            </ul>
          </div>

          {/* Office Address & Info */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-bold text-base mb-6 tracking-wide flex items-center gap-2">
              Office Details
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-600">
                  412, The Edge, Opp Malabar Royal Bungalow,<br />
                  Bhakti Circle Road, Nikol,<br />
                  Ahmedabad - 380049
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+918000383222" className="block text-slate-600 hover:text-red-600 transition-colors font-medium">Sheetal: +91 80003 83222</a>
                  <a href="tel:+918141316000" className="block text-slate-600 hover:text-red-600 transition-colors font-medium">Siddharth: +91 81413 16000</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600 shrink-0" />
                <a href="mailto:hello@sarthisip.com" className="text-slate-600 hover:text-red-600 transition-colors font-medium">
                  hello@sarthisip.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="border-t border-slate-200 pt-8 mt-8 text-xs text-slate-400 space-y-4">
          <p className="leading-relaxed">
            <strong>Regulatory Disclaimer:</strong> Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not indicative of future results. We offer financial distribution and advisory support services. Registration granted by AMFI/SEBI in no way guarantees the performance of the schemes or serves as an assurance of returns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Sarthi SIP. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 font-medium text-slate-600">
              <span>Together Forever</span>
              <Heart className="h-3.5 w-3.5 text-red-600 fill-current animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
