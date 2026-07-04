import { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  access: {
    read: () => true, // allow public read
  },
  fields: [
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true, defaultValue: 'About Us | Sarthi SIP' },
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
        {
          name: 'stats',
          type: 'array',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },
    {
      name: 'story',
      type: 'group',
      fields: [
        { name: 'badge', type: 'text', required: true },
        { name: 'heading', type: 'text', required: true },
        { name: 'description1', type: 'textarea', required: true },
        { name: 'description2', type: 'textarea', required: true },
        {
          name: 'credentials',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
          ]
        }
      ]
    },
    {
      name: 'missionVision',
      type: 'group',
      fields: [
        { name: 'missionBadge', type: 'text', required: true },
        { name: 'missionTitle', type: 'text', required: true },
        { name: 'missionDescription', type: 'textarea', required: true },
        { name: 'visionBadge', type: 'text', required: true },
        { name: 'visionTitle', type: 'text', required: true },
        { name: 'visionDescription', type: 'textarea', required: true },
      ]
    },
    {
      name: 'coreValues',
      type: 'group',
      fields: [
        { name: 'badge', type: 'text', required: true },
        { name: 'heading', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'iconName', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ]
        }
      ]
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'buttonText', type: 'text', required: true },
        { name: 'buttonHref', type: 'text', required: true },
      ]
    }
  ]
}
