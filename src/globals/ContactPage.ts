import { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
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
      name: 'contactDetails',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'methods',
          type: 'array',
          fields: [
            { name: 'id', type: 'text', required: true },
            { name: 'iconName', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'value', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
            { name: 'linkText', type: 'text', required: true },
          ]
        }
      ]
    },
    {
      name: 'map',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'address', type: 'textarea', required: true },
        { name: 'embedUrl', type: 'text', required: true },
        { name: 'buttonText', type: 'text', required: true },
        { name: 'buttonHref', type: 'text', required: true },
      ]
    },
    {
      name: 'form',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'buttonText', type: 'text', required: true },
      ]
    }
  ]
}
