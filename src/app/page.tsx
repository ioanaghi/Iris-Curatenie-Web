import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import BenefitsSection from '@/components/BenefitsSection'
import SocialProof from '@/components/SocialProof'
import CoverageMap from '@/components/CoverageMap'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesGrid />
      <BenefitsSection />
      <SocialProof />
      <CoverageMap />
    </div>
  )
}
