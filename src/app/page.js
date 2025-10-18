import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import FeaturedWork from './components/FeaturedWork'
import TechnicalSkills from './components/TechnicalSkills'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <Services />
      <FeaturedWork />
      <TechnicalSkills />
      <Process />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  )
}
