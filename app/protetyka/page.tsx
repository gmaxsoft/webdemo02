import Divider from '@/components/Divider';
import ProtetykaTag from '@/components/Protetyka';
import BefroreAfter from '@/components/BefroreAfter';
import ParallaxImg from '@/components/ParallaxImg';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Protetyka - Protetyka Zielona Góra, Dentysta Zielona Góra',
  description: 'Gabinet Stomatologiczny ArtDent Anna Miśków - Protetyka Zielona Góra, Protezy acronowe, korony cyrkonowe',
  keywords: 'stomatolog zielona góra, dentysta zielona góra. Protetyka, Protezy acronowe, Anna Miśków, korony cyrkonowe',
  creator: 'Maxsoft',
  publisher: 'Stomatolog - Dentysta',
  openGraph: {
    title: 'Protetyka - Protetyka Zielona Góra, Dentysta Zielona Góra',
    description: 'Gabinet Stomatologiczny ArtDent Anna Miśków - Protetyka Zielona Góra, Protezy acronowe, korony cyrkonowe',
    url: 'https://www.stomatolog-dentysta.pl/protetyka',
    siteName: 'ArtDent Dentysta Zielona Góra Stomatolog i protetyka Zielona Góra',
    locale: 'pl_PL',
    images: '/opengraph-image.jpg',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Protetyka - Protetyka Zielona Góra, Dentysta Zielona Góra',
    description: 'Gabinet Stomatologiczny ArtDent Anna Miśków - Protetyka Zielona Góra, Protezy acronowe, korony cyrkonowe',
    images: '/twitter-image.jpg'
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/protetyka",
  }
}

export default function Protetyka() {
  return (
    <>
      <Divider />
      <ProtetykaTag />
      <ParallaxImg />
      <BefroreAfter />
    </>
  )
}
