const CoverageMap = () => {
  const servicedCities = [
    "Bacău",
    "Iași",
    "Neamț",
    "Vrancea",
    "Galați",
    "Vaslui",
    "Botoșani",
    "Suceava",
    "București",
    "Ilfov",
  ]

  return (
    <section className="section-padding bg-[radial-gradient(circle_at_15%_20%,#f7f1e7,transparent_35%),radial-gradient(circle_at_85%_10%,#f4efe4,transparent_30%),linear-gradient(135deg,#fdfaf5,#f7f3eb)] text-primary">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Acoperire selectivă, echipe rapide
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Operăm cu echipe locale în toată zona Moldovei și în București/Ilfov, cu dispecerat în Bacău pentru coordonare și intervenții urgente.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4">
              <p className="text-sm text-emerald-700 mb-3 font-medium">Orașe deservite</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {servicedCities.map((city) => (
                  <div
                    key={city}
                    className="px-3 py-2 rounded-xl bg-emerald-50 text-emerald-800 text-sm font-medium"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-emerald-100 shadow-sm max-w-full">
                <p className="text-xs text-emerald-700">Telefon</p>
                <a href="tel:+40722312130" className="text-primary font-semibold text-sm sm:text-base hover:text-emerald-700">
                  +40 722 312 130
                </a>
              </div>
              <div className="bg-white rounded-xl p-4 border border-emerald-100 shadow-sm max-w-full">
                <p className="text-xs text-emerald-700">Email</p>
                <a href="mailto:office@iriscuratenie.ro" className="block text-primary font-semibold text-sm sm:text-base hover:text-emerald-700 truncate">
                  office@iriscuratenie.ro
                </a>
              </div>
              <div className="bg-white rounded-xl p-4 border border-emerald-100 shadow-sm max-w-full">
                <p className="text-xs text-emerald-700">Adresă sediu</p>
                <p className="text-primary font-semibold text-sm sm:text-base leading-tight">
                  Str. Libertății 1<br />600052, Bacău
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+40722312130"
                className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors text-center shadow-md"
              >
                Sună acum
              </a>
              <a
                href="/contact"
                className="border-2 border-emerald-600 text-primary px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
            <div className="p-4 border-b border-gray-100">
              <p className="text-primary font-semibold">Sediu Bacău</p>
              <p className="text-sm text-gray-600">Str. Libertății 1, 600052</p>
            </div>
            <div className="aspect-[4/3]">
              <iframe
                title="Harta IRIS Curățenie"
                src="https://www.google.com/maps?q=Strada%20Libert%C4%83%C8%9Bii%201%2C%20Bac%C4%83u%20600052&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoverageMap
