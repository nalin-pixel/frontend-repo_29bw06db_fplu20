export default function Showcase() {
  const images = [
    'https://images.unsplash.com/photo-1640340434785-7a138b78a194?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1621504450181-5a2c94b6e5f1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611162618071-b39a2ec4b0eb?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-black" id="showcase">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Example signals</h2>
        <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">Screenshots of real posts. Placeholder images for demo.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="relative group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
              <img src={src} alt="Signal screenshot" className="w-full h-72 object-cover object-center group-hover:scale-[1.02] transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
