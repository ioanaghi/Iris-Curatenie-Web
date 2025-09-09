'use client'

import { useState } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  return (
    <section className="relative bg-gradient-to-br from-background to-emerald-50 section-padding pt-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Curățenie premium pentru biroul și casa ta, la standarde ISO.
              </h1>
              <p className="text-xl text-emerald-700 leading-relaxed">
                Echipă verificată, intervenții rapide și abonamente flexibile în Bacău și orașele mari.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowQuoteForm(true)}
                className="btn-primary text-lg px-8 py-4"
              >
                Cere ofertă în 60s
              </button>
              <a
                href="tel:+40722312130"
                className="btn-outline text-lg px-8 py-4"
              >
                Sună acum
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm text-emerald-700">Certificat ISO</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm text-emerald-700">Echipamente profesionale</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm text-emerald-700">Garanție satisfacție</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary">Servicii Premium</h3>
                <p className="text-emerald-700">Curățenie profesională cu echipamente de ultimă generație</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">Cere ofertă rapidă</h2>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="text-gold-400 hover:text-emerald-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-2">
                  Nume complet *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Introduceți numele complet"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-2">
                  Număr de telefon *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="+40 7XX XXX XXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-2">
                  Tip spațiu *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Selectați tipul spațiului</option>
                  <option value="birou">Birou</option>
                  <option value="rezidential">Rezidențial</option>
                  <option value="comercial">Comercial</option>
                  <option value="post-constructor">Post-constructor</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-2">
                  Suprafață (m²)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Ex: 150"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-emerald-800 mb-2">
                  Frecvență dorită
                </label>
                <select className="w-full px-4 py-3 border border-emerald-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent">
                  <option value="">Selectați frecvența</option>
                  <option value="ocazional">Ocazional</option>
                  <option value="saptamanal">Săptămânal</option>
                  <option value="lunar">Lunar</option>
                  <option value="abonament">Abonament</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary py-3"
              >
                Trimite cererea
              </button>
            </form>
            
            <p className="text-xs text-gold-500 mt-4 text-center">
              Vă contactăm în maximum 2 ore pentru ofertă personalizată
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
