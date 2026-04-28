'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Target, ArrowLeft, Calendar, DollarSign } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/Header"

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
    // Inflation-adjusted goal amount
    const inflationAdjustedGoal = goalAmount * Math.pow(1 + inflation / 100, timeToGoal)
    
    // Future value of current savings
    const futureValueCurrentSavings = currentSavings * Math.pow(1 + expectedReturn / 100, timeToGoal)
    
    // Remaining amount needed
    const remainingAmount = inflationAdjustedGoal - futureValueCurrentSavings
    
    // Monthly investment needed (PMT calculation)
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBackToCalculators={true} />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <Target className="mr-3 h-8 w-8 text-orange-600" />
            Goal Planner
          </h1>
          <p className="text-gray-600">
            Plan your financial goals and calculate how much you need to invest monthly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Goal Details</CardTitle>
                <CardDescription>Define your financial goal and timeline</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="goal-type">Goal Type</Label>
                  <Select value={goalType} onValueChange={setGoalType}>
                    <SelectTrigger className="mt-2">
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
                  <Label htmlFor="goal-amount">Goal Amount (Today's Value)</Label>
                  <Input
                    id="goal-amount"
                    type="number"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(Number(e.target.value))}
                    className="mt-2 text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="time-to-goal">Time to Goal (Years)</Label>
                  <div className="mt-2">
                    <Input
                      id="time-to-goal"
                      type="number"
                      value={timeToGoal}
                      onChange={(e) => setTimeToGoal(Number(e.target.value))}
                      className="text-lg"
                    />
                    <input
                      type="range"
                      min="1"
                      max="40"
                      step="1"
                      value={timeToGoal}
                      onChange={(e) => setTimeToGoal(Number(e.target.value))}
                      className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Investment Parameters</CardTitle>
                <CardDescription>Set your investment assumptions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="current-savings">Current Savings for this Goal</Label>
                  <Input
                    id="current-savings"
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="mt-2 text-lg"
                  />
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
                    <input
                      type="range"
                      min="1"
                      max="25"
                      step="0.5"
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(Number(e.target.value))}
                      className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inflation">Expected Inflation Rate (%)</Label>
                  <div className="mt-2">
                    <Input
                      id="inflation"
                      type="number"
                      value={inflation}
                      onChange={(e) => setInflation(Number(e.target.value))}
                      className="text-lg"
                      step="0.1"
                    />
                    <input
                      type="range"
                      min="2"
                      max="12"
                      step="0.5"
                      value={inflation}
                      onChange={(e) => setInflation(Number(e.target.value))}
                      className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-green-600" />
                  Goal Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Goal Amount (Today's Value)</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {formatCurrency(goalAmount)}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Inflation-Adjusted Goal Amount</div>
                    <div className="text-2xl font-bold text-red-600">
                      {formatCurrency(results.inflationAdjustedGoal)}
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="text-sm text-gray-600 mb-1">Monthly Investment Needed</div>
                    <div className="text-3xl font-bold text-green-600">
                      {formatCurrency(results.monthlyInvestmentNeeded)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-purple-600" />
                  Investment Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Age</span>
                    <span className="font-semibold">{currentAge} years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Goal Achievement Age</span>
                    <span className="font-semibold">{currentAge + timeToGoal} years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Investment Period</span>
                    <span className="font-semibold">{timeToGoal} years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Monthly Investments</span>
                    <span className="font-semibold">{timeToGoal * 12} months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Start Goal-Based Investment
              </Button>
              <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                Get Personalized Plan
              </Button>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <Card className="mt-8 bg-gradient-to-r from-orange-50 to-red-50">
          <CardHeader>
            <CardTitle>💡 Goal Planning Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Start Early</h4>
                <p className="text-sm text-gray-600">The power of compounding works best when you start early. Even small amounts can grow significantly over time.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Review Regularly</h4>
                <p className="text-sm text-gray-600">Review your goals annually and adjust your investments based on life changes and market conditions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consider Inflation</h4>
                <p className="text-sm text-gray-600">Always factor in inflation when planning for long-term goals to maintain purchasing power.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Diversify Investments</h4>
                <p className="text-sm text-gray-600">Spread your investments across different asset classes to manage risk effectively.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
