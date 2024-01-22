"use client"

import { SetStateAction, useState } from "react";
import { items } from "@/public/json/Slider.json";
import { Carousel } from "react-bootstrap";

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  

  const handleSelect = (selectedIndex: SetStateAction<any | null>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="slider d-none d-sm-block">
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className="item" interval={4000}>
          <img src={item.imageUrl} alt="slides" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}