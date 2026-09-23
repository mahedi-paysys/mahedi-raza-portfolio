import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export function AboutTeaser() {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-t border-border">
      <div className="container-main grid lg:grid-cols-[0.4fr_0.6fr] gap-6 sm:gap-10 items-start">
        <Reveal>
          <p className="text-xs sm:text-sm font-medium text-brand font-mono tracking-wider uppercase">About</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium leading-snug text-ink text-balance">
            I'm a software engineer and web developer based in Pakistan. Alongside my
            software engineering work, I design and develop modern websites for
            businesses and independent projects.
          </p>
          <div className="mt-6">
            <Button to="/about" variant="ghost" withArrow>
              More about me
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
