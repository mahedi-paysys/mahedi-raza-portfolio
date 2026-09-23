import { useState, type FormEvent } from 'react'
import { Mail, Copy, Check, Linkedin, Github } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/data/content'

// Reddit SVG Icon
function RedditIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.702zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  )
}

const contactLinks = [
  { label: 'WhatsApp', href: siteConfig.whatsappUrl, icon: SiWhatsapp },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin, icon: Linkedin },
  { label: 'GitHub', href: siteConfig.socials.github, icon: Github },
  { label: 'Reddit', href: siteConfig.socials.reddit, icon: RedditIcon },
]

const labelClass = 'mb-2 block text-xs text-ink-muted'
const fieldClass =
  'w-full rounded-xl border border-ink/10 bg-ink/[0.05] px-4 py-3 text-sm text-ink placeholder:text-ink-faint backdrop-blur-md outline-none transition-colors focus:border-brand/60'

export function HomeContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    const subject = encodeURIComponent(`Project Inquiry from ${name || 'Website Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact-section"
      className="relative overflow-hidden border-t border-border/80 bg-transparent py-20 sm:py-28 md:py-36"
    >
      {/* Big soft circle peeking in from the right edge */}
      <div
        className="pointer-events-none absolute -right-48 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-gradient-to-br from-brand/[0.12] to-transparent sm:h-[640px] sm:w-[640px]"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <SectionHeading align="center" title="Let's get in touch." />

        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-12 sm:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left: frosted glass contact card */}
          <Reveal>
            <div className="relative">
              {/* Orb sitting behind the glass, so the glass blurs it */}
              <div
                className="absolute -left-6 bottom-14 z-0 h-24 w-24 rounded-full bg-gradient-to-br from-brand/50 to-brand/5 sm:-left-12 sm:h-28 sm:w-28"
                aria-hidden="true"
              />

              <div className="glass-panel relative z-10 rounded-[2rem] p-7 sm:p-9">
                <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">Contact Information</h3>

                <ul className="mt-7 space-y-5">
                  <li className="flex items-center justify-between gap-3">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex min-w-0 items-center gap-4 text-sm text-ink-muted transition-colors hover:text-brand sm:text-base"
                    >
                      <Mail size={18} className="shrink-0" />
                      <span className="truncate">{siteConfig.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="shrink-0 cursor-pointer text-ink-faint transition-colors hover:text-brand"
                    >
                      {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                  </li>

                  {contactLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 text-sm text-ink-muted transition-colors hover:text-brand sm:text-base"
                      >
                        <link.icon size={18} className="shrink-0" />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Right: minimal form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="home-name" className={labelClass}>
                  Your Name*
                </label>
                <input
                  id="home-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John"
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="home-email" className={labelClass}>
                    Your Email*
                  </label>
                  <input
                    id="home-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@gmail.com"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="home-phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="home-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 300 1234567"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="home-message" className={labelClass}>
                  Your Message*
                </label>
                <textarea
                  id="home-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can I help you?"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                <Button type="submit" className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Submit
                </Button>
                <span className="text-[11px] text-ink-faint">*Required fields</span>
              </div>

              {isSubmitted && (
                <p className="text-xs font-mono text-emerald-400">
                  Opening your email client to dispatch the message. Thank you!
                </p>
              )}
            </form>
          </Reveal>
        </div >
      </div >
    </section >
  )
}
