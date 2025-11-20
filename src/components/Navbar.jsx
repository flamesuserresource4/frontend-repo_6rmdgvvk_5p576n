import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 grid place-items-center">
              <span className="text-blue-300 font-black">V</span>
            </div>
            <span className="text-white font-semibold tracking-tight">Veriqo</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#how" className="text-slate-300 hover:text-white transition-colors">How it works</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-300 hover:text-white text-sm">Sign in</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-400 transition-colors">
              Get started
            </a>
          </div>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              <a href="#features" className="px-3 py-2 rounded-md hover:bg-white/5 text-slate-200">Features</a>
              <a href="#how" className="px-3 py-2 rounded-md hover:bg-white/5 text-slate-200">How it works</a>
              <a href="#pricing" className="px-3 py-2 rounded-md hover:bg-white/5 text-slate-200">Pricing</a>
              <a href="#cta" className="mt-2 px-3 py-2 rounded-md bg-blue-500 text-white">Get started</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
