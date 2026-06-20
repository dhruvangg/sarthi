import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ShieldCheck, Award, Target, Users, BookOpen,
  CheckCircle, ArrowRight
} from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Sarthi SIP - Legacy of Trust & Financial Planning",
  description: "Learn about the story, values, and expert advisors at Sarthi SIP. Empowering over 300 families with systematic wealth creation and property valuation under Sheetal Suthar and Siddharth Pandya.",
  alternates: {
    canonical: "https://sarthisip.com/about",
  },
  openGraph: {
    title: "About Us | Sarthi SIP",
    description: "Discover the Sarthi SIP mission, vision, and advisory team guiding you to long-term financial freedom.",
    url: "https://sarthisip.com/about",
    siteName: "Sarthi SIP",
    type: "website",
  }
}

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Sarthi SIP",
    "description": "Learn about the mission, values, and founders of Sarthi SIP, an investment advisory and property valuation firm in Ahmedabad.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Sarthi SIP",
      "url": "https://sarthisip.com",
      "logo": "https://sarthisip.com/logo.png",
      "founder": [
        {
          "@type": "Person",
          "name": "Sheetal Suthar",
          "jobTitle": "Founder & Financial Planner"
        },
        {
          "@type": "Person",
          "name": "Siddharth Pandya",
          "jobTitle": "Co-Founder & Property Advisory Lead"
        }
      ],
      "knowsAbout": ["Mutual Funds", "Systematic Investment Plans", "Property Valuation", "Tax Planning", "Insurance Planning"]
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col text-slate-800">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50/80 via-white to-rose-50/50 py-16 lg:py-20 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl space-y-6">
          <Badge className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
            Our Legacy of Trust
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Guiding You Towards{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
              Financial Freedom
            </span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            At Sarthi SIP, we act as your financial charioteer, steering your investments with precision, transparency, and deep market expertise.
          </p>

          {/* Floating Stats Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 max-w-3xl mx-auto">
            <Card className="border-slate-100 shadow-lg shadow-slate-100/50 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-extrabold text-slate-900 mb-1">300+</div>
                <div className="text-sm font-bold text-red-600 mb-1">Satisfied Clients</div>
                <p className="text-xs text-slate-500">Families and individuals building generational wealth</p>
              </CardContent>
            </Card>

            <Card className="border-slate-100 shadow-lg shadow-slate-100/50 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-extrabold text-slate-900 mb-1">₹50Cr+</div>
                <div className="text-sm font-bold text-red-600 mb-1">Assets Under Advisory</div>
                <p className="text-xs text-slate-500">Invested across diverse, robust asset classes</p>
              </CardContent>
            </Card>

            <Card className="border-slate-100 shadow-lg shadow-slate-100/50 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-extrabold text-slate-900 mb-1">15+</div>
                <div className="text-sm font-bold text-red-600 mb-1">Years Experience</div>
                <p className="text-xs text-slate-500">Navigating changing market cycles with success</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story & Mission/Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <Badge className="bg-red-50 text-red-750 border-none font-semibold">Our Journey</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-extrabold">
                Our Story: The Trusted Financial Guide
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The name &quot;**Sarthi**&quot; signifies a guide or charioteer. Just as a sarthi steers the chariot safely through challenges, we guide our clients through the complex world of finance, ensuring their investments align with their ultimate life goals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Established with a vision to make professional financial advice accessible, transparent, and commission-unbiased, Sarthi SIP has grown to manage portfolios for over 300 families. We do not believe in one-size-fits-all products; instead, we analyze, validate, and strategize each portfolio with mathematical rigor.
              </p>

              {/* Credentials Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">AMFI Registered</h5>
                    <p className="text-xs text-slate-500">Verified distributor credentials</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Property Valuers</h5>
                    <p className="text-xs text-slate-500">Govt approved valuation consultants</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Tax Advisory Specialists</h5>
                    <p className="text-xs text-slate-500">Optimizing tax liabilities seamlessly</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">LIC & Insurance Experts</h5>
                    <p className="text-xs text-slate-500">Comprehensive risk cover strategies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-2xl p-8 space-y-6 shadow-sm">
                <div className="space-y-2">
                  <Badge className="bg-red-600 text-white border-none font-semibold text-[10px] uppercase">Our Mission</Badge>
                  <h4 className="text-lg font-bold text-slate-900">Empowering Wealth & Protection</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To empower individuals and businesses to build sustainable wealth and secure protection policies using data-backed decisions, absolute transparency, and customized financial strategies.
                  </p>
                </div>

                <div className="h-px bg-red-200/50" />

                <div className="space-y-2">
                  <Badge className="bg-emerald-600/90 text-white border-none font-semibold text-[10px] uppercase">Our Vision</Badge>
                  <h4 className="text-lg font-bold text-slate-900">Leading with Fiduciary Trust</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To be recognized as India&apos;s most reliable, customer-centric financial advisory firm, famous for our values, ethical approach, and standard of wealth protection and growth.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Advisors Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="container mx-auto px-4 md:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <Badge className="bg-red-50 text-red-700 border-red-100 font-semibold">Expert Advisors</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-extrabold">
              Meet Our Advisors
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Our leadership is committed to transparency, compliance, and custom solutions for your wealth journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Adviser 1 */}
            <Card className="bg-white border-slate-200/80 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-500 to-rose-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
                    SS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Sheetal Suthar</h3>
                    <p className="text-xs text-red-600 font-semibold uppercase tracking-wider">Founder & Financial Planner</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-slate-600 text-sm border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-red-600 shrink-0" />
                    <span>MBA in Finance & Certified Mutual Fund Specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-red-600 shrink-0" />
                    <span>15+ Years of Asset Management Experience</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed italic border-l-2 border-red-500 pl-3">
                  &quot;Our commitment is to ensure clients understand where and why they invest, taking out the confusion from money management.&quot;
                </p>
              </CardContent>
            </Card>

            {/* Adviser 2 */}
            <Card className="bg-white border-slate-200/80 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
                    SP
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Siddharth Pandya</h3>
                    <p className="text-xs text-red-600 font-semibold uppercase tracking-wider">Co-Founder & Property Advisory Lead</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-slate-600 text-sm border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-red-600 shrink-0" />
                    <span>Government Approved Valuer & B.E. Civil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-red-600 shrink-0" />
                    <span>15+ Years in Property Valuation & Real Estate Advisory</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed italic border-l-2 border-emerald-500 pl-3">
                  &quot;Property is a major financial decision. We offer legal, accurate, and realistic valuation to guard your hard-earned savings.&quot;
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <Badge className="bg-red-50 text-red-700 border-none font-semibold">Guiding Principles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-extrabold">
              Our Core Values
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Every financial calculation, valuation report, and advisor session is governed by these core beliefs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Value 1 */}
            <Card className="border-slate-100 shadow-sm hover:border-red-100 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900">Integrity First</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We believe in fee clarity and honest representation. No hidden markups or commission-pushing.
                </p>
              </CardContent>
            </Card>

            {/* Value 2 */}
            <Card className="border-slate-100 shadow-sm hover:border-red-100 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900">Fiduciary Trust</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We operate as your fiduciary. Your financial growth and protection are our primary responsibilities.
                </p>
              </CardContent>
            </Card>

            {/* Value 3 */}
            <Card className="border-slate-100 shadow-sm hover:border-red-100 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900">Analytical Precision</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We use screening algorithms, rolling returns, and strict civil metrics to advise, not guesses.
                </p>
              </CardContent>
            </Card>

            {/* Value 4 */}
            <Card className="border-slate-100 shadow-sm hover:border-red-100 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900">Long-term Partnership</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We walk alongside you through marriage, home buying, retirement, and everything in between.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* CTA section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-rose-50 text-slate-900 py-16 border-t border-red-100">
        <div className="container mx-auto px-4 md:px-8 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight">Let Us Be Your Financial Charioteer</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Schedule a free initial assessment with Sheetal Suthar or Siddharth Pandya to look at your current investments and properties.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold h-11 px-8 shadow-md shadow-red-600/10">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
