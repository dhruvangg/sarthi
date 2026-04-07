'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { PieChart, ArrowLeft, Star, TrendingUp, Shield, Filter } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function FundScreener() {
  const [filters, setFilters] = useState({
    category: '',
    riskLevel: '',
    minReturn: '',
    maxExpenseRatio: '',
    minAUM: '',
    fundHouse: ''
  })

  const [showResults, setShowResults] = useState(false)

  // Sample fund data
  const sampleFunds = [
    {
      name: "HDFC Top 100 Fund",
      category: "Large Cap",
      returns: { "1Y": 15.2, "3Y": 12.8, "5Y": 14.1 },
      expenseRatio: 1.05,
      aum: 25000,
      rating: 4,
      riskLevel: "Moderate",
      fundHouse: "HDFC"
    },
    {
      name: "SBI Small Cap Fund",
      category: "Small Cap",
      returns: { "1Y": 22.5, "3Y": 18.2, "5Y": 16.8 },
      expenseRatio: 1.25,
      aum: 8500,
      rating: 5,
      riskLevel: "High",
      fundHouse: "SBI"
    },
    {
      name: "ICICI Prudential Balanced Advantage Fund",
      category: "Hybrid",
      returns: { "1Y": 11.8, "3Y": 10.5, "5Y": 12.2 },
      expenseRatio: 0.95,
      aum: 15000,
      rating: 4,
      riskLevel: "Moderate",
      fundHouse: "ICICI"
    },
    {
      name: "Axis Bluechip Fund",
      category: "Large Cap",
      returns: { "1Y": 14.8, "3Y": 13.2, "5Y": 15.1 },
      expenseRatio: 1.15,
      aum: 18000,
      rating: 4,
      riskLevel: "Moderate",
      fundHouse: "Axis"
    },
    {
      name: "Mirae Asset Emerging Bluechip Fund",
      category: "Large & Mid Cap",
      returns: { "1Y": 18.5, "3Y": 15.8, "5Y": 17.2 },
      expenseRatio: 1.35,
      aum: 22000,
      rating: 5,
      riskLevel: "Moderate High",
      fundHouse: "Mirae Asset"
    }
  ]

  const handleSearch = () => {
    setShowResults(true)
  }

  const resetFilters = () => {
    setFilters({
      category: '',
      riskLevel: '',
      minReturn: '',
      maxExpenseRatio: '',
      minAUM: '',
      fundHouse: ''
    })
    setShowResults(false)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800'
      case 'Moderate': return 'bg-blue-100 text-blue-800'
      case 'Moderate High': return 'bg-orange-100 text-orange-800'
      case 'High': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
            <Link href="/calculators">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Calculators
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <PieChart className="mr-3 h-8 w-8 text-blue-600" />
            Mutual Fund Screener
          </h1>
          <p className="text-gray-600">
            Find the best mutual funds based on your investment criteria
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5 text-blue-600" />
                  Filters
                </CardTitle>
                <CardDescription>Refine your search criteria</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="category">Fund Category</Label>
                  <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Large Cap">Large Cap</SelectItem>
                      <SelectItem value="Mid Cap">Mid Cap</SelectItem>
                      <SelectItem value="Small Cap">Small Cap</SelectItem>
                      <SelectItem value="Large & Mid Cap">Large & Mid Cap</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                      <SelectItem value="Debt">Debt</SelectItem>
                      <SelectItem value="ELSS">ELSS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="risk-level">Risk Level</Label>
                  <Select value={filters.riskLevel} onValueChange={(value) => setFilters({...filters, riskLevel: value})}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select risk level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Moderate">Moderate</SelectItem>
                      <SelectItem value="Moderate High">Moderate High</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="min-return">Min 3Y Return (%)</Label>
                  <Input
                    id="min-return"
                    type="number"
                    placeholder="e.g., 12"
                    value={filters.minReturn}
                    onChange={(e) => setFilters({...filters, minReturn: e.target.value})}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="max-expense">Max Expense Ratio (%)</Label>
                  <Input
                    id="max-expense"
                    type="number"
                    placeholder="e.g., 1.5"
                    value={filters.maxExpenseRatio}
                    onChange={(e) => setFilters({...filters, maxExpenseRatio: e.target.value})}
                    className="mt-2"
                    step="0.1"
                  />
                </div>

                <div>
                  <Label htmlFor="min-aum">Min AUM (Crores)</Label>
                  <Input
                    id="min-aum"
                    type="number"
                    placeholder="e.g., 1000"
                    value={filters.minAUM}
                    onChange={(e) => setFilters({...filters, minAUM: e.target.value})}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="fund-house">Fund House</Label>
                  <Select value={filters.fundHouse} onValueChange={(value) => setFilters({...filters, fundHouse: value})}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select fund house" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="HDFC">HDFC</SelectItem>
                      <SelectItem value="SBI">SBI</SelectItem>
                      <SelectItem value="ICICI">ICICI Prudential</SelectItem>
                      <SelectItem value="Axis">Axis</SelectItem>
                      <SelectItem value="Mirae Asset">Mirae Asset</SelectItem>
                      <SelectItem value="Kotak">Kotak</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 pt-4">
                  <Button onClick={handleSearch} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Search Funds
                  </Button>
                  <Button onClick={resetFilters} variant="outline" className="w-full">
                    Reset Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-3">
            {!showResults ? (
              <Card className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Ready to Find Your Perfect Fund?</h3>
                  <p className="text-gray-500 mb-4">Use the filters on the left to search for mutual funds that match your criteria</p>
                  <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Show All Funds
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Search Results</h2>
                  <Badge variant="outline" className="text-blue-600">
                    {sampleFunds.length} funds found
                  </Badge>
                </div>

                {sampleFunds.map((fund, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="md:col-span-2">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{fund.name}</h3>
                            <div className="flex items-center">
                              {renderStars(fund.rating)}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge variant="outline">{fund.category}</Badge>
                            <Badge className={getRiskColor(fund.riskLevel)}>{fund.riskLevel}</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Fund House: {fund.fundHouse}</p>
                          <p className="text-sm text-gray-600">AUM: ₹{fund.aum.toLocaleString()} Cr</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                            Returns
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">1 Year:</span>
                              <span className="font-semibold text-green-600">{fund.returns["1Y"]}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">3 Years:</span>
                              <span className="font-semibold text-green-600">{fund.returns["3Y"]}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">5 Years:</span>
                              <span className="font-semibold text-green-600">{fund.returns["5Y"]}%</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between">
                          <div className="mb-4">
                            <div className="text-sm text-gray-600 mb-1">Expense Ratio</div>
                            <div className="text-lg font-bold text-blue-600">{fund.expenseRatio}%</div>
                          </div>
                          <div className="space-y-2">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
                              Invest Now
                            </Button>
                            <Button variant="outline" className="w-full text-sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Expert Guidance?</h3>
                    <p className="text-gray-600 mb-4">
                      Our SEBI-registered advisors can help you choose the right funds for your portfolio
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Get Expert Advice
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">
              <strong>Disclaimer:</strong> Past performance is not indicative of future results. 
              Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. 
              The fund information shown is for illustrative purposes only.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
