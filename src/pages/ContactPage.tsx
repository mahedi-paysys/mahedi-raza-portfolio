import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  Sparkles,
  Check,
} from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/data/content'

// Contact info cards (matching reference design)
const contactCards = [
  {
    icon: Mail,
    label: 'Email us',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: 'Drop a message anytime',
  },
  {
    icon: SiWhatsapp,
    label: 'Chat on WhatsApp',
    value: '+92 318 0350141',
    href: siteConfig.whatsappUrl,
    description: 'Fastest way to reach me',
  },
  {
    icon: MapPin,
    label: 'Our location',
    value: 'Karachi, Pakistan',
    href: 'https://maps.google.com/?q=Karachi,Pakistan',
    description: 'Available for remote work globally',
  },
]

const inputBase =
  'w-full rounded-2xl border border-border/80 bg-surface/60 backdrop-blur-md px-5 py-3.5 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-brand/70 focus:bg-surface/90 focus:shadow-[0_0_0_3px_rgba(var(--color-brand-rgb,166,138,91),0.12)] transition-all duration-300'

export function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Inquiry from ${name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-44 md:pb-36 relative overflow-hidden min-h-screen">
      {/* ── Contact Page Background Design (Built with Purpose color palette) ── */}
      {/* 1. Large Luxury Orbital / Planetary Rings peeking from top-right */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[680px] w-[680px] rounded-full border border-brand/25 dark:border-brand/[0.13]"
        aria-hidden="true"
      >
        <div className="absolute inset-14 rounded-full border border-dashed border-brand/20 dark:border-brand/[0.09]" />
        <div className="absolute inset-32 rounded-full border border-brand/15 dark:border-brand/[0.05]" />
        {/* Orbit satellite beacon */}
        <div className="absolute top-[22%] left-[14%] w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_12px_var(--color-brand)] animate-pulse" />
      </div>

      {/* 2. Secondary subtle orbital arc peeking from bottom-left */}
      <div
        className="pointer-events-none absolute -left-40 bottom-10 h-[520px] w-[520px] rounded-full border border-brand/20 dark:border-brand/[0.09]"
        aria-hidden="true"
      >
        <div className="absolute inset-16 rounded-full border border-dashed border-brand/15 dark:border-brand/[0.06]" />
        <div className="absolute bottom-[28%] right-[18%] w-2 h-2 rounded-full bg-brand shadow-[0_0_10px_var(--color-brand)]" />
      </div>

      {/* 3. Luminous Radiant Ambient Glow Orbs in Built with Purpose brand color */}
      <div
        className="pointer-events-none absolute -right-36 top-1/4 h-[580px] w-[580px] rounded-full bg-gradient-to-bl from-brand/[0.18] via-brand/[0.08] to-transparent dark:from-brand/[0.20] dark:via-amber-600/[0.08] dark:to-transparent blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-28 bottom-24 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-brand-dark/[0.18] via-brand/[0.10] to-transparent dark:from-brand-dark/[0.22] dark:via-brand/[0.10] dark:to-transparent blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-4 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand/[0.12] to-transparent dark:bg-brand/[0.07] blur-[140px]"
        aria-hidden="true"
      />

      {/* 4. Subtle Radial Dot Matrix Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '34px 34px',
          maskImage: 'radial-gradient(ellipse 80% 65% at 50% 45%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 45%, #000 30%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* 5. Minimalist Constellation Sparkle & Coordinate Crosshairs */}
      <div
        className="pointer-events-none absolute left-[8%] top-32 text-brand font-bold opacity-60 dark:opacity-30 hidden sm:block select-none font-mono text-sm"
        aria-hidden="true"
      >
        ✦
      </div>
      <div
        className="pointer-events-none absolute right-[14%] bottom-32 text-brand font-bold opacity-50 dark:opacity-25 hidden sm:block select-none font-mono text-base"
        aria-hidden="true"
      >
        +
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ─────────────────────────────────── */}
          {/* LEFT — Header + Contact Info Cards  */}
          {/* ─────────────────────────────────── */}
          <div>
            <Reveal>
              {/* "Contact" pill — same style as About page's "About me" pill */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand/20 border border-brand/30 mb-8 shadow-sm">
                <Sparkles size={14} className="text-brand" />
                <span className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight">Contact</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-ink tracking-tight leading-tight">
                Get in touch
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-muted max-w-md">
                Have questions or ready to transform your digital presence? Fill in the form or reach out directly.
              </p>
            </Reveal>

            {/* Contact Info Cards — matching reference design */}
            <div className="mt-8 sm:mt-10 space-y-3.5">
              {contactCards.map((card, i) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  whileHover={{ x: 4, transition: { duration: 0.25 } }}
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-surface/50 hover:bg-surface/85 border border-border/80 hover:border-brand/40 backdrop-blur-md transition-colors duration-300 shadow-sm hover:shadow-card"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Icon box */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-surface/80 border border-border/80 flex items-center justify-center text-brand group-hover:bg-brand/10 group-hover:border-brand/30 transition-colors duration-300 shrink-0 shadow-sm">
                      <card.icon size={18} />
                    </div>

                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-widest text-ink-faint group-hover:text-brand/70 transition-colors duration-300">
                        {card.label}
                      </p>
                      <p className="text-sm font-medium text-ink group-hover:text-brand transition-colors duration-300">
                        {card.value}
                      </p>
                    </div>
                  </div>

                  {/* Arrow icon — matching reference */}
                  <div className="w-8 h-8 rounded-lg bg-canvas/80 border border-border/70 flex items-center justify-center text-ink-faint group-hover:bg-brand group-hover:border-brand group-hover:text-canvas transition-all duration-300 shrink-0">
                    <ArrowUpRight size={14} />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Trust guarantees strip */}
            <Reveal delay={0.4}>
              <div className="mt-8 pt-6 border-t border-border/60 flex flex-col gap-2 text-xs font-mono text-ink-faint">
                <div className="flex items-center gap-2">
                  <Check size={12} className="text-brand shrink-0" />
                  <span>Response within 24 hours, guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={12} className="text-brand shrink-0" />
                  <span>Zero obligation — just a conversation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={12} className="text-brand shrink-0" />
                  <span>100% confidential discussion</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ─────────────────────────────────── */}
          {/* RIGHT — Contact Form               */}
          {/* ─────────────────────────────────── */}
          <Reveal delay={0.12} direction="left">
            <div className="relative">
              {/* Luminous orb behind the form glass */}
              <div
                className="pointer-events-none absolute -right-6 -bottom-6 -z-10 h-40 w-40 rounded-full bg-gradient-to-br from-brand/45 via-amber-500/20 to-transparent blur-2xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand/25 to-transparent blur-2xl"
                aria-hidden="true"
              />

              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border/80 bg-surface/50 backdrop-blur-xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] p-6 sm:p-8 md:p-10 space-y-4"
              >
              {/* Name field */}
              <div>
                <input
                  id="contact-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputBase}
                  placeholder="Name"
                />
              </div>

              {/* Email field */}
              <div>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputBase}
                  placeholder="Email"
                />
              </div>

              {/* Message textarea */}
              <div>
                <textarea
                  id="contact-message"
                  required
                  rows={7}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputBase} resize-none`}
                  placeholder="Message"
                />
              </div>

              {/* Submit button — full-width solid white style matching reference */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                className="relative w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-ink text-canvas font-semibold text-sm tracking-wide overflow-hidden cursor-pointer transition-all duration-300 hover:bg-ink/90 shadow-md hover:shadow-elevated"
              >
                {/* Hover glow sweep */}
                <motion.span
                  className="absolute inset-0 bg-brand/20 translate-x-[-100%]"
                  whileHover={{ translateX: '100%' }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                />

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2 relative z-10"
                    >
                      <Check size={16} className="text-emerald-400" />
                      <span>Message Sent!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2 relative z-10"
                    >
                      <Send size={16} />
                      <span>Submit</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <p className="text-[10px] sm:text-[11px] text-ink-faint text-center font-mono pt-1">
                Direct submission routes straight to Mahedi's primary inbox.
              </p>
            </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
