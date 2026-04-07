'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, ArrowLeft, PieChart } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

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
    const monthlyRate = expectedReturn / 100 / 12
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
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
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
            <Calculator className="mr-3 h-8 w-8 text-red-600" />
            SIP Calculator
          </h1>
          <p className="text-gray-600">
            Calculate the future value of your Systematic Investment Plan (SIP) investments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Details</CardTitle>
              <CardDescription>Enter your SIP investment parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="monthly-investment">Monthly Investment Amount</Label>
                <div className="mt-2">
                  <Input
                    id="monthly-investment"
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="text-lg"
                  />
                  <div className="mt-2">
                    <input
                      type="range"
                      min="500"
                      max="100000"
                      step="500"
                      value={monthlyInvestment}
                      onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                      className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>₹500</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="expected-return">Expected Annual Return (%)</Label>
                <div className="mt-2">
                  <Input
                    id="expected-return"
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="text-lg"
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
                      className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="time-period">Investment Period (Years)</Label>
                <div className="mt-2">
                  <Input
                    id="time-period"
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="text-lg"
                  />
                  <div className="mt-2">
                    <input
                      type="range"
                      min="1"
                      max="40"
                      step="1"
                      value={timePeriod}
                      onChange={(e) => setTimePeriod(Number(e.target.value))}
                      className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
                  Investment Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Total Investment</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {formatCurrency(results.totalInvestment)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Estimated Returns</span>
                    <span className="text-2xl font-bold text-green-600">
                      {formatCurrency(results.estimatedReturns)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border-2 border-red-200">
                    <span className="text-gray-700 font-medium">Total Value</span>
                    <span className="text-3xl font-bold text-red-600">
                      {formatCurrency(results.totalValue)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visual Representation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="mr-2 h-5 w-5 text-purple-600" />
                  Investment Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="flex h-8 rounded-lg overflow-hidden">
                      <div 
                        className="bg-blue-500 flex items-center justify-center text-white text-sm font-medium"
                        style={{ width: `${(results.totalInvestment / results.totalValue) * 100}%` }}
                      >
                        {((results.totalInvestment / results.totalValue) * 100).toFixed(1)}%
                      </div>
                      <div 
                        className="bg-green-500 flex items-center justify-center text-white text-sm font-medium"
                        style={{ width: `${(results.estimatedReturns / results.totalValue) * 100}%` }}
                      >
                        {((results.estimatedReturns / results.totalValue) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                      <span>Principal Amount</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                      <span>Returns</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Start SIP Investment
              </Button>
              <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                Get Expert Advice
              </Button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">
              <strong>Disclaimer:</strong> The calculations are based on the inputs provided and assumed rate of return. 
              Actual returns may vary depending on market conditions. Mutual fund investments are subject to market risks. 
              Please read all scheme-related documents carefully before investing.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
