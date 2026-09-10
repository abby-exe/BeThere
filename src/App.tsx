import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ServiceCards } from './components/ServiceCards'
import { HowItWorks } from './components/HowItWorks'
import { Safety } from './components/Safety'
import { Founder } from './components/Founder'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServiceCards />
        <HowItWorks />
        <Safety />
        <Founder />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
