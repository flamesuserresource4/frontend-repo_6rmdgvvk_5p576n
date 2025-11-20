function Feature({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 grid place-items-center text-blue-300">
        {icon}
      </div>
      <h3 className="mt-4 text-white font-semibold">{title}</h3>
      <p className="mt-2 text-slate-300 text-sm">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Purpose-built for image provenance</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Everything you need to understand where your visuals travel and how they’re used.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 10l4.553-2.276A2 2 0 0122 9.528v4.944a2 2 0 01-2.447 1.804L15 14M4 6h8M4 10h8M4 14h8M4 18h8'/></svg>} title="Web + social coverage" desc="Search across major social platforms and the broader web for exact matches and near-duplicates." />
          <Feature icon={<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v8m-4-4h8M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/></svg>} title="AI similarity" desc="Detect visually similar images even when they’re cropped, filtered, or resized." />
          <Feature icon={<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 7l9 6 9-6-9-4-9 4zm0 7l9 5 9-5M3 7v7'/></svg>} title="Source tracing" desc="Map repost chains to find the earliest known uploads and attributions." />
          <Feature icon={<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 17v-6a2 2 0 012-2h8m-4-4l4 4-4 4'/></svg>} title="Usage alerts" desc="Get notified when your image resurfaces anywhere online." />
          <Feature icon={<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5h18M9 3v4m6-4v4M4 9h16l-1 10H5L4 9z'/></svg>} title="Rights & attribution" desc="See captions, links, and metadata to understand how your image is credited." />
          <Feature icon={<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z'/></svg>} title="Clean reports" desc="Export shareable, audit-ready reports for clients and stakeholders." />
        </div>
      </div>
    </section>
  )
}

export default Features
