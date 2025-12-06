export const metadata = {
  title: 'Contact IRIS Curățenie • +40 722 312 130',
  description: 'Sună sau scrie pentru o ofertă rapidă de curățenie profesională. Telefon: +40 722 312 130, Email: office@iriscuratenie.ro',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background to-gray-50 px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
        <div className="container-max text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            Răspundem rapid • sub 2 ore
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact IRIS Curățenie
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trimite-ne câteva detalii despre spațiul tău și revenim cu o ofertă personalizată. Telefon, email sau formular — cum preferi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="tel:+40722312130" className="btn-primary">
              Sună acum
            </a>
            <a href="mailto:office@iriscuratenie.ro" className="btn-outline">
              Trimite email
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="card lg:col-span-2">
            <h2 className="text-2xl font-semibold text-primary mb-4">Formular rapid</h2>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              action="mailto:office@iriscuratenie.ro"
              method="post"
              encType="text/plain"
            >
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="name">Nume și prenume*</label>
                <input
                  id="name"
                  name="Nume"
                  required
                  className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Ex: Andrei Popescu"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Telefon*</label>
                <input
                  id="phone"
                  name="Telefon"
                  type="tel"
                  required
                  className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="+40 722 312 130"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="office@iriscuratenie.ro"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="services">Servicii dorite</label>
                <select
                  id="services"
                  name="Servicii"
                  className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  defaultValue=""
                >
                  <option value="" disabled>Selectează</option>
                  <option>Curățenie birouri</option>
                  <option>Curățenie rezidențială</option>
                  <option>Post-constructor</option>
                  <option>Întreținere pardoseli</option>
                  <option>Curățare geamuri/înălțime</option>
                  <option>Abonament personalizat</option>
                </select>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="details">Detalii despre spațiu</label>
                <textarea
                  id="details"
                  name="Detalii"
                  rows={4}
                  className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Suprafață (m²), tip spațiu, frecvență dorită, interval orar preferat."
                />
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Trimite mesaj
                </button>
                <p className="text-sm text-gray-500">
                  Preferi direct? <a className="text-emerald-600 font-medium" href="tel:+40722312130">Sună +40 722 312 130</a>
                </p>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            <div className="card">
              <h3 className="text-lg font-semibold text-primary mb-2">Contact rapid</h3>
              <p className="text-gray-700">Telefon: <a className="text-emerald-600 font-medium" href="tel:+40722312130">+40 722 312 130</a></p>
              <p className="text-gray-700">Email: <a className="text-emerald-600 font-medium" href="mailto:office@iriscuratenie.ro">office@iriscuratenie.ro</a></p>
              <div className="rounded-xl bg-emerald-50 text-emerald-800 px-4 py-3 text-sm font-medium mt-3">
                Timp mediu de răspuns: sub 2 ore în programul de lucru.
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-primary mb-2">Program & intervenții</h3>
              <p className="text-gray-700">Luni - Vineri: 08:00 - 18:00</p>
              <p className="text-gray-700">Urgente: weekend/după program la cerere</p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-primary mb-2">Adresă & acoperire</h3>
              <p className="text-gray-700">Str. Miron Costin 14, Bacău</p>
              <p className="text-gray-700">Bacău, Iași, București și orașe mari la cerere</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
