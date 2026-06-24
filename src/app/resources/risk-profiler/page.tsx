'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ClipboardList, CheckCircle, ArrowLeft, ArrowRight, Lock,
  FileText, Check, Sparkles, TrendingUp, PieChart, Shield,
  Target, DollarSign, Calendar
} from 'lucide-react'
import Link from 'next/link'
import { TRANSLATIONS, STEP0_TRANSLATIONS } from '@/data/translations'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

// ─────────────────────────────────────────────
// DATA STATED FROM ORIGINAL HTML
// ─────────────────────────────────────────────
const QUESTIONS = [
  {
    section: "Personal Profile",
    icon: "👤",
    q: "What is your age?",
    hint: "Age is a key factor in determining how much risk you can afford to take.",
    opts: [
      { label: "Less than 40 years old", detail: "Long runway ahead — time is your greatest asset.", score: 6 },
      { label: "Between 40–55 years old", detail: "Prime earning years with moderate time horizon.", score: 4 },
      { label: "Between 55–70 years old", detail: "Approaching or in retirement planning phase.", score: 2 },
      { label: "More than 70 years old", detail: "Capital preservation becomes a priority.", score: 1 },
    ]
  },
  {
    section: "Income & Stability",
    icon: "💼",
    q: "What best describes your income levels?",
    hint: "Your income stability affects how well you can absorb investment losses.",
    opts: [
      { label: "Expect income to increase at a high rate", detail: "Growing career / business with strong upside.", score: 6 },
      { label: "Expect income to remain steady", detail: "Stable job or predictable business income.", score: 4 },
      { label: "Do not have a fixed monthly income", detail: "Freelance, self-employed, or variable income.", score: 2 },
      { label: "Retired or no active source of income", detail: "Living off savings, pension, or investments.", score: 1 },
    ]
  },
  {
    section: "Time Horizon",
    icon: "⏳",
    q: "When do you plan to start withdrawing money from your portfolio?",
    hint: "Longer time horizons allow you to ride out market volatility.",
    opts: [
      { label: "Less than 1 year", detail: "Short-term need — liquidity is critical.", score: 1 },
      { label: "1 to 3 years", detail: "Near-term goal — some stability needed.", score: 2 },
      { label: "3 to 5 years", detail: "Medium-term — balanced approach works.", score: 3 },
      { label: "More than 5 years", detail: "Long-term — can weather market cycles.", score: 4 },
    ]
  },
  {
    section: "Loss Tolerance",
    icon: "📉",
    q: "If your investments decline by 20% a few months after investing, what would you do?",
    hint: "This reveals your true emotional response to market downturns.",
    opts: [
      { label: "Cut losses and liquidate everything immediately", detail: "Capital safety is non-negotiable for me.", score: 1 },
      { label: "Wait a little longer before deciding", detail: "I'd be worried but give it some time.", score: 2 },
      { label: "Hold steady — volatility is part of investing", detail: "I accept drawdowns as normal market behaviour.", score: 3 },
      { label: "Buy more — I see it as an opportunity", detail: "I'm confident and not rattled by paper losses.", score: 4 },
    ]
  },
  {
    section: "Knowledge Level",
    icon: "📚",
    q: "How would you best describe your investment knowledge?",
    hint: "Your understanding of financial products determines suitable investment complexity.",
    opts: [
      { label: "Limited — only aware of FDs and savings accounts", detail: "Traditional instruments only.", score: 1 },
      { label: "Moderate — familiar with MFs and some risks", detail: "Beyond basics but still learning.", score: 2 },
      { label: "Advanced — regular investor across multiple products", detail: "Comfortable with equity, debt, and hybrids.", score: 3 },
      { label: "Extensive — active investor, self-directed decisions", detail: "Deep understanding across all asset classes.", score: 4 },
    ]
  },
  {
    section: "Investment Style",
    icon: "💡",
    q: "If you received a large lump sum today, how would you invest it?",
    hint: "This reflects your natural preference for safety vs. growth.",
    opts: [
      { label: "Conservative instruments for moderate, stable income", detail: "Safety over returns — FDs, liquid funds.", score: 1 },
      { label: "High income with moderate risk", detail: "Balanced debt-heavy products.", score: 2 },
      { label: "High total return with moderately high risk", detail: "Hybrid or balanced equity funds.", score: 3 },
      { label: "Maximum capital appreciation despite high risk", detail: "Pure equity or growth portfolios.", score: 4 },
    ]
  },
  {
    section: "Financial Dependents",
    icon: "👨‍👩‍👧",
    q: "How many financial dependents do you currently have?",
    hint: "More dependents mean more responsibility and often a need for lower risk.",
    opts: [
      { label: "4 or more", detail: "High financial obligations — stability is key.", score: 1 },
      { label: "2 to 3", detail: "Moderate family responsibilities.", score: 2 },
      { label: "1", detail: "Limited dependents — more flexibility.", score: 3 },
      { label: "None", detail: "Full financial freedom — can take more risk.", score: 4 },
    ]
  },
  {
    section: "Emergency Fund",
    icon: "🛡️",
    q: "Do you have an emergency fund to cover 6+ months of expenses?",
    hint: "An emergency fund acts as a buffer and allows you to stay invested during downturns.",
    opts: [
      { label: "No emergency fund at all", detail: "Investments could be disrupted by emergencies.", score: 1 },
      { label: "Covers 1–3 months of expenses", detail: "Partial cushion — some vulnerability.", score: 2 },
      { label: "Covers 3–6 months of expenses", detail: "Reasonable buffer in place.", score: 3 },
      { label: "Covers 6+ months of expenses", detail: "Strong safety net — free to invest aggressively.", score: 4 },
    ]
  },
  {
    section: "Debt Situation",
    icon: "🏦",
    q: "What is your current level of personal debt (loans, EMIs)?",
    hint: "High debt reduces your investable surplus and risk capacity.",
    opts: [
      { label: "Very high — consuming majority of income", detail: "EMIs eat most of my monthly earnings.", score: 1 },
      { label: "Significant — 40–60% of income as EMIs", detail: "Heavy monthly commitments.", score: 2 },
      { label: "Moderate — 20–40% of income as EMIs", detail: "Manageable obligations.", score: 3 },
      { label: "None or minimal", detail: "Debt-free or very low obligations.", score: 4 },
    ]
  },
  {
    section: "Prior Experience",
    icon: "📊",
    q: "Have you previously experienced a significant market downturn in your portfolio?",
    hint: "Past experience with losses shapes realistic expectations.",
    opts: [
      { label: "No, and I'd find it very distressing", detail: "Untested — likely to react emotionally.", score: 1 },
      { label: "No, but I understand it's possible", detail: "Mentally prepared but not battle-tested.", score: 2 },
      { label: "Yes, and I panicked or exited", detail: "Experienced but reacted emotionally.", score: 3 },
      { label: "Yes, and I stayed invested or bought more", detail: "Battle-tested with disciplined behaviour.", score: 4 },
    ]
  },
  {
    section: "Return Expectation",
    icon: "🎯",
    q: "What annual return are you realistically targeting from your investments?",
    hint: "Higher return expectations naturally imply higher risk tolerance.",
    opts: [
      { label: "Up to 6–7% (FD-like returns)", detail: "Preservation with slight growth.", score: 1 },
      { label: "8–10% (slightly above inflation)", detail: "Steady real-wealth growth.", score: 2 },
      { label: "11–15% (equity-level returns)", detail: "Willing to accept equity volatility.", score: 3 },
      { label: "15%+ (alpha-seeking returns)", detail: "Comfortable with high risk for high reward.", score: 4 },
    ]
  },
  {
    section: "Goal Clarity",
    icon: "🗺️",
    q: "How clearly defined are your financial goals?",
    hint: "Clear goals lead to better investment strategy and discipline.",
    opts: [
      { label: "No specific goals — just want to save", detail: "Accumulation without a target.", score: 1 },
      { label: "Vague goals — broadly aware of needs", detail: "Some direction but not specific.", score: 2 },
      { label: "Defined goals with rough timelines", detail: "Structured thinking in place.", score: 3 },
      { label: "Very specific goals with detailed plans", detail: "Clarity on corpus, timeline, and strategy.", score: 4 },
    ]
  },
];

