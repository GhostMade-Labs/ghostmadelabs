'use client'

import { useState } from 'react'
import { Phone, Mail, Globe, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

const budgetOptions = [
  'Under $1,000',
  '$1,000 – $3,500',
  '$3,500 – $8,000',
  '$8,000 – $15,000',
  '$15,000+',
  'Not sure yet',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    details: '',
    budget: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      setSubmitted(true)
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-6 lg:px-8 relative">
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(0,255,148,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA */}
          <div>
            <span className="font-mono font-bold text-xs text-blue-700 uppercase tracking-widest mb-4 block">
              // contact
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-6">
              Let's Build Something{' '}
              <span className="text-primary">That Scales.</span>
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-10 text-pretty">
              Have a project in mind? Tell us about it. We'll review your scope
              and get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+16019076169"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-700 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="font-mono text-sm">+1 (601) 907-6169</span>
              </a>
              <a
                href="mailto:hello@ghostmadelabs.com"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-700 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <span className="font-mono text-sm">hello@ghostmadelabs.com</span>
              </a>
              <a
                href="https://ghostmadelabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-700 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                  <Globe size={18} className="text-primary" />
                </div>
                <span className="font-mono text-sm">ghostmadelabs.com</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card rounded-xl border border-border p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <CheckCircle2 size={26} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Message Sent
                </h3>
                <p className="font-sans text-sm text-muted-foreground max-w-xs">
                  We'll review your project and get back to you at{' '}
                  <span className="text-primary">{form.email}</span> within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-mono text-xs text-muted-foreground uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-mono text-xs text-muted-foreground uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="details"
                    className="font-mono text-xs text-muted-foreground uppercase tracking-wider"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    value={form.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your project, goals, and timeline..."
                    className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  />
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="budget"
                    className="font-mono text-xs text-muted-foreground uppercase tracking-wider"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground font-sans text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select your budget
                    </option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Error */}
                {error && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-md bg-destructive/10 border border-destructive/30 text-destructive">
                    <AlertCircle size={15} className="flex-shrink-0" />
                    <p className="font-sans text-sm">{error}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-md bg-primary text-primary-foreground font-sans font-semibold text-sm transition-all duration-200 hover:opacity-90 glow-primary disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
