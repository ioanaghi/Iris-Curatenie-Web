import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-emerald-800 via-emerald-900 to-purple-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/LogoBun.svg"
                alt="IRIS Curățenie"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-emerald-100 text-sm">
              Servicii profesionale de curățenie în Bacău și orașele mari din România.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-xs text-emerald-100">ISO 9001:2008</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-xs text-emerald-100">ISO 18001:2008</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Link-uri rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicii" className="text-emerald-100 hover:text-accent transition-colors duration-200 text-sm">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/abonamente" className="text-emerald-100 hover:text-accent transition-colors duration-200 text-sm">
                  Abonamente
                </Link>
              </li>
              <li>
                <Link href="/portofoliu" className="text-emerald-100 hover:text-accent transition-colors duration-200 text-sm">
                  Portofoliu
                </Link>
              </li>
              <li>
                <Link href="/despre" className="text-emerald-100 hover:text-accent transition-colors duration-200 text-sm">
                  Despre noi
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2">
              <li className="text-emerald-100 text-sm">Curățenie birouri</li>
              <li className="text-emerald-100 text-sm">Curățenie rezidențial</li>
              <li className="text-emerald-100 text-sm">Post-constructor</li>
              <li className="text-emerald-100 text-sm">Geamuri la înălțime</li>
              <li className="text-emerald-100 text-sm">Întreținere pardoseli</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div>
                <p className="text-emerald-100 text-sm">Strada Nicolae Balcescu Nr. 10</p>
                <p className="text-emerald-100 text-sm">600051, Bacău - România</p>
              </div>
              <div>
                <a
                  href="tel:+40722312130"
                  className="text-accent hover:text-accent/80 transition-colors duration-200 text-sm font-medium"
                >
                  +40 722 312 130
                </a>
              </div>
              <div>
                <a
                  href="mailto:office@iriscuratenie.ro"
                  className="text-emerald-100 hover:text-accent transition-colors duration-200 text-sm"
                >
                  office@iriscuratenie.ro
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-100 text-sm">
              © {currentYear} IRIS Curățenie. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/politica-confidentialitate" className="text-emerald-100 hover:text-accent transition-colors duration-200 text-sm">
                Politica de confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="text-emerald-100 hover:text-accent transition-colors duration-200 text-sm">
                Termeni și condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
