import { Activity, BarChart3, CheckCircle2, Coins } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Coins className="text-cyan-400" size={20} />,
      title: 'At-call metrics',
      desc: 'Each call shows the market cap at the time of posting, entry ranges and risk level.',
    },
    {
      icon: <Activity className="text-fuchsia-400" size={20} />,
      title: 'Live updates',
      desc: 'We publish current MC updates as plays move. Get exits, adds and invalidations.',
    },
    {
      icon: <BarChart3 className="text-emerald-400" size={20} />,
      title: 'Profit tracking',
      desc: 'Performance dashboards track each call transparently with timestamped results.',
    },
    {
      icon: <CheckCircle2 className="text-purple-400" size={20} />,
      title: 'Receipts + transparency',
      desc: 'Screenshot receipts for entries/exits. No cherry-picking. Full history archived.',
    },
  ]

  return (
    <section id="how" className="relative py-24 bg-gradient-to-b from-black to-black">
      <div className="absolute inset-0 opacity-60 pointer-events-none" aria-hidden>
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[90%] h-64 rounded-full blur-3xl bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-emerald-500/20" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">How the calls work</h2>
        <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">Structured, timestamped signals with clear risk bands and continuous updates.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/[0.07] transition-all">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 mb-4">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="text-white/70 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
