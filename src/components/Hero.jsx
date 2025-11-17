import Spline from '@splinetool/react-spline'
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur text-xs text-white/80 mb-6">
            <Zap size={14} className="text-cyan-400" /> Real-time signals • Early MC gems • High risk / high reward
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-[0_0_18px_rgba(34,211,238,0.25)]">
            Daily VIP Memecoin Signals
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            3+ exclusive calls every day. Early market-cap gems, low-cap opportunities and bold, transparent tracking so you see the real results.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#join" className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-semibold shadow-[0_0_35px_rgba(236,72,153,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.55)] transition-all">
              Join Telegram <ArrowRight className="group-hover:translate-x-0.5 transition-transform" size={18} />
            </a>
            <a href="#how" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-white/80 hover:text-white ring-1 ring-white/15">
              How it works
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-white/60">
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400" /> Education only</div>
            <div className="h-1 w-1 rounded-full bg-white/30" />
            <div>Transparent profit tracking</div>
          </div>
        </div>
      </div>
    </section>
  )
}
