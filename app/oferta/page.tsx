import Services from '@/components/Services';
import BefroreAfter from '@/components/BefroreAfter';
import ParallaxImg from '@/components/ParallaxImg';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oferta - Dentysta Zielona Góra, Stomatolog Zielona Góra',
  description: 'Gabinet Stomatologiczny ArtDent Anna Miśków - Dentysta Zielona Góra Stomatolog Zielona Góra Protetyka Zielona Góra wybielanie zębów Stomatolog Protezy acronowe',
  keywords: 'stomatolog zielona góra, dentysta zielona góra. Protetyka, Protezy acronowe, Anna Miśków, korony cyrkonowe',
  creator: 'Maxsoft',
  publisher: 'Stomatolog - Dentysta',
  openGraph: {
    title: 'Oferta - Dentysta Zielona Góra, Stomatolog Zielona Góra',
    description: 'Gabinet Stomatologiczny ArtDent Anna Miśków - Dentysta Zielona Góra Stomatolog Zielona Góra Protetyka Zielona Góra wybielanie zębów Stomatolog Protezy acronowe',
    url: 'https://www.stomatolog-dentysta.pl/oferta',
    siteName: 'ArtDent Dentysta Zielona Góra Stomatolog i protetyka Zielona Góra',
    locale: 'pl_PL',
    images: '/opengraph-image.jpg',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oferta - Dentysta Zielona Góra, Stomatolog Zielona Góra',
    description: 'Gabinet Stomatologiczny ArtDent Anna Miśków - Dentysta Zielona Góra Stomatolog Zielona Góra Protetyka Zielona Góra wybielanie zębów Stomatolog Protezy acronowe',
    images: '/twitter-image.jpg'
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/oferta",
  }
}

export default function Oferta() {
  return (
    <>
      <Services />
      <ParallaxImg />
      <BefroreAfter />
    </>
  )
}
