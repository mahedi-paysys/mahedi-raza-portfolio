import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const checks = [
  { label: 'Loads in under 2s', before: false },
  { label: 'Works on mobile', before: false },
  { label: 'Clear call to action', before: false },
  { label: 'Modern, on-brand design', before: false },
]

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="container-main grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-5xl md:text-[3.4rem] font-medium text-ink text-balance">
            Modern websites that make your business look professional.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            I design and develop fast, responsive websites for businesses that want to
            build trust and generate more enquiries.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button to="/work" size="lg" withArrow>
              View My Work
            </Button>
            <Button to="/contact" size="lg" variant="outline">
              Request a Free Website Audit
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="rounded-2xl border border-border bg-surface shadow-elevated overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
              <span className="ml-3 rounded-md bg-canvas px-3 py-1 font-mono text-[11px] text-ink-faint">
                yourbusiness.com
              </span>
            </div>
            <div className="p-6">
              <div className="h-3 w-2/3 rounded-full bg-canvas" />
              <div className="mt-2.5 h-3 w-1/2 rounded-full bg-canvas" />
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="h-16 rounded-lg bg-canvas" />
                <div className="h-16 rounded-lg bg-canvas" />
                <div className="h-16 rounded-lg bg-canvas" />
              </div>
              <div className="mt-6 space-y-3">
                {checks.map((c) => (
                  <div key={c.label} className="flex items-center gap-2.5 text-sm text-ink">
                    <CheckCircle2 size={16} className="text-brand shrink-0" />
                    {c.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 rounded-xl border border-border bg-ink px-4 py-3 shadow-card">
            <p className="font-mono text-[11px] text-canvas/60">Free Website Audit</p>
            <p className="font-display text-lg font-medium text-canvas">Worth doing today</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
