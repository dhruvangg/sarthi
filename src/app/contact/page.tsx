import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Sarthi SIP - Mutual Fund & Investment Advisory",
  description: "Get in touch with the expert financial advisors at Sarthi SIP. Call us, send an email, or visit our office in Nikol, Ahmedabad for systematic investment plans and mutual fund guidance.",
  alternates: {
    canonical: "https://sarthisip.com/contact",
  },
  openGraph: {
    title: "Contact Us | Sarthi SIP",
    description: "Connect with Sarthi SIP advisors in Ahmedabad for expert mutual fund distribution and investment planning.",
    url: "https://sarthisip.com/contact",
    siteName: "Sarthi SIP",
    type: "website",
  }
}

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Sarthi SIP",
    "description": "Contact information for Sarthi SIP advisory services in Ahmedabad, India.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Sarthi SIP",
      "image": "https://sarthisip.com/logo.png",
      "telephone": "+918000383222",
      "email": "hello@sarthisip.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "412, The Edge, Opp. Malabar Royal Bungalows, Bhakti Circle Road, Nikol",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "382350",
        "addressCountry": "IN"
      },
      "url": "https://sarthisip.com/contact",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        "opens": "10:00",
        "closes": "20:00"
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

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50/80 via-white to-rose-50/50 py-16 lg:py-20 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <Badge className="bg-red-50 text-red-750 border-red-200 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
              Us
            </span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Have questions about Mutual Fund SIPs, taxation planning, or need a government-approved property valuation? We are here to help.
          </p>
        </div>
      </section>

      {/* Form and Contact Details Split Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Form Column (Left) */}
            <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-100/50">
              <ContactForm title="Schedule Appointment" buttonText="Schedule Appointment/Consultation" />
            </div>

            {/* Details and Map Column (Right) */}
            <div className="lg:col-span-5 space-y-8">

              {/* Details Card */}
              <Card className="border-slate-200/85 bg-slate-50/65 shadow-sm">
                <CardContent className="p-6 space-y-6">

                  {/* Office Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Office Location</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        412, The Edge, Opp. Malabar Royal Bungalows, Bhakti Circle Road, Nikol, Ahmedabad-382350
                      </p>
                    </div>
                  </div>

                  {/* Direct Lines */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Team Direct Lines</h4>
                      <div className="text-xs text-slate-500 space-y-0.5 font-medium">
                        <p>Sheetal Suthar: <a href="tel:+918000383222" className="text-red-600 hover:underline font-bold">+91 80003 83222</a></p>
                        <p>Siddharth Pandya: <a href="tel:+918141316000" className="text-red-600 hover:underline font-bold">+91 81413 16000</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Email Address</h4>
                      <a href="mailto:hello@sarthisip.com" className="text-xs text-slate-600 hover:underline font-semibold">
                        hello@sarthisip.com
                      </a>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Office Hours</h4>
                      <p className="text-xs text-slate-500 font-medium">
                        Monday – Friday: 10:00 AM – 8:00 PM<br />
                        Saturday – Sunday – Appointment based
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>

              {/* Map embed */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner h-64">
                <iframe
                  title="Sarthi SIP Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.391782299839!2d72.6738981!3d23.0461625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e876007ec1cdb%3A0xe9f79b0c279a0cf5!2sThe%20Edge!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
