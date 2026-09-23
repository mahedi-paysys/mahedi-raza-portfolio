import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Palette,
  CodeXml,
  RefreshCcw,
  LayoutDashboard,
  Smartphone,
  MonitorSmartphone,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Layers,
} from 'lucide-react'
import { services } from '@/data/content'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import type { ServiceItem } from '@/types'

const iconMap: Record<ServiceItem['icon'], typeof Palette> = {
  design: Palette,
  code: CodeXml,
  refresh: RefreshCcw,
  layout: LayoutDashboard,
  mobile: Smartphone,
  frontend: MonitorSmartphone,
  deploy: Rocket,
}

export function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="relative py-20 sm:py-28 md:py-36 bg-canvas overflow-hidden border-t border-border/80 scroll-mt-20">
      {/* Ambient background glow orbs */}
      <div
        className="absolute top-1/4 -left-20 w-[600px] h-[500px] bg-brand/[0.04] blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[600px] h-[500px] bg-brand/[0.04] blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10 w-full">
        {/* Header row: title left, quote/contact pills right */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.2em] uppercase text-brand">
                What I Offer
              </span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-display font-medium leading-[1.15] text-ink tracking-tight max-w-xl">
              Services built for results.
            </h2>
          </Reveal>
        </div>

        {/* Quick Service Category Navigation Pills */}
        <Reveal delay={0.15}>
          <div className="mt-10 sm:mt-12 flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none border-b border-border/60">
            {services.map((service, i) => {
              const TabIcon = iconMap[service.icon]
              const isActive = i === active

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    'relative px-3.5 py-2 rounded-full flex items-center gap-2 text-xs sm:text-[13px] font-medium whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0',
                    isActive
                      ? 'text-canvas'
                      : 'text-ink-muted hover:text-ink bg-surface/50 hover:bg-surface border border-border/60'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePillIndicator"
                      className="absolute inset-0 rounded-full bg-ink shadow-md"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <TabIcon size={13} className={isActive ? 'text-brand' : 'opacity-70'} />
                    <span>{service.title}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Cinematic Expanding Showcase Deck */}
        <div className="mt-8 sm:mt-10">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-3.5 md:h-[580px] lg:h-[620px] w-full">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon]
              const isExpanded = i === active

              return (
                <motion.div
                  key={service.title}
                  layout
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                  className={cn(
                    'group relative overflow-hidden rounded-2xl sm:rounded-3xl border cursor-pointer transition-all duration-500',
                    isExpanded
                      ? 'md:flex-[4] lg:flex-[4.5] border-brand/60 shadow-[0_20px_50px_-15px_rgba(124,61,18,0.15)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] min-h-[460px] md:min-h-0 bg-surface'
                      : 'md:flex-1 border-brand/20 dark:border-border/70 hover:border-brand/40 bg-surface/70 hover:bg-surface dark:bg-surface/40 dark:hover:bg-surface/70 min-h-[90px] md:min-h-0'
                  )}
                >
                  {/* Background Image with Depth Overlays */}
                  <div className="absolute inset-0 z-0 overflow-hidden bg-surface dark:bg-canvas">
                    <img
                      src={service.image || '/assets/projects/elite-warehouse/cover.jpg'}
                      alt={service.title}
                      loading="lazy"
                      className={cn(
                        'w-full h-full object-cover object-top transition-all duration-700 ease-out',
                        isExpanded
                          ? 'scale-105 opacity-75 dark:opacity-55'
                          : 'scale-100 opacity-40 dark:opacity-25 group-hover:opacity-65 dark:group-hover:opacity-45 group-hover:scale-105'
                      )}
                    />

                    {/* Gradient Overlays tailored for readability */}
                    <div
                      className={cn(
                        'absolute inset-0 transition-opacity duration-500',
                        isExpanded
                          ? 'bg-gradient-to-t from-surface via-surface/90 to-surface/40 md:bg-gradient-to-r md:from-surface md:via-surface/90 md:to-surface/30 dark:from-canvas dark:via-canvas/90 dark:to-canvas/40 dark:md:from-canvas dark:md:via-canvas/90 dark:md:to-canvas/30'
                          : 'bg-surface/85 group-hover:bg-surface/70 dark:bg-canvas/80 dark:group-hover:bg-canvas/70'
                      )}
                    />
                    <div className="absolute inset-0 dark:bg-black/20 bg-transparent pointer-events-none" />
                  </div>

                  {/* Expanded View Content */}
                  {isExpanded ? (
                    <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-xs text-brand font-semibold px-2.5 py-1 rounded-full bg-brand/15 border border-brand/30">
                          0{i + 1} / 0{services.length}
                        </span>

                        <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand shrink-0 shadow-sm">
                          <Icon size={20} />
                        </div>
                      </div>

                      {/* Main Middle & Bottom Content */}
                      <div className="my-auto py-6 sm:py-8 space-y-5 max-w-xl">
                        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-tight tracking-tight">
                          {service.title}
                        </h3>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-ink-muted">
                          {service.description}
                        </p>

                        {/* Deliverables Pills */}
                        {service.deliverables && (
                          <div className="pt-2">
                            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-faint block mb-2.5">
                              Deliverables & Standards:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {service.deliverables.map((item) => (
                                <span
                                  key={item}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface/90 dark:bg-canvas/85 border border-brand/20 dark:border-border/80 font-mono text-xs text-ink/90 font-medium shadow-sm"
                                >
                                  <CheckCircle2 size={13} className="text-brand" />
                                  <span>{item}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Button
                            to="/contact"
                            variant="primary"
                            size="sm"
                            className="gap-2 text-xs sm:text-sm font-medium tracking-wide shadow-card"
                          >
                            <span>Inquire Now</span>
                            <ArrowRight size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Collapsed View (Slim Strip) */
                    <div className="relative z-10 p-4 sm:p-5 flex md:flex-col justify-between items-center h-full">
                      {/* Top: Service Number */}
                      <span className="font-mono text-xs text-ink-muted font-medium">
                        0{i + 1}
                      </span>

                      {/* Center: Vertical Title on Desktop, Horizontal on Mobile */}
                      <div className="hidden md:flex flex-col items-center gap-4 my-auto">
                        <span
                          className="font-display text-base lg:text-lg font-medium text-ink-muted group-hover:text-ink transition-colors whitespace-nowrap [writing-mode:vertical-rl] rotate-180 tracking-wide"
                        >
                          {service.title}
                        </span>
                      </div>

                      {/* Mobile horizontal text */}
                      <div className="flex md:hidden items-center gap-2">
                        <Icon size={16} className="text-brand" />
                        <span className="font-display text-sm font-medium text-ink">
                          {service.title}
                        </span>
                      </div>

                      {/* Bottom: Icon Badge */}
                      <div className="w-8 h-8 rounded-lg bg-surface/80 border border-border/80 flex items-center justify-center text-ink-muted group-hover:text-brand group-hover:border-brand/40 transition-colors">
                        <Icon size={15} />
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Feature Value Highlights Bar Below Deck */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/25 flex items-center justify-center text-brand shrink-0">
              <Zap size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-ink">Sub-Second Speed</h4>
              <p className="text-xs text-ink-muted mt-0.5">Optimized for 95+ Core Web Vitals</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/25 flex items-center justify-center text-brand shrink-0">
              <CodeXml size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-ink">Clean Hand-Code</h4>
              <p className="text-xs text-ink-muted mt-0.5">Strict TypeScript, React & Tailwind</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/25 flex items-center justify-center text-brand shrink-0">
              <Layers size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-ink">Modern Aesthetics</h4>
              <p className="text-xs text-ink-muted mt-0.5">Tailored design systems & fluid motion</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/25 flex items-center justify-center text-brand shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-ink">Conversion Driven</h4>
              <p className="text-xs text-ink-muted mt-0.5">Engineered to turn traffic into clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}