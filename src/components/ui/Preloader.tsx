import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/data/content'

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = ''
    }, 2200) // sleek 2.2s intro

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-canvas text-brand"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="overflow-hidden flex flex-col items-center">
             {/* Typography Reveal */}
             <motion.h1 
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="font-display text-4xl md:text-6xl tracking-widest text-ink uppercase mb-4"
             >
               {siteConfig.name}
             </motion.h1>
             
             {/* Expanding Line */}
             <motion.div 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
               className="h-[1px] w-24 bg-brand origin-center"
             />
             
             {/* Subtitle Fade In */}
             <motion.p
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
               className="mt-6 text-ink-muted tracking-[0.3em] uppercase text-xs font-mono"
             >
               Portfolio
             </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
