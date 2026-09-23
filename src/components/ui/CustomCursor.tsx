import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Tighter spring for ultra-fast, zero-lag response
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 }
  const smoothX = useSpring(cursorX, springConfig)
  const smoothY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Outer Ring - Follows instantly with a snappy spring */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-10 h-10 rounded-full border border-brand/60 pointer-events-none z-[99999] hidden md:flex items-center justify-center transition-colors duration-300",
          isHovering ? "bg-brand/10 border-transparent" : "bg-transparent"
        )}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
      />
      
      {/* Inner Dot - Zero latency exact position */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-2 h-2 bg-brand rounded-full pointer-events-none z-[99999] hidden md:block"
        )}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
      />
    </>
  )
}
