const ServicesGrid = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Curățenie Birouri",
      description: "Servicii complete pentru spații de lucru: curățenie generală, întreținere zilnică și săptămânală, gestionarea deșeurilor și aprovizionare consumabile.",
      features: ["Curățenie zilnică", "Întreținere săptămânală", "Aprovizionare consumabile"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Curățenie Rezidențial",
      description: "Servicii personalizate pentru locuințe: curățenie generală, întreținere regulată, curățare profundă și organizare spații.",
      features: ["Curățenie generală", "Întreținere regulată", "Curățare profundă"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Post-Constructor",
      description: "Echipă dedicată cu aparate industriale pentru praf și lichide, finalizare în termen pentru proiecte de construcție și renovare.",
      features: ["Echipă dedicată", "Aparate industriale", "Finalizare în termen"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Geamuri la Înălțime",
      description: "Echipă de alpiniști utilitari certificați pentru fațade și spații greu accesibile, folosind echipamente de siguranță profesionale.",
      features: ["Alpiniști certificați", "Echipamente siguranță", "Spații greu accesibile"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Întreținere Pardoseli",
      description: "Marmură, granit, gresie, PVC—decapare, ceruire, cristalizare, polish mecanizat. Programare pe timp de noapte, fără întrerupere activitate.",
      features: ["Decapare și ceruire", "Cristalizare", "Polish mecanizat"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Curățare Textile",
      description: "Covoare, mochete și tapițerii mecanizat cu echipamente profesionale Kärcher și Tennant pentru rezultate superioare.",
      features: ["Echipamente profesionale", "Covoare și mochete", "Tapițerii mecanizat"]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Servicii Complete de Curățenie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim soluții profesionale adaptate nevoilor fiecărui client, cu echipamente moderne și echipă verificată.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group hover:shadow-xl transition-all duration-300">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/servicii"
            className="btn-primary text-lg px-8 py-4"
          >
            Vezi toate serviciile
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
