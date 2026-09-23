import { cn } from '@/lib/utils'
import type { ProjectStatus } from '@/types'

const copy: Record<ProjectStatus, string> = {
  'real-client': 'Real Client Project',
  concept: 'Self-Initiated Concept Project',
}

interface StatusPillProps {
  status: ProjectStatus
  className?: string
}

export function StatusPill({ status, className }: StatusPillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] tracking-tight',
        status === 'real-client'
          ? 'border-brand/25 bg-brand-light text-brand-dark'
          : 'border-border-strong bg-surface text-ink-muted',
        className
      )}
    >
      <span
        className={cn('h-1.5 w-1.5 rounded-full', status === 'real-client' ? 'bg-brand' : 'bg-ink-faint')}
      />
      {copy[status]}
    </span>
  )
}
