import { GlobalConfig } from 'payload'

export const GoalPlannerPage: GlobalConfig = {
  slug: 'goal-planner-page',
  access: {
    read: () => true, // allow public read
  },
  fields: [
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'badge', type: 'text', required: true },
        { name: 'heading', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'goalDetails',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'goalTypeLabel', type: 'text', required: true },
        { name: 'goalAmountLabel', type: 'text', required: true },
        { name: 'timeToGoalLabel', type: 'text', required: true },
        {
          name: 'goalTypes',
          type: 'array',
          fields: [
            { name: 'id', type: 'text', required: true },
            { name: 'name', type: 'text', required: true },
            { name: 'icon', type: 'text', required: true },
          ]
        }
      ]
    },
    {
      name: 'investmentParameters',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'currentSavingsLabel', type: 'text', required: true },
        { name: 'expectedReturnLabel', type: 'text', required: true },
        { name: 'inflationLabel', type: 'text', required: true },
      ]
    },
    {
      name: 'goalAnalysis',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'goalAmountLabel', type: 'text', required: true },
        { name: 'inflationAdjustedGoalLabel', type: 'text', required: true },
        { name: 'monthlyInvestmentNeededLabel', type: 'text', required: true },
      ]
    },
    {
      name: 'investmentTimeline',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'currentAgeLabel', type: 'text', required: true },
        { name: 'goalAchievementAgeLabel', type: 'text', required: true },
        { name: 'investmentPeriodLabel', type: 'text', required: true },
        { name: 'totalMonthlyInvestmentsLabel', type: 'text', required: true },
      ]
    },
    {
      name: 'actions',
      type: 'group',
      fields: [
        { name: 'primaryButtonText', type: 'text', required: true },
        { name: 'primaryButtonHref', type: 'text', required: true },
        { name: 'secondaryButtonText', type: 'text', required: true },
        { name: 'secondaryButtonHref', type: 'text', required: true },
      ]
    },
    {
      name: 'tips',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'heading', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ]
        }
      ]
    }
  ]
}
