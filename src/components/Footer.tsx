import { Instagram } from 'lucide-react'
import { SITE } from '../config'

export function Footer() {
  return (
    <footer className="border-t border-ink/10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a href="#home" className="font-display text-2xl font-semibold tracking-tight">Be<span className="text-cocoa">There</span></a>
          <p className="mt-2 text-sm text-ink/50">Sometimes, being there is enough.</p>
          <p className="mt-1 text-sm text-ink/45">Malaysia · Free community companionship initiative.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink/55">
          <a href="#about" className="hover:text-ink">About</a>
          <a href="#how-it-works" className="hover:text-ink">How It Works</a>
          <a href="#safety" className="hover:text-ink">Safety</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
          <a href={SITE.instagramUrl} className="inline-flex items-center gap-1.5 hover:text-ink"><Instagram size={15}/> Instagram</a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-ink/8 pt-5 text-xs text-ink/40">© 2026 BeThere. For the moments that matter.</div>
    </footer>
  )
}
