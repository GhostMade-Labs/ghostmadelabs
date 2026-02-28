import { CheckCircle } from 'lucide-react'

const focuses = [
  'SaaS Product Development',
  'Full-Stack Web Applications',
  'Cloud & AWS Architecture',
  'API & System Engineering',
  'DevOps & Deployment',
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="font-mono font-bold text-xs text-blue-700 uppercase tracking-widest mb-4 block">
              // about us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-6">
              A Modern Digital{' '}
              <span className="text-blue-700">Engineering</span> Studio
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8 text-pretty">
              GhostMade Labs is a modern digital engineering studio specializing
              in SaaS platforms, scalable web applications, cloud architecture,
              and high-performance APIs. We combine strategic product thinking
              with disciplined engineering to build systems that last.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty">
              Whether you're launching an MVP or scaling an enterprise platform,
              we're the technical partner that ships clean, maintainable, and
              performant software — on time.
            </p>
          </div>

          {/* Right: Focus blocks */}
          <div className="flex flex-col gap-3">
            {focuses.map((focus) => (
              <div
                key={focus}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors duration-200 group"
              >
                <CheckCircle
                  size={20}
                  className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-200"
                />
                <span className="font-sans font-medium text-foreground text-sm">
                  {focus}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
