import type { Metadata } from 'next'
import Head from 'next/head';
import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import { LocalBusiness, WithContext } from 'schema-dts';
import 'bootstrap/dist/css/bootstrap.css'
import "@/public/css/all.min.css";
import '@/styles/scss/style.scss'
import "@/styles/scss/flaticon/flaticon.css"
import "animate.css"

import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import BootstrapClient from '@/components/BootstrapClient'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

const jsonLd: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "url": "https://www.stomatolog-dentysta.pl/",
  "name": "ArtDent Dentysta Zielona Góra Stomatolog i protetyka Zielona Góra",
  "alternateName": "Dentysta Zielona Góra Stomatolog Zielona Góra Protetyka Zielona Góra",
  "description": "Gabinet Stomatologiczny ArtDent Anna Miśków - Dentysta Zielona Góra Stomatolog Zielona Góra Protetyka Zielona Góra wybielanie zębów Stomatolog Protezy acronowe",
  "openingHours": "Poniedziałek, Wtorek, Środa, Czwartek, Piątek 10:00-14:00, Sobota po ugodnieniu telefoninczym, Niedziela NIECZYNNE",
  "image": "https://www.stomatolog-dentysta.pl/opengraph-image.jpg",
  "telephone": "+48504219034",
  "priceRange": "od 200,- PLN",
  "address":
      {
          "@type": "PostalAddress",
          "addressLocality": "Zielona góra",
          "postalCode": "65-034",
          "streetAddress": "Bohaterów Westerplatte 9"
      }
  ,
  "contactPoint":
      {
          "@type": "ContactPoint",
          "telephone": "+48504219034",
          "contactType": "Rezerwacja"
      }
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stomatolog-dentysta.pl/'),
  title: 'ArtDent Dentysta Zielona Góra Stomatolog i protetyka Zielona Góra',
  description: 'Gabinet Stomatologiczny ArtDent Anna Miśków - Dentysta Zielona Góra Stomatolog Zielona Góra Protetyka Zielona Góra wybielanie zębów Stomatolog Protezy acronowe',
  keywords: 'stomatolog zielona góra, dentysta zielona góra. Protetyka, Protezy acronowe, Anna Miśków, korony cyrkonowe, zielona góra, gabinet, wybielanie zębów',
  creator: 'Maxsoft',
  publisher: 'Stomatolog - Dentysta',
  openGraph: {
    title: 'Dentysta Zielona Góra Anna Miśków|Protetyka Zielona Góra|dentysta Zielona Góra|stomatolog zielona góra',
    description: 'Gabinet Stomatologiczny ArtDent Anna Miśków - Dentysta Zielona Góra Stomatolog Zielona Góra Protetyka Zielona Góra wybielanie zębów Stomatolog Protezy acronowe',
    url: 'https://www.stomatolog-dentysta.pl/',
    siteName: 'ArtDent Dentysta Zielona Góra Stomatolog i protetyka Zielona Góra',
    locale: 'pl_PL',
    images: '/opengraph-image.jpg',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentysta Zielona Góra Anna Miśków|Protetyka Zielona Góra|dentysta Zielona Góra|stomatolog zielona góra',
    description: 'Gabinet Stomatologiczny ArtDent Anna Miśków - Dentysta Zielona Góra Stomatolog Zielona Góra Protetyka Zielona Góra wybielanie zębów Stomatolog Protezy acronowe',
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
    <html lang="pl" itemScope itemType='http://schema.org/WebPage' >
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </Head>
      <body className={poppins.className}>
        <Header />
        <Navigation />
        {children}
        <Footer />
        <ScrollToTopButton />
        <BootstrapClient />
      </body>
      <GoogleAnalytics gaId="G-WNCQ18N99H" />
    </html>
  )
}
