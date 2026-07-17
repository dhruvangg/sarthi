import { CollectionConfig } from 'payload'
import { encryptFieldHook, decryptFieldHook } from '../lib/encryption'

export const RiskProfileSubmissions: CollectionConfig = {
  slug: 'risk-profile-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'riskProfile', 'score', 'createdAt'],
    description: 'Risk profiler form submissions with full assessment responses.',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: () => true,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    // ────────────────────────────────────────────
    // STEP 0: Applicant Info (Intro Form)
    // ────────────────────────────────────────────
    {
      type: 'collapsible',
      label: '📋 Applicant Information',
      admin: { initCollapsed: false },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              label: 'Applicant Name',
              hooks: {
                beforeChange: [encryptFieldHook],
                afterRead: [decryptFieldHook],
              },
            },
            {
              name: 'phone',
              type: 'text',
              required: true,
              label: 'Mobile Number',
              hooks: {
                beforeChange: [encryptFieldHook],
                afterRead: [decryptFieldHook],
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'email',
              type: 'text',
              required: true,
              label: 'Email Address',
              hooks: {
                beforeChange: [encryptFieldHook],
                afterRead: [decryptFieldHook],
              },
            },
            {
              name: 'pan',
              type: 'text',
              label: 'PAN / Client ID',
              hooks: {
                beforeChange: [encryptFieldHook],
                afterRead: [decryptFieldHook],
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'profilingType',
              type: 'select',
              label: 'Profiling Type',
              options: [
                { label: 'New Profiling', value: 'new' },
                { label: 'Re-profiling', value: 'reprofiling' },
              ],
            },
            {
              name: 'isMinor',
              type: 'checkbox',
              label: 'Minor Applicant',
              defaultValue: false,
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'profilingDate',
              type: 'date',
              label: 'Date of Profiling',
            },
            {
              name: 'language',
              type: 'select',
              label: 'Language Used',
              options: [
                { label: 'English', value: 'en' },
                { label: 'Hindi', value: 'hi' },
                { label: 'Gujarati', value: 'gu' },
              ],
            },
          ],
        },
      ],
    },

    // ────────────────────────────────────────────
    // QUESTIONS 1-12: Individual Response Fields
    // ────────────────────────────────────────────
    {
      type: 'collapsible',
      label: '📝 Assessment Responses (12 Questions)',
      admin: { initCollapsed: false },
      fields: [
        // Q1: Personal Profile — Age
        {
          name: 'q1Age',
          type: 'select',
          label: 'Q1. What is your age? (Personal Profile)',
          options: [
            { label: 'Less than 40 years old (Score: 6)', value: 'under-40' },
            { label: 'Between 40–55 years old (Score: 4)', value: '40-55' },
            { label: 'Between 55–70 years old (Score: 2)', value: '55-70' },
            { label: 'More than 70 years old (Score: 1)', value: 'over-70' },
          ],
        },

        // Q2: Income & Stability
        {
          name: 'q2Income',
          type: 'select',
          label: 'Q2. Income levels? (Income & Stability)',
          options: [
            { label: 'Expect income to increase at a high rate (Score: 6)', value: 'increasing' },
            { label: 'Expect income to remain steady (Score: 4)', value: 'steady' },
            { label: 'Do not have a fixed monthly income (Score: 2)', value: 'variable' },
            { label: 'Retired or no active source of income (Score: 1)', value: 'retired' },
          ],
        },

        // Q3: Time Horizon
        {
          name: 'q3TimeHorizon',
          type: 'select',
          label: 'Q3. When do you plan to start withdrawing? (Time Horizon)',
          options: [
            { label: 'Less than 1 year (Score: 1)', value: 'under-1yr' },
            { label: '1 to 3 years (Score: 2)', value: '1-3yr' },
            { label: '3 to 5 years (Score: 3)', value: '3-5yr' },
            { label: 'More than 5 years (Score: 4)', value: 'over-5yr' },
          ],
        },

        // Q4: Loss Tolerance
        {
          name: 'q4LossTolerance',
          type: 'select',
          label: 'Q4. If investments decline 20%, what would you do? (Loss Tolerance)',
          options: [
            { label: 'Cut losses and liquidate immediately (Score: 1)', value: 'liquidate' },
            { label: 'Wait a little longer before deciding (Score: 2)', value: 'wait' },
            { label: 'Hold steady — volatility is part of investing (Score: 3)', value: 'hold' },
            { label: 'Buy more — I see it as an opportunity (Score: 4)', value: 'buy-more' },
          ],
        },

        // Q5: Knowledge Level
        {
          name: 'q5Knowledge',
          type: 'select',
          label: 'Q5. Investment knowledge level? (Knowledge Level)',
          options: [
            { label: 'Limited — only aware of FDs and savings (Score: 1)', value: 'limited' },
            { label: 'Moderate — familiar with MFs and some risks (Score: 2)', value: 'moderate' },
            { label: 'Advanced — regular investor across products (Score: 3)', value: 'advanced' },
            { label: 'Extensive — active investor, self-directed (Score: 4)', value: 'extensive' },
          ],
        },

        // Q6: Investment Style
        {
          name: 'q6InvestmentStyle',
          type: 'select',
          label: 'Q6. How would you invest a large lump sum? (Investment Style)',
          options: [
            { label: 'Conservative instruments for stable income (Score: 1)', value: 'conservative' },
            { label: 'High income with moderate risk (Score: 2)', value: 'moderate-risk' },
            { label: 'High total return with moderately high risk (Score: 3)', value: 'high-return' },
            { label: 'Maximum capital appreciation despite high risk (Score: 4)', value: 'max-growth' },
          ],
        },

        // Q7: Financial Dependents
        {
          name: 'q7Dependents',
          type: 'select',
          label: 'Q7. How many financial dependents? (Financial Dependents)',
          options: [
            { label: '4 or more (Score: 1)', value: '4-plus' },
            { label: '2 to 3 (Score: 2)', value: '2-3' },
            { label: '1 (Score: 3)', value: '1' },
            { label: 'None (Score: 4)', value: 'none' },
          ],
        },

        // Q8: Emergency Fund
        {
          name: 'q8EmergencyFund',
          type: 'select',
          label: 'Q8. Emergency fund coverage? (Emergency Fund)',
          options: [
            { label: 'No emergency fund at all (Score: 1)', value: 'none' },
            { label: 'Covers 1–3 months (Score: 2)', value: '1-3months' },
            { label: 'Covers 3–6 months (Score: 3)', value: '3-6months' },
            { label: 'Covers 6+ months (Score: 4)', value: '6plus-months' },
          ],
        },

        // Q9: Debt Situation
        {
          name: 'q9Debt',
          type: 'select',
          label: 'Q9. Current level of personal debt? (Debt Situation)',
          options: [
            { label: 'Very high — consuming majority of income (Score: 1)', value: 'very-high' },
            { label: 'Significant — 40–60% of income as EMIs (Score: 2)', value: 'significant' },
            { label: 'Moderate — 20–40% of income as EMIs (Score: 3)', value: 'moderate' },
            { label: 'None or minimal (Score: 4)', value: 'none' },
          ],
        },

        // Q10: Prior Experience
        {
          name: 'q10PriorExperience',
          type: 'select',
          label: 'Q10. Experienced a market downturn before? (Prior Experience)',
          options: [
            { label: 'No, and I\'d find it very distressing (Score: 1)', value: 'no-distressing' },
            { label: 'No, but I understand it\'s possible (Score: 2)', value: 'no-understood' },
            { label: 'Yes, and I panicked or exited (Score: 3)', value: 'yes-panicked' },
            { label: 'Yes, and I stayed invested or bought more (Score: 4)', value: 'yes-stayed' },
          ],
        },

        // Q11: Return Expectation
        {
          name: 'q11ReturnExpectation',
          type: 'select',
          label: 'Q11. Target annual return? (Return Expectation)',
          options: [
            { label: 'Up to 6–7% / FD-like returns (Score: 1)', value: '6-7pct' },
            { label: '8–10% / slightly above inflation (Score: 2)', value: '8-10pct' },
            { label: '11–15% / equity-level returns (Score: 3)', value: '11-15pct' },
            { label: '15%+ / alpha-seeking returns (Score: 4)', value: '15plus-pct' },
          ],
        },

        // Q12: Goal Clarity
        {
          name: 'q12GoalClarity',
          type: 'select',
          label: 'Q12. How clearly defined are your financial goals? (Goal Clarity)',
          options: [
            { label: 'No specific goals — just want to save (Score: 1)', value: 'no-goals' },
            { label: 'Vague goals — broadly aware of needs (Score: 2)', value: 'vague' },
            { label: 'Defined goals with rough timelines (Score: 3)', value: 'defined' },
            { label: 'Very specific goals with detailed plans (Score: 4)', value: 'specific' },
          ],
        },
      ],
    },

    // ────────────────────────────────────────────
    // RESULT: Computed Profile & Allocation
    // ────────────────────────────────────────────
    {
      type: 'collapsible',
      label: '📊 Assessment Result',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'riskProfile',
          type: 'select',
          required: true,
          label: 'Risk Profile',
          options: [
            { label: '🔵 Conservative', value: 'conservative' },
            { label: '🟣 Balanced', value: 'balanced' },
            { label: '🟢 Growth', value: 'growth' },
            { label: '🟡 High Growth', value: 'high-growth' },
          ],
          admin: { position: 'sidebar' },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'score',
              type: 'number',
              required: true,
              label: 'Total Score',
            },
            {
              name: 'maxScore',
              type: 'number',
              required: true,
              label: 'Max Possible Score',
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'debtAllocation',
              type: 'number',
              label: 'Debt Allocation %',
            },
            {
              name: 'equityAllocation',
              type: 'number',
              label: 'Equity Allocation %',
            },
          ],
        },
      ],
    },

    // ────────────────────────────────────────────
    // STATUS: Lead tracking
    // ────────────────────────────────────────────
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      label: 'Status',
      options: [
        { label: '🆕 New', value: 'new' },
        { label: '📞 Contacted', value: 'contacted' },
        { label: '✅ Closed', value: 'closed' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
  timestamps: true,
}
