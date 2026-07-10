import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

// Map display labels to select option values
const SERVICE_VALUE_MAP: Record<string, string> = {
  'Mutual Funds Investment': 'mutual-funds',
  'Insurance Advisory': 'insurance',
  'Tax Planning': 'tax-planning',
  'Property Valuation': 'property-valuation',
  'Comprehensive Financial Planning': 'financial-planning',
  'All types of Loan': 'loan',
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, services, remarks, source } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required.' },
        { status: 400 }
      )
    }

    // Convert service labels to select values
    const serviceValues = (Array.isArray(services) ? services : [])
      .map((s: string) => SERVICE_VALUE_MAP[s])
      .filter(Boolean)

    const payload = await getPayload({ config })

    const submission = await payload.create({
      collection: 'contact-submissions',
      data: {
        name,
        phone,
        email: email || undefined,
        services: serviceValues,
        remarks: remarks || undefined,
        source: source || 'website',
        status: 'new',
      },
    })

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to save submission.' },
      { status: 500 }
    )
  }
}
