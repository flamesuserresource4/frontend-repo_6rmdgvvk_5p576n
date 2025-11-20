function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Start free. Upgrade when you need higher limits and team features.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold">Starter</h3>
            <p className="mt-1 text-slate-300 text-sm">For personal checks and one-off lookups.</p>
            <div className="mt-6 text-4xl text-white font-semibold">$0<span className="text-base text-slate-400 font-normal">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>50 searches / month</li>
              <li>Basic similarity</li>
              <li>Web results</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-blue-500 text-white">Get started</a>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 ring-1 ring-blue-500/30">
            <h3 className="text-white font-semibold">Pro</h3>
            <p className="mt-1 text-slate-300 text-sm">For creators and professionals.</p>
            <div className="mt-6 text-4xl text-white font-semibold">$19<span className="text-base text-slate-400 font-normal">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>1,000 searches / month</li>
              <li>Advanced similarity</li>
              <li>Web + social results</li>
              <li>Email alerts</li>
              <li>Export reports</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-blue-500 text-white">Start Pro</a>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold">Teams</h3>
            <p className="mt-1 text-slate-300 text-sm">For agencies and rights holders.</p>
            <div className="mt-6 text-4xl text-white font-semibold">$49<span className="text-base text-slate-400 font-normal">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>Unlimited members</li>
              <li>API access</li>
              <li>Priority support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-blue-500 text-white">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
