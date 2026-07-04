import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  access: {
    read: () => true, // allow public read
  },
  fields: [
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true, defaultValue: 'Sarthi SIP | Mutual Funds, Insurance & Property Valuation' },
        { name: 'description', type: 'textarea', required: true, defaultValue: 'Invest in systematic plans and build wealth with Sarthi SIP (formerly SS Sarthi Financial Services). Expert mutual fund advisory, LIC insurance policies, tax planning, and government-approved property valuation in Ahmedabad.' },
      ],
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'badge', type: 'text', required: true, defaultValue: 'Your sarthi in your financial journey' },
        { name: 'heading', type: 'text', required: true, defaultValue: 'Your Trusted Guide in' },
        { name: 'highlightedText', type: 'text', required: true, defaultValue: 'Mutual Funds, Insurance & Valuation' },
        { name: 'description', type: 'textarea', required: true, defaultValue: 'Expert advisory across Mutual Funds, Bonds, LIC, Taxation, General Insurance, and Govt-approved Property Valuation. Empowering investors with transparent, evidence-based wealth management.' },
        { name: 'primaryButtonText', type: 'text', required: true, defaultValue: 'Free Portfolio Review' },
        { name: 'primaryButtonHref', type: 'text', required: true, defaultValue: '/resources/risk-profiler' },
        { name: 'secondaryButtonText', type: 'text', required: true, defaultValue: 'Try Financial Tools' },
        { name: 'secondaryButtonHref', type: 'text', required: true, defaultValue: '#tools' },
        {
          name: 'stats',
          type: 'array',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
        { name: 'formTitle', type: 'text', required: true, defaultValue: 'Schedule Appointment' },
        { name: 'formButtonText', type: 'text', required: true, defaultValue: 'Schedule Appointment/Consultation' },
      ],
    },
    {
      name: 'aboutUs',
      type: 'group',
      fields: [
        { name: 'badge', type: 'text', required: true, defaultValue: 'About Our Firm' },
        { name: 'heading', type: 'text', required: true, defaultValue: 'Sarthi SIP Financial Services' },
        { name: 'description1', type: 'textarea', required: true, defaultValue: 'SS Sarthi signifies a dedicated guide or charioteer. We operate with strict compliance guidelines, supporting over 500+ families with goal planning and asset management advisory solutions.' },
        { name: 'description2', type: 'textarea', required: true, defaultValue: 'We believe in commission transparency, and fee disclosures. Our advisory team is built to prioritize client goals above all else.' },
        { name: 'buttonText', type: 'text', required: true, defaultValue: 'Read Our Full Legacy Story' },
        { name: 'buttonHref', type: 'text', required: true, defaultValue: '/about' },
        {
          name: 'features',
          type: 'array',
          fields: [
            { name: 'iconName', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        }
      ]
    },
    {
      name: 'financialResources',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text', required: true, defaultValue: 'Try Free Financial Resources' },
        { name: 'description', type: 'textarea', required: true, defaultValue: 'Plan your systematic savings, evaluate retirement sums, or profile your risk tolerance instantly.' },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'iconName', type: 'text', required: true, admin: { description: 'Icon name like Calculator, Target, BarChart3, etc.' } },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'href', type: 'text', required: true },
            { name: 'buttonText', type: 'text', required: true },
          ],
        }
      ]
    },
    {
      name: 'conversionBanner',
      type: 'group',
      fields: [
        { name: 'badge', type: 'text', required: true, defaultValue: 'Start Your Financial Journey' },
        { name: 'heading', type: 'text', required: true, defaultValue: 'Take Control of Your Wealth Protection and Growth' },
        { name: 'description', type: 'textarea', required: true, defaultValue: 'Contact our advisory team directly. Let us schedule a free review session of your current mutual funds or value your property.' },
        { name: 'primaryButtonText', type: 'text', required: true, defaultValue: 'Connect with us' },
        { name: 'primaryButtonHref', type: 'text', required: true, defaultValue: '/contact' },
        { name: 'secondaryButtonText', type: 'text', required: true, defaultValue: 'Call us Now' },
        { name: 'secondaryButtonHref', type: 'text', required: true, defaultValue: 'tel:+918000383222' },
        {
          name: 'contactInfo',
          type: 'array',
          fields: [
            { name: 'iconName', type: 'text', required: true },
            { name: 'text', type: 'text', required: true },
          ]
        }
      ]
    }
  ]
}
