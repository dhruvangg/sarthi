'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { BarChart3, ArrowLeft, TrendingUp, Shield, AlertTriangle } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/Header"

export default function RiskProfiler() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [riskProfile, setRiskProfile] = useState<{
    type: string
    score: number
    description: string
    allocation: { equity: number; debt: number; gold: number }
    color: string
  } | null>(null)

  const questions = [
    {
      id: 1,
      question: "What is your age group?",
      options: [
        { text: "Below 25 years", score: 4 },
        { text: "25-35 years", score: 3 },
        { text: "35-50 years", score: 2 },
        { text: "Above 50 years", score: 1 }
      ]
    },
    {
      id: 2,
      question: "What is your investment experience?",
      options: [
        { text: "No prior investment experience", score: 1 },
        { text: "Limited experience (1-3 years)", score: 2 },
        { text: "Moderate experience (3-7 years)", score: 3 },
        { text: "Extensive experience (7+ years)", score: 4 }
      ]
    },
    {
      id: 3,
      question: "What is your primary investment goal?",
      options: [
        { text: "Capital preservation", score: 1 },
        { text: "Regular income", score: 2 },
        { text: "Balanced growth", score: 3 },
        { text: "Aggressive growth", score: 4 }
      ]
    },
    {
      id: 4,
      question: "What is your investment time horizon?",
      options: [
        { text: "Less than 1 year", score: 1 },
        { text: "1-3 years", score: 2 },
        { text: "3-7 years", score: 3 },
        { text: "More than 7 years", score: 4 }
      ]
    },
    {
      id: 5,
      question: "How would you react to a 20% drop in your portfolio value?",
      options: [
        { text: "Panic and sell immediately", score: 1 },
        { text: "Feel uncomfortable but hold", score: 2 },
        { text: "Stay calm and wait for recovery", score: 3 },
        { text: "See it as a buying opportunity", score: 4 }
      ]
    },
    {
      id: 6,
      question: "What percentage of your income can you invest?",
      options: [
        { text: "Less than 10%", score: 1 },
        { text: "10-20%", score: 2 },
        { text: "20-30%", score: 3 },
        { text: "More than 30%", score: 4 }
      ]
    },
    {
      id: 7,
      question: "How important is liquidity for your investments?",
      options: [
        { text: "Very important - need immediate access", score: 1 },
        { text: "Somewhat important", score: 2 },
        { text: "Not very important", score: 3 },
        { text: "Not important at all", score: 4 }
      ]
    },
    {
      id: 8,
      question: "Which statement best describes your attitude towards risk?",
      options: [
        { text: "I prefer guaranteed returns even if low", score: 1 },
        { text: "I can accept small fluctuations for better returns", score: 2 },
        { text: "I can handle moderate volatility for good returns", score: 3 },
        { text: "I'm comfortable with high volatility for maximum returns", score: 4 }
      ]
    }
  ]

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateRiskProfile(newAnswers)
    }
  }

  const calculateRiskProfile = (allAnswers: number[]) => {
    const totalScore = allAnswers.reduce((sum, score) => sum + score, 0)
    const maxScore = questions.length * 4
    const percentage = (totalScore / maxScore) * 100

    let profile
    if (percentage <= 37.5) {
      profile = {
        type: "Conservative",
        score: totalScore,
        description: "You prefer stability and capital preservation over high returns. You're comfortable with low-risk investments.",
        allocation: { equity: 20, debt: 70, gold: 10 },
        color: "blue"
      }
    } else if (percentage <= 62.5) {
      profile = {
        type: "Moderate",
        score: totalScore,
        description: "You seek a balance between growth and stability. You can tolerate moderate fluctuations for better returns.",
        allocation: { equity: 50, debt: 40, gold: 10 },
        color: "orange"
      }
    } else if (percentage <= 87.5) {
      profile = {
        type: "Aggressive",
        score: totalScore,
        description: "You're focused on long-term growth and can handle significant market volatility for higher returns.",
        allocation: { equity: 70, debt: 20, gold: 10 },
        color: "green"
      }
    } else {
      profile = {
        type: "Very Aggressive",
        score: totalScore,
        description: "You're a high-risk, high-reward investor comfortable with significant volatility for maximum growth potential.",
        allocation: { equity: 85, debt: 10, gold: 5 },
        color: "red"
      }
    }

    setRiskProfile(profile)
    setShowResults(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setRiskProfile(null)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults && riskProfile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header showBackToCalculators={true} />

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Risk Profile Results</h1>
              <p className="text-gray-600">Based on your responses, here's your personalized investment profile</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Risk Profile Card */}
              <Card className="text-center">
                <CardHeader>
                  <div className={`mx-auto w-20 h-20 rounded-full bg-${riskProfile.color}-100 flex items-center justify-center mb-4`}>
                    {riskProfile.type === 'Conservative' && <Shield className={`h-10 w-10 text-${riskProfile.color}-600`} />}
                    {riskProfile.type === 'Moderate' && <BarChart3 className={`h-10 w-10 text-${riskProfile.color}-600`} />}
                    {riskProfile.type === 'Aggressive' && <TrendingUp className={`h-10 w-10 text-${riskProfile.color}-600`} />}
                    {riskProfile.type === 'Very Aggressive' && <AlertTriangle className={`h-10 w-10 text-${riskProfile.color}-600`} />}
                  </div>
                  <CardTitle className={`text-2xl text-${riskProfile.color}-600`}>
                    {riskProfile.type} Investor
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Score: {riskProfile.score} out of {questions.length * 4}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{riskProfile.description}</p>
                  <div className="space-y-3">
                    <Button className={`w-full bg-${riskProfile.color}-600 hover:bg-${riskProfile.color}-700 text-white`}>
                      Get Personalized Portfolio
                    </Button>
                    <Button variant="outline" onClick={resetQuiz} className="w-full">
                      Retake Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Asset Allocation */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Asset Allocation</CardTitle>
                  <CardDescription>Based on your risk profile</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">Equity</span>
                        <span className="font-bold text-green-600">{riskProfile.allocation.equity}%</span>
                      </div>
                      <Progress value={riskProfile.allocation.equity} className="h-3" />
                      <p className="text-sm text-gray-500 mt-1">Stocks, Equity Mutual Funds</p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">Debt</span>
                        <span className="font-bold text-blue-600">{riskProfile.allocation.debt}%</span>
                      </div>
                      <Progress value={riskProfile.allocation.debt} className="h-3" />
                      <p className="text-sm text-gray-500 mt-1">Bonds, FDs, Debt Mutual Funds</p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">Gold</span>
                        <span className="font-bold text-yellow-600">{riskProfile.allocation.gold}%</span>
                      </div>
                      <Progress value={riskProfile.allocation.gold} className="h-3" />
                      <p className="text-sm text-gray-500 mt-1">Gold ETFs, Digital Gold</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Investment Recommendations */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Investment Recommendations for {riskProfile.type} Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Suitable Investment Options</h4>
                    <ul className="space-y-2 text-gray-600">
                      {riskProfile.type === 'Conservative' && (
                        <>
                          <li>• Fixed Deposits and Recurring Deposits</li>
                          <li>• Debt Mutual Funds</li>
                          <li>• Government Bonds</li>
                          <li>• Conservative Hybrid Funds</li>
                        </>
                      )}
                      {riskProfile.type === 'Moderate' && (
                        <>
                          <li>• Balanced/Hybrid Mutual Funds</li>
                          <li>• Large Cap Equity Funds</li>
                          <li>• Monthly Income Plans</li>
                          <li>• Corporate Bonds</li>
                        </>
                      )}
                      {(riskProfile.type === 'Aggressive' || riskProfile.type === 'Very Aggressive') && (
                        <>
                          <li>• Equity Mutual Funds</li>
                          <li>• Mid & Small Cap Funds</li>
                          <li>• Sectoral/Thematic Funds</li>
                          <li>• ELSS Tax Saving Funds</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Considerations</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Review portfolio annually</li>
                      <li>• Maintain emergency fund</li>
                      <li>• Diversify across asset classes</li>
                      <li>• Stay invested for long term</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBackToCalculators={true} />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <BarChart3 className="mr-3 h-8 w-8 text-green-600" />
              Risk Profiler Assessment
            </h1>
            <p className="text-gray-600">
              Answer these questions to determine your investment risk tolerance
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup onValueChange={(value) => handleAnswer(Number(value))}>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value={option.score.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-6 flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <span className="text-sm text-gray-500 self-center">
              Select an option to continue
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
