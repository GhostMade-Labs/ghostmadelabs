import { ArrowRight, Layers, Globe, Smartphone, Cloud, Cpu, Server } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'SaaS Development',
    description:
      'End-to-end SaaS product engineering — from architecture design to production deployment. Multi-tenant systems built for scale.',
  },
  {
    icon: Globe,
    title: 'Custom Web Applications',
    description:
      'Full-stack web apps with modern UIs, performant backends, and clean APIs. Built with the right stack for your use case.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications with native-like experiences. React Native and modern mobile frameworks.',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture & AWS',
    description:
      'Scalable cloud infrastructure on AWS — EC2, Lambda, RDS, S3, CloudFront, and more. Architected for reliability and cost efficiency.',
  },
  {
    icon: Cpu,
    title: 'API & System Design',
    description:
      'High-performance REST and GraphQL APIs. Microservices, event-driven systems, and complex integrations designed to last.',
  },
  {
    icon: Server,
    title: 'DevOps & Infrastructure',
    description:
      'CI/CD pipelines, containerization with Docker/Kubernetes, monitoring, and automated deployments to keep your systems running.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 lg:px-8 relative">
      {/* Subtle divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-700 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono font-bold text-xs text-blue-700 uppercase tracking-widest mb-4 block">
            // services
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-4">
            What We Build
          </h2>
          <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty">
            From idea to production — we cover the full engineering spectrum.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 hover:text-amber-100">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative flex flex-col gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:bg-[white]"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
                  <Icon size={20} className="text-primary" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More */}
                <button className="mt-auto inline-flex items-center gap-1.5 font-sans text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn More
                  <ArrowRight size={14} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
