import { useState, type MouseEvent } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How long does a website take?',
    answer: 'Most custom websites take 2 to 4 weeks, depending on pages and features.',
  },
  {
    question: 'Why custom code instead of WordPress or Wix?',
    answer: 'Faster load times, better security, and a design that is truly yours, not a template.',
  },
  {
    question: 'How much does a website cost?',
    answer: 'It depends on the scope. Share your requirements and I will send a clear quote.',
  },
  {
    question: 'Can I update the content myself?',
    answer: 'Yes. I can add a simple CMS and give you a short walkthrough after launch.',
  },
  {
    question: 'Do you handle hosting and launch?',
    answer: 'Yes. Domain, DNS, SSL and CDN setup, plus 30 days of post-launch support.',
  },
  {
    question: 'How will we communicate?',
    answer: 'Directly with me on WhatsApp or email, with weekly preview links.',
  },
]

interface FAQRowProps {
  faq: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}

function FAQRow({ faq, index, isOpen, onToggle }: FAQRowProps) {
  const panelId = `faq-panel-${index}`

  // Feeds the cursor position to the hover spotlight (CSS vars, no re-render)
  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      onMouseMove={handleMove}
      className={cn(
        'group relative overflow-hidden rounded-2xl border backdrop-blur-xl',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
        'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'hover:-translate-y-0.5 hover:shadow-card',
        isOpen
          ? 'border-brand/40 bg-brand/[0.08] dark:border-brand/30 dark:bg-ink/[0.08]'
          : 'border-brand/20 bg-brand/[0.04] hover:border-brand/40 hover:bg-brand/[0.08] dark:border-ink/10 dark:bg-ink/[0.04] dark:hover:border-ink/25 dark:hover:bg-ink/[0.07]'
      )}
    >
      {/* Cursor-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-50"
        style={{
          background:
            'radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), var(--color-brand-glow), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="relative flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 sm:px-6 sm:py-5"
      >
        <span
          className={cn(
            'text-sm font-medium transition-colors duration-300 sm:text-base',
            isOpen ? 'text-brand' : 'text-ink group-hover:text-brand'
          )}
        >
          {index + 1}. {faq.question}
        </span>

        {/* Plus that morphs into a minus */}
        <span
          className={cn(
            'relative h-8 w-8 shrink-0 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
            'group-hover:scale-110 group-hover:border-brand/50 group-hover:bg-brand/10',
            isOpen ? 'rotate-180 border-brand/40 bg-brand/10' : 'border-ink/15 bg-ink/[0.05]'
          )}
        >
          <span className="absolute left-1/2 top-1/2 h-[1.5px] w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
          <span
            className={cn(
              'absolute left-1/2 top-1/2 h-3 w-[1.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink',
              'transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
              isOpen && 'scale-y-0'
            )}
          />
        </span>
      </button>

      {/* Smooth height: grid rows animate 0fr to 1fr */}
      <div
        id={panelId}
        role="region"
        className={cn(
          'relative grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <p
            className={cn(
              'px-5 pb-5 text-sm leading-relaxed text-ink-muted transition-all duration-500 sm:px-6',
              isOpen ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-1 opacity-0'
            )}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden border-t border-border/80 bg-transparent py-16 sm:py-24 md:py-32">
      {/* ── Attractive Background Design (Built with Purpose color palette) ── */}
      {/* 1. Concentric Planetary / Orbit Rings peeking from top-left */}
      <div
        className="pointer-events-none absolute -left-36 -top-36 h-[560px] w-[560px] rounded-full border border-brand/25 dark:border-brand/[0.12] sm:-left-24 sm:-top-24"
        aria-hidden="true"
      >
        <div className="absolute inset-8 rounded-full border border-dashed border-brand/20 dark:border-brand/[0.08]" />
        <div className="absolute inset-20 rounded-full border border-brand/15 dark:border-brand/[0.05]" />
        {/* Orbit satellite beacon */}
        <div className="absolute top-[28%] right-[8%] w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_12px_var(--color-brand)] animate-pulse" />
      </div>

      {/* 2. Secondary orbital ring on bottom-right */}
      <div
        className="pointer-events-none absolute -right-28 -bottom-28 h-[460px] w-[460px] rounded-full border border-brand/20 dark:border-brand/[0.08]"
        aria-hidden="true"
      >
        <div className="absolute inset-12 rounded-full border border-dashed border-brand/15 dark:border-brand/[0.05]" />
        <div className="absolute bottom-[24%] left-[10%] w-2 h-2 rounded-full bg-brand shadow-[0_0_10px_var(--color-brand)]" />
      </div>

      {/* 3. Soft Luminous Gradient Orbs with depth in Built with Purpose brand color */}
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-brand/[0.18] via-brand/[0.08] to-transparent dark:from-brand/[0.22] dark:via-brand/10 dark:to-transparent blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-12 h-[520px] w-[520px] rounded-full bg-gradient-to-bl from-brand-dark/[0.20] via-brand/[0.12] to-transparent dark:from-brand-dark/[0.25] dark:via-brand/[0.14] dark:to-transparent blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-4 h-[280px] w-[600px] -translate-x-1/2 rounded-full bg-brand/[0.12] dark:bg-brand/[0.07] blur-[110px]"
        aria-hidden="true"
      />

      {/* 4. Subtle Radial Dot Matrix Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 35%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* 5. Luxury Sparkle / Crosshair Accents */}
      <div
        className="pointer-events-none absolute right-[10%] top-20 text-brand font-bold opacity-60 dark:opacity-30 hidden sm:block select-none font-mono text-sm"
        aria-hidden="true"
      >
        ✦
      </div>
      <div
        className="pointer-events-none absolute left-[12%] bottom-28 text-brand font-bold opacity-50 dark:opacity-25 hidden sm:block select-none font-mono text-base"
        aria-hidden="true"
      >
        +
      </div>

      <div className="container-main relative z-10 max-w-3xl">
        <SectionHeading align="center" title="Frequently Asked Questions" />

        <div className="mt-10 space-y-3 sm:mt-14 sm:space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.06}>
              <FAQRow
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}