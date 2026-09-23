import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import {
  siKubernetes,
  siMysql,
  siSpringboot,
  siReact,
  siTypescript,
  siTailwindcss,
  siFigma,
  siGit,
  siVercel,
  siNetlify,
  type SimpleIcon,
} from 'simple-icons'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

// Percentages are visual only: set them to whatever honestly reflects you
const skills = [
  { name: 'UI/UX & Responsive Design', value: 92 },
  { name: 'Full-Stack Web Development', value: 95 },
  { name: 'Dashboard & Admin Panel Development', value: 88 },
  { name: 'Database Design & Integration', value: 85 },
  { name: 'Performance & Scalable Architecture', value: 87 },
  { name: 'Deployment & Hosting', value: 83 },
]

interface Tool {
  name: string
  // Brand icon from simple-icons
  icon?: SimpleIcon
  // For brands not in simple-icons: provide raw SVG path + brand hex colour
  customSvgPath?: string
  customColor?: string
  // Near-black brand logos would vanish on the dark theme, so they follow the text colour
  mono?: boolean
}

// Java's official SVG path (not in this version of simple-icons)
const JAVA_SVG_PATH =
  'M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.749-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 .001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 .001.553.457 3.393.639'

const tools: Tool[] = [
  { name: 'Java', customSvgPath: JAVA_SVG_PATH, customColor: '#ED8B00' },
  { name: 'Spring Boot', icon: siSpringboot },
  { name: 'React', icon: siReact },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'SQL', icon: siMysql },
  { name: 'Microservices', icon: siKubernetes },
  { name: 'Figma', icon: siFigma },
  { name: 'Git & GitHub', icon: siGit },
  { name: 'Vercel', icon: siVercel, mono: true },
  { name: 'Netlify', icon: siNetlify },
]

function SkillBar({ name, value, index }: { name: string; value: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)
  const delay = 0.15 + index * 0.12

  // Count the percentage up while the bar fills
  useEffect(() => {
    if (!inView || reduceMotion) return
    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduceMotion, value, delay])

  return (
    <div ref={ref}>
      <div className="mb-2.5 flex items-baseline justify-between text-sm">
        <span className="text-ink">{name}</span>
        <span className="font-mono text-xs tabular-nums text-brand">{display}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-ink/10">
        <motion.div
          className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-brand-dark to-brand shadow-[0_0_14px_var(--color-brand-glow)]"
          initial={{ width: reduceMotion ? `${value}%` : 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Slow shimmer that drifts across the bar */}
          {!reduceMotion && (
            <motion.span
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent"
              initial={{ x: '-120%' }}
              animate={inView ? { x: '420%' } : { x: '-120%' }}
              transition={{ duration: 2.4, delay: delay + 1.4, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
            />
          )}
        </motion.div>
      </div>
    </div>
  )
}

function ToolTile({ tool, index }: { tool: Tool; index: number }) {
  const reduceMotion = useReducedMotion()
  const color = tool.customColor
    ? tool.customColor
    : tool.mono
      ? 'var(--color-ink)'
      : `#${tool.icon!.hex}`

  // Feeds the cursor position to the hover spotlight (CSS vars, no re-render)
  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        onMouseMove={handleMove}
        style={{ ['--tech' as string]: color }}
        className="tech-skill-tile group relative flex items-center gap-3.5 overflow-hidden rounded-xl border border-brand/25 bg-brand/[0.07] px-4 py-3.5 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-brand/60 hover:bg-brand/[0.12] shadow-[0_4px_16px_rgba(124,61,18,0.08)] hover:shadow-[0_8px_24px_rgba(124,61,18,0.16)] dark:border-ink/10 dark:bg-ink/[0.04] dark:hover:border-[color-mix(in_srgb,var(--tech)_45%,transparent)] dark:hover:bg-ink/[0.07] dark:shadow-none dark:hover:shadow-card sm:px-5 sm:py-4"
      >
        {/* Cursor spotlight tinted with the technology's own colour */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--tech) 18%, transparent), transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Icon */}
        <div
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/20 dark:border-transparent shadow-sm dark:shadow-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-[-4deg]"
          style={{ color, backgroundColor: 'color-mix(in srgb, var(--tech) 14%, transparent)' }}
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -2.5, 0] }}
            transition={{ duration: 4 + (index % 3) * 0.7, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
          >
            <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
              <path d={tool.customSvgPath ?? tool.icon!.path} />
            </svg>
          </motion.div>
        </div>

        <span className="relative text-sm text-ink/90 dark:text-ink-muted transition-colors duration-300 group-hover:text-brand dark:group-hover:text-ink font-medium">
          {tool.name}
        </span>
      </div>
    </motion.div>
  )
}

export function TechStack() {
  return (
    <section className="relative overflow-hidden border-t border-border/80 bg-transparent py-16 sm:py-24 md:py-32">
      {/* Colour blobs for depth */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-brand/[0.10] blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-[440px] w-[440px] rounded-full bg-brand-dark/[0.16] blur-[150px]"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <SectionHeading
          align="center"
          kicker="Engineering & Design Stack"
          title="My tech stack."
          subtitle="Modern, battle-tested tools for building fast, reliable products."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Left: skill bars */}
          <Reveal>
            <div className="flex h-full flex-col">
              <h3 className="font-display text-lg font-medium text-brand sm:text-xl">Technical Skills</h3>
              <div className="mt-6 flex flex-1 flex-col justify-between gap-7 sm:mt-8">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} value={skill.value} index={i} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: tools grid */}
          <div>
            <Reveal>
              <h3 className="font-display text-lg font-medium text-brand sm:text-xl">Tools &amp; Technologies</h3>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
              {tools.map((tool, i) => (
                <ToolTile key={tool.name} tool={tool} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}