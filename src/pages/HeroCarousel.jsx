import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HeroCarousel = () => {
  const images = ["/firstImage.jpg", "/secondImage.jpg", "/thirdImage.jpg"];

  return (
    <Slide duration={3000} autoplay={true} arrows={false}>
    {images.map((image, index) => (
      <div className="each-slide-effect" key={index}>
        <div
          className="slide-image bg-top sm:bg-center md:bg-top lg:bg-top object-contain"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    ))}
  </Slide>
  );
};

export default HeroCarousel;
