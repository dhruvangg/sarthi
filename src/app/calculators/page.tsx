import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Target, BarChart3, PieChart, Home, Shield, ArrowRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="SS Sarthi Financial Services"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-red-600">SS SARTHI</h1>
                <p className="text-sm text-gray-600">Financial Services</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">Home</Link>
              <Link href="/calculators" className="text-red-600 font-medium">Calculators</Link>
              <Link href="#contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</Link>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Get Consultation
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Financial <span className="text-red-600">Calculators & Tools</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Make informed financial decisions with our comprehensive suite of calculators and planning tools
          </p>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <Calculator className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>SIP Calculator</CardTitle>
                <CardDescription>Calculate returns on your systematic investment plans with compound growth projections</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/sip">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Calculate SIP Returns
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <Target className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Goal Planner</CardTitle>
                <CardDescription>Plan for your financial goals like retirement, education, or dream home with precision</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/goal-planner">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Start Goal Planning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Risk Profiler</CardTitle>
                <CardDescription>Assess your investment risk tolerance and get personalized portfolio recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/risk-profiler">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Take Risk Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <PieChart className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Fund Screener</CardTitle>
                <CardDescription>Find the best mutual funds based on performance, risk, and your investment criteria</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/fund-screener">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Screen Funds
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <Home className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Property Valuator</CardTitle>
                <CardDescription>Get accurate property valuation estimates and investment analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/property-valuator">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Value Property
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <Shield className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Insurance Calculator</CardTitle>
                <CardDescription>Calculate your insurance needs and premium estimates for life and health coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/insurance">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                    Calculate Coverage
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Personalized Advice?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Our calculators provide estimates. For comprehensive financial planning tailored to your specific needs, 
            consult with our SEBI-registered advisors.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
