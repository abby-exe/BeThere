import { SITE } from '../config'

export function Founder() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cocoa">About the founder</p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Just one person, for now.</h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-ink/65">BeThere is currently a one-person initiative. I'm starting small because I believe meaningful communities don't have to begin with hundreds of people. Sometimes they begin with one person deciding to show up.</p>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/55">My goal is simple: if I can make someone's important day feel a little less lonely, then BeThere has done what it was created to do.</p>
        <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white/50 px-5 py-3 text-sm font-semibold text-ink/70">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs text-cream">B</span>
          {SITE.founder}
        </div>
      </div>
    </section>
  )
}
