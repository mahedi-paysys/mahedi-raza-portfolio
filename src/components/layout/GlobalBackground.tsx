import { useEffect, useState } from 'react'

export function GlobalBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Subtle Texture / Workspace Silhouette (matching Hero's im5.webp) */}
      <div className="absolute inset-0">
        <img
          src="/assets/mahedi-pics/im5.webp"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-center grayscale mix-blend-luminosity opacity-[0.14] transition-opacity duration-500"
        />
        {/* Soft atmospheric gradient wash & vignette to keep overlay light & non-intrusive */}
        <div className="absolute inset-0 bg-canvas/82 transition-colors duration-400" />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/95 via-canvas/65 to-canvas/95 transition-colors duration-400" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/90 via-transparent to-canvas/90 transition-colors duration-400" />
      </div>

      {/* 2. Ambient Gold Aura Glows (Same warm glow as Hero) */}
      <div
        className="absolute -top-[10%] left-[10%] w-[650px] h-[650px] rounded-full aura-glow opacity-60 animate-pulse-glow"
        style={{ animationDuration: '6s' }}
      />
      <div
        className="absolute top-[30%] -right-[10%] w-[700px] h-[700px] rounded-full aura-glow opacity-50"
        style={{ animationDelay: '2s', animationDuration: '7s' }}
      />
      <div
        className="absolute top-[60%] -left-[10%] w-[650px] h-[650px] rounded-full aura-glow opacity-55"
        style={{ animationDelay: '4s', animationDuration: '8s' }}
      />
      <div
        className="absolute bottom-[5%] right-[15%] w-[600px] h-[600px] rounded-full aura-glow opacity-50"
        style={{ animationDelay: '1.5s', animationDuration: '6.5s' }}
      />

      {/* 3. Floating warm-tinted dot pattern (Matching Hero section) */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, var(--color-brand-light) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}
