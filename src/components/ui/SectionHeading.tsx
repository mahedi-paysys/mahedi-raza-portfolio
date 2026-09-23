import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'

interface SectionHeadingProps {
  kicker?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ kicker, title, subtitle, align = 'left', className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('max-w-xl', align === 'center' && 'mx-auto text-center', className)}>
      {kicker && <p className="mb-2.5 text-xs sm:text-sm font-medium text-brand font-mono tracking-wider uppercase">{kicker}</p>}
      <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-display font-medium leading-[1.2] text-ink text-balance">
        {title}
      </h2>
      {subtitle && <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-ink-muted">{subtitle}</p>}
    </Reveal>
  )
}
