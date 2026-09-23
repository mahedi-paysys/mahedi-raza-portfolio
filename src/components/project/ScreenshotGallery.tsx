import type { ProjectScreenshot } from '@/types'
import { Reveal } from '@/components/ui/Reveal'

export function ScreenshotGallery({ screenshots }: { screenshots: ProjectScreenshot[] }) {
  if (screenshots.length === 0) return null

  return (
    <div className="grid sm:grid-cols-3 gap-5">
      {screenshots.map((shot, i) => (
        <Reveal key={shot.src} delay={i * 0.05}>
          <div className="overflow-hidden rounded-xl border border-border bg-canvas">
            <img src={shot.src} alt={shot.label} loading="lazy" className="w-full h-auto" />
          </div>
          <p className="mt-2 text-xs font-mono text-ink-faint">{shot.label}</p>
        </Reveal>
      ))}
    </div>
  )
}
