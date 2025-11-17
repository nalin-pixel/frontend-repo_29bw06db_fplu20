import { useState } from 'react'
import { Menu, X, Send, Shield, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'How it works', href: '#how' },
    { label: 'Features', href: '#features' },
    { label: 'Performance', href: '#performance' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 blur-md bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 opacity-70 rounded" />
              <div className="relative h-8 w-8 rounded bg-gradient-to-br from-cyan-500 to-fuchsia-600 ring-2 ring-white/10 grid place-items-center">
                <Sparkles size={16} className="text-white" />
              </div>
            </div>
            <span className="text-white font-semibold tracking-wide">VIP Memecoin Signals</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#join" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-medium shadow-[0_0_20px_rgba(236,72,153,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.45)] transition-all">
              <Send size={16} /> Join Telegram
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block px-3 py-2 rounded-lg bg-white/5 text-white/80 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#join" className="block px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-medium">
              <div className="inline-flex items-center gap-2"><Send size={16} /> Join Telegram</div>
            </a>
            <p className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 pt-2"><Shield size={12} /> Education only</p>
          </div>
        )}
      </div>
    </header>
  )
}
