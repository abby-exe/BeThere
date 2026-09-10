import { Cake, Coffee, GraduationCap, Heart, MessageCircle, PartyPopper, PersonStanding } from 'lucide-react'

const services = [
  { icon: GraduationCap, title: 'Graduation & Convocation', text: 'Someone to celebrate the moment with you.' },
  { icon: Cake, title: 'Birthday', text: 'Because your birthday deserves to be shared.' },
  { icon: Coffee, title: 'Coffee & Meals', text: 'Sometimes a conversation over coffee is enough.' },
  { icon: PersonStanding, title: 'Walks & Outings', text: 'A little company for an ordinary day.' },
  { icon: PartyPopper, title: 'Events', text: "Have something important coming up? You don't have to attend alone." },
  { icon: MessageCircle, title: 'Conversation', text: 'Talk, vent, share, or simply sit together.' },
  { icon: Heart, title: 'Other Moments', text: 'If you have something else in mind, tell us.' },
]

export function ServiceCards() {
  return (
    <section id="what-we-do" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cocoa">What we can do</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">What would you like someone there for?</h2>
          <p className="mt-5 text-lg leading-8 text-ink/60">It can be something important, something ordinary, or simply a day you don't want to spend by yourself.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className={`group rounded-3xl border border-ink/10 bg-white/50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="mb-10 grid h-11 w-11 place-items-center rounded-2xl bg-mist text-sage transition group-hover:bg-sand/60"><Icon size={21} /></div>
              <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/55">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