const PROFILES = [
  {
    min: 12, max: 21, name: "Conservative", color: "#60a5fa", emoji: "🔵",
    desc: "You prioritise capital preservation above all else. You are most comfortable with low-volatility instruments and are willing to accept modest returns in exchange for stability.",
    strengths: ["Capital safety", "Predictable income", "Low stress"],
    watchouts: ["Inflation erosion", "Opportunity cost", "Underperformance vs goals"],
    products: ["Liquid Funds", "Ultra-Short Duration Funds", "Fixed Deposits", "Short-Term Debt Funds", "Government Securities"],
    debt: 80, eq: 20
  },
  {
    min: 22, max: 31, name: "Balanced", color: "#a78bfa", emoji: "🟣",
    desc: "You seek a middle ground — growth without extreme volatility. You understand that some risk is necessary for meaningful wealth creation and are comfortable with calculated exposure.",
    strengths: ["Diversification", "Moderate growth", "Inflation-beating returns"],
    watchouts: ["Market timing temptation", "Rebalancing discipline", "Dual-asset complexity"],
    products: ["Balanced Advantage Funds", "Hybrid Funds", "Corporate Bonds", "Multi-Asset Funds", "Arbitrage Funds"],
    debt: 50, eq: 50
  },
  {
    min: 32, max: 41, name: "Growth", color: "#34d399", emoji: "🟢",
    desc: "You are a growth-oriented investor comfortable with high volatility in pursuit of long-term wealth accumulation. You understand market cycles and can stay the course.",
    strengths: ["Wealth compounding", "Long-term returns", "Equity upside"],
    watchouts: ["Short-term drawdowns", "Behavioural discipline", "Rebalancing timing"],
    products: ["Large Cap Funds", "Flexi Cap Funds", "Index Funds", "NPS", "REITs", "Balanced Advantage Funds"],
    debt: 30, eq: 70
  },
  {
    min: 42, max: 52, name: "High Growth", color: "#f59e0b", emoji: "🟡",
    desc: "You are an aggressive investor who places capital appreciation above security. You are seasoned, self-directed, and fully aware that short-term volatility is the price of extraordinary long-term returns.",
    strengths: ["Maximum wealth creation", "Active participation", "Alpha potential"],
    watchouts: ["Concentration risk", "Emotional discipline", "Liquidity management"],
    products: ["Small & Mid Cap Funds", "Sectoral / Thematic Funds", "Direct Equities", "PMS", "AIFs", "International Funds"],
    debt: 10, eq: 90
  },
];

