import { useState } from "react";
import RightArrow from "../../assets/ArrowRight.svg";
import LeftArrow from "../../assets/ArrowLeft.svg";
import Construction from "../../assets/under-construction-yom.png";

const CarouselFour = () => {
  const images = [Construction];
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
          className="object-cover h-48 w-96" // fill to cover when pictures are added h-48 w-96**change
          loading="lazy"
        />
        <div className="flex justify-between mt-1">
          <img onClick={prevSlide} src={LeftArrow}></img>
          <img onClick={nextSlide} src={RightArrow}></img>
        </div>
      </div>
    </>
  );
};

export default CarouselFour;
