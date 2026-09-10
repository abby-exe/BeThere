import { ArrowUpRight, Instagram } from 'lucide-react'
import { SITE } from '../config'

export function CTA() {
  return (
    <section className="px-5 pb-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-cocoa px-6 py-16 text-center text-cream sm:px-10 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand">When the moment matters</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">You don't have to make every moment less lonely by yourself.</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-cream/75">If there's a moment you'd rather not experience alone, you can tell me about it.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={SITE.requestFormUrl} className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white">Request Companionship <ArrowUpRight size={17}/></a>
          <a href={SITE.instagramUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-semibold transition hover:bg-cream/10"><Instagram size={17}/> Instagram</a>
        </div>
      </div>
    </section>
  )
}
