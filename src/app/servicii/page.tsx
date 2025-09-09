import ServicesOverview from '@/components/ServicesOverview'
import ServiceCategories from '@/components/ServiceCategories'
import ServiceProcess from '@/components/ServiceProcess'

export const metadata = {
  title: 'Servicii de curățenie profesionale • IRIS Curățenie',
  description: 'Servicii complete de curățenie pentru birouri, rezidențial, post-constructor, geamuri la înălțime și întreținere pardoseli. Echipă profesională certificată ISO.',
}

export default function ServiciiPage() {
  return (
    <div className="min-h-screen">
      <ServicesOverview />
      <ServiceCategories />
      <ServiceProcess />
    </div>
  )
}
