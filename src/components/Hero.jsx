import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[82vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 backdrop-blur px-3 py-1 text-xs text-slate-200">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Live reverse image checks
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Find where your images appear across the internet
          </h1>
          <p className="mt-5 text-lg text-slate-200/90 max-w-xl">
            Veriqo lets you upload an image and instantly discover mentions, reposts, and lookalikes on social media and the web.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-400 transition-colors">
              Try it free
            </a>
            <a href="#how" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors">
              See how it works
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90"></div>
    </section>
  )
}

export default Hero
