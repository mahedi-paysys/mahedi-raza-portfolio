import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, Globe } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import type { Project } from '@/types'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  featured?: boolean
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[22px]',
        'border border-border/70 hover:border-brand/45 bg-surface/40 hover:bg-surface/75',
        'backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.35)]',
        'transition-all duration-500 hover:-translate-y-2',
        className
      )}
    >
      <div
        className="absolute -right-16 -top-16 w-48 h-48 bg-brand/[0.08] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
        aria-hidden="true"
      />

      <div className="p-3 sm:p-3.5 flex flex-col flex-grow">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-[18px] bg-canvas aspect-[16/10] border border-border/40">
          <Link
            to={`/work/${project.slug}`}
            className="block w-full h-full cursor-pointer overflow-hidden"
            tabIndex={-1}
            aria-label={`View ${project.title} case study`}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
          </Link>
        </div>

        <div className="pt-4 pb-1 px-1.5 sm:px-2 flex flex-col flex-grow">
          {/* Name — always visible */}
          <Link to={`/work/${project.slug}`} className="group/title block">
            <h3 className="font-display text-lg sm:text-xl font-medium text-ink group-hover/title:text-brand transition-colors duration-300 line-clamp-1 leading-snug">
              {project.title}
            </h3>
          </Link>

          {/* Quick links — always visible */}
          <div className="mt-3 flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Site"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas/80 hover:bg-brand text-ink-muted hover:text-canvas border border-border/80 hover:border-brand transition-all duration-300 shadow-sm hover:scale-110"
              >
                <Globe size={13} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas/80 hover:bg-brand text-ink-muted hover:text-canvas border border-border/80 hover:border-brand transition-all duration-300 shadow-sm hover:scale-110"
              >
                <SiGithub size={12} />
              </a>
            )}
            <Link
              to={`/work/${project.slug}`}
              title="Case Study"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas/80 hover:bg-brand text-ink-muted hover:text-canvas border border-border/80 hover:border-brand transition-all duration-300 shadow-sm hover:scale-110"
            >
              <Eye size={13} />
            </Link>
          </div>

          {/* Description + tech stack — hidden by default, reveals smoothly on hover */}
          <div
            className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ gridTemplateRows: isHovered ? '1fr' : '0fr' }}
          >
            <div className="overflow-hidden">
              <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-ink-muted line-clamp-2">
                {project.excerpt}
              </p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-canvas/80 border border-border/70 font-mono text-[10px] text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}