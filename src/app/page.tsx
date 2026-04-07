import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Shield, Calculator, Users, Award, Phone, Mail, MapPin, CheckCircle, Star, ArrowRight, PieChart, Banknote, Home, FileText, Target, BarChart3 } from "lucide-react";
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
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
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-red-600 font-medium">Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-red-600 font-medium">About</Link>
              <Link href="#services" className="text-gray-700 hover:text-red-600 font-medium">Services</Link>
              <Link href="#tools" className="text-gray-700 hover:text-red-600 font-medium">Tools</Link>
              <Link href="#contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</Link>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Get Consultation
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">Trusted Financial Partner</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in{" "}
                <span className="text-red-600">Mutual Funds, Insurance, Tax & Property Advisory</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert advisory in Mutual Funds, Fixed Deposits, Bonds, LIC, Taxation, General Insurance & Property Valuation.
                Transparent, client-focused planning serving clients across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  Calculate Portfolio
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Explore Services
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">300+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">₹50Cr+</div>
                  <div className="text-sm text-gray-600">Assets Managed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Consultation</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Phone Number" />
                  <Input placeholder="Email Address" />
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Select Service Interest</option>
                    <option>Mutual Funds</option>
                    <option>Insurance</option>
                    <option>Tax Planning</option>
                    <option>Property Valuation</option>
                  </select>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Schedule Free Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About SS Sarthi Financial Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering investors to build wealth with strategic planning and expert insights
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission & Vision</h3>
              <p className="text-gray-600 mb-6">
                We empower investors to build sustainable wealth through strategic planning and expert insights.
                Our vision is to be India&apos;s most trusted financial advisory firm, known for transparency,
                integrity, and client-first approach.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">SEBI Registered Advisors</h4>
                    <p className="text-gray-600">Certified and compliant with regulatory standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Property Valuers</h4>
                    <p className="text-gray-600">Expert property valuation and advisory services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">LIC & Insurance Specialists</h4>
                    <p className="text-gray-600">Comprehensive insurance planning and management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Integrity</h4>
                <p className="text-sm text-gray-600">Honest and transparent advice</p>
              </Card>
              <Card className="text-center p-6">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Trust</h4>
                <p className="text-sm text-gray-600">Client-first fiduciary mindset</p>
              </Card>
              <Card className="text-center p-6">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">Technology-driven solutions</p>
              </Card>
              <Card className="text-center p-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Partnership</h4>
                <p className="text-sm text-gray-600">Long-term client relationships</p>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Us?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Banknote className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Fee-Only Advisory</h4>
                <p className="text-gray-600">No hidden trailing commissions, transparent pricing</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Data-Driven Approach</h4>
                <p className="text-gray-600">Analytics and evidence-based investment advice</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <PieChart className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Comprehensive Suite</h4>
                <p className="text-gray-600">Multi-asset, insurance, tax and property guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your goals and risk appetite
            </p>
          </div>

          <Tabs defaultValue="mutual-funds" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="mutual-funds">Mutual Funds</TabsTrigger>
              <TabsTrigger value="fixed-deposits">FD & Bonds</TabsTrigger>
              <TabsTrigger value="insurance">Insurance</TabsTrigger>
              <TabsTrigger value="taxation">Taxation</TabsTrigger>
              <TabsTrigger value="property">Property</TabsTrigger>
            </TabsList>

            <TabsContent value="mutual-funds">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-red-600" />
                    <span>Mutual Funds Advisory</span>
                  </CardTitle>
                  <CardDescription>
                    Expert fund selection using advanced screening tools and performance analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Our Approach</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Fund selection via screening tools and rolling returns analysis</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Performance comparisons and SIP modeling</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Portfolio overlap analysis and risk assessment</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Tax-efficient ELSS recommendations</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Fund Categories</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <Badge variant="outline" className="justify-center py-2">Equity Funds</Badge>
                        <Badge variant="outline" className="justify-center py-2">Debt Funds</Badge>
                        <Badge variant="outline" className="justify-center py-2">Hybrid Funds</Badge>
                        <Badge variant="outline" className="justify-center py-2">Index Funds</Badge>
                        <Badge variant="outline" className="justify-center py-2">ELSS Funds</Badge>
                        <Badge variant="outline" className="justify-center py-2">Sectoral Funds</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fixed-deposits">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Banknote className="h-6 w-6 text-orange-600" />
                    <span>Fixed Deposits & Bonds</span>
                  </CardTitle>
                  <CardDescription>
                    Comparative analysis and yield optimization for fixed income investments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Services Offered</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>FD vs RD vs Debt Fund comparisons</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Bond ladder planning strategies</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Yield optimization techniques</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Credit risk evaluation</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Current Best Rates</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Bank FD (1 Year)</span>
                          <span className="font-semibold text-orange-600">7.25%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Corporate Bonds</span>
                          <span className="font-semibold text-orange-600">8.50%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Debt Mutual Funds</span>
                          <span className="font-semibold text-orange-600">7.80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insurance">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <span>LIC & Insurance Planning</span>
                  </CardTitle>
                  <CardDescription>
                    Comprehensive insurance solutions aligned with your financial goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Life Insurance</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Term Life Insurance</li>
                        <li>• Whole Life Policies</li>
                        <li>• ULIP Plans</li>
                        <li>• Endowment Plans</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Health Insurance</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Individual Health Plans</li>
                        <li>• Family Floater Policies</li>
                        <li>• Critical Illness Cover</li>
                        <li>• Senior Citizen Plans</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">General Insurance</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Motor Insurance</li>
                        <li>• Home Insurance</li>
                        <li>• Travel Insurance</li>
                        <li>• Business Insurance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="taxation">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-green-600" />
                    <span>Tax Planning & Advisory</span>
                  </CardTitle>
                  <CardDescription>
                    Strategic tax planning to maximize your savings and optimize returns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Tax-Efficient Strategies</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>ELSS vs Index Fund tax implications</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Capital gains optimization planning</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Insurance premium tax deductions</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Home loan interest benefits</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Tax Saving Limits (FY 2024-25)</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">80C Deductions</span>
                          <span className="font-semibold text-green-600">₹1.5 Lakh</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">80D Health Insurance</span>
                          <span className="font-semibold text-green-600">₹25,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">NPS 80CCD(1B)</span>
                          <span className="font-semibold text-green-600">₹50,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="property">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Home className="h-6 w-6 text-purple-600" />
                    <span>Property Valuation & Advisory</span>
                  </CardTitle>
                  <CardDescription>
                    Professional property valuation and investment advisory services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Valuation Services</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Fair market value assessments</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Property investment analysis</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Resale value projections</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>Mortgage planning assistance</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Property Types</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <Badge variant="outline" className="justify-center py-2">Residential</Badge>
                        <Badge variant="outline" className="justify-center py-2">Commercial</Badge>
                        <Badge variant="outline" className="justify-center py-2">Industrial</Badge>
                        <Badge variant="outline" className="justify-center py-2">Agricultural</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tools & Calculators */}
      <section id="tools" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Financial Tools & Calculators</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools to help you plan and track your financial journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calculator className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>SIP Calculator</CardTitle>
                <CardDescription>Calculate returns on your systematic investment plans</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/sip">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Try Calculator
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Goal Planner</CardTitle>
                <CardDescription>Plan for your financial goals with precision</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/goal-planner">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Start Planning
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Risk Profiler</CardTitle>
                <CardDescription>Assess your investment risk tolerance</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/risk-profiler">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Take Assessment
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <PieChart className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Fund Screener</CardTitle>
                <CardDescription>Find the best mutual funds for your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculators/fund-screener">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Screen Funds
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Property Valuator</CardTitle>
                <CardDescription>Get accurate property valuation estimates</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Value Property
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Insurance Calculator</CardTitle>
                <CardDescription>Calculate your insurance premium estimates</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  Calculate Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by hundreds of satisfied clients across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">SS Sarthi helped me create a diversified portfolio that has consistently outperformed the market.
                Their transparent approach and regular reviews give me confidence in my investments.
              </p>
              <div className="font-semibold text-gray-900">Rajesh K.</div>
              <div className="text-sm text-gray-500">Mumbai, Maharashtra</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                The tax planning strategies suggested by their team saved me over ₹50,000 in taxes last year.
                Their expertise in ELSS and insurance planning is exceptional.
              </p>
              <div className="font-semibold text-gray-900">Priya S.</div>
              <div className="text-sm text-gray-500">Bangalore, Karnataka</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Professional property valuation service helped me make an informed decision on my home purchase.
                Their market analysis was spot-on and saved me from overpaying.
              </p>
              <div className="font-semibold text-gray-900">Amit T.</div>
              <div className="text-sm text-gray-500">Delhi, NCR</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to financial planning and wealth management
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery Call</h3>
              <p className="text-gray-600">
                Understand your financial goals, risk profile, and current situation through detailed consultation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Plan</h3>
              <p className="text-gray-600">
                Create tailored financial plan with specific recommendations across all service areas
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Execute the plan with SIP setups, insurance policies, and investment portfolio creation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoring</h3>
              <p className="text-gray-600">
                Regular performance tracking, annual reviews, and plan adjustments as needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your financial journey? Contact us for a free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Free Consultation</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" />
                  <Input placeholder="Phone Number" />
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Select Primary Interest</option>
                    <option>Mutual Fund Planning</option>
                    <option>Insurance Advisory</option>
                    <option>Tax Planning</option>
                    <option>Property Valuation</option>
                    <option>Comprehensive Financial Planning</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your financial goals..."
                    className="w-full p-3 border border-gray-300 rounded-md h-24"
                  ></textarea>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Schedule Consultation
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-red-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">Sheetal Suthar <a className="font-semibold" href="tel:+918000383222">+91 8000 383222</a></div>
                      <div className="text-gray-600">Siddharth Pandya <a className="font-semibold" href="tel:+918141316000">+91 8141 316000</a></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-red-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">hello@sssarthifinancial.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Office</div>
                      <div className="text-gray-600">Ahmedabad, Gujarat, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">Download Free Resources</h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-between">
                    Ultimate SIP Planning Guide
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    Top 30 Mutual Funds - FY25
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    Tax Saving Checklist
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="SS Sarthi Financial Services"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold text-red-400">SS SARTHI</h3>
                  <p className="text-sm text-gray-400">Financial Services</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner in building wealth through expert financial advisory services.
              </p>
              <p className="text-sm text-gray-500">
                SEBI Registered Investment Advisor
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Mutual Funds</Link></li>
                <li><Link href="#" className="hover:text-white">Insurance Planning</Link></li>
                <li><Link href="#" className="hover:text-white">Tax Advisory</Link></li>
                <li><Link href="#" className="hover:text-white">Property Valuation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Financial Calculators</Link></li>
                <li><Link href="#" className="hover:text-white">Market Insights</Link></li>
                <li><Link href="#" className="hover:text-white">Tax Guides</Link></li>
                <li><Link href="#" className="hover:text-white">Investment Tips</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white">Disclaimer</Link></li>
                <li><Link href="#" className="hover:text-white">SEBI Compliance</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} SS Sarthi Financial Services. All rights reserved. | Together Forever
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
