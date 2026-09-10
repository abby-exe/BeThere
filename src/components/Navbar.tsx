import { useState } from 'react'
import { Instagram, Menu, X, ArrowUpRight } from 'lucide-react'
import { SITE } from '../config'

const links = [
  ['About', '#about'],
  ['How It Works', '#how-it-works'],
  ['What We Do', '#what-we-do'],
  ['FAQ', '#faq'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-ink/10 bg-cream/90 px-4 py-3 shadow-[0_8px_30px_rgba(48,58,50,0.06)] backdrop-blur-md sm:px-5">
        <a href="#home" onClick={close} className="flex items-center gap-2.5" aria-label="BeThere home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm font-bold tracking-tight text-cream">B</span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">Be<span className="text-cocoa">There</span></span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-ink/70 transition hover:text-ink">{label}</a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a href={SITE.instagramUrl} className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition hover:bg-ink/5 hover:text-ink">
            <Instagram size={16} /> Instagram
          </a>
          <a href={SITE.requestFormUrl} className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-sage">
            Request <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          className="rounded-xl p-2 text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-ink/10 bg-cream p-4 shadow-soft md:hidden">
          <div className="grid gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={close} className="rounded-xl px-3 py-3 font-medium text-ink hover:bg-ink/5">{label}</a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-ink/10 pt-3">
              <a href={SITE.instagramUrl} className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink/15 py-3 text-sm font-semibold"><Instagram size={16}/> Instagram</a>
              <a href={SITE.requestFormUrl} className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink py-3 text-sm font-semibold text-cream">Request <ArrowUpRight size={15}/></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
