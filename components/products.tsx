import { BarChart2, ShoppingCart, CalendarDays, Shield, LineChart } from 'lucide-react'

const products = [
  {
    icon: BarChart2,
    title: 'SaaS Dashboard Platform',
    description:
      'A multi-tenant analytics dashboard with role-based access, real-time data streaming, and customizable widgets.',
    tags: ['Next.js', 'PostgreSQL', 'WebSockets', 'AWS'],
    accent: '#00FF94',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Engine',
    description:
      'A headless e-commerce platform with Stripe payments, inventory management, and order tracking at scale.',
    tags: ['React', 'Node.js', 'Stripe', 'Redis'],
    accent: '#00FF94',
  },
  {
    icon: CalendarDays,
    title: 'Booking System',
    description:
      'A full-featured scheduling and booking system with availability logic, payment flows, and calendar sync.',
    tags: ['TypeScript', 'Prisma', 'Twilio', 'Vercel'],
    accent: '#00FF94',
  },
  {
    icon: Shield,
    title: 'Proxy & Infrastructure Panel',
    description:
      'A high-performance proxy management panel with real-time traffic monitoring, IP rotation, and usage analytics.',
    tags: ['Go', 'Docker', 'Nginx', 'AWS EC2'],
    accent: '#00FF94',
  },
  {
    icon: LineChart,
    title: 'Analytics Dashboard',
    description:
      'An enterprise-grade analytics platform with custom event tracking, funnel analysis, and exportable reports.',
    tags: ['React', 'ClickHouse', 'D3.js', 'FastAPI'],
    accent: '#00FF94',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono font-bold text-xs text-blue-700 uppercase tracking-widest mb-4 block">
            // products
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-4">
            Product Builds
          </h2>
          <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty">
            A sample of the platforms, tools, and systems we've engineered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <div
                key={product.title}
                className={`group relative flex flex-col gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top line accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    v{(i + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {product.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-primary/70 bg-black border border-primary/15 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
