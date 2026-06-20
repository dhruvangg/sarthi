'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Target, Calendar, DollarSign } from 'lucide-react'
import Link from "next/link"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function GoalPlanner() {
  const [goalType, setGoalType] = useState('retirement')
  const [currentAge, setCurrentAge] = useState(30)
  const [goalAmount, setGoalAmount] = useState(10000000)
  const [timeToGoal, setTimeToGoal] = useState(30)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [currentSavings, setCurrentSavings] = useState(500000)
  const [inflation, setInflation] = useState(6)
  const [results, setResults] = useState({
    inflationAdjustedGoal: 0,
    monthlyInvestmentNeeded: 0,
    totalInvestment: 0,
    shortfall: 0
  })

  const goalTypes = {
    retirement: { name: 'Retirement Planning', defaultAmount: 10000000, icon: '🏖️' },
    education: { name: 'Child Education', defaultAmount: 2500000, icon: '🎓' },
    house: { name: 'Dream Home', defaultAmount: 5000000, icon: '🏠' },
    car: { name: 'Car Purchase', defaultAmount: 1500000, icon: '🚗' },
    vacation: { name: 'Dream Vacation', defaultAmount: 500000, icon: '✈️' },
    emergency: { name: 'Emergency Fund', defaultAmount: 1000000, icon: '🛡️' }
  }

  const calculateGoal = () => {
    const inflationAdjustedGoal = goalAmount * Math.pow(1 + inflation / 100, timeToGoal)
    const futureValueCurrentSavings = currentSavings * Math.pow(1 + expectedReturn / 100, timeToGoal)
    const remainingAmount = inflationAdjustedGoal - futureValueCurrentSavings
    const monthlyRate = expectedReturn / 100 / 12
    const months = timeToGoal * 12
    
    let monthlyInvestmentNeeded = 0
    if (remainingAmount > 0) {
      monthlyInvestmentNeeded = remainingAmount / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
    }
    
    const totalInvestment = (monthlyInvestmentNeeded * months) + currentSavings
    const shortfall = Math.max(0, inflationAdjustedGoal - (futureValueCurrentSavings + (monthlyInvestmentNeeded * months * Math.pow(1 + monthlyRate, months/2))))

    setResults({
      inflationAdjustedGoal,
      monthlyInvestmentNeeded: Math.max(0, monthlyInvestmentNeeded),
      totalInvestment,
      shortfall
    })
  }

  useEffect(() => {
    calculateGoal()
  }, [goalAmount, timeToGoal, expectedReturn, currentSavings, inflation])

  useEffect(() => {
    if (goalTypes[goalType as keyof typeof goalTypes]) {
      setGoalAmount(goalTypes[goalType as keyof typeof goalTypes].defaultAmount)
    }
  }, [goalType])

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
    "name": "Goal Planner | Sarthi SIP",
    "description": "Establish long-term target corpora and calculate monthly mutual fund savings required.",
    "url": "https://sarthisip.com/resources/goal-planner",
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
            <Target className="h-8 w-8 text-red-600" />
            Goal Planner
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Plan your financial goals like retirement, education, or a dream home, and calculate how much you need to invest monthly.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 flex-grow">

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-900">Goal Details</CardTitle>
                <CardDescription>Define your financial goal and timeline</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="goal-type" className="text-slate-700">Goal Type</Label>
                  <Select value={goalType} onValueChange={setGoalType}>
                    <SelectTrigger className="mt-2 focus:ring-red-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(goalTypes).map(([key, goal]) => (
                        <SelectItem key={key} value={key}>
                          {goal.icon} {goal.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="goal-amount" className="text-slate-700">Goal Amount (Today's Value)</Label>
                  <Input
                    id="goal-amount"
                    type="number"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(Number(e.target.value))}
                    className="mt-2 text-lg focus-visible:ring-red-500"
                  />
                </div>

                <div>
                  <Label htmlFor="time-to-goal" className="text-slate-700">Time to Goal (Years)</Label>
                  <div className="mt-2">
                    <Input
                      id="time-to-goal"
                      type="number"
                      value={timeToGoal}
                      onChange={(e) => setTimeToGoal(Number(e.target.value))}
                      className="text-lg focus-visible:ring-red-500"
                    />
                    <input
                      type="range"
                      min="1"
                      max="40"
                      step="1"
                      value={timeToGoal}
                      onChange={(e) => setTimeToGoal(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer mt-2 accent-red-600"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-900">Investment Parameters</CardTitle>
                <CardDescription>Set your investment assumptions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="current-savings" className="text-slate-700">Current Savings for this Goal</Label>
                  <Input
                    id="current-savings"
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="mt-2 text-lg focus-visible:ring-red-500"
                  />
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
                    <input
                      type="range"
                      min="1"
                      max="25"
                      step="0.5"
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer mt-2 accent-red-600"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inflation" className="text-slate-700">Expected Inflation Rate (%)</Label>
                  <div className="mt-2">
                    <Input
                      id="inflation"
                      type="number"
                      value={inflation}
                      onChange={(e) => setInflation(Number(e.target.value))}
                      className="text-lg focus-visible:ring-red-500"
                      step="0.1"
                    />
                    <input
                      type="range"
                      min="2"
                      max="12"
                      step="0.5"
                      value={inflation}
                      onChange={(e) => setInflation(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer mt-2 accent-red-600"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <DollarSign className="mr-2 h-5 w-5 text-emerald-600" />
                  Goal Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Goal Amount (Today's Value)</div>
                    <div className="text-2xl font-bold text-slate-900">
                      {formatCurrency(goalAmount)}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-red-50/50 border border-red-100 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Inflation-Adjusted Goal Amount</div>
                    <div className="text-2xl font-bold text-red-600">
                      {formatCurrency(results.inflationAdjustedGoal)}
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50/50 rounded-lg border-2 border-emerald-200">
                    <div className="text-sm text-slate-700 mb-1">Monthly Investment Needed</div>
                    <div className="text-3xl font-bold text-emerald-700">
                      {formatCurrency(results.monthlyInvestmentNeeded)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <Calendar className="mr-2 h-5 w-5 text-red-600" />
                  Investment Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm text-slate-600">
                    <span>Current Age</span>
                    <span className="font-semibold text-slate-800">{currentAge} years</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-slate-600">
                    <span>Goal Achievement Age</span>
                    <span className="font-semibold text-slate-800">{currentAge + timeToGoal} years</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-slate-600">
                    <span>Investment Period</span>
                    <span className="font-semibold text-slate-800">{timeToGoal} years</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-slate-600">
                    <span>Total Monthly Investments</span>
                    <span className="font-semibold text-slate-800">{timeToGoal * 12} months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href="/contact">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-11 mb-3">
                  Start Goal-Based Investment
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50 font-semibold h-11">
                  Get Personalized Plan
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <Card className="mt-8 bg-gradient-to-r from-red-50/50 to-rose-50/50 border-red-100">
          <CardHeader>
            <CardTitle className="text-slate-900">💡 Goal Planning Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Start Early</h4>
                <p className="text-xs text-slate-500 leading-relaxed">The power of compounding works best when you start early. Even small amounts can grow significantly over time.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Review Regularly</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Review your goals annually and adjust your investments based on life changes and market conditions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Consider Inflation</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Always factor in inflation when planning for long-term goals to maintain purchasing power.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Diversify Investments</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Spread your investments across different asset classes to manage risk effectively.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
