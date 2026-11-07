import Hero from './components/Hero'
import Products from './components/Products'
import Expertise from './components/Expertise'
import GithubShowcase from './components/GithubShowcase'
import Healthcare from './components/Healthcare'
import CarePlan from './components/CarePlan'
import Writing from './components/Writing'
import ContactSection from './components/ContactSection'

export const metadata = {
  title: {
    absolute: "Scott's Development | Websites and small software for local businesses",
  },
  description:
    'Websites and small software for local businesses from a full-stack engineer in Ferndale, Michigan: fixed-scope builds, quick technical engagements, and a monthly care plan with hosting and analytics.',
}

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Products />
      <Expertise />
      <GithubShowcase limit={8} compact />
      <Healthcare />
      <CarePlan />
      <Writing />
      <ContactSection context={{ page_source: 'Home' }} />
    </main>
  )
}
