"use client"

import { SetStateAction, useState } from "react";
import Jsoncards from "@/public/json/Slider.json";
import { Carousel } from "react-bootstrap";
import Image from 'next/image';

export default function BootstrapCarousel() {
  const { bootstrap } = Jsoncards.cards;
  const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex: SetStateAction<any | null>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="slider d-none d-sm-block">
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className="item" interval={4000}>
          <Image
            src={item.imageUrl}
            alt="Baner Stomatolog Dentysta"
            fetchPriority="high"
            width={1920}
            height={750}
            style={{ width: '100%', height: 'auto', maxWidth: '1920px', maxHeight: '750px' }}
            priority
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}