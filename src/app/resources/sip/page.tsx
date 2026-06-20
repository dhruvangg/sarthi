'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, PieChart } from 'lucide-react'
import Link from "next/link"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [timePeriod, setTimePeriod] = useState(10)
  const [results, setResults] = useState({
    totalInvestment: 0,
    estimatedReturns: 0,
    totalValue: 0
  })

  const calculateSIP = () => {
    const annualRate = expectedReturn / 100
    const monthlyRate = Math.pow(1 + annualRate, 1 / 12) - 1
    const months = timePeriod * 12

    const totalInvestment = monthlyInvestment * months
    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
    const estimatedReturns = futureValue - totalInvestment

    setResults({
      totalInvestment,
      estimatedReturns,
      totalValue: futureValue
    })
  }

  useEffect(() => {
    calculateSIP()
  }, [monthlyInvestment, expectedReturn, timePeriod])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SIP Calculator | Sarthi SIP",
    "description": "Calculate returns and future value of your systematic investment plans (SIP) in mutual funds.",
    "url": "https://sarthisip.com/resources/sip",
    "applicationCategory": "FinancialApplication",
    "operatingSystem": "All"
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50/80 via-white to-rose-50/50 py-12 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl space-y-3">
          <Badge className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
            Interactive Tools
          </Badge>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
            <Calculator className="h-8 w-8 text-red-600" />
            SIP Calculator
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Calculate the future value of your Systematic Investment Plan (SIP) investments with compound growth projections.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 flex-grow">

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Investment Details</CardTitle>
              <CardDescription>Enter your SIP investment parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="monthly-investment" className="text-slate-700">Monthly Investment Amount</Label>
                <div className="mt-2">
                  <Input
                    id="monthly-investment"
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="text-lg focus-visible:ring-red-500"
                  />
                  <div className="mt-2">
                    <input
                      type="range"
                      min="500"
                      max="100000"
                      step="500"
                      value={monthlyInvestment}
                      onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider accent-red-600"
                    />
                    <div className="flex justify-between text-sm text-slate-500 mt-1">
                      <span>₹500</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="expected-return" className="text-slate-700">Expected Annual Return (%)</Label>
                <div className="mt-2">
                  <Input
                    id="expected-return"
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="text-lg focus-visible:ring-red-500"
                    step="0.1"
                  />
                  <div className="mt-2">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="0.5"
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                    />
                    <div className="flex justify-between text-sm text-slate-500 mt-1">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="time-period" className="text-slate-700">Investment Period (Years)</Label>
                <div className="mt-2">
                  <Input
                    id="time-period"
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="text-lg focus-visible:ring-red-500"
                  />
                  <div className="mt-2">
                    <input
                      type="range"
                      min="1"
                      max="40"
                      step="1"
                      value={timePeriod}
                      onChange={(e) => setTimePeriod(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                    />
                    <div className="flex justify-between text-sm text-slate-500 mt-1">
                      <span>1 Year</span>
                      <span>40 Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <TrendingUp className="mr-2 h-5 w-5 text-emerald-600" />
                  Investment Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-lg">
                    <span className="text-slate-700 font-medium">Total Investment</span>
                    <span className="text-2xl font-bold text-slate-900">
                      {formatCurrency(results.totalInvestment)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-emerald-50/50 border border-emerald-100 rounded-lg">
                    <span className="text-slate-700 font-medium">Estimated Returns</span>
                    <span className="text-2xl font-bold text-emerald-700">
                      {formatCurrency(results.estimatedReturns)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-red-50/50 rounded-lg border-2 border-red-200">
                    <span className="text-slate-700 font-medium">Total Value</span>
                    <span className="text-3xl font-bold text-red-600">
                      {formatCurrency(results.totalValue)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visual Representation */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <PieChart className="mr-2 h-5 w-5 text-indigo-600" />
                  Investment Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="flex h-8 rounded-lg overflow-hidden">
                      <div
                        className="bg-slate-700 flex items-center justify-center text-white text-sm font-medium"
                        style={{ width: `${(results.totalInvestment / results.totalValue) * 100}%` }}
                      >
                        {((results.totalInvestment / results.totalValue) * 100).toFixed(1)}%
                      </div>
                      <div
                        className="bg-red-600 flex items-center justify-center text-white text-sm font-medium"
                        style={{ width: `${(results.estimatedReturns / results.totalValue) * 100}%` }}
                      >
                        {((results.estimatedReturns / results.totalValue) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-slate-700 rounded mr-2"></div>
                      <span className="font-semibold text-slate-700">Principal Amount</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-600 rounded mr-2"></div>
                      <span className="font-semibold text-red-600">Returns</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href="/contact">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-11 mb-3">
                  Start SIP Investment
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50 font-semibold h-11">
                  Get Expert Advice
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="mt-8 bg-amber-50/50 border-amber-100">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Disclaimer:</strong> The calculations are based on the inputs provided and assumed rate of return.
              Actual returns may vary depending on market conditions. Mutual fund investments are subject to market risks.
              Please read all scheme-related documents carefully before investing.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
