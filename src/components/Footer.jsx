export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} VIP Memecoin Signals. All rights reserved.</p>
        <p className="text-white/40 text-xs">Educational content only. Not financial advice. Crypto trading involves risk. Do your own research.</p>
      </div>
    </footer>
  )
}
