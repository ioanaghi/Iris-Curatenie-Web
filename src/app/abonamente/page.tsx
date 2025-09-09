import PricingPlans from '@/components/PricingPlans'
import PricingFeatures from '@/components/PricingFeatures'
import PricingFAQ from '@/components/PricingFAQ'

export const metadata = {
  title: 'Abonamente & Prețuri • IRIS Curățenie',
  description: 'Pachete transparente Basic, Standard și Premium cu frecvență și SLA personalizate. Prețuri competitive pentru servicii de curățenie profesionale.',
}

export default function AbonamentePage() {
  return (
    <div className="min-h-screen">
      <PricingPlans />
      <PricingFeatures />
      <PricingFAQ />
    </div>
  )
}
