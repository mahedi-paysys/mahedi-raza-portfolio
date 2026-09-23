import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { navigation, siteConfig } from '@/data/content'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled || open
          ? 'bg-canvas/90 backdrop-blur-md border-border shadow-soft'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="container-main flex h-[76px] items-center justify-between">
        {/* Left: Minimalist Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="font-display text-xl tracking-wide uppercase text-ink font-light group">
            <span className="group-hover:text-brand transition-colors duration-300">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="group relative text-sm uppercase tracking-wider text-ink-muted hover:text-brand transition-colors duration-300"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: Theme Toggle, Desktop Action (CV) & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          <div className="hidden md:block">
            <Button 
              href="/assets/resume/mahedi-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="mahedi-resume.pdf"
              variant="outline" 
              size="sm" 
              className="tracking-widest uppercase text-xs border-brand/30 hover:border-brand"
            >
              Download CV
            </Button>
          </div>
          
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden text-ink p-2 -mr-2 transition-colors hover:text-brand cursor-pointer"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-y-auto max-h-[calc(100dvh-76px)] border-t border-border bg-canvas/95 backdrop-blur-xl shadow-elevated"
          >
            <div className="container-main flex flex-col gap-1 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3.5 px-2 text-base sm:text-lg tracking-widest uppercase font-light text-ink hover:text-brand active:text-brand transition-colors rounded-lg active:bg-surface/50"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-5 mt-3 border-t border-border/80 flex flex-col gap-3.5">
                <div className="flex items-center justify-between py-2 px-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                    Color Theme
                  </span>
                  <ThemeToggle showLabel />
                </div>

                <Button 
                  href="/assets/resume/mahedi-resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  download="mahedi-resume.pdf"
                  variant="outline" 
                  className="w-full tracking-widest uppercase text-xs sm:text-sm border-brand/30 hover:border-brand justify-center py-3"
                >
                  Download CV
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
