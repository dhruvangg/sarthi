import { GlobalConfig } from 'payload'

export const FundScreenerPage: GlobalConfig = {
  slug: 'fund-screener-page',
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
      name: 'filters',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'searchLabel', type: 'text', required: true },
        { name: 'searchPlaceholder', type: 'text', required: true },
        { name: 'categoryLabel', type: 'text', required: true },
        { name: 'categoryPlaceholder', type: 'text', required: true },
        { name: 'allCategories', type: 'text', required: true },
        { name: 'fundHouseLabel', type: 'text', required: true },
        { name: 'fundHousePlaceholder', type: 'text', required: true },
        { name: 'allFundHouses', type: 'text', required: true },
        { name: 'applyButton', type: 'text', required: true },
        { name: 'resetButton', type: 'text', required: true },
      ]
    },
    {
      name: 'results',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'loadingText', type: 'text', required: true },
        { name: 'errorTitle', type: 'text', required: true },
        { name: 'errorButton', type: 'text', required: true },
        { name: 'prevButton', type: 'text', required: true },
        { name: 'nextButton', type: 'text', required: true },
        { name: 'noResults', type: 'text', required: true },
        { name: 'investButton', type: 'text', required: true },
        { name: 'prevPageButton', type: 'text', required: true },
        { name: 'nextPageButton', type: 'text', required: true },
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
