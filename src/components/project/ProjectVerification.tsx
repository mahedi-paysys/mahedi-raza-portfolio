import { ShieldCheck, ExternalLink } from 'lucide-react'
import type { Project } from '@/types'
import { Reveal } from '@/components/ui/Reveal'

interface ProjectVerificationProps {
  project: Project
}

/**
 * Shown only for real client projects (i.e. `project.client` is set).
 * Explains who the project was built for and links to both the client's
 * own site and the live project, so the claim is independently checkable.
 */
export function ProjectVerification({ project }: ProjectVerificationProps) {
  if (!project.client) return null

  return (
    <Reveal className="rounded-2xl border border-brand/20 bg-brand-light p-7 md:p-8">
      <div className="flex items-center gap-2.5 text-brand-dark">
        <ShieldCheck size={18} />
        <p className="text-sm font-semibold">Project Verification</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink">
        This website was developed for{' '}
        <a
          href={project.client.url}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-brand-dark underline underline-offset-2 hover:text-ink"
        >
          {project.client.name}
        </a>
        , who has given permission for this project to be shown publicly in this
        portfolio, linked to the company and the live site.
      </p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
        <a
          href={project.client.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-ink hover:text-brand-dark"
        >
          {project.client.name} <ExternalLink size={13} />
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-ink hover:text-brand-dark"
          >
            Live project <ExternalLink size={13} />
          </a>
        )}
      </div>
    </Reveal>
  )
}
