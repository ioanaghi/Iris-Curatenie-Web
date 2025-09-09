const CoverageMap = () => {
  const cities = [
    { name: "Bacău", isMain: true },
    { name: "București", isMain: false },
    { name: "Constanța", isMain: false },
    { name: "Râmnicu Vâlcea", isMain: false },
    { name: "Timișoara", isMain: false },
    { name: "Piatra Neamț", isMain: false },
    { name: "Deva", isMain: false },
    { name: "Brașov", isMain: false },
    { name: "Pitești", isMain: false }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Acoperire Națională Selectivă
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Servim clienții din principalele orașe din România cu echipă locală și intervenții rapide.
              </p>
            </div>

            {/* Cities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl ${
                    city.isMain
                      ? 'bg-accent text-white'
                      : 'bg-white/10 text-gray-200 hover:bg-white/20'
                  } transition-colors duration-200`}
                >
                  <div className="font-semibold">{city.name}</div>
                  {city.isMain && (
                    <div className="text-sm opacity-90">Sediu principal</div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Telefon principal</div>
                  <a
                    href="tel:+40722312130"
                    className="text-accent hover:text-accent/80 transition-colors duration-200 text-lg font-medium"
                  >
                    +40 722 312 130
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Adresă</div>
                  <div className="text-gray-200">
                    Strada Nicolae Balcescu Nr. 10<br />
                    600051, Bacău - România
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a
                    href="mailto:office@iriscuratenie.ro"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                  >
                    office@iriscuratenie.ro
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+40722312130"
                className="bg-accent text-white px-8 py-4 rounded-xl font-medium hover:bg-accent/90 transition-colors duration-200 text-center"
              >
                Sună acum
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-primary transition-colors duration-200 text-center"
              >
                Cere ofertă
              </a>
            </div>
          </div>

          {/* Right Content - Map Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">România</h3>
                <p className="text-gray-200">Acoperire în 9 orașe mari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoverageMap
