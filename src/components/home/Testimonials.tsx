import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const testimonials = [
  {
    quote: 'Exceeded All Expectations!',
    body: 'From start to finish, Mahedi delivered exceptional service. The animations brought our vision to life and surpassed anything we imagined. A true professional from day one.',
    author: 'Hamza T.',
    role: 'Managing Director',
    company: 'Nexus Real Estate',
    tag: 'Full Redesign',
    image: '/assets/reviews/client1.webp',
    logo: 'Nexus Real Estate',
  },
  {
    quote: 'Reliable and Innovative Partner',
    body: 'They understood our needs perfectly and executed everything seamlessly. Clean code, stunning UI, and fast delivery — I couldn\'t be happier with the results.',
    author: 'Sarah J.',
    role: 'Founder & Creative Lead',
    company: 'Aura Studio',
    tag: 'Brand & Web',
    image: '/assets/reviews/client1.webp',
    logo: 'Aura Studio',
  },
  {
    quote: 'Transformed Our Online Presence',
    body: 'Zero fluff, crystal-clear communication, and clean hand-coded delivery. Our mobile experience is now effortless and loads instantly. The results speak for themselves.',
    author: 'Zayd M.',
    role: 'Product Strategy Lead',
    company: 'Veloce Logistics',
    tag: 'Web App & UI',
    image: '/assets/reviews/client1.webp',
    logo: 'Veloce Logistics',
  },
  {
    quote: 'Premium Quality, Fast Delivery',
    body: 'Mahedi took our outdated site and rebuilt it from scratch with unbelievable precision. Inquiries went up within the very first month of launch. Highly recommended.',
    author: 'Lena K.',
    role: 'CEO',
    company: 'SparkMedia',
    tag: 'Full Redesign',
    image: '/assets/reviews/client1.webp',
    logo: 'SparkMedia',
  },
  {
    quote: 'Working With An Engineer Who Designs',
    body: 'Working directly with an engineer who truly understands design aesthetics was a game changer. The micro-animations and typography feel extremely high-end and polished.',
    author: 'Tim S.',
    role: 'Marketing Manager',
    company: 'Vivid World',
    tag: 'Design Systems',
    image: '/assets/reviews/client1.webp',
    logo: 'Vivid World',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const prev = () => {
    if (current > 0) goTo(current - 1)
  }

  const next = () => {
    if (current < testimonials.length - 1) goTo(current + 1)
  }

  const activeTestimonial = testimonials[current]
  const prevTestimonial = current > 0 ? testimonials[current - 1] : null
  const nextTestimonial = current < testimonials.length - 1 ? testimonials[current + 1] : null

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.97,
    }),
  }

  return (
    <section className="py-16 sm:py-24 md:py-32 border-t border-border/80 bg-transparent relative overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-brand/[0.03] blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/3 w-[400px] h-[350px] bg-brand/[0.025] blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        {/* Heading matching img1 */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-ink leading-[1.15] tracking-tight text-balance">
              Hear from Brands
              <br />
              <span className="text-ink-faint font-light">That Trust Us</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-ink-muted leading-relaxed">
              Our clients' success stories showcase the value we bring to every project.
              <br className="hidden sm:block" />
              Here's what they have to say about working with us.
            </p>
          </div>
        </Reveal>

        {/* Main Carousel Area matching img1 */}
        <div className="relative flex items-stretch gap-4 justify-center min-h-[360px] sm:min-h-[400px]">

          {/* Previous Card Ghost — visible but blurred (matching img1 left ghost) */}
          <div
            className="hidden lg:flex w-[180px] xl:w-[220px] shrink-0 items-center cursor-pointer"
            onClick={prev}
            role="button"
            aria-label="Previous testimonial"
          >
            {prevTestimonial && (
              <motion.div
                key={`prev-${current}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[300px] xl:h-[340px] rounded-2xl overflow-hidden relative"
              >
                <img
                  src={prevTestimonial.image}
                  alt={prevTestimonial.author}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                {/* Dark overlay + text peek */}
                <div className="absolute inset-0 bg-gradient-to-r from-canvas/10 via-transparent to-canvas/60 flex flex-col justify-end p-4">
                  <p className="text-xs font-mono text-white/60 uppercase tracking-wider">
                    ◀ {prevTestimonial.logo}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Active Card — full design matching img1 */}
          <div className="flex-1 max-w-[680px] relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full h-full rounded-3xl bg-[#111317] dark:bg-[#111317] light:bg-surface border border-white/10 dark:border-white/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] text-white overflow-hidden flex flex-col sm:flex-row"
              >
                {/* Left: Content Panel */}
                <div className="flex-1 p-7 sm:p-9 flex flex-col justify-between">
                  {/* Company Logo row */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                      <Star size={14} className="text-brand fill-brand" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-white/90 tracking-wide">
                      {activeTestimonial.logo}
                    </span>
                  </div>

                  <div className="flex-1">
                    {/* Quote headline */}
                    <div className="relative">
                      <Quote
                        size={32}
                        className="text-white/5 absolute -top-1 -left-2"
                        fill="currentColor"
                      />
                      <p className="relative font-display text-lg sm:text-xl font-semibold text-white leading-snug mb-4">
                        {activeTestimonial.quote}!
                      </p>
                    </div>

                    {/* Body */}
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      "{activeTestimonial.body}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-7 pt-5 border-t border-white/[0.08]">
                    <p className="font-medium text-white text-sm">{activeTestimonial.author}</p>
                    <p className="text-xs text-white/50 mt-0.5">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>

                {/* Right: Client Photo Panel matching img1 */}
                <div className="w-full sm:w-[220px] md:w-[240px] h-[200px] sm:h-auto shrink-0 relative overflow-hidden">
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.author}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.parentElement!.style.background = 'linear-gradient(135deg, #1a1614 0%, #252220 100%)'
                      target.style.display = 'none'
                    }}
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#111317]/20 pointer-events-none" />
                  {/* Tag chip */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white/80 border border-white/10">
                    {activeTestimonial.tag}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Card Ghost — visible but dimmed (matching img1 right ghost) */}
          <div
            className="hidden lg:flex w-[180px] xl:w-[220px] shrink-0 items-center cursor-pointer"
            onClick={next}
            role="button"
            aria-label="Next testimonial"
          >
            {nextTestimonial && (
              <motion.div
                key={`next-${current}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[300px] xl:h-[340px] rounded-2xl overflow-hidden relative"
              >
                <img
                  src={nextTestimonial.image}
                  alt={nextTestimonial.author}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-canvas/10 via-transparent to-canvas/60 flex flex-col justify-end p-4">
                  <p className="text-xs font-mono text-white/60 uppercase tracking-wider">
                    {nextTestimonial.logo} ▶
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom Nav: Prev / Next arrows + dot indicators matching img1 */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous testimonial"
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${current === 0
              ? 'opacity-30 cursor-not-allowed border-border/50 text-ink-faint'
              : 'border-border-strong hover:border-brand/50 text-ink hover:text-brand hover:scale-105 active:scale-95 shadow-soft'
              }`}
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${i === current
                  ? 'w-6 h-2 bg-ink'
                  : 'w-2 h-2 bg-border-strong hover:bg-ink-muted'
                  }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            disabled={current === testimonials.length - 1}
            aria-label="Next testimonial"
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${current === testimonials.length - 1
              ? 'opacity-30 cursor-not-allowed bg-surface border border-border text-ink-faint'
              : 'bg-ink text-canvas hover:bg-brand hover:scale-105 active:scale-95 shadow-card'
              }`}
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}
