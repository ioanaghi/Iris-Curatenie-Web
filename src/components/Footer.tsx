import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-emerald-100">
      {/* Main Footer Content */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Company Info */}
          <div className="space-y-6 lg:pr-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.svg"
                alt="IRIS Curățenie"
                width={140}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Servicii profesionale de curățenie în Bacău și orașele mari din România. 
              Echipă verificată ISP cu echipamente moderne și certificări ISO.
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-medium text-emerald-700">ISO 9001:2008</span>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-medium text-emerald-700">ISO 18001:2008</span>
              </div>
            </div>
          </div>

          {/* Services & Links */}
          <div className="grid grid-cols-2 gap-8 lg:pr-16">
            <div>
              <h4 className="font-semibold text-emerald-800 mb-4">Servicii</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/servicii" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 text-sm">
                    Curățenie birouri
                  </Link>
                </li>
                <li>
                  <Link href="/servicii" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 text-sm">
                    Curățenie rezidențial
                  </Link>
                </li>
                <li>
                  <Link href="/servicii" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 text-sm">
                    Post-constructor
                  </Link>
                </li>
                <li>
                  <Link href="/servicii" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 text-sm">
                    Geamuri la înălțime
                  </Link>
                </li>
                <li>
                  <Link href="/servicii" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 text-sm">
                    Întreținere pardoseli
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-emerald-800 mb-4">Companie</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/despre" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 text-sm">
                    Despre noi
                  </Link>
                </li>
                <li>
                  <Link href="/portofoliu" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 text-sm">
                    Portofoliu
                  </Link>
                </li>
                <li>
                  <Link href="/abonamente" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 text-sm">
                    Abonamente
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-emerald-800 mb-4">Contactează-ne</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-emerald-600 mt-0.5">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a
                    href="tel:+40722312130"
                    className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200 font-medium"
                  >
                    +40 722 312 130
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Luni - Vineri: 08:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-emerald-600 mt-0.5">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <a
                    href="mailto:office@iriscuratenie.ro"
                    className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200"
                  >
                    office@iriscuratenie.ro
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-emerald-600 mt-0.5">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    Str. Libertății 1<br />
                    600052, Bacău - România
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors duration-200"
              >
                Cere ofertă acum
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} IRIS Curățenie. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/politica-confidentialitate" className="text-gray-500 hover:text-emerald-600 transition-colors duration-200 text-sm">
                Politica de confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="text-gray-500 hover:text-emerald-600 transition-colors duration-200 text-sm">
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
