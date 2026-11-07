import Hero from './components/Hero'
import AgencyAlternative from './components/AgencyAlternative'
import Process from './components/Process'
import Offers from './components/Offers'
import HybridModel from './components/HybridModel'
import ServicesOverview from './components/ServicesOverview'
import IndustryWork from './components/IndustryWork'
import Expertise from './components/Expertise'
import Healthcare from './components/Healthcare'
import Background from './components/Background'
import Writing from './components/Writing'
import ContactSection from './components/ContactSection'

export const metadata = {
  title: {
    absolute: "Principal Architect & Fractional CTO | Engineering Leadership | Scott's Development"
  },
  description: 'Marketing and development for Metro Detroit companies. We manage the AI agents that build your website, software and CRM on proven platforms, and provide fractional CTO leadership backed by 15+ years of engineering.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AgencyAlternative />
      <Process />
      <Offers />
      <HybridModel />
      <ServicesOverview />
      <IndustryWork limit={6} />
      <Expertise tone="white" />
      <Healthcare tone="primary" />
      <Background tone="white" />
      <Writing tone="primary" />
      <ContactSection context={{ page_source: 'Home' }} />
    </main>
  )
}
