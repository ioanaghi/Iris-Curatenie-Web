const BenefitsSection = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Certificat ISO",
      description: "Certificări ISO 9001:2008, ISO 18001:2008 și ISO 14001:2005 pentru calitate, siguranță și mediu.",
      details: ["ISO 9001:2008 - Managementul calității", "ISO 18001:2008 - Siguranța și sănătatea", "ISO 14001:2005 - Managementul mediului"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Echipă Verificată",
      description: "Personal calificat și verificat, cu experiență în servicii profesionale de curățenie.",
      details: ["Personal verificat și calificat", "Formare continuă", "Experiență în domeniu"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Intervenții Rapide",
      description: "Răspuns rapid la solicitări, cu timp mediu de răspuns sub 2 ore pentru oferte personalizate.",
      details: ["Răspuns sub 2 ore", "Intervenții urgente", "Flexibilitate programare"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Abonamente Flexibile",
      description: "Pachete adaptate nevoilor: Basic, Standard și Premium cu frecvență și SLA personalizate.",
      details: ["Pachete Basic/Standard/Premium", "Frecvență personalizată", "SLA garantat"]
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            De ce IRIS Curățenie?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alegem calitatea, profesionalismul și încrederea pentru a oferi cele mai bune servicii de curățenie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card group hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="text-accent group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Brands */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-8">
            Echipamente Profesionale
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white px-6 py-3 rounded-xl shadow-soft">
              <span className="text-lg font-semibold text-gray-700">Kärcher</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-soft">
              <span className="text-lg font-semibold text-gray-700">Tennant</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-soft">
              <span className="text-lg font-semibold text-gray-700">Kränzle</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-soft">
              <span className="text-lg font-semibold text-gray-700">Sano</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-soft">
              <span className="text-lg font-semibold text-gray-700">Diversey</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
