import { Check, Zap, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const webPlans = [
  {
    name: 'Starter Basic',
    price: '$500 – $1,000',
    delivery: '1–2 weeks',
    popular: false,
    features: [
      '3–5 page website',
      'Responsive design',
      'Basic SEO setup',
      'Contact form',
      '2 revision rounds',
    ],
  },
  {
    name: 'Professional',
    price: '$1,500 – $3,500',
    delivery: '3–5 weeks',
    popular: true,
    features: [
      'Full custom UI',
      'CMS integration',
      'Authentication system',
      'Payment integration (Stripe)',
      'Performance optimization',
    ],
  },
  {
    name: 'Enterprise Build',
    price: '$5,000+',
    delivery: 'Custom timeline',
    popular: false,
    features: [
      'Scalable architecture',
      'Cloud deployment',
      'Advanced security',
      'API integrations',
      'Admin dashboard',
      'Ongoing support',
    ],
  },
]

const saasPlans = [
  {
    name: 'MVP Launch',
    price: '$3,000 – $8,000',
    delivery: '4–8 weeks',
    popular: false,
    features: [
      'Core feature set',
      'User authentication',
      'Basic dashboard',
      'Payment integration',
      'Cloud deployment',
      'Launch-ready',
    ],
  },
  {
    name: 'Scale Package',
    price: '$10,000+',
    delivery: 'Custom timeline',
    popular: true,
    features: [
      'Full platform build',
      'Multi-tenant architecture',
      'Advanced analytics',
      'API ecosystem',
      'DevOps & CI/CD',
      'Ongoing engineering',
    ],
  },
  {
    name: 'Custom Quote',
    price: 'Contact Us',
    delivery: 'Flexible',
    popular: false,
    features: [
      'Tailored scope',
      'Dedicated team',
      'White-glove support',
      'Custom SLAs',
      'On-site collaboration',
      'Long-term partnership',
    ],
    isCustom: true,
  },
]

function PlanCard({
  plan,
}: {
  plan: (typeof webPlans)[0] & { isCustom?: boolean }
}) {
  return (
    <div
      className={`relative flex flex-col rounded-xl border p-6 transition-all duration-300 ${
        plan.popular
          ? 'border-primary bg-card shadow-[0_0_30px_rgba(0,255,148,0.1)]'
          : 'border-border bg-card hover:border-primary/30'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
            <Zap size={11} />
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display font-semibold text-xl text-foreground mb-1">
          {plan.name}
        </h3>
        <div className="font-display font-bold text-2xl text-primary mb-1">
          {plan.price}
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          Delivery: {plan.delivery}
        </div>
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <Check size={15} className="text-primary mt-0.5 shrink-0" />
            <span className="font-sans text-sm text-muted-foreground leading-snug">
              {feat}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className={`inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-md font-sans font-semibold text-sm transition-all duration-200 ${
          plan.popular
            ? 'bg-primary text-primary-foreground hover:opacity-90 glow-primary'
            : plan.isCustom
            ? 'border border-primary/40 text-primary hover:bg-primary/5'
            : 'border border-border text-foreground hover:border-primary/40 hover:text-primary'
        }`}
      >
        {plan.isCustom ? (
          <>
            <MessageSquare size={15} />
            Get a Custom Quote
          </>
        ) : (
          'Get Started'
        )}
      </Link>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 lg:px-8 relative">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,255,148,1) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono font-bold text-xs text-blue-700 uppercase tracking-widest mb-4 block">
            // pricing
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-4">
            Transparent Pricing
          </h2>
          <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty">
            No surprises. Choose a tier that fits your scope, or reach out for a
            custom quote.
          </p>
        </div>

        {/* Category 1: Web Development */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm text-primary font-semibold">
              01
            </span>
            <h3 className="font-display font-bold text-xl text-foreground">
              Web Development
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>

        {/* Category 2: SaaS / Platform Development */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm text-primary font-semibold">
              02
            </span>
            <h3 className="font-display font-bold text-xl text-foreground">
              SaaS / Platform Development
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saasPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
