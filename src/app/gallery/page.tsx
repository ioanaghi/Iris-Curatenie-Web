export const metadata = {
  title: 'Galerie foto • IRIS Curățenie',
  description: 'Imagini din proiectele IRIS Curățenie: birouri, retail, rezidențial și intervenții speciale.',
}

const galleryItems = [
  { src: '/assets/gallery/1.jpg', title: 'Lobby corporate', text: 'Curățare zilnică, podele și sticlă' },
  { src: '/assets/gallery/2.jpg', title: 'Birouri moderne', text: 'Întreținere săptămânală, dezinfectare' },
  { src: '/assets/gallery/3.jpg', title: 'Spații comerciale', text: 'Program nocturn, podele lucioase' },
  { src: '/assets/gallery/4.jpg', title: 'Rezidențial premium', text: 'Curățenie detaliată, bucătării și băi' },
  { src: '/assets/gallery/2.jpg', title: 'Săli de conferință', text: 'Geamuri, mese, pardoseli impecabile' },
  { src: '/assets/gallery/1.jpg', title: 'Zone de recepție', text: 'Primă impresie perfectă pentru clienți' },
]

export default function GaleriePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background to-gray-50 px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        <div className="container-max text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            Galerie foto • Lucrări IRIS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Munca noastră, în imagini
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Spații impecabile pentru birouri, rezidențial și proiecte speciale. Mai jos găsești câteva dintre intervențiile noastre.
          </p>
        </div>
      </section>
      
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="container-max space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl border border-gray-100 min-h-[210px]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <p className="text-sm uppercase tracking-wide text-white/80">IRIS Curățenie</p>
                    <h3 className="text-2xl font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-white/90 mt-1">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <p className="text-sm text-gray-500 mb-2">Zone acoperite</p>
              <p className="text-2xl font-bold text-primary">Bacău, Iași, București</p>
              <p className="text-sm text-gray-600 mt-2">Echipe mobile și intervenții rapide.</p>
            </div>
            <div className="card text-center">
              <p className="text-sm text-gray-500 mb-2">Tipuri de proiecte</p>
              <p className="text-2xl font-bold text-primary">Birouri, retail, rezidențial</p>
              <p className="text-sm text-gray-600 mt-2">Post-constructor și spații tehnice incluse.</p>
            </div>
            <div className="card text-center">
              <p className="text-sm text-gray-500 mb-2">Standarde</p>
              <p className="text-2xl font-bold text-primary">ISO & checklist</p>
              <p className="text-sm text-gray-600 mt-2">Control calitate constant, feedback rapid.</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">Vrei imagini din nișa ta?</h3>
            <p className="text-gray-600 mb-6">Trimite-ne un mesaj și îți arătăm lucrări similare proiectului tău.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:office@iriscuratenie.ro" className="btn-outline">
                Cere detalii
              </a>
              <a href="tel:+40722312130" className="btn-primary">
                Sună acum
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
