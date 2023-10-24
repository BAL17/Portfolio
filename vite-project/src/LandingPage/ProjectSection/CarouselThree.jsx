import React, { useState, useContext } from "react";
import RightArrow from "../../assets/BSRightArrow.svg";
import LeftArrow from "../../assets/BSLeftArrow.svg";
//import images for REI
import BITWIZ from "../../assets/REI/bitwiz.png"
import PRODUCTS from "../../assets/REI/products.png";
import TOPPAGE from "../../assets/REI/toppage.png";
import CARTMOD from "../../assets/REI/addtocart.png";

const CarouselThree = () => {
  const images = [ TOPPAGE, CARTMOD, PRODUCTS, BITWIZ,];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="image-slider">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="object-cover h-48 w-96"
        />
        <div className="flex justify-between mt-1">
          <img onClick={prevSlide} src={LeftArrow}></img>
          <img onClick={nextSlide} src={RightArrow}></img>
        </div>
      </div>
    </>
  );
};

export default CarouselThree;
