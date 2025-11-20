function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Start tracking your image’s journey</h2>
        <p className="mt-3 text-slate-300">Create a free account in seconds. No credit card required.</p>
        <form className="mt-8 max-w-md mx-auto flex gap-2">
          <input type="email" placeholder="Enter your email" className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 h-12 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="h-12 px-5 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-400">Join free</button>
        </form>
        <p className="mt-3 text-xs text-slate-400">By continuing you agree to our Terms and Privacy Policy.</p>
      </div>
    </section>
  )
}

export default CTA
