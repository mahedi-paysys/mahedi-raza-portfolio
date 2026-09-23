import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { cn } from '@/lib/utils'

gsap.registerPlugin(Observer)


const slides = [
  {
    index: '01',
    title: 'HELLO',
    subtitle: 'SOFTWARE ENGINEER | PRODUCT BUILDER',
    bio: 'I build modern digital experiences and reliable software systems that turn ideas into products people can trust.',
    image: '/assets/mahedi-pics/image1.webp',
    imageClass: 'object-cover object-top'
  },
  {
    index: '02',
    title: 'CRAFT',
    subtitle: 'DESIGN, DEVELOPMENT & DETAIL',
    bio: 'From polished business websites to scalable backend systems, I combine thoughtful design with solid engineering.',
    image: '/assets/mahedi-pics/image2.webp',
    imageClass: 'object-cover object-top'
  },
  {
    index: '03',
    title: 'APPROACH',
    subtitle: 'BUILT WITH PURPOSE.',
    bio: 'Every project starts with understanding the goal, then turning it into a clean, purposeful, and high-performing digital experience.',
    image: '/assets/mahedi-pics/image3.webp',
    imageClass: 'object-cover object-top'
  },
  {
    index: '04',
    title: 'BUILD',
    subtitle: 'HAVE A PROJECT IN MIND?',
    bio: 'Whether you need a website or mobile app that wins customers or a system built to scale, let’s turn your idea into something remarkable.',
    image: '/assets/mahedi-pics/image4.webp',
    imageClass: 'object-cover object-top'
  }
]

