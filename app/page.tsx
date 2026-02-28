import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Products from '@/components/products'
import Pricing from '@/components/pricing'
import WhyUs from '@/components/why-us'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Products />
      <Pricing />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
