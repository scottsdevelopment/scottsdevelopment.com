import Header from './components/Header'
import Hero from './components/Hero'
import ServicesOverview from './components/ServicesOverview'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServicesOverview />
      <ContactSection context={{ page_source: 'Home' }} />
      <Footer />
    </main>
  )
}