export function ScrollJackedHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightImagesRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideIndexRef = useRef(0)
  const isAnimating = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  // Touch tracking for mobile swipe without hijacking vertical scroll
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const imageElements = gsap.utils.toArray<HTMLElement>('.hero-image')
    const textContainers = gsap.utils.toArray<HTMLElement>('.hero-text-content')

    // Initial positioning
    gsap.set(imageElements, { yPercent: 100, scale: 1.1, autoAlpha: 0 })
    gsap.set(imageElements[slideIndexRef.current], { yPercent: 0, scale: 1, autoAlpha: 1 })

    gsap.set(textContainers, { autoAlpha: 0 })
    gsap.set(textContainers[slideIndexRef.current], { autoAlpha: 1 })

    const animateSlide = (direction: number, nextIndex: number, currentIndex: number) => {
      if (isAnimating.current || nextIndex === currentIndex) return
      isAnimating.current = true

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false
          setCurrentSlide(nextIndex)
          slideIndexRef.current = nextIndex
        },
      })

      const outImage = imageElements[currentIndex]
      const outText = textContainers[currentIndex]
      const outTitle = outText.querySelectorAll('.stagger-text')

      const inImage = imageElements[nextIndex]
      const inText = textContainers[nextIndex]
      const inTitle = inText.querySelectorAll('.stagger-text')

      tl.to(outTitle, {
        y: -25 * direction,
        autoAlpha: 0,
        duration: 0.45,
        stagger: 0.03,
        ease: 'power3.inOut',
      }, 0)

      tl.to(outText, {
        autoAlpha: 0,
        duration: 0.45,
      }, 0)

      tl.to(outImage, {
        yPercent: -100 * direction,
        scale: 1.05,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      }, 0)

      gsap.set(inText, { autoAlpha: 1 })
      gsap.set(inTitle, { y: 25 * direction, autoAlpha: 0 })
      gsap.set(inImage, { yPercent: 100 * direction, scale: 1.1, autoAlpha: 0 })

      tl.to(inImage, {
        yPercent: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
      }, 0.15)

      tl.to(inTitle, {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out',
      }, 0.25)
    }

    // Expose slide switcher for dots/mobile buttons
    const triggerSlideChange = (nextIndex: number) => {
      if (isAnimating.current || nextIndex === slideIndexRef.current) return
      const dir = nextIndex > slideIndexRef.current ? 1 : -1
      animateSlide(dir, nextIndex, slideIndexRef.current)
    }

      // Assign to ref so swipe handler or buttons can call it
      ; (containerRef.current as any).__triggerSlide = triggerSlideChange

    // Only enable scroll hijacking on desktop viewports (>= 768px)
    if (window.innerWidth >= 768) {
      const intentObserver = Observer.create({
        target: window,
        type: 'wheel,touch,pointer',
        wheelSpeed: -1,
        onDown: () => {
          if (!isAnimating.current && slideIndexRef.current > 0) {
            animateSlide(-1, slideIndexRef.current - 1, slideIndexRef.current)
          }
        },
        onUp: () => {
          if (!isAnimating.current && slideIndexRef.current < slides.length - 1) {
            animateSlide(1, slideIndexRef.current + 1, slideIndexRef.current)
          } else if (!isAnimating.current && slideIndexRef.current === slides.length - 1) {
            intentObserver.disable()
            document.body.style.overflow = 'auto'
          }
        },
        tolerance: 10,
        preventDefault: true,
      })

      document.body.style.overflow = 'hidden'

      const handleScroll = () => {
        if (window.scrollY === 0 && !intentObserver.isEnabled) {
          document.body.style.overflow = 'hidden'
          intentObserver.enable()
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        intentObserver.kill()
        document.body.style.overflow = 'auto'
        window.removeEventListener('scroll', handleScroll)
      }
    } else {
      // On mobile devices, never lock body scroll
      document.body.style.overflow = 'auto'
    }
  }, [isMobile])

  const handleSlideSelect = (index: number) => {
    if (containerRef.current && (containerRef.current as any).__triggerSlide) {
      ; (containerRef.current as any).__triggerSlide(index)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return
    const diffX = touchStartRef.current.x - e.changedTouches[0].clientX
    const diffY = touchStartRef.current.y - e.changedTouches[0].clientY
    touchStartRef.current = null

    // If horizontal swipe is stronger than vertical, change slide
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0 && currentSlide < slides.length - 1) {
        handleSlideSelect(currentSlide + 1)
      } else if (diffX < 0 && currentSlide > 0) {
        handleSlideSelect(currentSlide - 1)
      }
    }
  }

  return (
    <section
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[100svh] md:h-screen overflow-hidden bg-canvas text-ink flex items-center justify-center pt-24 pb-16 md:py-0"
    >
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/mahedi-pics/im5.webp"
          alt="Hero Background"
          className="w-full h-full object-cover object-center grayscale opacity-45 dark:opacity-35 dark:mix-blend-luminosity pointer-events-none"
        />
        {/* Base wash: 68% in light mode, 75% in dark mode (5-10% difference as requested) */}
        <div className="absolute inset-0 bg-canvas/68 dark:bg-canvas/75 pointer-events-none" />
        {/* Horizontal readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/85 via-canvas/72 to-transparent dark:from-canvas dark:via-canvas/80 dark:to-transparent pointer-events-none" />
        {/* Bottom vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/85 via-transparent to-transparent dark:from-canvas dark:via-transparent dark:to-transparent pointer-events-none" />
      </div>

      {/* Aura Glow Effects */}
      <div className="absolute top-1/4 left-1/4 aura-glow z-0" />
      <div className="absolute bottom-1/4 right-1/4 aura-glow z-0" style={{ animationDelay: '2s' }} />

      <div className="container-main relative z-10 w-full flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">

        {/* Profile Image Column (Shown first on mobile for strong visual impact, right side on desktop) */}
        <div className="order-1 md:order-2 relative flex items-center justify-center h-[260px] sm:h-[320px] md:h-[75vh] w-full">
          <div className="relative w-full h-full flex items-center justify-center animate-float">

            {/* Decorative Outer Ring with Golden Orbit Points */}
            <div className="absolute w-[230px] h-[230px] sm:w-[280px] sm:h-[280px] md:w-[92%] md:max-w-[460px] md:h-auto md:aspect-square rounded-full border border-brand/30 z-0 shadow-soft animate-spin-slow pointer-events-none">
              <div className="absolute top-[12%] right-[20%] w-1.5 h-1.5 bg-brand rounded-full animate-pulse-glow" />
              <div className="absolute top-[6%] right-[42%] w-1 h-1 bg-brand rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-[15%] left-[25%] w-1.5 h-1.5 bg-brand rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>

            {/* Inner Image Avatar Container */}
            <div
              ref={rightImagesRef}
              className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[72%] md:max-w-[360px] md:h-auto md:aspect-square rounded-full overflow-hidden border-[3px] md:border-[4px] border-brand/60 shadow-elevated z-10 bg-surface group"
            >
              {slides.map((slide, i) => (
                <div
                  key={`img-${i}`}
                  className="hero-image absolute inset-0 w-full h-full bg-transparent"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={cn(
                      "w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out-expo",
                      slide.imageClass || "object-cover object-top"
                    )}
                  />
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(30,15,6,0.35)]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Content Column */}
        <div className="order-2 md:order-1 relative w-full flex flex-col justify-center">
          <div ref={leftContentRef} className="relative w-full grid grid-cols-1 items-center min-h-[260px] sm:min-h-[280px] md:min-h-[380px]">
            {slides.map((slide, i) => (
              <div
                key={`text-${i}`}
                className="hero-text-content col-start-1 row-start-1 w-full max-w-xl text-center md:text-left self-center"
              >
                {/* Background Watermark Number */}
                <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 -top-10 md:-top-24 opacity-[0.07] pointer-events-none select-none z-0 overflow-hidden">
                  <span className="font-display text-8xl sm:text-9xl md:text-[20rem] font-bold text-brand leading-none tracking-tighter">
                    {slide.index}
                  </span>
                </div>

                <div className="relative z-10 pt-2 md:pt-6">
                  <div className="overflow-hidden mb-1.5">
                    <h1 className="stagger-text block font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-ink uppercase leading-none drop-shadow-sm">
                      {slide.title}
                    </h1>
                  </div>
                  <div className="overflow-hidden mb-4 md:mb-6">
                    <h2 className="stagger-text block text-xs sm:text-sm md:text-lg lg:text-xl font-semibold tracking-wider text-gradient uppercase">
                      {slide.subtitle}
                    </h2>
                  </div>
                  <div className="overflow-hidden mt-3 md:mt-6 pt-3 md:pt-6 border-t border-border-strong w-full md:w-4/5 relative mx-auto md:mx-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-24 md:w-1/3 h-[1px] bg-brand" />
                    <p className="stagger-text block text-sm sm:text-base md:text-lg leading-relaxed text-ink-muted font-light px-2 md:px-0">
                      {slide.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slide Navigation Bar (Pill selector) */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-6 z-20">
            {slides.map((_, i) => (
              <button
                key={`mobile-dot-${i}`}
                onClick={() => handleSlideSelect(i)}
                className={cn(
                  "py-1.5 px-3 rounded-full text-[11px] font-mono tracking-wider transition-all duration-300 border",
                  currentSlide === i
                    ? "bg-brand text-canvas font-semibold border-brand shadow-soft"
                    : "bg-surface/80 border-border/80 text-ink-muted hover:text-ink"
                )}
                aria-label={`Slide ${i + 1}`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Desktop Progress Indicator (Right Edge) */}
      <div className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={`nav-${i}`}
            className="group py-2 px-4 focus:outline-none flex items-center gap-3 transition-opacity duration-300 cursor-pointer"
            onClick={() => handleSlideSelect(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            <span className={cn(
              "font-mono text-[10px] tracking-widest transition-colors duration-300",
              currentSlide === i ? "text-brand font-semibold" : "text-ink-faint group-hover:text-ink-muted"
            )}>
              0{i + 1}
            </span>
            <span
              className={cn(
                "w-[2px] rounded-full transition-all duration-500",
                currentSlide === i ? "h-12 bg-brand" : "h-4 bg-ink-faint group-hover:bg-ink-muted"
              )}
            />
          </button>
        ))}
      </div>

      {/* Floating warm-tinted dot pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.12] mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-brand-light) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  )
}
