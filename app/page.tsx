import BootstrapCarousel from '@/components/BootstrapCarousel';
import TopInfo from '@/components/TopInfo';
import Services from '@/components/Services';
import ParallaxImgTop from '@/components/ParallaxImgTop';
import Info from '@/components/Info';
import ParallaxImg from '@/components/ParallaxImg';
import ContactMap from '@/components/ContactMap';

export default function Home() {
  return (
    <>
      <BootstrapCarousel />
      <TopInfo />
      <Services />
      <ParallaxImgTop />
      <Info />
      <ParallaxImg />
      <ContactMap />
    </>
  )
}
