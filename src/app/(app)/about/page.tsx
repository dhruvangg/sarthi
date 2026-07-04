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

import aboutpageContentData from "@/data/aboutpage-content.json"
import { getPayload } from 'payload'
import config from '@payload-config'

const IconMap = {
  ShieldCheck,
  Award,
  Target,
  Users,
  BookOpen
};

export const metadata: Metadata = {
  title: "About Us | Sarthi SIP - Legacy of Trust & Financial Planning",
  description: "Learn about the story, values, and expert advisors at Sarthi SIP. Empowering over 500 families with systematic wealth creation and property valuation under our expert advisory team.",
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

export default async function AboutPage() {
  const payload = await getPayload({ config });
  
  let aboutContent: any = aboutpageContentData;
  try {
    const globalData = await payload.findGlobal({ slug: 'about-page' });
    if (globalData && Object.keys(globalData).length > 0 && globalData.hero?.heading) {
      aboutContent = globalData;
    }
  } catch (err) {
    console.log("Using fallback JSON data for AboutPage.");
  }

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
            {aboutContent.hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            {aboutContent.hero.heading}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
              {aboutContent.hero.highlightedText}
            </span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {aboutContent.hero.description}
          </p>

          {/* Floating Stats Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 max-w-3xl mx-auto">
            {aboutContent.hero.stats.map((stat: any, idx: number) => (
              <Card key={idx} className="border-slate-100 shadow-lg shadow-slate-100/50 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-red-600 mb-1">{stat.label}</div>
                  <p className="text-xs text-slate-500">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Mission/Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <Badge className="bg-red-50 text-red-750 border-none font-semibold">{aboutContent.story.badge}</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-extrabold">
                {aboutContent.story.heading}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {aboutContent.story.description1}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {aboutContent.story.description2}
              </p>

              {/* Credentials Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {aboutContent.story.credentials.map((cred: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{cred.title}</h5>
                      <p className="text-xs text-slate-500">{cred.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-2xl p-8 space-y-6 shadow-sm">
                <div className="space-y-2">
                  <Badge className="bg-red-600 text-white border-none font-semibold text-[10px] uppercase">{aboutContent.missionVision.missionBadge}</Badge>
                  <h4 className="text-lg font-bold text-slate-900">{aboutContent.missionVision.missionTitle}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {aboutContent.missionVision.missionDescription}
                  </p>
                </div>

                <div className="h-px bg-red-200/50" />

                <div className="space-y-2">
                  <Badge className="bg-emerald-600/90 text-white border-none font-semibold text-[10px] uppercase">{aboutContent.missionVision.visionBadge}</Badge>
                  <h4 className="text-lg font-bold text-slate-900">{aboutContent.missionVision.visionTitle}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {aboutContent.missionVision.visionDescription}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <Badge className="bg-red-50 text-red-700 border-none font-semibold">{aboutContent.coreValues.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-extrabold">
              {aboutContent.coreValues.heading}
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              {aboutContent.coreValues.description}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {aboutContent.coreValues.items.map((val: any, idx: number) => {
              const IconComponent = IconMap[val.iconName as keyof typeof IconMap] || Award;
              return (
                <Card key={idx} className="border-slate-100 shadow-sm hover:border-red-100 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-slate-900">{val.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {val.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-rose-50 text-slate-900 py-16 border-t border-red-100">
        <div className="container mx-auto px-4 md:px-8 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight">{aboutContent.cta.heading}</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {aboutContent.cta.description}
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link href={aboutContent.cta.buttonHref}>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold h-11 px-8 shadow-md shadow-red-600/10">
                {aboutContent.cta.buttonText}
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
