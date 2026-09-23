import { useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/content'
import { Copy, Check, Sparkles, ArrowRight, Mail } from 'lucide-react'

export function CTABanner() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="py-16 sm:py-24 md:py-32 border-t border-border/80 bg-canvas relative overflow-hidden">
      {/* Dynamic ambient radial aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand/10 blur-[160px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container-main relative z-10">
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-to-b from-surface/90 via-surface/60 to-surface/40 border border-brand/25 p-6 sm:p-10 md:p-16 backdrop-blur-xl text-center shadow-elevated overflow-hidden">
            
            {/* Top subtle shine line */}
            <div 
              className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent" 
              aria-hidden="true" 
            />

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-brand/10 border border-brand/30 text-brand text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for New Projects</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-medium text-ink text-balance max-w-2xl mx-auto tracking-tight leading-tight">
              Ready to elevate your online presence?
            </h2>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-ink-muted max-w-xl mx-auto leading-relaxed">
              Let's craft a fast, modern, and bespoke digital experience that turns casual visitors into loyal clients.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button 
                to="/contact" 
                size="lg" 
                className="w-full sm:w-auto bg-brand text-canvas hover:brightness-90 transition-all duration-300 shadow-card font-medium text-xs sm:text-sm"
              >
                <span>Request a Free Website Audit</span>
                <ArrowRight size={16} />
              </Button>

              <button
                type="button"
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-surface hover:bg-canvas border border-border/80 hover:border-brand/40 text-ink text-xs sm:text-sm font-mono transition-all duration-300 cursor-pointer group"
              >
                {copied ? (
                  <>
                    <Check size={15} className="text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail size={15} className="text-brand group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-ink-muted group-hover:text-ink truncate max-w-[200px] sm:max-w-none">{siteConfig.email}</span>
                    <Copy size={13} className="text-ink-faint group-hover:text-brand transition-colors duration-300 shrink-0" />
                  </>
                )}
              </button>
            </div>

            {/* Trust Footer */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border/40 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-mono text-ink-faint">
              <div className="flex items-center gap-1.5">
                <Sparkles size={12} className="text-brand" />
                <span>Zero Obligation</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles size={12} className="text-brand" />
                <span>24-Hour Response</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles size={12} className="text-brand" />
                <span>Direct Collaboration</span>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

