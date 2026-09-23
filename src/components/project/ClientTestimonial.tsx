import { Quote } from 'lucide-react'
import type { Project } from '@/types'
import { Reveal } from '@/components/ui/Reveal'

interface ClientTestimonialProps {
  project: Project
}

/**
 * Stays hidden until `project.testimonial` is set in data/projects.ts.
 * Never fill this with a placeholder quote — leave the field out entirely
 * until the client provides a real one.
 */
export function ClientTestimonial({ project }: ClientTestimonialProps) {
  if (!project.testimonial) return null

  return (
    <Reveal className="rounded-2xl border border-border bg-surface p-7 md:p-8">
      <Quote size={22} className="text-brand" />
      <p className="mt-4 font-display text-lg leading-relaxed text-ink text-balance">
        "{project.testimonial.quote}"
      </p>
      <p className="mt-4 text-sm font-medium text-ink">
        {project.testimonial.author}
        <span className="text-ink-muted font-normal"> — {project.testimonial.role}</span>
      </p>
    </Reveal>
  )
}
