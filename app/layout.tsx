import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import "@/public/css/all.min.css"; 
import '@/styles/scss/style.scss'
import "@/styles/scss/flaticon/flaticon.css"

import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import BootstrapClient from '@/components/BootstrapClient'

const poppins = Poppins({
  weight: ['300','400','500','600','700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stomatolog-dentysta.pl/'),
  title: 'Dentysta Zielona Góra - Anna Miśków, dentysta Zielona Góra, stomatolog zielona góra, Protezy acronowe,Protezy',
  description: 'Dentysta Zielona Góra,stomatolog Zielona Góra,wybielanie zębów,korony cyrkonowe,Gabinet Stomatologiczny Anna Miśków,dentysta zielona Góra,Stomatologia zielona góra,dentysta Anna Miśków,Protezy acronowe (elastyczne)',
  keywords: 'stomatolog zielona góra, dentysta zielona góra, Dentysta, gabinet stomatologiczny, Protezy acronowe, Anna Miśków, korony cyrkonowe, zielona góra, gabinet, wybielanie zębów',
  openGraph: {
    title: 'Dentysta Zielona Góra - Anna Miśków, dentysta Zielona Góra, stomatolog zielona góra, Protezy acronowe,Protezy',
    description: 'Dentysta Zielona Góra,stomatolog Zielona Góra,wybielanie zębów,korony cyrkonowe,Gabinet Stomatologiczny Anna Miśków,dentysta zielona Góra,Stomatologia zielona góra',
    url: 'https://www.stomatolog-dentysta.pl/',
    siteName: 'Dentysta Zielona Góra',
    locale: 'pl_PL',
    images: '/opengraph-image.jpg'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentysta Zielona Góra - Anna Miśków, dentysta Zielona Góra, stomatolog zielona góra, Protezy acronowe,Protezy',
    description: 'Dentysta Zielona Góra,stomatolog Zielona Góra,wybielanie zębów,korony cyrkonowe,Gabinet Stomatologiczny Anna Miśków,dentysta zielona Góra,Stomatologia zielona góra',
    images: '/twitter-image.jpg'
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <Header />
        <Navigation />
        {children}
        <Footer />
        <ScrollToTopButton />
        <BootstrapClient />
      </body>
    </html>
  )
}
