import { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, PieChart, Shield, Calculator, Home, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import servicesData from "@/data/services-content.json"
const IconMap = {
  PieChart,
  Shield,
  Calculator,
  Home
};

export const metadata: Metadata = {
  title: "Our Services | Sarthi SIP",
  description: "Comprehensive financial services including Mutual Funds, LIC, Tax Planning, and Property Valuation.",
}

export default function ServicesPage() {
  const services = servicesData.services || [];

  return (
    <div className="min-h-screen bg-white flex flex-col text-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50/80 via-white to-rose-50/50 py-16 lg:py-24 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05),transparent_50%)]" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl text-center space-y-6">
          <Badge className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
            Our Capabilities
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Financial Services</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl font-medium mx-auto">
            We align our capabilities across three main pillars: investment growth, risk shield coverage, and legal property valuation.
          </p>
        </div>
      </section>

      {/* Editorial List Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="divide-y divide-slate-100 border-y border-slate-100">
            {services.map((service: any) => {
              const Icon = IconMap[service.iconName as keyof typeof IconMap] || PieChart;
              
              return (
                <div key={service.id} id={service.id} className="py-16 group">
                  <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
                    
                    {/* Left: Number and Title */}
                    <div className="space-y-6 md:sticky md:top-32">
                      <div className="flex items-end gap-3">
                        <span className="text-6xl font-extrabold text-slate-100 leading-none -mb-1 tracking-tighter">
                          {service.number}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 mb-1 shadow-sm border border-red-100">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight group-hover:text-red-600 transition-colors duration-300">
                        {service.title}
                      </h2>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8">
                      <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        {service.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-4 pt-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 border border-slate-100/60">
                            <CheckCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
                            <span className="text-slate-700 text-sm font-medium leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Key Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="bg-white border-slate-200 text-slate-600 hover:bg-slate-50 py-1.5 px-4 font-medium">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-8">
                        <Link href="/contact" className="inline-flex items-center text-red-600 font-bold hover:text-red-700 group/link">
                          Consult an Advisor for {service.title.split(' ')[0]}
                          <ArrowUpRight className="ml-1 w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conversion Banner Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-rose-50 text-slate-900 py-16 relative overflow-hidden border-t border-red-100 mt-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.04),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center space-y-6 max-w-3xl">
          <Badge className="bg-red-100 text-red-700 border-red-200/80 px-3 py-1 text-xs font-semibold">
            Secure Your Financial Future
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Let our experts design a customized portfolio
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Contact our advisory team directly. Let us schedule a free review session of your current mutual funds or evaluate your property.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 h-12 shadow-lg shadow-red-600/15 rounded-full">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918000383222">
              <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 h-12 rounded-full">
                Call us Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
