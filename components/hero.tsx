import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'

const codeAccents = ['<build />', '<deploy />', '<scale />']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,148,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,148,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,148,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Code accent tags */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          {codeAccents.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-blue-700 border border-primary/20 px-3 py-1.5 rounded-md bg-primary/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-foreground leading-tight tracking-tight text-balance mb-6">
          Engineering Digital{' '}
          <span className="text-blue-700 text-glow">Products</span>{' '}
          That Scale.
        </h1>

        {/* Subtext */}
        <p className="font-sans text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          GhostMade Labs builds modern SaaS platforms, web applications, and
          cloud-native systems engineered for performance and growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-sans font-semibold text-base transition-all duration-200 hover:opacity-90 glow-primary"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#products"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-border text-foreground font-sans font-semibold text-base transition-all duration-200 hover:border-primary/40 hover:text-primary"
          >
            View Our Work
            <ChevronRight size={18} />
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border max-w-3xl mx-auto">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '5+', label: 'Years Engineering' },
            { value: '100%', label: 'Cloud-Native' },
            { value: '24/7', label: 'System Uptime' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-6 px-4 bg-card gap-1"
            >
              <span className="font-display font-bold text-2xl text-primary">
                {stat.value}
              </span>
              <span className="font-mono text-xs text-muted-foreground text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-muted-foreground">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  )
}
