import { useRef, useState, type MouseEvent } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { MessagesSquare, ScanSearch, PenTool, Code2, Gauge, Rocket } from 'lucide-react'
import { processSteps } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'
import type { ProcessStep } from '@/types'

const stepIcons = [MessagesSquare, ScanSearch, PenTool, Code2, Gauge, Rocket]

function ProcessRow({ step, index }: { step: ProcessStep; index: number }) {
  const rowRef = useRef<HTMLLIElement>(null)
  // Lights up once the row reaches the middle of the screen, and stays lit
  const reached = useInView(rowRef, { once: true, margin: '0px 0px -45% 0px' })
  const [isDesktop] = useState(() => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches)

  const Icon = stepIcons[index % stepIcons.length]
  const isLeft = index % 2 === 0

  // Feeds the cursor position to the hover spotlight (CSS vars, no re-render)
  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <li ref={rowRef} className="relative pl-16 md:grid md:grid-cols-2 md:pl-0">
      {/* Timeline node */}
      <div className="absolute left-5 top-6 z-10 -translate-x-1/2 md:left-1/2">
        <div
          className={cn(
            'relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
            reached
              ? 'scale-100 border-brand bg-brand text-canvas shadow-[0_0_28px_var(--color-brand-glow)]'
              : 'scale-90 border-ink/15 bg-canvas text-ink-faint'
          )}
        >
          <Icon size={16} strokeWidth={2} />
          {/* One-time pulse ring when the node lights up */}
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full border border-brand"
            initial={{ opacity: 0, scale: 1 }}
            animate={reached ? { opacity: [0.6, 0], scale: [1, 2] } : { opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', repeat: 1 }}
          />
        </div>
      </div>

      {/* Card */}
      <motion.div
        className={cn(isLeft ? 'md:col-start-1 md:pr-16' : 'md:col-start-2 md:pl-16')}
        initial={{ opacity: 0, y: 40, x: isDesktop ? (isLeft ? -40 : 40) : 0 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          onMouseMove={handleMove}
          className={cn(
            'group relative overflow-hidden rounded-2xl border border-ink/10 bg-ink/[0.04] p-6 backdrop-blur-xl sm:p-7',
            'shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
            'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
            'hover:-translate-y-1 hover:border-brand/40 hover:bg-ink/[0.07] hover:shadow-card'
          )}
        >
          {/* Cursor spotlight */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), var(--color-brand-glow), transparent 70%)',
            }}
            aria-hidden="true"
          />

          {/* Ghost step number */}
          <span
            className="pointer-events-none absolute -right-1 -top-5 select-none font-display text-[6.5rem] font-semibold leading-none text-ink/[0.05] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:text-brand/[0.14]"
            aria-hidden="true"
          >
            {step.step}
          </span>

          <h3 className="relative font-display text-xl font-medium text-ink transition-colors duration-300 group-hover:text-brand sm:text-2xl">
            {step.title}
          </h3>
          <p className="relative mt-3 max-w-md text-sm leading-relaxed text-ink-muted">{step.description}</p>

          <div className="relative mt-6 h-px w-10 bg-brand/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-28 group-hover:bg-brand" />
        </div>
      </motion.div>
    </li>
  )
}

export function HowIWork() {
  const railRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  // The glowing line fills as you scroll through the timeline
  const { scrollYProgress } = useScroll({ target: railRef, offset: ['start 65%', 'end 55%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })

  return (
    <section className="relative overflow-hidden border-t border-border/80 bg-transparent py-16 sm:py-24 md:py-32">
      {/* Colour blobs for depth */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-brand/[0.10] blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[420px] w-[420px] rounded-full bg-brand-dark/[0.16] blur-[150px]"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <SectionHeading align="center" kicker="Execution Process" title="How your project comes to life" />

        <div ref={railRef} className="relative mx-auto mt-14 max-w-5xl sm:mt-20">
          {/* Base line */}
          <div
            className="absolute bottom-4 top-4 left-5 w-px -translate-x-1/2 bg-ink/10 md:left-1/2"
            aria-hidden="true"
          />
          {/* Progress line */}
          <motion.div
            className="absolute bottom-4 top-4 left-5 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-brand via-brand to-brand/40 shadow-[0_0_12px_var(--color-brand)] md:left-1/2"
            style={{ scaleY: reduceMotion ? 1 : fill }}
            aria-hidden="true"
          />

          <ol className="space-y-8 md:space-y-14">
            {processSteps.map((step, i) => (
              <ProcessRow key={step.step} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}