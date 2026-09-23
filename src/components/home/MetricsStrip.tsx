import { Zap, ShieldCheck, Award, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const metrics = [
  {
    icon: Zap,
    value: '99+',
    label: 'Performance Score',
    description: 'Google Lighthouse metrics for blazing fast speed.',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Clean Architecture',
    description: 'Hand-written code with zero page-builder bloat.',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Bespoke Projects',
    description: 'High-converting custom sites delivered on time.',
  },
  {
    icon: Sparkles,
    value: '<1.5s',
    label: 'Global Load Speed',
    description: 'Optimized assets served across ultra-fast CDNs.',
  },
]

export function MetricsStrip() {
  return (
    <section className="relative py-12 md:py-16 bg-surface/60 border-b border-border/70 backdrop-blur-md overflow-hidden">
      {/* Subtle background ambient line */}
      <div 
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand/30 to-transparent" 
        aria-hidden="true" 
      />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.08} className="h-full">
              <div className="group relative h-full p-5 sm:p-6 rounded-2xl bg-canvas/60 border border-border/80 hover:border-brand/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft flex flex-col justify-between">
                
                {/* Micro accent corner light */}
                <div 
                  className="absolute -top-6 -right-6 w-16 h-16 bg-brand/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true" 
                />

                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-canvas transition-all duration-300">
                    <metric.icon size={18} strokeWidth={1.8} />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-ink-faint group-hover:text-brand transition-colors duration-300">
                    VERIFIED
                  </span>
                </div>

                <div className="mt-4 sm:mt-5">
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-ink group-hover:text-brand transition-colors duration-300 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-ink/90 font-display">
                    {metric.label}
                  </div>
                  <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
