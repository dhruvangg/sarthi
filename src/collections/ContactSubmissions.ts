import { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'services', 'createdAt'],
    description: 'Form submissions from the website contact forms.',
  },
  access: {
    // Only admins can read/manage submissions
    read: ({ req: { user } }) => !!user,
    create: () => true, // Allow public form submissions via API
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Mobile Number',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
    },
    {
      name: 'services',
      type: 'select',
      hasMany: true,
      label: 'Interested Services',
      options: [
        { label: 'Mutual Funds Investment', value: 'mutual-funds' },
        { label: 'Insurance Advisory', value: 'insurance' },
        { label: 'Tax Planning', value: 'tax-planning' },
        { label: 'Property Valuation', value: 'property-valuation' },
        { label: 'Comprehensive Financial Planning', value: 'financial-planning' },
        { label: 'All types of Loan', value: 'loan' },
      ],
    },
    {
      name: 'remarks',
      type: 'textarea',
      label: 'Additional Queries',
    },
    {
      name: 'source',
      type: 'text',
      label: 'Form Source',
      admin: {
        description: 'Which page the form was submitted from (e.g., "homepage", "contact")',
      },
    },
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
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
