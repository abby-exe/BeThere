import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  ['Is this free?', 'Yes. BeThere is currently completely free.'],
  ['Who can request companionship?', 'For now, BeThere is intended for adults aged 18 and above.'],
  ['Can I request someone to attend my graduation?', 'Yes. Graduation and convocation companionship are exactly the kind of meaningful moments BeThere was created for.'],
  ['Can you come to my house?', 'For safety, initial meetings should take place in public locations.'],
  ['Can I request hospital companionship?', 'Hospital companionship may be considered on a case-by-case basis, subject to hospital rules, safety and availability. BeThere does not provide medical care.'],
  ['Is this a dating service?', 'No. BeThere is strictly a companionship initiative and is not intended for dating or romantic/sexual encounters.'],
  ['Will every request be accepted?', 'No. Since BeThere is currently operated by one person, requests depend on availability and suitability.'],
  ['How do I contact you?', 'Send a message through Instagram or submit a companionship request.'],
]

export function FAQ() {
  const [active, setActive] = useState<number | null>(0)
  return (
    <section id="faq" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cocoa">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Good to know.</h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-ink/55">A few answers before you reach out.</p>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map(([q, a], index) => (
            <div key={q}>
              <button onClick={() => setActive(active === index ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left font-semibold" aria-expanded={active === index}>
                <span>{q}</span><ChevronDown size={18} className={`shrink-0 text-ink/45 transition ${active === index ? 'rotate-180' : ''}`} />
              </button>
              {active === index && <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-ink/60">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
