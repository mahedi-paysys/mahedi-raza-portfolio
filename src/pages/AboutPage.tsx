import { motion } from 'framer-motion'
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Code2,
  Sparkles,
  Terminal,
  Shield,
  CheckCircle2,
  ArrowRight,
  Zap,
  Layers,
} from 'lucide-react'
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
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/content'
import { SiWhatsapp } from 'react-icons/si'

// ── Contact links
const contactLinks = [
  {
    icon: Mail,
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    display: siteConfig.email,
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    href: siteConfig.whatsappUrl,
    display: '+92 318 0350141',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: siteConfig.socials.linkedin,
    display: 'linkedin.com/in/mahedi-raza',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: siteConfig.socials.github,
    display: 'github.com/mahedi-raza',
  },
]

// Java SVG path for official Java logo
const JAVA_SVG_PATH =
  'M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.749-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 .001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 .001.553.457 3.393.639'

interface TechTool {
  name: string
  icon?: SimpleIcon
  customSvgPath?: string
  color: string
  mono?: boolean
}

// ── Tech skills (matching TechStack section exactly)
const techSkills: TechTool[] = [
  { name: 'Java', customSvgPath: JAVA_SVG_PATH, color: '#ED8B00' },
  { name: 'Spring Boot', icon: siSpringboot, color: '#6DB33F' },
  { name: 'React', icon: siReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: siTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: siTailwindcss, color: '#06B6D4' },
  { name: 'SQL', icon: siMysql, color: '#4479A1' },
  { name: 'Microservices', icon: siKubernetes, color: '#326CE5' },
  { name: 'Figma', icon: siFigma, color: '#F24E1E' },
  { name: 'Git & GitHub', icon: siGit, color: '#F05032' },
  { name: 'Vercel', icon: siVercel, color: '#FFFFFF', mono: true },
  { name: 'Netlify', icon: siNetlify, color: '#00C7B7' },
]

// ── Soft skills
const softSkills = ['Problem Solving', 'Direct Communication', 'Critical Thinking', 'Attention to Detail', 'Fast Delivery', 'Adaptability']

// ── Skill sets (matching TechStack skill bars)
const skillSets = [
  { label: 'UI/UX & Responsive Design', side: 'left' },
  { label: 'Full-Stack Web Development', side: 'right' },
  { label: 'Dashboard & Admin Panel Development', side: 'left' },
  { label: 'Database Design & Integration', side: 'right' },
  { label: 'Performance & Scalable Architecture', side: 'left' },
  { label: 'Deployment & Hosting', side: 'right' },
]

// ── Interests
const interests = ['Modern Web Trends', 'Open Source', 'UI Motion Design', 'Product Building', 'System Architecture', 'Clean Code Craft']

// ── Languages
const languages = [
  { lang: 'Urdu', level: 'Native' },
  { lang: 'English', level: 'Professional' },
]

