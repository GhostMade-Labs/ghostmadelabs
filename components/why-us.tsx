import { Zap, Box, Code2, Handshake } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Performance-First Engineering',
    description:
      'Every system we build is optimized from the ground up — fast load times, efficient queries, and lean architecture that scales without slowing down.',
  },
  {
    icon: Box,
    title: 'Scalable Cloud Architecture',
    description:
      'We design for growth. AWS-native infrastructure with auto-scaling, redundancy, and zero-downtime deployments baked in from day one.',
  },
  {
    icon: Code2,
    title: 'Clean Code & Maintainable Systems',
    description:
      'No spaghetti. We write typed, documented, and tested code that your team can own, extend, and ship with confidence months after delivery.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Technical Partnership',
    description:
      "We don't disappear after launch. We stay in your corner as a trusted engineering partner who knows your codebase and grows with your business.",
  },
]

export default function WhyUs() {
  return (
    <section className="py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono font-bold text-xs text-blue-700 uppercase tracking-widest mb-4 block">
            // why ghostmade labs
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-4">
            Built Different
          </h2>
          <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty">
            We combine senior-level engineering with product-thinking to deliver
            systems that actually work in production.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="group flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors duration-200">
                  <Icon size={22} className="text-primary mt-[11px]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
