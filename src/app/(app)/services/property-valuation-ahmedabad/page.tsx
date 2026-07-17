import { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { Home, Shield, FileText, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Government Approved Property Valuation in Ahmedabad | Sarthi SIP',
  description: 'Expert, government-approved property valuation services in Ahmedabad (Nikol). Get fair market value for real estate, plots, and buildings for visa, loan, or tax purposes.',
  keywords: 'Property Valuation Ahmedabad, Govt Approved Valuer Nikol, Real Estate Valuation, Fair Market Value, Property Valuator Gujarat',
  openGraph: {
    title: 'Government Approved Property Valuation in Ahmedabad',
    description: 'Expert, government-approved property valuation services in Ahmedabad (Nikol). Get fair market value for real estate, plots, and buildings.',
    url: 'https://sarthisip.com/services/property-valuation-ahmedabad',
    locale: 'en_IN',
    type: 'website',
  }
}

export default function PropertyValuationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Property Valuation",
    "provider": {
      "@type": "FinancialService",
      "name": "Sarthi SIP",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "412, The Edge, Opp. Malabar Royal Bungalows, Bhakti Circle Road, Nikol",
        "addressLocality": "Ahmedabad",
        "postalCode": "382350",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Ahmedabad"
    },
    "description": "Government approved property valuation services for residential and commercial real estate in Ahmedabad, Gujarat."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="bg-red-50/50 pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-100 px-3 py-1 rounded-full mb-6">
                <Shield className="h-3.5 w-3.5" />
                <span>Government Approved</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                Accurate Property Valuation in <span className="text-red-600">Ahmedabad</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Need an official valuation or fair market estimate for a plot, flat, or commercial building? Sarthi SIP provides certified, hassle-free property valuation services across Ahmedabad and Gujarat.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Visa & Immigration Purposes",
                  "Bank Loans & Mortgages",
                  "Capital Gains Tax Calculation",
                  "Property Buying/Selling Decisions"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <ContactForm 
                title="Request a Valuation" 
                buttonText="Get Consultation Call" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why Choose Our Valuation Services?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We combine deep local real estate knowledge with strict government compliance to give you reports you can trust.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Certified Reports</h3>
              <p className="text-slate-600 leading-relaxed">
                Receive fully documented, government-approved valuation certificates accepted by all major banks, embassies, and tax authorities.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local Nikol Experts</h3>
              <p className="text-slate-600 leading-relaxed">
                As a firm based in Nikol, Ahmedabad, we understand the hyper-local real estate nuances, jantri rates, and market trends better than anyone else.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Process</h3>
              <p className="text-slate-600 leading-relaxed">
                No hidden fees. We provide a clear, evidence-based approach to determining the exact fair market value of your property.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
