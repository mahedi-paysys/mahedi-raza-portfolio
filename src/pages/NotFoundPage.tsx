import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, Compass } from 'lucide-react'

export function NotFoundPage() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center pt-28 pb-20 relative overflow-hidden">
      {/* Dynamic ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/10 blur-[160px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container-main text-center relative z-10 max-w-xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-mono tracking-widest uppercase mb-4">
            <Compass size={13} className="text-brand animate-spin-slow" />
            <span>404 · Page Not Found</span>
          </div>

          <div className="font-display text-7xl md:text-8xl font-bold text-ink/20 select-none tracking-tight">
            404
          </div>

          <h1 className="mt-2 font-display text-3xl md:text-4xl font-medium text-ink">
            Lost in digital space?
          </h1>

          <p className="mt-4 text-base text-ink-muted leading-relaxed">
            The page you're looking for has moved or doesn't exist. Let's guide you back to the right destination.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button to="/" size="lg" className="gap-2">
              <ArrowLeft size={16} /> Return to Homepage
            </Button>
            <Button to="/work" variant="outline" size="lg">
              Explore Portfolio
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

