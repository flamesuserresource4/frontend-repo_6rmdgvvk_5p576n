import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <footer className="border-t border-white/10 py-10 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Veriqo. All rights reserved.
      </footer>
    </div>
  )
}

export default App
