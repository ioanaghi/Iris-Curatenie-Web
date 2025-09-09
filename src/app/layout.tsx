import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Servicii de curățenie Bacău • Birouri & Rezidențial • IRIS (ISO)',
  description: 'Curățenie profesională în Bacău și orașe mari: birouri, rezidențial, post-constructor, pardoseli, geamuri la înălțime. Abonamente flexibile. Cere ofertă.',
  keywords: 'curățenie Bacău, servicii curățenie, curățenie birouri, curățenie rezidențial, post-constructor, geamuri înălțime, ISO certificat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-background text-primary antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
