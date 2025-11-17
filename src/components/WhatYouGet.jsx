import { Check, Gem, Layers, AlarmClock } from 'lucide-react'

export default function WhatYouGet() {
  const perks = [
    { icon: <AlarmClock className="text-cyan-400" />, title: '3+ calls daily', desc: 'Consistent flow of curated opportunities across chains.' },
    { icon: <Gem className="text-fuchsia-400" />, title: 'Early gems', desc: 'Find them before CT does. Entries posted fast, with context.' },
    { icon: <Layers className="text-emerald-400" />, title: 'Smart risk levels', desc: 'Clear invalidations, trims and adds based on structure.' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">What you get inside</h2>
        <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">A premium, organized signal flow designed for speed and clarity.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {perks.map((p, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition-all">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 mb-4">{p.icon}</div>
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-white/70 text-sm mt-1">{p.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm"><Check size={16} /> Included</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
