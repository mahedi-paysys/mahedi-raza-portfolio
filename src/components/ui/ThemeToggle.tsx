import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to Dark theme' : 'Switch to Light theme'}
      title={isLight ? 'Switch to Dark theme' : 'Switch to Light theme'}
      className={cn(
        'group relative inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer select-none',
        'border-border hover:border-brand/50 bg-surface/60 hover:bg-surface/90 backdrop-blur-md',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50',
        className
      )}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isLight ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand flex items-center justify-center"
            >
              <Moon size={15} strokeWidth={2} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand flex items-center justify-center"
            >
              <Sun size={15} strokeWidth={2} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="font-mono text-xs uppercase tracking-wider text-ink-muted group-hover:text-brand transition-colors">
          {isLight ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}

      {/* Subtle indicator dot */}
      <span
        className={cn(
          'w-1.5 h-1.5 rounded-full transition-all duration-300',
          isLight ? 'bg-brand shadow-[0_0_8px_rgba(124,61,18,0.65)]' : 'bg-brand shadow-[0_0_8px_rgba(216,186,142,0.8)]'
        )}
      />
    </button>
  )
}
