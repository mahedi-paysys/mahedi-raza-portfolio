import { ScrollJackedHero } from '@/components/home/ScrollJackedHero'
import { TrustIntro } from '@/components/home/TrustIntro'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { Services } from '@/components/home/Services'
import { TechStack } from '@/components/home/TechStack'
import { HowIWork } from '@/components/home/HowIWork'
import { Testimonials } from '@/components/home/Testimonials'
import { FAQ } from '@/components/home/FAQ'
import { HomeContactSection } from '@/components/home/HomeContactSection'

export function HomePage() {
  return (
    <>
      <ScrollJackedHero />
      <TrustIntro />
      <FeaturedWork />
      <Services />
      <TechStack />
      <HowIWork />
      {/* <Testimonials /> */}
      <FAQ />
      <HomeContactSection />
    </>
  )
}

