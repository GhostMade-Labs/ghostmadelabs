import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-14 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="GhostMade Labs logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <span className="font-display font-bold text-xl text-foreground tracking-tight">
                  Ghost<span className="text-green-700">Made</span> Labs
                </span>
                <p className="font-mono text-xs text-blue-700 mt-0.5">
                  Engineered for Scale.
                </p>
              </div>
            </div>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-sm text-pretty">
              A hybrid SaaS product studio and creative engineering agency
              building modern platforms, web applications, and cloud-native
              systems.
            </p>
            <div className="flex flex-col gap-1.5 mt-2">
              <a
                href="tel:+16019076169"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                +1 (601) 907-6169
              </a>
              <a
                href="mailto:hello@ghostmadelabs.com"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                hello@ghostmadelabs.com
              </a>
              <a
                href="https://ghostmadelabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                ghostmadelabs.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs text-blue-700 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {year} GhostMade Labs. All rights reserved.
          </p>
          <span className="font-mono text-xs text-blue-700 ">
            {'<built with precision />'}
          </span>
        </div>
      </div>
    </footer>
  )
}
