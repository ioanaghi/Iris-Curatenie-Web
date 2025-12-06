'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // shrink the logo a bit on scroll (optional, for polish)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  const linkClassName = (href: string) =>
    [
      'font-medium transition-colors px-3 py-1 rounded-full',
      isActive(href)
        ? 'bg-emerald-100 text-emerald-700'
        : 'text-emerald-800 hover:text-emerald-600',
    ].join(' ')

  const leftNavigation = [
    { name: 'Acasă', href: '/' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Abonamente', href: '/abonamente' },
  ]

  const rightNavigation = [
    { name: 'Portofoliu', href: '/portofoliu' },
    { name: 'Despre', href: '/despre' },
    { name: 'Galerie', href: '/gallery' },
  ]

  return (
    <nav className="sticky top-0 z-50">
      {/* bar background (thin, glassy) */}
      <div className="bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="container-max relative">
          {/* height a bit slimmer than your first version */}
            <div className="flex items-center justify-between h-16 md:h-18">
              {/* left side */}
              <div className="hidden md:flex items-center gap-8 flex-1 justify-start">
                <a href="tel:+40722312130" className="btn-outline text-sm">
                  Sună acum
                </a>
              <div className="flex items-center gap-8">
                {leftNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={linkClassName(item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              </div>

            {/* center logo – floating, overlapping the bar */}
            <div
              className={[
                'absolute left-1/2 -translate-x-1/2',
                // pull it up to overlap top & bottom like in screenshot #2
                scrolled ? '-top-6' : '-top-8',
              ].join(' ')}
            >
              <Link href="/" className="block">
                <div
                  className={[
                    'rounded-full bg-white ring-2 ring-slate-200 shadow-xl',
                    'flex items-center justify-center',
                    // big size like the second screenshot
                    scrolled ? 'w-40 h-40 md:w-44 md:h-44' : 'w-44 h-44 md:w-48 md:h-48',
                    // a very soft outer halo (subtle)
                    'outline outline-[8px] outline-white/60',
                  ].join(' ')}
                >
                  <Image
                    src="/LogoBun.svg"
                    alt="IRIS Curățenie"
                    width={200}
                    height={200}
                    className="w-28 md:w-32 h-auto"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* right side */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
              <div className="flex items-center gap-8">
                {rightNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={linkClassName(item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link href="/contact" className="btn-offer text-sm">
                Contact
              </Link>
            </div>

            {/* mobile menu button */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-emerald-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-emerald-50 to-purple-50 border-b border-emerald-200">
          <div className="container-max py-4">
            <div className="flex flex-col space-y-3">
              {[...leftNavigation, ...rightNavigation].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={[
                    'py-2 font-medium rounded-lg px-3',
                    isActive(item.href)
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-emerald-800 hover:text-emerald-600',
                  ].join(' ')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-emerald-200 flex flex-col gap-3">
                <a href="tel:+40722312130" className="btn-outline text-sm text-center">
                  Sună acum
                </a>
                <Link href="/contact" className="btn-offer text-sm text-center">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
