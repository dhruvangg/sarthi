import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      // Step 0: Applicant info
      name, email, phone, pan,
      profilingType, isMinor, profilingDate, language,
      // Questions 1-12
      q1Age, q2Income, q3TimeHorizon, q4LossTolerance,
      q5Knowledge, q6InvestmentStyle, q7Dependents, q8EmergencyFund,
      q9Debt, q10PriorExperience, q11ReturnExpectation, q12GoalClarity,
      // Result
      riskProfile, score, maxScore,
      debtAllocation, equityAllocation,
    } = body

    if (!name || !email || !phone || !riskProfile || score === undefined) {
      return NextResponse.json(
        { error: 'Name, email, phone, risk profile, and score are required.' },
        { status: 400 }
      )
    }

    const payload = await getPayload({ config })

    const submission = await payload.create({
      collection: 'risk-profile-submissions',
      data: {
        // Step 0
        name,
        email,
        phone,
        pan: pan || undefined,
        profilingType: profilingType || 'new',
        isMinor: isMinor || false,
        profilingDate: profilingDate || undefined,
        language: language || 'en',
        // Questions
        q1Age: q1Age || undefined,
        q2Income: q2Income || undefined,
        q3TimeHorizon: q3TimeHorizon || undefined,
        q4LossTolerance: q4LossTolerance || undefined,
        q5Knowledge: q5Knowledge || undefined,
        q6InvestmentStyle: q6InvestmentStyle || undefined,
        q7Dependents: q7Dependents || undefined,
        q8EmergencyFund: q8EmergencyFund || undefined,
        q9Debt: q9Debt || undefined,
        q10PriorExperience: q10PriorExperience || undefined,
        q11ReturnExpectation: q11ReturnExpectation || undefined,
        q12GoalClarity: q12GoalClarity || undefined,
        // Result
        riskProfile,
        score,
        maxScore,
        debtAllocation: debtAllocation || undefined,
        equityAllocation: equityAllocation || undefined,
        status: 'new',
      },
    })

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Risk profile submission error:', error)
    return NextResponse.json(
      { error: 'Failed to save risk profile submission.' },
      { status: 500 }
    )
  }
}