export default function RiskProfiler() {
  // Page states
  const [step, setStep] = useState(0) // 0 = Intro form, 1..12 = Questions, 13 = Result
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(QUESTIONS.length).fill(null))

  // Metadata state
  const [meta, setMeta] = useState({
    name: '',
    date: '',
    pan: '',
    type: 'new',
    minor: 'no',
    language: 'en'
  })

  // Set default date client-side
  useEffect(() => {
    setMeta(prev => ({
      ...prev,
      date: new Date().toISOString().slice(0, 10)
    }))
  }, [])

  // Gated modal states
  const [showGateModal, setShowGateModal] = useState(false)
  const [gateEmail, setGateEmail] = useState('')
  const [gatePhone, setGatePhone] = useState('')
  const [gateName, setGateName] = useState('')
  const [gateError, setGateError] = useState('')

  // Calculations
  const calculateScore = () => {
    return answers.reduce<number>((sum, val, idx) => sum + (val !== null ? QUESTIONS[idx].opts[val].score : 0), 0)
  }

  const getProfile = (score: number) => {
    return PROFILES.find(p => score >= p.min && score <= p.max) || PROFILES[0]
  }

  const getSectionScores = () => {
    const map: Record<string, { score: number; max: number }> = {}
    answers.forEach((a, i) => {
      const sec = QUESTIONS[i].section
      if (!map[sec]) map[sec] = { score: 0, max: 0 }
      map[sec].max += 6
      if (a !== null) {
        map[sec].score += QUESTIONS[i].opts[a].score
      }
    })
    return map
  }

  const selectOption = (questionIndex: number, optionIndex: number) => {
    const updated = [...answers]
    updated[questionIndex] = optionIndex
    setAnswers(updated)
  }

  const handleStart = () => {
    if (!meta.name.trim()) {
      alert("Please enter Applicant Name.")
      return
    }
    setStep(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNext = () => {
    const currentQIdx = step - 1
    if (answers[currentQIdx] === null) return
    setStep(prev => prev + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setStep(prev => Math.max(0, prev - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleRestart = () => {
    setStep(0)
    setAnswers(new Array(QUESTIONS.length).fill(null))
    setMeta({
      name: '',
      date: new Date().toISOString().slice(0, 10),
      pan: '',
      type: 'new',
      minor: 'no',
      language: 'en'
    })
    setGateEmail('')
    setGatePhone('')
    setGateName('')
    setGateError('')
  }

  const triggerDownload = () => {
    // Open Gated Modal
    setGateName(meta.name)
    setShowGateModal(true)
  }

  const handleGatedSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setGateError('')

    if (!gateName.trim()) {
      setGateError('Please enter your name.')
      return
    }
    if (!gateEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gateEmail)) {
      setGateError('Please enter a valid email address.')
      return
    }
    if (!gatePhone.trim() || gatePhone.trim().length < 10) {
      setGateError('Please enter a valid 10-digit mobile number.')
      return
    }

    // Success! Generate PDF report
    setShowGateModal(false)
    await generatePdfReport()
  }

  const generatePdfReport = async () => {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF({ unit: 'mm', format: 'a4' })
    const score = calculateScore()
    const maxScore = QUESTIONS.length * 6
    const profile = getProfile(score)
    const secScores = getSectionScores()
    const W = 210
    const margin = 18
    let y = 0

    // Red theme branded colors
    const C = {
      red: [220, 38, 38],
      ink: [30, 41, 59],
      mid: [71, 85, 105],
      soft: [148, 163, 184],
      pale: [254, 242, 242], // Light red/rose-50
      blue: [96, 165, 250],
      amber: [245, 158, 11],
      green: [16, 185, 129],
      purple: [139, 92, 246],
      greenBg: [240, 253, 244],
      greenTxt: [22, 101, 52],
      amberBg: [255, 251, 235],
      amberTxt: [146, 64, 14],
      highlightBg: [254, 244, 244],
      divider: [226, 232, 240],
    }

    const fc = (c: number[]) => { doc.setFillColor(c[0], c[1], c[2]) }
    const tc = (c: number[]) => { doc.setTextColor(c[0], c[1], c[2]) }
    const dc = (c: number[]) => { doc.setDrawColor(c[0], c[1], c[2]) }

    const addPage = () => { doc.addPage(); y = 20; }
    const checkY = (needed = 20) => { if (y + needed > 270) addPage(); }

    const barW = W - margin * 2

    const sectionDivider = () => {
      fc(C.red)
      doc.rect(margin, y, barW, 0.5, 'F')
      y += 6
    }

    // ── Page 1: Cover Header ──
    fc(C.ink)
    doc.rect(0, 0, W, 60, 'F')
    fc(C.red)
    doc.rect(0, 60, W, 2, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(22)
    doc.text('Sarthi SIP', margin, 24)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    tc(C.red)
    doc.text('INDIVIDUAL RISK PROFILER REPORT', margin, 32)

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(9)
    doc.text(`Applicant: ${gateName}`, margin, 42)
    doc.text(`PAN / Client ID: ${meta.pan || '\u2014'}   |   Phone: ${gatePhone}   |   Email: ${gateEmail}`, margin, 48)
    doc.text(`Date of Profiling: ${meta.date}   |   Type: ${meta.type === 'new' ? 'New Profiling' : 'Re-profiling'}`, margin, 54)

    y = 74

    // ── Profile Headline ──
    fc(C.pale)
    doc.roundedRect(margin, y, barW, 40, 3, 3, 'F')
    tc(C.red)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text('YOUR RISK PROFILE', margin + 6, y + 10)
    tc(C.ink)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(24)
    doc.text(profile.name, margin + 6, y + 24)
    tc(C.mid)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.text(`Score: ${score} / ${maxScore}`, margin + 6, y + 34)
    tc(C.soft)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.text(`Indicative Allocation: Debt ${profile.debt}%  |  Equity ${profile.eq}%`, W - margin - 2, y + 34, { align: 'right' })
    y += 50

    // ── Allocation Bar ──
    const debtBarW = barW * (profile.debt / 100)
    fc(C.blue)
    doc.rect(margin, y, debtBarW, 6, 'F')
    fc(C.amber)
    doc.rect(margin + debtBarW, y, barW - debtBarW, 6, 'F')
    y += 10
    tc(C.blue)
    doc.setFontSize(8)
    doc.text(`Debt ${profile.debt}%`, margin, y)
    tc(C.amber)
    doc.text(`Equity ${profile.eq}%`, margin + 28, y)
    y += 12

    // ── Profile Description ──
    tc(C.mid)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    const descLines = doc.splitTextToSize(profile.desc, barW)
    doc.text(descLines, margin, y)
    y += descLines.length * 5 + 8

    // ── Strengths & Watchouts ──
    checkY(40)
    const colW = (barW - 6) / 2
    fc(C.greenBg)
    doc.roundedRect(margin, y, colW, 36, 2, 2, 'F')
    tc(C.greenTxt)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.text('STRENGTHS', margin + 4, y + 8)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    tc(C.mid)
    profile.strengths.forEach((s, i) => { doc.text(`• ${s}`, margin + 4, y + 16 + i * 7); })

    const c2 = margin + colW + 6
    fc(C.amberBg)
    doc.roundedRect(c2, y, colW, 36, 2, 2, 'F')
    tc(C.amberTxt)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.text('WATCH-OUTS', c2 + 4, y + 8)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    tc(C.mid)
    profile.watchouts.forEach((w, i) => { doc.text(`• ${w}`, c2 + 4, y + 16 + i * 7); })
    y += 44

    // ── Recommended Products ──
    checkY(30)
    tc(C.red)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text('RECOMMENDED PRODUCT UNIVERSE', margin, y)
    y += 7
    tc(C.mid)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    const prodLine = profile.products.join('   •   ')
    const pLines = doc.splitTextToSize(prodLine, barW)
    doc.text(pLines, margin, y)
    y += pLines.length * 5 + 10

    // ── Section Analysis ──
    checkY(60)
    sectionDivider()
    tc(C.red)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text('RESPONSE ANALYSIS BY CATEGORY', margin, y)
    y += 8

    Object.entries(secScores).forEach(([sec, val]) => {
      checkY(14)
      const pct2 = Math.round((val.score / val.max) * 100)
      const lbl = pct2 >= 75 ? 'Aggressive' : pct2 >= 50 ? 'Moderate-High' : pct2 >= 25 ? 'Moderate-Low' : 'Conservative'
      const col = pct2 >= 75 ? C.green : pct2 >= 50 ? C.purple : pct2 >= 25 ? C.amber : C.blue
      tc(C.mid)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8.5)
      doc.text(sec, margin, y)
      tc(col)
      doc.text(lbl, W - margin - 2, y, { align: 'right' })
      y += 5
      fc(C.divider)
      doc.rect(margin, y, barW, 3, 'F')
      fc(col)
      doc.rect(margin, y, barW * (pct2 / 100), 3, 'F')
      y += 8
    })

    // ── Profile Grid ──
    checkY(50)
    y += 4
    sectionDivider()
    tc(C.red)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text('RISK PROFILE SCORE GRID', margin, y)
    y += 8

    const colWidths = [30, 50, 25, 25]
    const headers = ['Score Range', 'Profile', 'Debt', 'Equity']
    let cx = margin
    headers.forEach((h, i) => {
      tc(C.soft)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      doc.text(h, cx, y)
      cx += colWidths[i]
    })
    y += 6

    PROFILES.forEach(pr => {
      checkY(10)
      const isMe = pr.name === profile.name
      if (isMe) {
        fc(C.highlightBg)
        doc.rect(margin, y - 4, barW, 9, 'F')
      }
      cx = margin
      const rowVals = [`${pr.min}\u2013${pr.max}`, `${pr.name}${isMe ? ' ◄ YOU' : ''}`, `${pr.debt}%`, `${pr.eq}%`]
      rowVals.forEach((v, i) => {
        if (isMe) { tc(C.red); } else { tc(C.mid); }
        doc.setFont('helvetica', isMe ? 'bold' : 'normal')
        doc.setFontSize(8.5)
        doc.text(v, cx, y)
        cx += colWidths[i]
      })
      y += 9
    })

    // ── Answers Summary ──
    y += 8
    checkY(30)
    sectionDivider()
    tc(C.red)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text('APPLICANT RESPONSES SUMMARY', margin, y)
    y += 8

    QUESTIONS.forEach((q, i) => {
      const ans = answers[i]
      checkY(18)
      tc(C.ink)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      const qLines = doc.splitTextToSize(`Q${i + 1}. ${q.q}`, barW)
      doc.text(qLines, margin, y)
      y += qLines.length * 4.5
      tc(C.mid)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      const aText = ans !== null ? `→ ${q.opts[ans].label} [Score: ${q.opts[ans].score}]` : '→ Not answered'
      const aLines = doc.splitTextToSize(aText, barW - 4)
      doc.text(aLines, margin + 4, y)
      y += aLines.length * 4.5 + 4
    })

    // ── Signatures ──
    checkY(60)
    sectionDivider()
    y += 2
    const sigColW = (barW - 10) / 2
    tc(C.red)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.text('CUSTOMER SIGNATURE', margin, y)
    doc.text('WEALTH MANAGER SIGNATURE', margin + sigColW + 10, y)
    y += 5
    dc(C.soft)
    doc.rect(margin, y, sigColW, 18)
    doc.rect(margin + sigColW + 10, y, sigColW, 18)
    y += 22
    tc(C.mid)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.text(`Name: ${gateName}`, margin, y)
    doc.text('Name: Sheetal Suthar', margin + sigColW + 10, y)
    y += 5
    doc.text(`Date: ${meta.date}`, margin, y)
    doc.text('EMP Code: ___________', margin + sigColW + 10, y)
    y += 12

    // ── Disclaimer ──
    checkY(22)
    fc(C.pale)
    doc.rect(margin, y, barW, 20, 'F')
    tc(C.mid)
    doc.setFont('helvetica', 'italic')
    doc.setFontSize(7.5)
    const disclaimer = 'Disclaimer: This risk profile is based on responses provided by the applicant and is valid for 2 years from the date of profiling. The suggested asset allocations are indicative and serve as general guidelines only. Actual portfolio construction should be done in consultation with your wealth manager at Sarthi SIP. M: [+91 80003 83222] | sheetal@sarthisip.com | sarthisip.com'
    const dLines = doc.splitTextToSize(disclaimer, barW - 8)
    doc.text(dLines, margin + 4, y + 5)

    doc.save(`SarthiSIP_RiskProfile_${(gateName || 'Applicant').replace(/\s+/g, '_')}_${meta.date}.pdf`)
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Risk Profiler Tool | Sarthi SIP",
    "description": "Evaluate investment risk tolerance and download customized asset allocation reports.",
    "url": "https://sarthisip.com/resources/risk-profiler",
    "applicationCategory": "FinancialApplication",
    "operatingSystem": "All"
  }

  // Active question details
  const activeQIdx = step - 1
  const currentQuestions = TRANSLATIONS[meta.language || 'en'] || QUESTIONS
  const activeQuestion = step > 0 && step <= QUESTIONS.length ? currentQuestions[activeQIdx] : QUESTIONS[0]
  const pct = Math.round((step / (QUESTIONS.length + 1)) * 100)
  
  const step0 = STEP0_TRANSLATIONS[meta.language || 'en'] || STEP0_TRANSLATIONS.en

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      <main className="container mx-auto px-4 py-10 flex-grow max-w-3xl">
        {step === 0 && (
          <div className="flex justify-end mb-4 animate-fade-in">
            <div className="flex items-center gap-2">
              <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider hidden sm:block">Language / भाषा</Label>
              <Select value={meta.language || 'en'} onValueChange={(value) => setMeta({ ...meta, language: value })}>
                <SelectTrigger className="w-[140px] focus:ring-red-500 h-9 border-slate-200 bg-white shadow-sm font-medium">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">🇬🇧 English</SelectItem>
                  <SelectItem value="hi">🇮🇳 हिंदी</SelectItem>
                  <SelectItem value="gu">🇮🇳 ગુજરાતી</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {step === 0 && (
          <div className="space-y-6 animate-fade-in">
            <Card className="border-slate-200 shadow-md">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-6 md:px-8 text-white rounded-t-xl">
                <span className="text-red-400 text-xs font-semibold uppercase tracking-widest block mb-2 font-mono">
                  {step0.sectionA}
                </span>
                <h1 className="text-2xl md:text-3xl font-extrabold font-display">
                  {step0.title}
                </h1>
                <p className="text-slate-400 text-xs mt-2">
                  {step0.subtitle.replace('{count}', String(QUESTIONS.length))}
                </p>
              </div>

              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="bg-red-50/60 border-l-4 border-red-600 rounded-r-xl p-4 text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  {step0.description}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="mName" className="text-slate-700 text-xs font-bold uppercase tracking-wider">{step0.applicantName}</Label>
                    <Input
                      id="mName"
                      value={meta.name}
                      onChange={(e) => setMeta({ ...meta, name: e.target.value })}
                      placeholder={step0.namePlaceholder}
                      className="mt-1 focus-visible:ring-red-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mDate" className="text-slate-700 text-xs font-bold uppercase tracking-wider">{step0.dateOfProfiling}</Label>
                    <Input
                      id="mDate"
                      type="date"
                      value={meta.date}
                      onChange={(e) => setMeta({ ...meta, date: e.target.value })}
                      className="mt-1 focus-visible:ring-red-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mPan" className="text-slate-700 text-xs font-bold uppercase tracking-wider">{step0.panOptional}</Label>
                    <Input
                      id="mPan"
                      value={meta.pan}
                      onChange={(e) => setMeta({ ...meta, pan: e.target.value })}
                      placeholder={step0.panPlaceholder}
                      className="mt-1 focus-visible:ring-red-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mType" className="text-slate-700 text-xs font-bold uppercase tracking-wider">{step0.profilingType}</Label>
                    <Select value={meta.type} onValueChange={(value) => setMeta({ ...meta, type: value })}>
                      <SelectTrigger className="mt-1 focus:ring-red-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">{step0.newProfiling}</SelectItem>
                        <SelectItem value="reprofiling">{step0.reprofiling}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">{step0.isMinor}</Label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-semibold">
                        <input
                          type="radio"
                          name="minor"
                          value="no"
                          checked={meta.minor !== 'yes'}
                          onChange={() => setMeta({ ...meta, minor: 'no' })}
                          className="accent-red-600 w-4 h-4"
                        />
                        {step0.minorNo}
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-semibold">
                        <input
                          type="radio"
                          name="minor"
                          value="yes"
                          checked={meta.minor === 'yes'}
                          onChange={() => setMeta({ ...meta, minor: 'yes' })}
                          className="accent-red-600 w-4 h-4"
                        />
                        {step0.minorYes}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end pt-6 border-t border-slate-200">
                  <Button
                    onClick={handleStart}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-md shadow-red-600/10 flex items-center gap-2"
                  >
                    {step0.beginAssessment}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {step > 0 && step <= QUESTIONS.length && (
          <div className="space-y-6 animate-fade-in">
            {/* Progress indicators */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  {activeQuestion.section}
                </span>
                <span className="text-xs text-slate-500 font-bold">
                  {step} / {QUESTIONS.length}
                </span>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full flex-1 min-w-[12px] transition-colors duration-300 ${i < step ? 'bg-red-600' : i === step - 1 ? 'bg-red-400' : 'bg-slate-200'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Question Card */}
            <Card className="border-slate-200 shadow-md">
              <CardContent className="p-6 md:p-8 pt-4 md:pt-5 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center text-2xl shrink-0">
                    {activeQuestion.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-red-600 font-bold uppercase tracking-widest block">
                      Question {step}
                    </span>
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
                      {activeQuestion.q}
                    </h2>
                  </div>
                </div>

                {activeQuestion.hint && (
                  <p className="text-xs md:text-sm text-slate-500 bg-slate-50 rounded-xl px-4 py-3 leading-relaxed border border-slate-100 font-medium">
                    💡 {activeQuestion.hint}
                  </p>
                )}

                <div className="space-y-3 pt-2">
                  {activeQuestion.opts.map((opt, oIdx) => {
                    const isSelected = answers[activeQIdx] === oIdx
                    return (
                      <div
                        key={oIdx}
                        onClick={() => selectOption(activeQIdx, oIdx)}
                        className={`border-2 rounded-xl p-4 cursor-pointer select-none transition-all duration-150 flex items-start gap-3 hover:-translate-y-0.5 hover:shadow-sm ${isSelected
                          ? 'border-red-600 bg-red-50/50 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors duration-200 ${isSelected
                            ? 'bg-red-600 text-white border-red-600'
                            : 'border-slate-300 text-slate-500'
                            }`}
                        >
                          {String.fromCharCode(65 + oIdx)}
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-bold ${isSelected ? 'text-red-750' : 'text-slate-800'}`}>
                            {opt.label}
                          </div>
                          {opt.detail && (
                            <div className="text-xs text-slate-500 mt-1 font-medium">
                              {opt.detail}
                            </div>
                          )}
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 mt-1.5 ${isSelected ? 'bg-red-600 border-red-600' : 'border-slate-300'
                            }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>

              <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50/50 rounded-b-xl">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="h-10 text-slate-600 border-slate-200 font-bold hover:bg-slate-100"
                >
                  ← Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={answers[activeQIdx] === null}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold h-10 px-6"
                >
                  {step === QUESTIONS.length ? 'View My Profile' : 'Next Question'} →
                </Button>
              </div>
            </Card>
          </div>
        )}

        {step > QUESTIONS.length && (
          <div className="space-y-6 animate-fade-in">
            {/* Results breakdown */}
            <Card className="border-slate-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 px-8 py-10 text-center relative overflow-hidden text-white">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.3),transparent_70%)]" />
                <div className="relative z-10 space-y-2">
                  <div className="text-4xl">{getProfile(calculateScore()).emoji}</div>
                  <span className="text-red-400 text-xs font-bold uppercase tracking-widest block font-mono">
                    Your Risk Profile Result
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold font-display">
                    {getProfile(calculateScore()).name}
                  </h2>
                  <div className="text-slate-400 text-sm font-semibold">
                    Score: {calculateScore()} / {QUESTIONS.length * 6}
                  </div>

                  {/* Meter visual */}
                  <div className="max-w-sm mx-auto pt-4">
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${(calculateScore() / (QUESTIONS.length * 6)) * 100}%`,
                          backgroundColor: getProfile(calculateScore()).color
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-1 text-[10px] text-slate-500 font-bold uppercase">
                      <span>Conservative</span>
                      <span>Balanced</span>
                      <span>Growth</span>
                      <span>High Growth</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 md:p-8 space-y-8">
                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  {getProfile(calculateScore()).desc}
                </p>

                {/* Indicative Asset Allocation */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold block">
                    Indicative Asset Allocation Mix
                  </h4>
                  <div className="flex rounded-xl overflow-hidden h-10 border border-slate-100">
                    <div
                      className="bg-blue-400 flex items-center justify-center text-white text-xs font-extrabold transition-all"
                      style={{ width: `${getProfile(calculateScore()).debt}%` }}
                    >
                      Debt {getProfile(calculateScore()).debt}%
                    </div>
                    <div
                      className="bg-amber-500 flex items-center justify-center text-white text-xs font-extrabold transition-all"
                      style={{ width: `${getProfile(calculateScore()).eq}%` }}
                    >
                      Equity {getProfile(calculateScore()).eq}%
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs font-bold text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-blue-400 inline-block" />
                      Debt Allocation ({getProfile(calculateScore()).debt}%)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                      Equity Allocation ({getProfile(calculateScore()).eq}%)
                    </span>
                  </div>
                </div>

                {/* Strengths and Watchouts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-5 space-y-3">
                    <h5 className="text-xs uppercase tracking-wider text-emerald-800 font-extrabold">
                      ✓ Strengths
                    </h5>
                    <ul className="space-y-2">
                      {getProfile(calculateScore()).strengths.map((str, idx) => (
                        <li key={idx} className="text-xs md:text-sm text-slate-600 font-bold flex items-start gap-2">
                          <span className="text-emerald-500 mt-0.5">•</span>
                          {str}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50/40 border border-amber-100 rounded-xl p-5 space-y-3">
                    <h5 className="text-xs uppercase tracking-wider text-amber-800 font-extrabold">
                      ⚠ Watch-outs
                    </h5>
                    <ul className="space-y-2">
                      {getProfile(calculateScore()).watchouts.map((wat, idx) => (
                        <li key={idx} className="text-xs md:text-sm text-slate-600 font-bold flex items-start gap-2">
                          <span className="text-amber-500 mt-0.5">•</span>
                          {wat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommended Product Universe */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold block">
                    Recommended Product Universe
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {getProfile(calculateScore()).products.map((prod, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs px-3 py-1.5 rounded-full border-red-200/80 bg-red-50/30 font-bold text-red-800"
                      >
                        {prod}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category Breakdown list */}
            <Card className="border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold block">
                Response Analysis by Category
              </h4>
              <div className="space-y-4">
                {Object.entries(getSectionScores()).map(([sec, val]) => {
                  const qWithIcon = QUESTIONS.find(q => q.section === sec)
                  const secPct = Math.round((val.score / val.max) * 100)
                  const label = secPct >= 75 ? 'Aggressive' : secPct >= 50 ? 'Moderate-High' : secPct >= 25 ? 'Moderate-Low' : 'Conservative'
                  const colorClass = secPct >= 75 ? 'text-emerald-700 bg-emerald-100' : secPct >= 50 ? 'text-indigo-700 bg-indigo-100' : secPct >= 25 ? 'text-amber-700 bg-amber-100' : 'text-blue-700 bg-blue-100'
                  const barColor = secPct >= 75 ? 'bg-emerald-500' : secPct >= 50 ? 'bg-indigo-500' : secPct >= 25 ? 'bg-amber-500' : 'bg-blue-500'

                  return (
                    <div key={sec} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs md:text-sm">
                        <span className="font-bold text-slate-700">
                          {qWithIcon?.icon} {sec}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] px-2 py-0.5 font-bold uppercase rounded ${colorClass}`}>
                            {label}
                          </span>
                          <span className="text-slate-400 font-bold text-xs">{val.score}/{val.max}</span>
                        </div>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${barColor}`} style={{ width: `${secPct}%` }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            {/* Score Grid comparison */}
            <Card className="border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold block">
                Risk Profile Score Grid Reference
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm text-left">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="py-2.5 font-extrabold text-slate-500 text-xs uppercase tracking-wider">Score</th>
                      <th className="py-2.5 font-extrabold text-slate-500 text-xs uppercase tracking-wider">Profile</th>
                      <th className="py-2.5 font-extrabold text-slate-500 text-xs uppercase tracking-wider">Debt</th>
                      <th className="py-2.5 font-extrabold text-slate-500 text-xs uppercase tracking-wider">Equity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROFILES.map((p, idx) => {
                      const isMe = p.name === getProfile(calculateScore()).name
                      return (
                        <tr key={idx} className={`border-b border-slate-100 ${isMe ? 'bg-red-50/50' : ''}`}>
                          <td className={`py-3 font-bold ${isMe ? 'text-red-750' : 'text-slate-600'}`}>
                            {p.min}–{p.max}
                          </td>
                          <td className={`py-3 font-bold flex items-center gap-1.5 ${isMe ? 'text-red-750' : 'text-slate-800'}`}>
                            <span>{p.emoji} {p.name}</span>
                            {isMe && (
                              <Badge className="bg-red-600 text-white hover:bg-red-600 text-[10px] scale-90">
                                You
                              </Badge>
                            )}
                          </td>
                          <td className={`py-3 font-bold ${isMe ? 'text-red-750' : 'text-slate-600'}`}>
                            {p.debt}%
                          </td>
                          <td className={`py-3 font-bold ${isMe ? 'text-red-750' : 'text-slate-600'}`}>
                            {p.eq}%
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Signature & Disclaimer with Gated PDF Download Action */}
            <Card className="border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                <strong>Disclaimer:</strong> This risk profile is based on responses provided by the applicant and is valid for 2 years from the date of profiling. The suggested asset allocations are indicative and serve as general guidelines only. Actual portfolio construction should be done in consultation with your wealth manager at Sarthi SIP.
              </p>

              {/* Signature Boxes */}
              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h5 className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider">
                    Customer Signature
                  </h5>
                  <div className="border border-slate-200 rounded-xl h-16 bg-slate-50 flex items-end px-3 py-2">
                    <span className="text-[10px] text-slate-400 font-bold">{meta.name || 'Applicant'}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold">Date: {meta.date}</div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider">
                    Wealth Manager Signature
                  </h5>
                  <div className="border border-slate-200 rounded-xl h-16 bg-slate-50 flex items-end px-3 py-2">
                    <span className="text-[10px] text-slate-400 font-bold">Sheetal Suthar</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold">EMP Code: ARN-257409</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                <Button
                  onClick={triggerDownload}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold h-12 rounded-xl shadow-md shadow-red-600/10 flex items-center justify-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  Download PDF Report (Gated)
                </Button>
                <Button
                  onClick={handleRestart}
                  variant="outline"
                  className="flex-1 border-slate-200 text-slate-700 hover:bg-slate-100 font-bold h-12 rounded-xl"
                >
                  Start New Assessment
                </Button>
              </div>
            </Card>
          </div>
        )}
      </main>

      {/* Gated Modal popup */}
      {showGateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-md shadow-2xl p-6 md:p-8 space-y-6 relative">
            <button
              onClick={() => setShowGateModal(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 font-bold text-lg"
            >
              ✕
            </button>

            <div className="space-y-2 text-center">
              <div className="mx-auto w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Download Your Report</h3>
              <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                Please provide your contact information to access the full PDF report containing your recommended asset allocation and analysis.
              </p>
            </div>

            {gateError && (
              <div className="bg-red-50 text-red-700 text-xs p-3 rounded-lg border border-red-150 font-bold text-center">
                {gateError}
              </div>
            )}

            <form onSubmit={handleGatedSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="gateName" className="text-xs font-bold text-slate-700">Full Name</Label>
                <Input
                  id="gateName"
                  value={gateName}
                  onChange={(e) => setGateName(e.target.value)}
                  placeholder="e.g. Rajesh Patel"
                  className="focus-visible:ring-red-500"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="gateEmail" className="text-xs font-bold text-slate-700">Email Address</Label>
                <Input
                  id="gateEmail"
                  type="email"
                  value={gateEmail}
                  onChange={(e) => setGateEmail(e.target.value)}
                  placeholder="e.g. rajesh@gmail.com"
                  className="focus-visible:ring-red-500"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="gatePhone" className="text-xs font-bold text-slate-700">Mobile Number</Label>
                <Input
                  id="gatePhone"
                  type="tel"
                  value={gatePhone}
                  onChange={(e) => setGatePhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="focus-visible:ring-red-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-11 shadow-md shadow-red-600/10 flex items-center justify-center gap-2 mt-4"
              >
                Submit & Download PDF Report
                <Sparkles className="h-4.5 w-4.5 text-red-200" />
              </Button>

              <div className="flex justify-center items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider pt-2">
                <Lock className="w-3 h-3 text-red-500" />
                <span>Your privacy is secured</span>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
