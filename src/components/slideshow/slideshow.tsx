"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import classes from "./slideshow.module.css";

const images = [
  { image: "/assets/burger.jpg", alt: "A delicious, juicy burger" },
  { image: "/assets/curry.jpg", alt: "A delicious, spicy curry" },
  { image: "/assets/dumplings.jpg", alt: "Steamed dumplings" },
  { image: "/assets/macncheese.jpg", alt: "Mac and cheese" },
  { image: "/assets/pizza.jpg", alt: "A delicious pizza" },
  { image: "/assets/schnitzel.jpg", alt: "A delicious schnitzel" },
  { image: "/assets/tomato-salad.jpg", alt: "A delicious tomato salad" },
];

export default function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          width={400}
          height={400}
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
