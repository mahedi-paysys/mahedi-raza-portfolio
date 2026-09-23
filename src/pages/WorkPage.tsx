import { useState } from 'react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/project/ProjectCard'
import { Reveal } from '@/components/ui/Reveal'
import { Sparkles } from 'lucide-react'

export function WorkPage() {
  const [filter, setFilter] = useState<'all' | 'real-client' | 'concept'>('all')

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true
    return p.status === filter
  })

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
        {/* Ambient background glow */}
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-brand/[0.04] blur-[150px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-main relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-4">
              <Sparkles size={12} className="text-brand" />
              <span>Selected Portfolio</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-ink text-balance max-w-3xl tracking-tight">
              Real client results & high-standard concepts.
            </h1>

          </Reveal>

          {/* Filter Tabs */}
          <Reveal delay={0.1}>
            <div className="mt-7 sm:mt-10 flex flex-wrap items-center gap-2 sm:gap-2.5">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${filter === 'all'
                  ? 'bg-brand text-canvas font-semibold shadow-card'
                  : 'bg-surface/60 border border-border/80 text-ink-muted hover:text-ink hover:border-brand/40'
                  }`}
              >
                All Projects ({projects.length})
              </button>

              <button
                type="button"
                onClick={() => setFilter('real-client')}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${filter === 'real-client'
                  ? 'bg-brand text-canvas font-semibold shadow-card'
                  : 'bg-surface/60 border border-border/80 text-ink-muted hover:text-ink hover:border-brand/40'
                  }`}
              >
                Client Projects
              </button>

              <button
                type="button"
                onClick={() => setFilter('concept')}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${filter === 'concept'
                  ? 'bg-brand text-canvas font-semibold shadow-card'
                  : 'bg-surface/60 border border-border/80 text-ink-muted hover:text-ink hover:border-brand/40'
                  }`}
              >
                Craft Concepts
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 sm:pb-24 md:pb-32 relative">
        <div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i * 0.06}
              className="h-full flex"
            >
              <ProjectCard project={project} featured={project.status === 'real-client'} className="w-full" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

