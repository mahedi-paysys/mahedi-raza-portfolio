import type { MouseEvent } from 'react'
import { Palette, Code2, Smartphone, Rocket } from 'lucide-react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { TiltCard } from '@/components/ui/TiltCard'

interface PillarItem {
  icon: typeof Palette
  title: string
  description: string
  tag: string
  detail: string
  image: string
}

const pillars: PillarItem[] = [
  {
    icon: Palette,
    title: 'Design',
    description: 'Bespoke, brand-tailored layouts engineered to captivate and convert—never relying on generic templates.',
    tag: 'Aesthetics & UI',
    detail: 'Tailored Visuals',
    image: '/assets/trustintro/card-design-1.jpg',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Clean, modular, high-performance code written with modern standards for blistering load times.',
    tag: 'Clean Code',
    detail: 'Zero Bloat',
    image: '/assets/trustintro/card-design-2.jpg',
  },
  {
    icon: Smartphone,
    title: 'Responsive experience',
    description: 'Pixel-perfect fluidity rigorously tested across mobile, tablet, ultra-wide screens, and browsers.',
    tag: 'Adaptive Layout',
    detail: '100% Fluidity',
    image: '/assets/trustintro/card-design-3.jpg',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Seamless DNS configuration, lightning-fast CDN hosting, and production-grade launch readiness.',
    tag: 'Production Ready',
    detail: 'Global CDN',
    image: '/assets/trustintro/card-design-4.jpg',
  },
]

function SpotlightCard({ item, index }: { item: PillarItem; index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const background = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, var(--color-brand-glow), transparent 80%)`
  const borderMask = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, var(--color-brand), transparent 70%)`

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <TiltCard max={48}>
        <motion.div
          onMouseMove={handleMouseMove}
          whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
          className="group relative h-full rounded-2xl bg-gradient-to-b from-surface/80 via-surface/40 to-surface/20 p-[1px] transition-shadow duration-500 hover:shadow-elevated overflow-hidden"
        >
          {/* Dynamic Spotlight Border Gradient */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: borderMask,
            }}
          />

          {/* Base Border fallback */}
          <div className="absolute inset-0 rounded-2xl border border-brand/20 dark:border-border/80 group-hover:border-transparent transition-colors duration-500" />

          {/* Card Body */}
          <div className="trust-intro-card relative h-full flex flex-col justify-between rounded-2xl bg-surface/90 dark:bg-canvas/95 p-5 sm:p-7 md:p-8 backdrop-blur-xl overflow-hidden z-10 shadow-[0_12px_28px_-6px_rgba(30,15,6,0.12),0_4px_12px_-2px_rgba(30,15,6,0.06)] hover:shadow-[0_20px_40px_-8px_rgba(30,15,6,0.16),0_8px_16px_-4px_rgba(30,15,6,0.08)] dark:shadow-none transition-shadow duration-300">

            {/* Top Half Image with Smooth Dissolve Gradient Overlay */}
            <div className="absolute inset-x-0 top-0 h-[56%] overflow-hidden pointer-events-none z-0">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="trust-intro-img w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 dark:opacity-30 dark:group-hover:opacity-55 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              {/* Multi-layer gradient overlays: fades smoothly into the card body */}
              <div className="absolute inset-0 bg-gradient-to-b from-surface/15 via-surface/65 to-surface dark:from-canvas/20 dark:via-canvas/70 dark:to-canvas" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent dark:from-canvas dark:via-transparent dark:to-black/30" />
            </div>

            {/* Spotlight Radial Background Glow */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-1"
              style={{
                background,
              }}
            />

            {/* Top Content: Icon Container + Step Badge + Tag + Title + Description */}
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <motion.div
                  className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-surface border border-brand/25 dark:border-border/80 text-brand shadow-sm dark:shadow-md backdrop-blur-md group-hover:border-brand/60 transition-all duration-500"
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <item.icon size={22} strokeWidth={1.8} className="transition-transform duration-500 group-hover:scale-110" />

                  {/* Soft icon pulse light */}
                  <div className="absolute inset-0 rounded-xl bg-brand/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>

              {/* Tag Badge */}
              <div className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-brand font-medium px-2.5 py-0.5 rounded-md bg-brand/[0.12] border border-brand/25 backdrop-blur-md shadow-sm">
                <span>{item.tag}</span>
              </div>

              {/* Title */}
              <h3 className="mt-3 font-display text-xl font-medium text-ink tracking-tight group-hover:text-brand transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2.5 text-sm leading-relaxed text-ink-muted group-hover:text-ink/90 transition-colors duration-300">
                {item.description}
              </p>
            </div>

            {/* Bottom Accent: Micro Detail Tag & Shimmer Line */}
            <div className="relative z-10 mt-8 pt-4 border-t border-border/60 flex items-center justify-between">
              <span className="font-mono text-[11px] text-ink-faint group-hover:text-ink-muted transition-colors duration-300 flex items-center gap-1">
                <span className="text-brand opacity-60 font-mono">›</span> {item.detail}
              </span>

              {/* Animated Expand Line */}
              <div className="h-[2px] w-8 bg-border group-hover:w-16 group-hover:bg-brand transition-all duration-500 rounded-full" />
            </div>
          </div>
        </motion.div>
      </TiltCard>
    </Reveal>
  )
}

export function TrustIntro() {
  return (
    <section className="relative py-16 md:py-24 border-y border-border/80 bg-transparent overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand/[0.04] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand/[0.03] blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        {/* 4 Spotlight Pillar Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <SpotlightCard key={pillar.title} item={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
