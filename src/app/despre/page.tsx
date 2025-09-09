export const metadata = {
  title: 'Despre IRIS Curățenie • Certificări ISO • Echipamente Profesionale',
  description: 'Aflați mai multe despre IRIS Curățenie: certificări ISO, echipamente profesionale, proces de control calitate și echipa noastră verificată.',
}

export default function DesprePage() {
  return (
    <div className="min-h-screen">
      <div className="section-padding bg-gradient-to-br from-background to-gray-50">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Despre IRIS Curățenie
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionalism, calitate și încredere în serviciile de curățenie
          </p>
        </div>
      </div>
      
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">În dezvoltare</h2>
            <p className="text-gray-600">Pagina va fi completată în curând cu informații detaliate despre companie, certificări și echipamente.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
