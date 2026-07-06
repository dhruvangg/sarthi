import { getPayload } from 'payload'
import config from '../payload.config'

import homePageData from './data/homepage-content.json'
import aboutPageData from './data/aboutpage-content.json'
import contactPageData from './data/contact-content.json'
import servicesPageData from './data/services-content.json'
import fundScreenerData from './data/fund-screener-content.json'
import goalPlannerData from './data/goal-planner-content.json'
import sipPageData from './data/sip-content.json'

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding globals...')
  
  try { await payload.updateGlobal({ slug: 'home-page', data: homePageData as any }); console.log('home-page seeded') } catch(e:any) { console.error('home-page error', e.message) }
  try { await payload.updateGlobal({ slug: 'about-page', data: aboutPageData as any }); console.log('about-page seeded') } catch(e:any) { console.error('about-page error', e.message) }
  // Transform contact page data to match schema
  const formattedContactData = {
    ...contactPageData,
    contactDetails: {
      heading: "Contact Options",
      description: "Reach out to us.",
      methods: [
        { id: "1", iconName: "Phone", title: "Phone", value: "+91 8000 383 222", href: "tel:+918000383222", linkText: "Call us" },
        { id: "2", iconName: "Mail", title: "Email", value: "hello@sarthisip.com", href: "mailto:hello@sarthisip.com", linkText: "Email us" }
      ]
    },
    map: {
      heading: "Visit Us",
      address: "412, The Edge, Opp. Malabar Royal Bungalows, Bhakti Circle Road, Nikol, Ahmedabad-382350",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.391782299839!2d72.6738981!3d23.0461625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e876007ec1cdb%3A0xe9f79b0c279a0cf5!2sThe%20Edge!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      buttonText: "Get Directions",
      buttonHref: "https://maps.google.com"
    }
  }

  // Transform services page data
  const formattedServicesData = {
    ...servicesPageData,
    services: servicesPageData.services.map((service: any) => ({
      ...service,
      features: service.features.map((f: string) => ({ feature: f })),
      tags: service.tags.map((t: string) => ({ tag: t }))
    }))
  }

  try { await payload.updateGlobal({ slug: 'contact-page', data: formattedContactData as any }); console.log('contact-page seeded') } catch(e:any) { console.error('contact-page error', e.message) }
  try { await payload.updateGlobal({ slug: 'services-page', data: formattedServicesData as any }); console.log('services-page seeded') } catch(e:any) { console.error('services-page error', e.message) }
  try { await payload.updateGlobal({ slug: 'fund-screener-page', data: fundScreenerData as any }); console.log('fund-screener-page seeded') } catch(e:any) { console.error('fund-screener-page error', e.message) }
  try { await payload.updateGlobal({ slug: 'goal-planner-page', data: goalPlannerData as any }); console.log('goal-planner-page seeded') } catch(e:any) { console.error('goal-planner-page error', e.message) }
  try { await payload.updateGlobal({ slug: 'sip-page', data: sipPageData as any }); console.log('sip-page seeded') } catch(e:any) { console.error('sip-page error', e.message) }
  
  console.log('Seeding complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
