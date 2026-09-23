import { Image, Film, Github } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

/**
 * A placeholder gallery for process media (dev screenshots, design shots,
 * a short screen recording, GitHub repo link). Nothing is faked here —
 * it simply shows where that content will go once added.
 *
 * To fill this in for a project, edit this component to read from a
 * `project.behindTheBuild` field once you add real assets, or replace
 * the placeholder tiles below with real content.
 */
export function BehindTheBuild() {
  const items = [
    { icon: Image, label: 'Design screenshots' },
    { icon: Image, label: 'Development screenshots' },
    { icon: Film, label: 'Screen recording' },
    { icon: Github, label: 'GitHub repository' },
  ]

  return (
    <Reveal>
      <h3 className="font-display text-xl font-medium text-ink">Behind the Build</h3>
      <p className="mt-2 text-sm text-ink-muted max-w-lg">
        Process media for this project will go here as it becomes available.
      </p>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border-strong bg-canvas/60 px-3 py-7 text-center"
          >
            <item.icon size={18} className="text-ink-faint" />
            <span className="text-xs text-ink-faint">{item.label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
