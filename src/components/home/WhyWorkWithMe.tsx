import { Smartphone, Cpu, Briefcase, MessageCircle, Sparkles, LifeBuoy } from 'lucide-react'
import { reasons } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import type { ReasonItem } from '@/types'

const iconMap: Record<ReasonItem['icon'], typeof Smartphone> = {
  responsive: Smartphone,
  engineering: Cpu,
  business: Briefcase,
  communication: MessageCircle,
  clean: Sparkles,
  support: LifeBuoy,
}

export function WhyWorkWithMe() {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-t border-border/80 bg-surface/40 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div 
        className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-brand/[0.03] blur-[160px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container-main relative z-10">
        <SectionHeading 
          kicker="The Value Proposition" 
          title="A developer's precision, a designer's aesthetic"
          subtitle="Direct technical mastery combined with deep attention to typography, interaction design, and commercial intent."
        />

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((reason, i) => {
            const Icon = iconMap[reason.icon]
            return (
              <Reveal key={reason.title} delay={i * 0.06} className="h-full">
                <div className="group relative h-full rounded-2xl bg-canvas/80 hover:bg-canvas border border-border/80 hover:border-brand/40 p-5 sm:p-7 md:p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle top-right hover light */}
                  <div 
                    className="absolute -right-8 -top-8 w-24 h-24 bg-brand/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    aria-hidden="true" 
                  />

                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-canvas transition-all duration-500 shadow-sm">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 font-display text-xl font-medium text-ink group-hover:text-brand transition-colors duration-300">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-muted group-hover:text-ink/90 transition-colors duration-300">
                      {reason.description}
                    </p>
                  </div>

                  {/* Bottom accent indicator line */}
                  <div className="mt-8 pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-brand/70 font-semibold uppercase tracking-wider">
                      ADVANTAGE 0{i + 1}
                    </span>
                    <div className="h-[2px] w-6 bg-brand/30 rounded-full group-hover:w-16 group-hover:bg-brand transition-all duration-500" />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

