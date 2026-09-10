import { ShieldCheck } from 'lucide-react'

const boundaries = [
  'Companionship is free.',
  'Requests are subject to availability.',
  'Initial meetings should take place in public locations.',
  'I do not provide medical care, counselling or emergency assistance.',
  'No romantic, sexual or dating requests.',
  'No financial transactions or lending money.',
  'Everyone is expected to treat each other respectfully.',
  'Requests may be declined if they raise safety concerns.',
]

export function Safety() {
  return (
    <section id="safety" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-cocoa/20 bg-sand/20 p-7 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-cocoa"><ShieldCheck size={23}/></div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-cocoa">A safe environment</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">A few important boundaries.</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-ink/60">BeThere is a companionship initiative, not a professional healthcare or counselling service.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {boundaries.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-ink/8 bg-cream/65 p-4 text-sm leading-6 text-ink/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cocoa" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