// ── Philosophy cards
const philosophies = [
  {
    icon: Code2,
    title: 'Clean Engineering First',
    description: 'My background as a software engineer means your site is built with maintainable, zero-bloat architecture — not spaghetti template code.',
  },
  {
    icon: Sparkles,
    title: 'Design with Intent',
    description: 'Every layout, typography pairing, and micro-animation is deliberately chosen to evoke trust and guide visitors toward action.',
  },
  {
    icon: Terminal,
    title: 'Direct Collaboration',
    description: 'You communicate and build directly with me. No project managers, no lost translations, and complete transparency from day one.',
  },
  {
    icon: Shield,
    title: 'Hardened Delivery',
    description: 'Pixel-perfect mobile responsiveness, automated asset optimization, and rigorous testing across all devices before deployment.',
  },
  {
    icon: Zap,
    title: 'Speed & Performance',
    description: 'Sub-second load times, 95+ Core Web Vitals scores, and lightning-fast CDN delivery — performance is never an afterthought.',
  },
  {
    icon: Layers,
    title: 'Scalable Systems',
    description: 'From concept to production, I architect modular component systems that grow cleanly with your business — easy to extend, maintain, and hand off.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

const CARD_LAYOUT = [
  { width: 'sm:w-[47%]', side: 'sm:mr-auto', shift: '' },
  { width: 'sm:w-[50%]', side: 'sm:ml-auto', shift: 'sm:-mt-10' },
  { width: 'sm:w-[45%]', side: 'sm:mr-auto sm:ml-[6%]', shift: 'sm:mt-4' },
  { width: 'sm:w-[52%]', side: 'sm:ml-auto', shift: 'sm:-mt-6' },
  { width: 'sm:w-[46%]', side: 'sm:mr-auto sm:ml-[4%]', shift: 'sm:mt-6' },
  { width: 'sm:w-[51%]', side: 'sm:ml-auto', shift: 'sm:-mt-8' },
]

function StepConnector({ flip }: { flip?: boolean }) {
  return (
    <>
      {/* Mobile connector: vertical dotted line */}
      <div className="sm:hidden flex flex-col items-center my-1 h-10">
        <div className="w-px flex-1 border-l-2 border-dashed border-brand/40" />
        <div className="w-2 h-2 rounded-full bg-brand/60 shrink-0" />
        <div className="w-px flex-1 border-l-2 border-dashed border-brand/40" />
      </div>

      {/* Desktop connector: curved SVG arrow */}
      <div className={cn('hidden sm:flex h-14 -my-2', flip ? 'justify-end pr-[14%]' : 'justify-start pl-[14%]')}>
        <svg width="84" height="56" viewBox="0 0 84 56" fill="none" className={flip ? 'scale-x-[-1]' : ''} aria-hidden="true">
          <path
            d="M6 4 C 6 28, 64 20, 76 48"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-brand/45 animate-draw-line"
            fill="none"
          />
          <path
            d="M70 42 L76 48 L68 50"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-brand/45"
            fill="none"
          />
        </svg>
      </div>
    </>
  )
}

export function AboutPage() {
  return (
    <>
      {/* ──────────────────────────────────────────── */}
      {/* HERO — Top section (About me card + photo)  */}
      {/* ──────────────────────────────────────────── */}
      <section className="pt-28 pb-0 sm:pt-36 md:pt-44 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-brand/[0.05] blur-[160px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-brand/[0.03] blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-start">

            {/* LEFT — Intro card (matching reference layout) */}
            <div className="pb-10 lg:pb-16">
              <Reveal>
                {/* "About me" pill header — matching reference */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand/20 border border-brand/30 mb-8 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  <span className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight">About me</span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="space-y-3 text-sm sm:text-base leading-relaxed text-ink/85">
                  <p>
                    <span className="text-ink-muted">Hi!</span>
                  </p>
                  <p>
                    My name is{' '}
                    <span className="font-semibold text-ink">{siteConfig.name}</span>.
                  </p>
                  <p>
                    I am a{' '}
                    <span className="text-brand font-medium underline decoration-brand/40 underline-offset-2">Software Engineer & Product Builder</span>{' '}
                    based in Pakistan, building high-performance & conversion-driven web experiences, reliable backend systems and digital products for businesses worldwide.
                  </p>
                  <p className="text-ink-muted">
                    My work combines clean responsive business websites, interactive dashboards development & scalable application architectures.
                  </p>
                  <p className="text-ink-muted">
                    I enjoy turning ideas and real-world requirements into practical, polished, and maintainable digital products.
                  </p>
                </div>
              </Reveal>

              {/* Contact section — matching reference layout */}
              <Reveal delay={0.14}>
                <div className="mt-10 space-y-4">
                  <h3 className="font-display text-xl font-semibold text-ink flex items-center gap-2">
                    <span className="w-1 h-5 rounded-full bg-brand inline-block" />
                    Contact
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {contactLinks.map((link, i) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        custom={i}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="group flex items-center gap-2.5 text-xs sm:text-[13px] text-ink-muted hover:text-brand transition-colors duration-300"
                      >
                        <link.icon size={15} className="text-brand shrink-0" />
                        <span className="truncate group-hover:underline underline-offset-2">{link.display}</span>
                      </motion.a>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <Button
                      href="/assets/resume/mahedi-resume.pdf"
                      download="mahedi-resume.pdf"
                      variant="outline"
                      size="sm"
                      className="gap-2 text-xs tracking-wide border-border/80 hover:border-brand/50"
                    >
                      <Download size={13} />
                      Download Resume
                    </Button>
                    <Button
                      to="/contact"
                      size="sm"
                      className="gap-2 text-xs tracking-wide"
                    >
                      <ArrowRight size={13} />
                      Start a Project
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Floating Profile Photo with Continuous Animated Moving Border */}
            <Reveal delay={0.1} direction="left" className="hidden lg:flex items-start justify-center">
              <div className="relative">
                {/* Soft ambient atmospheric glow matching the celestial halo */}
                <div
                  className="absolute -inset-4 rounded-[2.8rem] bg-gradient-to-tr from-brand/30 via-amber-500/15 to-transparent blur-3xl opacity-75 pointer-events-none -z-10 animate-pulse-glow"
                  aria-hidden="true"
                />

                {/* Animated Moving Border Wrapper — Offset slightly outside the picture */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group p-[2.5px] rounded-[2.35rem] overflow-hidden shadow-[0_20px_50px_rgba(124,61,18,0.12)] dark:shadow-[0_28px_80px_-20px_rgba(0,0,0,0.7)]"
                >
                  {/* Continuously rotating beam of light through the border */}
                  <div
                    className="absolute -inset-[100%] m-auto aspect-square animate-spin-border [background:conic-gradient(from_0deg,transparent_0deg,#d8ba8e_45deg,#f59e0b_90deg,#fef08a_135deg,transparent_180deg,#d8ba8e_225deg,#f59e0b_270deg,#ffffff_320deg,transparent_360deg)] pointer-events-none"
                    aria-hidden="true"
                  />
                  {/* Subtle blur layer to give the moving beam a soft luminous neon edge */}
                  <div
                    className="absolute -inset-[100%] m-auto aspect-square animate-spin-border blur-[6px] opacity-80 [background:conic-gradient(from_0deg,transparent_0deg,#d8ba8e_45deg,#f59e0b_90deg,#fef08a_135deg,transparent_180deg,#d8ba8e_225deg,#f59e0b_270deg,#ffffff_320deg,transparent_360deg)] pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Inner spacing container — creates the distinct offset gap outside the photo */}
                  <div className="relative bg-canvas p-2.5 sm:p-3 rounded-[2.2rem] backdrop-blur-md">
                    <div className="relative w-[310px] xl:w-[350px] rounded-[1.75rem] overflow-hidden border border-border/70 shadow-2xl">
                      <img
                        src="/assets/mahedi-pics/image2.webp"
                        alt="Mahedi Raza — Software Engineer & Frontend Developer"
                        className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      {/* Subtle bottom gradient scrim — dark mode only so light mode photo stays crisp */}
                      <div className="about-photo-bottom-scrim absolute inset-0 dark:bg-gradient-to-t dark:from-canvas/60 dark:via-transparent dark:to-transparent pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>

            {/* Mobile: photo shown below bio with continuous moving border */}
            <Reveal delay={0.1} className="lg:hidden flex justify-center">
              <div className="relative group p-[2px] rounded-[2.1rem] overflow-hidden shadow-elevated">
                <div
                  className="absolute -inset-[100%] m-auto aspect-square animate-spin-border [background:conic-gradient(from_0deg,transparent_0deg,#d8ba8e_45deg,#f59e0b_90deg,#fef08a_135deg,transparent_180deg,#d8ba8e_225deg,#f59e0b_270deg,#ffffff_320deg,transparent_360deg)] pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative bg-canvas p-2 rounded-[2rem]">
                  <div className="relative w-[220px] sm:w-[260px] rounded-[1.65rem] overflow-hidden border border-border/70">
                    <img
                      src="/assets/mahedi-pics/image2.webp"
                      alt="Mahedi Raza"
                      className="w-full h-auto object-cover object-top"
                    />
                    <div className="about-photo-bottom-scrim absolute inset-0 dark:bg-gradient-to-t dark:from-canvas/60 dark:via-transparent dark:to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* BENTO INFO GRID — Education, Skills, Interests, Languages    */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
        <div className="container-main relative z-10">

          {/* Decorative rounded bento card, matching purple card from reference */}
          <Reveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-surface/80 via-surface/60 to-canvas/90 border border-border/80 backdrop-blur-xl overflow-hidden shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)] p-7 sm:p-10 md:p-12">

              {/* Glowing radial background inside bento */}
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand/[0.07] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-brand/[0.05] blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

                {/* ── Education */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">Education</h3>
                    <span className="px-2.5 py-1 rounded-full bg-surface border border-border/80 font-mono text-[11px] text-ink-muted">2022 – 2026</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-ink/90 font-medium">IQRA University Karachi</p>
                    <p className="text-xs text-ink-muted">Bachelor of Science — Computer Science</p>
                  </div>
                </div>

                {/* ── Soft Skills */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-4">Soft Skills</h3>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-6">
                    {softSkills.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm text-ink-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Technical Skills */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {techSkills.map((tool) => (
                      <motion.div
                        key={tool.name}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ type: 'spring', stiffness: 380, damping: 18 }}
                        className="group flex flex-col items-center gap-1.5 cursor-default"
                        title={tool.name}
                      >
                        <div
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border border-border/80 bg-canvas/80 group-hover:border-brand/50 transition-all duration-300 shadow-sm"
                          style={{ color: tool.mono ? 'var(--color-ink)' : tool.color }}
                        >
                          <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
                            <path d={tool.customSvgPath ?? tool.icon!.path} />
                          </svg>
                        </div>
                        <span className="text-[10px] font-mono text-ink-faint group-hover:text-brand transition-colors text-center max-w-[64px] truncate">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ── Skill Set */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-4">Skill Set</h3>
                  <div className="grid grid-cols-2 gap-x-6">
                    <div className="space-y-2">
                      {skillSets.filter((s) => s.side === 'left').map((s) => (
                        <div key={s.label} className="flex items-center gap-2 text-sm text-ink-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                          {s.label}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {skillSets.filter((s) => s.side === 'right').map((s) => (
                        <div key={s.label} className="flex items-center gap-2 text-sm text-ink-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                          {s.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Interests */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full text-xs font-medium border border-border/80 bg-canvas/80 text-ink-muted hover:text-brand hover:border-brand/40 transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Languages */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-4">Languages</h3>
                  <div className="flex gap-8">
                    {languages.map((l) => (
                      <div key={l.lang} className="space-y-1">
                        <p className="text-sm font-medium text-ink">{l.lang}</p>
                        <p className="text-xs font-mono text-ink-muted">{l.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* PHILOSOPHY GRID — 6 cards                       */}
      {/* ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 border-t border-border/80 bg-surface/30 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-brand/[0.04] blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

        <div className="container-main relative z-10">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-brand font-medium">Guiding Principles</span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-medium text-ink">
              How I approach every line of code & design.
            </h2>
          </Reveal>

          <div className="mt-10 sm:mt-14">
            {philosophies.map((item, i) => (
              <div key={item.title}>
                <Reveal delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div
                    className={cn(
                      'group flex items-stretch gap-3 sm:gap-4 transition-transform duration-500 hover:-translate-y-1',
                      CARD_LAYOUT[i].width,
                      CARD_LAYOUT[i].side,
                      CARD_LAYOUT[i].shift
                    )}
                  >
                    {/* Left rail: icon badge + vertical index label */}
                    <div className="relative w-12 sm:w-14 shrink-0 rounded-2xl bg-brand border border-brand-dark/30 shadow-[0_10px_28px_-12px_rgba(0,0,0,0.55)] flex flex-col items-center py-4 gap-3 transition-all duration-500 group-hover:shadow-[0_10px_32px_-8px_var(--color-brand-glow)]">
                      <span
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-canvas/20 border border-canvas/25 flex items-center justify-center text-canvas shrink-0 animate-pill-in"
                        style={{ animationDelay: `${i * 150 + 200}ms` }}
                      >
                        <item.icon size={15} strokeWidth={1.8} />
                      </span>
                      <span
                        className="flex-1 text-[10px] tracking-[0.25em] font-mono text-canvas/70 uppercase"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        Rule 0{i + 1}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="flex-1 rounded-2xl bg-canvas/80 group-hover:bg-canvas border border-border/80 group-hover:border-brand/40 backdrop-blur-md transition-all duration-500 group-hover:shadow-elevated p-5 sm:p-7">
                      <h3 className="flex items-baseline gap-2.5 font-display text-lg sm:text-xl font-medium text-ink group-hover:text-brand transition-colors duration-300">
                        <span className="font-mono text-brand/70 text-sm">0{i + 1}</span>
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-muted group-hover:text-ink/90 transition-colors duration-300">
                        {item.description}
                      </p>
                      <div className="mt-5 pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-mono text-brand/80">
                        <CheckCircle2 size={13} />
                        <span>Non-negotiable standard</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {i < philosophies.length - 1 && <StepConnector flip={i % 2 === 1} />}
              </div>
            ))}
          </div>

          {/* Bottom CTA row */}
          <Reveal delay={0.15} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/work" size="lg" withArrow className="w-full sm:w-auto justify-center">
              Explore Selected Work
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
