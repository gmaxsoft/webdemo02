import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import "@/public/css/all.min.css"; 
import "@/styles/scss/flaticon/flaticon.css"
import '@/styles/scss/style.scss'

import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import TopInfo from '@/components/TopInfo';
import Services from '@/components/Services';
import ParallaxImgTop from '@/components/ParallaxImgTop';
import ParallaxImg from '@/components/ParallaxImg';
import GoogleMapTxt from '@/components/GoogleMapTxt';
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import BootstrapClient from '@/components/BootstrapClient'

const poppins = Poppins({
  weight: ['300','400','500','600','700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Dentysta Zielona Góra - Anna Miśków, Stomatolog Zielona Góra, dentysta zielona góra, Protezy acronowe, Protezy',
  description: 'Dentysta Zielona Góra, stomatolog Zielona Góra,korony cyrkonowe,Gabinet Stomatologiczny Anna Miśków, dentysta zielona Góra, Stomatologia zielona góra, dentysta Anna Miśków, Protezy acronowe (elastyczne)',
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
        <TopInfo />
        <Services />
        <ParallaxImgTop />
        {children}
        <ParallaxImg />
        <GoogleMapTxt />
        <Footer />
        <ScrollToTopButton />
        <BootstrapClient />
      </body>
    </html>
  )
}
