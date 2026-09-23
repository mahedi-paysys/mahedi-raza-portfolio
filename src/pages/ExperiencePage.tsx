import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { CTABanner } from '@/components/home/CTABanner'
import { Briefcase, Calendar, CheckCircle2, Download, Terminal, Layers, Cpu, Award } from 'lucide-react'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Enterprise Software Solutions',
    period: '2023 — Present',
    type: 'Full-Time',
    description:
      'Architecting and maintaining mission-critical backend systems using Java and Spring Boot. Building robust RESTful microservices, optimizing database transactions, and adhering to strict software engineering standards.',
    highlights: [
      'Engineered scalable REST APIs serving high concurrent user traffic with sub-100ms response times.',
      'Designed structured relational database schemas ensuring data integrity and query optimization.',
      'Conducted automated unit testing, integration testing, and CI/CD deployment pipeline maintenance.',
    ],
    skills: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Microservices', 'Git'],
  },
  {
    role: 'Independent Web Designer & Developer',
    company: 'Self-Employed / Freelance',
    period: '2022 — Present',
    type: 'Client Projects & Contracts',
    description:
      'Designing and developing custom, high-converting modern websites for businesses and founders. Specializing in bespoke aesthetics, React/TypeScript frontends, responsive fluid layouts, and Google Lighthouse 99+ optimizations.',
    highlights: [
      'Delivered bespoke web applications with tailored typography, micro-animations, and zero page-builder bloat.',
      'Achieved 99+ Performance, Accessibility, and Best Practices scores across Google Lighthouse audits.',
      'Managed end-to-end client lifecycles from wireframing to DNS hosting and post-launch handover.',
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Figma'],
  },
]

const competencies = [
  {
    icon: Cpu,
    title: 'Robust Backend Systems',
    description: 'Deep understanding of application architecture, API contracts, caching, and database schemas.',
  },
  {
    icon: Layers,
    title: 'Design-Engineering Bridge',
    description: 'Translating visual design into clean, maintainable, pixel-perfect frontend code without shortcuts.',
  },
  {
    icon: Terminal,
    title: 'Maintainable Clean Code',
    description: 'Zero technical debt, modular components, strict TypeScript typing, and organized directories.',
  },
  {
    icon: Award,
    title: 'Performance & SEO First',
    description: 'Asset optimization, semantic DOM hierarchy, fast FCP/LCP metrics, and mobile-first responsiveness.',
  },
]

export function ExperiencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
        {/* Ambient background glow */}
        <div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-brand/[0.04] blur-[150px] rounded-full pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="container-main relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-4">
                <Briefcase size={12} className="text-brand" />
                <span>Career & Track Record</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-ink text-balance max-w-3xl tracking-tight">
                Software engineering background & experience.
              </h1>

              <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-ink-muted">
                A disciplined software engineer blending backend architectural precision with modern, high-end frontend craftsmanship.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Button 
                href="/assets/resume/mahedi-resume.pdf" 
                download="mahedi-resume.pdf"
                size="lg"
                className="w-full sm:w-auto shrink-0 font-mono text-xs uppercase tracking-wider justify-center"
              >
                <Download size={15} /> Download Full Resume
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="pb-16 sm:pb-20 md:pb-28 relative">
        <div className="container-main max-w-4xl space-y-6 sm:space-y-8">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.1}>
              <div className="group relative rounded-2xl bg-surface/50 hover:bg-surface/80 border border-border/80 hover:border-brand/40 p-5 sm:p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-card overflow-hidden">
                
                {/* Subtle hover light */}
                <div 
                  className="absolute -right-10 -top-10 w-32 h-32 bg-brand/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  aria-hidden="true" 
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-border/60">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-medium text-ink group-hover:text-brand transition-colors duration-300">
                      {exp.role}
                    </h2>
                    <p className="text-sm sm:text-base text-brand font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-surface border border-border font-mono text-[11px] sm:text-xs text-ink-muted">
                      <Calendar size={12} className="text-brand" /> {exp.period}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-brand/10 border border-brand/20 font-mono text-[11px] sm:text-xs text-brand font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed text-ink/90">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                  <h3 className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink-faint font-semibold">
                    Key Responsibilities & Deliverables
                  </h3>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm leading-relaxed text-ink-muted">
                        <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills used */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border/50 flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 rounded-lg bg-canvas/80 border border-border/80 font-mono text-[11px] sm:text-xs text-ink-muted group-hover:border-border-strong group-hover:text-ink transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Competencies Grid */}
      <section className="py-16 sm:py-20 md:py-28 border-t border-border/80 bg-surface/30 relative overflow-hidden">
        <div className="container-main relative z-10">
          <div className="max-w-2xl">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-brand font-medium">Core Capabilities</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-medium text-ink">
                What I bring to every software & web project.
              </h2>
            </Reveal>
          </div>

          <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {competencies.map((comp, i) => (
              <Reveal key={comp.title} delay={i * 0.08} className="h-full">
                <div className="group h-full p-5 sm:p-7 rounded-2xl bg-canvas/80 hover:bg-canvas border border-border/80 hover:border-brand/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-card flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-canvas transition-all duration-300">
                      <comp.icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-5 sm:mt-6 font-display text-lg sm:text-xl font-medium text-ink group-hover:text-brand transition-colors duration-300">
                      {comp.title}
                    </h3>
                    <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted group-hover:text-ink/90 transition-colors duration-300">
                      {comp.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
