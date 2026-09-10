export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-ink/8 bg-white/35 px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cocoa">Why BeThere exists</p>
          <h2 className="mt-4 max-w-md font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">You don't always need someone to fix things.</h2>
        </div>
        <div className="max-w-2xl text-lg leading-8 text-ink/65">
          <p>Graduations, birthdays, hospital visits, important appointments, celebrations and ordinary afternoons can all feel different when there is nobody available to share them with.</p>
          <p className="mt-6">BeThere started with a simple belief: you don't always need someone to fix things. Sometimes you just need someone willing to sit beside you and be there.</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {['A moment shared', 'A listening ear', 'No pressure'].map((item) => (
              <div key={item} className="rounded-2xl border border-ink/10 bg-cream/70 p-4 text-sm font-semibold text-ink/70">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
