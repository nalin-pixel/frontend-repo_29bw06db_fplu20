import { Rocket, Radio, ChartCandlestick, BadgeCheck } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: <Rocket className="text-cyan-400" />, title: 'Early MC calls', desc: 'Find gems at birth. Entries shared before hype kicks in.' },
    { icon: <Radio className="text-fuchsia-400" />, title: 'Real-time signals', desc: 'Instant posts with updates as price action unfolds.' },
    { icon: <ChartCandlestick className="text-emerald-400" />, title: 'Expert analysis', desc: 'Market structure, liquidity zones and risk bands.' },
    { icon: <BadgeCheck className="text-purple-400" />, title: 'Transparent results', desc: 'Every call tracked with timestamps and receipts.' },
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Why traders choose us</h2>
        <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">Speed, structure and receipts. Built like a premium crypto SaaS.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl p-5 bg-gradient-to-br from-white/5 to-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
