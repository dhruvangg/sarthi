import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { Users } from './src/collections/Users'
import { ContactSubmissions } from './src/collections/ContactSubmissions'
import { RiskProfileSubmissions } from './src/collections/RiskProfileSubmissions'

import { HomePage } from './src/globals/HomePage'
import { AboutPage } from './src/globals/AboutPage'
import { ContactPage } from './src/globals/ContactPage'
import { ServicesPage } from './src/globals/ServicesPage'
import { FundScreenerPage } from './src/globals/FundScreenerPage'
import { GoalPlannerPage } from './src/globals/GoalPlannerPage'
import { SipPage } from './src/globals/SipPage'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, ContactSubmissions, RiskProfileSubmissions],
  globals: [
    HomePage,
    AboutPage,
    ContactPage,
    ServicesPage,
    FundScreenerPage,
    GoalPlannerPage,
    SipPage
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE_THAT_IS_LONG_ENOUGH',
  typescript: {
    outputFile: path.resolve(process.cwd(), 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
})
