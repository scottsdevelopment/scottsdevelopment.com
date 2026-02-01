import Hero from './components/Hero'
import AgencyAlternative from './components/AgencyAlternative'
import HybridModel from './components/HybridModel'
import ServicesOverview from './components/ServicesOverview'
import ContactSection from './components/ContactSection'

export const metadata = {
  title: {
    absolute: "Principal Architect & Fractional CTO | Engineering Leadership | Scott's Development"
  },
  description: 'Principal-level engineering leadership for Detroit startups. We modernize legacy code, rescue stalled projects, and provide fractional CTO services.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AgencyAlternative />
      <HybridModel />
      <ServicesOverview />
      <ContactSection context={{ page_source: 'Home' }} />
    </main>
  )
}
