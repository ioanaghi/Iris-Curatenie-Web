export const metadata = {
  title: 'Despre IRIS Curățenie • Certificări ISO • Echipamente Profesionale',
  description: 'Aflați mai multe despre IRIS Curățenie: certificări ISO, echipamente profesionale, proces de control calitate și echipa noastră verificată.',
}

export default function DesprePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background to-gray-50 px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        <div className="container-max text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            Din 2005, curățenie premium pentru companii și rezidențial
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Despre IRIS Curățenie
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Construim parteneriate pe termen lung prin standarde ISO, echipe verificate și echipamente profesionale care lasă spațiile impecabile.
          </p>
        </div>
      </section>
      
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Cine suntem</h2>
            <p className="text-gray-600 leading-relaxed">
              IRIS Curățenie este o echipă de profesioniști specializați în curățenie pentru birouri, spații industriale și rezidențiale.
              Ne bazăm pe proceduri clare, inspecții periodice și training continuu, astfel încât fiecare intervenție să fie la același nivel de calitate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card">
                <p className="text-sm text-gray-500 mb-1">Experiență</p>
                <p className="text-3xl font-bold text-primary">15+ ani</p>
                <p className="text-gray-600 text-sm mt-1">Curățenie profesională în orașe mari</p>
              </div>
              <div className="card">
                <p className="text-sm text-gray-500 mb-1">Clienți activi</p>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-gray-600 text-sm mt-1">Companii și proprietari rezidențiali</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-emerald-50 to-white">
            <h3 className="text-xl font-semibold text-primary mb-4">Ce ne diferențiază</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 mt-2 rounded-full bg-emerald-500" />
                <div>
                  <p className="font-medium text-primary">Certificări ISO</p>
                  <p className="text-sm text-gray-600">Procese aliniate standardelor internaționale de calitate și siguranță.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 mt-2 rounded-full bg-emerald-500" />
                <div>
                  <p className="font-medium text-primary">Echipamente profesionale</p>
                  <p className="text-sm text-gray-600">Utilăm fiecare echipă cu soluții și utilaje dedicate fiecărui tip de suprafață.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 mt-2 rounded-full bg-emerald-500" />
                <div>
                  <p className="font-medium text-primary">Echipă verificată</p>
                  <p className="text-sm text-gray-600">Personal selectat, instruit și monitorizat prin controale de calitate.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 mt-2 rounded-full bg-emerald-500" />
                <div>
                  <p className="font-medium text-primary">Răspuns rapid</p>
                  <p className="text-sm text-gray-600">Intervenții programate și urgente cu echipe dedicate pentru abonamente.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-background px-4 sm:px-6 lg:px-8 py-14">
        <div className="container-max grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-2">Zone acoperite</p>
            <p className="text-2xl font-bold text-primary">Bacău, Iași, București</p>
            <p className="text-sm text-gray-600 mt-2">Echipe mobile pentru proiecte în alte orașe mari.</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-2">Tipuri de spații</p>
            <p className="text-2xl font-bold text-primary">Birouri, retail, rezidențial</p>
            <p className="text-sm text-gray-600 mt-2">Și intervenții post-constructor sau la înălțime.</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-2">Calitate asigurată</p>
            <p className="text-2xl font-bold text-primary">Inspecții periodice</p>
            <p className="text-sm text-gray-600 mt-2">Checklist clar, feedback rapid și corecții imediate.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="container-max text-center">
          <h3 className="text-3xl font-bold text-primary mb-4">Hai să discutăm despre spațiul tău</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Spune-ne ce tip de spațiu ai, suprafața și frecvența dorită. Venim cu un plan clar și o ofertă corectă.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+40722312130" className="btn-primary">
              Sună acum
            </a>
            <a href="/contact" className="btn-outline">
              Cere ofertă
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
