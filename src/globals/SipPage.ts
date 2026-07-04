import { GlobalConfig } from 'payload'

export const SipPage: GlobalConfig = {
  slug: 'sip-page',
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
      name: 'investmentDetails',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'monthlyInvestmentLabel', type: 'text', required: true },
        { name: 'expectedReturnLabel', type: 'text', required: true },
        { name: 'timePeriodLabel', type: 'text', required: true },
      ]
    },
    {
      name: 'investmentResults',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'totalInvestmentLabel', type: 'text', required: true },
        { name: 'estimatedReturnsLabel', type: 'text', required: true },
        { name: 'totalValueLabel', type: 'text', required: true },
      ]
    },
    {
      name: 'visualRepresentation',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'principalAmountLabel', type: 'text', required: true },
        { name: 'returnsLabel', type: 'text', required: true },
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
      name: 'disclaimer',
      type: 'group',
      fields: [
        { name: 'text', type: 'textarea', required: true },
      ]
    }
  ]
}
