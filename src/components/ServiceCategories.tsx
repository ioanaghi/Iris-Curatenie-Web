const ServiceCategories = () => {
  const firmServices = [
    {
      title: "Curățenie Birouri",
      description: "Servicii complete pentru spații de lucru: curățenie generală, întreținere zilnică și săptămânală, gestionarea deșeurilor și aprovizionare consumabile sanitare.",
      features: [
        "Curățenie zilnică și săptămânală",
        "Gestionarea deșeurilor",
        "Aprovizionare consumabile",
        "Curățenie baie și spații comune"
      ],
      icon: "🏢"
    },
    {
      title: "Post-Constructor",
      description: "Echipă dedicată cu aparate industriale pentru praf și lichide, finalizare în termen pentru proiecte de construcție și renovare.",
      features: [
        "Echipă dedicată și specializată",
        "Aparate industriale praf+lichide",
        "Finalizare în termen garantată",
        "Curățenie după renovări"
      ],
      icon: "🔨"
    },
    {
      title: "Geamuri la Înălțime",
      description: "Echipă de alpiniști utilitari certificați pentru fațade și spații greu accesibile, folosind echipamente de siguranță profesionale.",
      features: [
        "Alpiniști utilitari certificați",
        "Echipamente de siguranță profesionale",
        "Fațade și spații greu accesibile",
        "Intervenții la înălțime"
      ],
      icon: "🏗️"
    },
    {
      title: "Întreținere Pardoseli",
      description: "Marmură, granit, gresie, PVC—decapare, ceruire, cristalizare, polish mecanizat. Programare pe timp de noapte, fără întrerupere activitate.",
      features: [
        "Decapare și ceruire profesională",
        "Cristalizare și polish mecanizat",
        "Programare pe timp de noapte",
        "Fără întrerupere activitate"
      ],
      icon: "✨"
    }
  ]

  const residentialServices = [
    {
      title: "Curățenie Generală",
      description: "Servicii complete pentru întreaga locuință: curățenie camere, baie, bucătărie, holuri și spații comune cu atenție la detalii.",
      features: [
        "Curățenie camere și spații comune",
        "Baie și bucătărie completă",
        "Aspirare și măturare",
        "Organizare și aranjare"
      ],
      icon: "🏠"
    },
    {
      title: "Întreținere Regulată",
      description: "Servicii de întreținere săptămânală sau lunară pentru menținerea curățeniei și organizării spațiului de locuit.",
      features: [
        "Programare regulată",
        "Întreținere preventivă",
        "Abonamente flexibile",
        "Prețuri avantajoase"
      ],
      icon: "📅"
    },
    {
      title: "Curățare Textile",
      description: "Covoare, mochete și tapițerii mecanizat cu echipamente profesionale Kärcher și Tennant pentru rezultate superioare.",
      features: [
        "Echipamente profesionale Kärcher",
        "Covoare și mochete",
        "Tapițerii mecanizat",
        "Rezultate garantate"
      ],
      icon: "🧽"
    },
    {
      title: "Curățare Profundă",
      description: "Servicii specializate pentru curățarea profundă a spațiilor, inclusiv curățarea după evenimente speciale sau renovări.",
      features: [
        "Curățare după evenimente",
        "Servicii specializate",
        "Echipamente profesionale",
        "Rezultate impecabile"
      ],
      icon: "🌟"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Firm Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Servicii pentru Firme
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluții profesionale pentru birouri, spații comerciale și instituții publice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {firmServices.map((service, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Residential Services */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Servicii Rezidențiale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Servicii personalizate pentru locuințe, cu atenție la detalii și respectarea intimității
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residentialServices.map((service, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Gata să începeți?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contactați-ne pentru o ofertă personalizată în maximum 2 ore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+40722312130"
                className="bg-white text-accent px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Sună acum
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-accent transition-colors duration-200"
              >
                Cere ofertă
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories
