import BootstrapCarousel from '@/components/BootstrapCarousel';
import TopInfo from '@/components/TopInfo';
import Services from '@/components/Services';
import ParallaxImgTop from '@/components/ParallaxImgTop';
import Info from '@/components/Info';
import ParallaxImg from '@/components/ParallaxImg';
import ContactMap from '@/components/ContactMap';
//import { headers } from "next/headers";
//import Script from "next/script";

export default function Home() {

  //const nonce = headers().get("x-nonce");
  //<Script src="https://..." strategy="afterInteractive" nonce={nonce} />;
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
