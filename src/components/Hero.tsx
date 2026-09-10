import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { SITE } from '../config'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10">
      <div className="absolute left-1/2 top-28 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-sand/30 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/45 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage">
            <Sparkles size={14} /> A small act of presence
          </div>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
            Sometimes, <span className="text-cocoa">being there</span> is enough.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/65 sm:text-xl">
            Not every moment needs advice, solutions or answers. Sometimes, you simply want someone there.
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/55">
            BeThere is a small independent companionship initiative for people who don't have someone available to share a meaningful moment with.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={SITE.requestFormUrl} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-ink/10 transition hover:-translate-y-0.5 hover:bg-sage">
              Request Companionship <ArrowUpRight size={17}/>
            </a>
            <a href={SITE.instagramUrl} className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white/30 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-white/70">
              Message on Instagram
            </a>
          </div>
          <a href="#about" className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-ink/45 transition hover:text-ink">
            Learn why BeThere exists <ArrowDown size={15}/>
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="relative overflow-hidden rounded-[3rem] border border-ink/8 bg-white/55 p-5 shadow-soft sm:p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sand/35 blur-3xl" />
            <img
              src="./bethere-logo.png"
              alt="BeThere — For the moments that matter"
              className="relative z-10 h-auto w-full rounded-[2.25rem] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
