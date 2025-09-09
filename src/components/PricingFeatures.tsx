const PricingFeatures = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexibilitate Programare",
      description: "Programăm serviciile conform programului dumneavoastră, inclusiv weekend și sărbători legale."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Calitate Garantată",
      description: "Control calitate strict conform standardelor ISO și garanție satisfacție pentru toate serviciile."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Echipă Verificată",
      description: "Personal calificat și verificat, cu experiență în servicii profesionale de curățenie."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Intervenții Rapide",
      description: "Răspuns rapid la solicitări urgente și programare flexibilă pentru servicii suplimentare."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Prețuri Transparente",
      description: "Fără costuri ascunse. Prețuri clare și competitive pentru toate serviciile oferite."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Suport Continuu",
      description: "Manager dedicat pentru clienții Premium și suport telefonic pentru toate pachetele."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            De ce să alegeți abonamentele noastre?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beneficii exclusive și servicii de calitate superioară pentru toate pachetele
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:shadow-xl transition-all duration-300">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Gata să începeți?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contactați-ne pentru o ofertă personalizată și gratuită
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+40722312130"
                className="bg-accent text-white px-8 py-3 rounded-xl font-medium hover:bg-accent/90 transition-colors duration-200"
              >
                Sună acum
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-primary transition-colors duration-200"
              >
                Cere ofertă gratuită
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingFeatures
