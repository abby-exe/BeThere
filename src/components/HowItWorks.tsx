import { Check, MessageSquareText, Send, CalendarDays, Users } from 'lucide-react'

const steps = [
  { n: '01', icon: Send, title: 'Tell us what you need', text: 'Submit a short companionship request.' },
  { n: '02', icon: MessageSquareText, title: 'We review your request', text: 'Every request is considered individually.' },
  { n: '03', icon: CalendarDays, title: 'We arrange a time', text: "If I'm available and the request is suitable, we'll arrange the details through Instagram." },
  { n: '04', icon: Users, title: 'Be present', text: 'Meet at the agreed public location and share the moment.' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-ink px-5 py-24 text-cream sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand">How it works</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Simple by design.</h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 md:grid-cols-4">
          {steps.map(({ n, icon: Icon, title, text }) => (
            <article key={n} className="bg-ink p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-sand/80">{n}</span>
                <Icon size={19} className="text-sand/80" />
              </div>
              <h3 className="mt-14 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-cream/55">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex gap-3 rounded-2xl border border-cream/10 bg-cream/5 p-5 text-sm leading-6 text-cream/65">
          <Check className="mt-1 shrink-0 text-sand" size={18} />
          <span><strong className="text-cream">One person, limited availability.</strong> BeThere is currently operated by one person, so I may not be able to accept every request. Availability varies.</span>
        </div>
      </div>
    </section>
  )
}
