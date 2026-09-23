import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/project/ProjectCard'
import { Reveal } from '@/components/ui/Reveal'

// Fixed category list — includes upcoming categories (Roofing, Auto Repair) with no projects yet
const CATEGORIES = [
  'All',
  'Real Estate & Construction',
  'Roofing',
  'Entertainment & Media',
  'E-commerce',
  'Tour & Travels',
  'Auto Repair',
]

export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  const visibleProjects = filteredProjects.slice(0, 6)

  return (
    <section id="work" className="py-20 sm:py-24 md:py-32 relative">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-brand/[0.04] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        {/* Header Row: MY WORK / Selected Projects left, VIEW ALL PROJECTS right */}
        <div>
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.2em] uppercase text-brand">
                My Work
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink">
              Selected Projects
            </h2>
          </Reveal>
        </div>

        {/* Filter Navigation Tabs */}
        <Reveal delay={0.15}>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2 sm:gap-2.5 pb-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-300 cursor-pointer ${isActive
                    ? 'text-canvas'
                    : 'text-ink-muted hover:text-ink bg-surface/50 hover:bg-surface border border-border/70 hover:border-border-strong'
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-full bg-ink shadow-md"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* 3-Column Modern Project Cards Grid */}
        <motion.div
          layout
          className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.97 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full flex"
              >
                <ProjectCard
                  project={project}
                  featured={project.status === 'real-client'}
                  className="w-full"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1} className="mt-10 sm:mt-12 flex justify-center">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-medium tracking-wider uppercase text-ink-muted hover:text-brand transition-colors duration-300"
          >
            <span>View All Projects</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 text-brand"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
