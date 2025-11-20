function Step({ n, title, desc }) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10">
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-blue-500 text-white grid place-items-center font-semibold">
        {n}
      </div>
      <h3 className="mt-2 text-white font-semibold">{title}</h3>
      <p className="mt-2 text-slate-300 text-sm">{desc}</p>
    </div>
  )
}

function HowItWorks() {
  return (
    <section id="how" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">From upload to insights in minutes</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Our pipeline is designed to be fast, reliable, and privacy-first.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Step n={1} title="Upload an image" desc="Drag & drop or paste a URL. We hash and analyze the visual features securely." />
          <Step n={2} title="Scan the web" desc="We search social networks and the open web for exact and similar matches." />
          <Step n={3} title="Review matches" desc="Get a clean timeline of appearances with links, screenshots, and attribution." />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
