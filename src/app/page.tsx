import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp, Shield, Calculator, Users, Award, Mail,
  MapPin, CheckCircle, Star, ArrowRight, PieChart,
  Home, Target, BarChart3, Clock
} from "lucide-react";
import Link from "next/link"
import { Metadata } from "next"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import homepageContent from "@/data/homepage-content.json"

const IconMap = {
  Calculator,
  Target,
  BarChart3,
  PieChart,
  Home,
  Shield
};

export const metadata: Metadata = {
  title: "Sarthi SIP | Mutual Funds, Insurance & Property Valuation",
  description: "Invest in systematic plans and build wealth with Sarthi SIP (formerly SS Sarthi Financial Services). Expert mutual fund advisory, LIC insurance policies, tax planning, and government-approved property valuation in Ahmedabad.",
  alternates: {
    canonical: "https://sarthisip.com",
  },
  openGraph: {
    title: "Sarthi SIP | Mutual Funds, Insurance & Property Valuation",
    description: "Build robust portfolios and secure family future with Sarthi SIP. Mutual funds, tax planning, and property valuation advisor in Nikol, Ahmedabad.",
    url: "https://sarthisip.com",
    siteName: "Sarthi SIP",
    type: "website",
  }
}

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sarthi SIP",
    "url": "https://sarthisip.com",
    "description": "Expert advisory across Mutual Funds, Bonds, LIC, Taxation, General Insurance, and Govt-approved Property Valuation.",
    "publisher": {
      "@type": "Organization",
      "name": "Sarthi SIP",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sarthisip.com/logo.png"
      }
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
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-red-50/80 via-white to-rose-50/50 py-16 lg:py-24 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.03),transparent_50%)]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Badge className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
                Your sarthi in your financial journey
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
                Your Trusted Guide in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                  Mutual Funds, Insurance & Valuation
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                Expert advisory across Mutual Funds, Bonds, LIC, Taxation, General Insurance, and Govt-approved Property Valuation. Empowering investors with transparent, evidence-based wealth management.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/resources/risk-profiler">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg shadow-red-600/15 h-12 px-6">
                    Free Portfolio Review
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#tools">
                  <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 h-12 px-6">
                    Try Financial Tools
                  </Button>
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 max-w-lg">
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-slate-900">500+</div>
                  <div className="text-xs md:text-sm text-slate-500 font-medium">Wealthy Families</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-red-600">360°</div>
                  <div className="text-xs md:text-sm text-slate-500 font-medium">Wealth Management</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-emerald-600">15+</div>
                  <div className="text-xs md:text-sm text-slate-500 font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Hero Right Form */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-red-500 to-rose-500 rounded-2xl blur-lg opacity-10" />
              <div className="relative bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-2xl shadow-slate-100">
                <ContactForm title="Schedule Appointment" buttonText="Schedule Appointment/Consultation" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Us Brief Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text details */}
            <div className="space-y-6">
              <Badge className="bg-red-50 text-red-700 border-none font-semibold px-3 py-1 text-xs">
                About Our Firm
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-extrabold">
                Sarthi SIP Financial Services
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                SS Sarthi signifies a dedicated guide or charioteer. We operate with strict compliance guidelines, supporting over 500+ wealthy families with goal planning and asset management advisory solutions.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We believe in commission transparency, and fee disclosures. Under Sheetal Suthar and Siddharth Pandya, our advisory team is built to prioritize client goals above all else.
              </p>
              <div className="flex gap-4 pt-2">
                <Link href="/about">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 font-semibold">
                    Read Our Full Legacy Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Icons Cards block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-slate-100 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Grow Wealth</h4>
                  <p className="text-xs text-slate-500">Maximize compounding growth with rolling return index models.</p>
                </CardContent>
              </Card>

              <Card className="border-slate-100 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Protect Assets</h4>
                  <p className="text-xs text-slate-500">Fiduciary planning to shield your dependents and capital reserves.</p>
                </CardContent>
              </Card>

              <Card className="border-slate-100 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Precise Calculations</h4>
                  <p className="text-xs text-slate-500">Calculate target corpora, SIP interest rates, and tax exemptions.</p>
                </CardContent>
              </Card>

              <Card className="border-slate-100 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Fiduciary Trust</h4>
                  <p className="text-xs text-slate-500">Always recommending what fits you, not what pays commissions.</p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section with custom tabs layout */}
      <section id="services" className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="container mx-auto px-4 md:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            {/* <Badge className="bg-red-50 text-red-700 border-red-100 font-semibold">
              Our Services
            </Badge> */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-extrabold">
              Our Services
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              We align our capabilities across three main pillars: investment growth, risk shield coverage, and legal property valuation.
            </p>
          </div>

          <Tabs defaultValue="funds" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto p-1.5 bg-slate-200/50 rounded-xl mb-12 gap-1.5">
              <TabsTrigger value="funds" className="py-3 rounded-lg text-sm font-semibold transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white">Mutual Funds</TabsTrigger>
              <TabsTrigger value="insurance" className="py-3 rounded-lg text-sm font-semibold transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white">LIC & Insurance</TabsTrigger>
              <TabsTrigger value="taxation" className="py-3 rounded-lg text-sm font-semibold transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white">Tax & ELSS</TabsTrigger>
              <TabsTrigger value="valuation" className="py-3 rounded-lg text-sm font-semibold transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white">Property Valuation</TabsTrigger>
            </TabsList>

            {/* Tab 1: Mutual Funds */}
            <TabsContent value="funds" className="focus-visible:outline-none">
              <Card className="bg-white border-slate-200/80 shadow-md">
                <CardContent className="p-8 md:p-10 grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">Systematic Mutual Fund Advisory</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Mutual Funds offer a flexible way to generate wealth over time. We help choose and manage equity, debt, and hybrid funds that best fit your timelines and risk capacity.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-600 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">SIP vs Lumpsum optimization plans.</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-600 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">Performance benchmarking against major indexes.</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-600 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">Regular re-balancing and reviews of lagging funds.</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm">Key Products Advised:</h4>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">Large Cap Funds</Badge>
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">Mid & Small Cap Funds</Badge>
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">Flexi Cap / Multi Cap</Badge>
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">Hybrid / Balanced Advantage</Badge>
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">Liquid & Overnight Funds</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: LIC & Insurance */}
            <TabsContent value="insurance" className="focus-visible:outline-none">
              <Card className="bg-white border-slate-200/80 shadow-md">
                <CardContent className="p-8 md:p-10 grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">Life & General Insurance Audits</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We assist for Life Insurance and we provide comprehensive plans LIC and Tata AIG Life Insurance
                    </p>
                    {/* <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-600 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">Fiduciary comparison of cover features.</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-600 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">Claim settlement assistance and documentation support.</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-600 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">Health indemnity cover audits for families.</span>
                      </div>
                    </div> */}
                  </div>
                  <div className="space-y-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm">Insurance Pillars:</h4>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">LIC Endowment Plans</Badge>
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">Term Life Covers</Badge>
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">Indemnity Health Insurance</Badge>
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">Critical Illness Riders</Badge>
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">Motor & Asset Insurance</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Tax & ELSS */}
            <TabsContent value="taxation" className="focus-visible:outline-none">
              <Card className="bg-white border-slate-200/80 shadow-md">
                <CardContent className="p-8 md:p-10 grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">Tax Exemption Planning</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Legally minimize tax liabilities by utilizing lock-in mutual funds, retirement options, and insurance premium deductions under current laws.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-600 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">Section 80C ELSS planning (3-year lock-in only).</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-600 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">Capital gains tax reduction advisory.</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-600 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">Corporate employee tax-saving audits.</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm">Tax Saving Paths:</h4>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">ELSS Mutual Funds</Badge>
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">National Pension System (NPS)</Badge>
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">80D Health Premium Deductions</Badge>
                      <Badge variant="outline" className="py-1.5 border-slate-200 font-medium text-slate-700">80C Life Insurance Covers</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 4: Property Valuation */}
            <TabsContent value="valuation" className="focus-visible:outline-none">
              <Card className="bg-white border-slate-200/80 shadow-md">
                <CardContent className="p-8 md:p-10 grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">Property Valuation</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Our property valuation team is lead by Mr. Omprakash Pandya (Govt. Approved and Registered Agri. Land Valuer)
                    </p>
                    <div className="space-y-4">
                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-800 text-base">We provide Valuation Reports of:</h4>
                        <ul className="space-y-2 text-slate-600 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                            <span>Agricultural and N.A. Land</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                            <span>Residential building/bungalow</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                            <span>Industrial Sheds, Plant and Machinery, Jewelry</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </section>

      {/* Tools & Resources Grid */}
      <section id="tools" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            {/* <Badge className="bg-red-50 text-red-700 border-red-100 font-semibold">
              Interactive Tools
            </Badge> */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-extrabold">
              Try Free Financial Resources
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Plan your systematic savings, evaluate retirement sums, or profile your risk tolerance instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {homepageContent.financialResources.map((tool, idx) => {
              const IconComponent = IconMap[tool.iconName as keyof typeof IconMap] || Calculator;
              return (
                <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-100">
                  <CardHeader>
                    <IconComponent className="h-10 w-10 text-red-600 mb-4" />
                    <CardTitle className="text-lg font-bold text-slate-900">{tool.title}</CardTitle>
                    <CardDescription className="text-xs">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={tool.href}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md shadow-red-600/10">
                        {tool.buttonText}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="container mx-auto px-4 md:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <Badge className="bg-red-50 text-red-700 border-none font-semibold">
              Client Feedback
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-extrabold">
              What Our Clients Say
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              We manage portfolios for families across India with commitment to transparent, long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {homepageContent.testimonials.map((t, idx) => (
              <Card key={idx} className="p-6 md:p-8 bg-white border-slate-200/80 shadow-sm relative hover:border-red-100 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-1 mb-4 text-red-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-current text-red-600" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  &quot;{t.text}&quot;
                </p>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.subtitle}</div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <Badge className="bg-red-50 text-red-700 border-none font-semibold">
              Step-By-Step Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-extrabold">
              Our Systematic Approach
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              We guide you from initial discovery to active compound monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-full flex items-center justify-center mx-auto text-red-600 font-extrabold text-lg">
                1
              </div>
              <h3 className="font-bold text-slate-900">Discovery Call</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">We schedule a phone call to list your current investments, age profile, and wealth goals.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-full flex items-center justify-center mx-auto text-red-600 font-extrabold text-lg">
                2
              </div>
              <h3 className="font-bold text-slate-900">Custom Allocation</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">We structure a dedicated plan including Mutual Fund selection, ELSS caps, and life covers.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-full flex items-center justify-center mx-auto text-red-600 font-extrabold text-lg">
                3
              </div>
              <h3 className="font-bold text-slate-900">Execution</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Setting up systematic investment plans (SIP), filing covers, or issuing valuation certificates.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-full flex items-center justify-center mx-auto text-red-600 font-extrabold text-lg">
                4
              </div>
              <h3 className="font-bold text-slate-900">Periodic Review</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Annual portfolio re-balancing checks to review lagging funds and capture index shifts.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Conversion Banner Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-rose-50 text-slate-900 py-16 relative overflow-hidden border-t border-red-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.04),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center space-y-6 max-w-3xl">
          <Badge className="bg-red-100 text-red-700 border-red-200/80 px-3 py-1 text-xs font-semibold">
            Start Your Financial Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Take Control of Your Wealth Protection and Growth
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Contact Sheetal Suthar or Siddharth Pandya directly. Let us schedule a free review session of your current mutual funds or value your property.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 h-12 shadow-lg shadow-red-600/15">
                Connect with us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918000383222">
              <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 h-12">
                Call us Now
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto pt-8 text-xs text-slate-500 font-medium">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4.5 w-4.5 text-red-600 shrink-0" />
              <span>Office: Nikol, Ahmedabad</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-4.5 w-4.5 text-red-600 shrink-0" />
              <span>Response time: Under 24 Hrs</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
