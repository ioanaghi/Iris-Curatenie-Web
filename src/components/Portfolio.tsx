'use client'

import { useState } from 'react'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const clientCategories = [
    {
      id: 'all',
      name: 'Toate',
      icon: '🏢'
    },
    {
      id: 'bancare',
      name: 'Societăți Bancare',
      icon: '🏦'
    },
    {
      id: 'investitii',
      name: 'Investiții',
      icon: '📈'
    },
    {
      id: 'asigurari',
      name: 'Asigurări',
      icon: '🛡️'
    },
    {
      id: 'media',
      name: 'Media',
      icon: '📺'
    },
    {
      id: 'distributie',
      name: 'Distribuție',
      icon: '🚚'
    },
    {
      id: 'stat',
      name: 'Instituții de Stat',
      icon: '🏛️'
    },
    {
      id: 'medicale',
      name: 'Instituții Medicale',
      icon: '🏥'
    },
    {
      id: 'ngos',
      name: 'ONG-uri',
      icon: '🤝'
    },
    {
      id: 'automotive',
      name: 'Automotive',
      icon: '🚗'
    },
    {
      id: 'industriale',
      name: 'Parcuri Industriale',
      icon: '🏭'
    },
    {
      id: 'cazinouri',
      name: 'Cazinouri',
      icon: '🎰'
    },
    {
      id: 'alte',
      name: 'Alte Firme',
      icon: '💼'
    }
  ]

  const clients = {
    bancare: [
      'GarantiBank',
      'UniCredit Tiriac ROMANIA Bacău',
      'UniCredit ROMANIA Piatra Neamț',
      'CARPATICA SA BACĂU',
      'Banca Românească Bacău'
    ],
    investitii: [
      'SIF Moldova',
      'UNICREDIT LEASING ROMANIA SA'
    ],
    asigurari: [
      'SC INTERAMERICAN SA',
      'BT Asigurări',
      'Generali S.A.'
    ],
    media: [
      'Ziarul DESTEPTAREA',
      'Radio Alfa',
      'Ziarul de Bacău MEDIA BAC SRL'
    ],
    distributie: [
      'SC SIMADI MODE SRL',
      'SC ERNA TRADING GROUP SRL',
      'SC BIOTA COM SRL',
      'SC BRAU UNION ROMANIA SA',
      'SC COMSTOC SRL'
    ],
    stat: [
      'Agenția Județeană Pentru Ocuparea Forței de Muncă Bacău',
      'Casa de Asigurări de Sănătate Bacău',
      'INSPECTORATUL de PROTECȚIA MEDIULUI',
      'REGISTRUL AUTO ROMÂN',
      'OPC Bacău',
      'Agenția de dezvoltare Locală Bacău',
      'Oficiul pentru Consultanță Agricolă'
    ],
    medicale: [
      'Centrul de transfuzii Bacău',
      'Direcția de sănătate publică'
    ],
    ngos: [
      'FUNDAȚIA de SPRIJIN COMUNITAR'
    ],
    automotive: [
      'PEUGEOT-TRENDO AUTOMOBILE SRL'
    ],
    industriale: [
      'HIT SRL BACĂU'
    ],
    cazinouri: [
      'S.C. WETTPUNKT, INT\'L S.R.L cu sedii în București, Constanța, Rm Vâlcea, Bacău, Deva, Brașov, Pitești'
    ],
    alte: [
      'Industrial Valves',
      'SGT Med S.R.L.',
      'Tehnix S.R.L.',
      'RO-STYLE S.A.',
      'DHL INTERNATIONAL',
      'SC ARTRI SA',
      'RANK XEROX - TEXER SERVICE CO. SRL',
      'REHAU POLYMER SRL',
      'INTEL LEGIS SRL',
      'SC HYDROSERVICE SA',
      'DEDEMAN SA',
      'Magazinul Alb & Negru'
    ]
  }

  const getAllClients = () => {
    return Object.values(clients).flat()
  }

  const getFilteredClients = () => {
    if (activeCategory === 'all') {
      return getAllClients()
    }
    return clients[activeCategory as keyof typeof clients] || []
  }

  const filteredClients = getFilteredClients()

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-purple-50 px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-emerald mb-6">
            Portofoliul Nostru de Clienți
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Lucrăm cu cele mai prestigioase companii din România, oferind servicii de curățenie 
            la standarde internaționale ISO pentru peste 50 de clienți din diverse sectoare.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {clientCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg transform scale-105'
                  : 'bg-white text-emerald-700 hover:bg-emerald-100 border border-emerald-200 hover:border-emerald-300'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card-emerald text-center">
            <div className="text-4xl font-bold text-gradient-emerald mb-2">
              {getAllClients().length}+
            </div>
            <div className="text-emerald-700 font-medium">Clienți Activi</div>
          </div>
          <div className="card-gold text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-2">
              {clientCategories.length - 1}
            </div>
            <div className="text-gold-700 font-medium">Sectoare de Activitate</div>
          </div>
          <div className="card-purple text-center">
            <div className="text-4xl font-bold text-gradient-purple mb-2">
              15+
            </div>
            <div className="text-purple-700 font-medium">Ani de Experiență</div>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client, index) => (
            <div
              key={index}
              className="card hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {client.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-emerald-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {client}
                  </h3>
                  <p className="text-sm text-emerald-600 mt-1">
                    Client IRIS Curățenie
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-emerald max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">
              Vrei să faci parte din portofoliul nostru?
            </h3>
            <p className="text-emerald-700 mb-6">
              Contactează-ne pentru o ofertă personalizată și devino următorul nostru client de succes.
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
                Cere ofertă
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
