import { useState } from "react";
import RightArrow from "../../assets/ArrowRight.svg";
import LeftArrow from "../../assets/ArrowLeft.svg";
//import images for REI
import PRODUCTS from "../../assets/REI/products.png";
import TOPPAGE from "../../assets/REI/toppage.png";
import CARTMOD from "../../assets/REI/addtocart.png";
import BotLinks from "../../assets/REI/botRei.png";

const CarouselThree = () => {
  const images = [TOPPAGE, CARTMOD, PRODUCTS, BotLinks];
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
          loading="lazy"
        />
        <div className="flex justify-between mt-1">
          <img
            className="hover:cursor-pointer"
            onClick={prevSlide}
            src={LeftArrow}
          ></img>
          <img
            className="hover:cursor-pointer"
            onClick={nextSlide}
            src={RightArrow}
          ></img>
        </div>
      </div>
    </>
  );
};

export default CarouselThree;
