import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Performance from './components/Performance'
import WhatYouGet from './components/WhatYouGet'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Showcase />
      <Features />
      <Performance />
      <WhatYouGet />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
