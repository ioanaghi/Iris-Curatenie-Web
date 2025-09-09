const PricingFAQ = () => {
  const faqs = [
    {
      question: "Cum se calculează prețul pentru serviciile de curățenie?",
      answer: "Prețul se calculează în funcție de suprafața spațiului, tipul serviciilor solicitate și frecvența execuției. Oferim prețuri transparente fără costuri ascunse."
    },
    {
      question: "Pot anula sau modifica abonamentul?",
      answer: "Da, puteți anula sau modifica abonamentul cu o notificare de 30 de zile. Pentru modificări frecvente, vă recomandăm să discutați cu managerul dedicat."
    },
    {
      question: "Ce include garanția satisfacției?",
      answer: "Garanția satisfacției include refacerea gratuită a serviciilor în cazul în care nu suntem mulțumiți de rezultat. Contactați-ne în maximum 24 de ore de la execuție."
    },
    {
      question: "Cum funcționează serviciile de urgență?",
      answer: "Pentru servicii de urgență, contactați-ne direct la +40 722 312 130. Vom încerca să programăm intervenția în aceeași zi sau următoarea zi lucrătoare."
    },
    {
      question: "Oferiți servicii în weekend și sărbători?",
      answer: "Da, oferim servicii în weekend și sărbători legale cu un supliment de 20% la tarifele standard. Pentru detalii, contactați-ne."
    },
    {
      question: "Ce echipamente folosiți pentru curățenie?",
      answer: "Folosim echipamente profesionale de la producători recunoscuți: Kärcher, Tennant, Kränzle și detergenți Sano, Diversey pentru rezultate superioare."
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Întrebări Frecvente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Răspunsuri la cele mai comune întrebări despre serviciile și abonamentele noastre
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Nu găsiți răspunsul?
            </h3>
            <p className="text-gray-600 mb-6">
              Echipa noastră este gata să vă ajute cu orice întrebare despre serviciile noastre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+40722312130"
                className="btn-primary"
              >
                Sună acum
              </a>
              <a
                href="/contact"
                className="btn-outline"
              >
                Trimite mesaj
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingFAQ
