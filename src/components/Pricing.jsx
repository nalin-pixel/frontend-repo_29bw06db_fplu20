import { Crown, Send } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-black to-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">VIP Access</h2>
          <p className="mt-3 text-white/70">Monthly membership to the private Telegram signals feed.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.03] ring-1 ring-white/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
                <Crown className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Monthly VIP</h3>
                <p className="text-white/60 text-sm">Full access, all features</p>
              </div>
            </div>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-extrabold text-white tracking-tight">$99</span>
              <span className="text-white/60">/month</span>
            </div>
            <ul className="mt-6 space-y-3 text-white/80 text-sm">
              <li>• 3+ exclusive calls daily</li>
              <li>• Early MC gems + low-cap plays</li>
              <li>• Live updates, trims, invalidations</li>
              <li>• Performance dashboard + receipts</li>
            </ul>
            <a href="#join" className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-semibold shadow-[0_0_35px_rgba(236,72,153,0.35)]">Join VIP <Send size={16} /></a>
          </div>

          <div className="rounded-2xl p-8 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 ring-1 ring-white/10">
            <h3 className="text-white font-semibold">How to join</h3>
            <p className="text-white/70 mt-2 text-sm">DM on Telegram to get started. You will receive payment instructions and instant access.</p>
            <div className="mt-6">
              <a id="join" href="https://t.me/your_username_here" target="_blank" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15">t.me/your_username_here</a>
            </div>
            <p className="text-white/50 mt-6 text-xs">Payments processed securely. Access typically granted within minutes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
