import Link from 'next/link'

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "de la 15",
      period: "lei/m²",
      description: "Perfect pentru spații mici și servicii ocazionale",
      features: [
        "Curățenie generală de bază",
        "Aspirare și măturare",
        "Curățenie baie și bucătărie",
        "Eliminarea deșeurilor",
        "Servicii ocazionale"
      ],
      cta: "Cere ofertă",
      popular: false,
      color: "gray"
    },
    {
      name: "Standard",
      price: "de la 12",
      period: "lei/m²",
      description: "Cel mai popular pentru birouri și locuințe cu întreținere regulată",
      features: [
        "Toate serviciile Basic",
        "Curățenie săptămânală",
        "Aprovizionare consumabile",
        "Curățenie geamuri",
        "Suport telefonic priorititar",
        "Reducere 10% pentru abonamente"
      ],
      cta: "Cere ofertă",
      popular: true,
      color: "accent"
    },
    {
      name: "Premium",
      price: "de la 10",
      period: "lei/m²",
      description: "Soluție completă pentru spații mari și cerințe speciale",
      features: [
        "Toate serviciile Standard",
        "Curățenie zilnică",
        "Întreținere pardoseli",
        "Curățare profundă lunară",
        "Manager dedicat",
        "Reducere 15% pentru abonamente",
        "Garanție satisfacție 100%"
      ],
      cta: "Cere ofertă",
      popular: false,
      color: "primary"
    }
  ]

  return (
    <section className="bg-gradient-to-br from-background to-gray-50 px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Abonamente & Prețuri
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pachete transparente adaptate nevoilor și bugetului dumneavoastră. Prețuri competitive pentru servicii de calitate superioară.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative card group hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-accent scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                    Cel mai popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full inline-flex justify-center py-3 px-6 rounded-xl font-medium transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-accent text-white hover:bg-accent/90'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Incluse în toate pachetele:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Echipă certificată ISO
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Echipamente profesionale
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Asigurare responsabilitate civilă
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Control calitate strict
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Servicii suplimentare:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Post-constructor: 8-12 lei/m²
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Geamuri înălțime: 3-5 lei/m²
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Curățare covoare: 15-25 lei/m²
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Întreținere pardoseli: 20-30 lei/m²
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
