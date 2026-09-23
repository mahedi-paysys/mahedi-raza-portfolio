import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { ExternalLink, ArrowLeft, Globe, FileText, CheckCircle2 } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { getProjectBySlug, getRelatedProjects } from '@/data/projects'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectVerification } from '@/components/project/ProjectVerification'
import { ClientTestimonial } from '@/components/project/ClientTestimonial'
import { ProjectCard } from '@/components/project/ProjectCard'
import { CaseStudyModal } from '@/components/project/CaseStudyModal'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false)
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <Navigate to="/work" replace />

  const related = getRelatedProjects(project.slug, 2)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-10 sm:pt-36 sm:pb-14 md:pt-48 md:pb-16 relative overflow-hidden">
        {/* Ambient background glow */}
        <div
          className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-brand/[0.04] blur-[150px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-main relative z-10">
          <Reveal>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-border/80 text-xs font-mono text-ink-muted hover:text-brand hover:border-brand/40 transition-all duration-300"
            >
              <ArrowLeft size={13} /> Back to all projects
            </Link>

            <h1 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-ink text-balance max-w-4xl tracking-tight">
              {project.title}
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
              {project.excerpt}
            </p>

            {/* Quick Action Links Bar */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  className="gap-2 text-xs sm:text-sm font-medium tracking-wide shadow-card"
                >
                  <Globe size={15} />
                  <span>Visit Live Project</span>
                  <ExternalLink size={13} className="opacity-80" />
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="gap-2 text-xs sm:text-sm font-medium tracking-wide border-border/90 hover:border-brand/50 hover:bg-surface"
                >
                  <SiGithub size={14} />
                  <span>GitHub Repository</span>
                </Button>
              )}
              <Button
                type="button"
                onClick={() => setIsCaseStudyOpen(true)}
                variant="outline"
                size="sm"
                className="gap-2 text-xs sm:text-sm font-medium tracking-wide border-brand/50 text-brand hover:bg-brand/10 cursor-pointer"
              >
                <FileText size={14} />
                <span>View Case Study</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cover Image Frame */}
      <section className="container-main">
        <Reveal>
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-canvas aspect-[16/10] sm:aspect-[16/9] shadow-elevated">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </section>

      {/* Case Study Content Grid */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container-main grid lg:grid-cols-[1fr_340px] gap-8 sm:gap-12 lg:gap-16 items-start">

          {/* Main Case Study Column */}
          <div className="space-y-8 sm:space-y-12">

            {/* Overview */}
            <Reveal>
              <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-surface/30 border border-border/70 backdrop-blur-md">
                <h2 className="heading-overview font-display text-xl sm:text-2xl font-medium text-sky-900 dark:text-sky-400">Project Overview</h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-ink-muted">{project.overview}</p>
              </div>
            </Reveal>

            {/* Challenge & Approach Bento */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <Reveal delay={0.06} className="h-full">
                <div className="h-full p-5 sm:p-7 rounded-2xl bg-surface/30 border border-border/70 backdrop-blur-md flex flex-col justify-between">
                  <div>
                    <h3 className="heading-challenge font-display text-lg sm:text-xl font-medium text-amber-900 dark:text-amber-300 mb-2 sm:mb-3">
                      The Challenge
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-ink-muted">{project.challenge}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="h-full">
                <div className="h-full p-5 sm:p-7 rounded-2xl bg-surface/30 border border-border/70 backdrop-blur-md flex flex-col justify-between">
                  <div>
                    <h3 className="heading-approach font-display text-lg sm:text-xl font-medium text-emerald-900 dark:text-emerald-400 mb-2 sm:mb-3">
                      The Approach
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-ink-muted">{project.approach}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Design Decisions */}
            <Reveal>
              <div className="p-5 sm:p-8 rounded-2xl bg-surface/30 border border-border/70 backdrop-blur-md">
                <h3 className="font-display text-xl sm:text-2xl font-medium text-ink">Architectural & Design Decisions</h3>
                <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3">
                  {project.designDecisions.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base leading-relaxed text-ink-muted">
                      <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Key Features */}
            <Reveal>
              <div className="p-5 sm:p-8 rounded-2xl bg-surface/30 border border-border/70 backdrop-blur-md">
                <h3 className="font-display text-xl sm:text-2xl font-medium text-ink">Key Sections & Capabilities</h3>
                <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3">
                  {project.keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base leading-relaxed text-ink-muted">
                      <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <ProjectVerification project={project} />
            <ClientTestimonial project={project} />
          </div>

          {/* Sticky Sidebar Info Card */}
          <Reveal delay={0.12} className="w-full lg:sticky lg:top-28 space-y-6">
            <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-surface/60 p-5 sm:p-7 md:p-8 backdrop-blur-xl space-y-5 sm:space-y-6 shadow-card">

              <div>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-ink-faint">Scope & Role</span>
                <p className="mt-1 text-sm sm:text-base font-medium text-ink font-display">{project.role}</p>
              </div>

              <div className="h-[1px] bg-border/60" />

              <div>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-ink-faint">Technologies Used</span>
                <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-canvas/80 border border-border/80 px-2 sm:px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-border/60" />

              <div>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-ink-faint">Measurable Outcome</span>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-ink/90 font-sans">{project.outcome}</p>
              </div>

              <div className="pt-2 space-y-2.5 sm:space-y-3">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center gap-2 text-xs sm:text-sm shadow-card"
                  >
                    <Globe size={14} />
                    <span>Visit Live Project</span>
                    <ExternalLink size={13} className="opacity-75" />
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="w-full justify-center gap-2 text-xs sm:text-sm border-border/80 hover:border-brand/40"
                  >
                    <SiGithub size={14} />
                    <span>View GitHub Source</span>
                  </Button>
                )}
                <Button
                  type="button"
                  onClick={() => setIsCaseStudyOpen(true)}
                  variant="outline"
                  className="w-full justify-center gap-2 text-xs sm:text-sm border-brand/50 text-brand hover:bg-brand/10 cursor-pointer"
                >
                  <FileText size={14} />
                  <span>View Case Study</span>
                </Button>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="pb-24 md:pb-32 border-t border-border/70 pt-20">
          <div className="container-main">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-brand">More Case Studies</span>
              <h2 className="mt-2 font-display text-3xl font-medium text-ink">Explore Other Projects</h2>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-7">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.08}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* On-Site PDF Case Study Viewer Modal */}
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        pdfUrl={project.caseStudyPdf || '/assets/resume/mahedi-resume.pdf'}
        title={project.title}
      />
    </>
  )
}

