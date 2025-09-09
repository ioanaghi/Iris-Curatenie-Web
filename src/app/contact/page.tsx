export const metadata = {
  title: 'Contact IRIS Curățenie • Cere ofertă • +40 722 312 130',
  description: 'Contactați IRIS Curățenie pentru ofertă personalizată. Telefon: +40 722 312 130, Email: office@iriscuratenie.ro, Adresă: Bacău.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="section-padding bg-gradient-to-br from-background to-gray-50">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contactați-ne pentru o ofertă personalizată în maximum 2 ore
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">În dezvoltare</h2>
            <p className="text-gray-600">Pagina va fi completată în curând cu formular de contact și informații detaliate.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
