export const metadata = {
  title: 'Portofoliu & Testimoniale • IRIS Curățenie',
  description: 'Descoperiți portofoliul nostru de proiecte și citiți testimoniale reale de la clienții mulțumiți. Servicii de curățenie profesionale în Bacău și orașele mari.',
}

export default function PortofoliuPage() {
  return (
    <div className="min-h-screen">
      <div className="section-padding bg-gradient-to-br from-background to-gray-50">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Portofoliu & Testimoniale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperiți proiectele noastre și citiți experiențele clienților noștri
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">În dezvoltare</h2>
            <p className="text-gray-600">Pagina va fi completată în curând cu portofoliul nostru de proiecte și testimoniale detaliate.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
