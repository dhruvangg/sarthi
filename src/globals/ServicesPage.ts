import { GlobalConfig } from 'payload'

export const ServicesPage: GlobalConfig = {
  slug: 'services-page',
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
        { name: 'highlightedText', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'services',
      type: 'array',
      fields: [
        { name: 'id', type: 'text', required: true },
        { name: 'number', type: 'text', required: true },
        { name: 'iconName', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'features',
          type: 'array',
          fields: [
            { name: 'feature', type: 'text', required: true }
          ]
        },
        {
          name: 'tags',
          type: 'array',
          fields: [
            { name: 'tag', type: 'text', required: true }
          ]
        }
      ]
    },
    {
      name: 'conversionBanner',
      type: 'group',
      fields: [
        { name: 'badge', type: 'text', required: true },
        { name: 'heading', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'primaryButtonText', type: 'text', required: true },
        { name: 'primaryButtonHref', type: 'text', required: true },
        { name: 'secondaryButtonText', type: 'text', required: true },
        { name: 'secondaryButtonHref', type: 'text', required: true },
      ]
    }
  ]
}
