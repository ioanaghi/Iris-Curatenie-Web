const SocialProof = () => {
  const testimonials = [
    {
      name: "Maria Popescu",
      role: "Manager, Banca Transilvania",
      content: "Servicii excepționale de curățenie pentru biroul nostru. Echipă profesională și rezultate impecabile.",
      rating: 5
    },
    {
      name: "Ion Ionescu",
      role: "Director, Clinica MedLife",
      content: "IRIS Curățenie ne-a oferit servicii de calitate superioară, respectând toate standardele de igienă.",
      rating: 5
    },
    {
      name: "Ana Dumitrescu",
      role: "Proprietar, Restaurant",
      content: "Abonamentul flexibil ne permite să avem spațiul întotdeauna curat, fără griji.",
      rating: 5
    }
  ]

  const clientLogos = [
    "Banca Transilvania",
    "MedLife",
    "Carrefour",
    "Dedeman",
    "Kaufland",
    "Lidl",
    "Primăria Bacău",
    "Spitalul Municipal"
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Clienții Noștri
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Încrederea companiilor mari din România
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="bg-gray-100 px-4 py-3 rounded-xl text-center">
                <span className="text-sm font-medium text-gray-600">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Ce spun clienții noștri
          </h3>
          <p className="text-lg text-gray-600">
            Testimoniale reale de la clienții mulțumiți
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold text-primary">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
            <div className="text-gray-600">Clienți mulțumiți</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
            <div className="text-gray-600">Ani experiență</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">8</div>
            <div className="text-gray-600">Orașe acoperite</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">24/7</div>
            <div className="text-gray-600">Disponibilitate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
